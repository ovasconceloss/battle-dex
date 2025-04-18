export const Footer: React.FC = () => {
    return (
        <footer className="w-full py-6 bg-zinc-900 border-t border-zinc-500">
            <div className="px-10 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
                <div className="flex flex-col items-center md:items-start">
                    <h1 className="text-xl font-bold text-zinc-100">BattleDex</h1>
                    <p className="text-sm text-zinc-200">© 2025 BattleDex. All rights reserved.</p>
                </div>
                <nav className="flex space-x-6">
                    <a href="/" className="text-sm text-zinc-200 hover:text-zinc-500 transition-all">
                        Home
                    </a>
                    <a href="/pokedex" className="text-sm text-zinc-200 hover:text-zinc-500 transition-all">
                        Pokédex
                    </a>
                    <a href="#" className="text-sm text-zinc-200 hover:text-zinc-500 transition-all">
                        About
                    </a>
                    <a href="#" className="text-sm text-zinc-200 hover:text-zinc-500 transition-all">
                        Contact
                    </a>
                </nav>
            </div>
        </footer>
    );
};