import { AlertTriangle } from 'lucide-react';

export function DeleteAccountWarning() {
  return (
    <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800/60 rounded-2xl p-6 flex items-start gap-4 shadow-sm">
      <AlertTriangle className="w-6 h-6 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
      <div className="space-y-1">
        <h2 className="text-base font-semibold text-red-800 dark:text-red-300">
          Peringatan Penting Sebelum Menghapus Akun
        </h2>
        <p className="text-sm text-red-700 dark:text-red-400 leading-relaxed">
          Penghapusan akun bersifat <strong>permanen dan tidak dapat dibatalkan</strong> setelah masa tenggang berakhir.
          Seluruh integrasi WhatsApp bot Anda akan berhenti bekerja, dan sisa masa aktif langganan atau kuota pesan akan
          otomatis hangus (non-refundable).
        </p>
      </div>
    </div>
  );
}
