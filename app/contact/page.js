'use client';

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

      <div className="card p-6 sm:p-8 max-w-2xl">
        <form action="#" method="POST" className="space-y-6">
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-sans font-semibold text-gray-700 mb-1"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Your name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm font-sans placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-forest-light focus:border-transparent"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-sans font-semibold text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="you@example.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm font-sans placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-forest-light focus:border-transparent"
            />
          </div>

          {/* Subject */}
          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-sans font-semibold text-gray-700 mb-1"
            >
              Subject
            </label>
            <select
              id="subject"
              name="subject"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm font-sans text-gray-700 focus:outline-none focus:ring-2 focus:ring-forest-light focus:border-transparent bg-white"
            >
              <option value="">Select a subject...</option>
              <option value="general">General Question</option>
              <option value="suggestion">Article Suggestion</option>
              <option value="correction">Report an Error</option>
              <option value="partnership">Partnership Inquiry</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-sans font-semibold text-gray-700 mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              placeholder="Tell us what's on your mind..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm font-sans placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-forest-light focus:border-transparent resize-y"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="btn-primary w-full sm:w-auto text-center"
          >
            Send Message
          </button>
        </form>

        <p className="mt-6 text-sm text-gray-400 font-sans">
          We typically respond within 24&ndash;48 hours.
        </p>
      </div>
    </div>
  );
}
