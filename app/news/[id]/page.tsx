import Section from "@/components/Section";
import Link from "next/link";
import { notFound } from "next/navigation";

// This would typically come from a CMS or API
const newsArticles: Record<string, any> = {
  "1": {
    id: 1,
    title: "Community Health Initiative Launch",
    date: "March 15, 2024",
    category: "Health",
    content: `
      <p>We're excited to announce the launch of our new community health program targeting maternal and child health in rural areas of Uganda.</p>
      
      <p>This initiative represents a significant step forward in our mission to improve healthcare access in underserved communities. The program will focus on:</p>
      
      <ul>
        <li>Maternal health services and prenatal care</li>
        <li>Child immunization programs</li>
        <li>Health education workshops</li>
        <li>Community health worker training</li>
      </ul>
      
      <p>Over the next six months, we aim to reach over 2,000 women and children across 10 communities. This program is made possible through partnerships with local health facilities and the support of our donors and volunteers.</p>
      
      <p>We're grateful for the community support and look forward to sharing updates on the program's progress and impact.</p>
    `,
  },
  "2": {
    id: 2,
    title: "Education Program Reaches 5,000 Students",
    date: "February 28, 2024",
    category: "Education",
    content: `
      <p>Our education programs have now reached over 5,000 students across 30 schools, marking a significant milestone in our mission to provide quality education to underserved communities.</p>
      
      <p>This achievement reflects the hard work of our team, volunteers, and partners who have been dedicated to expanding educational opportunities throughout Uganda.</p>
      
      <p>Key highlights of our education programs include:</p>
      
      <ul>
        <li>School infrastructure improvements</li>
        <li>Teacher training and professional development</li>
        <li>Scholarship programs for students</li>
        <li>Digital skills training</li>
      </ul>
      
      <p>We remain committed to our goal of ensuring every child has access to quality education, and we're excited to continue expanding our programs in the coming year.</p>
    `,
  },
};

export default function NewsArticle({ params }: { params: { id: string } }) {
  const article = newsArticles[params.id];

  if (!article) {
    notFound();
  }

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
            <div className="h-96 bg-accent rounded-xl mb-8"></div>
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
              {Object.values(newsArticles)
                .filter((a) => a.id !== article.id)
                .slice(0, 2)
                .map((relatedArticle: any) => (
                  <Link
                    key={relatedArticle.id}
                    href={`/news/${relatedArticle.id}`}
                    className="card hover:scale-105 transition-transform"
                  >
                    <div className="h-40 bg-accent rounded-lg mb-4"></div>
                    <div className="text-sm text-secondary font-semibold mb-2">
                      {relatedArticle.category} • {relatedArticle.date}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">
                      {relatedArticle.title}
                    </h3>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

