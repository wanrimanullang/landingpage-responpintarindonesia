# Chatwoot Live Chat Integration

Integrasi Chatwoot live chat widget untuk ResponPintar Landing Page.

## 📦 Komponen

### 1. `useChatwoot` Hook
Custom React hook untuk memuat dan menginisialisasi Chatwoot SDK.

**Lokasi:** `src/hooks/useChatwoot.ts`

**Features:**
- ✅ Dynamic script loading
- ✅ TypeScript support dengan type declarations
- ✅ Automatic cleanup on unmount
- ✅ Configurable settings (position, locale, bubble style)
- ✅ Error handling

## 🚀 Implementasi

### Di App.tsx

```tsx
import { useChatwoot } from './hooks/useChatwoot';

// Di dalam component
useChatwoot({
  websiteToken: 'AH84MtFe5Ux2XxicvHdu77PX',
  baseUrl: 'https://chat.responpintar.com',
  position: 'right',
  locale: 'id',
});
```

## ⚙️ Konfigurasi

### Available Options

```typescript
interface ChatwootConfig {
  websiteToken: string;        // Required - Token dari Chatwoot dashboard
  baseUrl: string;             // Required - URL Chatwoot instance
  hideMessageBubble?: boolean; // Optional - Sembunyikan bubble awal
  position?: 'left' | 'right'; // Optional - Posisi widget (default: 'right')
  locale?: string;             // Optional - Bahasa (default: 'id')
}
```

### Contoh Konfigurasi Lanjutan

```tsx
useChatwoot({
  websiteToken: 'YOUR_TOKEN',
  baseUrl: 'https://chat.responpintar.com',
  position: 'left',              // Pindah ke kiri
  locale: 'en',                  // Bahasa Inggris
  hideMessageBubble: true,       // Sembunyikan bubble
});
```

## 🎨 Customization

### Mengubah Posisi Widget

```tsx
useChatwoot({
  // ... config lainnya
  position: 'left', // atau 'right'
});
```

### Mengubah Bahasa

```tsx
useChatwoot({
  // ... config lainnya
  locale: 'id', // Indonesia
  // locale: 'en', // English
});
```

### Menyembunyikan Bubble Awal

```tsx
useChatwoot({
  // ... config lainnya
  hideMessageBubble: true,
});
```

## 🔧 Advanced Usage

### Mengakses Chatwoot SDK Secara Manual

Setelah widget dimuat, Anda bisa mengakses SDK melalui `window.chatwootSDK`:

```tsx
// Buka widget secara programmatic
if (window.chatwootSDK) {
  window.$chatwoot.toggle('open');
}

// Tutup widget
if (window.chatwootSDK) {
  window.$chatwoot.toggle('close');
}

// Set user info
if (window.chatwootSDK) {
  window.$chatwoot.setUser('user-id', {
    email: 'user@example.com',
    name: 'User Name',
  });
}
```

### Custom Trigger Button

Jika ingin membuat button custom untuk membuka chat:

```tsx
function CustomChatButton() {
  const openChat = () => {
    if (window.$chatwoot) {
      window.$chatwoot.toggle('open');
    }
  };

  return (
    <button onClick={openChat}>
      Chat dengan Kami
    </button>
  );
}
```

## 📱 Responsive Behavior

Widget Chatwoot otomatis responsive:
- **Desktop:** Muncul di pojok kanan bawah
- **Mobile:** Menyesuaikan ukuran layar
- **Tablet:** Optimal untuk touch interaction

## 🎯 Best Practices

1. **Load Once:** Hook sudah di-setup di App.tsx level, jadi widget muncul di semua halaman
2. **Cleanup:** Hook otomatis cleanup saat unmount untuk menghindari memory leaks
3. **Error Handling:** Script loading error di-handle dengan console.error
4. **Performance:** Script dimuat dengan `async` dan `defer` untuk tidak blocking

## 🔍 Troubleshooting

### Widget Tidak Muncul

1. Cek console browser untuk error
2. Pastikan `websiteToken` benar
3. Pastikan `baseUrl` accessible
4. Cek network tab untuk script loading

### Widget Muncul 2x

Pastikan `useChatwoot` hanya dipanggil sekali di App.tsx, tidak di multiple components.

### Styling Conflict

Jika ada conflict dengan CSS Anda, tambahkan custom CSS:

```css
/* Override Chatwoot styles */
.woot-widget-holder {
  z-index: 9999 !important;
}
```

## 📊 Analytics Integration

Chatwoot sudah include analytics. Anda bisa track:
- Jumlah conversations
- Response time
- Customer satisfaction
- Agent performance

Akses di Chatwoot dashboard: `https://chat.responpintar.com`

## 🔐 Security

- Token `AH84MtFe5Ux2XxicvHdu77PX` adalah public token (aman untuk client-side)
- Jangan expose private API keys di frontend
- Semua komunikasi melalui HTTPS

## 📞 Support

Untuk konfigurasi lanjutan Chatwoot, kunjungi:
- [Chatwoot Documentation](https://www.chatwoot.com/docs)
- [Chatwoot SDK Reference](https://www.chatwoot.com/docs/product/channels/live-chat/sdk/setup)

## 🎉 Features yang Tersedia

- ✅ Real-time chat
- ✅ File sharing
- ✅ Emoji support
- ✅ Typing indicators
- ✅ Read receipts
- ✅ Multi-agent support
- ✅ Canned responses
- ✅ Chat history
- ✅ Mobile responsive
- ✅ Dark mode support (follows system theme)
