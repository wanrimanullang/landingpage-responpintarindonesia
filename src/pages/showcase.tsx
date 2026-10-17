import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BackgroundScene from '../components/showcase/BackgroundScene';
import MoatPanel from '../components/showcase/MoatPanel';
import SignalBadge from '../components/showcase/SignalBadge';
import ScrollReveal from '../components/showcase/ScrollReveal';
import ChromeRule from '../components/showcase/ChromeRule';
import { LiveConsoleSimulator } from '../components/showcase/LiveConsoleSimulator';
import {
  Zap,
  Terminal,
  Activity,
  ArrowRight,
  ExternalLink,
  ChevronDown,
  Layers,
  Cpu,
  ShieldCheck,
  Check,
  Copy,
} from 'lucide-react';
import { useChatbotDemoModal } from '../context/chatbot-demo-context';

interface CaseStudy {
  id: string;
  badge: string;
  badgeVariant: 'positive' | 'neutral' | 'pending';
  category: 'whatsapp' | 'rag' | 'omni';
  client: string;
  title: string;
  role: string;
  timeframe: string;
  summary: string;
  keyMetric: {
    label: string;
    before: string;
    after: string;
    gain: string;
  };
  tags: string[];
  points: number[];
  details: {
    problem: string;
    solution: string;
    stack: string[];
    benchmarkResult: string;
  };
}

const FEATURED_ENGAGEMENT: CaseStudy = {
  id: 'RP-ENG-001',
  badge: 'NAMED BENCHMARK',
  badgeVariant: 'positive',
  category: 'whatsapp',
  client: 'Nusantara Logistics & Fintech Fleet',
  title: 'Sub-Second WhatsApp Dispute & Transaction Engine',
  role: 'Autonomous AI Orchestration Core',
  timeframe: '2024 — LIVE IN PRODUCTION',
  summary:
    'Multi-tenant deterministic routing pipeline on Meta WhatsApp Cloud API handling 24,000+ daily customer queries with zero manual intervention for 91.8% of requests. Latensi p95 terjaga konsisten di bawah 380 milidetik.',
  keyMetric: {
    label: 'MEDIAN RESPONSE TIME',
    before: '18m 40s',
    after: '380ms',
    gain: 'Δ -99.6%',
  },
  tags: ['META GRAPH API v21.0', 'REDIS 7.2 STREAM', 'FASTAPI', 'LLAMA 3.3', 'PGVECTOR'],
  points: [92, 85, 68, 45, 30, 22, 17, 12],
  details: {
    problem:
      'Lonjakan antrean customer service hingga 18 menit saat jam sibuk promo ongkir dan rekonsiliasi pembayaran, memicu drop rate pesan sebesar 14.8%.',
    solution:
      'Membangun gateway ingest asynchronous berbasis Redis Streams dengan semantik intent classifier berkecepatan 45ms. Pertanyaan transaksi dijawab otomatis melalui direct API hook; kasus komplain eskalasi dialihkan instan tanpa kehilangan histori obrolan.',
    stack: ['FastAPI', 'Redis Cluster', 'pgvector', 'Meta Graph API', 'Claude 3.5 Sonnet'],
    benchmarkResult:
      '91.8% penyelesaian tiket otomatis tanpa agen manusia, 380ms median response time, uptime 99.99% selama 12 bulan berturut-turut.',
  },
};

const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'RP-ENG-002',
    badge: 'ZERO HALLUCINATION AUDITED',
    badgeVariant: 'positive',
    category: 'rag',
    client: 'Surya Kencana Retail Group',
    title: 'Hybrid BM25 + Dense Semantic RAG untuk 180,000 Katalog SKU',
    role: 'Catalog Retrieval & Vector Pipeline',
    timeframe: '2024 — VERIFIED',
    summary:
      'Menggabungkan dense vector embeddings dengan exact lexical BM25 matching untuk meniadakan halusinasi rekomendasi SKU pada katalog peralatan teknis ribuan varian.',
    keyMetric: {
      label: 'SKU RETRIEVAL ACCURACY',
      before: '68.5%',
      after: '99.8%',
      gain: 'Δ +31.3%',
    },
    tags: ['BM25 FULLTEXT', 'PGVECTOR', 'COHERE RERANK v3', 'POSTGRESQL 16'],
    points: [88, 76, 58, 41, 28, 19, 14, 9],
    details: {
      problem:
        'Standard semantic search sering salah merekomendasikan sparepart dengan nomor seri mirip (contoh: seri A-100 vs A-100X) yang berujung pada retur pesanan.',
      solution:
        'Pipeline dua tahap: filter lexical ketat untuk kode serial + reranking semantik untuk intent natural bahasa Indonesia sehari-hari.',
      stack: ['pgvector', 'PostgreSQL 16', 'Cohere Rerank', 'Redis Cache', 'OpenAI Embedding v3'],
      benchmarkResult:
        'Akurasi katalog 99.8% terverifikasi pada 50,000 uji stres uji acak tanpa 1 pun halusinasi produk fiktif.',
    },
  },
  {
    id: 'RP-ENG-003',
    badge: 'ENTERPRISE PRODUCTION',
    badgeVariant: 'positive',
    category: 'omni',
    client: 'Artha Mandiri Omnichannel Desk',
    title: 'Unified Omnichannel State Machine with Contextual Escalation',
    role: 'Synchronous State Bus Engine',
    timeframe: '2024 — LIVE',
    summary:
      'Sinkronisasi real-time state percakapan lintas WhatsApp, Telegram, Instagram DM, dan Web Chat tanpa jeda kehilangan konteks saat eskalasi ke agen manusia.',
    keyMetric: {
      label: 'CONTEXT HANDOFF LATENCY',
      before: '45.0s',
      after: '82ms',
      gain: 'Δ -99.8%',
    },
    tags: ['WEBSOCKETS', 'KAFKA / REDIS PUBSUB', 'REACT DESK', 'ISO 27001 AUDIT'],
    points: [90, 78, 55, 36, 22, 15, 10, 7],
    details: {
      problem:
        'Pelanggan mengeluh harus mengulang penjelasan keluhan saat chat berpindah dari bot ke admin manusia di channel berbeda.',
      solution:
        'Mesin status terpusat dengan ringkasan instan otomatis bertenaga LLM yang disuntikkan ke panel admin dalam tempo 82 milidetik.',
      stack: ['WebSockets', 'Redis PubSub', 'React Agent Desk', 'PostgreSQL Audit Log'],
      benchmarkResult:
        'First-Contact Resolution naik dari 52% ke 89.4%, CSAT score meningkat ke 4.9/5.0.',
    },
  },
];

export default function ShowcasePage() {
  const [activeTab, setActiveTab] = useState<'all' | 'whatsapp' | 'rag' | 'omni'>('all');
  const [showConsole, setShowConsole] = useState(false);
  const [expandedCase, setExpandedCase] = useState<string | null>(FEATURED_ENGAGEMENT.id);
  const { openModal } = useChatbotDemoModal();

  const toggleExpand = (id: string) => {
    setExpandedCase((prev) => (prev === id ? null : id));
  };

  const filteredCases =
    activeTab === 'all'
      ? CASE_STUDIES
      : CASE_STUDIES.filter((c) => c.category === activeTab);

  return (
    <div className="jamie-root min-h-screen bg-[#0B0C0E] text-[#E9EBEF] relative overflow-hidden font-sans selection:bg-[#8FE3B0]/20 selection:text-[#8FE3B0]">
      {/* Background Interactive Canvas Particle Field & Fixed Ambient Grid */}
      <BackgroundScene />

      {/* Main Content Layer */}
      <div className="relative z-10 w-full pt-28 pb-24">
        {/* Container */}
        <div className="mx-auto w-full max-w-[1400px] px-6 md:px-12">
          {/* Breadcrumb Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-10 text-xs font-mono">
            <div className="flex items-center gap-2">
              <Link to="/" className="text-[#636B76] hover:text-[#AEB4BD] transition-colors">
                RESPON PINTAR
              </Link>
              <span className="text-[#636B76]">/</span>
              <span className="text-[#8FE3B0]">SHOWCASE</span>
              <span className="text-[#636B76]">//</span>
              <span className="text-[#AEB4BD]">THE REGISTRY</span>
            </div>

            <div className="flex items-center gap-3">
              <SignalBadge label="LIVE TELEMETRY v2.4" variant="positive" />
              <span className="border border-[rgba(244,245,247,0.1)] px-2 py-0.5 font-mono text-[11px] text-[#AEB4BD] hidden sm:inline-block">
                P95 &lt; 380MS
              </span>
            </div>
          </div>

          {/* Hero Section */}
          <section className="mb-20">
            <ScrollReveal>
              <p className="label-mono mb-4 text-[#8A9099]">
                the registry · verified engineering benchmarks
              </p>
            </ScrollReveal>

            <ScrollReveal delay={80}>
              <h1 className="text-display font-bold tracking-tight text-[#E9EBEF] max-w-4xl mb-6">
                Pada <span className="chrome-text">catatannya</span>.{' '}
                <span className="block text-[#E9EBEF]">Teruji oleh jutaan pesan.</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={160}>
              <p className="max-w-[56ch] text-[17px] text-[#AEB4BD] leading-relaxed mb-8 font-normal">
                Dokumentasi arsitektur orkestrasi AI deterministik Respon Pintar. Latensi
                sub-detik, sistem retrieval hibrida bebas halusinasi, dan pipeline omnichannel
                tahan banting untuk WhatsApp Cloud API.
              </p>
            </ScrollReveal>

            {/* Readout stats row */}
            <ScrollReveal delay={240}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-[rgba(244,245,247,0.08)]">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#636B76] mb-1">
                    MEDIAN LATENCY
                  </p>
                  <p className="text-2xl font-bold font-mono text-[#8FE3B0] tracking-tight">
                    380ms
                  </p>
                  <p className="text-[11px] text-[#AEB4BD] mt-0.5">down from 18m manual</p>
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#636B76] mb-1">
                    AUTONOMOUS ROUTING
                  </p>
                  <p className="text-2xl font-bold font-mono text-[#E9EBEF] tracking-tight">
                    91.8%
                  </p>
                  <p className="text-[11px] text-[#AEB4BD] mt-0.5">zero-human handoff</p>
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#636B76] mb-1">
                    CATALOG ACCURACY
                  </p>
                  <p className="text-2xl font-bold font-mono text-[#E9EBEF] tracking-tight">
                    99.8%
                  </p>
                  <p className="text-[11px] text-[#AEB4BD] mt-0.5">hybrid BM25 + dense</p>
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#636B76] mb-1">
                    SYSTEM AVAILABILITY
                  </p>
                  <p className="text-2xl font-bold font-mono text-[#8FE3B0] tracking-tight">
                    99.98%
                  </p>
                  <p className="text-[11px] text-[#AEB4BD] mt-0.5">ISO 27001 aligned</p>
                </div>
              </div>
            </ScrollReveal>

            <div className="mt-8 flex flex-wrap gap-4 text-xs font-mono">
              <a
                href="#featured"
                className="inline-flex items-center gap-2 border border-[#8FE3B0] bg-[#8FE3B0]/10 px-5 py-2.5 text-[#8FE3B0] font-semibold uppercase tracking-wider hover:bg-[#8FE3B0]/20 transition-all shadow-[0_0_12px_rgba(143,227,176,0.15)]"
              >
                <span>Lihat Studi Kasus Unggulan</span>
                <span>↓</span>
              </a>
              <button
                onClick={() => setShowConsole(!showConsole)}
                className="inline-flex items-center gap-2 border border-[#8A9099] px-5 py-2.5 text-[#E9EBEF] uppercase tracking-wider hover:border-[#C8CDD5] hover:bg-white/[0.04] transition-all"
              >
                <Terminal className="w-3.5 h-3.5 text-[#8FE3B0]" />
                <span>{showConsole ? 'Tutup Konsol Simulator' : 'Buka Konsol Simulator'}</span>
              </button>
            </div>
          </section>

          {/* Interactive Console Simulator Dropdown */}
          {showConsole && (
            <section className="mb-20">
              <div className="mb-4 flex items-center justify-between font-mono text-xs text-[#636B76]">
                <p className="uppercase tracking-[0.14em]">
                  // INTERACTIVE INFERENCE RUNTIME — LIVE TESTING
                </p>
                <span className="text-[#8FE3B0]">DETERMINISTIC ROUTER READY</span>
              </div>
              <MoatPanel className="p-4 sm:p-6">
                <LiveConsoleSimulator />
              </MoatPanel>
            </section>
          )}

          <ChromeRule className="mb-20" />

          {/* Section: Featured Client / Named Engagement (MoatPanel 5fr/7fr grid) */}
          <section id="featured" className="mb-24 scroll-mt-24">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
              <p className="label-mono text-[#8A9099]">
                01 · FEATURED PRODUCTION ENGAGEMENT
              </p>
              <SignalBadge label={FEATURED_ENGAGEMENT.badge} variant="positive" />
            </div>

            <ScrollReveal>
              <MoatPanel className="p-6 md:p-10">
                <div className="grid gap-10 lg:grid-cols-12 items-start">
                  {/* Left column (5fr): Client Meta, Title, Readout */}
                  <div className="lg:col-span-5">
                    <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#636B76] mb-2">
                      {FEATURED_ENGAGEMENT.id} · {FEATURED_ENGAGEMENT.timeframe}
                    </p>
                    <h2 className="text-editorial font-bold text-[#E9EBEF] mb-4">
                      {FEATURED_ENGAGEMENT.title}
                    </h2>
                    <p className="text-sm font-mono text-[#8A9099] mb-6">
                      Klien: {FEATURED_ENGAGEMENT.client}
                    </p>

                    {/* Metric comparison block */}
                    <div className="border border-[rgba(244,245,247,0.08)] bg-[#0B0C0E]/60 p-4 mb-6">
                      <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#636B76] mb-2">
                        {FEATURED_ENGAGEMENT.keyMetric.label}
                      </p>
                      <div className="flex items-baseline gap-3">
                        <span className="text-2xl sm:text-3xl font-mono font-bold text-[#8FE3B0]">
                          {FEATURED_ENGAGEMENT.keyMetric.after}
                        </span>
                        <span className="text-xs font-mono text-[#636B76] line-through">
                          {FEATURED_ENGAGEMENT.keyMetric.before}
                        </span>
                        <span className="ml-auto text-xs font-mono font-semibold text-[#8FE3B0] border border-[#8FE3B0]/30 px-2 py-0.5 bg-[#8FE3B0]/10">
                          {FEATURED_ENGAGEMENT.keyMetric.gain}
                        </span>
                      </div>
                    </div>

                    {/* SVG Sparkline Graph */}
                    <div className="border border-[rgba(244,245,247,0.08)] bg-[#0B0C0E]/40 p-4">
                      <div className="flex items-center justify-between font-mono text-[10px] text-[#636B76] mb-3">
                        <span>LATENCY DROP OVER ITERATIONS</span>
                        <span className="text-[#8FE3B0]">OPTIMIZED P95</span>
                      </div>
                      <svg
                        className="w-full h-16 overflow-visible"
                        viewBox="0 0 320 60"
                        preserveAspectRatio="none"
                      >
                        <polyline
                          fill="none"
                          stroke="rgba(143,227,176,0.2)"
                          strokeWidth="3"
                          points="0,55 45,50 90,40 135,28 180,18 225,12 270,9 315,6"
                        />
                        <polyline
                          fill="none"
                          stroke="#8FE3B0"
                          strokeWidth="1.5"
                          points="0,55 45,50 90,40 135,28 180,18 225,12 270,9 315,6"
                        />
                        {[
                          [0, 55],
                          [45, 50],
                          [90, 40],
                          [135, 28],
                          [180, 18],
                          [225, 12],
                          [270, 9],
                          [315, 6],
                        ].map(([x, y], i) => (
                          <circle
                            key={i}
                            cx={x}
                            cy={y}
                            r="2.5"
                            className="fill-[#0B0C0E] stroke-[#8FE3B0]"
                            strokeWidth="1"
                          />
                        ))}
                      </svg>
                    </div>
                  </div>

                  {/* Right column (7fr): Narrative & Architecture breakdown */}
                  <div className="lg:col-span-7 flex flex-col justify-between h-full">
                    <div>
                      <p className="text-[16px] text-[#AEB4BD] leading-relaxed mb-6 font-normal">
                        {FEATURED_ENGAGEMENT.summary}
                      </p>

                      <div className="space-y-4 mb-6">
                        <div className="border-l-2 border-[#8A9099] pl-4">
                          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#636B76] mb-1">
                            TANTANGAN AWAL
                          </p>
                          <p className="text-sm text-[#AEB4BD] leading-relaxed">
                            {FEATURED_ENGAGEMENT.details.problem}
                          </p>
                        </div>

                        <div className="border-l-2 border-[#8FE3B0] pl-4">
                          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#8FE3B0] mb-1">
                            ARSITEKTUR SOLUSI
                          </p>
                          <p className="text-sm text-[#AEB4BD] leading-relaxed">
                            {FEATURED_ENGAGEMENT.details.solution}
                          </p>
                        </div>
                      </div>

                      <ChromeRule className="my-6" />

                      {/* Mono Tech Stack Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {FEATURED_ENGAGEMENT.tags.map((tag) => (
                          <span
                            key={tag}
                            className="font-mono text-[10px] tracking-wider uppercase border border-[rgba(244,245,247,0.12)] px-2.5 py-1 text-[#8A9099] bg-white/[0.02]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Bottom CTA on card */}
                    <div className="pt-4 flex items-center justify-between border-t border-[rgba(244,245,247,0.08)]">
                      <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#636B76]">
                        VERIFIED SLA: 99.99% PRODUCTION
                      </span>
                      <button
                        onClick={openModal}
                        className="font-mono text-[11px] uppercase tracking-wider text-[#8FE3B0] hover:underline flex items-center gap-1"
                      >
                        <span>Uji Konsol</span>
                        <span>→</span>
                      </button>
                    </div>
                  </div>
                </div>
              </MoatPanel>
            </ScrollReveal>
          </section>

          <ChromeRule className="mb-20" />

          {/* Section: Secondary Case Files Grid */}
          <section className="mb-24">
            <div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-4 border-b border-[rgba(244,245,247,0.08)]">
              <div>
                <p className="label-mono mb-2 text-[#8A9099]">
                  02 · CATALOG & OMNICHANNEL SUITE
                </p>
                <h2 className="text-editorial font-bold text-[#E9EBEF]">
                  Studi Kasus & Dokumen Teknis Lainnya
                </h2>
              </div>

              {/* Filter Tabs */}
              <div className="flex items-center gap-2 font-mono text-xs">
                {[
                  { id: 'all', label: 'SEMUA' },
                  { id: 'whatsapp', label: 'WHATSAPP' },
                  { id: 'rag', label: 'HYBRID RAG' },
                  { id: 'omni', label: 'OMNICHANNEL' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`px-3 py-1.5 border transition-all ${
                      activeTab === tab.id
                        ? 'border-[#8FE3B0] text-[#8FE3B0] bg-[#8FE3B0]/10'
                        : 'border-[rgba(244,245,247,0.1)] text-[#AEB4BD] hover:border-[#8A9099]'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Grid of Case Files */}
            <div className="grid gap-8 lg:grid-cols-2">
              {filteredCases.map((cs, idx) => (
                <ScrollReveal key={cs.id} delay={idx * 100}>
                  <MoatPanel className="p-6 md:p-8 flex flex-col justify-between h-full">
                    <div>
                      <div className="flex items-center justify-between gap-4 mb-4">
                        <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#636B76]">
                          {cs.id} // {cs.timeframe}
                        </span>
                        <SignalBadge label={cs.badge} variant={cs.badgeVariant} />
                      </div>

                      <h3 className="text-xl font-bold text-[#E9EBEF] mb-3">
                        {cs.title}
                      </h3>
                      <p className="text-xs font-mono text-[#8A9099] mb-4">
                        Klien: {cs.client}
                      </p>

                      <p className="text-sm text-[#AEB4BD] leading-relaxed mb-6 font-normal">
                        {cs.summary}
                      </p>

                      {/* Key Metric readout */}
                      <div className="border border-[rgba(244,245,247,0.08)] bg-[#0B0C0E]/60 p-3.5 mb-6">
                        <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#636B76] mb-1.5">
                          {cs.keyMetric.label}
                        </p>
                        <div className="flex items-baseline gap-2">
                          <span className="text-xl font-mono font-bold text-[#8FE3B0]">
                            {cs.keyMetric.after}
                          </span>
                          <span className="text-xs font-mono text-[#636B76] line-through">
                            {cs.keyMetric.before}
                          </span>
                          <span className="ml-auto text-[11px] font-mono font-semibold text-[#8FE3B0]">
                            {cs.keyMetric.gain}
                          </span>
                        </div>
                      </div>

                      {/* Collapsible Architecture Details */}
                      <div className="mb-6">
                        <button
                          onClick={() => toggleExpand(cs.id)}
                          className="flex items-center justify-between w-full py-2 font-mono text-[11px] uppercase tracking-wider text-[#8A9099] hover:text-[#E9EBEF] transition-colors border-t border-b border-[rgba(244,245,247,0.06)]"
                        >
                          <span>Spesifikasi Pipeline & Guardrails</span>
                          <ChevronDown
                            className={`w-3.5 h-3.5 transition-transform duration-200 ${
                              expandedCase === cs.id ? 'rotate-180' : ''
                            }`}
                          />
                        </button>

                        {expandedCase === cs.id && (
                          <div className="pt-4 pb-2 space-y-3 font-mono text-xs">
                            <div className="text-[#AEB4BD]">
                              <span className="text-[#636B76] block mb-1">
                                // PROBLEM BREAKDOWN:
                              </span>
                              <p className="text-[12px] leading-relaxed font-sans text-[#AEB4BD]">
                                {cs.details.problem}
                              </p>
                            </div>
                            <div className="text-[#AEB4BD]">
                              <span className="text-[#8FE3B0] block mb-1">
                                // IMPLEMENTED PIPELINE:
                              </span>
                              <p className="text-[12px] leading-relaxed font-sans text-[#AEB4BD]">
                                {cs.details.solution}
                              </p>
                            </div>
                            <div className="text-[#636B76] pt-1">
                              <span>VERIFIED AUDIT: </span>
                              <span className="text-[#E9EBEF] font-mono text-[11px]">
                                {cs.details.benchmarkResult}
                              </span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Tech Tags */}
                    <div>
                      <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[rgba(244,245,247,0.08)]">
                        {cs.tags.map((t) => (
                          <span
                            key={t}
                            className="font-mono text-[9px] uppercase tracking-wider border border-[rgba(244,245,247,0.1)] px-2 py-0.5 text-[#636B76]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </MoatPanel>
                </ScrollReveal>
              ))}
            </div>
          </section>

          {/* Bottom Navigation & CTA */}
          <section className="mt-20">
            <ScrollReveal>
              <MoatPanel className="p-8 md:p-12 border border-[rgba(244,245,247,0.12)]">
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
                  <div>
                    <p className="label-mono mb-2 text-[#8FE3B0]">
                      services transition · next capability
                    </p>
                    <h3 className="text-editorial font-bold text-[#E9EBEF] mb-3">
                      Pelajari 4 Bay Kapabilitas Sistem Respon Pintar
                    </h3>
                    <p className="text-[#AEB4BD] text-[15px] max-w-2xl leading-relaxed">
                      Jelajahi indeks layanan rekayasa sistem otomasi kami — dari integrasi live
                      waterfall route, konsol AI concierge, hingga audit keamanan guardrails.
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-xs font-mono shrink-0">
                    <Link
                      to="/services-new"
                      className="border border-[#8FE3B0] bg-[#8FE3B0] text-black font-semibold px-6 py-3 uppercase tracking-wider hover:bg-[#8FE3B0]/90 transition-all shadow-[0_0_15px_rgba(143,227,176,0.3)]"
                    >
                      Buka Halaman Services →
                    </Link>
                    <button
                      onClick={openModal}
                      className="border border-[rgba(244,245,247,0.2)] bg-transparent text-[#E9EBEF] px-6 py-3 uppercase tracking-wider hover:border-[#C8CDD5] hover:bg-white/[0.05] transition-all"
                    >
                      Uji Konsol AI
                    </button>
                  </div>
                </div>
              </MoatPanel>
            </ScrollReveal>
          </section>
        </div>
      </div>
    </div>
  );
}
