import { Target, Rocket, Users, Heart, Zap, Globe, Award, TrendingUp } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-6">
            <Users className="w-4 h-4 text-[var(--brand-primary)]" />
            <span className="text-sm">About Us</span>
          </div>

          <h1 className="text-4xl sm:text-5xl mb-4">
            Digital Transformation for{' '}
            <span className="bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] bg-clip-text text-transparent">
              Customer Service
            </span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            ResponPintar is a technology company focused on AI solutions for various industries, helping businesses solve customer service challenges with innovative and easy-to-use technology.
          </p>
        </div>

        {/* Company Story */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border">
                <Heart className="w-4 h-4 text-[var(--brand-primary)]" />
                <span className="text-sm">Our Story</span>
              </div>

              <h2 className="text-3xl sm:text-4xl">
                Building the Future of{' '}
                <span className="bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] bg-clip-text text-transparent">
                  Customer Service
                </span>
              </h2>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  ResponPintar was founded with the mission of empowering businesses across Southeast Asia with AI technology accessible to everyone. We understand that every industry has unique needs when it comes to serving their customers.
                </p>
                <p>
                  From e-commerce to healthcare, from education to banking — we provide solutions that can be customized to meet the specific needs of every business. Our team consists of AI experts, experienced developers, and customer experience specialists dedicated to creating technology that truly makes a difference.
                </p>
                <p>
                  We don't just provide a platform — we become a partner in your digital transformation journey. With 24/7 support and continuous innovation, we ensure your business stays one step ahead.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] opacity-20 blur-3xl rounded-3xl" />
              <div className="relative bg-card border border-border rounded-2xl p-8 space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-secondary/50 rounded-xl border border-border">
                    <div className="text-3xl bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] bg-clip-text text-transparent mb-2">
                      10K+
                    </div>
                    <p className="text-sm text-muted-foreground">Active Users</p>
                  </div>
                  <div className="text-center p-6 bg-secondary/50 rounded-xl border border-border">
                    <div className="text-3xl bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] bg-clip-text text-transparent mb-2">
                      50M+
                    </div>
                    <p className="text-sm text-muted-foreground">Messages Processed</p>
                  </div>
                  <div className="text-center p-6 bg-secondary/50 rounded-xl border border-border">
                    <div className="text-3xl bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] bg-clip-text text-transparent mb-2">
                      98%
                    </div>
                    <p className="text-sm text-muted-foreground">Customer Satisfaction</p>
                  </div>
                  <div className="text-center p-6 bg-secondary/50 rounded-xl border border-border">
                    <div className="text-3xl bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] bg-clip-text text-transparent mb-2">
                      24/7
                    </div>
                    <p className="text-sm text-muted-foreground">Support Available</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="bg-card border border-border rounded-2xl p-8 hover:shadow-xl hover:shadow-[var(--brand-primary)]/5 transition-all">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-white" />
              </div>

              <h2 className="text-2xl mb-4">Our Vision</h2>

              <p className="text-muted-foreground leading-relaxed">
                To be the leader in digital transformation of customer service in Southeast Asia through sustainable and impactful AI innovation.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-card border border-border rounded-2xl p-8 hover:shadow-xl hover:shadow-[var(--brand-primary)]/5 transition-all">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center mb-6">
                <Rocket className="w-7 h-7 text-white" />
              </div>

              <h2 className="text-2xl mb-4">Our Mission</h2>

              <p className="text-muted-foreground leading-relaxed">
                To empower every business with AI technology that is accessible, efficient, and affordable to improve the quality of their customer service.
              </p>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl mb-4">
              Our{' '}
              <span className="bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] bg-clip-text text-transparent">
                Values
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              The principles that guide every decision and innovation we make
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card border border-border rounded-xl p-6 text-center hover:border-[var(--brand-primary)]/20 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 mx-auto rounded-lg bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg mb-2">Innovation</h3>
              <p className="text-sm text-muted-foreground">
                Continuously innovating to deliver the best solutions
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 text-center hover:border-[var(--brand-primary)]/20 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 mx-auto rounded-lg bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg mb-2">Customer First</h3>
              <p className="text-sm text-muted-foreground">
                Customer satisfaction is our top priority
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 text-center hover:border-[var(--brand-primary)]/20 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 mx-auto rounded-lg bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg mb-2">Excellence</h3>
              <p className="text-sm text-muted-foreground">
                Committed to quality and excellence
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 text-center hover:border-[var(--brand-primary)]/20 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 mx-auto rounded-lg bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg mb-2">Accessibility</h3>
              <p className="text-sm text-muted-foreground">
                Technology accessible to everyone
              </p>
            </div>
          </div>
        </section>

        {/* Industries We Serve */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl mb-4">
              Industries We{' '}
              <span className="bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] bg-clip-text text-transparent">
                Serve
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Custom solutions for various industry sectors
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'E-Commerce',
                desc: 'Quick responses for product inquiries and orders',
                svg: (
                  <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
                    <rect x="6" y="14" width="28" height="20" rx="3" stroke="var(--brand-primary)" strokeWidth="2" fill="var(--brand-primary)" fillOpacity="0.1" />
                    <path d="M14 14V10a6 6 0 0 1 12 0v4" stroke="var(--brand-primary)" strokeWidth="2" strokeLinecap="round" />
                    <circle cx="20" cy="25" r="3" fill="var(--brand-primary)" fillOpacity="0.5" />
                  </svg>
                ),
              },
              {
                title: 'Healthcare',
                desc: '24/7 consultation and health information services',
                svg: (
                  <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
                    <rect x="4" y="4" width="32" height="32" rx="8" stroke="var(--brand-primary)" strokeWidth="2" fill="var(--brand-primary)" fillOpacity="0.1" />
                    <path d="M20 12v16M12 20h16" stroke="var(--brand-primary)" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                ),
              },
              {
                title: 'Education',
                desc: 'Learning support and student administration',
                svg: (
                  <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
                    <path d="M20 8L4 18l16 10 16-10L20 8z" stroke="var(--brand-primary)" strokeWidth="2" fill="var(--brand-primary)" fillOpacity="0.1" />
                    <path d="M10 23v7l10 5 10-5v-7" stroke="var(--brand-primary)" strokeWidth="2" fill="var(--brand-primary)" fillOpacity="0.05" />
                    <line x1="36" y1="18" x2="36" y2="32" stroke="var(--brand-primary)" strokeWidth="2" />
                  </svg>
                ),
              },
              {
                title: 'Banking',
                desc: 'Customer service and financial product information',
                svg: (
                  <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
                    <path d="M20 4L4 14h32L20 4z" stroke="var(--brand-primary)" strokeWidth="2" fill="var(--brand-primary)" fillOpacity="0.1" />
                    <rect x="4" y="32" width="32" height="4" rx="1" fill="var(--brand-primary)" fillOpacity="0.3" />
                    <rect x="9" y="16" width="4" height="16" rx="1" fill="var(--brand-primary)" fillOpacity="0.2" stroke="var(--brand-primary)" strokeWidth="1" />
                    <rect x="18" y="16" width="4" height="16" rx="1" fill="var(--brand-primary)" fillOpacity="0.2" stroke="var(--brand-primary)" strokeWidth="1" />
                    <rect x="27" y="16" width="4" height="16" rx="1" fill="var(--brand-primary)" fillOpacity="0.2" stroke="var(--brand-primary)" strokeWidth="1" />
                  </svg>
                ),
              },
              {
                title: 'Hospitality',
                desc: 'Better booking and guest service experience',
                svg: (
                  <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
                    <rect x="6" y="12" width="28" height="22" rx="3" stroke="var(--brand-primary)" strokeWidth="2" fill="var(--brand-primary)" fillOpacity="0.1" />
                    <rect x="16" y="6" width="8" height="8" rx="2" stroke="var(--brand-primary)" strokeWidth="2" fill="var(--brand-primary)" fillOpacity="0.15" />
                    <path d="M6 20h28" stroke="var(--brand-primary)" strokeWidth="1.5" opacity="0.4" />
                    <rect x="12" y="24" width="6" height="6" rx="1" fill="var(--brand-primary)" fillOpacity="0.2" />
                    <rect x="22" y="24" width="6" height="6" rx="1" fill="var(--brand-primary)" fillOpacity="0.2" />
                  </svg>
                ),
              },
              {
                title: 'Technology',
                desc: 'Technical support and user onboarding',
                svg: (
                  <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
                    <rect x="10" y="4" width="20" height="32" rx="4" stroke="var(--brand-primary)" strokeWidth="2" fill="var(--brand-primary)" fillOpacity="0.1" />
                    <line x1="10" y1="10" x2="30" y2="10" stroke="var(--brand-primary)" strokeWidth="1.5" opacity="0.3" />
                    <line x1="10" y1="30" x2="30" y2="30" stroke="var(--brand-primary)" strokeWidth="1.5" opacity="0.3" />
                    <circle cx="20" cy="33" r="1.5" fill="var(--brand-primary)" fillOpacity="0.5" />
                    <path d="M16 18l3 3 5-6" stroke="var(--brand-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ),
              },
            ].map((industry, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover:border-[var(--brand-primary)]/20 hover:shadow-lg transition-all"
              >
                <div className="mb-4">{industry.svg}</div>
                <h3 className="text-lg mb-2">{industry.title}</h3>
                <p className="text-sm text-muted-foreground">{industry.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] rounded-2xl p-12 text-center text-white">
          <TrendingUp className="w-12 h-12 mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl mb-4">
            Ready to Transform Your Customer Service?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of businesses that have experienced the benefits of AI technology from ResponPintar
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-[var(--brand-primary)] rounded-lg hover:bg-gray-100 transition-all hover:scale-105">
              <a href="https://wa.me/6282189885080?text=Hello,%20I%20got%20information%20from%20the%20ResponPintar%20website.%20May%20I%20know%20more%20about%20the%20application?" target="_blank" rel="noopener noreferrer">Contact Sales</a>
            </button>
            <a href="/demo" className="px-8 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-lg hover:bg-white/20 transition-all inline-block">
              View Demo
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
