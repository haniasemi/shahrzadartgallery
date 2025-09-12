'use client';

import { useEffect, useRef } from 'react';

export default function Meteorite({ className = '' }) {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const meteorites = [];
    const meteoriteCount = 15;

    for (let i = 0; i < meteoriteCount; i++) {
      meteorites.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: Math.random() * 12 + 3,
        rotation: 0,
        rotationSpeed: (Math.random() - 0.5) * 0.1
      });
    }

    const drawMeteorite = (x, y, size, rotation) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      
      ctx.fillStyle = 'rgba(139, 69, 19, 0.8)';
      ctx.beginPath();
      ctx.arc(0, 0, size, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.restore();
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      meteorites.forEach(meteorite => {
        meteorite.x += meteorite.vx;
        meteorite.y += meteorite.vy;
        meteorite.rotation += meteorite.rotationSpeed;

        if (meteorite.x < 0 || meteorite.x > canvas.width) meteorite.vx *= -1;
        if (meteorite.y < 0 || meteorite.y > canvas.height) meteorite.vy *= -1;

        drawMeteorite(meteorite.x, meteorite.y, meteorite.size, meteorite.rotation);
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
