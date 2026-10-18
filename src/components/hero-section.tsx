'use client';

import React from 'react';
import { useChatbotDemoModal } from '../context/chatbot-demo-context';
import SignalBadge from './showcase/SignalBadge';
import ScrollReveal from './showcase/ScrollReveal';
import { OmnichannelCard3D } from './hero/OmnichannelCard3D';

export function HeroSection() {
  const { openModal } = useChatbotDemoModal();

  return (
    <section className="landing-hero">
      <div className="landing-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading, Subtitle, Button Trio */}
          <div>
            {/* Top Category Label */}
            <ScrollReveal>
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <p className="font-mono text-xs uppercase tracking-[0.14em] text-[#8A9099]">
                  Respon Pintar / Platform Omnichannel
                </p>
                <SignalBadge label="LIVE SYNC" variant="positive" />
              </div>
            </ScrollReveal>

            {/* Headline */}
            <ScrollReveal delay={80}>
              <h1 className="text-display font-bold tracking-tight text-[#E9EBEF] mb-4">
                Satu Inbox.{' '}
                <span className="chrome-text block">Semua Percakapan.</span>
              </h1>
            </ScrollReveal>

            {/* Subheadline */}
            <ScrollReveal delay={160}>
              <p className="text-base sm:text-lg text-[#AEB4BD] font-normal leading-relaxed max-w-xl mb-8">
                Kelola pesan WhatsApp Business, Instagram DM, Telegram, dan Live Chat dalam
                satu sistem terpusat. Respon pelanggan lebih cepat, delegasi tim CS otomatis,
                dan tingkatkan konversi penjualan bisnis Anda.
              </p>
            </ScrollReveal>

            {/* Action Buttons Trio — exactly matching the token specification */}
            <ScrollReveal delay={240}>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                {/* Button 1: Primary (terang + teks gelap) */}
                <a
                  href="https://crm.responpintar.com/auth/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="landing-btn-primary"
                >
                  Mulai Sekarang
                </a>

                {/* Button 2: Secondary (transparan + border) */}
                <button
                  onClick={openModal}
                  className="landing-btn-secondary"
                >
                  Coba Demo
                </button>

                {/* Button 3: Tertiary (teks dengan underline) */}
                <a
                  href="#features"
                  className="landing-btn-tertiary"
                >
                  Pelajari fitur
                </a>
              </div>
            </ScrollReveal>

            {/* Stats Telemetry Readout (e: gap 32px, angka besar, label kecil mt-4px) */}
            <ScrollReveal delay={320}>
              <div className="landing-stats-grid mt-8">
                <div>
                  <div className="landing-stat-value">100%</div>
                  <div className="landing-stat-label">Channels Synced</div>
                  <div className="landing-stat-sub">real-time webhook</div>
                </div>
                <div>
                  <div className="landing-stat-value !text-[#8FE3B0]">&lt; 45s</div>
                  <div className="landing-stat-label">Avg First Reply</div>
                  <div className="landing-stat-sub">multi-agent speed</div>
                </div>
                <div>
                  <div className="landing-stat-value">99.98%</div>
                  <div className="landing-stat-label">System Uptime</div>
                  <div className="landing-stat-sub">SLA production</div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Omnichannel Live Simulation Mockup (Card Token c with 3D Tilt) */}
          <div className="w-full">
            <ScrollReveal delay={120}>
              <OmnichannelCard3D />
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
