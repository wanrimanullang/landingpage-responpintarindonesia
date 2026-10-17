import { ShieldAlert } from 'lucide-react';

export function DeleteAccountHeader() {
  return (
    <div className="text-center">
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[rgba(244,245,247,0.12)] bg-[#16181D]/80 text-[#AEB4BD] text-xs font-mono tracking-wider uppercase mb-6 backdrop-blur-md">
        <ShieldAlert className="w-3.5 h-3.5 text-[#8FE3B0]" />
        <span>Pengelolaan Akun & Data Pribadi</span>
      </div>

      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#E9EBEF] mb-4">
        Penghapusan Akun &{' '}
        <span className="chrome-text">
          Data Pengguna
        </span>
      </h1>

      <p className="text-base sm:text-lg text-[#AEB4BD] max-w-2xl mx-auto leading-relaxed">
        Respon Pintar menghargai privasi dan hak kepemilikan data bisnis Anda sesuai regulasi UU PDP No. 27/2022,
        Google Play Store Data Safety, dan Apple App Store Guidelines. Anda dapat menghapus akun dan seluruh
        data saluran omnichannel terkait kapan saja.
      </p>

      <p className="text-xs sm:text-sm font-mono text-[#636B76] mt-3">
        Terakhir diperbarui: 17 Oktober 2026 • Platform Omnichannel Customer Service
      </p>
    </div>
  );
}
