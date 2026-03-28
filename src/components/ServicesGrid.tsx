import {
  Droplets,
  Leaf,
  Bug,
  Waves,
  ShieldCheck,
  ThermometerSun,
} from "lucide-react";

const services = [
  {
    icon: Droplets,
    name: "Pool Chemical Care",
    desc: "Precision chemical balancing for pH, chlorine, alkalinity, and calcium hardness.",
  },
  {
    icon: Leaf,
    name: "Algae Prevention",
    desc: "Proactive algaecide treatments to keep your water crystal clear year-round.",
  },
  {
    icon: Bug,
    name: "Insect & Pest Control",
    desc: "Keep waterbugs, mosquito larvae, and other pests out of your pool area.",
  },
  {
    icon: Waves,
    name: "Filter & Pump Service",
    desc: "Regular cleaning, backwashing, and maintenance for peak circulation.",
  },
  {
    icon: ShieldCheck,
    name: "Surface & Tile Care",
    desc: "Calcium deposit removal, tile cleaning, and surface stain treatment.",
  },
  {
    icon: ThermometerSun,
    name: "Seasonal Opening & Closing",
    desc: "Expert winterization and spring startup to protect your investment.",
  },
];

export default function ServicesGrid() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-pool-dark text-center mb-12">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.name}
              className="group rounded-2xl border border-gray-200 p-8 hover:shadow-xl hover:border-pool-accent transition cursor-pointer"
            >
              <div className="w-14 h-14 rounded-xl bg-pool-accent/10 flex items-center justify-center mb-5 group-hover:bg-pool-accent/20 transition">
                <service.icon className="text-pool-accent" size={28} />
              </div>
              <h3 className="text-xl font-bold text-pool-dark mb-2">
                {service.name}
              </h3>
              <p className="text-gray-500 text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <a
            href="#services"
            className="text-pool-accent font-bold hover:text-pool-light transition"
          >
            View All Services &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
