'use client';

import { useState, useEffect } from 'react';

export default function Typewriter({ text, speed = 100, delay = 0 }) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }
    }, currentIndex === 0 ? delay : speed);

    return () => clearTimeout(timer);
  }, [currentIndex, text, speed, delay]);

  return <span>{displayText}</span>;
}
