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

  const playStoreUrl =
    import.meta.env.NEXT_PUBLIC_PLAYSTORE_URL ||
    import.meta.env.VITE_PLAYSTORE_URL ||
    'https://play.google.com/store/apps/details?id=com.responpintar.app';
  const appStoreUrl = import.meta.env.NEXT_PUBLIC_APPSTORE_URL || import.meta.env.VITE_APPSTORE_URL;
  const metaPartnerUrl = import.meta.env.NEXT_PUBLIC_META_PARTNER_URL || import.meta.env.VITE_META_PARTNER_URL;

  const handlePlayStoreClick = () => {
    if (typeof window !== 'undefined') {
      if ((window as any).dataLayer) {
        (window as any).dataLayer.push({ event: 'click_download_playstore' });
      } else if ((window as any).gtag) {
        (window as any).gtag('event', 'click_download_playstore');
      }
    }
  };

  return (
    <footer className="relative bg-[#0B0C0E] text-[#E9EBEF] border-t border-[rgba(255,255,255,0.12)] overflow-hidden">
      {/* Top Telemetry & Status Bar */}
      <div className="border-b border-[rgba(255,255,255,0.12)] bg-[#111214]/60">
        <div className="landing-container py-3 flex flex-wrap items-center justify-between gap-4 font-mono text-[10px] text-[#636B76] uppercase tracking-[0.14em]">
          <div className="flex items-center gap-3">
            <SignalBadge label="ALL SYSTEMS OPERATIONAL" variant="positive" className="!px-2.5 !py-1 !rounded-[6px]" />
            <span className="hidden sm:inline">· P95 LATENCY &lt; 380MS</span>
            <span className="hidden md:inline">· ISO 27001 COMPLIANT</span>
          </div>
          <div className="text-[#8A9099]">
            <span>RESPON PINTAR ORCHESTRATION LAYER v2.4</span>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="landing-container pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12">
          {/* Brand Info (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-flex items-center gap-3 no-underline">
              <div className="w-8 h-8 rounded-[6px] border border-[rgba(255,255,255,0.12)] bg-[#111214] p-1 flex items-center justify-center">
                <Logo />
              </div>
              <span className="text-xl font-bold tracking-tight text-[#E9EBEF]">
                Respon Pintar
              </span>
            </Link>
            <p className="text-sm text-[#AEB4BD] leading-relaxed max-w-sm font-normal">
              Solusi platform omnichannel terdepan untuk integrasi WhatsApp Business API,
              Instagram DM, Telegram, dan Live Chat dalam satu dashboard terpusat dengan multi-CS inbox.
            </p>

            {/* Social Media Links */}
            <div className="flex items-center gap-2 pt-1">
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
                  className="w-8 h-8 rounded-[6px] border border-[rgba(255,255,255,0.12)] bg-white/[0.02] text-[#AEB4BD] hover:text-[#8FE3B0] hover:border-[#8FE3B0]/40 flex items-center justify-center transition-colors"
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>

            {/* Download App & Partner Badges (24px spacing from social icons) */}
            <div className="!mt-6">
              <p className="label-mono text-[#AEB4BD] text-[12px] uppercase tracking-[0.14em] mb-3">
                Unduh aplikasi
              </p>
              <div className="flex flex-col lg:flex-row lg:flex-wrap items-start gap-4 lg:gap-3">
                {/* Store badges (Google Play + App Store) */}
                <div className="flex flex-wrap items-start gap-3">
                  {/* Google Play */}
                  <div className="footer-badge-item">
                    <a
                      href={playStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer-badge-link"
                      aria-label="Dapatkan ResPin di Google Play"
                      onClick={handlePlayStoreClick}
                    >
                      <img
                        src="/badges/google-play.svg"
                        alt="Dapatkan di Google Play"
                        className="footer-badge-img"
                        width={138}
                        height={40}
                      />
                    </a>
                  </div>

                  {/* App Store */}
                  <div className="footer-badge-item">
                    {appStoreUrl ? (
                      <a
                        href={appStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-badge-link"
                        aria-label="Unduh di App Store"
                      >
                        <img
                          src="/badges/app-store.svg"
                          alt="Unduh di App Store"
                          className="footer-badge-img"
                          width={138}
                          height={40}
                        />
                      </a>
                    ) : (
                      <div className="flex flex-col items-start">
                        <div className="footer-badge-link footer-badge-disabled">
                          <img
                            src="/badges/app-store.svg"
                            alt="Unduh di App Store"
                            className="footer-badge-img"
                            width={138}
                            height={40}
                          />
                        </div>
                        <span className="footer-badge-subtext">Segera hadir</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Meta Tech Provider badge */}
                <div className="footer-badge-item">
                  {metaPartnerUrl ? (
                    <a
                      href={metaPartnerUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer-badge-link"
                      aria-label="Meta Tech Provider"
                    >
                      <img
                        src="/badges/meta-tech-provider.svg"
                        alt="Meta Tech Provider"
                        className="footer-badge-img"
                        width={138}
                        height={40}
                      />
                    </a>
                  ) : (
                    <div className="footer-badge-link cursor-default">
                      <img
                        src="/badges/meta-tech-provider.svg"
                        alt="Meta Tech Provider"
                        className="footer-badge-img"
                        width={138}
                        height={40}
                      />
                    </div>
                  )}
                </div>
              </div>
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
                  Omnichannel Inbox
                </a>
              </li>
              <li>
                <a href="/#use-cases" className="hover:text-[#8FE3B0] transition-colors">
                  Industry Blueprints
                </a>
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
              <><br /></>
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
              <li className="flex items-center gap-2">
                <EnvelopeIcon className="w-4 h-4 text-[#8FE3B0] shrink-0" />
                <span className="truncate">support@responpintar.com</span>
              </li>
              <li className="flex items-center gap-2">
                <PhoneIcon className="w-4 h-4 text-[#8FE3B0] shrink-0" />
                <span>+62 821-8988-5080</span>
              </li>
              <li className="flex items-start gap-2 text-[11px] leading-relaxed">
                <MapPinIcon className="w-4 h-4 text-[#8FE3B0] shrink-0 mt-[2px]" />
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
      <div className="border-t border-[rgba(255,255,255,0.12)] py-6 bg-[#0B0C0E]">
        <div className="landing-container flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] text-[#636B76]">
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