import { z } from 'zod';

export const articleInput = z.object({
  slug: z.string().min(8).max(90).regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
  title: z.string().min(20).max(110),
  metaTitle: z.string().min(20).max(65),
  metaDescription: z.string().min(110).max(165),
  excerpt: z.string().min(60).max(240),
  category: z.enum(['Beginner Guides', 'How-To', 'Soil Science', 'Worm Species']),
  content: z.string().min(3000).max(22000),
  sources: z.array(z.object({ title: z.string().min(5).max(200), url: z.string().url() })).min(2).max(5),
});

export function weekKey(date = new Date()) {
  const monday = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));
  monday.setUTCDate(monday.getUTCDate() - (monday.getUTCDay() + 6) % 7);
  return monday.toISOString().slice(0, 10);
}

export function assertScheduledCaller(auth) {
  if (auth?.authenticator !== 'app' || auth?.principalId !== 'eve:app' || auth?.principalType !== 'runtime') {
    throw new Error('Publishing is restricted to the scheduled runtime.');
  }
  if (process.env.VERCEL_ENV !== 'production') throw new Error('Publishing is disabled outside production.');
}

export function validateArticle(input, existing) {
  const article = articleInput.parse(input);
  const words = article.content.trim().split(/\s+/).length;
  if (words < 800 || words > 1800) throw new Error('Article must contain 800–1800 words.');
  if (/[<>]|```|!\[|^#\s|\[(?:LINK|AFFILIATE|EMAIL|PINTEREST):/m.test(article.content)) throw new Error('Use plain markdown without HTML, images, H1, code, or placeholders.');
  if (!/^## Frequently Asked Questions\s*$/m.test(article.content) || !/^### .+\?/m.test(article.content) || !/^## Sources\s*$/m.test(article.content)) throw new Error('Include visible FAQs and Sources sections.');
  if ([article.title, article.metaTitle, article.metaDescription, article.excerpt, ...article.sources.map(s => s.title)].some(text => /[<>]/.test(text))) throw new Error('Metadata must be plain text.');
  const reserved = new Set(['about', 'blog', 'contact', 'privacy-policy', 'disclaimer', 'api', 'eve', 'sitemap', 'robots', ...existing.map(a => a.slug)]);
  if (reserved.has(article.slug)) throw new Error('Slug already exists or is reserved.');
  const tokens = text => new Set(text.toLowerCase().match(/[a-z]{4,}/g) || []);
  const incoming = tokens(article.title);
  for (const post of existing) {
    const other = tokens(post.title);
    const overlap = [...incoming].filter(t => other.has(t)).length;
    if (overlap / Math.max(1, Math.min(incoming.size, other.size)) >= 0.8) throw new Error('Topic is too similar to an existing article.');
  }
  const sourceUrls = new Set(article.sources.map(source => {
    const url = new URL(source.url);
    if (url.protocol !== 'https:' || url.port || url.username || url.password || !/\.(edu|gov)$/.test(url.hostname)) throw new Error('Sources must be HTTPS university or government URLs.');
    if (!article.content.includes(`](${source.url})`)) throw new Error('Every source must be visibly cited.');
    return source.url;
  }));
  if (sourceUrls.size < 2) throw new Error('Use at least two distinct sources.');
  const links = [...article.content.matchAll(/\[[^\]]+\]\(([^\s)]+)\)/g)].map(match => match[1]);
  const internal = new Set();
  for (const href of links) {
    if (existing.some(post => href === `/${post.slug}`)) internal.add(href);
    else if (!sourceUrls.has(href)) throw new Error(`Unknown or unsupported link: ${href}`);
  }
  if (internal.size < 2) throw new Error('Link to at least two existing articles.');
  return article;
}
