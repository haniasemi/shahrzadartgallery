'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function EditBannerPage() {
  const router = useRouter();
  const params = useParams();
  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    image: '',
    cta: '',
    ctaLink: '',
    showContent: true,
    order: 0,
    active: true
  });
  const [loading, setLoading] = useState(false);
  const [loadingData, setLoadingData] = useState(true);

  useEffect(() => {
    checkAuth();
    loadBanner();
  }, [params.id]);

  const checkAuth = async () => {
    const response = await fetch('/api/admin/verify');
    const data = await response.json();
    
    if (!data.valid) {
      router.push('/admin/login');
    }
  };

  const loadBanner = async () => {
    try {
      setLoadingData(true);
      const response = await fetch(`/api/banners/${params.id}`);
      const data = await response.json();

      if (data.success && data.banner) {
        setFormData(data.banner);
      }
    } catch (error) {
      console.error('Error loading banner:', error);
    } finally {
      setLoadingData(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : (type === 'number' ? parseInt(value) : value)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`/api/banners/${params.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (data.success) {
        router.push('/admin/banners');
      } else {
        alert(data.error || 'خطا در به‌روزرسانی بنر');
      }
    } catch (error) {
      alert('خطا در ارتباط با سرور');
    } finally {
      setLoading(false);
    }
  };

  if (loadingData) {
    return (
      <div className="min-h-screen flex items-center justify-center md:mr-64">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground">در حال بارگذاری...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20 md:mr-64 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 golden-text">ویرایش بنر</h1>

        <Card className="card-elegant">
          <CardHeader>
            <CardTitle>اطلاعات بنر</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">عنوان</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title || ''}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">زیرعنوان</label>
                <input
                  type="text"
                  name="subtitle"
                  value={formData.subtitle || ''}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">آدرس عکس *</label>
                <input
                  type="text"
                  name="image"
                  value={formData.image || ''}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">متن دکمه</label>
                  <input
                    type="text"
                    name="cta"
                    value={formData.cta || ''}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">لینک دکمه</label>
                  <input
                    type="text"
                    name="ctaLink"
                    value={formData.ctaLink || ''}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">ترتیب نمایش</label>
                  <input
                    type="number"
                    name="order"
                    value={formData.order || 0}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <div className="flex items-center gap-6">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="showContent"
                    checked={formData.showContent}
                    onChange={handleChange}
                    className="w-4 h-4"
                  />
                  <span>نمایش محتوا</span>
                </label>

                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="active"
                    checked={formData.active}
                    onChange={handleChange}
                    className="w-4 h-4"
                  />
                  <span>فعال</span>
                </label>
              </div>

              <div className="flex gap-4">
                <Button type="submit" className="btn-golden" disabled={loading}>
                  {loading ? 'در حال ذخیره...' : 'ذخیره تغییرات'}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => router.back()}
                >
                  انصراف
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}



