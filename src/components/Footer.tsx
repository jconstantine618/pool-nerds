import { Droplets, Mail, Phone, MapPin } from "lucide-react";

const serviceLinks = [
  "Pool Chemical Care",
  "Algae Prevention",
  "Insect & Pest Control",
  "Filter & Pump Service",
  "Surface & Tile Care",
  "Seasonal Opening & Closing",
];

const companyLinks = [
  { label: "Pricing", href: "#pricing" },
  { label: "About Us", href: "#about" },
  { label: "Join The Nerds", href: "#" },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-pool-dark text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Droplets size={28} className="text-pool-accent" />
              <span className="text-2xl font-extrabold">
                Pool<span className="text-pool-accent">Nerds</span>
              </span>
            </div>
            <div className="space-y-3 text-sm text-gray-400">
              <a
                href="mailto:contact@poolnerds.com"
                className="flex items-center gap-2 hover:text-pool-accent transition"
              >
                <Mail size={14} />
                contact@poolnerds.com
              </a>
              <a
                href="tel:8645551234"
                className="flex items-center gap-2 hover:text-pool-accent transition"
              >
                <Phone size={14} />
                (864) 555-1234
              </a>
              <div className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 shrink-0" />
                <span>
                  PO Box 1457
                  <br />
                  Greenville, SC 29601
                </span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#services"
                    className="text-sm text-gray-400 hover:text-pool-accent transition"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-lg mb-4">Company</h4>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-pool-accent transition"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold text-lg mb-4">Connect With Us</h4>
            <div className="flex gap-3">
              {["Facebook", "Instagram"].map(
                (social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-10 h-10 rounded-full bg-pool-medium flex items-center justify-center hover:bg-pool-accent transition text-sm font-bold"
                  >
                    {social[0]}
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-pool-medium">
        <div className="max-w-7xl mx-auto px-4 py-4 text-center text-sm text-gray-500">
          &copy;2026 Pool Nerds. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
