import SectionHeading from "@/components/ui/SectionHeading";
import { awards } from "@/content/awards";

export default function Awards() {

  return (
    <section className="py-24 md:py-40 bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="relative">
          <div className="aspect-[4/5] w-[75%] bg-line/10 rounded-[2rem] overflow-hidden relative">
            <div className="absolute inset-0 bg-gray/10"></div>
          </div>
          <div className="aspect-square w-[55%] absolute bottom-[-10%] right-[-5%] bg-line/20 rounded-[2rem] border-[12px] border-surface overflow-hidden">
             <div className="absolute inset-0 bg-gray/20"></div>
          </div>
          
          <div className="absolute top-10 right-[10%] w-32 h-32 rounded-full bg-ink text-white flex flex-col items-center justify-center text-center p-4 transform rotate-12 shadow-2xl">
            <span className="font-display text-5xl leading-none">17</span>
            <span className="uppercase text-[9px] font-bold tracking-widest mt-1">Years of<br/>Excellence</span>
          </div>
        </div>

        <div>
          <SectionHeading className="mb-16">Awards &<br/>Recognition</SectionHeading>
          
          <div className="border-t border-line mb-16">
            {awards.map((award, i) => (
              <div key={i} className="group border-b border-line py-8 flex flex-col md:flex-row justify-between md:items-center gap-4 hover:px-4 transition-all -mx-4 px-4 cursor-pointer">
                <div className="font-display text-3xl flex-1 group-hover:translate-x-2 transition-transform">{award.name}</div>
                <div className="flex gap-8 items-center group-hover:-translate-x-2 transition-transform">
                  <span className="text-xs font-bold uppercase tracking-widest text-ink-strong">{award.category}</span>
                  <span className="font-display text-xl">{award.year}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="relative pl-8 border-l-4 border-ink">
            <p className="text-xl md:text-2xl font-bold italic text-ink-strong mb-6 leading-snug">
              "Great architecture is not just about building walls, but about framing life."
            </p>
            <div className="font-display text-3xl opacity-30">John Doe</div>
          </div>
        </div>
      </div>
    </section>
  );
}