import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PRODUCTS, SITE, getProductByHandle, getRelatedProducts } from '@/lib/data';
import { getProductMeta } from '@/lib/productMeta';
import { formatPrice } from '@/lib/utils';
import ProductDetail from './ProductDetail';

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ handle: p.handle }));
}

export function generateMetadata({ params }: { params: { handle: string } }): Metadata {
  const product = getProductByHandle(params.handle);
  if (!product) return { title: 'منتج غير موجود' };
  const desc = `${product.title} من ${product.brand} بسعر ${formatPrice(
    product.price,
  )}. اطلب الآن من ${SITE.nameAr}.`;
  return {
    title: `${product.title} | ${SITE.nameAr}`,
    description: desc,
    openGraph: {
      title: product.title,
      description: desc,
      images: [{ url: product.image, alt: product.title }],
      type: 'website',
    },
  };
}

export default function ProductPage({ params }: { params: { handle: string } }) {
  const product = getProductByHandle(params.handle);
  if (!product) notFound();
  const related = getRelatedProducts(product, 5);
  const meta = getProductMeta(product.handle);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.title,
    image: [product.image],
    brand: { '@type': 'Brand', name: product.brand },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: meta.rating,
      reviewCount: meta.reviews,
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'EGP',
      price: product.price,
      availability: 'https://schema.org/InStock',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProductDetail product={product} related={related} />
    </>
  );
}
