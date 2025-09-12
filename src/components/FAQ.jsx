'use client';

import { useState } from 'react';

export default function FAQ({ faqs }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div key={index} className="border border-border rounded-lg">
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full px-6 py-4 text-right flex items-center justify-between hover:bg-secondary/50 transition-colors duration-200"
          >
            <span className="font-semibold">{faq.question}</span>
            <span className={`transform transition-transform duration-200 ${
              openIndex === index ? 'rotate-180' : ''
            }`}>
              ▼
            </span>
          </button>
          {openIndex === index && (
            <div className="px-6 pb-4">
              <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
