'use client';

import React from 'react';
import { Link } from 'react-router-dom';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
} from 'lucide-react';
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline';
import Logo from '../imports/Logo';
import ChromeRule from './showcase/ChromeRule';
import SignalBadge from './showcase/SignalBadge';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0B0C0E] text-[#E9EBEF] border-t border-[rgba(244,245,247,0.08)] overflow-hidden">
      {/* Top Telemetry & Status Bar */}
      <div className="border-b border-[rgba(244,245,247,0.06)] bg-[#111214]/60">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-3 flex flex-wrap items-center justify-between gap-4 font-mono text-[10px] text-[#636B76] uppercase tracking-[0.14em]">
          <div className="flex items-center gap-3">
            <SignalBadge label="ALL SYSTEMS OPERATIONAL" variant="positive" />
            <span className="hidden sm:inline">· P95 LATENCY &lt; 380MS</span>
            <span className="hidden md:inline">· ISO 27001 COMPLIANT</span>
          </div>
          <div className="text-[#8A9099]">
            <span>RESPON PINTAR ORCHESTRATION LAYER v2.4</span>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Info (2 cols) */}
          <div className="lg:col-span-2 space-y-5">
            <Link to="/" className="inline-flex items-center gap-3 no-underline">
              <div className="w-8 h-8 rounded border border-[rgba(244,245,247,0.14)] bg-[#111214] p-1 flex items-center justify-center">
                <Logo />
              </div>
              <span className="text-xl font-bold tracking-tight text-[#E9EBEF]">
                Respon Pintar
              </span>
            </Link>
            <p className="text-sm text-[#AEB4BD] leading-relaxed max-w-sm font-normal">
              Solusi orkestrasi AI terdepan untuk otomatisasi customer service, omnichannel sync,
              dan hybrid semantic retrieval dengan latensi sub-detik.
            </p>

            {/* Social Media Links */}
            <div className="flex items-center gap-2 pt-2">
              {[
                { icon: Linkedin, href: 'https://www.linkedin.com/company/109874968/', label: 'LinkedIn' },
                { icon: Twitter, href: '#', label: 'Twitter' },
                { icon: Instagram, href: '#', label: 'Instagram' },
                { icon: Facebook, href: '#', label: 'Facebook' },
                { icon: Youtube, href: '#', label: 'YouTube' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-8 h-8 rounded border border-[rgba(244,245,247,0.1)] bg-white/[0.02] text-[#AEB4BD] hover:text-[#8FE3B0] hover:border-[#8FE3B0]/40 flex items-center justify-center transition-colors"
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <p className="label-mono text-[#E9EBEF] mb-5 tracking-[0.14em]">
              Product
            </p>
            <ul className="space-y-3 font-mono text-[12px] text-[#AEB4BD]">
              <li>
                <a href="/#features" className="hover:text-[#8FE3B0] transition-colors">
                  Features Index
                </a>
              </li>
              <li>
                <Link to="/services-new" className="hover:text-[#8FE3B0] transition-colors">
                  Capability Bays
                </Link>
              </li>
              <li>
                <Link to="/showcase" className="hover:text-[#8FE3B0] transition-colors">
                  Engineering Showcase
                </Link>
              </li>
              <li>
                <a href="/#pricing" className="hover:text-[#8FE3B0] transition-colors">
                  Pricing Plans
                </a>
              </li>
              <li>
                <a href="https://api.responpintar.com" target="_blank" rel="noreferrer" className="hover:text-[#8FE3B0] transition-colors">
                  API &amp; Webhook Docs
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <p className="label-mono text-[#E9EBEF] mb-5 tracking-[0.14em]">
              Company
            </p>
            <ul className="space-y-3 font-mono text-[12px] text-[#AEB4BD]">
              <li>
                <Link to="/about" className="hover:text-[#8FE3B0] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-[#8FE3B0] transition-colors">
                  Engineering Blog
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-[#8FE3B0] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-[#8FE3B0] transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/delete-account" className="hover:text-[#8FE3B0] transition-colors">
                  Hapus Akun
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="label-mono text-[#E9EBEF] mb-5 tracking-[0.14em]">
              Direct Dispatch
            </p>
            <ul className="space-y-3.5 font-mono text-[12px] text-[#AEB4BD]">
              <li className="flex items-center gap-2.5">
                <EnvelopeIcon className="w-4 h-4 text-[#8FE3B0] shrink-0" />
                <span className="truncate">support@responpintar.com</span>
              </li>
              <li className="flex items-center gap-2.5">
                <PhoneIcon className="w-4 h-4 text-[#8FE3B0] shrink-0" />
                <span>+62 821-8988-5080</span>
              </li>
              <li className="flex items-start gap-2.5 text-[11px] leading-relaxed">
                <MapPinIcon className="w-4 h-4 text-[#8FE3B0] shrink-0 mt-0.5" />
                <span>Plaza Aminta 5th Fl/504, South Jakarta 12310</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <ChromeRule className="opacity-40" />

      {/* Big Watermark Outline Brand Text */}
      <div className="py-2 overflow-hidden text-center select-none pointer-events-none">
        <span
          className="block font-bold leading-none tracking-tight"
          style={{
            fontSize: 'clamp(3rem, 14vw, 12rem)',
            color: 'transparent',
            WebkitTextStroke: '1px rgba(244, 245, 247, 0.04)',
          }}
        >
          ResponPintar
        </span>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="border-t border-[rgba(244,245,247,0.06)] py-6 bg-[#0B0C0E]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] text-[#636B76]">
          <p>© {currentYear} Respon Pintar Indonesia. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-[#AEB4BD] transition-colors">
              Privacy
            </Link>
            <Link to="/terms" className="hover:text-[#AEB4BD] transition-colors">
              Terms
            </Link>
            <Link to="/delete-account" className="hover:text-[#AEB4BD] transition-colors">
              Hapus Akun
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}