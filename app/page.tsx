import Link from "next/link";
import Section from "@/components/Section";
import ProjectProposalSection from "@/components/ProjectProposalSection";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="text-center py-20 md:py-28">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Empowering Communities Through Action
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto">
            Action for Development Group (ADG) is a Uganda-based nonprofit
            dedicated to transforming lives through education, health, and
            sustainable growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/get-involved"
              className="bg-secondary hover:bg-secondary-dark text-white px-8 py-3 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl"
            >
              Get Involved
            </Link>
            <Link
              href="/programs"
              className="bg-white text-primary px-8 py-3 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl"
            >
              Our Programs
            </Link>
          </div>
        </div>
      </Section>

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
          {[1, 2, 3].map((item) => (
            <div key={item} className="card">
              <div className="h-48 bg-accent rounded-lg mb-4"></div>
              <div className="text-sm text-gray-500 mb-2">March 15, 2024</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Community Health Initiative Launch
              </h3>
              <p className="text-gray-600 mb-4">
                We're excited to announce the launch of our new community health
                program...
              </p>
              <Link
                href="/news/article-1"
                className="text-primary hover:text-primary-dark font-semibold"
              >
                Read More →
              </Link>
            </div>
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
            className="bg-white text-secondary px-8 py-3 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl inline-block"
          >
            Get Involved
          </Link>
        </div>
      </Section>
    </div>
  );
}

