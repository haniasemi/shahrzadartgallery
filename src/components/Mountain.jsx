'use client';

import { useEffect, useRef } from 'react';

export default function Mountain({ className = '' }) {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const mountains = [];
    const mountainCount = 5;

    for (let i = 0; i < mountainCount; i++) {
      mountains.push({
        x: (i * canvas.width) / mountainCount,
        y: canvas.height - 200,
        width: canvas.width / mountainCount,
        height: Math.random() * 200 + 100,
        color: `hsl(${Math.random() * 60 + 200}, 100%, 50%)`
      });
    }

    const drawMountain = (x, y, width, height, color) => {
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + width / 2, y - height);
      ctx.lineTo(x + width, y);
      ctx.closePath();
      ctx.fill();
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      mountains.forEach(mountain => {
        drawMountain(mountain.x, mountain.y, mountain.width, mountain.height, mountain.color);
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
