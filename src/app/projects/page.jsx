import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function ProjectsPage() {
  const projects = [
    {
      title: 'پروژه هتل لوکس تهران',
      description: 'طراحی و ساخت مجموعه کامل آینانتیک برای هتل ۵ ستاره در تهران',
      category: 'هتل و اقامتگاه',
      year: '۱۴۰۲',
      image: '/api/placeholder/400/300',
      items: ['تابلوهای دیواری', 'میزهای پذیرایی', 'آباژورهای کلاسیک', 'ساعت‌های دیواری']
    },
    {
      title: 'رستوران سنتی اصفهان',
      description: 'طراحی دکوراسیون کامل رستوران با استفاده از آینانتیک ایرانی',
      category: 'رستوران',
      year: '۱۴۰۱',
      image: '/api/placeholder/400/300',
      items: ['سینی‌های پذیرایی', 'میزهای ناهارخوری', 'آباژورهای سنتی', 'تابلوهای هنری']
    },
    {
      title: 'ویلای شخصی شمال',
      description: 'طراحی و اجرای دکوراسیون کامل ویلای شخصی در شمال کشور',
      category: 'مسکونی',
      year: '۱۴۰۰',
      image: '/api/placeholder/400/300',
      items: ['مجموعه کامل مبلمان', 'آثار دکوری', 'نورپردازی', 'تابلوهای اختصاصی']
    },
    {
      title: 'دفتر کار شرکت نفت',
      description: 'طراحی دکوراسیون دفتر کار با استفاده از آینانتیک مدرن',
      category: 'اداری',
      year: '۱۳۹۹',
      image: '/api/placeholder/400/300',
      items: ['میزهای کنسول', 'تابلوهای دیواری', 'آباژورهای مدرن', 'ساعت‌های اداری']
    },
    {
      title: 'کافه بوتیک تهران',
      description: 'طراحی فضای کافه با ترکیب آینانتیک کلاسیک و مدرن',
      category: 'کافه',
      year: '۱۳۹۸',
      image: '/api/placeholder/400/300',
      items: ['میزهای کافه', 'آباژورهای دکوری', 'تابلوهای هنری', 'سینی‌های پذیرایی']
    },
    {
      title: 'مجتمع تجاری کرج',
      description: 'طراحی دکوراسیون عمومی مجتمع تجاری با آینانتیک لوکس',
      category: 'تجاری',
      year: '۱۳۹۷',
      image: '/api/placeholder/400/300',
      items: ['تابلوهای بزرگ', 'آباژورهای لوکس', 'میزهای پذیرایی', 'ساعت‌های دیواری']
    }
  ];

  const categories = ['همه', 'هتل و اقامتگاه', 'رستوران', 'مسکونی', 'اداری', 'کافه', 'تجاری'];

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 golden-text">
            پروژه‌های آینانتیک
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            مجموعه‌ای از پروژه‌های موفق ما که با استفاده از آینانتیک و آثار هنری دست‌ساز اجرا شده‌اند. 
            هر پروژه بیانگر تخصص و تجربه تیم ما در زمینه طراحی و اجرای دکوراسیون است.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === 'همه' ? 'default' : 'outline'}
              className={category === 'همه' ? 'btn-golden' : ''}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project) => (
            <Card key={project.title} className="card-elegant group cursor-pointer">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-secondary to-primary/20 rounded-t-lg flex items-center justify-center">
                  <span className="text-6xl opacity-50">🏺</span>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-sm text-muted-foreground bg-secondary px-2 py-1 rounded">
                      {project.year}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">
                      {project.category}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.items.slice(0, 2).map((item) => (
                      <span key={item} className="text-xs bg-secondary px-2 py-1 rounded">
                        {item}
                      </span>
                    ))}
                    {project.items.length > 2 && (
                      <span className="text-xs text-muted-foreground">
                        +{project.items.length - 2} بیشتر
                      </span>
                    )}
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    <Link href="/contact">مشاهده جزئیات</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Statistics Section */}
        <section className="py-16 bg-secondary/30 rounded-lg mb-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6 golden-text">
                آمار پروژه‌های ما
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 golden-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-black">۵۰+</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">پروژه موفق</h3>
                <p className="text-sm text-muted-foreground">
                  بیش از ۵۰ پروژه موفق در سراسر کشور
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 golden-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-black">۱۰+</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">سال تجربه</h3>
                <p className="text-sm text-muted-foreground">
                  بیش از ۱۰ سال تجربه در زمینه آینانتیک
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 golden-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-black">۱۰۰%</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">رضایت مشتری</h3>
                <p className="text-sm text-muted-foreground">
                  رضایت کامل مشتریان از کیفیت کار
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 golden-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-black">۲۴/۷</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">پشتیبانی</h3>
                <p className="text-sm text-muted-foreground">
                  پشتیبانی ۲۴ ساعته برای مشتریان
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 mb-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6 golden-text">
                فرآیند اجرای پروژه
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-primary">1️⃣</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">مشاوره و طراحی</h3>
                <p className="text-sm text-muted-foreground">
                  مشاوره تخصصی و طراحی اولیه پروژه
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-primary">2️⃣</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">تولید و ساخت</h3>
                <p className="text-sm text-muted-foreground">
                  تولید محصولات با بهترین کیفیت
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-primary">3️⃣</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">نصب و راه‌اندازی</h3>
                <p className="text-sm text-muted-foreground">
                  نصب حرفه‌ای و راه‌اندازی کامل
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-primary">4️⃣</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">پشتیبانی و نگهداری</h3>
                <p className="text-sm text-muted-foreground">
                  پشتیبانی کامل و خدمات نگهداری
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-6 golden-text">
            آماده شروع پروژه خود هستید؟
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            با تیم متخصص ما تماس بگیرید و پروژه منحصر به فرد خود را شروع کنید
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-golden text-lg px-8 py-3">
              <Link href="/contact">شروع پروژه</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-3">
              <Link href="/custom-order">مشاوره رایگان</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
