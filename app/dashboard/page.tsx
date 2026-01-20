import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { useState } from 'react';

export default function DashboardPage() {
  const [status, setStatus] = useState<'idle' | 'running'>('idle');
  const [approved, setApproved] = useState(12);
  const [live, setLive] = useState(8);
  const [dead, setDead] = useState(4);

  return (
    <div className="w-full max-w-3xl flex flex-col gap-8 mt-8">
      <div className="flex gap-4 mb-4">
        <Button onClick={() => setStatus('running')} disabled={status === 'running'}>Start</Button>
        <Button onClick={() => setStatus('idle')} disabled={status === 'idle'}>Stop</Button>
      </div>
      <Card className="mb-4">
        <textarea
          className="w-full h-32 glass p-4 text-lg text-white placeholder:text-neon-blue rounded-xl resize-none focus:outline-none"
          placeholder="Paste your data here..."
        />
      </Card>
      <div className="flex gap-6 justify-center">
        <Card className="flex flex-col items-center w-32">
          <span className="text-neon-cyan text-2xl font-bold">{approved}</span>
          <span className="text-sm mt-1">Approved</span>
        </Card>
        <Card className="flex flex-col items-center w-32">
          <span className="text-green-400 text-2xl font-bold">{live}</span>
          <span className="text-sm mt-1">Live</span>
        </Card>
        <Card className="flex flex-col items-center w-32">
          <span className="text-red-400 text-2xl font-bold">{dead}</span>
          <span className="text-sm mt-1">Dead</span>
        </Card>
      </div>
    </div>
  );
}
