export default function ClientLogos() {
  return (
    <section className="bg-dark text-white py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-between items-center gap-12 opacity-50 grayscale">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="text-2xl md:text-3xl font-display uppercase tracking-widest">
              Brand {i}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}