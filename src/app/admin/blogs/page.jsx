'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Plus, Edit, Trash2 } from 'lucide-react';

export default function AdminBlogsPage() {
  const router = useRouter();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuth();
    loadBlogs();
  }, []);

  const checkAuth = async () => {
    const response = await fetch('/api/admin/verify');
    const data = await response.json();
    
    if (!data.valid) {
      router.push('/admin/login');
    }
  };

  const loadBlogs = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/blogs');
      const data = await response.json();
      
      if (data.success) {
        setBlogs(data.blogs || []);
      }
    } catch (error) {
      console.error('Error loading blogs:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('آیا مطمئن هستید که می‌خواهید این مقاله را حذف کنید؟')) {
      return;
    }

    try {
      const response = await fetch(`/api/blogs/${id}`, {
        method: 'DELETE'
      });

      const data = await response.json();

      if (data.success) {
        loadBlogs();
      } else {
        alert(data.error || 'خطا در حذف مقاله');
      }
    } catch (error) {
      alert('خطا در حذف مقاله');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20 md:mr-64 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold golden-text">مدیریت وبلاگ</h1>
          <Link href="/admin/blogs/new">
            <Button className="btn-golden">
              <Plus className="w-5 h-5 ml-2" />
              افزودن مقاله جدید
            </Button>
          </Link>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4 text-muted-foreground">در حال بارگذاری...</p>
          </div>
        ) : blogs.length === 0 ? (
          <Card className="card-elegant">
            <CardContent className="p-12 text-center">
              <p className="text-muted-foreground mb-4">هیچ مقاله‌ای یافت نشد</p>
              <Link href="/admin/blogs/new">
                <Button className="btn-golden">افزودن اولین مقاله</Button>
              </Link>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            {blogs.map((blog) => (
              <Card key={blog._id} className="card-elegant">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
                      <p className="text-muted-foreground mb-2 line-clamp-2">{blog.excerpt}</p>
                      <div className="flex gap-4 text-sm text-muted-foreground">
                        <span>دسته: {blog.category}</span>
                        <span>نویسنده: {blog.author}</span>
                        <span>تاریخ: {blog.date}</span>
                        <span>بازدید: {blog.views || 0}</span>
                      </div>
                    </div>
                    <div className="flex gap-2 mr-4">
                      <Link href={`/admin/blogs/${blog._id}`}>
                        <Button variant="outline" size="sm">
                          <Edit className="w-4 h-4 ml-2" />
                          ویرایش
                        </Button>
                      </Link>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDelete(blog._id)}
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



