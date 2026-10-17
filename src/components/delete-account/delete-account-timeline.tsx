import { Clock } from 'lucide-react';

const timelineSteps = [
  {
    step: 'Tahap 1: Pengajuan & Verifikasi (Hari ke-1)',
    description:
      'Permintaan diterima oleh sistem. Integrasi bot omnichannel langsung dinonaktifkan dan email konfirmasi otomatis dikirimkan ke alamat email terdaftar.',
  },
  {
    step: 'Tahap 2: Masa Tenggang (Grace Period Hari ke-1 s/d 14)',
    description:
      'Akun berstatus non-aktif. Anda masih dapat membatalkan permintaan jika berubah pikiran cukup dengan login kembali atau menghubungi tim bantuan kami.',
  },
  {
    step: 'Tahap 3: Pemusnahan Data Produksi (Hari ke-14)',
    description:
      'Seluruh database aktif, histori chat WhatsApp, daftar kontak, alur auto-assignment, serta kredensial akun dihapus secara permanen dari server utama.',
  },
  {
    step: 'Tahap 4: Pembersihan Salinan Backup (Hari ke-30 s/d 90)',
    description:
      'Seluruh arsip cadangan sistem di server cloud terenkripsi otomatis tertimpa dan terhapus sesuai standar siklus retensi keamanan ISO & UU PDP.',
  },
];

export function DeleteAccountTimeline() {
  return (
    <section className="bg-[#111214]/90 border border-[rgba(244,245,247,0.08)] backdrop-blur-md rounded-2xl p-6 sm:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.4)] space-y-8">
      <div className="flex items-start gap-4 sm:gap-5">
        <div className="w-12 h-12 rounded-xl bg-[#16181D] border border-[rgba(244,245,247,0.12)] flex items-center justify-center flex-shrink-0 text-[#8FE3B0]">
          <Clock className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-[#E9EBEF]">Jadwal & Tahapan Proses (Timeline)</h2>
          <p className="text-[#AEB4BD] text-sm sm:text-base leading-relaxed">
            Prosedur pembersihan data dilakukan secara bertahap untuk memastikan keamanan dan mencegah penghapusan yang tidak disengaja.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-0 pt-2">
        {timelineSteps.map((item, idx) => {
          const isLast = idx === timelineSteps.length - 1;
          return (
            <div key={idx} className="flex gap-4 sm:gap-6 relative">
              {/* Left Column: Dot & Connecting Line */}
              <div className="flex flex-col items-center flex-shrink-0 w-6">
                <div className="w-4 h-4 rounded-full bg-[#8FE3B0] border-2 border-[#0B0C0E] shadow-[0_0_10px_rgba(143,227,176,0.5)] mt-1" />
                {!isLast && <div className="w-[2px] flex-grow bg-[rgba(244,245,247,0.12)] my-2 min-h-[56px]" />}
              </div>

              {/* Right Column: Step Title & Content */}
              <div className="pb-8 flex-1">
                <h3 className="text-base sm:text-lg font-bold text-[#E9EBEF] mb-1.5 leading-snug">{item.step}</h3>
                <p className="text-sm text-[#AEB4BD] leading-relaxed">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
