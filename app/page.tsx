"use client";
import Link from "next/link";
import Section from "@/components/Section";
import ProjectProposalSection from "@/components/ProjectProposalSection";
import HeroSection from "@/components/HeroSection";
import NewsCard from "@/components/NewsCard";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title="Empowering Communities Through Action"
        subtitle="Action for Development Group (ADG) is a Uganda-based nonprofit dedicated to transforming lives through education, health, and sustainable growth."
        backgroundImage="/images/hero/home-hero.jpg"
        overlay={true}
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Link
            href="/get-involved"
            className="btn-primary"
          >
            Get Involved
          </Link>
          <Link
            href="/donate"
            className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-6 py-3 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl"
          >
            💙 Donate Now
          </Link>
          <Link
            href="/programs"
            className="btn-secondary"
          >
            Our Programs
          </Link>
        </div>
      </HeroSection>

      {/* Key Programs Overview */}
      <Section className="bg-background">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Key Programs
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We focus on three core areas that create lasting change in
            communities across Uganda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Education Program */}
          <div className="card text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Education</h3>
            <p className="text-gray-600 mb-4">
              Providing quality education and learning opportunities to empower
              the next generation.
            </p>
            <Link
              href="/programs#education"
              className="text-primary hover:text-primary-dark font-semibold"
            >
              Learn More →
            </Link>
          </div>

          {/* Health Program */}
          <div className="card text-center">
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
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Health</h3>
            <p className="text-gray-600 mb-4">
              Improving access to healthcare services and promoting wellness in
              underserved communities.
            </p>
            <Link
              href="/programs#health"
              className="text-primary hover:text-primary-dark font-semibold"
            >
              Learn More →
            </Link>
          </div>

          {/* Sustainable Growth Program */}
          <div className="card text-center">
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
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Sustainable Growth
            </h3>
            <p className="text-gray-600 mb-4">
              Fostering economic development and environmental sustainability for
              long-term community resilience.
            </p>
            <Link
              href="/programs#sustainable-growth"
              className="text-primary hover:text-primary-dark font-semibold"
            >
              Learn More →
            </Link>
          </div>
        </div>
      </Section>

      {/* Impact Statistics */}
      <Section className="bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Impact
          </h2>
          <p className="text-lg text-gray-600">
            Together, we're making a difference in communities across Uganda.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
              10K+
            </div>
            <div className="text-gray-600">People Reached</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">
              50+
            </div>
            <div className="text-gray-600">Communities</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
              15+
            </div>
            <div className="text-gray-600">Programs</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">
              5+
            </div>
            <div className="text-gray-600">Years of Service</div>
          </div>
        </div>
      </Section>

      {/* Donation Call to Action */}
      <Section className="bg-primary text-white">
        <div className="text-center py-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Support Our Mission
            </h2>
            <p className="text-xl mb-8 text-gray-100">
              Your donation helps us reach more communities, expand our programs, and create lasting change in Uganda. Every contribution makes a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/donate"
                className="bg-white text-primary px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl inline-block transform hover:scale-105"
              >
                💙 Donate Now
              </Link>
              <Link
                href="/get-involved"
                className="bg-primary-light text-white px-8 py-3 rounded-xl font-semibold hover:bg-primary-dark transition-colors inline-block border-2 border-white"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* Recent News Section */}
      <Section className="bg-background">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Latest News
            </h2>
            <p className="text-lg text-gray-600">
              Stay updated with our latest activities and impact stories.
            </p>
          </div>
          <Link
            href="/news"
            className="hidden md:block text-primary hover:text-primary-dark font-semibold"
          >
            View All News →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              id: 1,
              title: "Community Health Initiative Launch",
              date: "March 15, 2024",
              category: "Health",
              excerpt:
                "We're excited to announce the launch of our new community health program targeting maternal and child health in rural areas.",
              image: "/images/news/news-1.jpg",
            },
            {
              id: 2,
              title: "Education Program Reaches 5,000 Students",
              date: "February 28, 2024",
              category: "Education",
              excerpt:
                "Our education programs have now reached over 5,000 students across 30 schools, marking a significant milestone.",
              image: "/images/news/news-2.jpg",
            },
            {
              id: 3,
              title: "Sustainable Growth Project Expansion",
              date: "February 10, 2024",
              category: "Sustainable Growth",
              excerpt:
                "ADG announces the expansion of sustainable growth projects to five new communities, focusing on agriculture.",
              image: "/images/news/news-3.jpg",
            },
          ].map((article) => (
            <NewsCard key={article.id} {...article} />
          ))}
        </div>

        <div className="text-center mt-8 md:hidden">
          <Link
            href="/news"
            className="text-primary hover:text-primary-dark font-semibold"
          >
            View All News →
          </Link>
        </div>
      </Section>

      {/* Project Proposal Section */}
      <ProjectProposalSection />

      {/* Call to Action */}
      <Section className="bg-secondary text-white">
        <div className="text-center py-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join Us in Making a Difference
          </h2>
          <p className="text-xl mb-8 text-gray-100 max-w-2xl mx-auto">
            Your support can help us create lasting change in communities across
            Uganda. Get involved today!
          </p>
          <Link
            href="/get-involved"
            className="btn-primary inline-block"
          >
            Get Involved
          </Link>
        </div>
      </Section>
    </div>
  );
}

