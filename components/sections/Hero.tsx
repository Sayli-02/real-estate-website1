"use client";

import Button from "@/components/ui/Button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  
  // Move the title down slower than the page scrolls
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [0.9, 0]);

  return (
    <section ref={ref} className="relative w-full h-screen min-h-[800px] flex items-center justify-center overflow-hidden bg-gray/10">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 z-0 bg-line/5">
        <Image src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80" alt="Modern Architecture Hero" fill className="object-cover opacity-60 mix-blend-multiply" />
      </div>
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-40 h-full flex flex-col justify-between pb-24">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-md"
        >
          <p className="text-xl md:text-2xl font-bold mb-8 leading-snug">
            We build modern, sustainable architecture that shapes the future of living.
          </p>
          <Button>Explore Our Work</Button>
        </motion.div>
        
        {/* Large Overlapping Title with Parallax */}
        <motion.div 
          style={{ y, opacity }}
          className="absolute bottom-[-5%] left-0 w-full px-6 pointer-events-none"
        >
          <h1 className="font-display text-[16vw] leading-[0.75] tracking-tighter text-ink whitespace-nowrap overflow-visible">
            DREAM STUDIO
          </h1>
        </motion.div>
      </div>
    </section>
  );
}