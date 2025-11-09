"use client";

import Image from "next/image";
import { useState } from "react";

interface InvolvementImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function InvolvementImage({
  src,
  alt,
  className = "",
}: InvolvementImageProps) {
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  if (imageError) {
    return (
      <div
        className={`h-48 bg-accent rounded-t-xl flex items-center justify-center ${className}`}
      >
        <div className="text-center p-4">
          <p className="text-gray-400 text-xs">Image not available</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`h-48 relative rounded-t-xl overflow-hidden bg-accent ${className}`}
    >
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-accent">
          <div className="animate-pulse text-gray-400 text-xs">Loading...</div>
        </div>
      )}
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        onError={() => setImageError(true)}
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
}

