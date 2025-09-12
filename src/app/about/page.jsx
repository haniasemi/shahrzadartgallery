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
            گالری هنری شهرزاد با بیش از یک دهه تجربه در زمینه تولید و عرضه محصولات هنری و دکوری، 
            آماده ارائه بهترین خدمات و محصولات با کیفیت به شما عزیزان است.
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
                  گالری هنری شهرزاد در سال ۱۳۹۰ با هدف احیای هنرهای دستی ایرانی و ارائه محصولات 
                  با کیفیت و منحصر به فرد تأسیس شد. ما معتقدیم که هنرهای دستی بخش مهمی از فرهنگ 
                  و هویت ایرانی است که باید حفظ و ترویج شود.
                </p>
                <p>
                  در طول این سال‌ها، تیم ما با تلاش و پشتکار فراوان، موفق به ایجاد مجموعه‌ای 
                  متنوع از محصولات هنری شده است که شامل آینانتیک، دکوری، ظروف سرامیکی، شمع‌های 
                  ارگانیک و آثار پاپیه ماشه می‌شود.
                </p>
                <p>
                  امروز، گالری هنری شهرزاد به عنوان یکی از پیشروان صنعت هنرهای دستی در کشور شناخته 
                  می‌شود و آماده ارائه خدمات به مشتریان در سراسر ایران است.
                </p>
              </div>
            </div>
            <div className="aspect-square bg-gradient-to-br from-secondary to-primary/20 rounded-lg flex items-center justify-center">
              <span className="text-8xl opacity-50">🏺</span>
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
              تیم متخصص و با تجربه ما آماده ارائه بهترین خدمات به شما است
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
            مأموریت ما حفظ و ترویج هنرهای دستی ایرانی، ارائه محصولات با کیفیت و منحصر به فرد، 
            و ایجاد تجربه‌ای لذت‌بخش برای مشتریان است. ما متعهد به استفاده از بهترین مواد اولیه، 
            تکنیک‌های پیشرفته و خلاقیت در طراحی هستیم تا محصولاتی ارائه دهیم که نه تنها زیبا 
            و کاربردی هستند، بلکه بیانگر فرهنگ و هنر غنی ایرانی نیز می‌باشند.
          </p>
        </section>
      </div>
    </div>
  );
}
