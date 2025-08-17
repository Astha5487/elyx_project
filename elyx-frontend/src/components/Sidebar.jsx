import { NavLink } from 'react-router-dom';
import { LayoutDashboard, MessageSquare, Route, Stethoscope, User } from 'lucide-react';
import cn from '../utils/classnames.js';
import { X } from 'lucide-react';

const items = [
  { to: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/chat', label: 'Chat', icon: MessageSquare },
  { to: '/journey', label: 'Journey', icon: Route },
  { to: '/decisions', label: 'Decisions', icon: Stethoscope },
  { to: '/profile', label: 'Profile', icon: User },
];

export default function Sidebar({ isOpen, onClose }) {
  return (
    <aside
      className={cn(
        "fixed md:static inset-y-0 left-0 z-40 w-64 h-full border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 transform transition-transform duration-300",
        isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
      )}
    >
      <div className="p-4 flex items-center justify-between md:block">
        <div className="text-xs uppercase text-gray-500 dark:text-gray-400 font-semibold mb-2 md:mb-4 tracking-wider">
          Member Panel
        </div>
        <button
          onClick={onClose}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <X size={20} />
        </button>
      </div>

      {/* Navigation */}
      <nav className="space-y-1 px-2">
        {items.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 px-3 py-2 rounded-xl transition-colors duration-200",
                isActive
                  ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-sm"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              )
            }
          >
            <Icon size={18} />
            <span className="text-sm font-medium">{label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
