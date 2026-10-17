# Issue: Halaman Penghapusan Akun (`/delete-account`)

## 📋 Summary

Tambahkan halaman baru `https://responpintar.com/delete-account` yang menjelaskan prosedur penghapusan akun dan data pengguna sesuai standar:

- **UU PDP No. 27 Tahun 2022** (Perlindungan Data Pribadi Indonesia)
- **Google Play Store** – Data Safety & Deletion Policy
- **Apple App Store** – App Store Review Guideline 5.1.1

Halaman ini **wajib ada** sebelum aplikasi mobile Respon Pintar dapat di-publish/update di Play Store dan App Store.

---

## 🎯 Tujuan Halaman

1. Memberikan **instruksi langkah demi langkah** cara menghapus akun dari dalam Dashboard maupun via web.
2. Menjelaskan **data apa saja yang dihapus** dan **data apa yang tetap disimpan** beserta alasannya.
3. Menyediakan **formulir permintaan** bagi pengguna yang sudah uninstall atau tidak bisa login.
4. Menyertakan **FAQ ringkas** terkait penghapusan akun.
5. Tampil **responsif** (mobile-first) dan mengikuti design system yang sudah ada di project ini.

---

## 🗂️ Daftar File yang Perlu Dibuat / Diubah

| File | Aksi | Keterangan |
|---|---|---|
| `src/pages/delete-account.tsx` | **Buat baru** | Komponen halaman utama |
| `src/App.tsx` | **Edit** | Tambah route `/delete-account` |
| `src/components/footer.tsx` | **Edit** | Tambah link "Hapus Akun" di kolom Company |

---

## 🏗️ Struktur Konten Halaman

### 1. Header

```
Badge: "Pengelolaan Akun"
H1: "Hapus Akun & Data Pribadi"
Subtext: Deskripsi singkat hak pengguna
Last updated: [tanggal terkini]
```

---

### 2. Peringatan Penting (Alert Banner)

Box berwarna merah/oranye (warning) yang berisi:

> ⚠️ Penghapusan akun bersifat **permanen dan tidak dapat dibatalkan**. Pastikan Anda telah mengunduh semua data yang dibutuhkan sebelum melanjutkan.

---

### 3. Cara Menghapus Akun

#### 3a. Melalui Dashboard (Self-Service)

Tampilkan sebagai **step-by-step numbered list** dengan ikon per langkah:

1. Login ke dashboard Respon Pintar di `app.responpintar.com`
2. Klik foto profil / nama Anda di pojok kanan atas
3. Pilih menu **"Pengaturan Akun"** (Account Settings)
4. Gulir ke bawah hingga bagian **"Zona Berbahaya"** (Danger Zone)
5. Klik tombol **"Hapus Akun Saya"**
6. Masukkan password akun Anda untuk konfirmasi
7. Klik **"Konfirmasi Hapus"** — akun Anda akan masuk masa tenggang 14 hari

> ℹ️ Selama masa tenggang 14 hari, akun dapat dipulihkan dengan login kembali. Setelah itu, penghapusan bersifat permanen.

#### 3b. Melalui Formulir Web (Jika Tidak Bisa Login)

Tampilkan **form interaktif** dengan field:

| Field | Tipe | Keterangan |
|---|---|---|
| Email terdaftar | Email input | Required |
| Nomor WhatsApp bisnis | Tel input | Required |
| Alasan penghapusan | Select dropdown | Opsional (untuk internal analitik) |
| Pesan tambahan | Textarea | Opsional |
| Checkbox persetujuan | Checkbox | **Required** — "Saya memahami bahwa tindakan ini permanen" |
| Tombol Submit | Button | Submit ke `mailto:support@responpintar.com` atau endpoint API |

> **Catatan untuk developer**: Untuk MVP, tombol Submit cukup membuka `mailto:support@responpintar.com`
> dengan subject dan body yang sudah terisi otomatis. Untuk v2, bisa diintegrasikan ke API backend.

---

### 4. Data yang Akan Dihapus

Tampilkan sebagai **grid card** dengan ikon dari `lucide-react`:

| Ikon | Kategori | Detail |
|---|---|---|
| `User` | Data Profil & Akun | Nama, email, nomor HP, foto profil, kredensial login |
| `MessageSquare` | Data Bot & Workflow | Konfigurasi bot, template pesan, alur percakapan |
| `Users` | Data Kontak | Daftar kontak pelanggan yang diimpor |
| `MessageCircle` | Riwayat Percakapan | Log chat dan lampiran media |
| `Zap` | Integrasi | Sesi koneksi WhatsApp API, token integrasi pihak ketiga |
| `CreditCard` | Data Pembayaran | Informasi langganan dan metode pembayaran aktif |

---

### 5. Data yang Tetap Disimpan

Tampilkan sebagai **tabel atau card** dengan latar belakang neutral:

| Data | Alasan Penyimpanan | Durasi |
|---|---|---|
| Catatan transaksi & invoice | Kepatuhan regulasi perpajakan Indonesia | 5 tahun |
| Log keamanan (tanpa PII) | Pencegahan penipuan & audit sistem | 12 bulan |

---

### 6. Timeline / Waktu Proses

Tampilkan sebagai **timeline visual** (horizontal di desktop, vertikal di mobile):

```
[Hari 1]    → Permintaan diterima & dikonfirmasi via email
[Hari 1–14] → Masa tenggang: akun nonaktif tapi bisa dipulihkan
[Hari 14]   → Data dihapus dari sistem utama
[Hari 30–90]→ Data dihapus dari sistem backup
```

---

### 7. FAQ Singkat (Accordion / Collapsible)

Pertanyaan yang perlu dijawab:

- Apakah saya bisa memulihkan akun setelah dihapus?
- Berapa lama proses penghapusan?
- Apakah data pelanggan saya juga ikut terhapus?
- Bagaimana dengan sisa saldo/langganan yang belum habis?
- Apakah integrasi WhatsApp saya langsung terputus?

---

### 8. Kontak Bantuan

```
Email: support@responpintar.com
WhatsApp: +62 821-8988-5080
Jam operasional: Senin–Jumat, 09.00–17.00 WIB
```

---

## 🎨 Design Guidelines

Ikuti **design system yang sudah ada** di project ini. Semua class dan variable CSS mengacu
pada `src/index.css` dan pola yang dipakai di `privacy.tsx` dan `terms.tsx`.

### CSS Variables yang Digunakan

```tsx
var(--brand-primary)         // Warna utama brand
var(--brand-gradient-start)  // Gradient awal
var(--brand-gradient-end)    // Gradient akhir
```

### Pola Komponen (Konsisten dengan halaman existing)

```tsx
// Layout wrapper — sama dengan privacy.tsx & terms.tsx
<main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
  <div className="max-w-4xl mx-auto">
    ...
  </div>
</main>

// Header badge
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-6">
  <Icon className="w-4 h-4 text-[var(--brand-primary)]" />
  <span className="text-sm">Pengelolaan Akun</span>
</div>

// Section card
<section className="bg-card border border-border rounded-2xl p-8">
  ...
</section>

// Icon header di setiap section
<div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center flex-shrink-0">
  <Icon className="w-5 h-5 text-white" />
</div>
```

### Warning Banner (Komponen baru — khusus halaman ini)

```tsx
<div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-2xl p-6 flex items-start gap-4">
  <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
  <div>
    <h3 className="font-semibold text-red-700 dark:text-red-400 mb-1">Peringatan Penting</h3>
    <p className="text-red-600 dark:text-red-300 text-sm leading-relaxed">
      Penghapusan akun bersifat <strong>permanen dan tidak dapat dibatalkan</strong>. ...
    </p>
  </div>
</div>
```

### Form Style

```tsx
// Input field
<input
  type="email"
  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground
             focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary)] transition"
/>

// Tombol submit — destructive style
<button
  type="submit"
  className="w-full sm:w-auto px-8 py-3 rounded-xl bg-red-600 hover:bg-red-700
             text-white font-semibold transition-colors duration-200"
>
  Kirim Permintaan Hapus Akun
</button>
```

---

## 📝 Perubahan di `src/App.tsx`

```diff
+ import DeleteAccountPage from './pages/delete-account';

  <Routes>
    <Route path="/"        element={<HomePage />} />
    <Route path="/privacy" element={<PrivacyPage />} />
    <Route path="/terms"   element={<TermsPage />} />
+   <Route path="/delete-account" element={<DeleteAccountPage />} />
    ...
  </Routes>
```

---

## 📝 Perubahan di `src/components/footer.tsx`

Tambahkan link di bawah link `Terms of Service` pada kolom **Company**:

```diff
  <li>
    <Link to="/terms" ...>Terms of Service</Link>
  </li>
+ <li>
+   <Link
+     to="/delete-account"
+     style={{ color: '#666', fontSize: '14px', textDecoration: 'none', transition: 'color 0.2s' }}
+     onMouseOver={(e) => e.currentTarget.style.color = '#fff'}
+     onMouseOut={(e) => e.currentTarget.style.color = '#666'}
+   >
+     Hapus Akun
+   </Link>
+ </li>
```

---

## ✅ Acceptance Criteria

- [ ] Halaman dapat diakses di `http://localhost:5173/delete-account`
- [ ] Halaman dapat diakses di `https://responpintar.com/delete-account`
- [ ] Tampil **responsif** di mobile (375px), tablet (768px), dan desktop (1280px+)
- [ ] **Dark mode / Light mode** berfungsi (mengikuti tema global via `dark:` prefix)
- [ ] Warning banner merah tampil di bagian atas konten
- [ ] Step-by-step instruksi jelas terbaca
- [ ] Formulir web ter-validasi sebelum submit (field required tidak boleh kosong)
- [ ] Tombol submit membuka email client dengan template yang sudah terisi (mailto)
- [ ] Semua icon menggunakan `lucide-react` (konsisten dengan halaman lain)
- [ ] Link **"Hapus Akun"** tampil di footer website
- [ ] Tidak ada TypeScript error / lint error
- [ ] `<title>` halaman diset ke: `Hapus Akun | Respon Pintar`

---

## 🔗 Referensi

- [Privacy Policy — Respon Pintar](https://responpintar.com/privacy)
- [Google Play — Data Deletion Policy](https://support.google.com/googleplay/android-developer/answer/13316927)
- [Apple App Store Review Guideline 5.1.1](https://developer.apple.com/app-store/review/guidelines/#privacy)
- [UU PDP No. 27/2022](https://peraturan.bpk.go.id/)

---

## 📌 Branch & PR

- **Branch**: `feature/delete-account-page`
- **Base branch**: `main`
- **PR Title**: `feat: add delete account page (/delete-account)`
- **Labels**: `enhancement`, `compliance`, `frontend`
