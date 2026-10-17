import React, { useRef, useCallback } from 'react';

interface MoatPanelProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hoverGlow?: boolean;
}

export default function MoatPanel({
  children,
  className = '',
  onClick,
  hoverGlow = true,
}: MoatPanelProps) {
  const panelRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const el = panelRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty('--moat-x', `${x.toFixed(1)}%`);
    el.style.setProperty('--moat-y', `${y.toFixed(1)}%`);
  }, []);

  return (
    <div
      ref={panelRef}
      onMouseMove={handleMouseMove}
      onClick={onClick}
      className={`group panel-jamie ticks-jamie relative overflow-hidden transition-all duration-300 ${
        onClick ? 'cursor-pointer hover:border-[rgba(244,245,247,0.18)]' : ''
      } ${className}`}
      style={{
        backgroundColor: 'rgba(17, 18, 20, 0.88)',
      }}
    >
      {/* Sweep shimmer — diagonal sheen from left to right on hover */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 -left-[60%] w-[50%] -skew-x-12 opacity-0 group-hover:opacity-100 group-hover:translate-x-[360%] transition-transform duration-700 ease-out z-10"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(233, 235, 239, 0.05) 50%, transparent 100%)',
        }}
      />

      {/* Cursor radial glow */}
      {hoverGlow && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
          style={{
            background:
              'radial-gradient(18rem circle at var(--moat-x, 50%) var(--moat-y, 50%), rgba(233, 235, 239, 0.065), transparent 70%)',
          }}
        />
      )}

      {/* Content wrapper */}
      <div className="relative z-20 w-full h-full">
        {children}
      </div>
    </div>
  );
}
