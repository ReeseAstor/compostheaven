import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy',
  description:
    'CompostHeaven privacy policy. Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl sm:text-4xl font-bold text-earth-dark mb-4">
        Privacy Policy
      </h1>
      <p className="text-sm text-gray-400 font-sans mb-10">
        Last updated: April 2026
      </p>

      <div className="prose prose-lg max-w-none">
        <p>
          CompostHeaven (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting
          your privacy. This Privacy Policy explains how we collect, use, disclose, and
          safeguard your information when you visit our website,{' '}
          <Link href="/">compostheaven.com</Link> (the &quot;Site&quot;).
        </p>
        <p>
          Please read this policy carefully. By using the Site, you consent to the
          practices described in this Privacy Policy. If you do not agree, please
          discontinue use of the Site.
        </p>

        <h2>Information We Collect</h2>

        <h3>Information You Provide</h3>
        <p>
          We may collect personal information that you voluntarily provide when you
          subscribe to our email newsletter, fill out a contact form, or otherwise
          interact with the Site. This may include:
        </p>
        <ul>
          <li>Your name</li>
          <li>Email address</li>
          <li>Any message content you submit through our contact form</li>
        </ul>

        <h3>Information Collected Automatically</h3>
        <p>
          When you visit the Site, certain information may be collected automatically,
          including:
        </p>
        <ul>
          <li>Your IP address</li>
          <li>Browser type and version</li>
          <li>Operating system</li>
          <li>Referring URLs and pages visited</li>
          <li>Time and date of your visit</li>
          <li>Time spent on pages</li>
          <li>Device information</li>
        </ul>

        <h2>How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Deliver our email newsletter and free resources you request</li>
          <li>Respond to your inquiries and contact form submissions</li>
          <li>Analyze website traffic and usage patterns to improve our content</li>
          <li>Monitor and prevent fraud or abuse</li>
          <li>Comply with legal obligations</li>
        </ul>

        <h2>Cookies</h2>
        <p>
          We use cookies and similar tracking technologies to enhance your experience on
          the Site. Cookies are small data files stored on your device. We use:
        </p>
        <ul>
          <li>
            <strong>Essential cookies:</strong> Required for the Site to function
            properly.
          </li>
          <li>
            <strong>Analytics cookies:</strong> Help us understand how visitors interact
            with the Site so we can improve content and user experience.
          </li>
          <li>
            <strong>Advertising cookies:</strong> Used by third-party ad networks to
            deliver relevant advertisements.
          </li>
        </ul>
        <p>
          You can control cookie preferences through your browser settings. Disabling
          cookies may affect certain features of the Site.
        </p>

        <h2>Third-Party Services</h2>
        <p>
          We use the following third-party services, each of which has its own privacy
          policy governing the use of your information:
        </p>

        <h3>Google Analytics</h3>
        <p>
          We use Google Analytics to collect and analyze website traffic data. Google
          Analytics uses cookies to track visitor behavior on the Site. The data
          collected is aggregated and anonymous. You can opt out of Google Analytics
          tracking by installing the{' '}
          <a
            href="https://tools.google.com/dlpage/gaoptout"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Analytics Opt-Out Browser Add-on
          </a>
          .
        </p>

        <h3>Google AdSense</h3>
        <p>
          We may display advertisements on the Site through Google AdSense. Google
          AdSense uses cookies to serve ads based on your prior visits to our Site and
          other websites. You can opt out of personalized advertising by visiting{' '}
          <a
            href="https://www.google.com/settings/ads"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Ads Settings
          </a>
          .
        </p>

        <h3>Amazon Associates</h3>
        <p>
          CompostHeaven is a participant in the Amazon Services LLC Associates Program,
          an affiliate advertising program designed to provide a means for sites to earn
          advertising fees by advertising and linking to Amazon.com. When you click an
          Amazon affiliate link on our Site, Amazon may place cookies on your device to
          track purchases for commission purposes.
        </p>

        <h2>Your Rights</h2>
        <p>
          Depending on your location, you may have certain rights regarding your
          personal information:
        </p>

        <h3>Under the GDPR (European Economic Area)</h3>
        <ul>
          <li>Right to access your personal data</li>
          <li>Right to rectification of inaccurate data</li>
          <li>Right to erasure (&quot;right to be forgotten&quot;)</li>
          <li>Right to restrict processing</li>
          <li>Right to data portability</li>
          <li>Right to object to processing</li>
          <li>Right to withdraw consent at any time</li>
        </ul>

        <h3>Under the CCPA (California Residents)</h3>
        <ul>
          <li>Right to know what personal information is collected</li>
          <li>Right to know whether personal information is sold or disclosed</li>
          <li>Right to say no to the sale of personal information</li>
          <li>Right to delete personal information</li>
          <li>Right to non-discrimination for exercising your privacy rights</li>
        </ul>

        <p>
          To exercise any of these rights, please{' '}
          <Link href="/contact">contact us</Link>.
        </p>

        <h2>Data Retention</h2>
        <p>
          We retain your personal information only for as long as necessary to fulfill
          the purposes outlined in this Privacy Policy, unless a longer retention period
          is required or permitted by law.
        </p>

        <h2>Children&apos;s Privacy</h2>
        <p>
          The Site is not directed to children under 13 years of age. We do not
          knowingly collect personal information from children under 13. If you believe
          we have inadvertently collected such information, please{' '}
          <Link href="/contact">contact us</Link> immediately.
        </p>

        <h2>Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes will be
          posted on this page with an updated &quot;Last updated&quot; date. We encourage you
          to review this policy periodically.
        </p>

        <h2>Contact</h2>
        <p>
          If you have any questions about this Privacy Policy or wish to exercise your
          data rights, please reach out to us through our{' '}
          <Link href="/contact">contact page</Link>.
        </p>
      </div>
    </div>
  );
}
