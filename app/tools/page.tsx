import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { useState } from 'react';

export default function ToolsPage() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState<string[]>([]);

  function handleCheck() {
    setResult([
      'Key1: Success',
      'Key2: Failed',
      'Key3: Success',
    ]);
  }

  return (
    <div className="w-full max-w-xl flex flex-col gap-8 mt-8">
      <Card>
        <label className="block mb-2 text-neon-blue font-semibold">Keys Checker</label>
        <textarea
          className="glass w-full h-24 p-3 rounded-xl text-white mb-4"
          placeholder="Paste keys here..."
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <Button onClick={handleCheck}>Check Keys</Button>
        <div className="mt-4 flex flex-col gap-2">
          {result.map((r, i) => (
            <span key={i} className={r.includes('Success') ? 'text-green-400' : 'text-red-400'}>
              {r}
            </span>
          ))}
        </div>
      </Card>
    </div>
  );
}
