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
        className={`h-64 md:h-96 w-full bg-gray-200 border-2 border-dashed border-gray-400 rounded-xl flex items-center justify-center ${className}`}
        style={{ minHeight: '256px' }}
      >
        <div className="text-center p-4">
          <p className="text-gray-600 text-sm font-medium">Image not available</p>
          <p className="text-gray-500 text-xs mt-1">{alt}</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="relative w-full rounded-xl overflow-hidden"
      style={{ 
        height: '256px',
        minHeight: '256px',
        backgroundColor: '#f3f4f6'
      }}
    >
      {isLoading && (
        <div 
          className="absolute inset-0 flex items-center justify-center z-20"
          style={{ backgroundColor: '#f3f4f6' }}
        >
          <div className="animate-pulse text-gray-500 text-sm">Loading...</div>
        </div>
      )}
      <Image
        src={src}
        alt={alt}
        fill
        style={{ objectFit: 'cover' }}
        className="rounded-xl"
        onError={(e) => {
          console.error('Image failed to load:', src, e);
          setImageError(true);
          setIsLoading(false);
        }}
        onLoad={() => {
          console.log('Image loaded successfully:', src);
          setIsLoading(false);
        }}
        sizes="(max-width: 768px) 100vw, 50vw"
        quality={85}
      />
    </div>
  );
}

