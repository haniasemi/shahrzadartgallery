import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const products = [
  {
    id: 1,
    title: 'شمع گل رز دست‌ساز',
    description: 'شمع دست‌ساز به شکل گل رز با موم طبیعی و رایحه خوش گل رز',
    price: 'قیمت: به زودی',
    images: ['/shamDastSaz/1.jpg', '/shamDastSaz/2.jpg', '/shamDastSaz/3.jpg'],
    fragrance: 'گل رز',
    burnTime: '۴۵ ساعت',
    size: 'قطر ۱۰ سانتی‌متر',
    inStock: true,
    features: ['دست‌ساز', 'ارگانیک', 'معطر']
  },
  {
    id: 2,
    title: 'مجموعه شمع‌های رز',
    description: 'مجموعه زیبای شمع‌های گل رز در کاسه چوبی با رنگ‌های پاستلی',
    price: 'قیمت: به زودی',
    images: ['/shamDastSaz/4.jpg', '/shamDastSaz/5.jpg', '/shamDastSaz/6.jpg', '/shamDastSaz/7.jpg'],
    fragrance: 'گل رز و یاسمن',
    burnTime: '۵۰ ساعت',
    size: 'مجموعه کامل',
    inStock: true,
    features: ['دست‌ساز', 'ارگانیک', 'معطر', 'مجموعه']
  },
  {
    id: 3,
    title: 'شمع رز صورتی دست‌ساز',
    description: 'شمع دست‌ساز به شکل گل رز صورتی با موم طبیعی و رایحه خوش گل رز',
    price: 'قیمت: به زودی',
    images: ['/shamDastSaz/8.jpg'],
    fragrance: 'گل رز صورتی',
    burnTime: '۴۰ ساعت',
    size: 'قطر ۸ سانتی‌متر',
    inStock: true,
    features: ['دست‌ساز', 'ارگانیک', 'معطر']
  },
  {
    id: 4,
    title: 'شمع رز زرد دست‌ساز',
    description: 'شمع دست‌ساز به شکل گل رز زرد با موم طبیعی و رایحه خوش گل رز',
    price: 'قیمت: به زودی',
    images: ['/shamDastSaz/9.jpg'],
    fragrance: 'گل رز زرد',
    burnTime: '۴۲ ساعت',
    size: 'قطر ۹ سانتی‌متر',
    inStock: true,
    features: ['دست‌ساز', 'ارگانیک', 'معطر']
  },
  {
    id: 5,
    title: 'مجموعه شمع‌های رز پاستلی در کاسه',
    description: 'مجموعه زیبای شمع‌های گل رز در رنگ‌های پاستلی با موم طبیعی و رایحه خوش',
    price: 'قیمت: به زودی',
    images: ['/shamDastSaz/10.jpg', '/shamDastSaz/11.jpg'],
    fragrance: 'گل رز پاستلی',
    burnTime: '۵۵ ساعت',
    size: 'مجموعه کامل',
    inStock: true,
    features: ['دست‌ساز', 'ارگانیک', 'معطر', 'مجموعه']
  },
  {
    id: 6,
    title: 'شمع تزئینی گل‌دار در کاسه شیشه‌ای',
    description: 'شمع دست‌ساز تزئینی با گل‌های مومی و توت‌های کوچک در کاسه شیشه‌ای شفاف',
    price: 'قیمت: به زودی',
    images: ['/shamDastSaz/12.jpg', '/shamDastSaz/13.jpg'],
    fragrance: 'گل رز و توت',
    burnTime: '۶۰ ساعت',
    size: 'کاسه شیشه‌ای بزرگ',
    inStock: true,
    features: ['دست‌ساز', 'ارگانیک', 'معطر', 'تزئینی']
  },
  {
    id: 7,
    title: 'شمع رز سفید دست‌ساز در کاسه',
    description: 'شمع دست‌ساز زیبا با گل‌های رز سفید و کرم در کاسه سرامیکی آبی خاکستری',
    price: 'قیمت: به زودی',
    images: ['/shamDastSaz/14.jpg', '/shamDastSaz/15.jpg', '/shamDastSaz/16.jpg'],
    fragrance: 'گل رز سفید',
    burnTime: '۵۸ ساعت',
    size: 'کاسه سرامیکی متوسط',
    inStock: true,
    features: ['دست‌ساز', 'ارگانیک', 'معطر', 'تزئینی']
  },
  {
    id: 8,
    title: 'شمع رز نارنجی دست‌ساز در ظرف شیشه‌ای',
    description: 'شمع دست‌ساز زیبا به شکل گل رز نارنجی با گرادیان رنگی طبیعی در ظرف شیشه‌ای شفاف',
    price: 'قیمت: به زودی',
    images: ['/shamDastSaz/17.jpg', '/shamDastSaz/18.jpg', '/shamDastSaz/19.jpg', '/shamDastSaz/20.jpg'],
    fragrance: 'گل رز نارنجی',
    burnTime: '۶۵ ساعت',
    size: 'ظرف شیشه‌ای متوسط',
    inStock: true,
    features: ['دست‌ساز', 'ارگانیک', 'معطر', 'تزئینی']
  },
  {
    id: 9,
    title: 'مجموعه شمع‌های رز هلویی دست‌ساز در کاسه',
    description: 'مجموعه زیبای شمع‌های گل رز در رنگ‌های هلویی و کرم با برگ‌های سبز در کاسه سرامیکی',
    price: 'قیمت: به زودی',
    images: ['/shamDastSaz/21.jpg', '/shamDastSaz/22.jpg', '/shamDastSaz/23.jpg'],
    fragrance: 'گل رز هلویی',
    burnTime: '۶۸ ساعت',
    size: 'کاسه سرامیکی متوسط',
    inStock: true,
    features: ['دست‌ساز', 'ارگانیک', 'معطر', 'مجموعه']
  },
  {
    id: 10,
    title: 'مجموعه شمع‌های رز سالمون دست‌ساز در سینی چوبی',
    description: 'مجموعه زیبای شمع‌های گل رز در رنگ سالمون با برگ‌های سبز در سینی چوبی طبیعی',
    price: 'قیمت: به زودی',
    images: ['/shamDastSaz/24.jpg', '/shamDastSaz/25.jpg', '/shamDastSaz/26.jpg', '/shamDastSaz/27.jpg'],
    fragrance: 'گل رز سالمون',
    burnTime: '۷۰ ساعت',
    size: 'سینی چوبی متوسط',
    inStock: true,
    features: ['دست‌ساز', 'ارگانیک', 'معطر', 'مجموعه']
  }
];

const fragrances = [
  'گل رز', 'رز ملایم', 'رز تازه', 'رز و برگ', 'رز لوکس', 'یاسمن', 'اسطوخودوس', 'وانیل'
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
            شمع‌های گل رز دست‌ساز
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-fade-in-up">
            مجموعه‌ای از شمع‌های دست‌ساز به شکل گل رز که با مواد طبیعی و ارگانیک ساخته شده‌اند. 
            هر شمع با رایحه‌های خوشبو و طبیعی گل رز برای ایجاد آرامش و زیبایی در فضای شما طراحی شده است.
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
                    <img 
                      src={product.images[0]} 
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  {!product.inStock && (
                    <div className="absolute top-4 right-4">
                      <Badge variant="destructive">ناموجود</Badge>
                    </div>
                  )}
                  <div className="absolute top-4 left-4 flex flex-wrap gap-1">
                    {product.features.map((feature, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
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
                      <span className="text-sm text-muted-foreground">زمان سوختن:</span>
                      <span className="text-sm font-medium">{product.burnTime}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">اندازه:</span>
                      <span className="text-sm font-medium">{product.size}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">قیمت:</span>
                      <span className="text-lg font-bold text-primary">{product.price}</span>
                    </div>
                    <div className="flex gap-2 mt-4">
                      <Link href={`/sham-organic/dast-saz/product/${product.id}`} className="flex-1">
                        <Button 
                          className="w-full" 
                          disabled={!product.inStock}
                          variant={product.inStock ? "default" : "secondary"}
                        >
                          {product.inStock ? "مشاهده جزئیات" : "ناموجود"}
                        </Button>
                      </Link>
                      <Button 
                        className="flex-1 btn-golden" 
                        disabled={!product.inStock}
                        variant={product.inStock ? "default" : "secondary"}
                      >
                        {product.inStock ? "افزودن به سبد" : "ناموجود"}
                      </Button>
                    </div>
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
