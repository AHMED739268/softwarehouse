import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
// import { FaParagraph } from 'react-icons/fa';
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          nav: {
            solutions: "Solutions",
            pricing: "Pricing",
            whyzid: "Why Zid?",
            howzid: "How Zid Serves You?",
            enterprise: "Enterprise",
            resources: "Resources",
          },
          buttons: {
            "login": "Login",
            "createStore": "Create a store",
          },
        },
      },

      ar: {
        translation: {
          nav: {
            solutions: "الحلول",
            pricing: "الأسعار",
            whyzid: "لماذا زيد؟",
            howzid: "كيف تخدمك زيد؟",
            enterprise: "المؤسسات",
            resources: "الموارد",
          },
          buttons: {
            "login": "تسجيل الدخول",
            "createStore": "أنشئ متجرك",
          },
        },
      },
    },
    lng: localStorage.getItem("lang") || "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });
export default i18n;