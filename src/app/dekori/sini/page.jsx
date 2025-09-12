import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const products = [
  {
    id: 1,
    title: 'سینی چوبی کلاسیک',
    description: 'سینی چوبی با طراحی کلاسیک و حکاکی دستی',
    price: '۳۲۰,۰۰۰',
    image: '/api/placeholder/300/400',
    size: '۴۰ × ۶۰ سانتی‌متر',
    material: 'چوب گردو',
    style: 'کلاسیک',
    inStock: true
  },
  {
    id: 2,
    title: 'سینی فلزی مدرن',
    description: 'سینی فلزی با طراحی مدرن و پوشش ضد زنگ',
    price: '۲۸۰,۰۰۰',
    image: '/api/placeholder/300/400',
    size: '۳۵ × ۵۵ سانتی‌متر',
    material: 'فلز ضد زنگ',
    style: 'مدرن',
    inStock: true
  },
  {
    id: 3,
    title: 'سینی سرامیکی تزئینی',
    description: 'سینی سرامیکی با نقوش سنتی و رنگ‌آمیزی دستی',
    price: '۲۵۰,۰۰۰',
    image: '/api/placeholder/300/400',
    size: '۳۰ × ۵۰ سانتی‌متر',
    material: 'سرامیک',
    style: 'سنتی',
    inStock: false
  },
  {
    id: 4,
    title: 'سینی شیشه‌ای شفاف',
    description: 'سینی شیشه‌ای شفاف با لبه‌های صیقلی',
    price: '۱۸۰,۰۰۰',
    image: '/api/placeholder/300/400',
    size: '۲۵ × ۴۵ سانتی‌متر',
    material: 'شیشه سکوریت',
    style: 'مدرن',
    inStock: true
  },
  {
    id: 5,
    title: 'سینی بامبو طبیعی',
    description: 'سینی بامبو طبیعی با بافت زیبا و مقاوم',
    price: '۱۵۰,۰۰۰',
    image: '/api/placeholder/300/400',
    size: '۳۵ × ۵۰ سانتی‌متر',
    material: 'بامبو',
    style: 'طبیعی',
    inStock: true
  },
  {
    id: 6,
    title: 'سینی مرمری لوکس',
    description: 'سینی مرمری با رگه‌های طبیعی و سطح صیقلی',
    price: '۴۵۰,۰۰۰',
    image: '/api/placeholder/300/400',
    size: '۳۰ × ۴۰ سانتی‌متر',
    material: 'مرمر طبیعی',
    style: 'لوکس',
    inStock: true
  }
];

const styles = [
  { name: 'کلاسیک', icon: '🏛️', description: 'طراحی کلاسیک و سنتی' },
  { name: 'مدرن', icon: '✨', description: 'طراحی مدرن و مینیمال' },
  { name: 'سنتی', icon: '🎨', description: 'نقوش سنتی ایرانی' },
  { name: 'طبیعی', icon: '🌿', description: 'مواد طبیعی و ارگانیک' },
  { name: 'لوکس', icon: '💎', description: 'طراحی لوکس و گران‌قیمت' }
];

export default function SiniPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center space-x-2 space-x-reverse text-sm text-muted-foreground">
          <Link href="/" className="hover:text-primary transition-colors">خانه</Link>
          <span>/</span>
          <Link href="/dekori" className="hover:text-primary transition-colors">دکوری</Link>
          <span>/</span>
          <span className="text-foreground">سینی</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in-up">
            سینی‌های دکوری
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-fade-in-up">
            مجموعه‌ای زیبا و متنوع از سینی‌های دکوری که برای پذیرایی و تزئین خانه طراحی شده‌اند. 
            هر سینی با مواد مختلف و طراحی‌های منحصر به فرد برای زیبایی و کاربرد در فضای شما ساخته شده است.
          </p>
          <div className="flex justify-center gap-4 animate-fade-in-up">
            <Badge variant="secondary" className="text-lg px-6 py-2">
              دکوری
            </Badge>
            <Badge variant="outline" className="text-lg px-6 py-2">
              پذیرایی
            </Badge>
            <Badge variant="secondary" className="text-lg px-6 py-2">
              تزئینی
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
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
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

      {/* Usage Section */}
      <section className="py-16 px-4 bg-secondary/10">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            کاربردهای سینی‌های دکوری
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-4xl mb-4">☕</div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">پذیرایی</h3>
              <p className="text-muted-foreground">
                برای سرو چای، قهوه و پذیرایی از مهمانان
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">تزئین خانه</h3>
              <p className="text-muted-foreground">
                برای تزئین و زیباسازی فضای خانه
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🎁</div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">هدیه</h3>
              <p className="text-muted-foreground">
                انتخاب عالی برای هدیه دادن به عزیزان
              </p>
            </div>
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
                <h3 className="text-xl font-semibold mb-4 text-foreground">✅ نگهداری صحیح</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• تمیز کردن با پارچه نرم و خشک</li>
                  <li>• دور نگه داشتن از رطوبت زیاد</li>
                  <li>• قرار دادن در جای خشک و خنک</li>
                  <li>• استفاده از پوشش محافظ</li>
                </ul>
              </div>
              <div className="card-elegant p-6">
                <h3 className="text-xl font-semibold mb-4 text-foreground">❌ موارد احتیاط</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• شستشو با آب داغ</li>
                  <li>• استفاده از مواد شیمیایی قوی</li>
                  <li>• قرار دادن در معرض نور مستقیم خورشید</li>
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
            سینی مورد نظر خود را پیدا نکردید؟
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            می‌توانید سینی اختصاصی خود را با طراحی و اندازه دلخواه سفارش دهید
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
