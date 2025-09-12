'use client';

import { useEffect, useRef } from 'react';

export default function Garden({ className = '' }) {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const flowers = [];
    const flowerCount = 80;

    for (let i = 0; i < flowerCount; i++) {
      flowers.push({
        x: Math.random() * canvas.width,
        y: canvas.height - 100,
        size: Math.random() * 15 + 5,
        color: `hsl(${Math.random() * 360}, 100%, 50%)`,
        petals: Math.floor(Math.random() * 5) + 5
      });
    }

    const drawFlower = (x, y, size, color, petals) => {
      ctx.fillStyle = color;
      
      // Draw petals
      for (let i = 0; i < petals; i++) {
        const angle = (i * Math.PI * 2) / petals;
        const petalX = x + Math.cos(angle) * size;
        const petalY = y + Math.sin(angle) * size;
        
        ctx.beginPath();
        ctx.arc(petalX, petalY, size / 3, 0, Math.PI * 2);
        ctx.fill();
      }
      
      // Draw center
      ctx.fillStyle = 'yellow';
      ctx.beginPath();
      ctx.arc(x, y, size / 4, 0, Math.PI * 2);
      ctx.fill();
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      flowers.forEach(flower => {
        drawFlower(flower.x, flower.y, flower.size, flower.color, flower.petals);
      });
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
