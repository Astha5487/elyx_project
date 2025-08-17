import Card from './Card.jsx';
import { opsMetrics } from '../data/mock.js';

export default function MetricsPanel() {
  const m = opsMetrics;
  return (
    <Card title="Internal Ops Metrics" action={<div className="text-xs muted">Updated {m.lastUpdated}</div>}>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="surface p-4">
          <div className="text-sm muted">Doctor Hours</div>
          <div className="text-2xl font-semibold">{m.doctorHours}</div>
        </div>
        <div className="surface p-4">
          <div className="text-sm muted">Coach Hours</div>
          <div className="text-2xl font-semibold">{m.coachHours}</div>
        </div>
        <div className="surface p-4">
          <div className="text-sm muted">Specialist Hours</div>
          <div className="text-2xl font-semibold">{m.specialistHours}</div>
        </div>
        <div className="surface p-4">
          <div className="text-sm muted">Consults</div>
          <div className="text-2xl font-semibold">{m.consults}</div>
        </div>
      </div>
    </Card>
  );
}
