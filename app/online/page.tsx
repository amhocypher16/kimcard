import { Card } from '../../components/ui/Card';

const users = [
  { username: 'cyberking', online: true },
  { username: 'neonqueen', online: true },
  { username: 'glassguy', online: true },
  { username: 'shadow', online: false },
];

export default function OnlinePage() {
  return (
    <div className="w-full max-w-md flex flex-col gap-8 mt-8">
      <Card>
        <h2 className="text-xl font-bold text-neon-blue mb-4">Online Users</h2>
        <ul className="flex flex-col gap-3">
          {users.filter(u => u.online).map(u => (
            <li key={u.username} className="flex items-center gap-3">
              <span className="inline-block w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-white font-medium">{u.username}</span>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}
