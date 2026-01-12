import Link from "next/link"

import { Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MobileNav } from "@/components/layout/mobile-nav"

export function Header() {
    return (
        <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/50 backdrop-blur-xl supports-[backdrop-filter]:bg-black/20">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 font-bold tracking-tighter text-xl">
                    <span>Boundary</span>
                </Link>

                {/* Navigation */}
                <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
                    <Link href="/docs" className="hover:text-foreground transition-colors">Documentation</Link>
                    <Link href="https://www.npmjs.com/package/boundary-sdk" className="hover:text-foreground transition-colors">NPM</Link>
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-4">
                    <Link href="https://github.com/Raghaverma/Boundary" target="_blank">
                        <Button variant="ghost" size="icon" className="h-9 w-9">
                            <Github className="size-5" />
                        </Button>
                    </Link>
                    <Link href="/docs">
                        <Button variant="outline" className="hidden sm:flex h-9">
                            Get Started
                        </Button>
                    </Link>
                    <MobileNav />
                </div>
            </div>
        </header>
    )
}
