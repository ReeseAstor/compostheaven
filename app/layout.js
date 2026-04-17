import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: {
    template: '%s | CompostHeaven',
    default: 'CompostHeaven - Composting Guides & Reviews',
  },
  description:
    'Your trusted guide to composting and vermicomposting. Honest reviews, in-depth guides, and practical tips to turn kitchen scraps into black gold.',
  verification: {
    google: 'QZwzSBlmovigJpfxNfCzeVu2o-JLOkUirkK5S3C8PNI',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'CompostHeaven',
    title: 'CompostHeaven - Composting Guides & Reviews',
    description:
      'Your trusted guide to composting and vermicomposting. Honest reviews, in-depth guides, and practical tips.',
  },
  other: {
    // Pinterest domain verification - replace with your actual code
    'p:domain_verify': 'PINTEREST_VERIFICATION_CODE',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics - replace GA_MEASUREMENT_ID with your actual ID */}
        {/*
        <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID');
            `,
          }}
        />
        */}
      </head>
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
