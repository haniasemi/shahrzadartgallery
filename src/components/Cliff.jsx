'use client';

import { useEffect, useRef } from 'react';

export default function Cliff({ className = '' }) {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Cliff
      ctx.fillStyle = 'rgba(139, 69, 19, 0.8)';
      ctx.fillRect(0, 0, canvas.width, canvas.height - 100);

      // Cliff edge
      ctx.fillStyle = 'rgba(101, 67, 33, 0.8)';
      ctx.fillRect(0, canvas.height - 100, canvas.width, 10);

      // Ground
      ctx.fillStyle = 'rgba(160, 82, 45, 0.8)';
      ctx.fillRect(0, canvas.height - 90, canvas.width, 90);

      // Ocean
      ctx.fillStyle = 'rgba(0, 100, 200, 0.3)';
      ctx.fillRect(0, canvas.height - 50, canvas.width, 50);
    };

    draw();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 z-0 ${className}`}
      style={{ background: 'transparent' }}
    />
  );
}
