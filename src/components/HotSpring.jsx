'use client';

import { useEffect, useRef } from 'react';

export default function HotSpring({ className = '' }) {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Hot spring
      ctx.fillStyle = 'rgba(0, 100, 200, 0.3)';
      ctx.beginPath();
      ctx.arc(canvas.width / 2, canvas.height - 100, 80, 0, Math.PI * 2);
      ctx.fill();

      // Hot spring center
      ctx.fillStyle = 'rgba(255, 0, 0, 0.3)';
      ctx.beginPath();
      ctx.arc(canvas.width / 2, canvas.height - 100, 40, 0, Math.PI * 2);
      ctx.fill();

      // Steam
      ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
      for (let i = 0; i < 8; i++) {
        ctx.beginPath();
        ctx.arc(canvas.width / 2, canvas.height - 100 - i * 15, 8 - i, 0, Math.PI * 2);
        ctx.fill();
      }
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
