'use client';

import { Building2, ShoppingCart, GraduationCap, Stethoscope } from 'lucide-react';

const useCases = [
  {
    icon: ShoppingCart,
    title: 'E-Commerce',
    description: 'Tangani pertanyaan produk, tracking pesanan, dan keluhan customer secara otomatis.',
    benefits: ['Tingkatkan konversi 40%', 'Kurangi cart abandonment', 'Support 24/7 tanpa biaya tambahan'],
  },
  {
    icon: Building2,
    title: 'Bisnis & Korporat',
    description: 'Otomasi customer support, lead generation, dan internal communication.',
    benefits: ['Hemat biaya operasional 60%', 'Respon lebih cepat', 'Tingkatkan produktivitas tim'],
  },
  {
    icon: GraduationCap,
    title: 'Pendidikan',
    description: 'Jawab pertanyaan siswa, informasi pendaftaran, dan panduan pembelajaran.',
    benefits: ['Layani ribuan siswa sekaligus', 'Informasi akurat 24/7', 'Tingkatkan engagement'],
  },
  {
    icon: Stethoscope,
    title: 'Healthcare',
    description: 'Jadwal appointment, informasi layanan, dan FAQ medis umum.',
    benefits: ['Kurangi beban admin', 'Appointment management otomatis', 'Layanan lebih efisien'],
  },
];

export function UseCasesSection() {
  return (
    <section id="use-cases" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border">
            <Building2 className="w-4 h-4 text-[var(--brand-primary)]" />
            <span className="text-sm">Use Cases</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl">
            Solusi untuk{' '}
            <span className="bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] bg-clip-text text-transparent">
              Berbagai Industri
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Dari startup hingga enterprise, Respon Pintar membantu bisnis dari berbagai sektor meningkatkan customer experience.
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <div
                key={index}
                className="group bg-card border border-border rounded-2xl p-8 hover:shadow-xl hover:shadow-[var(--brand-primary)]/5 hover:border-[var(--brand-primary)]/20 transition-all duration-300"
              >
                {/* Icon & Title */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="mb-2">{useCase.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {useCase.description}
                    </p>
                  </div>
                </div>

                {/* Benefits */}
                <div className="space-y-2 mt-6 pt-6 border-t border-border">
                  {useCase.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)]" />
                      <p className="text-sm text-muted-foreground">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
