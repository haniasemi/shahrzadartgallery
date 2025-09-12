import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const products = [
  {
    id: 1,
    title: 'مجسمه فیل',
    description: 'مجسمه فیل با تکنیک پاپیه ماشه و رنگ‌آمیزی دستی',
    price: '۴۵۰,۰۰۰',
    image: '/api/placeholder/300/400',
    size: 'ارتفاع ۳۵ سانتی‌متر',
    material: 'کاغذ و چسب طبیعی',
    style: 'حیوانات',
    inStock: true
  },
  {
    id: 2,
    title: 'مجسمه پرنده',
    description: 'مجسمه پرنده با طراحی هنری و رنگ‌های زنده',
    price: '۳۲۰,۰۰۰',
    image: '/api/placeholder/300/400',
    size: 'ارتفاع ۲۵ سانتی‌متر',
    material: 'کاغذ و چسب طبیعی',
    style: 'حیوانات',
    inStock: true
  },
  {
    id: 3,
    title: 'مجسمه انسان',
    description: 'مجسمه انسان با طراحی انتزاعی و رنگ‌آمیزی هنری',
    price: '۵۸۰,۰۰۰',
    image: '/api/placeholder/300/400',
    size: 'ارتفاع ۴۰ سانتی‌متر',
    material: 'کاغذ و چسب طبیعی',
    style: 'انسانی',
    inStock: false
  },
  {
    id: 4,
    title: 'مجسمه انتزاعی',
    description: 'مجسمه انتزاعی با فرم‌های مدرن و رنگ‌های جذاب',
    price: '۳۸۰,۰۰۰',
    image: '/api/placeholder/300/400',
    size: 'ارتفاع ۳۰ سانتی‌متر',
    material: 'کاغذ و چسب طبیعی',
    style: 'انتزاعی',
    inStock: true
  },
  {
    id: 5,
    title: 'مجسمه درخت',
    description: 'مجسمه درخت با طراحی طبیعی و رنگ‌های زمینی',
    price: '۲۸۰,۰۰۰',
    image: '/api/placeholder/300/400',
    size: 'ارتفاع ۲۰ سانتی‌متر',
    material: 'کاغذ و چسب طبیعی',
    style: 'طبیعی',
    inStock: true
  },
  {
    id: 6,
    title: 'مجسمه هندسی',
    description: 'مجسمه هندسی با فرم‌های منظم و رنگ‌های متضاد',
    price: '۲۲۰,۰۰۰',
    image: '/api/placeholder/300/400',
    size: 'ارتفاع ۱۵ سانتی‌متر',
    material: 'کاغذ و چسب طبیعی',
    style: 'هندسی',
    inStock: true
  }
];

const styles = [
  { name: 'حیوانات', icon: '🐘', description: 'مجسمه‌های حیوانات' },
  { name: 'انسانی', icon: '👤', description: 'مجسمه‌های انسانی' },
  { name: 'انتزاعی', icon: '🎨', description: 'طراحی‌های انتزاعی' },
  { name: 'طبیعی', icon: '🌳', description: 'موضوعات طبیعی' },
  { name: 'هندسی', icon: '📐', description: 'فرم‌های هندسی' }
];

export default function MojassamePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center space-x-2 space-x-reverse text-sm text-muted-foreground">
          <Link href="/" className="hover:text-primary transition-colors">خانه</Link>
          <span>/</span>
          <Link href="/papier-mache" className="hover:text-primary transition-colors">پاپیه ماشه</Link>
          <span>/</span>
          <span className="text-foreground">مجسمه‌ها</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in-up">
            مجسمه‌های پاپیه ماشه
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-fade-in-up">
            مجموعه‌ای منحصر به فرد از مجسمه‌های پاپیه ماشه که با تکنیک‌های خاص و خلاقیت هنری خلق شده‌اند. 
            هر مجسمه بیانگر هنر و مهارت استادکاران ماهر ما است.
          </p>
          <div className="flex justify-center gap-4 animate-fade-in-up">
            <Badge variant="secondary" className="text-lg px-6 py-2">
              دست‌ساز
            </Badge>
            <Badge variant="outline" className="text-lg px-6 py-2">
              هنری
            </Badge>
            <Badge variant="secondary" className="text-lg px-6 py-2">
              منحصر به فرد
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
                      🎭
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

      {/* Process Section */}
      <section className="py-16 px-4 bg-secondary/10">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            فرآیند ساخت مجسمه‌های پاپیه ماشه
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="text-4xl mb-4">📰</div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">آماده‌سازی کاغذ</h3>
              <p className="text-muted-foreground">
                خرد کردن و آماده‌سازی کاغذ برای ساخت خمیر
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🥣</div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">تهیه خمیر</h3>
              <p className="text-muted-foreground">
                مخلوط کردن کاغذ با چسب طبیعی و آب
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">✋</div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">شکل‌دهی</h3>
              <p className="text-muted-foreground">
                شکل‌دهی خمیر با دست و ابزارهای مخصوص
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">تزئین و رنگ‌آمیزی</h3>
              <p className="text-muted-foreground">
                تزئین با رنگ‌های طبیعی و نقوش زیبا
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            ویژگی‌های مجسمه‌های پاپیه ماشه ما
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-4xl mb-4">♻️</div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">دوستدار محیط زیست</h3>
              <p className="text-muted-foreground">
                استفاده از مواد قابل بازیافت و سازگار با محیط زیست
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">💪</div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">مقاوم و بادوام</h3>
              <p className="text-muted-foreground">
                مقاومت بالا در برابر رطوبت و تغییرات دما
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">طراحی منحصر به فرد</h3>
              <p className="text-muted-foreground">
                هر مجسمه با طراحی خاص و منحصر به فرد ساخته می‌شود
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-secondary/10">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 golden-text">
            مجسمه مورد نظر خود را پیدا نکردید؟
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            می‌توانید مجسمه اختصاصی خود را با طراحی و اندازه دلخواه سفارش دهید
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
