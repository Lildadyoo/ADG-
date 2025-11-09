"use client";

import Image from "next/image";
import { useState } from "react";

interface GalleryImageProps {
  src: string;
  alt: string;
  title: string;
  category: string;
  onClick?: () => void;
}

export default function GalleryImage({
  src,
  alt,
  title,
  category,
  onClick,
}: GalleryImageProps) {
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  if (imageError) {
    return (
      <div className="card p-0 overflow-hidden group cursor-pointer h-full">
        <div className="h-64 bg-accent relative flex items-center justify-center">
          <div className="text-center p-4">
            <p className="text-gray-400 text-sm mb-2">Image not available</p>
            <p className="text-gray-600 font-semibold text-sm">{title}</p>
            <p className="text-gray-500 text-xs capitalize mt-1">{category}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="card p-0 overflow-hidden group cursor-pointer h-full"
      onClick={onClick}
    >
      <div className="h-64 relative overflow-hidden bg-accent">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-accent">
            <div className="animate-pulse text-gray-400">Loading...</div>
          </div>
        )}
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
          onError={() => setImageError(true)}
          onLoad={() => setIsLoading(false)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <h3 className="font-semibold text-lg mb-1">{title}</h3>
          <p className="text-sm text-gray-200 capitalize">{category}</p>
        </div>
      </div>
    </div>
  );
}

