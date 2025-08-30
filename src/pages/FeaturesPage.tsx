import { useTranslation } from 'react-i18next';
import './FeaturesPage.css';
type Feature = {
  key: string;
};

type FeaturesProps = {
  title: string;
  features: Feature[];
};

export default function Features({ title, features }: FeaturesProps) {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === "rtl";

  const imageMap: Record<string, string> = {
    visionary: '/images/for-visionaries.jpg',
    local: '/images/for-visionaries.jpg',
    pioneer: '/images/for-visionaries.jpg',
    superstar: '/images/for-visionaries.jpg',
    allInOne: '/images/whyzid.jpg',
    merchantGrowth: '/images/whyzid.jpg',
    community: '/images/whyzid.jpg',
    partners: '/images/whyzid.jpg',
  };

  return (
    <section className="py-16 bg-gray-50">
     
      <div className="flex justify-center items-center mb-10 px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-purple-700 text-center max-w-2xl">
          {title}
        </h1>
      </div>

      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1  justify-content-center  md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
          {features.map((feature) => {
            const imagePath = imageMap[feature.key] || '/images/default.jpg';
            return (
              <div 
                key={feature.key} 
                className={`flex flex-col   ${isRTL ? "text-right" : "text-left"}`}
              >
           
                <img
                  src={imagePath}
                  alt={t(`features.${feature.key}.title`)}
                  className="   feature-card  w-80 h-56  object-cover rounded-lg mb-6"
                />

                <h2 className={`text-xl font-bold text-gray-900 mb-2 `} >
                  {t(`features.${feature.key}.title`)}
                </h2>
                <p className="text-gray-600 max-w-sm">
                  {t(`features.${feature.key}.description`)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
