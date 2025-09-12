'use client';

import { useEffect, useRef } from 'react';

export default function Cave({ className = '' }) {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Cave entrance
      ctx.fillStyle = 'rgba(64, 64, 64, 0.8)';
      ctx.beginPath();
      ctx.arc(canvas.width / 2, canvas.height - 100, 80, 0, Math.PI * 2);
      ctx.fill();

      // Cave interior
      ctx.fillStyle = 'rgba(32, 32, 32, 0.9)';
      ctx.beginPath();
      ctx.arc(canvas.width / 2, canvas.height - 100, 60, 0, Math.PI * 2);
      ctx.fill();

      // Stalactites
      ctx.fillStyle = 'rgba(128, 128, 128, 0.8)';
      for (let i = 0; i < 5; i++) {
        ctx.beginPath();
        ctx.moveTo(canvas.width / 2 - 40 + i * 20, canvas.height - 100);
        ctx.lineTo(canvas.width / 2 - 40 + i * 20, canvas.height - 80);
        ctx.lineTo(canvas.width / 2 - 35 + i * 20, canvas.height - 80);
        ctx.closePath();
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
