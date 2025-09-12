'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function Carousel({ items, autoPlay = false, interval = 3000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full">
      <div className="overflow-hidden rounded-lg">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item, index) => (
            <div key={index} className="w-full flex-shrink-0">
              {item}
            </div>
          ))}
        </div>
      </div>
      
      <Button
        variant="outline"
        size="icon"
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2"
      >
        ‹
      </Button>
      
      <Button
        variant="outline"
        size="icon"
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2"
      >
        ›
      </Button>
      
      <div className="flex justify-center mt-4 space-x-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-200 ${
              index === currentIndex ? 'bg-primary' : 'bg-secondary'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
