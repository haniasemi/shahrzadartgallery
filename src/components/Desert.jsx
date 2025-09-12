'use client';

import { useEffect, useRef } from 'react';

export default function Desert({ className = '' }) {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const dunes = [];
    const duneCount = 8;

    for (let i = 0; i < duneCount; i++) {
      dunes.push({
        x: (i * canvas.width) / duneCount,
        y: canvas.height - 150,
        width: canvas.width / duneCount,
        height: Math.random() * 100 + 50,
        color: `hsl(${Math.random() * 30 + 30}, 100%, 50%)`
      });
    }

    const drawDune = (x, y, width, height, color) => {
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.quadraticCurveTo(x + width / 2, y - height, x + width, y);
      ctx.closePath();
      ctx.fill();
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      dunes.forEach(dune => {
        drawDune(dune.x, dune.y, dune.width, dune.height, dune.color);
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
