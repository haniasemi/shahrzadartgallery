import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function Home() {
  const categories = [
    {
      title: 'آینانتیک',
      description: 'محصولات آینانتیک دست‌ساز با طراحی منحصر به فرد',
      href: '/ainantik',
      image: '/api/placeholder/400/300',
      subcategories: ['تابلو', 'سینی', 'میز', 'آباژور', 'ساعت دیواری']
    },
    {
      title: 'دکوری',
      description: 'آثار دکوری زیبا برای تزئین خانه و محیط کار',
      href: '/dekori',
      image: '/api/placeholder/400/300',
      subcategories: ['سینی', 'آباژور', 'جاشمعی', 'گلدان', 'هلدر کتاب']
    },
    {
      title: 'ظروف سرامیکی',
      description: 'ظروف سرامیکی با کیفیت بالا و طراحی هنری',
      href: '/zoroof-seramiki',
      image: '/api/placeholder/400/300',
      subcategories: ['ظروف', 'دکوری', 'جاشمعی', 'هفت سین']
    },
    {
      title: 'شمع ارگانیک',
      description: 'شمع‌های ارگانیک دست‌ساز با رایحه‌های طبیعی',
      href: '/sham-organic',
      image: '/api/placeholder/400/300',
      subcategories: ['دست ساز', 'شمع مناسبتی', 'باکس گل و هدیه']
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20"></div>
        
        <div className="relative z-20 text-center text-foreground px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            <span className="golden-text">گالری هنری شهرزاد</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            هنر دست‌ساز ایرانی با کیفیت و زیبایی منحصر به فرد
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <Button size="lg" className="btn-golden text-lg px-8 py-3">
              <Link href="/products">مشاهده محصولات</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-3">
              <Link href="/custom-order">سفارش اختصاصی</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 golden-text">
              درباره گالری هنری شهرزاد
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              با بیش از یک دهه تجربه در زمینه تولید و عرضه محصولات هنری و دکوری، 
              گالری هنری شهرزاد آماده ارائه بهترین خدمات و محصولات با کیفیت به شما عزیزان است.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center card-elegant p-8 rounded-lg">
              <div className="w-16 h-16 golden-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">هنر دست‌ساز</h3>
              <p className="text-muted-foreground">
                تمامی محصولات ما با دست و با دقت و ظرافت خاصی ساخته می‌شوند
              </p>
            </div>
            
            <div className="text-center card-elegant p-8 rounded-lg">
              <div className="w-16 h-16 golden-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⭐</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">کیفیت بالا</h3>
              <p className="text-muted-foreground">
                استفاده از بهترین مواد اولیه و تکنیک‌های پیشرفته در تولید
              </p>
            </div>
            
            <div className="text-center card-elegant p-8 rounded-lg">
              <div className="w-16 h-16 golden-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎁</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">سفارش اختصاصی</h3>
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <Card key={category.title} className="card-elegant group cursor-pointer">
                <CardContent className="p-0">
                  <div className="aspect-square bg-gradient-to-br from-secondary to-primary/20 rounded-t-lg flex items-center justify-center">
                    <span className="text-6xl opacity-50">🎨</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {category.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {category.subcategories.slice(0, 3).map((sub) => (
                        <span key={sub} className="text-xs bg-secondary px-2 py-1 rounded">
                          {sub}
                        </span>
                      ))}
                      {category.subcategories.length > 3 && (
                        <span className="text-xs text-muted-foreground">
                          +{category.subcategories.length - 3} بیشتر
                        </span>
                      )}
                    </div>
                    <Button variant="outline" size="sm" className="w-full">
                      <Link href={category.href}>مشاهده محصولات</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
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
  );
}
