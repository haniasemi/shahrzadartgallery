'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X } from 'lucide-react';

export default function Sidebar({ isOpen, onClose }) {
  const menuItems = [
    { name: 'خانه', href: '/' },
    { name: 'آینانتیک', href: '/ainantik' },
    { name: 'دکوری', href: '/dekori' },
    { name: 'ظروف سرامیکی', href: '/zoroof-seramiki' },
    { name: 'شمع ارگانیک', href: '/sham-organic' },
    { name: 'پاپیه ماشه', href: '/papier-mache' },
    { name: 'پروژه‌های آینانتیک', href: '/projects' },
    { name: 'اتاق سفارش', href: '/custom-order' },
    { name: 'وبلاگ', href: '/blog' },
    { name: 'درباره ما', href: '/about' },
    { name: 'تماس با ما', href: '/contact' }
  ];

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <div className="flex flex-col space-y-4 mt-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2 space-x-reverse">
              <div className="h-8 w-8 golden-gradient rounded-full flex items-center justify-center">
                <span className="text-black font-bold text-lg">ش</span>
              </div>
              <span className="text-lg font-bold golden-text">گالری هنری شهرزاد</span>
            </div>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-6 w-6" />
            </Button>
          </div>
          
          <nav className="space-y-2">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-3 px-4 text-foreground hover:bg-secondary hover:text-secondary-foreground transition-colors duration-200 font-medium rounded-lg"
                onClick={onClose}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          
          <div className="pt-6 border-t">
            <div className="space-y-3">
              <h3 className="font-semibold text-primary">اطلاعات تماس</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>📞 ۰۲۱-۱۲۳۴۵۶۷۸</p>
                <p>📧 info@shahrzadartgallery.com</p>
                <p>📍 تهران، خیابان ولیعصر</p>
              </div>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
