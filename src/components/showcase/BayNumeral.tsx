import React from 'react';

export default function BayNumeral({
  number,
  position = 'right',
}: {
  number: string;
  position?: 'right' | 'left';
}) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute bottom-[-0.08em] z-0 select-none opacity-80"
      style={{ [position]: '-0.04em' }}
    >
      <span
        className="relative block leading-none select-none tracking-tighter"
        style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 700,
          fontSize: 'clamp(10rem, 28vw, 25rem)',
          color: 'transparent',
          WebkitTextStroke: '1px rgba(244, 245, 247, 0.06)',
        }}
      >
        {number}
      </span>
    </div>
  );
}
