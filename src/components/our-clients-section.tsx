"use client";

const clients = [
    { name: "Bali Resort Tangerang", logo: "/our-clients/bali resort tangerang - our clients.png" },
    { name: "Geriya Selaras", logo: "/our-clients/geriya selaras - our clients.png" },
    { name: "Kesuma Agung Selaras", logo: "/our-clients/kesuma agung selaras - our clients.png" },
    { name: "MAS Group", logo: "/our-clients/mas group - our clients.png" },
    { name: "Naputa", logo: "/our-clients/naputa - our clients.png" },
    { name: "Sagara", logo: "/our-clients/sagara - our clients.png" },
    { name: "The Crest", logo: "/our-clients/the crest - our clients.png" },
    { name: "Vista Residence", logo: "/our-clients/vista residence - our clients.png" },
];

export function OurClientsSection() {
    return (
        <section id="our-clients" className="py-20 relative overflow-hidden">
            {/* Subtle background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--brand-primary)]/[0.03] to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider uppercase rounded-full bg-[var(--brand-primary)]/10 text-[var(--brand-primary)] mb-4">
                        Trusted Partners
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Trusted by{" "}
                        <span className="bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] bg-clip-text text-transparent">
                            Leading Companies
                        </span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        Join the many companies that have entrusted their customer service to ResponPintar
                    </p>
                </div>

                {/* Client Logo Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                    {clients.map((client, index) => (
                        <div
                            key={client.name}
                            className="group relative"
                            style={{ animationDelay: `${index * 80}ms` }}
                        >
                            <div className="relative bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl p-6 flex items-center justify-center h-32 transition-all duration-500 hover:border-[var(--brand-primary)]/30 hover:shadow-lg hover:shadow-[var(--brand-primary)]/5 hover:-translate-y-1 hover:bg-card">
                                {/* Hover glow effect */}
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[var(--brand-primary)]/0 to-[var(--brand-gradient-end)]/0 group-hover:from-[var(--brand-primary)]/[0.04] group-hover:to-[var(--brand-gradient-end)]/[0.04] transition-all duration-500" />

                                <img
                                    src={client.logo}
                                    alt={client.name}
                                    className="max-h-16 max-w-[140px] w-auto h-auto object-contain filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                                    loading="lazy"
                                />
                            </div>

                            {/* Client name tooltip */}
                            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 translate-y-full opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-10">
                                <div className="bg-foreground text-background text-xs font-medium px-3 py-1.5 rounded-lg whitespace-nowrap shadow-xl">
                                    {client.name}
                                    <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-foreground rotate-45" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom decorative line */}
                <div className="mt-16 flex items-center justify-center gap-4">
                    <div className="h-px flex-1 max-w-[200px] bg-gradient-to-r from-transparent to-border" />
                    <p className="text-sm text-muted-foreground font-medium">
                        And many more
                    </p>
                    <div className="h-px flex-1 max-w-[200px] bg-gradient-to-l from-transparent to-border" />
                </div>
            </div>
        </section>
    );
}
