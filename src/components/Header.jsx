'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X, Search, User, ShoppingCart, ChevronLeft, Phone } from 'lucide-react';
import Tooltip from '@/components/Tooltip';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [openDesktopSubmenu, setOpenDesktopSubmenu] = useState(null);

  // بستن dropdown با کلیک خارج از آن
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (openDesktopSubmenu && !event.target.closest('.desktop-submenu-container')) {
        setOpenDesktopSubmenu(null);
      }
    };

    if (openDesktopSubmenu) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [openDesktopSubmenu]);

  const menuItems = [
    { name: 'خانه', href: '/', icon: '/icons/19033484.png' },
    { 
      name: 'آینانتیک', 
      href: '/ainantik',
      icon: '/icons/7697505.png',
      submenu: [
        { name: 'تابلو', href: '/ainantik/tablo', icon: '/icons/10439857.png' },
        { name: 'سینی', href: '/ainantik/sini', icon: '/icons/615075.png' },
        { name: 'میز', href: '/ainantik/miz', icon: '/icons/1187595.png' },
        { name: 'آباژور', href: '/ainantik/abazhor', icon: '/icons/7187988.png' },
        { name: 'ساعت دیواری', href: '/ainantik/saat-divari', icon: '/icons/3769455.png' }
      ]
    },
    { 
      name: 'دکوری', 
      href: '/dekori',
      icon: '/icons/1485853.png',
      submenu: [
        { name: 'سینی', href: '/dekori/sini', icon: '/icons/615075.png' },
        { name: 'آباژور', href: '/dekori/abazhor', icon: '/icons/7187988.png' },
        { name: 'جاشمعی', href: '/dekori/jashami', icon: '/icons/12786439.png' },
        { name: 'گلدان', href: '/dekori/goldan', icon: '/icons/19033484.png' },
        { name: 'هلدر کتاب', href: '/dekori/holder-ketab', icon: '/icons/7697505.png' },
        { name: 'بانکه و جینجر', href: '/dekori/banke-jinger', icon: '/icons/4158429.png' },
        { name: 'ظروف پذیرایی', href: '/dekori/zorof-paziraei', icon: '/icons/2477984.png' },
        { name: 'مجسمه‌ها', href: '/dekori/mojassame', icon: '/icons/1485853.png' },
        { name: 'اکسسوری', href: '/dekori/accessory', icon: '/icons/1040340.png' },
        { name: 'دیوارکوب و سردیس', href: '/dekori/divarkob-sardis', icon: '/icons/10547043.png' }
      ]
    },
    { 
      name: 'ظروف سرامیکی', 
      href: '/zoroof-seramiki',
      icon: '/icons/2477984.png',
      submenu: [
        { name: 'ظروف', href: '/zoroof-seramiki/zoroof', icon: '/icons/2477984.png' },
        { name: 'دکوری', href: '/zoroof-seramiki/dekori', icon: '/icons/839860.png' },
        { name: 'جاشمعی', href: '/zoroof-seramiki/jashami', icon: '/icons/12786439.png' },
        { name: 'هفت سین', href: '/zoroof-seramiki/haft-sin', icon: '/icons/1485853.png' }
      ]
    },
    { 
      name: 'شمع ارگانیک', 
      href: '/sham-organic',
      icon: '/icons/12786439.png',
      submenu: [
        { name: 'دست ساز', href: '/sham-organic/dast-saz', icon: '/icons/19033484.png' },
        { name: 'شمع مناسبتی', href: '/sham-organic/monasebati', icon: '/icons/12786439.png' },
        { name: 'باکس گل و هدیه', href: '/sham-organic/box-gol-hediye', icon: '/icons/7697505.png' }
      ]
    },
    { name: 'پاپیه ماشه', href: '/papier-mache', icon: '/icons/7187988.png' },
    { name: 'پروژه‌های آینانتیک', href: '/projects', icon: '/icons/3769455.png' },
    { name: 'اتاق سفارش', href: '/custom-order', icon: '/icons/839860.png' },
    { name: 'وبلاگ', href: '/blog', icon: '/icons/1187595.png' },
    { name: 'درباره ما', href: '/about', icon: '/icons/615075.png' },
    { name: 'تماس با ما', href: '/contact', icon: '/icons/10439857.png' }
  ];

  return (
    <header className="group sticky top-0 z-50 w-full bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 overflow-visible m-0">
      <div className="container mx-auto px-4 relative">
        {/* خط اول: لوگو و نام سایت */}
        <div className="flex h-[80px] sm:h-20 items-center justify-center py-2">
          <Link href="/" className="flex items-center gap-[5px] sm:space-x-3 sm:space-x-reverse">
            <div className="relative h-12 w-16 sm:h-16 sm:w-20 -mt-[20px]">
              <Image
                src="/photo_2025-09-06_06-38-01.jpg"
                alt="لوگوی گالری هنری شهرزاد"
                width={64}
                height={64}
                className="object-contain"
                priority
              />
            </div>
            <span className="text-lg sm:text-xl md:text-2xl font-bold golden-text whitespace-nowrap">گالری هنری شهرزاد</span>
          </Link>
        </div>

        {/* خط جداکننده */}
        <div className="border-t border-gray-200"></div>

        {/* خط دوم: آیکون منو (چپ) و سه آیکون دیگر (راست) */}
        <div className="flex h-[60px] sm:h-16 items-center justify-between py-2">
          {/* دکمه منوی موبایل - سمت چپ */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="-mt-[30px] sm:mt-0">
                <Menu className="h-6 w-6 scale-x-[-1]" />
                <span className="sr-only">باز کردن منو</span>
              </Button>
            </SheetTrigger>
          
          {/* ورود/ثبت نام و سبد خرید - سمت راست */}
          <div className="flex items-center space-x-4 space-x-reverse -mt-[30px] sm:mt-0">
            {/* شماره تماس */}
            <Tooltip content="۰۹۱۹۵۱۷۳۸۶۸" position="bottom">
              <a 
                href="tel:09195173868" 
                className="flex items-center space-x-2 space-x-reverse text-foreground hover:text-primary transition-colors duration-200"
              >
                <Phone className="h-5 w-5 scale-x-[-1]" />
                <span className="hidden sm:block text-sm font-medium">تماس</span>
              </a>
            </Tooltip>
            {/* ورود/ثبت نام */}
            <Link href="/login" className="flex items-center space-x-2 space-x-reverse text-foreground hover:text-primary transition-colors duration-200">
              <User className="h-5 w-5 scale-x-[-1]" />
              <span className="hidden sm:block text-sm font-medium">ورود/ثبت نام</span>
            </Link>
            {/* سبد خرید */}
            <Link href="/cart" className="flex items-center space-x-2 space-x-reverse text-foreground hover:text-primary transition-colors duration-200">
              <ShoppingCart className="h-5 w-5 scale-x-[-1]" />
              <span className="hidden sm:block text-sm font-medium">سبد خرید</span>
              <span className="bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">0</span>
            </Link>
          </div>
          
            <SheetContent side="right" className="w-[300px] sm:w-[400px] flex flex-col">
                {/* Header ثابت */}
                <div className="flex-shrink-0">
                  <div className="flex items-center space-x-3 space-x-reverse mb-6 mt-8">
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
                      readOnly
                      onFocus={(e) => e.target.blur()}
                    />
                  </div>

                  {/* ورود/ثبت نام و سبد خرید در موبایل */}
                  <div className="flex space-x-4 space-x-reverse mb-6">
                    {/* شماره تماس - فقط آیکون در موبایل */}
                    <a 
                      href="tel:09195173868" 
                      className="flex items-center justify-center text-foreground hover:text-primary transition-colors duration-200"
                      aria-label="تماس با ما"
                    >
                      <Phone className="h-5 w-5" />
                    </a>
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
                  </div>
                  
                {/* منو با اسکرول مجزا */}
                <div className="flex-1 overflow-y-auto">
                  <div className="space-y-4">
                  {menuItems.map((item) => (
                    <div key={item.name}>
                        {item.name ? (
                          <div>
                            {item.submenu ? (
                              <button
                                onClick={() => setOpenSubmenu(openSubmenu === item.name ? null : item.name)}
                                className="flex items-center justify-between w-full py-2 text-foreground hover:text-primary transition-colors duration-200 font-medium"
                              >
                                <div className="flex items-center space-x-2 space-x-reverse">
                                  {item.icon && (
                                    <Image
                                      src={item.icon}
                                      alt={item.name}
                                      width={20}
                                      height={20}
                                      className="object-contain"
                                    />
                                  )}
                                  <span>{item.name}</span>
                                  <Image
                                    src="/icons/6364586.png"
                                    alt="dropdown"
                                    width={16}
                                    height={16}
                                    className={`object-contain transition-transform duration-200 ${openSubmenu === item.name ? 'rotate-180' : ''}`}
                                  />
                                </div>
                              </button>
                            ) : (
                      <Link 
                        href={item.href}
                        className="flex items-center space-x-2 space-x-reverse py-2 text-foreground hover:text-primary transition-colors duration-200 font-medium"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.icon && (
                          <Image
                            src={item.icon}
                            alt={item.name}
                            width={20}
                            height={20}
                            className="object-contain"
                          />
                        )}
                        <span>{item.name}</span>
                      </Link>
                            )}
                            {item.submenu && openSubmenu === item.name && (
                              <div className="mr-4 mt-2 space-y-1 animate-fade-in-up">
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
                        ) : (
                          <div className="h-2"></div>
                      )}
                    </div>
                  ))}
                  </div>
                </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* خط سوم: منوی اصلی */}
        <div className="hidden md:block border-t border-gray-200 max-h-0 overflow-hidden group-hover:max-h-96 group-hover:overflow-visible transition-all duration-300 ease-in-out">
          <nav className="flex items-center justify-evenly py-2 md:py-3 gap-2 md:gap-4 flex-wrap">
            {menuItems.filter(item => item.name).map((item) => (
              <div key={item.name} className="relative desktop-submenu-container z-[100]">
                {item.submenu ? (
                  <div className="relative">
                    <button
                      onClick={() => setOpenDesktopSubmenu(openDesktopSubmenu === item.name ? null : item.name)}
                      className="flex items-center space-x-2 space-x-reverse px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors duration-200 group/item"
                    >
                      {item.icon && (
                        <Image
                          src={item.icon}
                          alt={item.name}
                          width={20}
                          height={20}
                          className="object-contain"
                        />
                      )}
                      <span>{item.name}</span>
                      <Image
                        src="/icons/6364586.png"
                        alt="dropdown"
                        width={16}
                        height={16}
                        className={`object-contain transition-transform duration-200 ${openDesktopSubmenu === item.name ? 'rotate-180' : ''}`}
                      />
                    </button>
                    {openDesktopSubmenu === item.name && (
                      <div className="absolute top-full right-0 mt-2 w-48 sm:w-56 md:w-64 bg-white rounded-lg shadow-lg border transition-all duration-200 z-[9999] max-h-[80vh] overflow-y-auto">
                        <div className="p-2">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="block px-4 py-2 text-sm text-foreground hover:bg-secondary/50 hover:text-primary rounded-md transition-colors duration-200"
                              onClick={() => setOpenDesktopSubmenu(null)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="flex items-center space-x-2 space-x-reverse px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors duration-200"
                  >
                    {item.icon && (
                      <Image
                        src={item.icon}
                        alt={item.name}
                        width={20}
                        height={20}
                        className="object-contain"
                      />
                    )}
                    <span>{item.name}</span>
                  </Link>
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
