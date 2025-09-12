import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const products = [
  {
    id: 1,
    title: 'شمع عروسی',
    description: 'شمع عروسی با رایحه رز و طراحی لوکس',
    price: '۲۵۰,۰۰۰',
    image: '/api/placeholder/300/400',
    fragrance: 'رز',
    occasion: 'عروسی',
    burnTime: '۶۰ ساعت',
    inStock: true
  },
  {
    id: 2,
    title: 'شمع تولد',
    description: 'شمع تولد با رایحه وانیل و رنگ‌های شاد',
    price: '۱۸۰,۰۰۰',
    image: '/api/placeholder/300/400',
    fragrance: 'وانیل',
    occasion: 'تولد',
    burnTime: '۴۵ ساعت',
    inStock: true
  },
  {
    id: 3,
    title: 'شمع کریسمس',
    description: 'شمع کریسمس با رایحه دارچین و طراحی فصلی',
    price: '۲۲۰,۰۰۰',
    image: '/api/placeholder/300/400',
    fragrance: 'دارچین',
    occasion: 'کریسمس',
    burnTime: '۵۰ ساعت',
    inStock: false
  },
  {
    id: 4,
    title: 'شمع نوروز',
    description: 'شمع نوروز با رایحه یاسمن و طراحی سنتی',
    price: '۲۰۰,۰۰۰',
    image: '/api/placeholder/300/400',
    fragrance: 'یاسمن',
    occasion: 'نوروز',
    burnTime: '۴۸ ساعت',
    inStock: true
  },
  {
    id: 5,
    title: 'شمع ولنتاین',
    description: 'شمع ولنتاین با رایحه رز و طراحی رمانتیک',
    price: '۲۸۰,۰۰۰',
    image: '/api/placeholder/300/400',
    fragrance: 'رز',
    occasion: 'ولنتاین',
    burnTime: '۵۵ ساعت',
    inStock: true
  },
  {
    id: 6,
    title: 'شمع مادر',
    description: 'شمع مادر با رایحه اسطوخودوس و طراحی زیبا',
    price: '۱۹۰,۰۰۰',
    image: '/api/placeholder/300/400',
    fragrance: 'اسطوخودوس',
    occasion: 'روز مادر',
    burnTime: '۴۲ ساعت',
    inStock: true
  }
];

const occasions = [
  { name: 'عروسی', icon: '💒', description: 'شمع‌های عروسی' },
  { name: 'تولد', icon: '🎂', description: 'شمع‌های تولد' },
  { name: 'کریسمس', icon: '🎄', description: 'شمع‌های کریسمس' },
  { name: 'نوروز', icon: '🌸', description: 'شمع‌های نوروزی' },
  { name: 'ولنتاین', icon: '💕', description: 'شمع‌های ولنتاین' },
  { name: 'روز مادر', icon: '👩‍👧‍👦', description: 'شمع‌های روز مادر' }
];

export default function MonasebatiPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center space-x-2 space-x-reverse text-sm text-muted-foreground">
          <Link href="/" className="hover:text-primary transition-colors">خانه</Link>
          <span>/</span>
          <Link href="/sham-organic" className="hover:text-primary transition-colors">شمع ارگانیک</Link>
          <span>/</span>
          <span className="text-foreground">شمع مناسبتی</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in-up">
            شمع‌های مناسبتی
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-fade-in-up">
            مجموعه‌ای از شمع‌های مناسبتی که برای مناسبت‌های خاص طراحی شده‌اند. 
            هر شمع با رایحه‌های خوشبو و طراحی‌های زیبا برای ایجاد خاطرات به یاد ماندنی ساخته شده است.
          </p>
          <div className="flex justify-center gap-4 animate-fade-in-up">
            <Badge variant="secondary" className="text-lg px-6 py-2">
              مناسبتی
            </Badge>
            <Badge variant="outline" className="text-lg px-6 py-2">
              رایحه خوش
            </Badge>
            <Badge variant="secondary" className="text-lg px-6 py-2">
              طراحی زیبا
            </Badge>
          </div>
        </div>
      </section>

      {/* Occasions Section */}
      <section className="py-8 px-4 bg-secondary/10">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8 text-foreground">
            مناسبت‌های مختلف
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {occasions.map((occasion) => (
              <div key={occasion.name} className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-2xl mb-2">{occasion.icon}</div>
                <h3 className="text-sm font-medium mb-1">{occasion.name}</h3>
                <p className="text-xs text-muted-foreground">{occasion.description}</p>
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
                  <div className="absolute top-4 left-4">
                    <Badge variant="outline" className="text-xs">
                      {product.occasion}
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
                      <span className="text-sm text-muted-foreground">رایحه:</span>
                      <span className="text-sm font-medium">{product.fragrance}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">مناسبت:</span>
                      <span className="text-sm font-medium">{product.occasion}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">زمان سوختن:</span>
                      <span className="text-sm font-medium">{product.burnTime}</span>
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
            فواید شمع‌های مناسبتی
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🎉</div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">ایجاد فضای خاص</h3>
              <p className="text-muted-foreground">
                ایجاد فضای خاص و به یاد ماندنی برای مناسبت‌های مهم
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">💝</div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">هدیه مناسب</h3>
              <p className="text-muted-foreground">
                انتخاب عالی برای هدیه دادن در مناسبت‌های مختلف
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">😌</div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">آرامش و ریلکسیشن</h3>
              <p className="text-muted-foreground">
                رایحه‌های طبیعی باعث آرامش و کاهش استرس می‌شوند
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 golden-text">
            شمع مناسبتی مورد نظر خود را پیدا نکردید؟
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            می‌توانید شمع مناسبتی اختصاصی خود را با رایحه و طراحی دلخواه سفارش دهید
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
