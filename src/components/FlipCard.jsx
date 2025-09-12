'use client';

import { useState } from 'react';

export default function FlipCard({ front, back, className = '' }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className={`relative w-full h-full perspective-1000 ${className}`}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        <div className="absolute inset-0 w-full h-full backface-hidden">
          {front}
        </div>
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
          {back}
        </div>
      </div>
    </div>
  );
}
