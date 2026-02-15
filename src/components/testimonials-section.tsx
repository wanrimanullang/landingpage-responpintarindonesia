'use client';

import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Budi Santoso',
    role: 'CEO',
    company: 'TechStore Indonesia',
    image: 'BS',
    content: 'Respon Pintar transformed how we interact with customers. Our response time dropped from 2 hours to just 30 seconds!',
    rating: 5,
  },
  {
    name: 'Sarah Wijaya',
    role: 'Marketing Manager',
    company: 'EduLearn',
    image: 'SW',
    content: 'An incredibly user-friendly platform. Our team set it up in 1 day and immediately felt the positive impact.',
    rating: 5,
  },
  {
    name: 'Ahmad Rizki',
    role: 'Founder',
    company: 'HealthCare Plus',
    image: 'AR',
    content: 'Amazing ROI! We saved 60% on customer service costs and customer satisfaction actually increased by 40%.',
    rating: 5,
  },
  {
    name: 'Lisa Permata',
    role: 'Operations Director',
    company: 'FashionHub',
    image: 'LP',
    content: 'The AI is incredibly smart and keeps learning. Now our customer service team can focus on more complex issues.',
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border">
            <Quote className="w-4 h-4 text-[var(--brand-primary)]" />
            <span className="text-sm">Testimonials</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl">
            Trusted by{' '}
            <span className="bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] bg-clip-text text-transparent">
              Thousands of Businesses
            </span>
          </h2>

          <p className="text-lg text-muted-foreground">
            Hear from our customers who have experienced a transformation in their customer service.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-2xl p-8 hover:shadow-xl hover:shadow-[var(--brand-primary)]/5 hover:border-[var(--brand-primary)]/20 transition-all duration-300"
            >
              {/* Quote icon */}
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Quote className="w-5 h-5 text-white" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[var(--brand-primary)] text-[var(--brand-primary)]" />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-border">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center flex-shrink-0">
                  <span className="text-white">{testimonial.image}</span>
                </div>
                <div>
                  <p className="text-sm">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.role} - {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}