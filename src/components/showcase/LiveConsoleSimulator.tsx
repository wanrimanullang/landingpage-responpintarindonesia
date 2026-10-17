import React, { useState, useEffect } from 'react';
import { Terminal, Play, RotateCcw, CheckCircle2, ShieldCheck, Sparkles, Server } from 'lucide-react';

interface SimulationScenario {
  id: string;
  name: string;
  query: string;
  tools: string[];
  response: string;
  latencyMs: number;
  tokensPerSec: number;
}

const SCENARIOS: SimulationScenario[] = [
  {
    id: 'ecommerce',
    name: 'E-Commerce Order Inquiry',
    query: 'Halo min, tolong cek status pengiriman pesanan #RP-99248 dan estimasi tibanya.',
    tools: ['API::LogisticsGateway.track', 'AUTH::CustomerTokenVerify'],
    response:
      'Halo Kak! Pesanan #RP-99248 saat ini berada di Hub Transit Jakarta Barat (Status: On Delivery). Estimasi tiba hari ini sebelum pukul 17:00 WIB oleh kurir J&T Express (Resi: JT982019482). Butuh bantuan lain terkait pesanan ini?',
    latencyMs: 198,
    tokensPerSec: 124,
  },
  {
    id: 'fintech',
    name: 'Fintech Transaction Dispute',
    query: 'Saldo kepotong Rp 500.000 via QRIS tapi status merchant tertulis transaksi gagal.',
    tools: ['FIN::SwitchingLedger.query', 'GUARD::PII_Masker', 'FIN::AutoReversal.check'],
    response:
      'Kami mendeteksi anomali pada settlement QRIS ID TRX-7719. Dana Rp 500.000 sudah masuk antrean auto-reversal oleh payment switch. Sistem otomatis mengembalikan saldo ke akun e-wallet Anda dalam 5-15 menit tanpa perlu formulir manual.',
    latencyMs: 242,
    tokensPerSec: 118,
  },
  {
    id: 'tech',
    name: 'Webhook & API Setup',
    query: 'Bagaimana cara menghubungkan webhook WhatsApp Cloud API ke sistem kami?',
    tools: ['DOCS::SemanticVectorSearch', 'AUTH::HMAC_SignatureGen'],
    response:
      'Untuk integrasi WhatsApp Cloud API: 1) Masukkan Callback URL endpoint HTTPS Anda di Meta App Dashboard, 2) Setel Verify Token yang cocok di file .env, 3) Tangkap payload event "messages" via POST request dan validasi signature HMAC SHA256.',
    latencyMs: 165,
    tokensPerSec: 140,
  },
];

export const LiveConsoleSimulator: React.FC = () => {
  const [activeScenario, setActiveScenario] = useState<SimulationScenario>(SCENARIOS[0]);
  const [displayText, setDisplayText] = useState<string>('');
  const [isStreaming, setIsStreaming] = useState<boolean>(false);
  const [activeToolIndex, setActiveToolIndex] = useState<number>(-1);
  const [measuredLatency, setMeasuredLatency] = useState<number>(0);

  const runSimulation = (scenario: SimulationScenario) => {
    setActiveScenario(scenario);
    setDisplayText('');
    setIsStreaming(true);
    setActiveToolIndex(0);
    setMeasuredLatency(0);

    const startTime = performance.now();

    // Step 1: Simulate tool execution
    setTimeout(() => {
      setActiveToolIndex(1);
    }, scenario.latencyMs * 0.4);

    // Step 2: Stream tokens
    setTimeout(() => {
      setActiveToolIndex(scenario.tools.length);
      const fullText = scenario.response;
      let currentIndex = 0;

      const streamInterval = setInterval(() => {
        if (currentIndex < fullText.length) {
          currentIndex += Math.min(3, fullText.length - currentIndex);
          setDisplayText(fullText.substring(0, currentIndex));
          setMeasuredLatency(Math.round(performance.now() - startTime));
        } else {
          clearInterval(streamInterval);
          setIsStreaming(false);
          setMeasuredLatency(scenario.latencyMs);
        }
      }, 16);
    }, scenario.latencyMs * 0.7);
  };

  useEffect(() => {
    runSimulation(SCENARIOS[0]);
  }, []);

  return (
    <div className="jamie-panel p-6 sm:p-8 relative">
      <span className="jamie-tick-tl">+</span>
      <span className="jamie-tick-tr">+</span>
      <span className="jamie-tick-bl">+</span>
      <span className="jamie-tick-br">+</span>

      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-5 hairline-divider mb-6">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <Terminal className="w-4 h-4 text-emerald-400" />
            <span className="mono-tag text-emerald-400 border-emerald-500/30 bg-emerald-500/10">
              LIVE INFERENCE CONSOLE
            </span>
            <span className="mono-tag text-zinc-400">EDGE RUNTIME // ASIA-SOUTHEAST-2</span>
          </div>
          <h3 className="text-lg sm:text-xl font-semibold text-white tracking-tight">
            Sub-Second Deterministic Orchestration Simulator
          </h3>
        </div>

        {/* Real-time stats */}
        <div className="flex items-center gap-4 text-xs font-mono">
          <div className="flex flex-col text-right">
            <span className="text-zinc-500 text-[10px] uppercase">Latency</span>
            <span className="text-emerald-400 font-bold">{measuredLatency || activeScenario.latencyMs}ms</span>
          </div>
          <div className="w-px h-6 bg-white/10" />
          <div className="flex flex-col text-right">
            <span className="text-zinc-500 text-[10px] uppercase">Speed</span>
            <span className="text-zinc-200">{activeScenario.tokensPerSec} tok/s</span>
          </div>
          <div className="w-px h-6 bg-white/10" />
          <div className="flex flex-col text-right">
            <span className="text-zinc-500 text-[10px] uppercase">Safety Check</span>
            <span className="text-emerald-400 flex items-center gap-1">
              <ShieldCheck className="w-3 h-3" /> PASSED
            </span>
          </div>
        </div>
      </div>

      {/* Scenario Presets Selector */}
      <div className="flex flex-wrap gap-2 mb-6">
        {SCENARIOS.map((sc) => {
          const isActive = activeScenario.id === sc.id;
          return (
            <button
              key={sc.id}
              onClick={() => runSimulation(sc)}
              disabled={isStreaming}
              className={`text-xs font-mono px-3.5 py-1.5 rounded transition-all duration-200 flex items-center gap-2 ${
                isActive
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm shadow-emerald-500/10'
                  : 'bg-white/[0.03] text-zinc-400 border border-white/5 hover:border-white/20 hover:text-zinc-200'
              }`}
            >
              <Play className={`w-3 h-3 ${isActive ? 'text-emerald-400 fill-emerald-400' : 'text-zinc-500'}`} />
              {sc.name}
            </button>
          );
        })}
      </div>

      {/* Terminal View */}
      <div className="rounded bg-black/60 border border-white/10 overflow-hidden font-mono text-xs">
        {/* Terminal Title Bar */}
        <div className="px-4 py-2.5 bg-white/[0.04] border-b border-white/5 flex items-center justify-between text-zinc-500">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
            <span className="ml-2 text-[11px] text-zinc-400">session: omni_worker_01 // whatsapp_cloud</span>
          </div>
          <button
            onClick={() => runSimulation(activeScenario)}
            disabled={isStreaming}
            className="flex items-center gap-1 text-[11px] hover:text-white transition-colors"
          >
            <RotateCcw className={`w-3 h-3 ${isStreaming ? 'animate-spin' : ''}`} />
            Re-run Pipeline
          </button>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 space-y-4">
          {/* Query prompt */}
          <div className="flex items-start gap-2.5">
            <span className="text-emerald-400 font-bold shrink-0 select-none">incoming //&gt;</span>
            <span className="text-zinc-200 bg-white/[0.02] px-2.5 py-1 rounded border border-white/5 w-full">
              {activeScenario.query}
            </span>
          </div>

          {/* Tool execution pills */}
          <div className="flex flex-wrap items-center gap-2 pt-1">
            <span className="text-zinc-500 text-[10px] uppercase tracking-wider flex items-center gap-1">
              <Server className="w-3 h-3 text-zinc-400" />
              Tool Pipeline:
            </span>
            {activeScenario.tools.map((tool, idx) => {
              const executed = activeToolIndex >= idx;
              return (
                <span
                  key={idx}
                  className={`px-2 py-0.5 rounded text-[10px] transition-colors border ${
                    executed
                      ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30'
                      : 'bg-white/[0.02] text-zinc-500 border-white/5'
                  }`}
                >
                  {executed ? '✓ ' : '○ '}
                  {tool}
                </span>
              );
            })}
          </div>

          {/* AI Output Stream */}
          <div className="pt-2">
            <div className="flex items-center gap-2 mb-1.5 text-zinc-400 text-[11px]">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>Orchestrated Response Stream:</span>
            </div>
            <div className="p-4 rounded bg-white/[0.02] border border-white/5 text-zinc-200 min-h-[90px] leading-relaxed relative">
              {displayText}
              {isStreaming && (
                <span className="inline-block w-2 h-4 ml-1 bg-emerald-400 animate-pulse align-middle" />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
