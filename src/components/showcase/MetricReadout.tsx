import React from 'react';
import { ArrowDownRight, ArrowUpRight, CheckCircle2, Zap } from 'lucide-react';

interface MetricItem {
  id: string;
  label: string;
  value: string;
  subValue: string;
  diff: string;
  isPositive: boolean;
  benchmark: string;
}

const METRICS: MetricItem[] = [
  {
    id: 'm1',
    label: 'MEDIAN RESPONSE TIME',
    value: '380ms',
    subValue: 'down from 14.8m',
    diff: '-97.4%',
    isPositive: true,
    benchmark: 'p95 SLA < 600ms',
  },
  {
    id: 'm2',
    label: 'AUTONOMOUS RESOLUTION',
    value: '92.4%',
    subValue: 'zero-touch closure',
    diff: '+74.2%',
    isPositive: true,
    benchmark: '38,000+ tickets/mo',
  },
  {
    id: 'm3',
    label: 'HALLUCINATION RATE',
    value: '< 0.04%',
    subValue: 'strict guardrails',
    diff: '99.96% precision',
    isPositive: true,
    benchmark: 'RAG verification',
  },
  {
    id: 'm4',
    label: 'THROUGHPUT PEAK',
    value: '2,400',
    subValue: 'msg/second burst',
    diff: '42x scale',
    isPositive: true,
    benchmark: 'Redis Stream Queue',
  },
];

export const MetricReadout: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {METRICS.map((item) => (
        <div key={item.id} className="jamie-panel p-5 group relative">
          <span className="jamie-tick-tl">+</span>
          <span className="jamie-tick-tr">+</span>
          <span className="jamie-tick-bl">+</span>
          <span className="jamie-tick-br">+</span>
          <div className="jamie-sheen" />

          {/* Label */}
          <div className="flex items-center justify-between mb-3">
            <span className="text-[11px] font-mono text-zinc-400 tracking-wider">
              {item.label}
            </span>
            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
              {item.isPositive ? <ArrowUpRight className="w-2.5 h-2.5" /> : <ArrowDownRight className="w-2.5 h-2.5" />}
              {item.diff}
            </span>
          </div>

          {/* Big value */}
          <div className="text-3xl sm:text-4xl font-bold font-mono tracking-tight text-white mb-1 metric-tabular group-hover:text-emerald-400 transition-colors">
            {item.value}
          </div>

          {/* Sub value & benchmark */}
          <div className="flex items-center justify-between text-xs font-mono text-zinc-500 border-t border-white/5 pt-2.5 mt-2">
            <span>{item.subValue}</span>
            <span className="text-[10px] text-zinc-400">{item.benchmark}</span>
          </div>
        </div>
      ))}
    </div>
  );
};
