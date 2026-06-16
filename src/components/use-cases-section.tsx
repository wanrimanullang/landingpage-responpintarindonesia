'use client';

import { Briefcase, ShoppingBag, GraduationCap, Cross, Target } from 'lucide-react';

const useCases = [
  {
    icon: ShoppingBag,
    title: 'E-Commerce',
    description: 'Automatically handle product inquiries, order tracking, and customer complaints.',
    benefits: ['Increase conversion by 40%', 'Reduce cart abandonment', '24/7 support at no extra cost'],
  },
  {
    icon: Briefcase,
    title: 'Business & Corporate',
    description: 'Automate customer support, lead generation, and internal communication.',
    benefits: ['Save 60% on operational costs', 'Faster response times', 'Boost team productivity'],
  },
  {
    icon: GraduationCap,
    title: 'Education',
    description: 'Answer student questions, provide enrollment information, and learning guidance.',
    benefits: ['Serve thousands of students at once', 'Accurate info 24/7', 'Increase engagement'],
  },
  {
    icon: Cross,
    title: 'Healthcare',
    description: 'Schedule appointments, provide service information, and answer common medical FAQs.',
    benefits: ['Reduce admin workload', 'Automatic appointment management', 'More efficient service'],
  },
];

export function UseCasesSection() {
  return (
    <section id="use-cases" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border">
            <Target className="w-4 h-4 text-[var(--brand-primary)]" />
            <span className="text-sm">Use Cases</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl">
            Solutions for{' '}
            <span className="bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] bg-clip-text text-transparent">
              Various Industries
            </span>
          </h2>

          <p className="text-lg text-muted-foreground">
            From startups to enterprises, Respon Pintar helps businesses across sectors improve their customer experience.
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
