export default function TagPill({ children, outline = false }: { children: React.ReactNode, outline?: boolean }) {
  return (
    <span className={`inline-flex items-center justify-center rounded-pill px-4 py-1.5 text-xs font-bold uppercase tracking-widest whitespace-nowrap ${
      outline ? 'border border-line text-ink' : 'bg-line/20 text-ink'
    }`}>
      {children}
    </span>
  );
}