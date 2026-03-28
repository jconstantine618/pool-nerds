import { Check, X } from "lucide-react";

const services = [
  "Pool Care Program\n(chemical balancing & treatment)",
  "Water Sample Analysis",
  "Free Service Calls",
  "Algae Prevention",
  "Equipment Inspection",
  "Tile & Surface Cleaning",
  "Filter Maintenance",
];

const packages = [
  { name: "High School", included: 3 },
  { name: "College", included: 5 },
  { name: "PhD", included: 7, best: true },
];

export default function PackageComparison() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-pool-dark text-center mb-12">
          Choose your personalized treatment program.
        </h2>

        {/* Desktop table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left py-4 px-6 text-pool-dark font-bold text-lg">
                  Services Included:
                </th>
                {packages.map((pkg) => (
                  <th key={pkg.name} className="py-4 px-6 text-center">
                    <div
                      className={`text-xl font-extrabold ${pkg.best ? "text-pool-accent" : "text-pool-dark"}`}
                    >
                      {pkg.name}
                      {pkg.best && (
                        <span className="block text-sm font-medium text-pool-gold">
                          (Best Value)
                        </span>
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {services.map((service, i) => (
                <tr
                  key={i}
                  className={i % 2 === 0 ? "bg-pool-surface/50" : "bg-white"}
                >
                  <td className="py-4 px-6 text-pool-dark font-medium whitespace-pre-line">
                    {service}
                  </td>
                  {packages.map((pkg) => (
                    <td key={pkg.name} className="py-4 px-6 text-center">
                      {i < pkg.included ? (
                        <Check className="inline text-pool-green" size={24} />
                      ) : (
                        <X className="inline text-gray-300" size={24} />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile cards */}
        <div className="md:hidden space-y-6">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`rounded-2xl p-6 border-2 ${pkg.best ? "border-pool-accent bg-pool-surface/30" : "border-gray-200"}`}
            >
              <h3
                className={`text-xl font-extrabold mb-4 ${pkg.best ? "text-pool-accent" : "text-pool-dark"}`}
              >
                {pkg.name} Package
                {pkg.best && (
                  <span className="text-sm font-medium text-pool-gold ml-2">
                    Best Value
                  </span>
                )}
              </h3>
              <ul className="space-y-2">
                {services.slice(0, pkg.included).map((s, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-pool-dark"
                  >
                    <Check
                      className="text-pool-green mt-0.5 shrink-0"
                      size={18}
                    />
                    <span className="text-sm">{s.replace("\n", " ")}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
