"use client";

import { Link } from 'react-router-dom';
import {
  Mail,
  MapPin,
  Phone,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";
import Logo from '../imports/Logo';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <div className="w-8 h-8">
                <Logo />
              </div>
              <span className="text-lg">Respon Pintar</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Platform SaaS terdepan untuk otomasi customer
              service dengan teknologi AI yang membantu bisnis
              meningkatkan efisiensi dan kepuasan pelanggan.
            </p>
            {/* Social Media */}
            <div className="flex gap-3 pt-4">
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-secondary hover:bg-gradient-to-br hover:from-[var(--brand-gradient-start)] hover:to-[var(--brand-gradient-end)] flex items-center justify-center transition-all hover:scale-110 group"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 text-muted-foreground group-hover:text-white transition-colors" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-secondary hover:bg-gradient-to-br hover:from-[var(--brand-gradient-start)] hover:to-[var(--brand-gradient-end)] flex items-center justify-center transition-all hover:scale-110 group"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4 text-muted-foreground group-hover:text-white transition-colors" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-secondary hover:bg-gradient-to-br hover:from-[var(--brand-gradient-start)] hover:to-[var(--brand-gradient-end)] flex items-center justify-center transition-all hover:scale-110 group"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 text-muted-foreground group-hover:text-white transition-colors" />
              </a>
              <a
                href="https://www.linkedin.com/company/109874968/"
                className="w-9 h-9 rounded-lg bg-secondary hover:bg-gradient-to-br hover:from-[var(--brand-gradient-start)] hover:to-[var(--brand-gradient-end)] flex items-center justify-center transition-all hover:scale-110 group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-muted-foreground group-hover:text-white transition-colors" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-secondary hover:bg-gradient-to-br hover:from-[var(--brand-gradient-start)] hover:to-[var(--brand-gradient-end)] flex items-center justify-center transition-all hover:scale-110 group"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4 text-muted-foreground group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="mb-4">Produk</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#features"
                  className="text-sm text-muted-foreground hover:text-[var(--brand-primary)] transition-colors"
                >
                  Fitur
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-sm text-muted-foreground hover:text-[var(--brand-primary)] transition-colors"
                >
                  Harga
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-[var(--brand-primary)] transition-colors"
                >
                  Integrasi
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-[var(--brand-primary)] transition-colors"
                >
                  API Documentation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-[var(--brand-primary)] transition-colors"
                >
                  Changelog
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4">Perusahaan</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/about"
                  className="text-sm text-muted-foreground hover:text-[var(--brand-primary)] transition-colors"
                >
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-sm text-muted-foreground hover:text-[var(--brand-primary)] transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-[var(--brand-primary)] transition-colors"
                >
                  Karir
                </a>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-sm text-muted-foreground hover:text-[var(--brand-primary)] transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-sm text-muted-foreground hover:text-[var(--brand-primary)] transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4">Hubungi Kami</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[var(--brand-primary)] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-muted-foreground">
                    Email
                  </p>
                  <a
                    href="mailto:hello@responpintar.com"
                    className="text-sm hover:text-[var(--brand-primary)] transition-colors"
                  >
                    support@responpintar.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[var(--brand-primary)] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-muted-foreground">
                    Telepon
                  </p>
                  <a
                    href="tel:+6281234567890"
                    className="text-sm hover:text-[var(--brand-primary)] transition-colors"
                  >
                    +62 811-552-477
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[var(--brand-primary)] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-muted-foreground">
                    Alamat
                  </p>
                  <p className="text-sm">Plaza Aminta, Jl TB Simatupang, Kebayoran Lama Jakarta Selatan, Indonesia</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Respon Pintar. All rights
              reserved.
            </p>
            <div className="flex gap-6">
              <Link
                to="/privacy"
                className="text-sm text-muted-foreground hover:text-[var(--brand-primary)] transition-colors"
              >
                Privacy
              </Link>
              <Link
                to="/terms"
                className="text-sm text-muted-foreground hover:text-[var(--brand-primary)] transition-colors"
              >
                Terms
              </Link>
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-[var(--brand-primary)] transition-colors"
              >
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}