@echo off
chcp 65001 >nul
setlocal
cd /d "%~dp0\.."

if "%~1"=="" (
  echo.
  echo Перетащите .txt-файл со скопированной страницей GitHub на этот .bat
  echo.
  echo Или сделайте так:
  echo   1. Откройте страницу GitHub в браузере
  echo   2. Ctrl+A, Ctrl+C
  echo   3. Откройте Блокнот, Ctrl+V, сохраните как input.txt в папке tools
  echo   4. Перетащите input.txt на этот .bat
  echo.
  pause
  exit /b 1
)

where node >nul 2>nul
if errorlevel 1 (
  echo.
  echo Не найден Node.js. Скачайте LTS: https://nodejs.org/ru
  echo.
  pause
  exit /b 1
)

node "tools\check-missing.js" "%~1"
echo.
pause
