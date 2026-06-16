import { useState } from 'react';
import { 
  ArrowLeft, Send, Bot, Building2, Hospital, ShoppingBag, Landmark, TrendingUp, 
  GraduationCap, UtensilsCrossed, Truck, Briefcase, MessageSquare
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface Message {
  id: string;
  role: 'user' | 'ai';
  content: string;
  timestamp: Date;
}

const MAX_USER_MESSAGES = 10;

const industries = [
  { id: 'property', name: 'Property / Real Estate', icon: Building2 },
  { id: 'hospital', name: 'Hospital', icon: Hospital },
  { id: 'clinic', name: 'Clinic', icon: Hospital },
  { id: 'retail', name: 'Retail', icon: ShoppingBag },
  { id: 'bank', name: 'Banking', icon: Landmark },
  { id: 'finance', name: 'Finance / Fintech', icon: TrendingUp },
  { id: 'education', name: 'Education', icon: GraduationCap },
  { id: 'fnb', name: 'F&B / Restaurant', icon: UtensilsCrossed },
  { id: 'logistics', name: 'Logistics', icon: Truck },
  { id: 'corporate', name: 'Corporate / Enterprise', icon: Briefcase },
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
    const industryName = industries.find((i) => i.id === industryId)?.name || 'your business';

    setMessages([
      {
        id: '1',
        role: 'ai',
        content: `Hello! I'm a virtual assistant for ${industryName}. How can I help you today?`,
        timestamp: new Date(),
      },
    ]);
  };

  const getAIResponse = (industry: string, userMessage: string): string => {
    const lowerMsg = userMessage.toLowerCase();

    if (lowerMsg.includes('price') || lowerMsg.includes('cost') || lowerMsg.includes('fee')) {
      return 'For detailed pricing and packages, please visit our Pricing page or speak directly with our sales team.';
    }
    if (lowerMsg.includes('location') || lowerMsg.includes('address') || lowerMsg.includes('office')) {
      return 'Our office is located at Plaza Aminta 5th Floor/504, South Jakarta. Would you like to schedule a visit?';
    }
    if (lowerMsg.includes('hello') || lowerMsg.includes('hi') || lowerMsg.includes('hey')) {
      return 'Hello! Please let me know what you need, and I will do my best to assist you.';
    }

    switch (industry) {
      case 'property':
        return 'We have a wide selection of properties available. Are you looking for residential, commercial, or investment opportunities?';
      case 'hospital':
      case 'clinic':
        return 'We can help you schedule a consultation with our specialists or provide information about our healthcare services.';
      case 'retail':
        return 'Are you looking for a specific product, or do you need help tracking an existing order?';
      case 'bank':
      case 'finance':
        return 'Our financial services and application process are simple and fast. Would you like to know more about our simulations or requirements?';
      case 'education':
        return 'We offer a range of excellent programs. Do you need information about enrollment or our curriculum?';
      case 'fnb':
        return 'You can make a reservation or order from our special menu directly through this chat.';
      case 'logistics':
        return 'Please provide your tracking number for shipment updates, or ask about our delivery services.';
      case 'corporate':
        return 'We are ready to serve your enterprise needs with customised B2B solutions. Is there a specific department you would like to reach?';
      default:
        return 'Thank you for your message. We will assist with your business needs shortly.';
    }
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLimitReached || !selectedIndustry) return;

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
    <main className="pt-16 h-screen flex flex-col bg-background font-sans">

      {/* ===== TOP HEADER BAR ===== */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-card text-sm z-10 relative">
        <div className="flex items-center gap-2 font-semibold text-xs uppercase tracking-widest text-muted-foreground">
          <Bot className="w-4 h-4 text-[var(--brand-primary)]" />
          AI Chatbot Demo
        </div>
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-foreground font-medium text-xs">AI Assistant</span>
            {selectedIndustry && (
              <span className="px-2 py-0.5 bg-[var(--brand-primary)]/10 text-[var(--brand-primary)] rounded-full text-xs font-medium ml-2">
                {industries.find(i => i.id === selectedIndustry)?.name}
              </span>
            )}
          </div>
          <span className="text-muted-foreground text-xs bg-muted px-2 py-1 rounded-md hidden md:block">
            {MAX_USER_MESSAGES - userMessageCount} trials left
          </span>
          <Link to="/" className="p-1.5 rounded-lg hover:bg-accent text-muted-foreground flex items-center gap-2 text-xs transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Back</span>
          </Link>
        </div>
      </div>

      {/* ===== MAIN TWO-PANEL LAYOUT ===== */}
      <div className="flex flex-1 overflow-hidden relative">

        {/* ── LEFT SIDEBAR ── */}
        <div className="w-72 flex-shrink-0 border-r border-border bg-muted/20 hidden md:flex flex-col overflow-y-auto">
          <div className="p-5 border-b border-border">
            <h2 className="font-semibold text-base text-foreground mb-1">Select your industry</h2>
            <p className="text-xs text-muted-foreground leading-relaxed">
              The chatbot will adapt its tone and responses to match your selected industry.
            </p>
          </div>

          <nav className="p-3 flex-1 space-y-1">
            {industries.map((ind) => {
              const Icon = ind.icon;
              const isActive = selectedIndustry === ind.id;
              return (
                <button
                  key={ind.id}
                  onClick={() => handleSelectIndustry(ind.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left text-sm transition-all
                    ${isActive
                      ? 'bg-[var(--brand-primary)]/10 text-[var(--brand-primary)] font-medium shadow-sm'
                      : 'text-muted-foreground hover:bg-card hover:text-foreground'
                    }`}
                >
                  <Icon className="w-4 h-4 flex-shrink-0" />
                  <span>{ind.name}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Mobile Industry Selector */}
        {!selectedIndustry && (
          <div className="md:hidden absolute inset-0 bg-background z-20 flex flex-col p-4 overflow-y-auto">
            <h2 className="font-semibold text-lg text-foreground mb-2">Select your industry</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              The chatbot will adapt its tone and responses to match your selection.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {industries.map((ind) => {
                const Icon = ind.icon;
                return (
                  <button
                    key={ind.id}
                    onClick={() => handleSelectIndustry(ind.id)}
                    className="flex items-center gap-3 px-4 py-4 rounded-xl border border-border bg-card text-left text-sm transition-all hover:border-[var(--brand-primary)]"
                  >
                    <Icon className="w-5 h-5 flex-shrink-0 text-muted-foreground" />
                    <span className="font-medium">{ind.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* ── RIGHT PANEL: Chat Area ── */}
        <div className="flex-1 flex flex-col overflow-hidden bg-background">

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 space-y-6">
            {!selectedIndustry ? (
              <div className="h-full flex flex-col items-center justify-center text-center gap-4 animate-in fade-in duration-500">
                <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                  <MessageSquare className="w-8 h-8 text-muted-foreground" />
                </div>
                <p className="text-muted-foreground text-sm max-w-[250px] leading-relaxed">
                  Select an industry on the left<br />to start your demo conversation
                </p>
              </div>
            ) : (
              <div className="max-w-3xl mx-auto w-full space-y-5">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[85%] sm:max-w-[75%] rounded-2xl px-5 py-3.5 shadow-sm ${
                        msg.role === 'user'
                          ? 'bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] text-white rounded-br-sm'
                          : 'bg-card border border-border text-foreground rounded-bl-sm'
                      }`}
                    >
                      <p className="text-[15px] leading-relaxed">{msg.content}</p>
                      <span className={`text-[10px] opacity-70 mt-2 block text-right ${msg.role === 'user' ? 'text-white/80' : 'text-muted-foreground'}`}>
                        {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-card border border-border rounded-2xl rounded-bl-sm px-5 py-4 flex items-center gap-1.5 shadow-sm">
                      <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Input Bar */}
          <div className="p-4 border-t border-border bg-card">
            <div className="max-w-3xl mx-auto w-full">
              <form onSubmit={handleSendMessage} className="flex items-center gap-3">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  disabled={!selectedIndustry || isLimitReached}
                  placeholder={
                    !selectedIndustry ? "Select an industry first..." :
                    isLimitReached ? "Demo session ended" :
                    "Type your message..."
                  }
                  className="flex-1 bg-background border border-input rounded-xl py-3.5 px-5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary)]/50 transition-all disabled:opacity-50 shadow-sm"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim() || !selectedIndustry || isLimitReached}
                  className="p-3.5 bg-[var(--brand-primary)] text-white rounded-xl hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-sm"
                >
                  <Send className="w-5 h-5" />
                </button>
              </form>
              <div className="mt-2 text-center md:hidden">
                <span className="text-[10px] text-muted-foreground">
                  {MAX_USER_MESSAGES - userMessageCount} trials remaining
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Overlay — limit reached */}
      {isLimitReached && (
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex flex-col items-center justify-center p-6 z-50 animate-in fade-in duration-300">
          <div className="bg-card border border-border rounded-2xl p-8 max-w-md w-full text-center shadow-2xl">
            <div className="w-16 h-16 bg-[var(--brand-primary)]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Bot className="w-8 h-8 text-[var(--brand-primary)]" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-foreground">🎉 Demo Complete!</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              You've used all 10 demo messages. Want to see how our AI can be fully customised for your business?
            </p>
            <div className="space-y-3">
              <a
                href="https://wa.me/6282189885080?text=Hello%2C%20I%20would%20like%20to%20try%20the%20ResponPintar%20AI%20Chatbot%20further"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full py-3 px-4 bg-[#25D366] text-white rounded-lg font-medium hover:bg-[#20bd5a] transition-colors gap-2"
              >
                <MessageSquare className="w-5 h-5" />
                Chat with our Team
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
    </main>
  );
}
