# AEROX® Athletics 頂級運動品牌官方網站

> **IGNITE THE IMPOSSIBLE** 突破極限，重構動能。  
> 專為競速馬拉松、核心體能訓練、全地形越野機能打造的國際級頂尖運動品牌官方網站。

---

## ✨ 網站核心亮點與特色

- ⚡ **黑科技運動美學視覺**：賽博電光綠 (`#CCFF00`) + 深邃碳纖維黑 (`#08090C`)，搭配 Glassmorphism 毛玻璃懸浮導航與動態微互動。
- 👟 **多維度商品展示與即時互動**：
  - **即時換色系統 (Colorway Switcher)**：點擊顏色色票即時切換鞋款與裝備配色圖片。
  - **尺寸規格選擇 (Size Picker)**：即時切換鞋碼與服飾尺碼。
  - **快速預覽彈窗 (Quick View Modal)**：深度檢視前後掌落差、重量、碳板科技與多角度細節圖。
  - **商品分類篩選與即時排序**：競速路跑、核心訓練、機能服飾、全地形越野、配件。
- 🔍 **全站即時極速搜尋 (Spotlight Search)**：支援快捷鍵 `⌘K` / `Ctrl+K`，輸入即時模糊比對產品、黑科技與分類。
- 🛒 **完整購物車與結帳體驗 (Cart & Checkout)**：
  - 滿額免運進度提示條（滿 NT$ 2,500 即享免運）。
  - 數量增減、商品移除、LocalStorage 自動保存。
  - 折扣代碼系統（輸入 `GGG777` 享 3 折超值尊榮優惠、`AEROX2026` 現折 15%、`FREESHIP` 免運）。
  - 一鍵安全結帳彈窗與訂單編號生成、慶祝彩帶特效。
- 🧭 **AEROX LAB 智慧裝備挑選顧問 (Gear Finder)**：
  - 3 步驟互動式問答：運動目標 -> 腳感偏好 -> 訓練頻率。
  - 智慧演算法即時匹配最適合的旗艦裝備，並支援「一鍵將推薦裝備加入購物車」。
- 🌐 **多幣別動態即時切換 (Multi-Currency)**：
  - 支援 TWD (NT$)、USD ($)、EUR (€)、JPY (¥)，切換後全站商品、購物車與結帳金額全自動同步換算。
- 🏃 **菁英運動員見證與四大專利黑科技展示**：
  - `CARBONX-BLADE™` 雙叉碳纖維推進板
  - `NITROFOAM™ GEN3` 超臨界物理發泡中底
  - `BREATHEWEAVE™ 3.0` 雷射分區編織鞋面
  - `VORTEX-GRIP™` 全天候濕地仿生吸盤橡膠
- 📱 **100% 響應式設計**：完美支援手機、平板、筆電與大螢幕桌機。

---

## 🚀 如何在本地預覽網站

可以直接使用任何瀏覽器打開：
1. 進入本專案資料夾：`C:\Users\User\.gemini\antigravity\scratch\aerox-sports`
2. 雙擊滑鼠左鍵打開 **`index.html`**，即可直接在 Chrome、Edge、Firefox 或 Brave 瀏覽器中完整體驗！

---

## 📤 如何將網站發布到 GitHub & 免費啟用 GitHub Pages

本專案目錄已經為您預先初始化好 Git 倉庫 (`git init`)。只要執行以下簡單三步，即可推送到您的 GitHub 並免費擁有專屬線上網址：

### 第一步：在 GitHub 上建立一個新的儲存庫 (Repository)
1. 打開瀏覽器前往 [https://github.com/new](https://github.com/new)
2. 在 **Repository name** 輸入例如：`aerox-sports`
3. 設為 **Public**（公開）
4. **不要**勾選 "Add a README file"（因為我們已經有了）
5. 點擊綠色的 **"Create repository"** 按鈕。

### 第二步：推送代碼到 GitHub
在終端機（PowerShell 或 CMD）中切換至專案目錄，並執行以下指令（將 `<您的GitHub帳號名稱>` 替換為您的帳號）：

```bash
cd "C:\Users\User\.gemini\antigravity\scratch\aerox-sports"
git add .
git commit -m "feat: complete AEROX official sports brand website"
git branch -M main
git remote add origin https://github.com/<您的GitHub帳號名稱>/aerox-sports.git
git push -u origin main
```

### 第三步：一鍵開啟 GitHub Pages 線上網站
1. 進入您剛建立的 GitHub 倉庫頁面，點擊上方的 **Settings**（設定）。
2. 在左側選單點選 **Pages**。
3. 在 **Branch** 下拉選單中選擇 **`main`**，資料夾選擇 **`/(root)`**。
4. 點擊 **Save**。
5. 等待約 1 分鐘，GitHub 就會自動產生專屬網址：  
   `https://<您的GitHub帳號名稱>.github.io/aerox-sports/`
   
任何人只要點開此網址，就能立即看見您打造的頂級運動品牌官方網站！

---

## 📁 專案檔案結構

```
aerox-sports/
├── index.html              # 官方網站主頁 (語意化 HTML5 + Tailwind CSS)
├── assets/
│   ├── css/
│   │   └── custom.css      # 品牌字型、發光特效、霓虹邊框、動畫關鍵幀
│   └── js/
│       ├── data.js         # 商品數據、專利科技、運動員、問卷與匯率資料
│       └── app.js          # 購物車、願望清單、搜尋、篩選、問卷、結帳核心邏輯
├── .gitignore              # Git 忽略配置
└── README.md               # 專案說明與 GitHub 部署指南
```
