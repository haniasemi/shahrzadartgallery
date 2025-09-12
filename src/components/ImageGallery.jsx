'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function ImageGallery({ images, title }) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold golden-text">{title}</h3>
      
      {/* Main Image */}
      <div className="aspect-video bg-gradient-to-br from-secondary to-primary/20 rounded-lg flex items-center justify-center overflow-hidden">
        <span className="text-6xl opacity-50">🖼️</span>
      </div>
      
      {/* Thumbnail Images */}
      <div className="grid grid-cols-4 gap-2">
        {images?.slice(0, 4).map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`aspect-square bg-gradient-to-br from-secondary to-primary/20 rounded-lg flex items-center justify-center transition-all duration-200 ${
              selectedImage === index ? 'ring-2 ring-primary' : 'hover:opacity-80'
            }`}
          >
            <span className="text-2xl opacity-50">🖼️</span>
          </button>
        ))}
      </div>
      
      {/* Navigation */}
      <div className="flex justify-center gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setSelectedImage(Math.max(0, selectedImage - 1))}
          disabled={selectedImage === 0}
        >
          قبلی
        </Button>
        <span className="flex items-center px-4 text-sm text-muted-foreground">
          {selectedImage + 1} از {images?.length || 1}
        </span>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setSelectedImage(Math.min((images?.length || 1) - 1, selectedImage + 1))}
          disabled={selectedImage === (images?.length || 1) - 1}
        >
          بعدی
        </Button>
      </div>
    </div>
  );
}
