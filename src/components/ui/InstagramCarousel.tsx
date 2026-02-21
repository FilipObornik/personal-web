"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { InstagramPost as InstagramPostType } from "@/types/instagram";
import InstagramPost from "./InstagramPost";

interface InstagramCarouselProps {
  posts: InstagramPostType[];
}

export default function InstagramCarousel({ posts }: InstagramCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Show 3 posts on desktop, 1 on mobile
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const postsPerView = isMobile ? 1 : 3;
  const totalPages = Math.ceil(posts.length / postsPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const getCurrentPosts = () => {
    const startIndex = currentIndex * postsPerView;
    return posts.slice(startIndex, startIndex + postsPerView);
  };

  if (posts.length === 0) {
    return null;
  }

  return (
    <div className="relative">
      {/* Carousel wrapper */}
      <div className="overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 gap-6 md:grid-cols-3"
          >
            {getCurrentPosts().map((post) => (
              <InstagramPost key={post.id} post={post} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation buttons */}
      {totalPages > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-x-4 -translate-y-1/2 rounded-full bg-white p-3 shadow-lg transition-all hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Předchozí"
          >
            <svg
              className="h-6 w-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 rounded-full bg-white p-3 shadow-lg transition-all hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Další"
          >
            <svg
              className="h-6 w-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </>
      )}

      {/* Dots indicator */}
      {totalPages > 1 && (
        <div className="mt-6 flex justify-center gap-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 w-2 rounded-full transition-all ${
                index === currentIndex
                  ? "w-8 bg-blue-600"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Přejít na stránku ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
