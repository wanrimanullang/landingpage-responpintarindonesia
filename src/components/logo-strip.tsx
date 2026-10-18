'use client';

import { useState, useEffect } from 'react';
import { logos, LogoItem } from '../config/logos';

interface LogoStripProps {
  className?: string;
}

export function LogoStrip({ className = '' }: LogoStripProps) {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof document !== 'undefined') {
      return document.documentElement.classList.contains('dark');
    }
    return true;
  });

  // Keep dark/light theme state synchronized with document class
  useEffect(() => {
    const updateTheme = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };
    updateTheme();

    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  // If logos array is empty, do not render the component
  if (!logos || logos.length === 0) {
    return null;
  }

  // Case study link URL (points to #use-cases section on the landing page)
  const caseStudyUrl = '#use-cases';

  const renderLogoItem = (logo: LogoItem, isMobile: boolean = false) => {
    const imgSrc = !isDark && logo.srcLight ? logo.srcLight : logo.src;
    const imgClass = isMobile ? 'logo-strip-img-mobile' : 'logo-strip-img';

    return (
      <li key={logo.name} className="flex items-center justify-center">
        {logo.url ? (
          <a
            href={logo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="logo-strip-link-wrap inline-flex items-center justify-center p-1"
            title={`${logo.name} (${logo.type === 'partner' ? 'Partner' : 'Klien'})`}
            aria-label={`${logo.name} (${logo.type === 'partner' ? 'Partner' : 'Klien'})`}
          >
            <img
              src={imgSrc}
              alt={logo.name}
              className={imgClass}
              loading="lazy"
            />
          </a>
        ) : (
          <div
            className="inline-flex items-center justify-center p-1"
            title={`${logo.name} (${logo.type === 'partner' ? 'Partner' : 'Klien'})`}
          >
            <img
              src={imgSrc}
              alt={logo.name}
              className={imgClass}
              loading="lazy"
            />
          </div>
        )}
      </li>
    );
  };

  const labelBadge = (
    <div className="logo-strip-chip">
      <span>DIPERCAYA OLEH</span>
    </div>
  );

  const caseStudyLink = caseStudyUrl ? (
    <a href={caseStudyUrl} className="logo-strip-link">
      <span>LIHAT STUDI KASUS</span>
      <span aria-hidden="true" className="inline-block transition-transform duration-150 group-hover:translate-x-0.5">
        →
      </span>
    </a>
  ) : null;

  return (
    <section aria-label="Klien dan partner" className={`logo-strip-section ${className}`}>
      <div className="landing-container">
        {/* Border 1px on top and bottom, spanning full width of container, 24px vertical padding */}
        <div className="logo-strip-container">

          {/* ===== 1. Desktop Layout (>= 1024px): Single unified line ===== */}
          <div className="logo-strip-desktop">
            <div className="flex-shrink-0">{labelBadge}</div>
            <ul role="list" className="logo-strip-desktop-list">
              {logos.map((logo) => renderLogoItem(logo, false))}
            </ul>
            {caseStudyLink && <div className="flex-shrink-0">{caseStudyLink}</div>}
          </div>

          {/* ===== 2. Tablet Layout (768px - 1023px): Label + Link on top, logos below ===== */}
          <div className="logo-strip-tablet">
            <div className="logo-strip-tablet-header">
              {labelBadge}
              {caseStudyLink}
            </div>
            <ul role="list" className="logo-strip-tablet-list">
              {logos.map((logo) => renderLogoItem(logo, false))}
            </ul>
          </div>

          {/* ===== 3. Mobile Layout (< 768px): Label on top, grid of logos, link on bottom ===== */}
          <div className="logo-strip-mobile">
            <div className="flex items-center justify-start">
              {labelBadge}
            </div>
            <ul role="list" className="logo-strip-mobile-grid">
              {logos.map((logo) => renderLogoItem(logo, true))}
            </ul>
            {caseStudyLink && (
              <div className="pt-1 flex items-center justify-start">
                {caseStudyLink}
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
export default LogoStrip;
