"use client";

import { testimonials } from "@/content/testimonials";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="py-24 md:py-32 bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-[3rem] p-8 md:p-16 flex flex-col lg:flex-row gap-12 lg:gap-24 items-center shadow-sm">
          <div className="w-full lg:w-[45%] aspect-[3/4] bg-line/10 rounded-[2rem] overflow-hidden flex-shrink-0 relative">
            <div className="absolute inset-0 bg-gray/10"></div>
          </div>
          
          <div className="flex-1 w-full overflow-hidden focus:outline-none focus:ring-2 focus:ring-ink focus:ring-offset-8 rounded-xl" ref={emblaRef} tabIndex={0} aria-label="Testimonials carousel">
            <div className="flex">
              {testimonials.map((testimonial, i) => (
                <div key={i} className="flex-[0_0_100%] min-w-0 py-8 pl-4 pr-4 md:pr-0">
                  <div className="flex gap-2 mb-10 text-2xl text-ink">
                    {"★".repeat(testimonial.rating)}
                  </div>
                  <h3 className="font-display text-4xl md:text-5xl lg:text-5xl mb-16 leading-[1.1] tracking-tight">
                    "{testimonial.quote}"
                  </h3>
                  
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
                    <div className="flex items-center gap-6">
                      <div className="w-16 h-16 rounded-full bg-line/20"></div>
                      <div>
                        <div className="font-bold uppercase tracking-widest text-sm mb-1">{testimonial.author}</div>
                        <div className="text-ink-strong text-xs uppercase tracking-widest">{testimonial.role}</div>
                      </div>
                    </div>
                    
                    <div className="flex gap-4 mt-4 md:mt-0">
                      <button onClick={scrollPrev} className="w-14 h-14 rounded-full border border-line flex items-center justify-center hover:bg-ink hover:text-white transition-colors">
                        <ArrowLeft size={20} />
                      </button>
                      <button onClick={scrollNext} className="w-14 h-14 rounded-full bg-ink text-white flex items-center justify-center hover:scale-105 transition-transform">
                        <ArrowRight size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}