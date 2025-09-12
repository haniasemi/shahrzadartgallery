import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* اطلاعات تماس */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 space-x-reverse">
              <div className="relative h-10 w-12">
                <Image
                  src="/photo_2025-09-06_06-38-01.jpg"
                  alt="لوگوی گالری هنری شهرزاد"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold text-white">گالری هنری شهرزاد</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              گالری هنری شهرزاد با بیش از یک دهه تجربه در زمینه تولید و عرضه محصولات هنری و دکوری، 
              آماده ارائه بهترین خدمات به شما عزیزان است.
            </p>
            <div className="space-y-2">
              <p className="text-sm text-gray-300">
                <span className="text-light-gold">آدرس:</span> تهران، خیابان ولیعصر
              </p>
              <p className="text-sm text-gray-300">
                <span className="text-light-gold">تلفن:</span> ۰۲۱-۱۲۳۴۵۶۷۸
              </p>
              <p className="text-sm text-gray-300">
                <span className="text-light-gold">ایمیل:</span> info@shahrzadartgallery.com
              </p>
            </div>
          </div>

          {/* دسته‌بندی محصولات */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-light-gold">دسته‌بندی محصولات</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/ainantik" className="text-gray-300 hover:text-light-gold transition-colors duration-200 text-sm">
                  آینانتیک
                </Link>
              </li>
              <li>
                <Link href="/dekori" className="text-gray-300 hover:text-light-gold transition-colors duration-200 text-sm">
                  دکوری
                </Link>
              </li>
              <li>
                <Link href="/zoroof-seramiki" className="text-gray-300 hover:text-light-gold transition-colors duration-200 text-sm">
                  ظروف سرامیکی
                </Link>
              </li>
              <li>
                <Link href="/sham-organic" className="text-gray-300 hover:text-light-gold transition-colors duration-200 text-sm">
                  شمع ارگانیک
                </Link>
              </li>
              <li>
                <Link href="/papier-mache" className="text-gray-300 hover:text-light-gold transition-colors duration-200 text-sm">
                  پاپیه ماشه
                </Link>
              </li>
            </ul>
          </div>

          {/* خدمات */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-light-gold">خدمات</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/custom-order" className="text-gray-300 hover:text-light-gold transition-colors duration-200 text-sm">
                  اتاق سفارش
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-300 hover:text-light-gold transition-colors duration-200 text-sm">
                  پروژه‌های آینانتیک
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-light-gold transition-colors duration-200 text-sm">
                  وبلاگ
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-light-gold transition-colors duration-200 text-sm">
                  درباره ما
                </Link>
              </li>
            </ul>
          </div>

          {/* شبکه‌های اجتماعی */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-light-gold">شبکه‌های اجتماعی</h3>
            <div className="flex space-x-4 space-x-reverse">
              <a href="#" className="w-10 h-10 golden-gradient rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200">
                <span className="text-black font-bold">ت</span>
              </a>
              <a href="#" className="w-10 h-10 golden-gradient rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200">
                <span className="text-black font-bold">ا</span>
              </a>
              <a href="#" className="w-10 h-10 golden-gradient rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200">
                <span className="text-black font-bold">ی</span>
              </a>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-gray-300">
                ما را در شبکه‌های اجتماعی دنبال کنید تا از جدیدترین محصولات و تخفیف‌ها باخبر شوید.
              </p>
            </div>
          </div>
        </div>

        {/* خط جداکننده */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © ۱۴۰۳ گالری هنری شهرزاد. تمامی حقوق محفوظ است.
            </p>
            <div className="flex space-x-6 space-x-reverse text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-light-gold transition-colors duration-200">
                حریم خصوصی
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-light-gold transition-colors duration-200">
                شرایط استفاده
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
