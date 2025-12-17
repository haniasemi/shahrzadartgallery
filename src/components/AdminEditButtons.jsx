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

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch('/api/auth/verify', { credentials: 'include' });
        const data = await res.json();
        setIsAdmin(data.valid && data.user?.role === 'admin');
      } catch (error) {
        setIsAdmin(false);
      }
    };
    checkAuth();
  }, []);

  if (!isAdmin) return null;

  return (
    <div className={`flex gap-2 justify-center items-center ${className}`}>
      <Button
        variant="outline"
        size="sm"
        onClick={() => onEdit && onEdit(sectionId, sectionType)}
        className="bg-blue-50 hover:bg-blue-100 border-blue-200 text-blue-700"
      >
        <Edit className="w-4 h-4 ml-1" />
        ویرایش
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() => onDelete && onDelete(sectionId, sectionType)}
        className="bg-red-50 hover:bg-red-100 border-red-200 text-red-700"
      >
        <Trash2 className="w-4 h-4 ml-1" />
        حذف
      </Button>
    </div>
  );
}

