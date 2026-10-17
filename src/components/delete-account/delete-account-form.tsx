import { useState } from 'react';
import { Mail, CheckCircle2 } from 'lucide-react';

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
    <section id="request-form" className="bg-card border border-border rounded-2xl p-6 sm:p-8 space-y-6 scroll-mt-24">
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center flex-shrink-0">
          <Mail className="w-5 h-5 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-1">Formulir Pengajuan Penghapusan Akun</h2>
          <p className="text-muted-foreground text-sm">
            Isi data di bawah ini untuk mengajukan permintaan penghapusan akun jika Anda tidak dapat login ke dashboard.
          </p>
        </div>
      </div>

      {formSubmitted ? (
        <div className="bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 rounded-xl p-6 text-center space-y-3">
          <CheckCircle2 className="w-10 h-10 text-emerald-600 dark:text-emerald-400 mx-auto" />
          <h3 className="text-lg font-semibold text-emerald-800 dark:text-emerald-300">
            Permintaan Berhasil Disiapkan
          </h3>
          <p className="text-sm text-emerald-700 dark:text-emerald-400 max-w-lg mx-auto">
            Aplikasi email Anda seharusnya terbuka dengan rincian permintaan terisi otomatis. Silakan klik "Kirim" pada email Anda. Tim kami akan memverifikasi permohonan dalam waktu 1-3 hari kerja.
          </p>
          <button
            type="button"
            onClick={() => setFormSubmitted(false)}
            className="mt-2 text-xs font-semibold text-emerald-800 dark:text-emerald-300 underline hover:opacity-80"
          >
            Kirim formulir lain
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 pt-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="email" className="block text-xs font-semibold mb-1 text-foreground">
                Alamat Email Terdaftar <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="nama@email.com"
                className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary)] transition"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-xs font-semibold mb-1 text-foreground">
                Nomor WhatsApp / Telepon <span className="text-red-500">*</span>
              </label>
              <input
                id="phone"
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+62 812-xxxx-xxxx"
                className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary)] transition"
              />
            </div>
          </div>

          <div>
            <label htmlFor="reason" className="block text-xs font-semibold mb-1 text-foreground">
              Alasan Penghapusan (Opsional)
            </label>
            <select
              id="reason"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary)] transition"
            >
              <option value="">Pilih alasan...</option>
              <option value="Tidak lagi membutuhkan layanan">Tidak lagi membutuhkan layanan</option>
              <option value="Beralih ke platform lain">Beralih ke platform lain</option>
              <option value="Bisnis sudah tidak beroperasi">Bisnis sudah tidak beroperasi</option>
              <option value="Kekhawatiran privasi data">Kekhawatiran privasi data</option>
              <option value="Kendala teknis / fitur">Kendala teknis / fitur</option>
              <option value="Lainnya">Lainnya</option>
            </select>
          </div>

          <div>
            <label htmlFor="notes" className="block text-xs font-semibold mb-1 text-foreground">
              Catatan Tambahan (Opsional)
            </label>
            <textarea
              id="notes"
              rows={3}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Informasi tambahan untuk mempercepat verifikasi akun Anda..."
              className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary)] transition resize-none"
            />
          </div>

          <div className="pt-2">
            <label className="flex items-start gap-3 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={confirmed}
                onChange={(e) => setConfirmed(e.target.checked)}
                required
                className="mt-1 w-4 h-4 rounded border-border text-[var(--brand-primary)] focus:ring-[var(--brand-primary)]"
              />
              <span className="text-xs text-muted-foreground leading-relaxed">
                Saya menyatakan secara sadar bahwa saya adalah pemilik sah dari akun di atas dan memahami bahwa seluruh data, alur bot, kontak, dan riwayat pesan akan <strong>dihapus permanen</strong> serta tidak dapat dipulihkan kembali.
              </span>
            </label>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
            <button
              type="submit"
              disabled={!confirmed}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-red-600 hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold text-sm transition-colors duration-200 shadow-sm"
            >
              Kirim Permintaan Hapus Akun
            </button>
            <span className="text-xs text-muted-foreground text-center sm:text-left">
              Atau email langsung ke{' '}
              <a href="mailto:support@responpintar.com" className="text-[var(--brand-primary)] underline">
                support@responpintar.com
              </a>
            </span>
          </div>
        </form>
      )}
    </section>
  );
}
