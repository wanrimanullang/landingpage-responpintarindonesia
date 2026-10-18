import { Shield, Lock, Eye, Users, FileText, Mail, Phone, MapPin } from 'lucide-react';
import BackgroundScene from '../components/showcase/BackgroundScene';

export default function PrivacyPage() {
  return (
    <main className="landing-subpage bg-[#0B0C0E] text-[#E9EBEF] relative font-sans selection:bg-[#8FE3B0]/20 selection:text-[#8FE3B0]">
      {/* Background Interactive Particle Field & Mesh */}
      <BackgroundScene />

      <div className="landing-container relative z-10">
        <div className="max-w-4xl mx-auto space-y-12 sm:space-y-14">
        {/* Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[rgba(244,245,247,0.12)] bg-[#16181D]/80 text-[#AEB4BD] text-xs font-mono tracking-wider uppercase mb-6 backdrop-blur-md">
            <Shield className="w-3.5 h-3.5 text-[#8FE3B0]" />
            <span>Legal & Privacy Compliance</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#E9EBEF] mb-4">
            Kebijakan <span className="chrome-text">Privasi</span>
          </h1>

          <p className="text-sm font-mono text-[#636B76] max-w-xl mx-auto">
            Terakhir diperbarui: 15 Maret 2025 • PT Respon Pintar Indonesia (Omnichannel Customer Service)
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-8 sm:space-y-10">
          {/* Section 1 */}
          <section className="bg-[#111214]/90 border border-[rgba(244,245,247,0.08)] backdrop-blur-md rounded-2xl p-6 sm:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.4)] transition-all hover:border-[rgba(244,245,247,0.16)]">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#16181D] border border-[rgba(244,245,247,0.12)] flex items-center justify-center flex-shrink-0 text-[#8FE3B0]">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#E9EBEF] mb-2">1. Informasi yang Kami Kumpulkan</h2>
                <p className="text-[#AEB4BD] text-sm sm:text-base leading-relaxed">
                  Kami mengumpulkan data yang Anda berikan secara langsung saat menggunakan platform omnichannel Respon Pintar:
                </p>
              </div>
            </div>

            <div className="space-y-6 sm:ml-14">
              <div className="bg-[#16181D]/60 border border-[rgba(244,245,247,0.06)] rounded-xl p-5">
                <h3 className="text-base font-semibold text-[#E9EBEF] mb-3">1.1. Informasi yang Anda Berikan:</h3>
                <ul className="space-y-2.5 text-sm sm:text-base text-[#AEB4BD]">
                  <li className="flex items-start gap-3">
                    <span className="text-[#8FE3B0] mt-1 font-bold">•</span>
                    <span>Informasi akun bisnis (nama perusahaan, email kerja, nomor telepon resmi)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#8FE3B0] mt-1 font-bold">•</span>
                    <span>Informasi pembayaran dan tagihan (diproses melalui payment gateway berlisensi PCI-DSS)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#8FE3B0] mt-1 font-bold">•</span>
                    <span>Pesan, berkas, dan data kontak pelanggan yang dikelola melalui integrasi WhatsApp, Instagram, Telegram, dan Live Chat</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#16181D]/60 border border-[rgba(244,245,247,0.06)] rounded-xl p-5">
                <h3 className="text-base font-semibold text-[#E9EBEF] mb-3">1.2. Informasi yang Dikumpulkan Secara Otomatis:</h3>
                <ul className="space-y-2.5 text-sm sm:text-base text-[#AEB4BD]">
                  <li className="flex items-start gap-3">
                    <span className="text-[#8FE3B0] mt-1 font-bold">•</span>
                    <span>Log aktivitas platform, waktu respon agen (SLA), dan metrik interaksi percakapan</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#8FE3B0] mt-1 font-bold">•</span>
                    <span>Data perangkat dan browser agen CS untuk keperluan audit keamanan</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#8FE3B0] mt-1 font-bold">•</span>
                    <span>Kuki sesi (session cookies) untuk otentikasi login aman</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="bg-[#111214]/90 border border-[rgba(244,245,247,0.08)] backdrop-blur-md rounded-2xl p-6 sm:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.4)] transition-all hover:border-[rgba(244,245,247,0.16)]">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#16181D] border border-[rgba(244,245,247,0.12)] flex items-center justify-center flex-shrink-0 text-[#8FE3B0]">
                <Eye className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#E9EBEF] mb-2">2. Penggunaan Informasi</h2>
                <p className="text-[#AEB4BD] text-sm sm:text-base leading-relaxed">
                  Informasi yang kami kumpulkan digunakan secara eksklusif untuk tujuan operasional omnichannel:
                </p>
              </div>
            </div>

            <div className="space-y-6 sm:ml-14">
              <div className="bg-[#16181D]/60 border border-[rgba(244,245,247,0.06)] rounded-xl p-5">
                <h3 className="text-base font-semibold text-[#E9EBEF] mb-3">2.1. Tujuan Utama Layanan:</h3>
                <ul className="space-y-2.5 text-sm sm:text-base text-[#AEB4BD]">
                  <li className="flex items-start gap-3">
                    <span className="text-[#8FE3B0] mt-1 font-bold">•</span>
                    <span>Menyalurkan pesan real-time dari WhatsApp, Instagram, Telegram ke inbox terpadu agen CS Anda</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#8FE3B0] mt-1 font-bold">•</span>
                    <span>Menjalankan auto-assignment tiket pesan ke tim customer service yang tersedia</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#8FE3B0] mt-1 font-bold">•</span>
                    <span>Menampilkan profil riwayat transaksi pelanggan (CRM sync) kepada agen saat percakapan berlangsung</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#8FE3B0] mt-1 font-bold">•</span>
                    <span>Menyediakan analitik performa CS dan laporan Service Level Agreement (SLA)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#16181D]/60 border border-[rgba(244,245,247,0.06)] rounded-xl p-5">
                <h3 className="text-base font-semibold text-[#E9EBEF] mb-3">2.2. Keamanan & Kepatuhan:</h3>
                <ul className="space-y-2.5 text-sm sm:text-base text-[#AEB4BD]">
                  <li className="flex items-start gap-3">
                    <span className="text-[#8FE3B0] mt-1 font-bold">•</span>
                    <span>Pencegahan penipuan, akses ilegal, atau serangan siber ke sistem backend omnichannel</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#8FE3B0] mt-1 font-bold">•</span>
                    <span>Kepatuhan terhadap regulasi UU Perlindungan Data Pribadi (UU PDP No. 27/2022)</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="bg-[#111214]/90 border border-[rgba(244,245,247,0.08)] backdrop-blur-md rounded-2xl p-6 sm:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.4)] transition-all hover:border-[rgba(244,245,247,0.16)]">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#16181D] border border-[rgba(244,245,247,0.12)] flex items-center justify-center flex-shrink-0 text-[#8FE3B0]">
                <Lock className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#E9EBEF] mb-2">3. Perlindungan & Keamanan Data</h2>
                <p className="text-[#AEB4BD] text-sm sm:text-base leading-relaxed">
                  Kami menerapkan standar keamanan data enterprise untuk menjaga kerahasiaan percakapan pelanggan bisnis Anda:
                </p>
              </div>
            </div>

            <div className="space-y-6 sm:ml-14">
              <div className="bg-[#16181D]/60 border border-[rgba(244,245,247,0.06)] rounded-xl p-5">
                <h3 className="text-base font-semibold text-[#E9EBEF] mb-3">3.1. Keamanan Teknis:</h3>
                <ul className="space-y-2.5 text-sm sm:text-base text-[#AEB4BD]">
                  <li className="flex items-start gap-3">
                    <span className="text-[#8FE3B0] mt-1 font-bold">•</span>
                    <span>Enkripsi TLS 1.3 saat transmisi data (in-transit) dan enkripsi AES-256 untuk penyimpanan (at-rest)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#8FE3B0] mt-1 font-bold">•</span>
                    <span>Isolasi database multi-tenant sehingga data percakapan antar perusahaan tidak pernah bercampur</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#8FE3B0] mt-1 font-bold">•</span>
                    <span>Pemantauan keamanan 24/7 dan pencadangan data otomatis terenkripsi harian</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#16181D]/60 border border-[rgba(244,245,247,0.06)] rounded-xl p-5">
                <h3 className="text-base font-semibold text-[#E9EBEF] mb-3">3.2. Akses & Tata Kelola:</h3>
                <ul className="space-y-2.5 text-sm sm:text-base text-[#AEB4BD]">
                  <li className="flex items-start gap-3">
                    <span className="text-[#8FE3B0] mt-1 font-bold">•</span>
                    <span>Akses internal berbasis Role-Based Access Control (RBAC) dengan prinsip need-to-know ketat</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#8FE3B0] mt-1 font-bold">•</span>
                    <span>Audit keamanan berkala dan peninjauan log akses secara berkala</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="bg-[#111214]/90 border border-[rgba(244,245,247,0.08)] backdrop-blur-md rounded-2xl p-6 sm:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.4)] transition-all hover:border-[rgba(244,245,247,0.16)]">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#16181D] border border-[rgba(244,245,247,0.12)] flex items-center justify-center flex-shrink-0 text-[#8FE3B0]">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#E9EBEF] mb-2">4. Pembagian Data ke Pihak Ketiga</h2>
                <p className="text-[#AEB4BD] text-sm sm:text-base leading-relaxed">
                  Kami berkomitmen penuh <strong>tidak pernah menjual atau menyewakan</strong> data bisnis maupun pesan pelanggan Anda kepada pihak mana pun. Data hanya dibagikan untuk kepentingan teknis:
                </p>
              </div>
            </div>

            <div className="space-y-6 sm:ml-14">
              <div className="bg-[#16181D]/60 border border-[rgba(244,245,247,0.06)] rounded-xl p-5">
                <ul className="space-y-2.5 text-sm sm:text-base text-[#AEB4BD]">
                  <li className="flex items-start gap-3">
                    <span className="text-[#8FE3B0] mt-1 font-bold">•</span>
                    <span>Penyedia Channel Resmi (Meta Cloud API untuk WhatsApp & Instagram DM, Telegram Bot API) sesuai kebutuhan transmisi pesan</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#8FE3B0] mt-1 font-bold">•</span>
                    <span>Penyedia Infrastruktur Cloud Berstandar ISO 27001 / SOC 2 dengan perjanjian kerahasiaan ketat</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#8FE3B0] mt-1 font-bold">•</span>
                    <span>Kewajiban hukum resmi dari instansi pemerintah yang berwenang sesuai undang-undang Republik Indonesia</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section className="bg-[#111214]/90 border border-[rgba(244,245,247,0.08)] backdrop-blur-md rounded-2xl p-6 sm:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.4)] transition-all hover:border-[rgba(244,245,247,0.16)]">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#16181D] border border-[rgba(244,245,247,0.12)] flex items-center justify-center flex-shrink-0 text-[#8FE3B0]">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#E9EBEF] mb-2">5. Hak Pemilik Data (Data Rights)</h2>
                <p className="text-[#AEB4BD] text-sm sm:text-base leading-relaxed">
                  Sesuai UU PDP Republik Indonesia, pengguna platform dan pelanggan memiliki hak penuh atas data pribadinya:
                </p>
              </div>
            </div>

            <div className="space-y-4 sm:ml-14">
              <div className="bg-[#16181D]/60 border border-[rgba(244,245,247,0.06)] rounded-xl p-5">
                <ul className="space-y-2.5 text-sm sm:text-base text-[#AEB4BD]">
                  <li className="flex items-start gap-3">
                    <span className="text-[#8FE3B0] mt-1 font-bold">•</span>
                    <span>Hak untuk mengakses dan meminta salinan ekspor data riwayat kontak</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#8FE3B0] mt-1 font-bold">•</span>
                    <span>Hak untuk memperbarui dan mengoreksi data profil yang tidak akurat</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#8FE3B0] mt-1 font-bold">•</span>
                    <span>Hak untuk mengajukan penghapusan akun dan pemusnahan data permanen melalui formulir khusus di <a href="/delete-account" className="underline underline-offset-4 text-[#E9EBEF] hover:text-[#8FE3B0] transition">Halaman Hapus Akun</a></span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="bg-[#111214]/90 border border-[rgba(244,245,247,0.12)] backdrop-blur-md rounded-2xl p-8 sm:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.4)]">
            <h2 className="text-2xl font-bold mb-3 text-center text-[#E9EBEF]">Kontak Petugas Perlindungan Data</h2>
            <p className="text-sm sm:text-base text-[#AEB4BD] text-center mb-8 max-w-xl mx-auto">
              Jika Anda memiliki pertanyaan mengenai kebijakan privasi atau ingin menjalankan hak atas data Anda, hubungi tim kami:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
              <div className="flex flex-col items-center gap-2 bg-[#16181D]/80 rounded-xl p-5 border border-[rgba(244,245,247,0.08)] text-center">
                <Mail className="w-5 h-5 text-[#8FE3B0]" />
                <p className="text-xs font-mono uppercase tracking-wider text-[#636B76]">Email</p>
                <a href="mailto:support@responpintar.com" className="text-sm text-[#E9EBEF] hover:underline">
                  support@responpintar.com
                </a>
              </div>

              <div className="flex flex-col items-center gap-2 bg-[#16181D]/80 rounded-xl p-5 border border-[rgba(244,245,247,0.08)] text-center">
                <Phone className="w-5 h-5 text-[#8FE3B0]" />
                <p className="text-xs font-mono uppercase tracking-wider text-[#636B76]">WhatsApp Support</p>
                <a href="https://wa.me/6282189885080" target="_blank" rel="noopener noreferrer" className="text-sm text-[#E9EBEF] hover:underline">
                  +62 821-8988-5080
                </a>
              </div>

              <div className="flex flex-col items-center gap-2 bg-[#16181D]/80 rounded-xl p-5 border border-[rgba(244,245,247,0.08)] text-center">
                <MapPin className="w-5 h-5 text-[#8FE3B0]" />
                <p className="text-xs font-mono uppercase tracking-wider text-[#636B76]">Kantor</p>
                <p className="text-xs sm:text-sm text-[#AEB4BD] text-center">Plaza Aminta Lt. 5, Jl. TB Simatupang, Jakarta Selatan</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </main>
);
}
