type Props = {
  variant?: 'default' | 'soft' | 'hero';
  className?: string;
};

/**
 * Pure-CSS animated gradient mesh.
 * - No JS, no Framer Motion → zero runtime cost
 * - Animation defined in globals.css (.mesh-blob)
 * - Honors prefers-reduced-motion via the global rule in globals.css
 */
export default function BackgroundMesh({ variant = 'default', className = '' }: Props) {
  const colors =
    variant === 'hero'
      ? ['#22C55E', '#0EA5E9', '#15803D']
      : variant === 'soft'
        ? ['#86EFAC', '#BAE6FD', '#DCFCE7']
        : ['#22C55E', '#0EA5E9', '#A7F3D0'];

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <div
        className="mesh-blob absolute -right-1/4 -top-1/3 h-[60vh] w-[60vh] rounded-full opacity-30 blur-3xl"
        style={{ background: colors[0], animationDelay: '0s' }}
      />
      <div
        className="mesh-blob absolute -left-1/4 top-1/4 h-[55vh] w-[55vh] rounded-full opacity-25 blur-3xl"
        style={{ background: colors[1], animationDelay: '-7s' }}
      />
      <div
        className="mesh-blob absolute right-1/3 bottom-0 h-[45vh] w-[45vh] rounded-full opacity-20 blur-3xl"
        style={{ background: colors[2], animationDelay: '-14s' }}
      />
    </div>
  );
}
