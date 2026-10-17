'use client';

import React, { useEffect } from 'react';
import {
  TrophyIcon,
  EnvelopeIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  PhoneIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';
import MoatPanel from './showcase/MoatPanel';
import ScrollReveal from './showcase/ScrollReveal';
import SignalBadge from './showcase/SignalBadge';

export function PricingSection() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://api.responpintar.com/api/plan-snippets/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="pricing" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-12 border-b border-[rgba(244,245,247,0.08)] relative">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <ScrollReveal>
            <div className="flex items-center gap-3">
              <p className="label-mono text-[#8FE3B0]">
                04 · COMMERCIAL INDEX
              </p>
              <SignalBadge label="TRANSPARENT TIERS" variant="positive" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={80}>
            <h2 className="text-display font-bold tracking-tight text-[#E9EBEF]">
              Engineered for{' '}
              <span className="chrome-text block">Your Scale.</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={160}>
            <p className="text-base sm:text-lg text-[#AEB4BD] font-normal leading-relaxed max-w-2xl">
              Pilih paket yang sesuai dengan volume percakapan bisnis Anda. Mulai dari free tier
              hingga enterprise SLA dengan dedicated cluster dan kustomisasi API tanpa batas.
            </p>
          </ScrollReveal>
        </div>

        {/* Pricing Widget Container (embedded from API) */}
        <ScrollReveal delay={180}>
          <div className="w-full mb-16">
            <div className="w-full text-[#E9EBEF]" data-wapi-snippet="36058ade7948a5937101b838" />
          </div>
        </ScrollReveal>

        {/* Custom Enterprise Quote Card in MoatPanel */}
        <div className="max-w-4xl mx-auto">
          <ScrollReveal delay={240}>
            <MoatPanel className="p-8 sm:p-14 border border-[rgba(244,245,247,0.12)]">
              <div className="text-center max-w-2xl mx-auto space-y-6">
                <div className="w-14 h-14 mx-auto rounded border border-[#8FE3B0]/40 bg-[#8FE3B0]/10 flex items-center justify-center text-[#8FE3B0] shadow-[0_0_15px_rgba(143,227,176,0.2)]">
                  <TrophyIcon className="w-7 h-7" />
                </div>

                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#8FE3B0] mb-2">
                    BESPOKE ENTERPRISE ARCHITECTURE
                  </p>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#E9EBEF]">
                    Butuh Solusi Kustom atau Dedicated VPC?
                  </h3>
                </div>

                <p className="text-sm text-[#AEB4BD] leading-relaxed font-normal">
                  Setiap enterprise memiliki kebutuhan integrasi database internal, kepatuhan audit data,
                  dan SLA khusus. Tim lead engineer kami siap membantu merancang arsitektur terbaik.
                </p>

                {/* Contact Methods Cards */}
                <div className="grid sm:grid-cols-3 gap-4 pt-4 text-left font-mono">
                  <div className="border border-[rgba(244,245,247,0.08)] bg-[#111214] p-4 text-center">
                    <EnvelopeIcon className="w-5 h-5 text-[#8FE3B0] mx-auto mb-2" />
                    <p className="text-[10px] text-[#636B76] uppercase tracking-wider mb-1">Email</p>
                    <p className="text-xs text-[#E9EBEF] truncate">support@responpintar.com</p>
                  </div>

                  <div className="border border-[rgba(244,245,247,0.08)] bg-[#111214] p-4 text-center">
                    <PhoneIcon className="w-5 h-5 text-[#8FE3B0] mx-auto mb-2" />
                    <p className="text-[10px] text-[#636B76] uppercase tracking-wider mb-1">Phone</p>
                    <p className="text-xs text-[#E9EBEF]">+62 821-8988-5080</p>
                  </div>

                  <div className="border border-[rgba(244,245,247,0.08)] bg-[#111214] p-4 text-center">
                    <ChatBubbleOvalLeftEllipsisIcon className="w-5 h-5 text-[#8FE3B0] mx-auto mb-2" />
                    <p className="text-[10px] text-[#636B76] uppercase tracking-wider mb-1">WhatsApp</p>
                    <p className="text-xs text-[#8FE3B0]">+62 821-8988-5080</p>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-4 flex flex-wrap justify-center gap-4 text-xs font-mono">
                  <a
                    href="https://wa.me/6282189885080?text=Halo%20ResponPintar,%20saya%20ingin%20konsultasi%20paket%20enterprise."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-[#8FE3B0] bg-[#8FE3B0] text-black font-semibold px-8 py-3.5 uppercase tracking-wider hover:bg-[#8FE3B0]/90 transition-all shadow-[0_0_15px_rgba(143,227,176,0.3)]"
                  >
                    Hubungi Tim Sales Enterprise →
                  </a>
                </div>

                <div className="pt-4 border-t border-[rgba(244,245,247,0.06)] text-[11px] font-mono text-[#636B76]">
                  <p>
                    💡 <strong className="text-[#AEB4BD]">14-Day Free Evaluation:</strong> Tanpa komitmen kartu kredit — uji coba langsung di stack Anda.
                  </p>
                </div>
              </div>
            </MoatPanel>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
