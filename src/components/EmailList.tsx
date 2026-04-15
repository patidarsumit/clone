import { RefreshCw, MoreVertical, ChevronLeft, ChevronRight, Star, Archive, Trash2, MailOpen, Clock, Inbox } from 'lucide-react';
import { motion } from 'motion/react';

const emails = [
  {
    id: 1,
    sender: 'Alex Rivera',
    subject: 'Quarterly Strategy Document',
    snippet: 'Attached you will find the revised roadmap for the next fiscal quarter...',
    time: '10:42 AM',
    unread: false,
    starred: false,
  },
  {
    id: 2,
    sender: 'Curator Analytics',
    subject: 'Your Weekly Insight Report is Ready',
    snippet: 'High engagement detected in your recent shared workspace folders. Check out the...',
    time: '9:15 AM',
    unread: true,
    starred: false,
  },
  {
    id: 3,
    sender: 'Design Systems Weekly',
    subject: 'Fresh Inspiration: Tonal Sophistication',
    snippet: 'Exploring the "No-Line" rule and how to design with light and depth instead of...',
    time: 'Yesterday',
    unread: false,
    starred: true,
    selected: true,
  },
  {
    id: 4,
    sender: 'Jordan Smith',
    subject: 'Lunch & Learn: Accessibility in 2024',
    snippet: "Hey team, let's meet up in the lounge to discuss the latest WCAG updates...",
    time: 'Apr 12',
    unread: false,
    starred: false,
  },
];

interface EmailListProps {
  isCollapsed: boolean;
}

export default function EmailList({ isCollapsed }: EmailListProps) {
  return (
    <main className={`mr-14 flex-1 bg-surface-container-low overflow-y-auto rounded-tl-3xl shadow-inner min-h-screen transition-all duration-300 ${isCollapsed ? 'ml-20' : 'ml-64'}`}>
      {/* Mail Toolbar */}
      <div className="sticky top-0 bg-surface-container-low/95 backdrop-blur-md px-6 py-3 flex items-center justify-between z-30">
        <div className="flex items-center gap-4 text-on-surface-variant">
          <div className="flex items-center gap-2">
            <input type="checkbox" className="rounded border-outline-variant text-primary focus:ring-primary" />
            <ChevronLeft size={14} className="rotate-270 cursor-pointer" />
          </div>
          <button className="p-1.5 hover:bg-surface-container-high rounded-full transition-all">
            <RefreshCw size={18} />
          </button>
          <button className="p-1.5 hover:bg-surface-container-high rounded-full transition-all">
            <MoreVertical size={18} />
          </button>
        </div>
        <div className="flex items-center gap-4 text-xs font-medium text-on-surface-variant">
          <span>1-50 of 2,481</span>
          <div className="flex gap-1">
            <button className="p-1 hover:bg-surface-container-high rounded-full transition-all">
              <ChevronLeft size={16} />
            </button>
            <button className="p-1 hover:bg-surface-container-high rounded-full transition-all">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Email List */}
      <div className="pb-16 px-2">
        <div className="space-y-0.5">
          {emails.map((email) => (
            <div
              key={email.id}
              className={`group flex items-center px-4 py-3 rounded-xl cursor-pointer relative transition-all ${
                email.selected 
                  ? 'bg-primary-fixed' 
                  : 'bg-surface-container-lowest hover:bg-surface-container-high'
              }`}
            >
              <div className="flex items-center gap-3 mr-4 shrink-0">
                <input 
                  type="checkbox" 
                  checked={email.selected}
                  className="rounded border-outline-variant text-primary focus:ring-primary" 
                  onChange={() => {}}
                />
                <Star 
                  size={18} 
                  className={email.starred ? 'text-yellow-500' : 'text-outline'} 
                  fill={email.starred ? 'currentColor' : 'none'}
                />
              </div>
              <div className={`w-48 shrink-0 text-sm truncate ${email.unread ? 'font-bold' : 'font-semibold'}`}>
                {email.sender}
              </div>
              <div className="flex-1 flex items-baseline gap-2 overflow-hidden mr-4">
                <span className={`text-sm truncate ${email.unread ? 'font-bold' : 'font-semibold'}`}>
                  {email.subject}
                </span>
                <span className="text-sm text-on-surface-variant truncate">
                  — {email.snippet}
                </span>
              </div>
              <div className="text-xs font-bold whitespace-nowrap opacity-100 group-hover:opacity-0 transition-opacity">
                {email.time}
              </div>
              
              {/* Hover Actions */}
              <div className="absolute right-6 flex items-center gap-1 opacity-0 group-hover:opacity-100 bg-inherit transition-opacity pl-2">
                <button className="p-2 hover:bg-surface-container-highest rounded-full text-on-surface-variant transition-colors">
                  <Archive size={18} />
                </button>
                <button className="p-2 hover:bg-surface-container-highest rounded-full text-on-surface-variant transition-colors">
                  <Trash2 size={18} />
                </button>
                <button className="p-2 hover:bg-surface-container-highest rounded-full text-on-surface-variant transition-colors">
                  <MailOpen size={18} />
                </button>
                <button className="p-2 hover:bg-surface-container-highest rounded-full text-on-surface-variant transition-colors">
                  <Clock size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Glassmorphism Action Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-4 my-12 p-10 rounded-3xl glass-card relative overflow-hidden group"
        >
          <div className="absolute -right-12 -top-12 w-64 h-64 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors"></div>
          <div className="relative z-10 flex flex-col items-center text-center max-w-md mx-auto">
            <h2 className="text-2xl font-bold font-headline text-on-surface mb-2">Clean Up Your Workspace</h2>
            <p className="text-on-surface-variant mb-6 text-sm">
              You have 124 unread newsletters. Archive them all with one click to reach Inbox Zero.
            </p>
            <button className="bg-primary text-on-primary px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-primary/20 transition-all active:scale-95">
              Clean Inbox
            </button>
          </div>
        </motion.div>

        {/* Empty State Filler */}
        <div className="flex flex-col items-center justify-center py-20 opacity-40">
          <Inbox size={64} className="mb-4" />
          <p className="font-headline text-lg font-bold">You're all caught up!</p>
        </div>
      </div>
    </main>
  );
}
