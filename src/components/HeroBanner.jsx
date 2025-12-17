'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import AdminEditButtons from '@/components/AdminEditButtons';

export default function HeroBanner() {
  const router = useRouter();
  const [banners, setBanners] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let isMounted = true;

    async function loadBanners() {
      try {
        const res = await fetch('/api/banners', { cache: 'no-store' });
        const data = await res.json();
        if (isMounted && data?.success && Array.isArray(data.banners)) {
          setBanners(data.banners);
        }
      } catch (e) {
        // اگر خطایی بود، به صورت سایلنت رد می‌کنیم و از بنر پیش‌فرض استفاده می‌شود
        console.error('Error loading banners:', e);
      }
    }

    loadBanners();
    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (banners.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [banners.length]);

  const hasBanners = banners.length > 0;
  const banner = hasBanners ? banners[currentIndex] : null;
  const imageSrc = banner?.image || '/photo_2025-09-06_06-37-29.jpg';

  const handleEdit = (bannerId) => {
    router.push(`/admin/banners/${bannerId}`);
  };

  const handleDelete = async (bannerId) => {
    if (!confirm('آیا مطمئن هستید که می‌خواهید این بنر را حذف کنید؟')) {
      return;
    }

    try {
      const res = await fetch(`/api/banners/${bannerId}`, {
        method: 'DELETE',
        credentials: 'include'
      });
      const data = await res.json();
      
      if (data.success) {
        // Reload banners
        const res2 = await fetch('/api/banners', { cache: 'no-store' });
        const data2 = await res2.json();
        if (data2?.success && Array.isArray(data2.banners)) {
          setBanners(data2.banners);
          if (currentIndex >= data2.banners.length) {
            setCurrentIndex(0);
          }
        }
        router.refresh();
      } else {
        alert('خطا در حذف بنر: ' + (data.error || 'خطای ناشناخته'));
      }
    } catch (error) {
      console.error('Delete banner error:', error);
      alert('خطا در حذف بنر');
    }
  };

  return (
    <section id="banner-section" className="relative w-full m-0 p-0 mt-5 md:-mt-20">
      <div
        id="banner-image"
        className="relative w-full h-auto md:h-[800px] m-0 p-0"
      >
        <Image
          src={imageSrc}
          alt={banner?.title || 'گالری هنری شهرزاد'}
          width={1280}
          height={800}
          className="w-full h-auto md:h-[800px] object-cover m-0 p-0"
          sizes="100vw"
          priority
        />

        {hasBanners && banner?.showContent !== false && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-end md:items-center">
            <div className="container mx-auto px-4 pb-10 md:pb-0">
              <div className="max-w-xl md:max-w-2xl space-y-4 md:space-y-6">
                {banner?.title && (
                  <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg">
                    {banner.title}
                  </h1>
                )}
                {banner?.subtitle && (
                  <p className="text-sm md:text-lg text-white/90 leading-relaxed drop-shadow">
                    {banner.subtitle}
                  </p>
                )}
                {(banner?.cta && banner?.ctaLink) && (
                  <Button
                    asChild
                    size="lg"
                    className="bg-white text-black hover:bg-white/90 text-sm md:text-base px-6 md:px-8 py-2 md:py-3"
                  >
                    <Link href={banner.ctaLink}>
                      {banner.cta}
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          </div>
        )}

        {hasBanners && banners.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {banners.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-2 w-2 rounded-full border border-white/60 transition-all ${
                  i === currentIndex ? 'bg-white w-5' : 'bg-white/40'
                }`}
                aria-label={`بنر ${i + 1}`}
              />
            ))}
          </div>
        )}

        {banner && (
          <div className="absolute top-4 right-4 z-10">
            <AdminEditButtons
              sectionId={banner._id}
              sectionType="banner"
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          </div>
        )}
      </div>
    </section>
  );
}


