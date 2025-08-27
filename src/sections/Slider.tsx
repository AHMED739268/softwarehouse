import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Slide {
  title: string;
  description: string;
  image: string;
  badge?: string;
}

const slides: Slide[] = [
  {
    title: "Unlimited Products",
    description: "Stock your digital shelves to your heart’s content.",
    image: "/images/for-visionaries.jpg",
  },
  {
    title: "Budget-Friendly",
    description: "Grow your business without breaking the bank.",
    image: "/images/for-visionaries.jpg",
  },
  {
    title: "Always Open",
    description: "Your store works 24/7, even when you’re catching some Z’s.",
    image: "/images/for-visionaries.jpg",
  },
  {
    title: "Customer Loyalty",
    description: "Boost in customer loyalty with better services.",
    image: "/images/for-visionaries.jpg",
  },
  {
    title: "Unlimited Products",
    description: "Stock your digital shelves to your heart’s content.",
    image: "/images/for-visionaries.jpg",
  },
  {
    title: "Budget-Friendly",
    description: "Grow your business without breaking the bank.",
    image: "/images/for-visionaries.jpg",
  },
    {
    title: "Budget-Friendly",
    description: "Grow your business without breaking the bank.",
    image: "/images/for-visionaries.jpg",
  },
];

export default function ImageSlider() {
  const [current, setCurrent] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [constraints, setConstraints] = useState({ left: 0, right: 0 });

  const slideWidth = 360; // card width
  const gap = 24;
  const maxVisibleSlides = 3;

  useEffect(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const slideWithGap = slideWidth + gap;
      const totalWidth = slides.length * slideWithGap;
      const maxDrag = totalWidth - containerWidth;

      setConstraints({
        left: -Math.max(maxDrag, 0),
        right: 0,
      });
    }
  }, []);

  const nextSlide = () => {
    if (current < slides.length - maxVisibleSlides) {
      setCurrent(current + 1);
    }
  };

  const prevSlide = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  const handleDragEnd = (_: any, info: { offset: { x: number } }) => {
    const threshold = 100;
    if (info.offset.x < -threshold && current < slides.length - maxVisibleSlides) {
      setCurrent(current + 1);
    } else if (info.offset.x > threshold && current > 0) {
      setCurrent(current - 1);
    }
  };

  return (
    <div className="relative w-full flex flex-col items-center overflow-hidden py-16">
      {/* Title + Arrows */}
      <div className="w-full flex justify-between items-center mb-10 px-6">
        <h2 className="text-2xl md:text-3xl font-extrabold text-purple-900">
          WHY ZID MAKES SENSE FOR YOUR BUSINESS
        </h2>
        <div className="flex gap-3">
          <button
            onClick={prevSlide}
            disabled={current === 0}
            className={`bg-[#f7f5f8] hover:bg-purple-100 rounded-full p-3 transition-all ${
              current === 0 ? "opacity-40 cursor-not-allowed" : ""
            }`}
          >
            <ChevronLeft className="text-purple-900" />
          </button>
          <button
            onClick={nextSlide}
            disabled={current === slides.length - maxVisibleSlides}
            className={`bg-[#f7f5f8] hover:bg-purple-100 rounded-full p-3 transition-all ${
              current === slides.length - maxVisibleSlides ? "opacity-40 cursor-not-allowed" : ""
            }`}
          >
            <ChevronRight className="text-purple-900" />
          </button>
        </div>
      </div>

      {/* Slides */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          ref={containerRef}
          className="flex gap-6 cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={constraints}
          animate={{ x: -current * (slideWidth + gap) }}
          transition={{ type: "spring", stiffness: 200, damping: 30 }}
          onDragEnd={handleDragEnd}
        >
          {slides.map((slide, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.6, ease: "easeOut" }}
              whileHover={{ scale: 1.03, y: -6, boxShadow: "0 12px 20px rgba(0,0,0,0.1)" }}
              className="shrink-0 basis-[360px] bg-[#f7f5f8] rounded-2xl overflow-hidden relative flex flex-col justify-end aspect-[3/4]"
            >
              {/* Image */}
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              {/* Content */}
              <div className="relative p-6 text-white flex flex-col gap-3">
                <h3 className="text-xl font-bold">{slide.title}</h3>
                <p className="text-sm opacity-90">{slide.description}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
