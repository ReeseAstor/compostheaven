'use client';

import { useState } from "react";

export default function EmailSignup() {
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const name = form.name.value;

    if (!email || !email.includes("@")) {
      setError("Please enter a valid email");
      setStatus("error");
      return;
    }

    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed");
      setStatus("success");
    } catch (err) {
      setError(err.message);
      setStatus("error");
    }
  }

  return (
    <section className="bg-forest rounded-2xl px-6 py-10 sm:px-10 sm:py-12 text-white text-center">
      <h2 className="font-sans text-2xl sm:text-3xl font-bold mb-3">
        Get Your Free Worm Feeding Cheat Sheet
      </h2>
      <p className="text-white/80 text-sm sm:text-base max-w-lg mx-auto mb-8">
        Join thousands of composters. Get a printable guide on exactly what to
        feed your worms (and what to avoid) delivered straight to your inbox.
      </p>

      {status === "success" ? (
        <div className="max-w-md mx-auto py-4 px-6 bg-white/10 rounded-lg">
          <p className="font-semibold text-green-300">You&apos;re in! Check your inbox for the cheat sheet.</p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
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
            required
            className="flex-1 px-4 py-3 rounded-lg text-gray-800 text-sm font-sans placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-forest-light"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="px-6 py-3 bg-forest-dark hover:bg-green-900 disabled:opacity-60 text-white font-sans font-semibold text-sm rounded-lg transition-colors duration-200 whitespace-nowrap"
          >
            {status === "loading" ? "Sending..." : "Send It!"}
          </button>
        </form>
      )}

      {status === "error" && (
        <p className="mt-3 text-sm text-red-300">{error}</p>
      )}

      <p className="mt-4 text-xs text-white/50">
        No spam, ever. Unsubscribe anytime.
      </p>
    </section>
  );
}
