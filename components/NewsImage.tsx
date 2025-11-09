"use client";

import Image from "next/image";
import { useState } from "react";

interface NewsImageProps {
  src: string;
  alt: string;
  className?: string;
  fill?: boolean;
  width?: number;
  height?: number;
}

export default function NewsImage({
  src,
  alt,
  className = "",
  fill = false,
  width,
  height,
}: NewsImageProps) {
  const [imageError, setImageError] = useState(false);

  if (imageError) {
    return (
      <div
        className={`bg-accent flex items-center justify-center ${className}`}
        style={fill ? { width: "100%", height: "100%" } : { width, height }}
      >
        <span className="text-gray-400">No Image</span>
      </div>
    );
  }

  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        className={className}
        onError={() => setImageError(true)}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onError={() => setImageError(true)}
    />
  );
}

