'use client';

import { BrainCircuit, Gauge, Network, TrendingUp, ShieldCheck, Timer, Sparkles } from 'lucide-react';

const features = [
  {
    icon: BrainCircuit,
    title: 'Smart AI Chatbot',
    description: 'An AI-powered chatbot that understands context and delivers natural, human-like responses.',
  },
  {
    icon: Gauge,
    title: 'Instant Automation',
    description: 'Quick setup in minutes. Start serving your customers 24/7 right away.',
  },
  {
    icon: Network,
    title: 'Multi-Channel Support',
    description: 'Integrate with WhatsApp, Instagram, Facebook, and other platforms in a single dashboard.',
  },
  {
    icon: TrendingUp,
    title: 'In-Depth Analytics',
    description: 'Analytics dashboard for tracking performance, customer satisfaction, and business insights.',
  },
  {
    icon: ShieldCheck,
    title: 'Guaranteed Security',
    description: 'End-to-end encryption and international compliance standards to protect your data.',
  },
  {
    icon: Timer,
    title: 'Real-time Response',
    description: 'Response time under 1 second. Your customers never have to wait long.',
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border">
            <Sparkles className="w-4 h-4 text-[var(--brand-primary)]" />
            <span className="text-sm">Key Features</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl">
            Everything You Need for{' '}
            <span className="bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] bg-clip-text text-transparent">
              Customer Service Automation
            </span>
          </h2>

          <p className="text-lg text-muted-foreground">
            A complete platform with powerful features designed to maximize your efficiency and customer satisfaction.
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
