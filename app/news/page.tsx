import Section from "@/components/Section";
import Link from "next/link";

export default function News() {
  const newsArticles = [
    {
      id: 1,
      title: "Community Health Initiative Launch",
      date: "March 15, 2024",
      category: "Health",
      excerpt:
        "We're excited to announce the launch of our new community health program targeting maternal and child health in rural areas.",
      image: "/images/news-1.jpg",
    },
    {
      id: 2,
      title: "Education Program Reaches 5,000 Students",
      date: "February 28, 2024",
      category: "Education",
      excerpt:
        "Our education programs have now reached over 5,000 students across 30 schools, marking a significant milestone in our mission.",
      image: "/images/news-2.jpg",
    },
    {
      id: 3,
      title: "Sustainable Growth Project Expansion",
      date: "February 10, 2024",
      category: "Sustainable Growth",
      excerpt:
        "ADG announces the expansion of sustainable growth projects to five new communities, focusing on agriculture and entrepreneurship.",
      image: "/images/news-3.jpg",
    },
    {
      id: 4,
      title: "Annual Community Gathering Success",
      date: "January 20, 2024",
      category: "Events",
      excerpt:
        "Our annual community gathering brought together over 500 participants to celebrate achievements and plan for the year ahead.",
      image: "/images/news-4.jpg",
    },
    {
      id: 5,
      title: "New Partnership with Local NGOs",
      date: "January 5, 2024",
      category: "Partnerships",
      excerpt:
        "ADG partners with three local NGOs to amplify impact and reach more communities with comprehensive development programs.",
      image: "/images/news-5.jpg",
    },
    {
      id: 6,
      title: "Volunteer Recognition Ceremony",
      date: "December 15, 2023",
      category: "Events",
      excerpt:
        "We honored our dedicated volunteers at a special ceremony, recognizing their invaluable contributions to our mission.",
      image: "/images/news-6.jpg",
    },
  ];

  const categories = ["All", "Education", "Health", "Sustainable Growth", "Events", "Partnerships"];

  return (
    <div>
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="text-center py-16 md:py-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">News & Updates</h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">
            Stay updated with our latest activities, impact stories, and
            program updates.
          </p>
        </div>
      </Section>

      {/* Featured Article */}
      <Section className="bg-background">
        {newsArticles.length > 0 && (
          <div className="mb-12">
            <div className="card p-0 overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                <div className="h-64 md:h-full bg-accent"></div>
                <div className="p-8">
                  <div className="text-sm text-secondary font-semibold mb-2">
                    {newsArticles[0].category} • {newsArticles[0].date}
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {newsArticles[0].title}
                  </h2>
                  <p className="text-gray-600 mb-6 text-lg">
                    {newsArticles[0].excerpt}
                  </p>
                  <Link
                    href={`/news/${newsArticles[0].id}`}
                    className="text-primary hover:text-primary-dark font-semibold"
                  >
                    Read Full Article →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsArticles.slice(1).map((article) => (
            <Link
              key={article.id}
              href={`/news/${article.id}`}
              className="card hover:scale-105 transition-transform"
            >
              <div className="h-48 bg-accent rounded-lg mb-4"></div>
              <div className="text-sm text-secondary font-semibold mb-2">
                {article.category} • {article.date}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {article.title}
              </h3>
              <p className="text-gray-600 mb-4">{article.excerpt}</p>
              <span className="text-primary hover:text-primary-dark font-semibold">
                Read More →
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* Newsletter Signup */}
      <Section className="bg-white">
        <div className="card max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Stay Connected
          </h2>
          <p className="text-gray-600 mb-6">
            Subscribe to our newsletter to receive updates about our programs,
            impact stories, and upcoming events.
          </p>
          <form className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              type="submit"
              className="bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-dark transition-all"
            >
              Subscribe
            </button>
          </form>
        </div>
      </Section>
    </div>
  );
}

