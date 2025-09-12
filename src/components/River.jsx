'use client';

import { useEffect, useRef } from 'react';

export default function River({ className = '' }) {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // River
      ctx.fillStyle = 'rgba(0, 100, 200, 0.3)';
      ctx.beginPath();
      ctx.moveTo(0, canvas.height - 200);
      ctx.quadraticCurveTo(canvas.width / 2, canvas.height - 100, canvas.width, canvas.height - 150);
      ctx.lineTo(canvas.width, canvas.height);
      ctx.lineTo(0, canvas.height);
      ctx.closePath();
      ctx.fill();

      // Current
      ctx.strokeStyle = 'rgba(0, 150, 255, 0.5)';
      ctx.lineWidth = 2;
      
      for (let i = 0; i < 5; i++) {
        ctx.beginPath();
        ctx.moveTo(0, canvas.height - 200 + i * 20);
        
        for (let x = 0; x < canvas.width; x++) {
          const y = canvas.height - 200 + i * 20 + Math.sin(x * 0.01) * 10;
          ctx.lineTo(x, y);
        }
        
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
