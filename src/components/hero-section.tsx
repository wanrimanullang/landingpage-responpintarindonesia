'use client';

import { ArrowRight, Sparkles, Zap } from 'lucide-react';
import { Button } from './ui/button';

export function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--brand-primary)]/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--brand-gradient-end)]/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border">
              <Sparkles className="w-4 h-4 text-[var(--brand-primary)]" />
              <span className="text-sm">Platform SaaS untuk Otomasi Respons</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl !leading-tight">
              Tingkatkan Respons Customer dengan{' '}
              <span className="bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] bg-clip-text text-transparent">
                Teknologi AI
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg text-muted-foreground !leading-relaxed">
              Otomasi respons pelanggan, tingkatkan kepuasan, dan hemat waktu hingga 70% dengan platform chatbot berbasis AI yang mudah digunakan.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] hover:opacity-90 transition-all hover:scale-105 hover:shadow-lg shadow-[var(--brand-primary)]/20 group"
              >
                <a href="https://wa.me/620811552477?text=Halo,%20saya%20mendapatkan%20informasi%20dari%20website%20ResponPintar.%20Apakah%20saya%20boleh%20tahu%20informasi%20aplikasinya?">Mulai Gratis</a>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-border hover:bg-accent hover:scale-105 transition-all"
              >
                Lihat Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-4">
              <div>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] bg-clip-text text-transparent">
                    10K+
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">Pengguna Aktif</p>
              </div>
              <div>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] bg-clip-text text-transparent">
                    98%
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">Kepuasan Customer</p>
              </div>
              <div>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] bg-clip-text text-transparent">
                    24/7
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">Dukungan Otomatis</p>
              </div>
            </div>
          </div>

          {/* Right: Mockup/Preview */}
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] opacity-20 blur-3xl rounded-3xl" />

            {/* Main mockup card */}
            <div className="relative bg-card border border-border rounded-2xl shadow-2xl p-6 space-y-4">
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm">Respon Pintar AI</p>
                    <p className="text-xs text-muted-foreground">Online</p>
                  </div>
                </div>
                <div className="flex gap-1">
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                </div>
              </div>

              {/* Chat messages */}
              <div className="space-y-4">
                {/* User message */}
                <div className="flex justify-end">
                  <div className="bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] text-white px-4 py-2 rounded-2xl rounded-tr-sm max-w-[80%]">
                    <p className="text-sm">Bagaimana cara menggunakan fitur otomasi?</p>
                  </div>
                </div>

                {/* AI response */}
                <div className="flex gap-2">
                  <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <Zap className="w-4 h-4 text-[var(--brand-primary)]" />
                  </div>
                  <div className="bg-secondary px-4 py-2 rounded-2xl rounded-tl-sm max-w-[80%]">
                    <p className="text-sm">Fitur otomasi kami sangat mudah! Anda tinggal setup template respons, dan AI akan menangani sisanya secara otomatis 24/7.</p>
                  </div>
                </div>

                {/* Typing indicator */}
                <div className="flex gap-2">
                  <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <Zap className="w-4 h-4 text-[var(--brand-primary)]" />
                  </div>
                  <div className="bg-secondary px-4 py-2 rounded-2xl">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 rounded-full bg-muted-foreground/50 animate-bounce" style={{ animationDelay: '0ms' }} />
                      <div className="w-2 h-2 rounded-full bg-muted-foreground/50 animate-bounce" style={{ animationDelay: '150ms' }} />
                      <div className="w-2 h-2 rounded-full bg-muted-foreground/50 animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Input area */}
              <div className="flex gap-2 pt-4 border-t border-border">
                <div className="flex-1 bg-secondary px-4 py-2 rounded-lg">
                  <p className="text-sm text-muted-foreground">Ketik pesan...</p>
                </div>
                <button className="w-10 h-10 rounded-lg bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center">
                  <ArrowRight className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-card border border-border rounded-xl shadow-lg p-3 animate-pulse">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-xs">AI Active</span>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-xl shadow-lg p-3">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[var(--brand-primary)]" />
                <span className="text-xs">Smart Response</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
