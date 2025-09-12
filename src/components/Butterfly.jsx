'use client';

import { useEffect, useRef } from 'react';

export default function Butterfly({ className = '' }) {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const butterflies = [];
    const butterflyCount = 10;

    for (let i = 0; i < butterflyCount; i++) {
      butterflies.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: Math.random() * 10 + 5,
        color: `hsl(${Math.random() * 360}, 100%, 50%)`
      });
    }

    const drawButterfly = (x, y, size, color) => {
      ctx.fillStyle = color;
      
      // Left wing
      ctx.beginPath();
      ctx.ellipse(x - size / 2, y, size / 2, size / 3, 0, 0, Math.PI * 2);
      ctx.fill();
      
      // Right wing
      ctx.beginPath();
      ctx.ellipse(x + size / 2, y, size / 2, size / 3, 0, 0, Math.PI * 2);
      ctx.fill();
      
      // Body
      ctx.fillStyle = 'black';
      ctx.fillRect(x - 1, y - size / 2, 2, size);
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      butterflies.forEach(butterfly => {
        butterfly.x += butterfly.vx;
        butterfly.y += butterfly.vy;

        if (butterfly.x < 0 || butterfly.x > canvas.width) butterfly.vx *= -1;
        if (butterfly.y < 0 || butterfly.y > canvas.height) butterfly.vy *= -1;

        drawButterfly(butterfly.x, butterfly.y, butterfly.size, butterfly.color);
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
