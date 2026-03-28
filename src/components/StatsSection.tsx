import {
  Clock,
  Droplets,
  Users,
  Award,
  ShieldCheck,
  MapPin,
} from "lucide-react";

const stats = [
  { icon: Clock, value: "24", label: "hour availability" },
  { icon: Droplets, value: "5M+", label: "gallons treated annually" },
  { icon: Users, value: "1,000+", label: "pools serviced in our area" },
];

const badges = [
  { icon: Award, text: "Certified Pool Operators" },
  { icon: ShieldCheck, text: "Licensed Chemical Applicators" },
  { icon: MapPin, text: "Locally Owned and Operated" },
];

export default function StatsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-pool-accent font-bold uppercase tracking-wider text-sm mb-2">
            Is your pool still out of focus?
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-pool-dark mb-2">
            We don&apos;t just put the sign out.
          </h2>
          <h2 className="text-3xl md:text-4xl font-extrabold text-pool-accent">
            We do the Work!
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-8 rounded-2xl bg-pool-surface"
            >
              <stat.icon
                className="mx-auto text-pool-accent mb-3"
                size={36}
              />
              <div className="text-4xl font-extrabold text-pool-dark mb-1">
                {stat.value}
              </div>
              <div className="text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-6 mb-10">
          {badges.map((badge) => (
            <div
              key={badge.text}
              className="flex items-center gap-2 bg-pool-dark text-white px-5 py-3 rounded-full"
            >
              <badge.icon size={18} className="text-pool-accent" />
              <span className="font-medium text-sm">{badge.text}</span>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="/calculator"
            className="inline-block bg-pool-accent hover:bg-pool-glow text-white font-bold text-lg px-10 py-4 rounded-full shadow-xl transition"
          >
            Get Your Instant Quote
          </a>
        </div>
      </div>
    </section>
  );
}
