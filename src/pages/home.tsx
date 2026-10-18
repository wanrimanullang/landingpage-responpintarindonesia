import React from 'react';
import { HeroSection } from '../components/hero-section';
import { LogoStrip } from '../components/logo-strip';
import { FeaturesSection } from '../components/features-section';
import { UseCasesSection } from '../components/use-cases-section';
import { PricingSection } from '../components/pricing-section';
import BackgroundScene from '../components/showcase/BackgroundScene';

export default function HomePage() {
  return (
    <main className="jamie-root min-h-screen bg-[#0B0C0E] text-[#E9EBEF] relative overflow-hidden font-sans selection:bg-[#8FE3B0]/20 selection:text-[#8FE3B0]">
      {/* Background Interactive Particle Field & Fixed Ambient Grid */}
      <BackgroundScene />

      {/* Main Content Sections Layer */}
      <div className="relative z-10 w-full">
        <HeroSection />
        <LogoStrip />
        <FeaturesSection />
        <UseCasesSection />
        <PricingSection />
      </div>
    </main>
  );
}
