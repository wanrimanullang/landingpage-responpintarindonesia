import { Mail, Phone } from 'lucide-react';

export function DeleteAccountSupport() {
  return (
    <section className="bg-gradient-to-br from-secondary/80 to-secondary/30 border border-border rounded-2xl delete-account-card shadow-sm">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 sm:gap-8">
        <div className="space-y-2">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground">Butuh Bantuan Lebih Lanjut?</h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-lg leading-relaxed">
            Jika Anda memiliki pertanyaan khusus mengenai perlindungan data pribadi atau menghadapi kendala saat proses pengajuan, tim dukungan kami siap membantu Anda.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3.5 flex-shrink-0">
          <a
            href="mailto:support@responpintar.com"
            className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl border border-border bg-background hover:bg-secondary text-sm font-semibold transition-all shadow-sm"
          >
            <Mail className="w-4 h-4 text-[var(--brand-primary)]" />
            <span>support@responpintar.com</span>
          </a>
          <a
            href="https://wa.me/6282189885080?text=Halo%20Tim%20Respon%20Pintar,%20saya%20ingin%20bertanya%20mengenai%20penghapusan%20akun"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl bg-[var(--brand-primary)] text-white hover:opacity-90 text-sm font-semibold transition-all shadow-sm"
          >
            <Phone className="w-4 h-4" />
            <span>WhatsApp Support</span>
          </a>
        </div>
      </div>
    </section>
  );
}
