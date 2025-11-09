"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface NewsCardProps {
  id: number;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  image: string;
  featured?: boolean;
  className?: string;
}

export default function NewsCard({
  id,
  title,
  date,
  category,
  excerpt,
  image,
  featured = false,
  className = "",
}: NewsCardProps) {
  const [imageError, setImageError] = useState(false);

  if (featured) {
    return (
      <div className={`card p-0 overflow-hidden ${className}`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          <div className="h-64 md:h-full relative bg-accent">
            {!imageError ? (
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-gray-400 text-2xl">No Image</span>
              </div>
            )}
          </div>
          <div className="p-8">
            <div className="text-sm text-secondary font-semibold mb-2">
              {category} • {date}
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
            <p className="text-gray-600 mb-6 text-lg">{excerpt}</p>
            <Link
              href={`/news/${id}`}
              className="text-primary hover:text-primary-dark font-semibold"
            >
              Read Full Article →
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Link
      href={`/news/${id}`}
      className={`card hover:scale-105 transition-transform block ${className}`}
    >
      <div className="h-48 relative rounded-lg mb-4 overflow-hidden bg-accent">
        {!imageError ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-gray-400">No Image</span>
          </div>
        )}
      </div>
      <div className="text-sm text-secondary font-semibold mb-2">
        {category} • {date}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{excerpt}</p>
      <span className="text-primary hover:text-primary-dark font-semibold">
        Read More →
      </span>
    </Link>
  );
}

