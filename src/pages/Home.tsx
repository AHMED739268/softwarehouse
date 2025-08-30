import Hero from '../sections/Hero'
import Partners from '../sections/Partners'

import Features from '../pages/FeaturesPage'
import Features2 from '../pages/FeaturesPage2'
import StoreBuilder from '../sections/StoreBuilder'
import StoreBuilderRight from '../sections/StoreBuilderRight'
import SuccessStories from '../pages/SuccessStories'
import {SupportSection} from '../sections/SupportSection';
import { useTranslation } from 'react-i18next';
import { IconKey } from 'utils/iconMap'

export default function Home() {
  
  const { t } = useTranslation();
  const featuresRaw = t("supportSection.features", { returnObjects: true });
  
  const features = Array.isArray(featuresRaw) ? featuresRaw : [];
    const featuresRaw2 = t("supportSection2.features", { returnObjects: true });
  
  const features2 = Array.isArray(featuresRaw2) ? featuresRaw2 : [];



  return (
    <>
       <Hero />
      <Partners />
     <Features
  title={t("features.title")}
  features={[
    { key: "visionary" },
    { key: "local" },
    { key: "pioneer" },
    { key: "superstar" }
  ]}
/>
      <StoreBuilder
  title={t("storeBuilder.title")}
  description={t("storeBuilder.description")}
  buttonText={t("storeBuilder.button")}
  image='/images/for-visionaries.jpg'
  backgroundColor="#ffffffff"
/>
       <StoreBuilderRight
  title={t("storeBuilderRight.title")}
  description={t("storeBuilderRight.description")}
  buttonText={t("storeBuilderRight.button")}
  image='/images/for-visionaries.jpg'
  backgroundColor="#dddddd69"
/>
  <SuccessStories />
  <Features2 />
   <Features
  title={t("features.title2")}
  features={[
    { key: "allInOne" },
    { key: "merchantGrowth" },
    { key: "community" },
    { key: "partners" }
  ]}
/>

<SupportSection
  title={t("supportSection.title")}
  subtitle={t("supportSection.subtitle")}
  features={features}
  buttonText={t("supportSection.button")}
  backgroundColor="#B368F5"

  paddingX="px-10 md:px-20"
  paddingY="pt-20 pb-5"
/>
<SupportSection
  title={t("supportSection2.title")}
  subtitle={t("supportSection2.subtitle")}
  features={features2}
  buttonText={t("supportSection2.button")}
  backgroundColor="#aeaeaeff"

  paddingX="px-10 md:px-20"
  paddingY="pt-0 pb-20"
/>


    </>
  )
}
 