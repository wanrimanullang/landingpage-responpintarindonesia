"use client";

import { Link } from 'react-router-dom';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/outline";
import Logo from '../imports/Logo';
import { Button } from "./ui/button";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ background: '#0a0a0a', color: '#fff', overflow: 'hidden', position: 'relative' }}>
      
      {/* ===== TOP SECTION: Nav Links ===== */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '64px 32px 48px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '48px', flexWrap: 'wrap' }}>
          
          {/* Brand + Tagline */}
          <div style={{ maxWidth: '280px' }}>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px', textDecoration: 'none' }}>
              <div style={{ width: '32px', height: '32px' }}><Logo /></div>
              <span style={{ color: '#fff', fontWeight: 600 }}>Respon Pintar</span>
            </Link>
            <p style={{ color: '#666', fontSize: '14px', lineHeight: 1.6 }}>
              Solusi AI Terdepan untuk Customer Service Automation
            </p>
            {/* Social Media */}
            <div className="flex gap-2 mt-6">
              <Button variant="ghost" size="icon" className="text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-full" asChild>
                <a href="#" aria-label="Facebook">
                  <Facebook className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-full" asChild>
                <a href="#" aria-label="Twitter">
                  <Twitter className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-full" asChild>
                <a href="#" aria-label="Instagram">
                  <Instagram className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-full" asChild>
                <a href="https://www.linkedin.com/company/109874968/" aria-label="LinkedIn">
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-full" asChild>
                <a href="#" aria-label="YouTube">
                  <Youtube className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 style={{ color: '#fff', fontWeight: 600, marginBottom: '20px', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Product</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li><a href="#features" style={{ color: '#666', fontSize: '14px', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#fff'} onMouseOut={(e) => e.currentTarget.style.color = '#666'}>Features</a></li>
              <li><a href="#pricing" style={{ color: '#666', fontSize: '14px', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#fff'} onMouseOut={(e) => e.currentTarget.style.color = '#666'}>Pricing</a></li>
              <li><a href="#" style={{ color: '#666', fontSize: '14px', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#fff'} onMouseOut={(e) => e.currentTarget.style.color = '#666'}>Integrations</a></li>
              <li><a href="#" style={{ color: '#666', fontSize: '14px', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#fff'} onMouseOut={(e) => e.currentTarget.style.color = '#666'}>API Docs</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 style={{ color: '#fff', fontWeight: 600, marginBottom: '20px', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Company</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li><Link to="/about" style={{ color: '#666', fontSize: '14px', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#fff'} onMouseOut={(e) => e.currentTarget.style.color = '#666'}>About Us</Link></li>
              <li><Link to="/blog" style={{ color: '#666', fontSize: '14px', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#fff'} onMouseOut={(e) => e.currentTarget.style.color = '#666'}>Blog</Link></li>
              <li><Link to="/privacy" style={{ color: '#666', fontSize: '14px', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#fff'} onMouseOut={(e) => e.currentTarget.style.color = '#666'}>Privacy Policy</Link></li>
              <li><Link to="/terms" style={{ color: '#666', fontSize: '14px', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#fff'} onMouseOut={(e) => e.currentTarget.style.color = '#666'}>Terms of Service</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: '#fff', fontWeight: 600, marginBottom: '20px', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Contact</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li style={{ color: '#666', fontSize: '14px', display: 'flex', gap: '8px', alignItems: 'center' }}>
                <EnvelopeIcon className="w-4 h-4" /> support@responpintar.com
              </li>
              <li style={{ color: '#666', fontSize: '14px', display: 'flex', gap: '8px', alignItems: 'center' }}>
                <PhoneIcon className="w-4 h-4" /> +62 821-8988-5080
              </li>
              <li style={{ color: '#666', fontSize: '14px', display: 'flex', gap: '8px', alignItems: 'flex-start', lineHeight: 1.5 }}>
                <MapPinIcon className="w-4 h-4 mt-0.5" /> 
                <span>Plaza Aminta 5th Floor/504,<br />South Jakarta 12310</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* ===== DIVIDER ===== */}
      <div style={{ height: '1px', background: '#1a1a1a', maxWidth: '1280px', margin: '0 auto 0' }} />

      {/* ===== BIG BRAND NAME (KEY FEATURE) ===== */}
      <div style={{
        padding: '0 24px',
        lineHeight: 0.85,
        overflow: 'hidden',
        textAlign: 'center',
        marginTop: '20px'
      }}>
        <span style={{
          display: 'block',
          fontFamily: "'Inter', 'SF Pro Display', sans-serif",
          fontWeight: 900,
          fontSize: 'clamp(80px, 18vw, 220px)',
          letterSpacing: '-0.03em',
          color: '#fff',
          opacity: 0.08,
          userSelect: 'none',
          whiteSpace: 'nowrap',
        }}>
          ResponPintar
        </span>
      </div>

      {/* ===== BOTTOM BAR ===== */}
      <div style={{ borderTop: '1px solid #1a1a1a', padding: '20px 32px', maxWidth: '1280px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
        <p style={{ color: '#444', fontSize: '13px' }}>© {currentYear} Respon Pintar. All rights reserved.</p>
        <div style={{ display: 'flex', gap: '24px' }}>
          <Link to="/privacy" style={{ color: '#444', fontSize: '13px', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#fff'} onMouseOut={(e) => e.currentTarget.style.color = '#444'}>Privacy</Link>
          <Link to="/terms" style={{ color: '#444', fontSize: '13px', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#fff'} onMouseOut={(e) => e.currentTarget.style.color = '#444'}>Terms</Link>
        </div>
      </div>

    </footer>
  );
}