---
title: 幸福模擬器：七週團體課程的多人互動遊戲
summary: 七週團體課程用的互動遊戲。主持人用大螢幕帶，每個人用手機參與，約 3 週完成。
category: 個人產品
period: "2026"
role: 獨立開發（規格・設計・AI 協作開發）
type: 即時多人 Web App
cover: /images/web100/web100-happiness.webp
coverAlt: 幸福模擬器首頁，像素風格，列出七個關卡
tags: [即時多人連線, 規格驅動, Cloudflare Workers]
order: 3
featured: true
metrics:
  - { value: "7", label: 個關卡 }
  - { value: "3 週", label: 從規格到上線 }
  - { value: "20–25", label: 每關分鐘數 }
links:
  - { label: 前往幸福模擬器, href: "https://www.vibeweb100.com/happiness/zh-TW/" }
---

## 背景

這是為七週團體課程做的互動遊戲，也是 Web100 系列中最大的產品。

畫面上有兩條線：上面那條被生活推來推去，像升遷、意外、一張檢查報告，你控制不了；下面那條不受影響，只會往上長。七關走完，兩條線並排在眼前，哪一條才是幸福，不用別人告訴你。

## 怎麼玩

- 主持人用大螢幕帶領，每個人掃 QR code 用手機加入
- 共 7 關，每關 20～25 分鐘
- 像素風格，所有人即時同步

## 我怎麼和 AI 一起做出來

1. 和 AI 討論每一關的流程與規則
2. 寫成規格文件
3. 交給 Claude Code 實作
4. 我自己開房間、用多支手機測試

AI 負責執行，判斷與驗收由我負責。從規格到上線約 3 週。

<div class="todo">待補：放一張規格文件的截圖，以及一張大螢幕＋手機同時操作的畫面。</div>
