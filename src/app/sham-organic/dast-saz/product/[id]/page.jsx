'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, ArrowLeft, ShoppingCart, Heart } from 'lucide-react';

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
    features: ['دست‌ساز', 'ارگانیک', 'معطر'],
    fullDescription: 'این شمع دست‌ساز زیبا به شکل گل رز با دقت و ظرافت خاصی ساخته شده است. از موم طبیعی و ارگانیک استفاده شده و رایحه خوش گل رز فضای خانه شما را معطر می‌کند. این شمع برای ایجاد آرامش و زیبایی در محیط طراحی شده است.'
  },
  {
    id: 2,
    title: 'مجموعه شمع‌های رز در کاسه',
    description: 'مجموعه زیبای شمع‌های گل رز در کاسه چوبی با رنگ‌های پاستلی',
    price: 'قیمت: به زودی',
    images: ['/shamDastSaz/4.jpg', '/shamDastSaz/5.jpg', '/shamDastSaz/6.jpg', '/shamDastSaz/7.jpg'],
    fragrance: 'گل رز و یاسمن',
    burnTime: '۵۰ ساعت',
    size: 'مجموعه کامل',
    inStock: true,
    features: ['دست‌ساز', 'ارگانیک', 'معطر', 'مجموعه'],
    fullDescription: 'مجموعه زیبای شمع‌های گل رز در کاسه چوبی با رنگ‌های پاستلی و آرامش‌بخش. این مجموعه شامل چندین شمع دست‌ساز با اندازه‌های مختلف است که در یک کاسه چوبی زیبا قرار گرفته‌اند. رایحه ترکیبی گل رز و یاسمن فضای خانه شما را معطر می‌کند.'
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
    features: ['دست‌ساز', 'ارگانیک', 'معطر'],
    fullDescription: 'این شمع دست‌ساز زیبا به شکل گل رز صورتی با دقت و ظرافت خاصی ساخته شده است. از موم طبیعی و ارگانیک استفاده شده و رایحه خوش گل رز صورتی فضای خانه شما را معطر می‌کند. این شمع برای ایجاد آرامش و زیبایی در محیط طراحی شده است.'
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
    features: ['دست‌ساز', 'ارگانیک', 'معطر'],
    fullDescription: 'این شمع دست‌ساز زیبا به شکل گل رز زرد با دقت و ظرافت خاصی ساخته شده است. از موم طبیعی و ارگانیک استفاده شده و رایحه خوش گل رز زرد فضای خانه شما را معطر می‌کند. این شمع برای ایجاد آرامش و زیبایی در محیط طراحی شده است.'
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
    features: ['دست‌ساز', 'ارگانیک', 'معطر', 'مجموعه'],
    fullDescription: 'مجموعه زیبای شمع‌های گل رز در رنگ‌های پاستلی و ملایم که در یک کاسه زیبا چیده شده‌اند. این مجموعه شامل چندین شمع دست‌ساز با اندازه‌ها و رنگ‌های مختلف است که از موم طبیعی و ارگانیک ساخته شده‌اند. رایحه خوش گل رز پاستلی فضای خانه شما را معطر می‌کند و برای ایجاد آرامش و زیبایی در محیط طراحی شده است.'
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
    features: ['دست‌ساز', 'ارگانیک', 'معطر', 'تزئینی'],
    fullDescription: 'شمع دست‌ساز تزئینی زیبا در کاسه شیشه‌ای شفاف با موم صورتی پاستلی و تزئینات ظریف گل‌های مومی و توت‌های کوچک. این شمع با دقت و ظرافت خاصی ساخته شده و از موم طبیعی و ارگانیک استفاده شده است. رایحه ترکیبی گل رز و توت فضای خانه شما را معطر می‌کند و برای ایجاد آرامش و زیبایی در محیط طراحی شده است.'
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
    features: ['دست‌ساز', 'ارگانیک', 'معطر', 'تزئینی'],
    fullDescription: 'شمع دست‌ساز زیبا با گل‌های رز سفید و کرم در کاسه سرامیکی آبی خاکستری با تزئینات ظریف برگ‌های سبز. این شمع با دقت و ظرافت خاصی ساخته شده و از موم طبیعی و ارگانیک استفاده شده است. رایحه خوش گل رز سفید فضای خانه شما را معطر می‌کند و برای ایجاد آرامش و زیبایی در محیط طراحی شده است.'
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
    features: ['دست‌ساز', 'ارگانیک', 'معطر', 'تزئینی'],
    fullDescription: 'شمع دست‌ساز زیبا به شکل گل رز نارنجی با گرادیان رنگی طبیعی و گرم در ظرف شیشه‌ای شفاف. این شمع با دقت و ظرافت خاصی ساخته شده و از موم طبیعی و ارگانیک استفاده شده است. رایحه خوش گل رز نارنجی فضای خانه شما را معطر می‌کند و برای ایجاد آرامش و زیبایی در محیط طراحی شده است.'
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
    features: ['دست‌ساز', 'ارگانیک', 'معطر', 'مجموعه'],
    fullDescription: 'مجموعه زیبای شمع‌های گل رز در رنگ‌های هلویی و کرم با برگ‌های سبز طبیعی در کاسه سرامیکی. این مجموعه شامل چندین شمع دست‌ساز با اندازه‌ها و رنگ‌های مختلف است که از موم طبیعی و ارگانیک ساخته شده‌اند. رایحه خوش گل رز هلویی فضای خانه شما را معطر می‌کند و برای ایجاد آرامش و زیبایی در محیط طراحی شده است.'
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
    features: ['دست‌ساز', 'ارگانیک', 'معطر', 'مجموعه'],
    fullDescription: 'مجموعه زیبای شمع‌های گل رز در رنگ سالمون گرم و طبیعی با برگ‌های سبز در سینی چوبی طبیعی. این مجموعه شامل چندین شمع دست‌ساز با اندازه‌ها و رنگ‌های مختلف است که از موم طبیعی و ارگانیک ساخته شده‌اند. رایحه خوش گل رز سالمون فضای خانه شما را معطر می‌کند و برای ایجاد آرامش و زیبایی در محیط طراحی شده است.'
  }
];

export default function ProductDetailPage() {
  const params = useParams();
  const productId = parseInt(params.id) || 1;
  const product = products.find(p => p.id === productId) || products[0];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center space-x-2 space-x-reverse text-sm text-muted-foreground">
          <Link href="/" className="hover:text-primary transition-colors">خانه</Link>
          <span>/</span>
          <Link href="/sham-organic" className="hover:text-primary transition-colors">شمع ارگانیک</Link>
          <span>/</span>
          <Link href="/sham-organic/dast-saz" className="hover:text-primary transition-colors">دست ساز</Link>
          <span>/</span>
          <span className="text-foreground">جزئیات محصول</span>
        </nav>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* تصاویر محصول */}
          <div className="space-y-4">
            {/* تصویر اصلی */}
            <div className="relative aspect-square overflow-hidden rounded-lg bg-white">
              <img 
                src={product.images[currentImageIndex]} 
                alt={product.title}
                className="w-full h-full object-cover"
              />
              
              {/* دکمه‌های تغییر تصویر */}
              <button
                onClick={prevImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full transition-all duration-200"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full transition-all duration-200"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
            </div>

            {/* تصاویر کوچک */}
            <div className="grid grid-cols-3 gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`aspect-square overflow-hidden rounded-lg border-2 transition-all duration-200 ${
                    index === currentImageIndex 
                      ? 'border-primary' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`${product.title} - تصویر ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* اطلاعات محصول */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-4">
                {product.title}
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                {product.description}
              </p>
              
              {/* ویژگی‌ها */}
              <div className="flex flex-wrap gap-2 mb-6">
                {product.features.map((feature, index) => (
                  <Badge key={index} variant="secondary" className="text-sm">
                    {feature}
                  </Badge>
                ))}
              </div>
            </div>

            {/* جزئیات فنی */}
            <Card>
              <CardHeader>
                <CardTitle>جزئیات محصول</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">رایحه:</span>
                  <span className="font-medium">{product.fragrance}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">زمان سوختن:</span>
                  <span className="font-medium">{product.burnTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">اندازه:</span>
                  <span className="font-medium">{product.size}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">قیمت:</span>
                  <span className="text-xl font-bold text-primary">{product.price}</span>
                </div>
              </CardContent>
            </Card>

            {/* توضیحات کامل */}
            <Card>
              <CardHeader>
                <CardTitle>توضیحات کامل</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {product.fullDescription}
                </p>
              </CardContent>
            </Card>

            {/* دکمه‌های عملیات */}
            <div className="flex gap-4">
              <Button 
                className="flex-1 btn-golden text-lg py-3"
                disabled={!product.inStock}
              >
                <ShoppingCart className="h-5 w-5 ml-2" />
                افزودن به سبد خرید
              </Button>
              <Button 
                variant="outline" 
                size="icon"
                className="text-lg"
                disabled={!product.inStock}
              >
                <Heart className="h-5 w-5" />
              </Button>
            </div>

            {/* دکمه بازگشت */}
            <div className="pt-4">
              <Link href="/sham-organic/dast-saz">
                <Button variant="outline" className="w-full">
                  <ArrowRight className="h-4 w-4 ml-2" />
                  بازگشت به لیست محصولات
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
