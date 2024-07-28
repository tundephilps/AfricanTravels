// components/FAQ.tsx
"use client";
import React, { useState } from "react";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
}

const FAQ: React.FC<FAQProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight">
          FAQs
        </h2>
      </div>
      <div className="lg:px-16 px-4 mx-auto text-black">
        <div className="space-y-6">
          {items.map((item, index) => (
            <div key={index} className="rounded-xl p-6 bg-[#FBFBFD]">
              <button
                onClick={() => toggleAccordion(index)}
                className="group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-none focus:text-gray-500"
                aria-expanded={openIndex === index}
                aria-controls={`faq-content-${index}`}
              >
                {item.question}
                {openIndex === index ? (
                  <MdOutlineKeyboardArrowUp />
                ) : (
                  <MdOutlineKeyboardArrowDown />
                )}
              </button>
              <div
                id={`faq-content-${index}`}
                className={`hs-accordion-content w-full overflow-hidden transition-[height] duration-300 ${
                  openIndex === index ? "block" : "hidden"
                }`}
                role="region"
                aria-labelledby={`faq-item-${index}`}
              >
                <p className="text-gray-800 pt-6">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
