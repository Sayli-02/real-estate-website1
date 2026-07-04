import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button({ children, className = '', ...props }: ButtonProps) {
  return (
    <button
      className={`group flex items-center justify-between gap-6 bg-ink text-white rounded-pill pl-8 pr-2 py-2 font-bold uppercase text-sm tracking-wide transition-all hover:bg-white hover:text-ink hover:scale-[1.02] border border-ink ${className}`}
      {...props}
    >
      <span>{children}</span>
      <div className="w-10 h-10 rounded-full bg-white text-ink flex items-center justify-center transition-colors group-hover:bg-ink group-hover:text-white">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </div>
    </button>
  );
}