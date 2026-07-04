import Hero from "@/components/sections/Hero";
import ClientLogos from "@/components/sections/ClientLogos";
import About from "@/components/sections/About";
import ProjectsGallery from "@/components/sections/ProjectsGallery";
import Services from "@/components/sections/Services";
import Awards from "@/components/sections/Awards";
import Testimonials from "@/components/sections/Testimonials";
import Insights from "@/components/sections/Insights";

export default function Home() {
  return (
    <>
      <Hero />
      <ClientLogos />
      <About />
      <ProjectsGallery />
      <Services />
      <Awards />
      <Testimonials />
      <Insights />
    </>
  );
}
