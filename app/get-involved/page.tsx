import Section from "@/components/Section";
import HeroSection from "@/components/HeroSection";
import Link from "next/link";

export default function GetInvolved() {
  const involvementOptions = [
    {
      title: "Volunteer",
      icon: "🤝",
      description:
        "Join our team of dedicated volunteers and make a direct impact in communities.",
      opportunities: [
        "Field work and program implementation",
        "Administrative support",
        "Event organization",
        "Community outreach",
        "Skills-based volunteering",
      ],
      link: "/contact",
      linkText: "Contact Us to Volunteer",
    },
    {
      title: "Donate",
      icon: "💙",
      description:
        "Your financial contribution helps us reach more communities and expand our programs.",
      opportunities: [
        "One-time or recurring donations",
        "Sponsor a program or project",
        "Support education scholarships",
        "Fund health initiatives",
        "Contribute to sustainable growth",
      ],
      link: "/contact",
      linkText: "Make a Donation",
    },
    {
      title: "Partner",
      icon: "🌐",
      description:
        "Partner with us to amplify our impact and create sustainable solutions together.",
      opportunities: [
        "Corporate partnerships",
        "NGO collaborations",
        "Government partnerships",
        "Community organization links",
        "International partnerships",
      ],
      link: "/contact",
      linkText: "Become a Partner",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title="Get Involved"
        subtitle="Join us in creating lasting change. Your support makes a difference in communities across Uganda."
        backgroundImage="/images/hero/get-involved-hero.jpg"
        overlay={true}
      />

      {/* Ways to Get Involved */}
      <Section className="bg-background">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {involvementOptions.map((option, index) => (
            <div key={index} className="card">
              <div className="text-5xl mb-4">{option.icon}</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {option.title}
              </h2>
              <p className="text-gray-600 mb-6">{option.description}</p>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Opportunities:
                </h3>
                <ul className="space-y-2">
                  {option.opportunities.map((opp, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-secondary mt-1">•</span>
                      <span className="text-gray-600 text-sm">{opp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href={option.link}
                className="block w-full text-center btn-primary"
              >
                {option.linkText}
              </Link>
            </div>
          ))}
        </div>
      </Section>

      {/* Volunteer Stories */}
      <Section className="bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Volunteer Stories
          </h2>
          <p className="text-lg text-gray-600">
            Hear from people who have made a difference with ADG.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card">
            <p className="text-gray-600 mb-4 italic">
              "Volunteering with ADG has been one of the most rewarding
              experiences of my life. Seeing the direct impact of our work in
              the communities we serve is incredibly fulfilling."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-accent rounded-full"></div>
              <div>
                <div className="font-semibold text-gray-900">John Mukasa</div>
                <div className="text-sm text-gray-600">Education Volunteer</div>
              </div>
            </div>
          </div>

          <div className="card">
            <p className="text-gray-600 mb-4 italic">
              "I've been supporting ADG for three years now, and I'm constantly
              amazed by the positive change they create. The transparency and
              dedication of the team is remarkable."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-accent rounded-full"></div>
              <div>
                <div className="font-semibold text-gray-900">Sarah Nakamya</div>
                <div className="text-sm text-gray-600">Donor & Partner</div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Impact of Support */}
      <Section className="bg-background">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Your Support Makes a Difference
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Every contribution, whether time or resources, helps us reach more
            people and create lasting change.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
              $50
            </div>
            <div className="text-gray-600 mb-2">Provides school supplies</div>
            <div className="text-sm text-gray-500">for 10 students</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">
              $100
            </div>
            <div className="text-gray-600 mb-2">Supports health clinic</div>
            <div className="text-sm text-gray-500">operations for 1 month</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
              $250
            </div>
            <div className="text-gray-600 mb-2">Funds training program</div>
            <div className="text-sm text-gray-500">for 5 entrepreneurs</div>
          </div>
        </div>
      </Section>

      {/* Contact CTA */}
      <Section className="bg-secondary text-white">
        <div className="text-center py-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl mb-8 text-gray-100 max-w-2xl mx-auto">
            Get in touch with us to learn more about how you can get involved
            and support our mission.
          </p>
          <Link
            href="/contact"
            className="btn-primary inline-block"
          >
            Contact Us
          </Link>
        </div>
      </Section>
    </div>
  );
}

