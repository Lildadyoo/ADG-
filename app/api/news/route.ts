import { NextResponse } from "next/server";

// This interface matches the news article structure
export interface NewsArticle {
  id: number;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  image: string;
  content?: string;
}

// Mock data - Replace this with your actual API call
// For example: fetch('https://your-api.com/news')
async function fetchNewsArticles(): Promise<NewsArticle[]> {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 100));

  // In production, replace this with actual API call:
  // const response = await fetch('https://your-api-endpoint.com/api/news', {
  //   headers: { 'Authorization': `Bearer ${process.env.API_TOKEN}` }
  // });
  // if (!response.ok) throw new Error('Failed to fetch news');
  // return response.json();

  // Return mock data for now
  return [
    {
      id: 1,
      title: "Community Health Initiative Launch",
      date: "March 15, 2024",
      category: "Health",
      excerpt:
        "We're excited to announce the launch of our new community health program targeting maternal and child health in rural areas.",
      image: "/images/news/news-1.jpg",
    },
    {
      id: 2,
      title: "Education Program Reaches 5,000 Students",
      date: "February 28, 2024",
      category: "Education",
      excerpt:
        "Our education programs have now reached over 5,000 students across 30 schools, marking a significant milestone in our mission.",
      image: "/images/news/news-2.jpg",
    },
    {
      id: 3,
      title: "Sustainable Growth Project Expansion",
      date: "February 10, 2024",
      category: "Sustainable Growth",
      excerpt:
        "ADG announces the expansion of sustainable growth projects to five new communities, focusing on agriculture and entrepreneurship.",
      image: "/images/news/news-3.jpg",
    },
    {
      id: 4,
      title: "Annual Community Gathering Success",
      date: "January 20, 2024",
      category: "Events",
      excerpt:
        "Our annual community gathering brought together over 500 participants to celebrate achievements and plan for the year ahead.",
      image: "/images/news/news-4.jpg",
    },
    {
      id: 5,
      title: "New Partnership with Local NGOs",
      date: "January 5, 2024",
      category: "Partnerships",
      excerpt:
        "ADG partners with three local NGOs to amplify impact and reach more communities with comprehensive development programs.",
      image: "/images/news/news-5.jpg",
    },
    {
      id: 6,
      title: "Volunteer Recognition Ceremony",
      date: "December 15, 2023",
      category: "Events",
      excerpt:
        "We honored our dedicated volunteers at a special ceremony, recognizing their invaluable contributions to our mission.",
      image: "/images/news/news-6.jpg",
    },
  ];
}

export async function GET() {
  try {
    const articles = await fetchNewsArticles();
    return NextResponse.json({ articles }, { status: 200 });
  } catch (error) {
    console.error("Error fetching news articles:", error);
    return NextResponse.json(
      {
        error: "Failed to fetch news articles",
        message: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

// Disable static generation for this route
export const dynamic = "force-dynamic";

