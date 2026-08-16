import { useState, useEffect, useRef } from 'react';
import {
  X, Send, Bot, Building2, Hospital, ShoppingBag, Landmark, TrendingUp,
  GraduationCap, UtensilsCrossed, Truck, Briefcase, MessageSquare, AlertTriangle,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useChatbotDemoModal } from '../context/chatbot-demo-context';

interface Message {
  id: string;
  role: 'user' | 'ai';
  content: string;
  timestamp: Date;
}

const MAX_USER_MESSAGES = 10;

// Map industry ID → VITE_ env token key
const INDUSTRY_TOKENS: Record<string, string | undefined> = {
  property: import.meta.env.VITE_CHATBOT_TOKEN_PROPERTY,
  hospital: import.meta.env.VITE_CHATBOT_TOKEN_HOSPITAL,
  clinic: import.meta.env.VITE_CHATBOT_TOKEN_CLINIC,
  retail: import.meta.env.VITE_CHATBOT_TOKEN_RETAIL,
  bank: import.meta.env.VITE_CHATBOT_TOKEN_BANK,
  finance: import.meta.env.VITE_CHATBOT_TOKEN_FINANCE,
  education: import.meta.env.VITE_CHATBOT_TOKEN_EDUCATION,
  fnb: import.meta.env.VITE_CHATBOT_TOKEN_FNB,
  logistics: import.meta.env.VITE_CHATBOT_TOKEN_LOGISTICS,
  corporate: import.meta.env.VITE_CHATBOT_TOKEN_CORPORATE,
};

const CHATBOT_BASE_URL: string = import.meta.env.VITE_CHATBOT_BASE_URL || 'https://chat.responpintar.com';

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

// Fallback response when no API token is configured
function getFallbackResponse(industry: string, userMessage: string): string {
  const m = userMessage.toLowerCase();
  if (m.includes('price') || m.includes('cost') || m.includes('fee'))
    return "For detailed pricing and packages, please visit our Pricing page or speak with our sales team.";
  if (m.includes('location') || m.includes('address'))
    return "Our office is at Plaza Aminta 5th Floor/504, South Jakarta. Would you like to schedule a visit?";
  if (m.includes('hello') || m.includes('hi') || m.includes('hey'))
    return "Hello! Please let me know what you need — I'm happy to help.";
  switch (industry) {
    case 'property': return "We have a wide selection of properties. Are you looking for residential, commercial, or investment?";
    case 'hospital':
    case 'clinic': return "We can help schedule a consultation or provide information about our healthcare services.";
    case 'retail': return "Are you looking for a specific product, or need help tracking an existing order?";
    case 'bank':
    case 'finance': return "Our financial application process is simple and fast. Would you like a simulation?";
    case 'education': return "We offer excellent programmes. Do you need information on enrollment or curriculum?";
    case 'fnb': return "You can make a reservation or order from our menu directly through this chat.";
    case 'logistics': return "Provide your tracking number for updates, or ask about our delivery services.";
    case 'corporate': return "We're ready to serve your enterprise with customised B2B solutions. Which department can I connect you to?";
    default: return "Thank you for your message. We'll assist with your business needs shortly.";
  }
}

// Calls the industry-specific Chatwoot / chatbot API
async function sendToChatbotAPI(industry: string, message: string, contactId?: string): Promise<string> {
  const token = INDUSTRY_TOKENS[industry];

  if (!token || token.startsWith('YOUR_')) {
    // No real token configured — use fallback
    return getFallbackResponse(industry, message);
  }

  try {
    const res = await fetch(`${CHATBOT_BASE_URL}/api/v1/widget/conversations`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api_access_token': token,
      },
      body: JSON.stringify({
        message: { content: message, message_type: 'incoming' },
        contact_id: contactId,
      }),
    });

    if (!res.ok) throw new Error(`API error ${res.status}`);
    const data = await res.json();
    return data?.messages?.[0]?.content || getFallbackResponse(industry, message);
  } catch {
    return getFallbackResponse(industry, message);
  }
}

export function ChatbotDemoModal() {
  const { isOpen, closeModal } = useChatbotDemoModal();

  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);
  const [pendingIndustry, setPendingIndustry] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [userMessageCount, setUserMessageCount] = useState(0);
  const [isLimitReached, setIsLimitReached] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (showConfirm) setShowConfirm(false);
        else closeModal();
      }
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [closeModal, showConfirm]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Auto-scroll chat
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  // Reset on close
  useEffect(() => {
    if (!isOpen) {
      setSelectedIndustry(null);
      setPendingIndustry(null);
      setMessages([]);
      setInputValue('');
      setUserMessageCount(0);
      setIsLimitReached(false);
      setIsTyping(false);
      setShowConfirm(false);
    }
  }, [isOpen]);

  const startChat = (id: string) => {
    const name = industries.find(i => i.id === id)?.name || 'your business';
    const token = INDUSTRY_TOKENS[id];
    const hasRealToken = token && !token.startsWith('YOUR_');

    setSelectedIndustry(id);
    setMessages([{
      id: '1',
      role: 'ai',
      content: hasRealToken
        ? `Hello! I'm your AI assistant for ${name}. How can I help you today?`
        : `Hello! I'm a demo assistant for ${name}. How can I help you today?`,
      timestamp: new Date(),
    }]);
    setUserMessageCount(0);
    setIsLimitReached(false);
    setInputValue('');
    setIsTyping(false);
  };

  const handleIndustryClick = (id: string) => {
    if (id === selectedIndustry) return;
    if (messages.length > 0) {
      setPendingIndustry(id);
      setShowConfirm(true);
    } else {
      startChat(id);
    }
  };

  const confirmSwitch = () => {
    if (pendingIndustry) {
      startChat(pendingIndustry);
      setPendingIndustry(null);
    }
    setShowConfirm(false);
  };

  const cancelSwitch = () => {
    setPendingIndustry(null);
    setShowConfirm(false);
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLimitReached || !selectedIndustry) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: inputValue,
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');

    const newCount = userMessageCount + 1;
    setUserMessageCount(newCount);
    if (newCount >= MAX_USER_MESSAGES) setIsLimitReached(true);

    setIsTyping(true);
    try {
      const reply = await sendToChatbotAPI(selectedIndustry, userMsg.content);
      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        role: 'ai',
        content: reply,
        timestamp: new Date(),
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  if (!isOpen) return null;

  const chatActive = !!selectedIndustry;
  const currentIndustryName = industries.find(i => i.id === selectedIndustry)?.name;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-6">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={closeModal} />

      {/* Modal */}
      <div className="relative w-full max-w-4xl h-[88vh] max-h-[720px] bg-card border border-border rounded-2xl shadow-2xl flex flex-col animate-in zoom-in-95 fade-in duration-200 overflow-hidden">

        {/* ── Header ── */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-border bg-card flex-shrink-0">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-7 h-7 rounded-full bg-[var(--brand-primary)]/10 flex items-center justify-center flex-shrink-0">
              <Bot className="w-4 h-4 text-[var(--brand-primary)]" />
            </div>
            <span className="font-semibold text-sm text-foreground truncate">AI Chatbot Demo</span>
            {chatActive ? (
              <span className="hidden sm:flex items-center gap-1 ml-1 px-2 py-0.5 bg-green-500/10 text-green-700 rounded-full text-[11px] font-medium border border-green-500/20 flex-shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                {currentIndustryName}
              </span>
            ) : (
              <span className="hidden sm:flex items-center gap-1 ml-1 px-2 py-0.5 bg-muted text-muted-foreground rounded-full text-[11px] flex-shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50" />
                Waiting
              </span>
            )}
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            {chatActive && (
              <span className="hidden md:block text-xs text-muted-foreground bg-muted px-2.5 py-1 rounded-md">
                {MAX_USER_MESSAGES - userMessageCount} / {MAX_USER_MESSAGES} left
              </span>
            )}
            <button
              onClick={closeModal}
              className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-accent text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* ── Body (2-panel) ── */}
        <div className="flex flex-1 overflow-hidden min-h-0">

          {/* LEFT: Industry sidebar */}
          <div className="w-56 flex-shrink-0 border-r border-border bg-muted/20 flex flex-col overflow-y-auto">
            <div className="px-4 pt-4 pb-3 border-b border-border flex-shrink-0">
              <p className="text-xs font-semibold text-foreground uppercase tracking-wide">Select industry</p>
              <p className="text-[11px] text-muted-foreground mt-0.5 leading-relaxed">Chat adapts to your sector</p>
            </div>
            <nav className="p-2 space-y-0.5 flex-1">
              {industries.map(ind => {
                const Icon = ind.icon;
                const active = selectedIndustry === ind.id;
                return (
                  <button
                    key={ind.id}
                    onClick={() => handleIndustryClick(ind.id)}
                    className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-left text-xs transition-all
                      ${active
                        ? 'bg-green-500/10 text-green-700 font-semibold border border-green-500/20'
                        : 'text-muted-foreground hover:bg-card hover:text-foreground'}`}
                  >
                    <Icon className={`w-3.5 h-3.5 flex-shrink-0 ${active ? 'text-green-600' : ''}`} />
                    <span className="leading-snug flex-1 truncate">{ind.name}</span>
                    {active && <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse flex-shrink-0" />}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* RIGHT: Chat area + confirmation banner */}
          <div className="flex-1 flex flex-col overflow-hidden min-w-0">

            {/* Confirmation banner — slides in INSIDE chat panel, not overlapping */}
            {showConfirm && (
              <div className="flex-shrink-0 mx-4 mt-3 mb-1 bg-amber-50 border border-amber-200 rounded-xl p-4 shadow-sm animate-in slide-in-from-top-2 duration-200">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-amber-900 mb-0.5">End this chat?</p>
                    <p className="text-xs text-amber-700 leading-relaxed">
                      Switching industry will clear your current conversation.
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 mt-3">
                  <button
                    onClick={cancelSwitch}
                    className="flex-1 py-2 px-4 rounded-lg border border-amber-300 bg-white text-amber-800 text-sm font-medium hover:bg-amber-50 transition-colors"
                  >
                    Keep chatting
                  </button>
                  <button
                    onClick={confirmSwitch}
                    className="flex-1 py-2 px-4 rounded-lg bg-amber-500 text-white text-sm font-medium hover:bg-amber-600 transition-colors"
                  >
                    Yes, switch
                  </button>
                </div>
              </div>
            )}

            {/* Chat messages */}
            <div className={`flex-1 overflow-y-auto p-5 space-y-4 transition-colors duration-300 ${chatActive ? 'bg-background' : 'bg-muted/10'}`}>
              {!chatActive ? (
                <div className="h-full flex flex-col items-center justify-center text-center gap-3">
                  <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center">
                    <MessageSquare className="w-7 h-7 text-muted-foreground/50" />
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-[210px]">
                    Select an industry on the left to start your demo
                  </p>
                </div>
              ) : (
                <>
                  {messages.map(msg => (
                    <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed shadow-sm
                        ${msg.role === 'user'
                          ? 'bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] text-white rounded-br-sm'
                          : 'bg-card border border-border text-foreground rounded-bl-sm'}`}
                      >
                        <p>{msg.content}</p>
                        <span className={`text-[10px] opacity-60 mt-1 block text-right ${msg.role === 'user' ? 'text-white/80' : 'text-muted-foreground'}`}>
                          {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </span>
                      </div>
                    </div>
                  ))}
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="bg-card border border-border rounded-2xl rounded-bl-sm px-4 py-3 flex items-center gap-1 shadow-sm">
                        <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                        <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                        <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </>
              )}
            </div>

            {/* Input bar */}
            <div className={`p-4 border-t flex-shrink-0 transition-colors duration-300 bg-card ${chatActive ? 'border-green-500/20' : 'border-border'}`}>
              <form onSubmit={handleSendMessage} className="flex items-center gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={e => setInputValue(e.target.value)}
                  disabled={!chatActive || isLimitReached}
                  placeholder={
                    !chatActive ? 'Select an industry first...' :
                      isLimitReached ? 'Demo session ended' :
                        'Type a message...'
                  }
                  className={`flex-1 bg-background border rounded-xl py-2.5 px-4 text-sm placeholder:text-muted-foreground focus:outline-none disabled:opacity-50 transition-all
                    ${chatActive && !isLimitReached
                      ? 'border-green-400/50 focus:ring-2 focus:ring-green-500/30 focus:border-green-500'
                      : 'border-input focus:ring-2 focus:ring-[var(--brand-primary)]/30'}`}
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim() || !chatActive || isLimitReached}
                  className={`p-2.5 text-white rounded-xl disabled:opacity-40 disabled:cursor-not-allowed transition-all flex-shrink-0
                    ${chatActive && !isLimitReached
                      ? 'bg-green-500 hover:bg-green-600'
                      : 'bg-[var(--brand-primary)] hover:opacity-90'}`}
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* ── Limit Reached Overlay (absolute — only covers right panel) ── */}
        {isLimitReached && (
          <div className="absolute inset-0 bg-background/85 backdrop-blur-sm flex items-center justify-center p-6 z-20 animate-in fade-in duration-200">
            <div className="bg-card border border-border rounded-2xl p-7 max-w-sm w-full text-center shadow-2xl">
              <div className="w-14 h-14 bg-[var(--brand-primary)]/10 rounded-full flex items-center justify-center mx-auto mb-5">
                <Bot className="w-7 h-7 text-[var(--brand-primary)]" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">Demo Complete!</h3>
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                You've used all 10 messages. Want to see a full personalised demo for your business?
              </p>
              <div className="space-y-2.5">
                <a
                  href="https://wa.me/6282189885080?text=Hello%2C%20I%20would%20like%20to%20try%20the%20ResponPintar%20AI%20Chatbot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full py-2.5 px-4 bg-[#25D366] text-white rounded-lg text-sm font-medium hover:bg-[#20bd5a] transition-colors gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  Chat with our Team
                </a>
                <Link
                  to="/demo"
                  onClick={closeModal}
                  className="flex items-center justify-center w-full py-2.5 px-4 border border-border text-foreground rounded-lg text-sm font-medium hover:bg-accent transition-colors"
                >
                  Book a Demo
                </Link>
                <button
                  onClick={closeModal}
                  className="w-full text-xs text-muted-foreground hover:text-foreground transition-colors py-1"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
