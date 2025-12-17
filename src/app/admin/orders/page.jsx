'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function AdminOrdersPage() {
  const router = useRouter();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuth();
    loadOrders();
  }, []);

  const checkAuth = async () => {
    const response = await fetch('/api/admin/verify');
    const data = await response.json();
    
    if (!data.valid) {
      router.push('/admin/login');
    }
  };

  const loadOrders = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/orders');
      const data = await response.json();

      if (data.success) {
        setOrders(data.orders || []);
      }
    } catch (error) {
      console.error('Error loading orders:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateOrderStatus = async (orderId, newStatus) => {
    try {
      const response = await fetch(`/api/orders/${orderId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ status: newStatus })
      });

      const data = await response.json();

      if (data.success) {
        loadOrders();
      } else {
        alert(data.error || 'خطا در به‌روزرسانی سفارش');
      }
    } catch (error) {
      alert('خطا در ارتباط با سرور');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20 md:mr-64 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 golden-text">مدیریت سفارشات</h1>

        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4 text-muted-foreground">در حال بارگذاری...</p>
          </div>
        ) : orders.length === 0 ? (
          <Card className="card-elegant">
            <CardContent className="p-12 text-center">
              <p className="text-muted-foreground">هیچ سفارشی یافت نشد</p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-6">
            {orders.map((order) => (
              <Card key={order._id} className="card-elegant">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">سفارش #{order.orderNumber}</h3>
                      <p className="text-muted-foreground">مشتری: {order.customerName}</p>
                      <p className="text-muted-foreground">ایمیل: {order.customerEmail}</p>
                      <p className="text-muted-foreground">تلفن: {order.customerPhone}</p>
                    </div>
                    <div className="text-left">
                      <p className="text-lg font-bold text-primary mb-2">{order.totalAmount} تومان</p>
                      <span className={`px-3 py-1 rounded text-sm ${
                        order.status === 'completed' ? 'bg-green-100 text-green-700' :
                        order.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                        order.status === 'cancelled' ? 'bg-red-100 text-red-700' :
                        'bg-blue-100 text-blue-700'
                      }`}>
                        {order.status === 'completed' ? 'تکمیل شده' :
                         order.status === 'pending' ? 'در انتظار' :
                         order.status === 'cancelled' ? 'لغو شده' :
                         order.status === 'confirmed' ? 'تأیید شده' :
                         'در حال پردازش'}
                      </span>
                    </div>
                  </div>

                  {order.notes && (
                    <div className="mb-4 p-3 bg-secondary/50 rounded">
                      <p className="text-sm"><strong>یادداشت:</strong> {order.notes}</p>
                    </div>
                  )}

                  <div className="flex gap-2 mt-4">
                    {order.status === 'pending' && (
                      <>
                        <Button
                          size="sm"
                          onClick={() => updateOrderStatus(order._id, 'confirmed')}
                          className="btn-golden"
                        >
                          تأیید سفارش
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => updateOrderStatus(order._id, 'cancelled')}
                          className="text-red-600"
                        >
                          لغو سفارش
                        </Button>
                      </>
                    )}
                    {order.status === 'confirmed' && (
                      <Button
                        size="sm"
                        onClick={() => updateOrderStatus(order._id, 'processing')}
                        className="btn-golden"
                      >
                        شروع پردازش
                      </Button>
                    )}
                    {order.status === 'processing' && (
                      <Button
                        size="sm"
                        onClick={() => updateOrderStatus(order._id, 'completed')}
                        className="btn-golden"
                      >
                        تکمیل سفارش
                      </Button>
                    )}
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




