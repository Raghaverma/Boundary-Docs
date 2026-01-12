export default function DocsPage() {
    return (
        <div className="space-y-12">
            <div className="space-y-6">
                <div className="inline-flex items-center rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-xs font-semibold text-accent backdrop-blur-sm">
                    Documentation
                </div>
                <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-foreground">Introduction</h1>
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                    Boundary is a TypeScript SDK designed for <span className="text-accent font-semibold">data normalization</span> and <span className="text-accent font-semibold">resilience</span>.
                    It standardizes third-party API interactions with unified typing and predictable response shapes.
                </p>
            </div>

            <div className="space-y-8">
                <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-[#111] to-[#0a0a0a] border border-white/10 hover:border-accent/30 transition-all duration-300">
                    <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                    <div className="relative space-y-4">
                        <h2 className="text-3xl font-bold text-white">Why Boundary?</h2>
                        <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                            <p>
                                Applications integrating multiple third-party APIs face inconsistent response formats, error structures, rate limit behaviors, and pagination strategies.
                            </p>
                            <p>
                                This fragmentation requires provider-specific error handling, retry logic, and data transformation code that is difficult to maintain and test. Boundary provides a single abstraction layer that normalizes these differences.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="group relative p-8 rounded-2xl border border-white/10 bg-black hover:border-accent/40 transition-all duration-300">
                        <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                        <div className="relative space-y-3">
                            <div className="inline-flex items-center justify-center size-12 rounded-xl bg-accent/10 border border-accent/20">
                                <svg className="size-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7C5 4 4 5 4 7z M8 10h8 M8 14h5" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-white">Normalization</h3>
                            <p className="text-base text-muted-foreground leading-relaxed">Interact with any provider through a consistent interface.</p>
                        </div>
                    </div>
                    <div className="group relative p-8 rounded-2xl border border-white/10 bg-black hover:border-accent/40 transition-all duration-300">
                        <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                        <div className="relative space-y-3">
                            <div className="inline-flex items-center justify-center size-12 rounded-xl bg-accent/10 border border-accent/20">
                                <svg className="size-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-white">Resilience</h3>
                            <p className="text-base text-muted-foreground leading-relaxed">Smart retries, circuit breakers, and rate limiting baked in.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
