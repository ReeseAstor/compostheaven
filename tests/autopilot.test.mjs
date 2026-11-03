import test from 'node:test';
import assert from 'node:assert/strict';
import { validateArticle, weekKey, assertScheduledCaller } from '../lib/autopilot-validation.js';
import { markdownToHtml } from '../lib/markdown.js';

const existing = [{ slug: 'feeding-guide', title: 'What to Feed Composting Worms' }, { slug: 'worm-bins', title: 'Choosing a Worm Bin' }];
const article = () => ({
  slug: 'winter-compost-moisture', title: 'Managing Moisture During Cold Winter Weather',
  metaTitle: 'Winter Compost Moisture: Practical Steps',
  metaDescription: 'Learn how to monitor compost moisture during winter weather, protect a small bin from rain, and adjust bedding without overfeeding.',
  excerpt: 'Practical steps for monitoring moisture and protecting a small composting setup through cold weather.',
  category: 'How-To',
  content: `## Moisture checks\n${'Check moisture and adjust dry bedding gradually. '.repeat(120)}\n[Feeding](/feeding-guide) and [Bins](/worm-bins).\n## Frequently Asked Questions\n### When should I check?\nCheck regularly.\n## Sources\n[University](https://extension.umn.edu/compost)\n[Government](https://www.epa.gov/composting)`,
  sources: [{ title: 'University extension', url: 'https://extension.umn.edu/compost' }, { title: 'Government composting', url: 'https://www.epa.gov/composting' }],
});

test('week key is stable across Sunday and handles year boundaries', () => {
  assert.equal(weekKey(new Date('2027-01-03T23:59:59Z')), '2026-12-28');
  assert.equal(weekKey(new Date('2027-01-04T00:00:00Z')), '2027-01-04');
});
test('valid article passes deterministic checks', () => assert.equal(validateArticle(article(), existing).slug, 'winter-compost-moisture'));
test('rejects existing routes and near duplicate topics', () => {
  assert.throws(() => validateArticle({ ...article(), slug: 'disclaimer' }, existing), /reserved/);
  assert.throws(() => validateArticle({ ...article(), title: 'What to Feed Composting Worms Today' }, existing), /similar/);
});
test('rejects untrusted sources, duplicate sources and broken internal links', () => {
  const badSource = article(); badSource.sources[0].url = 'https://127.0.0.1/private';
  assert.throws(() => validateArticle(badSource, existing), /university/);
  const duplicate = article(); duplicate.sources[1] = duplicate.sources[0];
  assert.throws(() => validateArticle(duplicate, existing), /distinct/);
  const broken = article(); broken.content = broken.content.replace('/feeding-guide', '/missing-page');
  assert.throws(() => validateArticle(broken, existing), /Unknown/);
});
test('rejects unsafe markup, short content and missing FAQ', () => {
  assert.throws(() => validateArticle({ ...article(), content: article().content + '<script>alert(1)</script>' }, existing), /plain markdown/);
  assert.throws(() => validateArticle({ ...article(), content: 'too short' }, existing));
  assert.throws(() => validateArticle({ ...article(), content: article().content.replace('## Frequently Asked Questions', '## Other') }, existing), /visible FAQs/);
});
test('blocks anonymous, user and preview publishers', () => {
  assert.throws(() => assertScheduledCaller(null), /restricted/);
  assert.throws(() => assertScheduledCaller({ principalId: 'someone', principalType: 'user' }), /restricted/);
  const before = process.env.VERCEL_ENV;
  process.env.VERCEL_ENV = 'preview';
  try { assert.throws(() => assertScheduledCaller({ authenticator: 'app', principalId: 'eve:app', principalType: 'runtime' }), /outside production/); }
  finally { if (before === undefined) delete process.env.VERCEL_ENV; else process.env.VERCEL_ENV = before; }
});
test('renderer removes scripts and unsafe link schemes', () => {
  const html = markdownToHtml('<script>alert(1)</script>\n[click](javascript:alert(1))');
  assert.ok(!html.includes('<script'));
  assert.ok(!html.includes('javascript:'));
});
