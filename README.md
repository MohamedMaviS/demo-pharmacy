# صيدلية ديمو — Demo Pharmacy

A **static, non-commercial, educational demo** of an Arabic-first (RTL) pharmacy storefront built with **Next.js 14 (App Router)**. Generic brand, custom SVG logo, mock catalog — **not affiliated with any real pharmacy**. No backend, no database: cart / wishlist / recently-viewed all live in React Context.

🔗 **Live demo:** https://demo-ivory-phi-w8pxd9gzxe.vercel.app

> Demo only. Every form (login, newsletter, checkout, prescription…) just surfaces a friendly toast — no data is sent anywhere.

## Stack

- **Next.js 14** (App Router, TypeScript, fully static / SSG)
- **Tailwind CSS** with a CSS-variable token system → light + dark themes
- **Framer Motion** (scroll reveals, 3D tilt, sticky/animated sections, `prefers-reduced-motion` aware)
- **Rubik** (display) + **IBM Plex Sans Arabic** (body) via `next/font`
- **lucide-react** icons + custom SVG logo
- **sonner** toasts · **@vercel/analytics**

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (SSG)
```

## Features

**Storefront**
- Full **RTL** Arabic layout · **dark mode** (CSS-variable theming + toggle)
- Banner slider · auto-scrolling **animated category circles** + product marquees
- **Promo banners** with an animated 3D product showcase (auto-cycling, float, sparkles)
- **"عرض اليوم" flash deal** with a live flip countdown + 3D tilt cards
- ~190 mock products across 13 collections · collection filters (brand / price / sort)

**Product & commerce**
- Product page: gallery + zoom, drug-info tabs (usage / dosage / warnings / ingredients), ratings, urgency, sticky add-to-cart, frequently-bought-together, reviews, recently-viewed
- Quick-view modal · fly-to-cart · slide-out cart drawer · coupons
- Multi-step **checkout** (shipping → payment → review) with order summary + trust signals
- **Account dashboard** (profile, orders + status timeline, addresses, wishlist, reorder)

**Pharmacy identity**
- **رفع الروشتة** `/prescription` — upload with preview + review flow
- **اسأل الصيدلي** `/ask-pharmacist` — pharmacist consultation form

**Engagement & polish**
- Left-side rotating **notification toasts** · first-order **newsletter popup**
- Scroll progress bar · depth scroll-reveals · WhatsApp FAB · back-to-top · custom 404
- SEO (per-page metadata, JSON-LD, sitemap, robots) · PWA manifest · blur placeholders

## Structure

```
app/
  layout.tsx                     RTL shell, providers, global UI
  page.tsx                       Home
  collections/[handle]/          (SSG)  products/[handle]/  (SSG)
  cart · checkout · account · wishlist · search
  prescription · ask-pharmacist · pages/branchs · pages/careers
  sitemap.ts · robots.ts · manifest.ts · not-found.tsx
components/   ~50 UI components (Header, PromoBanners, FlashDeal, ProductCard, Tilt, …)
context/      CartContext · WishlistContext · QuickViewContext · RecentlyViewedContext
lib/          data.ts (mock catalog) · utils.ts · icons.tsx · productMeta.ts
```

## Notes

- Product images load over HTTPS via `next/image` `remotePatterns`, with a placeholder fallback.
- Designed & built by **MohamedMaviS** — [mohamedmavis.com](https://mohamedmavis.com).

## Deploy

Push to GitHub → import in Vercel (defaults work). Or `vercel --prod` from the project root.
