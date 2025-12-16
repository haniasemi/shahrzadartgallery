import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

export default function AboutPage() {
  const team = [
    {
      name: 'شهرزاد احمدی',
      role: 'مدیر و بنیان‌گذار',
      description: 'بیش از ۱۵ سال تجربه در زمینه هنرهای دستی و آینانتیک',
      image: '/api/placeholder/200/200'
    },
    {
      name: 'علی رضایی',
      role: 'طراح ارشد',
      description: 'متخصص در طراحی محصولات آینانتیک و دکوری',
      image: '/api/placeholder/200/200'
    },
    {
      name: 'فاطمه محمدی',
      role: 'استادکار سرامیک',
      description: 'استادکار ماهر در ساخت ظروف سرامیکی دست‌ساز',
      image: '/api/placeholder/200/200'
    },
    {
      name: 'محمد کریمی',
      role: 'متخصص شمع‌سازی',
      description: 'متخصص در ساخت شمع‌های ارگانیک و طبیعی',
      image: '/api/placeholder/200/200'
    }
  ];

  const values = [
    {
      title: 'کیفیت',
      description: 'تعهد به ارائه بالاترین کیفیت در تمامی محصولات',
      icon: '⭐'
    },
    {
      title: 'خلاقیت',
      description: 'ایده‌پردازی و نوآوری در طراحی و ساخت محصولات',
      icon: '🎨'
    },
    {
      title: 'اصالت',
      description: 'حفظ اصالت هنرهای دستی ایرانی در تمامی آثار',
      icon: '🏛️'
    },
    {
      title: 'رضایت مشتری',
      description: 'اولویت دادن به رضایت و خوشنودی مشتریان',
      icon: '😊'
    }
  ];

  const achievements = [
    {
      year: '۱۳۹۰',
      title: 'تأسیس گالری هنری شهرزاد',
      description: 'شروع فعالیت با هدف احیای هنرهای دستی ایرانی'
    },
    {
      year: '۱۳۹۵',
      title: 'افتتاح کارگاه تولیدی',
      description: 'راه‌اندازی کارگاه مجهز برای تولید محصولات دست‌ساز'
    },
    {
      year: '۱۴۰۰',
      title: 'گسترش فعالیت‌ها',
      description: 'اضافه شدن بخش‌های جدید شامل شمع‌سازی و پاپیه ماشه'
    },
    {
      year: '۱۴۰۲',
      title: 'افتتاح فروشگاه آنلاین',
      description: 'راه‌اندازی پلتفرم آنلاین برای دسترسی آسان مشتریان'
    }
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 golden-text">
            درباره ما
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            خوش اومدین به خانواده ما! 👋
            ما توی گالری هنری شهرزاد بیشتر از ده ساله که داریم آثار هنری و دکوری می‌سازیم و خیلی خوشحالیم که اینجا هستید.
            می‌خوایید بیشتر ازمون بدونید؟ پس ادامه مطلب رو بخونین! 😊
          </p>
        </div>

        {/* Story Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 golden-text">
                داستان ما
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  همه چیز از سال ۱۳۹۰ شروع شد! توی اون زمان، ما تصمیم گرفتیم که هنرهای دستی ایرانی رو زنده نگه داریم و 
                  محصولات با کیفیت بسازیم. (البته اون موقع فکرشو هم نمی‌کردیم که بعد از این همه سال، همچنان عاشق کارمون باشیم! ❤️)
                </p>
                <p>
                  این سال‌ها خیلی خوش گذشت و توی این مدت، کلی محصول مختلف ساختیم! از آینانتیک و دکوری گرفته تا 
                  ظروف سرامیکی، شمع‌های ارگانیک و پاپیه ماشه. تقریباً هرچیزی که فکرشو بکنی رو می‌سازیم! 🎨
                </p>
                <p>
                  حالا دیگه یکی از معروف‌ترین گالری‌های هنرهای دستی کشوریم (خودمونم تعجب کردیم! 😄) 
                  و به همه جای ایران محصولاتمون رو می‌فرستیم. پس اگه توی شهرستان‌ها هم هستی، نگران نباش!
                </p>
              </div>
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/pic shahrzad.jpg"
                alt="شهرزاد - بنیان‌گذار گالری هنری شهرزاد"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-secondary/30 rounded-lg mb-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6 golden-text">
                ارزش‌های ما
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value) => (
                <div key={value.title} className="text-center">
                  <div className="w-16 h-16 golden-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">{value.icon}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 golden-text">
              تیم ما
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              اینا همون افرادی هستن که با عشق و علاقه براتون کار می‌کنن! 🤗
              هر کدومشون توی کارشون استادن و واقعاً به هنرشون علاقه دارن
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <Card key={member.name} className="card-elegant text-center">
                <CardContent className="p-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-secondary to-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl opacity-50">👤</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{member.name}</h3>
                  <p className="text-sm text-primary mb-3">{member.role}</p>
                  <p className="text-xs text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-16 bg-secondary/30 rounded-lg mb-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6 golden-text">
                تاریخچه ما
              </h2>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {achievements.map((achievement, index) => (
                  <div key={achievement.year} className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 golden-gradient rounded-full flex items-center justify-center">
                        <span className="text-sm font-bold text-black">{achievement.year}</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-2">{achievement.title}</h3>
                      <p className="text-muted-foreground">{achievement.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 golden-text">
              آمار و دستاوردها
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 golden-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-black">۵۰۰+</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">مشتری راضی</h3>
              <p className="text-sm text-muted-foreground">بیش از ۵۰۰ مشتری راضی در سراسر کشور</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 golden-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-black">۱۰۰۰+</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">محصول تولیدی</h3>
              <p className="text-sm text-muted-foreground">بیش از ۱۰۰۰ محصول منحصر به فرد</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 golden-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-black">۱۵+</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">سال تجربه</h3>
              <p className="text-sm text-muted-foreground">بیش از ۱۵ سال تجربه در صنعت هنرهای دستی</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 golden-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-black">۱۰۰%</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">رضایت مشتری</h3>
              <p className="text-sm text-muted-foreground">رضایت کامل مشتریان از کیفیت محصولات</p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-6 golden-text">
            مأموریت ما
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            مأموریت ما چیه؟ خب اول از همه اینه که هنرهای دستی ایرانی رو زنده نگه داریم و به همه نشون بدیم 
            چقدر زیبا و ارزشمندن! بعدش هم می‌خوایم محصولاتی بسازیم که نه فقط قشنگ باشن، بلکه واقعاً با کیفیت و 
            منحصر به فرد باشن. ما از بهترین مواد اولیه استفاده می‌کنیم (نه اون چیزای بی‌کیفیت! 😅) و 
            با خلاقیت و تکنیک‌های پیشرفته کار می‌کنیم تا شما وقتی محصولی از ما می‌بینی، بگی: "وااای، اینا واقعاً عالین!" 🎯
          </p>
        </section>
      </div>
    </div>
  );
}
