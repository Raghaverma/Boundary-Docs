export function Footer() {
    return (
        <footer className="border-t border-white/10 bg-black py-12 text-sm text-neutral-400">
            <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 md:flex-row">
                <p>&copy; {new Date().getFullYear()} Boundary. All rights reserved.</p>
                <div className="flex gap-6">
                    <a href="https://github.com/Raghaverma/Boundary" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
                    <a href="https://www.npmjs.com/package/boundary-sdk" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">NPM</a>
                </div>
            </div>
        </footer>
    )
}
