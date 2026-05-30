'use client';

import { createContext, useCallback, useContext, useMemo, useState } from 'react';

type WishlistContextValue = {
  items: string[];
  count: number;
  has: (handle: string) => boolean;
  toggle: (handle: string) => boolean;
  remove: (handle: string) => void;
};

const WishlistContext = createContext<WishlistContextValue | null>(null);

export function WishlistProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<string[]>([]);

  const has = useCallback((handle: string) => items.includes(handle), [items]);

  const toggle = useCallback((handle: string) => {
    let nowAdded = false;
    setItems((prev) => {
      if (prev.includes(handle)) {
        return prev.filter((h) => h !== handle);
      }
      nowAdded = true;
      return [...prev, handle];
    });
    return nowAdded;
  }, []);

  const remove = useCallback((handle: string) => {
    setItems((prev) => prev.filter((h) => h !== handle));
  }, []);

  const value = useMemo(
    () => ({ items, count: items.length, has, toggle, remove }),
    [items, has, toggle, remove],
  );

  return <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>;
}

export function useWishlist() {
  const ctx = useContext(WishlistContext);
  if (!ctx) throw new Error('useWishlist must be used inside WishlistProvider');
  return ctx;
}
