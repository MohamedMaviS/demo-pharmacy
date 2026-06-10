'use client';

import { useMemo, useState, useEffect, useCallback } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { SlidersHorizontal, X, ChevronDown, Check } from 'lucide-react';
import type { Product } from '@/lib/data';
import ProductCard from './ProductCard';
import { cn, formatPrice } from '@/lib/utils';

type SortKey =
  | 'featured'
  | 'price-asc'
  | 'price-desc'
  | 'name-asc'
  | 'newest'
  | 'sale';

const SORT_OPTIONS: { key: SortKey; label: string }[] = [
  { key: 'featured', label: 'الأكثر تميزًا' },
  { key: 'sale', label: 'العروض أولًا' },
  { key: 'price-asc', label: 'السعر: من الأقل للأعلى' },
  { key: 'price-desc', label: 'السعر: من الأعلى للأقل' },
  { key: 'name-asc', label: 'الاسم: أ → ي' },
  { key: 'newest', label: 'الأحدث' },
];

const PAGE_SIZE = 12;

type Props = {
  products: Product[];
  collectionTitle: string;
};

export default function CollectionView({ products, collectionTitle }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Read filters from URL
  const initialBrands = (searchParams.get('brands') ?? '')
    .split(',')
    .filter(Boolean);
  const initialSort = (searchParams.get('sort') ?? 'featured') as SortKey;
  const initialMin = Number(searchParams.get('min') ?? '0');
  const initialMax = Number(searchParams.get('max') ?? '0');
  const initialOnSaleOnly = searchParams.get('sale') === '1';

  const priceRange = useMemo(() => {
    if (products.length === 0) return { min: 0, max: 0 };
    let min = Infinity;
    let max = 0;
    for (const p of products) {
      if (p.price < min) min = p.price;
      if (p.price > max) max = p.price;
    }
    return { min: Math.floor(min), max: Math.ceil(max) };
  }, [products]);

  const allBrands = useMemo(() => {
    const set = new Set<string>();
    for (const p of products) set.add(p.brand);
    return Array.from(set).sort();
  }, [products]);

  const [selectedBrands, setSelectedBrands] = useState<string[]>(
    initialBrands.filter((b) => allBrands.includes(b)),
  );
  const [sort, setSort] = useState<SortKey>(
    SORT_OPTIONS.some((s) => s.key === initialSort) ? initialSort : 'featured',
  );
  const [minPrice, setMinPrice] = useState<number>(
    initialMin > 0 ? initialMin : priceRange.min,
  );
  const [maxPrice, setMaxPrice] = useState<number>(
    initialMax > 0 ? initialMax : priceRange.max,
  );
  const [onSaleOnly, setOnSaleOnly] = useState<boolean>(initialOnSaleOnly);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [visible, setVisible] = useState(PAGE_SIZE);

  // Reset the visible count whenever the filters change.
  useEffect(() => {
    setVisible(PAGE_SIZE);
  }, [selectedBrands, sort, minPrice, maxPrice, onSaleOnly]);

  // Sync URL when filters change (debounced via effect)
  useEffect(() => {
    const params = new URLSearchParams();
    if (selectedBrands.length > 0) params.set('brands', selectedBrands.join(','));
    if (sort !== 'featured') params.set('sort', sort);
    if (minPrice > priceRange.min) params.set('min', String(minPrice));
    if (maxPrice < priceRange.max) params.set('max', String(maxPrice));
    if (onSaleOnly) params.set('sale', '1');
    const qs = params.toString();
    router.replace(qs ? `?${qs}` : window.location.pathname, { scroll: false });
  }, [selectedBrands, sort, minPrice, maxPrice, onSaleOnly, priceRange, router]);

  const filtered = useMemo(() => {
    let result = products.filter((p) => {
      if (selectedBrands.length > 0 && !selectedBrands.includes(p.brand)) return false;
      if (p.price < minPrice || p.price > maxPrice) return false;
      if (onSaleOnly && !(p.compareAt && p.compareAt > p.price)) return false;
      return true;
    });

    switch (sort) {
      case 'price-asc':
        result = [...result].sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result = [...result].sort((a, b) => b.price - a.price);
        break;
      case 'name-asc':
        result = [...result].sort((a, b) => a.title.localeCompare(b.title, 'ar'));
        break;
      case 'sale':
        result = [...result].sort((a, b) => {
          const aSale = a.compareAt && a.compareAt > a.price ? 1 : 0;
          const bSale = b.compareAt && b.compareAt > b.price ? 1 : 0;
          return bSale - aSale;
        });
        break;
      case 'newest':
        result = [...result].reverse();
        break;
      default:
        break;
    }
    return result;
  }, [products, selectedBrands, minPrice, maxPrice, onSaleOnly, sort]);

  const toggleBrand = useCallback((brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand],
    );
  }, []);

  const clearAll = useCallback(() => {
    setSelectedBrands([]);
    setSort('featured');
    setMinPrice(priceRange.min);
    setMaxPrice(priceRange.max);
    setOnSaleOnly(false);
  }, [priceRange]);

  const hasActiveFilters =
    selectedBrands.length > 0 ||
    sort !== 'featured' ||
    minPrice > priceRange.min ||
    maxPrice < priceRange.max ||
    onSaleOnly;

  return (
    <>
      {/* Toolbar */}
      <div className="mb-6 flex items-center justify-between gap-3 rounded-2xl border border-line bg-surface p-3 shadow-card">
        <button
          type="button"
          onClick={() => setMobileOpen(true)}
          className="flex min-h-[40px] cursor-pointer items-center gap-2 rounded-full bg-surface-soft px-4 py-2 text-sm font-semibold text-brand transition-colors duration-200 hover:bg-brand-100 lg:hidden"
        >
          <SlidersHorizontal size={16} aria-hidden="true" />
          الفلاتر
          {hasActiveFilters && (
            <span className="grid h-5 min-w-5 place-items-center rounded-full bg-brand px-1 text-[10px] font-bold text-white">
              {selectedBrands.length + (onSaleOnly ? 1 : 0) + (minPrice > priceRange.min || maxPrice < priceRange.max ? 1 : 0)}
            </span>
          )}
        </button>

        <span className="hidden text-sm text-ink-mute lg:inline" aria-live="polite">
          {filtered.length} منتج من {products.length}
        </span>

        <SortDropdown sort={sort} setSort={setSort} />
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[260px_1fr]">
        {/* Desktop sidebar */}
        <aside
          aria-label="فلاتر البحث"
          className="hidden lg:sticky lg:top-44 lg:block lg:self-start"
        >
          <FilterPanel
            allBrands={allBrands}
            selectedBrands={selectedBrands}
            toggleBrand={toggleBrand}
            priceRange={priceRange}
            minPrice={minPrice}
            maxPrice={maxPrice}
            setMinPrice={setMinPrice}
            setMaxPrice={setMaxPrice}
            onSaleOnly={onSaleOnly}
            setOnSaleOnly={setOnSaleOnly}
            hasActiveFilters={hasActiveFilters}
            clearAll={clearAll}
          />
        </aside>

        {/* Mobile drawer */}
        <AnimatePresence>
          {mobileOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 z-50 bg-black/50 lg:hidden"
                onClick={() => setMobileOpen(false)}
                aria-hidden="true"
              />
              <motion.aside
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'tween', ease: [0.16, 1, 0.3, 1], duration: 0.25 }}
                className="fixed bottom-0 right-0 top-0 z-50 flex w-[85%] max-w-sm flex-col bg-surface shadow-2xl lg:hidden"
                role="dialog"
                aria-modal="true"
                aria-label="فلاتر البحث"
              >
                <div className="flex items-center justify-between border-b border-line px-4 py-3">
                  <h3 className="font-display text-base font-bold">الفلاتر</h3>
                  <button
                    onClick={() => setMobileOpen(false)}
                    aria-label="إغلاق الفلاتر"
                    className="grid h-10 w-10 cursor-pointer place-items-center rounded-lg text-ink-soft hover:bg-surface-sunken"
                  >
                    <X size={20} aria-hidden="true" />
                  </button>
                </div>
                <div className="flex-1 overflow-y-auto px-4 py-4">
                  <FilterPanel
                    allBrands={allBrands}
                    selectedBrands={selectedBrands}
                    toggleBrand={toggleBrand}
                    priceRange={priceRange}
                    minPrice={minPrice}
                    maxPrice={maxPrice}
                    setMinPrice={setMinPrice}
                    setMaxPrice={setMaxPrice}
                    onSaleOnly={onSaleOnly}
                    setOnSaleOnly={setOnSaleOnly}
                    hasActiveFilters={hasActiveFilters}
                    clearAll={clearAll}
                  />
                </div>
                <div className="border-t border-line p-4">
                  <button
                    onClick={() => setMobileOpen(false)}
                    className="min-h-[44px] w-full cursor-pointer rounded-full bg-trust py-3 text-sm font-bold text-white hover:bg-trust-800"
                  >
                    عرض {filtered.length} منتج
                  </button>
                </div>
              </motion.aside>
            </>
          )}
        </AnimatePresence>

        {/* Products */}
        <div>
          {filtered.length === 0 ? (
            <div className="rounded-2xl border border-line bg-surface-soft/30 p-12 text-center">
              <p className="mb-3 font-display text-base font-bold text-ink">
                لا توجد منتجات مطابقة للفلاتر
              </p>
              <p className="mb-5 text-sm text-ink-mute">
                جرّب تعديل الفلاتر أو إلغاء بعضها.
              </p>
              <button
                onClick={clearAll}
                className="cursor-pointer rounded-full bg-trust px-5 py-2.5 text-sm font-bold text-white hover:bg-trust-800"
              >
                مسح كل الفلاتر
              </button>
            </div>
          ) : (
            <>
              {/* Active filter chips */}
              {hasActiveFilters && (
                <div className="mb-4 flex flex-wrap items-center gap-2">
                  {selectedBrands.map((b) => (
                    <FilterChip key={b} onRemove={() => toggleBrand(b)}>{b}</FilterChip>
                  ))}
                  {onSaleOnly && (
                    <FilterChip onRemove={() => setOnSaleOnly(false)}>العروض فقط</FilterChip>
                  )}
                  {(minPrice > priceRange.min || maxPrice < priceRange.max) && (
                    <FilterChip onRemove={() => { setMinPrice(priceRange.min); setMaxPrice(priceRange.max); }}>
                      {formatPrice(minPrice)} - {formatPrice(maxPrice)}
                    </FilterChip>
                  )}
                  <button
                    onClick={clearAll}
                    className="cursor-pointer text-xs font-bold text-trust underline transition-colors hover:text-trust-800"
                  >
                    مسح الكل
                  </button>
                </div>
              )}

              <div className="mb-3 text-xs text-ink-mute lg:hidden">
                <span aria-live="polite">{filtered.length} منتج</span>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4">
                {filtered.slice(0, visible).map((p) => (
                  <ProductCard key={p.handle} product={p} />
                ))}
              </div>

              {visible < filtered.length && (
                <div className="mt-8 flex flex-col items-center gap-2">
                  <button
                    onClick={() => setVisible((v) => v + PAGE_SIZE)}
                    className="cursor-pointer rounded-full border border-line bg-surface px-7 py-3 text-sm font-bold text-ink-soft shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:border-brand hover:text-brand"
                  >
                    تحميل المزيد ({filtered.length - visible})
                  </button>
                  <span className="text-xs text-ink-mute">عرض {visible} من {filtered.length}</span>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}

function FilterPanel(props: {
  allBrands: string[];
  selectedBrands: string[];
  toggleBrand: (b: string) => void;
  priceRange: { min: number; max: number };
  minPrice: number;
  maxPrice: number;
  setMinPrice: (n: number) => void;
  setMaxPrice: (n: number) => void;
  onSaleOnly: boolean;
  setOnSaleOnly: (b: boolean) => void;
  hasActiveFilters: boolean;
  clearAll: () => void;
}) {
  const {
    allBrands,
    selectedBrands,
    toggleBrand,
    priceRange,
    minPrice,
    maxPrice,
    setMinPrice,
    setMaxPrice,
    onSaleOnly,
    setOnSaleOnly,
    hasActiveFilters,
    clearAll,
  } = props;

  return (
    <div className="space-y-6 rounded-2xl border border-line bg-surface p-5 shadow-card">
      <div className="flex items-center justify-between">
        <h3 className="font-display text-sm font-bold text-ink">الفلاتر</h3>
        {hasActiveFilters && (
          <button
            onClick={clearAll}
            className="cursor-pointer text-xs font-semibold text-trust transition-colors duration-200 hover:text-trust-800"
          >
            مسح الكل
          </button>
        )}
      </div>

      {/* Sale toggle */}
      <label className="flex cursor-pointer items-center justify-between rounded-lg bg-accent-50 px-3 py-2.5">
        <span className="text-sm font-semibold text-accent-700">العروض فقط</span>
        <input
          type="checkbox"
          checked={onSaleOnly}
          onChange={(e) => setOnSaleOnly(e.target.checked)}
          className="h-5 w-5 cursor-pointer accent-accent-600"
        />
      </label>

      {/* Price range */}
      <div>
        <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-ink-mute">
          السعر
        </h4>
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs text-ink-soft">
            <span>{formatPrice(minPrice)}</span>
            <span>{formatPrice(maxPrice)}</span>
          </div>
          <div className="space-y-2">
            <label htmlFor="price-min" className="sr-only">الحد الأدنى للسعر</label>
            <input
              id="price-min"
              type="range"
              min={priceRange.min}
              max={priceRange.max}
              value={minPrice}
              onChange={(e) => {
                const v = Number(e.target.value);
                setMinPrice(Math.min(v, maxPrice));
              }}
              className="w-full cursor-pointer accent-brand"
            />
            <label htmlFor="price-max" className="sr-only">الحد الأقصى للسعر</label>
            <input
              id="price-max"
              type="range"
              min={priceRange.min}
              max={priceRange.max}
              value={maxPrice}
              onChange={(e) => {
                const v = Number(e.target.value);
                setMaxPrice(Math.max(v, minPrice));
              }}
              className="w-full cursor-pointer accent-brand"
            />
          </div>
          <div className="flex items-center gap-2 text-xs">
            <input
              type="number"
              min={priceRange.min}
              max={maxPrice}
              value={minPrice}
              onChange={(e) =>
                setMinPrice(Math.max(priceRange.min, Math.min(Number(e.target.value), maxPrice)))
              }
              className="w-full rounded-md border border-line px-2 py-1 text-center text-sm outline-none focus:border-trust"
              aria-label="الحد الأدنى"
            />
            <span className="text-ink-mute">|</span>
            <input
              type="number"
              min={minPrice}
              max={priceRange.max}
              value={maxPrice}
              onChange={(e) =>
                setMaxPrice(Math.min(priceRange.max, Math.max(Number(e.target.value), minPrice)))
              }
              className="w-full rounded-md border border-line px-2 py-1 text-center text-sm outline-none focus:border-trust"
              aria-label="الحد الأقصى"
            />
          </div>
        </div>
      </div>

      {/* Brand filter */}
      {allBrands.length > 1 && (
        <div>
          <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-ink-mute">
            العلامة التجارية ({selectedBrands.length}/{allBrands.length})
          </h4>
          <div className="max-h-60 space-y-1.5 overflow-y-auto pr-1">
            {allBrands.map((brand) => {
              const checked = selectedBrands.includes(brand);
              return (
                <label
                  key={brand}
                  className={cn(
                    'flex cursor-pointer items-center gap-2 rounded-md px-2 py-1.5 text-sm transition-colors duration-150',
                    checked ? 'bg-surface-soft text-brand' : 'text-ink-soft hover:bg-surface-sunken',
                  )}
                >
                  <span
                    className={cn(
                      'grid h-4 w-4 shrink-0 place-items-center rounded border transition-colors',
                      checked
                        ? 'border-brand bg-brand text-white'
                        : 'border-gray-300 bg-surface',
                    )}
                  >
                    {checked && <Check size={12} strokeWidth={3} aria-hidden="true" />}
                  </span>
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => toggleBrand(brand)}
                    className="sr-only"
                  />
                  <span className="truncate">{brand}</span>
                </label>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

function SortDropdown({
  sort,
  setSort,
}: {
  sort: SortKey;
  setSort: (s: SortKey) => void;
}) {
  const [open, setOpen] = useState(false);
  const current = SORT_OPTIONS.find((s) => s.key === sort) ?? SORT_OPTIONS[0];

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="flex min-h-[40px] cursor-pointer items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 text-sm font-medium text-ink-soft transition-colors duration-200 hover:border-trust hover:text-trust"
      >
        <span className="hidden text-xs text-ink-mute sm:inline">ترتيب:</span>
        <span>{current.label}</span>
        <ChevronDown
          size={14}
          aria-hidden="true"
          className={cn(
            'transition-transform duration-200',
            open && 'rotate-180',
          )}
        />
      </button>
      {open && (
        <>
          <div
            className="fixed inset-0 z-30"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <ul
            role="listbox"
            className="absolute left-0 top-full z-40 mt-2 w-56 overflow-hidden rounded-xl border border-line bg-surface p-1 shadow-cardHover"
          >
            {SORT_OPTIONS.map((opt) => (
              <li key={opt.key}>
                <button
                  type="button"
                  role="option"
                  aria-selected={sort === opt.key}
                  onClick={() => {
                    setSort(opt.key);
                    setOpen(false);
                  }}
                  className={cn(
                    'flex w-full cursor-pointer items-center justify-between rounded-lg px-3 py-2 text-right text-sm transition-colors duration-150',
                    sort === opt.key
                      ? 'bg-surface-soft font-semibold text-brand'
                      : 'text-ink-soft hover:bg-surface-sunken',
                  )}
                >
                  {opt.label}
                  {sort === opt.key && <Check size={14} aria-hidden="true" />}
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

function FilterChip({ children, onRemove }: { children: React.ReactNode; onRemove: () => void }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700 dark:border-brand-500/30 dark:bg-brand-500/10 dark:text-brand-300">
      {children}
      <button
        onClick={onRemove}
        aria-label="إزالة الفلتر"
        className="grid h-4 w-4 cursor-pointer place-items-center rounded-full text-brand-700/70 transition-colors hover:bg-brand-200/60 hover:text-brand-900 dark:text-brand-300"
      >
        <X size={11} aria-hidden="true" />
      </button>
    </span>
  );
}
