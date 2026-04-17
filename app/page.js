import Link from 'next/link';
import ArticleCard from '@/components/ArticleCard';
import EmailSignup from '@/components/EmailSignup';
import { getArticles } from '@/lib/articles';

export const metadata = {
  title: 'CompostHeaven - Your Complete Guide to Composting',
  description:
    'Learn everything about composting with our in-depth guides, honest product reviews, and practical tips. Turn your kitchen scraps into nutrient-rich garden gold.',
};

export default function HomePage() {
  const articles = getArticles();
  const featuredArticles = articles.slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-forest text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
            Your Complete Guide to Composting &mdash; From Kitchen Scraps to Garden Gold
          </h1>
          <p className="text-lg sm:text-xl text-white/85 max-w-2xl mx-auto mb-10 leading-relaxed">
            Whether you&apos;re starting your first worm bin or perfecting your compost recipe,
            CompostHeaven has the honest reviews, in-depth guides, and practical tips you need to succeed.
          </p>
          <Link
            href="/worm-composting-beginners-guide"
            className="inline-block bg-white text-forest font-sans font-bold text-lg px-8 py-4 rounded-lg hover:bg-cream transition-colors duration-200 no-underline"
          >
            Start Here
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
            {[
              'Independent Reviews',
              'Updated Monthly',
              'No Sponsored Content',
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm font-sans text-gray-600">
                <svg
                  className="w-5 h-5 text-forest flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Start Here Pathway */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-earth-dark mb-4">
          Start Here
        </h2>
        <p className="text-center text-gray-600 max-w-xl mx-auto mb-12">
          New to composting? Follow these three simple steps to go from zero to thriving worm bin.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              step: 1,
              title: 'Read the Beginner Guide',
              description:
                'Our comprehensive guide walks you through everything — setup, bedding, moisture, and your first feeding.',
              href: '/worm-composting-beginners-guide',
            },
            {
              step: 2,
              title: 'Choose Your Bin',
              description:
                'We tested the top worm bins head-to-head so you can find the perfect match for your space and budget.',
              href: '/best-worm-composting-bins',
            },
            {
              step: 3,
              title: 'Start Composting',
              description:
                'Learn exactly what to feed your worms, how to harvest castings, and how to troubleshoot common issues.',
              href: '/what-to-feed-composting-worms',
            },
          ].map(({ step, title, description, href }) => (
            <Link key={step} href={href} className="no-underline group">
              <div className="card p-6 h-full flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-forest text-white flex items-center justify-center font-sans font-bold text-xl mb-4">
                  {step}
                </div>
                <h3 className="font-sans text-lg font-semibold text-gray-900 group-hover:text-forest transition-colors duration-200 mb-2">
                  {title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Articles */}
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-earth-dark mb-12">
            Featured Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredArticles.map((article) => (
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
        </div>
      </section>

      {/* Email Signup */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <EmailSignup />
      </section>

      {/* Bottom CTA */}
      <section className="text-center pb-16">
        <Link href="/blog" className="btn-outline">
          Browse All Articles
        </Link>
      </section>
    </>
  );
}
