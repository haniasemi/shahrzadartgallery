import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const products = [
  {
    id: 1,
    title: 'بشقاب سرامیکی کلاسیک',
    description: 'بشقاب سرامیکی با طراحی کلاسیک و لعاب محافظ',
    price: '۸۵,۰۰۰',
    image: '/api/placeholder/300/400',
    size: 'قطر ۲۵ سانتی‌متر',
    material: 'سرامیک با لعاب',
    dishwasher: true,
    inStock: true
  },
  {
    id: 2,
    title: 'کاسه سرامیکی عمیق',
    description: 'کاسه سرامیکی عمیق برای سوپ و خورشت',
    price: '۱۲۰,۰۰۰',
    image: '/api/placeholder/300/400',
    size: 'قطر ۲۰ سانتی‌متر',
    material: 'سرامیک با لعاب',
    dishwasher: true,
    inStock: true
  },
  {
    id: 3,
    title: 'لیوان سرامیکی',
    description: 'لیوان سرامیکی با طراحی مدرن و راحت در دست',
    price: '۶۵,۰۰۰',
    image: '/api/placeholder/300/400',
    size: 'ظرفیت ۳۰۰ میلی‌لیتر',
    material: 'سرامیک با لعاب',
    dishwasher: true,
    inStock: false
  },
  {
    id: 4,
    title: 'فنجان قهوه',
    description: 'فنجان قهوه سرامیکی با دسته راحت',
    price: '۷۵,۰۰۰',
    image: '/api/placeholder/300/400',
    size: 'ظرفیت ۲۰۰ میلی‌لیتر',
    material: 'سرامیک با لعاب',
    dishwasher: true,
    inStock: true
  },
  {
    id: 5,
    title: 'کتری سرامیکی',
    description: 'کتری سرامیکی با طراحی سنتی و کاربردی',
    price: '۲۵۰,۰۰۰',
    image: '/api/placeholder/300/400',
    size: 'ظرفیت ۱.۵ لیتر',
    material: 'سرامیک با لعاب',
    dishwasher: false,
    inStock: true
  },
  {
    id: 6,
    title: 'سینی سرامیکی',
    description: 'سینی سرامیکی برای پذیرایی و سرو غذا',
    price: '۱۸۰,۰۰۰',
    image: '/api/placeholder/300/400',
    size: '۳۰ × ۴۰ سانتی‌متر',
    material: 'سرامیک با لعاب',
    dishwasher: true,
    inStock: true
  }
];

const features = [
  {
    icon: '🔥',
    title: 'مقاوم در برابر حرارت',
    description: 'قابلیت استفاده در مایکروویو و فر'
  },
  {
    icon: '💧',
    title: 'ضد آب',
    description: 'پوشش ضد آب برای حفظ کیفیت'
  },
  {
    icon: '🌿',
    title: 'طبیعی و سالم',
    description: 'مواد طبیعی بدون مواد شیمیایی مضر'
  },
  {
    icon: '🎨',
    title: 'طراحی زیبا',
    description: 'طراحی‌های زیبا و منحصر به فرد'
  }
];

export default function ZoroofPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center space-x-2 space-x-reverse text-sm text-muted-foreground">
          <Link href="/" className="hover:text-primary transition-colors">خانه</Link>
          <span>/</span>
          <Link href="/zoroof-seramiki" className="hover:text-primary transition-colors">ظروف سرامیکی</Link>
          <span>/</span>
          <span className="text-foreground">ظروف</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in-up">
            ظروف سرامیکی کاربردی
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-fade-in-up">
            مجموعه‌ای از ظروف سرامیکی کاربردی که برای استفاده روزمره طراحی شده‌اند. 
            هر قطعه با کیفیت بالا و طراحی زیبا برای راحتی و زیبایی در آشپزخانه شما ساخته شده است.
          </p>
          <div className="flex justify-center gap-4 animate-fade-in-up">
            <Badge variant="secondary" className="text-lg px-6 py-2">
              کاربردی
            </Badge>
            <Badge variant="outline" className="text-lg px-6 py-2">
              ضد آب
            </Badge>
            <Badge variant="secondary" className="text-lg px-6 py-2">
              مقاوم
            </Badge>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="card-elegant hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
                <div className="relative overflow-hidden rounded-t-lg">
                  <div className="aspect-[3/4] bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <div className="text-6xl text-primary/40 group-hover:text-primary/60 transition-colors">
                      🍽️
                    </div>
                  </div>
                  {!product.inStock && (
                    <div className="absolute top-4 right-4">
                      <Badge variant="destructive">ناموجود</Badge>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                    {product.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">اندازه:</span>
                      <span className="text-sm font-medium">{product.size}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">جنس:</span>
                      <span className="text-sm font-medium">{product.material}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">ماشین ظرفشویی:</span>
                      <span className="text-sm font-medium">
                        {product.dishwasher ? '✅ بله' : '❌ خیر'}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">قیمت:</span>
                      <span className="text-lg font-bold text-primary">{product.price} تومان</span>
                    </div>
                    <Button 
                      className="w-full mt-4" 
                      disabled={!product.inStock}
                      variant={product.inStock ? "default" : "secondary"}
                    >
                      {product.inStock ? "مشاهده جزئیات" : "ناموجود"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-secondary/10">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            ویژگی‌های ظروف سرامیکی ما
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Care Instructions */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            راهنمای نگهداری
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card-elegant p-6">
                <h3 className="text-xl font-semibold mb-4 text-foreground">✅ کارهای مجاز</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• استفاده در مایکروویو</li>
                  <li>• شستشو در ماشین ظرفشویی</li>
                  <li>• استفاده در فر (تا ۲۰۰ درجه)</li>
                  <li>• شستشو با آب گرم و صابون</li>
                </ul>
              </div>
              <div className="card-elegant p-6">
                <h3 className="text-xl font-semibold mb-4 text-foreground">❌ کارهای غیرمجاز</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• استفاده مستقیم روی شعله</li>
                  <li>• تغییر ناگهانی دما</li>
                  <li>• استفاده از مواد شیمیایی قوی</li>
                  <li>• ضربه زدن یا سقوط</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-secondary/10">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 golden-text">
            ظرف مورد نظر خود را پیدا نکردید؟
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            می‌توانید ظروف اختصاصی خود را با طراحی و اندازه دلخواه سفارش دهید
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-golden text-lg px-8 py-3">
              <Link href="/custom-order">سفارش اختصاصی</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-3">
              <Link href="/contact">تماس با ما</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}