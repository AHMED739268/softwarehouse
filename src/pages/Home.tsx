import Hero from '../sections/Hero'
import Partners from '../sections/Partners'

import Features from '../pages/FeaturesPage'
import Features2 from '../pages/FeaturesPage2'
import StoreBuilder from '../sections/StoreBuilder'
import StoreBuilderRight from '../sections/StoreBuilderRight'
import SuccessStories from '../pages/SuccessStories'
import {SupportSection} from '../sections/SupportSection';
import { IconKey } from 'utils/iconMap'

export default function Home() {
  

  const features =[
      {
        "icon": "feature1",
        "title": "Ready to respond to your inquiries",
        "description": "Automated response available 24/7 and a specialized team to serve you during business hours"
      },
      {
        "icon": "feature2",
        "title": "Vibrant Community",
        "description": "Connect with fellow dreamers and doers who speak your language"
      },
      {
        "icon": "feature3",
        "title": "Expert Support",
        "description": "Our team of experts is ready to answer your questions throughout working hours."
      }
    ]


  return (
    <>
      <Hero />
      <Partners />
      <Features title="Empowering Businesses of All Shapes and Sizes"/>
      <StoreBuilder
      title="VERSATILE STORE BUILDER"
      description="Launch your dream store online or manage your physical spot with ease. No coding nightmares, we promise."
      buttonText="Build Your Empire"
      image='/images/for-visionaries.jpg'
      backgroundColor="#ffffffff"
    
    />
         <StoreBuilderRight
      title="VERSATILE STORE BUILDER"
      description="Launch your dream store online or manage your physical spot with ease. No coding nightmares, we promise."
      buttonText="Build Your Empire"
      image='/images/for-visionaries.jpg'
      backgroundColor="#dddddd69"
     
    />
  <SuccessStories />
  <Features2 />
  <Features title="Empowering Businesses of All Shapes and Sizes" />
<SupportSection
  title="Here to Support Your Journey"
  subtitle="Whether you're just starting out or scaling up, our dedicated support team is here to help you every step of the way."
  features={features}
  buttonText="Contact Support"
  backgroundColor="#B368F5"

  paddingX="px-10 md:px-20"
  paddingY="pt-20 pb-5"
/>
<SupportSection
  title="Here to Support Your Journey"
  subtitle="Whether you're just starting out or scaling up, our dedicated support team is here to help you every step of the way."
  features={features}
  buttonText="Contact Support"
  backgroundColor="#aeaeaeff"

  paddingX="px-10 md:px-20"
  paddingY="pt-0 pb-20"
/>


    </>
  )
}
 