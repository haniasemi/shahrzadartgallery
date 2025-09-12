'use client';

import { useEffect, useState } from 'react';

export default function Confetti({ isActive, duration = 3000 }) {
  const [confetti, setConfetti] = useState([]);

  useEffect(() => {
    if (isActive) {
      const colors = ['#FFD700', '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7'];
      const newConfetti = [];

      for (let i = 0; i < 50; i++) {
        newConfetti.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: -10,
          color: colors[Math.floor(Math.random() * colors.length)],
          rotation: Math.random() * 360,
          size: Math.random() * 10 + 5
        });
      }

      setConfetti(newConfetti);

      const timer = setTimeout(() => {
        setConfetti([]);
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [isActive, duration]);

  if (!isActive || confetti.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {confetti.map((piece) => (
        <div
          key={piece.id}
          className="absolute animate-bounce"
          style={{
            left: piece.x,
            top: piece.y,
            backgroundColor: piece.color,
            width: piece.size,
            height: piece.size,
            transform: `rotate(${piece.rotation}deg)`,
            animationDuration: `${Math.random() * 3 + 2}s`,
            animationDelay: `${Math.random() * 2}s`
          }}
        />
      ))}
    </div>
  );
}
