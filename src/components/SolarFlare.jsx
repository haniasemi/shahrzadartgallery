'use client';

import { useEffect, useRef } from 'react';

export default function SolarFlare({ className = '' }) {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Solar flare
      ctx.fillStyle = 'rgba(255, 255, 0, 0.8)';
      ctx.beginPath();
      ctx.arc(canvas.width / 2, canvas.height / 2, 50, 0, Math.PI * 2);
      ctx.fill();

      // Flare rays
      ctx.strokeStyle = 'rgba(255, 255, 0, 0.5)';
      ctx.lineWidth = 3;
      
      for (let i = 0; i < 8; i++) {
        const angle = (i * Math.PI * 2) / 8;
        const startX = canvas.width / 2 + Math.cos(angle) * 50;
        const startY = canvas.height / 2 + Math.sin(angle) * 50;
        const endX = canvas.width / 2 + Math.cos(angle) * 100;
        const endY = canvas.height / 2 + Math.sin(angle) * 100;
        
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
