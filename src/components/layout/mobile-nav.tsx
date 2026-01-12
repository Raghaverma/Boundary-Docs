"use client"

import * as React from "react"
import Link from "next/link"

import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { DOCS_NAV } from "@/components/docs/sidebar"

export function MobileNav() {
    const [open, setOpen] = React.useState(false)

    React.useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "unset"
        }
    }, [open])

    return (
        <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setOpen(true)}>
                <Menu className="size-6" />
                <span className="sr-only">Toggle Menu</span>
            </Button>

            {/* Overlay */}
            {open && (
                <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm" onClick={() => setOpen(false)} />
            )}

            {/* Drawer */}
            <div
                className={cn(
                    "fixed inset-y-0 right-0 z-50 w-3/4 max-w-sm border-l border-white/10 bg-black p-6 transition-transform duration-300 ease-in-out",
                    open ? "translate-x-0" : "translate-x-full"
                )}
            >
                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-2 font-bold tracking-tighter text-xl">
                        <span>Boundary</span>
                    </div>
                    <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
                        <X className="size-6" />
                    </Button>
                </div>

                <nav className="space-y-6">
                    <div className="space-y-4">
                        <Link href="/" onClick={() => setOpen(false)} className="block text-lg font-medium hover:text-accent">
                            Home
                        </Link>
                        <Link href="https://github.com/Raghaverma/Boundary" onClick={() => setOpen(false)} className="block text-lg font-medium hover:text-accent">
                            GitHub
                        </Link>
                    </div>

                    <div className="border-t border-white/10 pt-6"></div>

                    {DOCS_NAV.map((section, index) => (
                        <div key={index} className="pb-4">
                            <h4 className="mb-2 text-sm font-semibold text-muted-foreground uppercase tracking-wider">{section.title}</h4>
                            <div className="space-y-2">
                                {section.items.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        onClick={() => setOpen(false)}
                                        className="block text-base hover:text-accent transition-colors"
                                    >
                                        {item.title}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </nav>
            </div>
        </div>
    )
}
