import { AlertTriangle } from 'lucide-react';

export function DeleteAccountWarning() {
  return (
    <div className="bg-red-950/20 border border-red-500/30 rounded-2xl p-6 sm:p-8 flex items-start gap-4 sm:gap-5 backdrop-blur-md shadow-[0_4px_24px_rgba(220,38,38,0.1)]">
      <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center flex-shrink-0 text-red-400">
        <AlertTriangle className="w-5 h-5" />
      </div>
      <div className="space-y-1.5">
        <h2 className="text-base sm:text-lg font-bold text-red-200">
          Peringatan Penting Sebelum Menghapus Akun
        </h2>
        <p className="text-sm sm:text-base text-red-300/80 leading-relaxed">
          Penghapusan akun bersifat <strong className="text-red-200">permanen dan tidak dapat dibatalkan</strong> setelah masa tenggang berakhir.
          Seluruh integrasi WhatsApp Business API, Instagram DM, Telegram, dan live chat inbox agen CS Anda akan terputus seketika. Sisa kuota pesan atau masa aktif langganan otomatis hangus (non-refundable).
        </p>
      </div>
    </div>
  );
}
