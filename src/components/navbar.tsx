'use client';

import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import Logo from '../imports/Logo';
import { useChatbotDemoModal } from '../context/chatbot-demo-context';

interface NavbarProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export function Navbar({ theme, toggleTheme }: NavbarProps) {
  const { openModal } = useChatbotDemoModal();
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8">
              <Logo />
            </div>
            <span className="text-lg">Respon Pintar</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/#features" className="text-muted-foreground hover:text-foreground transition-colors">
              Features
            </Link>
            <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
            <Link to="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
              Blog
            </Link>
            <button
              onClick={openModal}
              className="text-muted-foreground hover:text-[var(--brand-primary)] font-medium transition-colors text-sm"
            >
              Try Demo
            </button>
          </div>

          {/* CTA & Theme Toggle */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="w-9 h-9 rounded-lg bg-secondary hover:bg-accent flex items-center justify-center transition-all hover:scale-105"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <MoonIcon className="w-5 h-5 text-foreground" />
              ) : (
                <SunIcon className="w-5 h-5 text-foreground" />
              )}
            </button>

            {/* <Button
              variant="ghost"
              className="hidden sm:inline-flex text-foreground hover:text-foreground"
            >
              Login
            </Button> */}

            <Button
              asChild
              className="bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] hover:opacity-90 transition-all hover:scale-105 hover:shadow-lg shadow-[var(--brand-primary)]/20"
            >
              <a
                href="https://crm.responpintar.com/auth/login"
                target="_blank"
                rel="noopener noreferrer"
              >
                Try Now
              </a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}