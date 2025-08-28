import { useState, useEffect, useRef } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<
    null | "solutions" | "whyZid" | "howServes" | "resources"
  >(null);
  const [language, setLanguage] = useState<"EN" | "AR">("EN");
  const [isScrolled, setIsScrolled] = useState(false);

  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
const navItems = [
  { label: "Solutions", href: "/solution" },
  { label: "Pricing", href: "/pricing" },
  { label: "Why Zid?", href: "/whyzid" },
  { label: "How Zid Serves You?", href: "/how-zid-serves" },
  { label: "Enterprise", href: "/enterprise" },
  { label: "Resources", href: "/resources" },
];
  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      Object.entries(dropdownRefs.current).forEach(([key, ref]) => {
        if (ref && !ref.contains(event.target as Node)) {
          setOpenDropdown((prev) => (prev === key ? null : prev));
        }
      });
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = (
    dropdown: "solutions" | "whyZid" | "howServes" | "resources"
  ) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const toggleLanguage = () => {
    setLanguage((lang) => (lang === "EN" ? "AR" : "EN"));
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
              }` }
           >
            <a href="/"> zid</a>  
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map(
              (item, index) => (
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
              )
            )}
          </nav>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className={`text-sm font-medium transition-colors ${
                isScrolled
                  ? "text-purple-900 hover:text-purple-700"
                  : "text-white hover:text-purple-200"
              }`}
              aria-label={`Switch to ${language === "EN" ? "AR" : "EN"}`}
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
              Login
            </button>
            <button
              className={`text-sm font-medium rounded-full px-6 py-2 transition-colors ${
                isScrolled
                  ? "text-white bg-purple-900 hover:bg-purple-800"
                  : "text-purple-900 bg-white hover:bg-gray-200"
              }`}
            >
              Create a store
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
