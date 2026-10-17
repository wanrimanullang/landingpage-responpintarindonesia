import { Clock } from 'lucide-react';

const timelineSteps = [
  {
    step: 'Tahap 1: Pengajuan & Verifikasi (Hari ke-1)',
    description:
      'Permintaan diterima oleh sistem. Integrasi bot langsung dinonaktifkan dan email konfirmasi otomatis dikirimkan ke alamat email terdaftar.',
  },
  {
    step: 'Tahap 2: Masa Tenggang (Grace Period Hari ke-1 s/d 14)',
    description:
      'Akun berstatus non-aktif. Anda masih dapat membatalkan permintaan jika berubah pikiran cukup dengan login kembali atau menghubungi tim bantuan kami.',
  },
  {
    step: 'Tahap 3: Pemusnahan Data Produksi (Hari ke-14)',
    description:
      'Seluruh database aktif, histori chat WhatsApp, daftar kontak, alur workflow bot, serta kredensial akun dihapus secara permanen dari server utama.',
  },
  {
    step: 'Tahap 4: Pembersihan Salinan Backup (Hari ke-30 s/d 90)',
    description:
      'Seluruh arsip cadangan sistem di server cloud terenkripsi otomatis tertimpa dan terhapus sesuai standar siklus retensi keamanan ISO & UU PDP.',
  },
];

export function DeleteAccountTimeline() {
  return (
    <section className="bg-card border border-border rounded-2xl delete-account-card space-y-8 shadow-sm">
      <div className="flex items-start gap-4 sm:gap-5">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center flex-shrink-0 shadow-sm">
          <Clock className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">Jadwal & Tahapan Proses (Timeline)</h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            Prosedur pembersihan data dilakukan secara bertahap untuk memastikan keamanan dan mencegah penghapusan yang tidak disengaja.
          </p>
        </div>
      </div>

      <div className="timeline-list">
        {timelineSteps.map((item, idx) => {
          const isLast = idx === timelineSteps.length - 1;
          return (
            <div key={idx} className="timeline-item">
              {/* Left Column: Dot & Connecting Line */}
              <div className="timeline-indicator">
                <div className="timeline-dot" />
                {!isLast && <div className="timeline-line" />}
              </div>

              {/* Right Column: Step Title & Content */}
              <div className="timeline-content">
                <h3 className="timeline-title">{item.step}</h3>
                <p className="timeline-desc">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
