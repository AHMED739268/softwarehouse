import { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';

interface Step {
  id: number;
  title: string;
  description: string;
  icon: JSX.Element;
}

const GettingStarted = () => {
  const steps: Step[] = [
    {
      id: 1,
      title: 'Create an Account',
      description: 'Join the Zid family in just a few clicks.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      ),
    },
    {
      id: 2,
      title: 'Choose Your Plan',
      description: 'Pick from Lite, Growth, or Pro – find what fits you best.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 8v4l2 2" />
        </svg>
      ),
    },
    {
      id: 3,
      title: 'Design Your Store',
      description: 'Select a ready-made theme or go custom and make it yours.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <line x1="3" y1="9" x2="21" y2="9" />
          <line x1="9" y1="21" x2="9" y2="3" />
        </svg>
      ),
    },
    {
      id: 4,
      title: 'Add Your Products',
      description: 'Show off what you’re selling in all their glory.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <line x1="9" y1="9" x2="15" y2="9" />
          <line x1="12" y1="6" x2="12" y2="12" />
        </svg>
      ),
    },
    {
      id: 5,
      title: 'Set Up Payments',
      description: 'Connect the payment methods your customers love.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <line x1="3" y1="9" x2="21" y2="9" />
          <line x1="9" y1="21" x2="9" y2="3" />
        </svg>
      ),
    },
  ];

  // Store visible state for each card
  const [visibleMap, setVisibleMap] = useState<{ [key: number]: boolean }>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = parseInt(entry.target.id.split('-')[1]);
          setVisibleMap((prev) => ({
            ...prev,
            [id]: entry.isIntersecting, // update each time enters/leaves
          }));
        });
      },
      { threshold: 0.3 }
    );

    document.querySelectorAll('.step-item').forEach((el) => observer.observe(el));

    return () => {
      document.querySelectorAll('.step-item').forEach((el) => observer.unobserve(el));
    };
  }, []);

  const getAnimation = (id: number) =>
    useSpring({
      opacity: visibleMap[id] ? 1 : 0,
      transform: visibleMap[id]
        ? 'translateY(0px) rotate(0deg) scale(1)'
        : 'translateY(60px) rotate(12deg) scale(0.9)',
      config: { tension: 200, friction: 20 },
    });

  return (
    <main className="zid-container py-20 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-4xl font-bold text-purple-900 tracking-tight">
          GETTING STARTED IS A
          <br />
          <span className="text-purple-800">BREEZE</span>
        </h1>
      </div>

      {/* Timeline */}
      <ul
        className="relative max-w-4xl mx-auto flex flex-col gap-12"
        role="list"
        aria-label="Steps list"
      >
        {/* Central Vertical Line */}
        <div
          className="absolute h-full md:h-5/6 w-[3px] bg-black/5 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
          aria-hidden="true"
        />

        {steps.map((step) => {
          const animation = getAnimation(step.id);
          const isEven = step.id % 2 === 0;

          return (
            <li
              key={step.id}
              id={`step-${step.id}`}
              className="step-item grid grid-cols-1 md:grid-cols-[1fr_64px_1fr] gap-5 md:gap-8 items-center"
              role="listitem"
            >
              {/* Left Placeholder */}
              <div className="hidden md:block" aria-hidden="true" />

              {/* Step Number Circle */}
              <div
                className="h-9 w-9 bg-purple-600 rounded-full mx-auto relative text-white flex items-center justify-center text-sm font-semibold"
                aria-label={`Step ${step.id}`}
              >
                {step.id}
              </div>

              {/* Article Card */}
              <animated.article
                style={animation}
                className={`bg-white shadow-lg rounded-2xl p-6 flex flex-col md:flex-row items-start gap-4 ${
                  isEven ? 'order-last md:order-none' : ''
                } relative h-full`}
                role="article"
                aria-label={`Step ${step.id}: ${step.title}`}
              >
                {/* Icon Container */}
                <div className="bg-purple-100 h-14 w-14 rounded-full flex items-center justify-center text-purple-600 flex-shrink-0">
                  {step.icon}
                </div>

                {/* Text Content */}
                <div className="flex flex-col gap-2">
                  <h3 className="font-semibold text-lg text-gray-900">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
              </animated.article>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default GettingStarted;
