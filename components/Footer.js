import Link from 'next/link';

const quickLinks = [
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

const legalLinks = [
  { href: '/privacy-policy', label: 'Privacy Policy' },
  { href: '/disclaimer', label: 'Disclaimer' },
  { href: '/disclaimer#affiliate-disclosure', label: 'Affiliate Disclosure' },
];

export default function Footer() {
  return (
    <footer className="bg-earth-dark text-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Column */}
          <div>
            <h3 className="font-sans text-lg font-bold text-white mb-3">
              CompostHeaven
            </h3>
            <p className="text-sm leading-relaxed text-cream/80">
              Your trusted guide to composting and vermicomposting. We help
              gardeners turn kitchen scraps into black gold with honest reviews,
              in-depth guides, and practical tips.
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="font-sans text-lg font-bold text-white mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream/80 hover:text-white transition-colors duration-200 no-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="font-sans text-lg font-bold text-white mb-3">
              Legal
            </h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream/80 hover:text-white transition-colors duration-200 no-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-cream/20 text-center">
          <p className="text-sm text-cream/60">
            &copy; 2026 CompostHeaven.com. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
