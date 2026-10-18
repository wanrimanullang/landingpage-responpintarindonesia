'use client';

import React, { useEffect } from 'react';
import {
  TrophyIcon,
  EnvelopeIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  PhoneIcon,
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
    <section id="pricing" className="landing-section">
      <div className="landing-container">
        {/* Section Header */}
        <div className="landing-section-header">
          <ScrollReveal>
            <div className="landing-section-label">
              <span>03 · COMMERCIAL INDEX</span>
              <SignalBadge label="PAKET TRANSPARAN" variant="positive" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={80}>
            <h2 className="landing-section-title text-display font-bold tracking-tight text-[#E9EBEF]">
              Investasi Terbaik untuk{' '}
              <span className="chrome-text block">Efisiensi Tim CS.</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={160}>
            <p className="text-base sm:text-[17px] text-[#AEB4BD] font-normal leading-relaxed max-w-2xl">
              Pilih paket omnichannel yang sesuai dengan jumlah agen CS dan volume pesan bisnis Anda.
              Tanpa biaya tersembunyi, siap pakai dalam waktu singkat.
            </p>
          </ScrollReveal>
        </div>

        {/* Pricing Widget Container (embedded from API) */}
        <ScrollReveal delay={180}>
          <div className="w-full mb-16 overflow-x-auto">
            <div className="w-full text-[#E9EBEF]" data-wapi-snippet="36058ade7948a5937101b838" />
          </div>
        </ScrollReveal>

        {/* Custom Enterprise Quote Card in MoatPanel */}
        <div className="max-w-4xl mx-auto">
          <ScrollReveal delay={240}>
            <div className="landing-card p-6 sm:p-10">
              <div className="text-center max-w-2xl mx-auto flex flex-col gap-6">
                <div className="w-14 h-14 mx-auto rounded-[6px] border border-[#8FE3B0]/40 bg-[#8FE3B0]/10 flex items-center justify-center text-[#8FE3B0] shadow-[0_0_15px_rgba(143,227,176,0.2)]">
                  <TrophyIcon className="w-7 h-7" />
                </div>

                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#8FE3B0] mb-2">
                    KONSULTASI PAKET ENTERPRISE
                  </p>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#E9EBEF]">
                    Butuh Solusi Custom Multi-Nomor atau Dedicated Server?
                  </h3>
                </div>

                <p className="text-sm text-[#AEB4BD] leading-relaxed font-normal">
                  Setiap perusahaan memiliki alur kerja unik. Tim kami siap membantu mengatur integrasi
                  sistem omnichannel, verifikasi centang hijau WhatsApp, dan alur tiket sesuai SOP tim Anda.
                </p>

                {/* Contact Methods Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-left font-mono">
                  <div className="rounded-[6px] border border-[rgba(255,255,255,0.12)] bg-[#111214] p-4 text-center">
                    <EnvelopeIcon className="w-5 h-5 text-[#8FE3B0] mx-auto mb-2" />
                    <p className="text-[10px] text-[#636B76] uppercase tracking-wider mb-1">Email</p>
                    <p className="text-xs text-[#E9EBEF] truncate">support@responpintar.com</p>
                  </div>

                  <div className="rounded-[6px] border border-[rgba(255,255,255,0.12)] bg-[#111214] p-4 text-center">
                    <PhoneIcon className="w-5 h-5 text-[#8FE3B0] mx-auto mb-2" />
                    <p className="text-[10px] text-[#636B76] uppercase tracking-wider mb-1">Telepon</p>
                    <p className="text-xs text-[#E9EBEF]">+62 821-8988-5080</p>
                  </div>

                  <div className="rounded-[6px] border border-[rgba(255,255,255,0.12)] bg-[#111214] p-4 text-center">
                    <ChatBubbleOvalLeftEllipsisIcon className="w-5 h-5 text-[#8FE3B0] mx-auto mb-2" />
                    <p className="text-[10px] text-[#636B76] uppercase tracking-wider mb-1">WhatsApp</p>
                    <p className="text-xs text-[#8FE3B0]">+62 821-8988-5080</p>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-2 flex flex-wrap justify-center gap-4">
                  <a
                    href="https://wa.me/6282189885080?text=Halo%20ResponPintar,%20saya%20ingin%20konsultasi%20paket%20omnichannel."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="landing-btn-primary"
                  >
                    Hubungi Tim Sales →
                  </a>
                </div>

                <div className="pt-4 border-t border-[rgba(255,255,255,0.12)] text-[11px] font-mono text-[#636B76]">
                  <p>
                    💡 <strong className="text-[#AEB4BD]">14 Hari Free Trial:</strong> Coba fitur omnichannel tanpa resiko kartu kredit.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
