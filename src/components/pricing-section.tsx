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
            <span className="text-sm">Harga</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl">
            Solusi yang Tepat untuk{' '}
            <span className="bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] bg-clip-text text-transparent">
              Bisnis Anda
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Kami menyediakan paket custom yang disesuaikan dengan kebutuhan bisnis Anda. Hubungi tim kami untuk penawaran terbaik.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-2xl p-12 text-center shadow-xl">
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center">
              <Crown className="w-10 h-10 text-white" />
            </div>

            <h3 className="text-2xl mb-4">
              Dapatkan Penawaran Khusus
            </h3>
            
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Setiap bisnis memiliki kebutuhan yang unik. Tim kami akan membantu Anda menemukan solusi terbaik dengan harga yang kompetitif dan fitur yang sesuai dengan kebutuhan Anda.
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
                <p className="text-xs text-muted-foreground mb-1">Telepon</p>
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
              Hubungi Tim Sales
            </Button>

            {/* Additional Info */}
            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground">
                💡 <strong>Free Trial Available:</strong> Coba platform kami secara gratis selama 14 hari tanpa perlu kartu kredit
              </p>
            </div>
          </div>

          {/* Features highlight */}
          <div className="grid sm:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <div className="text-2xl mb-2">🎯</div>
              <p className="text-sm">Paket Custom</p>
              <p className="text-xs text-muted-foreground mt-1">Sesuai kebutuhan bisnis</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">💰</div>
              <p className="text-sm">Harga Kompetitif</p>
              <p className="text-xs text-muted-foreground mt-1">Value terbaik untuk investasi</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">🤝</div>
              <p className="text-sm">Dedicated Support</p>
              <p className="text-xs text-muted-foreground mt-1">Tim siap membantu 24/7</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
