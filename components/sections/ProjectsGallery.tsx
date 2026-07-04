import SectionHeading from "@/components/ui/SectionHeading";
import { projects } from "@/content/projects";

export default function ProjectsGallery() {

  return (
    <section className="py-24 bg-surface">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <SectionHeading>Selected<br/>Works</SectionHeading>
          <a href="/projects" className="group inline-flex items-center gap-4 font-bold uppercase tracking-widest text-sm hover:opacity-70 transition-opacity mb-4">
            View All Projects 
            <span className="w-10 h-10 rounded-full border border-line flex items-center justify-center group-hover:bg-ink group-hover:text-white transition-colors">→</span>
          </a>
        </div>
        
        <div className="grid grid-cols-12 gap-6">
          {projects.map((project, i) => (
            <div key={i} className={`relative group overflow-hidden rounded-[2rem] bg-line/10 ${project.span} ${project.height}`}>
              <div className="absolute inset-0 bg-gray/10 group-hover:scale-105 transition-transform duration-700"></div>
              
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-pill text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-ink"></span>
                {project.location}
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                <h3 className="font-display text-4xl text-white drop-shadow-md">{project.title}</h3>
                <a href={`/projects/${project.slug}`} className="w-14 h-14 rounded-full bg-white text-ink flex items-center justify-center hover:scale-110 transition-transform flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}