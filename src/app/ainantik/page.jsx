import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function AinantikPage() {
  const subcategories = [
    {
      title: 'تابلو',
      description: 'تابلوهای آینانتیک دست‌ساز با طراحی‌های منحصر به فرد',
      href: '/ainantik/tablo',
      image: '/api/placeholder/300/300',
      products: ['تابلو گل و مرغ', 'تابلو منظره', 'تابلو انتزاعی']
    },
    {
      title: 'سینی',
      description: 'سینی‌های آینانتیک زیبا برای پذیرایی و تزئین',
      href: '/ainantik/sini',
      image: '/api/placeholder/300/300',
      products: ['سینی چوبی', 'سینی فلزی', 'سینی سرامیکی']
    },
    {
      title: 'میز',
      description: 'میزهای آینانتیک با طراحی کلاسیک و مدرن',
      href: '/ainantik/miz',
      image: '/api/placeholder/300/300',
      products: ['میز کنسول', 'میز قهوه', 'میز ناهارخوری']
    },
    {
      title: 'آباژور',
      description: 'آباژورهای آینانتیک برای نورپردازی زیبا',
      href: '/ainantik/abazhor',
      image: '/api/placeholder/300/300',
      products: ['آباژور کلاسیک', 'آباژور مدرن', 'آباژور تزئینی']
    },
    {
      title: 'ساعت دیواری',
      description: 'ساعت‌های دیواری آینانتیک با طراحی خاص',
      href: '/ainantik/saat-divari',
      image: '/api/placeholder/300/300',
      products: ['ساعت کلاسیک', 'ساعت مدرن', 'ساعت تزئینی']
    }
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 golden-text">
            آینانتیک
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            مجموعه‌ای منحصر به فرد از محصولات آینانتیک دست‌ساز که با دقت و ظرافت خاصی طراحی و ساخته شده‌اند. 
            هر قطعه بیانگر هنر و خلاقیت استادکاران ماهر ما است.
          </p>
        </div>

        {/* Subcategories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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
                    {subcategory.products.map((product) => (
                      <span key={product} className="text-xs bg-secondary px-2 py-1 rounded">
                        {product}
                      </span>
                    ))}
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
                ویژگی‌های محصولات آینانتیک ما
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 golden-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎨</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">طراحی منحصر به فرد</h3>
                <p className="text-sm text-muted-foreground">
                  هر محصول با طراحی خاص و منحصر به فرد ساخته می‌شود
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 golden-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✋</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">ساخت دستی</h3>
                <p className="text-sm text-muted-foreground">
                  تمامی محصولات با دست و با دقت استادکاران ساخته می‌شوند
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 golden-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⭐</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">کیفیت بالا</h3>
                <p className="text-sm text-muted-foreground">
                  استفاده از بهترین مواد اولیه و تکنیک‌های پیشرفته
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 golden-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎁</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">سفارش اختصاصی</h3>
                <p className="text-sm text-muted-foreground">
                  امکان سفارش محصولات مطابق با سلیقه و نیاز شما
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-6 golden-text">
            آماده سفارش محصول آینانتیک خود هستید؟
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            با تیم متخصص ما تماس بگیرید و محصول منحصر به فرد خود را سفارش دهید
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
