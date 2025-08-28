// src/pages/Solution.tsx (or wherever it is)
import Partners from '../sections/Partners'
import React from 'react'; // ← Important: Add this
import StoreBuilder from '../sections/StoreBuilder'
import Hero2 from '../sections/Hero2';
import StoreBuilderRight from '../sections/StoreBuilderRight'
import Cardsolution from '../sections/ContactSection';
import Slider from '../sections/Slider';
import GettingStarted from '../sections/GettingStarted';
import WhyGoMobile from '../sections/WhyGoMobile';
import FAQ from '../sections/FAQ';
export default function Solution() {
  return (
    <>

      {Hero2(
        "TURN YOUR BIG IDEA INTO A THRIVING E-STORE",
        "New to e-commerce? Don’t sweat it. We’ve got everything you need to get started and expand with minimal costs.",
        "Launch Your Store",
        "/images/sol.png"
      )}
      <Partners />
      <StoreBuilder
        title="VERSATILE STORE BUILDER"
        description={

          <ul className="list-disc list-inside space-y-2">
            <h4 className="font-semibold mb-4">
              Our user-friendly platform lets you focus on what you do best—your products and your customers.
            </h4>
            <li>Set up your store in minutes, not months</li>
            <li>Intuitive tools that speak your language, not tech jargon</li>
            <li>Customizable templates that make your brand shine</li>
          </ul>
        }
        buttonText="Build Your Empire"
        image="/images/for-visionaries.jpg"
        backgroundColor="#ffffffff"
      />

      <StoreBuilderRight
        title="VERSATILE STORE BUILDER"
        description={

          <ul className="list-disc list-inside space-y-2">
            <h4 className="font-semibold mb-4">
              Our user-friendly platform lets you focus on what you do best—your products and your customers.
            </h4>
            <li>Set up your store in minutes, not months</li>
            <li>Intuitive tools that speak your language, not tech jargon</li>
            <li>Customizable templates that make your brand shine</li>
          </ul>
        }
        buttonText="Build Your Empire"
        image='/images/for-visionaries.jpg'
        backgroundColor="#dddddd69"

      />
      <StoreBuilder
        title="VERSATILE STORE BUILDER"

        description={

          <ul className="list-disc list-inside space-y-2">
            <h4 className="font-semibold mb-4">
              Our user-friendly platform lets you focus on what you do best—your products and your customers.
            </h4>
            <li>Set up your store in minutes, not months</li>
            <li>Intuitive tools that speak your language, not tech jargon</li>
            <li>Customizable templates that make your brand shine</li>
          </ul>
        }

        image="/images/for-visionaries.jpg"
        backgroundColor="#ffffffff"
        showButton={false}
      />
      <Cardsolution />
      <Slider />
  <GettingStarted
    steps={[
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
    ]}
  />
      <WhyGoMobile />
      <FAQ />
    </>
  );
}