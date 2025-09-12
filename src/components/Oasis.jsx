'use client';

import { useEffect, useRef } from 'react';

export default function Oasis({ className = '' }) {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Desert
      ctx.fillStyle = 'rgba(255, 228, 196, 0.8)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Oasis water
      ctx.fillStyle = 'rgba(0, 100, 200, 0.3)';
      ctx.beginPath();
      ctx.arc(canvas.width / 2, canvas.height - 100, 100, 0, Math.PI * 2);
      ctx.fill();

      // Palm trees
      ctx.fillStyle = 'rgba(139, 69, 19, 0.8)';
      for (let i = 0; i < 3; i++) {
        ctx.fillRect(canvas.width / 2 - 50 + i * 50, canvas.height - 100, 10, 80);
      }

      // Palm leaves
      ctx.fillStyle = 'rgba(0, 128, 0, 0.8)';
      for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        ctx.arc(canvas.width / 2 - 50 + i * 50, canvas.height - 100, 30, 0, Math.PI * 2);
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
