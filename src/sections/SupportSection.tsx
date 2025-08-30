
import { iconMap } from "../utils/iconMap";
import { useTranslation } from "react-i18next";
interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface SupportSectionProps {
  title: string;
  subtitle: string;
  features?: Feature[];
  buttonText: string;
  backgroundColor?: string;

  paddingX?: string;
  paddingY?: string;
  paddingTop?: string;
  paddingBottom?: string;
}

export const SupportSection = ({
  title,
  subtitle,
  features = [],
  buttonText,
  backgroundColor,

  paddingX = "px-4 sm:px-6 md:px-12",
  paddingY = "py-12 md:py-20",
  paddingTop = "[&_.compliment-bottom]:pt-12 md:[&_.compliment-bottom]:pt-20",
  paddingBottom = "[&_.compliment-top]:pb-12 md:[&_.compliment-top]:pb-20",
}: SupportSectionProps) => {
  const baseClasses =
    "overflow-hidden rounded-3xl flex flex-col gap-12 md:gap-16 w-full mx-auto";
  const safeFeatures = Array.isArray(features) ? features : [];
  const { i18n } = useTranslation();
 const isRTL = i18n.language === "ar" || i18n.language === "he";
  return (
    <section
      className={`${baseClasses} ${paddingX} ${paddingY} ${paddingTop} ${paddingBottom}`}
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          className="rounded-3xl p-6 sm:p-10 md:p-16 text-center"
          style={{ backgroundColor }}
        >
          {/* Title */}
          <h2
            className="text-xl sm:text-2xl md:text-3xl font-bold text-purple-900 mb-4 sm:mb-6 leading-snug"
            style={{ color: "#2D186E" }}
          >
            {title}
          </h2>

          {/* Subtitle */}
          <p
            className="text-sm sm:text-base text-purple-900 mb-8 sm:mb-10 max-w-2xl mx-auto"
            style={{ color: "#2D186E", lineHeight: 1.6 }}
          >
            {subtitle}
          </p>

          {/* Features */}
          <div className="space-y-4">
            {safeFeatures.map((feature, index) => {
              const Icon = iconMap[feature.icon as keyof typeof iconMap];
              return (
                <div
                  key={index}
                  className="flex items-start bg-white p-4 rounded-xl shadow-sm border border-white/70"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 bg-purple-500 rounded-lg flex items-center justify-center mr-3 sm:mr-4">
                    {Icon && <Icon className="w-5 h-5 text-white" />}
                  </div>
                  <div style={{textAlign: isRTL ? 'right' : 'left',  paddingRight: isRTL ? '1rem' : 0}}>
                    <h3
                      className="font-semibold text-purple-900 text-start text-sm sm:text-base"
                    >
                      {feature.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 mt-1">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA Button */}
          <button
            className="mt-8 sm:mt-12 inline-block px-6 sm:px-8 py-2.5 sm:py-3 bg-purple-900 text-white text-sm sm:text-base font-medium rounded-full hover:bg-purple-800 transition-colors shadow-lg"
            style={{ boxShadow: "0 4px 12px rgba(139, 19, 215, 0.2)" }}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </section>
  );
};
