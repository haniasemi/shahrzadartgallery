import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function ZoroofSeramikiPage() {
  const subcategories = [
    {
      title: 'ظروف',
      description: 'ظروف سرامیکی کاربردی و زیبا برای استفاده روزمره',
      href: '/zoroof-seramiki/zoroof',
      image: '/api/placeholder/300/300',
      products: ['بشقاب', 'کاسه', 'لیوان', 'فنجان', 'کتری']
    },
    {
      title: 'دکوری',
      description: 'ظروف سرامیکی دکوری برای تزئین خانه',
      href: '/zoroof-seramiki/dekori',
      image: '/api/placeholder/300/300',
      products: ['گلدان سرامیکی', 'آبخوری', 'سینی سرامیکی', 'مجسمه']
    },
    {
      title: 'جاشمعی',
      description: 'جاشمعی‌های سرامیکی با طراحی‌های متنوع',
      href: '/zoroof-seramiki/jashami',
      image: '/api/placeholder/300/300',
      products: ['جاشمعی کلاسیک', 'جاشمعی مدرن', 'جاشمعی تزئینی']
    },
    {
      title: 'هفت سین',
      description: 'مجموعه هفت سین سرامیکی برای نوروز',
      href: '/zoroof-seramiki/haft-sin',
      image: '/api/placeholder/300/300',
      products: ['سینی هفت سین', 'سبزه‌دان', 'سنجد دان', 'سکه دان']
    }
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 golden-text">
            ظروف سرامیکی
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            مجموعه‌ای زیبا و کاربردی از ظروف سرامیکی که با تکنیک‌های پیشرفته و مواد اولیه مرغوب ساخته شده‌اند. 
            هر قطعه ترکیبی از هنر و کاربرد است.
          </p>
        </div>

        {/* Subcategories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {subcategories.map((subcategory) => (
            <Card key={subcategory.title} className="card-elegant group cursor-pointer">
              <CardContent className="p-0">
                <div className="aspect-square bg-gradient-to-br from-secondary to-primary/20 rounded-t-lg flex items-center justify-center">
                  <span className="text-6xl opacity-50">🏺</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {subcategory.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {subcategory.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {subcategory.products.slice(0, 3).map((product) => (
                      <span key={product} className="text-xs bg-secondary px-2 py-1 rounded">
                        {product}
                      </span>
                    ))}
                    {subcategory.products.length > 3 && (
                      <span className="text-xs text-muted-foreground">
                        +{subcategory.products.length - 3} بیشتر
                      </span>
                    )}
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    <Link href={subcategory.href}>مشاهده محصولات</Link>
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
                ویژگی‌های ظروف سرامیکی ما
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 golden-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔥</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">مقاوم در برابر حرارت</h3>
                <p className="text-sm text-muted-foreground">
                  قابلیت استفاده در مایکروویو و فر بدون نگرانی
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 golden-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💧</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">ضد آب</h3>
                <p className="text-sm text-muted-foreground">
                  پوشش ضد آب برای حفظ کیفیت و زیبایی
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 golden-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌿</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">طبیعی و سالم</h3>
                <p className="text-sm text-muted-foreground">
                  استفاده از مواد طبیعی و بدون مواد شیمیایی مضر
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 golden-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎨</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">طراحی منحصر به فرد</h3>
                <p className="text-sm text-muted-foreground">
                  هر قطعه با طراحی خاص و منحصر به فرد ساخته می‌شود
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 mb-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6 golden-text">
                فرآیند تولید ظروف سرامیکی
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-primary">1️⃣</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">آماده‌سازی خاک</h3>
                <p className="text-sm text-muted-foreground">
                  انتخاب و آماده‌سازی بهترین خاک سرامیکی
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-primary">2️⃣</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">قالب‌گیری</h3>
                <p className="text-sm text-muted-foreground">
                  شکل‌دهی ظروف با دقت و ظرافت خاص
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-primary">3️⃣</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">پخت در کوره</h3>
                <p className="text-sm text-muted-foreground">
                  پخت در دمای مناسب برای استحکام و کیفیت
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-primary">4️⃣</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">تزئین و لعاب</h3>
                <p className="text-sm text-muted-foreground">
                  تزئین با نقوش زیبا و پوشش لعاب محافظ
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-6 golden-text">
            آماده سفارش ظروف سرامیکی خود هستید؟
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            با تیم متخصص ما تماس بگیرید و ظروف منحصر به فرد خود را سفارش دهید
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
