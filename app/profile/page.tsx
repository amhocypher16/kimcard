import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';

export default function ProfilePage() {
  return (
    <div className="w-full max-w-md flex flex-col gap-8 mt-8 items-center">
      <Card className="flex flex-col items-center p-8">
        <img src="/avatar.png" alt="User Avatar" className="w-24 h-24 rounded-full border-4 border-neon-blue mb-4" />
        <h2 className="text-2xl font-bold text-neon-blue mb-2">@username</h2>
        <span className="glass px-4 py-1 rounded-xl text-neon-cyan font-semibold text-sm mb-2">Plan: Free</span>
        <div className="flex gap-6 mt-4">
          <div className="flex flex-col items-center">
            <span className="text-neon-blue text-lg font-bold">120</span>
            <span className="text-xs">Total Actions</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-green-400 text-lg font-bold">45</span>
            <span className="text-xs">Total Hits</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-neon-cyan text-lg font-bold">30</span>
            <span className="text-xs">Total Live</span>
          </div>
        </div>
        <Button className="mt-6 w-full">Logout</Button>
      </Card>
    </div>
  );
}
