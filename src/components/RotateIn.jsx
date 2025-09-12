'use client';

import { useState, useEffect, useRef } from 'react';

export default function RotateIn({ children, delay = 0, className = '' }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

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
          ? 'opacity-100 rotate-0'
          : 'opacity-0 rotate-12'
      } ${className}`}
    >
      {children}
    </div>
  );
}
