'use client';

import { useState } from 'react';

export default function StarRating({ rating, onRatingChange, readonly = false }) {
  const [hoverRating, setHoverRating] = useState(0);

  const handleClick = (newRating) => {
    if (!readonly && onRatingChange) {
      onRatingChange(newRating);
    }
  };

  const handleMouseEnter = (newRating) => {
    if (!readonly) {
      setHoverRating(newRating);
    }
  };

  const handleMouseLeave = () => {
    if (!readonly) {
      setHoverRating(0);
    }
  };

  return (
    <div className="flex items-center space-x-1 space-x-reverse">
      {[1, 2, 3, 4, 5].map((star) => {
        const isFilled = star <= (hoverRating || rating);
        return (
          <button
            key={star}
            onClick={() => handleClick(star)}
            onMouseEnter={() => handleMouseEnter(star)}
            onMouseLeave={handleMouseLeave}
            disabled={readonly}
            className={`text-2xl transition-colors duration-200 ${
              readonly ? 'cursor-default' : 'cursor-pointer hover:scale-110'
            } ${isFilled ? 'text-yellow-400' : 'text-gray-300'}`}
          >
            ★
          </button>
        );
      })}
    </div>
  );
}
