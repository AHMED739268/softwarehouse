import { i } from "framer-motion/client";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
const logos = [
  {
    alt: "Treat logo",
    src: "https://zid-website.directus.app/assets/d8ba92ff-9e64-43c5-b61d-f31568f88b38",
  },
  {
    alt: "Roshof logo",
    src: "https://zid-website.directus.app/assets/011ede2a-4ac7-4f98-bcec-b25ab0230607",
  },
  {
    alt: "Entaj logo",
    src: "https://zid-website.directus.app/assets/2b8b660a-ff3d-4aba-9fd5-35aecf6fda27",
  },
  {
    alt: "Qurmoz logo",
    src: "https://zid-website.directus.app/assets/33bd27d2-0781-416d-971b-ec651685d6ae",
  },
  {
    alt: "Black Night logo",
    src: "https://zid-website.directus.app/assets/667901a6-162f-418c-9794-895d47b49e36",
  },
  {
    alt: "Dokhon logo",
    src: "https://zid-website.directus.app/assets/fe7eea54-744d-4939-8f94-5385a29d4dfb",
  },
];

export default function LogosList() {
  const [paused, setPaused] = useState(false);
  const { i18n } = useTranslation();
 const isRTL = i18n.language === "ar" || i18n.language === "he";
  return (
    <div
      className="overflow-hidden w-full"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      dir={isRTL ? "ltr" : "ltr"}
    >
      <ul
        className="flex items-center gap-6 w-max animate-scroll"
        style={{ animationPlayState: paused ? "paused" : "running" }}
        role="list"
      >
        {/* نكرر اللوجوهات مرتين عشان نعمل loop */}
        {[...logos, ...logos].map((logo, idx) => (
          <li
            key={idx}
            className="w-auto aspect-[16/9] relative h-24 flex-shrink-0"
            role="listitem"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="object-contain h-full w-full select-none pointer-events-none"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
