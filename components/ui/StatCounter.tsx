"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

export default function StatCounter({ value, label }: { value: string, label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  const numMatch = value.match(/(\d+)(.*)/);
  const target = numMatch ? parseInt(numMatch[1], 10) : 0;
  const suffix = numMatch ? numMatch[2] : "";
  
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 2000, bounce: 0 });
  const [display, setDisplay] = useState("0" + suffix);
  
  useEffect(() => {
    if (isInView) {
      motionValue.set(target);
    }
  }, [isInView, target, motionValue]);
  
  useEffect(() => {
    return springValue.on("change", (latest) => {
      setDisplay(Math.floor(latest) + suffix);
    });
  }, [springValue, suffix]);

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="flex flex-col"
    >
      <span className="font-display text-6xl md:text-8xl leading-none">{display}</span>
      <span className="text-ink-strong uppercase font-bold text-sm tracking-widest mt-4">{label}</span>
    </motion.div>
  );
}