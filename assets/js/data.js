/**
 * AEROX SPORTS BRAND - DATA REPOSITORY
 * High Performance Athletic Gear & Tech Data
 */

window.AEROX_DATA = {
  currencies: {
    TWD: { symbol: 'NT$', rate: 1, decimals: 0 },
    USD: { symbol: '$', rate: 0.032, decimals: 2 },
    EUR: { symbol: '€', rate: 0.029, decimals: 2 },
    JPY: { symbol: '¥', rate: 4.85, decimals: 0 }
  },

  categories: [
    { id: 'all', nameZh: '全部商品', nameEn: 'All Products' },
    { id: 'running', nameZh: '競速路跑', nameEn: 'Running' },
    { id: 'training', nameZh: '力量訓練', nameEn: 'Gym & Training' },
    { id: 'apparel', nameZh: '機能服飾', nameEn: 'Performance Apparel' },
    { id: 'outdoor', nameZh: '越野戶外', nameEn: 'Trail & Outdoor' },
    { id: 'accessories', nameZh: '專業裝備', nameEn: 'Gear & Accessories' }
  ],

  products: [
    {
      id: 'ax-01',
      name: 'AEROX SPEED-X CARBON ELITE',
      subname: '旗艦全掌碳板競速跑鞋',
      category: 'running',
      price: 5980,
      originalPrice: 6800,
      isNew: true,
      isHot: true,
      badge: 'PRO LAB 認證',
      rating: 4.9,
      reviewsCount: 238,
      weight: '172g (US 9)',
      drop: '8mm',
      stack: '39.5mm 前掌 / 31.5mm 後跟',
      description: '為全馬破三與打破個人紀錄（PB）而生。搭載雙叉仿生 CarbonX-Blade™ 全掌碳板與超臨界物理發泡 NitroFoam™，提供高達 89.2% 的回彈動能，每一步都在引爆極限。',
      tech: ['CarbonX-Blade™', 'NitroFoam™ Gen3', 'Vortex-Grip™ 濕地大底'],
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
          nameZh: '競速火焰紅 / 幻影白',
          nameEn: 'Solar Crimson / Ghost White',
          code: '#FF3366',
          image: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&w=900&q=80',
          secondaryImage: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&w=900&q=80'
        },
        {
          nameZh: '賽博極光藍 / 鈦銀',
          nameEn: 'Cyber Cyan / Titanium',
          code: '#00F0FF',
          image: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=900&q=80',
          secondaryImage: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=900&q=80'
        }
      ]
    },
    {
      id: 'ax-02',
      name: 'AEROX STRIDE-FLOW 2.0',
      subname: '日常長距離緩震巡航跑鞋',
      category: 'running',
      price: 4280,
      originalPrice: 4800,
      isNew: false,
      isHot: true,
      badge: '熱銷排行榜 No.1',
      rating: 4.8,
      reviewsCount: 412,
      weight: '235g (US 9)',
      drop: '10mm',
      stack: '36mm 前掌 / 26mm 後跟',
      description: 'LSD 長距離日常訓練的首選夥伴。升級雙密度 CloudComfort™ 中底，在每一次落腳瞬間化解衝擊，溫和過渡滾動節奏，保護膝蓋與阿基里斯腱。',
      tech: ['CloudComfort™ 雙密度中底', 'BreatheWeave™ 透氣鞋面', 'DuraRubber™ 耐磨大底'],
      sizes: ['US 7', 'US 7.5', 'US 8', 'US 8.5', 'US 9', 'US 9.5', 'US 10', 'US 11'],
      colors: [
        {
          nameZh: '冰霜天藍 / 純白',
          nameEn: 'Glacier Blue / Pure White',
          code: '#38BDF8',
          image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=900&q=80',
          secondaryImage: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=900&q=80'
        },
        {
          nameZh: '暗夜黑曜 / 螢光綠點綴',
          nameEn: 'Obsidian Black / Volt',
          code: '#18181B',
          image: 'https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?auto=format&fit=crop&w=900&q=80',
          secondaryImage: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80'
        }
      ]
    },
    {
      id: 'ax-03',
      name: 'AEROX CORE-FORCE CROSS-TRAINER',
      subname: '全方位重訓與綜合格鬥訓練鞋',
      category: 'training',
      price: 3880,
      originalPrice: 4500,
      isNew: true,
      isHot: false,
      badge: 'CROSSFIT 推薦',
      rating: 4.9,
      reviewsCount: 175,
      weight: '290g (US 9)',
      drop: '4mm',
      stack: '18mm 低重心貼地',
      description: '專為深蹲、硬舉與高強度間歇訓練（HIIT）打造。超寬後跟穩定底盤，搭配側向 TPU 鎖定抱合爪，給予大重量舉重堅如磐石的支撐力。',
      tech: ['Anchor-Lock™ 側向鎖定爪', 'Flat-Base 抓地底盤', 'Rope-Shield 攀繩抗磨側壁'],
      sizes: ['US 8', 'US 8.5', 'US 9', 'US 9.5', 'US 10', 'US 10.5', 'US 11', 'US 12'],
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
          nameEn: 'Military Olive / Blaze Orange',
          code: '#556B2F',
          image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=900&q=80',
          secondaryImage: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=900&q=80'
        }
      ]
    },
    {
      id: 'ax-04',
      name: 'AEROX APEX-PRO 壓縮排汗緊身衣',
      subname: '漸進加壓高階機能運動上衣',
      category: 'apparel',
      price: 2180,
      originalPrice: 2600,
      isNew: true,
      isHot: true,
      badge: '熱賣款',
      rating: 4.8,
      reviewsCount: 310,
      weight: '110g',
      drop: '無痕剪裁',
      stack: 'UPF 50+ 抗紫外線',
      description: '人體工學動態壓縮編織，精準鎖定胸背與肩膀肌群，減少運動震盪導致的疲勞。3 秒超速吸濕排汗，時刻保持體表乾爽清涼。',
      tech: ['HydroCool™ 瞬涼纖維', 'Dynamic-Compression™', '銀離子永久抑菌除臭'],
      sizes: ['S', 'M', 'L', 'XL', '2XL'],
      colors: [
        {
          nameZh: '碳黑墨影',
          nameEn: 'Carbon Stealth',
          code: '#1E293B',
          image: 'https://images.unsplash.com/photo-1506152983158-b4a74a01c721?auto=format&fit=crop&w=900&q=80',
          secondaryImage: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=900&q=80'
        },
        {
          nameZh: '深邃冰灰',
          nameEn: 'Deep Ice Grey',
          code: '#64748B',
          image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=900&q=80',
          secondaryImage: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=900&q=80'
        }
      ]
    },
    {
      id: 'ax-05',
      name: 'AEROX STORM-SHIELD 極輕量抗風雨連帽風衣',
      subname: '全天候輕量防潑透氣機能夾克',
      category: 'apparel',
      price: 3680,
      originalPrice: 4200,
      isNew: false,
      isHot: true,
      badge: '戶外必備',
      rating: 4.9,
      reviewsCount: 198,
      weight: '135g (可收納成掌心口袋)',
      drop: '防水係數 10,000mm',
      stack: '透氣度 15,000g/m²/24h',
      description: '面對突如其來的驟雨與狂風，AEROX Storm-Shield 給予堅固防護。超輕抗撕裂尼龍結合 DWR 仿生防潑水微米塗層，夜跑 360° 反光條確保夜間安全。',
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
      id: 'ax-06',
      name: 'AEROX TERRA-CLAW GTX 越野跑鞋',
      subname: '全地形防水抓地越野征服者',
      category: 'outdoor',
      price: 5280,
      originalPrice: 5900,
      isNew: true,
      isHot: false,
      badge: 'GORE-TEX 授權',
      rating: 4.8,
      reviewsCount: 142,
      weight: '275g (US 9)',
      drop: '6mm',
      stack: '5mm 深齒多向顆粒',
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
      id: 'ax-07',
      name: 'AEROX KINETIC PRO 48L 多功能運動後背包',
      subname: '乾濕分離獨立鞋倉專業訓練包',
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
      description: '健身房、出差與賽事旅行的最佳後盾。設有透氣排異味獨立鞋倉、防水汗衣隔層，以及人體工學蜂巢減壓背負背帶，重負也能靈巧無感。',
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
      id: 'ax-08',
      name: 'AEROX TITANIUM-FLOW 800ML 運動水壺',
      subname: '航太鈦合金極輕保溫保冷水壺',
      category: 'accessories',
      price: 1480,
      originalPrice: 1800,
      isNew: true,
      isHot: false,
      badge: '航太金屬',
      rating: 5.0,
      reviewsCount: 88,
      weight: '160g',
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
    }
  ],

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

  athletes: [
    {
      name: '林哲宇 (Che-Yu Lin)',
      title: '奧運長跑選手 / 全國馬拉松紀錄保持人',
      quote: '「穿上 AEROX SPEED-X，在最後十公里的體力極限時，碳板與中底的推背感就像有一股強大的推力在推著我突破 PB。」',
      stats: '全馬 PB 2:11:45',
      image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=800&q=80',
      gear: 'AEROX SPEED-X CARBON ELITE'
    },
    {
      name: 'Elena Rostova',
      title: '世界 CrossFit Games 頂級運動員',
      quote: '「深蹲 200 公斤時，你需要的是完全不受形變干擾的絕對支撐。Core-Force 是我見過最穩定、最堅實的戰靴。」',
      stats: 'Snatch 115kg / Clean & Jerk 140kg',
      image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80',
      gear: 'AEROX CORE-FORCE CROSS-TRAINER'
    },
    {
      name: 'Marcus Vance',
      title: 'UTMB 頂級越野跑者 / 攀岩先鋒',
      quote: '「在阿爾卑斯山的碎石陡坡上，每一步都關乎生死。Terra-Claw 的抓地力給了我毫無猶豫大步奔馳的底氣。」',
      stats: '160km 越野超馬總冠軍',
      image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80',
      gear: 'AEROX TERRA-CLAW GTX'
    }
  ],

  reviews: [
    {
      author: 'Kevin H. (市民跑者)',
      rating: 5,
      date: '2026/10/24',
      product: 'AEROX SPEED-X CARBON ELITE',
      comment: '剛收到就穿去跑了 21K 半馬，推進感非常明顯，小腿負擔比以前穿其他碳板鞋減輕許多，直接破了個人半馬 PB 4 分鐘！包裝也很精品！'
    },
    {
      author: 'Sarah W. (健身教練)',
      rating: 5,
      date: '2026/11/02',
      product: 'AEROX APEX-PRO 壓縮排汗緊身衣',
      comment: '透氣排汗效果真的驚人，教課帶團練整整 3 小時完全不會有黏膩悶熱感，剪裁非常修飾身形，已經回購第二件！'
    },
    {
      author: 'David C. (越野愛好者)',
      rating: 5,
      date: '2026/11/05',
      product: 'AEROX TERRA-CLAW GTX',
      comment: '陽明山雨後泥濘山徑完全不滑！大底的抓地力超牢靠，鞋面踩進水坑也沒有滲水，真的值得投資的好裝備。'
    }
  ],

  coupons: {
    'AEROX2026': { discount: 0.15, desc: '全館 85 折優惠券 (現省 15%)' },
    'FREESHIP': { discount: 0, freeShipping: true, desc: '全館免運費優惠' },
    'VIP10': { discount: 0.10, desc: 'VIP 會員專屬 9 折優惠' }
  },

  quizQuestions: [
    {
      id: 'goal',
      title: '1. 您最主要的運動目標與場景？',
      options: [
        { label: '馬拉松路跑 / 刷 PB 競速', category: 'running', icon: 'zap' },
        { label: '日常慢跑 / 規律體能維持', category: 'running', icon: 'heart' },
        { label: '重訓健身 / CrossFit 高強度訓練', category: 'training', icon: 'activity' },
        { label: '戶外越野 / 登山步道探險', category: 'outdoor', icon: 'compass' }
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
