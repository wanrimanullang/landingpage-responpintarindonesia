import { FileText, ArrowRight, ExternalLink } from 'lucide-react';

export function DeleteAccountSteps() {
  return (
    <section className="bg-card border border-border rounded-2xl p-6 sm:p-8 space-y-6">
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center flex-shrink-0">
          <FileText className="w-5 h-5 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-1">Panduan Cara Menghapus Akun</h2>
          <p className="text-muted-foreground text-sm">
            Pilih salah satu metode penghapusan akun di bawah ini sesuai kenyamanan Anda.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
        {/* Metode A: Self Service */}
        <div className="bg-secondary/40 border border-border rounded-xl p-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-6 rounded-full bg-[var(--brand-primary)] text-white text-xs flex items-center justify-center font-bold">
                A
              </span>
              <h3 className="font-semibold text-base">Secara Mandiri via Dashboard</h3>
            </div>
            <p className="text-xs text-muted-foreground mb-4">
              Metode tercepat jika Anda masih memiliki akses login ke akun Respon Pintar:
            </p>
            <ol className="space-y-2.5 text-xs sm:text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="font-semibold text-foreground">1.</span>
                <span>
                  Buka dan login ke dashboard{' '}
                  <a
                    href="https://app.responpintar.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--brand-primary)] underline hover:opacity-80"
                  >
                    app.responpintar.com
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold text-foreground">2.</span>
                <span>
                  Klik menu <strong>Profil / Pengaturan Akun</strong> di pojok kanan atas.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold text-foreground">3.</span>
                <span>
                  Gulir ke bagian bawah pada menu <strong>Zona Berbahaya (Danger Zone)</strong>.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold text-foreground">4.</span>
                <span>
                  Klik tombol <strong>Hapus Akun Saya</strong> dan masukkan password untuk verifikasi.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold text-foreground">5.</span>
                <span>Konfirmasi penghapusan. Akun Anda akan masuk masa tenggang 14 hari.</span>
              </li>
            </ol>
          </div>

          <div className="mt-5 pt-4 border-t border-border/60">
            <a
              href="https://app.responpintar.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold text-[var(--brand-primary)] hover:underline"
            >
              Buka Dashboard Respon Pintar <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Metode B: Request via Web Form */}
        <div className="bg-secondary/40 border border-border rounded-xl p-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-6 rounded-full bg-[var(--brand-primary)] text-white text-xs flex items-center justify-center font-bold">
                B
              </span>
              <h3 className="font-semibold text-base">Permintaan via Formulir Web / Email</h3>
            </div>
            <p className="text-xs text-muted-foreground mb-4">
              Gunakan metode ini jika Anda lupa kredensial login atau telah meng-uninstall aplikasi:
            </p>
            <ul className="space-y-2.5 text-xs sm:text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-[var(--brand-primary)] mt-0.5">•</span>
                <span>Isi formulir pengajuan penghapusan akun yang tersedia di bawah halaman ini.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--brand-primary)] mt-0.5">•</span>
                <span>
                  Tim verifikasi kami akan mengirimkan email konfirmasi ke alamat email terdaftar dalam 1-3 hari kerja.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--brand-primary)] mt-0.5">•</span>
                <span>Setelah verifikasi berhasil, akun Anda akan dijadwalkan untuk dihapus secara permanen.</span>
              </li>
            </ul>
          </div>

          <div className="mt-5 pt-4 border-t border-border/60">
            <a
              href="#request-form"
              className="inline-flex items-center gap-2 text-xs font-semibold text-[var(--brand-primary)] hover:underline"
            >
              Langsung ke Formulir Pengajuan <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
