import { getArticles, getArticleBySlug, getArticleSlugs } from '@/lib/articles';
import { markdownToHtml } from '@/lib/markdown';
import EmailSignup from '@/components/EmailSignup';
import ArticleCard from '@/components/ArticleCard';
import Link from 'next/link';

export async function generateStaticParams() {
  const slugs = getArticleSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return { title: 'Article Not Found' };
  }

  return {
    title: article.metaTitle,
    description: article.metaDescription,
    alternates: {
      canonical: `/${slug}`,
    },
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      type: 'article',
      publishedTime: article.date,
    },
  };
}

export default async function ArticlePage({ params }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-3xl font-bold text-earth-dark mb-4">Article Not Found</h1>
        <p className="text-gray-600 mb-8">
          Sorry, we couldn&apos;t find the article you&apos;re looking for.
        </p>
        <Link href="/blog" className="btn-primary">
          Browse All Articles
        </Link>
      </div>
    );
  }

  const contentHtml = markdownToHtml(article.content);

  // Get related articles (exclude current article, take first 3)
  const allArticles = getArticles();
  const relatedArticles = allArticles
    .filter((a) => a.slug !== article.slug)
    .slice(0, 3);

  // JSON-LD structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.metaDescription,
    datePublished: article.date,
    dateModified: article.date,
    author: {
      '@type': 'Organization',
      name: 'The CompostHeaven Team',
      url: 'https://www.compostheaven.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'CompostHeaven',
      url: 'https://www.compostheaven.com',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.compostheaven.com/${article.slug}`,
    },
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Article Header */}
        <header className="mb-10">
          {article.category && (
            <span className="tag bg-green-100 text-green-800 mb-4 inline-block">
              {article.category}
            </span>
          )}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-earth-dark leading-tight mb-4">
            {article.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 font-sans">
            {article.date && (
              <time dateTime={article.date}>
                {new Date(article.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            )}
            {article.readingTime && (
              <>
                <span className="text-gray-300">|</span>
                <span>{article.readingTime}</span>
              </>
            )}
            <span className="text-gray-300">|</span>
            <span>By The CompostHeaven Team</span>
          </div>
        </header>

        {/* Article Body */}
        <div
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </article>

      {/* Email Signup */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <EmailSignup />
      </section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-earth-dark mb-8">
            Related Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedArticles.map((related) => (
              <ArticleCard
                key={related.slug}
                title={related.title}
                slug={related.slug}
                excerpt={related.excerpt}
                category={related.category}
                readingTime={related.readingTime}
                date={related.date}
              />
            ))}
          </div>
        </section>
      )}

      {/* FTC Disclosure */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="border-t border-gray-200 pt-8">
          <p className="text-xs text-gray-400 leading-relaxed">
            CompostHeaven.com is reader-supported. When you buy through links on our
            site, we may earn an affiliate commission at no additional cost to you. This
            does not influence our reviews or recommendations &mdash; we only recommend
            products we genuinely believe in. See our{' '}
            <Link
              href="/disclaimer#affiliate-disclosure"
              className="text-forest hover:text-forest-dark underline"
            >
              full disclosure
            </Link>{' '}
            for details.
          </p>
        </div>
      </section>
    </>
  );
}
