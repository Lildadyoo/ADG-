"use client";

import Image from "next/image";
import { useState } from "react";

interface ProgramImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function ProgramImage({
  src,
  alt,
  className = "",
}: ProgramImageProps) {
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  if (imageError) {
    return (
      <div
        className={`h-64 md:h-96 bg-accent rounded-xl flex items-center justify-center ${className}`}
      >
        <div className="text-center p-4">
          <p className="text-gray-400 text-sm">Image not available</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`h-64 md:h-96 w-full relative rounded-xl overflow-hidden bg-accent ${className}`}
    >
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-accent">
          <div className="animate-pulse text-gray-400">Loading...</div>
        </div>
      )}
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        onError={() => setImageError(true)}
        onLoad={() => setIsLoading(false)}
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </div>
  );
}

