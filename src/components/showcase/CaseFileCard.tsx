import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Cpu, ShieldCheck, Zap, ArrowUpRight, Activity } from 'lucide-react';

export interface CaseFileProps {
  caseId: string;
  domain: string;
  status: string;
  title: string;
  summary: string;
  metrics: {
    label: string;
    before: string;
    after: string;
    diff: string;
    isPositive?: boolean;
  }[];
  graphPoints?: number[];
  architecture: {
    problem: string;
    pipeline: string[];
    stack: string[];
    guardrails: string;
  };
}

export const CaseFileCard: React.FC<{ caseFile: CaseFileProps }> = ({ caseFile }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  // SVG metric plot points (normalized 0 to 100)
  const points = caseFile.graphPoints || [88, 76, 55, 34, 22, 16, 12, 10];
  const maxVal = Math.max(...points);
  const minVal = Math.min(...points);

  const svgWidth = 280;
  const svgHeight = 60;
  const pathD = points
    .map((val, idx) => {
      const x = (idx / (points.length - 1)) * svgWidth;
      const y = svgHeight - ((val - minVal) / (maxVal - minVal || 1)) * (svgHeight - 14) - 7;
      return `${idx === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`;
    })
    .join(' ');

  return (
    <article className="jamie-panel group p-6 sm:p-8 relative transition-all duration-300">
      {/* Corner Blueprint Ticks */}
      <span className="jamie-tick-tl">+</span>
      <span className="jamie-tick-tr">+</span>
      <span className="jamie-tick-bl">+</span>
      <span className="jamie-tick-br">+</span>

      {/* Hover Sheen Light Sweep Reflection */}
      <div className="jamie-sheen" />

      {/* Top Metadata Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-5 hairline-divider mb-6">
        <div className="flex items-center gap-2.5">
          <span className="mono-tag text-emerald-400 border-emerald-500/30 bg-emerald-500/10">
            <span className="signal-dot" />
            {caseFile.caseId}
          </span>
          <span className="mono-tag text-zinc-400">
            {caseFile.domain}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="mono-tag text-zinc-300 bg-white/5 border-white/10">
            <Activity className="w-3 h-3 text-emerald-400" />
            {caseFile.status}
          </span>
        </div>
      </div>

      {/* Title & Core Summary */}
      <div className="mb-6">
        <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-white mb-3 group-hover:text-emerald-400 transition-colors flex items-start justify-between gap-4">
          <span>{caseFile.title}</span>
          <ArrowUpRight className="w-5 h-5 text-zinc-500 group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0 mt-1" />
        </h3>
        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
          {caseFile.summary}
        </p>
      </div>

      {/* Metrics Readout & SVG Curve */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 p-4 sm:p-5 rounded bg-black/40 border border-white/5 mb-6">
        {/* Metric 1 & 2 */}
        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {caseFile.metrics.map((m, idx) => (
            <div key={idx} className="flex flex-col justify-between p-3 rounded bg-white/[0.02] border border-white/5">
              <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                <Zap className="w-3 h-3 text-emerald-400" />
                {m.label}
              </span>
              <div className="flex items-baseline gap-2">
                <span className="text-xs font-mono text-zinc-500 line-through">
                  {m.before}
                </span>
                <span className="text-lg sm:text-xl font-bold font-mono text-white metric-tabular">
                  {m.after}
                </span>
                <span className="ml-auto text-xs font-mono font-medium px-1.5 py-0.5 rounded bg-emerald-500/15 text-emerald-400 border border-emerald-500/20">
                  {m.diff}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Mini SVG Curve Plot */}
        <div className="lg:col-span-4 flex flex-col justify-between p-3 rounded bg-white/[0.02] border border-white/5">
          <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 mb-1">
            <span>LATENCY DECAY</span>
            <span className="text-emerald-400 font-mono">
              {hoverIndex !== null ? `${points[hoverIndex]}ms` : `${points[points.length - 1]}ms`}
            </span>
          </div>

          <div className="w-full overflow-hidden pt-1">
            <svg
              viewBox={`0 0 ${svgWidth} ${svgHeight}`}
              className="w-full h-12 overflow-visible"
              preserveAspectRatio="none"
              onMouseLeave={() => setHoverIndex(null)}
            >
              <defs>
                <linearGradient id={`grad-${caseFile.caseId}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#00E5A3" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#00E5A3" stopOpacity="0.0" />
                </linearGradient>
              </defs>

              {/* Area fill */}
              <path
                d={`${pathD} L ${svgWidth} ${svgHeight} L 0 ${svgHeight} Z`}
                fill={`url(#grad-${caseFile.caseId})`}
              />

              {/* Curve Stroke */}
              <path
                d={pathD}
                fill="none"
                stroke="#00E5A3"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Data points */}
              {points.map((val, idx) => {
                const x = (idx / (points.length - 1)) * svgWidth;
                const y = svgHeight - ((val - minVal) / (maxVal - minVal || 1)) * (svgHeight - 14) - 7;
                return (
                  <circle
                    key={idx}
                    cx={x}
                    cy={y}
                    r={hoverIndex === idx ? 4.5 : 2.5}
                    fill={hoverIndex === idx ? '#FFFFFF' : '#00E5A3'}
                    stroke="#0B0C0E"
                    strokeWidth="1.5"
                    className="cursor-pointer transition-all duration-150"
                    onMouseEnter={() => setHoverIndex(idx)}
                  />
                );
              })}
            </svg>
          </div>
        </div>
      </div>

      {/* Expandable Technical Blueprint */}
      <div className="border-t border-white/5 pt-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between text-xs font-mono uppercase tracking-wider text-zinc-400 hover:text-white transition-colors py-2 focus:outline-none"
        >
          <span className="flex items-center gap-2">
            <Cpu className="w-3.5 h-3.5 text-emerald-400" />
            {isOpen ? '[ CLOSE SYSTEM BLUEPRINT ]' : '[ OPEN SYSTEM BLUEPRINT → ]'}
          </span>
          {isOpen ? (
            <ChevronUp className="w-4 h-4 text-emerald-400" />
          ) : (
            <ChevronDown className="w-4 h-4 text-zinc-500" />
          )}
        </button>

        {isOpen && (
          <div className="mt-4 pt-4 border-t border-white/5 space-y-4 animate-in fade-in duration-200">
            {/* Problem definition */}
            <div>
              <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest block mb-1">
                // PROBLEM CLASS
              </span>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
                {caseFile.architecture.problem}
              </p>
            </div>

            {/* Pipeline flow */}
            <div>
              <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest block mb-2">
                // SYSTEM TOPOLOGY
              </span>
              <div className="flex flex-wrap items-center gap-1.5 font-mono text-xs">
                {caseFile.architecture.pipeline.map((step, idx) => (
                  <React.Fragment key={idx}>
                    <span className="px-2.5 py-1 rounded bg-white/[0.04] border border-white/10 text-zinc-300">
                      {step}
                    </span>
                    {idx < caseFile.architecture.pipeline.length - 1 && (
                      <span className="text-emerald-400 select-none">→</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Guardrails */}
            <div>
              <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest block mb-1 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                VERIFIED SAFETY GUARDRAILS
              </span>
              <p className="text-xs text-zinc-400 font-sans">
                {caseFile.architecture.guardrails}
              </p>
            </div>

            {/* Stack badges */}
            <div className="pt-2 flex flex-wrap gap-1.5">
              {caseFile.architecture.stack.map((item, idx) => (
                <span
                  key={idx}
                  className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
};
