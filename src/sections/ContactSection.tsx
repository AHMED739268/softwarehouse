import React from "react";

const ContactSection: React.FC = () => {
  return (
    <section className="bg-gray-100 py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="bg-purple-900 rounded-3xl text-center py-16 px-6">
          {/* Small Badge */}
          <div className="inline-block bg-purple-800 text-white text-sm font-medium px-4 py-1 rounded-md mb-6">
            Our team responds quickly
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 uppercase tracking-wide">
            Do You Have a Question?
          </h2>

          {/* Subtext */}
          <p className="text-gray-200 text-lg mb-8 max-w-2xl mx-auto">
            Support team working hours are Sunday to Thursday from 9:00 AM
            to 5:00 PM
          </p>

          {/* Button */}
          <a
            href="#contact"
            className="inline-block bg-gradient-to-r from-purple-500 to-purple-400 text-white font-semibold px-8 py-3 rounded-full shadow-md hover:opacity-90 transition"
          >
            Contact us
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
