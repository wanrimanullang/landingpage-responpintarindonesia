'use client';

import React from 'react';
import {
  InboxStackIcon,
  ChatBubbleLeftRightIcon,
  UserGroupIcon,
  BoltIcon,
  IdentificationIcon,
  ChartBarSquareIcon,
} from '@heroicons/react/24/outline';
import ScrollReveal from './showcase/ScrollReveal';
import SignalBadge from './showcase/SignalBadge';

const features = [
  {
    icon: InboxStackIcon,
    number: '01',
    badge: 'UNIFIED INBOX',
    title: 'Satu Inbox Semua Channel',
    description:
      'Gabungkan pesan WhatsApp Business, Instagram DM, Telegram, dan Live Chat ke dalam satu dasbor terpadu tanpa perlu login bolak-balik antar aplikasi.',
  },
  {
    icon: ChatBubbleLeftRightIcon,
    number: '02',
    badge: 'OFFICIAL API',
    title: 'Official WhatsApp Business API',
    description:
      'Akses resmi Meta Cloud API dengan dukungan centang hijau (verified badge), broadcast pesan massal aman, dan integrasi webhook multi-nomor.',
  },
  {
    icon: UserGroupIcon,
    number: '03',
    badge: 'ROUTING',
    title: 'Delegasi & Auto-Assignment CS',
    description:
      'Distribusi pesan pelanggan secara otomatis ke agen CS yang sedang aktif berdasarkan giliran (round-robin), divisi, atau keahlian tanpa rebutan chat.',
  },
  {
    icon: BoltIcon,
    number: '04',
    badge: 'QUICK ACTION',
    title: 'Template Pesan & Auto-Reply',
    description:
      'Jawab pertanyaan sering ditanyakan dalam 1 klik dengan quick replies, katalog harga instan, dan auto-responder saat jam operasional toko tutup.',
  },
  {
    icon: IdentificationIcon,
    number: '05',
    badge: 'CRM SYNC',
    title: 'Profil Pelanggan & Riwayat Order',
    description:
      'Simpan histori chat, data pembelian, catatan khusus pelanggan, dan integrasikan ke sistem e-commerce atau database internal bisnis Anda.',
  },
  {
    icon: ChartBarSquareIcon,
    number: '06',
    badge: 'ANALYTICS',
    title: 'Real-time CS Analytics & SLA',
    description:
      'Pantau waktu respon agen, kepuasan pelanggan (CSAT), volume chat per jam, dan evaluasi produktivitas tim customer support secara transparan.',
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="landing-section">
      <div className="landing-container">
        {/* Section Header (g: label margin-bottom 16px from title) */}
        <div className="landing-section-header">
          <ScrollReveal>
            <div className="landing-section-label">
              <span>01 · CORE OMNICHANNEL FEATURES</span>
              <SignalBadge label="ALL-IN-ONE DESK" variant="positive" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={80}>
            <h2 className="text-display font-bold tracking-tight text-[#E9EBEF] landing-section-title">
              Semua Fitur untuk{' '}
              <span className="chrome-text block">Customer Service Modern.</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={160}>
            <p className="text-base sm:text-lg text-[#AEB4BD] font-normal leading-relaxed max-w-2xl">
              Tingkatkan efisiensi komunikasi bisnis Anda. Berikan respon secepat kilat kepada
              pelanggan di channel manapun mereka menghubungi Anda.
            </p>
          </ScrollReveal>
        </div>

        {/* Features Grid with Cards (Token c: padding 24px, border 1px, radius 12px, gap antar baris 16px) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <ScrollReveal key={feature.number} delay={index * 70}>
                <div className="landing-card justify-between h-full">
                  <div>
                    {/* Header kartu dipisah garis tipis (border-bottom) dengan padding-bottom 16px */}
                    <div className="landing-card-header mb-4">
                      <span className="text-[#636B76] font-mono text-xs">{feature.number} // FITUR</span>
                      <span className="landing-badge text-[#8FE3B0] bg-[#8FE3B0]/5 border-[#8FE3B0]/30">
                        {feature.badge}
                      </span>
                    </div>

                    {/* Icon */}
                    <div className="w-10 h-10 rounded-[6px] border border-[rgba(255,255,255,0.12)] bg-[#1a1c1f] flex items-center justify-center text-[#8FE3B0] mb-4">
                      <Icon className="w-5 h-5" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-[#E9EBEF] mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-[#AEB4BD] leading-relaxed font-normal">
                      {feature.description}
                    </p>
                  </div>

                  {/* Card Bottom status */}
                  <div className="pt-4 mt-4 border-t border-[rgba(255,255,255,0.08)] flex items-center justify-between text-xs font-mono text-[#636B76]">
                    <span>OMNICHANNEL READY</span>
                    <span className="text-[#8A9099]">ACTIVE SYNC</span>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
