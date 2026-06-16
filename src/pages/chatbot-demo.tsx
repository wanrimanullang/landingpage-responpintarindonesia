import { useState } from 'react';
import { ArrowLeft, Send, Bot, Building2, Hospital, ShoppingBag, Landmark, TrendingUp, GraduationCap, UtensilsCrossed, Truck, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Message {
  id: string;
  role: 'user' | 'ai';
  content: string;
  timestamp: Date;
}

const MAX_USER_MESSAGES = 10;

const industries = [
  { id: 'properti', name: 'Properti / Real Estate', icon: Building2 },
  { id: 'rs', name: 'Rumah Sakit', icon: Hospital },
  { id: 'klinik', name: 'Klinik', icon: Hospital },
  { id: 'retail', name: 'Retail', icon: ShoppingBag },
  { id: 'bank', name: 'Bank / Perbankan', icon: Landmark },
  { id: 'finance', name: 'Finance / Fintech', icon: TrendingUp },
  { id: 'pendidikan', name: 'Pendidikan', icon: GraduationCap },
  { id: 'fb', name: 'F&B / Restoran', icon: UtensilsCrossed },
  { id: 'logistik', name: 'Logistik', icon: Truck },
  { id: 'korporat', name: 'Korporat / Enterprise', icon: Briefcase },
];

export default function ChatbotDemoPage() {
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [userMessageCount, setUserMessageCount] = useState(0);
  const [isLimitReached, setIsLimitReached] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  const handleSelectIndustry = (industryId: string) => {
    setSelectedIndustry(industryId);
    const industryName = industries.find((i) => i.id === industryId)?.name || 'Bisnis Anda';
    
    // Initial AI message
    setMessages([
      {
        id: '1',
        role: 'ai',
        content: `Halo! Saya adalah asisten virtual untuk bisnis ${industryName}. Ada yang bisa saya bantu hari ini?`,
        timestamp: new Date(),
      },
    ]);
  };

  const getAIResponse = (industry: string, userMessage: string): string => {
    const lowerMsg = userMessage.toLowerCase();
    
    // Basic contextual responses
    if (lowerMsg.includes('harga') || lowerMsg.includes('biaya')) {
      return 'Untuk detail harga dan paket, Anda bisa mengunjungi halaman Pricing kami atau berbicara dengan tim sales.';
    }
    if (lowerMsg.includes('lokasi') || lowerMsg.includes('alamat')) {
      return 'Lokasi kami berada di Plaza Aminta 5th Floor/504, Jakarta Selatan. Apakah Anda ingin mengatur jadwal kunjungan?';
    }
    if (lowerMsg.includes('halo') || lowerMsg.includes('hai')) {
      return 'Halo! Silakan sampaikan kebutuhan Anda, dan saya akan membantu memberikan informasi yang tepat.';
    }

    // Industry specific responses
    switch (industry) {
      case 'properti':
        return 'Kami memiliki banyak pilihan properti untuk Anda. Apakah Anda mencari hunian, komersial, atau investasi?';
      case 'rs':
      case 'klinik':
        return 'Kami dapat membantu Anda mengatur jadwal konsultasi dengan dokter spesialis kami atau memberikan informasi layanan kesehatan.';
      case 'retail':
        return 'Apakah Anda mencari produk tertentu atau butuh bantuan tentang status pesanan Anda?';
      case 'bank':
      case 'finance':
        return 'Proses pengajuan dan layanan finansial kami mudah dan cepat. Ingin tahu lebih lanjut tentang simulasi atau persyaratan?';
      case 'pendidikan':
        return 'Kami menyediakan berbagai program unggulan. Apakah Anda butuh informasi pendaftaran atau kurikulum?';
      case 'fb':
        return 'Anda bisa melakukan reservasi atau memesan menu spesial kami langsung melalui chat ini.';
      case 'logistik':
        return 'Silakan berikan nomor resi Anda untuk pelacakan, atau tanyakan tentang layanan pengiriman kami.';
      case 'korporat':
        return 'Kami siap melayani kebutuhan enterprise Anda dengan solusi B2B yang dikustomisasi. Ada departemen spesifik yang ingin Anda hubungi?';
      default:
        return 'Terima kasih atas pesan Anda. Kami akan segera membantu kebutuhan bisnis Anda.';
    }
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLimitReached) return;

    const newUserMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: inputValue,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, newUserMsg]);
    setInputValue('');
    
    const newCount = userMessageCount + 1;
    setUserMessageCount(newCount);

    if (newCount >= MAX_USER_MESSAGES) {
      setIsLimitReached(true);
    }

    setIsTyping(true);

    // Simulate AI response delay
    setTimeout(() => {
      setIsTyping(false);
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        role: 'ai',
        content: getAIResponse(selectedIndustry || '', newUserMsg.content),
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiResponse]);
    }, 1000);
  };

  return (
    <main className="pt-20 pb-0 min-h-screen flex flex-col bg-background text-foreground font-sans">
      {/* Header */}
      <div className="px-4 sm:px-6 lg:px-8 py-6 border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-20">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <div className="flex items-center gap-2">
            <Bot className="w-5 h-5 text-[var(--brand-primary)]" />
            <h1 className="text-lg font-semibold">Coba AI ChatBot</h1>
          </div>
          <div className="w-24" />
        </div>
      </div>

      <div className="flex-1 w-full relative max-w-5xl mx-auto p-4 sm:p-6 lg:p-8 flex flex-col">
        {!selectedIndustry ? (
          /* Step 1: Select Industry */
          <div className="flex-1 flex flex-col items-center justify-center py-12 animate-in fade-in zoom-in duration-500">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-center text-foreground">Pilih Industri Bisnis Anda</h2>
            <p className="text-muted-foreground mb-10 text-center max-w-lg">
              Pilih industri untuk melihat bagaimana AI ChatBot kami menyesuaikan gaya bahasa dan respons untuk pelanggan Anda.
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 w-full">
              {industries.map((ind) => {
                const Icon = ind.icon;
                return (
                  <button
                    key={ind.id}
                    onClick={() => handleSelectIndustry(ind.id)}
                    className="flex flex-col items-center gap-3 p-6 rounded-2xl border border-border bg-card hover:border-[var(--brand-primary)] hover:bg-accent transition-all group shadow-sm"
                  >
                    <Icon className="w-8 h-8 text-muted-foreground group-hover:text-[var(--brand-primary)] transition-colors" />
                    <span className="text-sm font-medium text-center text-foreground">{ind.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        ) : (
          /* Step 2: Chat Interface */
          <div className="flex-1 flex flex-col max-w-3xl mx-auto w-full border border-border rounded-2xl overflow-hidden bg-card shadow-2xl relative">
            
            {/* Chat Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-5 py-3 ${
                      msg.role === 'user'
                        ? 'bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] text-white rounded-br-sm'
                        : 'bg-muted border border-border text-foreground rounded-bl-sm'
                    }`}
                  >
                    <p className="text-[15px] leading-relaxed">{msg.content}</p>
                    <span className={`text-[10px] opacity-70 mt-2 block text-right ${msg.role === 'user' ? 'text-white' : 'text-muted-foreground'}`}>
                      {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-muted border border-border rounded-2xl rounded-bl-sm px-5 py-4 flex items-center gap-1">
                    <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className="p-4 bg-muted/30 border-t border-border">
              {/* Counter Bar */}
              <div className="mb-3 flex items-center justify-between text-xs text-muted-foreground px-1">
                <span>Sisa percobaan: {MAX_USER_MESSAGES - userMessageCount}/{MAX_USER_MESSAGES}</span>
                <div className="w-32 h-1.5 bg-secondary rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] transition-all duration-500"
                    style={{ width: `${(userMessageCount / MAX_USER_MESSAGES) * 100}%` }}
                  />
                </div>
              </div>

              <form onSubmit={handleSendMessage} className="relative flex items-center gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  disabled={isLimitReached}
                  placeholder={isLimitReached ? "Sesi demo berakhir" : "Ketik pesan Anda..."}
                  className="flex-1 bg-background border border-input rounded-full py-3 pl-5 pr-12 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary)]/50 focus:border-[var(--brand-primary)] transition-colors disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim() || isLimitReached}
                  className="absolute right-2 p-2 bg-[var(--brand-primary)] text-white rounded-full hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>

            {/* Overlay for End of Demo */}
            {isLimitReached && (
              <div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex flex-col items-center justify-center p-6 z-10 animate-in fade-in duration-300">
                <div className="bg-card border border-border rounded-2xl p-8 max-w-md w-full text-center shadow-2xl">
                  <div className="w-16 h-16 bg-[var(--brand-primary)]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Bot className="w-8 h-8 text-[var(--brand-primary)]" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-foreground">🎉 Demo Selesai!</h3>
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    Anda telah mencapai batas 10 percakapan. Penasaran bagaimana AI kami dapat disesuaikan lebih lanjut untuk bisnis Anda?
                  </p>
                  <div className="space-y-3">
                    <a
                      href="https://wa.me/6282189885080?text=Halo%20saya%20ingin%20mencoba%20lebih%20lanjut%20AI%20ChatBot%20ResponPintar"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-full py-3 px-4 bg-[#25D366] text-white rounded-lg font-medium hover:bg-[#20bd5a] transition-colors gap-2"
                    >
                      <MessageCircle className="w-5 h-5" />
                      Chat dengan Admin
                    </a>
                    <Link
                      to="/demo"
                      className="flex items-center justify-center w-full py-3 px-4 bg-transparent border border-border text-foreground rounded-lg font-medium hover:bg-accent transition-colors"
                    >
                      Book a Demo
                    </Link>
                  </div>
                </div>
              </div>
            )}

          </div>
        )}
      </div>
    </main>
  );
}

// Temporary icon fallback if MessageCircle isn't imported above
function MessageCircle(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    </svg>
  );
}
