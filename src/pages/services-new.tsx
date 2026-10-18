import React from 'react';
import { Link } from 'react-router-dom';
import BackgroundScene from '../components/showcase/BackgroundScene';
import BaySection from '../components/showcase/BaySection';
import ScrollReveal from '../components/showcase/ScrollReveal';
import ChromeRule from '../components/showcase/ChromeRule';
import SignalBadge from '../components/showcase/SignalBadge';
import MoatPanel from '../components/showcase/MoatPanel';
import MiniCrawlWaterfall from '../components/showcase/MiniCrawlWaterfall';
import MiniTerminal from '../components/showcase/MiniTerminal';
import MiniCommitLog from '../components/showcase/MiniCommitLog';
import MiniRedlineEditor from '../components/showcase/MiniRedlineEditor';
import { useChatbotDemoModal } from '../context/chatbot-demo-context';

export default function ServicesNewPage() {
  const { openModal } = useChatbotDemoModal();

  return (
    <div className="jamie-root min-h-screen bg-[#0B0C0E] text-[#E9EBEF] relative overflow-hidden font-sans selection:bg-[#8FE3B0]/20 selection:text-[#8FE3B0]">
      {/* Background Interactive Canvas Particle Field & Ambient Fixed Grid */}
      <BackgroundScene />

      {/* Main Content Layer */}
      <div className="relative z-10 w-full pt-28 pb-20">
        {/* Top Hero Header Section */}
        <div className="mx-auto w-full max-w-[1400px] px-6 md:px-12 mb-16 md:mb-24">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-10 text-xs font-mono">
            <div className="flex items-center gap-2">
              <Link to="/" className="text-[#636B76] hover:text-[#AEB4BD] transition-colors">
                RESPON PINTAR
              </Link>
              <span className="text-[#636B76]">/</span>
              <span className="text-[#8FE3B0]">SERVICES INDEX</span>
              <span className="text-[#636B76]">//</span>
              <span className="text-[#AEB4BD]">ENGINEERING BAYS</span>
            </div>

            <div className="flex items-center gap-3">
              <SignalBadge label="SYSTEMS OPERATIONAL" variant="positive" />
              <span className="border border-[rgba(244,245,247,0.1)] px-2 py-0.5 font-mono text-[11px] text-[#AEB4BD] hidden sm:inline-block">
                SLA 99.98%
              </span>
            </div>
          </div>

          <ScrollReveal>
            <p className="label-mono mb-4 text-[#8A9099]">
              capabilities index · 4 production bays
            </p>
          </ScrollReveal>

          <ScrollReveal delay={90}>
            <h1 className="text-display font-bold tracking-tight text-[#E9EBEF] max-w-4xl mb-6">
              Teknologi yang bekerja.{' '}
              <span className="chrome-text block">Bukan sekadar janji.</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={180}>
            <p className="max-w-2xl text-[17px] text-[#AEB4BD] leading-relaxed mb-8">
              Empat pilar rekayasa sistem AI dan otomatisasi deterministik untuk enterprise.
              Dirancang dengan observabilitas end-to-end, toleransi kegagalan tinggi, dan latensi
              sub-detik pada WhatsApp Cloud API & Omnichannel.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={260}>
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
              <button
                onClick={openModal}
                className="inline-flex items-center gap-2 border border-[#8FE3B0] bg-[#8FE3B0]/10 px-5 py-2.5 text-[#8FE3B0] font-semibold uppercase tracking-wider hover:bg-[#8FE3B0]/20 transition-all shadow-[0_0_12px_rgba(143,227,176,0.15)]"
              >
                <span>Uji Konsol Demo</span>
                <span>→</span>
              </button>
              <Link
                to="/showcase"
                className="inline-flex items-center gap-2 border border-[#8A9099] px-5 py-2.5 text-[#E9EBEF] uppercase tracking-wider hover:border-[#C8CDD5] hover:bg-white/[0.04] transition-all"
              >
                <span>Lihat Studi Kasus</span>
              </Link>
            </div>
          </ScrollReveal>

          <ChromeRule className="mt-14" />
        </div>

        {/* 4 Production Bay Sections */}

        {/* Bay 01: AI Chatbot & Otomasi */}
        <BaySection
          number="01"
          numberPosition="right"
          label="01 · AI yang bisa dipercaya"
          heading={
            <>
              AI Chatbot & <span className="chrome-text">Otomasi Cerdas</span>
            </>
          }
          description="Sistem percakapan cerdas yang terhubung langsung ke inventaris, sistem order, dan CRM Anda. Menggunakan arsitektur semantic routing untuk menangani 90%+ pertanyaan berulang tanpa bantuan manusia dan zero-hallucination."
          meta="STACK: META CLOUD API · REDIS 7 STREAM · HYBRID RAG · FASTAPI · LLAMA 3.3 / CLAUDE 3.5"
          ctaLabel="Jelajahi Otomasi"
          ctaHref="#bay-01"
          widget={<MiniCrawlWaterfall />}
          reversed={false}
        />

        {/* Bay 02: Analitik & Realtime Dashboard */}
        <BaySection
          number="02"
          numberPosition="left"
          label="02 · data menjadi keputusan"
          heading={
            <>
              Analitik & <span className="chrome-text">Realtime Dashboard</span>
            </>
          }
          description="Pantau sentimen pelanggan, bottleneck konversi, waktu respon agent, dan tren pertanyaan umum secara langsung. Insight berbasis data yang dapat ditindaklanjuti untuk meningkatkan kepuasan pelanggan (CSAT)."
          meta="TELEMETRY: CLICKHOUSE · WEBSOCKETS · REALTIME DRIFT DETECTION · GRAFANA EXPORT"
          ctaLabel="Lihat Analitik"
          ctaHref="#bay-02"
          widget={<MiniTerminal />}
          reversed={true}
        />

        {/* Bay 03: Full-stack Build & API */}
        <BaySection
          number="03"
          numberPosition="right"
          label="03 · dari konsep ke produksi"
          heading={
            <>
              Full-stack Build & <span className="chrome-text">API Integration</span>
            </>
          }
          description="Integrasikan chatbot ke sistem ERP, Shopify, WooCommerce, webhook internal, atau database legacy dengan pipeline aman dan terdokumentasi rapi. Skalabilitas tinggi dengan arsitektur microservices modern."
          meta="INFRASTRUCTURE: DOCKER · KUBERNETES · ZERO-DOWNTIME CI/CD · POSTGRESQL 16 · PGVECTOR"
          ctaLabel="Spesifikasi Integrasi"
          ctaHref="#bay-03"
          widget={<MiniCommitLog />}
          reversed={false}
        />

        {/* Bay 04: Penulisan Teknis, Audit & Guardrails */}
        <BaySection
          number="04"
          numberPosition="left"
          label="04 · teks yang bekerja"
          heading={
            <>
              Audit & <span className="chrome-text">Guardrails Evaluasi</span>
            </>
          }
          description="Setiap prompt, kebijakan keamanan, dan batasan respon (guardrails) diuji secara adversarial terhadap ribuan skenario simulasi serangan. Perlindungan ketat dari kebocoran data sensitif (PII) dan kepatuhan regulasi."
          meta="SECURITY: STRICT PII MASKING · ADVERSARIAL BENCHMARKING · ISO 27001 AUDIT READY"
          ctaLabel="Protokol Keamanan"
          ctaHref="#bay-04"
          widget={<MiniRedlineEditor />}
          reversed={true}
        />

        {/* Bottom CTA Panel */}
        <div className="mx-auto w-full max-w-[1400px] px-6 md:px-12 mt-20">
          <ScrollReveal>
            <MoatPanel className="p-8 md:p-14 border border-[rgba(244,245,247,0.12)]">
              <div className="max-w-3xl">
                <p className="label-mono mb-4 text-[#8FE3B0]">
                  next step · engagement registry
                </p>
                <h3 className="text-editorial font-bold text-[#E9EBEF] mb-4">
                  Mulai implementasi sistem cerdas untuk bisnis Anda hari ini.
                </h3>
                <p className="text-[#AEB4BD] text-[15.5px] leading-relaxed mb-8">
                  Konsultasikan kebutuhan otomasi WhatsApp dan CS multi-channel Anda dengan tim
                  engineer kami. Dapatkan arsitektur solusi dan proof-of-concept terukur dalam 48 jam.
                </p>
                <div className="flex flex-wrap gap-4 text-xs font-mono">
                  <a
                    href="https://crm.responpintar.com/auth/login"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-[#8FE3B0] bg-[#8FE3B0] text-black font-semibold px-6 py-3 uppercase tracking-wider hover:bg-[#8FE3B0]/90 transition-all shadow-[0_0_15px_rgba(143,227,176,0.3)]"
                  >
                    Daftar Akun Gratis →
                  </a>
                  <button
                    onClick={openModal}
                    className="border border-[rgba(244,245,247,0.2)] bg-transparent text-[#E9EBEF] px-6 py-3 uppercase tracking-wider hover:border-[#C8CDD5] hover:bg-white/[0.05] transition-all"
                  >
                    Coba Live Demo Konsol
                  </button>
                </div>
              </div>
            </MoatPanel>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
