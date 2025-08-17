import ProgressBar from './ProgressBar.jsx';

export default function BiomarkerBlock({ name, unit, current, target, range }) {
  const min = range[0], max = range[1];
  const normalized = Math.min(100, Math.max(0, ((max - current) / (max - min)) * 100));
  const towardTarget = Math.min(100, Math.max(0, ((max - target) / (max - min)) * 100));
  const good = current <= target;

  return (
    <div className="surface p-4">
      <div className="flex items-center justify-between">
        <div>
          <div className="font-medium">{name}</div>
          <div className="text-xs muted">Ref: {min}-{max} {unit}</div>
        </div>
        <div className="text-right">
          <div className="text-lg font-semibold">{current} {unit}</div>
          <div className="text-xs muted">Target: {target} {unit}</div>
        </div>
      </div>
      <div className="mt-3">
        <ProgressBar value={normalized} max={100} />
        <div className="text-xs mt-1">
          {good ? <span className="text-emerald-600 dark:text-emerald-400">On track</span> :
                  <span className="text-amber-600 dark:text-amber-400">Needs work</span>}
          <span className="ml-2 muted">(closer to 100% is better)</span>
        </div>
      </div>
      <div className="mt-2 text-xs muted">Target index: {Math.round(towardTarget)}%</div>
    </div>
  );
}
