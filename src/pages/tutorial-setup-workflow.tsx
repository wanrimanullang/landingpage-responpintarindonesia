import { useState, useEffect, useCallback } from 'react';
import { 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  Info, 
  Lightbulb, 
  ExternalLink,
  Settings,
  PlusCircle,
  MessageCircle,
  Play,
  Inbox,
  Link,
  Code,
  Globe,
  FileText,
  Zap
} from 'lucide-react';

/* ── Custom hook: media query ────────────────────────────── */
function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia(query).matches : false,
  );
  useEffect(() => {
    const mql = window.matchMedia(query);
    const handler = (e: MediaQueryListEvent) => setMatches(e.matches);
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, [query]);
  return matches;
}

/* ── Step data ───────────────────────────────────────────── */
interface StepData {
  id: number;
  title: string;
  shortTitle: string;
  description: string;
  subSteps?: string[];
  tips: string;
  image: string;
  icon: typeof Settings;
}

const steps: StepData[] = [
  {
    id: 1,
    title: 'Akses Menu Automation Builder',
    shortTitle: 'Automation',
    description: 'Login ke dashboard Respon Pintar di crm.responpintar.com. Pada sidebar sebelah kiri, cari bagian AUTOMATION, lalu klik menu "Automation Builder".',
    tips: 'Menu Automation Builder berada di bawah section "CONTACTS & AUDIENCE".',
    image: '/tutorial-setup-workflow/1.png',
    icon: Settings,
  },
  {
    id: 2,
    title: 'Membuat Flow Baru',
    shortTitle: 'New Flow',
    description: 'Setelah masuk ke halaman Automation Builder, Anda akan melihat daftar flow yang sudah ada. Klik tombol "+ Add New Flow" berwarna hijau di pojok kanan atas.',
    tips: 'Di tabel Anda bisa melihat flow yang sudah ada dengan informasi Platform, Nodes, Status, dan tanggal pembuatan.',
    image: '/tutorial-setup-workflow/2.png',
    icon: PlusCircle,
  },
  {
    id: 3,
    title: 'Pilih Channel WhatsApp',
    shortTitle: 'WhatsApp',
    description: 'Akan muncul popup "Choose Automation Channel". Pilih "WhatsApp" dari daftar pilihan yang tersedia untuk mengirim automated messages, catalog templates, dan menjalankan interactive chats.',
    tips: 'Channel lain yang tersedia: All Channels, Telegram Bot, Facebook, Instagram.',
    image: '/tutorial-setup-workflow/3.png',
    icon: MessageCircle,
  },
  {
    id: 4,
    title: 'Tambahkan Automation Entry',
    shortTitle: 'Entry',
    description: 'Setelah memilih channel, Anda akan masuk ke Flow Editor. Di panel kanan, lihat bagian "Flow Toolkit". Pada section START, klik dan drag komponen "Automation Entry" ke canvas editor.',
    tips: 'Flow Toolkit berisi komponen: START (Automation Entry), MESSAGING (Send Message, Send Template), INTERACTIONS (Attach Media, Send Location), dan UTILITIES (Wait Timer, Wait for Reply).',
    image: '/tutorial-setup-workflow/4.png',
    icon: Play,
  },
  {
    id: 5,
    title: 'Pilih Trigger "All Messages"',
    shortTitle: 'Trigger',
    description: 'Setelah Automation Entry ditambahkan, akan muncul popup "Activation Method". Pilih "All Messages" agar flow akan aktif untuk SEMUA pesan masuk.',
    tips: 'Pilihan Activation Method lainnya: Exact Match (cocok persis), Partial Match (mengandung kata), Starts With (dimulai dengan kata), Order Events.',
    image: '/tutorial-setup-workflow/5.png',
    icon: Inbox,
  },
  {
    id: 6,
    title: 'Tambahkan External API',
    shortTitle: 'API',
    description: 'Scroll ke bawah pada Flow Toolkit di panel kanan. Cari section INTEGRATIONS, lalu klik dan drag komponen "External API" ke canvas. Hubungkan node "All Messages" dengan node "External API" dengan menarik garis dari output ke input.',
    tips: 'Komponen Integrations lainnya: Webhook, Save Response, Google Sheets, Calendar Event.',
    image: '/tutorial-setup-workflow/6.png',
    icon: Link,
  },
  {
    id: 7,
    title: 'Konfigurasi HTTP Method POST',
    shortTitle: 'POST',
    description: 'Klik node External API yang sudah ditambahkan. Akan muncul panel konfigurasi di sebelah kanan. Pada field "HTTP Method", klik dropdown dan pilih "POST".',
    tips: 'HTTP Method yang tersedia: GET, POST (pilih ini), PUT, DELETE.',
    image: '/tutorial-setup-workflow/7.png',
    icon: Code,
  },
  {
    id: 8,
    title: 'Masukkan URL Webhook',
    shortTitle: 'Webhook',
    description: 'Pada field "API URL", masukkan URL webhook: https://workflow.responpintar.com/webhook/general-webhook. Pastikan HTTP Method sudah terisi POST.',
    tips: 'URL ini adalah endpoint standar untuk semua client baru. Jangan mengubah URL ini kecuali ada instruksi khusus.',
    image: '/tutorial-setup-workflow/8.png',
    icon: Globe,
  },
  {
    id: 9,
    title: 'Konfigurasi Body Parameter',
    shortTitle: 'Parameter',
    description: 'Ini adalah langkah PALING PENTING. Klik "+ Add" pada bagian BODY, lalu isi parameter sesuai kebutuhan client.',
    subSteps: [
      'name: {{contact_name}} - Nama kontak (otomatis)',
      'phone_number: {{senderNumber}} - Nomor pengirim (otomatis)',
      'referrer_source: Whatsapp - Diisi manual',
      'project_name: [Nama Project] - Diisi sesuai client',
      'last_message: {{message}} - Pesan terakhir (otomatis)',
      'project_id: [ID Project] - Diisi sesuai client',
    ],
    tips: 'Variable dalam {{...}} akan otomatis terisi dari data pesan masuk. Parameter lainnya harus diisi MANUAL sesuai data client.',
    image: '/tutorial-setup-workflow/9.png',
    icon: FileText,
  },
  {
    id: 10,
    title: 'Simpan dan Publish Flow',
    shortTitle: 'Publish',
    description: 'Setelah semua konfigurasi selesai, berikan nama Flow yang sesuai di bagian atas (contoh: "AI" atau nama client). Perhatikan jumlah Nodes yang ditampilkan (harus "2 Nodes"). Klik tombol "Update" atau "Publish" berwarna merah untuk menyimpan dan mengaktifkan flow.',
    tips: 'Checklist sebelum publish: Nama flow sesuai, Automation Entry terhubung ke External API, URL webhook benar, HTTP Method = POST, Body parameter lengkap.',
    image: '/tutorial-setup-workflow/10.png',
    icon: CheckCircle2,
  },
];

/* ── Page component ──────────────────────────────────────── */
export default function TutorialSetupWorkflowPage() {
  const [activeStep, setActiveStep] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  const currentStep = steps[activeStep];
  const StepIcon = currentStep.icon;

  useEffect(() => { setImageLoaded(false); }, [activeStep]);

  const goNext = useCallback(() => {
    if (activeStep < steps.length - 1) setActiveStep((s) => s + 1);
  }, [activeStep]);

  const goPrev = useCallback(() => {
    if (activeStep > 0) setActiveStep((s) => s - 1);
  }, [activeStep]);

  // Keyboard nav
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [goNext, goPrev]);

  /* ── SIDEBAR (only rendered on desktop) ── */
  const sidebar = isDesktop ? (
    <aside
      style={{
        width: 240,
        flexShrink: 0,
        position: 'sticky',
        top: 96,
        alignSelf: 'start',
      }}
    >
      <nav style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {steps.map((step, index) => {
          const isActive = index === activeStep;
          const isDone = index < activeStep;
          return (
            <button
              key={step.id}
              id={`tutorial-step-${step.id}`}
              onClick={() => setActiveStep(index)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                padding: '10px 12px',
                borderRadius: 10,
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'all 150ms ease',
                background: isActive
                  ? 'color-mix(in srgb, var(--brand-primary) 8%, transparent)'
                  : 'transparent',
                color: isActive
                  ? 'var(--brand-primary)'
                  : isDone
                    ? 'var(--foreground)'
                    : 'var(--muted-foreground, #888)',
              }}
              onMouseEnter={(e) => {
                if (!isActive) (e.currentTarget.style.background = 'var(--accent, #f5f5f5)');
              }}
              onMouseLeave={(e) => {
                if (!isActive) (e.currentTarget.style.background = 'transparent');
              }}
            >
              {/* Circle number */}
              <span
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 11,
                  fontWeight: 600,
                  flexShrink: 0,
                  background: isActive
                    ? 'var(--brand-primary)'
                    : isDone
                      ? 'color-mix(in srgb, var(--brand-primary) 12%, transparent)'
                      : 'var(--secondary, #eee)',
                  color: isActive
                    ? '#fff'
                    : isDone
                      ? 'var(--brand-primary)'
                      : 'var(--muted-foreground, #888)',
                  transition: 'all 150ms ease',
                }}
              >
                {isDone ? <CheckCircle2 style={{ width: 14, height: 14 }} /> : step.id}
              </span>
              <span style={{ fontSize: 13, fontWeight: isActive ? 600 : 500, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {step.shortTitle}
              </span>
            </button>
          );
        })}
      </nav>

      {/* Progress */}
      <div style={{ marginTop: 24, paddingTop: 16, borderTop: '1px solid var(--border)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: 'var(--muted-foreground, #888)', marginBottom: 6, fontWeight: 500 }}>
          <span>Progress</span>
          <span>{activeStep + 1}/{steps.length}</span>
        </div>
        <div style={{ height: 4, background: 'var(--secondary, #eee)', borderRadius: 999, overflow: 'hidden' }}>
          <div style={{
            height: '100%',
            borderRadius: 999,
            background: 'var(--brand-primary)',
            transition: 'width 500ms cubic-bezier(.4,0,.2,1)',
            width: `${((activeStep + 1) / steps.length) * 100}%`,
          }} />
        </div>
      </div>
    </aside>
  ) : null;

  /* ── MOBILE STEP INDICATOR (only on mobile/tablet) ── */
  const mobileIndicator = !isDesktop ? (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        {steps.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveStep(i)}
            style={{
              border: 'none',
              cursor: 'pointer',
              borderRadius: 999,
              transition: 'all 300ms ease',
              background: i === activeStep
                ? 'var(--brand-primary)'
                : i < activeStep
                  ? 'color-mix(in srgb, var(--brand-primary) 35%, transparent)'
                  : 'var(--border)',
              width: i === activeStep ? 28 : 8,
              height: 8,
              padding: 0,
            }}
            aria-label={`Step ${i + 1}`}
          />
        ))}
      </div>
      <span style={{ fontSize: 12, fontWeight: 500, color: 'var(--muted-foreground, #888)', fontVariantNumeric: 'tabular-nums' }}>
        {activeStep + 1} / {steps.length}
      </span>
    </div>
  ) : null;

  return (
    <main className="pt-20 pb-16">

      {/* ═══ HERO HEADER ═══ */}
      <header className="px-4 sm:px-6 lg:px-8" style={{ paddingTop: 32, paddingBottom: isDesktop ? 56 : 40 }}>
        <div style={{ maxWidth: 640, margin: '0 auto', textAlign: 'center' }}>
          {/* Badge */}
          <div className="inline-flex" style={{
            alignItems: 'center', gap: 6,
            padding: '6px 14px', borderRadius: 999,
            background: 'color-mix(in srgb, var(--brand-primary) 6%, transparent)',
            border: '1px solid color-mix(in srgb, var(--brand-primary) 12%, transparent)',
            marginBottom: 24,
          }}>
            <Zap style={{ width: 14, height: 14, color: 'var(--brand-primary)' }} />
            <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--brand-primary)', letterSpacing: '0.02em' }}>Tutorial Automation</span>
          </div>

          <h1 className="text-3xl sm:text-4xl" style={{ fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.15, marginBottom: 14 }}>
            Setup{' '}
            <span className="bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] bg-clip-text text-transparent">
              Workflow
            </span>{' '}
            Automation
          </h1>

          <p style={{ fontSize: isDesktop ? 15 : 14, color: 'var(--muted-foreground, #888)', lineHeight: 1.65, maxWidth: 480, margin: '0 auto' }}>
            10 langkah mudah menggunakan <strong style={{ color: 'var(--foreground)', fontWeight: 500 }}>Automation Builder</strong> — hubungkan WhatsApp ke sistem webhook.
          </p>

          {/* Stats */}
          <div className="flex" style={{ justifyContent: 'center', gap: isDesktop ? 16 : 10, marginTop: 28, flexWrap: 'wrap' }}>
            {[
              { value: '10 Langkah', emoji: '✦' },
              { value: '10-15 Menit', emoji: '⚡' },
              { value: 'No Coding', emoji: '🛠' },
            ].map((s, i) => (
              <div
                key={i}
                className="flex"
                style={{
                  alignItems: 'center', gap: 6,
                  padding: '8px 16px',
                  background: 'var(--card)', border: '1px solid var(--border)',
                  borderRadius: 8, fontSize: 13, fontWeight: 500,
                  color: 'var(--foreground)',
                }}
              >
                <span style={{ fontSize: 12 }}>{s.emoji}</span>
                {s.value}
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* ═══ MAIN TUTORIAL ═══ */}
      <div className="px-4 sm:px-6 lg:px-8">
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: isDesktop ? 48 : 0, alignItems: 'flex-start' }}>

            {/* Sidebar */}
            {sidebar}

            {/* Content column */}
            <div style={{ flex: 1, minWidth: 0 }}>
              {/* Mobile dots */}
              {mobileIndicator}

              {/* ── Step Content Card ── */}
              <div
                style={{
                  borderRadius: 16, border: '1px solid var(--border)',
                  background: 'var(--card)', padding: isDesktop ? 32 : 20,
                  marginBottom: 20,
                }}
              >
                {/* Title row */}
                <div className="flex" style={{ alignItems: 'flex-start', gap: 14, marginBottom: 16 }}>
                  <div style={{
                    width: isDesktop ? 44 : 40, height: isDesktop ? 44 : 40,
                    borderRadius: 12, flexShrink: 0,
                    background: 'color-mix(in srgb, var(--brand-primary) 10%, transparent)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <StepIcon style={{ width: 20, height: 20, color: 'var(--brand-primary)' }} />
                  </div>
                  <div style={{ minWidth: 0, flex: 1 }}>
                    <p style={{ fontSize: 11, color: 'var(--brand-primary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 2 }}>
                      Langkah {currentStep.id}
                    </p>
                    <h2 style={{ fontSize: isDesktop ? 22 : 19, fontWeight: 700, color: 'var(--foreground)', letterSpacing: '-0.01em', lineHeight: 1.25 }}>
                      {currentStep.title}
                    </h2>
                  </div>
                </div>

                {/* Description */}
                <p style={{ fontSize: isDesktop ? 15 : 14, color: 'var(--muted-foreground, #888)', lineHeight: 1.7, marginBottom: 16 }}>
                  {currentStep.description}
                </p>

                {/* Sub-steps */}
                {currentStep.subSteps && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 16 }}>
                    {currentStep.subSteps.map((sub, i) => (
                      <div key={i} className="flex" style={{ alignItems: 'flex-start', gap: 10 }}>
                        <span style={{
                          width: 20, height: 20, borderRadius: '50%', flexShrink: 0,
                          background: 'color-mix(in srgb, var(--brand-primary) 10%, transparent)',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          color: 'var(--brand-primary)', fontSize: 10, fontWeight: 700,
                          marginTop: 2,
                        }}>
                          {i + 1}
                        </span>
                        <p style={{ fontSize: 13, color: 'var(--foreground)', lineHeight: 1.6, opacity: 0.85 }}>{sub}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tips */}
                {currentStep.tips && (
                  <div className="flex" style={{
                    gap: 10, padding: 14, borderRadius: 12,
                    background: 'color-mix(in srgb, #F59E0B 5%, transparent)',
                    border: '1px solid color-mix(in srgb, #F59E0B 12%, transparent)',
                  }}>
                    <Lightbulb style={{ width: 16, height: 16, color: '#D97706', flexShrink: 0, marginTop: 2 }} />
                    <p style={{ fontSize: 13, color: 'var(--foreground)', lineHeight: 1.6, opacity: 0.8 }}>
                      {currentStep.tips}
                    </p>
                  </div>
                )}
              </div>

              {/* ── Screenshot Card ── */}
              <div
                style={{
                  borderRadius: 16, border: '1px solid var(--border)',
                  background: 'var(--card)', overflow: 'hidden',
                  marginBottom: 20,
                }}
              >
                {/* Browser chrome */}
                <div className="flex" style={{
                  alignItems: 'center', gap: 12,
                  padding: '10px 16px',
                  borderBottom: '1px solid var(--border)',
                  background: 'color-mix(in srgb, var(--secondary, #f5f5f5) 40%, transparent)',
                }}>
                  <div className="flex" style={{ gap: 6 }}>
                    <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#FF5F57' }} />
                    <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#FEBC2E' }} />
                    <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#28C840' }} />
                  </div>
                  <div style={{ flex: 1, maxWidth: 280, margin: '0 auto' }}>
                    <div style={{
                      background: 'color-mix(in srgb, var(--background) 80%, transparent)',
                      border: '1px solid color-mix(in srgb, var(--border) 50%, transparent)',
                      borderRadius: 6, padding: '4px 12px', textAlign: 'center',
                    }}>
                      <span style={{ fontSize: 10, color: 'var(--muted-foreground, #888)', fontWeight: 500 }}>
                        crm.responpintar.com
                      </span>
                    </div>
                  </div>
                  <div style={{ width: 52 }} />
                </div>

                {/* Image */}
                <div className="relative" style={{ background: 'color-mix(in srgb, var(--secondary, #f5f5f5) 20%, transparent)', overflow: 'hidden' }}>
                  <img
                    src={currentStep.image}
                    alt={`Langkah ${currentStep.id}: ${currentStep.title}`}
                    style={{
                      width: '100%', height: 'auto',
                      display: 'block',
                      transition: 'opacity 300ms ease',
                      opacity: imageLoaded ? 1 : 0,
                    }}
                    onLoad={() => setImageLoaded(true)}
                    draggable={false}
                  />
                  {!imageLoaded && (
                    <div className="absolute inset-0 flex" style={{ alignItems: 'center', justifyContent: 'center' }}>
                      <div className="animate-spin" style={{ width: 32, height: 32, border: '2px solid var(--border)', borderTopColor: 'var(--brand-primary)', borderRadius: '50%' }} />
                    </div>
                  )}
                </div>
              </div>

              {/* ── Navigation ── */}
              <div className="flex" style={{ alignItems: 'center', justifyContent: 'space-between', paddingTop: 4 }}>
                <button
                  id="tutorial-prev-btn"
                  onClick={goPrev}
                  disabled={activeStep === 0}
                  className="flex"
                  style={{
                    alignItems: 'center', gap: 6,
                    padding: '8px 16px', borderRadius: 10,
                    border: '1px solid var(--border)',
                    background: 'transparent',
                    fontSize: 13, fontWeight: 500,
                    color: 'var(--foreground)',
                    cursor: activeStep === 0 ? 'not-allowed' : 'pointer',
                    opacity: activeStep === 0 ? 0.3 : 1,
                    transition: 'all 150ms ease',
                  }}
                >
                  <ArrowLeft style={{ width: 14, height: 14 }} />
                  {isDesktop && <span>Sebelumnya</span>}
                </button>

                {/* Desktop dots */}
                {isDesktop && (
                  <div className="flex" style={{ alignItems: 'center', gap: 4 }}>
                    {steps.map((_, i) => (
                      <button
                        key={i}
                        id={`tutorial-dot-${i + 1}`}
                        onClick={() => setActiveStep(i)}
                        style={{
                          border: 'none', padding: 0, cursor: 'pointer',
                          borderRadius: 999,
                          transition: 'all 300ms ease',
                          background: i === activeStep ? 'var(--brand-primary)' : 'var(--border)',
                          width: i === activeStep ? 24 : 6,
                          height: 6,
                        }}
                        aria-label={`Step ${i + 1}`}
                      />
                    ))}
                  </div>
                )}

                {activeStep < steps.length - 1 ? (
                  <button
                    id="tutorial-next-btn"
                    onClick={goNext}
                    className="flex"
                    style={{
                      alignItems: 'center', gap: 6,
                      padding: '8px 16px', borderRadius: 10,
                      border: 'none',
                      background: 'var(--brand-primary)',
                      color: '#fff',
                      fontSize: 13, fontWeight: 500,
                      cursor: 'pointer',
                      transition: 'all 150ms ease',
                    }}
                  >
                    <span>{isDesktop ? 'Selanjutnya' : 'Lanjut'}</span>
                    <ArrowRight style={{ width: 14, height: 14 }} />
                  </button>
                ) : (
                  <a
                    id="tutorial-finish-btn"
                    href="https://crm.responpintar.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex"
                    style={{
                      alignItems: 'center', gap: 6,
                      padding: '8px 16px', borderRadius: 10,
                      border: 'none',
                      background: 'var(--brand-primary)',
                      color: '#fff',
                      fontSize: 13, fontWeight: 500,
                      textDecoration: 'none',
                      cursor: 'pointer',
                    }}
                  >
                    Dashboard <ExternalLink style={{ width: 14, height: 14 }} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══ TIPS SECTION ═══ */}
      <section className="px-4 sm:px-6 lg:px-8" style={{ marginTop: isDesktop ? 80 : 56 }}>
        <div style={{ maxWidth: 880, margin: '0 auto' }}>
          <div className="flex" style={{ alignItems: 'center', gap: 10, marginBottom: 24 }}>
            <Info style={{ width: 16, height: 16, color: 'var(--brand-primary)' }} />
            <h2 style={{ fontSize: isDesktop ? 20 : 18, fontWeight: 700, letterSpacing: '-0.01em' }}>Tips Penting</h2>
          </div>
          <div className="grid sm:grid-cols-3" style={{ gap: 16 }}>
            {[
              {
                icon: Settings,
                title: 'Satu Flow Per Client',
                desc: 'Setiap client memerlukan flow tersendiri dengan project_id dan parameter yang berbeda.',
              },
              {
                icon: Globe,
                title: 'URL Webhook Standar',
                desc: 'URL webhook sama untuk semua client: workflow.responpintar.com/webhook/general-webhook',
              },
              {
                icon: FileText,
                title: 'Parameter Wajib',
                desc: 'Pastikan parameter wajib (name, phone_number, project_id, dll) terisi dengan benar.',
              },
            ].map((tip) => {
              const TipIcon = tip.icon;
              return (
                <div
                  key={tip.title}
                  style={{
                    padding: 20, borderRadius: 14,
                    border: '1px solid var(--border)',
                    background: 'var(--card)',
                    transition: 'border-color 200ms ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'color-mix(in srgb, var(--brand-primary) 25%, transparent)')}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
                >
                  <div style={{
                    width: 36, height: 36, borderRadius: 10,
                    background: 'color-mix(in srgb, var(--brand-primary) 8%, transparent)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: 12,
                  }}>
                    <TipIcon style={{ width: 16, height: 16, color: 'var(--brand-primary)' }} />
                  </div>
                  <p style={{ fontSize: 14, fontWeight: 600, color: 'var(--foreground)', marginBottom: 4 }}>{tip.title}</p>
                  <p style={{ fontSize: 12, color: 'var(--muted-foreground, #888)', lineHeight: 1.6 }}>{tip.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="px-4 sm:px-6 lg:px-8" style={{ marginTop: isDesktop ? 48 : 40 }}>
        <div style={{ maxWidth: 880, margin: '0 auto' }}>
          <div
            className="bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)]"
            style={{
              borderRadius: 16,
              padding: isDesktop ? '48px 40px' : '36px 24px',
              textAlign: 'center', color: '#fff',
            }}
          >
            <Settings style={{ width: 40, height: 40, margin: '0 auto 16px', opacity: 0.8 }} />
            <h2 style={{ fontSize: isDesktop ? 24 : 20, fontWeight: 700, marginBottom: 8, letterSpacing: '-0.01em' }}>
              Butuh Bantuan?
            </h2>
            <p style={{ fontSize: 14, opacity: 0.8, maxWidth: 400, margin: '0 auto 24px', lineHeight: 1.65 }}>
              Tim support ResponPintar siap membantu Anda 24/7 melalui WhatsApp atau live chat.
            </p>
            <div className="flex" style={{ justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
              <a
                href="https://wa.me/6282189885080?text=Halo,%20saya%20butuh%20bantuan%20untuk%20setup%20workflow%20automation%20di%20ResponPintar."
                target="_blank"
                rel="noopener noreferrer"
                id="cta-whatsapp-support"
                style={{
                  padding: '10px 24px',
                  background: '#fff', color: 'var(--brand-primary)',
                  borderRadius: 10, fontWeight: 600, fontSize: 13,
                  textDecoration: 'none',
                  transition: 'transform 150ms ease',
                }}
              >
                Chat via WhatsApp
              </a>
              <a
                href="/demo"
                id="cta-lihat-demo"
                style={{
                  padding: '10px 24px',
                  background: 'rgba(255,255,255,0.12)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  color: '#fff',
                  borderRadius: 10, fontWeight: 600, fontSize: 13,
                  textDecoration: 'none',
                }}
              >
                Lihat Demo
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
