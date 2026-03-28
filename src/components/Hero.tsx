/* eslint-disable @next/next/no-img-element */
export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-pool-dark via-pool-medium to-pool-light overflow-hidden">
      {/* Hexagon pattern overlays (matching Grass Nerds molecular style) */}
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none">
        <svg className="absolute top-10 left-0 w-48 h-48" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polygon points="50,5 93,25 93,75 50,95 7,75 7,25" stroke="white" strokeWidth="1.5" />
          <polygon points="50,20 78,35 78,65 50,80 22,65 22,35" stroke="white" strokeWidth="1" />
        </svg>
        <svg className="absolute top-20 left-24 w-32 h-32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polygon points="50,5 93,25 93,75 50,95 7,75 7,25" stroke="white" strokeWidth="1.5" />
        </svg>
        <svg className="absolute top-40 right-0 w-56 h-56" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polygon points="50,5 93,25 93,75 50,95 7,75 7,25" stroke="white" strokeWidth="1.5" />
          <polygon points="50,20 78,35 78,65 50,80 22,65 22,35" stroke="white" strokeWidth="1" />
        </svg>
        <svg className="absolute bottom-20 right-16 w-40 h-40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polygon points="50,5 93,25 93,75 50,95 7,75 7,25" stroke="white" strokeWidth="1.5" />
        </svg>
      </div>

      {/* Chemical formula floaters */}
      <div className="absolute inset-0 opacity-10 pointer-events-none font-mono text-white text-xl font-bold">
        <span className="absolute top-28 left-8">H₂O</span>
        <span className="absolute top-16 right-12">Cl₂</span>
        <span className="absolute bottom-32 left-16">pH 7.4</span>
        <span className="absolute top-1/3 right-8">NaOCl</span>
      </div>

      {/* Animated water effect */}
      <div className="absolute inset-0 opacity-10">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#4dd0e1"
            d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,138.7C672,128,768,160,864,181.3C960,203,1056,213,1152,197.3C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          >
            <animate
              attributeName="d"
              dur="10s"
              repeatCount="indefinite"
              values="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,138.7C672,128,768,160,864,181.3C960,203,1056,213,1152,197.3C1248,181,1344,139,1392,117.3L1440,96L1440,320L0,320Z;M0,128L48,149.3C96,171,192,213,288,218.7C384,224,480,192,576,176C672,160,768,160,864,170.7C960,181,1056,203,1152,208C1248,213,1344,203,1392,197.3L1440,192L1440,320L0,320Z;M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,138.7C672,128,768,160,864,181.3C960,203,1056,213,1152,197.3C1248,181,1344,139,1392,117.3L1440,96L1440,320L0,320Z"
            />
          </path>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 pt-32 pb-20 flex flex-col md:flex-row items-center gap-8">
        {/* Ned mascot - visible on larger screens */}
        <div className="hidden md:block md:w-1/3 relative">
          <img
            src="/ned-pool.svg"
            alt="Pool Ned - the Pool Nerds mascot"
            className="w-full max-w-[320px] drop-shadow-2xl"
          />
        </div>

        {/* Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
            We Remove the{" "}
            <span className="text-pool-gold">GUESS</span>work
            <br />
            Before we Start the{" "}
            <span className="text-pool-accent">POOL</span>work
          </h1>
          <p className="text-xl md:text-2xl text-pool-wave max-w-2xl mb-10">
            Custom chemical treatments engineered for your pool&apos;s unique water
            chemistry. Science-backed. Nerd-approved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="/calculator"
              className="inline-block bg-pool-accent hover:bg-pool-glow text-white font-bold text-lg px-10 py-4 rounded-full shadow-xl transition transform hover:scale-105"
            >
              Calculate My Pool
            </a>
            <a
              href="/shop"
              className="inline-block border-2 border-white/30 text-white hover:bg-white/10 font-bold text-lg px-10 py-4 rounded-full transition transform hover:scale-105"
            >
              Enroll in Chem Class
            </a>
          </div>
        </div>
      </div>

      {/* Bottom wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-20"
        >
          <path
            fill="white"
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L0,120Z"
          />
        </svg>
      </div>
    </section>
  );
}
