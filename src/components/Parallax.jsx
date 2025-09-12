'use client';

import { useState, useEffect, useRef } from 'react';

export default function Parallax({ children, speed = 0.5, className = '' }) {
  const [offset, setOffset] = useState(0);
  const ref = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const scrolled = window.pageYOffset;
        const rate = scrolled * -speed;
        setOffset(rate);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div
      ref={ref}
      className={`relative ${className}`}
      style={{ transform: `translateY(${offset}px)` }}
    >
      {children}
    </div>
  );
}
