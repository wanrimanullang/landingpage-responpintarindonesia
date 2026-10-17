import { AlertTriangle } from 'lucide-react';

export function DeleteAccountWarning() {
  return (
    <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800/60 rounded-2xl p-6 sm:p-8 flex items-start gap-4 sm:gap-5 shadow-sm">
      <div className="w-10 h-10 rounded-xl bg-red-100 dark:bg-red-900/50 flex items-center justify-center flex-shrink-0 text-red-600 dark:text-red-400">
        <AlertTriangle className="w-5 h-5" />
      </div>
      <div className="space-y-1.5">
        <h2 className="text-base sm:text-lg font-bold text-red-800 dark:text-red-300">
          Peringatan Penting Sebelum Menghapus Akun
        </h2>
        <p className="text-sm sm:text-base text-red-700 dark:text-red-400 leading-relaxed">
          Penghapusan akun bersifat <strong>permanen dan tidak dapat dibatalkan</strong> setelah masa tenggang berakhir.
          Seluruh integrasi WhatsApp bot Anda akan berhenti bekerja, dan sisa masa aktif langganan atau kuota pesan akan
          otomatis hangus (non-refundable).
        </p>
      </div>
    </div>
  );
}
