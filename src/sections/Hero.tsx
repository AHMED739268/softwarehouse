import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className=" relative min-h-screen flex items-center overflow-hidden" style={{borderRadius:20}}>
      {/* Video Background (Right Side) */}
      <div className=" absolute inset-0  z-0"  >
        <video
          className="w-full h-full object-cover"
         
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8">
        {/* Left Side: Text & CTA */}
        <div className="flex flex-col justify-center text-white py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="text-sm text-gray-300 mb-4 bg-gray-800/50 px-3 py-1 rounded-full inline-block">
              Start selling from 9 SAR per month
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              ALL-IN-ONE, TRUSTED PLATFORM FOR ECOMMERCE
            </h1>
            <p className="text-lg mb-8 text-gray-300">
              Empowering you to build, scale, and grow your online store with secure payments, global shipping, flexible financing, and impactful marketing. Everything you need to become the next leading brand in the market.
            </p>
            <a
              href="#"
              className="inline-block px-6 py-3 bg-purple-600 text-white rounded-full font-medium hover:bg-purple-700 transition-colors shadow-lg"
            >
              Start Your Trial
            </a>
          </motion.div>
        </div>

        {/* Right Side: Video (Only visible if needed) */}
       
      </div>
    </section>
  );
}