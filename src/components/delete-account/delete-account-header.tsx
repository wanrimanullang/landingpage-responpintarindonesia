import { ShieldAlert } from 'lucide-react';

export function DeleteAccountHeader() {
  return (
    <div className="text-center">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-6">
        <ShieldAlert className="w-4 h-4 text-[var(--brand-primary)]" />
        <span className="text-sm font-medium">Pengelolaan Akun & Data Pribadi</span>
      </div>

      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
        Penghapusan Akun &{' '}
        <span className="bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] bg-clip-text text-transparent">
          Data Pengguna
        </span>
      </h1>

      <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
        Respon Pintar menghargai privasi dan hak kepemilikan data Anda sesuai regulasi UU PDP No. 27/2022,
        Google Play Store Data Safety, dan Apple App Store Guidelines. Anda dapat menghapus akun dan seluruh
        data terkait kapan saja.
      </p>

      <p className="text-xs sm:text-sm text-muted-foreground mt-3">
        Terakhir diperbarui: 17 Oktober 2026
      </p>
    </div>
  );
}
