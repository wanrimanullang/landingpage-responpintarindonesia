import { useState } from 'react';
import { CalendarRange, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function DemoPage() {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <main className="pt-20 pb-0 min-h-screen flex flex-col">
            {/* Header */}
            <div className="px-4 sm:px-6 lg:px-8 py-6 border-b border-border bg-card/50 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Link
                            to="/"
                            className="inline-flex items-center gap-2 text-muted-foreground hover:text-[var(--brand-primary)] transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Back to Home
                        </Link>
                    </div>
                    <div className="flex items-center gap-2">
                        <CalendarRange className="w-5 h-5 text-[var(--brand-primary)]" />
                        <h1 className="text-lg font-semibold">Book a Demo</h1>
                    </div>
                    <div className="w-24" />
                </div>
            </div>

            {/* Calendly Embed */}
            <div className="flex-1 w-full relative">
                {/* Loading Overlay */}
                {isLoading && (
                    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-background gap-6">
                        {/* Animated rings */}
                        <div className="relative w-20 h-20">
                            <div
                                className="absolute inset-0 rounded-full border-[3px] border-transparent"
                                style={{
                                    borderTopColor: 'var(--brand-primary)',
                                    animation: 'demo-spin 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite',
                                }}
                            />
                            <div
                                className="absolute inset-[6px] rounded-full border-[3px] border-transparent"
                                style={{
                                    borderTopColor: 'var(--brand-gradient-end)',
                                    animation: 'demo-spin 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite 0.15s',
                                }}
                            />
                            <div
                                className="absolute inset-[12px] rounded-full border-[3px] border-transparent"
                                style={{
                                    borderTopColor: 'var(--brand-primary)',
                                    opacity: 0.5,
                                    animation: 'demo-spin 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite 0.3s',
                                }}
                            />
                            {/* Center icon */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <CalendarRange className="w-6 h-6 text-[var(--brand-primary)]" style={{ animation: 'demo-pulse 2s ease-in-out infinite' }} />
                            </div>
                        </div>

                        {/* Text */}
                        <div className="text-center space-y-2">
                            <p className="text-lg font-medium text-foreground">Preparing your booking</p>
                            <p className="text-sm text-muted-foreground">Loading schedule&hellip;</p>
                        </div>

                        {/* Shimmer bar */}
                        <div className="w-48 h-1 rounded-full bg-border overflow-hidden">
                            <div
                                className="h-full rounded-full"
                                style={{
                                    background: 'linear-gradient(90deg, var(--brand-gradient-start), var(--brand-gradient-end))',
                                    animation: 'demo-shimmer 1.5s ease-in-out infinite',
                                }}
                            />
                        </div>
                    </div>
                )}

                <iframe
                    src="https://calendly.com/wanriparasians/konsultasi-omnichannel"
                    title="Book a Demo - Calendly"
                    className="w-full h-full border-0"
                    style={{
                        minHeight: 'calc(100vh - 8rem)',
                        opacity: isLoading ? 0 : 1,
                        transition: 'opacity 0.5s ease-in-out',
                    }}
                    loading="lazy"
                    allow="payment"
                    onLoad={() => setIsLoading(false)}
                />
            </div>

            {/* Keyframe animations */}
            <style>{`
        @keyframes demo-spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes demo-pulse {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.1); }
        }
        @keyframes demo-shimmer {
          0% { width: 0%; margin-left: 0%; }
          50% { width: 100%; margin-left: 0%; }
          100% { width: 0%; margin-left: 100%; }
        }
      `}</style>
        </main>
    );
}
