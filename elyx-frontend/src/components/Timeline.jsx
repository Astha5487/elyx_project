import Card from './Card.jsx';
import { journeyEvents } from '../data/mock.js';

export default function Timeline({ onSelect }) {
  return (
    <Card title="Journey Timeline">
      <ol className="relative border-l border-gray-200 dark:border-gray-800 ml-2">
        {journeyEvents.map((e) => (
          <li key={e.id} className="mb-6 ml-4">
            <div className="absolute w-3 h-3 bg-indigo-600 rounded-full mt-2 -left-1.5 border border-white dark:border-gray-900"></div>
            <time className="text-xs muted">{e.date}</time>
            <h4 className="text-sm font-semibold mt-1">{e.title}</h4>
            <p className="text-sm mt-1">{e.details}</p>
            <button
              onClick={() => onSelect && onSelect(e)}
              className="mt-2 text-xs link"
            >
              View rationale →
            </button>
          </li>
        ))}
      </ol>
    </Card>
  );
}
