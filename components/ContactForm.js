'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => {
      setStatus('submitted');
    }, 600);
  };

  if (status === 'submitted') {
    return (
      <div
        className="card p-6 sm:p-8 max-w-2xl bg-green-50/50 border border-green-200"
        role="status"
        aria-live="polite"
      >
        <div className="flex items-center gap-3 mb-3 text-forest font-sans font-bold text-lg">
          <svg
            className="w-6 h-6 text-forest flex-shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          <span>Message Sent!</span>
        </div>
        <p className="text-gray-700 font-sans text-sm leading-relaxed mb-6">
          Thank you for reaching out. We&apos;ve received your message and will get back to you within 24&ndash;48 hours.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="btn-outline text-sm"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <div className="card p-6 sm:p-8 max-w-2xl">
      <form onSubmit={handleSubmit} className="space-y-6">
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
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base font-sans placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-forest-light focus:border-transparent"
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
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base font-sans placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-forest-light focus:border-transparent"
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
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base font-sans text-gray-700 focus:outline-none focus:ring-2 focus:ring-forest-light focus:border-transparent bg-white"
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
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base font-sans placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-forest-light focus:border-transparent resize-y"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="btn-primary w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 disabled:opacity-75 disabled:cursor-not-allowed"
        >
          {status === 'submitting' ? (
            <>
              <svg
                className="animate-spin h-4 w-4 text-white"
                fill="none"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                />
              </svg>
              <span>Sending...</span>
            </>
          ) : (
            'Send Message'
          )}
        </button>
      </form>

      <p className="mt-6 text-sm text-gray-400 font-sans">
        We typically respond within 24&ndash;48 hours.
      </p>
    </div>
  );
}
