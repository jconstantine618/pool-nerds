"use client";
import { useState } from "react";
import { Phone, User, Mail, Menu, X, Droplets } from "lucide-react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top bar */}
      <div className="bg-pool-dark text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
          <a
            href="tel:8645551234"
            className="flex items-center gap-2 hover:text-pool-accent transition"
          >
            <Phone size={14} />
            (864) 555-1234
          </a>
          <div className="hidden sm:flex items-center gap-4">
            <a
              href="#"
              className="flex items-center gap-1 hover:text-pool-accent transition"
            >
              <User size={14} />
              Customer Login
            </a>
            <a
              href="#contact"
              className="flex items-center gap-1 hover:text-pool-accent transition"
            >
              <Mail size={14} />
              Contact Us
            </a>
            <a
              href="/shop"
              className="bg-pool-accent text-pool-dark font-bold px-3 py-1 rounded hover:bg-pool-glow transition"
            >
              Receive $25 Off
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="bg-white/95 backdrop-blur shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <Droplets size={36} className="text-pool-accent" />
            <div>
              <span className="text-2xl font-extrabold text-pool-dark tracking-tight">
                Pool
              </span>
              <span className="text-2xl font-extrabold text-pool-accent tracking-tight">
                Nerds
              </span>
            </div>
          </a>
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#about"
              className="text-pool-dark font-medium hover:text-pool-accent transition"
            >
              About Us
            </a>
            <a
              href="#services"
              className="text-pool-dark font-medium hover:text-pool-accent transition"
            >
              Services
            </a>
            <a
              href="#pricing"
              className="text-pool-dark font-medium hover:text-pool-accent transition"
            >
              Pricing
            </a>
            <a
              href="/calculator"
              className="text-pool-dark font-medium hover:text-pool-accent transition"
            >
              Pool Calculator
            </a>
            <a
              href="/shop"
              className="text-pool-dark font-medium hover:text-pool-accent transition"
            >
              Shop Kits
            </a>
            <a
              href="/shop"
              className="bg-pool-accent hover:bg-pool-glow text-white font-bold px-6 py-2.5 rounded-full transition shadow-lg"
            >
              Get Your Kit
            </a>
          </div>
          <button
            className="md:hidden text-pool-dark"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        {mobileOpen && (
          <div className="md:hidden bg-white border-t px-4 pb-4 space-y-3">
            <a href="#about" className="block py-2 text-pool-dark font-medium">
              About Us
            </a>
            <a
              href="#services"
              className="block py-2 text-pool-dark font-medium"
            >
              Services
            </a>
            <a
              href="#pricing"
              className="block py-2 text-pool-dark font-medium"
            >
              Pricing
            </a>
            <a href="/calculator" className="block py-2 text-pool-dark font-medium">
              Pool Calculator
            </a>
            <a href="/shop" className="block py-2 text-pool-dark font-medium">
              Shop Kits
            </a>
            <a
              href="/shop"
              className="block text-center bg-pool-accent text-white font-bold px-6 py-2.5 rounded-full"
            >
              Get Your Kit
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
