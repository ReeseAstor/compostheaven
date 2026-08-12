import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with the CompostHeaven team. Ask a composting question, suggest a topic, report an error, or send a partnership inquiry.',
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl sm:text-4xl font-bold text-earth-dark mb-4">
        Contact Us
      </h1>
      <p className="text-gray-600 mb-10 max-w-2xl">
        Have a question about composting? Want to suggest a topic? Found an error in one
        of our articles? We&apos;d love to hear from you.
      </p>

      <ContactForm />
    </div>
  );
}
