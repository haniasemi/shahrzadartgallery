'use client';

import { useEffect, useRef } from 'react';

export default function MeteorStorm({ className = '' }) {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const meteors = [];
    const meteorCount = 50;

    for (let i = 0; i < meteorCount; i++) {
      meteors.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 5,
        vy: (Math.random() - 0.5) * 5,
        size: Math.random() * 8 + 2,
        life: 1,
        decay: Math.random() * 0.02 + 0.01
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      meteors.forEach(meteor => {
        meteor.x += meteor.vx;
        meteor.y += meteor.vy;
        meteor.life -= meteor.decay;

        if (meteor.life <= 0) {
          meteor.x = Math.random() * canvas.width;
          meteor.y = Math.random() * canvas.height;
          meteor.life = 1;
        }

        if (meteor.x < 0 || meteor.x > canvas.width) meteor.vx *= -1;
        if (meteor.y < 0 || meteor.y > canvas.height) meteor.vy *= -1;

        ctx.beginPath();
        ctx.arc(meteor.x, meteor.y, meteor.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${meteor.life})`;
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
