import Card from './Card.jsx';
import { adherenceWeeks } from '../data/mock.js';

export default function WeeklyAdherence() {
  return (
    <Card title="Weekly Adherence">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {adherenceWeeks.map(({ week, hours, target }) => {
          const pct = Math.round((hours/target)*100);
          const good = pct >= 100;
          return (
            <div key={week} className="surface p-3">
              <div className="text-xs muted">{week}</div>
              <div className="mt-1 text-xl font-semibold">{hours}h</div>
              <div className={good ? "text-emerald-600 dark:text-emerald-400" : "text-amber-600 dark:text-amber-400"}>{pct}% of target</div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}
