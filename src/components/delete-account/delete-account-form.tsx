import { useState } from 'react';
import { Mail, CheckCircle2, Send } from 'lucide-react';

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
    <section id="request-form" className="bg-[#111214]/90 border border-[rgba(244,245,247,0.08)] backdrop-blur-md rounded-2xl p-6 sm:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.4)] space-y-8 scroll-mt-28">
      {/* Section Header */}
      <div className="flex items-start gap-4 sm:gap-5">
        <div className="w-12 h-12 rounded-xl bg-[#16181D] border border-[rgba(244,245,247,0.12)] flex items-center justify-center flex-shrink-0 text-[#8FE3B0]">
          <Mail className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-[#E9EBEF]">Formulir Pengajuan Penghapusan Akun</h2>
          <p className="text-[#AEB4BD] text-sm sm:text-base leading-relaxed">
            Isi formulir di bawah ini dengan lengkap jika Anda ingin tim verifikasi kami memproses pembersihan akun dan seluruh saluran integrasi Anda.
          </p>
        </div>
      </div>

      {formSubmitted ? (
        <div className="bg-[#8FE3B0]/10 border border-[#8FE3B0]/30 rounded-2xl p-8 text-center space-y-4">
          <CheckCircle2 className="w-12 h-12 text-[#8FE3B0] mx-auto" />
          <h3 className="text-xl font-bold text-[#E9EBEF]">
            Permintaan Berhasil Disiapkan
          </h3>
          <p className="text-sm sm:text-base text-[#AEB4BD] max-w-xl mx-auto leading-relaxed">
            Aplikasi email Anda seharusnya terbuka dengan rincian permintaan terisi otomatis. Silakan klik <strong className="text-[#E9EBEF]">"Kirim"</strong> pada email Anda. Tim kami akan memverifikasi permohonan dalam waktu 1–3 hari kerja.
          </p>
          <div className="pt-2">
            <button
              type="button"
              onClick={() => setFormSubmitted(false)}
              className="text-sm font-semibold text-[#8FE3B0] underline underline-offset-4 hover:opacity-80 transition cursor-pointer"
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
              <label htmlFor="email" className="block text-sm font-semibold mb-2.5 text-[#E9EBEF]">
                Alamat Email Terdaftar <span className="text-red-400">*</span>
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="nama@perusahaan.com"
                className="w-full px-4 py-3.5 rounded-xl border border-[rgba(244,245,247,0.12)] bg-[#16181D] text-[#E9EBEF] placeholder:text-[#636B76] text-sm focus:outline-none focus:border-[#8FE3B0]/60 transition"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-semibold mb-2.5 text-[#E9EBEF]">
                Nomor WhatsApp / Telepon <span className="text-red-400">*</span>
              </label>
              <input
                id="phone"
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+62 812-xxxx-xxxx"
                className="w-full px-4 py-3.5 rounded-xl border border-[rgba(244,245,247,0.12)] bg-[#16181D] text-[#E9EBEF] placeholder:text-[#636B76] text-sm focus:outline-none focus:border-[#8FE3B0]/60 transition"
              />
            </div>
          </div>

          {/* Reason selection */}
          <div>
            <label htmlFor="reason" className="block text-sm font-semibold mb-2.5 text-[#E9EBEF]">
              Alasan Penghapusan (Opsional)
            </label>
            <select
              id="reason"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              className="w-full px-4 py-3.5 rounded-xl border border-[rgba(244,245,247,0.12)] bg-[#16181D] text-[#E9EBEF] text-sm focus:outline-none focus:border-[#8FE3B0]/60 transition"
            >
              <option value="" className="bg-[#16181D] text-[#AEB4BD]">Pilih alasan penghapusan...</option>
              <option value="Tidak lagi membutuhkan layanan" className="bg-[#16181D] text-[#E9EBEF]">Tidak lagi membutuhkan layanan</option>
              <option value="Beralih ke platform lain" className="bg-[#16181D] text-[#E9EBEF]">Beralih ke platform lain</option>
              <option value="Bisnis sudah tidak beroperasi" className="bg-[#16181D] text-[#E9EBEF]">Bisnis sudah tidak beroperasi</option>
              <option value="Kekhawatiran privasi data" className="bg-[#16181D] text-[#E9EBEF]">Kekhawatiran privasi data</option>
              <option value="Kendala teknis / fitur" className="bg-[#16181D] text-[#E9EBEF]">Kendala teknis / fitur</option>
              <option value="Lainnya" className="bg-[#16181D] text-[#E9EBEF]">Lainnya</option>
            </select>
          </div>

          {/* Notes textarea */}
          <div>
            <label htmlFor="notes" className="block text-sm font-semibold mb-2.5 text-[#E9EBEF]">
              Catatan Tambahan (Opsional)
            </label>
            <textarea
              id="notes"
              rows={4}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Tuliskan informasi atau pertanyaan tambahan untuk tim verifikasi kami..."
              className="w-full px-4 py-3.5 rounded-xl border border-[rgba(244,245,247,0.12)] bg-[#16181D] text-[#E9EBEF] placeholder:text-[#636B76] text-sm focus:outline-none focus:border-[#8FE3B0]/60 transition resize-y"
            />
          </div>

          {/* Consent Checkbox */}
          <div className="rounded-xl bg-[#16181D]/80 border border-[rgba(244,245,247,0.08)] p-5">
            <label className="flex items-start gap-3.5 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={confirmed}
                onChange={(e) => setConfirmed(e.target.checked)}
                required
                className="w-5 h-5 mt-0.5 rounded border-[rgba(244,245,247,0.2)] bg-[#0B0C0E] text-[#8FE3B0] focus:ring-0 cursor-pointer flex-shrink-0"
              />
              <span className="text-xs sm:text-sm text-[#AEB4BD] leading-relaxed">
                Saya menyatakan secara sadar bahwa saya adalah pemilik sah akun di atas dan memahami bahwa seluruh data, konfigurasi bot omnichannel, kontak, dan riwayat chat akan <strong className="text-[#E9EBEF]">dihapus secara permanen</strong> setelah masa tenggang berakhir serta tidak dapat dipulihkan kembali.
              </span>
            </label>
          </div>

          {/* Submit Action */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              type="submit"
              disabled={!confirmed}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-semibold text-sm transition-all shadow-[0_4px_14px_rgba(220,38,38,0.3)] disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Kirim Permintaan Hapus Akun</span>
            </button>

            <span className="text-xs sm:text-sm text-[#636B76] text-center sm:text-left">
              Atau kirimkan email langsung ke{' '}
              <a href="mailto:support@responpintar.com" className="text-[#8FE3B0] font-medium underline underline-offset-4 hover:opacity-80">
                support@responpintar.com
              </a>
            </span>
          </div>
        </form>
      )}
    </section>
  );
}
