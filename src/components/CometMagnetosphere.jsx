'use client';

import { useEffect, useRef } from 'react';

export default function CometMagnetosphere({ className = '' }) {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Comet
      ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
      ctx.beginPath();
      ctx.arc(canvas.width / 2, canvas.height / 2, 20, 0, Math.PI * 2);
      ctx.fill();

      // Magnetosphere
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.3)';
      ctx.lineWidth = 2;
      
      for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        ctx.arc(canvas.width / 2, canvas.height / 2, 50 + i * 30, 0, Math.PI * 2);
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
