import ChatWindow from '../components/ChatWindow.jsx';
import Card from '../components/Card.jsx';

export default function Chat() {
  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <ChatWindow />
      <Card title="Weekly Summary (text-only example)">
        <ul className="list-disc list-inside text-sm">
          <li>Adherence 64% (travel week affected)</li>
          <li>BP trending down; maintain sodium strategy</li>
          <li>Next diagnostics due in 2 weeks</li>
        </ul>
      </Card>
    </div>
  );
}
