import { Clock } from 'lucide-react';

const timelineSteps = [
  {
    step: 'Tahap 1: Pengajuan & Verifikasi (Hari ke-1)',
    description:
      'Permintaan diterima. Akses bot langsung dihentikan dan email konfirmasi dikirimkan ke alamat terdaftar.',
  },
  {
    step: 'Tahap 2: Masa Tenggang (Grace Period Hari ke-1 s/d 14)',
    description:
      'Akun berstatus non-aktif. Anda masih dapat membatalkan permintaan jika berubah pikiran dengan login kembali atau menghubungi tim bantuan kami.',
  },
  {
    step: 'Tahap 3: Pemusnahan Data Produksi (Hari ke-14)',
    description:
      'Seluruh database aktif, histori chat, kontak, serta kredensial akun dihapus secara permanen dan tidak dapat dipulihkan lagi.',
  },
  {
    step: 'Tahap 4: Pembersihan Salinan Backup (Hari ke-30 s/d 90)',
    description:
      'Seluruh arsip cadangan sistem di server cloud terenkripsi otomatis tertimpa dan terhapus sesuai standar siklus retensi keamanan.',
  },
];

export function DeleteAccountTimeline() {
  return (
    <section className="bg-card border border-border rounded-2xl p-6 sm:p-8 space-y-6">
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center flex-shrink-0">
          <Clock className="w-5 h-5 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-1">Jadwal & Tahapan Proses (Timeline)</h2>
          <p className="text-muted-foreground text-sm">
            Prosedur pembersihan data dilakukan secara bertahap untuk memastikan keamanan dan mencegah penghapusan yang tidak disengaja.
          </p>
        </div>
      </div>

      <div className="relative border-l-2 border-[var(--brand-primary)]/40 ml-4 sm:ml-6 pl-6 sm:pl-8 space-y-8 pt-2">
        {timelineSteps.map((item, idx) => (
          <div key={idx} className="relative">
            <div className="absolute -left-[31px] sm:-left-[39px] top-1 w-4 h-4 rounded-full bg-[var(--brand-primary)] border-4 border-background" />
            <h3 className="font-semibold text-base">{item.step}</h3>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
