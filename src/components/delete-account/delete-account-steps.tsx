import { FileText, ArrowRight, ExternalLink } from 'lucide-react';

export function DeleteAccountSteps() {
  return (
    <section className="bg-[#111214]/90 border border-[rgba(244,245,247,0.08)] backdrop-blur-md rounded-2xl p-6 sm:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.4)] space-y-8">
      {/* Section Header */}
      <div className="flex items-start gap-4 sm:gap-5">
        <div className="w-12 h-12 rounded-xl bg-[#16181D] border border-[rgba(244,245,247,0.12)] flex items-center justify-center flex-shrink-0 text-[#8FE3B0]">
          <FileText className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-[#E9EBEF]">Panduan Cara Menghapus Akun</h2>
          <p className="text-[#AEB4BD] text-sm sm:text-base leading-relaxed">
            Pilih salah satu metode penghapusan akun di bawah ini sesuai dengan kenyamanan dan kondisi akses akun Anda.
          </p>
        </div>
      </div>

      {/* Grid of Steps */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
        {/* Metode A: Self Service via Dashboard */}
        <div className="bg-[#16181D]/80 border border-[rgba(244,245,247,0.08)] rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-[rgba(244,245,247,0.2)] transition shadow-sm">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-[#8FE3B0]/15 border border-[#8FE3B0]/30 text-[#8FE3B0] text-sm flex items-center justify-center font-bold">
                A
              </span>
              <h3 className="font-bold text-lg text-[#E9EBEF]">Secara Mandiri via Dashboard</h3>
            </div>

            <p className="text-sm text-[#AEB4BD] leading-relaxed">
              Metode tercepat jika Anda masih memiliki akses login aktif ke akun Respon Pintar:
            </p>

            <ol className="space-y-4 text-sm text-[#AEB4BD]">
              <li className="flex items-start gap-3.5">
                <span className="w-6 h-6 rounded-full inline-flex items-center justify-center text-xs font-mono font-bold flex-shrink-0 mt-0.5 border border-[rgba(244,245,247,0.12)] bg-[#111214] text-[#E9EBEF]">
                  1
                </span>
                <span className="leading-relaxed">
                  Buka dan login ke dashboard{' '}
                  <a
                    href="https://app.responpintar.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#8FE3B0] font-medium underline underline-offset-4 hover:opacity-80"
                  >
                    app.responpintar.com
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-3.5">
                <span className="w-6 h-6 rounded-full inline-flex items-center justify-center text-xs font-mono font-bold flex-shrink-0 mt-0.5 border border-[rgba(244,245,247,0.12)] bg-[#111214] text-[#E9EBEF]">
                  2
                </span>
                <span className="leading-relaxed">
                  Buka menu <strong className="text-[#E9EBEF]">Profil / Pengaturan Akun</strong> di pojok kanan atas.
                </span>
              </li>
              <li className="flex items-start gap-3.5">
                <span className="w-6 h-6 rounded-full inline-flex items-center justify-center text-xs font-mono font-bold flex-shrink-0 mt-0.5 border border-[rgba(244,245,247,0.12)] bg-[#111214] text-[#E9EBEF]">
                  3
                </span>
                <span className="leading-relaxed">
                  Gulir ke bagian paling bawah pada menu <strong className="text-[#E9EBEF]">Zona Berbahaya (Danger Zone)</strong>.
                </span>
              </li>
              <li className="flex items-start gap-3.5">
                <span className="w-6 h-6 rounded-full inline-flex items-center justify-center text-xs font-mono font-bold flex-shrink-0 mt-0.5 border border-[rgba(244,245,247,0.12)] bg-[#111214] text-[#E9EBEF]">
                  4
                </span>
                <span className="leading-relaxed">
                  Klik tombol <strong className="text-[#E9EBEF]">Hapus Akun Saya</strong> dan masukkan password akun untuk konfirmasi.
                </span>
              </li>
              <li className="flex items-start gap-3.5">
                <span className="w-6 h-6 rounded-full inline-flex items-center justify-center text-xs font-mono font-bold flex-shrink-0 mt-0.5 border border-[rgba(244,245,247,0.12)] bg-[#111214] text-[#E9EBEF]">
                  5
                </span>
                <span className="leading-relaxed">
                  Konfirmasi penghapusan. Akun Anda akan masuk masa tenggang selama 14 hari.
                </span>
              </li>
            </ol>
          </div>

          <div className="mt-8 pt-6 border-t border-[rgba(244,245,247,0.08)]">
            <a
              href="https://app.responpintar.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl border border-[rgba(244,245,247,0.2)] bg-transparent hover:bg-white/5 text-sm font-semibold text-[#E9EBEF] transition-all duration-200 w-full sm:w-auto"
            >
              <span>Buka Dashboard Respon Pintar</span>
              <ExternalLink className="w-4 h-4 text-[#AEB4BD]" />
            </a>
          </div>
        </div>

        {/* Metode B: Request via Web Form */}
        <div className="bg-[#16181D]/80 border border-[rgba(244,245,247,0.08)] rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-[rgba(244,245,247,0.2)] transition shadow-sm">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-[#8FE3B0]/15 border border-[#8FE3B0]/30 text-[#8FE3B0] text-sm flex items-center justify-center font-bold">
                B
              </span>
              <h3 className="font-bold text-lg text-[#E9EBEF]">Permintaan via Formulir Web / Email</h3>
            </div>

            <p className="text-sm text-[#AEB4BD] leading-relaxed">
              Gunakan metode ini jika Anda lupa kredensial login atau telah meng-uninstall aplikasi dari perangkat:
            </p>

            <ul className="space-y-4 text-sm text-[#AEB4BD]">
              <li className="flex items-start gap-3.5">
                <span className="text-[#8FE3B0] text-lg leading-none mt-0.5 flex-shrink-0">•</span>
                <span className="leading-relaxed">
                  Isi formulir pengajuan penghapusan akun yang tersedia di bagian bawah halaman ini.
                </span>
              </li>
              <li className="flex items-start gap-3.5">
                <span className="text-[#8FE3B0] text-lg leading-none mt-0.5 flex-shrink-0">•</span>
                <span className="leading-relaxed">
                  Tim verifikasi kami akan mengirimkan email konfirmasi ke alamat email terdaftar dalam 1–3 hari kerja.
                </span>
              </li>
              <li className="flex items-start gap-3.5">
                <span className="text-[#8FE3B0] text-lg leading-none mt-0.5 flex-shrink-0">•</span>
                <span className="leading-relaxed">
                  Setelah verifikasi kepemilikan akun berhasil, akun Anda akan dijadwalkan untuk dihapus secara permanen.
                </span>
              </li>
            </ul>
          </div>

          <div className="mt-8 pt-6 border-t border-[rgba(244,245,247,0.08)]">
            <a
              href="#request-form"
              className="inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl bg-[#E9EBEF] text-[#0B0C0E] border border-white hover:bg-white text-sm font-semibold transition-all duration-200 w-full sm:w-auto shadow-sm"
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
