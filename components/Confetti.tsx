'use client';

import { useEffect, useState } from 'react';

type Piece = {
  left: number;
  delay: number;
  duration: number;
  bg: string;
  rotate: number;
  size: number;
};

const COLORS = ['#15803D', '#22C55E', '#0EA5E9', '#F59E0B', '#EF4444', '#A855F7'];

export default function Confetti({ count = 70 }: { count?: number }) {
  const [pieces, setPieces] = useState<Piece[]>([]);

  // Generate on the client only (after mount) so there is no SSR mismatch.
  useEffect(() => {
    setPieces(
      Array.from({ length: count }, (_, i) => ({
        left: Math.random() * 100,
        delay: Math.random() * 0.5,
        duration: 2.2 + Math.random() * 1.8,
        bg: COLORS[i % COLORS.length],
        rotate: Math.random() * 360,
        size: 6 + Math.random() * 7,
      })),
    );
  }, [count]);

  return (
    <div className="pointer-events-none fixed inset-0 z-[80] overflow-hidden" aria-hidden="true">
      {pieces.map((p, i) => (
        <span
          key={i}
          style={{
            position: 'absolute',
            top: '-12px',
            left: `${p.left}%`,
            width: p.size,
            height: p.size * 0.45,
            background: p.bg,
            borderRadius: 2,
            transform: `rotate(${p.rotate}deg)`,
            animation: `confettiFall ${p.duration}s ${p.delay}s ease-in forwards`,
          }}
        />
      ))}
    </div>
  );
}
