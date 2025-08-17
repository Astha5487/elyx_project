import cn from '../utils/classnames.js';

export default function Stat({ label, value, delta, good }) {
  return (
    <div className="surface p-4">
      <div className="text-sm muted">{label}</div>
      <div className="mt-1 text-2xl font-semibold">{value}</div>
      <div className={cn("mt-2 text-sm font-medium",
        good ? "text-emerald-600 dark:text-emerald-400" : "text-rose-600 dark:text-rose-400")}>
        {good ? '▲' : '▼'} {delta}
      </div>
    </div>
  );
}
