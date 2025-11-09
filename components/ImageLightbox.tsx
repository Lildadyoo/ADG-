"use client";

import Image from "next/image";
import { useEffect } from "react";

interface ImageLightboxProps {
  image: {
    id: number;
    title: string;
    category: string;
    image: string;
  } | null;
  onClose: () => void;
}

export default function ImageLightbox({ image, onClose }: ImageLightboxProps) {
  useEffect(() => {
    if (image) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [image]);

  if (!image) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-300 z-10 bg-black/50 rounded-full p-2"
        aria-label="Close lightbox"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <div
        className="max-w-6xl max-h-full w-full h-full flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative flex-1 min-h-0">
          <Image
            src={image.image}
            alt={image.title}
            fill
            className="object-contain"
          />
        </div>
        <div className="bg-black/80 text-white p-4 mt-4 rounded-lg">
          <h3 className="text-xl font-bold mb-1">{image.title}</h3>
          <p className="text-gray-300 capitalize text-sm">{image.category}</p>
        </div>
      </div>
    </div>
  );
}

