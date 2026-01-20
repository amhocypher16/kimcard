import { Card } from '../../components/ui/Card';
import { Crown } from 'lucide-react';

const users = [
  { username: 'cyberking', score: 1200 },
  { username: 'neonqueen', score: 1100 },
  { username: 'glassguy', score: 950 },
];

export default function RankingsPage() {
  return (
    <div className="w-full max-w-lg flex flex-col gap-8 mt-8">
      <Card>
        <h2 className="text-xl font-bold text-neon-blue mb-4">Top Users Leaderboard</h2>
        <ul className="flex flex-col gap-4">
          {users.map((u, i) => (
            <li key={u.username} className="flex items-center gap-4">
              <span className="text-2xl font-bold text-neon-cyan w-8 text-center">{i + 1}</span>
              <span className="text-lg font-semibold text-white">{u.username}</span>
              <span className="ml-auto text-neon-blue font-bold">{u.score}</span>
              {i === 0 && <Crown className="text-yellow-400 ml-2" size={24} />}
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}
