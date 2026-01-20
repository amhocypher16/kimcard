import { Card } from '../../components/ui/Card';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const stats = [
  { label: 'Total Users', value: 320 },
  { label: 'Hit Rate', value: '78%' },
  { label: 'Global Avg', value: '65%' },
];

const lineData = [
  { name: 'Jan', value: 30 },
  { name: 'Feb', value: 50 },
  { name: 'Mar', value: 80 },
  { name: 'Apr', value: 60 },
  { name: 'May', value: 90 },
];

const donutData = [
  { name: 'Live', value: 60, color: '#00ffd0' },
  { name: 'Dead', value: 40, color: '#a259ff' },
];

export default function StatisticsPage() {
  return (
    <div className="w-full max-w-3xl flex flex-col gap-8 mt-8">
      <div className="flex gap-6">
        {stats.map(s => (
          <Card key={s.label} className="flex-1 flex flex-col items-center">
            <span className="text-neon-blue text-2xl font-bold">{s.value}</span>
            <span className="text-sm mt-1">{s.label}</span>
          </Card>
        ))}
      </div>
      <div className="flex gap-6">
        <Card className="flex-1">
          <h3 className="text-neon-cyan font-semibold mb-2">Line Graph</h3>
          <ResponsiveContainer width="100%" height={180}>
            <LineChart data={lineData}>
              <XAxis dataKey="name" stroke="#00eaff" />
              <YAxis stroke="#00eaff" />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#00ffd0" strokeWidth={3} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </Card>
        <Card className="flex-1">
          <h3 className="text-neon-cyan font-semibold mb-2">Donut Chart</h3>
          <ResponsiveContainer width="100%" height={180}>
            <PieChart>
              <Pie
                data={donutData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={70}
                fill="#00ffd0"
                label
              >
                {donutData.map((entry, idx) => (
                  <Cell key={`cell-${idx}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </Card>
      </div>
    </div>
  );
}
