'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function CustomOrderPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: '',
    description: '',
    budget: '',
    timeline: '',
    size: '',
    color: '',
    style: ''
  });

  const categories = [
    'آینانتیک',
    'دکوری',
    'ظروف سرامیکی',
    'شمع ارگانیک',
    'پاپیه ماشه'
  ];

  const styles = [
    'کلاسیک',
    'مدرن',
    'سنتی ایرانی',
    'مینیمال',
    'لوکس',
    'راستیک'
  ];

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
    alert('عالی! سفارشت ثبت شد و ما خیلی زود با تو تماس می‌گیریم! 😊');
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 golden-text">
            اتاق سفارش
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            خب، وقتشه که یه چیز خفن براتون بسازیم! 🚀
            فرم زیر رو پر کن و بهمون بگو چی می‌خوای. تیم ما (که خیلی زرنگن!) 
            آماده‌اند تا دقیقاً همون چیزی که دلت می‌خواد رو برات بسازن
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Order Form */}
          <div>
            <Card className="card-elegant">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 golden-text">
                  فرم سفارش اختصاصی
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-primary">اطلاعات شخصی</h3>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">نام و نام خانوادگی *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="نام و نام خانوادگی خود را وارد کنید"
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
                        placeholder="ایمیل خود را وارد کنید"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">شماره تماس *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="شماره تماس خود را وارد کنید"
                      />
                    </div>
                  </div>

                  {/* Product Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-primary">اطلاعات محصول</h3>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">دسته‌بندی محصول *</label>
                      <select
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      >
                        <option value="">انتخاب کنید</option>
                        {categories.map((category) => (
                          <option key={category} value={category}>{category}</option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">توضیحات محصول *</label>
                      <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="توضیحات کامل محصول مورد نظر خود را بنویسید"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">بودجه تقریبی</label>
                        <input
                          type="text"
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                          placeholder="بودجه تقریبی (تومان)"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-2">زمان تحویل مورد نظر</label>
                        <input
                          type="text"
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                          placeholder="مثال: 2 هفته"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">اندازه تقریبی</label>
                        <input
                          type="text"
                          name="size"
                          value={formData.size}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                          placeholder="مثال: 50x30 سانتی‌متر"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-2">رنگ مورد نظر</label>
                        <input
                          type="text"
                          name="color"
                          value={formData.color}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                          placeholder="رنگ‌های مورد نظر"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">سبک طراحی</label>
                      <select
                        name="style"
                        value={formData.style}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      >
                        <option value="">انتخاب کنید</option>
                        {styles.map((style) => (
                          <option key={style} value={style}>{style}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <Button type="submit" className="w-full btn-golden text-lg py-3">
                    ارسال سفارش
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Information Sidebar */}
          <div className="space-y-8">
            {/* Process Steps */}
            <Card className="card-elegant">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6 golden-text">
                  مراحل سفارش
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 golden-gradient rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold text-black">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">ارسال درخواست</h4>
                      <p className="text-sm text-muted-foreground">
                        فرم رو پر کن و بگو دقیقاً چی می‌خوای (هرچقدر بیشتر بگی، بهتر می‌سازیم! 😊)
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 golden-gradient rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold text-black">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">مشاوره و طراحی</h4>
                      <p className="text-sm text-muted-foreground">
                        ما با تو تماس می‌گیریم و طرح اولیه رو نشونت می‌دیم (اگه خواستی تغییر بدی، هیچ مشکلی نیست!)
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 golden-gradient rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold text-black">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">تولید و ساخت</h4>
                      <p className="text-sm text-muted-foreground">
                        وقتی تأیید کردی، شروع می‌کنیم به ساخت! (این مرحله خیلی هیجان‌انگیزه! 🎨)
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 golden-gradient rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold text-black">4</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">تحویل و نصب</h4>
                      <p className="text-sm text-muted-foreground">
                        محصول آماده! تحویلش می‌دیم و اگه لازم باشه، نصبش هم می‌کنیم (بابت نصب نگران نباش! 📦)
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card className="card-elegant">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6 golden-text">
                  اطلاعات تماس
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 golden-gradient rounded-full flex items-center justify-center">
                      <span className="text-lg">📞</span>
                    </div>
                    <div>
                      <p className="font-semibold">تلفن</p>
                      <p className="text-sm text-muted-foreground">۰۲۱-۱۲۳۴۵۶۷۸</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 golden-gradient rounded-full flex items-center justify-center">
                      <span className="text-lg">📧</span>
                    </div>
                    <div>
                      <p className="font-semibold">ایمیل</p>
                      <p className="text-sm text-muted-foreground">info@shahrzadartgallery.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 golden-gradient rounded-full flex items-center justify-center">
                      <span className="text-lg">📍</span>
                    </div>
                    <div>
                      <p className="font-semibold">آدرس</p>
                      <p className="text-sm text-muted-foreground">تهران، خیابان ولیعصر</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Guarantee */}
            <Card className="card-elegant">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6 golden-text">
                  تضمین کیفیت
                </h3>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span className="text-sm">کیفیت مواد اولیه</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span className="text-sm">تضمین رضایت مشتری</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span className="text-sm">پشتیبانی پس از فروش</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span className="text-sm">تحویل به موقع</span>
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
