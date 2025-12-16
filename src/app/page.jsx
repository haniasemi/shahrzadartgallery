'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Palette, Award, Gift, Star, TrendingUp, Users, Package, Calendar, Quote } from 'lucide-react';
import TestimonialCard from '@/components/TestimonialCard';
import { getAllBlogPosts } from '@/lib/blogData';
import CountUp from '@/components/CountUp';
import BounceIn from '@/components/BounceIn';

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
      <section className="m-0 mt-5 md:mt-[50px] p-0 bg-secondary/30">
        <div className="container mx-auto px-4 m-0">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 golden-text">
              درباره گالری هنری شهرزاد
            </h2>
            <div className="backdrop-blur-2xl bg-white/40 rounded-lg p-6 md:p-8 max-w-3xl mx-auto border border-white/40 shadow-lg">
              <p className="text-lg text-foreground leading-relaxed">
                خوش اومدین به دنیای هنر و زیبایی! 🎨 با بیش از ده سال تجربه در ساخت آثار هنری و دکوری، 
                ما توی گالری هنری شهرزاد منتظرتونیم تا بهترین محصولات رو براتون بسازیم.
                هر کدوم از آثارمون با عشق و دقت ساخته میشن و واقعاً منحصر به فردن! 
                به این معنی که اگه یکی از دوستاتون هم بخواد مثل همین رو داشته باشه، باید دوباره به ما سفارش بده 😄
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
                همه چیز با دست ساخته میشه! یعنی ماشین نیست که بخواد اشتباه کنه 😊
                هر محصول مثل بچه‌مون میمونه که با عشق و دقت پرورشش میدیم
              </p>
            </div>
            
            <div className="text-center backdrop-blur-2xl bg-white/40 p-8 rounded-lg border border-white/40 shadow-lg">
              <div className="w-16 h-16 golden-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-foreground stroke-[1.5]" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">کیفیت بالا</h3>
              <p className="text-muted-foreground">
                مواد اولیه رو از بهترین‌ها انتخاب می‌کنیم (نه اون چیزای بی‌کیفیت که زود خراب میشن! 😅)
                و با تکنیک‌های پیشرفته کار می‌کنیم تا محصولی که تحویلتون میدیم واقعاً عالی باشه
              </p>
            </div>
            
            <div className="text-center backdrop-blur-2xl bg-white/40 p-8 rounded-lg border border-white/40 shadow-lg">
              <div className="w-16 h-16 golden-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift className="w-8 h-8 text-foreground stroke-[1.5]" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">سفارش اختصاصی</h3>
              <p className="text-muted-foreground">
                می‌خوای یه چیز کاملاً مخصوص خودت داشته باشی؟ خب بریم جلو! 🎯
                هرچی دلت بخواد رو می‌سازیم، فقط بگو چی می‌خوای و بقیش با ما!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 golden-text">
              آمار و دستاوردها
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              چند تا عدد و رقم که نشون میده چقدر خوب کار کردیم! 📊
              (واقعاً خودمونم تعجب کردیم که این همه مشتری راضی داریم 😄)
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center backdrop-blur-2xl bg-white/40 p-6 rounded-lg border border-white/40 shadow-lg">
              <div className="w-16 h-16 golden-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-foreground stroke-[1.5]" />
              </div>
              <div className="text-3xl md:text-4xl font-bold mb-2 golden-text">
                <CountUp end={500} suffix="+" duration={2000} />
              </div>
              <p className="text-sm md:text-base text-muted-foreground">مشتری راضی</p>
            </div>
            
            <div className="text-center backdrop-blur-2xl bg-white/40 p-6 rounded-lg border border-white/40 shadow-lg">
              <div className="w-16 h-16 golden-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="w-8 h-8 text-foreground stroke-[1.5]" />
              </div>
              <div className="text-3xl md:text-4xl font-bold mb-2 golden-text">
                <CountUp end={1000} suffix="+" duration={2500} />
              </div>
              <p className="text-sm md:text-base text-muted-foreground">محصول تولیدی</p>
            </div>
            
            <div className="text-center backdrop-blur-2xl bg-white/40 p-6 rounded-lg border border-white/40 shadow-lg">
              <div className="w-16 h-16 golden-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-foreground stroke-[1.5]" />
              </div>
              <div className="text-3xl md:text-4xl font-bold mb-2 golden-text">
                <CountUp end={15} suffix="+" duration={1800} />
              </div>
              <p className="text-sm md:text-base text-muted-foreground">سال تجربه</p>
            </div>
            
            <div className="text-center backdrop-blur-2xl bg-white/40 p-6 rounded-lg border border-white/40 shadow-lg">
              <div className="w-16 h-16 golden-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-foreground stroke-[1.5]" />
              </div>
              <div className="text-3xl md:text-4xl font-bold mb-2 golden-text">
                <CountUp end={4.9} suffix="" duration={2000} decimals={1} />
              </div>
              <p className="text-sm md:text-base text-muted-foreground">امتیاز رضایت</p>
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
              اینا همون محصولاتین که خیلیا عاشقشون شدن! 🎨
              هر سلیقه‌ای که داشته باشی، حتماً یه چیزی اینجا پیدا می‌کنی که دوسش داشته باشی!
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

      {/* Featured Products Section */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <TrendingUp className="w-6 h-6 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold golden-text">
                محصولات پرفروش
              </h2>
            </div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              اینا همون محصولاتی هستن که همه عاشقشون شدن! ❤️
              (خیلیا میگن نکنین بفروشینشون چون دیگه نمونده برا ما! 😂)
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'تابلو آینانتیک کلاسیک',
                category: 'آینانتیک',
                image: '/tabloAine/photo_2025-09-06_08-47-36.jpg',
                href: '/ainantik/tablo',
                direction: 'up'
              },
              {
                title: 'گلدان سرامیکی مدرن',
                category: 'دکوری',
                image: '/goldan/photo_2025-09-06_08-48-14.jpg',
                href: '/dekori/goldan',
                direction: 'down'
              },
              {
                title: 'مجموعه هفت سین',
                category: 'ظروف سرامیکی',
                image: '/haftSin/photo_1_2025-09-06_08-47-07.jpg',
                href: '/zoroof-seramiki/haft-sin',
                direction: 'up'
              },
              {
                title: 'شمع ارگانیک دست‌ساز',
                category: 'شمع ارگانیک',
                image: '/shamDastSaz/1.jpg',
                href: '/sham-organic/dast-saz',
                direction: 'down'
              }
            ].map((product, index) => (
              <BounceIn key={index} delay={index * 150} direction={product.direction}>
                <Card className="card-elegant group cursor-pointer overflow-hidden p-0">
                <CardContent className="p-0">
                  <Link href={product.href} className="block">
                    <div className="aspect-square relative overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                      <div className="absolute top-2 left-2">
                        <span className="bg-primary/90 text-primary-foreground text-xs px-2 py-1 rounded">
                          {product.category}
                        </span>
                      </div>
                    </div>
                  </Link>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                      <Link href={product.href}>{product.title}</Link>
                    </h3>
                    <div className="flex items-center gap-1 mb-3">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                      <span className="text-xs text-muted-foreground mr-2">(۴.۸)</span>
                    </div>
                    <Button variant="outline" size="sm" className="w-full">
                      <Link href={product.href}>مشاهده جزئیات</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
              </BounceIn>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Quote className="w-6 h-6 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold golden-text">
                نظرات مشتریان
              </h2>
            </div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              اینا نظرات واقعی مشتریهامونن! نه اون چیزای ساختگی که توی بعضی سایت‌ها میبینی 😄
              وقتی میبینیم چقدر خوشحالن، دل ما هم روشن میشه!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                name: 'فاطمه رضایی',
                location: 'تهران',
                text: 'کیفیت محصولات شهرزاد واقعاً فوق‌العاده است. تابلو آینانتیکی که سفارش دادم از هر نظر بی‌نظیر بود. حتماً دوباره سفارش می‌دهم.'
              },
              {
                name: 'علی محمدی',
                location: 'اصفهان',
                text: 'شمع‌های ارگانیک این گالری رایحه‌های خیلی طبیعی و دلنشینی دارن. کیفیت ساخت هم عالی بود. به همه پیشنهاد می‌کنم.'
              },
              {
                name: 'سارا احمدی',
                location: 'شیراز',
                text: 'مجموعه هفت سینی که از این گالری خریدم برای عید نوروز واقعاً زیبا و با کیفیت بود. خانواده همه تعریف کردن. ممنون از زحماتتون.'
              },
              {
                name: 'محمد کریمی',
                location: 'مشهد',
                text: 'سفارش اختصاصی که دادم دقیقاً مطابق سلیقه و خواسته‌هام بود. تیم پشتیبانی هم خیلی خوب و پاسخگو بودن. حتماً ادامه همکاری خواهم داشت.'
              },
              {
                name: 'مریم حسینی',
                location: 'تبریز',
                text: 'ظروف سرامیکی این گالری کیفیت خیلی بالایی دارن. طراحی‌ها هم منحصر به فرد و زیبا هستن. برای دکوراسیون خانه عالیه.'
              },
              {
                name: 'حسین علیزاده',
                location: 'رشت',
                text: 'آثار دکوری شهرزاد رو دوست دارم. هر بار که می‌خرم کیفیت و زیبایی محصولات بیشتر از قبل منو شگفت‌زده می‌کنه. واقعاً هنرمندانه ساخته شدن.'
              }
            ].map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Latest Blog Posts Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 golden-text">
              آخرین مقالات و اخبار
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              یه سری مطلب جالب که نوشتیم تا بیشتر از هنرهای دستی بفهمین! 📚
              (واقعاً مفیدن، بخونین پشیمون نمیشین 😊)
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
            {getAllBlogPosts().slice(0, 3).map((post, index) => (
              <Card key={post.slug || index} className="card-elegant group cursor-pointer overflow-hidden">
                <CardContent className="p-0">
                  <Link href={`/blog/${post.slug}`}>
                    <div className="aspect-video bg-gradient-to-br from-secondary to-primary/20 flex items-center justify-center relative overflow-hidden">
                      <span className="text-6xl opacity-50">📰</span>
                      <div className="absolute top-2 left-2">
                        <span className="bg-primary/90 text-primary-foreground text-xs px-2 py-1 rounded">
                          {post.category}
                        </span>
                      </div>
                    </div>
                  </Link>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3 text-xs text-muted-foreground">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <Button variant="outline" size="sm">
                      <Link href={`/blog/${post.slug}`}>ادامه مطلب</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Button size="lg" variant="outline" className="px-8">
              <Link href="/blog">مشاهده همه مقالات</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 golden-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
            آماده‌اید یه چیز خفن براتون بسازیم؟ 🚀
          </h2>
          <p className="text-lg text-black/80 mb-8 max-w-2xl mx-auto">
            دیگه نیازی نیست دنبال چیزی که می‌خوای بگردی! بگو چی می‌خوای، ما برات می‌سازیمش
            (تیممون خیلی زرنگن، نگران نباش! 😎)
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
