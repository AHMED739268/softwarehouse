import Routess from './Routers'
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function App() {
  const { i18n } = useTranslation(); 

  useEffect(() => {
    const currentLang = i18n.language || localStorage.getItem("lang") || "en";
    document.dir = currentLang === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  return (
    <Routess />
  );
}
