import React from 'react';

export default function MiniTerminal() {
  return (
    <div className="border border-[rgba(244,245,247,0.08)] bg-[#0B0C0E] p-6 md:p-8">
      <div className="mb-6 flex items-center justify-between gap-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#636B76]">
          scale model — AI concierge aktif
        </p>
        <span
          className="h-[6px] w-[6px] rounded-full bg-[#8FE3B0] animate-pulse"
          style={{ boxShadow: '0 0 8px rgba(143,227,176,0.8)' }}
        />
      </div>
      <div className="grid gap-[13px] font-mono text-[11px] leading-relaxed">
        <div className="text-[#636B76]">
          <span className="mr-2 text-[#8A9099]">▸</span>
          <span>layanan mana untuk integrasi omni-channel WhatsApp?</span>
        </div>
        <div className="text-[#AEB4BD]">
          <span className="mr-2 text-[#C8CDD5]">◂</span>
          <span>omnichannel engine — sync multi-cs, response sub-second 380ms.</span>
          <span className="terminal-caret" aria-hidden="true" />
        </div>
        <div className="mt-1 flex flex-wrap gap-3 text-[10px] uppercase tracking-[0.14em] text-[#636B76]">
          <span>grounded</span>
          <span>·</span>
          <span>zero-hallucination</span>
          <span>·</span>
          <span>live on this stack</span>
        </div>
      </div>
      <div className="mt-6 flex items-center justify-between border-t border-[rgba(244,245,247,0.08)] pt-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#636B76]">
          live — same stack this service sells
        </p>
        <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#8A9099]">
          bay 02 · powered
        </p>
      </div>
    </div>
  );
}
