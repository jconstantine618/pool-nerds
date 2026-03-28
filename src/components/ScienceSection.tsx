import { FlaskConical } from "lucide-react";

export default function ScienceSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-pool-dark via-pool-medium to-pool-light text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-pool-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-pool-gold/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight">
            Our nerds get the science behind the water.
          </h2>
          <p className="text-pool-wave text-lg mb-8">
            We will build personalized treatment programs based on your water
            sample analysis. Every pool is different — your treatment should be too.
          </p>
          <a
            href="/calculator"
            className="inline-block bg-pool-accent hover:bg-pool-glow text-white font-bold px-8 py-3 rounded-full transition"
          >
            Trust The Nerds
          </a>
        </div>
        <div className="flex justify-center">
          <div className="relative w-72 h-72">
            <div className="absolute inset-0 bg-pool-accent/20 rounded-full animate-pulse" />
            <div className="absolute inset-8 bg-pool-accent/30 rounded-full" />
            <div className="absolute inset-0 flex items-center justify-center">
              <FlaskConical size={100} className="text-pool-accent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
