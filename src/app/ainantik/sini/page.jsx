import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const products = [
  {
    id: 1,
    title: 'سینی آینانتیک ۱',
    description: 'سینی آینانتیک زیبا با تکنیک خاص و رنگ‌آمیزی دستی',
    price: '۱,۲۰۰,۰۰۰',
    image: '/goldan/photo_2025-09-06_08-48-14.jpg',
    size: '۵۰ × ۷۰ سانتی‌متر',
    material: 'چوب و رنگ طبیعی',
    style: 'آینانتیک',
    inStock: true
  },
  {
    id: 2,
    title: 'سینی آینانتیک ۲',
    description: 'سینی آینانتیک زیبا با تکنیک خاص و رنگ‌آمیزی دستی',
    price: '۱,۳۵۰,۰۰۰',
    image: '/goldan/photo_2025-09-06_08-48-17.jpg',
    size: '۵۵ × ۷۵ سانتی‌متر',
    material: 'چوب و رنگ طبیعی',
    style: 'آینانتیک',
    inStock: true
  },
  {
    id: 3,
    title: 'سینی آینانتیک ۳',
    description: 'سینی آینانتیک زیبا با تکنیک خاص و رنگ‌آمیزی دستی',
    price: '۱,۱۰۰,۰۰۰',
    image: '/goldan/photo_2025-09-06_08-48-20.jpg',
    size: '۴۵ × ۶۵ سانتی‌متر',
    material: 'چوب و رنگ طبیعی',
    style: 'آینانتیک',
    inStock: true
  },
  {
    id: 4,
    title: 'سینی آینانتیک ۴',
    description: 'سینی آینانتیک زیبا با تکنیک خاص و رنگ‌آمیزی دستی',
    price: '۱,۴۰۰,۰۰۰',
    image: '/goldan/photo_2025-09-06_08-48-22.jpg',
    size: '۶۰ × ۸۰ سانتی‌متر',
    material: 'چوب و رنگ طبیعی',
    style: 'آینانتیک',
    inStock: true
  },
  {
    id: 5,
    title: 'سینی آینانتیک ۵',
    description: 'سینی آینانتیک زیبا با تکنیک خاص و رنگ‌آمیزی دستی',
    price: '۱,۵۰۰,۰۰۰',
    image: '/goldan/photo_2025-09-06_08-48-25.jpg',
    size: '۶۵ × ۸۵ سانتی‌متر',
    material: 'چوب و رنگ طبیعی',
    style: 'آینانتیک',
    inStock: true
  }
];

export default function SiniAinePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center space-x-2 space-x-reverse text-sm text-muted-foreground">
          <Link href="/" className="hover:text-primary transition-colors">خانه</Link>
          <span>/</span>
          <Link href="/ainantik" className="hover:text-primary transition-colors">آینانتیک</Link>
          <span>/</span>
          <span className="text-foreground">سینی</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in-up">
            سینی‌های آینانتیک
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-fade-in-up">
            مجموعه‌ای منحصر به فرد از سینی‌های آینانتیک دست‌ساز که با تکنیک‌های خاص و رنگ‌آمیزی هنری خلق شده‌اند. 
            هر سینی بیانگر هنر و خلاقیت استادکاران ماهر ما است.
          </p>
          <div className="flex justify-center gap-4 animate-fade-in-up">
            <Badge variant="secondary" className="text-lg px-6 py-2">
              دست‌ساز
            </Badge>
            <Badge variant="outline" className="text-lg px-6 py-2">
              آینانتیک
            </Badge>
            <Badge variant="secondary" className="text-lg px-6 py-2">
              رنگ طبیعی
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

      {/* CTA Section */}
      <section className="py-16 px-4">
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

