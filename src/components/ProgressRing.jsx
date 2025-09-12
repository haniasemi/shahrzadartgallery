'use client';

import { useState, useEffect } from 'react';

export default function ProgressRing({ progress, size = 120, strokeWidth = 8, color = '#99793D' }) {
  const [circumference, setCircumference] = useState(0);
  const [strokeDasharray, setStrokeDasharray] = useState(0);

  useEffect(() => {
    const radius = (size - strokeWidth) / 2;
    const circ = 2 * Math.PI * radius;
    setCircumference(circ);
    setStrokeDasharray(circ);
  }, [size, strokeWidth]);

  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg
        width={size}
        height={size}
        className="transform -rotate-90"
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={(size - strokeWidth) / 2}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="transparent"
          className="text-secondary"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={(size - strokeWidth) / 2}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          className="transition-all duration-500 ease-in-out"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-2xl font-bold" style={{ color }}>
          {progress}%
        </span>
      </div>
    </div>
  );
}
