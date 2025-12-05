import { Shield, Lock, Eye, Users, FileText, Mail, Phone, MapPin } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-6">
            <Shield className="w-4 h-4 text-[var(--brand-primary)]" />
            <span className="text-sm">Kebijakan Privasi</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl mb-4">
            Kebijakan{' '}
            <span className="bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] bg-clip-text text-transparent">
              Privasi
            </span>
          </h1>
          
          <p className="text-lg text-muted-foreground">
            Terakhir diperbarui: 15 Maret 2025
          </p>
        </div>

        {/* Content */}
        <div className="space-y-12">
          {/* Section 1 */}
          <section className="bg-card border border-border rounded-2xl p-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center flex-shrink-0">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-2xl mb-2">1. Informasi yang Kami Kumpulkan</h2>
                <p className="text-muted-foreground mb-4">
                  Kami mengumpulkan informasi yang Anda berikan secara langsung kepada kami, termasuk:
                </p>
              </div>
            </div>

            <div className="space-y-4 ml-14">
              <div>
                <h3 className="text-lg mb-2">1.1. Informasi yang Anda Berikan:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>Informasi akun (nama, email, nomor telepon)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>Informasi pembayaran (diproses melalui payment gateway yang aman)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>Konten yang Anda unggah atau kirim melalui layanan</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg mb-2">1.2. Informasi yang Kami Kumpulkan Secara Otomatis:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>Data penggunaan layanan dan interaksi</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>Informasi perangkat dan browser</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>Cookies dan teknologi pelacakan serupa</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>Data lokasi (jika Anda mengizinkan)</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="bg-card border border-border rounded-2xl p-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center flex-shrink-0">
                <Eye className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-2xl mb-2">2. Penggunaan Informasi</h2>
                <p className="text-muted-foreground mb-4">
                  Informasi yang kami kumpulkan digunakan untuk:
                </p>
              </div>
            </div>

            <div className="space-y-4 ml-14">
              <div>
                <h3 className="text-lg mb-2">2.1. Tujuan Utama:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>Menyediakan dan meningkatkan layanan kami</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>Personalisasi pengalaman pengguna</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>Mengirim informasi penting tentang layanan</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>Merespons pertanyaan dan permintaan Anda</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg mb-2">2.2. Tujuan Sekunder:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>Analisis dan pengembangan produk</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>Keamanan dan pencegahan penipuan</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>Kepatuhan terhadap kewajiban hukum</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>Pengiriman komunikasi pemasaran (dengan persetujuan)</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="bg-card border border-border rounded-2xl p-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center flex-shrink-0">
                <Lock className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-2xl mb-2">3. Perlindungan Data</h2>
                <p className="text-muted-foreground mb-4">
                  Kami menerapkan langkah-langkah keamanan yang ketat sesuai dengan standar industri untuk melindungi data Anda:
                </p>
              </div>
            </div>

            <div className="space-y-4 ml-14">
              <div>
                <h3 className="text-lg mb-2">3.1. Keamanan Teknis:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>Enkripsi end-to-end untuk semua data sensitif</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>Firewall dan sistem deteksi intrusi</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>Monitoring keamanan 24/7</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>Backup data reguler dengan enkripsi</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg mb-2">3.2. Keamanan Organisasi:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>Akses terbatas berdasarkan prinsip need-to-know</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>Pelatihan keamanan rutin untuk karyawan</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>Audit keamanan berkala</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>Prosedur penanganan insiden keamanan</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="bg-card border border-border rounded-2xl p-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center flex-shrink-0">
                <Users className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-2xl mb-2">4. Berbagi Data</h2>
                <p className="text-muted-foreground mb-4">
                  Kami berkomitmen untuk tidak menjual atau menyewakan data pribadi Anda. Data hanya dibagikan dalam situasi berikut:
                </p>
              </div>
            </div>

            <div className="space-y-4 ml-14">
              <div>
                <h3 className="text-lg mb-2">4.1. Pembagian Data yang Diizinkan:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>Dengan persetujuan eksplisit Anda</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>Untuk memenuhi kewajiban hukum</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>Dengan penyedia layanan yang membantu operasional (dengan perjanjian kerahasiaan)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>Dalam hal merger, akuisisi, atau penjualan aset (dengan pemberitahuan)</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg mb-2">4.2. Perlindungan dalam Pembagian Data:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>Perjanjian pemrosesan data dengan pihak ketiga</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>Evaluasi keamanan mitra bisnis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>Pembatasan penggunaan data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>Hak untuk menghentikan pembagian data</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section className="bg-card border border-border rounded-2xl p-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center flex-shrink-0">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-2xl mb-2">5. Hak Pengguna</h2>
                <p className="text-muted-foreground mb-4">
                  Sesuai dengan peraturan perlindungan data yang berlaku, Anda memiliki hak-hak berikut:
                </p>
              </div>
            </div>

            <div className="space-y-4 ml-14">
              <div>
                <h3 className="text-lg mb-2">5.1. Hak Dasar:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>Hak untuk mengakses data pribadi Anda</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>Hak untuk meminta koreksi data yang tidak akurat</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>Hak untuk meminta penghapusan data ("right to be forgotten")</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>Hak untuk membatasi pemrosesan data</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg mb-2">5.2. Hak Tambahan:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>Hak untuk menolak pemrosesan data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>Hak atas portabilitas data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>Hak untuk mencabut persetujuan</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>Hak untuk mengajukan keluhan kepada otoritas pengawas</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 6 */}
          <section className="bg-card border border-border rounded-2xl p-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center flex-shrink-0">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-2xl mb-2">6. Perubahan Kebijakan</h2>
                <p className="text-muted-foreground mb-4">
                  Kami dapat memperbarui kebijakan privasi ini dari waktu ke waktu untuk mencerminkan perubahan dalam praktik kami atau kewajiban hukum. Kami akan memberitahu Anda tentang perubahan material melalui:
                </p>
              </div>
            </div>

            <div className="ml-14">
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--brand-primary)] mt-1">•</span>
                  <span>Email ke alamat yang terdaftar</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--brand-primary)] mt-1">•</span>
                  <span>Pemberitahuan di platform kami</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--brand-primary)] mt-1">•</span>
                  <span>Pembaruan tanggal efektif kebijakan</span>
                </li>
              </ul>
              <p className="text-muted-foreground mt-4">
                Penggunaan berkelanjutan atas layanan kami setelah perubahan tersebut merupakan persetujuan Anda terhadap kebijakan yang diperbarui.
              </p>
            </div>
          </section>

          {/* Contact Section */}
          <section className="bg-gradient-to-br from-[var(--brand-gradient-start)]/10 to-[var(--brand-gradient-end)]/10 border border-[var(--brand-primary)]/20 rounded-2xl p-8">
            <h2 className="text-2xl mb-6 text-center">Hubungi Kami</h2>
            <p className="text-muted-foreground text-center mb-6">
              Jika Anda memiliki pertanyaan tentang kebijakan privasi ini, silakan hubungi kami:
            </p>
            
            <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
              <div className="flex flex-col items-center gap-2 bg-card rounded-xl p-4 border border-border">
                <Mail className="w-5 h-5 text-[var(--brand-primary)]" />
                <p className="text-xs text-muted-foreground">Email</p>
                <p className="text-sm text-center">support@responpintar.com</p>
              </div>

              <div className="flex flex-col items-center gap-2 bg-card rounded-xl p-4 border border-border">
                <Phone className="w-5 h-5 text-[var(--brand-primary)]" />
                <p className="text-xs text-muted-foreground">Telepon</p>
                <p className="text-sm">+62811-552-477</p>
              </div>

              <div className="flex flex-col items-center gap-2 bg-card rounded-xl p-4 border border-border">
                <MapPin className="w-5 h-5 text-[var(--brand-primary)]" />
                <p className="text-xs text-muted-foreground">Alamat</p>
                <p className="text-sm text-center">Plaza Aminta Jl. TB Simatupang Jakarta Selatan, 12160</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
