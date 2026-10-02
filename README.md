# 張品妏 Pin Wen Zhang — Portfolio

UI/UX Designer & Product Planner 的作品集網站：https://shiki0akira.github.io/wen-portfolio/

使用 [Astro](https://astro.build) 製作，推送到 `main` 後由 GitHub Actions 自動部署到 GitHub Pages。

```bash
npm install
npm run dev     # 本機預覽 http://localhost:4321（上線版會自動加上 /wen-portfolio 路徑）
npm run build   # 建置到 dist/
```

- 作品內容：`src/content/work/*.md`
- 個人資料、經歷、服務：`src/data/profile.ts`（英文：`profile.en.ts`）
- 英文作品內容：`src/content/work-en/*.md`（只需寫文字欄位，其餘沿用中文檔）
- 介面文字：`src/data/i18n.ts`；英文網址在 `/en/` 底下
