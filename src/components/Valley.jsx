'use client';

import { useEffect, useRef } from 'react';

export default function Valley({ className = '' }) {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Valley sides
      ctx.fillStyle = 'rgba(139, 69, 19, 0.8)';
      ctx.beginPath();
      ctx.moveTo(0, canvas.height);
      ctx.lineTo(0, canvas.height - 200);
      ctx.lineTo(canvas.width / 2, canvas.height - 100);
      ctx.lineTo(canvas.width, canvas.height - 200);
      ctx.lineTo(canvas.width, canvas.height);
      ctx.closePath();
      ctx.fill();

      // Valley floor
      ctx.fillStyle = 'rgba(160, 82, 45, 0.8)';
      ctx.fillRect(0, canvas.height - 100, canvas.width, 100);

      // River
      ctx.fillStyle = 'rgba(0, 100, 200, 0.3)';
      ctx.beginPath();
      ctx.moveTo(0, canvas.height - 50);
      ctx.quadraticCurveTo(canvas.width / 2, canvas.height - 80, canvas.width, canvas.height - 50);
      ctx.lineTo(canvas.width, canvas.height);
      ctx.lineTo(0, canvas.height);
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
