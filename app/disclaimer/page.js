import Link from 'next/link';

export const metadata = {
  title: 'Disclaimer',
  description:
    'CompostHeaven disclaimer, affiliate disclosure, and FTC compliance information.',
};

export default function DisclaimerPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl sm:text-4xl font-bold text-earth-dark mb-4">
        Disclaimer
      </h1>
      <p className="text-sm text-gray-400 font-sans mb-10">
        Last updated: April 2026
      </p>

      <div className="prose prose-lg max-w-none">
        {/* Affiliate Disclosure */}
        <h2 id="affiliate-disclosure">Affiliate Disclosure</h2>
        <p>
          CompostHeaven.com is a participant in the Amazon Services LLC Associates
          Program, an affiliate advertising program designed to provide a means for
          sites to earn advertising fees by advertising and linking to Amazon.com.
        </p>
        <p>
          <strong>
            As an Amazon Associate I earn from qualifying purchases.
          </strong>
        </p>
        <p>
          In addition to Amazon, we may participate in other affiliate programs. This
          means that when you click on certain links on our Site and make a purchase, we
          may receive a small commission at no additional cost to you.
        </p>
        <p>
          These affiliate commissions help us keep CompostHeaven running and allow us to
          continue producing free, high-quality content for our readers. We are grateful
          for your support.
        </p>
        <p>
          In accordance with the Federal Trade Commission (FTC) guidelines, we disclose
          that some of the links on this website are affiliate links. We are required to
          inform you that we may earn a commission if you click through and make a
          purchase.
        </p>

        {/* Product Recommendations */}
        <h2>Product Recommendations</h2>
        <p>
          All product recommendations on CompostHeaven are based on our genuine
          experience, research, and testing. We only recommend products that we believe
          provide real value to our readers.
        </p>
        <p>
          Our editorial process is independent of our affiliate relationships. Whether
          or not we earn a commission from a product has <strong>no influence</strong> on
          whether we recommend it, how we rank it, or how we review it. Some products we
          recommend may not have affiliate programs at all.
        </p>
        <p>
          We make every effort to provide accurate product information, but
          manufacturers may change product specifications, pricing, or availability at
          any time. We encourage you to verify details directly with the seller before
          making a purchase.
        </p>

        {/* Medical / Professional Advice Disclaimer */}
        <h2>Medical and Professional Advice Disclaimer</h2>
        <p>
          The information provided on CompostHeaven is for general educational and
          informational purposes only. It is not intended as, and should not be
          understood or construed as, professional gardening, agricultural, medical, or
          environmental advice.
        </p>
        <p>
          While we strive to provide helpful and accurate information about composting,
          soil health, and gardening practices, you should always consult with qualified
          professionals for advice specific to your situation. This includes but is not
          limited to:
        </p>
        <ul>
          <li>
            Consulting a local agricultural extension service for region-specific
            composting guidance
          </li>
          <li>
            Seeking advice from a certified horticulturist for plant health concerns
          </li>
          <li>
            Contacting local waste management authorities regarding composting
            regulations in your area
          </li>
        </ul>
        <p>
          CompostHeaven shall not be held responsible for any actions taken based on the
          information provided on this website.
        </p>

        {/* Accuracy */}
        <h2>Accuracy of Information</h2>
        <p>
          We make every reasonable effort to ensure the accuracy of the information
          published on CompostHeaven. However, we make no warranties or representations
          as to the accuracy, completeness, or reliability of any information on the
          Site.
        </p>
        <p>
          Composting science and best practices evolve over time. Product availability,
          pricing, and features change frequently. While we regularly review and update
          our content, some information may become outdated between updates.
        </p>
        <p>
          If you find any errors or outdated information on our Site, we encourage you
          to <Link href="/contact">contact us</Link> so we can make corrections
          promptly.
        </p>

        <h2>External Links</h2>
        <p>
          Our Site may contain links to external websites that are not operated by us.
          We have no control over the content, privacy policies, or practices of
          third-party sites. We encourage you to review the terms and privacy policies
          of any external sites you visit.
        </p>

        <h2>Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by applicable law, CompostHeaven shall not be
          liable for any indirect, incidental, special, consequential, or punitive
          damages arising from your use of the Site or reliance on any information
          provided herein.
        </p>

        <h2>Questions</h2>
        <p>
          If you have any questions about this Disclaimer or our affiliate
          relationships, please visit our{' '}
          <Link href="/contact">contact page</Link>.
        </p>
      </div>
    </div>
  );
}
