import { DollarSign, FlaskConical, Smile } from "lucide-react";

const props = [
  {
    icon: DollarSign,
    title: "Get Competitive Pricing",
  },
  {
    icon: FlaskConical,
    title: "Scientifically Tailored Treatments",
  },
  {
    icon: Smile,
    title: "Geek Out Over Your Pool",
  },
];

export default function ValueProps() {
  return (
    <section className="py-16 bg-pool-surface">
      <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {props.map((prop) => (
          <div key={prop.title} className="flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full bg-pool-accent/20 flex items-center justify-center mb-4">
              <prop.icon className="text-pool-accent" size={36} />
            </div>
            <h3 className="text-xl font-bold text-pool-dark">{prop.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
