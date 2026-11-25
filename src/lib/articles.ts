import { getCollection } from 'astro:content';

export async function getArticles() {
  const all = await getCollection('articles', ({ data }) => import.meta.env.DEV || !data.draft);
  return all.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export const fmt = (d: Date) => d.toLocaleDateString('en-GB', { month: 'long', year: 'numeric' });
