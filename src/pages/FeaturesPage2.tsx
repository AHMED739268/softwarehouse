import { useTranslation } from "react-i18next";
import Feature2 from "../sections/FeatureCard2";

// Import all your SVGs as React components
import Icon1 from "../assets/icon.svg?react";
import Icon2 from "../assets/icon.svg?react";
import Icon3 from "../assets/icon.svg?react";
import Icon4 from "../assets/icon.svg?react";

export default function Features2() {
  const { t } = useTranslation();

  // Get translated features
  const translatedFeatures = t("featuress", { returnObjects: true }) as {
    key: string;
    title: string;
    description: string;
  }[];

  // Map keys to icons
  const iconMap: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
    feature1: Icon1,
    feature2: Icon2,
    feature3: Icon3,
    feature4: Icon4,
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto px-4 sm:px-6 lg:px-8" style={{ paddingLeft: 55 }}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
          {translatedFeatures.map((feature) => {
            const Icon = iconMap[feature.key] || Icon1; // fallback icon
            return (
              <Feature2
                key={feature.key}
                title={feature.title}
                description={feature.description}
                Icon={Icon}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
