'use client';

import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { 
  Package, 
  FileText, 
  Image as ImageIcon,
  Settings,
  ShoppingCart,
  DollarSign,
  LogOut,
  Menu,
  X,
  LayoutDashboard
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function AdminLayout({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Hide sidebar on mobile by default
    if (window.innerWidth < 768) {
      setSidebarOpen(false);
    }
  }, []);

  // Don't show layout on login and create-admin pages
  if (pathname === '/admin/login' || pathname === '/admin/create-admin') {
    return <>{children}</>;
  }

  const menuItems = [
    { icon: LayoutDashboard, label: 'داشبورد', href: '/admin/dashboard' },
    { icon: Package, label: 'محصولات', href: '/admin/products' },
    { icon: FileText, label: 'وبلاگ', href: '/admin/blogs' },
    { icon: ImageIcon, label: 'بنرها', href: '/admin/banners' },
    { icon: Settings, label: 'تنظیمات صفحه خانه', href: '/admin/homepage' },
    { icon: ShoppingCart, label: 'سفارشات', href: '/admin/orders' },
    { icon: DollarSign, label: 'گزارش مالی', href: '/admin/reports' }
  ];

  const handleLogout = async () => {
    const response = await fetch('/api/admin/logout', { method: 'POST' });
    if (response.ok) {
      router.push('/admin/login');
    }
  };

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      {/* Sidebar */}
      <aside className={`fixed right-0 top-0 h-full w-64 bg-card border-l border-border z-50 transform transition-transform duration-300 ${
        sidebarOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'
      }`}>
        <div className="p-6 border-b border-border">
          <h2 className="text-xl font-bold golden-text">پنل مدیریت</h2>
          <p className="text-sm text-muted-foreground">گالری هنری شهرزاد</p>
        </div>
        
        <nav className="p-4 space-y-2">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
            return (
              <Link
                key={index}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive 
                    ? 'bg-primary/20 text-primary font-semibold' 
                    : 'hover:bg-secondary'
                }`}
                onClick={() => setSidebarOpen(false)}
              >
                <Icon className="w-5 h-5" />
                <span>{item.label}</span>
              </Link>
            );
          })}
          
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-red-50 text-red-600 transition-colors mt-8"
          >
            <LogOut className="w-5 h-5" />
            <span>خروج</span>
          </button>
        </nav>
      </aside>

      {/* Mobile menu button */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="fixed top-4 right-4 z-50 md:hidden p-2 bg-card rounded-lg shadow-lg"
      >
        {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main content */}
      <main className="md:mr-64">
        {children}
      </main>
    </div>
  );
}




