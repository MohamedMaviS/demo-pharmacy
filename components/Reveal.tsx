'use client';

import { motion, useReducedMotion } from 'framer-motion';

type Props = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

/**
 * Scroll-into-view entrance wrapper. Fades + lifts + subtly scales content as it
 * enters the viewport for a sense of depth. Respects reduced motion.
 *
 * NOTE: applies a transform, so do NOT wrap sections that contain
 * `position: sticky` children (a transformed ancestor breaks sticky).
 */
export default function Reveal({ children, className = '', delay = 0, y = 28 }: Props) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? { opacity: 0 } : { opacity: 0, y, scale: 0.98 }}
      whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
