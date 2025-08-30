import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react"; // أيقونات
import { useTranslation } from 'react-i18next';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);

const navItems = [
  { label: t("nav.solutions"), href: "/solution" },
  { label: t("nav.pricing"), href: "/solution" },
  { label: t("nav.whyzid"), href: "/whyzid" },
  { label: t("nav.howzid"), href: "/how-zid-serves" },
  { label: t("nav.enterprise"), href: "/enterprise" },
  { label: t("nav.resources"), href: "/resources" },
];

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const language = i18n.language === 'en' ? 'EN' : 'AR';
  
  const isRTL = i18n.language === "ar" || i18n.language === "he";
const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLang);
    localStorage.setItem('lang', newLang);
    document.dir = newLang === 'ar' ? 'rtl' : 'ltr';
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 mb-20 transition-colors duration-300 ${
        isScrolled ? "bg-white shadow" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <svg
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`w-8 h-8 transition-colors ${
                  isScrolled ? "text-purple-900" : "text-white"
                }`}
              >
                <path d="M16 8L12 12L16 16L20 12L16 8Z" fill="currentColor" />
                <path d="M12 12L8 16L12 20L16 16L12 12Z" fill="currentColor" />
                <path d="M20 12L24 16L20 20L16 16L20 12Z" fill="currentColor" />
                <path d="M16 16L12 20L16 24L20 20L16 16Z" fill="currentColor" />
              </svg>
            </div>
            <span
              className={`ml-2 text-xl font-bold transition-colors ${
                isScrolled ? "text-purple-900" : "text-white"
              }`}
            >
              <a href="/">zid</a>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  isScrolled
                    ? "text-purple-900 hover:text-purple-700"
                    : "text-white hover:text-purple-200"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Side (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className={`text-sm font-medium transition-colors ${
                isScrolled
                  ? "text-purple-900 hover:text-purple-700"
                  : "text-white hover:text-purple-200"
              }`}
              aria-label={`Switch to ${language === "EN" ? "AR" : "EN"}`}
           style={{paddingLeft: isRTL ? '0.5rem' : '0',}}
           >
              {language === "EN" ? "AR" : "EN"}
            </button>
            <button
              className={`text-sm font-medium border rounded-full px-4 py-2 transition-colors ${
                isScrolled
                  ? "text-purple-900 border-purple-900 hover:bg-purple-50"
                  : "text-white border-white hover:bg-purple-200 hover:text-purple-900"
              }`}
            >
             {t("buttons.login")}
            </button>
            <button
              className={`text-sm font-medium rounded-full px-6 py-2 transition-colors ${
                isScrolled
                  ? "text-white bg-purple-900 hover:bg-purple-800"
                  : "text-purple-900 bg-white hover:bg-gray-200"
              }`}
            >
              {t("buttons.createStore")}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-md ${
                isScrolled ? "text-purple-900" : "text-white"
              }`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 pt-4 pb-6 space-y-4">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="block text-purple-900 font-medium hover:text-purple-700"
              >
                {item.label}
              </a>
            ))}
            <div className="flex flex-col space-y-2 pt-4 border-t">
              <button
                onClick={toggleLanguage}
                className="text-purple-900 font-medium hover:text-purple-700"
              >
                {language === "EN" ? "AR" : "EN"}
              </button>
              <button className="border border-purple-900 text-purple-900 font-medium rounded-full px-4 py-2 hover:bg-purple-50">
               {t("buttons.login")}
              </button>
              <button className="bg-purple-900 text-white font-medium rounded-full px-6 py-2 hover:bg-purple-800">
                {t("buttons.createStore")}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
