import { codeToHtml } from "shiki"
import { cn } from "@/lib/utils"

interface CodeBlockProps {
    code: string
    lang?: string
    filename?: string
    className?: string
}

export async function CodeBlock({ code, lang = "typescript", filename, className }: CodeBlockProps) {
    const html = await codeToHtml(code, {
        lang,
        themes: {
            dark: "github-dark", // Simple dark theme, functional. Or 'vesper', 'nord', etc.
            light: "github-light",
        },
        defaultColor: "dark",
    })

    return (
        <div className={cn("group rounded-lg border border-white/10 overflow-hidden bg-[#111111] transition-colors duration-300 hover:border-accent/50", className)}>
            {filename && (
                <div className="px-4 py-2 bg-white/5 border-b border-white/10 text-xs font-mono text-muted-foreground">
                    {filename}
                </div>
            )}
            <div
                className="p-4 overflow-x-auto text-sm font-mono [&>pre]:!bg-transparent [&>pre]:!p-0"
                dangerouslySetInnerHTML={{ __html: html }}
            />
        </div>
    )
}
