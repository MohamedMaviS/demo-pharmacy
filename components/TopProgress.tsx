'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

/**
 * Lightweight top navigation progress bar. Animates a quick fill whenever the
 * route changes — gives the perception of fast, responsive navigation.
 */
export default function TopProgress() {
  const pathname = usePathname();
  const [stage, setStage] = useState<'idle' | 'run' | 'done'>('idle');
  const [first, setFirst] = useState(true);

  useEffect(() => {
    if (first) {
      setFirst(false);
      return;
    }
    setStage('run');
    const t1 = setTimeout(() => setStage('done'), 400);
    const t2 = setTimeout(() => setStage('idle'), 700);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const width = stage === 'run' ? '85%' : stage === 'done' ? '100%' : '0%';
  const opacity = stage === 'idle' ? 0 : 1;

  return (
    <div
      className="pointer-events-none fixed inset-x-0 top-0 z-[100] h-[3px]"
      aria-hidden="true"
    >
      <div
        className="h-full rounded-l-full bg-gradient-to-l from-brand-400 via-brand to-trust shadow-[0_0_10px_rgba(21,128,61,0.6)] transition-all duration-300 ease-out"
        style={{ width, opacity }}
      />
    </div>
  );
}
