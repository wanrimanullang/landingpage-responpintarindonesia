# 📘 Buku Panduan Setup Client Baru
## Platform Respon Pintar - Automation Builder

---

## Daftar Isi
1. [Pendahuluan](#pendahuluan)
2. [Langkah 1: Akses Menu Automation Builder](#langkah-1-akses-menu-automation-builder)
3. [Langkah 2: Membuat Flow Baru](#langkah-2-membuat-flow-baru)
4. [Langkah 3: Pilih Channel WhatsApp](#langkah-3-pilih-channel-whatsapp)
5. [Langkah 4: Tambahkan Automation Entry](#langkah-4-tambahkan-automation-entry)
6. [Langkah 5: Pilih Trigger "All Messages"](#langkah-5-pilih-trigger-all-messages)
7. [Langkah 6: Tambahkan External API](#langkah-6-tambahkan-external-api)
8. [Langkah 7: Konfigurasi HTTP Method POST](#langkah-7-konfigurasi-http-method-post)
9. [Langkah 8: Masukkan URL Webhook](#langkah-8-masukkan-url-webhook)
10. [Langkah 9: Konfigurasi Body Parameter](#langkah-9-konfigurasi-body-parameter)
11. [Langkah 10: Simpan dan Publish Flow](#langkah-10-simpan-dan-publish-flow)

---

## Pendahuluan

Panduan ini menjelaskan cara setup automation flow untuk client baru di platform Respon Pintar. Flow ini akan menghubungkan pesan WhatsApp masuk ke sistem webhook untuk diproses lebih lanjut.

**Waktu yang dibutuhkan:** ± 10-15 menit

**Persyaratan:**
- Akses ke dashboard Respon Pintar (crm.responpintar.com)
- Data client yang akan di-setup (project_id, x_api_key, nomor WhatsApp)

---

## Langkah 1: Akses Menu Automation Builder

1. Login ke dashboard Respon Pintar di **crm.responpintar.com**
2. Pada sidebar sebelah kiri, cari bagian **AUTOMATION**
3. Klik menu **"Automation Builder"** (ditandai dengan kotak merah pada gambar)

> 💡 **Tips:** Menu Automation Builder berada di bawah section "CONTACTS & AUDIENCE"

---

## Langkah 2: Membuat Flow Baru

1. Setelah masuk ke halaman Automation Builder, Anda akan melihat daftar flow yang sudah ada
2. Klik tombol **"+ Add New Flow"** berwarna hijau di pojok kanan atas

> 📝 **Catatan:** Anda juga bisa melihat flow yang sudah ada di tabel, lengkap dengan informasi Platform, Nodes, Status, dan tanggal pembuatan

---

## Langkah 3: Pilih Channel WhatsApp

1. Akan muncul popup **"Choose Automation Channel"**
2. Pilih **"WhatsApp"** dari daftar pilihan yang tersedia
   - Deskripsi: "Send automated messages, catalog templates, and run interactive chats"

> ℹ️ **Info:** Channel lain yang tersedia: All Channels, Telegram Bot, Facebook, Instagram

---

## Langkah 4: Tambahkan Automation Entry

1. Setelah memilih channel, Anda akan masuk ke **Flow Editor**
2. Di panel kanan, lihat bagian **"Flow Toolkit"**
3. Pada section **START**, klik dan drag komponen **"Automation Entry"** ke canvas editor

> 💡 **Tips:** Flow Toolkit berisi semua komponen yang bisa digunakan:
> - **START:** Automation Entry
> - **MESSAGING:** Send Message, Send Template, Call to Action
> - **INTERACTIONS:** Attach Media, Send Location, Assign Chatbot
> - **UTILITIES:** Wait Timer, Wait for Reply

---

## Langkah 5: Pilih Trigger "All Messages"

1. Setelah Automation Entry ditambahkan, akan muncul popup **"Activation Method"**
2. Pilih **"All Messages"** dari pilihan yang tersedia
   - Artinya: Flow akan aktif untuk SEMUA pesan masuk

> 📝 **Pilihan Activation Method lainnya:**
> - **Exact Match:** Cocok persis dengan kata tertentu
> - **Partial Match:** Mengandung kata tertentu
> - **Starts With:** Dimulai dengan kata tertentu
> - **Order Events:** Berdasarkan event order

---

## Langkah 6: Tambahkan External API

1. Scroll ke bawah pada Flow Toolkit di panel kanan
2. Cari section **INTEGRATIONS**
3. Klik dan drag komponen **"External API"** ke canvas
4. Hubungkan node **"All Messages"** dengan node **"External API"** (tarik garis dari output ke input)

> ℹ️ **Komponen Integrations lainnya:**
> - Webhook
> - Save Response
> - Google Sheets
> - Calendar Event

---

## Langkah 7: Konfigurasi HTTP Method POST

1. Klik node **External API** yang sudah ditambahkan
2. Akan muncul panel konfigurasi di sebelah kanan
3. Pada field **"HTTP Method"**, klik dropdown
4. Pilih **"POST"**

> 📝 **HTTP Method yang tersedia:**
> - GET
> - **POST** ← Pilih ini
> - PUT
> - DELETE

---

## Langkah 8: Masukkan URL Webhook

1. Pada field **"API URL"**, masukkan URL webhook berikut:

```
https://workflow.responpintar.com/webhook/general-webhook
```

2. Pastikan HTTP Method sudah terisi **POST**

> ⚠️ **Penting:** URL ini adalah endpoint standar untuk semua client baru. Jangan mengubah URL ini kecuali ada instruksi khusus.

---

## Langkah 9: Konfigurasi Body Parameter

Ini adalah langkah **PALING PENTING**. Anda perlu mengisi Body parameter dengan benar.

### Klik **"+ Add"** pada bagian BODY, lalu isi parameter berikut:

| Key | Value | Keterangan |
|-----|-------|------------|
| `name` | `{{contact_name}}` | Nama kontak (otomatis dari sistem) |
| `phone_number` | `{{senderNumber}}` | Nomor pengirim (otomatis dari sistem) |
| `referrer_source` | `Whatsapp` | Diisi manual dengan teks: "Whatsapp" |
| `project_name` | `[Nama Project]` | Diisi manual sesuai nama client |
| `last_message` | `{{message}}` | Pesan terakhir (otomatis dari sistem) |
| `project_id` | `[ID Project]` | Diisi manual sesuai ID project client |

### Parameter Tambahan untuk Fitur AI:

| Key | Value | Keterangan |
|-----|-------|------------|
| `type` | `1` | Wajib diisi "1" jika menggunakan AI |
| `my_number` | `[Nomor WA Bisnis]` | Optional - nomor untuk di-forward |
| `x_api_key` | `[API Key Client]` | Optional - untuk webhook ke prospect queue |
| `forward_sales` | `[Nomor Sales]` | Optional - untuk forward ke nomor sales |

### Contoh Pengisian Lengkap:

```
name          : {{contact_name}}
phone_number  : {{senderNumber}}
referrer_source: Whatsapp
project_name  : Solides
last_message  : {{message}}
project_id    : kxqtkosqbk
type          : 1
my_number     : 6281220008
x_api_key     : 2bdxx7fl92
forward_sales : 6281938982
```

> 📋 **Catatan Penting:**
> - Variable dalam `{{...}}` akan otomatis terisi dari data pesan yang masuk
> - Parameter lainnya harus diisi MANUAL sesuai data client
> - `type = 1` diperlukan jika ingin mengaktifkan fitur AI

---

## Langkah 10: Simpan dan Publish Flow

1. Setelah semua konfigurasi selesai, berikan nama Flow yang sesuai di bagian atas
   - Contoh: **"AI"** atau sesuai nama client
2. Perhatikan jumlah **Nodes** yang ditampilkan (harus menunjukkan "2 Nodes")
3. Klik tombol **"Update"** atau **"Publish"** berwarna merah di bagian atas untuk menyimpan dan mengaktifkan flow

> ✅ **Checklist sebelum Publish:**
> - [ ] Nama flow sudah sesuai dengan client
> - [ ] Automation Entry sudah terhubung ke External API
> - [ ] URL webhook sudah benar: `https://workflow.responpintar.com/webhook/general-webhook`
> - [ ] HTTP Method sudah diset ke POST
> - [ ] Semua Body parameter sudah diisi lengkap

---

## Ringkasan Alur Setup

```
Dashboard → AUTOMATION → Automation Builder → + Add New Flow → 
Pilih WhatsApp → Drag "Automation Entry" → Pilih "All Messages" → 
Drag "External API" → Set POST → Masukkan URL Webhook → 
Isi Body Parameter → Publish
```

---

## Referensi Parameter Body

### Parameter Wajib (Semua Client):
```
name          : {{contact_name}}
phone_number  : {{senderNumber}}
referrer_source: Whatsapp
project_name  : [diisi manual sesuai client]
last_message  : {{message}}
project_id    : [diisi manual sesuai client]
```

### Parameter Tambahan (Jika Menggunakan AI):
```
type          : 1
my_number     : [nomor WA bisnis - optional]
x_api_key     : [API key client - optional]
forward_sales : [nomor sales - optional]
```

---

## Troubleshooting

| Masalah | Penyebab | Solusi |
|---------|----------|--------|
| Flow tidak aktif | Toggle status dalam posisi OFF | Aktifkan toggle Status menjadi ON (hijau) |
| Pesan tidak masuk ke webhook | URL salah atau typo | Cek kembali URL webhook, pastikan tidak ada spasi |
| Error 400 Bad Request | Format Body parameter salah | Periksa key-value Body, pastikan tidak ada typo |
| Contact name kosong | Variable salah | Pastikan menggunakan `{{contact_name}}` bukan `{{contact_Name}}` |
| Flow tidak merespon | Node tidak terhubung | Pastikan ada garis yang menghubungkan Automation Entry ke External API |

---

## FAQ (Pertanyaan yang Sering Ditanyakan)

**Q: Apakah saya harus membuat flow baru untuk setiap client?**
A: Ya, setiap client memerlukan flow tersendiri dengan project_id dan parameter yang berbeda.

**Q: Bagaimana jika client tidak menggunakan fitur AI?**
A: Cukup isi parameter wajib saja, parameter tambahan untuk AI bisa dikosongkan.

**Q: Apakah URL webhook sama untuk semua client?**
A: Ya, URL `https://workflow.responpintar.com/webhook/general-webhook` digunakan untuk semua client.

**Q: Bagaimana cara mendapatkan project_id dan x_api_key?**
A: Informasi ini diberikan oleh tim teknis saat onboarding client baru.

---

## Kontak Support

Jika mengalami kendala saat setup, hubungi:
- **Tim Technical Support Respon Pintar**
- **Email:** support@responpintar.com

---

*Dokumen ini dibuat pada: Agustus 2026*  
*Versi: 1.0*  
*Penulis: Tim Respon Pintar*
