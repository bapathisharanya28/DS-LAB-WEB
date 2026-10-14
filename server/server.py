import http.server
import socketserver
import json
import subprocess
import sys
import os
import tempfile
import time
import urllib.request
from urllib.parse import urlparse

PORT = 5050
STATE_FILE = os.path.join(os.path.dirname(__file__), "data", "site-state.json")
IRIS_CACHE_FILE = os.path.join(os.path.dirname(__file__), "data", "iris.csv")
IRIS_DATASET_URL = "https://raw.githubusercontent.com/mwaskom/seaborn-data/master/iris.csv"

# Create sample dataset in current directory so users can run pd.read_csv("students.csv")
SAMPLE_CSV_CONTENT = """id,name,age,grade,score,attendance
1,Alice,20,A,92.5,96.0
2,Bob,21,B,84.0,88.5
3,Charlie,22,A,95.0,99.0
4,Diana,20,C,72.5,75.0
5,Evan,21,B,88.0,91.0
6,Fiona,20,A,91.0,94.5
7,George,23,B,81.5,82.0
8,Hannah,21,A,96.5,98.0
9,Ian,22,C,74.0,79.5
10,Julia,20,A,94.0,95.0
"""

RUNNER_TEMPLATE = r'''
import sys
import os
import io
import json
import base64
import time
import traceback

# Setup non-interactive Matplotlib backend
try:
    import matplotlib
    matplotlib.use('Agg')
    import matplotlib.pyplot as plt
    HAS_MATPLOTLIB = True
except Exception:
    HAS_MATPLOTLIB = False

captured_images = []

def capture_current_figures():
    if not HAS_MATPLOTLIB:
        return
    try:
        fignums = plt.get_fignums()
        for num in fignums:
            fig = plt.figure(num)
            buf = io.BytesIO()
            fig.savefig(buf, format='png', bbox_inches='tight', dpi=140)
            buf.seek(0)
            b64_str = base64.b64encode(buf.read()).decode('utf-8')
            captured_images.append(f"data:image/png;base64,{b64_str}")
            buf.close()
        plt.close('all')
    except Exception as e:
        sys.stderr.write(f"\n[Warning capturing figure: {e}]\n")

if HAS_MATPLOTLIB:
    # Patch plt.show to capture images
    def custom_show(*args, **kwargs):
        capture_current_figures()
    plt.show = custom_show

# Intercept stdout and stderr
stdout_capture = io.StringIO()
stderr_capture = io.StringIO()
old_stdout = sys.stdout
old_stderr = sys.stderr

sys.stdout = stdout_capture
sys.stderr = stderr_capture

start_time = time.time()
error_msg = None
success = True

# User code placeholder
USER_CODE = """{CODE_ESCAPED}"""

# Global namespace
env_globals = {
    '__name__': '__main__',
    '__file__': 'experiment.py',
}

try:
    compiled = compile(USER_CODE, '<experiment>', 'exec')
    exec(compiled, env_globals)
    # Capture any figures created without explicit plt.show()
    capture_current_figures()
except Exception:
    success = False
    exc_type, exc_val, exc_tb = sys.exc_info()
    formatted_tb = traceback.format_exception(exc_type, exc_val, exc_tb)
    # Filter internal runner lines from traceback for clean user experience
    clean_lines = [l for l in formatted_tb if '<experiment>' in l or not ('runner.py' in l or 'server.py' in l)]
    error_msg = "".join(clean_lines).strip()
    if not error_msg:
        error_msg = "".join(formatted_tb).strip()
finally:
    sys.stdout = old_stdout
    sys.stderr = old_stderr

elapsed = round(time.time() - start_time, 3)

output_data = {
    "success": success,
    "stdout": stdout_capture.getvalue(),
    "stderr": stderr_capture.getvalue(),
    "error": error_msg,
    "images": captured_images,
    "executionTime": elapsed,
    "engine": "Native Python Runtime"
}

print("###DS_LAB_OUTPUT_START###")
print(json.dumps(output_data))
print("###DS_LAB_OUTPUT_END###")
'''

class PythonExecutionHandler(http.server.BaseHTTPRequestHandler):
    def _send_cors_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')

    def do_OPTIONS(self):
        self.send_response(204)
        self._send_cors_headers()
        self.end_headers()

    def do_GET(self):
        parsed = urlparse(self.path)
        if parsed.path == '/api/state':
            self.send_state()
        elif parsed.path in ['/api/health', '/health']:
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self._send_cors_headers()
            self.end_headers()
            
            # Check installed packages
            packages = []
            for pkg in ['numpy', 'pandas', 'matplotlib', 'seaborn', 'scipy', 'requests', 'openpyxl', 'bs4', 'lxml']:
                try:
                    __import__(pkg)
                    packages.append(pkg)
                except ImportError:
                    pass

            response = {
                "status": "online",
                "pythonVersion": sys.version.split()[0],
                "packages": packages,
                "engine": "Native Python Local Execution Server"
            }
            self.wfile.write(json.dumps(response).encode('utf-8'))
        else:
            self.send_response(404)
            self._send_cors_headers()
            self.end_headers()
            self.wfile.write(b'{"error": "Not found"}')

    def do_POST(self):
        parsed = urlparse(self.path)
        if parsed.path == '/api/state':
            self.save_state()
        elif parsed.path in ['/api/execute', '/execute']:
            content_length = int(self.headers.get('Content-Length', 0))
            body = self.rfile.read(content_length).decode('utf-8')
            
            try:
                data = json.loads(body)
                code = data.get('code', '')
            except Exception as e:
                self.send_response(400)
                self.send_header('Content-Type', 'application/json')
                self._send_cors_headers()
                self.end_headers()
                self.wfile.write(json.dumps({"error": f"Invalid JSON payload: {str(e)}"}).encode('utf-8'))
                return

            result = self.execute_python_code(code)
            
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self._send_cors_headers()
            self.end_headers()
            self.wfile.write(json.dumps(result).encode('utf-8'))
        else:
            self.send_response(404)
            self._send_cors_headers()
            self.end_headers()
            self.wfile.write(b'{"error": "Not found"}')

    def send_state(self):
        try:
            with open(STATE_FILE, "r", encoding="utf-8") as state_file:
                state = json.load(state_file)
        except FileNotFoundError:
            self.send_response(404)
            self._send_cors_headers()
            self.end_headers()
            self.wfile.write(b'{"error": "No saved website state"}')
            return
        except (OSError, json.JSONDecodeError) as error:
            self.send_error(500, f"Unable to read website state: {error}")
            return

        self.send_json_response(200, state)

    def save_state(self):
        content_length = int(self.headers.get('Content-Length', 0))
        body = self.rfile.read(content_length).decode('utf-8')

        try:
            state = json.loads(body)
            if not isinstance(state, dict):
                raise ValueError("Website state must be a JSON object.")
            os.makedirs(os.path.dirname(STATE_FILE), exist_ok=True)
            temporary_file = f"{STATE_FILE}.tmp"
            with open(temporary_file, "w", encoding="utf-8") as state_file:
                json.dump(state, state_file, indent=2, ensure_ascii=False)
                state_file.write("\n")
            os.replace(temporary_file, STATE_FILE)
        except (OSError, ValueError, json.JSONDecodeError) as error:
            self.send_error(400, f"Unable to save website state: {error}")
            return

        self.send_json_response(200, {"saved": True, "file": STATE_FILE})

    def send_json_response(self, status_code, payload):
        self.send_response(status_code)
        self.send_header('Content-Type', 'application/json')
        self._send_cors_headers()
        self.end_headers()
        self.wfile.write(json.dumps(payload).encode('utf-8'))

    def execute_python_code(self, code):
        # Create temp execution directory containing sample datasets
        with tempfile.TemporaryDirectory() as tmpdir:
            csv_path = os.path.join(tmpdir, "students.csv")
            with open(csv_path, "w", encoding="utf-8") as f:
                f.write(SAMPLE_CSV_CONTENT)
            if "iris.csv" in code:
                self.ensure_iris_cache()
                with open(IRIS_CACHE_FILE, "rb") as source_file, open(
                    os.path.join(tmpdir, "iris.csv"), "wb"
                ) as cache_file:
                    cache_file.write(source_file.read())

            # Prepare runner script
            # Escaping code safely
            escaped_code = code.replace('\\', '\\\\').replace('"""', r'\"\"\"')
            runner_content = RUNNER_TEMPLATE.replace('{CODE_ESCAPED}', escaped_code)
            
            runner_path = os.path.join(tmpdir, "runner.py")
            with open(runner_path, "w", encoding="utf-8") as f:
                f.write(runner_content)

            try:
                proc = subprocess.run(
                    [sys.executable, runner_path],
                    cwd=tmpdir,
                    capture_output=True,
                    text=True,
                    timeout=20
                )

                output_str = proc.stdout
                start_marker = "###DS_LAB_OUTPUT_START###"
                end_marker = "###DS_LAB_OUTPUT_END###"

                if start_marker in output_str and end_marker in output_str:
                    json_str = output_str.split(start_marker)[1].split(end_marker)[0].strip()
                    return json.loads(json_str)
                else:
                    return {
                        "success": False,
                        "stdout": proc.stdout,
                        "stderr": proc.stderr,
                        "error": proc.stderr or "Script execution failed or timed out unexpectedly.",
                        "images": [],
                        "executionTime": 0.0,
                        "engine": "Native Python Runtime"
                    }

            except subprocess.TimeoutExpired:
                return {
                    "success": False,
                    "stdout": "",
                    "stderr": "",
                    "error": "Execution timed out (exceeded 20 seconds limit).",
                    "images": [],
                    "executionTime": 20.0,
                    "engine": "Native Python Runtime"
                }
            except Exception as e:
                return {
                    "success": False,
                    "stdout": "",
                    "stderr": "",
                    "error": f"Server execution error: {str(e)}",
                    "images": [],
                    "executionTime": 0.0,
                    "engine": "Native Python Runtime"
                }

    def ensure_iris_cache(self):
        if os.path.isfile(IRIS_CACHE_FILE):
            return

        os.makedirs(os.path.dirname(IRIS_CACHE_FILE), exist_ok=True)
        temporary_file = f"{IRIS_CACHE_FILE}.tmp"
        try:
            with urllib.request.urlopen(IRIS_DATASET_URL, timeout=15) as response:
                with open(temporary_file, "wb") as cache_file:
                    cache_file.write(response.read())
            os.replace(temporary_file, IRIS_CACHE_FILE)
        except Exception:
            if os.path.exists(temporary_file):
                os.remove(temporary_file)
            raise

def run_server():
    server_address = ('', PORT)
    # Enable address reuse to avoid port binding errors on restarts
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(server_address, PythonExecutionHandler) as httpd:
        print(f"DS LAB Python Execution Server running on http://localhost:{PORT}")
        print(f"Python interpreter: {sys.executable}")
        httpd.serve_forever()

if __name__ == '__main__':
    run_server()
