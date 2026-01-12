"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const textParam = "text-muted-foreground hover:text-foreground"

export const DOCS_NAV = [
    {
        title: "Overview",
        items: [
            { title: "Introduction", href: "/docs" },
            { title: "Installation", href: "/docs/installation" },
            { title: "Usage", href: "/docs/usage" },
        ],
    },
    {
        title: "Core Concepts",
        items: [
            { title: "Normalization", href: "/docs/normalization" },
            { title: "Resilience", href: "/docs/resilience" },
        ],
    },
    {
        title: "Reference",
        items: [
            { title: "API Reference", href: "/docs/api" },
        ],
    },
]

export function DocsSidebar() {
    const pathname = usePathname()

    return (
        <aside className="fixed top-16 z-30 hidden h-[calc(100vh-4rem)] w-full shrink-0 md:sticky md:block md:w-[240px] lg:w-[260px] overflow-y-auto border-r border-white/10 bg-[#0a0a0a] py-8 lg:py-12 pr-6">
            <div className="w-full space-y-6">
                {DOCS_NAV.map((section, index) => (
                    <div key={index} className="space-y-3">
                        <h4 className="px-3 text-xs font-bold tracking-wider text-muted-foreground uppercase">{section.title}</h4>
                        <div className="space-y-1">
                            {section.items.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={cn(
                                        "block rounded-lg px-3 py-2 text-sm transition-all duration-200",
                                        pathname === item.href
                                            ? "font-semibold text-accent bg-accent/10 border border-accent/20 drop-shadow-[0_0_12px_rgba(255,175,0,0.3)]"
                                            : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                                    )}
                                >
                                    {item.title}
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </aside>
    )
}
