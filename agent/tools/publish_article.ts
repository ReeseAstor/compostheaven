import { defineTool } from 'eve/tools';
import { eq } from 'drizzle-orm';
import { db } from '../../lib/db/index.js';
import { autopilotArticles } from '../../lib/db/schema.js';
import { getArticleCatalog } from '../../lib/articles.js';
import { articleInput, assertScheduledCaller, validateArticle, weekKey } from '../../lib/autopilot-validation.js';

export default defineTool({
  description: 'Validate and publish one researched article. Enforces source links, metadata, existing internal links, topic checks and an atomic weekly limit.',
  inputSchema: articleInput,
  availableInSubagents: false,
  async execute(input, ctx) {
    assertScheduledCaller(ctx.session.auth.current);
    const key = weekKey();
    const [previous] = await db.select({ slug: autopilotArticles.slug }).from(autopilotArticles).where(eq(autopilotArticles.weekKey, key));
    if (previous) return { status: 'already_published', slug: previous.slug };
    const article = validateArticle(input, await getArticleCatalog());
    for (const source of article.sources) {
      const response = await fetch(source.url, { redirect: 'error', signal: AbortSignal.timeout(10000) });
      await response.body?.cancel();
      if (!response.ok) throw new Error(`Source could not be verified: ${source.url}`);
    }
    const [created] = await db.insert(autopilotArticles).values({ ...article, weekKey: key }).onConflictDoNothing().returning({ slug: autopilotArticles.slug });
    if (!created) return { status: 'already_published', message: 'A concurrent run published this week or used this slug. Stop.' };
    return { status: 'published', url: `https://www.compostheaven.com/${created.slug}`, visibility: 'Blog and sitemap refresh within five minutes.' };
  },
});
