export default function FinalCTA() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-pool-dark leading-tight mb-6">
          Trust the nerds to help you conquer your pool so you can have
          crystal-clear water all year long.
        </h2>
        <p className="text-gray-500 text-lg mb-10 max-w-2xl mx-auto">
          An unbalanced pool, full of algae and cloudy water, can be
          embarrassing, uninspiring, and unusable. At Pool Nerds, we use science
          and data to give your pool the treatment it deserves, so you can get
          back to enjoying it.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/shop"
            className="inline-block bg-pool-accent hover:bg-pool-glow text-white font-bold text-lg px-10 py-4 rounded-full shadow-xl transition"
          >
            Get Your Instant Quote
          </a>
          <a
            href="#about"
            className="inline-block border-2 border-pool-dark text-pool-dark hover:bg-pool-dark hover:text-white font-bold text-lg px-10 py-4 rounded-full transition"
          >
            More About Us
          </a>
        </div>
      </div>
    </section>
  );
}
