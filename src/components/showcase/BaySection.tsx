import React, { ReactNode } from 'react';
import BayNumeral from './BayNumeral';
import ScrollReveal from './ScrollReveal';
import MoatPanel from './MoatPanel';

export interface BaySectionProps {
  number: string;
  numberPosition: 'right' | 'left';
  label: string;
  heading: ReactNode;
  description: string;
  meta: string;
  ctaLabel: string;
  ctaHref: string;
  widget: ReactNode;
  reversed?: boolean;
}

export default function BaySection({
  number,
  numberPosition,
  label,
  heading,
  description,
  meta,
  ctaLabel,
  ctaHref,
  widget,
  reversed = false,
}: BaySectionProps) {
  return (
    <section
      className="relative flex min-h-[85vh] flex-col justify-center overflow-hidden border-b py-20 md:py-28"
      style={{ borderColor: 'rgba(244, 245, 247, 0.08)' }}
    >
      <BayNumeral number={number} position={numberPosition} />

      <div
        className={`relative z-10 mx-auto w-full max-w-[1400px] px-6 md:px-12 grid items-center gap-x-16 gap-y-12 lg:grid-cols-2 ${
          reversed ? 'lg:[direction:rtl]' : ''
        }`}
      >
        {/* Text column */}
        <div className="[direction:ltr]">
          <ScrollReveal>
            <p className="label-mono mb-6" style={{ color: '#AEB4BD' }}>
              {label}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={80}>
            <h2
              className="font-semibold leading-[1.05] tracking-[-0.025em]"
              style={{
                fontSize: 'clamp(2.1rem, 1.5rem + 2.4vw, 3.6rem)',
                color: '#E9EBEF',
              }}
            >
              {heading}
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={160}>
            <p
              className="mt-6 max-w-[52ch] text-[16.5px] leading-relaxed font-normal"
              style={{ color: '#AEB4BD' }}
            >
              {description}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={240}>
            <p
              className="mt-7 max-w-[58ch] font-mono text-[11px] uppercase leading-relaxed tracking-[0.14em]"
              style={{ color: '#636B76' }}
            >
              {meta}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={320}>
            <a
              href={ctaHref}
              className="mt-9 inline-flex items-center gap-2 border px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.1em] no-underline transition-all duration-200"
              style={{
                borderColor: '#8A9099',
                color: '#E9EBEF',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#C8CDD5';
                e.currentTarget.style.background = 'rgba(233, 235, 239, 0.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#8A9099';
                e.currentTarget.style.background = 'transparent';
              }}
            >
              <span>{ctaLabel}</span>
              <span className="text-[#8FE3B0]">→</span>
            </a>
          </ScrollReveal>
        </div>

        {/* Widget column */}
        <ScrollReveal delay={200} className="[direction:ltr]">
          <MoatPanel className="p-2 sm:p-3 shadow-2xl">
            {widget}
          </MoatPanel>
        </ScrollReveal>
      </div>
    </section>
  );
}
