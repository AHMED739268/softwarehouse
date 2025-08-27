import { useTranslation } from 'react-i18next';
import FeatureCard from '../sections/FeatureCard';

type FeaturesProps = {
  title: string;
};

export default function Features({ title }: FeaturesProps) {
  const { t } = useTranslation();

  // Get translated features
  const translatedFeatures = t('featuress', { returnObjects: true }) as {
    key: string;
    title: string;
    description: string;
  }[];

  // Map keys to image paths
  const imageMap: Record<string, string> = {
    visionary: '/images/for-visionaries.jpg',
    local: '/images/for-visionaries.jpg',
    pioneer: '/images/for-visionaries.jpg',
    superstar: '/images/for-visionaries.jpg',
  };

  return (
    <section className="py-16 bg-gray-50">
<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',marginBottom: 40 }}>
  <h1 className="section-title" style={{ width: 460, textAlign: 'center' }}>
    {title}
  </h1>
</div>

      <div className="  mx-auto px-4 sm:px-6 lg:px-8" style={{paddingLeft:55 }}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
         
          {translatedFeatures.map((feature) => {
            const imagePath = imageMap[feature.key] || '/images/default.jpg';
            return (
              <FeatureCard
                key={feature.key}
                title={feature.title}
                description={feature.description}
                image={imagePath}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}