import Section from "@/components/Section";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

// Force dynamic rendering to prevent static generation timeout on Vercel
export const dynamic = "force-dynamic";
export const revalidate = 0;

// NewsArticle interface
interface NewsArticle {
  id: number;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  image: string;
  content?: string;
}

// Fetch news article from API at request time
async function getNewsArticle(id: string): Promise<NewsArticle | null> {
  // CRITICAL: Prevent any data fetching during build phase
  // This ensures the page is never statically generated
  if (process.env.NEXT_PHASE === 'phase-production-build') {
    return null;
  }

  try {
    // For server-side rendering, construct the full URL
    const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http';
    const host = process.env.VERCEL_URL 
      ? process.env.VERCEL_URL 
      : process.env.NEXT_PUBLIC_BASE_URL?.replace(/^https?:\/\//, '') || 'localhost:3000';
    
    const apiUrl = `${protocol}://${host}/api/news/${id}`;
    
    const response = await fetch(apiUrl, {
      cache: 'no-store', // CRITICAL: Always fetch fresh data at request time - prevents static generation
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      if (response.status === 404) {
        return null;
      }
      throw new Error(`Failed to fetch article: ${response.statusText}`);
    }

    const data = await response.json();
    return data.article || null;
  } catch (error) {
    console.error("Error fetching news article:", error);
    return null;
  }
}

// Fetch all news articles for related articles section
async function getAllNewsArticles(): Promise<NewsArticle[]> {
  // CRITICAL: Prevent any data fetching during build phase
  // This ensures the page is never statically generated
  if (process.env.NEXT_PHASE === 'phase-production-build') {
    return [];
  }

  try {
    // For server-side rendering, construct the full URL
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
      return [];
    }

    const data = await response.json();
    return data.articles || [];
  } catch (error) {
    console.error("Error fetching all news articles:", error);
    return [];
  }
}

export default async function NewsArticle({
  params,
}: {
  params: { id: string };
}) {
  // Fetch data at request time (server-side)
  const [article, allArticles] = await Promise.all([
    getNewsArticle(params.id),
    getAllNewsArticles(),
  ]);

  if (!article) {
    notFound();
  }

  // Get related articles (exclude current article)
  const relatedArticles = allArticles
    .filter((a) => a.id !== article.id)
    .slice(0, 2);

  return (
    <div>
      {/* Article Header */}
      <Section className="bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="py-12 md:py-16">
          <Link
            href="/news"
            className="text-gray-100 hover:text-white mb-4 inline-block"
          >
            ← Back to News
          </Link>
          <div className="text-sm text-gray-100 mb-4">
            {article.category} • {article.date}
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            {article.title}
          </h1>
        </div>
      </Section>

      {/* Article Content */}
      <Section className="bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="card">
            {article.image && (
              <div className="h-96 relative rounded-xl mb-8 overflow-hidden bg-accent">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            {article.content && (
              <div
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
            )}
          </div>

          {/* Share Section */}
          <div className="mt-8 card text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Share This Article
            </h3>
            <div className="flex justify-center gap-4">
              <button className="btn-primary">
                Facebook
              </button>
              <button className="btn-primary">
                Twitter
              </button>
              <button className="btn-primary">
                LinkedIn
              </button>
            </div>
          </div>

          {/* Related Articles */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedArticles.length > 0 ? (
                relatedArticles.map((relatedArticle) => (
                  <Link
                    key={relatedArticle.id}
                    href={`/news/${relatedArticle.id}`}
                    className="card hover:scale-105 transition-transform"
                  >
                    {relatedArticle.image && (
                      <div className="h-40 relative rounded-lg mb-4 overflow-hidden bg-accent">
                        <Image
                          src={relatedArticle.image}
                          alt={relatedArticle.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div className="text-sm text-secondary font-semibold mb-2">
                      {relatedArticle.category} • {relatedArticle.date}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">
                      {relatedArticle.title}
                    </h3>
                  </Link>
                ))
              ) : (
                <p className="text-gray-600 col-span-2 text-center py-4">
                  No related articles available.
                </p>
              )}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

