'use client';

import { Bot, Zap, Shield, BarChart3, MessageSquare, Clock } from 'lucide-react';

const features = [
  {
    icon: Bot,
    title: 'AI Chatbot Pintar',
    description: 'Chatbot berbasis AI yang memahami konteks dan memberikan respons natural seperti manusia.',
  },
  {
    icon: Zap,
    title: 'Otomasi Instant',
    description: 'Setup cepat dalam hitungan menit. Langsung aktif melayani customer Anda 24/7.',
  },
  {
    icon: MessageSquare,
    title: 'Multi-Channel Support',
    description: 'Integrasikan dengan WhatsApp, Instagram, Facebook, dan platform lainnya dalam satu dashboard.',
  },
  {
    icon: BarChart3,
    title: 'Analytics Mendalam',
    description: 'Dashboard analytics untuk tracking performa, kepuasan customer, dan insight bisnis.',
  },
  {
    icon: Shield,
    title: 'Keamanan Terjamin',
    description: 'Enkripsi end-to-end dan compliance standar internasional untuk melindungi data Anda.',
  },
  {
    icon: Clock,
    title: 'Respons Real-time',
    description: 'Waktu respons di bawah 1 detik. Customer Anda tidak perlu menunggu lama.',
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border">
            <Zap className="w-4 h-4 text-[var(--brand-primary)]" />
            <span className="text-sm">Fitur Unggulan</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl">
            Semua yang Anda Butuhkan untuk{' '}
            <span className="bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] bg-clip-text text-transparent">
              Otomasi Customer Service
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Platform lengkap dengan fitur-fitur canggih yang dirancang untuk memaksimalkan efisiensi dan kepuasan pelanggan Anda.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group bg-card border border-border rounded-2xl p-6 hover:shadow-xl hover:shadow-[var(--brand-primary)]/5 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <h3 className="mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
