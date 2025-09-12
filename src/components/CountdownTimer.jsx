'use client';

import { useState, useEffect } from 'react';

export default function CountdownTimer({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const target = new Date(targetDate).getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex gap-4 justify-center">
      <div className="text-center">
        <div className="w-16 h-16 golden-gradient rounded-lg flex items-center justify-center mb-2">
          <span className="text-xl font-bold text-black">{timeLeft.days}</span>
        </div>
        <span className="text-sm text-muted-foreground">روز</span>
      </div>
      <div className="text-center">
        <div className="w-16 h-16 golden-gradient rounded-lg flex items-center justify-center mb-2">
          <span className="text-xl font-bold text-black">{timeLeft.hours}</span>
        </div>
        <span className="text-sm text-muted-foreground">ساعت</span>
      </div>
      <div className="text-center">
        <div className="w-16 h-16 golden-gradient rounded-lg flex items-center justify-center mb-2">
          <span className="text-xl font-bold text-black">{timeLeft.minutes}</span>
        </div>
        <span className="text-sm text-muted-foreground">دقیقه</span>
      </div>
      <div className="text-center">
        <div className="w-16 h-16 golden-gradient rounded-lg flex items-center justify-center mb-2">
          <span className="text-xl font-bold text-black">{timeLeft.seconds}</span>
        </div>
        <span className="text-sm text-muted-foreground">ثانیه</span>
      </div>
    </div>
  );
}
