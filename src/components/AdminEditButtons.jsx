'use client';

import { useState, useEffect } from 'react';
import { Edit, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function AdminEditButtons({ 
  sectionId, 
  sectionType, 
  onEdit, 
  onDelete,
  className = '' 
}) {
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch('/api/auth/verify', { 
          credentials: 'include',
          cache: 'no-store'
        });
        const data = await res.json();
        const isAdminUser = data.valid && (data.user?.role === 'admin' || data.user?.type === 'admin');
        setIsAdmin(isAdminUser);
      } catch (error) {
        console.error('Auth check error:', error);
        setIsAdmin(false);
      } finally {
        setLoading(false);
      }
    };
    checkAuth();
    
    // Check auth every 3 seconds to update if user logs in
    const interval = setInterval(checkAuth, 3000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return null; // Don't show anything while loading
  }

  if (!isAdmin) return null;

  return (
    <div className={`flex gap-2 justify-center items-center z-50 ${className}`}>
      <Button
        variant="outline"
        size="sm"
        onClick={() => onEdit && onEdit(sectionId, sectionType)}
        className="bg-blue-50 hover:bg-blue-100 border-blue-200 text-blue-700 shadow-lg"
      >
        <Edit className="w-4 h-4 ml-1" />
        ویرایش
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() => onDelete && onDelete(sectionId, sectionType)}
        className="bg-red-50 hover:bg-red-100 border-red-200 text-red-700 shadow-lg"
      >
        <Trash2 className="w-4 h-4 ml-1" />
        حذف
      </Button>
    </div>
  );
}

