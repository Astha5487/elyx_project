export default function ProgressBar({ value = 0, max = 100, showLabel = true }) {
  const pct = Math.max(0, Math.min(100, (value / max) * 100));
  return (
    <div>
      <div className="w-full h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
        <div className="h-full bg-indigo-600 dark:bg-indigo-500" style={{ width: `${pct}%` }} />
      </div>
      {showLabel && <div className="text-xs mt-1 muted">{Math.round(pct)}%</div>}
    </div>
  );
}
