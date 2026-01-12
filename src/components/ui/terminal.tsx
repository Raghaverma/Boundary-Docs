"use client"

import * as React from "react"
import { Check, Copy, TerminalIcon } from "lucide-react"
import { cn } from "@/lib/utils"

const PACKAGES = {
    npm: "npm install boundary-sdk",
    pnpm: "pnpm add boundary-sdk",
    yarn: "yarn add boundary-sdk",
}

export function Terminal() {
    const [activeTab, setActiveTab] = React.useState<keyof typeof PACKAGES>("npm")
    const [copied, setCopied] = React.useState(false)

    const handleCopy = async () => {
        await navigator.clipboard.writeText(PACKAGES[activeTab])
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <div className="w-full max-w-lg rounded-lg border border-border bg-[#050505] shadow-2xl overflow-hidden font-mono text-sm relative group">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-[#0a0a0a]">
                <div className="flex gap-2">
                    <div className="size-3 rounded-full bg-red-500/20 border border-red-500/50" />
                    <div className="size-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                    <div className="size-3 rounded-full bg-green-500/20 border border-green-500/50" />
                </div>
                <div className="flex gap-4 text-xs text-muted-foreground">
                    {Object.keys(PACKAGES).map((pkg) => (
                        <button
                            key={pkg}
                            onClick={() => setActiveTab(pkg as keyof typeof PACKAGES)}
                            className={cn(
                                "uppercase tracking-wider hover:text-foreground transition-colors",
                                activeTab === pkg ? "text-accent font-bold" : "opacity-50"
                            )}
                        >
                            {pkg}
                        </button>
                    ))}
                </div>
            </div>

            {/* Content */}
            <div className="p-6 flex items-center justify-between group-hover:bg-accent/[0.02] transition-colors">
                <div className="flex items-center gap-3 text-foreground">
                    <span className="text-accent">$</span>
                    <span className="typing-effect">{PACKAGES[activeTab]}</span>
                </div>
                <button
                    onClick={handleCopy}
                    className="p-2 hover:bg-foreground/10 rounded-md transition-colors text-muted-foreground hover:text-foreground"
                    aria-label="Copy command"
                >
                    {copied ? <Check className="size-4 text-green-500" /> : <Copy className="size-4" />}
                </button>
            </div>
        </div>
    )
}
