import { Button } from "@/components/ui/button";

export const Header: React.FC = () => {
    return (
        <header className="w-full">
            <div className="px-10 py-5 flex items-center justify-between">
                <h1 className="text-2xl font-bold text-zinc-800 cursor-pointer transition-all ease-in-out
                hover:scale-105">BattleDex</h1>
                <nav className="hidden md:flex items-center space-x-6">
                    <Button
                        variant="ghost"
                        className="w-32 flex items-center space-x-2 text-center text-md cursor-pointer text-zinc-600 hover:text-zinc-900">
                        <span>Home</span>
                    </Button>
                    <Button
                        variant="ghost"
                        className="w-32 flex items-center space-x-2 text-center text-md cursor-pointer text-zinc-600 hover:text-zinc-900">
                        <span>Pokédex</span>
                    </Button>
                    <Button
                        variant="ghost"
                        className="w-32 flex items-center space-x-2 text-center text-md cursor-pointer text-zinc-600 hover:text-zinc-900">
                        <span>About</span>
                    </Button>
                </nav>
                <div className="flex items-center space-x-4">
                    <Button
                        variant="ghost"
                        className="w-32 flex items-center space-x-2 text-center text-md cursor-pointer text-zinc-600 hover:text-zinc-900">
                        <span>Profile</span>
                    </Button>
                </div>
            </div>
        </header>
    );
};