import Section from "@/components/Section";
import HeroSection from "@/components/HeroSection";
import ProgramImage from "@/components/ProgramImage";
import Link from "next/link";

export default function Programs() {
  const programs = [
    {
      id: "education",
      title: "Education Programs",
      icon: "📚",
      description:
        "Our education programs focus on providing quality learning opportunities for children and adults in underserved communities.",
      features: [
        "School infrastructure development",
        "Teacher training and support",
        "Scholarship programs for students",
        "Adult literacy programs",
        "Digital skills training",
      ],
      impact: "5,000+ students reached, 50+ schools supported",
      color: "primary",
      image: "/images/programs/education.jpg",
    },
    {
      id: "health",
      title: "Health Initiatives",
      icon: "🏥",
      description:
        "Improving access to healthcare services and promoting wellness through community-based health programs.",
      features: [
        "Community health clinics",
        "Health education workshops",
        "Maternal and child health services",
        "HIV/AIDS prevention and support",
        "Clean water and sanitation projects",
      ],
      impact: "8,000+ people served, 30+ health facilities supported",
      color: "secondary",
      image: "/images/programs/health.jpg",
    },
    {
      id: "sustainable-growth",
      title: "Sustainable Growth",
      icon: "🌱",
      description:
        "Fostering economic development and environmental sustainability for long-term community resilience.",
      features: [
        "Agricultural training and support",
        "Microfinance and entrepreneurship",
        "Renewable energy projects",
        "Environmental conservation",
        "Skills development programs",
      ],
      impact: "3,000+ entrepreneurs supported, 20+ sustainable projects",
      color: "secondary",
      image: "/images/programs/sustainable-growth.jpg",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title="Our Programs"
        subtitle="Comprehensive programs addressing education, health, and sustainable development in communities across Uganda."
        backgroundImage="/images/hero/programs-hero.jpg"
        overlay={true}
      />

      {/* Programs List */}
      <Section className="bg-background">
        <div className="space-y-16">
          {programs.map((program, index) => (
            <div
              key={program.id}
              id={program.id}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-8 w-full`}
            >
              <div className="w-full md:flex-1 md:min-w-0">
                <div className="card">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-5xl">{program.icon}</div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                      {program.title}
                    </h2>
                  </div>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {program.description}
                  </p>

                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Key Features:
                    </h3>
                    <ul className="space-y-2">
                      {program.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-secondary mt-1">✓</span>
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-accent rounded-lg p-4 mb-6">
                    <p className="text-gray-700 font-semibold">
                      Impact: {program.impact}
                    </p>
                  </div>

                  <Link
                    href="/get-involved"
                    className="btn-primary inline-block"
                  >
                    Get Involved
                  </Link>
                </div>
              </div>

              <div className="w-full md:flex-1 md:min-w-0" style={{ minWidth: 0 }}>
                <ProgramImage
                  src={program.image}
                  alt={program.title}
                />
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Program Statistics */}
      <Section className="bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Program Impact
          </h2>
          <p className="text-lg text-gray-600">
            Numbers that reflect our commitment to creating positive change.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
              15+
            </div>
            <div className="text-gray-600">Active Programs</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">
              50+
            </div>
            <div className="text-gray-600">Communities</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
              10K+
            </div>
            <div className="text-gray-600">People Reached</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">
              100+
            </div>
            <div className="text-gray-600">Partners</div>
          </div>
        </div>
      </Section>

      {/* Call to Action */}
      <Section className="bg-secondary text-white">
        <div className="text-center py-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Support Our Programs
          </h2>
          <p className="text-xl mb-8 text-gray-100 max-w-2xl mx-auto">
            Join us in creating lasting change. Your support helps us expand our
            programs and reach more communities.
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

