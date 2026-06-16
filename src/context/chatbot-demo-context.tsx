import { createContext, useContext, useState, ReactNode } from 'react';

interface ChatbotDemoModalContextValue {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const ChatbotDemoModalContext = createContext<ChatbotDemoModalContextValue>({
  isOpen: false,
  openModal: () => {},
  closeModal: () => {},
});

export function ChatbotDemoModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <ChatbotDemoModalContext.Provider
      value={{ isOpen, openModal: () => setIsOpen(true), closeModal: () => setIsOpen(false) }}
    >
      {children}
    </ChatbotDemoModalContext.Provider>
  );
}

export function useChatbotDemoModal() {
  return useContext(ChatbotDemoModalContext);
}
