export const categories = ['正職專案', '個人產品', '接案作品', '競賽與學生作品'] as const;

// Freelance work is shown as a card only: client work often can't be shown in detail.
export const hasDetailPage = (category: string) => category !== '接案作品';

// "名稱：副標題" / "Name: subtitle" -> { name, subtitle }. Titles without a colon have no subtitle.
export const splitTitle = (title: string) => {
  const m = title.match(/^(.*?)(?:：|: )(.*)$/);
  return m ? { name: m[1], subtitle: m[2] } : { name: title, subtitle: '' };
};
