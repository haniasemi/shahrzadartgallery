import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function ShamOrganicPage() {
  const subcategories = [
    {
      title: 'دست ساز',
      description: 'شمع‌های دست‌ساز با رایحه‌های طبیعی و آرامش‌بخش',
      href: '/sham-organic/dast-saz',
      image: '/api/placeholder/300/300',
      products: ['شمع موم عسل', 'شمع سویا', 'شمع پارافین طبیعی']
    },
    {
      title: 'شمع مناسبتی',
      description: 'شمع‌های مناسبتی برای مناسبت‌های خاص',
      href: '/sham-organic/monasebati',
      image: '/api/placeholder/300/300',
      products: ['شمع عروسی', 'شمع تولد', 'شمع کریسمس', 'شمع نوروز']
    },
    {
      title: 'باکس گل و هدیه',
      description: 'باکس‌های گل و هدیه با شمع‌های ارگانیک',
      href: '/sham-organic/box-gol-hediye',
      image: '/boxGol/photo_2025-09-06_08-48-49.jpg',
      products: ['باکس گل', 'باکس هدیه', 'باکس تولد', 'باکس عروسی']
    }
  ];

  const fragrances = [
    'اسطوخودوس', 'رز', 'وانیل', 'لیمو', 'نعنا', 'یاسمن', 'چوب صندل', 'برگاموت'
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 golden-text">
            شمع ارگانیک
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            مجموعه‌ای از شمع‌های ارگانیک دست‌ساز که با مواد طبیعی و رایحه‌های خوشبو ساخته شده‌اند. 
            هر شمع برای ایجاد آرامش و زیبایی در فضای شما طراحی شده است.
          </p>
        </div>

        {/* Subcategories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
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
                      <span className="text-6xl opacity-50">🕯️</span>
                    </div>
                  )}
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

        {/* Fragrances Section */}
        <section className="py-16 bg-secondary/30 rounded-lg mb-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6 golden-text">
                رایحه‌های موجود
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                رایحه‌های طبیعی و آرامش‌بخش که از اسانس‌های خالص تهیه شده‌اند
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {fragrances.map((fragrance) => (
                <div key={fragrance} className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="w-12 h-12 golden-gradient rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-lg">🌸</span>
                  </div>
                  <span className="text-sm font-medium">{fragrance}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 mb-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6 golden-text">
                ویژگی‌های شمع‌های ارگانیک ما
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 golden-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌿</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">طبیعی و ارگانیک</h3>
                <p className="text-sm text-muted-foreground">
                  استفاده از مواد طبیعی و ارگانیک بدون مواد شیمیایی مضر
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 golden-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⏰</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">سوختن طولانی</h3>
                <p className="text-sm text-muted-foreground">
                  زمان سوختن طولانی‌تر نسبت به شمع‌های معمولی
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 golden-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💨</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">دود کم</h3>
                <p className="text-sm text-muted-foreground">
                  تولید دود کم و عدم ایجاد آلودگی در محیط
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 golden-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎨</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">طراحی زیبا</h3>
                <p className="text-sm text-muted-foreground">
                  طراحی‌های زیبا و منحصر به فرد برای هر سلیقه
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-secondary/30 rounded-lg mb-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6 golden-text">
                فواید شمع‌های ارگانیک
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-primary">😌</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">آرامش و ریلکسیشن</h3>
                <p className="text-sm text-muted-foreground">
                  رایحه‌های طبیعی باعث آرامش و کاهش استرس می‌شوند
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-primary">🌱</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">دوستدار محیط زیست</h3>
                <p className="text-sm text-muted-foreground">
                  مواد قابل تجزیه و سازگار با محیط زیست
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-primary">💝</span>
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
            آماده سفارش شمع ارگانیک خود هستید؟
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            با تیم متخصص ما تماس بگیرید و شمع منحصر به فرد خود را سفارش دهید
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
