import { Menu, Search, SlidersHorizontal, HelpCircle, Settings, Grid, Mail } from 'lucide-react';

interface TopNavProps {
  onMenuClick: () => void;
}

export default function TopNav({ onMenuClick }: TopNavProps) {
  return (
    <header className="fixed top-0 w-full z-50 bg-surface flex items-center justify-between px-6 h-16 font-headline font-medium">
      <div className="flex items-center gap-4">
        <button 
          onClick={onMenuClick}
          className="p-2 text-on-surface-variant hover:bg-surface-container-high rounded-full transition-colors"
        >
          <Menu size={20} />
        </button>
        <div className="flex items-center gap-2">
          <Mail className="text-primary" size={24} fill="currentColor" />
          <span className="text-xl font-bold text-slate-900">The Digital Curator</span>
        </div>
      </div>

      <div className="flex-1 max-w-2xl px-8">
        <div className="relative flex items-center bg-surface-container-highest rounded-xl px-4 py-2 focus-within:bg-surface-container-lowest focus-within:shadow-sm transition-all">
          <Search className="text-outline" size={18} />
          <input 
            type="text" 
            placeholder="Search mail" 
            className="bg-transparent border-none focus:ring-0 w-full text-sm placeholder-outline px-3"
          />
          <SlidersHorizontal className="text-outline" size={18} />
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button className="p-2 text-on-surface-variant hover:bg-surface-container-high transition-colors rounded-full">
          <HelpCircle size={20} />
        </button>
        <button className="p-2 text-on-surface-variant hover:bg-surface-container-high transition-colors rounded-full">
          <Settings size={20} />
        </button>
        <button className="p-2 text-on-surface-variant hover:bg-surface-container-high transition-colors rounded-full">
          <Grid size={20} />
        </button>
        <div className="ml-2 w-8 h-8 rounded-full overflow-hidden bg-primary-fixed flex items-center justify-center border border-outline-variant/20">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_JXptKiUcy1k8NRsGDSVeZIvXXHBgvf_S1S_M_Q2s_9y5-0ndQB4HzKiIY9pK8sH4e0ssyvOHW7Hcad_I9kVDtaNbCvaa7Q_QdD9VJZwsBj6iViyEKklmC2HzS28Ca56IYwFGOB3lb8qDhDyYzLrtYq5drlM19T0aMRw1uXAXSOAj15gXVREvd8spqx3RaJ4AuB9BcvAdPtVbYSP_moFi9lOv6QH6M3ZABFI0iP_GihFRHxzogUXiVfkQ1LAwtuff0t9dQzedc59X" 
            alt="User profile" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </header>
  );
}
