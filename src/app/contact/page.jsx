'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('پیام شما با موفقیت ارسال شد. به زودی با شما تماس خواهیم گرفت.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      title: 'آدرس',
      description: 'تهران، خیابان ولیعصر، پلاک ۱۲۳',
      icon: '📍',
      details: ['واحد ۴۵، طبقه ۳', 'کد پستی: ۱۹۶۶۹۱۳۸۷۱']
    },
    {
      title: 'تلفن',
      description: '۰۲۱-۱۲۳۴۵۶۷۸',
      icon: '📞',
      details: ['شنبه تا پنج‌شنبه: ۹ صبح تا ۶ عصر', 'جمعه: ۱۰ صبح تا ۲ ظهر']
    },
    {
      title: 'ایمیل',
      description: 'info@shahrzadartgallery.com',
      icon: '📧',
      details: ['پاسخ‌دهی در کمتر از ۲۴ ساعت', 'پشتیبانی ۲۴/۷']
    },
    {
      title: 'ساعات کاری',
      description: 'شنبه تا پنج‌شنبه',
      icon: '🕒',
      details: ['۹:۰۰ صبح تا ۱۸:۰۰ عصر', 'جمعه: ۱۰:۰۰ صبح تا ۱۴:۰۰ ظهر']
    }
  ];

  const socialMedia = [
    { name: 'اینستاگرام', handle: '@shahrzadartgallery', icon: '📷' },
    { name: 'تلگرام', handle: '@shahrzadartgallery', icon: '✈️' },
    { name: 'واتساپ', handle: '+98 912 345 6789', icon: '💬' }
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 golden-text">
            تماس با ما
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            ما آماده پاسخگویی به سؤالات شما و ارائه مشاوره تخصصی هستیم. 
            با ما در تماس باشید تا بتوانیم بهترین خدمات را به شما ارائه دهیم.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card className="card-elegant">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 golden-text">
                  ارسال پیام
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">نام و نام خانوادگی *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="نام و نام خانوادگی"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">ایمیل *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="ایمیل شما"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">شماره تماس</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="شماره تماس"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">موضوع *</label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      >
                        <option value="">انتخاب کنید</option>
                        <option value="سفارش محصول">سفارش محصول</option>
                        <option value="مشاوره">مشاوره</option>
                        <option value="پشتیبانی">پشتیبانی</option>
                        <option value="همکاری">همکاری</option>
                        <option value="سایر">سایر</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">پیام *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="پیام خود را بنویسید..."
                    />
                  </div>
                  
                  <Button type="submit" className="w-full btn-golden text-lg py-3">
                    ارسال پیام
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactInfo.map((info) => (
                <Card key={info.title} className="card-elegant">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 golden-gradient rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-xl">{info.icon}</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                        <p className="text-primary font-medium mb-2">{info.description}</p>
                        {info.details.map((detail, index) => (
                          <p key={index} className="text-sm text-muted-foreground">{detail}</p>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social Media */}
            <Card className="card-elegant">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6 golden-text">
                  شبکه‌های اجتماعی
                </h3>
                
                <div className="space-y-4">
                  {socialMedia.map((social) => (
                    <div key={social.name} className="flex items-center gap-3">
                      <div className="w-10 h-10 golden-gradient rounded-full flex items-center justify-center">
                        <span className="text-lg">{social.icon}</span>
                      </div>
                      <div>
                        <p className="font-semibold">{social.name}</p>
                        <p className="text-sm text-muted-foreground">{social.handle}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card className="card-elegant">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6 golden-text">
                  موقعیت مکانی
                </h3>
                
                <div className="aspect-video bg-gradient-to-br from-secondary to-primary/20 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-4xl mb-2 block">🗺️</span>
                    <p className="text-sm text-muted-foreground">نقشه گوگل</p>
                    <p className="text-xs text-muted-foreground">تهران، خیابان ولیعصر</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* FAQ */}
            <Card className="card-elegant">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6 golden-text">
                  سؤالات متداول
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-1">زمان تحویل محصولات چقدر است؟</h4>
                    <p className="text-sm text-muted-foreground">
                      زمان تحویل بسته به نوع محصول بین ۱ تا ۴ هفته است.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-1">آیا امکان سفارش اختصاصی وجود دارد؟</h4>
                    <p className="text-sm text-muted-foreground">
                      بله، ما آماده دریافت سفارشات اختصاصی مطابق با نیاز شما هستیم.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-1">آیا ارسال به شهرستان‌ها انجام می‌شود؟</h4>
                    <p className="text-sm text-muted-foreground">
                      بله، ارسال به تمامی شهرهای ایران انجام می‌شود.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
