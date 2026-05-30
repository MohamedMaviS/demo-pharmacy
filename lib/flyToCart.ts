/**
 * Lightweight "fly to cart" micro-interaction.
 * Clones the product image and animates it into the header cart icon using the
 * Web Animations API (no React re-renders). Respects reduced-motion.
 */

export function flyToCart(imgSrc: string, fromEl: HTMLElement | null) {
  if (typeof window === 'undefined' || !fromEl) return;

  const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  const target = document.getElementById('cart-fly-anchor');
  if (!target) return;

  // Always give the cart a little bump for feedback.
  if (!reduce) {
    target.animate(
      [{ transform: 'scale(1)' }, { transform: 'scale(1.25)' }, { transform: 'scale(1)' }],
      { duration: 360, easing: 'cubic-bezier(0.16, 1, 0.3, 1)' },
    );
  }
  if (reduce) return;

  const from = fromEl.getBoundingClientRect();
  const to = target.getBoundingClientRect();
  if (from.width === 0) return;

  const clone = document.createElement('img');
  clone.src = imgSrc;
  clone.setAttribute('aria-hidden', 'true');
  Object.assign(clone.style, {
    position: 'fixed',
    left: `${from.left}px`,
    top: `${from.top}px`,
    width: `${from.width}px`,
    height: `${from.height}px`,
    objectFit: 'contain',
    borderRadius: '14px',
    background: '#ffffff',
    padding: '6px',
    boxShadow: '0 12px 28px rgba(0,0,0,0.18)',
    zIndex: '90',
    pointerEvents: 'none',
  } as CSSStyleDeclaration);
  document.body.appendChild(clone);

  const dx = to.left + to.width / 2 - (from.left + from.width / 2);
  const dy = to.top + to.height / 2 - (from.top + from.height / 2);

  const anim = clone.animate(
    [
      { transform: 'translate(0px, 0px) scale(1)', opacity: 1 },
      {
        transform: `translate(${dx * 0.5}px, ${dy * 0.5 - 60}px) scale(0.6)`,
        opacity: 0.95,
        offset: 0.6,
      },
      { transform: `translate(${dx}px, ${dy}px) scale(0.12)`, opacity: 0.2 },
    ],
    { duration: 750, easing: 'cubic-bezier(0.16, 1, 0.3, 1)' },
  );
  anim.onfinish = () => clone.remove();
  anim.oncancel = () => clone.remove();
}
