'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function AdminHomePageSettings() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    aboutTitle: '',
    aboutContent: '',
    statistics: {
      happyCustomers: 500,
      products: 1000,
      yearsExperience: 15,
      satisfactionRate: 4.9
    },
    featuredProductsTitle: '',
    featuredProductsDescription: '',
    testimonialsTitle: '',
    testimonialsDescription: '',
    blogTitle: '',
    blogDescription: '',
    ctaTitle: '',
    ctaDescription: ''
  });
  const [loading, setLoading] = useState(false);
  const [loadingData, setLoadingData] = useState(true);

  useEffect(() => {
    checkAuth();
    loadSettings();
  }, []);

  const checkAuth = async () => {
    const response = await fetch('/api/admin/verify');
    const data = await response.json();
    
    if (!data.valid) {
      router.push('/admin/login');
    }
  };

  const loadSettings = async () => {
    try {
      setLoadingData(true);
      const response = await fetch('/api/homepage');
      const data = await response.json();

      if (data.success && data.settings) {
        setFormData(data.settings);
      }
    } catch (error) {
      console.error('Error loading settings:', error);
    } finally {
      setLoadingData(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleStatisticsChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      statistics: {
        ...prev.statistics,
        [name]: parseFloat(value) || 0
      }
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/homepage', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (data.success) {
        alert('تنظیمات با موفقیت ذخیره شد');
      } else {
        alert(data.error || 'خطا در ذخیره تنظیمات');
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
        <h1 className="text-3xl font-bold mb-8 golden-text">تنظیمات صفحه خانه</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* About Section */}
          <Card className="card-elegant">
            <CardHeader>
              <CardTitle>بخش درباره ما</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">عنوان</label>
                <input
                  type="text"
                  name="aboutTitle"
                  value={formData.aboutTitle || ''}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">محتوا</label>
                <textarea
                  name="aboutContent"
                  value={formData.aboutContent || ''}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary"
                />
              </div>
            </CardContent>
          </Card>

          {/* Statistics */}
          <Card className="card-elegant">
            <CardHeader>
              <CardTitle>آمار و دستاوردها</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">مشتری راضی</label>
                <input
                  type="number"
                  name="happyCustomers"
                  value={formData.statistics?.happyCustomers || 0}
                  onChange={handleStatisticsChange}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">محصول تولیدی</label>
                <input
                  type="number"
                  name="products"
                  value={formData.statistics?.products || 0}
                  onChange={handleStatisticsChange}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">سال تجربه</label>
                <input
                  type="number"
                  name="yearsExperience"
                  value={formData.statistics?.yearsExperience || 0}
                  onChange={handleStatisticsChange}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">امتیاز رضایت</label>
                <input
                  type="number"
                  step="0.1"
                  name="satisfactionRate"
                  value={formData.statistics?.satisfactionRate || 0}
                  onChange={handleStatisticsChange}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary"
                />
              </div>
            </CardContent>
          </Card>

          {/* Featured Products */}
          <Card className="card-elegant">
            <CardHeader>
              <CardTitle>بخش محصولات پرفروش</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">عنوان</label>
                <input
                  type="text"
                  name="featuredProductsTitle"
                  value={formData.featuredProductsTitle || ''}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">توضیحات</label>
                <textarea
                  name="featuredProductsDescription"
                  value={formData.featuredProductsDescription || ''}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary"
                />
              </div>
            </CardContent>
          </Card>

          {/* Testimonials */}
          <Card className="card-elegant">
            <CardHeader>
              <CardTitle>بخش نظرات مشتریان</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">عنوان</label>
                <input
                  type="text"
                  name="testimonialsTitle"
                  value={formData.testimonialsTitle || ''}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">توضیحات</label>
                <textarea
                  name="testimonialsDescription"
                  value={formData.testimonialsDescription || ''}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary"
                />
              </div>
            </CardContent>
          </Card>

          {/* Blog Section */}
          <Card className="card-elegant">
            <CardHeader>
              <CardTitle>بخش مقالات</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">عنوان</label>
                <input
                  type="text"
                  name="blogTitle"
                  value={formData.blogTitle || ''}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">توضیحات</label>
                <textarea
                  name="blogDescription"
                  value={formData.blogDescription || ''}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary"
                />
              </div>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <Card className="card-elegant">
            <CardHeader>
              <CardTitle>بخش CTA (دعوت به اقدام)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">عنوان</label>
                <input
                  type="text"
                  name="ctaTitle"
                  value={formData.ctaTitle || ''}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">توضیحات</label>
                <textarea
                  name="ctaDescription"
                  value={formData.ctaDescription || ''}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary"
                />
              </div>
            </CardContent>
          </Card>

          <div className="flex gap-4">
            <Button type="submit" className="btn-golden" disabled={loading}>
              {loading ? 'در حال ذخیره...' : 'ذخیره تنظیمات'}
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
      </div>
    </div>
  );
}



