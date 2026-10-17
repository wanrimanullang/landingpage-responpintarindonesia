'use client';

import React from 'react';
import { ArrowRightIcon, BoltIcon, SparklesIcon } from '@heroicons/react/24/outline';
import { useChatbotDemoModal } from '../context/chatbot-demo-context';
import MoatPanel from './showcase/MoatPanel';
import SignalBadge from './showcase/SignalBadge';
import ScrollReveal from './showcase/ScrollReveal';

export function HeroSection() {
  const { openModal } = useChatbotDemoModal();

  return (
    <section className="pt-32 sm:pt-40 pb-20 px-4 sm:px-6 lg:px-12 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <div className="space-y-8">
            {/* Top Category Badge */}
            <ScrollReveal>
              <div className="flex flex-wrap items-center gap-3">
                <SignalBadge label="ORCHESTRATION ENGINE v2.4" variant="positive" />
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#8A9099] border border-[rgba(244,245,247,0.1)] px-2.5 py-1 bg-white/[0.02]">
                  P95 &lt; 380MS LATENCY
                </span>
              </div>
            </ScrollReveal>

            {/* Headline */}
            <ScrollReveal delay={80}>
              <h1 className="text-display font-bold tracking-tight text-[#E9EBEF]">
                Boost Customer Response with{' '}
                <span className="chrome-text block">AI Technology.</span>
              </h1>
            </ScrollReveal>

            {/* Subheadline */}
            <ScrollReveal delay={160}>
              <p className="text-base sm:text-lg text-[#AEB4BD] font-normal leading-relaxed max-w-2xl">
                Otomasi respon pelanggan, tingkatkan kepuasan CSAT hingga 4.9/5.0, dan hemat 70%
                biaya operasional dengan platform chatbot AI cerdas berbasis WhatsApp Cloud API
                dan hybrid retrieval bebas halusinasi.
              </p>
            </ScrollReveal>

            {/* CTA Buttons */}
            <ScrollReveal delay={240}>
              <div className="flex flex-wrap gap-4 text-xs font-mono">
                <a
                  href="https://crm.responpintar.com/auth/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-[#8FE3B0] bg-[#8FE3B0] text-black font-semibold px-6 py-3.5 uppercase tracking-wider hover:bg-[#8FE3B0]/90 transition-all shadow-[0_0_15px_rgba(143,227,176,0.25)]"
                >
                  <span>Mulai Gratis</span>
                  <ArrowRightIcon className="w-4 h-4" />
                </a>

                <button
                  onClick={openModal}
                  className="inline-flex items-center gap-2 border border-[#8A9099] px-6 py-3.5 text-[#E9EBEF] uppercase tracking-wider hover:border-[#C8CDD5] hover:bg-white/[0.05] transition-all cursor-pointer"
                >
                  <SparklesIcon className="w-4 h-4 text-[#8FE3B0]" />
                  <span>Coba Live Demo Konsol</span>
                </button>
              </div>
            </ScrollReveal>

            {/* Stats Telemetry Readout */}
            <ScrollReveal delay={320}>
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[rgba(244,245,247,0.08)] max-w-xl">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#636B76] mb-1">
                    ACTIVE SESSIONS
                  </p>
                  <p className="text-2xl sm:text-3xl font-mono font-bold text-[#E9EBEF]">
                    10K+
                  </p>
                  <p className="text-[11px] text-[#AEB4BD] mt-0.5">daily traffic</p>
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#636B76] mb-1">
                    CSAT BENCHMARK
                  </p>
                  <p className="text-2xl sm:text-3xl font-mono font-bold text-[#8FE3B0]">
                    98.4%
                  </p>
                  <p className="text-[11px] text-[#AEB4BD] mt-0.5">user satisfaction</p>
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#636B76] mb-1">
                    AVAILABILITY
                  </p>
                  <p className="text-2xl sm:text-3xl font-mono font-bold text-[#E9EBEF]">
                    24/7
                  </p>
                  <p className="text-[11px] text-[#AEB4BD] mt-0.5">zero downtime</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Mockup wrapped in MoatPanel */}
          <div>
            <ScrollReveal delay={120}>
              <MoatPanel className="p-6 sm:p-7 shadow-2xl">
                {/* Header Mockup */}
                <div className="flex items-center justify-between pb-4 border-b border-[rgba(244,245,247,0.08)]">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded border border-[rgba(244,245,247,0.12)] bg-[#1a1c1f] flex items-center justify-center text-[#8FE3B0]">
                      <BoltIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#E9EBEF]">Respon Pintar Engine</p>
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#8FE3B0] animate-pulse" />
                        <p className="font-mono text-[10px] text-[#8FE3B0] uppercase tracking-wider">
                          Autonomous Agent
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 font-mono text-[10px] text-[#636B76] border border-[rgba(244,245,247,0.08)] px-2 py-0.5 bg-[#0B0C0E]">
                    <span>SLA 99.98%</span>
                  </div>
                </div>

                {/* Chat Messages Simulation */}
                <div className="py-6 space-y-4 font-mono text-xs">
                  {/* User Message */}
                  <div className="flex justify-end">
                    <div className="border border-[rgba(244,245,247,0.12)] bg-[#1a1c1f] text-[#E9EBEF] px-4 py-2.5 max-w-[85%]">
                      <p className="text-[12px] leading-relaxed">
                        Halo, apakah stok iPhone 15 Pro Max 256GB warna Natural Titanium masih ada di cabang Jakarta?
                      </p>
                    </div>
                  </div>

                  {/* AI Response */}
                  <div className="flex items-start gap-2.5">
                    <div className="w-6 h-6 rounded border border-[#8FE3B0]/30 bg-[#8FE3B0]/10 flex items-center justify-center text-[#8FE3B0] shrink-0 mt-0.5">
                      <BoltIcon className="w-3.5 h-3.5" />
                    </div>
                    <div className="border border-[#8FE3B0]/25 bg-[#0B0C0E] px-4 py-3 text-[#E9EBEF] max-w-[88%] space-y-2">
                      <div className="flex items-center justify-between text-[10px] text-[#8FE3B0] border-b border-[rgba(244,245,247,0.06)] pb-1.5">
                        <span>▸ HYBRID RAG MATCH (CONF: 0.99)</span>
                        <span>LATENCY: 310MS</span>
                      </div>
                      <p className="text-[12px] text-[#AEB4BD] leading-relaxed">
                        Stok iPhone 15 Pro Max 256GB (Natural Titanium) tersedia <strong className="text-[#8FE3B0]">3 unit</strong> di cabang Mall Aminta Jakarta Selatan.
                      </p>
                      <div className="flex gap-2 pt-1">
                        <span className="text-[9px] uppercase px-1.5 py-0.5 border border-[#8FE3B0]/30 text-[#8FE3B0] bg-[#8FE3B0]/5">
                          Direct Reserve
                        </span>
                        <span className="text-[9px] uppercase px-1.5 py-0.5 border border-[rgba(244,245,247,0.1)] text-[#636B76]">
                          Sync ERP Stock
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Typing / Diagnostic indicator */}
                  <div className="flex items-center gap-2 pt-2 text-[#636B76] text-[10px]">
                    <span className="terminal-caret" aria-hidden="true" />
                    <span>Inference channel: WhatsApp Cloud API v21.0</span>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="pt-3 border-t border-[rgba(244,245,247,0.08)] flex items-center justify-between text-[10px] font-mono text-[#636B76]">
                  <span>SCALE MODEL SIMULATION</span>
                  <span className="text-[#8A9099]">GROUNDED RETRIEVAL</span>
                </div>
              </MoatPanel>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
