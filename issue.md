# Issue: Replicate jamiemckaye.com Design System — Work & Services Pages

> **Untuk:** Programmer junior atau model AI berbiaya rendah  
> **Sumber referensi:** https://jamiemckaye.com/work/ dan https://jamiemckaye.com/services/  
> **Tujuan:** Membuat halaman `/showcase` dan `/services` dengan estetik, komponen, dan efek interaktif yang mendekati aslinya

---

## 1. Ringkasan Arsitektur Sumber

Hasil inspeksi langsung terhadap source code jamiemckaye.com mengungkapkan:

| Aspek | Temuan |
|---|---|
| **Framework** | Next.js 15 (App Router) + React 19 |
| **Styling** | Tailwind CSS v4 dengan custom design tokens |
| **Font** | **Geist Sans** (body) + **Geist Mono** (labels/code) — dari Vercel |
| **Animasi** | **Vanilla JS + CSS custom animations** — TIDAK ada GSAP, Framer Motion, atau Three.js |
| **Particle Field** | Canvas 2D / WebGPU — custom implementation, atribut `data-formation` |
| **Deploy** | Vercel |

> **PENTING:** Website aslinya tidak memakai library animasi berat. Semua efek interaktif dibangun dengan **Vanilla JS** dan **CSS transitions**. Implementasi kita menggunakan React + Tailwind CSS yang sudah ada di proyek.

---

## 2. Design Tokens — Nilai Asli dari Source Code

### 2.1 Palet Warna (diambil dari CSS asli)

```css
/* Warna Latar Belakang */
--color-ink-0: #0B0C0E;     /* Latar utama (obsidian) */
--color-ink-1: #111214;     /* Panel sedikit lebih terang */
--color-ink-2: #1a1c1f;     /* Surface tertinggi */

/* Warna Teks */
--color-paper-0: #E9EBEF;   /* Teks utama (putih pudar) */
--color-paper-1: #AEB4BD;   /* Teks sekunder */
--color-paper-2: #636B76;   /* Teks tersier/label dim */

/* Aksen Chrome/Silver */
--color-chrome-lo: #5A6070; /* Silver gelap */
--color-chrome-mid: #8A9099;/* Silver medium */
--color-chrome-hi: #C8CDD5; /* Silver terang */

/* Border */
--color-hairline: rgba(244,245,247,0.08);        /* Border halus */
--color-hairline-strong: rgba(244,245,247,0.14); /* Border tebal */

/* Status */
--color-signal-pos: #8FE3B0; /* Hijau positif (indikator) */
```

### 2.2 Background Hero — CSS Asli yang Diambil dari DOM

Background statis (fixed) di balik semua konten. Ini adalah CSS yang **persis diambil dari inline style elemen `.fixed.inset-0.z-0 > .absolute.inset-0`**:

```css
background:
  radial-gradient(70rem 26rem at 72% 82%, rgba(233,235,239,0.07), transparent 62%),
  radial-gradient(46rem 18rem at 24% 96%, rgba(174,180,189,0.05), transparent 66%),
  repeating-linear-gradient(90deg, rgba(244,245,247,0.02) 0 1px, transparent 1px 96px),
  repeating-linear-gradient(0deg, rgba(244,245,247,0.016) 0 1px, transparent 1px 96px),
  #0B0C0E;

mask-image: radial-gradient(120% 90% at 50% 42%, black 55%, transparent 100%);
-webkit-mask-image: radial-gradient(120% 90% at 50% 42%, black 55%, transparent 100%);
```

Penjelasan:
- Dua `radial-gradient` pertama = glow ambient statis di sudut bawah (tidak mengikuti kursor)
- Dua `repeating-linear-gradient` = grid garis halus 96px interval  
- Mask = memotong background agar fade ke bawah

### 2.3 Tipografi

```css
/* Tambahkan ke <head> index.html */
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300..700&display=swap" rel="stylesheet">

/* Jika ingin Geist (font asli, Vercel): */
/* import dari npm: @vercel/font atau pakai CDN jika tersedia */

/* Fallback stack yang aman: */
font-family: 'Inter', ui-sans-serif, system-ui, -apple-system, sans-serif;
font-family: 'Geist Mono', ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;

/* Skala ukuran yang dipakai (dari source code): */
/* Hero H1:    clamp(2.8rem, 1rem + 5vw, 6rem) — font-size text-display */
/* Card H2:    clamp(1.4rem, 1rem + 1.5vw, 2.2rem) — text-editorial */
/* Bay H2:     clamp(2.1rem, 1.5rem + 2.4vw, 3.6rem) */
/* Body text:  16.5px / 15.5px leading-relaxed */
/* Label mono: 10px - 13.5px, uppercase, letter-spacing 0.12em - 0.14em */
```

---

## 3. Komponen yang Harus Dibangun

### 3.1 `BackgroundScene` — Latar Belakang Fixed dengan Particle Field

**Apa yang dikerjakan:**
- Layer 1: Background CSS statis dengan grid + glow ambient (tidak interaktif)
- Layer 2: Canvas 2D particle field yang merespons gerakan kursor (partikel menjauhi kursor)
- Keduanya `position: fixed`, `z-index: 0`, `pointer-events: none`

**Data atribut dari HTML asli:** `data-formation="true" data-formation-count="3000" data-formation-scrub="true" data-formation-path="[[0.03,0.18],[0.4,0.18]...]"`  
Versi aslinya menggunakan WebGPU untuk performa tinggi. Kita gunakan Canvas 2D saja sudah cukup.

```tsx
// src/components/showcase/BackgroundScene.tsx
import { useEffect, useRef } from 'react';

interface Particle {
  x: number; y: number;
  vx: number; vy: number;
  size: number; opacity: number;
}

export default function BackgroundScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;

    const PARTICLE_COUNT = window.innerWidth < 768 ? 0 : 500; // Disable di mobile
    const MOUSE_REPEL_RADIUS = 120;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const particles: Particle[] = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      size: Math.random() * 1.2 + 0.2,
      opacity: Math.random() * 0.45 + 0.08,
    }));

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', onMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const { x: mx, y: my } = mouseRef.current;

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        const dx = p.x - mx;
        const dy = p.y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MOUSE_REPEL_RADIUS && dist > 0) {
          const force = (MOUSE_REPEL_RADIUS - dist) / MOUSE_REPEL_RADIUS;
          p.vx += (dx / dist) * force * 0.25;
          p.vy += (dy / dist) * force * 0.25;
        }
        p.vx *= 0.98;
        p.vy *= 0.98;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(233,235,239,${p.opacity})`;
        ctx.fill();
      });

      // Garis koneksi
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 75) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(233,235,239,${(1 - dist / 75) * 0.1})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          background: [
            'radial-gradient(70rem 26rem at 72% 82%, rgba(233,235,239,0.07), transparent 62%)',
            'radial-gradient(46rem 18rem at 24% 96%, rgba(174,180,189,0.05), transparent 66%)',
            'repeating-linear-gradient(90deg, rgba(244,245,247,0.02) 0 1px, transparent 1px 96px)',
            'repeating-linear-gradient(0deg, rgba(244,245,247,0.016) 0 1px, transparent 1px 96px)',
            '#0B0C0E',
          ].join(','),
          maskImage: 'radial-gradient(120% 90% at 50% 42%, black 55%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(120% 90% at 50% 42%, black 55%, transparent 100%)',
        }}
      />
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ mixBlendMode: 'screen', opacity: 0.55 }}
      />
    </div>
  );
}
```

---

### 3.2 `MoatPanel` — Panel dengan Cursor-Tracking Glow

**Apa yang dikerjakan:**
1. **Sweep shimmer** — span yang bergerak dari kiri ke kanan saat hover (skewed)
2. **Radial cursor glow** — glow yang mengikuti posisi kursor di dalam panel
3. **Corner ticks** — tanda + di sudut panel (via CSS ::before/::after atau via kelas)

**Atribut HTML asli:** `data-moat="true"` — JS global memantau mousemove dan set CSS variable `--moat-x` dan `--moat-y`

```tsx
// src/components/showcase/MoatPanel.tsx
import { useRef, useCallback } from 'react';

interface MoatPanelProps {
  children: React.ReactNode;
  className?: string;
}

export default function MoatPanel({ children, className = '' }: MoatPanelProps) {
  const panelRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const rect = panelRef.current?.getBoundingClientRect();
    if (!rect || !panelRef.current) return;
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    panelRef.current.style.setProperty('--moat-x', `${x}%`);
    panelRef.current.style.setProperty('--moat-y', `${y}%`);
  }, []);

  return (
    <div
      ref={panelRef}
      onMouseMove={handleMouseMove}
      className={`group panel-jamie ticks-jamie relative overflow-hidden ${className}`}
    >
      {/* Sweep shimmer — dari kiri ke kanan saat hover */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-[-60%] w-[45%] -skew-x-12"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(233,235,239,0.04), transparent)',
          transition: 'transform 700ms ease-out',
        }}
        // Tambahkan via group-hover di Tailwind:
        // group-hover:translate-x-[340%] — atau handle via JS jika perlu
      />
      {/* Cursor radial glow */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: 'radial-gradient(18rem circle at var(--moat-x, 50%) var(--moat-y, 50%), rgba(233,235,239,0.055), transparent 70%)',
        }}
      />
      {children}
    </div>
  );
}
```

**CSS untuk `src/index.css`:**

```css
/* Panel dasar */
.panel-jamie {
  background: rgba(17, 18, 20, 0.85);
  border: 1px solid rgba(244, 245, 247, 0.08);
}

/* Corner ticks — sudut panel */
.ticks-jamie::before,
.ticks-jamie::after {
  content: '';
  position: absolute;
  width: 10px;
  height: 10px;
  border-style: solid;
  border-color: rgba(244, 245, 247, 0.18);
  transition: border-color 300ms;
  z-index: 1;
}
.ticks-jamie::before {
  top: 0; left: 0;
  border-width: 1px 0 0 1px;
}
.ticks-jamie::after {
  bottom: 0; right: 0;
  border-width: 0 1px 1px 0;
}
.ticks-jamie:hover::before,
.ticks-jamie:hover::after {
  border-color: rgba(200, 205, 213, 0.4);
}
```

---

### 3.3 `SignalBadge` — Badge Status Indikator Berkedip

**HTML Asli (copy persis dari source):**
```html
<span class="inline-flex items-center gap-2 whitespace-nowrap border px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.12em] border-[rgba(143,227,176,0.4)] text-signal-pos">
  <span aria-hidden="true" class="h-[5px] w-[5px] rounded-full bg-signal-pos shadow-[0_0_6px_rgba(143,227,176,0.8)]"></span>
  named
</span>
```

```tsx
// src/components/showcase/SignalBadge.tsx
type BadgeVariant = 'positive' | 'neutral' | 'pending';

const STYLES: Record<BadgeVariant, { border: string; color: string; glow: string }> = {
  positive: {
    border: 'rgba(143,227,176,0.4)',
    color: '#8FE3B0',
    glow: '0 0 6px rgba(143,227,176,0.8)',
  },
  neutral: {
    border: 'rgba(244,245,247,0.2)',
    color: '#AEB4BD',
    glow: '',
  },
  pending: {
    border: 'rgba(255,200,100,0.4)',
    color: '#FFC864',
    glow: '0 0 6px rgba(255,200,100,0.6)',
  },
};

export default function SignalBadge({ label, variant = 'positive' }: { label: string; variant?: BadgeVariant }) {
  const s = STYLES[variant];
  return (
    <span
      className="inline-flex items-center gap-2 whitespace-nowrap border px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.12em]"
      style={{ borderColor: s.border, color: s.color }}
    >
      <span
        aria-hidden="true"
        className="h-[5px] w-[5px] rounded-full shrink-0"
        style={{ backgroundColor: s.color, boxShadow: s.glow }}
      />
      {label}
    </span>
  );
}
```

---

### 3.4 `BayNumeral` — Angka Raksasa di Belakang Section

**HTML Asli:**
```html
<div aria-hidden="true" class="pointer-events-none absolute bottom-[-0.1em] z-0 select-none right-[-0.04em]">
  <span class="bay-numeral relative block font-sans text-[clamp(11rem,30vw,26rem)]">
    01
    <span class="bay-numeral-fill" aria-hidden="true">01</span>
  </span>
</div>
```

```tsx
// src/components/showcase/BayNumeral.tsx
export default function BayNumeral({ number, position = 'right' }: { number: string; position?: 'right' | 'left' }) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute bottom-[-0.05em] z-0 select-none"
      style={{ [position]: '-0.04em' }}
    >
      <span
        className="relative block leading-none"
        style={{
          fontSize: 'clamp(11rem, 30vw, 26rem)',
          color: 'transparent',
          WebkitTextStroke: '1px rgba(244,245,247,0.05)',
        }}
      >
        {number}
      </span>
    </div>
  );
}
```

---

### 3.5 `ScrollReveal` — Fade-in saat Elemen Masuk Viewport

**Meniru `data-wreveal` dari HTML asli:**

```tsx
// src/components/showcase/ScrollReveal.tsx
import { useEffect, useRef, ReactNode } from 'react';

export default function ScrollReveal({
  children,
  delay = 0,
  className = '',
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'none';
          }, delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: 0,
        transform: 'translateY(18px)',
        transition: `opacity 0.65s ease, transform 0.65s ease`,
      }}
    >
      {children}
    </div>
  );
}
```

---

### 3.6 `ChromeRule` — Garis Gradien Silver

```tsx
// src/components/showcase/ChromeRule.tsx
export default function ChromeRule({ className = '' }: { className?: string }) {
  return (
    <hr
      className={`border-0 h-px ${className}`}
      style={{
        background:
          'linear-gradient(90deg, transparent 0%, rgba(90,96,112,0.5) 20%, rgba(200,205,213,0.35) 50%, rgba(90,96,112,0.5) 80%, transparent 100%)',
      }}
    />
  );
}
```

---

### 3.7 Scale Model Widgets untuk Halaman Services

#### Widget Bay 01 — Mini Crawl Waterfall

```tsx
// src/components/showcase/MiniCrawlWaterfall.tsx
const ROUTES = [
  { path: '/', delay: '0s', width: 62 },
  { path: '/layanan/', delay: '0.35s', width: 78 },
  { path: '/blog/', delay: '0.7s', width: 54 },
  { path: '/tentang/', delay: '1.05s', width: 70 },
  { path: '/kontak/', delay: '1.4s', width: 58 },
];

export default function MiniCrawlWaterfall() {
  return (
    <div className="border border-[rgba(244,245,247,0.08)] bg-[#0B0C0E] p-6 md:p-8">
      <div className="mb-6 flex items-center justify-between gap-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#636B76]">
          scale model — live crawl waterfall
        </p>
        <span className="h-[6px] w-[6px] rounded-full bg-[#8FE3B0] animate-pulse"
              style={{ boxShadow: '0 0 8px rgba(143,227,176,0.8)' }} />
      </div>
      <div className="grid gap-[11px] font-mono text-[11px]">
        {ROUTES.map((r) => (
          <div key={r.path} className="flex items-center gap-3">
            <span className="w-[74px] shrink-0 text-[#636B76]">{r.path}</span>
            <span className="relative h-[3px] flex-1 overflow-hidden bg-[#1a1c1f]">
              <span
                className="absolute inset-y-0 left-0"
                style={{
                  width: `${r.width}%`,
                  background: 'linear-gradient(90deg, #5A6070, #8A9099, #C8CDD5)',
                  animation: `expandBar 2.4s ease-out ${r.delay} infinite`,
                }}
              />
            </span>
            <span className="w-[52px] shrink-0 text-right text-[#8FE3B0]"
                  style={{ animation: `fadeIn 2.4s ease-out ${r.delay} infinite` }}>
              200
            </span>
          </div>
        ))}
      </div>
      <div className="mt-6 flex items-center justify-between border-t border-[rgba(244,245,247,0.08)] pt-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#636B76]">
          abstracted from live route table
        </p>
        <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#8A9099]">
          bay 01 · powered
        </p>
      </div>
    </div>
  );
}
```

#### Widget Bay 02 — Terminal / AI Concierge

```tsx
// src/components/showcase/MiniTerminal.tsx
export default function MiniTerminal() {
  return (
    <div className="border border-[rgba(244,245,247,0.08)] bg-[#0B0C0E] p-6 md:p-8">
      <div className="mb-6 flex items-center justify-between gap-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#636B76]">
          scale model — AI concierge aktif
        </p>
        <span className="h-[6px] w-[6px] rounded-full bg-[#8FE3B0] animate-pulse"
              style={{ boxShadow: '0 0 8px rgba(143,227,176,0.8)' }} />
      </div>
      <div className="grid gap-[13px] font-mono text-[11px] leading-relaxed">
        <div className="text-[#636B76]">
          <span className="mr-2 text-[#8A9099]">▸</span>
          <span>layanan mana untuk migrasi data e-commerce?</span>
        </div>
        <div className="text-[#AEB4BD]">
          <span className="mr-2 text-[#C8CDD5]">◂</span>
          <span>full-stack — migrasi aman, redirect terverifikasi.</span>
          <span className="terminal-caret" aria-hidden="true" />
        </div>
        <div className="mt-1 flex gap-4 text-[10px] uppercase tracking-[0.14em] text-[#636B76]">
          <span>grounded</span><span>·</span>
          <span>capped</span><span>·</span>
          <span>live on this stack</span>
        </div>
      </div>
      <div className="mt-6 flex items-center justify-between border-t border-[rgba(244,245,247,0.08)] pt-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#636B76]">
          live — same stack this service sells
        </p>
        <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#8A9099]">bay 02 · powered</p>
      </div>
    </div>
  );
}
```

---

## 4. CSS Lengkap yang Harus Ditambahkan ke `src/index.css`

```css
/* ============================================
   JAMIE McKAYE DESIGN SYSTEM — Design Tokens
   ============================================ */

:root {
  --ink-0: #0B0C0E;
  --ink-1: #111214;
  --ink-2: #1a1c1f;
  --paper-0: #E9EBEF;
  --paper-1: #AEB4BD;
  --paper-2: #636B76;
  --chrome-lo: #5A6070;
  --chrome-mid: #8A9099;
  --chrome-hi: #C8CDD5;
  --hairline: rgba(244,245,247,0.08);
  --hairline-strong: rgba(244,245,247,0.14);
  --signal-pos: #8FE3B0;
}

/* ============================================
   UTILITY CLASSES
   ============================================ */

/* Monospaced label — dipakai di seluruh halaman */
.label-mono {
  font-family: 'Geist Mono', ui-monospace, SFMono-Regular, Menlo, monospace;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-size: 11px;
}

/* Chrome/silver gradient text */
.chrome-text {
  background: linear-gradient(135deg, #5A6070 0%, #C8CDD5 50%, #8A9099 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Display heading */
.text-display {
  font-size: clamp(2.8rem, 1rem + 5vw, 6rem);
  line-height: 1.0;
  letter-spacing: -0.03em;
}

/* Editorial/card heading */
.text-editorial {
  font-size: clamp(1.4rem, 1rem + 1.5vw, 2.2rem);
  line-height: 1.1;
  letter-spacing: -0.015em;
}

/* Panel base */
.panel-jamie {
  background: rgba(17, 18, 20, 0.85);
  border: 1px solid rgba(244, 245, 247, 0.08);
}

/* Corner ticks */
.ticks-jamie::before,
.ticks-jamie::after {
  content: '';
  position: absolute;
  width: 10px;
  height: 10px;
  border-style: solid;
  border-color: rgba(244, 245, 247, 0.18);
  transition: border-color 300ms;
  z-index: 1;
}
.ticks-jamie::before { top: 0; left: 0; border-width: 1px 0 0 1px; }
.ticks-jamie::after { bottom: 0; right: 0; border-width: 0 1px 1px 0; }
.ticks-jamie:hover::before,
.ticks-jamie:hover::after { border-color: rgba(200, 205, 213, 0.4); }

/* Chrome rule */
.chrome-rule {
  border: none;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(90, 96, 112, 0.5) 20%,
    rgba(200, 205, 213, 0.35) 50%,
    rgba(90, 96, 112, 0.5) 80%,
    transparent 100%
  );
}

/* Terminal caret blinking */
.terminal-caret::after {
  content: '▊';
  animation: terminalBlink 1.2s step-end infinite;
  color: #C8CDD5;
  font-size: 11px;
}

/* ============================================
   KEYFRAME ANIMATIONS
   ============================================ */

@keyframes expandBar {
  0% { width: 0%; opacity: 0; }
  15% { opacity: 1; }
  70%, 100% { opacity: 1; }
}

@keyframes fadeIn {
  0%, 25% { opacity: 0; }
  45%, 100% { opacity: 1; }
}

@keyframes terminalBlink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

/* Grain texture overlay */
body::after {
  content: '';
  position: fixed;
  inset: 0;
  z-index: 9999;
  pointer-events: none;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
  opacity: 0.35;
}
```

---

## 5. Struktur Halaman `/showcase` (Work Page)

```
Page root (bg: #0B0C0E)
├── BackgroundScene (position: fixed, z: 0) — grid + particle canvas
└── div (position: relative, z: 10)
    ├── Navbar (sticky, top: 0)
    │
    ├── Section: Hero (min-h: 72vh, border-bottom)
    │   ├── Breadcrumb label: "showcase — the registry"
    │   ├── H1: 'Pada <chrome-text>catatannya</chrome-text>.'
    │   ├── Deskripsi singkat (max-width: 52ch)
    │   └── Stat readout (font-mono, uppercase)
    │
    ├── Section: Klien Unggulan (border-bottom)
    │   ├── Header labels
    │   └── MoatPanel (grid 5fr/7fr):
    │       ├── Logo SVG klien
    │       ├── SignalBadge "named"
    │       ├── Deskripsi engagement
    │       ├── ChromeRule
    │       ├── Tags mono
    │       └── <details> expandable case file
    │
    ├── Section: Verified Readout
    │   └── Chart panel (polyline SVG + angka besar)
    │
    └── Section: Case Files (border-bottom)
        ├── MoatPanel clickable (full width) — Case #1
        └── Grid 2-col: Case #2 + Case #3
```

---

## 6. Struktur Halaman `/services`

### 6.1 Bay System — 4 Sections

Setiap bay:
- `min-height: 88vh`  
- `overflow: hidden`
- `position: relative`
- Angka raksasa `BayNumeral` di belakang, bergantian kiri-kanan

### 6.2 Data 4 Bay untuk ResponPintar

| Bay | Label | Heading | Widget |
|-----|-------|---------|--------|
| 01 (kanan) | "01 · AI yang bisa dipercaya" | `AI Chatbot & <chrome-text>Otomasi</chrome-text>` | `MiniCrawlWaterfall` |
| 02 (kiri) | "02 · data menjadi keputusan" | `Analitik & <chrome-text>Dashboard</chrome-text>` | `MiniTerminal` |
| 03 (kanan) | "03 · dari konsep ke produksi" | `Full-stack <chrome-text>Build</chrome-text>` | `MiniCommitLog` |
| 04 (kiri) | "04 · teks yang bekerja" | `Penulisan <chrome-text>Teknis</chrome-text>` | `MiniRedlineEditor` |

### 6.3 Template BaySection Component

```tsx
// src/components/showcase/BaySection.tsx
import BayNumeral from './BayNumeral';
import ScrollReveal from './ScrollReveal';
import MoatPanel from './MoatPanel';
import { ReactNode } from 'react';

interface BaySectionProps {
  number: string;
  numberPosition: 'right' | 'left';
  label: string;
  heading: ReactNode;
  description: string;
  meta: string;
  ctaLabel: string;
  ctaHref: string;
  widget: ReactNode;
  reversed?: boolean;
}

export default function BaySection({
  number, numberPosition, label, heading, description,
  meta, ctaLabel, ctaHref, widget, reversed = false
}: BaySectionProps) {
  return (
    <section className="relative flex min-h-[88vh] flex-col justify-center overflow-hidden border-b py-20 md:py-24"
             style={{ borderColor: 'rgba(244,245,247,0.08)' }}>
      <BayNumeral number={number} position={numberPosition} />
      <div className={`relative z-10 mx-auto w-full max-w-[1440px] px-6 md:px-10 grid items-center gap-x-16 gap-y-12 lg:grid-cols-2 ${reversed ? 'lg:[direction:rtl]' : ''}`}>
        
        {/* Teks kiri */}
        <div className="[direction:ltr]">
          <ScrollReveal>
            <p className="label-mono mb-6" style={{ color: '#AEB4BD' }}>{label}</p>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <h2 className="font-semibold leading-[1.04] tracking-[-0.025em]"
                style={{ fontSize: 'clamp(2.1rem, 1.5rem + 2.4vw, 3.6rem)', color: '#E9EBEF' }}>
              {heading}
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={160}>
            <p className="mt-6 max-w-[52ch] text-[16.5px] leading-relaxed" style={{ color: '#AEB4BD' }}>
              {description}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={240}>
            <p className="mt-7 max-w-[58ch] font-mono text-[11px] uppercase leading-relaxed tracking-[0.14em]"
               style={{ color: '#636B76' }}>
              {meta}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={320}>
            <a href={ctaHref}
               className="mt-9 inline-flex border px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.1em] no-underline transition-colors"
               style={{
                 borderColor: '#8A9099',
                 color: '#E9EBEF',
               }}
               onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#C8CDD5'; e.currentTarget.style.background = 'rgba(233,235,239,0.05)'; }}
               onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#8A9099'; e.currentTarget.style.background = 'transparent'; }}
            >
              {ctaLabel} →
            </a>
          </ScrollReveal>
        </div>

        {/* Widget kanan */}
        <ScrollReveal delay={200} className="[direction:ltr]">
          <MoatPanel className="p-1.5">
            {widget}
          </MoatPanel>
        </ScrollReveal>
      </div>
    </section>
  );
}
```

---

## 7. Daftar File yang Harus Dibuat / Dimodifikasi

```
src/
├── index.css                          ← Tambahkan semua CSS dari Section 4
├── App.tsx                            ← Tambah route /showcase dan /services-new
├── components/
│   └── navbar.tsx                     ← Tambah link ke /showcase dan /services-new
├── pages/
│   ├── showcase.tsx                   ← Halaman Work
│   └── services-new.tsx              ← Halaman Services dengan 4 bay
└── components/showcase/
    ├── BackgroundScene.tsx            ← Section 3.1
    ├── MoatPanel.tsx                  ← Section 3.2
    ├── SignalBadge.tsx                ← Section 3.3
    ├── BayNumeral.tsx                 ← Section 3.4
    ├── BaySection.tsx                 ← Section 6.3
    ├── ScrollReveal.tsx               ← Section 3.5
    ├── ChromeRule.tsx                 ← Section 3.6
    ├── MiniCrawlWaterfall.tsx         ← Section 3.7 (Bay 01)
    ├── MiniTerminal.tsx               ← Section 3.7 (Bay 02)
    ├── MiniCommitLog.tsx              ← Buat sendiri (lihat pattern dari MiniCrawlWaterfall)
    └── MiniRedlineEditor.tsx          ← Buat sendiri
```

---

## 8. Acceptance Criteria / Checklist

- [ ] Background `#0B0C0E` dengan grid 96px terlihat
- [ ] Particle field merespons gerakan kursor (partikel menjauh)
- [ ] Panel cards memiliki sweep shimmer saat hover
- [ ] Panel cards memiliki cursor-tracking radial glow
- [ ] Corner ticks tampil di sudut panel
- [ ] Font monospace dipakai untuk semua label
- [ ] ScrollReveal: elemen fade-in saat masuk viewport
- [ ] Bay numerals raksasa tampil di background section
- [ ] Responsive: mobile (stack) dan desktop (grid 2 col)
- [ ] Semua warna menggunakan CSS custom properties

---

## 9. Library yang Diperlukan

```bash
# TIDAK perlu library tambahan!
# Semua efek dibuat dengan Vanilla JS Canvas + CSS

# Yang sudah ada di proyek:
# - React 18+
# - Tailwind CSS
# - TypeScript

# Opsional jika ingin spring animation lebih mulus:
npm install framer-motion

# Font via tag link di index.html:
# <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300..700&display=swap" rel="stylesheet">
```

---

## 10. Tips Implementasi untuk Junior Developer

1. **Mulai dari `src/index.css`** — pastikan design tokens dan utility classes ada sebelum membuat komponen apapun.
2. **Test `MoatPanel` dahulu dengan `console.log`** — log `--moat-x` dan `--moat-y` untuk verifikasi cursor tracking bekerja.
3. **Matikan particle di mobile** — cek `window.innerWidth < 768` dan jangan buat canvas particles untuk menghemat battery.
4. **`chrome-text` memerlukan prefix** — pastikan ada `background-clip: text` DAN `-webkit-background-clip: text` untuk browser compatibility.
5. **`BackgroundScene` harus dirender di atas semua page** — letakkan di `App.tsx` atau layout utama, bukan di setiap page.
6. **Urutan layer:** `z-0` = background, `z-10` = konten utama, `z-50` = navbar.
7. **`ScrollReveal` initial opacity 0** — pastikan CSS `opacity: 0` tidak menyebabkan flash of content. Gunakan `<noscript>` fallback jika perlu.

---

> **Referensi langsung:** Buka https://jamiemckaye.com/work/ → DevTools → Elements.  
> Semua efek interaktif dipicu oleh atribut data: `data-moat`, `data-wreveal`, `data-formation`, `data-readout`, `data-wind`.  
> JavaScript global memantau atribut-atribut ini saat dokumen load.
