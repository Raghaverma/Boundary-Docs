import { CodeBlock } from "@/components/ui/code-block"

export default async function UsagePage() {
    return (
        <div className="space-y-12">
            <div className="space-y-6">
                <div className="inline-flex items-center rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-xs font-semibold text-accent backdrop-blur-sm">
                    Guide
                </div>
                <h1 className="scroll-m-20 text-5xl md:text-6xl font-bold tracking-tight">Usage</h1>
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                    Learn how to initialize and use the Boundary SDK in your applications.
                </p>
            </div>

            <div className="space-y-8">
                <div className="relative p-6 rounded-2xl border-2 border-amber-500/30 bg-gradient-to-br from-amber-500/10 to-orange-500/5">
                    <div className="flex gap-4">
                        <div className="flex-shrink-0">
                            <div className="inline-flex items-center justify-center size-10 rounded-lg bg-amber-500/20 border border-amber-500/30">
                                <svg className="size-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                </svg>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-xl font-bold text-amber-500">IMPORTANT</h3>
                            <p className="text-base text-amber-400/90 leading-relaxed">
                                Boundary requires async initialization. Always use <code className="px-2 py-1 rounded bg-black/40 border border-amber-500/20 text-amber-400">Boundary.create()</code>.
                                Never use <code className="px-2 py-1 rounded bg-black/40 border border-amber-500/20 text-amber-400">new Boundary()</code> - the constructor is private and will fail.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold">Basic Initialization</h2>
                        <p className="text-lg text-muted-foreground">
                            Initialize Boundary with your provider configuration for local development.
                        </p>
                    </div>
                    <CodeBlock
                        code={`import { Boundary } from "boundary-sdk";

// ✅ CORRECT: Async initialization
const boundary = await Boundary.create({
  github: {
    auth: {
      token: process.env.GITHUB_TOKEN
    },
  },
  localUnsafe: true, // Required for local development without StateStorage
});

const { data, meta } = await boundary.github.get("/users/octocat");
console.log(meta.rateLimit.remaining);`}
                        filename="index.ts"
                    />
                </div>

                <div className="space-y-6 pt-4">
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold">Production Deployment</h2>
                        <p className="text-lg text-muted-foreground">
                            For distributed deployments, you must provide a StateStorage implementation for shared state management.
                        </p>
                    </div>
                    <CodeBlock
                        code={`import { Boundary } from "boundary-sdk";
import { RedisStateStorage } from "./your-redis-storage.js";

const boundary = await Boundary.create({
  mode: "distributed",
  stateStorage: new RedisStateStorage(redisClient),
  github: {
    auth: { token: process.env.GITHUB_TOKEN },
  },
});`}
                        filename="production.ts"
                    />
                </div>
            </div>
        </div>
    )
}
