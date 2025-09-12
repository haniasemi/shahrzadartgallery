import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function DekoriPage() {
  const subcategories = [
    {
      title: 'سینی',
      description: 'سینی‌های دکوری زیبا برای پذیرایی و تزئین',
      href: '/dekori/sini',
      image: '/api/placeholder/300/300',
      products: ['سینی چوبی', 'سینی فلزی', 'سینی سرامیکی']
    },
    {
      title: 'آباژور',
      description: 'آباژورهای دکوری برای نورپردازی زیبا',
      href: '/dekori/abazhor',
      image: '/api/placeholder/300/300',
      products: ['آباژور کلاسیک', 'آباژور مدرن', 'آباژور تزئینی']
    },
    {
      title: 'جاشمعی',
      description: 'جاشمعی‌های دکوری با طراحی‌های متنوع',
      href: '/dekori/jashami',
      image: '/api/placeholder/300/300',
      products: ['جاشمعی شیشه‌ای', 'جاشمعی فلزی', 'جاشمعی سرامیکی']
    },
    {
      title: 'گلدان',
      description: 'گلدان‌های دکوری برای نگهداری گل و گیاه',
      href: '/dekori/goldan',
      image: '/api/placeholder/300/300',
      products: ['گلدان سرامیکی', 'گلدان فلزی', 'گلدان شیشه‌ای']
    },
    {
      title: 'هلدر کتاب',
      description: 'هلدرهای کتاب با طراحی‌های زیبا و کاربردی',
      href: '/dekori/holder-ketab',
      image: '/api/placeholder/300/300',
      products: ['هلدر چوبی', 'هلدر فلزی', 'هلدر سرامیکی']
    },
    {
      title: 'بانکه و جینجر',
      description: 'بانکه‌ها و جینجرهای دکوری برای تزئین',
      href: '/dekori/banke-jinger',
      image: '/api/placeholder/300/300',
      products: ['بانکه چوبی', 'جینجر فلزی', 'بانکه سرامیکی']
    },
    {
      title: 'ظروف پذیرایی',
      description: 'ظروف پذیرایی دکوری برای میهمانی‌ها',
      href: '/dekori/zorof-paziraei',
      image: '/api/placeholder/300/300',
      products: ['ظروف چینی', 'ظروف شیشه‌ای', 'ظروف سرامیکی']
    },
    {
      title: 'مجسمه‌ها',
      description: 'مجسمه‌های دکوری با طراحی‌های هنری',
      href: '/dekori/mojassame',
      image: '/api/placeholder/300/300',
      products: ['مجسمه برنزی', 'مجسمه سرامیکی', 'مجسمه چوبی']
    },
    {
      title: 'اکسسوری',
      description: 'اکسسوری‌های دکوری برای تزئین خانه',
      href: '/dekori/accessory',
      image: '/acsesori/photo_2025-09-06_08-47-58.jpg',
      products: ['آینه دکوری', 'قاب عکس', 'ساعت دکوری']
    },
    {
      title: 'دیوارکوب و سردیس',
      description: 'دیوارکوب‌ها و سردیس‌های دکوری',
      href: '/dekori/divarkob-sardis',
      image: '/api/placeholder/300/300',
      products: ['دیوارکوب چوبی', 'سردیس فلزی', 'دیوارکوب سرامیکی']
    }
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 golden-text">
            دکوری
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            مجموعه‌ای متنوع از آثار دکوری زیبا که برای تزئین خانه و محیط کار طراحی شده‌اند. 
            هر قطعه با دقت و ظرافت خاصی ساخته شده تا زیبایی و آرامش را به فضای شما بیاورد.
          </p>
        </div>

        {/* Subcategories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {subcategories.map((subcategory) => (
            <Card key={subcategory.title} className="card-elegant group cursor-pointer">
              <CardContent className="p-0">
                <div className="aspect-square rounded-t-lg overflow-hidden">
                  {subcategory.image && subcategory.image !== '/api/placeholder/300/300' ? (
                    <Image
                      src={subcategory.image}
                      alt={subcategory.title}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-secondary to-primary/20 flex items-center justify-center">
                      <span className="text-5xl opacity-50">🏺</span>
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {subcategory.title}
                  </h3>
                  <p className="text-muted-foreground text-xs mb-3">
                    {subcategory.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {subcategory.products.slice(0, 2).map((product) => (
                      <span key={product} className="text-xs bg-secondary px-2 py-1 rounded">
                        {product}
                      </span>
                    ))}
                    {subcategory.products.length > 2 && (
                      <span className="text-xs text-muted-foreground">
                        +{subcategory.products.length - 2}
                      </span>
                    )}
                  </div>
                  <Button variant="outline" size="sm" className="w-full text-xs">
                    <Link href={subcategory.href}>مشاهده</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features Section */}
        <section className="py-16 bg-secondary/30 rounded-lg mb-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6 golden-text">
                چرا محصولات دکوری ما را انتخاب کنید؟
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 golden-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎨</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">طراحی مدرن</h3>
                <p className="text-sm text-muted-foreground">
                  طراحی‌های مدرن و هماهنگ با آخرین ترندهای دکوراسیون
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 golden-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏠</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">سازگار با محیط</h3>
                <p className="text-sm text-muted-foreground">
                  محصولاتی که با هر نوع دکوراسیون و فضای خانه سازگار هستند
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 golden-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💎</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">کیفیت ممتاز</h3>
                <p className="text-sm text-muted-foreground">
                  استفاده از بهترین مواد اولیه و تکنیک‌های پیشرفته
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 golden-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎁</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">هدیه مناسب</h3>
                <p className="text-sm text-muted-foreground">
                  انتخاب عالی برای هدیه دادن به عزیزانتان
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-6 golden-text">
            آماده تزئین خانه خود هستید؟
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            با محصولات دکوری ما، خانه خود را به مکانی زیبا و آرامش‌بخش تبدیل کنید
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-golden text-lg px-8 py-3">
              <Link href="/custom-order">سفارش اختصاصی</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-3">
              <Link href="/contact">تماس با ما</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
