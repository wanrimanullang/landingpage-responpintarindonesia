import { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: 'Apakah akun yang sudah dihapus dapat dipulihkan kembali?',
    answer:
      'Akun yang diajukan untuk dihapus memiliki masa tenggang (grace period) selama 14 hari. Dalam kurun waktu tersebut, Anda dapat membatalkan proses penghapusan dengan cara login kembali ke dashboard Respon Pintar atau menghubungi tim support. Setelah 14 hari, seluruh data akun akan dihapus permanen dan tidak dapat dipulihkan kembali.',
  },
  {
    question: 'Berapa lama proses penghapusan data secara menyeluruh?',
    answer:
      'Penghapusan data dari sistem produksi aktif dilakukan tepat setelah masa tenggang 14 hari berakhir. Untuk salinan cadangan (encrypted backup archives), data akan terhapus dan ditimpa secara otomatis dalam kurun waktu 30 hingga 90 hari sesuai siklus retensi backup.',
  },
  {
    question: 'Apakah data kontak dan pelanggan saya juga ikut terhapus?',
    answer:
      'Ya. Seluruh data kontak pelanggan, riwayat percakapan (chat logs), tag kontak, dan variabel kustom yang Anda simpan di Respon Pintar akan ikut terhapus secara permanen dari server kami.',
  },
  {
    question: 'Bagaimana dengan sisa masa aktif langganan atau kuota pesan saya?',
    answer:
      'Sesuai Ketentuan Layanan (Terms of Service), sisa masa aktif paket berlangganan atau kuota pesan yang belum terpakai akan otomatis hangus saat akun dihapus dan tidak dapat dikembalikan atau diuangkan (non-refundable).',
  },
  {
    question: 'Apakah koneksi WhatsApp Business saya akan langsung terputus?',
    answer:
      'Ya. Sesi integrasi WhatsApp API / QR session akan langsung dinonaktifkan seketika proses penghapusan akun dimulai, sehingga bot otomatis dan alur kerja (workflow) tidak akan lagi merespons pesan masuk dari pelanggan Anda.',
  },
];

export function DeleteAccountFaq() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section className="bg-card border border-border rounded-2xl p-6 sm:p-10 space-y-8 shadow-sm">
      <div className="flex items-start gap-4 sm:gap-5">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center flex-shrink-0 shadow-sm">
          <HelpCircle className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">Pertanyaan yang Sering Diajukan (FAQ)</h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            Jawaban seputar kebijakan penghapusan akun, pemulihan data, dan retensi sistem di Respon Pintar.
          </p>
        </div>
      </div>

      <div className="space-y-4 pt-2">
        {faqs.map((faq, index) => {
          const isOpen = openFaqIndex === index;
          return (
            <div
              key={index}
              className="border border-border/80 rounded-2xl overflow-hidden bg-background transition-colors hover:border-[var(--brand-primary)]/40 shadow-sm"
            >
              <button
                type="button"
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between p-5 sm:p-6 text-left font-bold text-sm sm:text-base hover:bg-secondary/40 transition gap-4"
              >
                <span className="text-foreground">{faq.question}</span>
                {isOpen ? (
                  <ChevronUp className="w-5 h-5 text-[var(--brand-primary)] flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                )}
              </button>
              {isOpen && (
                <div className="px-5 sm:px-6 pb-6 pt-2 text-sm sm:text-base text-muted-foreground leading-relaxed border-t border-border/50">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
