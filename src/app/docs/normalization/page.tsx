import { CodeBlock } from "@/components/ui/code-block"

export default async function NormalizationPage() {
    const comparisonCode = `// Without Boundary
const userA = await apiA.fetchUser(); // { user_id: "123" }
const userB = await apiB.fetchUser(); // { id: "456" }

// With Boundary
const userA = await boundary.users.get("123"); // { id: "123" }
const userB = await boundary.users.get("456"); // { id: "456" }`

    return (
        <div className="space-y-12">
            <div className="space-y-6">
                <div className="inline-flex items-center rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-xs font-semibold text-accent backdrop-blur-sm">
                    Core Concept
                </div>
                <h1 className="scroll-m-20 text-5xl md:text-6xl font-bold tracking-tight">Zero-Latency Normalization</h1>
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                    Boundary removes the need for "glue code" by enforcing a strict schema on API inputs/outputs.
                </p>
            </div>

            <div className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="group relative p-8 rounded-2xl border border-red-500/30 bg-gradient-to-br from-red-500/10 to-red-500/5">
                        <div className="absolute inset-0 bg-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                        <div className="relative space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="inline-flex items-center justify-center size-10 rounded-lg bg-red-500/20 border border-red-500/30">
                                    <svg className="size-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </div>
                                <h2 className="text-2xl font-bold text-red-400">The Problem</h2>
                            </div>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                API A returns <code className="px-2 py-1 rounded bg-black/40 border border-red-500/20 text-red-400">&#123; user_id &#125;</code>,
                                API B returns <code className="px-2 py-1 rounded bg-black/40 border border-red-500/20 text-red-400">&#123; id &#125;</code>.
                                This fragmentation breaks apps.
                            </p>
                        </div>
                    </div>

                    <div className="group relative p-8 rounded-2xl border border-green-500/30 bg-gradient-to-br from-green-500/10 to-green-500/5">
                        <div className="absolute inset-0 bg-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                        <div className="relative space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="inline-flex items-center justify-center size-10 rounded-lg bg-green-500/20 border border-green-500/30">
                                    <svg className="size-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h2 className="text-2xl font-bold text-green-400">The Solution</h2>
                            </div>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Boundary standardizes these into a single, predictable interface with consistent type safety.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="space-y-4">
                    <h3 className="text-2xl font-bold">Code Comparison</h3>
                    <CodeBlock
                        code={comparisonCode}
                        lang="typescript"
                        filename="normalization_demo.ts"
                    />
                </div>
            </div>
        </div>
    )
}
