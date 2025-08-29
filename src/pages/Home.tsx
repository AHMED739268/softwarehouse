import Hero from '../sections/Hero'
import Partners from '../sections/Partners'
import { useTranslation } from "react-i18next";
import Features from '../pages/FeaturesPage'
import Features2 from '../pages/FeaturesPage2'
import StoreBuilder from '../sections/StoreBuilder'
import StoreBuilderRight from '../sections/StoreBuilderRight'
import SuccessStories from '../pages/SuccessStories'
import {SupportSection} from '../sections/SupportSection';
import { IconKey } from 'utils/iconMap'

export default function Home() {
   const { t } = useTranslation();

  const features = t("supportSection.features", {
    returnObjects: true,
  }) as { icon: IconKey; title: string; description: string }[];


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
{/* <SupportSection
  title={t("supportSection.title")}
  subtitle={t("supportSection.subtitle")}
  features={features}
  buttonText={t("supportSection.buttonText")}
  backgroundColor="#B368F5"

  paddingX="px-10 md:px-20"
  paddingY="pt-20 pb-5"
/>
<SupportSection
  title={t("supportSection.title")}
  subtitle={t("supportSection.subtitle")}
  features={features}
  buttonText={t("supportSection.buttonText")}
  backgroundColor="#aeaeaeff"

  paddingX="px-10 md:px-20"
  paddingY="pt-0 pb-20"
/> */}


    </>
  )
}
 