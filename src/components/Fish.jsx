'use client';

import { useEffect, useRef } from 'react';

export default function Fish({ className = '' }) {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const fish = [];
    const fishCount = 20;

    for (let i = 0; i < fishCount; i++) {
      fish.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: Math.random() * 15 + 10,
        color: `hsl(${Math.random() * 360}, 100%, 50%)`
      });
    }

    const drawFish = (x, y, size, color) => {
      ctx.fillStyle = color;
      
      // Body
      ctx.beginPath();
      ctx.ellipse(x, y, size, size / 2, 0, 0, Math.PI * 2);
      ctx.fill();
      
      // Tail
      ctx.beginPath();
      ctx.moveTo(x - size, y);
      ctx.lineTo(x - size * 1.5, y - size / 2);
      ctx.lineTo(x - size * 1.5, y + size / 2);
      ctx.closePath();
      ctx.fill();
      
      // Eye
      ctx.fillStyle = 'white';
      ctx.beginPath();
      ctx.arc(x + size / 3, y - size / 4, size / 6, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.fillStyle = 'black';
      ctx.beginPath();
      ctx.arc(x + size / 3, y - size / 4, size / 12, 0, Math.PI * 2);
      ctx.fill();
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      fish.forEach(fish => {
        fish.x += fish.vx;
        fish.y += fish.vy;

        if (fish.x < 0 || fish.x > canvas.width) fish.vx *= -1;
        if (fish.y < 0 || fish.y > canvas.height) fish.vy *= -1;

        drawFish(fish.x, fish.y, fish.size, fish.color);
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
