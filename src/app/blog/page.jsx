import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function BlogPage() {
  const blogPosts = [
    {
      title: 'هنر آینانتیک: از گذشته تا امروز',
      excerpt: 'آینانتیک یکی از زیباترین هنرهای دستی ایرانی است که ریشه در تاریخ و فرهنگ ما دارد...',
      author: 'شهرزاد احمدی',
      date: '۱۴۰۳/۰۱/۱۵',
      category: 'آینانتیک',
      readTime: '۵ دقیقه',
      image: '/api/placeholder/400/250',
      slug: 'ainantik-art-history'
    },
    {
      title: 'راهنمای انتخاب ظروف سرامیکی مناسب',
      excerpt: 'انتخاب ظروف سرامیکی مناسب برای خانه شما می‌تواند تأثیر زیادی بر زیبایی و عملکرد آشپزخانه داشته باشد...',
      author: 'علی رضایی',
      date: '۱۴۰۳/۰۱/۱۰',
      category: 'ظروف سرامیکی',
      readTime: '۷ دقیقه',
      image: '/api/placeholder/400/250',
      slug: 'ceramic-ware-selection-guide'
    },
    {
      title: 'فواید شمع‌های ارگانیک برای سلامتی',
      excerpt: 'شمع‌های ارگانیک نه تنها زیبا هستند، بلکه فواید زیادی برای سلامتی و آرامش شما دارند...',
      author: 'فاطمه محمدی',
      date: '۱۴۰۳/۰۱/۰۵',
      category: 'شمع ارگانیک',
      readTime: '۶ دقیقه',
      image: '/api/placeholder/400/250',
      slug: 'organic-candles-health-benefits'
    },
    {
      title: 'تکنیک‌های ساخت پاپیه ماشه',
      excerpt: 'پاپیه ماشه هنری است که با استفاده از کاغذ و چسب، آثار زیبا و منحصر به فردی خلق می‌شود...',
      author: 'محمد کریمی',
      date: '۱۴۰۲/۱۲/۲۸',
      category: 'پاپیه ماشه',
      readTime: '۸ دقیقه',
      image: '/api/placeholder/400/250',
      slug: 'papier-mache-techniques'
    },
    {
      title: 'دکوراسیون خانه با آثار هنری دست‌ساز',
      excerpt: 'استفاده از آثار هنری دست‌ساز در دکوراسیون خانه می‌تواند فضای شما را منحصر به فرد و زیبا کند...',
      author: 'شهرزاد احمدی',
      date: '۱۴۰۲/۱۲/۲۰',
      category: 'دکوری',
      readTime: '۹ دقیقه',
      image: '/api/placeholder/400/250',
      slug: 'home-decoration-handmade-art'
    },
    {
      title: 'نگهداری و مراقبت از محصولات آینانتیک',
      excerpt: 'برای حفظ زیبایی و دوام محصولات آینانتیک، رعایت نکات نگهداری بسیار مهم است...',
      author: 'علی رضایی',
      date: '۱۴۰۲/۱۲/۱۵',
      category: 'نگهداری',
      readTime: '۵ دقیقه',
      image: '/api/placeholder/400/250',
      slug: 'ainantik-maintenance-tips'
    }
  ];

  const categories = [
    'همه',
    'آینانتیک',
    'دکوری',
    'ظروف سرامیکی',
    'شمع ارگانیک',
    'پاپیه ماشه',
    'نگهداری'
  ];

  const featuredPost = blogPosts[0];

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 golden-text">
            وبلاگ
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            در وبلاگ ما، آخرین اخبار، راهنماها و نکات مفید در زمینه هنرهای دستی و محصولات دکوری را مطالعه کنید.
          </p>
        </div>

        {/* Featured Post */}
        <section className="mb-16">
          <Card className="card-elegant overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="aspect-video lg:aspect-square bg-gradient-to-br from-secondary to-primary/20 flex items-center justify-center">
                <span className="text-8xl opacity-50">📰</span>
              </div>
              <CardContent className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">
                    {featuredPost.category}
                  </span>
                  <span className="text-xs text-muted-foreground">{featuredPost.readTime}</span>
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold mb-4 golden-text">
                  {featuredPost.title}
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 golden-gradient rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-black">ش</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium">{featuredPost.author}</p>
                      <p className="text-xs text-muted-foreground">{featuredPost.date}</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    <Link href={`/blog/${featuredPost.slug}`}>ادامه مطلب</Link>
                  </Button>
                </div>
              </CardContent>
            </div>
          </Card>
        </section>

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

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.slice(1).map((post) => (
            <Card key={post.slug} className="card-elegant group cursor-pointer">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-secondary to-primary/20 rounded-t-lg flex items-center justify-center">
                  <span className="text-6xl opacity-50">📰</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">
                      {post.category}
                    </span>
                    <span className="text-xs text-muted-foreground">{post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 golden-gradient rounded-full flex items-center justify-center">
                        <span className="text-xs font-bold text-black">ش</span>
                      </div>
                      <div>
                        <p className="text-xs font-medium">{post.author}</p>
                        <p className="text-xs text-muted-foreground">{post.date}</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      <Link href={`/blog/${post.slug}`}>خواندن</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Section */}
        <section className="py-16 golden-gradient rounded-lg mb-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 text-black">
              عضویت در خبرنامه
            </h2>
            <p className="text-lg text-black/80 mb-8 max-w-2xl mx-auto">
              با عضویت در خبرنامه ما، از آخرین مقالات و اخبار هنرهای دستی باخبر شوید
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="ایمیل خود را وارد کنید"
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-black/20"
              />
              <Button className="bg-black text-white hover:bg-black/80 px-6">
                عضویت
              </Button>
            </div>
          </div>
        </section>

        {/* Popular Tags */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-4 golden-text">
              برچسب‌های محبوب
            </h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {['آینانتیک', 'دکوری', 'سرامیک', 'شمع', 'پاپیه ماشه', 'هنر دستی', 'دکوراسیون', 'سفارش اختصاصی'].map((tag) => (
              <Button
                key={tag}
                variant="outline"
                size="sm"
                className="text-sm"
              >
                #{tag}
              </Button>
            ))}
          </div>
        </section>

        {/* Load More */}
        <div className="text-center">
          <Button size="lg" variant="outline" className="px-8">
            مشاهده مطالب بیشتر
          </Button>
        </div>
      </div>
    </div>
  );
}
