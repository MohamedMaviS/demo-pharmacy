import {
  Baby,
  Droplets,
  Flame,
  Flower2,
  Heart,
  LayoutGrid,
  Palette,
  Pill,
  Scissors,
  Sparkles,
  SprayCan,
  Stethoscope,
  Store,
  Sun,
  Syringe,
  Tag,
  User,
  type LucideIcon,
} from 'lucide-react';

/**
 * Map a collection handle (or a special pseudo-collection like "sale" / "under-100")
 * to a clean lucide-react icon. No emojis.
 */
export const CATEGORY_ICONS: Record<string, LucideIcon> = {
  all: Store,
  'skin-care': Sparkles,
  moisturizers: Droplets,
  'sun-care': Sun,
  'hair-care': Scissors,
  makeup: Palette,
  vitamins: Pill,
  'personal-care': SprayCan,
  'men-care': User,
  'body-perfumes': Flower2,
  'baby-milk-food': Baby,
  'mom-baby': Heart,
  'medical-devices': Stethoscope,
  medicines: Syringe,
  sale: Flame,
  'under-100': Tag,
};

export function getCategoryIcon(handle: string): LucideIcon {
  return CATEGORY_ICONS[handle] ?? LayoutGrid;
}

type Props = {
  handle: string;
  size?: number;
  className?: string;
  strokeWidth?: number;
};

/**
 * Render a clean lucide icon for a given collection handle.
 */
export function CategoryIcon({ handle, size = 22, className = '', strokeWidth = 1.8 }: Props) {
  const Icon = getCategoryIcon(handle);
  return <Icon size={size} className={className} strokeWidth={strokeWidth} aria-hidden="true" />;
}
