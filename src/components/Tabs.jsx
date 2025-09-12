'use client';

import { useState } from 'react';

export default function Tabs({ items, defaultTab = 0 }) {
  const [activeTab, setActiveTab] = useState(defaultTab);

  return (
    <div className="w-full">
      <div className="flex border-b border-border">
        {items.map((item, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-6 py-3 font-medium transition-colors duration-200 ${
              activeTab === index
                ? 'text-primary border-b-2 border-primary'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            {item.title}
          </button>
        ))}
      </div>
      <div className="mt-6">
        {items[activeTab]?.content}
      </div>
    </div>
  );
}
