import { useState } from 'react';
import { useTranslation } from 'react-i18next';
interface TestimonialProps {
  name: string;
  company: string;
  rating: number;
  review: string;
  avatar?: string;
  logo?: string;
}

const TestimonialCard = ({ name, company, rating, review, avatar, logo }: TestimonialProps) => {
  const { i18n } = useTranslation();
   const isRTL = i18n.language === "ar" || i18n.language === "he";
  return (
    <div className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-200">
      {/* Rating */}
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${i < rating ? 'text-purple-600' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.12a1 1 0 00-.363 1.118l1.518 4.674c.3.921-.755 1.688-1.538 1.118l-3.976-2.12a1 1 0 00-1.175 0l-3.976 2.12c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.12c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
          </svg>
        ))}
      </div>

      {/* Review */}
      <p className=" truncate-3-lines  text-gray-800 leading-relaxed mb-6">{review}</p>

      {/* Footer */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          {logo && (
            <img src={logo} alt="Logo" className="w-8 h-8 " />
          )}
          <div style={{paddingRight: isRTL ? '0.75rem' : '0'}}>
            <h4 className="font-semibold text-gray-900">{name}</h4>
            <p className="text-sm text-gray-600">{company}</p>
          </div>
        </div>
        {avatar && (
          <img src={avatar} alt="Avatar" className="w-16 h-16 rounded-full" />
        )}
      </div>
    </div>
  );
};

export default TestimonialCard;