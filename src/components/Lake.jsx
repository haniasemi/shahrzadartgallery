'use client';

import { useEffect, useRef } from 'react';

export default function Lake({ className = '' }) {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Lake
      ctx.fillStyle = 'rgba(0, 100, 200, 0.3)';
      ctx.beginPath();
      ctx.ellipse(canvas.width / 2, canvas.height - 100, canvas.width / 3, 100, 0, 0, Math.PI * 2);
      ctx.fill();

      // Ripples
      ctx.strokeStyle = 'rgba(0, 150, 255, 0.5)';
      ctx.lineWidth = 1;
      
      for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        ctx.arc(canvas.width / 2, canvas.height - 100, 50 + i * 30, 0, Math.PI * 2);
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
