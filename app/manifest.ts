import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'صيدلية ديمو | Demo Pharmacy',
    short_name: 'صيدلية ديمو',
    description: 'متجر إلكتروني تجريبي للأدوية ومستحضرات التجميل والعناية.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#15803D',
    dir: 'rtl',
    lang: 'ar',
    icons: [{ src: '/icon.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'any' }],
  };
}
