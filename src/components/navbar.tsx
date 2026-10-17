'use client';

import React from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import Logo from '../imports/Logo';
import { useChatbotDemoModal } from '../context/chatbot-demo-context';
import SignalBadge from './showcase/SignalBadge';

interface NavbarProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export function Navbar({ theme, toggleTheme }: NavbarProps) {
  const { openModal } = useChatbotDemoModal();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 bg-[#0B0C0E]/92 backdrop-blur-md border-b border-[rgba(255,255,255,0.12)] transition-all duration-300 flex items-center">
      <div className="landing-container flex items-center justify-between h-16">
        {/* Logo & Brand */}
        <Link
          to="/"
          className="flex items-center gap-3 group text-[#E9EBEF] no-underline transition-opacity"
        >
          <div className="w-9 h-9 rounded-[6px] border border-[rgba(255,255,255,0.12)] bg-[#111214] p-1.5 flex items-center justify-center group-hover:border-[#8FE3B0]/50 transition-colors">
            <Logo />
          </div>
          <div className="flex flex-col">
            <span className="font-bold tracking-tight text-base sm:text-lg text-[#E9EBEF] leading-tight">
              Respon Pintar
            </span>
            <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#636B76]">
              Omnichannel Platform
            </span>
          </div>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8 font-mono text-[12px] uppercase tracking-[0.12em]">
          <a
            href="/#features"
            className="text-[#AEB4BD] hover:text-[#E9EBEF] transition-colors"
          >
            Features
          </a>
          <a
            href="/#use-cases"
            className="text-[#AEB4BD] hover:text-[#E9EBEF] transition-colors"
          >
            Use Cases
          </a>
          <a
            href="/#pricing"
            className="text-[#AEB4BD] hover:text-[#E9EBEF] transition-colors"
          >
            Pricing
          </a>
          <button
            onClick={openModal}
            className="text-[#8FE3B0] hover:text-[#8FE3B0]/80 transition-colors cursor-pointer flex items-center gap-1 font-mono text-[12px] uppercase tracking-[0.12em]"
          >
            <span>Try Demo</span>
            <span>▸</span>
          </button>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <SignalBadge label="OMNICHANNEL LIVE" variant="positive" className="hidden lg:inline-flex" />

          <button
            onClick={toggleTheme}
            className="w-10 h-10 rounded-[6px] border border-[rgba(255,255,255,0.12)] bg-[#111214] text-[#AEB4BD] hover:text-[#E9EBEF] hover:border-[rgba(255,255,255,0.25)] flex items-center justify-center transition-all cursor-pointer"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? (
              <MoonIcon className="w-4 h-4 text-[#AEB4BD]" />
            ) : (
              <SunIcon className="w-4 h-4 text-[#AEB4BD]" />
            )}
          </button>

          <a
            href="https://crm.responpintar.com/auth/login"
            target="_blank"
            rel="noopener noreferrer"
            className="landing-btn-primary"
          >
            Mulai Sekarang →
          </a>
        </div>
      </div>
    </nav>
  );
}