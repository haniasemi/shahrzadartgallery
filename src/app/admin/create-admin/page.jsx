'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function CreateAdminPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('رمز عبور و تکرار آن مطابقت ندارند');
      return;
    }

    if (formData.password.length < 6) {
      setError('رمز عبور باید حداقل ۶ کاراکتر باشد');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('/api/admin/create-admin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: formData.username,
          email: formData.email,
          password: formData.password
        })
      });

      const data = await response.json();

      if (data.success) {
        alert('ادمین با موفقیت ایجاد شد. اکنون می‌توانید وارد شوید.');
        router.push('/admin/login');
      } else {
        setError(data.error || 'خطا در ایجاد ادمین');
      }
    } catch (error) {
      setError('خطا در ارتباط با سرور');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary/20">
      <Card className="w-full max-w-md card-elegant">
        <CardHeader>
          <CardTitle className="text-2xl text-center golden-text">
            ایجاد ادمین اولیه
          </CardTitle>
          <p className="text-center text-sm text-muted-foreground mt-2">
            این صفحه فقط برای ایجاد اولین ادمین است
          </p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
                {error}
              </div>
            )}
            
            <div>
              <label className="block text-sm font-medium mb-2">نام کاربری *</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="نام کاربری"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">ایمیل *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="ایمیل"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">رمز عبور *</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                minLength={6}
                className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="حداقل ۶ کاراکتر"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">تکرار رمز عبور *</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="تکرار رمز عبور"
              />
            </div>

            <Button
              type="submit"
              className="w-full btn-golden"
              disabled={loading}
            >
              {loading ? 'در حال ایجاد...' : 'ایجاد ادمین'}
            </Button>

            <div className="text-center mt-4">
              <a
                href="/admin/login"
                className="text-sm text-primary hover:underline"
              >
                قبلاً ادمین دارید؟ وارد شوید
              </a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}




