export default function Footer() {
  return (
    <footer className="bg-ink text-white py-16 px-6 mt-auto overflow-hidden relative">
      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h4 className="font-display text-2xl mb-4">Visit</h4>
          <p className="text-white/70">123 Design Avenue<br/>Creative District<br/>New York, NY 10001</p>
        </div>
        <div>
          <h4 className="font-display text-2xl mb-4">Quick Links</h4>
          <div className="flex flex-col gap-2 text-white/70">
            <a href="/about" className="hover:text-white transition-colors">About Us</a>
            <a href="/services" className="hover:text-white transition-colors">Our Services</a>
            <a href="/projects" className="hover:text-white transition-colors">Portfolio</a>
          </div>
        </div>
        <div>
          <h4 className="font-display text-2xl mb-4">Connect</h4>
          <div className="flex flex-col gap-2 text-white/70">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full opacity-10 pointer-events-none select-none overflow-hidden flex justify-center">
        <span className="font-display text-[15vw] leading-none whitespace-nowrap">OPTIK STUDIO</span>
      </div>
    </footer>
  );
}
