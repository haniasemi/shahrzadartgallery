'use client';

import { useEffect, useRef } from 'react';

export default function Clouds({ className = '' }) {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = 200;

    const clouds = [];
    const cloudCount = 5;

    for (let i = 0; i < cloudCount; i++) {
      clouds.push({
        x: Math.random() * canvas.width,
        y: Math.random() * 100 + 50,
        size: Math.random() * 50 + 30,
        speed: Math.random() * 0.5 + 0.2,
        opacity: Math.random() * 0.3 + 0.2
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      clouds.forEach(cloud => {
        cloud.x += cloud.speed;

        if (cloud.x > canvas.width + cloud.size) {
          cloud.x = -cloud.size;
        }

        ctx.beginPath();
        ctx.arc(cloud.x, cloud.y, cloud.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${cloud.opacity})`;
        ctx.fill();
      });

      requestAnimationFrame(draw);
    };

    draw();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`w-full h-48 ${className}`}
    />
  );
}
