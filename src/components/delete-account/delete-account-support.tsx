import { Mail, Phone } from 'lucide-react';

export function DeleteAccountSupport() {
  return (
    <section className="bg-gradient-to-br from-secondary/80 to-secondary/30 border border-border rounded-2xl p-6 sm:p-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2">
          <h2 className="text-xl font-bold">Butuh Bantuan Lebih Lanjut?</h2>
          <p className="text-sm text-muted-foreground max-w-lg">
            Jika Anda memiliki pertanyaan khusus mengenai perlindungan data pribadi atau menghadapi kendala saat proses penghapusan, tim dukungan kami siap membantu Anda.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
          <a
            href="mailto:support@responpintar.com"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-border bg-background hover:bg-secondary text-sm font-medium transition"
          >
            <Mail className="w-4 h-4 text-[var(--brand-primary)]" />
            <span>support@responpintar.com</span>
          </a>
          <a
            href="https://wa.me/6282189885080?text=Halo%20Tim%20Respon%20Pintar,%20saya%20ingin%20bertanya%20mengenai%20penghapusan%20akun"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[var(--brand-primary)] text-white hover:opacity-90 text-sm font-medium transition"
          >
            <Phone className="w-4 h-4" />
            <span>WhatsApp Support</span>
          </a>
        </div>
      </div>
    </section>
  );
}
