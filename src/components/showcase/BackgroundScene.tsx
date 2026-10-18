import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
}

export default function BackgroundScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Disable particles on mobile to preserve battery & performance
    const isMobile = window.innerWidth < 768;
    const PARTICLE_COUNT = isMobile ? 0 : 420;
    const MOUSE_REPEL_RADIUS = 130;

    const resize = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const particles: Particle[] = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.22,
      vy: (Math.random() - 0.5) * 0.22,
      size: Math.random() * 1.2 + 0.2,
      opacity: Math.random() * 0.4 + 0.08,
    }));

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', onMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const { x: mx, y: my } = mouseRef.current;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        const dx = p.x - mx;
        const dy = p.y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MOUSE_REPEL_RADIUS && dist > 0) {
          const force = (MOUSE_REPEL_RADIUS - dist) / MOUSE_REPEL_RADIUS;
          p.vx += (dx / dist) * force * 0.28;
          p.vy += (dy / dist) * force * 0.28;
        }
        p.vx *= 0.985;
        p.vy *= 0.985;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(233, 235, 239, ${p.opacity})`;
        ctx.fill();
      }

      // Draw faint proximity connecting lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 70) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(233, 235, 239, ${(1 - dist / 70) * 0.09})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animRef.current = requestAnimationFrame(animate);
    };

    if (PARTICLE_COUNT > 0) {
      animate();
    }

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden select-none bg-[#0B0C0E]">
      {/* Exact Jamie McKaye Ambient Glow & 96px Grid Overlay */}
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          background: [
            'radial-gradient(70rem 26rem at 72% 82%, rgba(233,235,239,0.07), transparent 62%)',
            'radial-gradient(46rem 18rem at 24% 96%, rgba(174,180,189,0.05), transparent 66%)',
            'repeating-linear-gradient(90deg, rgba(244,245,247,0.02) 0 1px, transparent 1px 96px)',
            'repeating-linear-gradient(0deg, rgba(244,245,247,0.016) 0 1px, transparent 1px 96px)',
          ].join(','),
          maskImage: 'radial-gradient(120% 90% at 50% 42%, black 60%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(120% 90% at 50% 42%, black 60%, transparent 100%)',
        }}
      />
      {/* Interactive Canvas Particle Field */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ mixBlendMode: 'screen', opacity: 0.6 }}
      />
    </div>
  );
}
