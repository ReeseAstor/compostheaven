'use client';

export default function EmailSignup() {
  return (
    <section className="bg-forest rounded-2xl px-6 py-10 sm:px-10 sm:py-12 text-white text-center">
      <h2 className="font-sans text-2xl sm:text-3xl font-bold mb-3">
        Get Your Free Worm Feeding Cheat Sheet
      </h2>
      <p className="text-white/80 text-sm sm:text-base max-w-lg mx-auto mb-8">
        Join thousands of composters. Get a printable guide on exactly what to
        feed your worms (and what to avoid) delivered straight to your inbox.
      </p>

      <form
        action="#"
        method="POST"
        className="max-w-md mx-auto flex flex-col sm:flex-row gap-3"
      >
        <input
          type="text"
          name="name"
          placeholder="First name"
          aria-label="First name"
          className="flex-1 px-4 py-3 rounded-lg text-gray-800 text-sm font-sans placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-forest-light"
        />
        <input
          type="email"
          name="email"
          placeholder="Email address"
          aria-label="Email address"
          className="flex-1 px-4 py-3 rounded-lg text-gray-800 text-sm font-sans placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-forest-light"
        />
        <button
          type="submit"
          className="px-6 py-3 bg-forest-dark hover:bg-green-900 text-white font-sans font-semibold text-sm rounded-lg transition-colors duration-200 whitespace-nowrap"
        >
          Send It!
        </button>
      </form>

      <p className="mt-4 text-xs text-white/50">
        No spam, ever. Unsubscribe anytime.
      </p>
    </section>
  );
}
