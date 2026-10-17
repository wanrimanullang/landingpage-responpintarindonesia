import React from 'react';

export type BadgeVariant = 'positive' | 'neutral' | 'pending';

const STYLES: Record<BadgeVariant, { border: string; color: string; glow: string }> = {
  positive: {
    border: 'rgba(143,227,176,0.4)',
    color: '#8FE3B0',
    glow: '0 0 6px rgba(143,227,176,0.8)',
  },
  neutral: {
    border: 'rgba(244,245,247,0.2)',
    color: '#AEB4BD',
    glow: '',
  },
  pending: {
    border: 'rgba(255,200,100,0.4)',
    color: '#FFC864',
    glow: '0 0 6px rgba(255,200,100,0.6)',
  },
};

export default function SignalBadge({
  label,
  variant = 'positive',
  className = '',
}: {
  label: string;
  variant?: BadgeVariant;
  className?: string;
}) {
  const s = STYLES[variant] || STYLES.positive;
  const hasDisplay = className.includes('hidden') || className.includes('flex') || className.includes('inline') || className.includes('block');
  const baseDisplay = hasDisplay ? '' : 'inline-flex';

  return (
    <span
      className={`${baseDisplay} items-center gap-2 whitespace-nowrap border px-[10px] py-[4px] rounded-[6px] font-mono text-[12px] uppercase tracking-[0.08em] leading-tight select-none ${className}`}
      style={{ borderColor: s.border, color: s.color }}
    >
      <span
        aria-hidden="true"
        className="h-[5px] w-[5px] rounded-full shrink-0"
        style={{
          backgroundColor: s.color,
          boxShadow: s.glow || undefined,
        }}
      />
      {label}
    </span>
  );
}
