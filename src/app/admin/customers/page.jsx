'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Users } from 'lucide-react';

export default function AdminCustomers() {
  const router = useRouter();
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);

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
  }, [router]);

  useEffect(() => {
    loadCustomers();
  }, []);

  const loadCustomers = async () => {
    try {
      const res = await fetch('/api/admin/customers', { credentials: 'include' });
      const data = await res.json();
      if (data.success) {
        setCustomers(data.customers || []);
      }
    } catch (error) {
      console.error('Load customers error:', error);
    } finally {
      setLoading(false);
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
        <h1 className="text-3xl font-bold mb-8 golden-text">مشتریان</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {customers.map((customer) => (
            <Card key={customer._id} className="card-elegant">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Users className="w-8 h-8 text-primary" />
                  <div>
                    <h3 className="text-lg font-bold">{customer.username}</h3>
                    <p className="text-sm text-muted-foreground">{customer.email}</p>
                  </div>
                </div>
                {customer.fullName && (
                  <p className="text-sm mb-2">نام: {customer.fullName}</p>
                )}
                {customer.phone && (
                  <p className="text-sm mb-2">تلفن: {customer.phone}</p>
                )}
                <p className="text-xs text-muted-foreground">
                  عضویت: {new Date(customer.createdAt).toLocaleDateString('fa-IR')}
                </p>
                {customer.lastLogin && (
                  <p className="text-xs text-muted-foreground">
                    آخرین ورود: {new Date(customer.lastLogin).toLocaleDateString('fa-IR')}
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {customers.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">هنوز مشتری ثبت نشده است</p>
          </div>
        )}
      </div>
    </div>
  );
}

