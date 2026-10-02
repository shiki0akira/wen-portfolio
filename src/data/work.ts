// Work entries in a given language. English entries override the Chinese text fields and body;
// structural fields (order, cover, category, featured...) always come from the Chinese entry.
import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from './i18n';

export type WorkItem = {
  id: string;
  data: CollectionEntry<'work'>['data'];
  // The entry whose Markdown body should be rendered for this language.
  body: CollectionEntry<'work'> | CollectionEntry<'workEn'>;
};

export async function getWork(lang: Lang): Promise<WorkItem[]> {
  const zh = await getCollection('work');
  const en = lang === 'en' ? await getCollection('workEn') : [];
  return zh
    .map(w => {
      const t = en.find(e => e.id === w.id);
      if (!t) return { id: w.id, data: w.data, body: w };
      const data = {
        ...w.data,
        ...Object.fromEntries(Object.entries(t.data).filter(([, v]) => v !== undefined)),
      } as WorkItem['data'];
      return { id: w.id, data, body: t.body?.trim() ? t : w };
    })
    .sort((a, b) => a.data.order - b.data.order);
}

// Static paths for case pages (freelance work has no detail page), with previous/next links.
export async function getCasePaths(lang: Lang) {
  const { hasDetailPage } = await import('./categories');
  const all = (await getWork(lang)).filter(w => hasDetailPage(w.data.category));
  return all.map((entry, i) => ({
    params: { slug: entry.id },
    props: { lang, entry, prev: all[i - 1], next: all[i + 1] },
  }));
}
