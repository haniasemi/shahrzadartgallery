'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function AdminEditToolbar() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    let isMounted = true;

    async function checkAdmin() {
      try {
        const res = await fetch('/api/admin/verify', {
          method: 'GET',
          credentials: 'include',
        });

        if (!res.ok) return;

        const data = await res.json();
        if (isMounted && data?.valid) {
          setIsAdmin(true);
        }
      } catch (e) {
        // ignore errors – فقط نوار ابزار را نشان نده
      }
    }

    checkAdmin();

    return () => {
      isMounted = false;
    };
  }, []);

  if (!isAdmin) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <div className="rounded-xl bg-black/70 text-white shadow-lg px-4 py-3 space-y-2 text-sm backdrop-blur">
        <div className="font-semibold text-xs mb-1">
          حالت مدیر فعال است
        </div>
        <div className="flex flex-wrap gap-2">
          <ToolbarLink href="/admin/products" label="ویرایش محصولات" />
          <ToolbarLink href="/admin/banners" label="ویرایش بنرها" />
          <ToolbarLink href="/admin/homepage" label="تنظیمات صفحه اصلی" />
          <ToolbarLink href="/admin/blogs" label="مدیریت مقالات" />
        </div>
      </div>
    </div>
  );
}

function ToolbarLink({ href, label }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/10 px-3 py-1 text-xs hover:bg-white/20 transition-colors"
    >
      {label}
    </Link>
  );
}


