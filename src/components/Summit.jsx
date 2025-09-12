'use client';

import { useEffect, useRef } from 'react';

export default function Summit({ className = '' }) {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Summit
      ctx.fillStyle = 'rgba(139, 69, 19, 0.8)';
      ctx.beginPath();
      ctx.moveTo(canvas.width / 2, 0);
      ctx.lineTo(0, canvas.height);
      ctx.lineTo(canvas.width, canvas.height);
      ctx.closePath();
      ctx.fill();

      // Summit top
      ctx.fillStyle = 'rgba(160, 82, 45, 0.8)';
      ctx.beginPath();
      ctx.moveTo(canvas.width / 2, 0);
      ctx.lineTo(canvas.width / 2 - 30, canvas.height - 150);
      ctx.lineTo(canvas.width / 2 + 30, canvas.height - 150);
      ctx.closePath();
      ctx.fill();

      // Snow cap
      ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
      ctx.beginPath();
      ctx.moveTo(canvas.width / 2, 0);
      ctx.lineTo(canvas.width / 2 - 20, canvas.height - 200);
      ctx.lineTo(canvas.width / 2 + 20, canvas.height - 200);
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
