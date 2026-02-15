'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Users } from 'lucide-react';

// Partner logos (using text as placeholder - in real app, use actual logo images)
const partners = [
  { name: 'TechCorp', logo: 'TC' },
  { name: 'InnovateLab', logo: 'IL' },
  { name: 'StartupHub', logo: 'SH' },
  { name: 'GrowthCo', logo: 'GC' },
  { name: 'ScaleUp', logo: 'SU' },
  { name: 'BusinessPro', logo: 'BP' },
  { name: 'DigitalFirst', logo: 'DF' },
  { name: 'CloudSync', logo: 'CS' },
  { name: 'DataMind', logo: 'DM' },
  { name: 'AIVentures', logo: 'AV' },
];

export function PartnersSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-slide functionality
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % partners.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + partners.length) % partners.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % partners.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Calculate visible partners based on screen size
  const getVisiblePartners = () => {
    const windowWidth = typeof window !== 'undefined' ? window.innerWidth : 1024;
    let slidesToShow = 5;

    if (windowWidth < 480) {
      slidesToShow = 2;
    } else if (windowWidth < 768) {
      slidesToShow = 3;
    } else if (windowWidth < 1024) {
      slidesToShow = 4;
    }

    const visiblePartners = [];
    for (let i = 0; i < slidesToShow; i++) {
      const index = (currentIndex + i) % partners.length;
      visiblePartners.push(partners[index]);
    }
    return visiblePartners;
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border">
            <Users className="w-4 h-4 text-[var(--brand-primary)]" />
            <span className="text-sm">Partners & Clients</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl">
            Our Partners &{' '}
            <span className="bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] bg-clip-text text-transparent">
              Clients
            </span>
          </h2>

          <p className="text-lg text-muted-foreground">
            Join over 10,000+ businesses that trust Respon Pintar
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 hidden md:block">
            <button
              onClick={goToPrevious}
              className="w-10 h-10 rounded-full bg-card border border-border hover:bg-accent hover:border-[var(--brand-primary)]/20 flex items-center justify-center transition-all hover:scale-110 shadow-lg"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
          </div>

          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 hidden md:block">
            <button
              onClick={goToNext}
              className="w-10 h-10 rounded-full bg-card border border-border hover:bg-accent hover:border-[var(--brand-primary)]/20 flex items-center justify-center transition-all hover:scale-110 shadow-lg"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          </div>

          {/* Partners Grid */}
          <div
            className="overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
              {getVisiblePartners().map((partner, index) => (
                <div
                  key={`${partner.name}-${index}`}
                  className="animate-fadeIn"
                >
                  <div className="bg-card border border-border rounded-xl p-6 h-28 flex items-center justify-center hover:border-[var(--brand-primary)]/20 hover:shadow-lg transition-all group cursor-pointer">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto rounded-lg bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                        <span className="text-white text-lg">{partner.logo}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">{partner.name}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {partners.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${index === currentIndex
                  ? 'bg-[var(--brand-primary)] w-6'
                  : 'bg-[var(--brand-primary)] opacity-30 hover:opacity-50'
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border">
          <div className="text-center">
            <div className="text-3xl bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] bg-clip-text text-transparent mb-2">
              10K+
            </div>
            <p className="text-sm text-muted-foreground">Active Users</p>
          </div>
          <div className="text-center">
            <div className="text-3xl bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] bg-clip-text text-transparent mb-2">
              500+
            </div>
            <p className="text-sm text-muted-foreground">Partner Companies</p>
          </div>
          <div className="text-center">
            <div className="text-3xl bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] bg-clip-text text-transparent mb-2">
              50M+
            </div>
            <p className="text-sm text-muted-foreground">Messages Processed</p>
          </div>
          <div className="text-center">
            <div className="text-3xl bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] bg-clip-text text-transparent mb-2">
              99.9%
            </div>
            <p className="text-sm text-muted-foreground">Uptime SLA</p>
          </div>
        </div>
      </div>

      {/* Animation styles */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}
      </style>
    </section>
  );
}
