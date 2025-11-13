"use client";

import Section from "@/components/Section";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";
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
      icon: "/images/payment-logos/paypal.jpg",
      description: "Secure payment via PayPal",
      link: process.env.NEXT_PUBLIC_PAYPAL_LINK || "#",
      available: true,
    },
    {
      name: "Stripe",
      icon: "/images/payment-logos/stripe.png",
      description: "Credit/Debit card payment",
      link: process.env.NEXT_PUBLIC_STRIPE_LINK || "#",
      available: true,
    },
    {
      name: "Flutterwave",
      icon: "/images/payment-logos/flutterwave.png",
      description: "Pay with card, mobile money, or bank transfer",
      link: process.env.NEXT_PUBLIC_FLUTTERWAVE_LINK || "#",
      available: true,
    },
    {
      name: "Mobile Money",
      icon: "/images/payment-logos/mobile-money.png",
      description: "MTN Mobile Money or Airtel Money",
      link: process.env.NEXT_PUBLIC_MOBILE_MONEY_LINK || "#",
      available: true,
    },
    {
      name: "Bank Transfer",
      icon: "/images/payment-logos/bank-transfer.png",
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
        backgroundImage="/images/hero/donate-hero.jpg"
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
                        <div className="flex-shrink-0 w-12 h-12 relative bg-gray-50 rounded flex items-center justify-center">
                          <Image
                            src={method.icon}
                            alt={`${method.name} logo`}
                            width={48}
                            height={48}
                            className="object-contain"
                            onError={(e) => {
                              // Fallback: hide image and show text
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                            }}
                          />
                          <span className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-gray-400 hidden">
                            {method.name.substring(0, 2)}
                          </span>
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

