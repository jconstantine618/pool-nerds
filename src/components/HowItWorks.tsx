import { ClipboardList, Ruler, Calculator, Glasses } from "lucide-react";

const steps = [
  {
    num: 1,
    icon: ClipboardList,
    title: "Tell us who you are",
  },
  {
    num: 2,
    icon: Ruler,
    title: "We'll measure your pool virtually",
  },
  {
    num: 3,
    icon: Calculator,
    title: "Get a custom quote for your pool",
  },
  {
    num: 4,
    icon: Glasses,
    title: "Let the Nerds take care of the rest",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="quote"
      className="py-20 bg-gradient-to-br from-pool-dark to-pool-medium text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-40 h-40 border-2 border-white rounded-full" />
        <div className="absolute bottom-20 right-20 w-60 h-60 border-2 border-white rounded-full" />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 border border-white rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-16">
          Trust The Nerds
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step) => (
            <div key={step.num} className="text-center">
              <div className="relative mx-auto w-20 h-20 mb-4">
                <div className="absolute inset-0 bg-pool-accent/30 rounded-full" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <step.icon size={36} className="text-pool-accent" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-pool-gold rounded-full flex items-center justify-center">
                  <span className="text-pool-dark font-extrabold text-sm">
                    {step.num}
                  </span>
                </div>
              </div>
              <h3 className="text-lg font-bold">{step.title}</h3>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="/calculator"
            className="inline-block bg-pool-accent hover:bg-pool-glow text-white font-bold text-lg px-10 py-4 rounded-full shadow-xl transition transform hover:scale-105"
          >
            Get a Quote Now
          </a>
        </div>
      </div>
    </section>
  );
}
