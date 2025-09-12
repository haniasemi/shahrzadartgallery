'use client';

import { useEffect, useRef } from 'react';

export default function Stars({ className = '' }) {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const stars = [];
    const starCount = 100;

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speed: Math.random() * 0.5 + 0.1,
        opacity: Math.random()
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach(star => {
        star.y += star.speed;
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();
      });

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
