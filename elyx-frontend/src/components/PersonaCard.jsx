import Card from './Card.jsx';
import { member } from '../data/mock.js';

export default function PersonaCard() {
  const p = member.persona;
  return (
    <Card title="Persona" className="h-full">
      <div className="space-y-3">
        <div>
          <div className="text-sm muted mb-1">Archetype</div>
          <div className="font-semibold">{p.archetype}</div>
        </div>
        <div>
          <div className="text-sm muted mb-1">Traits</div>
          <div className="flex flex-wrap gap-2">
            {p.traits.map(t => (
              <span key={t} className="px-2 py-1 rounded-lg bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-xs">{t}</span>
            ))}
          </div>
        </div>
        <div>
          <div className="text-sm muted mb-1">Risks</div>
          <ul className="list-disc list-inside text-sm">
            {p.risks.map(r => <li key={r}>{r}</li>)}
          </ul>
        </div>
        <div>
          <div className="text-sm muted mb-1">Motivators</div>
          <ul className="list-disc list-inside text-sm">
            {p.motivators.map(m => <li key={m}>{m}</li>)}
          </ul>
        </div>
      </div>
    </Card>
  );
}
