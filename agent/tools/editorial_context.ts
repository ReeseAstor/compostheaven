import { defineTool } from 'eve/tools';
import { z } from 'zod';
import { getArticleCatalog } from '../../lib/articles.js';
import { assertScheduledCaller, weekKey } from '../../lib/autopilot-validation.js';

export default defineTool({
  description: 'Get the weekly publishing status and existing topics and links. Call before researching.',
  inputSchema: z.object({}),
  async execute(_input, ctx) {
    assertScheduledCaller(ctx.session.auth.current);
    const articles = await getArticleCatalog();
    return {
      week: weekKey(),
      alreadyPublished: articles.some(article => article.weekKey === weekKey()),
      articles: articles.map(({ slug, title, excerpt }) => ({ path: `/${slug}`, title, excerpt })),
    };
  },
});
