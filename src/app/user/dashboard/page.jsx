'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Package, MessageSquare } from 'lucide-react';

export default function UserDashboard() {
  const router = useRouter();
  const [authUser, setAuthUser] = useState(null);
  const [newProducts, setNewProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch('/api/auth/verify', { credentials: 'include' });
        const data = await res.json();
        
        if (!data.valid) {
          router.push('/login');
          return;
        }
        
        setAuthUser(data.user);
      } catch (error) {
        console.error('Auth check error:', error);
        router.push('/login');
      } finally {
        setLoading(false);
      }
    };
    checkAuth();
  }, [router]);

  useEffect(() => {
    if (authUser) {
      loadNewProducts();
    }
  }, [authUser]);

  const loadNewProducts = async () => {
    try {
      const res = await fetch('/api/products?limit=6&sort=newest', { credentials: 'include' });
      const data = await res.json();
      if (data.success) {
        setNewProducts(data.products || []);
      }
    } catch (error) {
      console.error('Load products error:', error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 golden-text">
          خوش آمدید {authUser?.username}
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <Link href="/user/products">
            <Card className="card-elegant hover:shadow-xl transition-all cursor-pointer">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">محصولات</p>
                    <p className="text-2xl font-bold">جدید</p>
                  </div>
                  <Package className="w-8 h-8 text-primary" />
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link href="/user/messages">
            <Card className="card-elegant hover:shadow-xl transition-all cursor-pointer">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">پیام‌ها</p>
                    <p className="text-2xl font-bold">گفتگو</p>
                  </div>
                  <MessageSquare className="w-8 h-8 text-primary" />
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">محصولات جدید</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newProducts.map((product) => (
              <Card key={product._id} className="card-elegant overflow-hidden">
                <div className="relative h-48 w-full">
                  {product.images && product.images.length > 0 && (
                    <Image
                      src={product.images[0]}
                      alt={product.title}
                      fill
                      className="object-cover"
                    />
                  )}
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-bold mb-2">{product.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-primary">{product.price}</span>
                    <Link href={`/products/${product.slug || product._id}`}>
                      <Button variant="outline" size="sm">مشاهده</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          {newProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">هنوز محصول جدیدی وجود ندارد</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

