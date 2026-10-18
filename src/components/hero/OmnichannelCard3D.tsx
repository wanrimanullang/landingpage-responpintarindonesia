'use client';

import React, { useState, useRef, useEffect } from 'react';
import {
  ChatBubbleLeftRightIcon,
  CheckCircleIcon,
  BoltIcon,
  ChatBubbleOvalLeftEllipsisIcon,
} from '@heroicons/react/24/outline';

export function OmnichannelCard3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 5, y: -10 });
  const [isHovered, setIsHovered] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => {
      // Check for desktop screen AND hover capability
      const hasHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
      setIsDesktop(window.innerWidth >= 1024 && hasHover);
    };
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDesktop || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Normalize from -1 to 1 based on card center
    const normX = (x / rect.width) * 2 - 1;
    const normY = (y / rect.height) * 2 - 1;

    // Base tilt is rotateY(-10deg) rotateX(5deg), max interactive tilt is 8deg
    const tiltX = 5 - normY * 8;
    const tiltY = -10 + normX * 8;

    setRotate({ x: tiltX, y: tiltY });
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    // Return smoothly to base tilt
    setRotate({ x: 5, y: -10 });
    setIsHovered(false);
  };

  // Determine transform based on screen size:
  // Desktop: interactive cursor tilt (or base 5deg / -10deg)
  // Mobile / Tablet: subtle static tilt (3deg / -5deg)
  const cardTransform = isDesktop
    ? `rotateX(${rotate.x.toFixed(2)}deg) rotateY(${rotate.y.toFixed(2)}deg)`
    : 'rotateX(3deg) rotateY(-5deg)';

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="hero-3d-stage w-full pt-6 pb-8 px-1 sm:px-3 relative select-none"
    >
      {/* 3D Main Card Container */}
      <div
        className="hero-3d-card"
        style={{
          transform: cardTransform,
          transition: isHovered
            ? 'transform 0.12s ease-out, box-shadow 0.25s ease'
            : 'transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.5s ease',
        }}
      >
        {/* Floating Badge 1 (Top): Incoming WhatsApp Notification */}
        <div className="hero-floating-badge-top">
          <div className="hero-floating-badge-card">
            <div className="w-6 h-6 rounded-full bg-[#8FE3B0]/20 flex items-center justify-center shrink-0">
              <ChatBubbleOvalLeftEllipsisIcon className="w-4 h-4 text-[#8FE3B0]" />
            </div>
            <div className="flex flex-col pr-1">
              <span className="hero-badge-title-dark text-[11px] font-semibold leading-tight whitespace-nowrap">
                Pesan baru dari WhatsApp
              </span>
              <span className="hero-badge-sub-dark text-[9px] font-mono leading-tight whitespace-nowrap">
                Customer (Budi Santoso) · 14:02 WIB
              </span>
            </div>
            <span className="w-2 h-2 rounded-full bg-[#8FE3B0] animate-pulse ml-0.5 shrink-0" />
          </div>
        </div>

        {/* Floating Badge 2 (Bottom): Response Speed SLA Telemetry */}
        <div className="hero-floating-badge-bottom">
          <div className="hero-floating-badge-card">
            <div className="w-6 h-6 rounded-full bg-[#8FE3B0]/20 flex items-center justify-center text-[#8FE3B0] shrink-0">
              <BoltIcon className="w-4 h-4" />
            </div>
            <div className="flex flex-col pr-1">
              <div className="flex items-center gap-1.5">
                <span className="hero-badge-title-green text-[11px] font-bold font-mono tracking-tight whitespace-nowrap">
                  Respon 24 detik
                </span>
                <span className="hero-pill-badge hero-pill-badge-green text-[9px] uppercase hidden sm:inline-block">
                  Auto-Track J&amp;T
                </span>
              </div>
              <span className="hero-badge-sub-dark text-[9px] font-mono leading-tight whitespace-nowrap">
                Delegasi otomatis · Zero chat loss
              </span>
            </div>
          </div>
        </div>

        {/* Card Header: 16px bottom padding & border */}
        <div className="hero-card-header flex-wrap">
          <div className="flex items-center gap-3">
            <div className="hero-card-icon-box">
              <ChatBubbleLeftRightIcon className="w-5 h-5" />
            </div>
            <div>
              <p className="hero-card-title">
                Respon Pintar Omnichannel Desk
              </p>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8FE3B0] animate-pulse" />
                <p className="hero-card-sub">
                  4 Channels Active · WhatsApp / IG / TG / Web
                </p>
              </div>
            </div>
          </div>
          <div className="hero-pill-badge hero-pill-badge-outline uppercase tracking-wider">
            MULTI-AGENT
          </div>
        </div>

        {/* Channel Selector Pills: padding 6px 12px, radius 8px, gap 8px, active highlight */}
        <div className="hero-channel-tabs">
          <span className="hero-channel-tab-active shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8FE3B0]" />
            <span>WhatsApp (+62 821-xxxx)</span>
          </span>
          <span className="hero-channel-tab-inactive">
            Instagram Direct
          </span>
          <span className="hero-channel-tab-inactive">
            Telegram
          </span>
          <span className="hero-channel-tab-inactive">
            Live Chat
          </span>
        </div>

        {/* Chat Messages Simulation: gap antar blok 16px */}
        <div className="space-y-4 font-mono text-xs">
          {/* Incoming Customer Message: padding 12px 16px, radius 12px */}
          <div className="flex justify-start">
            <div className="hero-customer-bubble space-y-1 shadow-sm">
              <div className="flex items-center justify-between text-xs text-[#636B76] dark:text-[#636B76] gap-4">
                <span className="font-medium">Customer (Budi Santoso)</span>
                <span>14:02 WIB</span>
              </div>
              <p className="text-xs leading-relaxed font-sans text-[#AEB4BD] dark:text-[#AEB4BD]">
                Halo kak, mau tanya nomor resi untuk pesanan #RP-9921 kemarin sudah dikirimkan belum ya?
              </p>
            </div>
          </div>

          {/* Agent Response: padding 12px 16px, radius 12px */}
          <div className="flex justify-end">
            <div className="hero-agent-bubble space-y-2 shadow-sm">
              <div className="flex items-center justify-between text-xs text-[#8FE3B0] dark:text-[#8FE3B0] border-b border-[rgba(255,255,255,0.08)] dark:border-[rgba(255,255,255,0.08)] pb-1.5 gap-4">
                <span className="flex items-center gap-1 font-medium">
                  <CheckCircleIcon className="w-3.5 h-3.5" />
                  <span>Agent Sarah (CS Tim 1)</span>
                </span>
                <span className="text-[#636B76] dark:text-[#636B76]">14:02 WIB</span>
              </div>
              <p className="text-xs text-[#E9EBEF] dark:text-[#E9EBEF] leading-relaxed font-sans">
                Halo Pak Budi! Pesanan #RP-9921 sudah dikirim via J&amp;T dengan nomor resi{' '}
                <strong className="text-[#8FE3B0] dark:text-[#8FE3B0] font-semibold">
                  JT881928301
                </strong>
                . Paket dalam perjalanan dan estimasi tiba esok siang ya.
              </p>
              {/* Badges: Auto-Track J&T and CRM Sync OK with pill radius */}
              <div className="flex flex-wrap items-center gap-2 pt-1 font-mono">
                <span className="hero-pill-badge hero-pill-badge-green uppercase">
                  Auto-Track J&amp;T
                </span>
                <span className="hero-pill-badge hero-pill-badge-outline uppercase">
                  CRM Sync OK
                </span>
              </div>
            </div>
          </div>

          {/* Diagnostic / Queue status */}
          <div className="flex items-center justify-between text-[#636B76] dark:text-[#636B76] text-xs pt-1">
            <div className="flex items-center gap-1.5">
              <span className="terminal-caret" aria-hidden="true" />
              <span>Delegasi otomatis: Sesuai giliran agen aktif</span>
            </div>
            <span className="text-[#8FE3B0] dark:text-[#8FE3B0] font-mono font-medium">
              Respon: 24 detik
            </span>
          </div>
        </div>

        {/* Card Footer: 16px block gap */}
        <div className="hero-card-footer">
          <span className="tracking-wider">OMNICHANNEL DESK</span>
          <span className="hero-badge-sub-dark tracking-wide">
            SINGLE INBOX · ZERO CHAT LOSS
          </span>
        </div>
      </div>
    </div>
  );
}
