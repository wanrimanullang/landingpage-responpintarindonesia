'use client';

import React from 'react';
import {
  BriefcaseIcon,
  ShoppingBagIcon,
  AcademicCapIcon,
  HeartIcon,
} from '@heroicons/react/24/outline';
import ScrollReveal from './showcase/ScrollReveal';

const useCases = [
  {
    icon: ShoppingBagIcon,
    number: '01',
    industry: 'RETAIL & E-COMMERCE',
    title: 'Automasi Pesanan & Cek Resi Cepat',
    description:
      'Terima pesanan dari Instagram DM dan WhatsApp dalam 1 inbox. Kirim update resi ekspedisi dan notifikasi pembayaran otomatis tanpa ketik manual satu per satu.',
    benefits: [
      'Peningkatan konversi checkout hingga +40%',
      'Eliminasi antrean chat saat flash sale & promo tanggal kembar',
      'Integrasi langsung ke sistem pesanan dan katalog produk',
    ],
  },
  {
    icon: BriefcaseIcon,
    number: '02',
    industry: 'FINANCE & CORPORATE',
    title: 'Kualifikasi Prospek & Eskalasi Tiket',
    description:
      'Saring pesan masuk dari website dan Telegram, lalu delegasikan prospek bernilai tinggi langsung ke account manager dengan pembagian tugas yang adil.',
    benefits: [
      'Hemat hingga 60% biaya operasional customer service',
      'Waktu respon pertama kurang dari 45 detik',
      'Keamanan data pelanggan dengan enkripsi standar enterprise',
    ],
  },
  {
    icon: AcademicCapIcon,
    number: '03',
    industry: 'EDUCATION & KURSUS',
    title: 'Informasi Pendaftaran & Konseling',
    description:
      'Layanan calon siswa baru via WhatsApp dan Live Chat website. Bagikan informasi biaya studi, jadwal pendaftaran, dan reminder seleksi secara massal.',
    benefits: [
      'Layani ribuan pendaftar bersamaan tanpa kendala nomor diblokir',
      'Multi-admin CS dapat menjawab dari perangkat berbeda',
      'Follow-up otomatis calon pendaftar via WhatsApp blast resmi',
    ],
  },
  {
    icon: HeartIcon,
    number: '04',
    industry: 'KLINIK & HEALTHCARE',
    title: 'Reservasi Jadwal & Pengingat Pasien',
    description:
      'Kelola booking jadwal dokter dan kirim pengingat konsultasi otomatis sebelum hari pemeriksaan untuk mencegah pasien lupa atau terlambat datang.',
    benefits: [
      'Turunkan angka no-show pasien hingga 35%',
      'Manajemen antrean janji temu lebih teratur dan rapi',
      'Respon cepat pertanyaan jadwal praktek dan fasilitas klinik',
    ],
  },
];

export function UseCasesSection() {
  return (
    <section id="use-cases" className="landing-section">
      <div className="landing-container">
        {/* Section Header (g: label margin-bottom 16px from title) */}
        <div className="landing-section-header">
          <ScrollReveal>
            <div className="landing-section-label">
              <span>02 · INDUSTRY BLUEPRINTS</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={80}>
            <h2 className="text-display font-bold tracking-tight text-[#E9EBEF] landing-section-title">
              Solusi Tepat untuk{' '}
              <span className="chrome-text block">Berbagai Industri.</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={160}>
            <p className="text-base sm:text-lg text-[#AEB4BD] font-normal leading-relaxed max-w-2xl">
              Dari UMKM berkembang hingga korporasi besar, Respon Pintar membantu tim CS Anda
              melayani pelanggan lebih cepat, teratur, dan profesional.
            </p>
          </ScrollReveal>
        </div>

        {/* Use Cases Grid with Cards (Token c: padding 24px, border 1px, radius 12px, gap antar baris 16px) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <ScrollReveal key={useCase.number} delay={index * 90}>
                <div className="landing-card justify-between h-full">
                  <div>
                    {/* Header kartu dipisah garis tipis (border-bottom) dengan padding-bottom 16px */}
                    <div className="landing-card-header mb-4">
                      <span className="text-[#636B76] font-mono text-xs">{useCase.number} // BLUEPRINT</span>
                      <span className="landing-badge text-[#AEB4BD] bg-white/[0.02]">
                        {useCase.industry}
                      </span>
                    </div>

                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-10 h-10 rounded-[6px] border border-[rgba(255,255,255,0.12)] bg-[#1a1c1f] flex items-center justify-center text-[#8FE3B0] shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-[#E9EBEF] mb-2">
                          {useCase.title}
                        </h3>
                        <p className="text-sm text-[#AEB4BD] leading-relaxed font-normal">
                          {useCase.description}
                        </p>
                      </div>
                    </div>

                    {/* Divider line separating description from benefits */}
                    <div className="border-b border-[rgba(255,255,255,0.08)] my-4" />

                    {/* Benefits List */}
                    <div className="space-y-3 font-mono text-xs">
                      {useCase.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center gap-2.5 text-[#AEB4BD]">
                          <span className="text-[#8FE3B0] font-bold select-none">▸</span>
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="pt-4 mt-6 border-t border-[rgba(255,255,255,0.08)] flex items-center justify-between text-xs font-mono text-[#636B76]">
                    <span>IMPLEMENTASI CEPAT</span>
                    <span className="text-[#8FE3B0]">OMNICHANNEL CS</span>
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
