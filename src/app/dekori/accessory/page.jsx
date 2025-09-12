import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function AccessoryPage() {
  const products = [
    {
      id: 1,
      name: 'اکسسوری دست‌ساز طلایی',
      description: 'اکسسوری زیبا و منحصر به فرد با طراحی طلایی و کیفیت بالا',
      price: '۲۵۰,۰۰۰',
      currency: 'تومان',
      image: '/acsesori/photo_2025-09-06_08-47-58.jpg',
      category: 'اکسسوری',
      isNew: true,
      isBestSeller: false
    },
    {
      id: 2,
      name: 'اکسسوری کلاسیک',
      description: 'طراحی کلاسیک و زیبا برای تزئین محیط',
      price: '۱۸۰,۰۰۰',
      currency: 'تومان',
      image: '/acsesori/photo_2025-09-06_08-47-58.jpg',
      category: 'اکسسوری',
      isNew: false,
      isBestSeller: true
    },
    {
      id: 3,
      name: 'اکسسوری مدرن',
      description: 'طراحی مدرن و شیک برای دکوراسیون معاصر',
      price: '۳۲۰,۰۰۰',
      currency: 'تومان',
      image: '/acsesori/photo_2025-09-06_08-47-58.jpg',
      category: 'اکسسوری',
      isNew: true,
      isBestSeller: false
    },
    {
      id: 4,
      name: 'اکسسوری لوکس',
      description: 'اکسسوری لوکس با جزئیات ظریف و زیبا',
      price: '۴۵۰,۰۰۰',
      currency: 'تومان',
      image: '/acsesori/photo_2025-09-06_08-47-58.jpg',
      category: 'اکسسوری',
      isNew: false,
      isBestSeller: true
    },
    {
      id: 5,
      name: 'اکسسوری مینیمال',
      description: 'طراحی مینیمال و ساده برای علاقه‌مندان به سادگی',
      price: '۱۵۰,۰۰۰',
      currency: 'تومان',
      image: '/acsesori/photo_2025-09-06_08-47-58.jpg',
      category: 'اکسسوری',
      isNew: false,
      isBestSeller: false
    },
    {
      id: 6,
      name: 'اکسسوری هنری',
      description: 'اثر هنری منحصر به فرد با الهام از هنر ایرانی',
      price: '۵۸۰,۰۰۰',
      currency: 'تومان',
      image: '/acsesori/photo_2025-09-06_08-47-58.jpg',
      category: 'اکسسوری',
      isNew: true,
      isBestSeller: true
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 golden-text">
            اکسسوری
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            مجموعه‌ای زیبا و متنوع از اکسسوری‌های دست‌ساز برای تزئین و زیباسازی محیط شما
          </p>
          <div className="mt-8">
            <Link href="/dekori">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                بازگشت به دکوری
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="card-elegant group overflow-hidden hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0">
                  {/* Product Image */}
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    
                    {/* Badges */}
                    <div className="absolute top-4 right-4 flex flex-col gap-2">
                      {product.isNew && (
                        <Badge className="bg-green-500 text-white">جدید</Badge>
                      )}
                      {product.isBestSeller && (
                        <Badge className="bg-orange-500 text-white">پرفروش</Badge>
                      )}
                    </div>

                    {/* Quick Actions */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex gap-2">
                        <Button size="sm" className="bg-white text-black hover:bg-gray-100">
                          مشاهده سریع
                        </Button>
                        <Button size="sm" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                          افزودن به سبد
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {product.description}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-1">
                        <span className="text-2xl font-bold text-primary">
                          {product.price}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {product.currency}
                        </span>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button className="flex-1 btn-golden">
                        افزودن به سبد خرید
                      </Button>
                      <Button variant="outline" size="icon">
                        ♡
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 golden-text">
              چرا اکسسوری‌های ما؟
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center card-elegant p-8 rounded-lg">
              <div className="w-16 h-16 golden-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">طراحی منحصر به فرد</h3>
              <p className="text-muted-foreground">
                هر اکسسوری با دقت و ظرافت خاصی طراحی و ساخته می‌شود
              </p>
            </div>
            
            <div className="text-center card-elegant p-8 rounded-lg">
              <div className="w-16 h-16 golden-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">هنر دست‌ساز</h3>
              <p className="text-muted-foreground">
                تمامی محصولات با دست و با استفاده از تکنیک‌های هنری ساخته می‌شوند
              </p>
            </div>
            
            <div className="text-center card-elegant p-8 rounded-lg">
              <div className="w-16 h-16 golden-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💎</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">کیفیت بالا</h3>
              <p className="text-muted-foreground">
                استفاده از بهترین مواد اولیه و تکنیک‌های پیشرفته
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 golden-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
            اکسسوری اختصاصی خود را سفارش دهید
          </h2>
          <p className="text-lg text-black/80 mb-8 max-w-2xl mx-auto">
            اگر اکسسوری خاصی در ذهن دارید، با ما تماس بگیرید تا آن را برای شما بسازیم
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
