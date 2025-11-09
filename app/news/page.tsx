import Section from "@/components/Section";
import NewsCard from "@/components/NewsCard";
import NewsletterSignup from "@/components/NewsletterSignup";
import type { NewsArticle } from "@/app/api/news/route";

// Force dynamic rendering to prevent static generation timeout on Vercel
export const dynamic = "force-dynamic";
export const revalidate = 0;

// Fetch news articles from API at request time
async function getNewsArticles(): Promise<NewsArticle[]> {
  try {
    // In development, use localhost. In production, this will use the same domain
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    const response = await fetch(`${baseUrl}/api/news`, {
      cache: "no-store", // Always fetch fresh data
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch news: ${response.statusText}`);
    }

    const data = await response.json();
    return data.articles || [];
  } catch (error) {
    console.error("Error fetching news articles:", error);
    // Return empty array on error - you could also return a default/fallback set
    return [];
  }
}

export default async function News() {
  // Fetch data at request time (server-side)
  const newsArticles = await getNewsArticles();

  const categories = [
    "All",
    "Education",
    "Health",
    "Sustainable Growth",
    "Events",
    "Partnerships",
  ];

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
        {newsArticles.length > 0 ? (
          <>
            <div className="mb-12">
              <NewsCard {...newsArticles[0]} featured={true} />
            </div>

            {/* News Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsArticles.slice(1).map((article) => (
                <NewsCard key={article.id} {...article} />
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              No News Articles Available
            </h2>
            <p className="text-gray-600">
              We're currently updating our news. Please check back soon.
            </p>
          </div>
        )}
      </Section>

      {/* Newsletter Signup */}
      <Section className="bg-white">
        <NewsletterSignup />
      </Section>
    </div>
  );
}

