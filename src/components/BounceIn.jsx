'use client';

import { useState, useEffect, useRef } from 'react';

export default function BounceIn({ children, delay = 0, className = '', direction = 'up' }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
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

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay, isVisible]);

  return (
    <div
      ref={ref}
      className={`${
        isVisible
          ? direction === 'down'
            ? 'animate-bounce-in-down opacity-100'
            : 'animate-bounce-in-up opacity-100'
          : 'opacity-0'
      } ${className}`}
    >
      {children}
    </div>
  );
}

