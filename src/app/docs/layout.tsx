import { DocsSidebar } from "@/components/docs/sidebar"

export default function DocsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="container mx-auto flex-1 items-start md:grid md:grid-cols-[240px_minmax(0,1fr)] md:gap-8 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-12 px-4 md:px-6 lg:px-8">
            <DocsSidebar />
            <main className="relative py-8 lg:py-12 xl:grid xl:grid-cols-[1fr_200px]">
                <div className="mx-auto w-full min-w-0 max-w-4xl">
                    {children}
                </div>
            </main>
        </div>
    )
}
