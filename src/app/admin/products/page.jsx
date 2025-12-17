'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Plus, Edit, Trash2, ArrowRight } from 'lucide-react';

export default function AdminProductsPage() {
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    checkAuth();
    loadProducts();
  }, [filter]);

  const checkAuth = async () => {
    const response = await fetch('/api/admin/verify');
    const data = await response.json();
    
    if (!data.valid) {
      router.push('/admin/login');
    }
  };

  const loadProducts = async () => {
    try {
      setLoading(true);
      const url = filter !== 'all' ? `/api/products?category=${filter}` : '/api/products';
      const response = await fetch(url);
      const data = await response.json();
      
      if (data.success) {
        setProducts(data.products || []);
      }
    } catch (error) {
      console.error('Error loading products:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('آیا مطمئن هستید که می‌خواهید این محصول را حذف کنید؟')) {
      return;
    }

    try {
      const response = await fetch(`/api/products/${id}`, {
        method: 'DELETE'
      });

      const data = await response.json();

      if (data.success) {
        loadProducts();
      } else {
        alert(data.error || 'خطا در حذف محصول');
      }
    } catch (error) {
      alert('خطا در حذف محصول');
    }
  };

  const categories = ['all', 'آینانتیک', 'دکوری', 'ظروف سرامیکی', 'شمع ارگانیک', 'پاپیه ماشه'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20 md:mr-64 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold golden-text">مدیریت محصولات</h1>
          <Link href="/admin/products/new">
            <Button className="btn-golden">
              <Plus className="w-5 h-5 ml-2" />
              افزودن محصول جدید
            </Button>
          </Link>
        </div>

        {/* Filter */}
        <div className="mb-6 flex gap-2 flex-wrap">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={filter === cat ? 'default' : 'outline'}
              onClick={() => setFilter(cat)}
              className={filter === cat ? 'btn-golden' : ''}
            >
              {cat === 'all' ? 'همه' : cat}
            </Button>
          ))}
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4 text-muted-foreground">در حال بارگذاری...</p>
          </div>
        ) : products.length === 0 ? (
          <Card className="card-elegant">
            <CardContent className="p-12 text-center">
              <p className="text-muted-foreground mb-4">هیچ محصولی یافت نشد</p>
              <Link href="/admin/products/new">
                <Button className="btn-golden">افزودن اولین محصول</Button>
              </Link>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <Card key={product._id} className="card-elegant">
                <CardContent className="p-0">
                  <div className="relative aspect-square">
                    {product.images && product.images.length > 0 ? (
                      <Image
                        src={product.images[0]}
                        alt={product.title}
                        fill
                        className="object-cover rounded-t-lg"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-secondary to-primary/20 flex items-center justify-center">
                        <span className="text-4xl opacity-50">📦</span>
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold mb-2 line-clamp-1">{product.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{product.category}</p>
                    <p className="text-lg font-bold text-primary mb-4">{product.price} تومان</p>
                    <div className="flex gap-2">
                      <Link href={`/admin/products/${product._id}`} className="flex-1">
                        <Button variant="outline" className="w-full" size="sm">
                          <Edit className="w-4 h-4 ml-2" />
                          ویرایش
                        </Button>
                      </Link>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDelete(product._id)}
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




