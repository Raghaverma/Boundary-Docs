import { CodeBlock } from "@/components/ui/code-block"

export default async function ApiPage() {
    return (
        <div className="space-y-12">
            <div className="space-y-6">
                <div className="inline-flex items-center rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-xs font-semibold text-accent backdrop-blur-sm">
                    Reference
                </div>
                <h1 className="scroll-m-20 text-5xl md:text-6xl font-bold tracking-tight">API Reference</h1>
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                    Detailed breakdown of classes, methods, and type definitions.
                </p>
            </div>

            <div className="space-y-10">
                <section className="space-y-6">
                    <div className="flex items-center gap-3 pb-3 border-b border-accent/20">
                        <div className="inline-flex items-center justify-center size-10 rounded-lg bg-accent/10 border border-accent/20">
                            <svg className="size-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <h2 className="text-3xl font-bold">Boundary Class</h2>
                    </div>

                    <div className="space-y-6">
                        <div className="p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-[#111] to-[#0a0a0a] space-y-3">
                            <div className="font-mono text-sm bg-black/50 p-4 rounded-lg border border-accent/20 text-accent overflow-x-auto">
                                static create(config: BoundaryConfig, adapters?: Map): Promise&lt;Boundary&gt;
                            </div>
                            <p className="text-lg text-muted-foreground">Creates and initializes a new Boundary instance with the provided configuration.</p>
                        </div>

                        <div className="p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-[#111] to-[#0a0a0a] space-y-3">
                            <div className="font-mono text-sm bg-black/50 p-4 rounded-lg border border-accent/20 text-accent overflow-x-auto">
                                getCircuitStatus(provider: string): CircuitBreakerStatus | null
                            </div>
                            <p className="text-lg text-muted-foreground">Returns the current status of the circuit breaker for a specific provider.</p>
                        </div>
                    </div>
                </section>

                <section className="space-y-6">
                    <div className="flex items-center gap-3 pb-3 border-b border-accent/20">
                        <div className="inline-flex items-center justify-center size-10 rounded-lg bg-accent/10 border border-accent/20">
                            <svg className="size-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                            </svg>
                        </div>
                        <h2 className="text-3xl font-bold">Provider Client</h2>
                    </div>
                    <p className="text-lg text-muted-foreground">Each configured provider exposes a client with the following HTTP methods:</p>

                    <div className="grid gap-4">
                        {[
                            "get<T>(endpoint: string, options?: RequestOptions): Promise<NormalizedResponse<T>>",
                            "post<T>(endpoint: string, options?: RequestOptions): Promise<NormalizedResponse<T>>",
                            "put<T>(endpoint: string, options?: RequestOptions): Promise<NormalizedResponse<T>>",
                            "delete<T>(endpoint: string, options?: RequestOptions): Promise<NormalizedResponse<T>>",
                            "paginate<T>(endpoint: string, options?: RequestOptions): AsyncGenerator<NormalizedResponse<T>>"
                        ].map((method) => (
                            <div key={method} className="p-4 rounded-xl border border-white/10 bg-gradient-to-r from-[#111] to-[#0a0a0a] hover:border-accent/30 transition-all duration-200">
                                <div className="font-mono text-sm bg-black/50 p-3 rounded-lg text-accent overflow-x-auto">
                                    {method}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    )
}
