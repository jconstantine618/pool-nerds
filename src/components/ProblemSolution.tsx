import { CheckCircle } from "lucide-react";

export default function ProblemSolution() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        {/* Problem side */}
        <div>
          <div className="rounded-3xl bg-gradient-to-br from-pool-dark to-pool-medium p-10 text-white">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
              An unbalanced pool can be embarrassing and hard to enjoy.
            </h2>
            <p className="text-pool-wave text-lg mb-8">
              We bet past pool-saving attempts have left you frustrated and stuck
              with murky, uninviting water.
            </p>
            <a
              href="/shop"
              className="inline-block bg-pool-accent hover:bg-pool-glow text-white font-bold px-8 py-3 rounded-full transition"
            >
              Get Your Instant Quote
            </a>
          </div>
        </div>

        {/* Solution side */}
        <div className="space-y-8">
          <div className="flex items-start gap-4">
            <CheckCircle className="text-pool-accent mt-1 shrink-0" size={28} />
            <div>
              <h3 className="text-xl font-bold text-pool-dark mb-1">
                Take pride in a crystal-clear, sparkling pool.
              </h3>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <CheckCircle className="text-pool-accent mt-1 shrink-0" size={28} />
            <div>
              <h3 className="text-xl font-bold text-pool-dark mb-1">
                Custom treatments engineered for your water chemistry.
              </h3>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <CheckCircle className="text-pool-accent mt-1 shrink-0" size={28} />
            <div>
              <h3 className="text-xl font-bold text-pool-dark mb-1">
                Work with a trusted company that geeks out over pools.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
