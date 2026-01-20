import { Home, User, Settings } from 'lucide-react';
import { cn } from '../../lib/utils';

const navItems = [
  { label: 'Home', icon: Home, href: '/dashboard' },
  { label: 'Profile', icon: User, href: '/profile' },
  { label: 'Settings', icon: Settings, href: '/settings' },
];

export function BottomNav({ className }: { className?: string }) {
  return (
    <nav className={cn('fixed bottom-4 left-1/2 -translate-x-1/2 z-40 flex bg-glass-bg/80 backdrop-blur-xl rounded-2xl px-8 py-3 shadow-neon border border-glass-border', className)}>
      {navItems.map(({ label, icon: Icon, href }) => (
        <a
          key={label}
          href={href}
          className="flex flex-col items-center mx-4 text-neon-blue hover:text-neon-cyan transition-colors"
        >
          <Icon size={28} />
          <span className="text-xs mt-1 font-medium">{label}</span>
        </a>
      ))}
    </nav>
  );
}
