# 📋 Issue: Feature Enhancements Batch 2 — ResponPintar Landing Page

> **Untuk:** Junior Programmer / AI Model  
> **Prioritas:** Medium–High  
> **Stack:** React + TypeScript + TailwindCSS v4 + Lucide React + React Router DOM  
> **Project Path:** `/Users/test/Documents/Project/LandingPage_ResponPintarIndonesia`

---

## ✅ Daftar Perubahan

| No | Fitur | File Utama | Status |
|----|-------|------------|--------|
| 1 | Logo marquee (bergerak kanan→kiri) di paling atas halaman | `our-clients-section.tsx` | `[ ] TODO` |
| 2 | Hilangkan submenu "Use Cases" dari Navbar | `navbar.tsx` | `[ ] TODO` |
| 3 | Redesign halaman chatbot demo sesuai `box-chat-example.png` | `chatbot-demo.tsx` | `[ ] TODO` |
| 4 | Ganti font menjadi lebih minimalis | `index.html`, `index.css` | `[ ] TODO` |

---

## 📌 Issue #1 — Logo Marquee Bergerak (Kanan ke Kiri)

### Deskripsi
Ubah komponen `OurClientsSection` dari tampilan **grid statis** menjadi **marquee / ticker** logo yang bergerak secara horizontal dari kanan ke kiri, otomatis, tanpa henti (infinite loop). Letakkan section ini **di paling atas** halaman home, tepat di bawah Navbar.

### Referensi
Logo bergerak seperti sponsorship ticker di website teknologi modern (e.g., Vercel, Linear, Stripe).

### File yang Diubah
- `src/components/our-clients-section.tsx` — **Ganti seluruh layout**
- `src/pages/home.tsx` (atau `App.tsx`) — Pastikan posisi section ini **paling atas** (setelah Navbar, sebelum Hero Section)

### Spesifikasi Implementasi

#### 1. Layout Marquee
```tsx
// Struktur dasar marquee menggunakan CSS animation
<section id="our-clients" className="py-10 overflow-hidden border-b border-border">
  {/* Optional small header */}
  <p className="text-center text-xs text-muted-foreground uppercase tracking-widest mb-6 font-medium">
    Dipercaya oleh perusahaan-perusahaan terkemuka
  </p>

  {/* Marquee wrapper — clip content yang keluar dari batas */}
  <div className="relative flex overflow-x-hidden">
    
    {/* Track 1 — klon pertama */}
    <div className="flex animate-marquee whitespace-nowrap gap-12 items-center">
      {clients.map((client) => (
        <div key={client.name} className="inline-flex items-center justify-center px-4">
          <img
            src={client.logo}
            alt={client.name}
            className="h-10 w-auto object-contain opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
          />
        </div>
      ))}
    </div>

    {/* Track 2 — klon identik untuk seamless loop */}
    <div className="flex animate-marquee2 whitespace-nowrap gap-12 items-center absolute top-0">
      {clients.map((client) => (
        <div key={`${client.name}-2`} className="inline-flex items-center justify-center px-4">
          <img
            src={client.logo}
            alt={client.name}
            className="h-10 w-auto object-contain opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
          />
        </div>
      ))}
    </div>

  </div>
</section>
```

#### 2. CSS Animation (tambahkan ke `src/index.css` atau `tailwind.config`)
Karena project menggunakan TailwindCSS v4, tambahkan custom animation langsung di CSS:

```css
/* Tambahkan di src/index.css, setelah @layer base */

@keyframes marquee {
  0% { transform: translateX(0%); }
  100% { transform: translateX(-100%); }
}

@keyframes marquee2 {
  0% { transform: translateX(100%); }
  100% { transform: translateX(0%); }
}

.animate-marquee {
  animation: marquee 30s linear infinite;
}

.animate-marquee2 {
  animation: marquee2 30s linear infinite;
}

/* Pause saat hover (opsional, UX lebih baik) */
.animate-marquee:hover,
.animate-marquee2:hover {
  animation-play-state: paused;
}
```

> **Catatan Kecepatan:** Nilai `30s` dapat disesuaikan. Semakin kecil = semakin cepat. Untuk 14 logo, `25s–35s` adalah range yang nyaman.

#### 3. Gradient Fade di Tepi Kiri & Kanan (Opsional tapi direkomendasikan)
Tambahkan efek fade agar logo terkesan "muncul" dan "menghilang" di tepi:
```tsx
{/* Wrapper dengan mask gradient */}
<div
  className="relative flex overflow-x-hidden"
  style={{
    maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
    WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
  }}
>
```

#### 4. Posisi di Halaman
Di file `src/pages/home.tsx`, pastikan urutan section adalah:
```tsx
<>
  <OurClientsSection />   {/* ← PALING ATAS */}
  <HeroSection />
  <FeaturesSection />
  <UseCasesSection />
  {/* ... dst */}
</>
```

### Testing Checklist
- [ ] Marquee bergerak dari kanan ke kiri secara mulus (tidak ada "lompatan")
- [ ] Loop tak terbatas (seamless infinite)
- [ ] Logo grayscale, menjadi berwarna saat di-hover
- [ ] Section ada di paling atas halaman (di bawah navbar)
- [ ] Responsif di mobile (kecepatan tetap)

---

## 📌 Issue #2 — Hapus Submenu "Use Cases" dari Navbar

### Deskripsi
Hapus link navigasi **"Use Cases"** dari Navbar. Link ini saat ini mengarah ke `/#use-cases`.

### File yang Diubah
- `src/components/navbar.tsx`

### Implementasi
Cari dan hapus baris berikut dari file `navbar.tsx`:

```tsx
// HAPUS baris ini:
<Link to="/#use-cases" className="text-muted-foreground hover:text-foreground transition-colors">
  Use Cases
</Link>
```

Pastikan link yang tersisa di navbar adalah:
1. `Features` → `/#features`
2. `About` → `/about`
3. `Blog` → `/blog`
4. `Coba Demo` → `/try`

> **Catatan:** Jangan hapus section Use Cases dari halaman home. Hanya link di navbar yang dihilangkan.

### Testing Checklist
- [ ] Link "Use Cases" tidak muncul di navbar
- [ ] Link navigasi lainnya masih berfungsi normal
- [ ] Layout navbar tidak rusak

---

## 📌 Issue #3 — Redesign Halaman Chatbot Demo (Sesuai `box-chat-example.png`)

### Deskripsi
Redesign total layout halaman `/try` (`chatbot-demo.tsx`) agar mengikuti tampilan yang ada di file referensi **`box-chat-example.png`**.

### Referensi Visual
Lihat file `box-chat-example.png` di root project. Layout yang ditampilkan adalah **2-panel side-by-side**:

```
┌──────────────────────────────────────────────────────────────────┐
│  HEADER: "AI CHATBOT DEMO"  |  AI Assistant  [Pilih industri]  [10 percobaan tersisa...] [···] │
├─────────────────────────┬────────────────────────────────────────┤
│  LEFT PANEL (sidebar):  │  RIGHT PANEL (chat area):              │
│                         │                                        │
│  "Pilih industri        │  [Kosong saat belum pilih industri]    │
│   bisnis"               │                                        │
│  "Chat akan             │  ┌──────────────────────────────────┐  │
│   menyesuaikan          │  │                                  │  │
│   gaya bahasa..."       │  │    [Icon chat bubble]            │  │
│                         │  │    "Pilih industri di sebelah    │  │
│  ─────────────          │  │     kiri untuk memulai demo      │  │
│                         │  │     percakapan"                  │  │
│  🏠 Properti/Real...    │  │                                  │  │
│  🏥 Rumah Sakit         │  └──────────────────────────────────┘  │
│  🩺 Klinik              │                                        │
│  🛍️ Retail              │                                        │
│  🏦 Bank/Perbankan      │  [Input field: "Ketik pesan Anda..."] [→] │
│  📈 Finance/Fintech     │                                        │
│  🎓 Pendidikan          │                                        │
│  🍽️ F&B/Restoran        │                                        │
│  📦 Logistik            │                                        │
│  🏢 Korporat/Enterprise │                                        │
└─────────────────────────┴────────────────────────────────────────┘
```

### Perbedaan dengan Implementasi Saat Ini
| Aspek | Sekarang (jelek) | Target (box-chat-example) |
|---|---|---|
| Layout | Satu halaman penuh, step 1 → step 2 | **Dua panel** sejajar (sidebar + chat) |
| Pilihan Industri | Grid cards 5 kolom | **Sidebar list** di kiri dengan icon + nama |
| Chat Area | Full width setelah pilih | **Panel kanan** yang selalu tampil |
| Header | Minimalis | Header bar dengan info: judul, industri dipilih, sisa percobaan, tombol menu |
| State awal | Grid kosong | Chat panel kosong dengan pesan "Pilih industri di sebelah kiri" |

### File yang Diubah
- `src/pages/chatbot-demo.tsx` — **Ganti seluruh komponen**

### Spesifikasi Layout Lengkap

```tsx
// STRUKTUR UTAMA:
export default function ChatbotDemoPage() {
  // ... state sama seperti sebelumnya ...

  return (
    <main className="pt-16 h-screen flex flex-col bg-background">
      
      {/* ===== TOP HEADER BAR ===== */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-card text-sm">
        <div className="flex items-center gap-2 font-semibold text-xs uppercase tracking-widest text-muted-foreground">
          <Bot className="w-4 h-4" />
          AI Chatbot Demo
        </div>
        <div className="flex items-center gap-3">
          {/* Status: industri terpilih */}
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-green-500" />
            <span className="text-foreground font-medium">AI Assistant</span>
            {selectedIndustry && (
              <span className="px-2 py-0.5 bg-[var(--brand-primary)]/10 text-[var(--brand-primary)] rounded-full text-xs font-medium">
                {industries.find(i => i.id === selectedIndustry)?.name}
              </span>
            )}
          </div>
          {/* Counter */}
          <span className="text-muted-foreground text-xs">
            {MAX_USER_MESSAGES - userMessageCount} percobaan tersisa
          </span>
          {/* Menu dots */}
          <button className="p-1.5 rounded-lg hover:bg-accent">
            <MoreHorizontal className="w-4 h-4 text-muted-foreground" />
          </button>
        </div>
      </div>

      {/* ===== MAIN TWO-PANEL LAYOUT ===== */}
      <div className="flex flex-1 overflow-hidden">

        {/* ── LEFT SIDEBAR: Pilih Industri ── */}
        <div className="w-64 flex-shrink-0 border-r border-border bg-muted/20 flex flex-col overflow-y-auto">
          <div className="p-4 border-b border-border">
            <p className="font-semibold text-sm text-foreground">Pilih industri bisnis</p>
            <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
              Chat akan menyesuaikan gaya bahasa sesuai industri pilihan Anda
            </p>
          </div>

          <nav className="p-2 flex-1">
            {industries.map((ind) => {
              const Icon = ind.icon;
              const isActive = selectedIndustry === ind.id;
              return (
                <button
                  key={ind.id}
                  onClick={() => handleSelectIndustry(ind.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left text-sm transition-all mb-0.5
                    ${isActive
                      ? 'bg-[var(--brand-primary)]/10 text-[var(--brand-primary)] font-medium'
                      : 'text-muted-foreground hover:bg-accent hover:text-foreground'
                    }`}
                >
                  <Icon className="w-4 h-4 flex-shrink-0" />
                  <span>{ind.name}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* ── RIGHT PANEL: Chat Area ── */}
        <div className="flex-1 flex flex-col overflow-hidden">
          
          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {!selectedIndustry ? (
              /* Empty state — belum pilih industri */
              <div className="h-full flex flex-col items-center justify-center text-center gap-3">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-muted-foreground" />
                </div>
                <p className="text-muted-foreground text-sm">
                  Pilih industri di sebelah kiri<br />
                  untuk memulai demo percakapan
                </p>
              </div>
            ) : (
              /* Chat messages list */
              <>
                {messages.map((msg) => (
                  // ... bubble chat (sama seperti sebelumnya) ...
                ))}
                {/* Typing indicator */}
              </>
            )}
          </div>

          {/* Input Bar */}
          <div className="p-3 border-t border-border bg-card">
            <form onSubmit={handleSendMessage} className="flex items-center gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                disabled={!selectedIndustry || isLimitReached}
                placeholder={
                  !selectedIndustry ? "Pilih industri terlebih dahulu..." :
                  isLimitReached ? "Sesi demo berakhir" :
                  "Ketik pesan Anda ..."
                }
                className="flex-1 bg-background border border-input rounded-lg py-2.5 px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary)]/50 disabled:opacity-40"
              />
              <button
                type="submit"
                disabled={!inputValue.trim() || !selectedIndustry || isLimitReached}
                className="p-2.5 bg-[var(--brand-primary)] text-white rounded-lg hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* Overlay Demo Selesai — sama seperti sebelumnya */}
      {isLimitReached && (
        // ... overlay modal ...
      )}
    </main>
  );
}
```

### Import yang Diperlukan
```tsx
import { useState, useRef, useEffect } from 'react';
import { 
  Bot, Send, MessageSquare, MoreHorizontal,
  Building2, Hospital, ShoppingBag, Landmark, TrendingUp,
  GraduationCap, UtensilsCrossed, Truck, Briefcase
} from 'lucide-react';
import { Link } from 'react-router-dom';
```

### Penyesuaian Tambahan
- **Hapus** tombol "Back to Home" di header (sudah ada navbar)
- Sidebar di mobile: sembunyikan dengan `hidden md:flex` atau buat toggle button
- Counter "sisa percobaan" dipindah ke **header bar** (bukan di area input)
- Progress bar counter **dihapus** dari area input
- Overlay modal saat limit tercapai tetap sama

### Testing Checklist
- [ ] Layout 2-panel (sidebar kiri + chat kanan) berfungsi di desktop
- [ ] Sidebar menampilkan daftar industri dengan icon
- [ ] Industri yang dipilih punya highlight aktif (warna brand)
- [ ] Panel kanan tampil pesan "Pilih industri..." saat belum pilih
- [ ] Setelah pilih industri, AI langsung menyapa di chat kanan
- [ ] Input disabled saat belum pilih industri
- [ ] Counter sisa percobaan muncul di header bar
- [ ] Overlay limit 10 pesan tetap berfungsi

---

## 📌 Issue #4 — Ganti Font ke Lebih Minimalis

### Deskripsi
Ubah font utama dari Inter (atau font saat ini) ke font yang terkesan lebih **minimalis, clean, dan modern**. Font yang direkomendasikan: **`DM Sans`** atau **`Geist`** atau **`Plus Jakarta Sans`**.

### Pilihan Font (Pilih Salah Satu)

| Font | Karakter | Google Fonts Link |
|------|----------|-------------------|
| **DM Sans** (Rekomendasi) | Geometric sans-serif, sangat bersih dan minimalis | `https://fonts.google.com/specimen/DM+Sans` |
| **Plus Jakarta Sans** | Modern, sedikit humanis, cocok untuk SaaS | `https://fonts.google.com/specimen/Plus+Jakarta+Sans` |
| **Geist** | Font Vercel, ultra-minimalis, tech-oriented | Via CDN npm atau self-host |
| **Outfit** | Geometric, bulat, sangat clean | `https://fonts.google.com/specimen/Outfit` |

### File yang Diubah
1. `index.html` — Ganti import Google Fonts
2. `src/index.css` — Update `font-family` di `:root` dan `body`

### Implementasi: `index.html`

Cari baris `<link>` untuk font Inter yang sudah ada, **ganti** dengan:

```html
<!-- GANTI font Inter yang lama dengan DM Sans -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;0,9..40,800;1,9..40,400&display=swap" rel="stylesheet">
```

### Implementasi: `src/index.css`

Cari deklarasi font di `:root` atau `body`, **ganti** dengan:

```css
/* Ganti font family di body/root */
body {
  font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-optical-sizing: auto;
}

/* Untuk heading, bisa gunakan font-weight lebih berat */
h1, h2, h3, h4, h5, h6 {
  font-family: 'DM Sans', sans-serif;
  font-weight: 700;
  letter-spacing: -0.02em; /* tight letter spacing = kesan minimalis modern */
}
```

### Penyesuaian Tambahan untuk Kesan Minimalis
Setelah ganti font, perlu cek beberapa hal:
1. **Heading di Hero Section** — tambahkan `tracking-tight` (letter-spacing negatif)
2. **Body text** — gunakan `font-weight: 400` atau `300` (bukan 500)
3. **Footer big brand name** — font sudah besar, pastikan pakai `font-weight: 900` dan `letter-spacing: -0.04em`
4. **Navbar** — pastikan nama "Respon Pintar" tidak terlalu bold, cukup `font-weight: 500`

### Testing Checklist
- [ ] Font baru tampil dengan benar di semua halaman
- [ ] Tidak ada fallback ke font browser default
- [ ] Heading terlihat lebih bersih/minimalis
- [ ] Performa tidak turun (font di-preload dengan benar)

---

## 🔧 Urutan Implementasi yang Direkomendasikan

```
1. Issue #2 (termudah, 5 menit) → Hapus 1 baris di navbar.tsx
2. Issue #4 (mudah, 10 menit)   → Ganti font di index.html + index.css
3. Issue #1 (medium, 30 menit)  → Ubah grid → marquee animation
4. Issue #3 (paling kompleks)   → Redesign total layout chatbot-demo.tsx
```

---

## 📁 Ringkasan File yang Diubah

```
DIUBAH:
├── src/components/our-clients-section.tsx  ← Ganti grid → marquee animasi
├── src/components/navbar.tsx               ← Hapus link "Use Cases"
├── src/pages/chatbot-demo.tsx              ← Redesign total layout 2-panel
├── src/index.css                           ← Tambah animasi marquee + ganti font-family
└── index.html                              ← Ganti import Google Fonts
```

---

## 💬 Catatan Tambahan

- **Jangan ubah** `src/App.tsx` (routing tetap sama)
- **Jangan ubah** Chatwoot integration (`useChatwoot`)
- **Jangan ubah** file-file di `src/components/ui/`
- Semua perubahan harus kompatibel dengan **TailwindCSS v4**
- Gunakan CSS variable yang sudah ada: `var(--brand-primary)`, dll.
- Referensi visual ada di root project: `box-chat-example.png`, `footer-example.png`, `icon-example.png`

---

*Issue dibuat: 2026-06-16 | Project: ResponPintar Landing Page | Batch 2*
