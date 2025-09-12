'use client';

import { useEffect, useRef } from 'react';

export default function Plateau({ className = '' }) {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Plateau
      ctx.fillStyle = 'rgba(139, 69, 19, 0.8)';
      ctx.fillRect(0, canvas.height - 200, canvas.width, 200);

      // Plateau top
      ctx.fillStyle = 'rgba(160, 82, 45, 0.8)';
      ctx.fillRect(0, canvas.height - 200, canvas.width, 50);

      // Plateau edges
      ctx.fillStyle = 'rgba(101, 67, 33, 0.8)';
      ctx.fillRect(0, canvas.height - 200, canvas.width, 10);
      ctx.fillRect(0, canvas.height - 50, canvas.width, 10);
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
