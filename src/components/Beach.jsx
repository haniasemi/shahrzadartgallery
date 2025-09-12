'use client';

import { useEffect, useRef } from 'react';

export default function Beach({ className = '' }) {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Sand
      ctx.fillStyle = 'rgba(255, 228, 196, 0.8)';
      ctx.fillRect(0, canvas.height - 150, canvas.width, 150);

      // Ocean
      ctx.fillStyle = 'rgba(0, 100, 200, 0.3)';
      ctx.fillRect(0, canvas.height - 200, canvas.width, 50);

      // Waves
      ctx.strokeStyle = 'rgba(0, 150, 255, 0.5)';
      ctx.lineWidth = 2;
      
      for (let i = 0; i < 2; i++) {
        ctx.beginPath();
        ctx.moveTo(0, canvas.height - 200 + i * 25);
        
        for (let x = 0; x < canvas.width; x++) {
          const y = canvas.height - 200 + i * 25 + Math.sin(x * 0.02) * 10;
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
