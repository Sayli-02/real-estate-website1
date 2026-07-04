export default function SectionHeading({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  return (
    <h2 className={`font-display text-5xl md:text-7xl lg:text-[8rem] uppercase tracking-tighter leading-[0.85] ${className}`}>
      {children}
    </h2>
  );
}