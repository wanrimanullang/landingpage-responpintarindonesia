import {
  User,
  MessageSquare,
  Users,
  MessageCircle,
  Zap,
  CreditCard,
  Shield,
} from 'lucide-react';

const deletedItems = [
  {
    icon: User,
    colorClass: 'bg-blue-500/10 text-blue-400 border border-blue-500/20',
    title: 'Data Profil & Akun',
    description: 'Nama lengkap, alamat email, nomor telepon, foto profil, dan kredensial login akun Anda.',
  },
  {
    icon: MessageSquare,
    colorClass: 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20',
    title: 'Bot & Workflow Otomatisasi',
    description: 'Seluruh alur percakapan bot, logic AI prompt, template pesan cepat, dan respon otomatis.',
  },
  {
    icon: Users,
    colorClass: 'bg-purple-500/10 text-purple-400 border border-purple-500/20',
    title: 'Daftar Kontak Pelanggan',
    description: 'Database nomor kontak pelanggan, label, tag segmentasi, serta catatan khusus pelanggan.',
  },
  {
    icon: MessageCircle,
    colorClass: 'bg-amber-500/10 text-amber-400 border border-amber-500/20',
    title: 'Riwayat Percakapan',
    description: 'Seluruh log chat masuk dan keluar WhatsApp, Instagram DM, Telegram, audio, dan dokumen lampiran.',
  },
  {
    icon: Zap,
    colorClass: 'bg-rose-500/10 text-rose-400 border border-rose-500/20',
    title: 'Sesi Integrasi Saluran',
    description: 'Token WhatsApp Business Cloud API, webhook URL, token Telegram, dan kredensial integrasi.',
  },
  {
    icon: CreditCard,
    colorClass: 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20',
    title: 'Metode Pembayaran Tersimpan',
    description: 'Profil langganan berulang dan token kartu kredit yang terhubung pada payment gateway.',
  },
];

export function DeleteAccountDataList() {
  return (
    <div className="space-y-12">
      {/* Data yang Akan Dihapus */}
      <section className="bg-[#111214]/90 border border-[rgba(244,245,247,0.08)] backdrop-blur-md rounded-2xl p-6 sm:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.4)] space-y-8">
        <div className="flex items-start gap-4 sm:gap-5">
          <div className="w-12 h-12 rounded-xl bg-[#16181D] border border-[rgba(244,245,247,0.12)] flex items-center justify-center flex-shrink-0 text-[#8FE3B0]">
            <User className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-[#E9EBEF]">Data yang Akan Dihapus Permanen</h2>
            <p className="text-[#AEB4BD] text-sm sm:text-base leading-relaxed">
              Berikut adalah rincian data pribadi dan data operasional saluran omnichannel yang akan dimusnahkan secara permanen dari server Respon Pintar:
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 pt-2">
          {deletedItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-[rgba(244,245,247,0.08)] bg-[#16181D]/80 space-y-3 hover:border-[rgba(244,245,247,0.2)] transition shadow-sm"
              >
                <div className={`w-10 h-10 rounded-xl ${item.colorClass} flex items-center justify-center`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-base text-[#E9EBEF]">{item.title}</h3>
                <p className="text-sm text-[#AEB4BD] leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Data yang Tetap Disimpan */}
      <section className="bg-[#111214]/90 border border-[rgba(244,245,247,0.08)] backdrop-blur-md rounded-2xl p-6 sm:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.4)] space-y-8">
        <div className="flex items-start gap-4 sm:gap-5">
          <div className="w-12 h-12 rounded-xl bg-[#16181D] border border-[rgba(244,245,247,0.12)] flex items-center justify-center flex-shrink-0 text-[#8FE3B0]">
            <Shield className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-[#E9EBEF]">Data yang Tetap Disimpan & Alasannya</h2>
            <p className="text-[#AEB4BD] text-sm sm:text-base leading-relaxed">
              Sesuai dengan peraturan perundang-undangan Republik Indonesia, beberapa jenis data tertentu tetap wajib kami simpan dalam batas waktu tertentu:
            </p>
          </div>
        </div>

        <div className="overflow-x-auto rounded-xl border border-[rgba(244,245,247,0.08)] bg-[#16181D]/60">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <thead>
              <tr className="border-b border-[rgba(244,245,247,0.08)] bg-[#16181D]">
                <th className="py-4 px-5 text-xs font-mono uppercase tracking-wider text-[#AEB4BD]" style={{ width: '30%' }}>Jenis Data</th>
                <th className="py-4 px-5 text-xs font-mono uppercase tracking-wider text-[#AEB4BD]" style={{ width: '52%' }}>Dasar Hukum & Alasan</th>
                <th className="py-4 px-5 text-xs font-mono uppercase tracking-wider text-[#AEB4BD] text-center" style={{ width: '18%' }}>Masa Retensi</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[rgba(244,245,247,0.06)] hover:bg-white/[0.02]">
                <td className="py-4 px-5 font-semibold text-[#E9EBEF] text-sm">
                  Catatan Transaksi & Faktur Pajak
                </td>
                <td className="py-4 px-5 text-sm text-[#AEB4BD] leading-relaxed">
                  Kepatuhan terhadap UU Perpajakan Republik Indonesia dan kewajiban audit laporan keuangan resmi perusahaan.
                </td>
                <td className="py-4 px-5 text-center">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-medium bg-[#8FE3B0]/10 text-[#8FE3B0] border border-[#8FE3B0]/20">
                    5 Tahun
                  </span>
                </td>
              </tr>
              <tr className="hover:bg-white/[0.02]">
                <td className="py-4 px-5 font-semibold text-[#E9EBEF] text-sm">
                  Log Akses Keamanan Teranonim
                </td>
                <td className="py-4 px-5 text-sm text-[#AEB4BD] leading-relaxed">
                  Audit pencegahan serangan siber dan deteksi aktivitas mencurigakan (<em>fraud prevention</em>), tanpa menyimpan informasi identitas pribadi (PII).
                </td>
                <td className="py-4 px-5 text-center">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-medium bg-[#8FE3B0]/10 text-[#8FE3B0] border border-[#8FE3B0]/20">
                    12 Bulan
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
