import { Link } from 'react-router-dom';
import AppStoreBadge from "../assets/appStore-en.svg?react";
import GooglePlayBadge from "../assets/googlePlay-en.svg?react";
const Footer = () => {
  return (
    <footer className="bg-dark text-white">
      {/* Call to Action */}
      <div className="px-6 py-12 bg-purple-900 rounded-t-2xl relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            YOUR ENTREPRENEURIAL ADVENTURE STARTS HERE. LET'S BUILD!
          </h2>
          <p className="text-sm text-gray-200 mb-6 max-w-lg mx-auto">
            Whether you're just starting out, looking to level up, or ready to take over the world, Zid has the tools, support, and community to help you crush your goals.
          </p>
          <p className="text-lg font-semibold mb-8">
            Sellers are 250% more likely to succeed with Zid
          </p>
          <button
            className="inline-block px-6 py-3 bg-purple-500 text-white font-medium rounded-full hover:bg-purple-400 transition-colors shadow-md"
            aria-label="Get Started Now"
          >
            Get Started Now
          </button>
        </div>
              <div className="px-6 py-12 bg-dark">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
          <div>
            <h3 className="text-xs uppercase tracking-wider mb-4">SOLUTIONS</h3>
            <ul className="space-y-2">
              <li><Link to="/e-store" className="text-sm text-gray-300 hover:text-white">E-store</Link></li>
              <li><Link to="/pos" className="text-sm text-gray-300 hover:text-white">POS (Point of Sales)</Link></li>
              <li><Link to="/payments" className="text-sm text-gray-300 hover:text-white">Payments</Link></li>
              <li><Link to="/shipping" className="text-sm text-gray-300 hover:text-white">Shipping</Link></li>
              <li><Link to="/inventory" className="text-sm text-gray-300 hover:text-white">Inventory Management</Link></li>
              <li><Link to="/apps" className="text-sm text-gray-300 hover:text-white">Apps</Link></li>
              <li><Link to="/themes" className="text-sm text-gray-300 hover:text-white">Themes</Link></li>
              <li><Link to="/mazeed" className="text-sm text-gray-300 hover:text-white">Mazeed Marketplace</Link></li>
              <li><Link to="/financing" className="text-sm text-gray-300 hover:text-white">Financing</Link></li>
              <li><Link to="/marketing-tools" className="text-sm text-gray-300 hover:text-white">Marketing Tools</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-wider mb-4">WHY ZID</h3>
            <ul className="space-y-2">
              <li><Link to="/why-start" className="text-sm text-gray-300 hover:text-white">Why start with Zid?</Link></li>
              <li><Link to="/why-move" className="text-sm text-gray-300 hover:text-white">Why move to Zid?</Link></li>
              <li><Link to="/why-expand" className="text-sm text-gray-300 hover:text-white">Why Expand with Zid?</Link></li>
              <li><Link to="/pricing" className="text-sm text-gray-300 hover:text-white">Pricing</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-wider mb-4">HOW ZID SERVES YOU</h3>
            <ul className="space-y-2">
              <li><Link to="/small-business" className="text-sm text-gray-300 hover:text-white">Small Business</Link></li>
              <li><Link to="/medium-business" className="text-sm text-gray-300 hover:text-white">Medium Business</Link></li>
              <li><Link to="/large-business" className="text-sm text-gray-300 hover:text-white">Large Business</Link></li>
              <li><Link to="/enterprise" className="text-sm text-gray-300 hover:text-white">Enterprise</Link></li>
              <li><Link to="/by-product" className="text-sm text-gray-300 hover:text-white">By Product</Link></li>
              <li><Link to="/store-manager" className="text-sm text-gray-300 hover:text-white">Store Manager</Link></li>
              <li><Link to="/financial-team" className="text-sm text-gray-300 hover:text-white">Financial team</Link></li>
              <li><Link to="/operation-team" className="text-sm text-gray-300 hover:text-white">Operation team</Link></li>
              <li><Link to="/marketing-team" className="text-sm text-gray-300 hover:text-white">Marketing Team</Link></li>
              <li><Link to="/partners" className="text-sm text-gray-300 hover:text-white">Partners & Developers</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-wider mb-4">RESOURCES</h3>
            <ul className="space-y-2">
              <li><Link to="/merchants-enablement" className="text-sm text-gray-300 hover:text-white">Merchants Enablement</Link></li>
              <li><Link to="/merchants-community" className="text-sm text-gray-300 hover:text-white">Merchants Community</Link></li>
              <li><Link to="/blog" className="text-sm text-gray-300 hover:text-white">Blog</Link></li>
              <li><Link to="/academy" className="text-sm text-gray-300 hover:text-white">Zid Academy</Link></li>
              <li><Link to="/brand-guidelines" className="text-sm text-gray-300 hover:text-white">Brand Guidelines</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-wider mb-4">SUPPORT</h3>
            <ul className="space-y-2">
              <li><Link to="/help-center" className="text-sm text-gray-300 hover:text-white">Help Center</Link></li>
              <li><Link to="/whats-new" className="text-sm text-gray-300 hover:text-white">What's New</Link></li>
              <li><Link to="/terms" className="text-sm text-gray-300 hover:text-white">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="text-sm text-gray-300 hover:text-white">Privacy Policy</Link></li>
              <li><Link to="/complaints" className="text-sm text-gray-300 hover:text-white">Complaints and Suggestions</Link></li>
            </ul>
          </div>
        </div>

        {/* App Store Badges */}
      <div className="flex items-center gap-4  pt-20">
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

        {/* Bottom Bar */}
  
      </div>
      
      </div>

     

      {/* Bottom Footer */}
      <div className="bg-gray-100 py-5 px-6 text-center text-gray-500 text-xs">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p>© Zid 2025 Commercial Registration Number 1010365366</p>
          <p>VAT Number 300827827900003</p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <a href="#" aria-label="Snapchat" className="text-gray-500 hover:text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M15.942 11.638C15.8317 11.3356 15.6193 11.1722 15.3782 11.0414C15.3333 11.0169 15.2924 10.9924 15.2556 10.9761C15.1821 10.9393 15.1085 10.9025 15.035 10.8658C14.2832 10.4654 13.6949 9.9669 13.2904 9.37038C13.176 9.20286 13.0739 9.02309 12.9921 8.83924C12.9554 8.74118 12.9595 8.68398 12.984 8.63086C13.0085 8.59001 13.0412 8.55732 13.082 8.52872C13.2128 8.44292 13.3435 8.35712 13.4334 8.29992C13.5927 8.19369 13.7235 8.11198 13.8052 8.05478C14.1116 7.83823 14.3282 7.60943 14.463 7.35203C14.655 6.99249 14.6795 6.57166 14.5325 6.19168C14.3282 5.65237 13.8215 5.32143 13.2046 5.32143C13.0739 5.32143 12.9472 5.33368 12.8165 5.36228C12.7838 5.37045 12.747 5.37863 12.7143 5.3868C12.7184 5.01908 12.7102 4.63094 12.6775 4.24688C12.5631 2.90268 12.0892 2.19993 11.5989 1.64019C11.2843 1.28881 10.9166 0.990556 10.5039 0.75767C9.76033 0.332754 8.91459 0.116211 7.9953 0.116211C7.07601 0.116211 6.23435 0.332754 5.49075 0.75767C5.07809 0.990556 4.71037 1.28881 4.39577 1.64019C3.90549 2.19993 3.43563 2.90676 3.31714 4.24688C3.28446 4.63094 3.27628 5.01908 3.28037 5.3868C3.24768 5.37863 3.215 5.37045 3.17823 5.36228C3.05157 5.33368 2.92083 5.32143 2.79417 5.32143C2.17722 5.32143 1.67059 5.65646 1.46631 6.19168C1.31922 6.57166 1.34374 6.99249 1.53577 7.35203C1.67059 7.60943 1.88714 7.83823 2.19357 8.05478C2.27528 8.11198 2.40194 8.19369 2.56537 8.29992C2.65117 8.35712 2.77783 8.43883 2.90448 8.52055C2.94943 8.54915 2.9862 8.58592 3.0148 8.63086C3.03931 8.68398 3.0434 8.74118 3.00254 8.84741C2.92083 9.02718 2.82277 9.20287 2.70837 9.36629C2.31205 9.94647 1.74005 10.4408 1.01279 10.8372C0.628734 11.0414 0.228333 11.1763 0.0567326 11.638C-0.0699249 11.9852 0.0117896 12.3775 0.334562 12.7125C0.453048 12.8351 0.591963 12.9413 0.743135 13.023C1.05774 13.1946 1.39277 13.3294 1.74414 13.4234C1.81768 13.4438 1.88305 13.4724 1.94434 13.5133C2.06282 13.6154 2.04648 13.7707 2.20174 13.9995C2.27937 14.118 2.38151 14.2201 2.49591 14.3019C2.82685 14.5307 3.19866 14.5429 3.59089 14.5593C3.94634 14.5715 4.34674 14.5879 4.80843 14.739C5.00046 14.8003 5.19658 14.9229 5.42538 15.0659C5.97695 15.405 6.72872 15.8667 7.99121 15.8667C9.2537 15.8667 10.0096 15.4009 10.5652 15.0618C10.794 14.9229 10.9901 14.8003 11.174 14.739C11.6316 14.5879 12.0361 14.5715 12.3915 14.5593C12.7838 14.5429 13.1556 14.5307 13.4865 14.3019C13.6254 14.2038 13.7398 14.0812 13.8215 13.9341C13.9359 13.7421 13.9319 13.6073 14.0381 13.5133C14.0953 13.4724 14.1607 13.4438 14.226 13.4275C14.5774 13.3335 14.9206 13.1987 15.2393 13.023C15.3986 12.9372 15.5457 12.8228 15.6683 12.688L15.6724 12.6839C15.9911 12.357 16.0687 11.973 15.942 11.638ZM14.8225 12.2386C14.1402 12.6144 13.6826 12.5736 13.3313 12.8024C13.0289 12.9944 13.2087 13.4112 12.9921 13.5623C12.7225 13.7462 11.9299 13.5501 10.9084 13.8892C10.0627 14.167 9.52744 14.9719 8.00756 14.9719C6.48767 14.9719 5.96469 14.1711 5.10669 13.8892C4.08526 13.5501 3.29263 13.7503 3.02297 13.5623C2.80643 13.4112 2.98211 12.9944 2.68385 12.8024C2.3284 12.5736 1.87488 12.6144 1.19256 12.2386C0.755392 11.9975 1.00462 11.8504 1.14762 11.781C3.62357 10.5838 4.01989 8.73301 4.03623 8.59409C4.05666 8.42658 4.08117 8.29583 3.89731 8.12832C3.72163 7.96489 2.93717 7.47869 2.71654 7.32752C2.357 7.0742 2.19765 6.82497 2.31614 6.51446C2.39785 6.302 2.59805 6.22028 2.80643 6.22028C2.8718 6.22028 2.93717 6.22846 3.00254 6.24071C3.39886 6.32651 3.78291 6.52263 4.00354 6.57983C4.03214 6.588 4.05666 6.59209 4.08526 6.59209C4.20374 6.59209 4.2446 6.5308 4.23643 6.39597C4.21192 5.96288 4.15063 5.12122 4.22009 4.33268C4.31406 3.24996 4.66135 2.71065 5.07809 2.2367C5.27829 2.0079 6.21392 1.01916 8.00756 1.01916C9.80119 1.01916 10.7368 2.00382 10.937 2.23262C11.3538 2.70656 11.7011 3.24588 11.795 4.32859C11.8645 5.11714 11.8032 5.9588 11.7746 6.39189C11.7664 6.53489 11.8073 6.588 11.9258 6.588C11.9544 6.588 11.9789 6.58391 12.0075 6.57574C12.2281 6.52263 12.6122 6.32243 13.0085 6.23663C13.0739 6.22029 13.1392 6.2162 13.2046 6.2162C13.413 6.2162 13.6132 6.29791 13.6949 6.51037C13.8134 6.82089 13.654 7.07012 13.2945 7.32343C13.0779 7.4746 12.2935 7.9608 12.1137 8.12423C11.9299 8.29175 11.9544 8.42249 11.9748 8.59001C11.9911 8.72892 12.3875 10.5798 14.8634 11.7769C15.0105 11.8463 15.2556 11.9975 14.8225 12.2386Z" fill="#1F0433" />
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn" className="text-gray-500 hover:text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <g clipPath="url(#clip0_109_7718)">
                  <path d="M14.8156 0H1.18125C0.528125 0 0 0.515625 0 1.15313V14.8438C0 15.4813 0.528125 16 1.18125 16H14.8156C15.4688 16 16 15.4813 16 14.8469V1.15313C16 0.515625 15.4688 0 14.8156 0ZM4.74687 13.6344H2.37188V5.99687H4.74687V13.6344ZM3.55938 4.95625C2.79688 4.95625 2.18125 4.34062 2.18125 3.58125C2.18125 2.82188 2.79688 2.20625 3.55938 2.20625C4.31875 2.20625 4.93437 2.82188 4.93437 3.58125C4.93437 4.3375 4.31875 4.95625 3.55938 4.95625ZM13.6344 13.6344H11.2625V9.92188C11.2625 9.0375 11.2469 7.89687 10.0281 7.89687C8.79375 7.89687 8.60625 8.8625 8.60625 9.85938V13.6344H6.2375V5.99687H8.5125V7.04063H8.54375C8.85937 6.44063 9.63438 5.80625 10.7875 5.80625C13.1906 5.80625 13.6344 7.3875 13.6344 9.44375V13.6344V13.6344Z" fill="#1F0433" />
                </g>
                <defs>
                  <clipPath id="clip0_109_7718">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>
            <a href="#" aria-label="X" className="text-gray-500 hover:text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M14.2311 0H16.9333L11.0311 6.79111L18 16H12.5244L8.25778 10.4178L3.35111 16H0.64889L6.97778 8.74667L0.293335 0H5.91111L9.78667 5.12L14.2311 0ZM13.2711 14.3644H14.7644L5.09333 1.52889H3.45778L13.2711 14.3644Z" fill="#1F0433" />
              </svg>
            </a>
            <a href="#" aria-label="YouTube" className="text-gray-500 hover:text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" viewBox="0 0 16 12" fill="none">
                <path d="M15.8406 2.79971C15.8406 2.79971 15.6844 1.69658 15.2031 1.21221C14.5938 0.574707 13.9125 0.571582 13.6 0.534082C11.3625 0.371582 8.00313 0.371582 8.00313 0.371582H7.99687C7.99687 0.371582 4.6375 0.371582 2.4 0.534082C2.0875 0.571582 1.40625 0.574707 0.796875 1.21221C0.315625 1.69658 0.1625 2.79971 0.1625 2.79971C0.1625 2.79971 0 4.09658 0 5.39033V6.60283C0 7.89658 0.159375 9.19346 0.159375 9.19346C0.159375 9.19346 0.315625 10.2966 0.79375 10.781C1.40313 11.4185 2.20313 11.3966 2.55938 11.4653C3.84063 11.5872 8 11.6247 8 11.6247C8 11.6247 11.3625 11.6185 13.6 11.4591C13.9125 11.4216 14.5938 11.4185 15.2031 10.781C15.6844 10.2966 15.8406 9.19346 15.8406 9.19346C15.8406 9.19346 16 7.89971 16 6.60283V5.39033C16 4.09658 15.8406 2.79971 15.8406 2.79971ZM6.34688 8.07471V3.57783L10.6687 5.83408L6.34688 8.07471Z" fill="#1F0433" />
              </svg>
            </a>
            <a href="#" aria-label="Instagram" className="text-gray-500 hover:text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <g clipPath="url(#clip0_109_7721)">
                  <path d="M8 1.44062C10.1375 1.44062 10.3906 1.45 11.2313 1.4875C12.0125 1.52187 12.4344 1.65313 12.7156 1.7625C13.0875 1.90625 13.3563 2.08125 13.6344 2.35938C13.9156 2.64062 14.0875 2.90625 14.2313 3.27813C14.3406 3.55938 14.4719 3.98438 14.5063 4.7625C14.5438 5.60625 14.5531 5.85938 14.5531 7.99375C14.5531 10.1313 14.5438 10.3844 14.5063 11.225C14.4719 12.0063 14.3406 12.4281 14.2313 12.7094C14.0875 13.0813 13.9125 13.35 13.6344 13.6281C13.3531 13.9094 13.0875 14.0813 12.7156 14.225C12.4344 14.3344 12.0094 14.4656 11.2313 14.5C10.3875 14.5375 10.1344 14.5469 8 14.5469C5.8625 14.5469 5.60938 14.5375 4.76875 14.5C3.9875 14.4656 3.56563 14.3344 3.28438 14.225C2.9125 14.0813 2.64375 13.9063 2.36563 13.6281C2.08438 13.3469 1.9125 13.0813 1.76875 12.7094C1.65938 12.4281 1.52813 11.9969 1.49375 11.225C1.45625 10.3813 1.44688 10.1281 1.44688 7.99375C1.44688 5.85625 1.45625 5.60313 1.49375 4.7625C1.52813 3.98125 1.65938 3.55938 1.76875 3.27813C1.9125 2.90625 2.0875 2.6375 2.36563 2.35938C2.64688 2.07812 2.9125 1.90625 3.28438 1.7625C3.56563 1.65313 3.99063 1.52187 4.76875 1.4875C5.60938 1.45 5.8625 1.44062 8 1.44062ZM8 0C5.82813 0 5.55625 0.009375 4.70313 0.046875C3.85313 0.084375 3.26875 0.221875 2.7625 0.41875C2.23438 0.625 1.7875 0.896875 1.34375 1.34375C0.896875 1.7875 0.625 2.23438 0.41875 2.75938C0.221875 3.26875 0.084375 3.85 0.046875 4.7C0.009375 5.55625 0 5.82812 0 8C0 10.1719 0.009375 10.4438 0.046875 11.2969C0.084375 12.1469 0.221875 12.7313 0.41875 13.2375C0.625 13.7656 0.896875 14.2125 1.34375 14.6562C1.7875 15.1 2.23438 15.375 2.75938 15.5781C3.26875 15.775 3.85 15.9125 4.7 15.95C5.55313 15.9875 5.825 15.9969 7.99688 15.9969C10.1688 15.9969 10.4406 15.9875 11.2938 15.95C12.1438 15.9125 12.7281 15.775 13.2344 15.5781C13.7594 15.375 14.2063 15.1 14.65 14.6562C15.0938 14.2125 15.3688 13.7656 15.5719 13.2406C15.7688 12.7313 15.9063 12.15 15.9438 11.3C15.9813 10.4469 15.9906 10.175 15.9906 8.00313C15.9906 5.83125 15.9813 5.55938 15.9438 4.70625C15.9063 3.85625 15.7688 3.27188 15.5719 2.76562C15.375 2.23438 15.1031 1.7875 14.6563 1.34375C14.2125 0.9 13.7656 0.625 13.2406 0.421875C12.7313 0.225 12.15 0.0875 11.3 0.05C10.4438 0.009375 10.1719 0 8 0Z" fill="#1F0433" />
                  <path d="M8 3.89062C5.73125 3.89062 3.89062 5.73125 3.89062 8C3.89062 10.2688 5.73125 12.1094 8 12.1094C10.2688 12.1094 12.1094 10.2688 12.1094 8C12.1094 5.73125 10.2688 3.89062 8 3.89062ZM8 10.6656C6.52813 10.6656 5.33437 9.47188 5.33437 8C5.33437 6.52813 6.52813 5.33437 8 5.33437C9.47188 5.33437 10.6656 6.52813 10.6656 8C10.6656 9.47188 9.47188 10.6656 8 10.6656Z" fill="#1F0433" />
                  <path d="M13.2312 3.72842C13.2312 4.25967 12.8 4.6878 12.2719 4.6878C11.7406 4.6878 11.3125 4.25654 11.3125 3.72842C11.3125 3.19717 11.7438 2.76904 12.2719 2.76904C12.8 2.76904 13.2312 3.20029 13.2312 3.72842Z" fill="#1F0433" />
                </g>
                <defs>
                  <clipPath id="clip0_109_7721">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;