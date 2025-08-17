export default function RationaleDrawer({ open, onClose, event }) {
  if (!open || !event) return null;
  return (
    <div className="fixed inset-0 z-40">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="absolute right-0 top-0 h-full w-full max-w-md surface p-6 overflow-y-auto">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Decision Rationale</h3>
          <button onClick={onClose} className="text-sm px-3 py-1 rounded-lg border border-gray-200 dark:border-gray-800">Close</button>
        </div>
        <div className="text-sm muted">{event.date}</div>
        <div className="text-xl font-semibold">{event.title}</div>
        <p className="mt-2">{event.details}</p>
        <div className="mt-4">
          <div className="text-sm font-medium mb-2">Why this decision?</div>
          <ul className="list-disc list-inside space-y-1 text-sm">
            {event.rationale?.map((r, i) => <li key={i}>{r}</li>)}
          </ul>
        </div>
        <div className="mt-6">
          <div className="text-sm font-medium mb-2">Trace-back</div>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>Related chat snippets and reports (mock): “Late dinners on travel ↑ BP”</li>
            <li>Diagnostics alignment: Quarterly Panel #1 scheduled & reviewed</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
