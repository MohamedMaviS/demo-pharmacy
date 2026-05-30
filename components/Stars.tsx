import { Star } from 'lucide-react';

type Props = {
  rating: number;
  reviews?: number;
  size?: number;
  className?: string;
  showCount?: boolean;
};

export default function Stars({
  rating,
  reviews,
  size = 13,
  className = '',
  showCount = true,
}: Props) {
  const full = Math.floor(rating);
  const hasHalf = rating - full >= 0.5;

  return (
    <div className={`flex items-center gap-1 ${className}`} aria-label={`التقييم ${rating} من 5`}>
      <div className="flex items-center" aria-hidden="true">
        {Array.from({ length: 5 }).map((_, i) => {
          const filled = i < full;
          const half = i === full && hasHalf;
          return (
            <span key={i} className="relative inline-block" style={{ width: size, height: size }}>
              <Star
                size={size}
                className="absolute inset-0 text-amber-300"
                fill={filled ? '#fbbf24' : 'none'}
                stroke={filled ? '#fbbf24' : '#fcd34d'}
                strokeWidth={1.5}
              />
              {half && (
                <span
                  className="absolute inset-0 overflow-hidden"
                  style={{ width: size / 2 }}
                >
                  <Star size={size} fill="#fbbf24" stroke="#fbbf24" strokeWidth={1.5} />
                </span>
              )}
            </span>
          );
        })}
      </div>
      {showCount && (
        <span className="text-[11px] font-medium text-ink-mute">
          {rating.toFixed(1)}
          {reviews !== undefined && <span className="text-ink-mute/70"> ({reviews})</span>}
        </span>
      )}
    </div>
  );
}
