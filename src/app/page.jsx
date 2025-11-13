'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Palette, Award, Gift } from 'lucide-react';

export default function Home() {
  const categories = [
    {
      title: 'آینانتیک',
      description: 'محصولات آینانتیک دست‌ساز با طراحی منحصر به فرد',
      href: '/ainantik',
      images: [
        '/tabloAine/photo_2025-09-06_08-47-36.jpg',
        '/tabloAine/photo_2025-09-06_08-47-46.jpg',
        '/tabloAine/photo_2025-09-06_08-47-48.jpg',
        '/goldan/photo_2025-09-06_08-48-14.jpg'
      ],
      subcategories: ['تابلو', 'سینی', 'میز', 'آباژور', 'ساعت دیواری']
    },
    {
      title: 'دکوری',
      description: 'آثار دکوری زیبا برای تزئین خانه و محیط کار',
      href: '/dekori',
      images: [
        '/goldan/photo_2025-09-06_08-48-14.jpg',
        '/goldan/photo_2025-09-06_08-48-17.jpg',
        '/jaShamiDecori/photo_2025-09-06_08-48-00.jpg',
        '/jinjer/photo_2025-09-06_08-47-56.jpg',
        '/divarkobVaSardis/photo_2025-09-06_08-48-03.jpg'
      ],
      subcategories: ['سینی', 'آباژور', 'جاشمعی', 'گلدان', 'هلدر کتاب']
    },
    {
      title: 'ظروف سرامیکی',
      description: 'ظروف سرامیکی با کیفیت بالا و طراحی هنری',
      href: '/zoroof-seramiki',
      images: [
        '/haftSin/photo_1_2025-09-06_08-47-07.jpg',
        '/haftSin/photo_2_2025-09-06_08-47-07.jpg',
        '/jaShamiSeramiki/photo_4_2025-09-06_08-47-07.jpg',
        '/jaShamiSeramiki/photo_5_2025-09-06_08-47-07.jpg'
      ],
      subcategories: ['ظروف', 'دکوری', 'جاشمعی', 'هفت سین']
    },
    {
      title: 'شمع ارگانیک',
      description: 'شمع‌های ارگانیک دست‌ساز با رایحه‌های طبیعی',
      href: '/sham-organic',
      images: [
        '/shamDastSaz/1.jpg',
        '/shamDastSaz/2.jpg',
        '/shamDastSaz/3.jpg',
        '/monasebati/photo_2025-09-06_08-48-45.jpg'
      ],
      subcategories: ['دست ساز', 'شمع مناسبتی', 'باکس گل و هدیه']
    }
  ];

  const [currentImages, setCurrentImages] = useState({});

  useEffect(() => {
    // Initialize current image index for each category
    const initial = {};
    categories.forEach(cat => {
      initial[cat.title] = 0;
    });
    setCurrentImages(initial);

    // Auto-slide for each category
    const intervals = [];
    categories.forEach(category => {
      if (category.images.length > 1) {
        const interval = setInterval(() => {
          setCurrentImages(prev => {
            const current = prev[category.title] || 0;
            return {
              ...prev,
              [category.title]: (current + 1) % category.images.length
            };
          });
        }, 3000);
        intervals.push(interval);
      }
    });

    return () => {
      intervals.forEach(interval => clearInterval(interval));
    };
  }, []);

  return (
    <div className="min-h-screen m-0 p-0">
      <div className="relative z-10">

      {/* About Section */}
      <section className="m-0 mt-[50px] p-0 bg-secondary/30">
        <div className="container mx-auto px-4 m-0">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 golden-text">
              درباره گالری هنری شهرزاد
            </h2>
            <div className="backdrop-blur-2xl bg-white/40 rounded-lg p-6 md:p-8 max-w-3xl mx-auto border border-white/40 shadow-lg">
              <p className="text-lg text-foreground leading-relaxed">
                با بیش از یک دهه تجربه در زمینه تولید و عرضه محصولات هنری و دکوری، 
                گالری هنری شهرزاد آماده ارائه بهترین خدمات و محصولات با کیفیت به شما عزیزان است.
                هر یک از آثار ما با دقت و ظرافت خاصی طراحی و ساخته می‌شوند و منحصر به فرد هستند، 
                به گونه‌ای که هر محصول بیانگر هنر و خلاقیت منحصر به فرد ماست.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center backdrop-blur-2xl bg-white/40 p-8 rounded-lg border border-white/40 shadow-lg">
              <div className="w-16 h-16 golden-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <Palette className="w-8 h-8 text-foreground stroke-[1.5]" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">هنر دست‌ساز</h3>
              <p className="text-muted-foreground">
                تمامی محصولات ما با دست و با دقت و ظرافت خاصی ساخته می‌شوند
              </p>
            </div>
            
            <div className="text-center backdrop-blur-2xl bg-white/40 p-8 rounded-lg border border-white/40 shadow-lg">
              <div className="w-16 h-16 golden-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-foreground stroke-[1.5]" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">کیفیت بالا</h3>
              <p className="text-muted-foreground">
                استفاده از بهترین مواد اولیه و تکنیک‌های پیشرفته در تولید
              </p>
            </div>
            
            <div className="text-center backdrop-blur-2xl bg-white/40 p-8 rounded-lg border border-white/40 shadow-lg">
              <div className="w-16 h-16 golden-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift className="w-8 h-8 text-foreground stroke-[1.5]" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">سفارش اختصاصی</h3>
              <p className="text-muted-foreground">
                امکان سفارش محصولات اختصاصی مطابق با سلیقه و نیاز شما
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 golden-text">
              دسته‌بندی محصولات
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              مجموعه‌ای متنوع از محصولات هنری و دکوری برای هر سلیقه و نیاز
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {categories.map((category, index) => {
              const currentIndex = currentImages[category.title] || 0;
              const currentImage = category.images[currentIndex] || category.images[0];
              
              return (
                <Card key={category.title} className="card-elegant group cursor-pointer overflow-hidden p-0">
                  <CardContent className="p-0">
                    <Link href={category.href} className="block">
                      <div className="aspect-square relative overflow-hidden">
                        {category.images.length > 0 ? (
                          <>
                            {category.images.map((img, imgIndex) => (
                              <Image
                                key={imgIndex}
                                src={img}
                                alt={`${category.title} - تصویر ${imgIndex + 1}`}
                                fill
                                className={`object-cover transition-opacity duration-500 ${
                                  imgIndex === currentIndex ? 'opacity-100' : 'opacity-0 absolute'
                                }`}
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                              />
                            ))}
                            {category.images.length > 1 && (
                              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1 z-10">
                                {category.images.map((_, dotIndex) => (
                                  <div
                                    key={dotIndex}
                                    className={`h-1.5 sm:h-2 rounded-full transition-all ${
                                      dotIndex === currentIndex
                                        ? 'bg-white w-4 sm:w-5'
                                        : 'bg-white/50 w-1.5 sm:w-2'
                                    }`}
                                  />
                                ))}
                              </div>
                            )}
                          </>
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-secondary to-primary/20 flex items-center justify-center">
                            <span className="text-4xl sm:text-6xl opacity-50">🎨</span>
                          </div>
                        )}
                      </div>
                    </Link>
                    <div className="p-4 sm:p-6">
                      <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 group-hover:text-primary transition-colors">
                        <Link href={category.href}>{category.title}</Link>
                      </h3>
                      <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2">
                        {category.description}
                      </p>
                      <div className="flex flex-wrap gap-1 mb-3 sm:mb-4">
                        {category.subcategories.slice(0, 3).map((sub) => (
                          <span key={sub} className="text-[10px] sm:text-xs bg-secondary px-1.5 sm:px-2 py-0.5 sm:py-1 rounded">
                            {sub}
                          </span>
                        ))}
                        {category.subcategories.length > 3 && (
                          <span className="text-[10px] sm:text-xs text-muted-foreground">
                            +{category.subcategories.length - 3} بیشتر
                          </span>
                        )}
                      </div>
                      <Button variant="outline" size="sm" className="w-full text-xs sm:text-sm">
                        <Link href={category.href}>مشاهده محصولات</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 golden-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
            آماده سفارش محصول اختصاصی خود هستید؟
          </h2>
          <p className="text-lg text-black/80 mb-8 max-w-2xl mx-auto">
            با تیم متخصص ما تماس بگیرید و محصول منحصر به فرد خود را سفارش دهید
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-black text-white hover:bg-black/80 text-lg px-8 py-3">
              <Link href="/custom-order">سفارش اختصاصی</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-black text-black hover:bg-black hover:text-white text-lg px-8 py-3">
              <Link href="/contact">تماس با ما</Link>
            </Button>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
}
