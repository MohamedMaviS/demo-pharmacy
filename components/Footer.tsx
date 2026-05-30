'use client';

import Link from 'next/link';
import { Phone, MessageCircle, Mail, MapPin } from 'lucide-react';
import { toast } from 'sonner';
import { useState } from 'react';
import { SITE, DEVELOPER } from '@/lib/data';
import Logo from './Logo';
import BrandIcon, { type BrandKind } from './BrandIcon';
import { PaymentRow } from './PaymentLogos';

const QUICK_LINKS = [
  { label: 'الرئيسية', href: '/' },
  { label: 'كل المنتجات', href: '/search' },
  { label: 'العروض', href: '/collections/sale' },
  { label: 'فروعنا', href: '/pages/branchs' },
  { label: 'وظائف', href: '/pages/careers' },
];

const CATEGORY_LINKS = [
  { label: 'العناية بالبشرة', href: '/collections/skin-care' },
  { label: 'العناية بالشعر', href: '/collections/hair-care' },
  { label: 'المكياج', href: '/collections/makeup' },
  { label: 'الفيتامينات', href: '/collections/vitamins' },
  { label: 'الأم والطفل', href: '/collections/mom-baby' },
  { label: 'الأدوية', href: '/collections/medicines' },
];

export default function Footer() {
  const [email, setEmail] = useState('');

  return (
    <footer className="relative mt-16 border-t border-line">
      {/* Main body */}
      <div className="bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-12">
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-12">
            {/* Brand + contact */}
            <div className="col-span-2 md:col-span-4">
              <Logo />
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-mute">
                متجرك للأدوية ومستحضرات التجميل والعناية بأفضل الأسعار. نسخة ديمو
                للعرض فقط، غير تابعة لأي صيدلية حقيقية.
              </p>

              <ul className="mt-5 space-y-2.5 text-sm text-ink-soft">
                <li className="flex items-start gap-2.5">
                  <MapPin size={16} className="mt-0.5 shrink-0 text-brand" aria-hidden="true" />
                  <span>{SITE.address}</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone size={16} className="shrink-0 text-brand" aria-hidden="true" />
                  <a
                    href={`tel:${SITE.phoneTel}`}
                    className="cursor-pointer transition-colors duration-200 hover:text-brand"
                  >
                    {SITE.phone}
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail size={16} className="shrink-0 text-brand" aria-hidden="true" />
                  <a
                    href={`mailto:${SITE.email}`}
                    className="cursor-pointer transition-colors duration-200 hover:text-brand"
                  >
                    {SITE.emailDisplay}
                  </a>
                </li>
              </ul>
            </div>

            {/* Quick links */}
            <nav aria-label="روابط سريعة" className="md:col-span-2">
              <h3 className="mb-4 font-display text-sm font-bold text-ink">روابط سريعة</h3>
              <ul className="space-y-2.5 text-sm text-ink-soft">
                {QUICK_LINKS.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="cursor-pointer transition-colors duration-200 hover:text-brand"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Categories */}
            <nav aria-label="الأقسام" className="md:col-span-3">
              <h3 className="mb-4 font-display text-sm font-bold text-ink">الأقسام</h3>
              <ul className="space-y-2.5 text-sm text-ink-soft">
                {CATEGORY_LINKS.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="cursor-pointer transition-colors duration-200 hover:text-brand"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Newsletter */}
            <div className="col-span-2 md:col-span-3">
              <h3 className="mb-4 font-display text-sm font-bold text-ink">النشرة البريدية</h3>
              <p className="mb-3 text-sm text-ink-mute">
                اشترك ليصلك جديد العروض والخصومات الحصرية.
              </p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  toast.success('ده ديمو للعرض فقط');
                  setEmail('');
                }}
                className="space-y-2"
              >
                <label htmlFor="newsletter-email" className="sr-only">
                  البريد الإلكتروني
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="بريدك الإلكتروني"
                  className="w-full rounded-full border border-line bg-surface px-4 py-2.5 text-sm text-ink outline-none transition-colors duration-200 focus:border-trust"
                />
                <button
                  type="submit"
                  className="min-h-[44px] w-full cursor-pointer rounded-full bg-trust py-2.5 text-sm font-bold text-white transition-colors duration-200 hover:bg-trust-800"
                >
                  اشترك الآن
                </button>
              </form>
            </div>
          </div>

          {/* Payments */}
          <div className="mt-10 flex flex-col gap-4 border-t border-line pt-6 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="mb-2 text-xs font-semibold text-ink-mute">وسائل الدفع المتاحة</div>
              <PaymentRow />
            </div>
            <p className="text-xs text-ink-mute">
              نقبل جميع وسائل الدفع الإلكترونية والكاش عند الاستلام
            </p>
          </div>
        </div>
      </div>

      {/* Developer credit */}
      <div className="bg-gradient-to-bl from-brand-900 via-brand-800 to-brand-900 text-white">
        <div className="mx-auto max-w-7xl px-4 py-8">
          <div className="flex flex-col items-center text-center">
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-brand-200">
              تصميم وتطوير
            </span>
            <a
              href={DEVELOPER.website}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1.5 cursor-pointer font-display text-xl font-extrabold tracking-tight text-white transition-colors duration-200 hover:text-brand-200 sm:text-2xl"
            >
              {DEVELOPER.name}
            </a>
            <span className="mt-1 text-xs font-medium text-brand-200/90">
              {DEVELOPER.role}
            </span>

            {/* Real brand logos */}
            <div className="mt-5 flex items-center justify-center gap-2.5">
              {DEVELOPER.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="group grid h-10 w-10 cursor-pointer place-items-center rounded-full bg-white/10 text-white ring-1 ring-white/15 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-lg"
                  style={{ ['--brand-c' as string]: s.color }}
                >
                  <span
                    className="text-white transition-colors duration-200 group-hover:[color:var(--brand-c)]"
                    style={{ display: 'inline-flex' }}
                  >
                    <BrandIcon kind={s.kind as BrandKind} size={17} />
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div className="mx-auto mt-7 max-w-2xl border-t border-white/10 pt-4">
            <p className="text-center text-xs text-white/60">
              © 2026 صيدلية ديمو · نسخة ديمو للعرض فقط
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
