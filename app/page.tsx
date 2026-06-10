import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

import HeroBannerSlider from '@/components/HeroBannerSlider';
import CircleCategories from '@/components/CircleCategories';
import PromoBanners from '@/components/PromoBanners';
import PrescriptionCTA from '@/components/PrescriptionCTA';
import FlashDeal from '@/components/FlashDeal';
import CollectionRow from '@/components/CollectionRow';
import ProductMarquee from '@/components/ProductMarquee';
import Reveal from '@/components/Reveal';
import { COLLECTIONS, getProductsByCollection, PRODUCTS } from '@/lib/data';

export default function HomePage() {
  const fresh = PRODUCTS.slice(-12).reverse();
  // A trimmed set of featured collections (full list stays reachable via the
  // category circles + menu) to keep the home page focused, not endless.
  const featuredCollections = COLLECTIONS.slice(0, 6);

  return (
    <>
      <HeroBannerSlider />

      <CircleCategories />

      <Reveal>
        <PromoBanners />
      </Reveal>

      <Reveal>
        <FlashDeal />
      </Reveal>

      {featuredCollections.slice(0, 4).map((collection) => (
        <Reveal key={collection.handle}>
          <CollectionRow
            collection={collection}
            products={getProductsByCollection(collection.handle)}
          />
        </Reveal>
      ))}

      <Reveal>
        <PrescriptionCTA />
      </Reveal>

      <Reveal>
        <ProductMarquee
          products={fresh}
          eyebrow="جديد"
          heading="وصل حديثًا"
          subheading="أحدث المنتجات في صيدلية ديمو"
          speed="slow"
          reverse
        />
      </Reveal>

      {featuredCollections.slice(4, 6).map((collection) => (
        <Reveal key={collection.handle}>
          <CollectionRow
            collection={collection}
            products={getProductsByCollection(collection.handle)}
          />
        </Reveal>
      ))}

      <Reveal>
        <section className="mx-auto max-w-7xl px-4 pb-4 pt-2 text-center">
          <Link
            href="/search"
            className="group inline-flex items-center gap-2 rounded-full border border-line bg-surface px-7 py-3.5 text-sm font-bold text-ink-soft shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:border-brand hover:text-brand"
          >
            تصفّح كل الأقسام والمنتجات
            <ArrowLeft size={16} aria-hidden="true" className="transition-transform duration-200 group-hover:-translate-x-0.5" />
          </Link>
        </section>
      </Reveal>
    </>
  );
}
