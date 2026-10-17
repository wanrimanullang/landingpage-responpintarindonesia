'use client';

import React from 'react';
import { ChatBubbleLeftRightIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import { useChatbotDemoModal } from '../context/chatbot-demo-context';
import SignalBadge from './showcase/SignalBadge';
import ScrollReveal from './showcase/ScrollReveal';

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

          {/* Right Column: Omnichannel Live Simulation Mockup (Card Token c) */}
          <div>
            <ScrollReveal delay={120}>
              <div className="landing-card shadow-2xl">
                {/* Header kartu dipisah garis tipis (border-bottom) dengan padding-bottom 16px */}
                <div className="landing-card-header">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-[6px] border border-[rgba(255,255,255,0.12)] bg-[#1a1c1f] flex items-center justify-center text-[#8FE3B0]">
                      <ChatBubbleLeftRightIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#E9EBEF]">Respon Pintar Omnichannel Desk</p>
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#8FE3B0] animate-pulse" />
                        <p className="font-mono text-xs text-[#8FE3B0] uppercase tracking-wider">
                          4 Channels Active · WhatsApp / IG / TG / Web
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="landing-badge">
                    <span>MULTI-AGENT</span>
                  </div>
                </div>

                {/* Omnichannel Channel Selector Pills (Row gap 16px) */}
                <div className="flex flex-wrap items-center gap-2 pb-2 border-b border-[rgba(255,255,255,0.08)] font-mono text-xs">
                  <span className="px-2.5 py-1 bg-[#8FE3B0]/15 text-[#8FE3B0] border border-[#8FE3B0]/30 rounded-[6px] font-semibold">
                    WhatsApp (+62 821-xxxx)
                  </span>
                  <span className="px-2.5 py-1 text-[#636B76] border border-transparent rounded-[6px]">
                    Instagram Direct
                  </span>
                  <span className="px-2.5 py-1 text-[#636B76] border border-transparent rounded-[6px]">
                    Telegram
                  </span>
                  <span className="px-2.5 py-1 text-[#636B76] border border-transparent rounded-[6px]">
                    Live Chat
                  </span>
                </div>

                {/* Chat Messages Simulation */}
                <div className="space-y-4 font-mono text-xs">
                  {/* Incoming Customer Message */}
                  <div className="flex justify-start">
                    <div className="border border-[rgba(255,255,255,0.12)] bg-[#1a1c1f] text-[#E9EBEF] p-4 rounded-[8px] max-w-[85%] space-y-1">
                      <div className="flex items-center justify-between text-xs text-[#636B76] gap-4">
                        <span>Customer (Budi Santoso)</span>
                        <span>14:02 WIB</span>
                      </div>
                      <p className="text-xs leading-relaxed font-sans text-[#AEB4BD]">
                        Halo kak, mau tanya nomor resi untuk pesanan #RP-9921 kemarin sudah dikirimkan belum ya?
                      </p>
                    </div>
                  </div>

                  {/* Agent Response */}
                  <div className="flex justify-end">
                    <div className="border border-[#8FE3B0]/30 bg-[#0B0C0E] p-4 rounded-[8px] text-[#E9EBEF] max-w-[88%] space-y-2">
                      <div className="flex items-center justify-between text-xs text-[#8FE3B0] border-b border-[rgba(255,255,255,0.08)] pb-1.5 gap-4">
                        <span className="flex items-center gap-1">
                          <CheckCircleIcon className="w-3.5 h-3.5 text-[#8FE3B0]" />
                          <span>Agent Sarah (CS Tim 1)</span>
                        </span>
                        <span>14:02 WIB</span>
                      </div>
                      <p className="text-xs text-[#E9EBEF] leading-relaxed font-sans">
                        Halo Pak Budi! Pesanan #RP-9921 sudah dikirim via J&amp;T dengan nomor resi <strong className="text-[#8FE3B0]">JT881928301</strong>. Paket dalam perjalanan dan estimasi tiba esok siang ya.
                      </p>
                      <div className="flex gap-2 pt-1 font-mono">
                        <span className="text-[10px] uppercase px-2 py-0.5 border border-[#8FE3B0]/30 text-[#8FE3B0] bg-[#8FE3B0]/5 rounded-[4px]">
                          Auto-Track J&amp;T
                        </span>
                        <span className="text-[10px] uppercase px-2 py-0.5 border border-[rgba(255,255,255,0.12)] text-[#8A9099] rounded-[4px]">
                          CRM Sync OK
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Diagnostic / Queue status */}
                  <div className="flex items-center justify-between text-[#636B76] text-xs">
                    <div className="flex items-center gap-1.5">
                      <span className="terminal-caret" aria-hidden="true" />
                      <span>Delegasi otomatis: Sesuai giliran agen aktif</span>
                    </div>
                    <span className="text-[#8FE3B0] font-mono">Respon: 24 detik</span>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="pt-3 border-t border-[rgba(255,255,255,0.08)] flex items-center justify-between text-xs font-mono text-[#636B76]">
                  <span>OMNICHANNEL DESK</span>
                  <span className="text-[#8A9099]">SINGLE INBOX · ZERO CHAT LOSS</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
