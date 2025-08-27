import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Stat {
  value: string;
  description: string;
  icon: JSX.Element;
}

const stats: Stat[] = [
  {
    value: "3X",
    description: "increase in customer conversion",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M16 14c2.21 0 4 1.79 4 4v2H4v-2c0-2.21 1.79-4 4-4h8zM12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/></svg>
  },
  {
    value: "5X",
    description: "higher business retention",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z"/><path d="M12 6v6l4 2"/></svg>
  },
  {
    value: "98%",
    description: "boost in customer loyalty",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="10"/><path d="M15 9h.01M9 9h.01M8 15c1.333 1 2.667 1 4 0s2.667-1 4 0"/></svg>
  },
  {
    value: "3X",
    description: "increase in customer conversion",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M16 14c2.21 0 4 1.79 4 4v2H4v-2c0-2.21 1.79-4 4-4h8zM12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/></svg>
  },
  {
    value: "5X",
    description: "higher business retention",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z"/><path d="M12 6v6l4 2"/></svg>
  },
  {
    value: "100%",
    description: "boost in customer loyalty",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="10"/><path d="M15 9h.01M9 9h.01M8 15c1.333 1 2.667 1 4 0s2.667-1 4 0"/></svg>
  },
    {
    value: "3X",
    description: "boost in customer loyalty",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="10"/><path d="M15 9h.01M9 9h.01M8 15c1.333 1 2.667 1 4 0s2.667-1 4 0"/></svg>
  }
];

export default function WhyGoMobile() {
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
      const totalWidth = stats.length * slideWithGap;
      const maxDrag = totalWidth - containerWidth;

      setConstraints({
        left: -Math.max(maxDrag, 0),
        right: 0,
      });
    }
  }, []);

  const nextSlide = () => {
    if (current < stats.length - maxVisibleSlides) {
      setCurrent(current + 1);
    }
  };

  const prevSlide = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  return (
    <div className="relative w-full flex flex-col items-center overflow-hidden py-16">
      {/* Title + Arrows */}
      <div className="w-full flex justify-between items-center mb-10 px-6">
        <h2 className="text-2xl md:text-3xl font-extrabold text-purple-900">
          WHY GO MOBILE?
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
            disabled={current === stats.length - maxVisibleSlides}
            className={`bg-[#f7f5f8] hover:bg-purple-100 rounded-full p-3 transition-all ${
              current === stats.length - maxVisibleSlides ? "opacity-40 cursor-not-allowed" : ""
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
          className="flex gap-6 cursor-grab px-6"
          drag="x"
          dragConstraints={constraints}
          animate={{ x: -current * (slideWidth + gap) }}
          transition={{ type: "spring", stiffness: 200, damping: 30 }}
        >
          {stats.map((stat, idx) => (
            <motion.article
              key={idx}
              className=" shrink-0 basis-[460px] bg-[#f7f5f8] rounded-2xl p-10 flex flex-col gap-6 h-[260px]" 
              whileHover={{ y: -6, boxShadow: "0 12px 20px rgba(0,0,0,0.1)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-purple-900">{stat.icon}</div>
              <h3 className="text-3xl font-extrabold text-purple-900">
                {stat.value}
              </h3>
              <p className="text-purple-900 text-base">{stat.description}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
