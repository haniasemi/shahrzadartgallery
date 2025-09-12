'use client';

import { useEffect, useRef } from 'react';

export default function Aurora({ className = '' }) {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let time = 0;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Aurora
      ctx.strokeStyle = 'rgba(0, 255, 0, 0.5)';
      ctx.lineWidth = 3;
      
      for (let i = 0; i < 5; i++) {
        ctx.beginPath();
        ctx.moveTo(0, canvas.height / 2 + i * 20);
        
        for (let x = 0; x < canvas.width; x++) {
          const y = canvas.height / 2 + i * 20 + Math.sin(x * 0.01 + time + i) * 50;
          ctx.lineTo(x, y);
        }
        
        ctx.stroke();
      }

      time += 0.1;
      requestAnimationFrame(draw);
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
