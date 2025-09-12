'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

export default function Toast({ message, type = 'info', duration = 3000, onClose }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onClose, 300);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const types = {
    success: 'bg-green-500 text-white',
    error: 'bg-red-500 text-white',
    warning: 'bg-yellow-500 text-black',
    info: 'bg-blue-500 text-white'
  };

  const icons = {
    success: '✓',
    error: '✕',
    warning: '⚠',
    info: 'ℹ'
  };

  return (
    <div
      className={`fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg transition-all duration-300 ${
        isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
      } ${types[type]}`}
    >
      <div className="flex items-center gap-3">
        <span className="text-xl">{icons[type]}</span>
        <span>{message}</span>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => {
            setIsVisible(false);
            setTimeout(onClose, 300);
          }}
          className="h-6 w-6 text-current hover:bg-black/10"
        >
          ×
        </Button>
      </div>
    </div>
  );
}
