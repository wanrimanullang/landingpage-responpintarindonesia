import { useState } from 'react';
import { Mail, CheckCircle2, Send, AlertCircle } from 'lucide-react';

export function DeleteAccountForm() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [reason, setReason] = useState('');
  const [notes, setNotes] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!confirmed) {
      alert('Harap centang konfirmasi bahwa Anda memahami penghapusan data bersifat permanen.');
      return;
    }

    const subject = encodeURIComponent(`Permintaan Penghapusan Akun - ${email}`);
    const body = encodeURIComponent(
      `Halo Tim Support Respon Pintar,\n\nSaya ingin mengajukan permohonan penghapusan akun dan seluruh data terkait:\n\n- Email Terdaftar: ${email}\n- Nomor WhatsApp/Telepon: ${phone}\n- Alasan Penghapusan: ${reason || 'Tidak disebutkan'}\n- Catatan Tambahan: ${notes || '-'}\n\nSaya mengonfirmasi bahwa saya memahami tindakan ini bersifat permanen dan data saya tidak dapat dipulihkan.\n\nTerima kasih.`
    );

    window.location.href = `mailto:support@responpintar.com?subject=${subject}&body=${body}`;
    setFormSubmitted(true);
  };

  return (
    <section id="request-form" className="bg-card border border-border rounded-2xl delete-account-card space-y-8 scroll-mt-24 shadow-sm">
      {/* Section Header */}
      <div className="flex items-start gap-4 sm:gap-5">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center flex-shrink-0 shadow-sm">
          <Mail className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">Formulir Pengajuan Penghapusan Akun</h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            Isi formulir di bawah ini dengan lengkap jika Anda ingin tim dukungan kami memproses penghapusan akun dan data Anda secara manual.
          </p>
        </div>
      </div>

      {formSubmitted ? (
        <div className="bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 rounded-2xl p-8 text-center space-y-4">
          <CheckCircle2 className="w-12 h-12 text-emerald-600 dark:text-emerald-400 mx-auto" />
          <h3 className="text-xl font-bold text-emerald-800 dark:text-emerald-300">
            Permintaan Berhasil Disiapkan
          </h3>
          <p className="text-sm sm:text-base text-emerald-700 dark:text-emerald-400 max-w-xl mx-auto leading-relaxed">
            Aplikasi email Anda seharusnya terbuka dengan rincian permintaan terisi otomatis. Silakan klik <strong>"Kirim"</strong> pada email Anda. Tim kami akan memverifikasi permohonan dalam waktu 1–3 hari kerja.
          </p>
          <div className="pt-2">
            <button
              type="button"
              onClick={() => setFormSubmitted(false)}
              className="text-sm font-semibold text-emerald-800 dark:text-emerald-300 underline hover:opacity-80 transition"
            >
              Kirim pengajuan lain
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6 pt-2">
          {/* Email & Phone fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="email" className="block text-sm font-semibold mb-2.5 text-foreground">
                Alamat Email Terdaftar <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="nama@email.com"
                className="delete-account-form-input border border-border bg-background text-foreground"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-semibold mb-2.5 text-foreground">
                Nomor WhatsApp / Telepon <span className="text-red-500">*</span>
              </label>
              <input
                id="phone"
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+62 812-xxxx-xxxx"
                className="delete-account-form-input border border-border bg-background text-foreground"
              />
            </div>
          </div>

          {/* Reason selection */}
          <div>
            <label htmlFor="reason" className="block text-sm font-semibold mb-2.5 text-foreground">
              Alasan Penghapusan (Opsional)
            </label>
            <select
              id="reason"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              className="delete-account-form-input border border-border bg-background text-foreground"
            >
              <option value="">Pilih alasan penghapusan...</option>
              <option value="Tidak lagi membutuhkan layanan">Tidak lagi membutuhkan layanan</option>
              <option value="Beralih ke platform lain">Beralih ke platform lain</option>
              <option value="Bisnis sudah tidak beroperasi">Bisnis sudah tidak beroperasi</option>
              <option value="Kekhawatiran privasi data">Kekhawatiran privasi data</option>
              <option value="Kendala teknis / fitur">Kendala teknis / fitur</option>
              <option value="Lainnya">Lainnya</option>
            </select>
          </div>

          {/* Notes textarea */}
          <div>
            <label htmlFor="notes" className="block text-sm font-semibold mb-2.5 text-foreground">
              Catatan Tambahan (Opsional)
            </label>
            <textarea
              id="notes"
              rows={4}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Tuliskan informasi atau pertanyaan tambahan untuk tim verifikasi kami..."
              className="delete-account-form-textarea border border-border bg-background text-foreground"
            />
          </div>

          {/* Consent Checkbox */}
          <div className="rounded-xl bg-secondary/40 border border-border/80" style={{ padding: '20px 24px' }}>
            <label className="flex items-start gap-3.5 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={confirmed}
                onChange={(e) => setConfirmed(e.target.checked)}
                required
                style={{ width: '20px', height: '20px', marginTop: '2px', cursor: 'pointer', flexShrink: 0 }}
                className="rounded border-border text-[var(--brand-primary)]"
              />
              <span className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Saya menyatakan secara sadar bahwa saya adalah pemilik sah akun di atas dan memahami bahwa seluruh data, konfigurasi bot, kontak, dan riwayat chat akan <strong className="text-foreground">dihapus secara permanen</strong> setelah masa tenggang berakhir serta tidak dapat dipulihkan kembali.
              </span>
            </label>
          </div>

          {/* Submit Action */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              type="submit"
              disabled={!confirmed}
              className="delete-account-submit-btn"
            >
              <Send className="w-4 h-4" />
              <span>Kirim Permintaan Hapus Akun</span>
            </button>

            <span className="text-xs sm:text-sm text-muted-foreground text-center sm:text-left">
              Atau kirimkan email langsung ke{' '}
              <a href="mailto:support@responpintar.com" className="text-[var(--brand-primary)] font-medium underline hover:opacity-80">
                support@responpintar.com
              </a>
            </span>
          </div>
        </form>
      )}
    </section>
  );
}
