'use client';

import React from 'react';
import {
  CpuChipIcon,
  BoltIcon,
  ShareIcon,
  ArrowTrendingUpIcon,
  ShieldCheckIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';
import MoatPanel from './showcase/MoatPanel';
import ScrollReveal from './showcase/ScrollReveal';
import SignalBadge from './showcase/SignalBadge';

const features = [
  {
    icon: CpuChipIcon,
    number: '01',
    badge: 'HYBRID RAG',
    title: 'Smart AI Context Engine',
    description:
      'Mesin pemahaman semantik multimodal yang memahami intonasi dan bahasa percakapan lokal Indonesia tanpa halusinasi inventaris.',
  },
  {
    icon: BoltIcon,
    number: '02',
    badge: 'SUB-SECOND',
    title: 'Instant Autonomous Routing',
    description:
      'Setup cepat dalam hitungan menit. Alihkan 90%+ tiket berulang ke agen otonom dengan SLA latensi terjamin di bawah 400ms.',
  },
  {
    icon: ShareIcon,
    number: '03',
    badge: 'OMNICHANNEL',
    title: 'Unified Channel State Machine',
    description:
      'Satu orkestrasi sentral untuk WhatsApp Cloud API, Instagram DM, Telegram, dan Web Widget tanpa kehilangan riwayat obrolan.',
  },
  {
    icon: ArrowTrendingUpIcon,
    number: '04',
    badge: 'REALTIME',
    title: 'ClickHouse Live Analytics',
    description:
      'Dashboard analitik performa resolusi tiket, metrik CSAT, deteksi tren keluhan, dan analisis sentimen real-time berbasis data.',
  },
  {
    icon: ShieldCheckIcon,
    number: '05',
    badge: 'ISO 27001',
    title: 'Zero-Trust Data Guardrails',
    description:
      'Enkripsi end-to-end dengan filter PII otomatis dan audit trail kriptografis siap kepatuhan regulasi data perbankan.',
  },
  {
    icon: ClockIcon,
    number: '06',
    badge: '24/7/365',
    title: 'High-Availability Ingest',
    description:
      'Arsitektur Redis 7.2 Stream tahan lonjakan jutaan pesan promosi tanpa risiko webhook timeout atau pesan hilang.',
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-12 border-b border-[rgba(244,245,247,0.08)] relative">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <ScrollReveal>
            <div className="flex items-center gap-3">
              <p className="label-mono text-[#8FE3B0]">
                02 · CORE CAPABILITIES
              </p>
              <SignalBadge label="PRODUCTION READY" variant="positive" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={80}>
            <h2 className="text-display font-bold tracking-tight text-[#E9EBEF]">
              Everything you need for{' '}
              <span className="chrome-text block">Autonomous Customer Ops.</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={160}>
            <p className="text-base sm:text-lg text-[#AEB4BD] font-normal leading-relaxed max-w-2xl">
              Platform orkestrasi lengkap dengan kapabilitas tingkat lanjut untuk efisiensi
              maksimal, kehandalan tanpa kompromi, dan kepuasan pelanggan sejati.
            </p>
          </ScrollReveal>
        </div>

        {/* Features Grid with MoatPanels */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <ScrollReveal key={feature.number} delay={index * 80}>
                <MoatPanel className="p-7 sm:p-8 flex flex-col justify-between h-full border border-[rgba(244,245,247,0.08)]">
                  <div>
                    {/* Top Tag & Number */}
                    <div className="flex items-center justify-between mb-6 font-mono text-[11px]">
                      <span className="text-[#636B76]">{feature.number} // CAPABILITY</span>
                      <span className="border border-[rgba(244,245,247,0.12)] px-2 py-0.5 text-[#8FE3B0] bg-[#8FE3B0]/5 uppercase tracking-wider text-[10px]">
                        {feature.badge}
                      </span>
                    </div>

                    {/* Icon */}
                    <div className="w-10 h-10 rounded border border-[rgba(244,245,247,0.14)] bg-[#1a1c1f] flex items-center justify-center text-[#E9EBEF] mb-5">
                      <Icon className="w-5 h-5 text-[#8FE3B0]" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-[#E9EBEF] mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-[#AEB4BD] leading-relaxed font-normal">
                      {feature.description}
                    </p>
                  </div>

                  {/* Card Bottom status */}
                  <div className="pt-6 mt-6 border-t border-[rgba(244,245,247,0.06)] flex items-center justify-between text-[10px] font-mono text-[#636B76]">
                    <span>STATUS: ACTIVE</span>
                    <span className="text-[#8A9099]">GROUNDED</span>
                  </div>
                </MoatPanel>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
