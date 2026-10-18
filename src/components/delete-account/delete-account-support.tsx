import { Mail, Phone } from 'lucide-react';

export function DeleteAccountSupport() {
  return (
    <section className="bg-[#111214]/90 border border-[rgba(244,245,247,0.08)] backdrop-blur-md rounded-2xl p-6 sm:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.4)]">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 sm:gap-8">
        <div className="space-y-2">
          <h2 className="text-xl sm:text-2xl font-bold text-[#E9EBEF]">Butuh Bantuan Lebih Lanjut?</h2>
          <p className="text-sm sm:text-base text-[#AEB4BD] max-w-lg leading-relaxed">
            Jika Anda memiliki pertanyaan khusus mengenai perlindungan data pribadi atau menghadapi kendala saat proses pengajuan, tim dukungan kami siap membantu Anda.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3.5 flex-shrink-0">
          <a
            href="mailto:support@responpintar.com"
            className="inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl border border-[rgba(244,245,247,0.2)] bg-transparent hover:bg-white/5 text-sm font-semibold text-[#E9EBEF] transition-all"
          >
            <Mail className="w-4 h-4 text-[#8FE3B0]" />
            <span>support@responpintar.com</span>
          </a>
          <a
            href="https://wa.me/6282189885080?text=Halo%20Tim%20Respon%20Pintar,%20saya%20ingin%20bertanya%20mengenai%20penghapusan%20akun"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl bg-[#E9EBEF] text-[#0B0C0E] border border-white hover:bg-white text-sm font-semibold transition-all shadow-sm"
          >
            <Phone className="w-4 h-4 text-[#0B0C0E]" />
            <span>WhatsApp Support</span>
          </a>
        </div>
      </div>
    </section>
  );
}
