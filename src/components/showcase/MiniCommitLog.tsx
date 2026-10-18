import React from 'react';

const COMMITS = [
  {
    hash: '7f21a4e',
    msg: 'feat(rag): hybrid bm25 + cohere rerank v3',
    time: '2m ago',
    status: 'deployed',
    color: '#8FE3B0',
  },
  {
    hash: '3c90e21',
    msg: 'perf(engine): sub-second whatsapp dispatch 380ms',
    time: '14m ago',
    status: 'verified',
    color: '#8FE3B0',
  },
  {
    hash: '8b19d44',
    msg: 'fix(queue): redis stream consumer backpressure',
    time: '1h ago',
    status: 'verified',
    color: '#AEB4BD',
  },
  {
    hash: '5e44a02',
    msg: 'chore(security): pii masking & compliance logs',
    time: '3h ago',
    status: 'verified',
    color: '#AEB4BD',
  },
];

export default function MiniCommitLog() {
  return (
    <div className="border border-[rgba(244,245,247,0.08)] bg-[#0B0C0E] p-6 md:p-8">
      <div className="mb-6 flex items-center justify-between gap-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#636B76]">
          scale model — live deploy telemetry
        </p>
        <span
          className="h-[6px] w-[6px] rounded-full bg-[#8FE3B0] animate-pulse"
          style={{ boxShadow: '0 0 8px rgba(143,227,176,0.8)' }}
        />
      </div>

      <div className="grid gap-[12px] font-mono text-[11px]">
        {COMMITS.map((c) => (
          <div key={c.hash} className="flex items-center gap-3">
            <span className="text-[#8A9099] font-medium w-[54px] shrink-0">{c.hash}</span>
            <span className="text-[#AEB4BD] flex-1 truncate">{c.msg}</span>
            <span
              className="text-[10px] uppercase tracking-wider shrink-0 px-1.5 py-0.5 border"
              style={{
                borderColor: 'rgba(244,245,247,0.1)',
                color: c.color,
                backgroundColor: 'rgba(255,255,255,0.02)',
              }}
            >
              {c.status}
            </span>
            <span className="text-[#636B76] text-[10px] shrink-0 w-[50px] text-right">
              {c.time}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-[rgba(244,245,247,0.08)] pt-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#636B76]">
          abstracted from production build trunk
        </p>
        <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#8A9099]">
          bay 03 · powered
        </p>
      </div>
    </div>
  );
}
