import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const products = [
  {
    id: 1,
    title: 'شمع موم عسل',
    description: 'شمع دست‌ساز با موم عسل طبیعی و رایحه اسطوخودوس',
    price: '۱۵۰,۰۰۰',
    image: '/api/placeholder/300/400',
    fragrance: 'اسطوخودوس',
    burnTime: '۴۰ ساعت',
    size: 'قطر ۸ سانتی‌متر',
    inStock: true
  },
  {
    id: 2,
    title: 'شمع سویا',
    description: 'شمع دست‌ساز با موم سویا و رایحه وانیل',
    price: '۱۸۰,۰۰۰',
    image: '/api/placeholder/300/400',
    fragrance: 'وانیل',
    burnTime: '۵۰ ساعت',
    size: 'قطر ۱۰ سانتی‌متر',
    inStock: true
  },
  {
    id: 3,
    title: 'شمع پارافین طبیعی',
    description: 'شمع دست‌ساز با پارافین طبیعی و رایحه رز',
    price: '۱۲۰,۰۰۰',
    image: '/api/placeholder/300/400',
    fragrance: 'رز',
    burnTime: '۳۵ ساعت',
    size: 'قطر ۶ سانتی‌متر',
    inStock: false
  },
  {
    id: 4,
    title: 'شمع لیمو و نعنا',
    description: 'شمع دست‌ساز با رایحه تازه لیمو و نعنا',
    price: '۱۶۰,۰۰۰',
    image: '/api/placeholder/300/400',
    fragrance: 'لیمو و نعنا',
    burnTime: '۴۵ ساعت',
    size: 'قطر ۹ سانتی‌متر',
    inStock: true
  },
  {
    id: 5,
    title: 'شمع یاسمن',
    description: 'شمع دست‌ساز با رایحه خوش یاسمن',
    price: '۲۰۰,۰۰۰',
    image: '/api/placeholder/300/400',
    fragrance: 'یاسمن',
    burnTime: '۵۵ ساعت',
    size: 'قطر ۱۲ سانتی‌متر',
    inStock: true
  },
  {
    id: 6,
    title: 'شمع چوب صندل',
    description: 'شمع دست‌ساز با رایحه آرامش‌بخش چوب صندل',
    price: '۱۷۰,۰۰۰',
    image: '/api/placeholder/300/400',
    fragrance: 'چوب صندل',
    burnTime: '۴۸ ساعت',
    size: 'قطر ۸ سانتی‌متر',
    inStock: true
  }
];

const fragrances = [
  'اسطوخودوس', 'وانیل', 'رز', 'لیمو', 'نعنا', 'یاسمن', 'چوب صندل', 'برگاموت'
];

export default function DastSazPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center space-x-2 space-x-reverse text-sm text-muted-foreground">
          <Link href="/" className="hover:text-primary transition-colors">خانه</Link>
          <span>/</span>
          <Link href="/sham-organic" className="hover:text-primary transition-colors">شمع ارگانیک</Link>
          <span>/</span>
          <span className="text-foreground">دست ساز</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in-up">
            شمع‌های دست‌ساز ارگانیک
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-fade-in-up">
            مجموعه‌ای از شمع‌های دست‌ساز که با مواد طبیعی و ارگانیک ساخته شده‌اند. 
            هر شمع با رایحه‌های خوشبو و طبیعی برای ایجاد آرامش و زیبایی در فضای شما طراحی شده است.
          </p>
          <div className="flex justify-center gap-4 animate-fade-in-up">
            <Badge variant="secondary" className="text-lg px-6 py-2">
              ارگانیک
            </Badge>
            <Badge variant="outline" className="text-lg px-6 py-2">
              دست‌ساز
            </Badge>
            <Badge variant="secondary" className="text-lg px-6 py-2">
              رایحه طبیعی
            </Badge>
          </div>
        </div>
      </section>

      {/* Fragrances Section */}
      <section className="py-8 px-4 bg-secondary/10">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8 text-foreground">
            رایحه‌های موجود
          </h2>
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

      {/* Products Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="card-elegant hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
                <div className="relative overflow-hidden rounded-t-lg">
                  <div className="aspect-[3/4] bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <div className="text-6xl text-primary/40 group-hover:text-primary/60 transition-colors">
                      🕯️
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
                      <span className="text-sm text-muted-foreground">رایحه:</span>
                      <span className="text-sm font-medium">{product.fragrance}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">زمان سوختن:</span>
                      <span className="text-sm font-medium">{product.burnTime}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">اندازه:</span>
                      <span className="text-sm font-medium">{product.size}</span>
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

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-secondary/10">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            فواید شمع‌های ارگانیک دست‌ساز
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🌿</div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">طبیعی و سالم</h3>
              <p className="text-muted-foreground">
                استفاده از مواد طبیعی و ارگانیک بدون مواد شیمیایی مضر
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">⏰</div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">سوختن طولانی</h3>
              <p className="text-muted-foreground">
                زمان سوختن طولانی‌تر نسبت به شمع‌های معمولی
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">💨</div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">دود کم</h3>
              <p className="text-muted-foreground">
                تولید دود کم و عدم ایجاد آلودگی در محیط
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 golden-text">
            شمع مورد نظر خود را پیدا نکردید؟
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            می‌توانید شمع اختصاصی خود را با رایحه و اندازه دلخواه سفارش دهید
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
