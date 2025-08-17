import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard.jsx';
import Chat from './pages/Chat.jsx';
import Journey from './pages/Journey.jsx';
import Decisions from './pages/Decisions.jsx';
import Profile from './pages/Profile.jsx';

export default function RoutesIndex() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/journey" element={<Journey />} />
      <Route path="/decisions" element={<Decisions />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
}
