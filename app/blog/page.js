import ArticleCard from '@/components/ArticleCard';
import { getArticles } from '@/lib/articles';

export const metadata = {
  title: 'Blog',
  description:
    'Browse all composting articles, guides, and product reviews from CompostHeaven. Everything you need to master composting at home.',
  alternates: {
    canonical: '/blog',
  },
};

export default function BlogPage() {
  const articles = getArticles();

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl sm:text-4xl font-bold text-earth-dark mb-4">
        All Articles
      </h1>
      <p className="text-gray-600 mb-12 max-w-2xl">
        Guides, reviews, and tips to help you compost smarter. Whether you&apos;re a
        beginner or experienced composter, there&apos;s something here for you.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <ArticleCard
            key={article.slug}
            title={article.title}
            slug={article.slug}
            excerpt={article.excerpt}
            category={article.category}
            readingTime={article.readingTime}
            date={article.date}
          />
        ))}
      </div>
    </section>
  );
}
