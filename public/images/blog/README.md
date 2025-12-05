# Blog Images

Folder ini berisi gambar-gambar untuk artikel blog ResponPintar.

## Struktur File

Setiap artikel blog memiliki gambar header yang sesuai dengan topiknya:

- `ai-customer-service.jpg` - Artikel tentang AI dan customer service
- `customer-satisfaction.jpg` - Artikel tentang strategi meningkatkan kepuasan pelanggan
- `customer-service-trends.jpg` - Artikel tentang tren customer service
- `omnichannel-support.jpg` - Artikel tentang omnichannel support
- `digital-transformation.jpg` - Artikel tentang transformasi digital UMKM
- `business-efficiency.jpg` - Artikel tentang data analytics
- `chatbot-whatsapp.jpg` - Artikel tentang membangun chatbot
- `customer-experience.jpg` - Artikel tentang customer retention
- `ai-automation.jpg` - Artikel tentang integrasi AI dengan CRM
- `ai-technology.jpg` - Artikel tentang future of customer service

## Penggunaan

Gambar-gambar ini direferensikan di file `src/data/blog-posts.ts` dengan path:
```typescript
image: '/images/blog/nama-file.jpg'
```

## Menambah Gambar Baru

Untuk menambahkan gambar artikel baru:
1. Simpan file gambar di folder ini dengan format `.jpg` atau `.png`
2. Gunakan nama file yang deskriptif dan sesuai dengan topik artikel
3. Update referensi di `src/data/blog-posts.ts`

## Rekomendasi Ukuran

- Lebar: 1200px - 1600px
- Tinggi: 630px - 900px
- Format: JPG atau PNG
- Ukuran file: < 500KB untuk performa optimal
