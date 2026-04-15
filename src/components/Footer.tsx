interface FooterProps {
  isCollapsed: boolean;
}

export default function Footer({ isCollapsed }: FooterProps) {
  return (
    <footer className={`fixed bottom-0 right-0 bg-surface-container-low/80 backdrop-blur-sm flex justify-between items-center px-8 py-2 font-sans text-[0.6875rem] uppercase tracking-widest z-30 opacity-80 hover:opacity-100 transition-all duration-300 ${isCollapsed ? 'w-[calc(100%-80px)]' : 'w-[calc(100%-256px)]'}`}>
      <div className="text-on-surface-variant">© 2024 Digital Curator. Editorial-grade productivity.</div>
      <div className="flex gap-6">
        <a href="#" className="text-on-surface-variant hover:text-primary transition-colors">Privacy</a>
        <a href="#" className="text-on-surface-variant hover:text-primary transition-colors">Terms</a>
        <a href="#" className="text-on-surface-variant hover:text-primary transition-colors">Feedback</a>
      </div>
    </footer>
  );
}
