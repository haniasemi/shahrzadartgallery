'use client';

import { useEffect, useRef } from 'react';

export default function CometHead({ className = '' }) {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const comet = {
      x: canvas.width / 2,
      y: canvas.height / 2,
      vx: 2,
      vy: 1,
      size: 10
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Comet head
      ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
      ctx.beginPath();
      ctx.arc(comet.x, comet.y, comet.size, 0, Math.PI * 2);
      ctx.fill();

      // Update position
      comet.x += comet.vx;
      comet.y += comet.vy;

      if (comet.x > canvas.width || comet.y > canvas.height) {
        comet.x = 0;
        comet.y = 0;
      }

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
