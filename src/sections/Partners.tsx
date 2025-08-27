import { useTranslation } from 'react-i18next';
import { useEffect, useRef } from 'react';
import './Partners.css'; // Import the CSS file for animations
export default function Partners() {
  const { t } = useTranslation();
  const logos = [
    'logo1.svg',
    'logo2.svg',
    'logo3.svg',
    'logo4.svg',
    'logo5.svg',
    'logo6.svg',
  ];
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    // Pause on hover
    const handleMouseEnter = () => {
      slider.style.animationPlayState = 'paused';
    };

    const handleMouseLeave = () => {
      slider.style.animationPlayState = 'running';
    };

    slider.addEventListener('mouseenter', handleMouseEnter);
    slider.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      slider.removeEventListener('mouseenter', handleMouseEnter);
      slider.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section className="section bg-white">
      <div className="container text-center" >
        <h3 className="section-title" >{t('partners.title')}</h3>
        <h3 className="section-title">{t('partners.Worldwide')}</h3>
        {/* Logo Slider */}
        <div
          className="mt-8 overflow-hidden"
          style={{ padding: '1rem 0' }}
        >
          <div
            ref={sliderRef}
            className="flex space-x-12 items-center py-4 logo-slider"
            style={{
              width: 'max-content',
              animation: 'scroll 20s linear infinite',
              animationTimingFunction: 'linear',
              willChange: 'transform',
            }}
          >
            {/* Duplicate logos for seamless loop */}
            {[
              ...logos,
              ...logos,
            ].map((logo, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-32 opacity-70 hover:opacity-100 transition-opacity duration-300"
              >
                <img
                  src={`/logos/${logo}`}
                  alt={`partner-${i}`}
                  className="h-10 mx-auto"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}