@echo off
chcp 65001 >nul
echo ========================================================
echo       AEROX ATHLETICS - GitHub 一鍵推送發布助手
echo ========================================================
echo.
echo 請確保您已經在 GitHub (https://github.com/new) 建立好 Repository！
echo.
set /p REPO_URL="請貼上您的 GitHub 儲存庫網址 (例如 https://github.com/YourName/aerox-sports.git): "

if "%REPO_URL%"=="" (
    echo [錯誤] 網址不能為空！
    pause
    exit /b
)

echo.
echo 正在設定遠端倉庫並推送代碼...
"C:\Program Files\Git\cmd\git.exe" remote remove origin 2>nul
"C:\Program Files\Git\cmd\git.exe" remote add origin %REPO_URL%
"C:\Program Files\Git\cmd\git.exe" branch -M main
"C:\Program Files\Git\cmd\git.exe" push -u origin main

echo.
if %ERRORLEVEL% EQU 0 (
    echo [成功] 專案代碼已成功推送到 GitHub！
    echo.
    echo 下一步：開啟 GitHub Pages 免費上線：
    echo 1. 前往您倉庫頁面右上角的 Settings
    echo 2. 點選左側 Pages
    echo 3. Branch 選擇 main，Folder 選擇 /(root)，點擊 Save
    echo 4. 等待 1 分鐘即可擁有專屬線上官網網址！
) else (
    echo [提示] 推送過程中可能需要驗證 GitHub 登入帳號密碼或 Token。
)
echo.
pause
