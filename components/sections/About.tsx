import SectionHeading from "@/components/ui/SectionHeading";
import StatCounter from "@/components/ui/StatCounter";

export default function About() {
  return (
    <section className="py-24 md:py-40 bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">
        <div>
          <SectionHeading className="mb-12">We are<br/>Optik</SectionHeading>
          <p className="text-xl md:text-2xl font-bold text-ink-strong mb-12 max-w-lg leading-snug">
            A collective of visionary architects, designers, and urban planners dedicated to creating spaces that inspire and endure. We blur the line between nature and structure.
          </p>
          <a href="/about" className="group inline-flex items-center gap-4 font-bold uppercase tracking-widest text-sm hover:opacity-70 transition-opacity">
            More About Us 
            <span className="w-10 h-10 rounded-full border border-line flex items-center justify-center group-hover:bg-ink group-hover:text-white transition-colors">→</span>
          </a>
          
          <div className="mt-24 flex flex-wrap gap-12 md:gap-24">
            <StatCounter value="17" label="Years Exp" />
            <StatCounter value="67+" label="Team Members" />
            <StatCounter value="1M+" label="Sqft Built" />
          </div>
        </div>
        
        <div className="relative">
          <div className="aspect-[3/4] w-[85%] ml-auto bg-line/10 rounded-[2rem] overflow-hidden relative">
            <div className="absolute inset-0 bg-gray/10"></div>
          </div>
          <div className="aspect-square w-[55%] absolute bottom-[-10%] left-[-5%] bg-dark-alt rounded-[2rem] overflow-hidden border-[12px] border-surface">
            <div className="absolute inset-0 bg-gray/30"></div>
          </div>
          <div className="absolute top-[40%] right-[5%] w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-xl text-2xl">
            ⤢
          </div>
        </div>
      </div>
    </section>
  );
}