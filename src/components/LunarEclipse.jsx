'use client';

import { useEffect, useRef } from 'react';

export default function LunarEclipse({ className = '' }) {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Moon
      ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
      ctx.beginPath();
      ctx.arc(canvas.width / 2, canvas.height / 2, 60, 0, Math.PI * 2);
      ctx.fill();

      // Earth shadow
      ctx.fillStyle = 'rgba(64, 64, 64, 0.8)';
      ctx.beginPath();
      ctx.arc(canvas.width / 2 - 20, canvas.height / 2, 40, 0, Math.PI * 2);
      ctx.fill();

      // Stars
      ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
      for (let i = 0; i < 50; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        ctx.beginPath();
        ctx.arc(x, y, 1, 0, Math.PI * 2);
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
