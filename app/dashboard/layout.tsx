import { Header } from '../components/ui/Header';
import { BottomNav } from '../components/ui/BottomNav';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1 flex flex-col items-center justify-center w-full">
        {children}
      </div>
      <BottomNav />
    </div>
  );
}
