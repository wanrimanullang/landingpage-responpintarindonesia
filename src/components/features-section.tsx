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
import MoatPanel from './showcase/MoatPanel';
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
    <section id="features" className="py-28 sm:py-36 px-6 lg:px-16 border-b border-[rgba(244,245,247,0.08)] relative">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-18 space-y-4">
          <ScrollReveal>
            <div className="flex items-center gap-3">
              <p className="label-mono text-[#8FE3B0]">
                01 · CORE OMNICHANNEL FEATURES
              </p>
              <SignalBadge label="ALL-IN-ONE DESK" variant="positive" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={80}>
            <h2 className="text-display font-bold tracking-tight text-[#E9EBEF]">
              Semua Fitur untuk{' '}
              <span className="chrome-text block">Customer Service Modern.</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={160}>
            <p className="text-base sm:text-[17px] text-[#AEB4BD] font-normal leading-relaxed max-w-2xl">
              Tingkatkan efisiensi komunikasi bisnis Anda. Berikan respon secepat kilat kepada
              pelanggan di channel manapun mereka menghubungi Anda.
            </p>
          </ScrollReveal>
        </div>

        {/* Features Grid with MoatPanels */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <ScrollReveal key={feature.number} delay={index * 70}>
                <MoatPanel className="p-8 sm:p-9 flex flex-col justify-between h-full border border-[rgba(244,245,247,0.08)]">
                  <div>
                    {/* Top Tag & Number */}
                    <div className="flex items-center justify-between mb-6 font-mono text-[11px]">
                      <span className="text-[#636B76]">{feature.number} // FITUR</span>
                      <span className="border border-[rgba(244,245,247,0.12)] px-2.5 py-0.5 text-[#8FE3B0] bg-[#8FE3B0]/5 uppercase tracking-wider text-[10px]">
                        {feature.badge}
                      </span>
                    </div>

                    {/* Icon */}
                    <div className="w-11 h-11 rounded border border-[rgba(244,245,247,0.14)] bg-[#1a1c1f] flex items-center justify-center text-[#E9EBEF] mb-6">
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
                    <span>OMNICHANNEL READY</span>
                    <span className="text-[#8A9099]">ACTIVE SYNC</span>
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
