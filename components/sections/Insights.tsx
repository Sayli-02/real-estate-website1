"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import TagPill from "@/components/ui/TagPill";
import Button from "@/components/ui/Button";
import { posts } from "@/content/posts";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Insights() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section className="py-24 md:py-40 bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <div ref={ref} className="relative h-[500px] mb-32 flex items-center justify-center">
          <motion.div style={{ y }} className="absolute z-10 w-full pointer-events-none">
            <SectionHeading className="text-[11vw] text-center whitespace-nowrap mix-blend-difference text-white">
              INSIGHTS & NEWS
            </SectionHeading>
          </motion.div>
          <div className="absolute w-full md:w-[60%] h-full bg-line/20 rounded-[3rem] overflow-hidden z-0 flex items-center justify-center">
            <div className="absolute inset-0 bg-gray/30"></div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div>
            <div className="font-bold uppercase tracking-widest text-sm text-ink-strong mb-4">Latest Thoughts</div>
            <h2 className="font-display text-5xl md:text-6xl tracking-tight">From The Studio</h2>
          </div>
          <Button>View All Articles</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <div key={i} className="group cursor-pointer flex flex-col">
              <div className={`w-full bg-line/10 rounded-2xl mb-8 overflow-hidden relative ${post.height}`}>
                <div className="absolute inset-0 bg-gray/10 group-hover:scale-105 transition-transform duration-700"></div>
              </div>
              <div className="flex gap-4 items-center mb-6">
                <TagPill outline>{post.category}</TagPill>
                <span className="text-xs font-bold text-ink-strong uppercase tracking-widest">{post.date}</span>
              </div>
              <h3 className="font-display text-4xl group-hover:text-ink-strong transition-colors leading-[1.1]">{post.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}