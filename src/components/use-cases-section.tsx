'use client';

import React from 'react';
import {
  BriefcaseIcon,
  ShoppingBagIcon,
  AcademicCapIcon,
  HeartIcon,
} from '@heroicons/react/24/outline';
import MoatPanel from './showcase/MoatPanel';
import ScrollReveal from './showcase/ScrollReveal';
import ChromeRule from './showcase/ChromeRule';

const useCases = [
  {
    icon: ShoppingBagIcon,
    number: '01',
    industry: 'RETAIL & E-COMMERCE',
    title: 'Automasi Pesanan & Cek Resi',
    description:
      'Tangani ribuan pertanyaan ketersediaan stok, pelacakan ekspedisi otomatis, dan komplain pesanan secara instan 24/7.',
    benefits: [
      'Peningkatan konversi checkout hingga +40%',
      'Eliminasi antrean CS saat peak sales',
      'Integrasi direct ERP & inventaris multi-cabang',
    ],
  },
  {
    icon: BriefcaseIcon,
    number: '02',
    industry: 'FINANCE & CORPORATE',
    title: 'Dispute & Lead Qualification',
    description:
      'Kualifikasi prospek B2B bernilai tinggi, verifikasi identitas, dan orkestrasi tiket klaim dengan enkripsi standar perbankan.',
    benefits: [
      'Hemat 60% biaya CS operasional',
      'Handoff konteks ke account manager dalam 82ms',
      'Kepatuhan audit trail ISO 27001',
    ],
  },
  {
    icon: AcademicCapIcon,
    number: '03',
    industry: 'EDUCATION & EDTECH',
    title: 'Admission Concierge & Guidance',
    description:
      'Menjawab pertanyaan pendaftaran mahasiswa baru, jadwal seleksi, dan biaya kuliah akurat bebas halusinasi.',
    benefits: [
      'Layani 10,000+ calon siswa bersamaan',
      'Tingkat akurasi informasi 99.8%',
      'Follow-up prospek otomatis via WhatsApp',
    ],
  },
  {
    icon: HeartIcon,
    number: '04',
    industry: 'HEALTHCARE & CLINIC',
    title: 'Reservasi Pasien & Tanya Dokter',
    description:
      'Atur jadwal temu dokter spesialis, reminder otomatis obat, dan panduan fasilitas rumah sakit tanpa repot telepon manual.',
    benefits: [
      'Penurunan angka no-show pasien sebesar 35%',
      'Manajemen antrean real-time otomatis',
      'Perlindungan privasi data medis sensitif',
    ],
  },
];

export function UseCasesSection() {
  return (
    <section id="use-cases" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-12 border-b border-[rgba(244,245,247,0.08)] relative">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <ScrollReveal>
            <p className="label-mono text-[#8FE3B0]">
              03 · INDUSTRY BLUEPRINTS
            </p>
          </ScrollReveal>

          <ScrollReveal delay={80}>
            <h2 className="text-display font-bold tracking-tight text-[#E9EBEF]">
              Tailored solutions for{' '}
              <span className="chrome-text block">Various Industries.</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={160}>
            <p className="text-base sm:text-lg text-[#AEB4BD] font-normal leading-relaxed max-w-2xl">
              Dari start-up logistik hingga grup ritel multinasional, Respon Pintar
              menyediakan template blueprint yang telah teruji di lingkungan produksi nyata.
            </p>
          </ScrollReveal>
        </div>

        {/* Use Cases Grid with MoatPanels */}
        <div className="grid md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <ScrollReveal key={useCase.number} delay={index * 100}>
                <MoatPanel className="p-8 sm:p-10 flex flex-col justify-between h-full border border-[rgba(244,245,247,0.08)]">
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6 font-mono text-[11px]">
                      <span className="text-[#636B76]">{useCase.number} // BLUEPRINT</span>
                      <span className="border border-[rgba(244,245,247,0.12)] px-2.5 py-0.5 text-[#AEB4BD] bg-white/[0.02] uppercase tracking-wider text-[10px]">
                        {useCase.industry}
                      </span>
                    </div>

                    <div className="flex items-start gap-4 mb-5">
                      <div className="w-10 h-10 rounded border border-[rgba(244,245,247,0.14)] bg-[#1a1c1f] flex items-center justify-center text-[#8FE3B0] shrink-0">
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

                    <ChromeRule className="my-6 opacity-40" />

                    {/* Benefits List */}
                    <div className="space-y-2.5 font-mono text-[12px]">
                      {useCase.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center gap-2.5 text-[#AEB4BD]">
                          <span className="text-[#8FE3B0] font-bold select-none">▸</span>
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="pt-6 mt-6 border-t border-[rgba(244,245,247,0.06)] flex items-center justify-between text-[10px] font-mono text-[#636B76]">
                    <span>DEPLOYMENT TIME: &lt; 48 HOURS</span>
                    <span className="text-[#8FE3B0]">VERIFIED BLUEPRINT</span>
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
