'use client';

import { CpuChipIcon, BoltIcon, ShareIcon, ArrowTrendingUpIcon, ShieldCheckIcon, ClockIcon, SparklesIcon } from '@heroicons/react/24/outline';

const features = [
  {
    icon: CpuChipIcon,
    title: 'Smart AI Chatbot',
    description: 'An AI-powered chatbot that understands context and delivers natural, human-like responses.',
  },
  {
    icon: BoltIcon,
    title: 'Instant Automation',
    description: 'Quick setup in minutes. Start serving your customers 24/7 right away.',
  },
  {
    icon: ShareIcon,
    title: 'Multi-Channel Support',
    description: 'Integrate with WhatsApp, Instagram, Facebook, and other platforms in a single dashboard.',
  },
  {
    icon: ArrowTrendingUpIcon,
    title: 'In-Depth Analytics',
    description: 'Analytics dashboard for tracking performance, customer satisfaction, and business insights.',
  },
  {
    icon: ShieldCheckIcon,
    title: 'Guaranteed Security',
    description: 'End-to-end encryption and international compliance standards to protect your data.',
  },
  {
    icon: ClockIcon,
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
            <SparklesIcon className="w-4 h-4 text-[var(--brand-primary)]" />
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
                {/* Icon Container - Tech Website Style */}
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-all duration-300 relative">
                  <div className="absolute inset-0 bg-primary/20 blur-xl rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Icon className="w-6 h-6 text-primary relative z-10" />
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
