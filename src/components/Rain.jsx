'use client';

import { useEffect, useRef } from 'react';

export default function Rain({ className = '' }) {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const drops = [];
    const dropCount = 100;

    for (let i = 0; i < dropCount; i++) {
      drops.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        length: Math.random() * 20 + 10,
        speed: Math.random() * 5 + 2,
        opacity: Math.random() * 0.5 + 0.3
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      drops.forEach(drop => {
        drop.y += drop.speed;

        if (drop.y > canvas.height) {
          drop.y = 0;
          drop.x = Math.random() * canvas.width;
        }

        ctx.beginPath();
        ctx.moveTo(drop.x, drop.y);
        ctx.lineTo(drop.x, drop.y + drop.length);
        ctx.strokeStyle = `rgba(173, 216, 230, ${drop.opacity})`;
        ctx.lineWidth = 1;
        ctx.stroke();
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
