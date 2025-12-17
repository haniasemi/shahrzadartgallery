'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
// import { Textarea } from '@/components/ui/textarea';

export default function AdminSettings() {
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
    const checkAuth = async () => {
      try {
        const res = await fetch('/api/auth/verify', { credentials: 'include' });
        const data = await res.json();
        
        if (!data.valid || data.user?.role !== 'admin') {
          router.push('/login');
          return;
        }
      } catch (error) {
        router.push('/login');
      }
    };
    checkAuth();
    loadSettings();
  }, [router]);

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
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
        credentials: 'include'
      });

      const data = await response.json();

      if (data.success) {
        alert('تنظیمات با موفقیت ذخیره شد');
        router.refresh();
      } else {
        alert('خطا در ذخیره تنظیمات: ' + (data.error || 'خطای ناشناخته'));
      }
    } catch (error) {
      console.error('Save settings error:', error);
      alert('خطا در ذخیره تنظیمات');
    } finally {
      setLoading(false);
    }
  };

  if (loadingData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 golden-text">تنظیمات صفحه اصلی</h1>

        <form onSubmit={handleSubmit}>
          <Card className="card-elegant mb-6">
            <CardHeader>
              <CardTitle>بخش درباره ما</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">عنوان</label>
                <Input
                  name="aboutTitle"
                  value={formData.aboutTitle}
                  onChange={handleChange}
                  placeholder="عنوان بخش درباره ما"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">محتوا</label>
                <textarea
                  name="aboutContent"
                  value={formData.aboutContent}
                  onChange={handleChange}
                  placeholder="محتوا بخش درباره ما"
                  rows={5}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
            </CardContent>
          </Card>

          <Card className="card-elegant mb-6">
            <CardHeader>
              <CardTitle>آمار و دستاوردها</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">مشتری راضی</label>
                  <Input
                    type="number"
                    name="happyCustomers"
                    value={formData.statistics.happyCustomers}
                    onChange={handleStatisticsChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">محصولات</label>
                  <Input
                    type="number"
                    name="products"
                    value={formData.statistics.products}
                    onChange={handleStatisticsChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">سال تجربه</label>
                  <Input
                    type="number"
                    name="yearsExperience"
                    value={formData.statistics.yearsExperience}
                    onChange={handleStatisticsChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">نرخ رضایت</label>
                  <Input
                    type="number"
                    step="0.1"
                    name="satisfactionRate"
                    value={formData.statistics.satisfactionRate}
                    onChange={handleStatisticsChange}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card-elegant mb-6">
            <CardHeader>
              <CardTitle>محصولات پرفروش</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">عنوان</label>
                <Input
                  name="featuredProductsTitle"
                  value={formData.featuredProductsTitle}
                  onChange={handleChange}
                  placeholder="عنوان بخش محصولات پرفروش"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">توضیحات</label>
                <textarea
                  name="featuredProductsDescription"
                  value={formData.featuredProductsDescription}
                  onChange={handleChange}
                  placeholder="توضیحات بخش محصولات پرفروش"
                  rows={3}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
            </CardContent>
          </Card>

          <Button type="submit" className="btn-golden w-full" disabled={loading}>
            {loading ? 'در حال ذخیره...' : 'ذخیره تنظیمات'}
          </Button>
        </form>
      </div>
    </div>
  );
}

