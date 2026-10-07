'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "How can I rent from SharePal?",
    answer: "You can rent from SharePal by selecting your desired product, choosing rental dates, and completing the booking process online. We'll deliver the product to your doorstep and pick it up after your rental period ends."
  },
  {
    question: "If I rent multiple products, do I need to extend the rental duration for all or partial extension is possible?",
    answer: "You can extend the rental duration for individual products. Partial extension is possible - you can choose to extend only specific products from your rental order."
  },
  {
    question: "When does the rental start?",
    answer: "The rental period starts from the delivery date. You can select your preferred delivery and pickup dates during the booking process."
  },
  {
    question: "What will be the condition of the products at the time of delivery?",
    answer: "All products are thoroughly cleaned, sanitized, and inspected before delivery. We ensure that you receive products in excellent working condition."
  },
  {
    question: "Why is verification required?",
    answer: "Verification is required to ensure the safety of our products and build trust in the rental community. It helps us maintain a secure platform for all users."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        Frequently Asked Questions (FAQs)
      </h2>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg overflow-hidden"
          >
            <button
              className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className="font-medium text-gray-900 text-left">{faq.question}</span>
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0 ml-4" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0 ml-4" />
              )}
            </button>
            {openIndex === index && (
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <button 
          className="text-orange-500 font-medium hover:text-orange-600 transition-colors"
          onClick={() => alert('More FAQs coming soon!')}
        >
          View more FAQ's
        </button>
      </div>
    </section>
  );
}
