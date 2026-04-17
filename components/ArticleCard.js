import Link from 'next/link';

const categoryColors = {
  guides: 'bg-green-100 text-green-800',
  reviews: 'bg-blue-100 text-blue-800',
  tips: 'bg-amber-100 text-amber-800',
  news: 'bg-purple-100 text-purple-800',
  default: 'bg-gray-100 text-gray-800',
};

export default function ArticleCard({ title, slug, excerpt, category, readingTime, date }) {
  const tagColor = categoryColors[category?.toLowerCase()] || categoryColors.default;

  return (
    <Link href={`/${slug}`} className="block no-underline group">
      <article className="card h-full flex flex-col p-5">
        {/* Category Tag & Meta */}
        <div className="flex items-center justify-between mb-3">
          {category && (
            <span className={`tag ${tagColor}`}>
              {category}
            </span>
          )}
          {readingTime && (
            <span className="text-xs font-sans text-gray-400">
              {readingTime} min read
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="font-sans text-lg font-semibold text-gray-900 group-hover:text-forest transition-colors duration-200 mb-2">
          {title}
        </h3>

        {/* Excerpt */}
        {excerpt && (
          <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-grow">
            {excerpt}
          </p>
        )}

        {/* Date */}
        {date && (
          <div className="mt-auto pt-3 border-t border-gray-100">
            <time className="text-xs font-sans text-gray-400" dateTime={date}>
              {new Date(date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
          </div>
        )}
      </article>
    </Link>
  );
}
