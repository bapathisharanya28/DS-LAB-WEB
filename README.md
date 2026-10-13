# DS Lab — Version 13

## Start the website

1. Extract the ZIP archive.
2. Open the extracted folder in VS Code.
3. In a terminal, run:

   ```powershell
   npm.cmd install
   npm.cmd run dev:full
   ```

4. Open the local URL shown by Vite (usually `http://localhost:5173`).

## Save website edits to the project folder

The full launcher starts both the Python execution server and Vite:

```powershell
py -m pip install -r server\requirements.txt
py server\server.py
```

If you start Vite manually with `npm.cmd run dev`, start the Python server in a second terminal using the command above. The **Run Code** button requires the Python server at `http://localhost:5050`.

When the server is running, edits made through the website (profile, modules, experiments, projects, theme, and tools content) are saved to:

```text
server\data\site-state.json
```

The site loads this file again on startup, so changes are available after refreshing the browser or clearing browser storage. If the server is not running, the site continues to use localStorage as an offline fallback. The JSON file is created automatically after the first successful save.

## Version 14 updates

- Tools opens a responsive grid of eight Data Science platform cards. Selecting a card opens that platform's official website in a new browser tab.
- Uploaded module PDFs continue to open in the in-site PDF reader, now with a paper/book treatment and page-turn animation plus Previous/Next controls.
- The student ID card's View More action opens a full-page portfolio inside DS Lab, with education, technical skills, leadership activities, contact links, and the Stock Day Tracker and CivicConnect projects.
- Website changes are synchronized to `server\data\site-state.json` through the local backend.
- Existing modules, experiments, project management, theme, and backend structure are retained.

Note: the server is intentionally local. A browser cannot directly rewrite JavaScript source files, so editable website data is stored in the project-local JSON state file instead of modifying bundled source code.
