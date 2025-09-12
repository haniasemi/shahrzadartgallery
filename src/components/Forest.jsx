'use client';

import { useEffect, useRef } from 'react';

export default function Forest({ className = '' }) {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const trees = [];
    const treeCount = 50;

    for (let i = 0; i < treeCount; i++) {
      trees.push({
        x: Math.random() * canvas.width,
        y: canvas.height - 100,
        size: Math.random() * 40 + 20,
        color: `hsl(${Math.random() * 60 + 120}, 100%, 50%)`
      });
    }

    const drawTree = (x, y, size, color) => {
      // Trunk
      ctx.fillStyle = '#8B4513';
      ctx.fillRect(x - size / 8, y, size / 4, size);
      
      // Leaves
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(x, y - size / 2, size / 2, 0, Math.PI * 2);
      ctx.fill();
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      trees.forEach(tree => {
        drawTree(tree.x, tree.y, tree.size, tree.color);
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
