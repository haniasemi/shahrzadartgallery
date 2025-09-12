'use client';

import { useState } from 'react';

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-2">
      {items.map((item, index) => (
        <div key={index} className="border border-border rounded-lg">
          <button
            onClick={() => toggleItem(index)}
            className="w-full px-6 py-4 text-right flex items-center justify-between hover:bg-secondary/50 transition-colors duration-200"
          >
            <span className="font-semibold">{item.title}</span>
            <span className={`transform transition-transform duration-200 ${
              openIndex === index ? 'rotate-180' : ''
            }`}>
              ▼
            </span>
          </button>
          {openIndex === index && (
            <div className="px-6 pb-4">
              <div className="text-muted-foreground leading-relaxed">
                {item.content}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
