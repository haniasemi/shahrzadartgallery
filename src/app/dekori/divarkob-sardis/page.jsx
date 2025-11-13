'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, ShoppingCart, Star, Eye } from 'lucide-react';

const DivarkobSardisPage = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  const products = [
    {
      id: 1,
      name: 'دیوارکوب و سردیس',
      price: '۲,۵۰۰,۰۰۰',
      rating: 4.8,
      reviews: 24,
      image: '/divarkobVaSardis/photo_2025-09-06_08-48-03.jpg',
      description: 'دیوارکوب و سردیس زیبا با طراحی منحصر به فرد و جزئیات هنری',
      features: ['جنس مرغوب', 'طراحی منحصر به فرد', 'کیفیت بالا', 'نصب آسان'],
      inStock: true,
      isNew: true,
      isFavorite: false
    }
  ];

  const categories = [
    { name: 'همه محصولات', count: 1, active: true },
    { name: 'دیوارکوب و سردیس', count: 1, active: false }
  ];

  const features = [
    {
      icon: '🎨',
      title: 'طراحی منحصر به فرد',
      description: 'هر محصول با طراحی خاص و منحصر به فرد تولید می‌شود'
    },
    {
      icon: '🔧',
      title: 'نصب آسان',
      description: 'سیستم نصب ساده و بدون نیاز به ابزار خاص'
    },
    {
      icon: '✨',
      title: 'کیفیت بالا',
      description: 'استفاده از بهترین مواد و روش‌های تولید'
    },
    {
      icon: '🏠',
      title: 'سازگار با دکوراسیون',
      description: 'مناسب برای انواع سبک‌های دکوراسیون منزل'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#302F2B] via-[#99793D] to-[#FDEAC6] py-20">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 fadeInUp">
              دیوارکوب و سردیس
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 fadeInUp">
              زیبایی و هنر را به دیوارهای خانه خود بیاورید
            </p>
            <div className="flex flex-wrap justify-center gap-4 fadeInUp">
              <Badge variant="secondary" className="text-lg px-4 py-2">
                طراحی منحصر به فرد
              </Badge>
              <Badge variant="secondary" className="text-lg px-4 py-2">
                کیفیت بالا
              </Badge>
              <Badge variant="secondary" className="text-lg px-4 py-2">
                نصب آسان
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Filter */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={category.active ? "default" : "outline"}
              className={`px-6 py-2 ${category.active ? 'btn-golden' : ''}`}
            >
              {category.name} ({category.count})
            </Button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="group card-elegant overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="relative">
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  
                  {/* Badges */}
                  <div className="absolute top-3 right-3 flex flex-col gap-2">
                    {product.isNew && (
                      <Badge className="bg-green-500 text-white">جدید</Badge>
                    )}
                    {product.discount && (
                      <Badge className="bg-red-500 text-white">{product.discount} تخفیف</Badge>
                    )}
                    {!product.inStock && (
                      <Badge variant="destructive">ناموجود</Badge>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="absolute top-3 left-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button
                      size="icon"
                      variant="secondary"
                      className="h-8 w-8 rounded-full bg-white/90 hover:bg-white"
                    >
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button
                      size="icon"
                      variant="secondary"
                      className="h-8 w-8 rounded-full bg-white/90 hover:bg-white"
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <CardContent className="p-4">
                  <div className="flex items-center gap-1 mb-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">
                      ({product.reviews})
                    </span>
                  </div>

                  <h3 className="font-bold text-lg mb-2 line-clamp-2">
                    {product.name}
                  </h3>

                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {product.description}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-3">
                    {product.features.slice(0, 2).map((feature, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold golden-text">
                        {product.price} تومان
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">
                          {product.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>

                  <Button 
                    className="w-full btn-golden" 
                    disabled={!product.inStock}
                  >
                    <ShoppingCart className="h-4 w-4 ml-2" />
                    {product.inStock ? 'افزودن به سبد' : 'ناموجود'}
                  </Button>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">چرا دیوارکوب و سردیس ما؟</h2>
            <p className="text-gray-600 text-lg">
              ویژگی‌های منحصر به فرد محصولات ما
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-[#302F2B] to-[#99793D] py-16">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            آماده تغییر دکوراسیون خانه خود هستید؟
          </h2>
          <p className="text-xl mb-8 opacity-90">
            با محصولات ما زیبایی و هنر را به خانه خود بیاورید
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-[#302F2B] hover:bg-gray-100">
              مشاهده همه محصولات
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#302F2B]">
              سفارش طراحی اختصاصی
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DivarkobSardisPage;
