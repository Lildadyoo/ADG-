"use client";

import Section from "@/components/Section";
import HeroSection from "@/components/HeroSection";
import { useState } from "react";
import Link from "next/link";

export default function Donate() {
  const [selectedAmount, setSelectedAmount] = useState<string>("");
  const [customAmount, setCustomAmount] = useState<string>("");
  const [donationType, setDonationType] = useState<"one-time" | "recurring">("one-time");

  const presetAmounts = [
    { value: "50", label: "$50", description: "School supplies for 10 students" },
    { value: "100", label: "$100", description: "Health clinic operations for 1 month" },
    { value: "250", label: "$250", description: "Training program for 5 entrepreneurs" },
    { value: "500", label: "$500", description: "Support an entire program" },
  ];

  const paymentMethods = [
    {
      name: "PayPal",
      icon: (
        <svg viewBox="0 0 24 24" className="w-10 h-10" fill="#0070BA">
          <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.337 7.291-10.477 7.291H9.22a.64.64 0 0 0-.633.54l-1.512 6.87z"/>
        </svg>
      ),
      description: "Secure payment via PayPal",
      link: process.env.NEXT_PUBLIC_PAYPAL_LINK || "#",
      available: true,
    },
    {
      name: "Stripe",
      icon: (
        <svg viewBox="0 0 24 24" className="w-10 h-10" fill="#635BFF">
          <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.467-5.851-6.591-7.305h.001z"/>
        </svg>
      ),
      description: "Credit/Debit card payment",
      link: process.env.NEXT_PUBLIC_STRIPE_LINK || "#",
      available: true,
    },
    {
      name: "Flutterwave",
      icon: (
        <svg viewBox="0 0 24 24" className="w-10 h-10" fill="#F5A623">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 8.16c-.169 0-.349.027-.534.086-1.646-2.11-4.446-3.5-7.534-3.5-4.97 0-9 4.03-9 9s4.03 9 9 9c3.088 0 5.888-1.39 7.534-3.5.185.059.365.086.534.086 1.381 0 2.5-1.119 2.5-2.5s-1.119-2.5-2.5-2.5zm-5.568 7.34c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4z"/>
        </svg>
      ),
      description: "Pay with card, mobile money, or bank transfer",
      link: process.env.NEXT_PUBLIC_FLUTTERWAVE_LINK || "#",
      available: true,
    },
    {
      name: "Mobile Money",
      icon: (
        <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none" stroke="#00A859" strokeWidth="2">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
          <line x1="12" y1="18" x2="12.01" y2="18"/>
          <path d="M9 6h6M9 10h6M9 14h3"/>
        </svg>
      ),
      description: "MTN Mobile Money or Airtel Money",
      link: process.env.NEXT_PUBLIC_MOBILE_MONEY_LINK || "#",
      available: true,
    },
    {
      name: "Bank Transfer",
      icon: (
        <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none" stroke="#1E40AF" strokeWidth="2">
          <rect x="2" y="4" width="20" height="16" rx="2" ry="2"/>
          <line x1="6" y1="8" x2="18" y2="8"/>
          <line x1="6" y1="12" x2="18" y2="12"/>
          <line x1="6" y1="16" x2="12" y2="16"/>
        </svg>
      ),
      description: "Direct bank transfer",
      link: "/contact?subject=donate",
      available: true,
    },
  ];

  const handleDonate = (method: string, link: string) => {
    const amount = selectedAmount || customAmount;
    if (!amount || parseFloat(amount) <= 0) {
      alert("Please select or enter a donation amount");
      return;
    }

    // If it's a payment gateway, you can append amount as query parameter
    if (link !== "/contact?subject=donate" && link !== "#") {
      const separator = link.includes("?") ? "&" : "?";
      window.open(`${link}${separator}amount=${amount}&type=${donationType}`, "_blank");
    } else {
      window.location.href = link;
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title="Make a Donation"
        subtitle="Your contribution helps us reach more communities, expand our programs, and create lasting change in Uganda."
        backgroundImage="/images/hero/get-involved-hero.jpg"
        overlay={true}
      />

      {/* Donation Form */}
      <Section className="bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Amount Selection */}
            <div className="lg:col-span-2">
              <div className="card">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Choose Your Donation Amount
                </h2>

                {/* Donation Type */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-900 mb-3">
                    Donation Type
                  </label>
                  <div className="flex gap-4">
                    <button
                      onClick={() => setDonationType("one-time")}
                      className={`flex-1 px-4 py-3 rounded-xl font-semibold transition-all ${
                        donationType === "one-time"
                          ? "bg-primary text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      One-Time
                    </button>
                    <button
                      onClick={() => setDonationType("recurring")}
                      className={`flex-1 px-4 py-3 rounded-xl font-semibold transition-all ${
                        donationType === "recurring"
                          ? "bg-primary text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      Monthly
                    </button>
                  </div>
                </div>

                {/* Preset Amounts */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-900 mb-3">
                    Select Amount
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {presetAmounts.map((amount) => (
                      <button
                        key={amount.value}
                        onClick={() => {
                          setSelectedAmount(amount.value);
                          setCustomAmount("");
                        }}
                        className={`p-4 rounded-xl border-2 transition-all text-center ${
                          selectedAmount === amount.value
                            ? "border-primary bg-primary/10"
                            : "border-gray-300 hover:border-primary/50"
                        }`}
                      >
                        <div className="font-bold text-lg text-gray-900 mb-1">
                          {amount.label}
                        </div>
                        <div className="text-xs text-gray-600">{amount.description}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Custom Amount */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Or Enter Custom Amount
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 font-semibold">
                      $
                    </span>
                    <input
                      type="number"
                      min="1"
                      step="0.01"
                      placeholder="0.00"
                      value={customAmount}
                      onChange={(e) => {
                        setCustomAmount(e.target.value);
                        setSelectedAmount("");
                      }}
                      className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Selected Amount Display */}
                {(selectedAmount || customAmount) && (
                  <div className="bg-primary/10 border-2 border-primary rounded-xl p-4 mb-6">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="text-sm text-gray-600">Total Donation</div>
                        <div className="text-2xl font-bold text-primary">
                          ${selectedAmount || customAmount}
                        </div>
                        {donationType === "recurring" && (
                          <div className="text-sm text-gray-600 mt-1">per month</div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column - Payment Methods */}
            <div>
              <div className="card">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Payment Methods
                </h3>
                <div className="space-y-3">
                  {paymentMethods.map((method, index) => (
                    <button
                      key={index}
                      onClick={() => handleDonate(method.name, method.link)}
                      disabled={!method.available || (!selectedAmount && !customAmount)}
                      className={`w-full p-4 rounded-xl border-2 transition-all text-left ${
                        method.available && (selectedAmount || customAmount)
                          ? "border-primary hover:bg-primary/5 hover:border-primary-dark cursor-pointer"
                          : "border-gray-200 opacity-50 cursor-not-allowed"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex-shrink-0">
                          {method.icon}
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">
                            {method.name}
                          </div>
                          <div className="text-xs text-gray-600">
                            {method.description}
                          </div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-600 text-center">
                    All donations are secure and tax-deductible. We'll send you a receipt.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Why Donate Section */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Your Donation Makes a Difference
            </h2>
            <p className="text-lg text-gray-600">
              See how your contribution directly impacts communities in Uganda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📚</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Education</h3>
              <p className="text-gray-600">
                Support scholarships, school supplies, and teacher training programs
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🏥</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Health</h3>
              <p className="text-gray-600">
                Fund health clinics, medical supplies, and community health programs
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🌱</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Growth</h3>
              <p className="text-gray-600">
                Enable sustainable economic development and environmental programs
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Alternative Contact */}
      <Section className="bg-background">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Prefer to Donate Another Way?
          </h2>
          <p className="text-gray-600 mb-6">
            Contact us directly to discuss other donation options, including bank transfers, 
            in-kind donations, or corporate partnerships.
          </p>
          <Link href="/contact?subject=donate" className="btn-primary inline-block">
            Contact Us About Donations
          </Link>
        </div>
      </Section>
    </div>
  );
}

