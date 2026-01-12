export default function ResiliencePage() {
    return (
        <div className="space-y-12">
            <div className="space-y-6">
                <div className="inline-flex items-center rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-xs font-semibold text-accent backdrop-blur-sm">
                    Core Concept
                </div>
                <h1 className="scroll-m-20 text-5xl md:text-6xl font-bold tracking-tight">Fault Tolerance Patterns</h1>
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                    Boundary handles network instability and service failures so your application doesn't have to.
                </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
                <div className="group relative p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-[#111] to-[#0a0a0a] hover:border-accent/40 transition-all duration-300">
                    <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                    <div className="relative space-y-4">
                        <div className="inline-flex items-center justify-center size-14 rounded-xl bg-accent/10 border border-accent/20">
                            <svg className="size-7 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-accent">Retries</h3>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Automatic exponential backoff for 5xx and 429 errors with intelligent retry strategies.
                        </p>
                    </div>
                </div>

                <div className="group relative p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-[#111] to-[#0a0a0a] hover:border-accent/40 transition-all duration-300">
                    <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                    <div className="relative space-y-4">
                        <div className="inline-flex items-center justify-center size-14 rounded-xl bg-accent/10 border border-accent/20">
                            <svg className="size-7 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-accent">Circuit Breakers</h3>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Prevents cascading failures by isolating and protecting failing services automatically.
                        </p>
                    </div>
                </div>

                <div className="group relative p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-[#111] to-[#0a0a0a] hover:border-accent/40 transition-all duration-300">
                    <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                    <div className="relative space-y-4">
                        <div className="inline-flex items-center justify-center size-14 rounded-xl bg-accent/10 border border-accent/20">
                            <svg className="size-7 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-accent">Fallbacks</h3>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Return cached or default data gracefully when the network is down or services are unavailable.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
