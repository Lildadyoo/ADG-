"use client";

import Section from "@/components/Section";
import { useState } from "react";

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", label: "All" },
    { id: "education", label: "Education" },
    { id: "health", label: "Health" },
    { id: "sustainable", label: "Sustainable Growth" },
    { id: "events", label: "Events" },
    { id: "community", label: "Community" },
  ];

  // Placeholder images - in a real app, these would come from a CMS or API
  const images = [
    { id: 1, category: "education", title: "School Program Launch" },
    { id: 2, category: "health", title: "Community Health Clinic" },
    { id: 3, category: "sustainable", title: "Agriculture Training" },
    { id: 4, category: "events", title: "Annual Community Gathering" },
    { id: 5, category: "community", title: "Community Meeting" },
    { id: 6, category: "education", title: "Student Learning" },
    { id: 7, category: "health", title: "Health Workshop" },
    { id: 8, category: "sustainable", title: "Renewable Energy Project" },
    { id: 9, category: "events", title: "Volunteer Recognition" },
    { id: 10, category: "community", title: "Community Celebration" },
    { id: 11, category: "education", title: "Teacher Training" },
    { id: 12, category: "health", title: "Health Screening" },
  ];

  const filteredImages =
    selectedCategory === "all"
      ? images
      : images.filter((img) => img.category === selectedCategory);

  return (
    <div>
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
            <div
              key={image.id}
              className="card p-0 overflow-hidden group cursor-pointer"
            >
              <div className="h-64 bg-accent relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <h3 className="font-semibold">{image.title}</h3>
                  <p className="text-sm text-gray-200 capitalize">
                    {image.category}
                  </p>
                </div>
              </div>
            </div>
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

      {/* Video Section (Optional) */}
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
          <div className="card p-0 overflow-hidden">
            <div className="h-64 bg-accent"></div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Education Program Impact
              </h3>
              <p className="text-gray-600">
                See how our education programs are transforming lives in rural
                communities.
              </p>
            </div>
          </div>

          <div className="card p-0 overflow-hidden">
            <div className="h-64 bg-accent"></div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Community Health Initiative
              </h3>
              <p className="text-gray-600">
                Learn about our health programs and their impact on community
                wellness.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

