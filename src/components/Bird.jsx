'use client';

import { useEffect, useRef } from 'react';

export default function Bird({ className = '' }) {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const birds = [];
    const birdCount = 15;

    for (let i = 0; i < birdCount; i++) {
      birds.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 3,
        vy: (Math.random() - 0.5) * 3,
        size: Math.random() * 8 + 4
      });
    }

    const drawBird = (x, y, size) => {
      ctx.strokeStyle = 'black';
      ctx.lineWidth = 2;
      
      // Body
      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.stroke();
      
      // Wings
      ctx.beginPath();
      ctx.moveTo(x - size, y);
      ctx.lineTo(x - size * 2, y - size);
      ctx.moveTo(x - size, y);
      ctx.lineTo(x - size * 2, y + size);
      ctx.stroke();
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      birds.forEach(bird => {
        bird.x += bird.vx;
        bird.y += bird.vy;

        if (bird.x < 0 || bird.x > canvas.width) bird.vx *= -1;
        if (bird.y < 0 || bird.y > canvas.height) bird.vy *= -1;

        drawBird(bird.x, bird.y, bird.size);
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
