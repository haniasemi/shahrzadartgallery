'use client';

import { useEffect, useRef } from 'react';

export default function Heart({ className = '' }) {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const hearts = [];
    const heartCount = 20;

    for (let i = 0; i < heartCount; i++) {
      hearts.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 20 + 10,
        speed: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.3
      });
    }

    const drawHeart = (x, y, size, color) => {
      ctx.beginPath();
      ctx.moveTo(x, y + size / 4);
      ctx.bezierCurveTo(x, y, x - size / 2, y, x - size / 2, y + size / 4);
      ctx.bezierCurveTo(x - size / 2, y + size / 2, x, y + size / 2, x, y + size);
      ctx.bezierCurveTo(x, y + size / 2, x + size / 2, y + size / 2, x + size / 2, y + size / 4);
      ctx.bezierCurveTo(x + size / 2, y, x, y, x, y + size / 4);
      ctx.fillStyle = color;
      ctx.fill();
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      hearts.forEach(heart => {
        heart.y -= heart.speed;
        heart.x += Math.sin(heart.y * 0.01) * 0.5;

        if (heart.y < -heart.size) {
          heart.y = canvas.height + heart.size;
          heart.x = Math.random() * canvas.width;
        }

        drawHeart(heart.x, heart.y, heart.size, `rgba(255, 0, 0, ${heart.opacity})`);
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
