import { iconMap } from "../utils/iconMap";

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

 export  const SupportSection = ({
  title,
  subtitle,
  features = [],
  buttonText,
  backgroundColor,

  paddingX = "px-6 md:px-12",
  paddingY = "py-20",
  paddingTop = "[&_.compliment-bottom]:pt-20",
  paddingBottom = "[&_.compliment-top]:pb-20",
}: SupportSectionProps) => {
  const baseClasses =
    "overflow-hidden rounded-3xl flex flex-col gap-16 w-full mx-auto";
      const safeFeatures = Array.isArray(features) ? features : [];
  
  return (
    <section
      className={`${baseClasses}  ${paddingX} ${paddingY} ${paddingTop} ${paddingBottom}`}
    >
      <div className=" mx-auto px-4 sm:px-6 lg:px-8" >
        <div className="max-w-8xl mx-auto" style={{ width: 1200 }}>
          <div
            className="rounded-3xl p-12 md:p-16 text-center"
            style={{ backgroundColor }}
          >
            {/* Title */}
            <h2 className="text-2xl md:text-3xl font-bold text-purple-900 mb-6 leading-tight"
                style={{ color: "#2D186E" }}>
              {title}
            </h2>

            {/* Subtitle */}
            <p className="text-sm text-purple-900 mb-10 max-w-2xl mx-auto"
               style={{ color: "#2D186E", lineHeight: 1.5 }}>
              {subtitle}
            </p>

            {/* Features */}
            <div className="space-y-4">
              {safeFeatures.map((feature, index) => {
                const Icon = iconMap[feature.icon as keyof typeof iconMap];
                return (
                  <div key={index}
                    className="flex items-start bg-white p-4 rounded-xl shadow-sm border border-white/70">
                    <div className="w-12 h-12 flex-shrink-0 bg-purple-500 rounded-lg flex items-center justify-center mr-4">
                      {Icon && <Icon className="w-5 h-5 text-white" />}
                    </div>
                    <div>
                      <h3 className="font-semibold text-purple-900" style={{ textAlign: "start" }}>
                        {feature.title}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            <button
              className="mt-12 inline-block px-8 py-3 bg-purple-900 text-white font-medium rounded-full hover:bg-purple-800 transition-colors shadow-lg"
              style={{ boxShadow: "0 4px 12px rgba(139, 19, 215, 0.2)" }}
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
