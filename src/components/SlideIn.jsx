'use client';

import { useState, useEffect, useRef } from 'react';

export default function SlideIn({ children, direction = 'up', delay = 0, className = '' }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  const directions = {
    up: 'translate-y-8',
    down: '-translate-y-8',
    left: 'translate-x-8',
    right: '-translate-x-8'
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible
          ? 'opacity-100 translate-y-0 translate-x-0'
          : `opacity-0 ${directions[direction]}`
      } ${className}`}
    >
      {children}
    </div>
  );
}
