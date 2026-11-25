import rss from '@astrojs/rss';
import { getArticles } from '../lib/articles';
import { SITE } from '../config';

export async function GET(context) {
  const items = (await getArticles()).map((a) => ({
    title: a.data.title,
    description: a.data.description,
    pubDate: a.data.date,
    link: `/articles/${a.id}/`,
  }));
  return rss({
    title: `${SITE.name} articles`,
    description: SITE.description,
    site: context.site ?? SITE.url,
    items,
  });
}
