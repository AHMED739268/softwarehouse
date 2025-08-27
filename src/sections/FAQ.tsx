import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Do I need a separate dashboard to manage app content?",
    answer:
      "Nope! We’re all about keeping things simple. You’ll manage everything—pages, categories, products, orders, shipping, and payments—from the same easy-to-use control panel. One dashboard to rule them all!",
  },
  {
    question: "Is there an additional charge for app notifications based on the number of messages?",
    answer:
      "No extra fees here. All notifications are included in your plan, no matter how many you send.",
  },
  {
    question: "How and when are abandoned cart reminders sent in the app?",
    answer:
      "They’re sent automatically based on your configured timing—helping you recover more sales with zero effort.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-purple-900 leading-tight">
          YOUR BURNING
          <br /> QUESTIONS,
          <br /> ANSWERED
        </h2>

        {/* Right FAQ List */}
        <div className="flex flex-col divide-y divide-purple-100">
          {faqs.map((faq, index) => (
            <div key={index} className="py-6">
              {/* Question Row */}
              <button
                className="w-full flex justify-between items-center text-left"
                onClick={() => toggle(index)}
              >
                <span className="font-bold text-lg text-purple-900">
                  Q: {faq.question}
                </span>
                <motion.span
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="ml-2 text-purple-900"
                >
                  <ChevronDown />
                </motion.span>
              </button>

              {/* Answer */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="mt-3 text-purple-900/80 text-base leading-relaxed">
                      A: {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
