import SectionHeading from "@/components/ui/SectionHeading";
import { services } from "@/content/services";

export default function Services() {

  return (
    <section className="py-24 md:py-40 bg-dark text-white rounded-t-[3rem] -mt-12 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <div>
            <SectionHeading className="mb-8">Our<br/>Expertise</SectionHeading>
            <p className="text-xl md:text-2xl text-white/70 max-w-md font-bold leading-snug">
              We approach every project with a holistic mindset, ensuring that structure, interior, and environment work in perfect harmony.
            </p>
          </div>
          <div className="flex items-end justify-start lg:justify-end">
            <div className="flex items-center gap-6 bg-white/10 backdrop-blur-md p-6 rounded-full pr-12 border border-white/10">
              <div className="w-16 h-16 rounded-full bg-white/20"></div>
              <div>
                <div className="font-bold uppercase tracking-widest text-sm mb-1">Jane Doe</div>
                <div className="text-white/60 text-xs uppercase tracking-widest">Lead Architect</div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20">
          {services.map((service, i) => (
            <div key={i} className="group border-b border-white/20 py-12 flex flex-col md:flex-row items-start md:items-center gap-8 hover:bg-white/5 transition-colors px-6 -mx-6 rounded-2xl cursor-pointer">
              <div className="font-display text-4xl text-white/30 group-hover:text-white transition-colors w-16">
                {service.num}
              </div>
              <div className="flex-1">
                <h3 className="font-display text-4xl md:text-5xl mb-3 group-hover:translate-x-2 transition-transform">{service.title}</h3>
                <p className="text-white/60 text-lg max-w-md group-hover:translate-x-2 transition-transform">{service.desc}</p>
              </div>
              <div className="flex flex-wrap gap-3">
                {service.tags.map(tag => (
                  <span key={tag} className="px-4 py-2 rounded-pill border border-white/30 text-xs font-bold uppercase tracking-widest">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="w-14 h-14 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:text-dark transition-all transform group-hover:-rotate-45 md:ml-auto">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}