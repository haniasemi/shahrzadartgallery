'use client';

import { useEffect, useRef } from 'react';

export default function Sun({ className = '' }) {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const sun = {
      x: canvas.width / 2,
      y: canvas.height / 2,
      radius: 50,
      rays: 12
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw sun rays
      ctx.strokeStyle = 'rgba(255, 255, 0, 0.3)';
      ctx.lineWidth = 3;
      
      for (let i = 0; i < sun.rays; i++) {
        const angle = (i * Math.PI * 2) / sun.rays;
        const startX = sun.x + Math.cos(angle) * (sun.radius + 20);
        const startY = sun.y + Math.sin(angle) * (sun.radius + 20);
        const endX = sun.x + Math.cos(angle) * (sun.radius + 40);
        const endY = sun.y + Math.sin(angle) * (sun.radius + 40);
        
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
        ctx.stroke();
      }

      // Draw sun
      ctx.beginPath();
      ctx.arc(sun.x, sun.y, sun.radius, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255, 255, 0, 0.8)';
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
