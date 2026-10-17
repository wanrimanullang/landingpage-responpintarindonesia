'use client';

import React from 'react';
import { BoltIcon, ChatBubbleLeftRightIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import { useChatbotDemoModal } from '../context/chatbot-demo-context';
import MoatPanel from './showcase/MoatPanel';
import SignalBadge from './showcase/SignalBadge';
import ScrollReveal from './showcase/ScrollReveal';

export function HeroSection() {
  const { openModal } = useChatbotDemoModal();

  return (
    <section className="pt-36 sm:pt-44 pb-24 sm:pb-32 px-6 lg:px-16 relative overflow-hidden border-b border-[rgba(244,245,247,0.08)]">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Column: Heading, Subtitle, Button Trio (like Jamie McKaye) */}
          <div className="space-y-8">
            {/* Top Category Label */}
            <ScrollReveal>
              <div className="flex flex-wrap items-center gap-3">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#8A9099]">
                  Respon Pintar / Platform Omnichannel
                </p>
                <SignalBadge label="LIVE SYNC" variant="positive" />
              </div>
            </ScrollReveal>

            {/* Headline */}
            <ScrollReveal delay={80}>
              <h1 className="text-display font-bold tracking-tight text-[#E9EBEF]">
                Satu Inbox.{' '}
                <span className="chrome-text block">Semua Percakapan.</span>
              </h1>
            </ScrollReveal>

            {/* Subheadline */}
            <ScrollReveal delay={160}>
              <p className="text-base sm:text-[17px] text-[#AEB4BD] font-normal leading-relaxed max-w-xl">
                Kelola pesan WhatsApp Business, Instagram DM, Telegram, dan Live Chat dalam
                satu sistem terpusat. Respon pelanggan lebih cepat, delegasi tim CS otomatis,
                dan tingkatkan konversi penjualan bisnis Anda.
              </p>
            </ScrollReveal>

            {/* Action Buttons Trio — exactly matching the reference style */}
            <ScrollReveal delay={240}>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                {/* Button 1: Solid White Button */}
                <a
                  href="https://crm.responpintar.com/auth/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#E9EBEF] text-[#0B0C0E] px-7 py-3.5 text-xs font-mono uppercase tracking-[0.1em] font-medium border border-white hover:bg-white transition-all shadow-[0_0_15px_rgba(255,255,255,0.2)] no-underline"
                >
                  Mulai Sekarang
                </a>

                {/* Button 2: Dark Transparent with Outline */}
                <button
                  onClick={openModal}
                  className="bg-transparent text-[#E9EBEF] px-7 py-3.5 text-xs font-mono uppercase tracking-[0.1em] font-medium border border-[rgba(244,245,247,0.2)] hover:border-[rgba(244,245,247,0.45)] hover:bg-white/[0.04] transition-all cursor-pointer"
                >
                  Coba Demo
                </button>

                {/* Button 3: Underlined plain link */}
                <a
                  href="#features"
                  className="text-[#AEB4BD] hover:text-[#E9EBEF] underline underline-offset-4 text-xs font-mono uppercase tracking-[0.1em] font-medium transition-colors ml-1"
                >
                  Pelajari fitur
                </a>
              </div>
            </ScrollReveal>

            {/* Stats Telemetry Readout */}
            <ScrollReveal delay={320}>
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-[rgba(244,245,247,0.08)] max-w-lg">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#636B76] mb-1">
                    CHANNELS SYNCED
                  </p>
                  <p className="text-2xl sm:text-3xl font-mono font-bold text-[#E9EBEF]">
                    100%
                  </p>
                  <p className="text-[11px] text-[#AEB4BD] mt-0.5">real-time webhook</p>
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#636B76] mb-1">
                    AVG FIRST REPLY
                  </p>
                  <p className="text-2xl sm:text-3xl font-mono font-bold text-[#8FE3B0]">
                    &lt; 45s
                  </p>
                  <p className="text-[11px] text-[#AEB4BD] mt-0.5">multi-agent speed</p>
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#636B76] mb-1">
                    SYSTEM UPTIME
                  </p>
                  <p className="text-2xl sm:text-3xl font-mono font-bold text-[#E9EBEF]">
                    99.98%
                  </p>
                  <p className="text-[11px] text-[#AEB4BD] mt-0.5">SLA production</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Omnichannel Live Simulation Mockup in MoatPanel */}
          <div>
            <ScrollReveal delay={120}>
              <MoatPanel className="p-7 sm:p-8 shadow-2xl border border-[rgba(244,245,247,0.1)]">
                {/* Header Mockup */}
                <div className="flex items-center justify-between pb-5 border-b border-[rgba(244,245,247,0.08)]">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded border border-[rgba(244,245,247,0.14)] bg-[#1a1c1f] flex items-center justify-center text-[#8FE3B0]">
                      <ChatBubbleLeftRightIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#E9EBEF]">Respon Pintar Omnichannel Desk</p>
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#8FE3B0] animate-pulse" />
                        <p className="font-mono text-[10px] text-[#8FE3B0] uppercase tracking-wider">
                          4 Channels Active · WhatsApp / IG / TG / Web
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 font-mono text-[10px] text-[#8A9099] border border-[rgba(244,245,247,0.1)] px-2 py-0.5 bg-[#0B0C0E]">
                    <span>MULTI-AGENT</span>
                  </div>
                </div>

                {/* Omnichannel Channel Selector Pills */}
                <div className="flex items-center gap-2 pt-4 pb-2 border-b border-[rgba(244,245,247,0.06)] font-mono text-[10px]">
                  <span className="px-2.5 py-1 bg-[#8FE3B0]/15 text-[#8FE3B0] border border-[#8FE3B0]/30 font-semibold">
                    WhatsApp (+62 821-xxxx)
                  </span>
                  <span className="px-2.5 py-1 text-[#636B76] border border-transparent">
                    Instagram Direct
                  </span>
                  <span className="px-2.5 py-1 text-[#636B76] border border-transparent">
                    Telegram
                  </span>
                  <span className="px-2.5 py-1 text-[#636B76] border border-transparent">
                    Live Chat
                  </span>
                </div>

                {/* Chat Messages Simulation */}
                <div className="py-6 space-y-4 font-mono text-xs">
                  {/* Incoming Customer Message */}
                  <div className="flex justify-start">
                    <div className="border border-[rgba(244,245,247,0.12)] bg-[#1a1c1f] text-[#E9EBEF] px-4 py-3 max-w-[85%] space-y-1">
                      <div className="flex items-center justify-between text-[10px] text-[#636B76]">
                        <span>Customer (Budi Santoso)</span>
                        <span>14:02 WIB</span>
                      </div>
                      <p className="text-[12px] leading-relaxed font-sans text-[#AEB4BD]">
                        Halo kak, mau tanya nomor resi untuk pesanan #RP-9921 kemarin sudah dikirimkan belum ya?
                      </p>
                    </div>
                  </div>

                  {/* Agent Response */}
                  <div className="flex justify-end">
                    <div className="border border-[#8FE3B0]/30 bg-[#0B0C0E] px-4 py-3 text-[#E9EBEF] max-w-[88%] space-y-2">
                      <div className="flex items-center justify-between text-[10px] text-[#8FE3B0] border-b border-[rgba(244,245,247,0.06)] pb-1.5">
                        <span className="flex items-center gap-1">
                          <CheckCircleIcon className="w-3.5 h-3.5 text-[#8FE3B0]" />
                          <span>Agent Sarah (CS Tim 1)</span>
                        </span>
                        <span>14:02 WIB</span>
                      </div>
                      <p className="text-[12px] text-[#E9EBEF] leading-relaxed font-sans">
                        Halo Pak Budi! Pesanan #RP-9921 sudah dikirim via J&amp;T dengan nomor resi <strong className="text-[#8FE3B0]">JT881928301</strong>. Paket dalam perjalanan dan estimasi tiba esok siang ya.
                      </p>
                      <div className="flex gap-2 pt-1 font-mono">
                        <span className="text-[9px] uppercase px-1.5 py-0.5 border border-[#8FE3B0]/30 text-[#8FE3B0] bg-[#8FE3B0]/5">
                          Auto-Track J&amp;T
                        </span>
                        <span className="text-[9px] uppercase px-1.5 py-0.5 border border-[rgba(244,245,247,0.1)] text-[#8A9099]">
                          CRM Sync OK
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Diagnostic / Queue status */}
                  <div className="flex items-center justify-between pt-2 text-[#636B76] text-[10px]">
                    <div className="flex items-center gap-1.5">
                      <span className="terminal-caret" aria-hidden="true" />
                      <span>Delegasi otomatis: Sesuai giliran agen aktif</span>
                    </div>
                    <span className="text-[#8FE3B0]">Respon: 24 detik</span>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="pt-4 border-t border-[rgba(244,245,247,0.08)] flex items-center justify-between text-[10px] font-mono text-[#636B76]">
                  <span>OMNICHANNEL DESK</span>
                  <span className="text-[#8A9099]">SINGLE INBOX · ZERO CHAT LOSS</span>
                </div>
              </MoatPanel>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
