import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const products = [
  {
    id: 1,
    title: 'گلدان سرامیکی کلاسیک',
    description: 'گلدان سرامیکی با طراحی کلاسیک و لعاب محافظ',
    price: '۳۲۰,۰۰۰',
    image: '/goldan/photo_2025-09-06_08-48-14.jpg',
    size: 'ارتفاع ۳۰ سانتی‌متر',
    material: 'سرامیک با لعاب',
    style: 'کلاسیک',
    inStock: true
  },
  {
    id: 2,
    title: 'گلدان فلزی مدرن',
    description: 'گلدان فلزی با طراحی مدرن و پوشش ضد زنگ',
    price: '۴۵۰,۰۰۰',
    image: '/goldan/photo_2025-09-06_08-48-17.jpg',
    size: 'ارتفاع ۳۵ سانتی‌متر',
    material: 'فلز ضد زنگ',
    style: 'مدرن',
    inStock: true
  },
  {
    id: 3,
    title: 'گلدان شیشه‌ای شفاف',
    description: 'گلدان شیشه‌ای شفاف با طراحی زیبا و کاربردی',
    price: '۲۸۰,۰۰۰',
    image: '/goldan/photo_2025-09-06_08-48-20.jpg',
    size: 'ارتفاع ۲۵ سانتی‌متر',
    material: 'شیشه سکوریت',
    style: 'مدرن',
    inStock: true
  },
  {
    id: 4,
    title: 'گلدان چوبی طبیعی',
    description: 'گلدان چوبی با طراحی طبیعی و بافت زیبا',
    price: '۳۸۰,۰۰۰',
    image: '/goldan/photo_2025-09-06_08-48-22.jpg',
    size: 'ارتفاع ۲۸ سانتی‌متر',
    material: 'چوب طبیعی',
    style: 'طبیعی',
    inStock: true
  },
  {
    id: 5,
    title: 'گلدان سنگی لوکس',
    description: 'گلدان سنگی با طراحی لوکس و بافت طبیعی',
    price: '۶۵۰,۰۰۰',
    image: '/goldan/photo_2025-09-06_08-48-25.jpg',
    size: 'ارتفاع ۴۰ سانتی‌متر',
    material: 'سنگ طبیعی',
    style: 'لوکس',
    inStock: true
  }
];

const styles = [
  { name: 'کلاسیک', icon: '🏛️', description: 'طراحی کلاسیک و سنتی' },
  { name: 'مدرن', icon: '✨', description: 'طراحی مدرن و مینیمال' },
  { name: 'طبیعی', icon: '🌿', description: 'مواد طبیعی و ارگانیک' },
  { name: 'لوکس', icon: '💎', description: 'طراحی لوکس و گران‌قیمت' }
];

export default function GoldanPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center space-x-2 space-x-reverse text-sm text-muted-foreground">
          <Link href="/" className="hover:text-primary transition-colors">خانه</Link>
          <span>/</span>
          <Link href="/dekori" className="hover:text-primary transition-colors">دکوری</Link>
          <span>/</span>
          <span className="text-foreground">گلدان</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in-up">
            گلدان‌های دکوری
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-fade-in-up">
            مجموعه‌ای زیبا و متنوع از گلدان‌های دکوری که برای نگهداری گل و گیاه طراحی شده‌اند. 
            هر گلدان با مواد مختلف و طراحی‌های منحصر به فرد برای زیبایی و کاربرد در فضای شما ساخته شده است.
          </p>
          <div className="flex justify-center gap-4 animate-fade-in-up">
            <Badge variant="secondary" className="text-lg px-6 py-2">
              دکوری
            </Badge>
            <Badge variant="outline" className="text-lg px-6 py-2">
              کاربردی
            </Badge>
            <Badge variant="secondary" className="text-lg px-6 py-2">
              زیبا
            </Badge>
          </div>
        </div>
      </section>

      {/* Styles Section */}
      <section className="py-8 px-4 bg-secondary/10">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8 text-foreground">
            سبک‌های طراحی
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {styles.map((style) => (
              <div key={style.name} className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-2xl mb-2">{style.icon}</div>
                <h3 className="text-sm font-medium mb-1">{style.name}</h3>
                <p className="text-xs text-muted-foreground">{style.description}</p>
              </div>
            ))}
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
                  <div className="aspect-[3/4] relative">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  {!product.inStock && (
                    <div className="absolute top-4 right-4">
                      <Badge variant="destructive">ناموجود</Badge>
                    </div>
                  )}
                  <div className="absolute top-4 left-4">
                    <Badge variant="outline" className="text-xs">
                      {product.style}
                    </Badge>
                  </div>
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
                      <span className="text-sm text-muted-foreground">سبک:</span>
                      <span className="text-sm font-medium">{product.style}</span>
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
            ویژگی‌های گلدان‌های دکوری ما
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">مناسب برای گیاهان</h3>
              <p className="text-muted-foreground">
                طراحی شده برای نگهداری انواع گیاهان و گل‌ها
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">سازگار با محیط</h3>
              <p className="text-muted-foreground">
                محصولاتی که با هر نوع دکوراسیون و فضای خانه سازگار هستند
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">💎</div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">کیفیت ممتاز</h3>
              <p className="text-muted-foreground">
                استفاده از بهترین مواد اولیه و تکنیک‌های پیشرفته
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 golden-text">
            گلدان مورد نظر خود را پیدا نکردید؟
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            می‌توانید گلدان اختصاصی خود را با طراحی و اندازه دلخواه سفارش دهید
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
