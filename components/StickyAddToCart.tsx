'use client';

import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';
import { useEffect, useState } from 'react';

import type { Product } from '@/lib/data';
import { useCart } from '@/context/CartContext';
import { cn, formatPrice } from '@/lib/utils';

export default function StickyAddToCart({ product }: { product: Product }) {
  const { add } = useCart();
  const [visible, setVisible] = useState(false);
  const [imgError, setImgError] = useState(false);
  const onSale = product.compareAt && product.compareAt > product.price;

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 520);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-x-3 bottom-[88px] z-30 flex items-center gap-3 rounded-2xl border border-line bg-surface/95 p-2 shadow-cardHover backdrop-blur supports-[backdrop-filter]:bg-surface/90 lg:hidden"
        >
          <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg bg-surface-sunken">
            {!imgError ? (
              <Image
                src={product.image}
                alt=""
                fill
                sizes="48px"
                className="object-contain p-1"
                onError={() => setImgError(true)}
              />
            ) : null}
          </div>
          <div className="min-w-0 flex-1">
            <div className="truncate text-xs font-medium text-ink-soft">{product.title}</div>
            <div className="flex items-baseline gap-1.5">
              <span className={cn('text-sm font-bold', onSale ? 'text-accent-600' : 'text-ink')}>
                {formatPrice(product.price)}
              </span>
              {onSale && product.compareAt && (
                <span className="text-[10px] text-ink-mute line-through">
                  {formatPrice(product.compareAt)}
                </span>
              )}
            </div>
          </div>
          <button
            onClick={() => add(product, 1, true)}
            className="flex min-h-[44px] shrink-0 cursor-pointer items-center gap-1.5 rounded-full bg-trust px-5 text-sm font-bold text-white transition-colors duration-200 hover:bg-trust-800"
          >
            <ShoppingBag size={16} aria-hidden="true" />
            أضف
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
