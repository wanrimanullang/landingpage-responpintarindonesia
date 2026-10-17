import React from 'react';

export default function MiniRedlineEditor() {
  return (
    <div className="border border-[rgba(244,245,247,0.08)] bg-[#0B0C0E] p-6 md:p-8">
      <div className="mb-6 flex items-center justify-between gap-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#636B76]">
          scale model — redline guardrail validator
        </p>
        <span
          className="h-[6px] w-[6px] rounded-full bg-[#8FE3B0] animate-pulse"
          style={{ boxShadow: '0 0 8px rgba(143,227,176,0.8)' }}
        />
      </div>

      <div className="grid gap-[10px] font-mono text-[11px] leading-relaxed">
        {/* Deleted line */}
        <div className="flex items-start gap-2 text-[#636B76] line-through bg-red-950/20 px-2.5 py-1.5 border border-red-900/30">
          <span className="text-red-400 select-none">−</span>
          <span>system: "Jawablah ramah dan coba tebak stok jika data tidak ditemukan."</span>
        </div>

        {/* Added line */}
        <div className="flex items-start gap-2 text-[#E9EBEF] bg-[#8FE3B0]/10 px-2.5 py-1.5 border border-[#8FE3B0]/30">
          <span className="text-[#8FE3B0] select-none">+</span>
          <span>system: "Strict grounded retrieval. Fallback to CS handoff when confidence &lt; 0.98."</span>
        </div>

        {/* Validation indicators */}
        <div className="mt-2 flex flex-wrap gap-4 text-[10px] uppercase tracking-[0.14em]">
          <span className="text-[#8FE3B0]">Hallucination: 0.00%</span>
          <span className="text-[#636B76]">·</span>
          <span className="text-[#AEB4BD]">Audit: PASS</span>
          <span className="text-[#636B76]">·</span>
          <span className="text-[#8A9099]">Latency: 180ms</span>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-[rgba(244,245,247,0.08)] pt-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#636B76]">
          verified on eval suite · 12,000 runs
        </p>
        <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#8A9099]">
          bay 04 · powered
        </p>
      </div>
    </div>
  );
}
