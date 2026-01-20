import { cn } from '../../lib/utils';

export function Header({ credits = 100, online = 42, className }: { credits?: number; online?: number; className?: string }) {
  return (
    <header className={cn('w-full flex justify-between items-center px-8 py-6', className)}>
      <h1 className="text-3xl font-extrabold tracking-widest text-neon-blue drop-shadow-neon">KIMCARD</h1>
      <div className="flex gap-4">
        <span className="glass px-4 py-1 rounded-xl text-neon-cyan font-semibold text-sm shadow-neon">Credits: {credits}</span>
        <span className="glass px-4 py-1 rounded-xl text-green-400 font-semibold text-sm flex items-center gap-2 shadow-neon">
          <span className="inline-block w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          {online} Online
        </span>
      </div>
    </header>
  );
}
