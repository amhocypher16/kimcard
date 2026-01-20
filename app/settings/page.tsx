import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';

export default function SettingsPage() {
  return (
    <div className="w-full max-w-md flex flex-col gap-8 mt-8">
      <Card>
        <h2 className="text-xl font-bold text-neon-blue mb-4">Settings</h2>
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <span className="text-neon-cyan">Theme</span>
            <Button disabled>Dark Only</Button>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-neon-cyan">Proxy Settings</span>
            <Button disabled>Disabled</Button>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-neon-cyan">Gate Selector</span>
            <Button disabled>Payment Gateway</Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
