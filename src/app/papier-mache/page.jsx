import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function PapierMachePage() {
  const products = [
    {
      title: 'مجسمه‌های پاپیه ماشه',
      description: 'مجسمه‌های زیبا و منحصر به فرد ساخته شده با تکنیک پاپیه ماشه',
      image: '/api/placeholder/300/300',
      items: ['مجسمه حیوانات', 'مجسمه انسانی', 'مجسمه انتزاعی']
    },
    {
      title: 'ظروف پاپیه ماشه',
      description: 'ظروف کاربردی و زیبا با طراحی‌های هنری',
      image: '/api/placeholder/300/300',
      items: ['کاسه', 'لیوان', 'سینی', 'جعبه']
    },
    {
      title: 'آثار دکوری',
      description: 'آثار دکوری زیبا برای تزئین خانه و محیط کار',
      image: '/api/placeholder/300/300',
      items: ['آینه قاب', 'قاب عکس', 'دیوارکوب', 'ساعت']
    },
    {
      title: 'هدایای خاص',
      description: 'هدایای منحصر به فرد و خاص برای مناسبت‌های مختلف',
      image: '/api/placeholder/300/300',
      items: ['باکس هدیه', 'جعبه جواهرات', 'قلم‌دان', 'کتاب']
    }
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 golden-text">
            پاپیه ماشه
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            هنر پاپیه ماشه یکی از قدیمی‌ترین و زیباترین هنرهای دستی است که با استفاده از کاغذ و چسب، 
            آثار هنری منحصر به فردی خلق می‌شود. هر قطعه بیانگر خلاقیت و مهارت استادکاران ما است.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {products.map((product) => (
            <Card key={product.title} className="card-elegant group cursor-pointer">
              <CardContent className="p-0">
                <div className="aspect-square bg-gradient-to-br from-secondary to-primary/20 rounded-t-lg flex items-center justify-center">
                  <span className="text-6xl opacity-50">📄</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {product.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {product.items.map((item) => (
                      <span key={item} className="text-xs bg-secondary px-2 py-1 rounded">
                        {item}
                      </span>
                    ))}
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    <Link href="/custom-order">سفارش اختصاصی</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Section */}
        <section className="py-16 bg-secondary/30 rounded-lg mb-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6 golden-text">
                فرآیند ساخت پاپیه ماشه
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                مراحل ساخت آثار پاپیه ماشه با دقت و ظرافت خاصی انجام می‌شود
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 golden-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📰</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">آماده‌سازی کاغذ</h3>
                <p className="text-sm text-muted-foreground">
                  خرد کردن و آماده‌سازی کاغذ برای ساخت خمیر
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 golden-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🥣</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">تهیه خمیر</h3>
                <p className="text-sm text-muted-foreground">
                  مخلوط کردن کاغذ با چسب طبیعی و آب
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 golden-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✋</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">شکل‌دهی</h3>
                <p className="text-sm text-muted-foreground">
                  شکل‌دهی خمیر با دست و ابزارهای مخصوص
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 golden-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎨</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">تزئین و رنگ‌آمیزی</h3>
                <p className="text-sm text-muted-foreground">
                  تزئین با رنگ‌های طبیعی و نقوش زیبا
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 mb-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6 golden-text">
                ویژگی‌های آثار پاپیه ماشه ما
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 golden-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">♻️</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">دوستدار محیط زیست</h3>
                <p className="text-sm text-muted-foreground">
                  استفاده از مواد قابل بازیافت و سازگار با محیط زیست
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 golden-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💪</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">مقاوم و بادوام</h3>
                <p className="text-sm text-muted-foreground">
                  مقاومت بالا در برابر رطوبت و تغییرات دما
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 golden-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎨</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">طراحی منحصر به فرد</h3>
                <p className="text-sm text-muted-foreground">
                  هر قطعه با طراحی خاص و منحصر به فرد ساخته می‌شود
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 golden-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💰</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">قیمت مناسب</h3>
                <p className="text-sm text-muted-foreground">
                  قیمت‌های مناسب و مقرون به صرفه برای همه
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* History Section */}
        <section className="py-16 bg-secondary/30 rounded-lg mb-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6 golden-text">
                تاریخچه پاپیه ماشه
              </h2>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl text-primary">🏛️</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">ریشه تاریخی</h3>
                  <p className="text-sm text-muted-foreground">
                    پاپیه ماشه از قرن دوم میلادی در چین آغاز شد و سپس به سایر کشورها گسترش یافت
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl text-primary">🇮🇷</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">در ایران</h3>
                  <p className="text-sm text-muted-foreground">
                    این هنر در ایران با نام "کاغذبری" شناخته می‌شود و سابقه‌ای طولانی دارد
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-6 golden-text">
            آماده سفارش اثر پاپیه ماشه خود هستید؟
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            با تیم متخصص ما تماس بگیرید و اثر منحصر به فرد خود را سفارش دهید
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-golden text-lg px-8 py-3">
              <Link href="/custom-order">سفارش اختصاصی</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-3">
              <Link href="/contact">تماس با ما</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
