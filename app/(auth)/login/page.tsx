import { Card } from '../../../components/ui/Card';
import { Button } from '../../../components/ui/Button';

export default function LoginPage() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <Card className="w-full max-w-sm p-8 flex flex-col gap-6">
        <h2 className="text-2xl font-bold text-neon-blue mb-2">Login</h2>
        <form className="flex flex-col gap-4">
          <input className="glass p-3 rounded-xl text-white bg-transparent" placeholder="Username" />
          <input className="glass p-3 rounded-xl text-white bg-transparent" type="password" placeholder="Password" />
          <Button type="submit" className="mt-2">Login</Button>
        </form>
        <a href="/auth/register" className="text-neon-cyan text-sm hover:underline text-center">Don&apos;t have an account? Register</a>
      </Card>
    </div>
  );
}
