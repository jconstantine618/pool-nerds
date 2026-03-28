import { Check, Star } from "lucide-react";

const tiers = [
  {
    name: "High School",
    price: "89",
    features: [
      "Pool Care: Chemical balancing & treatment",
      "Water Sample Analysis",
      "Free Service Calls",
    ],
  },
  {
    name: "College",
    price: "149",
    features: [
      "Pool Care: Chemical balancing & treatment",
      "Water Sample Analysis",
      "Free Service Calls",
      "Algae Prevention",
      "Equipment Inspection",
    ],
  },
  {
    name: "PhD",
    price: "219",
    best: true,
    features: [
      "Pool Care: Chemical balancing & treatment",
      "Water Sample Analysis",
      "Free Service Calls",
      "Algae Prevention",
      "Equipment Inspection",
      "Tile & Surface Cleaning",
      "Filter Maintenance Program",
    ],
  },
];

const addOns = [
  "Pool Opening / Closing",
  "Salt Cell Cleaning",
  "Phosphate Removal",
  "Stain Treatment",
  "Green-to-Clean Recovery",
  "Heater Maintenance",
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-pool-surface to-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-pool-dark text-center mb-4">
          Choose your personalized treatment program.
        </h2>
        <p className="text-center text-gray-500 mb-12">
          Monthly pricing based on pool size. All programs include expert water analysis.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl p-8 transition transform hover:scale-[1.02] ${
                tier.best
                  ? "bg-pool-dark text-white shadow-2xl ring-4 ring-pool-accent"
                  : "bg-white shadow-lg border border-gray-200"
              }`}
            >
              {tier.best && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-pool-gold text-pool-dark font-bold text-sm px-4 py-1 rounded-full flex items-center gap-1">
                  <Star size={14} /> Best Value
                </div>
              )}
              <h3
                className={`text-2xl font-extrabold mb-2 ${tier.best ? "text-pool-accent" : "text-pool-dark"}`}
              >
                {tier.name} Package
              </h3>
              <div className="mb-6">
                <span
                  className={`text-5xl font-extrabold ${tier.best ? "text-white" : "text-pool-dark"}`}
                >
                  ${tier.price}+
                </span>
                <span className={tier.best ? "text-pool-wave" : "text-gray-500"}>
                  /month
                </span>
              </div>
              <ul className="space-y-3 mb-8">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check
                      className={`shrink-0 mt-0.5 ${tier.best ? "text-pool-accent" : "text-pool-green"}`}
                      size={18}
                    />
                    <span
                      className={`text-sm ${tier.best ? "text-pool-wave" : "text-gray-600"}`}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
              <a
                href="/shop"
                className={`block text-center font-bold py-3 rounded-full transition ${
                  tier.best
                    ? "bg-pool-accent hover:bg-pool-glow text-white"
                    : "bg-pool-surface hover:bg-pool-wave text-pool-dark"
                }`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>

        {/* Extra Credit / Add-ons */}
        <div className="max-w-2xl mx-auto bg-pool-surface rounded-2xl p-8">
          <h3 className="text-xl font-extrabold text-pool-dark mb-1">
            Extra Credit
          </h3>
          <p className="text-sm text-gray-500 mb-4">
            Add these to any package above.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {addOns.map((addon) => (
              <div
                key={addon}
                className="flex items-center gap-2 text-pool-dark"
              >
                <div className="w-2 h-2 rounded-full bg-pool-accent" />
                <span className="text-sm">{addon}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-10">
          <a
            href="/shop"
            className="inline-block bg-pool-accent hover:bg-pool-glow text-white font-bold text-lg px-10 py-4 rounded-full shadow-xl transition"
          >
            Get Your Instant Quote
          </a>
        </div>
      </div>
    </section>
  );
}
