"use client";

import { useState } from "react";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to subscribe');
      }

      // Success
      setSubmitted(true);
      setEmail("");
      
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (err) {
      console.error('Error subscribing to newsletter:', err);
      setError(err instanceof Error ? err.message : 'An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="card max-w-2xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">
        Stay Connected
      </h2>
      <p className="text-gray-600 mb-6">
        Subscribe to our newsletter to receive updates about our programs,
        impact stories, and upcoming events.
      </p>
      {error && (
        <div className="mb-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-xl">
          {error}
        </div>
      )}
      {submitted ? (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-xl">
          Thank you for subscribing!
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={isSubmitting}
            className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed"
          />
          <button 
            type="submit" 
            disabled={isSubmitting}
            className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Subscribing..." : "Subscribe"}
          </button>
        </form>
      )}
    </div>
  );
}

