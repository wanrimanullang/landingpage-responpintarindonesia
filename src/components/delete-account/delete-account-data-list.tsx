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
    <div className="space-y-12">
      {/* Data yang Akan Dihapus */}
      <section className="bg-card border border-border rounded-2xl delete-account-card space-y-8 shadow-sm">
        <div className="flex items-start gap-4 sm:gap-5">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center flex-shrink-0 shadow-sm">
            <User className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">Data yang Akan Dihapus</h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Berikut adalah rincian data pribadi dan data operasional yang akan dimusnahkan secara permanen dari seluruh sistem Respon Pintar:
            </p>
          </div>
        </div>

        <div className="delete-account-data-grid pt-2">
          {deletedItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="p-6 rounded-2xl border border-border/80 bg-background space-y-3 hover:border-[var(--brand-primary)]/40 transition-colors shadow-sm">
                <div className={`w-10 h-10 rounded-xl ${item.colorClass} flex items-center justify-center`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-base text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Data yang Tetap Disimpan */}
      <section className="bg-card border border-border rounded-2xl delete-account-card space-y-8 shadow-sm">
        <div className="flex items-start gap-4 sm:gap-5">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center flex-shrink-0 shadow-sm">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">Data yang Tetap Disimpan & Alasannya</h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Sesuai dengan peraturan perundang-undangan Republik Indonesia, beberapa jenis data tertentu tetap wajib kami simpan dalam batas waktu tertentu:
            </p>
          </div>
        </div>

        <div className="delete-account-table-wrapper">
          <table className="delete-account-table">
            <thead>
              <tr>
                <th style={{ width: '30%' }}>Jenis Data</th>
                <th style={{ width: '52%' }}>Dasar Hukum & Alasan</th>
                <th style={{ width: '18%', textAlign: 'center' }}>Masa Retensi</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ fontWeight: 600, color: 'var(--color-foreground, #ffffff)' }}>
                  Catatan Transaksi & Faktur Pajak
                </td>
                <td>
                  Kepatuhan terhadap UU Perpajakan Republik Indonesia dan kewajiban audit laporan keuangan resmi perusahaan.
                </td>
                <td style={{ textAlign: 'center' }}>
                  <span className="delete-account-retention-badge">5 Tahun</span>
                </td>
              </tr>
              <tr>
                <td style={{ fontWeight: 600, color: 'var(--color-foreground, #ffffff)' }}>
                  Log Akses Keamanan Teranonim
                </td>
                <td>
                  Audit pencegahan serangan siber dan deteksi aktivitas mencurigakan (<em>fraud prevention</em>), tanpa menyimpan informasi identitas pribadi (PII).
                </td>
                <td style={{ textAlign: 'center' }}>
                  <span className="delete-account-retention-badge">12 Bulan</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
