import Card from '../components/Card.jsx';
import { member } from '../data/mock.js';

export default function Profile() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Card title="Member Profile">
        <div className="flex items-center gap-4">
          <img src={member.avatar} className="w-16 h-16 rounded-2xl border border-gray-200 dark:border-gray-800" />
          <div>
            <div className="text-xl font-semibold">{member.name}</div>
            <div className="muted text-sm">{member.age} • {member.location}</div>
            <div className="text-sm mt-2"><span className="font-medium">Chronic:</span> {member.chronic}</div>
          </div>
        </div>
      </Card>
      <Card title="Goals">
        <div className="flex flex-wrap gap-2">
          {member.goals.map(g => (
            <span key={g} className="px-3 py-1 rounded-xl bg-green-50 dark:bg-emerald-900/30 text-green-700 dark:text-emerald-300 text-sm">{g}</span>
          ))}
        </div>
      </Card>
      <Card title="Preferences / Constraints">
        <ul className="list-disc list-inside text-sm">
          <li>Travels 1 week every 4 weeks (business)</li>
          <li>Prefers 25–30 min hotel workouts</li>
          <li>Adheres ~50% when plans conflict with travel</li>
        </ul>
      </Card>
    </div>
  );
}
