"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { Terminal } from "@/components/ui/terminal"
import { Button } from "@/components/ui/button"
import Link from "next/link"

gsap.registerPlugin(ScrollTrigger)

export function Hero() {
    const containerRef = useRef<HTMLDivElement>(null)
    const textRef = useRef<HTMLDivElement>(null)
    const terminalRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

        tl.from(textRef.current!.children, {
            y: 100,
            opacity: 0,
            duration: 1,
            stagger: 0.1,
        })
            .from(terminalRef.current, {
                y: 50,
                opacity: 0,
                duration: 1,
                scale: 0.95,
            }, "-=0.5")

        gsap.to(containerRef.current, {
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "bottom top",
                scrub: true
            },
            y: 100,
            opacity: 0
        })

    }, { scope: containerRef })

    return (
        <section ref={containerRef} className="relative pt-32 pb-16 md:pt-48 md:pb-32 overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

            <div className="container px-4 mx-auto relative z-10 grid gap-12 lg:grid-cols-2 items-center">
                {/* Text Content */}
                <div ref={textRef} className="space-y-6">
                    <div className="inline-flex items-center rounded-full border border-accent/20 bg-accent/5 px-3 py-1 text-sm font-medium text-accent backdrop-blur-sm">
                        v2.0.1 Now Available
                    </div>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white">
                        <span className="block text-accent">Unified API</span>
                        Interactions
                    </h1>
                    <p className="text-xl text-neutral-400 max-w-lg">
                        Standardize third-party API interactions with unified typing and predictable response shapes.
                        One interface, any provider.
                    </p>
                    <div className="flex gap-4">
                        <Link href="/docs">
                            <Button size="lg" className="h-12 px-8 text-base">
                                Get Started
                            </Button>
                        </Link>
                        <Link href="https://github.com/Raghaverma/Boundary" target="_blank">
                            <Button variant="outline" size="lg" className="h-12 px-8 text-base">
                                View on GitHub
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Terminal Hook */}
                <div ref={terminalRef} className="w-full max-w-lg mx-auto lg:mr-0">
                    <Terminal />
                </div>
            </div>
        </section>
    )
}
