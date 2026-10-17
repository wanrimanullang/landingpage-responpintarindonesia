import { FileText, Scale, DollarSign, Award, AlertCircle, XCircle, RefreshCw, Gavel, Mail, Phone, MapPin } from 'lucide-react';
import BackgroundScene from '../components/showcase/BackgroundScene';

export default function TermsPage() {
  return (
    <main className="landing-subpage bg-[#0B0C0E] text-[#E9EBEF] relative font-sans selection:bg-[#8FE3B0]/20 selection:text-[#8FE3B0]">
      {/* Background Interactive Particle Field & Mesh */}
      <BackgroundScene />

      <div className="landing-container relative z-10">
        <div className="max-w-4xl mx-auto space-y-12 sm:space-y-14">
        {/* Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[rgba(244,245,247,0.12)] bg-[#16181D]/80 text-[#AEB4BD] text-xs font-mono tracking-wider uppercase mb-6 backdrop-blur-md">
            <Scale className="w-3.5 h-3.5 text-[#8FE3B0]" />
            <span>Ketentuan Layanan & Kontrak</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#E9EBEF] mb-4">
            Syarat & <span className="chrome-text">Ketentuan</span>
          </h1>

          <p className="text-sm font-mono text-[#636B76] max-w-xl mx-auto">
            Terakhir diperbarui: 15 Maret 2025 • PT Respon Pintar Indonesia (Platform Omnichannel Customer Service)
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-8 sm:space-y-10">
          {/* Section 1 */}
          <section className="bg-[#111214]/90 border border-[rgba(244,245,247,0.08)] backdrop-blur-md rounded-2xl p-6 sm:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.4)] transition-all hover:border-[rgba(244,245,247,0.16)]">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#16181D] border border-[rgba(244,245,247,0.12)] flex items-center justify-center flex-shrink-0 text-[#8FE3B0]">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#E9EBEF] mb-2">1. Ketentuan Umum</h2>
                <p className="text-[#AEB4BD] text-sm sm:text-base leading-relaxed">
                  Dengan mendaftar, mengakses, atau menggunakan platform ResponPintar ("Layanan"), Anda menyatakan setuju untuk terikat secara hukum dengan Syarat & Ketentuan ini ("Ketentuan"). Ketentuan ini merupakan perjanjian yang mengikat antara Anda atau entitas bisnis yang Anda wakili dengan PT Respon Pintar Indonesia ("Kami").
                </p>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="bg-[#111214]/90 border border-[rgba(244,245,247,0.08)] backdrop-blur-md rounded-2xl p-6 sm:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.4)] transition-all hover:border-[rgba(244,245,247,0.16)]">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#16181D] border border-[rgba(244,245,247,0.12)] flex items-center justify-center flex-shrink-0 text-[#8FE3B0]">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#E9EBEF] mb-2">2. Definisi Istilah</h2>
                <p className="text-[#AEB4BD] text-sm sm:text-base leading-relaxed">
                  Dalam Syarat dan Ketentuan ini, istilah-istilah berikut memiliki arti:
                </p>
              </div>
            </div>

            <div className="space-y-3 sm:ml-14">
              <div className="bg-[#16181D]/60 border border-[rgba(244,245,247,0.06)] rounded-xl p-4 text-sm text-[#AEB4BD] leading-relaxed">
                <strong className="text-[#E9EBEF] font-semibold">"Layanan"</strong> mengacu pada seluruh ekosistem platform ResponPintar, mencakup dashboard omnichannel, antarmuka agen CS terpadu, webhook, dan integrasi API pesan.
              </div>
              <div className="bg-[#16181D]/60 border border-[rgba(244,245,247,0.06)] rounded-xl p-4 text-sm text-[#AEB4BD] leading-relaxed">
                <strong className="text-[#E9EBEF] font-semibold">"Pengguna / Pelanggan"</strong> adalah perorangan, perusahaan, atau instansi yang mendaftarkan akun untuk mengelola customer service via ResponPintar.
              </div>
              <div className="bg-[#16181D]/60 border border-[rgba(244,245,247,0.06)] rounded-xl p-4 text-sm text-[#AEB4BD] leading-relaxed">
                <strong className="text-[#E9EBEF] font-semibold">"Data Pelanggan"</strong> adalah seluruh konten pesan, nomor kontak, histori obrolan, dan informasi kontak yang masuk melalui saluran omnichannel Anda.
              </div>
              <div className="bg-[#16181D]/60 border border-[rgba(244,245,247,0.06)] rounded-xl p-4 text-sm text-[#AEB4BD] leading-relaxed">
                <strong className="text-[#E9EBEF] font-semibold">"Kanal Terhubung"</strong> meliputi WhatsApp Business API resmi, Instagram Direct Message, Telegram, dan Live Chat web widget.
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="bg-[#111214]/90 border border-[rgba(244,245,247,0.08)] backdrop-blur-md rounded-2xl p-6 sm:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.4)] transition-all hover:border-[rgba(244,245,247,0.16)]">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#16181D] border border-[rgba(244,245,247,0.12)] flex items-center justify-center flex-shrink-0 text-[#8FE3B0]">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#E9EBEF] mb-2">3. Ketentuan Penggunaan Layanan Omnichannel</h2>
              </div>
            </div>

            <div className="space-y-6 sm:ml-14">
              <div className="bg-[#16181D]/60 border border-[rgba(244,245,247,0.06)] rounded-xl p-5">
                <h3 className="text-base font-semibold text-[#E9EBEF] mb-3">3.1. Kewajiban Pengguna:</h3>
                <ul className="space-y-2.5 text-sm sm:text-base text-[#AEB4BD]">
                  <li className="flex items-start gap-3">
                    <span className="text-[#8FE3B0] mt-1 font-bold">•</span>
                    <span>Menjaga kerahasiaan kredensial login akun supervisor maupun agen CS Anda</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#8FE3B0] mt-1 font-bold">•</span>
                    <span>Mematuhi kebijakan penggunaan resmi dari Meta (WhatsApp Business Commerce Policy & Terms)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#8FE3B0] mt-1 font-bold">•</span>
                    <span>Hanya mengirimkan pesan broadcast (opt-in) kepada pelanggan yang telah memberikan izin</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#16181D]/60 border border-[rgba(244,245,247,0.06)] rounded-xl p-5">
                <h3 className="text-base font-semibold text-[#E9EBEF] mb-3">3.2. Larangan & Pembatasan:</h3>
                <ul className="space-y-2.5 text-sm sm:text-base text-[#AEB4BD]">
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1 font-bold">•</span>
                    <span>Dilarang keras menyebarkan pesan spam massal tanpa izin, phishing, perjudian, atau konten melanggar UU ITE</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1 font-bold">•</span>
                    <span>Dilarang melakukan reverse engineering, decompile, atau merusak stabilitas server API ResponPintar</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="bg-[#111214]/90 border border-[rgba(244,245,247,0.08)] backdrop-blur-md rounded-2xl p-6 sm:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.4)] transition-all hover:border-[rgba(244,245,247,0.16)]">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#16181D] border border-[rgba(244,245,247,0.12)] flex items-center justify-center flex-shrink-0 text-[#8FE3B0]">
                <DollarSign className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#E9EBEF] mb-2">4. Biaya Langganan & Pembayaran</h2>
              </div>
            </div>

            <div className="space-y-6 sm:ml-14">
              <div className="bg-[#16181D]/60 border border-[rgba(244,245,247,0.06)] rounded-xl p-5">
                <h3 className="text-base font-semibold text-[#E9EBEF] mb-3">4.1. Ketentuan Tagihan:</h3>
                <ul className="space-y-2.5 text-sm sm:text-base text-[#AEB4BD]">
                  <li className="flex items-start gap-3">
                    <span className="text-[#8FE3B0] mt-1 font-bold">•</span>
                    <span>Paket langganan omnichannel dibayarkan di muka per bulan atau per tahun sesuai tier yang dipilih</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#8FE3B0] mt-1 font-bold">•</span>
                    <span>Biaya percakapan WhatsApp Business API resmi (Meta conversation fee) ditagihkan sesuai tarif resmi Meta tanpa markup tersembunyi</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#8FE3B0] mt-1 font-bold">•</span>
                    <span>Semua tagihan disajikan dalam mata uang Rupiah (IDR) dan mencantumkan faktur pajak resmi</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#16181D]/60 border border-[rgba(244,245,247,0.06)] rounded-xl p-5">
                <h3 className="text-base font-semibold text-[#E9EBEF] mb-3">4.2. Kebijakan Pembatalan & Pengembalian Dana:</h3>
                <ul className="space-y-2.5 text-sm sm:text-base text-[#AEB4BD]">
                  <li className="flex items-start gap-3">
                    <span className="text-[#8FE3B0] mt-1 font-bold">•</span>
                    <span>Pengguna dapat membatalkan langganan kapan saja sebelum siklus tagihan berikutnya dimulai</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#8FE3B0] mt-1 font-bold">•</span>
                    <span>Sisa kuota atau sisa periode aktif yang belum terpakai bersifat non-refundable sesuai ketentuan industri SaaS</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section className="bg-[#111214]/90 border border-[rgba(244,245,247,0.08)] backdrop-blur-md rounded-2xl p-6 sm:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.4)] transition-all hover:border-[rgba(244,245,247,0.16)]">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#16181D] border border-[rgba(244,245,247,0.12)] flex items-center justify-center flex-shrink-0 text-[#8FE3B0]">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#E9EBEF] mb-2">5. Hak Kekayaan Intelektual</h2>
              </div>
            </div>

            <div className="space-y-4 sm:ml-14">
              <div className="bg-[#16181D]/60 border border-[rgba(244,245,247,0.06)] rounded-xl p-5">
                <ul className="space-y-2.5 text-sm sm:text-base text-[#AEB4BD]">
                  <li className="flex items-start gap-3">
                    <span className="text-[#8FE3B0] mt-1 font-bold">•</span>
                    <span>Hak cipta, source code sistem omnichannel, merek dagang, dan logo ResponPintar adalah milik eksklusif PT Respon Pintar Indonesia</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#8FE3B0] mt-1 font-bold">•</span>
                    <span>Anda tetap memiliki kepemilikan mutlak 100% atas seluruh Data Pelanggan dan histori percakapan bisnis Anda</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 6 */}
          <section className="bg-[#111214]/90 border border-[rgba(244,245,247,0.08)] backdrop-blur-md rounded-2xl p-6 sm:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.4)] transition-all hover:border-[rgba(244,245,247,0.16)]">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#16181D] border border-[rgba(244,245,247,0.12)] flex items-center justify-center flex-shrink-0 text-[#8FE3B0]">
                <AlertCircle className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#E9EBEF] mb-2">6. Batasan Tanggung Jawab & Jaminan SLA</h2>
              </div>
            </div>

            <div className="space-y-4 sm:ml-14">
              <div className="bg-[#16181D]/60 border border-[rgba(244,245,247,0.06)] rounded-xl p-5">
                <ul className="space-y-2.5 text-sm sm:text-base text-[#AEB4BD]">
                  <li className="flex items-start gap-3">
                    <span className="text-[#8FE3B0] mt-1 font-bold">•</span>
                    <span>Kami memberikan komitmen uptime server backend sebesar 99.9%</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#8FE3B0] mt-1 font-bold">•</span>
                    <span>ResponPintar tidak bertanggung jawab atas gangguan transmisi pesan yang disebabkan oleh downtime server pihak ketiga Meta/WhatsApp Cloud API, Telegram, atau force majeure</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 7 */}
          <section className="bg-[#111214]/90 border border-[rgba(244,245,247,0.08)] backdrop-blur-md rounded-2xl p-6 sm:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.4)] transition-all hover:border-[rgba(244,245,247,0.16)]">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#16181D] border border-[rgba(244,245,247,0.12)] flex items-center justify-center flex-shrink-0 text-[#8FE3B0]">
                <XCircle className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#E9EBEF] mb-2">7. Penghentian & Penghapusan Akun</h2>
              </div>
            </div>

            <div className="space-y-4 sm:ml-14">
              <div className="bg-[#16181D]/60 border border-[rgba(244,245,247,0.06)] rounded-xl p-5">
                <p className="text-sm sm:text-base text-[#AEB4BD] leading-relaxed mb-4">
                  Pengguna berhak mengajukan penghapusan akun kapan saja. Penghapusan akun akan memusnahkan seluruh token integrasi WhatsApp dan histori percakapan permanen sesuai prosedur yang tercantum di <a href="/delete-account" className="underline underline-offset-4 text-[#E9EBEF] hover:text-[#8FE3B0] transition">Halaman Penghapusan Akun</a>.
                </p>
              </div>
            </div>
          </section>

          {/* Section 8 */}
          <section className="bg-[#111214]/90 border border-[rgba(244,245,247,0.08)] backdrop-blur-md rounded-2xl p-6 sm:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.4)] transition-all hover:border-[rgba(244,245,247,0.16)]">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#16181D] border border-[rgba(244,245,247,0.12)] flex items-center justify-center flex-shrink-0 text-[#8FE3B0]">
                <Gavel className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#E9EBEF] mb-2">8. Hukum yang Berlaku & Yurisdiksi</h2>
                <p className="text-[#AEB4BD] text-sm sm:text-base leading-relaxed">
                  Syarat & Ketentuan ini diatur dan ditafsirkan sesuai dengan hukum Republik Indonesia. Setiap sengketa yang timbul akan diselesaikan terlebih dahulu melalui musyawarah mufakat, atau melalui yurisdiksi Pengadilan Negeri Jakarta Selatan.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="bg-[#111214]/90 border border-[rgba(244,245,247,0.12)] backdrop-blur-md rounded-2xl p-8 sm:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.4)]">
            <h2 className="text-2xl font-bold mb-3 text-center text-[#E9EBEF]">Kontak Resmi Bantuan Legal</h2>
            <p className="text-sm sm:text-base text-[#AEB4BD] text-center mb-8 max-w-xl mx-auto">
              Untuk pertanyaan mengenai ketentuan layanan atau penandatanganan Perjanjian Kerahasiaan (NDA) enterprise:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
              <div className="flex flex-col items-center gap-2 bg-[#16181D]/80 rounded-xl p-5 border border-[rgba(244,245,247,0.08)] text-center">
                <Mail className="w-5 h-5 text-[#8FE3B0]" />
                <p className="text-xs font-mono uppercase tracking-wider text-[#636B76]">Email Legal</p>
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
