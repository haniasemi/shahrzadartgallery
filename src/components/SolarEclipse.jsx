'use client';

import { useEffect, useRef } from 'react';

export default function SolarEclipse({ className = '' }) {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Sun
      ctx.fillStyle = 'rgba(255, 255, 0, 0.8)';
      ctx.beginPath();
      ctx.arc(canvas.width / 2, canvas.height / 2, 80, 0, Math.PI * 2);
      ctx.fill();

      // Moon
      ctx.fillStyle = 'rgba(64, 64, 64, 0.8)';
      ctx.beginPath();
      ctx.arc(canvas.width / 2 + 20, canvas.height / 2, 60, 0, Math.PI * 2);
      ctx.fill();

      // Corona
      ctx.strokeStyle = 'rgba(255, 255, 0, 0.3)';
      ctx.lineWidth = 2;
      
      for (let i = 0; i < 12; i++) {
        const angle = (i * Math.PI * 2) / 12;
        const startX = canvas.width / 2 + Math.cos(angle) * 80;
        const startY = canvas.height / 2 + Math.sin(angle) * 80;
        const endX = canvas.width / 2 + Math.cos(angle) * 120;
        const endY = canvas.height / 2 + Math.sin(angle) * 120;
        
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
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
