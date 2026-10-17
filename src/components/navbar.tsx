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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0B0C0E]/85 backdrop-blur-md border-b border-[rgba(244,245,247,0.08)] transition-all duration-300">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo & Brand */}
          <Link
            to="/"
            className="flex items-center gap-3 group text-[#E9EBEF] no-underline transition-opacity"
          >
            <div className="w-8 h-8 rounded border border-[rgba(244,245,247,0.14)] bg-[#111214] p-1 flex items-center justify-center group-hover:border-[#8FE3B0]/50 transition-colors">
              <Logo />
            </div>
            <div className="flex flex-col">
              <span className="font-bold tracking-tight text-base sm:text-lg text-[#E9EBEF] leading-tight">
                Respon Pintar
              </span>
              <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#636B76]">
                AI Orchestration
              </span>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8 font-mono text-[11px] uppercase tracking-[0.12em]">
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
            <Link
              to="/services-new"
              className="text-[#AEB4BD] hover:text-[#E9EBEF] transition-colors flex items-center gap-1.5"
            >
              <span>Services</span>
              <span className="text-[9px] px-1.5 py-0.2 rounded border border-[rgba(244,245,247,0.15)] text-[#AEB4BD] bg-white/[0.04]">
                4 BAYS
              </span>
            </Link>
            <Link
              to="/showcase"
              className="text-[#AEB4BD] hover:text-[#E9EBEF] transition-colors flex items-center gap-1.5"
            >
              <span>Showcase</span>
              <span className="text-[9px] px-1.5 py-0.2 rounded border border-[#8FE3B0]/40 text-[#8FE3B0] bg-[#8FE3B0]/10 font-semibold">
                NEW
              </span>
            </Link>
            <a
              href="/#pricing"
              className="text-[#AEB4BD] hover:text-[#E9EBEF] transition-colors"
            >
              Pricing
            </a>
            <button
              onClick={openModal}
              className="text-[#8FE3B0] hover:text-[#8FE3B0]/80 transition-colors cursor-pointer flex items-center gap-1"
            >
              <span>Try Demo</span>
              <span>▸</span>
            </button>
          </div>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-3">
            <SignalBadge label="LIVE" variant="positive" className="hidden lg:inline-flex" />

            <button
              onClick={toggleTheme}
              className="w-8 h-8 rounded border border-[rgba(244,245,247,0.1)] bg-[#111214] text-[#AEB4BD] hover:text-[#E9EBEF] hover:border-[rgba(244,245,247,0.25)] flex items-center justify-center transition-all cursor-pointer"
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
              className="border border-[#8FE3B0] bg-[#8FE3B0] text-black font-semibold px-4 py-2 text-xs font-mono uppercase tracking-wider hover:bg-[#8FE3B0]/90 transition-all shadow-[0_0_12px_rgba(143,227,176,0.25)]"
            >
              Try Now →
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}