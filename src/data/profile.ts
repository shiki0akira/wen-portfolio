// Site-wide personal info and the full online resume.
// Never put phone number, home address, age or salary here — this site is public.

export const profile = {
  nameZh: '張品妏',
  nameEn: 'Pin Wen Zhang',
  title: 'UI/UX Designer & Product Planner',
  tagline: '把模糊的需求，變成真正上線的產品。',
  motto: '“Be transformed by the renewing of your mind.”',
  // Portrait for the About page, e.g. '/images/about/portrait.webp'. Empty = no photo.
  photo: '/images/about/portrait.webp',
  location: '可遠端合作',
  status: '接案中',
  email: 'shiki0akira@gmail.com',
  links: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/wen-zhang-designer' },
    { label: 'Behance', href: 'https://www.behance.net/shiki0akir25ef' },
    { label: 'GitHub', href: 'https://github.com/shiki0akira' },
    { label: 'Threads', href: 'https://www.threads.com/@pin._.wen' },
  ],
  // Home page: each ability backed by one piece of evidence. value 'works' = number of work pages.
  proofs: [
    { ability: '跨產業的產品經驗', value: 6, suffix: '', unit: '年', desc: '電商、B2B SaaS、AI、金融科技、工業設備', href: '/experience/', cta: '看經歷' },
    { ability: '做過的專案作品', value: 'works', suffix: '', unit: '個', desc: '正職、個人產品、接案與競賽', href: '/work/', cta: '看作品' },
    { ability: '為產品結果負責', value: 500, suffix: '+', unit: '家', desc: 'BIRSE 電商客戶，每年營收破百萬', href: '/work/birse/', cta: '看案例' },
    { ability: '用 AI 快速做出產品', value: 900, suffix: '+', unit: '位', desc: 'Web100 使用者，6 個產品都是我用 AI 做的', href: '/work/web100/', cta: '看案例' },
  ],
};

export type Project = { name: string; work?: string; points: string[] };
export type Job = {
  period: string;
  duration?: string;
  title: string;
  company: string;
  // Optional link to the company or brand site.
  companyUrl?: string;
  meta: string;
  summary: string;
  projects: Project[];
  tags?: string[];
};

export const experience: Job[] = [
  {
    period: '2026/6 — 現在',
    title: 'UI/UX 設計師・獨立產品開發',
    company: '自由工作者',
    meta: '遠端',
    summary: '接 UI/UX 設計案，同時經營自己的產品 Web100。',
    projects: [
      {
        name: '個人產品：Web100 互動網頁小遊戲',
        work: 'web100',
        points: [
          '用 Claude Code 獨立做出 6 個聚會用的互動網頁，支援 8 種語言',
          '上線至今 900+ 位使用者，也親自帶人試玩，持續修正',
        ],
      },
    ],
  },
  {
    period: '2023/3 — 2026/6',
    duration: '3 年 4 個月',
    title: 'UX Designer',
    company: 'BigGo 樂方股份有限公司',
    meta: '電腦軟體服務業',
    summary: '負責 B2B 與 B2C 產品的流程、規格與介面。規格直接寫在 Figma 上，工程師照著開發和驗收。',
    projects: [
      {
        name: 'BIRSE：Shopify 圖片搜尋套件（主要負責人）',
        work: 'birse',
        points: [
          '主動提出申請 Shopify 官方認證，自己研讀規範、調整產品，最後成功取得',
          '為服飾、家具類電商設計「用圖片找商品」，讓消費者更快找到想買的東西',
          '後期全權負責這個產品，包含後台設定與客戶問題',
          '累積 500+ 家電商客戶，每年營收破百萬',
        ],
      },
      {
        name: 'BigGo PMS：價格監控系統',
        work: 'pms',
        points: [
          '設計數據圖表與企業用的功能，幫品牌商省下人工比價的時間',
          '導入 LG、萬家福、中華郵政、桂格等企業客戶',
        ],
      },
      {
        name: 'OAPhub：AI 工具整合平台',
        work: 'oaphub',
        points: ['研究競品後發現「資訊太亂」是最大問題，重新整理了整個平台的架構'],
      },
      {
        name: 'Dive：開源 AI 桌面應用',
        work: 'dive',
        points: ['協助檢視使用流程，參與 Dive 與 OAPhub 設計規範的統一'],
      },
    ],
    tags: ['Figma', 'SaaS', '競品分析', 'AI'],
  },
  {
    period: '2022/9 — 2023/2',
    duration: '6 個月',
    title: 'UI/UX 設計師',
    company: '榮興自動化科技股份有限公司',
    meta: '自動控制相關業',
    summary: '負責倉儲系統的改版，以及品牌 Logo 與社群視覺。',
    projects: [
      {
        name: 'WMS 倉儲系統改版',
        work: 'wms',
        points: [
          '只用 2 個月，完成原本開發了一年的系統介面改版，電腦和手機都能用',
          '從零建立設計規範與元件庫，之後改版和開發都更快',
        ],
      },
      { name: '品牌視覺', points: ['設計公司品牌 ROSATI 的 Logo', '設計公司社群的節慶視覺，例如 2023 新年賀圖'] },
    ],
  },
  {
    period: '2020/8 — 2022/5',
    duration: '1 年 10 個月',
    title: 'UI/UX 視覺介面設計師',
    company: 'AI Art 智光網・喜騰有限公司',
    meta: '電腦軟體服務業・全遠端',
    summary: '全遠端工作，多數專案從無到有由我獨立完成。',
    projects: [
      {
        name: 'AI Hedge.finance：加密貨幣交易平台',
        work: 'aihedge-dapp',
        points: [
          '從流程、原型到設計規範，獨立完成網頁版與手機版',
          '把交易、連接錢包這些複雜步驟，設計成新手也能順利完成',
        ],
      },
      {
        name: 'AI Hedge：官方網站與品牌',
        work: 'aihedge-brand',
        points: ['設計官方網站、品牌識別，並製作產品介紹影片'],
      },
    ],
  },
  {
    period: '2019/8 — 2020/4',
    duration: '9 個月',
    title: '產品設計師',
    company: '旗津窯文化藝術股份有限公司',
    companyUrl: 'https://www.1300porcelain.com/',
    meta: '陶瓷製品製造業・品牌 1300',
    summary: '實體產品設計，以及大型裝置藝術專案。',
    projects: [
      { name: '裝置藝術專案', points: ['協調設計、製造廠商與施工現場三方溝通'] },
      { name: '產品設計', points: ['用 3D 建模設計產品外觀，再用 3D 列印驗證細節'] },
    ],
  },
];

export const education = [
  { school: '國立成功大學', dept: '工業設計學系 碩士在職專班（就讀中）', period: '2026/9 — 2028/6' },
  { school: '國立臺北科技大學', dept: '工業設計學系 產品設計組・學士', period: '2015/9 — 2019/6' },
  { school: '高雄市立高雄高級商業職業學校', dept: '廣告設計科', period: '2012/9 — 2015/6' },
];

export const skills = [
  {
    name: '產品規劃',
    desc: '訪談需求、分析競品、畫流程、寫規格，把模糊的想法變成工程師可以直接開發的文件。',
    tags: ['競品分析', '規格撰寫', '使用者測試'],
  },
  {
    name: 'UI/UX 設計',
    desc: '從線框圖、原型到設計規範，擅長 B2B 系統、電商與金融產品。',
    tags: ['Figma', 'Prototype', 'Design System'],
  },
  {
    name: '用 AI 做產品',
    desc: '先和 AI 討論規則、寫成規格，再交給 Claude Code 實作，最後由我測試驗收。也用 NotebookLM、Gemini 整理資料和做研究。',
    tags: ['Claude Code', 'Gemini', 'NotebookLM', 'MCP'],
  },
  {
    name: '數據與 SEO',
    desc: '用 GA4 看使用者行為，用 Search Console 處理搜尋排名與多語系頁面。',
    tags: ['GA4', 'Search Console', 'SEO'],
  },
  {
    name: '懂技術',
    desc: '會寫 HTML、CSS，會自己部署網站，能直接和工程師討論做法。',
    tags: ['HTML', 'CSS', 'JavaScript', 'Git'],
  },
  {
    name: '團隊協作',
    desc: '用 GitHub Issue 追蹤需求，熟悉 Scrum 流程。',
    tags: ['Scrum', 'JIRA', 'GitHub'],
  },
];

export const awards = [
  { year: '2022', name: 'THE F2E 4th 黑客松（團體組）', result: '兩項作品入圍' },
  { year: '2019', name: '家電設計競賽', result: '佳作' },
  { year: '2019', name: '北科大工設系設計週', result: '燦坤企業贊助銅獎' },
  { year: '2018', name: '第六屆人因工程高齡輔助設計', result: '第二名' },
  { year: '2018', name: 'Lexus Workshop 台北場', result: '最佳創意設計獎' },
  { year: '2016', name: 'NYHI 守護海洋創意 T-shirt 設計比賽', result: '佳作' },
  { year: '2016', name: '健康科技 APP 應用創新競賽', result: '第三名、表板設計第二名' },
];

// About page self-introduction. Each section has paragraphs and/or numbered points.
export type AboutSection = { heading: string; body?: string[]; points?: { title: string; text: string }[] };
export const about: AboutSection[] = [
  {
    heading: '關於我',
    body: [
      '我是張品妏（Wen），有 6 年經驗的 UI/UX 設計師與產品規劃。做過電商、B2B SaaS、AI、金融科技和工業設備等產業的產品，從整理需求、設計介面，到用 AI 把網站做上線，都可以一起完成。',
    ],
  },
  {
    heading: '做過的產品',
    body: [
      '在 BigGo 負責 Shopify App BIRSE，取得 Shopify 官方認證，累積 500+ 家電商客戶。也設計過導入 LG、萬家福等企業的價格監控系統，並用 2 個月完成研發期一年的倉儲系統改版。',
    ],
  },
  {
    heading: '合作時你可以期待',
    points: [
      { title: '先搞懂需求，再動手設計', text: '先釐清目標使用者和要解決的問題，不做好看卻用不到的畫面。' },
      { title: '交付的設計，工程師拿到就能做', text: '流程、規格和元件都整理清楚，減少來回溝通。我也懂前端，能直接和你的工程師討論做法。' },
      { title: '用 AI 加快速度', text: '用 Claude Code 從規格到上線，最快 4 個晚上做出第一個產品，適合想快速驗證想法的專案。' },
      { title: '遠端合作很順', text: '有近兩年全遠端工作的經驗，用 Figma、GitHub 協作，定期同步進度，依回饋調整。' },
    ],
  },
];

// For freelance clients (home page "合作" section).
export const services = [
  {
    name: 'UI/UX 介面設計',
    desc: '網站、App、後台與儀表板的介面設計，附可以點的原型。',
    tags: ['B2B 系統', '管理後台', '電商'],
  },
  {
    name: 'AI 輔助生成網站',
    desc: '用 Claude Code 從規格到上線，快速做出能實際使用的網站。',
    tags: ['活動網站', '產品驗證'],
  },
  {
    name: '設計系統',
    desc: '建立統一的視覺規範與元件庫，之後改版和開發都更快。',
    tags: ['系統改版', '元件庫'],
  },
  {
    name: '產品規劃與規格',
    desc: '幫你把想法整理成清楚的流程和規格，工程師拿到就能開發。',
    tags: ['新產品', '需求整理', '規格文件'],
  },
];

export const process = [
  { step: '聊需求', desc: '了解你的目標和時程' },
  { step: '提案報價', desc: '確認範圍與交付內容' },
  { step: '設計與開發', desc: '定期同步，依回饋調整' },
  { step: '交付上線', desc: '交付設計檔或上線網站' },
];
