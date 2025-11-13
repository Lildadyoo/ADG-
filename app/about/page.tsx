import Section from "@/components/Section";
import TeamMemberImage from "@/components/TeamMemberImage";
import HeroSection from "@/components/HeroSection";

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title="About ADG"
        subtitle="Empowering communities through education, health, and sustainable growth in Uganda."
        backgroundImage="/images/hero/about-hero.jpg"
        overlay={true}
      />

      {/* Mission & Vision */}
      <Section className="bg-background">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="card">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Action for Development Group (ADG) is dedicated to empowering
              communities in Uganda through comprehensive programs that address
              education, health, and sustainable development. We believe in
              creating lasting change by working directly with local communities
              to identify and address their unique needs.
            </p>
          </div>

          <div className="card">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              We envision a Uganda where every community has access to quality
              education, healthcare, and sustainable economic opportunities. A
              future where communities are self-reliant, resilient, and thriving
              through their own empowered actions.
            </p>
          </div>
        </div>
      </Section>

      {/* History/Timeline */}
      <Section className="bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Story
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Founded with a commitment to community-driven development, ADG has
            been working tirelessly to create positive change.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          <div className="card">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">2019 - Foundation</h3>
                <p className="text-gray-600">
                  ADG was established with a small team of dedicated individuals
                  committed to making a difference in Ugandan communities. We
                  started with our first education program in rural Kampala.
                </p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white font-bold">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">2020 - Expansion</h3>
                <p className="text-gray-600">
                  We expanded our programs to include health initiatives,
                  reaching over 5,000 people across 20 communities. Our team
                  grew to 15 dedicated staff members.
                </p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">2022 - Sustainability Focus</h3>
                <p className="text-gray-600">
                  We launched our sustainable growth programs, focusing on
                  economic development and environmental conservation. This
                  marked a significant milestone in our holistic approach to
                  community development.
                </p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white font-bold">
                4
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">2024 - Today</h3>
                <p className="text-gray-600">
                  Today, ADG reaches over 10,000 people across 50+ communities
                  in Uganda. We continue to grow and adapt our programs to meet
                  the evolving needs of the communities we serve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section className="bg-background">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Values
          </h2>
          <p className="text-lg text-gray-600">
            The principles that guide everything we do.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Community First",
              description: "We prioritize the needs and voices of the communities we serve.",
              icon: "👥",
            },
            {
              title: "Transparency",
              description: "We maintain open and honest communication in all our work.",
              icon: "🔍",
            },
            {
              title: "Sustainability",
              description: "We create programs that last and empower communities long-term.",
              icon: "🌱",
            },
            {
              title: "Collaboration",
              description: "We work together with partners, volunteers, and communities.",
              icon: "🤝",
            },
          ].map((value, index) => (
            <div key={index} className="card text-center">
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Team Section */}
      <Section className="bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Team
          </h2>
          <p className="text-lg text-gray-600">
            Meet the dedicated individuals driving our mission forward.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Eng Mpeke Isima",
              role: "Executive Director (environmental engineer)",
              bio: "Leading ADG with 10+ years of experience in community development.",
              image: "/images/team/mpeke-isima.jpg",
            },
            {
              name: "Nanteza Salima",
              role: "Program Coordinator (Teacher)",
              bio: "Oversees all program implementation and community partnerships.",
              image: "/images/team/nanteza-salima.jpg",
            },
            {
              name: "Nanduga Mastula",
              role: "Finance and Operations",
              bio: "Manages health initiatives and community health worker programs.",
              image: "/images/team/nanduga-mastula.jpg",
            },
            {
              name: "Joweria Muwanga",
              role: "Community Outreach Manager (councilor)",
              bio: "Leads educational programs and teacher training initiatives across communities.",
              image: "/images/team/joweria-muwanga.jpg",
            },
            {
              name: "Uwireza Gaelle",
              role: "Civil Engineer",
              bio: "Builds relationships with local communities and coordinates volunteer activities.",
              image: "/images/team/gaelle.jpg",
            },
          ].map((member, index) => (
            <div key={index} className="card text-center">
              <div className="mx-auto mb-4 flex justify-center">
                <TeamMemberImage
                  src={member.image}
                  alt={member.name}
                  name={member.name}
                  size={128}
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {member.name}
              </h3>
              <p className="text-secondary font-semibold mb-3">{member.role}</p>
              <p className="text-gray-600">{member.bio}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}

