import { FileText, ArrowRight, ExternalLink } from 'lucide-react';

export function DeleteAccountSteps() {
  return (
    <section className="bg-card border border-border rounded-2xl delete-account-card space-y-8">
      {/* Section Header */}
      <div className="flex items-start gap-4 sm:gap-5">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center flex-shrink-0 shadow-sm">
          <FileText className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">Panduan Cara Menghapus Akun</h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            Pilih salah satu metode penghapusan akun di bawah ini sesuai dengan kenyamanan dan kondisi akses akun Anda.
          </p>
        </div>
      </div>

      {/* Grid of Steps */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 pt-2">
        {/* Metode A: Self Service via Dashboard */}
        <div className="bg-secondary/40 border border-border/80 rounded-2xl delete-account-card flex flex-col justify-between hover:border-[var(--brand-primary)]/50 transition-colors shadow-sm">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-[var(--brand-primary)] text-white text-sm flex items-center justify-center font-bold shadow-sm">
                A
              </span>
              <h3 className="font-bold text-lg text-foreground">Secara Mandiri via Dashboard</h3>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed">
              Metode tercepat jika Anda masih memiliki akses login aktif ke akun Respon Pintar:
            </p>

            <ol className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-start" style={{ gap: '14px' }}>
                <span style={{ width: '24px', height: '24px', borderRadius: '9999px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 700, flexShrink: 0, marginTop: '2px', border: '1px solid var(--color-border, #27272a)', backgroundColor: 'var(--color-background, #121212)' }}>
                  1
                </span>
                <span className="leading-relaxed">
                  Buka dan login ke dashboard{' '}
                  <a
                    href="https://app.responpintar.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--brand-primary)] font-medium underline hover:opacity-80"
                  >
                    app.responpintar.com
                  </a>
                </span>
              </li>
              <li className="flex items-start" style={{ gap: '14px' }}>
                <span style={{ width: '24px', height: '24px', borderRadius: '9999px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 700, flexShrink: 0, marginTop: '2px', border: '1px solid var(--color-border, #27272a)', backgroundColor: 'var(--color-background, #121212)' }}>
                  2
                </span>
                <span className="leading-relaxed">
                  Buka menu <strong className="text-foreground">Profil / Pengaturan Akun</strong> di pojok kanan atas.
                </span>
              </li>
              <li className="flex items-start" style={{ gap: '14px' }}>
                <span style={{ width: '24px', height: '24px', borderRadius: '9999px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 700, flexShrink: 0, marginTop: '2px', border: '1px solid var(--color-border, #27272a)', backgroundColor: 'var(--color-background, #121212)' }}>
                  3
                </span>
                <span className="leading-relaxed">
                  Gulir ke bagian paling bawah pada menu <strong className="text-foreground">Zona Berbahaya (Danger Zone)</strong>.
                </span>
              </li>
              <li className="flex items-start" style={{ gap: '14px' }}>
                <span style={{ width: '24px', height: '24px', borderRadius: '9999px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 700, flexShrink: 0, marginTop: '2px', border: '1px solid var(--color-border, #27272a)', backgroundColor: 'var(--color-background, #121212)' }}>
                  4
                </span>
                <span className="leading-relaxed">
                  Klik tombol <strong className="text-foreground">Hapus Akun Saya</strong> dan masukkan password akun untuk konfirmasi.
                </span>
              </li>
              <li className="flex items-start" style={{ gap: '14px' }}>
                <span style={{ width: '24px', height: '24px', borderRadius: '9999px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 700, flexShrink: 0, marginTop: '2px', border: '1px solid var(--color-border, #27272a)', backgroundColor: 'var(--color-background, #121212)' }}>
                  5
                </span>
                <span className="leading-relaxed">
                  Konfirmasi penghapusan. Akun Anda akan masuk masa tenggang selama 14 hari.
                </span>
              </li>
            </ol>
          </div>

          <div className="mt-8 pt-6 border-t border-border/70">
            <a
              href="https://app.responpintar.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl bg-background border border-border hover:border-[var(--brand-primary)] hover:text-[var(--brand-primary)] text-sm font-semibold text-foreground transition-all duration-200 shadow-sm w-full sm:w-auto"
            >
              <span>Buka Dashboard Respon Pintar</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Metode B: Request via Web Form */}
        <div className="bg-secondary/40 border border-border/80 rounded-2xl delete-account-card flex flex-col justify-between hover:border-[var(--brand-primary)]/50 transition-colors shadow-sm">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-[var(--brand-primary)] text-white text-sm flex items-center justify-center font-bold shadow-sm">
                B
              </span>
              <h3 className="font-bold text-lg text-foreground">Permintaan via Formulir Web / Email</h3>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed">
              Gunakan metode ini jika Anda lupa kredensial login atau telah meng-uninstall aplikasi dari perangkat:
            </p>

            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-start" style={{ gap: '14px' }}>
                <span style={{ color: 'var(--brand-primary, #00C896)', fontSize: '20px', lineHeight: 1, marginTop: '2px', flexShrink: 0 }}>•</span>
                <span className="leading-relaxed">
                  Isi formulir pengajuan penghapusan akun yang tersedia di bagian bawah halaman ini.
                </span>
              </li>
              <li className="flex items-start" style={{ gap: '14px' }}>
                <span style={{ color: 'var(--brand-primary, #00C896)', fontSize: '20px', lineHeight: 1, marginTop: '2px', flexShrink: 0 }}>•</span>
                <span className="leading-relaxed">
                  Tim verifikasi kami akan mengirimkan email konfirmasi ke alamat email terdaftar dalam 1–3 hari kerja.
                </span>
              </li>
              <li className="flex items-start" style={{ gap: '14px' }}>
                <span style={{ color: 'var(--brand-primary, #00C896)', fontSize: '20px', lineHeight: 1, marginTop: '2px', flexShrink: 0 }}>•</span>
                <span className="leading-relaxed">
                  Setelah verifikasi kepemilikan akun berhasil, akun Anda akan dijadwalkan untuk dihapus secara permanen.
                </span>
              </li>
            </ul>
          </div>

          <div className="mt-8 pt-6 border-t border-border/70">
            <a
              href="#request-form"
              className="inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl bg-background border border-border hover:border-[var(--brand-primary)] hover:text-[var(--brand-primary)] text-sm font-semibold text-foreground transition-all duration-200 shadow-sm w-full sm:w-auto"
            >
              <span>Langsung ke Formulir Pengajuan</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
