# 📋 Issue: Penambahan Tutorial Setup Workflow

## 📌 Informasi Task

| Field | Value |
|-------|-------|
| **Nama Task** | Penambahan Tutorial Setup Workflow |
| **Priority** | Medium |
| **Estimasi Waktu** | 3-4 jam |
| **Branch** | `feature/tutorial-setup-workflow` |

---

## 📖 Deskripsi

### Existing (Kondisi Saat Ini)
- Website saat ini TIDAK memiliki halaman tutorial untuk setup workflow/automation builder
- Hanya ada tutorial untuk koneksi WhatsApp di `/tutorial/connected-whatsapp`

### Ekspektasi (Yang Diinginkan)
- Membuat halaman tutorial baru yang user-friendly untuk setup workflow automation
- Desain dan UX mengikuti pola yang sudah ada di `tutorial-connected-whatsapp.tsx`
- Tutorial harus interaktif dengan step-by-step navigation

---

## 📁 Referensi File

### File Konten (Knowledge)
```
/knowledge/SOP-Setup-Client-Respon-Pintar.md    # Konten lengkap 10 langkah
/knowledge/KONTEN-SOP-UNTUK-DOCS.txt            # Versi plain text
```

### File Gambar
```
/public/tutorial-setup-workflow/1.png   # Akses Menu Automation Builder
/public/tutorial-setup-workflow/2.png   # Membuat Flow Baru
/public/tutorial-setup-workflow/3.png   # Pilih Channel WhatsApp
/public/tutorial-setup-workflow/4.png   # Tambahkan Automation Entry
/public/tutorial-setup-workflow/5.png   # Pilih Trigger All Messages
/public/tutorial-setup-workflow/6.png   # Tambahkan External API
/public/tutorial-setup-workflow/7.png   # Konfigurasi HTTP Method POST
/public/tutorial-setup-workflow/8.png   # Masukkan URL Webhook
/public/tutorial-setup-workflow/9.png   # Konfigurasi Body Parameter
/public/tutorial-setup-workflow/10.png  # Simpan dan Publish Flow
```

### File Referensi (Contoh yang Harus Diikuti)
```
/src/pages/tutorial-connected-whatsapp.tsx  # POLA UTAMA - ikuti struktur ini
```

---

## ✅ Task Checklist

### 1. Setup Branch
- [ ] Buat branch baru: `git checkout -b feature/tutorial-setup-workflow`

### 2. Buat File Komponen
- [ ] Buat file `/src/pages/tutorial-setup-workflow.tsx`

### 3. Struktur Komponen (Ikuti Pola tutorial-connected-whatsapp.tsx)

#### 3.1 Custom Hook useMediaQuery
```typescript
// Copy dari tutorial-connected-whatsapp.tsx
function useMediaQuery(query: string) { ... }
```

#### 3.2 Data Steps (10 Langkah)
```typescript
interface StepData {
  id: number;
  title: string;
  shortTitle: string;
  description: string;
  subSteps?: string[];
  tips: string;
  image: string;
  icon: typeof MessageCircle;
}

const steps: StepData[] = [
  {
    id: 1,
    title: 'Akses Menu Automation Builder',
    shortTitle: 'Automation',
    description: 'Login ke dashboard Respon Pintar. Pada sidebar kiri, cari bagian AUTOMATION, lalu klik menu "Automation Builder".',
    tips: 'Menu Automation Builder berada di bawah section "CONTACTS & AUDIENCE".',
    image: '/tutorial-setup-workflow/1.png',
    icon: Settings, // atau icon yang sesuai
  },
  // ... langkah 2-10 sesuai /knowledge/SOP-Setup-Client-Respon-Pintar.md
];
```

#### 3.3 Komponen Utama
- [ ] Hero Header dengan badge "Tutorial Automation"
- [ ] Sidebar navigasi (desktop only)
- [ ] Mobile step indicator (dots)
- [ ] Step Content Card dengan:
  - Icon dan nomor langkah
  - Judul langkah
  - Deskripsi
  - Sub-steps (jika ada)
  - Tips box
- [ ] Screenshot Card dengan browser chrome styling
- [ ] Navigation buttons (Prev/Next)
- [ ] Tips Section di bagian bawah
- [ ] CTA Section "Butuh Bantuan?"

### 4. Tambahkan Route di App.tsx
```typescript
// Di /src/App.tsx, tambahkan:
import TutorialSetupWorkflowPage from './pages/tutorial-setup-workflow';

// Di dalam <Routes>:
<Route path="/tutorial/setup-workflow" element={<TutorialSetupWorkflowPage />} />
```

### 5. Update Navigasi (Opsional)
- [ ] Pertimbangkan menambahkan link ke tutorial baru di footer atau halaman lain yang relevan

### 6. Testing
- [ ] Test navigasi keyboard (Arrow Left/Right)
- [ ] Test responsive design (mobile & desktop)
- [ ] Test semua 10 gambar loading dengan benar
- [ ] Test progress bar berfungsi
- [ ] Test link CTA berfungsi

---

## 📝 Detail 10 Langkah Tutorial

| Step | Title | Gambar |
|------|-------|--------|
| 1 | Akses Menu Automation Builder | 1.png |
| 2 | Membuat Flow Baru | 2.png |
| 3 | Pilih Channel WhatsApp | 3.png |
| 4 | Tambahkan Automation Entry | 4.png |
| 5 | Pilih Trigger "All Messages" | 5.png |
| 6 | Tambahkan External API | 6.png |
| 7 | Konfigurasi HTTP Method POST | 7.png |
| 8 | Masukkan URL Webhook | 8.png |
| 9 | Konfigurasi Body Parameter | 9.png |
| 10 | Simpan dan Publish Flow | 10.png |

---

## 🎨 Styling Guidelines

### Warna dan Tema
- Gunakan CSS variables yang sudah ada: `var(--brand-primary)`, `var(--brand-gradient-start)`, dll
- Dark mode support menggunakan `var(--foreground)`, `var(--background)`, dll

### Icons (dari lucide-react)
Gunakan icon yang relevan untuk setiap langkah:
```typescript
import { 
  Settings,      // Langkah 1 - Automation Builder
  PlusCircle,    // Langkah 2 - Add New Flow
  MessageCircle, // Langkah 3 - WhatsApp Channel
  Play,          // Langkah 4 - Automation Entry
  Inbox,         // Langkah 5 - All Messages
  Link,          // Langkah 6 - External API
  Code,          // Langkah 7 - HTTP Method
  Globe,         // Langkah 8 - URL Webhook
  FileText,      // Langkah 9 - Body Parameter
  CheckCircle2,  // Langkah 10 - Publish
  Lightbulb,     // Tips
  Info,          // Info section
} from 'lucide-react';
```

---

## 🧪 Testing Checklist

### Functional Testing
- [ ] Dapat navigate antar step menggunakan tombol Next/Previous
- [ ] Dapat navigate menggunakan keyboard (Arrow keys)
- [ ] Dapat click langsung ke step tertentu via sidebar (desktop)
- [ ] Dapat click dots indicator (mobile)
- [ ] Progress bar update sesuai step aktif
- [ ] Gambar loading dengan smooth transition
- [ ] Link CTA WhatsApp berfungsi
- [ ] Link Dashboard berfungsi di step terakhir

### Responsive Testing
- [ ] Desktop (1024px+): Sidebar visible, full navigation
- [ ] Tablet (768px-1023px): No sidebar, dots indicator
- [ ] Mobile (<768px): Compact layout, dots indicator

### Cross-Browser Testing
- [ ] Chrome
- [ ] Firefox
- [ ] Safari

---

## 📤 Git Workflow

```bash
# 1. Buat branch baru
git checkout -b feature/tutorial-setup-workflow

# 2. Setelah implementasi, commit
git add .
git commit -m "feat: add tutorial setup workflow page"

# 3. Push ke remote
git push -u origin feature/tutorial-setup-workflow

# 4. Buat Pull Request ke branch main/develop
```

---

## 🔗 URL Final

Setelah implementasi selesai, halaman akan tersedia di:
```
/tutorial/setup-workflow
```

---

## 📞 Kontak

Jika ada pertanyaan terkait task ini, hubungi:
- Tim Technical Support Respon Pintar
- Email: support@responpintar.com

---

*Issue dibuat: Agustus 2026*
