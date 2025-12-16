'use client';

import { useState, useEffect, useRef } from 'react';

export default function CountUp({ end, duration = 2000, suffix = '', decimals = 0, start = 0 }) {
  const [count, setCount] = useState(start);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime;
    let animationFrame;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = start + (end - start) * easeOutQuart;

      if (decimals > 0) {
        setCount(Number(currentCount.toFixed(decimals)));
      } else {
        setCount(Math.floor(currentCount));
      }

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end); // Ensure final value is exact
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [hasStarted, end, duration, start, decimals]);

  // Convert numbers to Persian/Farsi digits
  const toPersianDigits = (str) => {
    const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    return str.toString().replace(/\d/g, (digit) => persianDigits[parseInt(digit)]);
  };

  const formatNumber = (num) => {
    if (decimals > 0) {
      return toPersianDigits(num.toFixed(decimals));
    }
    return toPersianDigits(Math.floor(num).toLocaleString('en-US'));
  };

  return (
    <span ref={ref}>
      {formatNumber(count)}{suffix}
    </span>
  );
}

