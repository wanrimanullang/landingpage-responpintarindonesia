import { HeroSection } from '../components/hero-section';
import { FeaturesSection } from '../components/features-section';
import { UseCasesSection } from '../components/use-cases-section';
import { PricingSection } from '../components/pricing-section';
// import { TestimonialsSection } from '../components/testimonials-section';
import { OurClientsSection } from '../components/our-clients-section';
import { AnimatedSection } from '../components/animated-section';
import { ChatbotDemoModal } from '../components/chatbot-demo-modal';

export default function HomePage() {
  return (
    <main>
      <HeroSection />

      <AnimatedSection animation="fade-up" delay={100}>
        <OurClientsSection />
      </AnimatedSection>

      <AnimatedSection animation="fade-up" delay={1000}>
        <FeaturesSection />
      </AnimatedSection>

      <AnimatedSection animation="fade-up" delay={150}>
        <UseCasesSection />
      </AnimatedSection>

      <AnimatedSection animation="fade-up" delay={100}>
        <PricingSection />
      </AnimatedSection>

      {/* Global chatbot demo modal — triggered from anywhere */}
      <ChatbotDemoModal />
    </main>
  );
}

