import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface StoreBuilderProps {
  title: string;
  description: React.ReactNode;
  buttonText?: string;
  image: string;
  backgroundColor: string;
  showButton?: boolean; // NEW prop
}

const StoreBuilder = ({
  title,
  description,
  buttonText = "Learn More",
  image,
  backgroundColor,
  showButton = true, // default is true
}: StoreBuilderProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-20 bg-white"
      style={{ backgroundColor }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side: Text with Animation */}
          <motion.div
            className="space-y-6"
            style={{ paddingRight: 100 }}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-purple-900 mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              {title}
            </motion.h2>

            <motion.div
              className="text-lg text-purple-900 mb-8 leading-relaxed space-y-2"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {description}
            </motion.div>

            {/* Conditionally render the button */}
            {showButton && (
              <motion.a
                href="#"
                className="inline-block px-6 py-3 bg-purple-900 text-white font-medium rounded-full hover:bg-purple-800 transition-colors shadow-md"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                {buttonText}
              </motion.a>
            )}
          </motion.div>

          {/* Right Side: Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          >
            <img
              src={image}
              alt="Store Builder"
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StoreBuilder;
