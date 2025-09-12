'use client';

import { useEffect, useRef } from 'react';

export default function CometExosphere({ className = '' }) {
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

      // Exosphere
      ctx.fillStyle = 'rgba(255, 255, 0, 0.2)';
      ctx.beginPath();
      ctx.arc(canvas.width / 2, canvas.height / 2, 50, 0, Math.PI * 2);
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