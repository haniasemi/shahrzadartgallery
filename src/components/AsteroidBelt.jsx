'use client';

import { useEffect, useRef } from 'react';

export default function AsteroidBelt({ className = '' }) {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const asteroids = [];
    const asteroidCount = 80;

    for (let i = 0; i < asteroidCount; i++) {
      asteroids.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 1,
        vy: (Math.random() - 0.5) * 1,
        size: Math.random() * 10 + 2,
        rotation: 0,
        rotationSpeed: (Math.random() - 0.5) * 0.05
      });
    }

    const drawAsteroid = (x, y, size, rotation) => {
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

      asteroids.forEach(asteroid => {
        asteroid.x += asteroid.vx;
        asteroid.y += asteroid.vy;
        asteroid.rotation += asteroid.rotationSpeed;

        if (asteroid.x < 0 || asteroid.x > canvas.width) asteroid.vx *= -1;
        if (asteroid.y < 0 || asteroid.y > canvas.height) asteroid.vy *= -1;

        drawAsteroid(asteroid.x, asteroid.y, asteroid.size, asteroid.rotation);
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
