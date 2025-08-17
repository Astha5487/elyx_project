import Card from '../components/Card.jsx';
import { journeyEvents } from '../data/mock.js';

export default function Decisions() {
  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <Card title="Decision Registry">
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="text-left border-b border-gray-200 dark:border-gray-800">
                <th className="py-2 pr-4">Date</th>
                <th className="py-2 pr-4">Type</th>
                <th className="py-2 pr-4">Title</th>
                <th className="py-2">Reason (summary)</th>
              </tr>
            </thead>
            <tbody>
              {journeyEvents.map(e => (
                <tr key={e.id} className="border-b border-gray-100 dark:border-gray-800">
                  <td className="py-2 pr-4">{e.date}</td>
                  <td className="py-2 pr-4 capitalize">{e.type}</td>
                  <td className="py-2 pr-4">{e.title}</td>
                  <td className="py-2">{e.rationale?.[0]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
      <Card title="Audit Trail Notes">
        <ul className="list-disc list-inside text-sm">
          <li>Every diagnostic/therapy/plan change links to originating messages or metrics.</li>
          <li>Quarterly diagnostic cadence enforced (every ~3 months).</li>
          <li>Exercise updates every 2 weeks based on progress/adherence.</li>
        </ul>
      </Card>
    </div>
  );
}
