/**
 * AEROX SPORTS BRAND - DATA REPOSITORY
 * 7 Sports Categories x 3 Products Each (21 Products Total)
 */

window.AEROX_DATA = {
  currencies: {
    TWD: { symbol: 'NT$', rate: 1, decimals: 0 },
    USD: { symbol: '$', rate: 0.032, decimals: 2 },
    EUR: { symbol: '€', rate: 0.029, decimals: 2 },
    JPY: { symbol: '¥', rate: 4.85, decimals: 0 }
  },

  categories: [
    { id: 'all', nameZh: '全部商品', nameEn: 'All Gear' },
    { id: 'running', nameZh: '🏃 路跑競速', nameEn: 'Running' },
    { id: 'training', nameZh: '🏋️ 重訓體能', nameEn: 'Gym & Training' },
    { id: 'outdoor', nameZh: '🏔️ 越野戶外', nameEn: 'Trail & Outdoor' },
    { id: 'basketball', nameZh: '🏀 籃球運動', nameEn: 'Basketball' },
    { id: 'racket', nameZh: '🏸 羽網球拍類', nameEn: 'Racket Sports' },
    { id: 'yoga', nameZh: '🧘 瑜珈塑身', nameEn: 'Yoga & Pilates' },
    { id: 'accessories', nameZh: '🎒 裝備配件', nameEn: 'Gear & Tech' }
  ],

  products: [
    /* ==============================================================
       1. 🏃 路跑競速 (RUNNING - 3 ITEMS)
       ============================================================== */
    {
      id: 'ax-run-01',
      name: 'AEROX SPEED-X CARBON ELITE',
      subname: '旗艦全掌雙叉碳板競速跑鞋',
      category: 'running',
      price: 5980,
      originalPrice: 6800,
      isNew: true,
      isHot: true,
      badge: 'PRO LAB 認證',
      rating: 4.9,
      reviewsCount: 238,
      weight: '172g (US 9)',
      drop: '8mm 落差',
      stack: '39.5mm 前掌 / 31.5mm 後跟',
      description: '為全馬破三與打破個人紀錄（PB）而生。搭載雙叉仿生 CarbonX-Blade™ 全掌碳板與超臨界物理發泡 NitroFoam™，提供高達 89.2% 的回彈動能，每一步都在引爆極限。',
      tech: ['CarbonX-Blade™ 雙叉碳板', 'NitroFoam™ Gen3 氮氣發泡', 'Vortex-Grip™ 濕地大底'],
      sizes: ['US 7.5', 'US 8', 'US 8.5', 'US 9', 'US 9.5', 'US 10', 'US 10.5', 'US 11'],
      colors: [
        {
          nameZh: '極速電光綠 / 碳纖黑',
          nameEn: 'Volt Lime / Stealth Black',
          code: '#CCFF00',
          image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80',
          secondaryImage: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=900&q=80'
        },
        {
          nameZh: '火焰赤紅 / 幻影白',
          nameEn: 'Solar Crimson / Ghost White',
          code: '#FF3366',
          image: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&w=900&q=80',
          secondaryImage: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&w=900&q=80'
        },
        {
          nameZh: '極光賽博藍 / 鈦銀',
          nameEn: 'Cyber Cyan / Titanium',
          code: '#00F0FF',
          image: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=900&q=80',
          secondaryImage: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=900&q=80'
        }
      ]
    },
    {
      id: 'ax-run-02',
      name: 'AEROX STRIDE-FLOW 2.0',
      subname: '日常長距離緩震巡航跑鞋',
      category: 'running',
      price: 4280,
      originalPrice: 4800,
      isNew: false,
      isHot: true,
      badge: '銷量冠軍',
      rating: 4.8,
      reviewsCount: 412,
      weight: '235g (US 9)',
      drop: '10mm 落差',
      stack: '36mm 前掌 / 26mm 後跟',
      description: 'LSD 長距離日常訓練的首選夥伴。升級雙密度 CloudComfort™ 中底，在每一次落腳瞬間溫柔吸收震動衝擊，保護膝蓋與阿基里斯腱。',
      tech: ['CloudComfort™ 雙密度緩震', 'BreatheWeave™ 呼吸網布', 'DuraRubber™ 耐磨大底'],
      sizes: ['US 7.5', 'US 8', 'US 8.5', 'US 9', 'US 9.5', 'US 10', 'US 11'],
      colors: [
        {
          nameZh: '冰霜天藍 / 純白',
          nameEn: 'Glacier Blue / Pure White',
          code: '#38BDF8',
          image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=900&q=80',
          secondaryImage: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=900&q=80'
        },
        {
          nameZh: '暗夜黑曜 / 螢光點綴',
          nameEn: 'Obsidian Black / Volt',
          code: '#18181B',
          image: 'https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?auto=format&fit=crop&w=900&q=80',
          secondaryImage: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80'
        }
      ]
    },
    {
      id: 'ax-run-03',
      name: 'AEROX RACER-AIR 超羽量競速背心',
      subname: '無痕超輕量馬拉松專用背心',
      category: 'running',
      price: 1680,
      originalPrice: 2100,
      isNew: true,
      isHot: false,
      badge: '超輕 48g',
      rating: 4.9,
      reviewsCount: 164,
      weight: '48g 極致羽量',
      drop: '雷射熱貼合無縫鎖邊',
      stack: '抗紫外線 UPF 40+',
      description: '全馬競速無感貼合。全衣雷射微孔散熱矩陣，遇汗不黏身，側邊無縫線熱壓工藝，徹底告別長距離跑步摩擦胸口不適。',
      tech: ['ZeroFriction™ 無縫工藝', 'DryQuick-Matrix 瞬間排汗', '360° 反光夜跑晶片'],
      sizes: ['S', 'M', 'L', 'XL'],
      colors: [
        {
          nameZh: '極光螢光黃',
          nameEn: 'Volt Neon',
          code: '#CCFF00',
          image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80',
          secondaryImage: 'https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&w=900&q=80'
        },
        {
          nameZh: '極夜暗碳黑',
          nameEn: 'Carbon Dark',
          code: '#111827',
          image: 'https://images.unsplash.com/photo-1506152983158-b4a74a01c721?auto=format&fit=crop&w=900&q=80',
          secondaryImage: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80'
        }
      ]
    },

    /* ==============================================================
       2. 🏋️ 重訓體能 (GYM & TRAINING - 3 ITEMS)
       ============================================================== */
    {
      id: 'ax-train-01',
      name: 'AEROX CORE-FORCE CROSS-TRAINER',
      subname: '全方位重訓與綜合格鬥訓練鞋',
      category: 'training',
      price: 3880,
      originalPrice: 4500,
      isNew: true,
      isHot: true,
      badge: 'CROSSFIT 推薦',
      rating: 4.9,
      reviewsCount: 175,
      weight: '290g (US 9)',
      drop: '4mm 低落差貼地',
      stack: '18mm 低重心底盤',
      description: '專為深蹲、硬舉與高強度間歇訓練（HIIT）打造。超寬後跟穩定底盤，搭配側向 TPU 抱合爪，給予大重量舉重堅如磐石的支撐力。',
      tech: ['Anchor-Lock™ 側向鎖定爪', 'Flat-Base 止滑底盤', 'Rope-Shield 攀繩抗磨側壁'],
      sizes: ['US 8', 'US 8.5', 'US 9', 'US 9.5', 'US 10', 'US 10.5', 'US 11'],
      colors: [
        {
          nameZh: '啞光戰術黑',
          nameEn: 'Tactical Matte Black',
          code: '#27272A',
          image: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=900&q=80',
          secondaryImage: 'https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?auto=format&fit=crop&w=900&q=80'
        },
        {
          nameZh: '軍規橄欖綠 / 亮橙',
          nameEn: 'Military Olive',
          code: '#556B2F',
          image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=900&q=80',
          secondaryImage: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=900&q=80'
        }
      ]
    },
    {
      id: 'ax-train-02',
      name: 'AEROX APEX-PRO 壓縮排汗機能短袖',
      subname: '漸進加壓鎖定肌群訓練衣',
      category: 'training',
      price: 2180,
      originalPrice: 2600,
      isNew: true,
      isHot: true,
      badge: '強效加壓',
      rating: 4.8,
      reviewsCount: 310,
      weight: '110g',
      drop: '立體人體工學剪裁',
      stack: '銀離子永久抑菌除臭',
      description: '人體工學動態壓縮編織，精準鎖定胸背與三角肌群，減少劇烈運動晃動導致的肌肉疲勞。3 秒極速吸濕排汗，時刻保持體表乾爽清涼。',
      tech: ['HydroCool™ 瞬涼纖維', 'Dynamic-Compression™', 'Polygiene® 抑菌技術'],
      sizes: ['S', 'M', 'L', 'XL', '2XL'],
      colors: [
        {
          nameZh: '碳黑墨影',
          nameEn: 'Carbon Stealth',
          code: '#1E293B',
          image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=900&q=80',
          secondaryImage: 'https://images.unsplash.com/photo-1506152983158-b4a74a01c721?auto=format&fit=crop&w=900&q=80'
        },
        {
          nameZh: '冰霜暴風灰',
          nameEn: 'Storm Grey',
          code: '#64748B',
          image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=900&q=80',
          secondaryImage: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=900&q=80'
        }
      ]
    },
    {
      id: 'ax-train-03',
      name: 'AEROX TITAN-LIFT 專業牛皮快扣舉重腰帶',
      subname: '10mm 競技級高硬度核心支撐腰帶',
      category: 'training',
      price: 3280,
      originalPrice: 3980,
      isNew: false,
      isHot: true,
      badge: 'IPF 規格認證',
      rating: 5.0,
      reviewsCount: 146,
      weight: '980g',
      drop: '10mm 頂級四層牛皮壓合',
      stack: '鋅合金快拆槓桿扣',
      description: '深蹲與硬舉突破大重量極限的核心後盾。精選特種硬質植鞣牛皮，搭配一秒快速開合的合金槓桿鎖扣，提供堅如鋼鐵的腹腔內壓支撐。',
      tech: ['Full-Grain 牛皮原皮', 'Quick-Lever 快拆合金扣', '雙排強化抗拉高張線'],
      sizes: ['S (65-80cm)', 'M (75-90cm)', 'L (85-100cm)', 'XL (95-115cm)'],
      colors: [
        {
          nameZh: '啞光曜石黑',
          nameEn: 'Matte Obsidian',
          code: '#18181B',
          image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=900&q=80',
          secondaryImage: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=900&q=80'
        }
      ]
    },

    /* ==============================================================
       3. 🏔️ 越野戶外 (TRAIL & OUTDOOR - 3 ITEMS)
       ============================================================== */
    {
      id: 'ax-out-01',
      name: 'AEROX TERRA-CLAW GTX 越野跑鞋',
      subname: '全地形防水抓地越野征服者',
      category: 'outdoor',
      price: 5280,
      originalPrice: 5900,
      isNew: true,
      isHot: true,
      badge: 'GORE-TEX 授權',
      rating: 4.8,
      reviewsCount: 142,
      weight: '275g (US 9)',
      drop: '6mm 落差',
      stack: '5mm 深齒多向爪狀顆粒',
      description: '無懼泥濘、碎石與陡峭山徑。內置 GORE-TEX Invisible Fit 防水透氣襪套，配合專利深齒多向爪狀大底，在任何濕滑地表皆能穩如泰山。',
      tech: ['GORE-TEX Invisible Fit', 'Terra-Claw 5mm 深爪大底', 'Rock-Plate 碎石防刺穿護板'],
      sizes: ['US 8', 'US 8.5', 'US 9', 'US 9.5', 'US 10', 'US 10.5', 'US 11'],
      colors: [
        {
          nameZh: '岩石荒漠灰 / 亮橙',
          nameEn: 'Rock Desert / Solar Orange',
          code: '#9CA3AF',
          image: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&w=900&q=80',
          secondaryImage: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80'
        },
        {
          nameZh: '深林暗松綠',
          nameEn: 'Deep Forest Pine',
          code: '#2F4F4F',
          image: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=900&q=80',
          secondaryImage: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=900&q=80'
        }
      ]
    },
    {
      id: 'ax-out-02',
      name: 'AEROX STORM-SHIELD 極輕量抗風雨風衣',
      subname: '全天候輕量防潑透氣機能夾克',
      category: 'outdoor',
      price: 3680,
      originalPrice: 4200,
      isNew: false,
      isHot: true,
      badge: '戶外必備',
      rating: 4.9,
      reviewsCount: 198,
      weight: '135g (可自體收納)',
      drop: '防水係數 10,000mm',
      stack: '透氣度 15,000g/m²/24h',
      description: '面對突如其來的驟雨與狂風，AEROX Storm-Shield 給予堅固防護。超輕抗撕裂尼龍結合 DWR 仿生防潑水微米塗層，夜跑 360° 反光條確保安全。',
      tech: ['Storm-Shield 2.5L 膜', 'Laser-Vent™ 腋下雷射散熱孔', '3M™ Scotchlite™ 反光微晶'],
      sizes: ['S', 'M', 'L', 'XL'],
      colors: [
        {
          nameZh: '電光螢光黃',
          nameEn: 'Volt Cyber Yellow',
          code: '#CCFF00',
          image: 'https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&w=900&q=80',
          secondaryImage: 'https://images.unsplash.com/photo-1506152983158-b4a74a01c721?auto=format&fit=crop&w=900&q=80'
        },
        {
          nameZh: '極光暗曜黑',
          nameEn: 'Aurora Dark Black',
          code: '#0F172A',
          image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=900&q=80',
          secondaryImage: 'https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&w=900&q=80'
        }
      ]
    },
    {
      id: 'ax-out-03',
      name: 'AEROX TRAIL-VENT PRO 越野機能短褲',
      subname: '多口袋能量膠收納越野跑褲',
      category: 'outdoor',
      price: 1980,
      originalPrice: 2400,
      isNew: true,
      isHot: false,
      badge: '五口袋收納',
      rating: 4.8,
      reviewsCount: 112,
      weight: '92g',
      drop: '內嵌一體成型平口襯褲',
      stack: '防潑抗撕裂防勾紗',
      description: '山徑越野百公里超馬專用。腰圍配置 360 度環繞彈性收納網袋，可容納 500ml 軟水壺、手機與 6 條能量膠，狂奔跳躍依然緊貼不晃動。',
      tech: ['360° Trail-Belt 收納腰封', 'DWR 抗撕裂格紋布', 'Anti-Chafe 防摩擦內襯'],
      sizes: ['S', 'M', 'L', 'XL'],
      colors: [
        {
          nameZh: '軍裝泥灰',
          nameEn: 'Mud Clay Grey',
          code: '#4B5563',
          image: 'https://images.unsplash.com/photo-1506152983158-b4a74a01c721?auto=format&fit=crop&w=900&q=80',
          secondaryImage: 'https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&w=900&q=80'
        }
      ]
    },

    /* ==============================================================
       4. 🏀 籃球運動 (BASKETBALL - 3 ITEMS)
       ============================================================== */
    {
      id: 'ax-bb-01',
      name: 'AEROX FLIGHT-ZONE HIGH 實戰籃球鞋',
      subname: '雙氣室超回彈高筒防側翻戰靴',
      category: 'basketball',
      price: 4680,
      originalPrice: 5380,
      isNew: true,
      isHot: true,
      badge: '實戰旗艦',
      rating: 4.9,
      reviewsCount: 220,
      weight: '380g (US 9)',
      drop: '高筒鎖踝保護',
      stack: '前掌 Zoom 氣囊 + 後跟物理彈射板',
      description: '為球場空中飛人打造。內嵌大面積雙叉抗扭碳板與外側巨型 TPU 防側翻側牆，暴扣著地時化解衝擊，瞬間變向突破如影隨形。',
      tech: ['AeroAir™ 雙氣囊中底', 'Anti-Roll TPU 側防翻牆', '人字骨耐磨人造橡膠'],
      sizes: ['US 8', 'US 8.5', 'US 9', 'US 9.5', 'US 10', 'US 10.5', 'US 11', 'US 12'],
      colors: [
        {
          nameZh: '黑金傳奇',
          nameEn: 'Black Gold Legend',
          code: '#EAB308',
          image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=900&q=80',
          secondaryImage: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80'
        },
        {
          nameZh: '極光白黑',
          nameEn: 'Pure Ghost White',
          code: '#F8FAFC',
          image: 'https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?auto=format&fit=crop&w=900&q=80',
          secondaryImage: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=900&q=80'
        }
      ]
    },
    {
      id: 'ax-bb-02',
      name: 'AEROX COURT-MASTER 美式透氣球褲',
      subname: '雙層加厚網眼復古透氣籃球褲',
      category: 'basketball',
      price: 1580,
      originalPrice: 1980,
      isNew: false,
      isHot: true,
      badge: '街頭必備',
      rating: 4.8,
      reviewsCount: 184,
      weight: '220g',
      drop: '膝上 7 吋俐落剪裁',
      stack: '高磅吸汗聚酯網眼',
      description: '經典美式復古寬版廓形，重磅密織透氣網眼布料，下擺金屬銅釦開衩設計，大幅度變向運球完全不受束縛。',
      tech: ['Heavy-Mesh 透氣織面', '拉鍊防掉口袋', '加寬羅紋彈性抽繩腰頭'],
      sizes: ['M', 'L', 'XL', '2XL'],
      colors: [
        {
          nameZh: '復古碳墨黑',
          nameEn: 'Retro Carbon Black',
          code: '#18181B',
          image: 'https://images.unsplash.com/photo-1519766304817-4f37bda74a29?auto=format&fit=crop&w=900&q=80',
          secondaryImage: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=900&q=80'
        }
      ]
    },
    {
      id: 'ax-bb-03',
      name: 'AEROX KNEE-ARMOR PRO 蜂巢防撞護膝',
      subname: '加厚矽膠減震環加壓高彈運動護膝',
      category: 'basketball',
      price: 980,
      originalPrice: 1350,
      isNew: true,
      isHot: false,
      badge: '護膝神裝',
      rating: 4.9,
      reviewsCount: 320,
      weight: '140g',
      drop: '兩側雙彈簧魚骨支撐條',
      stack: '環形矽膠髕骨減震圈',
      description: '激戰籃球場與急停跳投必備。髕骨位置內置加厚環狀矽膠，兩側置入記憶彈簧支撐條，提供膝關節強大包裹感，有效分散著地衝擊。',
      tech: ['Patella-Gel 減震環', '雙向記憶彈簧支撐條', '波浪防滑矽膠條'],
      sizes: ['M (35-41cm)', 'L (42-47cm)', 'XL (48-55cm)'],
      colors: [
        {
          nameZh: '戰術黑 / 電光綠標',
          nameEn: 'Tactical Black / Volt',
          code: '#000000',
          image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=900&q=80',
          secondaryImage: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=900&q=80'
        }
      ]
    },

    /* ==============================================================
       5. 🏸 羽網球拍類 (RACKET SPORTS - 3 ITEMS)
       ============================================================== */
    {
      id: 'ax-rk-01',
      name: 'AEROX COURT-ACE PRO 專業生膠羽網球鞋',
      subname: '超止滑全向折返室內生膠運動鞋',
      category: 'racket',
      price: 3980,
      originalPrice: 4680,
      isNew: true,
      isHot: true,
      badge: '國手實戰款',
      rating: 4.9,
      reviewsCount: 158,
      weight: '280g (US 8.5)',
      drop: '天然生膠無痕大底',
      stack: '碳纖抗扭片 + 側向硬質支撐防翻',
      description: '專為室內木地板與 PU 場地極速啟動設計。採用頂級天然生膠高抓地大底，中底嵌入大面積 3D 碳纖維防扭片，瞬間急停折返步法隨心所欲。',
      tech: ['RawGum™ 生膠無痕配方', 'Carbon-Bridge 3D 碳片', '側向 Claw-Guard 防扭爪'],
      sizes: ['US 7.5', 'US 8', 'US 8.5', 'US 9', 'US 9.5', 'US 10', 'US 10.5'],
      colors: [
        {
          nameZh: '極速白羽 / 電光綠',
          nameEn: 'Speed Feather White',
          code: '#FFFFFF',
          image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=900&q=80',
          secondaryImage: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80'
        }
      ]
    },
    {
      id: 'ax-rk-02',
      name: 'AEROX GRAND-SLAM 乾爽抗皺運動 POLO 衫',
      subname: '四向高彈無束縛揮拍比賽服',
      category: 'racket',
      price: 1880,
      originalPrice: 2280,
      isNew: false,
      isHot: true,
      badge: '球會指定',
      rating: 4.8,
      reviewsCount: 110,
      weight: '140g',
      drop: '立體裁片修身版型',
      stack: '抗皺免燙速乾科技',
      description: '網球與羽球菁英選手指定。經典運動領型結合熱壓平整前襟，腋下採用一體無接縫剪裁，大幅度高壓殺球揮拍完全不扯衣角。',
      tech: ['Motion-Free 3D 肩部剪裁', 'Micro-Dry 吸排科技', 'UV50+ 防曬面料'],
      sizes: ['S', 'M', 'L', 'XL', '2XL'],
      colors: [
        {
          nameZh: '溫布頓純白 / 墨黑條紋',
          nameEn: 'Wimbledon White',
          code: '#F8FAFC',
          image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=900&q=80',
          secondaryImage: 'https://images.unsplash.com/photo-1506152983158-b4a74a01c721?auto=format&fit=crop&w=900&q=80'
        }
      ]
    },
    {
      id: 'ax-rk-03',
      name: 'AEROX VORTEX-900 破風全碳素羽球拍',
      subname: '高剛性中桿進攻型競技球拍 (4U/G5)',
      category: 'racket',
      price: 4580,
      originalPrice: 5600,
      isNew: true,
      isHot: true,
      badge: '最高承受 32 磅',
      rating: 5.0,
      reviewsCount: 88,
      weight: '82g ± 2g (4U)',
      drop: '平衡點 305mm (頭重進攻)',
      stack: '三菱 40T 高模量熱熔碳纖',
      description: '為毀滅性扣殺而生。六角形破風拍框降低 15% 空氣阻力，超細高彈中桿提供雷霆萬鈞的甩鞭效應，落點精準、壓迫感十足。',
      tech: ['AeroHex 六角破風框', 'Ultra-Slim 6.6mm 彈性中桿', 'T-Anchor 內置抗扭三通'],
      sizes: ['4U/G5 (已預穿 26 磅高彈線)'],
      colors: [
        {
          nameZh: '極光黑金',
          nameEn: 'Aurora Black Gold',
          code: '#18181B',
          image: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=900&q=80',
          secondaryImage: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=900&q=80'
        }
      ]
    },

    /* ==============================================================
       6. 🧘 瑜珈塑身 (YOGA & PILATES - 3 ITEMS)
       ============================================================== */
    {
      id: 'ax-yg-01',
      name: 'AEROX CLOUD-TOUCH 裸感高腰九分褲',
      subname: '零束縛雲朵膚感高腰塑身瑜珈褲',
      category: 'yoga',
      price: 1980,
      originalPrice: 2480,
      isNew: true,
      isHot: true,
      badge: '熱賣人氣款',
      rating: 4.9,
      reviewsCount: 420,
      weight: '150g',
      drop: '高腰無縫收腹線條',
      stack: '四向極限超彈力',
      description: '穿上就像沒穿一樣的裸感體驗。雙面微磨毛工藝帶來雲朵般輕柔觸感，高腰弧線精準包覆小腹，深蹲絕不透光、絕不捲邊。',
      tech: ['CloudSkin™ 仿生裸感纖維', 'Seamless-Waist 無痕收腹', '無尷尬線防夾肉工藝'],
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: [
        {
          nameZh: '莫蘭迪灰褐',
          nameEn: 'Morandi Taupe',
          code: '#78716C',
          image: 'https://images.unsplash.com/photo-1506152983158-b4a74a01c721?auto=format&fit=crop&w=900&q=80',
          secondaryImage: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80'
        },
        {
          nameZh: '煙燻暗紫',
          nameEn: 'Smoked Violet',
          code: '#4C1D95',
          image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=900&q=80',
          secondaryImage: 'https://images.unsplash.com/photo-1506152983158-b4a74a01c721?auto=format&fit=crop&w=900&q=80'
        }
      ]
    },
    {
      id: 'ax-yg-02',
      name: 'AEROX ZEN-FLOW 交叉美背高支撐運動內衣',
      subname: '抗震防晃可拆胸墊美背運動 Bra',
      category: 'yoga',
      price: 1480,
      originalPrice: 1880,
      isNew: false,
      isHot: true,
      badge: '美背首選',
      rating: 4.9,
      reviewsCount: 260,
      weight: '110g',
      drop: '中高強度支撐度',
      stack: '透氣蜂巢透氣乳膠胸墊',
      description: '結合力與美的設計。後背幾何交錯細帶穩定分散肩頸壓力，下圍加寬羅紋緊緊鎖定不位移，跑步、瑜珈、跳繩皆能安穩支撐。',
      tech: ['Cross-Back 美背減壓帶', 'Soft-Support 加寬下圍', '立體透氣水滴可拆杯'],
      sizes: ['S (70A-70C)', 'M (75A-75D)', 'L (80A-80D)'],
      colors: [
        {
          nameZh: '極致曜黑',
          nameEn: 'Pure Black',
          code: '#18181B',
          image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80',
          secondaryImage: 'https://images.unsplash.com/photo-1506152983158-b4a74a01c721?auto=format&fit=crop&w=900&q=80'
        }
      ]
    },
    {
      id: 'ax-yg-03',
      name: 'AEROX ECO-GRIP 天然橡膠瑜珈墊 6MM',
      subname: '激光體式引導線乾濕極致止滑墊',
      category: 'yoga',
      price: 2480,
      originalPrice: 3200,
      isNew: true,
      isHot: false,
      badge: '天然環保橡膠',
      rating: 5.0,
      reviewsCount: 94,
      weight: '2.4kg 扎實沉穩',
      drop: '6mm 關節保護加厚層',
      stack: '尺寸 183cm x 68cm 加寬規格',
      description: '大汗淋漓也絕不打滑。頂層仿生 PU 塗層極速吸汗乾爽，底層高密度天然橡膠抓地牢固，雷射雕刻體位引導線，輔助骨盆與脊椎精準對齊。',
      tech: ['Laser-Align 正位雕刻線', '100% 永續生質天然橡膠', '防撕裂纖維夾層網'],
      sizes: ['標準加寬版 (附贈專屬背帶)'],
      colors: [
        {
          nameZh: '極光深青灰',
          nameEn: 'Aurora Cyan Slate',
          code: '#334155',
          image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=900&q=80',
          secondaryImage: 'https://images.unsplash.com/photo-1506152983158-b4a74a01c721?auto=format&fit=crop&w=900&q=80'
        }
      ]
    },

    /* ==============================================================
       7. 🎒 裝備配件 (GEAR & ACCESSORIES - 3 ITEMS)
       ============================================================== */
    {
      id: 'ax-acc-01',
      name: 'AEROX KINETIC PRO 48L 多功能訓練後背包',
      subname: '乾濕分離獨立通風鞋倉專業健身包',
      category: 'accessories',
      price: 2680,
      originalPrice: 3200,
      isNew: false,
      isHot: true,
      badge: '人氣配備',
      rating: 4.9,
      reviewsCount: 264,
      weight: '820g',
      drop: '容量 48L',
      stack: '16 吋筆電專屬防震隔層',
      description: '健身房、出差與賽事旅行的最佳後盾。設有透氣排異味獨立鞋倉、防水汗衣隔層，以及人體工學蜂巢減壓背帶，重負也能靈巧無感。',
      tech: ['1000D 杜邦高強度防水抗撕面料', 'AirFlow 脊椎散熱導流板', 'Fidlock® 磁吸快拆搭扣'],
      sizes: ['ONE SIZE (48L)'],
      colors: [
        {
          nameZh: '霧面隱形黑',
          nameEn: 'Matte Stealth Black',
          code: '#111827',
          image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=80',
          secondaryImage: 'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=900&q=80'
        }
      ]
    },
    {
      id: 'ax-acc-02',
      name: 'AEROX TITANIUM-FLOW 800ML 純鈦運動水壺',
      subname: '航太純鈦保冰保溫單手快開水壺',
      category: 'accessories',
      price: 1480,
      originalPrice: 1800,
      isNew: true,
      isHot: true,
      badge: '99.8% 醫療純鈦',
      rating: 5.0,
      reviewsCount: 168,
      weight: '160g 極致超輕',
      drop: '24 小時長效保冰 / 12 小時保溫',
      stack: '0 雙酚 A / 0 異味殘留',
      description: '純鈦金屬製成，抗酸鹼腐蝕，即便裝入高濃度電解質運動飲料也永不溶出金屬異味。按壓式單手快開防漏運動吸嘴。',
      tech: ['99.8% 醫療純鈦打造', '雙層真空微米隔熱層', 'One-Touch 運動快速出水嘴'],
      sizes: ['800ML'],
      colors: [
        {
          nameZh: '原色原鈦銀',
          nameEn: 'Raw Titanium Silver',
          code: '#CBD5E1',
          image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=900&q=80',
          secondaryImage: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=80'
        },
        {
          nameZh: '極致陽極曜黑',
          nameEn: 'Anodized Carbon Black',
          code: '#1F2937',
          image: 'https://images.unsplash.com/photo-1570831739435-6601aa3fa4fb?auto=format&fit=crop&w=900&q=80',
          secondaryImage: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=900&q=80'
        }
      ]
    },
    {
      id: 'ax-acc-03',
      name: 'AEROX PULSE-PRO 肌肉筋膜深層按摩槍',
      subname: '無刷變頻大扭力 12mm 衝程深層筋膜放鬆',
      category: 'accessories',
      price: 3880,
      originalPrice: 4800,
      isNew: true,
      isHot: true,
      badge: '頂級筋膜修復',
      rating: 4.9,
      reviewsCount: 195,
      weight: '620g 便攜機身',
      drop: '12mm 專業級深層打擊振幅',
      stack: '續航 6 小時大容量鋰電',
      description: '賽後肌肉酸痛一網打盡。搭載 60W 無刷變頻高速馬達，提供高達 15kg 推力與 3200 轉打擊頻率，穿透深層乳酸，附帶 5 種專業按摩頭。',
      tech: ['12mm Deep-Stroke 振幅', 'Brushless-Turbo 無刷靜音馬達', 'Type-C 疾速快充'],
      sizes: ['附 5 款專業按摩頭 + 專屬收納防震硬殼包'],
      colors: [
        {
          nameZh: '太空槍灰 / 電光綠飾條',
          nameEn: 'Space Gunmetal / Volt',
          code: '#374151',
          image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=900&q=80',
          secondaryImage: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=900&q=80'
        }
      ]
    }
  ],

  coupons: {
    'GGG777': { discount: 0.70, desc: 'VIP 專屬尊榮 3 折優惠券 (現省 70%)' },
    'AEROX2026': { discount: 0.15, desc: '全館 85 折優惠券 (現省 15%)' },
    'FREESHIP': { discount: 0, freeShipping: true, desc: '全館免運費優惠' },
    'VIP10': { discount: 0.10, desc: 'VIP 會員專屬 9 折優惠' }
  },

  technologies: [
    {
      id: 'tech-01',
      title: 'CARBONX-BLADE™',
      subtitle: '雙叉仿生碳纖維全掌推進板',
      stat: '+38%',
      statDesc: '前掌推進回彈效能提升',
      description: '靈感來自獵豹奔跑時的爪指骨骼力學架構。專利 3D 雙叉勺形曲面，能將著地時的下沉衝擊力，精準轉化為向前的線性彈射加速度。',
      icon: 'zap',
      tags: ['高剛性航太級碳纖', '重量僅 14g', '動能轉化率 91%']
    },
    {
      id: 'tech-02',
      title: 'NITROFOAM™ GEN3',
      subtitle: '超臨界氮氣物理發泡中底',
      stat: '89.2%',
      statDesc: '實驗室認證超高能量反饋',
      description: '捨棄傳統化學發泡劑，在高溫高壓環境下注入純氮分子。氣孔細密均勻，兼具極致柔軟的避震保護與源源不絕的澎湃腳感，跑步 800 公里性能不衰減。',
      icon: 'feather',
      tags: ['超低密度 0.12g/cm³', '耐寒耐熱抗老化', '100% 零有毒溶劑']
    },
    {
      id: 'tech-03',
      title: 'BREATHEWEAVE™ 3.0',
      subtitle: '智慧分區雷射編織鞋面',
      stat: '-3.2°C',
      statDesc: '高強度運動鞋內降溫幅度',
      description: '根據人體熱成像大數據，在足弓與腳背設置微米級呼吸通風孔，兩側與後跟則採用高張力紗線加強包覆，實現如第二層皮膚般的無感貼合。',
      icon: 'wind',
      tags: ['人體工學熱區分佈', '高強防撕抗扭', '再生聚酯紗線 75%']
    },
    {
      id: 'tech-04',
      title: 'VORTEX-GRIP™',
      subtitle: '全天候濕地仿生吸盤橡膠',
      stat: '+42%',
      statDesc: '濕滑磁磚與瀝青抓地力提升',
      description: '採用世界級賽車輪胎膠料配方，結合微米級仿生章魚吸盤與排水溝槽，即便在滂沱大雨的濕滑路面全速衝刺，也能牢牢咬住路面不打滑。',
      icon: 'shield',
      tags: ['雨天抓地保證', '高耐磨配方', '全地形無痕配方']
    }
  ],

  quizQuestions: [
    {
      id: 'goal',
      title: '1. 您最主要的運動目標與場景？',
      options: [
        { label: '🏃 馬拉松路跑 / 刷 PB 競速', category: 'running', icon: 'zap' },
        { label: '🏋️ 重訓健身 / 體能力量訓練', category: 'training', icon: 'activity' },
        { label: '🏀 籃球運動 / 空中跳躍對抗', category: 'basketball', icon: 'disc' },
        { label: '🏔️ 戶外越野 / 登山步道探險', category: 'outdoor', icon: 'compass' }
      ]
    },
    {
      id: 'feel',
      title: '2. 您偏好的腳感與機能特性？',
      options: [
        { label: '強勁彈射碳板推進，速度優先', pref: 'speed' },
        { label: '厚底深層緩震，保護關節與膝蓋', pref: 'cushion' },
        { label: '超低重心穩定貼地，防側翻抗扭', pref: 'stable' },
        { label: '強韌抓地深齒，防水抗撕裂', pref: 'grip' }
      ]
    },
    {
      id: 'frequency',
      title: '3. 您的運動頻率大約為？',
      options: [
        { label: '每週 1 ~ 2 次 (活力休閒)', level: 'casual' },
        { label: '每週 3 ~ 4 次 (進階訓練)', level: 'intermediate' },
        { label: '每週 5 次以上 (專業競技賽事)', level: 'elite' }
      ]
    }
  ]
};
