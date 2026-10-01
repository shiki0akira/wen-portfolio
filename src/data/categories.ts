export const categories = ['正職專案', '個人產品', '接案作品', '競賽與學生作品'] as const;

// Freelance work is shown as a card only: client work often can't be shown in detail.
export const hasDetailPage = (category: string) => category !== '接案作品';
