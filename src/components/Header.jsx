'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X, Search, User, ShoppingCart } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'خانه', href: '/' },
    { 
      name: 'آینانتیک', 
      href: '/ainantik',
      submenu: [
        { name: 'تابلو', href: '/ainantik/tablo' },
        { name: 'سینی', href: '/ainantik/sini' },
        { name: 'میز', href: '/ainantik/miz' },
        { name: 'آباژور', href: '/ainantik/abazhor' },
        { name: 'ساعت دیواری', href: '/ainantik/saat-divari' }
      ]
    },
    { 
      name: 'دکوری', 
      href: '/dekori',
      submenu: [
        { name: 'سینی', href: '/dekori/sini' },
        { name: 'آباژور', href: '/dekori/abazhor' },
        { name: 'جاشمعی', href: '/dekori/jashami' },
        { name: 'گلدان', href: '/dekori/goldan' },
        { name: 'هلدر کتاب', href: '/dekori/holder-ketab' },
        { name: 'بانکه و جینجر', href: '/dekori/banke-jinger' },
        { name: 'ظروف پذیرایی', href: '/dekori/zorof-paziraei' },
        { name: 'مجسمه‌ها', href: '/dekori/mojassame' },
        { name: 'اکسسوری', href: '/dekori/accessory' },
        { name: 'دیوارکوب و سردیس', href: '/dekori/divarkob-sardis' }
      ]
    },
    { 
      name: 'ظروف سرامیکی', 
      href: '/zoroof-seramiki',
      submenu: [
        { name: 'ظروف', href: '/zoroof-seramiki/zoroof' },
        { name: 'دکوری', href: '/zoroof-seramiki/dekori' },
        { name: 'جاشمعی', href: '/zoroof-seramiki/jashami' },
        { name: 'هفت سین', href: '/zoroof-seramiki/haft-sin' }
      ]
    },
    { 
      name: 'شمع ارگانیک', 
      href: '/sham-organic',
      submenu: [
        { name: 'دست ساز', href: '/sham-organic/dast-saz' },
        { name: 'شمع مناسبتی', href: '/sham-organic/monasebati' },
        { name: 'باکس گل و هدیه', href: '/sham-organic/box-gol-hediye' }
      ]
    },
    { name: 'پاپیه ماشه', href: '/papier-mache' },
    { name: 'پروژه‌های آینانتیک', href: '/projects' },
    { name: 'اتاق سفارش', href: '/custom-order' },
    { name: 'وبلاگ', href: '/blog' },
    { name: 'درباره ما', href: '/about' },
    { name: 'تماس با ما', href: '/contact' }
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4">
        {/* خط اول: لوگو، جستجو، ورود/ثبت نام، سبد خرید */}
        <div className="flex h-16 items-center justify-between">
          {/* لوگو و نام سایت */}
          <Link href="/" className="flex items-center space-x-3 space-x-reverse">
            <div className="relative h-12 w-16">
              <Image
                src="/photo_2025-09-06_06-38-01.jpg"
                alt="لوگوی گالری هنری شهرزاد"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="text-lg sm:text-xl font-bold golden-text whitespace-nowrap">گالری هنری شهرزاد</span>
          </Link>

          {/* نوار جستجو */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="جستجو در محصولات..."
                className="pr-10 pl-4 text-right"
              />
            </div>
          </div>

          {/* ورود/ثبت نام و سبد خرید */}
          <div className="flex items-center space-x-4 space-x-reverse">
            {/* ورود/ثبت نام */}
            <Link href="/login" className="flex items-center space-x-2 space-x-reverse text-foreground hover:text-primary transition-colors duration-200">
              <User className="h-5 w-5" />
              <span className="hidden sm:block text-sm font-medium">ورود/ثبت نام</span>
            </Link>

            {/* سبد خرید */}
            <Link href="/cart" className="flex items-center space-x-2 space-x-reverse text-foreground hover:text-primary transition-colors duration-200">
              <ShoppingCart className="h-5 w-5" />
              <span className="hidden sm:block text-sm font-medium">سبد خرید</span>
              <span className="bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">0</span>
            </Link>

            {/* دکمه منوی موبایل */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">باز کردن منو</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-8">
                  <div className="flex items-center space-x-3 space-x-reverse mb-6">
                    <div className="relative h-10 w-12">
                      <Image
                        src="/photo_2025-09-06_06-38-01.jpg"
                        alt="لوگوی گالری هنری شهرزاد"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-base sm:text-lg font-bold golden-text whitespace-nowrap">گالری هنری شهرزاد</span>
                  </div>
                  
                  {/* جستجو در موبایل */}
                  <div className="relative mb-4">
                    <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                      type="text"
                      placeholder="جستجو در محصولات..."
                      className="pr-10 pl-4 text-right"
                    />
                  </div>

                  {/* ورود/ثبت نام و سبد خرید در موبایل */}
                  <div className="flex space-x-4 space-x-reverse mb-6">
                    <Link href="/login" className="flex items-center space-x-2 space-x-reverse text-foreground hover:text-primary transition-colors duration-200">
                      <User className="h-5 w-5" />
                      <span className="text-sm font-medium">ورود/ثبت نام</span>
                    </Link>
                    <Link href="/cart" className="flex items-center space-x-2 space-x-reverse text-foreground hover:text-primary transition-colors duration-200">
                      <ShoppingCart className="h-5 w-5" />
                      <span className="text-sm font-medium">سبد خرید</span>
                      <span className="bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">0</span>
                    </Link>
                  </div>
                  
                  {menuItems.map((item) => (
                    <div key={item.name}>
                      <Link 
                        href={item.href}
                        className="block py-2 text-foreground hover:text-primary transition-colors duration-200 font-medium"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                      {item.submenu && (
                        <div className="mr-4 mt-2 space-y-1">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="block py-1 text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                              onClick={() => setIsOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* خط دوم: منوی اصلی */}
        <div className="hidden md:block border-t border-gray-200">
          <nav className="flex items-center justify-center space-x-8 space-x-reverse py-3">
            {menuItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link 
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-200 font-medium py-2"
                >
                  {item.name}
                </Link>
                {item.submenu && (
                  <div className="absolute top-full right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-2">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-foreground hover:bg-secondary hover:text-secondary-foreground transition-colors duration-200"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
