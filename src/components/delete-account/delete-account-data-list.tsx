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
    colorClass: 'bg-blue-500/10 text-blue-500',
    title: 'Data Profil & Akun',
    description: 'Nama lengkap, alamat email, nomor telepon, foto profil, dan kredensial login akun Anda.',
  },
  {
    icon: MessageSquare,
    colorClass: 'bg-emerald-500/10 text-emerald-500',
    title: 'Bot & Workflow Otomatisasi',
    description: 'Seluruh alur percakapan bot, logic AI prompt, template pesan cepat, dan respon otomatis.',
  },
  {
    icon: Users,
    colorClass: 'bg-purple-500/10 text-purple-500',
    title: 'Daftar Kontak Pelanggan',
    description: 'Database nomor kontak pelanggan, label, tag segmentasi, serta catatan khusus pelanggan.',
  },
  {
    icon: MessageCircle,
    colorClass: 'bg-amber-500/10 text-amber-500',
    title: 'Riwayat Percakapan',
    description: 'Seluruh log chat masuk dan keluar, transkrip audio, gambar, dokumen, dan file lampiran.',
  },
  {
    icon: Zap,
    colorClass: 'bg-rose-500/10 text-rose-500',
    title: 'Sesi Integrasi Saluran',
    description: 'Token WhatsApp Business Cloud API, sesi login QR WhatsApp, webhook URL, dan API key.',
  },
  {
    icon: CreditCard,
    colorClass: 'bg-cyan-500/10 text-cyan-500',
    title: 'Metode Pembayaran Tersimpan',
    description: 'Profil langganan berulang dan token kartu kredit yang terhubung pada payment gateway.',
  },
];

export function DeleteAccountDataList() {
  return (
    <div className="space-y-10">
      {/* Data yang Akan Dihapus */}
      <section className="bg-card border border-border rounded-2xl p-6 sm:p-8 space-y-6">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center flex-shrink-0">
            <User className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-1">Data yang Akan Dihapus</h2>
            <p className="text-muted-foreground text-sm">
              Berikut adalah rincian data pribadi dan data operasional yang akan dimusnahkan secara permanen:
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
          {deletedItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="p-4 rounded-xl border border-border bg-background space-y-2">
                <div className={`w-8 h-8 rounded-lg ${item.colorClass} flex items-center justify-center`}>
                  <Icon className="w-4 h-4" />
                </div>
                <h3 className="font-semibold text-sm">{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Data yang Tetap Disimpan */}
      <section className="bg-card border border-border rounded-2xl p-6 sm:p-8 space-y-6">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center flex-shrink-0">
            <Shield className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-1">Data yang Tetap Disimpan & Alasannya</h2>
            <p className="text-muted-foreground text-sm">
              Sesuai dengan peraturan perundang-undangan Republik Indonesia, beberapa jenis data tertentu tetap wajib kami simpan dalam batas waktu tertentu:
            </p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="border-b border-border bg-secondary/30">
                <th className="py-3 px-4 font-semibold text-foreground">Jenis Data</th>
                <th className="py-3 px-4 font-semibold text-foreground">Dasar Hukum & Alasan</th>
                <th className="py-3 px-4 font-semibold text-foreground">Masa Retensi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="py-3 px-4 font-medium text-foreground">
                  Catatan Transaksi & Faktur Pajak
                </td>
                <td className="py-3 px-4 text-muted-foreground text-xs sm:text-sm">
                  Kepatuhan terhadap UU Perpajakan Republik Indonesia dan kewajiban audit laporan keuangan resmi.
                </td>
                <td className="py-3 px-4 text-muted-foreground text-xs sm:text-sm whitespace-nowrap">
                  5 Tahun
                </td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium text-foreground">
                  Log Akses Keamanan Teranonim
                </td>
                <td className="py-3 px-4 text-muted-foreground text-xs sm:text-sm">
                  Audit pencegahan serangan siber, penipuan (<em>fraud prevention</em>), tanpa mengidentifikasi informasi pribadi langsung.
                </td>
                <td className="py-3 px-4 text-muted-foreground text-xs sm:text-sm whitespace-nowrap">
                  12 Bulan
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
