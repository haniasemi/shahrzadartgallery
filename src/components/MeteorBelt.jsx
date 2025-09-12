'use client';

import { useEffect, useRef } from 'react';

export default function MeteorBelt({ className = '' }) {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const meteors = [];
    const meteorCount = 100;

    for (let i = 0; i < meteorCount; i++) {
      meteors.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 1,
        vy: (Math.random() - 0.5) * 1,
        size: Math.random() * 4 + 1,
        rotation: 0,
        rotationSpeed: (Math.random() - 0.5) * 0.05
      });
    }

    const drawMeteor = (x, y, size, rotation) => {
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

      meteors.forEach(meteor => {
        meteor.x += meteor.vx;
        meteor.y += meteor.vy;
        meteor.rotation += meteor.rotationSpeed;

        if (meteor.x < 0 || meteor.x > canvas.width) meteor.vx *= -1;
        if (meteor.y < 0 || meteor.y > canvas.height) meteor.vy *= -1;

        drawMeteor(meteor.x, meteor.y, meteor.size, meteor.rotation);
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
