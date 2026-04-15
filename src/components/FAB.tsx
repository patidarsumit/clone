import { MessageSquarePlus } from 'lucide-react';

export default function FAB() {
  return (
    <div className="fixed bottom-8 right-20 z-50">
      <button className="flex items-center justify-center w-14 h-14 rounded-2xl bg-surface-container-lowest shadow-xl hover:shadow-2xl transition-all border border-outline-variant/10 text-primary group active:scale-90">
        <MessageSquarePlus size={24} className="group-hover:scale-110 transition-transform" />
      </button>
    </div>
  );
}
