'use client';

import { useEffect, useRef } from 'react';

export default function Iceberg({ className = '' }) {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Ocean
      ctx.fillStyle = 'rgba(0, 100, 200, 0.3)';
      ctx.fillRect(0, canvas.height - 200, canvas.width, 200);

      // Iceberg
      ctx.fillStyle = 'rgba(173, 216, 230, 0.8)';
      ctx.beginPath();
      ctx.moveTo(canvas.width / 2, canvas.height - 200);
      ctx.lineTo(canvas.width / 2 - 100, canvas.height - 100);
      ctx.lineTo(canvas.width / 2 + 100, canvas.height - 100);
      ctx.closePath();
      ctx.fill();

      // Iceberg underwater
      ctx.fillStyle = 'rgba(173, 216, 230, 0.5)';
      ctx.beginPath();
      ctx.moveTo(canvas.width / 2, canvas.height - 200);
      ctx.lineTo(canvas.width / 2 - 150, canvas.height - 50);
      ctx.lineTo(canvas.width / 2 + 150, canvas.height - 50);
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
