'use client';

import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import type { Product } from '@/lib/data';

type QuickViewContextValue = {
  product: Product | null;
  isOpen: boolean;
  open: (product: Product) => void;
  close: () => void;
};

const QuickViewContext = createContext<QuickViewContextValue | null>(null);

export function QuickViewProvider({ children }: { children: React.ReactNode }) {
  const [product, setProduct] = useState<Product | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback((p: Product) => {
    setProduct(p);
    setIsOpen(true);
  }, []);

  const close = useCallback(() => setIsOpen(false), []);

  const value = useMemo(
    () => ({ product, isOpen, open, close }),
    [product, isOpen, open, close],
  );

  return <QuickViewContext.Provider value={value}>{children}</QuickViewContext.Provider>;
}

export function useQuickView() {
  const ctx = useContext(QuickViewContext);
  if (!ctx) throw new Error('useQuickView must be used inside QuickViewProvider');
  return ctx;
}
