"use client";

import Image from "next/image";
import { useState } from "react";

interface TeamMemberImageProps {
  src: string;
  alt: string;
  name: string;
  size?: number;
}

export default function TeamMemberImage({
  src,
  alt,
  name,
  size = 128,
}: TeamMemberImageProps) {
  const [imageError, setImageError] = useState(false);

  // Generate initials from name
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  if (imageError) {
    // Fallback to initials if image fails to load
    return (
      <div
        className="rounded-full bg-accent flex items-center justify-center text-gray-400 font-semibold"
        style={{ width: size, height: size }}
      >
        <span className="text-4xl">{getInitials(name)}</span>
      </div>
    );
  }

  return (
    <div
      className="rounded-full overflow-hidden bg-accent"
      style={{ width: size, height: size }}
    >
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
        className="object-cover w-full h-full"
        onError={() => setImageError(true)}
      />
    </div>
  );
}

