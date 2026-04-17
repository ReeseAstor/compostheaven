import Link from 'next/link';

export const metadata = {
  title: 'About CompostHeaven',
  description:
    'Learn about CompostHeaven, our mission to make composting accessible to everyone, and the team behind your trusted composting resource.',
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl sm:text-4xl font-bold text-earth-dark mb-8">
        About CompostHeaven
      </h1>

      {/* Story */}
      <div className="prose prose-lg max-w-none mb-16">
        <p className="text-lg text-gray-700 leading-relaxed">
          CompostHeaven was born from a simple belief: composting should be accessible
          to everyone. What started as one person&apos;s kitchen worm bin has grown into
          a trusted resource for thousands of gardeners, apartment dwellers, and
          eco-conscious families looking to reduce waste and enrich their soil.
        </p>
        <p>
          We started this site after spending countless hours researching composting
          methods, buying bins that didn&apos;t live up to their promises, and learning
          the hard way which worms actually thrive indoors. We figured if we had to do
          all that research anyway, we might as well share what we learned so others
          wouldn&apos;t have to make the same mistakes.
        </p>
        <p>
          Today, CompostHeaven is the go-to resource for everything from choosing your
          first worm bin to optimizing microbial activity in your finished compost.
          Every guide is written from real experience, every product is genuinely tested,
          and every recommendation is backed by our honest assessment.
        </p>
      </div>

      {/* Our Mission */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-earth-dark mb-4 border-b border-gray-200 pb-2">
          Our Mission
        </h2>
        <div className="prose prose-lg max-w-none">
          <p>
            We believe that composting is one of the most impactful things an individual
            can do for the environment. It diverts food waste from landfills, reduces
            methane emissions, and creates nutrient-rich soil that helps plants thrive
            without synthetic fertilizers.
          </p>
          <p>
            Our mission is to break down the barriers to composting &mdash; whether
            that&apos;s confusion about what to feed your worms, uncertainty about which
            bin to buy, or the misconception that composting is smelly and difficult.
            It&apos;s not. And we&apos;re here to prove it.
          </p>
        </div>
      </section>

      {/* What We Cover */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-earth-dark mb-4 border-b border-gray-200 pb-2">
          What We Cover
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {[
            {
              title: 'Beginner Guides',
              description:
                'Step-by-step instructions that take you from zero experience to a thriving compost system.',
            },
            {
              title: 'Product Reviews',
              description:
                'Honest, hands-on reviews of worm bins, compost tumblers, and composting accessories.',
            },
            {
              title: 'How-To Articles',
              description:
                'Practical guides covering feeding schedules, harvesting techniques, and troubleshooting tips.',
            },
            {
              title: 'Soil Science',
              description:
                'In-depth articles on beneficial microbes, nutrient cycling, and the biology of healthy compost.',
            },
          ].map(({ title, description }) => (
            <div key={title} className="card p-6">
              <h3 className="font-sans text-lg font-semibold text-forest mb-2">{title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Promise */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-earth-dark mb-4 border-b border-gray-200 pb-2">
          Our Promise
        </h2>
        <div className="prose prose-lg max-w-none">
          <ul>
            <li>
              <strong>Independent &amp; honest:</strong> We are not owned by any
              manufacturer. Our reviews and recommendations are based on real testing and
              genuine experience.
            </li>
            <li>
              <strong>No sponsored content:</strong> We never accept payment in exchange
              for favorable reviews. If we recommend something, it&apos;s because we
              truly believe it&apos;s worth your money.
            </li>
            <li>
              <strong>Transparent about affiliate links:</strong> We do earn commissions
              when you purchase through our links, but this never affects which products
              we recommend or how we rank them.
            </li>
            <li>
              <strong>Regularly updated:</strong> Composting knowledge evolves, and so do
              products. We revisit our content regularly to keep everything accurate and
              up to date.
            </li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-forest rounded-2xl p-8 sm:p-12 text-center text-white">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-white/80 max-w-lg mx-auto mb-8">
          Our beginner&apos;s guide covers everything you need to know to set up your
          first worm bin in under 30 minutes.
        </p>
        <Link
          href="/worm-composting-beginners-guide"
          className="inline-block bg-white text-forest font-sans font-bold px-8 py-4 rounded-lg hover:bg-cream transition-colors duration-200 no-underline"
        >
          Start with Our Beginner&apos;s Guide
        </Link>
      </section>
    </div>
  );
}
