import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import AppStoreBadge from "../assets/appStore-en.svg?react";
import GooglePlayBadge from "../assets/googlePlay-en.svg?react";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-dark text-white">
      {/* Call to Action */}
      <div className="px-6 py-12 bg-purple-900 rounded-t-2xl relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            {t("footer.cta.title")}
          </h2>
          <p className="text-sm text-gray-200 mb-6 max-w-lg mx-auto">
            {t("footer.cta.description")}
          </p>
          <p className="text-lg font-semibold mb-8">
            {t("footer.cta.highlight")}
          </p>
          <button
            className="inline-block px-6 py-3 bg-purple-500 text-white font-medium rounded-full hover:bg-purple-400 transition-colors shadow-md"
            aria-label={t("footer.cta.button")}
          >
            {t("footer.cta.button")}
          </button>
        </div>

        {/* Links Sections */}
        <div className="px-6 py-12 bg-dark">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Solutions */}
            <div>
              <h3 className="text-xs uppercase tracking-wider mb-4">
                {t("footer.sections.solutions.title")}
              </h3>
              <ul className="space-y-2">
                <li><Link to="/e-store">{t("footer.sections.solutions.items.estore")}</Link></li>
                <li><Link to="/pos">{t("footer.sections.solutions.items.pos")}</Link></li>
                <li><Link to="/payments">{t("footer.sections.solutions.items.payments")}</Link></li>
                <li><Link to="/shipping">{t("footer.sections.solutions.items.shipping")}</Link></li>
                <li><Link to="/inventory">{t("footer.sections.solutions.items.inventory")}</Link></li>
                <li><Link to="/apps">{t("footer.sections.solutions.items.apps")}</Link></li>
                <li><Link to="/themes">{t("footer.sections.solutions.items.themes")}</Link></li>
                <li><Link to="/mazeed">{t("footer.sections.solutions.items.mazeed")}</Link></li>
                <li><Link to="/financing">{t("footer.sections.solutions.items.financing")}</Link></li>
                <li><Link to="/marketing-tools">{t("footer.sections.solutions.items.marketing")}</Link></li>
              </ul>
            </div>

            {/* Why Zid */}
            <div>
              <h3 className="text-xs uppercase tracking-wider mb-4">
                {t("footer.sections.why.title")}
              </h3>
              <ul className="space-y-2">
                <li><Link to="/why-start">{t("footer.sections.why.items.start")}</Link></li>
                <li><Link to="/why-move">{t("footer.sections.why.items.move")}</Link></li>
                <li><Link to="/why-expand">{t("footer.sections.why.items.expand")}</Link></li>
                <li><Link to="/pricing">{t("footer.sections.why.items.pricing")}</Link></li>
              </ul>
            </div>

            {/* How Zid Serves You */}
            <div>
              <h3 className="text-xs uppercase tracking-wider mb-4">
                {t("footer.sections.serve.title")}
              </h3>
              <ul className="space-y-2">
                <li><Link to="/small-business">{t("footer.sections.serve.items.small")}</Link></li>
                <li><Link to="/medium-business">{t("footer.sections.serve.items.medium")}</Link></li>
                <li><Link to="/large-business">{t("footer.sections.serve.items.large")}</Link></li>
                <li><Link to="/enterprise">{t("footer.sections.serve.items.enterprise")}</Link></li>
                <li><Link to="/by-product">{t("footer.sections.serve.items.product")}</Link></li>
                <li><Link to="/store-manager">{t("footer.sections.serve.items.manager")}</Link></li>
                <li><Link to="/financial-team">{t("footer.sections.serve.items.finance")}</Link></li>
                <li><Link to="/operation-team">{t("footer.sections.serve.items.operation")}</Link></li>
                <li><Link to="/marketing-team">{t("footer.sections.serve.items.marketing")}</Link></li>
                <li><Link to="/partners">{t("footer.sections.serve.items.partners")}</Link></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-xs uppercase tracking-wider mb-4">
                {t("footer.sections.resources.title")}
              </h3>
              <ul className="space-y-2">
                <li><Link to="/merchants-enablement">{t("footer.sections.resources.items.enablement")}</Link></li>
                <li><Link to="/merchants-community">{t("footer.sections.resources.items.community")}</Link></li>
                <li><Link to="/blog">{t("footer.sections.resources.items.blog")}</Link></li>
                <li><Link to="/academy">{t("footer.sections.resources.items.academy")}</Link></li>
                <li><Link to="/brand-guidelines">{t("footer.sections.resources.items.brand")}</Link></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-xs uppercase tracking-wider mb-4">
                {t("footer.sections.support.title")}
              </h3>
              <ul className="space-y-2">
                <li><Link to="/help-center">{t("footer.sections.support.items.help")}</Link></li>
                <li><Link to="/whats-new">{t("footer.sections.support.items.new")}</Link></li>
                <li><Link to="/terms">{t("footer.sections.support.items.terms")}</Link></li>
                <li><Link to="/privacy">{t("footer.sections.support.items.privacy")}</Link></li>
                <li><Link to="/complaints">{t("footer.sections.support.items.complaints")}</Link></li>
              </ul>
            </div>
          </div>

          {/* App Store Badges */}
          <div className="flex items-center gap-4 pt-20">
            <a
              href="https://apps.apple.com/us/app/%D8%B2%D8%AF-zid/id6443907047"
              target="_blank"
              rel="noopener"
              aria-label="Download on App Store"
            >
              <AppStoreBadge className="w-20 h-8 hover:scale-105 transition-transform" />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=sa.zid.merchants"
              target="_blank"
              rel="noopener"
              aria-label="Get it on Google Play"
            >
              <GooglePlayBadge className="w-20 h-8 hover:scale-105 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-100 py-5 px-6 text-center text-gray-500 text-xs">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p>{t("footer.bottom.cr")}</p>
          <p>{t("footer.bottom.vat")}</p>
          {/* Social Icons here (same as your code) */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
