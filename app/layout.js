import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  metadataBase: new URL('https://www.compostheaven.com'),
  alternates: {
    canonical: '/',
  },
  title: {
    template: '%s | CompostHeaven',
    default: 'CompostHeaven - Composting Guides & Reviews',
  },
  description:
    'Your trusted guide to composting and vermicomposting. Honest reviews, in-depth guides, and practical tips to turn kitchen scraps into black gold.',
  keywords: [
    'composting',
    'vermicomposting',
    'worm composting',
    'worm bins',
    'worm castings',
    'red wigglers',
    'compost guide',
    'kitchen scraps',
    'organic gardening',
    'soil health',
  ],
  authors: [{ name: 'The CompostHeaven Team' }],
  creator: 'CompostHeaven',
  publisher: 'CompostHeaven',
  category: 'Gardening',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  verification: {
    google: 'QZwzSBlmovigJpfxNfCzeVu2o-JLOkUirkK5S3C8PNI',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.compostheaven.com',
    siteName: 'CompostHeaven',
    title: 'CompostHeaven - Composting Guides & Reviews',
    description:
      'Your trusted guide to composting and vermicomposting. Honest reviews, in-depth guides, and practical tips.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'CompostHeaven - Composting Guides & Honest Reviews',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CompostHeaven - Composting Guides & Reviews',
    description:
      'Your trusted guide to composting and vermicomposting. Honest reviews, in-depth guides, and practical tips.',
    images: ['/og-image.png'],
  },
  other: {
    'p:domain_verify': 'PINTEREST_VERIFICATION_CODE',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#1f3d2b',
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'CompostHeaven',
  url: 'https://www.compostheaven.com',
  logo: 'https://www.compostheaven.com/icon-512.png',
  description:
    'Your trusted guide to composting and vermicomposting. Honest reviews, in-depth guides, and practical tips to turn kitchen scraps into black gold.',
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'CompostHeaven',
  url: 'https://www.compostheaven.com',
  description:
    'Your trusted guide to composting and vermicomposting. Honest reviews, in-depth guides, and practical tips.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-cream">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-SX0T93Q80M"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-SX0T93Q80M');
            `,
          }}
        />
      </head>
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
