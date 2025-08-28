import React from 'react'
import Hero2 from '../sections/Hero2';
import Partners from '../sections/Partners'
import GettingStarted from '../sections/GettingStarted';
export default function WhyZid() {

  return (
    <div>
       {Hero2(
        "Ready to Expand? We've Got Your Back.",
        "We're with you at every step of your expansion journey, combining powerful features with the support, community, and guidance you need to achieve your sales goals.",
        "Expand with Zid",
        "/images/whyzid.jpg"
      )}
        <Partners />
<GettingStarted
  steps={[
    {
      id: 1,
      title: 'Create an Account',
      description: (
        <div className="space-y-3">
          <h2 className="font-semibold text-gray-900 text-base">
            Smooth Operator
          </h2>
          <p className="text-gray-600">
            Transform your daily operations:
          </p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="h-2 w-2 rounded-full bg-purple-500 mt-2"></span>
              <span>Smart inventory management that thinks ahead</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="h-2 w-2 rounded-full bg-purple-500 mt-2"></span>
              <span>Data insights that tell your story</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="h-2 w-2 rounded-full bg-purple-500 mt-2"></span>
              <span>Streamlined operations that scale with you</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="h-2 w-2 rounded-full bg-purple-500 mt-2"></span>
              <span>Automated processes that save your time</span>
            </li>
          </ul>
        </div>
      ),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      ),
    },
    {
      id: 2,
      title: 'Choose Your Plan',
      description: (
        <div className="space-y-3">
          <h2 className="font-semibold text-gray-900 text-base">
            Unite Your Business World
          </h2>
          <p className="text-gray-600">
            Bring your physical and digital presence together:
          </p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="h-2 w-2 rounded-full bg-purple-500 mt-2"></span>
              <span>Connect all your branches seamlessly</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="h-2 w-2 rounded-full bg-purple-500 mt-2"></span>
              <span>Easy integration of Zid POS</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="h-2 w-2 rounded-full bg-purple-500 mt-2"></span>
              <span>Command your entire empire from one dashboard</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="h-2 w-2 rounded-full bg-purple-500 mt-2"></span>
              <span>Keep inventory flowing across locations</span>
            </li>
          </ul>
        </div>
      ),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 8v4l2 2" />
        </svg>
      ),
    },
    {
      id: 3,
      title: 'Design Your Store',
      description: (
        <div className="space-y-3">
          <h2 className="font-semibold text-gray-900 text-base">
            Financial Peace of Mind
          </h2>
          <p className="text-gray-600">
            Focus on growth, we'll handle the complexities:
          </p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="h-2 w-2 rounded-full bg-purple-500 mt-2"></span>
              <span>Accounting systems that work for you</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="h-2 w-2 rounded-full bg-purple-500 mt-2"></span>
              <span>Tax and Zakat Authority-compliant invoices</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="h-2 w-2 rounded-full bg-purple-500 mt-2"></span>
              <span>Automated VAT calculations and display</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="h-2 w-2 rounded-full bg-purple-500 mt-2"></span>
              <span>Crystal-clear financial tracking</span>
            </li>
          </ul>
        </div>
      ),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <line x1="3" y1="9" x2="21" y2="9" />
          <line x1="9" y1="21" x2="9" y2="3" />
        </svg>
      ),
    },
    {
      id: 4,
      title: 'Add Your Products',
      description: (
        <div className="space-y-3">
          <h2 className="font-semibold text-gray-900 text-base">
            Your Dream Team
          </h2>
          <p className="text-gray-600">
            Because great achievements are never solo efforts:
          </p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="h-2 w-2 rounded-full bg-purple-500 mt-2"></span>
              <span>A dedicated relationship manager in your corner*</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="h-2 w-2 rounded-full bg-purple-500 mt-2"></span>
              <span>24/7 WhatsApp support when you need us</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="h-2 w-2 rounded-full bg-purple-500 mt-2"></span>
              <span>Empower up to 5 team members to share the journey</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="h-2 w-2 rounded-full bg-purple-500 mt-2"></span>
              <span>Smart task distribution for peak efficiency <em>*Terms and conditions apply</em></span>
            </li>
          </ul>
        </div>
      ),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <line x1="9" y1="9" x2="15" y2="9" />
          <line x1="12" y1="6" x2="12" y2="12" />
        </svg>
      ),
    },
    {
      id: 5,
      title: 'Set Up Payments',
      description: (
        <div className="space-y-3">
          <h2 className="font-semibold text-gray-900 text-base">
            Growth Through Insight
          </h2>
          <p className="text-gray-600">
            Turn data into your competitive edge:
          </p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="h-2 w-2 rounded-full bg-purple-500 mt-2"></span>
              <span>Understand what makes your customers tick</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="h-2 w-2 rounded-full bg-purple-500 mt-2"></span>
              <span>Spot trends before they emerge</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="h-2 w-2 rounded-full bg-purple-500 mt-2"></span>
              <span>Shape marketing that resonates</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="h-2 w-2 rounded-full bg-purple-500 mt-2"></span>
              <span>Find your next growth opportunity</span>
            </li>
          </ul>
        </div>
      ),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <line x1="3" y1="9" x2="21" y2="9" />
          <line x1="9" y1="21" x2="9" y2="3" />
        </svg>
      ),
    },
  ]}
/>



      
    </div>
  );
}