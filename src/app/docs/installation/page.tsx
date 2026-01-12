import { CodeBlock } from "@/components/ui/code-block"

export default async function InstallationPage() {
    return (
        <div className="space-y-12">
            <div className="space-y-6">
                <div className="inline-flex items-center rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-xs font-semibold text-accent backdrop-blur-sm">
                    Getting Started
                </div>
                <h1 className="scroll-m-20 text-5xl md:text-6xl font-bold tracking-tight">Installation</h1>
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                    Get started with Boundary in seconds. Install via npm and start building.
                </p>
            </div>

            <div className="space-y-8">
                <div className="space-y-4">
                    <h2 className="text-3xl font-bold">Install with npm</h2>
                    <p className="text-lg text-muted-foreground">
                        Add Boundary to your project using your preferred package manager.
                    </p>
                    <CodeBlock code="npm install boundary-sdk" lang="bash" />
                </div>

                <div className="p-8 rounded-2xl bg-gradient-to-br from-[#111] to-[#0a0a0a] border border-white/10 space-y-4">
                    <h3 className="text-2xl font-bold flex items-center gap-3">
                        <div className="inline-flex items-center justify-center size-10 rounded-lg bg-accent/10 border border-accent/20">
                            <svg className="size-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        Requirements
                    </h3>
                    <ul className="space-y-3 text-lg">
                        <li className="flex items-start gap-3">
                            <span className="inline-flex items-center justify-center size-6 rounded-full bg-accent/10 text-accent text-xs font-bold mt-0.5">✓</span>
                            <span className="text-muted-foreground">
                                <strong className="text-foreground">Node.js ≥18.0.0</strong> - Required for fetch, Headers, AbortController, and crypto.randomUUID
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
