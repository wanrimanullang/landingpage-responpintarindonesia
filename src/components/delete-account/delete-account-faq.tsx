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
      'Ya. Seluruh data kontak pelanggan, riwayat percakapan (chat logs), tag kontak, dan variabel kustom saluran WhatsApp, Instagram, dan Telegram yang Anda simpan di Respon Pintar akan ikut terhapus secara permanen dari server kami.',
  },
  {
    question: 'Bagaimana dengan sisa masa aktif langganan atau kuota pesan saya?',
    answer:
      'Sesuai Ketentuan Layanan (Terms of Service), sisa masa aktif paket berlangganan atau kuota pesan yang belum terpakai akan otomatis hangus saat akun dihapus dan tidak dapat dikembalikan atau diuangkan (non-refundable).',
  },
  {
    question: 'Apakah koneksi WhatsApp Business saya akan langsung terputus?',
    answer:
      'Ya. Sesi integrasi WhatsApp Cloud API / QR session akan langsung dinonaktifkan seketika proses penghapusan akun dimulai, sehingga sistem omnichannel tidak lagi menerima atau merespons pesan masuk dari pelanggan Anda.',
  },
];

export function DeleteAccountFaq() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section className="bg-[#111214]/90 border border-[rgba(244,245,247,0.08)] backdrop-blur-md rounded-2xl p-6 sm:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.4)] space-y-8">
      <div className="flex items-start gap-4 sm:gap-5">
        <div className="w-12 h-12 rounded-xl bg-[#16181D] border border-[rgba(244,245,247,0.12)] flex items-center justify-center flex-shrink-0 text-[#8FE3B0]">
          <HelpCircle className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-[#E9EBEF]">Pertanyaan yang Sering Diajukan (FAQ)</h2>
          <p className="text-[#AEB4BD] text-sm sm:text-base leading-relaxed">
            Jawaban seputar kebijakan penghapusan akun, pemulihan data, dan retensi sistem di Respon Pintar.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-3.5 pt-1">
        {faqs.map((faq, index) => {
          const isOpen = openFaqIndex === index;
          return (
            <div
              key={index}
              className="rounded-xl border border-[rgba(244,245,247,0.08)] bg-[#16181D]/60 hover:border-[rgba(244,245,247,0.16)] transition-all overflow-hidden"
            >
              <button
                type="button"
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between p-5 text-left font-semibold text-sm sm:text-base text-[#E9EBEF] cursor-pointer gap-4"
              >
                <span>{faq.question}</span>
                {isOpen ? (
                  <ChevronUp className="w-5 h-5 text-[#8FE3B0] flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-[#636B76] flex-shrink-0" />
                )}
              </button>
              {isOpen && (
                <div className="px-5 pb-5 pt-1 text-sm text-[#AEB4BD] leading-relaxed border-t border-[rgba(244,245,247,0.06)]">
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
