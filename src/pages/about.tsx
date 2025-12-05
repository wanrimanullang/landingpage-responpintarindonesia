import { Target, Rocket, Users, Heart, Zap, Globe, Award, TrendingUp } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-6">
            <Users className="w-4 h-4 text-[var(--brand-primary)]" />
            <span className="text-sm">Tentang Kami</span>
          </div>

          <h1 className="text-4xl sm:text-5xl mb-4">
            Transformasi Digital untuk{' '}
            <span className="bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] bg-clip-text text-transparent">
              Layanan Pelanggan
            </span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            ResponPintar adalah perusahaan teknologi yang berfokus pada solusi AI untuk berbagai macam industri, membantu bisnis menyelesaikan tantangan layanan pelanggan dengan teknologi yang inovatif dan mudah digunakan.
          </p>
        </div>

        {/* Company Story */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border">
                <Heart className="w-4 h-4 text-[var(--brand-primary)]" />
                <span className="text-sm">Cerita Kami</span>
              </div>

              <h2 className="text-3xl sm:text-4xl">
                Membangun Masa Depan{' '}
                <span className="bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] bg-clip-text text-transparent">
                  Customer Service
                </span>
              </h2>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  ResponPintar didirikan dengan misi untuk memberdayakan bisnis di seluruh Asia Tenggara dengan teknologi AI yang dapat diakses oleh semua kalangan. Kami memahami bahwa setiap industri memiliki kebutuhan unik dalam melayani pelanggan mereka.
                </p>
                <p>
                  Dari e-commerce hingga layanan kesehatan, dari pendidikan hingga perbankan - kami menyediakan solusi yang dapat disesuaikan dengan kebutuhan spesifik setiap bisnis. Tim kami terdiri dari para ahli AI, pengembang berpengalaman, dan spesialis customer experience yang berdedikasi untuk menciptakan teknologi yang benar-benar membuat perbedaan.
                </p>
                <p>
                  Kami tidak hanya menyediakan platform, tetapi menjadi partner dalam perjalanan transformasi digital Anda. Dengan dukungan 24/7 dan terus berinovasi, kami memastikan bisnis Anda selalu selangkah lebih maju.
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

              <h2 className="text-2xl mb-4">Visi Kami</h2>

              <p className="text-muted-foreground leading-relaxed">
                Menjadi pemimpin dalam transformasi digital layanan pelanggan di Asia Tenggara melalui inovasi AI yang berkelanjutan dan bermanfaat.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-card border border-border rounded-2xl p-8 hover:shadow-xl hover:shadow-[var(--brand-primary)]/5 transition-all">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center mb-6">
                <Rocket className="w-7 h-7 text-white" />
              </div>

              <h2 className="text-2xl mb-4">Misi Kami</h2>

              <p className="text-muted-foreground leading-relaxed">
                Memberdayakan setiap bisnis dengan teknologi AI yang mudah diakses, efisien, dan terjangkau untuk meningkatkan kualitas layanan pelanggan mereka.
              </p>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl mb-4">
              Nilai-Nilai{' '}
              <span className="bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] bg-clip-text text-transparent">
                Kami
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Prinsip yang memandu setiap keputusan dan inovasi kami
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card border border-border rounded-xl p-6 text-center hover:border-[var(--brand-primary)]/20 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 mx-auto rounded-lg bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg mb-2">Inovasi</h3>
              <p className="text-sm text-muted-foreground">
                Terus berinovasi untuk memberikan solusi terbaik
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 text-center hover:border-[var(--brand-primary)]/20 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 mx-auto rounded-lg bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg mb-2">Customer First</h3>
              <p className="text-sm text-muted-foreground">
                Kepuasan pelanggan adalah prioritas utama kami
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 text-center hover:border-[var(--brand-primary)]/20 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 mx-auto rounded-lg bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg mb-2">Excellence</h3>
              <p className="text-sm text-muted-foreground">
                Komitmen pada kualitas dan keunggulan
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 text-center hover:border-[var(--brand-primary)]/20 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 mx-auto rounded-lg bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg mb-2">Accessibility</h3>
              <p className="text-sm text-muted-foreground">
                Teknologi yang mudah diakses semua orang
              </p>
            </div>
          </div>
        </section>

        {/* Industries We Serve */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl mb-4">
              Industri yang{' '}
              <span className="bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] bg-clip-text text-transparent">
                Kami Layani
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Solusi khusus untuk berbagai sektor industri
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '🛒', title: 'E-Commerce', desc: 'Respons cepat untuk pertanyaan produk dan pesanan' },
              { icon: '🏥', title: 'Healthcare', desc: 'Layanan konsultasi dan informasi kesehatan 24/7' },
              { icon: '🎓', title: 'Pendidikan', desc: 'Dukungan pembelajaran dan administrasi siswa' },
              { icon: '🏦', title: 'Perbankan', desc: 'Layanan nasabah dan informasi produk finansial' },
              { icon: '🏨', title: 'Hospitality', desc: 'Pemesanan dan layanan tamu yang lebih baik' },
              { icon: '📱', title: 'Teknologi', desc: 'Support teknis dan onboarding pengguna' },
            ].map((industry, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover:border-[var(--brand-primary)]/20 hover:shadow-lg transition-all"
              >
                <div className="text-4xl mb-4">{industry.icon}</div>
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
            Siap Transformasi Layanan Pelanggan Anda?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Bergabunglah dengan ribuan bisnis yang telah merasakan manfaat teknologi AI dari ResponPintar
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-[var(--brand-primary)] rounded-lg hover:bg-gray-100 transition-all hover:scale-105">
              <a href="https://wa.me/620811552477?text=Halo,%20saya%20mendapatkan%20informasi%20dari%20website%20ResponPintar.%20Apakah%20saya%20boleh%20tahu%20informasi%20aplikasinya?" target="_blank" rel="noopener noreferrer">Hubungi Sales</a>
            </button>
            {/* <button className="px-8 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-lg hover:bg-white/20 transition-all">
              Lihat Demo
            </button> */}
          </div>
        </section>
      </div>
    </main>
  );
}
