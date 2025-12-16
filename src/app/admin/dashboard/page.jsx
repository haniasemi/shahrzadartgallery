'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { 
  Package, 
  FileText, 
  DollarSign, 
  ShoppingCart,
  ImageIcon
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function AdminDashboard() {
  const router = useRouter();
  const [stats, setStats] = useState({
    products: 0,
    blogs: 0,
    orders: 0,
    revenue: 0
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuth();
    loadStats();
  }, []);

  const checkAuth = async () => {
    const response = await fetch('/api/admin/verify');
    const data = await response.json();
    
    if (!data.valid) {
      router.push('/admin/login');
    }
  };

  const loadStats = async () => {
    try {
      const [productsRes, blogsRes, ordersRes] = await Promise.all([
        fetch('/api/products'),
        fetch('/api/blogs'),
        fetch('/api/orders')
      ]);

      const productsData = await productsRes.json();
      const blogsData = await blogsRes.json();
      const ordersData = await ordersRes.json();

      setStats({
        products: productsData.products?.length || 0,
        blogs: blogsData.blogs?.length || 0,
        orders: ordersData.orders?.length || 0,
        revenue: ordersData.totalRevenue || 0
      });
    } catch (error) {
      console.error('Error loading stats:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground">در حال بارگذاری...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 golden-text">داشبورد</h1>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="card-elegant">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">محصولات</p>
                  <p className="text-3xl font-bold">{stats.products}</p>
                </div>
                <div className="w-12 h-12 golden-gradient rounded-full flex items-center justify-center">
                  <Package className="w-6 h-6 text-foreground" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card-elegant">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">مقالات</p>
                  <p className="text-3xl font-bold">{stats.blogs}</p>
                </div>
                <div className="w-12 h-12 golden-gradient rounded-full flex items-center justify-center">
                  <FileText className="w-6 h-6 text-foreground" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card-elegant">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">سفارشات</p>
                  <p className="text-3xl font-bold">{stats.orders}</p>
                </div>
                <div className="w-12 h-12 golden-gradient rounded-full flex items-center justify-center">
                  <ShoppingCart className="w-6 h-6 text-foreground" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card-elegant">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">درآمد کل</p>
                  <p className="text-3xl font-bold">{stats.revenue} تومان</p>
                </div>
                <div className="w-12 h-12 golden-gradient rounded-full flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-foreground" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="card-elegant">
          <CardContent className="p-6">
            <h2 className="text-xl font-bold mb-4">دسترسی سریع</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link
                href="/admin/products/new"
                className="p-4 border border-border rounded-lg hover:bg-secondary transition-colors text-center"
              >
                <Package className="w-8 h-8 mx-auto mb-2 text-primary" />
                <p className="font-medium">افزودن محصول جدید</p>
              </Link>
              
              <Link
                href="/admin/blogs/new"
                className="p-4 border border-border rounded-lg hover:bg-secondary transition-colors text-center"
              >
                <FileText className="w-8 h-8 mx-auto mb-2 text-primary" />
                <p className="font-medium">افزودن مقاله جدید</p>
              </Link>
              
              <Link
                href="/admin/banners/new"
                className="p-4 border border-border rounded-lg hover:bg-secondary transition-colors text-center"
              >
                <ImageIcon className="w-8 h-8 mx-auto mb-2 text-primary" />
                <p className="font-medium">افزودن بنر جدید</p>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
