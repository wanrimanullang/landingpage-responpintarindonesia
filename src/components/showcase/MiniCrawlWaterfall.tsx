import React from 'react';

const ROUTES = [
  { path: '/', delay: '0s', width: 62, time: '42ms' },
  { path: '/layanan/', delay: '0.35s', width: 78, time: '88ms' },
  { path: '/knowledge/', delay: '0.7s', width: 54, time: '64ms' },
  { path: '/webhook/', delay: '1.05s', width: 85, time: '112ms' },
  { path: '/dispatch/', delay: '1.4s', width: 58, time: '52ms' },
];

export default function MiniCrawlWaterfall() {
  return (
    <div className="border border-[rgba(244,245,247,0.08)] bg-[#0B0C0E] p-6 md:p-8 rounded-none">
      <div className="mb-6 flex items-center justify-between gap-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#636B76]">
          scale model — live crawl waterfall
        </p>
        <span
          className="h-[6px] w-[6px] rounded-full bg-[#8FE3B0] animate-pulse"
          style={{ boxShadow: '0 0 8px rgba(143,227,176,0.8)' }}
        />
      </div>
      <div className="grid gap-[12px] font-mono text-[11px]">
        {ROUTES.map((r) => (
          <div key={r.path} className="flex items-center gap-3">
            <span className="w-[88px] shrink-0 text-[#636B76] truncate">{r.path}</span>
            <span className="relative h-[3px] flex-1 overflow-hidden bg-[#1a1c1f]">
              <span
                className="absolute inset-y-0 left-0"
                style={{
                  width: `${r.width}%`,
                  background: 'linear-gradient(90deg, #5A6070, #8A9099, #C8CDD5)',
                  animation: `expandBar 2.4s ease-out ${r.delay} infinite`,
                }}
              />
            </span>
            <span
              className="w-[42px] shrink-0 text-right text-[#8FE3B0]"
              style={{ animation: `fadeIn 2.4s ease-out ${r.delay} infinite` }}
            >
              200
            </span>
            <span className="w-[45px] shrink-0 text-right text-[#636B76] text-[10px]">
              {r.time}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-6 flex items-center justify-between border-t border-[rgba(244,245,247,0.08)] pt-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#636B76]">
          abstracted from live route table
        </p>
        <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#8A9099]">
          bay 01 · powered
        </p>
      </div>
    </div>
  );
}
