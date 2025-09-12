'use client';

import { useEffect, useRef } from 'react';

export default function Fireworks({ className = '' }) {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const fireworks = [];
    const particles = [];

    const createFirework = () => {
      const firework = {
        x: Math.random() * canvas.width,
        y: canvas.height,
        targetY: Math.random() * canvas.height * 0.5,
        speed: Math.random() * 3 + 2,
        color: `hsl(${Math.random() * 360}, 100%, 50%)`
      };
      fireworks.push(firework);
    };

    const createParticles = (x, y, color) => {
      for (let i = 0; i < 30; i++) {
        particles.push({
          x,
          y,
          vx: (Math.random() - 0.5) * 10,
          vy: (Math.random() - 0.5) * 10,
          life: 1,
          decay: Math.random() * 0.02 + 0.01,
          color
        });
      }
    };

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      fireworks.forEach((firework, index) => {
        firework.y -= firework.speed;
        
        ctx.beginPath();
        ctx.arc(firework.x, firework.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = firework.color;
        ctx.fill();

        if (firework.y <= firework.targetY) {
          createParticles(firework.x, firework.y, firework.color);
          fireworks.splice(index, 1);
        }
      });

      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life -= particle.decay;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.life;
        ctx.fill();

        if (particle.life <= 0) {
          particles.splice(index, 1);
        }
      });

      ctx.globalAlpha = 1;

      if (Math.random() < 0.02) {
        createFirework();
      }

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
