import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { useState } from 'react';

const options = [
  'Inbuilt CVV',
  'Checkout CVV',
  'Inbuilt CCN',
];

export default function AutohittersPage() {
  const [selected, setSelected] = useState(options[0]);
  const [status, setStatus] = useState({
    hits: 10,
    live: 7,
    dead: 3,
  });

  return (
    <div className="w-full max-w-2xl flex flex-col gap-8 mt-8">
      <Card>
        <label className="block mb-2 text-neon-blue font-semibold">Select Type</label>
        <select
          className="glass w-full p-3 rounded-xl text-lg bg-transparent text-white"
          value={selected}
          onChange={e => setSelected(e.target.value)}
        >
          {options.map(opt => (
            <option key={opt} value={opt} className="bg-glass-bg text-neon-blue">{opt}</option>
          ))}
        </select>
      </Card>
      <div className="flex gap-6">
        <Card className="flex-1">
          <label className="block mb-2 text-neon-cyan font-semibold">Configuration</label>
          <input className="glass w-full p-2 rounded-xl mb-2 bg-transparent text-white" placeholder="Config 1" disabled />
          <input className="glass w-full p-2 rounded-xl mb-2 bg-transparent text-white" placeholder="Config 2" disabled />
        </Card>
        <Card className="flex-1">
          <label className="block mb-2 text-neon-cyan font-semibold">Status</label>
          <div className="flex flex-col gap-2">
            <span className="text-neon-blue">Hits: {status.hits}</span>
            <span className="text-green-400">Live: {status.live}</span>
            <span className="text-red-400">Dead: {status.dead}</span>
          </div>
        </Card>
      </div>
    </div>
  );
}
