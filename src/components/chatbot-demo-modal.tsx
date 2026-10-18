import { useState, useEffect, useRef } from 'react';
import {
  X, Send, Bot, Building2, Hospital, ShoppingBag, Landmark, TrendingUp,
  GraduationCap, UtensilsCrossed, Truck, Briefcase, MessageSquare, AlertTriangle,
  Activity,
} from 'lucide-react';
import { useChatbotDemoModal } from '../context/chatbot-demo-context';

interface Message {
  id: string;
  role: 'user' | 'ai';
  content: string;
  timestamp: Date;
}

const MAX_USER_MESSAGES = 10;

export const DEMO_INDUSTRIES = [
  { id: 'property', name: 'Property / Real Estate', icon: Building2 },
  { id: 'hospital', name: 'Hospital', icon: Hospital },
  { id: 'clinic', name: 'Clinic', icon: Activity },
  { id: 'retail', name: 'Retail', icon: ShoppingBag },
  { id: 'banking', name: 'Banking', icon: Landmark },
  { id: 'fintech', name: 'Finance / Fintech', icon: TrendingUp },
  { id: 'education', name: 'Education', icon: GraduationCap },
  { id: 'fnb', name: 'F&B / Restaurant', icon: UtensilsCrossed },
  { id: 'logistics', name: 'Logistics', icon: Truck },
  { id: 'corporate', name: 'Corporate / Enterprise', icon: Briefcase },
];

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

  // Escape key handler
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
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Auto-scroll chat messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  // Reset state when modal is closed
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
    const industryObj = DEMO_INDUSTRIES.find(i => i.id === id);
    const name = industryObj?.name || 'bisnis Anda';

    setSelectedIndustry(id);
    setMessages([
      {
        id: '1',
        role: 'ai',
        content: `Halo! Saya adalah asisten virtual cerdas untuk ${name}. Ada yang bisa saya bantu hari ini?`,
        timestamp: new Date(),
      },
    ]);
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

  const handleSendMessage = (e: React.FormEvent) => {
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
    if (newCount >= MAX_USER_MESSAGES) {
      setIsLimitReached(true);
    }
  };

  if (!isOpen) return null;

  const chatActive = !!selectedIndustry;
  const currentIndustry = DEMO_INDUSTRIES.find(i => i.id === selectedIndustry);

  return (
    <div
      className="demo-modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="demo-modal-title"
      onClick={closeModal}
    >
      {/* Modal Dialog Window: Desktop max-w 960px, h 640px, rounded 12px, border 1px / Mobile fullscreen */}
      <div
        className="demo-modal-dialog"
        onClick={e => e.stopPropagation()}
      >
        {/* Header: height 56px, padding 0 16px, border-bottom */}
        <header className="demo-modal-header">
          <div className="demo-modal-header-left">
            <div className="demo-modal-header-icon">
              <Bot className="w-4 h-4" />
            </div>
            <h2 id="demo-modal-title" className="demo-modal-header-title">
              AI Chatbot Demo
            </h2>
            <span className="demo-modal-badge">
              <span className="demo-modal-badge-dot" />
              {chatActive ? currentIndustry?.name : 'Demo'}
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexShrink: 0 }}>
            {chatActive && (
              <span className="demo-modal-quota">
                {MAX_USER_MESSAGES - userMessageCount} dari {MAX_USER_MESSAGES} pesan tersisa
              </span>
            )}

            {/* Close button: Visual 32x32 inside hit target min 44x44 */}
            <button
              onClick={closeModal}
              className="demo-close-hit-target"
              aria-label="Tutup modal demo"
            >
              <span className="demo-close-visual-box">
                <X className="w-4 h-4" />
              </span>
            </button>
          </div>
        </header>

        {/* Body: Sidebar (260px) + Chat Panel */}
        <div className="demo-modal-body">
          {/* Left Sidebar */}
          <aside className="demo-modal-sidebar">
            <div className="demo-sidebar-header">
              <p className="demo-sidebar-title">Select industry</p>
              <p className="demo-sidebar-subtitle">Chat adapts to your sector</p>
            </div>

            <nav className="demo-sidebar-nav" aria-label="Industri chatbot demo">
              {DEMO_INDUSTRIES.map(ind => {
                const Icon = ind.icon;
                const isSelected = selectedIndustry === ind.id;
                return (
                  <button
                    key={ind.id}
                    onClick={() => handleIndustryClick(ind.id)}
                    className={`demo-industry-item ${isSelected ? 'is-selected' : ''}`}
                    aria-pressed={isSelected}
                  >
                    <Icon className="w-4 h-4 shrink-0" style={{ color: isSelected ? 'var(--demo-accent-green)' : 'var(--demo-modal-text-muted)' }} />
                    <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', flex: 1, textAlign: 'left' }}>
                      {ind.name}
                    </span>
                    {isSelected && (
                      <span className="demo-modal-badge-dot" style={{ marginLeft: '4px', flexShrink: 0 }} />
                    )}
                  </button>
                );
              })}
            </nav>
          </aside>

          {/* Right Chat Panel */}
          <main className="demo-chat-panel">
            {/* Confirmation Banner for Switching Industry */}
            {showConfirm && (
              <div style={{
                margin: '16px',
                padding: '16px',
                borderRadius: '8px',
                border: '1px solid rgba(245, 158, 11, 0.3)',
                backgroundColor: 'rgba(245, 158, 11, 0.1)',
                color: '#fef3c7',
                zIndex: 20,
              }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" style={{ marginTop: '2px' }} />
                  <div style={{ flex: 1, fontSize: '12px' }}>
                    <p style={{ fontWeight: 600, color: '#fef3c7' }}>Ganti industri demo?</p>
                    <p style={{ color: 'rgba(254, 243, 199, 0.8)', marginTop: '4px' }}>
                      Mengganti industri akan mereset percakapan yang sedang berlangsung.
                    </p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '8px', marginTop: '12px' }}>
                  <button
                    onClick={cancelSwitch}
                    style={{
                      flex: 1,
                      padding: '8px 12px',
                      borderRadius: '6px',
                      border: '1px solid var(--demo-modal-border)',
                      backgroundColor: 'var(--demo-modal-bg)',
                      color: 'var(--demo-modal-text-main)',
                      fontSize: '12px',
                      cursor: 'pointer',
                    }}
                  >
                    Lanjutkan Chat Ini
                  </button>
                  <button
                    onClick={confirmSwitch}
                    style={{
                      flex: 1,
                      padding: '8px 12px',
                      borderRadius: '6px',
                      border: 'none',
                      backgroundColor: '#f59e0b',
                      color: '#000000',
                      fontSize: '12px',
                      fontWeight: 600,
                      cursor: 'pointer',
                    }}
                  >
                    Ya, Ganti Industri
                  </button>
                </div>
              </div>
            )}

            {/* Chat Messages */}
            <div className="demo-chat-messages">
              {!chatActive ? (
                /* Empty state */
                <div className="demo-empty-state">
                  <div className="demo-empty-icon-wrap">
                    <MessageSquare className="w-6 h-6" style={{ opacity: 0.7 }} />
                  </div>
                  <h3 style={{ fontSize: '14px', fontWeight: 600, color: 'var(--demo-modal-text-main)' }}>
                    Pilih industri untuk memulai
                  </h3>
                  <p style={{ fontSize: '12px', color: 'var(--demo-modal-text-muted)', maxWidth: '260px', lineHeight: 1.5 }}>
                    Pilih salah satu sektor bisnis di sidebar untuk mencoba simulasi alur AI Customer Service Respon Pintar.
                  </p>
                </div>
              ) : (
                <>
                  {messages.map(msg => {
                    const isUser = msg.role === 'user';
                    return (
                      <div
                        key={msg.id}
                        style={{
                          display: 'flex',
                          gap: '10px',
                          alignItems: 'flex-end',
                          justifyContent: isUser ? 'flex-end' : 'flex-start',
                        }}
                      >
                        {!isUser && (
                          <div style={{
                            width: '28px',
                            height: '28px',
                            borderRadius: '9999px',
                            border: '1px solid var(--demo-modal-border)',
                            backgroundColor: 'var(--demo-accent-badge-bg)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'var(--demo-accent-green)',
                            flexShrink: 0,
                            marginBottom: '4px',
                          }}>
                            <Bot className="w-3.5 h-3.5" />
                          </div>
                        )}
                        <div
                          style={{
                            maxWidth: '75%',
                            borderRadius: '12px',
                            borderBottomRightRadius: isUser ? '2px' : '12px',
                            borderBottomLeftRadius: !isUser ? '2px' : '12px',
                            padding: '10px 14px',
                            fontSize: '13px',
                            lineHeight: 1.5,
                            backgroundColor: isUser ? 'var(--demo-bubble-user-bg)' : 'var(--demo-bubble-bot-bg)',
                            color: isUser ? 'var(--demo-bubble-user-text)' : 'var(--demo-bubble-bot-text)',
                            border: !isUser ? '1px solid var(--demo-bubble-bot-border)' : 'none',
                            boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
                          }}
                        >
                          <p>{msg.content}</p>
                          <span
                            style={{
                              display: 'block',
                              fontSize: '10px',
                              marginTop: '4px',
                              textAlign: 'right',
                              opacity: 0.75,
                              color: isUser ? '#ffffff' : 'var(--demo-modal-text-sub)',
                            }}
                          >
                            {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </span>
                        </div>
                      </div>
                    );
                  })}

                  {isTyping && (
                    <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-end', justifyContent: 'flex-start' }}>
                      <div style={{
                        width: '28px',
                        height: '28px',
                        borderRadius: '9999px',
                        border: '1px solid var(--demo-modal-border)',
                        backgroundColor: 'var(--demo-accent-badge-bg)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--demo-accent-green)',
                        flexShrink: 0,
                      }}>
                        <Bot className="w-3.5 h-3.5" />
                      </div>
                      <div style={{
                        backgroundColor: 'var(--demo-bubble-bot-bg)',
                        border: '1px solid var(--demo-bubble-bot-border)',
                        borderRadius: '12px',
                        borderBottomLeftRadius: '2px',
                        padding: '10px 14px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                      }}>
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--demo-modal-text-muted)] animate-bounce" style={{ animationDelay: '0ms' }} />
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--demo-modal-text-muted)] animate-bounce" style={{ animationDelay: '150ms' }} />
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--demo-modal-text-muted)] animate-bounce" style={{ animationDelay: '300ms' }} />
                      </div>
                    </div>
                  )}

                  <div ref={messagesEndRef} />
                </>
              )}
            </div>

            {/* Footer Input */}
            <footer className="demo-chat-footer">
              <form onSubmit={handleSendMessage} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <input
                  type="text"
                  value={inputValue}
                  onChange={e => setInputValue(e.target.value)}
                  disabled={!chatActive || isLimitReached}
                  placeholder={
                    !chatActive
                      ? 'Pilih industri terlebih dahulu...'
                      : isLimitReached
                      ? 'Sesi demo selesai'
                      : 'Ketik pesan Anda...'
                  }
                  style={{
                    flex: 1,
                    height: '42px',
                    padding: '0 14px',
                    borderRadius: '8px',
                    border: '1px solid var(--demo-input-border)',
                    backgroundColor: 'var(--demo-input-bg)',
                    color: 'var(--demo-modal-text-main)',
                    fontSize: '13px',
                    outline: 'none',
                    transition: 'border-color 0.15s ease',
                  }}
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim() || !chatActive || isLimitReached}
                  style={{
                    minWidth: '44px',
                    height: '42px',
                    padding: '0 16px',
                    borderRadius: '8px',
                    border: 'none',
                    backgroundColor: 'var(--demo-accent-green)',
                    color: '#0B0C0E',
                    fontSize: '12px',
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    cursor: !inputValue.trim() || !chatActive || isLimitReached ? 'not-allowed' : 'pointer',
                    opacity: !inputValue.trim() || !chatActive || isLimitReached ? 0.45 : 1,
                    transition: 'opacity 0.15s ease',
                    flexShrink: 0,
                  }}
                  aria-label="Kirim pesan"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Kirim</span>
                </button>
              </form>
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
}
