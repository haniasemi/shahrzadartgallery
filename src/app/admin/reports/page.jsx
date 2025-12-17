'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent } from '@/components/ui/card';
import { DollarSign, ShoppingCart, TrendingUp, Package } from 'lucide-react';

export default function AdminReportsPage() {
  const router = useRouter();
  const [reports, setReports] = useState({
    totalRevenue: 0,
    totalOrders: 0,
    pendingOrders: 0,
    completedOrders: 0,
    orders: []
  });
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    status: '',
    startDate: '',
    endDate: ''
  });

  useEffect(() => {
    checkAuth();
    loadReports();
  }, [filters]);

  const checkAuth = async () => {
    const response = await fetch('/api/admin/verify');
    const data = await response.json();
    
    if (!data.valid) {
      router.push('/admin/login');
    }
  };

  const loadReports = async () => {
    try {
      setLoading(true);
      let url = '/api/orders?';
      if (filters.status) url += `status=${filters.status}&`;
      if (filters.startDate) url += `startDate=${filters.startDate}&`;
      if (filters.endDate) url += `endDate=${filters.endDate}&`;

      const response = await fetch(url);
      const data = await response.json();

      if (data.success) {
        const orders = data.orders || [];
        const totalRevenue = parseFloat(data.totalRevenue?.replace(/,/g, '') || 0);
        const pendingOrders = orders.filter(o => o.status === 'pending').length;
        const completedOrders = orders.filter(o => o.status === 'completed').length;

        setReports({
          totalRevenue,
          totalOrders: orders.length,
          pendingOrders,
          completedOrders,
          orders
        });
      }
    } catch (error) {
      console.error('Error loading reports:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20 md:mr-64 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 golden-text">گزارش مالی</h1>

        {/* Filters */}
        <Card className="card-elegant mb-6">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">وضعیت</label>
                <select
                  name="status"
                  value={filters.status}
                  onChange={handleFilterChange}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary"
                >
                  <option value="">همه</option>
                  <option value="pending">در انتظار</option>
                  <option value="confirmed">تأیید شده</option>
                  <option value="processing">در حال پردازش</option>
                  <option value="completed">تکمیل شده</option>
                  <option value="cancelled">لغو شده</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">از تاریخ</label>
                <input
                  type="date"
                  name="startDate"
                  value={filters.startDate}
                  onChange={handleFilterChange}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">تا تاریخ</label>
                <input
                  type="date"
                  name="endDate"
                  value={filters.endDate}
                  onChange={handleFilterChange}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary"
                />
              </div>
              <div className="flex items-end">
                <button
                  onClick={() => setFilters({ status: '', startDate: '', endDate: '' })}
                  className="w-full px-4 py-2 border border-border rounded-lg hover:bg-secondary transition-colors"
                >
                  پاک کردن فیلترها
                </button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="card-elegant">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">درآمد کل</p>
                  <p className="text-2xl font-bold">{reports.totalRevenue.toLocaleString('fa-IR')} تومان</p>
                </div>
                <div className="w-12 h-12 golden-gradient rounded-full flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-foreground" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card-elegant">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">کل سفارشات</p>
                  <p className="text-2xl font-bold">{reports.totalOrders}</p>
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
                  <p className="text-sm text-muted-foreground mb-2">در انتظار</p>
                  <p className="text-2xl font-bold">{reports.pendingOrders}</p>
                </div>
                <div className="w-12 h-12 golden-gradient rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-foreground" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card-elegant">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">تکمیل شده</p>
                  <p className="text-2xl font-bold">{reports.completedOrders}</p>
                </div>
                <div className="w-12 h-12 golden-gradient rounded-full flex items-center justify-center">
                  <Package className="w-6 h-6 text-foreground" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Orders List */}
        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4 text-muted-foreground">در حال بارگذاری...</p>
          </div>
        ) : reports.orders.length === 0 ? (
          <Card className="card-elegant">
            <CardContent className="p-12 text-center">
              <p className="text-muted-foreground">هیچ سفارشی یافت نشد</p>
            </CardContent>
          </Card>
        ) : (
          <Card className="card-elegant">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-secondary/50">
                    <tr>
                      <th className="px-6 py-3 text-right text-sm font-semibold">شماره سفارش</th>
                      <th className="px-6 py-3 text-right text-sm font-semibold">مشتری</th>
                      <th className="px-6 py-3 text-right text-sm font-semibold">مبلغ</th>
                      <th className="px-6 py-3 text-right text-sm font-semibold">وضعیت</th>
                      <th className="px-6 py-3 text-right text-sm font-semibold">تاریخ</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {reports.orders.map((order) => (
                      <tr key={order._id} className="hover:bg-secondary/30">
                        <td className="px-6 py-4 text-sm">{order.orderNumber}</td>
                        <td className="px-6 py-4 text-sm">{order.customerName}</td>
                        <td className="px-6 py-4 text-sm font-semibold">{order.totalAmount} تومان</td>
                        <td className="px-6 py-4 text-sm">
                          <span className={`px-2 py-1 rounded text-xs ${
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
                        </td>
                        <td className="px-6 py-4 text-sm text-muted-foreground">
                          {new Date(order.createdAt).toLocaleDateString('fa-IR')}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}




