'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import {
  Heart,
  Menu,
  Search,
  ShoppingBag,
  User,
  FileText,
} from 'lucide-react';

import { MAIN_MENU, PRODUCTS, SITE } from '@/lib/data';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import { formatPrice } from '@/lib/utils';
import { AnimatePresence } from 'framer-motion';
import MobileMenu from './MobileMenu';
import MegaMenu from './MegaMenu';
import Logo from './Logo';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const { count, subtotal, openCart } = useCart();
  const { count: wishCount } = useWishlist();
  const [openMenu, setOpenMenu] = useState(false);
  const [query, setQuery] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const results = query.trim()
    ? PRODUCTS.filter(
        (p) =>
          p.title.includes(query.trim()) ||
          p.brand.toLowerCase().includes(query.trim().toLowerCase()),
      ).slice(0, 6)
    : [];

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-line bg-surface/90 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-surface/75">
        <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3 md:gap-6">
          <button
            type="button"
            aria-label="فتح القائمة"
            aria-expanded={openMenu}
            className="grid h-11 w-11 cursor-pointer place-items-center rounded-lg text-ink-soft transition-colors duration-200 hover:bg-surface-soft hover:text-brand lg:hidden"
            onClick={() => setOpenMenu(true)}
          >
            <Menu size={26} aria-hidden="true" />
          </button>

          <Link
            href="/"
            className="shrink-0 cursor-pointer"
            aria-label={`${SITE.name}، الصفحة الرئيسية`}
          >
            <Logo />
          </Link>

          <div className="relative hidden flex-1 md:block">
            <label htmlFor="header-search" className="sr-only">
              ابحث في المتجر
            </label>
            <div className="flex items-center gap-2 rounded-full border border-line bg-surface-sunken px-4 py-2.5 transition-colors duration-200 focus-within:border-trust focus-within:bg-surface">
              <Search size={18} className="text-ink-mute" aria-hidden="true" />
              <input
                id="header-search"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setShowResults(true);
                }}
                onFocus={() => setShowResults(true)}
                onBlur={() => setTimeout(() => setShowResults(false), 150)}
                placeholder="ابحث عن منتج، علامة، أو فئة..."
                className="w-full bg-transparent text-sm outline-none placeholder:text-ink-mute"
              />
            </div>
            {showResults && results.length > 0 && (
              <div
                role="listbox"
                className="absolute inset-x-0 top-full z-50 mt-2 max-h-80 overflow-auto rounded-xl border border-line bg-surface p-2 shadow-cardHover"
              >
                {results.map((p) => (
                  <Link
                    key={p.handle}
                    href={`/products/${p.handle}`}
                    role="option"
                    className="flex cursor-pointer items-center gap-3 rounded-lg p-2 transition-colors duration-150 hover:bg-surface-soft"
                    onClick={() => setShowResults(false)}
                  >
                    <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded bg-surface-sunken">
                      <Image src={p.image} alt={p.title} fill className="object-contain p-1" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="truncate text-sm font-medium">{p.title}</div>
                      <div className="text-xs text-ink-mute">{p.brand}</div>
                    </div>
                    <div className="text-sm font-semibold text-trust">{formatPrice(p.price)}</div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className="mr-auto flex items-center gap-1 md:gap-2">
            <ThemeToggle />
            <Link
              href="/account"
              aria-label="الحساب"
              className="hidden h-11 w-11 cursor-pointer place-items-center rounded-full text-ink-soft transition-colors duration-200 hover:bg-surface-soft hover:text-brand md:grid"
            >
              <User size={22} aria-hidden="true" />
            </Link>
            <Link
              href="/wishlist"
              aria-label={`قائمة الأمنيات (${wishCount} عنصر)`}
              className="relative hidden h-11 w-11 cursor-pointer place-items-center rounded-full text-ink-soft transition-colors duration-200 hover:bg-surface-soft hover:text-brand md:grid"
            >
              <Heart size={22} aria-hidden="true" />
              {wishCount > 0 && (
                <span
                  aria-hidden="true"
                  className="absolute -top-0.5 -left-0.5 grid h-5 min-w-5 place-items-center rounded-full bg-accent-600 px-1 text-[10px] font-bold text-white"
                >
                  {wishCount}
                </span>
              )}
            </Link>
            <button
              type="button"
              onClick={openCart}
              aria-label={`فتح السلة، ${count} عنصر، الإجمالي ${formatPrice(subtotal)}`}
              className="relative flex min-h-[44px] cursor-pointer items-center gap-2.5 rounded-full bg-gradient-to-l from-trust-500 to-trust-700 px-3.5 py-2 text-white shadow-soft transition-all duration-200 hover:shadow-cardHover hover:brightness-110"
            >
              <div id="cart-fly-anchor" className="relative">
                <ShoppingBag size={20} aria-hidden="true" />
                {count > 0 && (
                  <span
                    aria-hidden="true"
                    className="absolute -top-2 -left-2 grid h-5 min-w-5 place-items-center rounded-full bg-accent-600 px-1 text-[10px] font-black text-white ring-2 ring-surface"
                  >
                    {count}
                  </span>
                )}
              </div>
              {count > 0 ? (
                <span className="hidden flex-col items-start leading-none sm:flex">
                  <span className="text-[9px] font-semibold text-white/75">السلة</span>
                  <span className="text-sm font-black">{formatPrice(subtotal)}</span>
                </span>
              ) : (
                <span className="hidden text-sm font-bold sm:inline">السلة</span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile search */}
        <div className="px-4 pb-3 md:hidden">
          <label htmlFor="mobile-search" className="sr-only">
            ابحث
          </label>
          <div className="flex items-center gap-2 rounded-full border border-line bg-surface-sunken px-4 py-2.5 focus-within:border-trust focus-within:bg-surface">
            <Search size={18} className="text-ink-mute" aria-hidden="true" />
            <input
              id="mobile-search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="ابحث في صيدلية ديمو..."
              className="w-full bg-transparent text-sm outline-none placeholder:text-ink-mute"
            />
          </div>
        </div>

        {/* Main menu */}
        <nav
          aria-label="القائمة الرئيسية"
          className="relative hidden border-t border-line lg:block"
          onMouseLeave={() => setActiveMenu(null)}
        >
          <div className="mx-auto flex max-w-7xl items-center gap-1 px-4">
            <div className="flex flex-1 items-center gap-1 overflow-x-auto no-scrollbar">
              {MAIN_MENU.map((item) => {
                const handle = item.href.replace('/collections/', '');
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onMouseEnter={() => setActiveMenu(handle)}
                    onFocus={() => setActiveMenu(handle)}
                    className={`cursor-pointer whitespace-nowrap rounded-md px-3 py-3 text-sm font-medium transition-colors duration-200 hover:bg-surface-soft hover:text-brand ${
                      activeMenu === handle ? 'bg-surface-soft text-brand' : 'text-ink-soft'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
            <div className="flex shrink-0 items-center gap-1 pr-3">
              <Link
                href="/track"
                className="cursor-pointer rounded-md px-3 py-3 text-sm font-medium text-ink-soft transition-colors duration-200 hover:bg-surface-soft hover:text-brand"
              >
                تتبّع طلبك
              </Link>
              <Link
                href="/pages/branchs"
                className="cursor-pointer rounded-md px-3 py-3 text-sm font-medium text-ink-soft transition-colors duration-200 hover:bg-surface-soft hover:text-brand"
              >
                فروعنا
              </Link>
              <Link
                href="/prescription"
                className="my-2 flex min-h-[40px] cursor-pointer items-center gap-2 rounded-full bg-brand px-4 py-1.5 text-sm font-bold text-white transition-colors duration-200 hover:bg-brand-700"
              >
                <FileText size={15} aria-hidden="true" />
                ارفع روشتتك
              </Link>
            </div>
          </div>

          <AnimatePresence>
            {activeMenu && (
              <MegaMenu handle={activeMenu} onNavigate={() => setActiveMenu(null)} />
            )}
          </AnimatePresence>
        </nav>
      </header>

      <MobileMenu open={openMenu} onClose={() => setOpenMenu(false)} />
    </>
  );
}
