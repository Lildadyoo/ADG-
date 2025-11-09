import Section from "@/components/Section";
import NewsCard from "@/components/NewsCard";
import NewsletterSignup from "@/components/NewsletterSignup";

// Force dynamic rendering to prevent static generation timeout on Vercel
// This MUST be exported before the component
export const dynamic = "force-dynamic";
export const revalidate = 0;

// NewsArticle interface
export interface NewsArticle {
  id: number;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  image: string;
  content?: string;
}

// Fetch news articles at request time
// Replace this with your actual API endpoint
async function getNewsArticles(): Promise<NewsArticle[]> {
  try {
    // Option 1: Call external API directly (recommended for production)
    // Uncomment and configure when you have an external API:
    // const apiUrl = process.env.NEWS_API_URL || 'https://your-api.com/api/news';
    // const response = await fetch(apiUrl, {
    //   cache: 'no-store', // Always fetch fresh data at request time
    //   headers: {
    //     'Authorization': `Bearer ${process.env.API_TOKEN}`,
    //     'Content-Type': 'application/json',
    //   },
    // });
    // if (!response.ok) throw new Error(`Failed to fetch: ${response.statusText}`);
    // return await response.json();
    
    // Option 2: Call internal API route (current setup)
    // For server-side rendering, we need to construct the full URL
    const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http';
    const host = process.env.VERCEL_URL 
      ? process.env.VERCEL_URL 
      : process.env.NEXT_PUBLIC_BASE_URL?.replace(/^https?:\/\//, '') || 'localhost:3000';
    
    const apiUrl = `${protocol}://${host}/api/news`;
    
    const response = await fetch(apiUrl, {
      cache: 'no-store', // CRITICAL: Always fetch fresh data at request time - prevents static generation
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch news: ${response.statusText}`);
    }

    const data = await response.json();
    return data.articles || [];
  } catch (error) {
    console.error("Error fetching news articles:", error);
    // Return empty array on error - prevents page crash
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

