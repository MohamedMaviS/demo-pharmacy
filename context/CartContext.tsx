'use client';

import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import type { Product } from '@/lib/data';

export type CartLine = {
  product: Product;
  qty: number;
};

// Demo coupons. Codes are case-insensitive.
const COUPONS: Record<string, { type: 'percent' | 'flat'; value: number; label: string }> = {
  DEMO10: { type: 'percent', value: 10, label: 'خصم 10%' },
  SAVE50: { type: 'flat', value: 50, label: 'خصم 50 جنيه' },
  NOUR15: { type: 'percent', value: 15, label: 'خصم 15%' },
};

type AppliedCoupon = { code: string; type: 'percent' | 'flat'; value: number; label: string };

type CartContextValue = {
  lines: CartLine[];
  count: number;
  subtotal: number;
  discount: number;
  total: number;
  coupon: AppliedCoupon | null;
  applyCoupon: (code: string) => { ok: boolean; message: string };
  removeCoupon: () => void;
  add: (product: Product, qty?: number, openDrawer?: boolean) => void;
  remove: (handle: string) => void;
  setQty: (handle: string, qty: number) => void;
  clear: () => void;
  // Drawer UI state
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [coupon, setCoupon] = useState<AppliedCoupon | null>(null);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  const add = useCallback((product: Product, qty = 1, openDrawer = false) => {
    setLines((prev) => {
      const existing = prev.find((l) => l.product.handle === product.handle);
      if (existing) {
        return prev.map((l) =>
          l.product.handle === product.handle ? { ...l, qty: l.qty + qty } : l,
        );
      }
      return [...prev, { product, qty }];
    });
    // High-intent adds (product page, quick view) open the drawer. Browsing
    // adds from cards use the fly-to-cart animation instead (less intrusive).
    if (openDrawer) setIsOpen(true);
  }, []);

  const remove = useCallback((handle: string) => {
    setLines((prev) => prev.filter((l) => l.product.handle !== handle));
  }, []);

  const setQty = useCallback((handle: string, qty: number) => {
    setLines((prev) =>
      qty <= 0
        ? prev.filter((l) => l.product.handle !== handle)
        : prev.map((l) => (l.product.handle === handle ? { ...l, qty } : l)),
    );
  }, []);

  const clear = useCallback(() => {
    setLines([]);
    setCoupon(null);
  }, []);

  const applyCoupon = useCallback((rawCode: string) => {
    const code = rawCode.trim().toUpperCase();
    if (!code) return { ok: false, message: 'اكتب كود الخصم' };
    const found = COUPONS[code];
    if (!found) return { ok: false, message: 'كود الخصم غير صحيح' };
    setCoupon({ code, ...found });
    return { ok: true, message: `تم تطبيق ${found.label}` };
  }, []);

  const removeCoupon = useCallback(() => setCoupon(null), []);

  const { count, subtotal } = useMemo(() => {
    let count = 0;
    let subtotal = 0;
    for (const l of lines) {
      count += l.qty;
      subtotal += l.qty * l.product.price;
    }
    return { count, subtotal };
  }, [lines]);

  const discount = useMemo(() => {
    if (!coupon || subtotal === 0) return 0;
    const raw =
      coupon.type === 'percent' ? (subtotal * coupon.value) / 100 : coupon.value;
    return Math.min(subtotal, Math.round(raw));
  }, [coupon, subtotal]);

  const total = Math.max(0, subtotal - discount);

  const value = useMemo(
    () => ({
      lines,
      count,
      subtotal,
      discount,
      total,
      coupon,
      applyCoupon,
      removeCoupon,
      add,
      remove,
      setQty,
      clear,
      isOpen,
      openCart,
      closeCart,
    }),
    [
      lines,
      count,
      subtotal,
      discount,
      total,
      coupon,
      applyCoupon,
      removeCoupon,
      add,
      remove,
      setQty,
      clear,
      isOpen,
      openCart,
      closeCart,
    ],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used inside CartProvider');
  return ctx;
}
