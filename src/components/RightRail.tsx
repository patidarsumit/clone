import { Calendar, Lightbulb, CheckCircle2, User, Plus } from 'lucide-react';

export default function RightRail() {
  return (
    <aside className="fixed right-0 top-16 h-[calc(100vh-64px)] w-14 bg-surface flex flex-col items-center py-4 gap-6 border-l border-outline-variant/10 z-40">
      <button className="p-2 hover:bg-surface-container-high rounded-full transition-all group" title="Calendar">
        <Calendar size={20} className="text-blue-500 group-hover:scale-110 transition-transform" />
      </button>
      <button className="p-2 hover:bg-surface-container-high rounded-full transition-all group" title="Keep">
        <Lightbulb size={20} className="text-yellow-600 group-hover:scale-110 transition-transform" />
      </button>
      <button className="p-2 hover:bg-surface-container-high rounded-full transition-all group" title="Tasks">
        <CheckCircle2 size={20} className="text-blue-600 group-hover:scale-110 transition-transform" />
      </button>
      <button className="p-2 hover:bg-surface-container-high rounded-full transition-all group" title="Contacts">
        <User size={20} className="text-on-surface-variant group-hover:scale-110 transition-transform" />
      </button>
      
      <div className="w-8 border-t border-outline-variant/20 my-2"></div>
      
      <button className="p-2 hover:bg-surface-container-high rounded-full transition-all group" title="Add-ons">
        <Plus size={20} className="text-outline group-hover:scale-110 transition-transform" />
      </button>
    </aside>
  );
}
