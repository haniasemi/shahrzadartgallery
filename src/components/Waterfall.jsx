'use client';

import { useEffect, useRef } from 'react';

export default function Waterfall({ className = '' }) {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Waterfall
      ctx.fillStyle = 'rgba(0, 100, 200, 0.3)';
      ctx.fillRect(canvas.width / 2 - 50, 0, 100, canvas.height);

      // Water streams
      ctx.strokeStyle = 'rgba(0, 150, 255, 0.5)';
      ctx.lineWidth = 2;
      
      for (let i = 0; i < 10; i++) {
        ctx.beginPath();
        ctx.moveTo(canvas.width / 2 - 50 + i * 10, 0);
        ctx.lineTo(canvas.width / 2 - 50 + i * 10 + Math.sin(i) * 5, canvas.height);
        ctx.stroke();
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
