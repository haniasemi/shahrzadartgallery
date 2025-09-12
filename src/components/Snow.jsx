'use client';

import { useEffect, useRef } from 'react';

export default function Snow({ className = '' }) {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const snowflakes = [];
    const snowflakeCount = 100;

    for (let i = 0; i < snowflakeCount; i++) {
      snowflakes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speed: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.5
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      snowflakes.forEach(snowflake => {
        snowflake.y += snowflake.speed;
        snowflake.x += Math.sin(snowflake.y * 0.01) * 0.5;

        if (snowflake.y > canvas.height) {
          snowflake.y = 0;
          snowflake.x = Math.random() * canvas.width;
        }

        ctx.beginPath();
        ctx.arc(snowflake.x, snowflake.y, snowflake.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${snowflake.opacity})`;
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
