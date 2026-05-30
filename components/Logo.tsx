type Props = {
  className?: string;
  withWordmark?: boolean;
  variant?: 'horizontal' | 'icon';
};

export default function Logo({
  className = '',
  withWordmark = true,
  variant = 'horizontal',
}: Props) {
  if (variant === 'icon') {
    return <LogoMark className={className} />;
  }

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <LogoMark className="h-9 w-9 sm:h-10 sm:w-10" />
      {withWordmark && (
        <div className="leading-tight">
          <div className="font-display text-base font-extrabold tracking-tight text-ink sm:text-lg">
            صيدلية <span className="text-brand">ديمو</span>
          </div>
          <div className="text-[10px] font-medium uppercase tracking-[0.15em] text-ink-mute">
            Demo Pharmacy
          </div>
        </div>
      )}
    </div>
  );
}

function LogoMark({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      role="img"
      aria-label="Demo Pharmacy logo"
    >
      <defs>
        <linearGradient id="logo-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#22C55E" />
          <stop offset="100%" stopColor="#15803D" />
        </linearGradient>
        <linearGradient id="logo-grad-2" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0EA5E9" />
          <stop offset="100%" stopColor="#0369A1" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="44" height="44" rx="12" fill="url(#logo-grad)" />
      <rect
        x="2"
        y="2"
        width="44"
        height="44"
        rx="12"
        fill="url(#logo-grad-2)"
        opacity="0.15"
      />
      {/* Medical cross / plus */}
      <rect x="20" y="11" width="8" height="26" rx="2.5" fill="white" />
      <rect x="11" y="20" width="26" height="8" rx="2.5" fill="white" />
      {/* Small accent dot */}
      <circle cx="36" cy="12" r="3" fill="#0EA5E9" />
    </svg>
  );
}
