'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "گالری هنری شهرزاد",
      subtitle: "هنر دست‌ساز ایرانی با کیفیت و زیبایی منحصر به فرد",
      image: null,
      cta: "سفارش دهید",
      ctaLink: "/custom-order",
      showContent: true
    },
    {
      id: 2,
      title: "",
      subtitle: "",
      image: "/photo_2025-09-06_06-37-29.jpg",
      cta: "",
      ctaLink: "",
      showContent: false
    },
    {
      id: 3,
      title: "محصولات منحصر به فرد",
      subtitle: "مجموعه‌ای از بهترین آثار هنری و دکوری دست‌ساز",
      image: null,
      cta: "مشاهده گالری",
      ctaLink: "/projects",
      showContent: true
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-screen min-h-[400px] sm:min-h-[500px] max-h-[100vh] overflow-hidden">
      {/* اسلایدها */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="relative w-full h-full">
            {slide.image ? (
              <>
                <Image
                  src={slide.image}
                  alt={slide.title || "گالری هنری شهرزاد"}
                  fill
                  className={`object-center ${
                    slide.showContent 
                      ? 'object-cover' 
                      : 'object-contain sm:object-cover'
                  }`}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
                  priority={index === 0}
                />
                {!slide.showContent && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent"></div>
                )}
              </>
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-primary/30 to-secondary/30"></div>
            )}
            {slide.showContent && (
              <>
                <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20"></div>
              </>
            )}
          </div>
        </div>
      ))}

      {/* محتوای اسلاید */}
      {slides[currentSlide].showContent && (
        <div className="relative z-20 h-full flex items-center justify-center px-4 py-4 sm:py-8 md:py-12 lg:py-16">
          <div className="text-center text-foreground w-full max-w-4xl mx-auto">
            {slides[currentSlide].title && (
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 animate-fade-in-up">
                <span className="golden-text">{slides[currentSlide].title}</span>
              </h1>
            )}
            {slides[currentSlide].subtitle && (
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-6 sm:mb-8 text-white/90 px-2 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                {slides[currentSlide].subtitle}
              </p>
            )}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              {slides[currentSlide].cta && (
                <Button size="lg" className="btn-golden text-base sm:text-lg px-6 sm:px-8 py-2 sm:py-3 w-full sm:w-auto">
                  <Link href={slides[currentSlide].ctaLink} className="w-full block">{slides[currentSlide].cta}</Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* دکمه‌های ناوبری */}
      <button
        onClick={prevSlide}
        className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 text-white p-2 sm:p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
        aria-label="اسلاید قبلی"
      >
        <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 text-white p-2 sm:p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
        aria-label="اسلاید بعدی"
      >
        <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6" />
      </button>

      {/* نقاط ناوبری */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2 space-x-reverse">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-200 ${
              index === currentSlide 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`رفتن به اسلاید ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
