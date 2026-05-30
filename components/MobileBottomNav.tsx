'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Grid3x3, Heart, ShoppingBag, User } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import { cn } from '@/lib/utils';

type Item = {
  label: string;
  href?: string;
  Icon: typeof Home;
  key?: 'cart' | 'wish';
  action?: 'cart';
};

const ITEMS: Item[] = [
  { label: 'الرئيسية', href: '/', Icon: Home },
  { label: 'الفئات', href: '/search', Icon: Grid3x3 },
  { label: 'السلة', Icon: ShoppingBag, key: 'cart', action: 'cart' },
  { label: 'الأمنيات', href: '/wishlist', Icon: Heart, key: 'wish' },
  { label: 'حسابي', href: '/account', Icon: User },
];

export default function MobileBottomNav() {
  const pathname = usePathname();
  const { count: cartCount, openCart } = useCart();
  const { count: wishCount } = useWishlist();

  return (
    <>
      {/* Spacer so content doesn't hide behind nav */}
      <div className="h-20 lg:hidden" aria-hidden="true" />

      <nav
        aria-label="تنقل سفلي"
        className="fixed bottom-3 left-3 right-3 z-40 rounded-2xl border border-line bg-surface/95 px-2 py-2 shadow-cardHover backdrop-blur supports-[backdrop-filter]:bg-surface/85 lg:hidden"
      >
        <ul className="flex items-center justify-between">
          {ITEMS.map(({ label, href, Icon, key, action }) => {
            const isActive = href
              ? href === '/'
                ? pathname === '/'
                : pathname?.startsWith(href)
              : false;
            const badge = key === 'cart' ? cartCount : key === 'wish' ? wishCount : 0;

            const inner = (
              <>
                <div className="relative">
                  <Icon size={20} aria-hidden="true" strokeWidth={isActive ? 2.4 : 2} />
                  {badge > 0 && (
                    <span
                      aria-hidden="true"
                      className="absolute -top-2 -left-2 grid h-4 min-w-4 place-items-center rounded-full bg-accent-600 px-1 text-[9px] font-bold text-white"
                    >
                      {badge > 99 ? '99+' : badge}
                    </span>
                  )}
                </div>
                <span className="text-[10px] font-medium leading-none">{label}</span>
              </>
            );

            const className = cn(
              'relative flex min-h-[48px] w-full cursor-pointer flex-col items-center justify-center gap-0.5 rounded-xl px-1 py-1.5 transition-all duration-200',
              isActive
                ? 'bg-surface-soft text-brand'
                : 'text-ink-mute hover:bg-surface-sunken hover:text-brand',
            );

            return (
              <li key={label} className="flex-1">
                {action === 'cart' ? (
                  <button
                    type="button"
                    onClick={openCart}
                    aria-label={`فتح السلة (${cartCount})`}
                    className={className}
                  >
                    {inner}
                  </button>
                ) : (
                  <Link
                    href={href!}
                    aria-label={label}
                    aria-current={isActive ? 'page' : undefined}
                    className={className}
                  >
                    {inner}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
