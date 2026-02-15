'use client';

import { Crown, Mail, MessageCircle, Phone } from 'lucide-react';
import { Button } from './ui/button';

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border">
            <Crown className="w-4 h-4 text-[var(--brand-primary)]" />
            <span className="text-sm">Pricing</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl">
            The Right Solution for{' '}
            <span className="bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] bg-clip-text text-transparent">
              Your Business
            </span>
          </h2>

          <p className="text-lg text-muted-foreground">
            We provide custom packages tailored to your business needs. Contact our team for the best offer.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-2xl p-12 text-center shadow-xl">
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center">
              <Crown className="w-10 h-10 text-white" />
            </div>

            <h3 className="text-2xl mb-4">
              Get a Custom Quote
            </h3>

            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Every business has unique needs. Our team will help you find the best solution with competitive pricing and features tailored to your requirements.
            </p>

            {/* Contact Methods */}
            <div className="grid sm:grid-cols-3 gap-4 mb-8 max-w-2xl mx-auto">
              <div className="bg-secondary/50 rounded-xl p-4 border border-border">
                <Mail className="w-6 h-6 text-[var(--brand-primary)] mx-auto mb-2" />
                <p className="text-xs text-muted-foreground mb-1">Email</p>
                <p className="text-sm">support@responpintar.com</p>
              </div>

              <div className="bg-secondary/50 rounded-xl p-4 border border-border">
                <Phone className="w-6 h-6 text-[var(--brand-primary)] mx-auto mb-2" />
                <p className="text-xs text-muted-foreground mb-1">Phone</p>
                <p className="text-sm">+62 811-552-477</p>
              </div>

              <div className="bg-secondary/50 rounded-xl p-4 border border-border">
                <MessageCircle className="w-6 h-6 text-[var(--brand-primary)] mx-auto mb-2" />
                <p className="text-xs text-muted-foreground mb-1">WhatsApp</p>
                <p className="text-sm">+62 811-552-477</p>
              </div>
            </div>

            {/* CTA Button */}
            <Button
              size="lg"
              className="bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] hover:opacity-90 transition-all hover:scale-105 hover:shadow-lg shadow-[var(--brand-primary)]/20"
            >
              Contact Sales Team
            </Button>

            {/* Additional Info */}
            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground">
                💡 <strong>Free Trial Available:</strong> Try our platform free for 14 days — no credit card required
              </p>
            </div>
          </div>

          {/* Features highlight */}
          <div className="grid sm:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <svg className="w-8 h-8 mx-auto mb-2" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="14" stroke="var(--brand-primary)" strokeWidth="2" opacity="0.3" />
                <circle cx="16" cy="16" r="9" stroke="var(--brand-primary)" strokeWidth="2" opacity="0.6" />
                <circle cx="16" cy="16" r="4" fill="var(--brand-primary)" />
              </svg>
              <p className="text-sm">Custom Packages</p>
              <p className="text-xs text-muted-foreground mt-1">Tailored to your business needs</p>
            </div>
            <div className="text-center">
              <svg className="w-8 h-8 mx-auto mb-2" viewBox="0 0 32 32" fill="none">
                <path d="M16 3L28 16L16 29L4 16Z" stroke="var(--brand-primary)" strokeWidth="2" fill="var(--brand-primary)" fillOpacity="0.15" />
                <path d="M16 9L23 16L16 23L9 16Z" fill="var(--brand-primary)" fillOpacity="0.5" />
              </svg>
              <p className="text-sm">Competitive Pricing</p>
              <p className="text-xs text-muted-foreground mt-1">Best value for your investment</p>
            </div>
            <div className="text-center">
              <svg className="w-8 h-8 mx-auto mb-2" viewBox="0 0 32 32" fill="none">
                <circle cx="8" cy="16" r="5" stroke="var(--brand-primary)" strokeWidth="2" fill="var(--brand-primary)" fillOpacity="0.15" />
                <circle cx="24" cy="16" r="5" stroke="var(--brand-primary)" strokeWidth="2" fill="var(--brand-primary)" fillOpacity="0.15" />
                <path d="M13 16H19" stroke="var(--brand-primary)" strokeWidth="2" strokeLinecap="round" />
                <circle cx="8" cy="16" r="2" fill="var(--brand-primary)" />
                <circle cx="24" cy="16" r="2" fill="var(--brand-primary)" />
              </svg>
              <p className="text-sm">Dedicated Support</p>
              <p className="text-xs text-muted-foreground mt-1">Team ready to help 24/7</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
