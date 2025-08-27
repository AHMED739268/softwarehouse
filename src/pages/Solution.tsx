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

      <Hero2 />
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
      <GettingStarted />
      <WhyGoMobile />
      <FAQ />
    </>
  );
}