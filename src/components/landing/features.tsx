import { Shield, Zap, Globe, Layers } from "lucide-react"

const features = [
    {
        icon: Layers,
        title: "Unified Abstraction",
        description: "Interact with any provider through a consistent interface while maintaining type safety.",
    },
    {
        icon: Shield,
        title: "Resilience Patterns",
        description: "Built-in retries, circuit breakers, and rate limiting handling out of the box.",
    },
    {
        icon: Globe,
        title: "Standardized Responses",
        description: "Consistent error structures and pagination strategies across all integrations.",
    },
    {
        icon: Zap,
        title: "High Performance",
        description: "Minimal overhead with efficient request handling and state management.",
    },
]

export function Features() {
    return (
        <section className="py-32 bg-gradient-to-b from-neutral-900/30 to-black border-t border-white/5">
            <div className="container px-4 md:px-6 lg:px-8 mx-auto">
                <div className="text-center mb-20 space-y-4">
                    <div className="inline-flex items-center rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-xs font-semibold text-accent backdrop-blur-sm">
                        Features
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
                        Built for <span className="text-accent">Industrial Reliability</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Production-grade features that scale with your application
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group relative p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-black to-neutral-900/50 hover:border-accent/40 transition-all duration-300"
                        >
                            <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                            <div className="relative space-y-4">
                                <div className="inline-flex items-center justify-center size-14 rounded-xl bg-neutral-900 border border-white/10 group-hover:bg-accent/10 group-hover:border-accent/20 group-hover:scale-110 transition-all duration-300">
                                    <feature.icon className="size-7 text-white group-hover:text-accent transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                                <p className="text-base text-muted-foreground leading-relaxed">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
