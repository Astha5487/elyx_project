import { useState } from 'react';
import Card from './Card.jsx';
import { messages } from '../data/mock.js';

export default function ChatWindow() {
  const [list, setList] = useState(messages);
  const [input, setInput] = useState('');

  const send = () => {
    if (!input.trim()) return;
    setList(prev => [...prev, { from: 'member', text: input.trim(), at: new Date().toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'}) }]);
    setInput('');
    // mock Elyx auto-reply after a second (frontend only)
    setTimeout(() => {
      setList(prev => [...prev, { from: 'coach', text: 'Noted! Logging this and adjusting plan for travel days ✈️', at: new Date().toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'}) }]);
    }, 800);
  };

  return (
    <Card title="Conversation">
      <div className="h-[480px] overflow-y-auto space-y-3 p-2 bg-gray-100 dark:bg-gray-900 rounded-xl">
        {list.map((m, i) => (
          <div key={i} className={`max-w-[75%] p-3 rounded-2xl ${m.from === 'member'
            ? 'ml-auto bg-indigo-600 text-white'
            : 'bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800'
          }`}>
            <div className="text-sm">{m.text}</div>
            <div className="text-[10px] opacity-70 mt-1">{m.from === 'member' ? 'You' : 'Elyx'} • {m.at}</div>
          </div>
        ))}
      </div>
      <div className="mt-3 flex gap-2">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && send()}
          placeholder="Type a message…"
          className="flex-1 px-3 py-2 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900"
        />
        <button onClick={send} className="px-4 py-2 rounded-xl bg-indigo-600 text-white">Send</button>
      </div>
    </Card>
  );
}
