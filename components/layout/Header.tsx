"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(247, 247, 247, 0)", "rgba(247, 247, 247, 0.9)"]
  );
  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ["blur(0px)", "blur(12px)"]
  );
  const borderColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.1)"]
  );

  return (
    <>
      <motion.header 
        style={{ backgroundColor, backdropFilter: backdropBlur, borderBottomColor: borderColor }}
        className="px-6 py-4 flex justify-between items-center fixed top-0 left-0 w-full z-50 border-b transition-colors duration-300"
      >
        <div className="font-display text-3xl uppercase tracking-tighter">Optik</div>
        
        <nav className="hidden md:flex gap-8 font-bold uppercase text-sm tracking-wide">
          <a href="/" className="hover:text-ink-strong transition-colors">Home</a>
          <a href="/about" className="hover:text-ink-strong transition-colors">About</a>
          <a href="/services" className="hover:text-ink-strong transition-colors">Services</a>
          <a href="/contact" className="hover:text-ink-strong transition-colors">Contact</a>
        </nav>
        
        <div className="flex items-center gap-4 font-bold text-sm">
          <div className="hidden lg:flex items-center gap-4 group cursor-pointer">
            <div className="w-10 h-10 rounded-pill bg-ink text-white flex items-center justify-center group-hover:scale-105 transition-transform">
              <Phone size={16} />
            </div>
            <span>+1 800 555 0000</span>
          </div>
          
          <button 
            className="md:hidden p-2 rounded-full bg-line/10 hover:bg-line/20 transition-colors"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-surface flex flex-col items-center justify-center"
          >
            <button 
              className="absolute top-6 right-6 p-2 rounded-full bg-line/10 hover:bg-line/20 transition-colors"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={32} />
            </button>
            <nav className="flex flex-col gap-8 text-center font-display text-4xl uppercase tracking-wide">
              <a href="/" onClick={() => setIsMenuOpen(false)}>Home</a>
              <a href="/about" onClick={() => setIsMenuOpen(false)}>About</a>
              <a href="/services" onClick={() => setIsMenuOpen(false)}>Services</a>
              <a href="/contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
