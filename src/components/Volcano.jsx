'use client';

import { useEffect, useRef } from 'react';

export default function Volcano({ className = '' }) {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Volcano
      ctx.fillStyle = 'rgba(139, 69, 19, 0.8)';
      ctx.beginPath();
      ctx.moveTo(canvas.width / 2 - 100, canvas.height);
      ctx.lineTo(canvas.width / 2, canvas.height - 200);
      ctx.lineTo(canvas.width / 2 + 100, canvas.height);
      ctx.closePath();
      ctx.fill();

      // Lava
      ctx.fillStyle = 'rgba(255, 0, 0, 0.8)';
      ctx.beginPath();
      ctx.moveTo(canvas.width / 2 - 50, canvas.height);
      ctx.lineTo(canvas.width / 2, canvas.height - 150);
      ctx.lineTo(canvas.width / 2 + 50, canvas.height);
      ctx.closePath();
      ctx.fill();

      // Smoke
      ctx.fillStyle = 'rgba(128, 128, 128, 0.5)';
      ctx.beginPath();
      ctx.arc(canvas.width / 2, canvas.height - 200, 30, 0, Math.PI * 2);
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
