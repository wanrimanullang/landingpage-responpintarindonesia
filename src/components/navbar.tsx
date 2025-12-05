'use client';

import { Moon, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import Logo from '../imports/Logo';

interface NavbarProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export function Navbar({ theme, toggleTheme }: NavbarProps) {
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
              Fitur
            </Link>
            <Link to="/#use-cases" className="text-muted-foreground hover:text-foreground transition-colors">
              Manfaat
            </Link>
            <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
              Tentang
            </Link>
            <Link to="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
              Blog
            </Link>
          </div>

          {/* CTA & Theme Toggle */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="w-9 h-9 rounded-lg bg-secondary hover:bg-accent flex items-center justify-center transition-all hover:scale-105"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5 text-foreground" />
              ) : (
                <Sun className="w-5 h-5 text-foreground" />
              )}
            </button>

            <Button
              variant="ghost"
              className="hidden sm:inline-flex text-foreground hover:text-foreground"
            >
              Masuk
            </Button>

            <Button
              asChild
              className="bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] hover:opacity-90 transition-all hover:scale-105 hover:shadow-lg shadow-[var(--brand-primary)]/20"
            >
              <a
                href="https://wa.me/620811552477?text=Halo,%20saya%20mendapatkan%20informasi%20dari%20website%20ResponPintar.%20Apakah%20saya%20boleh%20tahu%20informasi%20aplikasinya?"
                target="_blank"
                rel="noopener noreferrer"
              >
                Coba Sekarang
              </a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}