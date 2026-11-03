import { pgTable, text, jsonb, timestamp } from 'drizzle-orm/pg-core';

export const autopilotArticles = pgTable('autopilot_articles', {
  slug: text('slug').primaryKey(),
  weekKey: text('week_key').notNull().unique(),
  title: text('title').notNull(),
  metaTitle: text('meta_title').notNull(),
  metaDescription: text('meta_description').notNull(),
  excerpt: text('excerpt').notNull(),
  category: text('category').notNull(),
  content: text('content').notNull(),
  sources: jsonb('sources').notNull(),
  publishedAt: timestamp('published_at', { withTimezone: true }).notNull().defaultNow(),
});
