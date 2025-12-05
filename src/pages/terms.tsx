import { FileText, Scale, DollarSign, Award, AlertCircle, XCircle, RefreshCw, Gavel, Mail, Phone, MapPin } from 'lucide-react';

export default function TermsPage() {
  return (
    <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-6">
            <Scale className="w-4 h-4 text-[var(--brand-primary)]" />
            <span className="text-sm">Syarat dan Ketentuan</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl mb-4">
            Syarat dan{' '}
            <span className="bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] bg-clip-text text-transparent">
              Ketentuan
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
                <h2 className="text-2xl mb-2">1. Ketentuan Umum</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Dengan menggunakan layanan ResponPintar ("Layanan"), Anda menyetujui untuk terikat dengan syarat dan ketentuan ini ("Ketentuan"). Ketentuan ini merupakan perjanjian yang mengikat secara hukum antara Anda dan PT ResponPintar Indonesia ("Kami"). Jika Anda tidak setuju dengan Ketentuan ini, mohon untuk tidak menggunakan Layanan kami.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="bg-card border border-border rounded-2xl p-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center flex-shrink-0">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-2xl mb-2">2. Definisi</h2>
                <p className="text-muted-foreground mb-4">
                  Dalam Ketentuan ini, istilah-istilah berikut memiliki arti sebagaimana didefinisikan:
                </p>
              </div>
            </div>

            <div className="ml-14 space-y-3">
              <div className="text-muted-foreground">
                <span className="text-foreground">"Layanan"</span> merujuk pada platform ResponPintar, termasuk semua fitur, fungsionalitas, dan antarmuka pengguna
              </div>
              <div className="text-muted-foreground">
                <span className="text-foreground">"Pengguna"</span> adalah individu atau entitas yang telah mendaftar dan menggunakan Layanan
              </div>
              <div className="text-muted-foreground">
                <span className="text-foreground">"Konten"</span> mencakup semua materi, data, teks, gambar, video, audio, atau konten lain yang dibuat, diunggah, atau ditransmisikan melalui Layanan
              </div>
              <div className="text-muted-foreground">
                <span className="text-foreground">"Data Pelanggan"</span> adalah informasi yang diproses atau disimpan oleh Pengguna melalui Layanan
              </div>
              <div className="text-muted-foreground">
                <span className="text-foreground">"Hak Kekayaan Intelektual"</span> mencakup hak cipta, paten, merek dagang, rahasia dagang, dan hak properti lainnya
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="bg-card border border-border rounded-2xl p-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center flex-shrink-0">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-2xl mb-2">3. Penggunaan Layanan</h2>
              </div>
            </div>

            <div className="space-y-4 ml-14">
              <div>
                <h3 className="text-lg mb-2">3.1. Persyaratan Penggunaan:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>Anda harus berusia minimal 18 tahun atau usia legal di wilayah Anda</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>Memberikan informasi yang akurat dan lengkap saat pendaftaran</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>Menjaga kerahasiaan kredensial akun</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>Bertanggung jawab atas semua aktivitas dalam akun Anda</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg mb-2">3.2. Larangan:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>Menggunakan Layanan untuk tujuan ilegal atau tidak sah</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>Melanggar hak kekayaan intelektual pihak lain</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>Mengunggah konten berbahaya atau melanggar hukum</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>Mencoba mengakses Layanan secara tidak sah</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="bg-card border border-border rounded-2xl p-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center flex-shrink-0">
                <DollarSign className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-2xl mb-2">4. Langganan dan Pembayaran</h2>
              </div>
            </div>

            <div className="space-y-4 ml-14">
              <div>
                <h3 className="text-lg mb-2">4.1. Biaya dan Pembayaran:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>Pembayaran dilakukan di muka untuk periode langganan</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>Semua biaya dalam Rupiah dan tidak termasuk pajak</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>Pembayaran diproses melalui payment gateway resmi</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>Anda bertanggung jawab atas semua biaya dan pajak yang berlaku</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg mb-2">4.2. Perubahan dan Pembatalan:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>Kami dapat mengubah harga dengan pemberitahuan 30 hari</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>Pembatalan dapat dilakukan sebelum periode berikutnya</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>Pengembalian dana sesuai kebijakan yang berlaku</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>Tidak ada pengembalian dana untuk periode yang telah berjalan</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section className="bg-card border border-border rounded-2xl p-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center flex-shrink-0">
                <Award className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-2xl mb-2">5. Hak Kekayaan Intelektual</h2>
              </div>
            </div>

            <div className="space-y-4 ml-14">
              <div>
                <h3 className="text-lg mb-2">5.1. Kepemilikan:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>Semua Hak Kekayaan Intelektual dalam Layanan adalah milik ResponPintar</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>Pengguna mempertahankan hak atas Data Pelanggan mereka</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>Konten yang diunggah tetap menjadi milik pengunggah</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg mb-2">5.2. Lisensi:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>Kami memberikan lisensi terbatas, non-eksklusif untuk menggunakan Layanan</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>Anda memberikan kami lisensi untuk memproses Data Pelanggan sesuai kebutuhan Layanan</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>Lisensi berakhir saat penggunaan Layanan dihentikan</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 6 */}
          <section className="bg-card border border-border rounded-2xl p-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center flex-shrink-0">
                <AlertCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-2xl mb-2">6. Batasan Tanggung Jawab</h2>
              </div>
            </div>

            <div className="space-y-4 ml-14">
              <div>
                <h3 className="text-lg mb-2">6.1. Batasan Umum:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>Layanan disediakan "sebagaimana adanya" tanpa jaminan apapun</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>Kami tidak bertanggung jawab atas kerugian tidak langsung</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>Total tanggung jawab kami terbatas pada jumlah yang Anda bayarkan</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg mb-2">6.2. Pengecualian:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>Kehilangan data akibat kelalaian Pengguna</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>Gangguan layanan di luar kendali kami</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>Kerusakan akibat perangkat atau koneksi Pengguna</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>Kerugian akibat pelanggaran Ketentuan ini</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 7 */}
          <section className="bg-card border border-border rounded-2xl p-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center flex-shrink-0">
                <XCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-2xl mb-2">7. Penghentian Layanan</h2>
              </div>
            </div>

            <div className="space-y-4 ml-14">
              <div>
                <h3 className="text-lg mb-2">7.1. Penghentian oleh Kami:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>Melanggar ketentuan penggunaan</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>Gagal membayar biaya layanan</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>Melakukan aktivitas yang mencurigakan atau berbahaya</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>Atas permintaan otoritas yang berwenang</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg mb-2">7.2. Penghentian oleh Pengguna:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>Dapat menghentikan layanan setiap saat</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>Harus memberikan pemberitahuan tertulis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] mt-1">•</span>
                    <span>Bertanggung jawab atas backup Data Pelanggan</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 8 */}
          <section className="bg-card border border-border rounded-2xl p-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center flex-shrink-0">
                <RefreshCw className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-2xl mb-2">8. Perubahan Ketentuan</h2>
              </div>
            </div>

            <div className="ml-14">
              <h3 className="text-lg mb-2">8.1. Proses Perubahan:</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--brand-primary)] mt-1">•</span>
                  <span>Kami berhak mengubah Ketentuan ini sewaktu-waktu</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--brand-primary)] mt-1">•</span>
                  <span>Perubahan material akan diberitahukan 30 hari sebelumnya</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--brand-primary)] mt-1">•</span>
                  <span>Pemberitahuan melalui email atau platform</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--brand-primary)] mt-1">•</span>
                  <span>Penggunaan berkelanjutan berarti persetujuan atas perubahan</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 9 */}
          <section className="bg-card border border-border rounded-2xl p-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center flex-shrink-0">
                <Gavel className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-2xl mb-2">9. Hukum yang Berlaku</h2>
              </div>
            </div>

            <div className="ml-14">
              <h3 className="text-lg mb-2">9.1. Yurisdiksi:</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--brand-primary)] mt-1">•</span>
                  <span>Ketentuan ini tunduk pada hukum Republik Indonesia</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--brand-primary)] mt-1">•</span>
                  <span>Setiap perselisihan akan diselesaikan melalui mediasi terlebih dahulu</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--brand-primary)] mt-1">•</span>
                  <span>Jika mediasi gagal, akan diselesaikan di Pengadilan Negeri Jakarta Selatan</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--brand-primary)] mt-1">•</span>
                  <span>Anda setuju untuk tunduk pada yurisdiksi eksklusif pengadilan tersebut</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Contact Section */}
          <section className="bg-gradient-to-br from-[var(--brand-gradient-start)]/10 to-[var(--brand-gradient-end)]/10 border border-[var(--brand-primary)]/20 rounded-2xl p-8">
            <h2 className="text-2xl mb-6 text-center">10. Kontak</h2>
            <p className="text-muted-foreground text-center mb-6">
              Untuk pertanyaan atau klarifikasi tentang Ketentuan ini, silakan hubungi kami di:
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
