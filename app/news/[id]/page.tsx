import Section from "@/components/Section";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { NewsArticle } from "@/app/api/news/route";

// Force dynamic rendering to prevent static generation timeout
export const dynamic = "force-dynamic";
export const revalidate = 0;

// Fetch news article from API at request time
async function getNewsArticle(id: string): Promise<NewsArticle | null> {
  try {
    // In development, use localhost. In production, this will use the same domain
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    const response = await fetch(`${baseUrl}/api/news/${id}`, {
      cache: "no-store", // Always fetch fresh data
      headers: {
        "Content-Type": "application/json",
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
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    const response = await fetch(`${baseUrl}/api/news`, {
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
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
            <div
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
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

