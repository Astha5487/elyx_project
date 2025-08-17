import { kpis, biomarkers, member } from '../data/mock.js';
import Stat from '../components/Stat.jsx';
import BiomarkerBlock from '../components/BiomarkerBlock.jsx';
import WeeklyAdherence from '../components/WeeklyAdherence.jsx';
import PersonaCard from '../components/PersonaCard.jsx';
import MetricsPanel from '../components/MetricsPanel.jsx';
import Card from '../components/Card.jsx';

export default function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {kpis.map((s) => <Stat key={s.label} {...s} />)}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card title={`Welcome back, ${member.name.split(' ')[0]}`}>
            <p className="muted text-sm">
              Your weekly target is <span className="font-medium">{member.hoursCommitment}h</span>. Current adherence is <span className="font-medium">{Math.round(member.adherence * 100)}%</span>.
            </p>
          </Card>
          <WeeklyAdherence />
          <Card title="Key Biomarkers">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {biomarkers.map(b => <BiomarkerBlock key={b.name} {...b} />)}
            </div>
          </Card>
        </div>
        <div className="space-y-6">
          <PersonaCard />
          <MetricsPanel />
        </div>
      </div>
    </div>
  );
}
