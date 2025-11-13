import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const products = [
  {
    id: 1,
    title: 'سینی هفت سین کلاسیک',
    description: 'سینی هفت سین با طراحی کلاسیک و نقوش سنتی ایرانی',
    price: '۱,۲۰۰,۰۰۰',
    image: '/haftSin/photo_1_2025-09-06_08-47-07.jpg',
    size: '۵۰ × ۷۰ سانتی‌متر',
    material: 'سرامیک با لعاب',
    style: 'کلاسیک',
    inStock: true
  },
  {
    id: 2,
    title: 'سبزه‌دان سرامیکی',
    description: 'سبزه‌دان سرامیکی با طراحی زیبا و کاربردی',
    price: '۳۵۰,۰۰۰',
    image: '/haftSin/photo_2_2025-09-06_08-47-07.jpg',
    size: 'قطر ۲۰ سانتی‌متر',
    material: 'سرامیک با لعاب',
    style: 'سنتی',
    inStock: true
  },
  {
    id: 3,
    title: 'سنجد دان',
    description: 'سنجد دان با طراحی سنتی و رنگ‌آمیزی دستی',
    price: '۲۸۰,۰۰۰',
    image: '/haftSin/photo_3_2025-09-06_08-47-07.jpg',
    size: 'قطر ۱۵ سانتی‌متر',
    material: 'سرامیک با لعاب',
    style: 'سنتی',
    inStock: true
  },
  {
    id: 4,
    title: 'مجموعه کامل هفت سین',
    description: 'مجموعه کامل هفت سین شامل تمامی اجزای مورد نیاز',
    price: '۲,۵۰۰,۰۰۰',
    image: '/haftSin/photo_6_2025-09-06_08-47-07.jpg',
    size: 'مجموعه کامل',
    material: 'سرامیک با لعاب',
    style: 'کلاسیک',
    inStock: true
  }
];

const haftSinItems = [
  { name: 'سبزه', symbol: '🌱', description: 'نماد رشد و زندگی' },
  { name: 'سنجد', symbol: '🌿', description: 'نماد عشق و محبت' },
  { name: 'سمنو', symbol: '🌾', description: 'نماد قدرت و عدالت' },
  { name: 'سیر', symbol: '🧄', description: 'نماد درمان و سلامت' },
  { name: 'سکه', symbol: '🪙', description: 'نماد ثروت و برکت' },
  { name: 'سرکه', symbol: '🍶', description: 'نماد صبر و شکیبایی' },
  { name: 'سیب', symbol: '🍎', description: 'نماد زیبایی و سلامتی' }
];

export default function HaftSinPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center space-x-2 space-x-reverse text-sm text-muted-foreground">
          <Link href="/" className="hover:text-primary transition-colors">خانه</Link>
          <span>/</span>
          <Link href="/zoroof-seramiki" className="hover:text-primary transition-colors">ظروف سرامیکی</Link>
          <span>/</span>
          <span className="text-foreground">هفت سین</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in-up">
            هفت سین سرامیکی
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-fade-in-up">
            مجموعه‌ای زیبا و سنتی از هفت سین سرامیکی که برای جشن نوروز طراحی شده‌اند. 
            هر قطعه با دقت و ظرافت خاصی ساخته شده تا زیبایی و معنویت را به خانه شما بیاورد.
          </p>
          <div className="flex justify-center gap-4 animate-fade-in-up">
            <Badge variant="secondary" className="text-lg px-6 py-2">
              سنتی
            </Badge>
            <Badge variant="outline" className="text-lg px-6 py-2">
              نوروزی
            </Badge>
            <Badge variant="secondary" className="text-lg px-6 py-2">
              معنوی
            </Badge>
          </div>
        </div>
      </section>

      {/* Haft Sin Items Section */}
      <section className="py-8 px-4 bg-secondary/10">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8 text-foreground">
            اجزای هفت سین
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {haftSinItems.map((item) => (
              <div key={item.name} className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-3xl mb-2">{item.symbol}</div>
                <h3 className="text-sm font-medium mb-1">{item.name}</h3>
                <p className="text-xs text-muted-foreground">{item.description}</p>
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

      {/* Meaning Section */}
      <section className="py-16 px-4 bg-secondary/10">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            معنای هفت سین
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="card-elegant p-8">
              <p className="text-lg text-muted-foreground leading-relaxed text-center">
                هفت سین یکی از مهم‌ترین سنت‌های نوروزی است که هر کدام از اجزای آن نماد و معنای خاصی دارد. 
                این سنت زیبا که از گذشته‌های دور در فرهنگ ایرانی وجود داشته، 
                نماد امید، رشد، برکت و شادی است و هر سال در آغاز بهار، 
                خانه‌های ایرانی را با زیبایی و معنویت خاصی آراسته می‌کند.
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
            هفت سین مورد نظر خود را پیدا نکردید؟
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            می‌توانید هفت سین اختصاصی خود را با طراحی و اندازه دلخواه سفارش دهید
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
