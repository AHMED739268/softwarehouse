import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ar from './locales/ar.json';
import en from './locales/en.json';

const saved = localStorage.getItem('lang') as 'ar' | 'en' | null;
const lang = saved || 'ar';

i18n
  .use(initReactI18next)
  .init({
    resources: { ar: { translation: ar }, en: { translation: en } },
    lng: lang,
    fallbackLng: 'ar',
    interpolation: { escapeValue: false },
  });

// Direction toggle on html element
document.documentElement.lang = lang;
document.documentElement.dir = lang === 'ar' ? 'ltr' : 'ltr';

export function switchLang(next: 'ar' | 'en') {
  i18n.changeLanguage(next);
  localStorage.setItem('lang', next);
  document.documentElement.lang = next;
  document.documentElement.dir = next === 'ar' ? 'ltr' : 'ltr';
}

export default i18n;
