'use client';

import { useEffect, useRef } from 'react';

export default function Mirage({ className = '' }) {
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

      // Mirage
      ctx.fillStyle = 'rgba(0, 100, 200, 0.2)';
      ctx.beginPath();
      ctx.moveTo(0, canvas.height - 100);
      ctx.lineTo(canvas.width / 2, canvas.height - 200);
      ctx.lineTo(canvas.width, canvas.height - 100);
      ctx.closePath();
      ctx.fill();

      // Mirage reflection
      ctx.fillStyle = 'rgba(0, 100, 200, 0.1)';
      ctx.beginPath();
      ctx.moveTo(0, canvas.height - 100);
      ctx.lineTo(canvas.width / 2, canvas.height - 150);
      ctx.lineTo(canvas.width, canvas.height - 100);
      ctx.closePath();
      ctx.fill();
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
