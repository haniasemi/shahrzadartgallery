'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

export default function LoginPage() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    fullName: ''
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

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: formData.username,
          password: formData.password
        }),
        credentials: 'include'
      });

      const data = await response.json();

      if (data.success) {
        // Wait a bit for cookie to be set
        await new Promise(resolve => setTimeout(resolve, 100));
        
        if (data.role === 'admin') {
          router.push('/admin/dashboard');
        } else {
          router.push('/user/dashboard');
        }
        router.refresh();
      } else {
        setError(data.error || 'خطا در ورود به سیستم');
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('خطا در ارتباط با سرور. لطفاً دوباره تلاش کنید.');
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async (e) => {
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
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: formData.username,
          email: formData.email,
          password: formData.password,
          fullName: formData.fullName
        }),
        credentials: 'include'
      });

      const data = await response.json();

      if (data.success) {
        await new Promise(resolve => setTimeout(resolve, 100));
        router.push('/user/dashboard');
        router.refresh();
      } else {
        setError(data.error || 'خطا در ثبت نام');
      }
    } catch (error) {
      console.error('Register error:', error);
      setError('خطا در ارتباط با سرور');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary/20 py-12 px-4">
      <Card className="w-full max-w-md card-elegant">
        <CardHeader>
          <CardTitle className="text-2xl text-center golden-text">
            {isLogin ? 'ورود به حساب کاربری' : 'ثبت نام'}
          </CardTitle>
          <CardDescription className="text-center">
            {isLogin 
              ? 'لطفاً اطلاعات ورود خود را وارد کنید' 
              : 'لطفاً اطلاعات خود را وارد کنید'}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={isLogin ? handleLogin : handleRegister} className="space-y-4">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
                {error}
              </div>
            )}
            
            {!isLogin && (
              <div>
                <label className="block text-sm font-medium mb-2">نام کامل</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="نام کامل"
                />
              </div>
            )}

            <div>
              <label className="block text-sm font-medium mb-2">نام کاربری</label>
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

            {!isLogin && (
              <div>
                <label className="block text-sm font-medium mb-2">ایمیل</label>
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
            )}

            <div>
              <label className="block text-sm font-medium mb-2">رمز عبور</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                minLength={6}
                className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder={isLogin ? "رمز عبور" : "حداقل ۶ کاراکتر"}
              />
            </div>

            {!isLogin && (
              <div>
                <label className="block text-sm font-medium mb-2">تکرار رمز عبور</label>
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
            )}

            <Button
              type="submit"
              className="w-full btn-golden"
              disabled={loading}
            >
              {loading 
                ? (isLogin ? 'در حال ورود...' : 'در حال ثبت نام...') 
                : (isLogin ? 'ورود' : 'ثبت نام')}
            </Button>

            <div className="text-center mt-4">
              <button
                type="button"
                onClick={() => {
                  setIsLogin(!isLogin);
                  setError('');
                  setFormData({
                    username: '',
                    email: '',
                    password: '',
                    confirmPassword: '',
                    fullName: ''
                  });
                }}
                className="text-sm text-primary hover:underline"
              >
                {isLogin 
                  ? 'حساب کاربری ندارید؟ ثبت نام کنید' 
                  : 'قبلاً ثبت نام کرده‌اید؟ وارد شوید'}
              </button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

