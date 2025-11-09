"use client";

import Section from "@/components/Section";
import GalleryImage from "@/components/GalleryImage";
import ImageLightbox from "@/components/ImageLightbox";
import StoryCard from "@/components/StoryCard";
import { useState } from "react";

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const categories = [
    { id: "all", label: "All" },
    { id: "education", label: "Education" },
    { id: "health", label: "Health" },
    { id: "sustainable", label: "Sustainable Growth" },
    { id: "events", label: "Events" },
    { id: "community", label: "Community" },
  ];

  // Gallery images - Add your images to public/images/gallery/ directory
  const images = [
    {
      id: 1,
      category: "education",
      title: "School Program Launch",
      image: "/images/gallery/education-1.jpg",
    },
    {
      id: 2,
      category: "health",
      title: "Community Health Clinic",
      image: "/images/gallery/health-1.jpg",
    },
    {
      id: 3,
      category: "sustainable",
      title: "Agriculture Training",
      image: "/images/gallery/sustainable-1.jpg",
    },
    {
      id: 4,
      category: "events",
      title: "Annual Community Gathering",
      image: "/images/gallery/events-1.jpg",
    },
    {
      id: 5,
      category: "community",
      title: "Community Meeting",
      image: "/images/gallery/community-1.jpg",
    },
    {
      id: 6,
      category: "education",
      title: "Student Learning",
      image: "/images/gallery/education-2.jpg",
    },
    {
      id: 7,
      category: "health",
      title: "Health Workshop",
      image: "/images/gallery/health-2.jpg",
    },
    {
      id: 8,
      category: "sustainable",
      title: "Renewable Energy Project",
      image: "/images/gallery/sustainable-2.jpg",
    },
    {
      id: 9,
      category: "events",
      title: "Volunteer Recognition",
      image: "/images/gallery/events-2.jpg",
    },
    {
      id: 10,
      category: "community",
      title: "Community Celebration",
      image: "/images/gallery/community-2.jpg",
    },
    {
      id: 11,
      category: "education",
      title: "Teacher Training",
      image: "/images/gallery/education-3.jpg",
    },
    {
      id: 12,
      category: "health",
      title: "Health Screening",
      image: "/images/gallery/health-3.jpg",
    },
  ];

  const filteredImages =
    selectedCategory === "all"
      ? images
      : images.filter((img) => img.category === selectedCategory);

  // Stories in Motion section - Featured video/image content
  const stories = [
    {
      id: "story-1",
      title: "Education Program Impact",
      description:
        "See how our education programs are transforming lives in rural communities.",
      image: "/images/gallery/stories-education.jpg",
      videoUrl: null, // Add YouTube/Vimeo URL if you have a video (e.g., "https://www.youtube.com/watch?v=...")
    },
    {
      id: "story-2",
      title: "Community Health Initiative",
      description:
        "Learn about our health programs and their impact on community wellness.",
      image: "/images/gallery/stories-health.jpg",
      videoUrl: null, // Add YouTube/Vimeo URL if you have a video (e.g., "https://www.youtube.com/watch?v=...")
    },
  ];

  // Combine all images (gallery + stories) for lightbox support
  const allImagesForLightbox = [
    ...images,
    ...stories.map((story, index) => ({
      id: 1000 + index + 1,
      title: story.title,
      category: "story",
      image: story.image,
    })),
  ];

  const selectedImageData =
    selectedImage !== null
      ? allImagesForLightbox.find((img) => img.id === selectedImage)
      : null;

  return (
    <div>
      {/* Image Lightbox */}
      {selectedImageData && (
        <ImageLightbox
          image={selectedImageData}
          onClose={() => setSelectedImage(null)}
        />
      )}

      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="text-center py-16 md:py-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Gallery</h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">
            A visual journey through our programs, events, and the communities
            we serve.
          </p>
        </div>
      </Section>

      {/* Category Filter */}
      <Section className="bg-background">
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-xl font-semibold transition-all ${
                selectedCategory === category.id
                  ? "bg-primary text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-accent shadow-md"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <GalleryImage
              key={image.id}
              src={image.image}
              alt={image.title}
              title={image.title}
              category={image.category}
              onClick={() => setSelectedImage(image.id)}
            />
          ))}
        </div>

        {filteredImages.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              No images found in this category.
            </p>
          </div>
        )}
      </Section>

      {/* Stories in Motion Section */}
      <Section className="bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Stories in Motion
          </h2>
          <p className="text-lg text-gray-600">
            Watch our programs in action through video stories from the field.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stories.map((story) => (
            <StoryCard
              key={story.id}
              title={story.title}
              description={story.description}
              image={story.image}
              videoUrl={story.videoUrl}
              onClick={() => {
                if (story.videoUrl) {
                  // Open video in new tab
                  window.open(story.videoUrl, "_blank");
                } else {
                  // If no video URL, open image in lightbox
                  const storyImageId = 1000 + parseInt(story.id.split("-")[1]);
                  setSelectedImage(storyImageId);
                }
              }}
            />
          ))}
        </div>
      </Section>
    </div>
  );
}

