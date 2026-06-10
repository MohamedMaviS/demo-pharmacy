import type { Metadata, Viewport } from 'next';
import { Rubik, IBM_Plex_Sans_Arabic } from 'next/font/google';
import { Toaster } from 'sonner';
import './globals.css';
import { SITE } from '@/lib/data';

import Header from '@/components/Header';
import AnnouncementBar from '@/components/AnnouncementBar';
import CategoryStrip from '@/components/CategoryStrip';
import Footer from '@/components/Footer';
import SkipLink from '@/components/SkipLink';
import MobileBottomNav from '@/components/MobileBottomNav';
import CartDrawer from '@/components/CartDrawer';
import QuickViewModal from '@/components/QuickViewModal';
import ThemeScript from '@/components/ThemeScript';
import BrandsMarquee from '@/components/BrandsMarquee';
import WhatsAppFab from '@/components/WhatsAppFab';
import BackToTop from '@/components/BackToTop';
import NotificationToasts from '@/components/NotificationToasts';
import NewsletterPopup from '@/components/NewsletterPopup';
import TopProgress from '@/components/TopProgress';
import { Analytics } from '@vercel/analytics/react';
import { CartProvider } from '@/context/CartContext';
import { WishlistProvider } from '@/context/WishlistContext';
import { QuickViewProvider } from '@/context/QuickViewContext';
import { RecentlyViewedProvider } from '@/context/RecentlyViewedContext';

// Modern Arabic-first pairing: IBM Plex Sans Arabic (body) + Rubik (display).
const bodyFont = IBM_Plex_Sans_Arabic({
  subsets: ['arabic', 'latin'],
  variable: '--font-body',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

const displayFont = Rubik({
  subsets: ['arabic', 'latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: 'صيدلية ديمو | Demo Pharmacy',
    template: '%s',
  },
  description:
    'صيدلية ديمو: متجر إلكتروني للأدوية ومستحضرات التجميل والعناية. نسخة ديمو للعرض فقط.',
  applicationName: 'صيدلية ديمو',
  manifest: '/manifest.webmanifest',
  icons: { icon: '/icon.svg', apple: '/icon.svg' },
  openGraph: {
    type: 'website',
    siteName: 'صيدلية ديمو',
    locale: 'ar_EG',
  },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: '#15803D',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="ar"
      dir="rtl"
      suppressHydrationWarning
      className={`${bodyFont.variable} ${displayFont.variable}`}
    >
      <body className="min-h-screen bg-page font-sans text-ink antialiased">
        <ThemeScript />
        <TopProgress />
        <CartProvider>
          <WishlistProvider>
            <RecentlyViewedProvider>
              <QuickViewProvider>
                <SkipLink />
                <AnnouncementBar />
                <Header />
                <CategoryStrip />
                <main id="main" className="min-h-[60vh]">
                  {children}
                </main>
                <BrandsMarquee />
                <Footer />
                <MobileBottomNav />
                <CartDrawer />
                <QuickViewModal />
                <WhatsAppFab />
                <BackToTop />
                <NotificationToasts />
                <NewsletterPopup />
                <Analytics />
                <Toaster
                  position="bottom-center"
                  dir="rtl"
                  richColors
                  toastOptions={{
                    style: { fontFamily: 'var(--font-body)' },
                  }}
                />
              </QuickViewProvider>
            </RecentlyViewedProvider>
          </WishlistProvider>
        </CartProvider>
      </body>
    </html>
  );
}
