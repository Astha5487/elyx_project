import { useState } from 'react';
import Timeline from '../components/Timeline.jsx';
import RationaleDrawer from '../components/RationaleDrawer.jsx';

export default function Journey() {
  const [selected, setSelected] = useState(null);
  const [open, setOpen] = useState(false);

  return (
    <div className="max-w-5xl mx-auto">
      <Timeline onSelect={(e) => { setSelected(e); setOpen(true); }} />
      <RationaleDrawer open={open} event={selected} onClose={() => setOpen(false)} />
    </div>
  );
}
