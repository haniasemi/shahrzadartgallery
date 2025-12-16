'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Plus, Edit, Trash2 } from 'lucide-react';

export default function AdminBannersPage() {
  const router = useRouter();
  const [banners, setBanners] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuth();
    loadBanners();
  }, []);

  const checkAuth = async () => {
    const response = await fetch('/api/admin/verify');
    const data = await response.json();
    
    if (!data.valid) {
      router.push('/admin/login');
    }
  };

  const loadBanners = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/banners');
      const data = await response.json();
      
      if (data.success) {
        setBanners(data.banners || []);
      }
    } catch (error) {
      console.error('Error loading banners:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('آیا مطمئن هستید که می‌خواهید این بنر را حذف کنید؟')) {
      return;
    }

    try {
      const response = await fetch(`/api/banners/${id}`, {
        method: 'DELETE'
      });

      const data = await response.json();

      if (data.success) {
        loadBanners();
      } else {
        alert(data.error || 'خطا در حذف بنر');
      }
    } catch (error) {
      alert('خطا در حذف بنر');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20 md:mr-64 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold golden-text">مدیریت بنرها</h1>
          <Link href="/admin/banners/new">
            <Button className="btn-golden">
              <Plus className="w-5 h-5 ml-2" />
              افزودن بنر جدید
            </Button>
          </Link>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4 text-muted-foreground">در حال بارگذاری...</p>
          </div>
        ) : banners.length === 0 ? (
          <Card className="card-elegant">
            <CardContent className="p-12 text-center">
              <p className="text-muted-foreground mb-4">هیچ بنری یافت نشد</p>
              <Link href="/admin/banners/new">
                <Button className="btn-golden">افزودن اولین بنر</Button>
              </Link>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {banners.map((banner) => (
              <Card key={banner._id} className="card-elegant">
                <CardContent className="p-0">
                  <div className="relative aspect-video">
                    {banner.image ? (
                      <Image
                        src={banner.image}
                        alt={banner.title || 'Banner'}
                        fill
                        className="object-cover rounded-t-lg"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-secondary to-primary/20 flex items-center justify-center">
                        <span className="text-4xl opacity-50">🖼️</span>
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold mb-2">{banner.title || 'بدون عنوان'}</h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{banner.subtitle}</p>
                    <div className="flex gap-2">
                      <Link href={`/admin/banners/${banner._id}`} className="flex-1">
                        <Button variant="outline" className="w-full" size="sm">
                          <Edit className="w-4 h-4 ml-2" />
                          ویرایش
                        </Button>
                      </Link>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDelete(banner._id)}
                        className="text-red-600 hover:text-red-700 hover:bg-red-50"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}



