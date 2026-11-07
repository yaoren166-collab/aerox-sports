/**
 * =========================================================================
 *  AEROX ATHLETICS - JOJO 風格 AI 智慧客服 (Google Apps Script 後端)
 *  串接 OpenRouter API
 * =========================================================================
 * 
 * 【OpenRouter API Key 設定位置】：
 * 請將下方的 OPENROUTER_API_KEY 替換為您的金鑰（預設已為您填入）。
 */

// 🔑 1. OpenRouter API 金鑰 (請在下方引號中貼上您的 OpenRouter 金鑰)
const OPENROUTER_API_KEY = "YOUR_OPENROUTER_API_KEY_HERE";

// 🤖 2. 選擇 AI 模型 (推薦速度極快且聰明的模型)
const MODEL_NAME = "google/gemini-2.0-flash-001"; // 亦可選用 "openai/gpt-4o-mini" 或 "meta-llama/llama-3.3-70b-instruct"

// ⚡ 3. JOJO 風格與 AEROX 運動品牌全方位知識庫 System Prompt
const SYSTEM_PROMPT = `你現在是 AEROX ATHLETICS 官方旗艦店的專屬 AI 客服顧問——「空條承動 (Jotaro Aerox)」，擁有頂級替身能力【極限白金星 (Star Platinum: Kinetic)】！

【人設與 JOJO 經典風格】：
- 你說話帶著《JOJO的奇妙冒險》的熱血、帥氣、自信與標誌性口頭禪（如：「真是夠了...（やれやれだぜ）」、「你的這雙腿，已經進入打破 PB 的射程範圍了！」、「這個折扣...毫無破綻！『GGG777』將為你斬斷 70% 的價格障礙！ドドド...」）。
- 雖然風格非常 JOJO，但對待客人的問題必須【極度專業、熱情、清晰且精準】，熟悉 AEROX 官網的一切細節！

【AEROX 官方旗艦店核心知識庫】：
1. 品牌理念：AEROX® ATHLETICS（極限動能，無界超越），以航太力學與生物工程重構運動裝備標準。
2. 超狂折扣碼：【GGG777】結帳現打 3 折（現省 70%！）。全館滿 NT$ 2,500 即享免運（未達門檻運費 NT$ 150）。另有代碼【AEROX2026】打 85 折。
3. 七大運動專區（全站共 21 款旗艦裝備，每類 3 款）：
   • 🏃 路跑競速：SPEED-X CARBON ELITE（雙叉全掌碳板跑鞋，原價NT$5980/3折特惠NT$1794）、STRIDE-FLOW 2.0（日常長距離雙密度緩震跑鞋，原價NT$4280/3折特惠NT$1284）、RACER-AIR（48g超羽量競賽背心，原價NT$1680/3折特惠NT$504）。
   • 🏋️ 重訓體能：CORE-FORCE CROSS-TRAINER（4mm低落差深蹲防側翻訓練鞋，原價NT$3880/3折特惠NT$1164）、APEX-PRO（漸進加壓機能短袖，原價NT$2180/3折特惠NT$654）、TITAN-LIFT（10mm植鞣牛皮快扣舉重腰帶，原價NT$3280/3折特惠NT$984）。
   • 🏔️ 越野戶外：TERRA-CLAW GTX（GORE-TEX防水深爪越野鞋，原價NT$5280/3折特惠NT$1584）、STORM-SHIELD（防風暴雨超輕夾克，原價NT$3680/3折特惠NT$1104）、TRAIL-VENT PRO（360度能量膠收納越野短褲，原價NT$1980/3折特惠NT$594）。
   • 🏀 籃球運動：FLIGHT-ZONE HIGH（雙氣室高回彈高筒球鞋，原價NT$4680/3折特惠NT$1404）、COURT-MASTER（美式重磅網眼復古球褲，原價NT$1580/3折特惠NT$474）、KNEE-ARMOR PRO（蜂巢矽膠減震運動護膝，原價NT$980/3折特惠NT$294）。
   • 🏸 羽網球拍類：COURT-ACE PRO（天然生膠無痕防滑球鞋，原價NT$3980/3折特惠NT$1194）、GRAND-SLAM（四向高彈抗皺運動POLO，原價NT$1880/3折特惠NT$564）、VORTEX-900（六角破風框全碳羽球拍最高可拉32磅，原價NT$4580/3折特惠NT$1374）。
   • 🧘 瑜珈塑身：CLOUD-TOUCH（裸感微磨毛高腰提臀褲，原價NT$1980/3折特惠NT$594）、ZEN-FLOW（幾何交叉美背高支撐Bra，原價NT$1480/3折特惠NT$474）、ECO-GRIP（天然橡膠6mm激光正位瑜珈墊，原價NT$2480/3折特惠NT$744）。
   • 🎒 裝備配件：KINETIC PRO（48L獨立通風鞋倉訓練背包，原價NT$2680/3折特惠NT$804）、TITANIUM-FLOW（99.8%純鈦保冰保溫水壺800ML，原價NT$1480/3折特惠NT$444）、PULSE-PRO（12mm深層振幅大扭力筋膜按摩槍，原價NT$3880/3折特惠NT$1164）。
4. 四大專利黑科技：CarbonX-Blade™ 全掌雙叉碳纖板（+38%推進力）、NitroFoam™ Gen3 氮氣超臨界發泡（89.2%能量反饋）、BreatheWeave™ 3.0 雷射分區呼吸網布、Vortex-Grip™ 賽車級全天候濕地大底。
5. 服務與退換承諾：業界最高標「30 天無條件試跑退換保障」（落地試跑若不合適皆可退換），24 小時極速發貨，黑貓宅配 1~2 天到府。

【回覆準則】：
- 一律使用繁體中文（台灣口吻）。
- 帥氣、幽默、充滿力量感，精準擊中客人問題（控制在 120 ~ 220 字左右，方便小螢幕閱讀）。
- 結尾可適當帶有熱血鼓舞與招牌替身音效（如：ゴゴゴ... 或 ドドド...）！`;

/**
 * 接收前端 GitHub 網站傳入的 POST 請求
 */
function doPost(e) {
  try {
    const rawData = e.postData ? e.postData.contents : "{}";
    const requestData = JSON.parse(rawData);
    const userMessage = requestData.message || "";
    const conversationHistory = requestData.history || [];

    if (!userMessage) {
      return createJsonResponse({ error: "訊息不能為空！" });
    }

    // 組裝對話上下文
    const messages = [
      { role: "system", content: SYSTEM_PROMPT },
      ...conversationHistory.slice(-6), // 攜帶最近 6 則對話紀錄，保持上下文連貫
      { role: "user", content: userMessage }
    ];

    const openRouterPayload = {
      model: MODEL_NAME,
      messages: messages,
      temperature: 0.7,
      max_tokens: 500
    };

    const options = {
      method: "post",
      headers: {
        "Authorization": "Bearer " + OPENROUTER_API_KEY,
        "HTTP-Referer": "https://yaoren166-collab.github.io/aerox-sports/",
        "X-Title": "AEROX JOJO Customer Support",
        "Content-Type": "application/json"
      },
      payload: JSON.stringify(openRouterPayload),
      muteHttpExceptions: true
    };

    // 調用 OpenRouter API
    const response = UrlFetchApp.fetch("https://openrouter.ai/api/v1/chat/completions", options);
    const result = JSON.parse(response.getContentText());

    if (result.error) {
      return createJsonResponse({
        reply: `【替身能量警報】API 調用失敗：${result.error.message || '請檢查 OpenRouter 餘額或金鑰'}`
      });
    }

    const replyText = result.choices && result.choices[0] && result.choices[0].message
      ? result.choices[0].message.content
      : "【ドドド...】目前替身精神力波動，請稍後再問一次！";

    return createJsonResponse({ reply: replyText });

  } catch (error) {
    return createJsonResponse({
      reply: `【替身受阻】後端發生異常：${error.toString()}（已為您啟動本機防護模式）`
    });
  }
}

/**
 * GET 測試接口 (用於在瀏覽器確認 GAS 是否部署成功)
 */
function doGet(e) {
  return createJsonResponse({
    status: "success",
    message: "AEROX JOJO AI Support Backend is ONLINE! ゴゴゴ...",
    timestamp: new Date().toISOString()
  });
}

/**
 * 輔助函數：輸出標準 JSON 回應 (支援跨來源 CORS)
 */
function createJsonResponse(data) {
  return ContentService.createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
