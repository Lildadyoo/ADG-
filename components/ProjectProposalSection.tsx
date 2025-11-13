"use client";

import { useState } from "react";

export default function ProjectProposalSection() {
  const [formData, setFormData] = useState({
    projectTitle: "",
    organization: "",
    contactName: "",
    email: "",
    phone: "",
    category: "",
    description: "",
    expectedImpact: "",
    budget: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      const response = await fetch('/api/proposals', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit proposal');
      }

      // Success
      setSubmitted(true);
      setFormData({
        projectTitle: "",
        organization: "",
        contactName: "",
        email: "",
        phone: "",
        category: "",
        description: "",
        expectedImpact: "",
        budget: "",
      });
      
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (err) {
      console.error('Error submitting proposal:', err);
      setError(err instanceof Error ? err.message : 'An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Submit a Project Proposal
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have an idea for a project that aligns with our mission? We'd love to
            hear from you. Submit your project proposal and let's work together to
            create positive change.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="card">
            {error && (
              <div className="mb-6 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-xl">
                <p className="font-semibold">Error submitting proposal:</p>
                <p>{error}</p>
              </div>
            )}
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-secondary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Thank You!
                </h3>
                <p className="text-gray-600">
                  Your project proposal has been submitted successfully. We'll
                  review it and get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="projectTitle"
                      className="block text-sm font-semibold text-gray-900 mb-2"
                    >
                      Project Title *
                    </label>
                    <input
                      type="text"
                      id="projectTitle"
                      name="projectTitle"
                      required
                      value={formData.projectTitle}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Enter project title"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="category"
                      className="block text-sm font-semibold text-gray-900 mb-2"
                    >
                      Category *
                    </label>
                    <select
                      id="category"
                      name="category"
                      required
                      value={formData.category}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Select category</option>
                      <option value="education">Education</option>
                      <option value="health">Health</option>
                      <option value="sustainable-growth">
                        Sustainable Growth
                      </option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="organization"
                    className="block text-sm font-semibold text-gray-900 mb-2"
                  >
                    Organization/Community Name *
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    required
                    value={formData.organization}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Enter organization or community name"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="contactName"
                      className="block text-sm font-semibold text-gray-900 mb-2"
                    >
                      Contact Name *
                    </label>
                    <input
                      type="text"
                      id="contactName"
                      name="contactName"
                      required
                      value={formData.contactName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-900 mb-2"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-gray-900 mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="+256 XXX XXX XXX"
                  />
                </div>

                <div>
                  <label
                    htmlFor="description"
                    className="block text-sm font-semibold text-gray-900 mb-2"
                  >
                    Project Description *
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    required
                    value={formData.description}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Describe your project in detail..."
                  />
                </div>

                <div>
                  <label
                    htmlFor="expectedImpact"
                    className="block text-sm font-semibold text-gray-900 mb-2"
                  >
                    Expected Impact *
                  </label>
                  <textarea
                    id="expectedImpact"
                    name="expectedImpact"
                    required
                    value={formData.expectedImpact}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="What impact do you expect this project to have?"
                  />
                </div>

                <div>
                  <label
                    htmlFor="budget"
                    className="block text-sm font-semibold text-gray-900 mb-2"
                  >
                    Estimated Budget (Optional)
                  </label>
                  <input
                    type="text"
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Enter estimated budget (UGX or USD)"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Submitting..." : "Submit Proposal"}
                </button>

                <p className="text-sm text-gray-500 text-center">
                  * Required fields. We'll review your proposal and contact you
                  within 5-7 business days.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

