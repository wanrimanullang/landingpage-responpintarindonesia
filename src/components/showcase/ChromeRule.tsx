import React from 'react';

export default function ChromeRule({ className = '' }: { className?: string }) {
  return (
    <hr
      className={`border-0 h-px ${className}`}
      style={{
        background:
          'linear-gradient(90deg, transparent 0%, rgba(90,96,112,0.5) 20%, rgba(200,205,213,0.35) 50%, rgba(90,96,112,0.5) 80%, transparent 100%)',
      }}
    />
  );
}
