'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function NewProductPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    subCategory: '',
    price: '',
    images: [],
    size: '',
    material: '',
    style: '',
    inStock: true,
    slug: ''
  });
  const [imageInput, setImageInput] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    const response = await fetch('/api/admin/verify');
    const data = await response.json();
    
    if (!data.valid) {
      router.push('/admin/login');
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const addImage = () => {
    if (imageInput.trim()) {
      setFormData(prev => ({
        ...prev,
        images: [...prev.images, imageInput.trim()]
      }));
      setImageInput('');
    }
  };

  const removeImage = (index) => {
    setFormData(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (data.success) {
        router.push('/admin/products');
      } else {
        alert(data.error || 'خطا در اضافه کردن محصول');
      }
    } catch (error) {
      alert('خطا در ارتباط با سرور');
    } finally {
      setLoading(false);
    }
  };

  const categories = ['آینانتیک', 'دکوری', 'ظروف سرامیکی', 'شمع ارگانیک', 'پاپیه ماشه'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20 md:mr-64 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 golden-text">افزودن محصول جدید</h1>

        <Card className="card-elegant">
          <CardHeader>
            <CardTitle>اطلاعات محصول</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">عنوان *</label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">دسته‌بندی *</label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary"
                  >
                    <option value="">انتخاب کنید</option>
                    {categories.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">توضیحات *</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">قیمت *</label>
                  <input
                    type="text"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    required
                    placeholder="مثال: ۲,۵۰۰,۰۰۰"
                    className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">اندازه</label>
                  <input
                    type="text"
                    name="size"
                    value={formData.size}
                    onChange={handleChange}
                    placeholder="مثال: ۵۰ × ۷۰ سانتی‌متر"
                    className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">جنس</label>
                  <input
                    type="text"
                    name="material"
                    value={formData.material}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">عکس‌ها *</label>
                <div className="flex gap-2 mb-2">
                  <input
                    type="text"
                    value={imageInput}
                    onChange={(e) => setImageInput(e.target.value)}
                    placeholder="/path/to/image.jpg"
                    className="flex-1 px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary"
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        addImage();
                      }
                    }}
                  />
                  <Button type="button" onClick={addImage} variant="outline">
                    افزودن
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {formData.images.map((img, index) => (
                    <div key={index} className="flex items-center gap-2 bg-secondary px-3 py-1 rounded">
                      <span className="text-sm">{img.split('/').pop()}</span>
                      <button
                        type="button"
                        onClick={() => removeImage(index)}
                        className="text-red-600 hover:text-red-700"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="inStock"
                    checked={formData.inStock}
                    onChange={handleChange}
                    className="w-4 h-4"
                  />
                  <span>موجود در انبار</span>
                </label>
              </div>

              <div className="flex gap-4">
                <Button type="submit" className="btn-golden" disabled={loading}>
                  {loading ? 'در حال ذخیره...' : 'ذخیره محصول'}
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



