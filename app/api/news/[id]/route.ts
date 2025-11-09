import { NextResponse } from "next/server";
import type { NewsArticle } from "../route";

// Mock data for individual articles - Replace with actual API call
async function fetchNewsArticle(id: string): Promise<NewsArticle | null> {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 100));

  // In production, replace this with actual API call:
  // const response = await fetch(`https://your-api-endpoint.com/api/news/${id}`, {
  //   headers: { 'Authorization': `Bearer ${process.env.API_TOKEN}` }
  // });
  // if (!response.ok) return null;
  // return response.json();

  // Mock article data
  const articles: Record<string, NewsArticle> = {
    "1": {
      id: 1,
      title: "Community Health Initiative Launch",
      date: "March 15, 2024",
      category: "Health",
      image: "/images/news/news-1.jpg",
      excerpt:
        "We're excited to announce the launch of our new community health program targeting maternal and child health in rural areas.",
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
      image: "/images/news/news-2.jpg",
      excerpt:
        "Our education programs have now reached over 5,000 students across 30 schools, marking a significant milestone in our mission.",
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

  return articles[id] || null;
}

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const article = await fetchNewsArticle(params.id);

    if (!article) {
      return NextResponse.json(
        { error: "Article not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ article }, { status: 200 });
  } catch (error) {
    console.error("Error fetching news article:", error);
    return NextResponse.json(
      {
        error: "Failed to fetch news article",
        message: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

// Disable static generation for this route
export const dynamic = "force-dynamic";

