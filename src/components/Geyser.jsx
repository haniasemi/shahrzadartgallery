'use client';

import { useEffect, useRef } from 'react';

export default function Geyser({ className = '' }) {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Geyser base
      ctx.fillStyle = 'rgba(139, 69, 19, 0.8)';
      ctx.beginPath();
      ctx.arc(canvas.width / 2, canvas.height - 100, 50, 0, Math.PI * 2);
      ctx.fill();

      // Geyser water
      ctx.fillStyle = 'rgba(0, 100, 200, 0.3)';
      ctx.beginPath();
      ctx.arc(canvas.width / 2, canvas.height - 100, 30, 0, Math.PI * 2);
      ctx.fill();

      // Steam
      ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
      for (let i = 0; i < 5; i++) {
        ctx.beginPath();
        ctx.arc(canvas.width / 2, canvas.height - 100 - i * 20, 10 - i * 2, 0, Math.PI * 2);
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
