import { useTranslation } from "react-i18next";
import { useState, useRef } from "react";
import TestimonialCard from "../sections/TestimonialCard";

export default function SuccessStories() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar" || i18n.language === "he";

  // Load testimonials from i18n
  const testimonials = t("successStories.testimonials", { returnObjects: true }) as {
    name: string;
    company: string;
    rating: number;
    logo?: string;
    avatar?: string;
    review: string;
  }[];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const deltaX = e.clientX - startX;

    if (deltaX > 50) {
      prev();
      setIsDragging(false);
    } else if (deltaX < -50) {
      next();
      setIsDragging(false);
    }
  };

  const handleMouseUp = () => setIsDragging(false);
  const handleMouseLeave = () => setIsDragging(false);

  const current = testimonials[currentIndex];
  const nextIndex = (currentIndex + 1) % testimonials.length;
  const nextItem = testimonials[nextIndex];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-900">
            {t("successStories.title")}
          </h2>
          <div className="flex space-x-2" dir={isRTL ? "ltr" : "ltr"}>
            <button
              onClick={prev}
              className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-300"
              aria-label="Previous testimonial"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={next}
              className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-300"
              aria-label="Next testimonial"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div
          ref={containerRef}
          className="relative"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          style={{ cursor: isDragging ? "grabbing" : "grab" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="w-full">
              <TestimonialCard {...current} />
            </div>
            <div className="hidden md:block">
              <TestimonialCard {...nextItem} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
