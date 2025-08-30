import { useTranslation } from "react-i18next";
import Feature2 from "../sections/FeatureCard2";

// Import all your SVGs as React components
import Icon1 from "../assets/icon.svg?react";
import Icon2 from "../assets/icon.svg?react";
import Icon3 from "../assets/icon.svg?react";
import Icon4 from "../assets/icon.svg?react";

export default function Features2() {
  const { t } = useTranslation();

  // Define feature keys in order
  const featureKeys = ["visionary", "local", "pioneer", "superstar"];

  // Map keys to icons
  const iconMap: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
    visionary: Icon1,
    local: Icon2,
    pioneer: Icon3,
    superstar: Icon4,
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto px-4 sm:px-6 lg:px-8" style={{ paddingLeft: 55 }}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
          {featureKeys.map((key) => {
            const Icon = iconMap[key] || Icon1; // fallback icon
            return (
              <Feature2
                key={key}
                title={t(`features2.${key}.title`)}
                description={t(`features2.${key}.description`)}
                Icon={Icon}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
