import HeroBannerSlider from '@/components/HeroBannerSlider';
import CircleCategories from '@/components/CircleCategories';
import PromoBanners from '@/components/PromoBanners';
import PrescriptionCTA from '@/components/PrescriptionCTA';
import FlashDeal from '@/components/FlashDeal';
import CollectionRow from '@/components/CollectionRow';
import ProductMarquee from '@/components/ProductMarquee';
import Reveal from '@/components/Reveal';
import {
  COLLECTIONS,
  getOnSaleProducts,
  getProductsByCollection,
  PRODUCTS,
} from '@/lib/data';

export default function HomePage() {
  const saleProducts = getOnSaleProducts();
  const featured = PRODUCTS.slice(0, 14);
  const fresh = PRODUCTS.slice(-12).reverse();

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

      <Reveal>
        <ProductMarquee
          products={saleProducts.length >= 6 ? saleProducts : featured}
          eyebrow="العروض"
          heading="الأكثر طلبًا اليوم"
          subheading="منتجات مختارة بعروض محدودة"
          speed="normal"
        />
      </Reveal>

      {COLLECTIONS.slice(0, 3).map((collection) => (
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

      {COLLECTIONS.slice(3).map((collection) => (
        <Reveal key={collection.handle}>
          <CollectionRow
            collection={collection}
            products={getProductsByCollection(collection.handle)}
          />
        </Reveal>
      ))}
    </>
  );
}
