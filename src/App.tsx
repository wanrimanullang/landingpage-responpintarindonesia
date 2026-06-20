'use client';

import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/navbar';
import { Footer } from './components/footer';
import HomePage from './pages/home';
import PrivacyPage from './pages/privacy';
import TermsPage from './pages/terms';
import AboutPage from './pages/about';
import BlogPage from './pages/blog';
import BlogPostPage from './pages/blog-post';
import DemoPage from './pages/demo';
import TutorialConnectedWhatsappPage from './pages/tutorial-connected-whatsapp';
import { useChatwoot } from './hooks/useChatwoot';
import { ChatbotDemoModalProvider } from './context/chatbot-demo-context';

export default function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  // Load theme from localStorage on mount (default: light)
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    } else {
      // Default to light mode
      setTheme('light');
      document.documentElement.classList.remove('dark');
    }
  }, []);

  // Toggle theme function
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
  };

  // Initialize Chatwoot chatbot
  useChatwoot({
    websiteToken: 'AH84MtFe5Ux2XxicvHdu77PX',
    baseUrl: 'https://chat.responpintar.com',
    position: 'right',
    locale: 'en',
  });

  return (
    <Router>
      <ChatbotDemoModalProvider>
        <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
          <Navbar theme={theme} toggleTheme={toggleTheme} />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/demo" element={<DemoPage />} />
            <Route path="/tutorial/connected-whatsapp" element={<TutorialConnectedWhatsappPage />} />
          </Routes>

          <Footer />
        </div>
      </ChatbotDemoModalProvider>
    </Router>
  );
}
