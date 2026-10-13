Write-Host "Starting DS LAB..." -ForegroundColor Magenta
py -m pip install -r "$PSScriptRoot\server\requirements.txt"
Start-Process powershell -ArgumentList "-NoExit", "-ExecutionPolicy", "Bypass", "-Command", "Set-Location '$PSScriptRoot'; py server\server.py"
Start-Sleep -Seconds 2
npm.cmd run dev
