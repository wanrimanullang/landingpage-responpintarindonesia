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
import TutorialSetupWorkflowPage from './pages/tutorial-setup-workflow';
import DeleteAccountPage from './pages/delete-account';
import { ChatbotDemoModalProvider } from './context/chatbot-demo-context';
import { ChatbotDemoModal } from './components/chatbot-demo-modal';

export default function App() {
  // Always enforce dark mode as the default project aesthetic
  useEffect(() => {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }, []);

  return (
    <Router>
      <ChatbotDemoModalProvider>
        <div className="jamie-root min-h-screen bg-[#0B0C0E] text-[#E9EBEF] relative font-sans selection:bg-[#8FE3B0]/20 selection:text-[#8FE3B0]">
          <Navbar />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/demo" element={<DemoPage />} />
            <Route path="/delete-account" element={<DeleteAccountPage />} />
            <Route path="/tutorial/connected-whatsapp" element={<TutorialConnectedWhatsappPage />} />
            <Route path="/tutorial/setup-workflow" element={<TutorialSetupWorkflowPage />} />
          </Routes>

          <Footer />
          <ChatbotDemoModal />
        </div>
      </ChatbotDemoModalProvider>
    </Router>
  );
}
