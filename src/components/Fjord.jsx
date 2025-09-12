'use client';

import { useEffect, useRef } from 'react';

export default function Fjord({ className = '' }) {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Fjord walls
      ctx.fillStyle = 'rgba(139, 69, 19, 0.8)';
      ctx.fillRect(0, 0, canvas.width / 2 - 50, canvas.height);
      ctx.fillRect(canvas.width / 2 + 50, 0, canvas.width / 2 - 50, canvas.height);

      // Fjord water
      ctx.fillStyle = 'rgba(0, 100, 200, 0.3)';
      ctx.fillRect(canvas.width / 2 - 50, 0, 100, canvas.height);

      // Snow on peaks
      ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
      ctx.fillRect(0, 0, canvas.width / 2 - 50, 100);
      ctx.fillRect(canvas.width / 2 + 50, 0, canvas.width / 2 - 50, 100);
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
