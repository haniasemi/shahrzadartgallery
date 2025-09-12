'use client';

import { useEffect, useRef } from 'react';

export default function Waves({ className = '' }) {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = 200;

    let time = 0;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.beginPath();
      ctx.moveTo(0, canvas.height / 2);

      for (let x = 0; x < canvas.width; x++) {
        const y = canvas.height / 2 + Math.sin(x * 0.01 + time) * 50;
        ctx.lineTo(x, y);
      }

      ctx.strokeStyle = 'rgba(153, 121, 61, 0.3)';
      ctx.lineWidth = 2;
      ctx.stroke();

      time += 0.1;
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
