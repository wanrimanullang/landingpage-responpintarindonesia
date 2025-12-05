# Scroll Animation System

Sistem animasi scroll yang dibuat untuk ResponPintar Landing Page.

## Komponen

### 1. `useScrollAnimation` Hook
Custom React hook yang menggunakan Intersection Observer API untuk mendeteksi kapan element masuk ke viewport.

**Lokasi:** `src/hooks/useScrollAnimation.ts`

**Options:**
- `threshold` (default: 0.1) - Persentase element yang harus terlihat sebelum trigger
- `rootMargin` (default: '0px') - Margin tambahan untuk area deteksi
- `triggerOnce` (default: true) - Animasi hanya trigger sekali atau setiap kali scroll

**Contoh Penggunaan:**
```tsx
const { ref, isVisible } = useScrollAnimation({
  threshold: 0.2,
  triggerOnce: true
});
```

### 2. `AnimatedSection` Component
Wrapper component yang menambahkan scroll animation ke children.

**Lokasi:** `src/components/animated-section.tsx`

**Props:**
- `children` - React node yang akan di-animate
- `className` - CSS classes tambahan
- `delay` - Delay animasi dalam milliseconds (untuk staggered effect)
- `animation` - Tipe animasi:
  - `fade-up` (default) - Fade in dari bawah
  - `fade-in` - Fade in tanpa movement
  - `fade-left` - Fade in dari kiri
  - `fade-right` - Fade in dari kanan
  - `scale` - Fade in dengan scale effect

**Contoh Penggunaan:**
```tsx
<AnimatedSection animation="fade-up" delay={100}>
  <YourComponent />
</AnimatedSection>
```

## Implementasi di Home Page

File `src/pages/home.tsx` sudah diupdate dengan scroll animations:

```tsx
<AnimatedSection animation="fade-up" delay={100}>
  <FeaturesSection />
</AnimatedSection>
```

## Cara Menambahkan ke Halaman Lain

1. Import `AnimatedSection`:
```tsx
import { AnimatedSection } from '../components/animated-section';
```

2. Wrap section yang ingin di-animate:
```tsx
<AnimatedSection animation="fade-up" delay={100}>
  <YourSection />
</AnimatedSection>
```

## Tips Penggunaan

### Staggered Animations
Untuk membuat animasi berurutan, gunakan delay yang berbeda:
```tsx
<AnimatedSection animation="fade-up" delay={0}>
  <Section1 />
</AnimatedSection>

<AnimatedSection animation="fade-up" delay={100}>
  <Section2 />
</AnimatedSection>

<AnimatedSection animation="fade-up" delay={200}>
  <Section3 />
</AnimatedSection>
```

### Variasi Animasi
Gunakan tipe animasi berbeda untuk variety:
```tsx
<AnimatedSection animation="fade-left">
  <LeftContent />
</AnimatedSection>

<AnimatedSection animation="fade-right">
  <RightContent />
</AnimatedSection>
```

### Performance
- `triggerOnce: true` (default) lebih baik untuk performance
- Gunakan `threshold: 0.1` untuk trigger lebih awal
- Hindari terlalu banyak animated elements di satu page

## Browser Support

Intersection Observer API didukung oleh semua browser modern:
- Chrome 51+
- Firefox 55+
- Safari 12.1+
- Edge 15+

## Customization

Untuk mengubah durasi atau easing animasi, edit di `animated-section.tsx`:

```tsx
const baseClasses = 'transition-all duration-1000 ease-out';
```

Ubah `duration-1000` ke nilai lain (dalam ms):
- `duration-500` - Cepat
- `duration-700` - Medium
- `duration-1000` - Smooth (current)
- `duration-1500` - Slow
