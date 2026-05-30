/**
 * Payment-method badges for the demo storefront.
 * Built with plain HTML + Tailwind (not SVG <text>) so they render reliably
 * across all browsers. Brand colours are approximations for demo purposes only.
 */

type Props = { className?: string };

function Badge({
  children,
  className = '',
  label,
}: {
  children: React.ReactNode;
  className?: string;
  label: string;
}) {
  return (
    <span
      role="img"
      aria-label={label}
      className={`inline-flex h-9 min-w-[58px] items-center justify-center gap-1 rounded-lg border border-gray-200 bg-white px-2.5 shadow-sm ${className}`}
    >
      {children}
    </span>
  );
}

export function VisaLogo({ className = '' }: Props) {
  return (
    <Badge label="VISA" className={className}>
      <span className="font-sans text-[15px] font-black italic tracking-tight text-[#1A1F71]">
        VISA
      </span>
    </Badge>
  );
}

export function MastercardLogo({ className = '' }: Props) {
  return (
    <Badge label="Mastercard" className={className}>
      <span className="relative inline-flex items-center">
        <span className="h-5 w-5 rounded-full bg-[#EB001B]" />
        <span className="-ml-2 h-5 w-5 rounded-full bg-[#F79E1B] mix-blend-multiply" />
      </span>
    </Badge>
  );
}

export function MeezaLogo({ className = '' }: Props) {
  return (
    <Badge label="Meeza" className={className}>
      <span
        className="bg-gradient-to-l from-[#E11D48] to-[#7C3AED] bg-clip-text text-[14px] font-extrabold lowercase text-transparent"
        style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
      >
        meeza
      </span>
    </Badge>
  );
}

export function FawryLogo({ className = '' }: Props) {
  return (
    <Badge label="Fawry" className={className}>
      <span className="text-[14px] font-black lowercase text-[#F58220]">fawry</span>
      <span className="h-1.5 w-1.5 rounded-full bg-[#003B71]" />
    </Badge>
  );
}

export function InstaPayLogo({ className = '' }: Props) {
  return (
    <Badge label="InstaPay" className={className}>
      <span className="text-[13px] font-extrabold text-[#7C3AED]">Insta</span>
      <span className="text-[13px] font-extrabold text-[#0E9488]">Pay</span>
    </Badge>
  );
}

export function VodafoneCashLogo({ className = '' }: Props) {
  return (
    <span
      role="img"
      aria-label="Vodafone Cash"
      className={`inline-flex h-9 items-center justify-center gap-1.5 rounded-lg bg-[#E60000] px-2.5 shadow-sm ${className}`}
    >
      <span className="grid h-4 w-4 place-items-center rounded-full bg-white">
        <span className="h-2 w-2 rounded-full border-2 border-[#E60000]" />
      </span>
      <span className="text-[11px] font-extrabold text-white">Cash</span>
    </span>
  );
}

export function CashOnDeliveryLogo({ className = '' }: Props) {
  return (
    <span
      role="img"
      aria-label="الدفع عند الاستلام"
      className={`inline-flex h-9 items-center justify-center gap-1.5 rounded-lg border border-brand-200 bg-brand-50 px-2.5 shadow-sm ${className}`}
    >
      <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true" fill="none">
        <rect x="2.5" y="6.5" width="19" height="11" rx="2" stroke="#15803D" strokeWidth="1.6" />
        <circle cx="12" cy="12" r="2.4" stroke="#15803D" strokeWidth="1.6" />
      </svg>
      <span className="text-[11px] font-bold text-brand-800">كاش عند الاستلام</span>
    </span>
  );
}

export function PaymentRow({ className = '' }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center gap-2 ${className}`}>
      <VisaLogo />
      <MastercardLogo />
      <MeezaLogo />
      <FawryLogo />
      <InstaPayLogo />
      <VodafoneCashLogo />
      <CashOnDeliveryLogo />
    </div>
  );
}
