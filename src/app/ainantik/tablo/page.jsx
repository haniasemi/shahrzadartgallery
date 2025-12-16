import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const products = [
  {
    id: 1,
    title: 'تابلو آینانتیک ۱',
    description: 'تابلوی زیبا با تکنیک آینانتیک و رنگ‌آمیزی دستی',
    price: '۲,۵۰۰,۰۰۰',
    image: '/tabloAine/photo_2025-09-06_08-47-36.jpg',
    size: '۵۰ × ۷۰ سانتی‌متر',
    material: 'چوب و رنگ طبیعی',
    inStock: true
  },
  {
    id: 2,
    title: 'تابلو آینانتیک ۲',
    description: 'تابلوی زیبا با تکنیک آینانتیک و رنگ‌آمیزی دستی',
    price: '۳,۲۰۰,۰۰۰',
    image: '/tabloAine/photo_2025-09-06_08-47-46.jpg',
    size: '۶۰ × ۸۰ سانتی‌متر',
    material: 'چوب و رنگ طبیعی',
    inStock: true
  },
  {
    id: 3,
    title: 'تابلو آینانتیک ۳',
    description: 'تابلوی زیبا با تکنیک آینانتیک و رنگ‌آمیزی دستی',
    price: '۱,۸۰۰,۰۰۰',
    image: '/tabloAine/photo_2025-09-06_08-47-48.jpg',
    size: '۴۰ × ۶۰ سانتی‌متر',
    material: 'چوب و رنگ طبیعی',
    inStock: true
  },
  {
    id: 4,
    title: 'تابلو آینانتیک ۴',
    description: 'تابلوی زیبا با تکنیک آینانتیک و رنگ‌آمیزی دستی',
    price: '۲,۸۰۰,۰۰۰',
    image: '/tabloAine/photo_2025-09-06_08-47-50.jpg',
    size: '۵۵ × ۷۵ سانتی‌متر',
    material: 'چوب و رنگ طبیعی',
    inStock: true
  },
  {
    id: 5,
    title: 'تابلو آینانتیک ۵',
    description: 'تابلوی زیبا با تکنیک آینانتیک و رنگ‌آمیزی دستی',
    price: '۳,۵۰۰,۰۰۰',
    image: '/tabloAine/photo_2025-09-06_08-47-52.jpg',
    size: '۷۰ × ۹۰ سانتی‌متر',
    material: 'چوب و رنگ طبیعی',
    inStock: true
  },
  {
    id: 6,
    title: 'تابلو آینانتیک ۶',
    description: 'تابلوی زیبا با تکنیک آینانتیک و رنگ‌آمیزی دستی',
    price: '۲,۲۰۰,۰۰۰',
    image: '/tabloAine/photo_2025-09-06_08-47-54.jpg',
    size: '۴۵ × ۶۵ سانتی‌متر',
    material: 'چوب و رنگ طبیعی',
    inStock: true
  },
  {
    id: 7,
    title: 'تابلو آینانتیک ۷',
    description: 'تابلوی زیبا با تکنیک آینانتیک و رنگ‌آمیزی دستی',
    price: '۲,۶۰۰,۰۰۰',
    image: '/tabloAine/photo_2025-09-06_08-48-30.jpg',
    size: '۵۰ × ۷۰ سانتی‌متر',
    material: 'چوب و رنگ طبیعی',
    inStock: true
  },
  {
    id: 8,
    title: 'تابلو آینانتیک ۸',
    description: 'تابلوی زیبا با تکنیک آینانتیک و رنگ‌آمیزی دستی',
    price: '۳,۰۰۰,۰۰۰',
    image: '/tabloAine/photo_2025-09-06_08-48-32.jpg',
    size: '۶۰ × ۸۰ سانتی‌متر',
    material: 'چوب و رنگ طبیعی',
    inStock: true
  },
  {
    id: 9,
    title: 'تابلو آینانتیک ۹',
    description: 'تابلوی زیبا با تکنیک آینانتیک و رنگ‌آمیزی دستی',
    price: '۲,۴۰۰,۰۰۰',
    image: '/tabloAine/photo_2025-09-06_08-48-34.jpg',
    size: '۵۵ × ۷۵ سانتی‌متر',
    material: 'چوب و رنگ طبیعی',
    inStock: true
  },
  {
    id: 10,
    title: 'تابلو آینانتیک ۱۰',
    description: 'تابلوی زیبا با تکنیک آینانتیک و رنگ‌آمیزی دستی',
    price: '۳,۳۰۰,۰۰۰',
    image: '/tabloAine/photo_2025-09-06_08-48-37.jpg',
    size: '۶۵ × ۸۵ سانتی‌متر',
    material: 'چوب و رنگ طبیعی',
    inStock: true
  },
  {
    id: 11,
    title: 'تابلو آینانتیک ۱۱',
    description: 'تابلوی زیبا با تکنیک آینانتیک و رنگ‌آمیزی دستی',
    price: '۲,۹۰۰,۰۰۰',
    image: '/tabloAine/photo_2025-09-06_08-48-39.jpg',
    size: '۵۸ × ۷۸ سانتی‌متر',
    material: 'چوب و رنگ طبیعی',
    inStock: true
  },
  {
    id: 12,
    title: 'تابلو آینانتیک ۱۲',
    description: 'تابلوی زیبا با تکنیک آینانتیک و رنگ‌آمیزی دستی',
    price: '۳,۶۰۰,۰۰۰',
    image: '/tabloAine/photo_2025-09-06_08-48-41.jpg',
    size: '۷۵ × ۹۵ سانتی‌متر',
    material: 'چوب و رنگ طبیعی',
    inStock: true
  }
];

export default function TabloPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center space-x-2 space-x-reverse text-sm text-muted-foreground">
          <Link href="/" className="hover:text-primary transition-colors">خانه</Link>
          <span>/</span>
          <Link href="/ainantik" className="hover:text-primary transition-colors">آینانتیک</Link>
          <span>/</span>
          <span className="text-foreground">تابلو</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in-up">
            تابلوهای آینانتیک
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-fade-in-up">
            مجموعه‌ای منحصر به فرد از تابلوهای آینانتیک دست‌ساز که با تکنیک‌های خاص و رنگ‌آمیزی هنری خلق شده‌اند. 
            هر تابلو بیانگر هنر و خلاقیت استادکاران ماهر ما است.
          </p>
          <div className="flex justify-center gap-4 animate-fade-in-up">
            <Badge variant="secondary" className="text-lg px-6 py-2">
              دست‌ساز
            </Badge>
            <Badge variant="outline" className="text-lg px-6 py-2">
              رنگ طبیعی
            </Badge>
            <Badge variant="secondary" className="text-lg px-6 py-2">
              کیفیت بالا
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
                  <div className="aspect-[3/4] relative bg-gradient-to-br from-primary/20 to-secondary/20">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  {!product.inStock && (
                    <div className="absolute top-4 right-4 z-10">
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
            ویژگی‌های تابلوهای آینانتیک ما
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">رنگ‌آمیزی دستی</h3>
              <p className="text-muted-foreground">
                هر تابلو با رنگ‌های طبیعی و دستی رنگ‌آمیزی می‌شود
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🖼️</div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">طراحی منحصر به فرد</h3>
              <p className="text-muted-foreground">
                هر تابلو دارای طراحی خاص و منحصر به فرد است
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🏆</div>
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
            تابلو مورد نظر خود را پیدا نکردید؟
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            می‌توانید تابلو اختصاصی خود را با طراحی و اندازه دلخواه سفارش دهید
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
