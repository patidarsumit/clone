import { PenLine, Inbox, Star, Send, File, AlertCircle, Tag } from 'lucide-react';

const navItems = [
  { icon: Inbox, label: 'Inbox', count: '2,481', active: true },
  { icon: Star, label: 'Starred', active: false },
  { icon: Send, label: 'Sent', active: false },
  { icon: File, label: 'Drafts', active: false },
  { icon: AlertCircle, label: 'Spam', active: false },
];

const labels = [
  { color: 'text-blue-500', label: 'Work' },
  { color: 'text-tertiary-container', label: 'Urgent' },
];

interface SidebarProps {
  isCollapsed: boolean;
}

export default function Sidebar({ isCollapsed }: SidebarProps) {
  return (
    <aside className={`fixed left-0 top-16 h-[calc(100vh-64px)] bg-surface flex flex-col py-4 z-40 transition-all duration-300 ${isCollapsed ? 'w-20' : 'w-64 pr-4'}`}>
      <div className={`px-4 mb-6 transition-all duration-300 ${isCollapsed ? 'flex justify-center' : ''}`}>
        <button className={`flex items-center gap-4 text-on-tertiary rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 font-semibold compose-btn-gradient group ${isCollapsed ? 'p-4' : 'px-6 py-4'}`}>
          <PenLine size={20} />
          {!isCollapsed && <span>Compose</span>}
        </button>
      </div>

      <nav className="flex-1 space-y-1">
        {navItems.map((item) => (
          <a
            key={item.label}
            href="#"
            title={isCollapsed ? item.label : undefined}
            className={`flex items-center gap-4 px-6 py-2 rounded-r-full transition-all duration-200 ${
              item.active 
                ? 'bg-primary-fixed text-on-primary-fixed font-semibold' 
                : 'text-on-surface-variant hover:bg-surface-container-high'
            } ${isCollapsed ? 'justify-center px-0' : ''}`}
          >
            <item.icon size={18} fill={item.active ? 'currentColor' : 'none'} />
            {!isCollapsed && (
              <>
                <span className="flex-1">{item.label}</span>
                {item.count && <span className="text-xs">{item.count}</span>}
              </>
            )}
          </a>
        ))}
      </nav>

      <div className="mt-auto border-t border-outline-variant/20 pt-4 space-y-1">
        {!isCollapsed && <p className="px-6 text-[0.6875rem] font-bold text-outline uppercase tracking-widest mb-2">Labels</p>}
        {labels.map((label) => (
          <a
            key={label.label}
            href="#"
            title={isCollapsed ? label.label : undefined}
            className={`flex items-center gap-4 px-6 py-2 text-on-surface-variant hover:bg-surface-container-high rounded-r-full transition-all duration-200 ${isCollapsed ? 'justify-center px-0' : ''}`}
          >
            <Tag size={18} className={label.color} fill="currentColor" />
            {!isCollapsed && <span>{label.label}</span>}
          </a>
        ))}
      </div>
    </aside>
  );
}
