"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  getAllTiers,
  PRICE_RANGES,
  type MonthlyKit,
} from "@/lib/dosing-engine";
import {
  Check,
  Star,
  Truck,
  ShieldCheck,
  RotateCcw,
  FlaskConical,
  ArrowRight,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const TIER_COLORS = {
  small: { bg: "bg-pool-wave/20", ring: "ring-pool-wave", accent: "text-pool-light" },
  medium: { bg: "bg-pool-accent/10", ring: "ring-pool-accent", accent: "text-pool-accent" },
  large: { bg: "bg-pool-gold/10", ring: "ring-pool-gold", accent: "text-pool-gold" },
};

const TIER_ICONS = {
  small: "🎒",
  medium: "🎓",
  large: "🧑‍🔬",
};

export default function ShopPage() {
  const tiers = getAllTiers();
  const [expandedTier, setExpandedTier] = useState<string | null>("medium");

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-pool-surface to-white pt-24 pb-20">
        <div className="max-w-6xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-14">
            <p className="text-pool-accent font-bold uppercase tracking-wider text-sm mb-2">
              Enroll in Chem Class
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-pool-dark mb-4">
              Chem Class is{" "}
              <span className="text-pool-accent">in session.</span>
            </h1>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Pre-measured chemical kits engineered for your exact pool size.
              Pick your grade level, and let the nerds handle the rest.
              Ships free every month.
            </p>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6 mb-14">
            {[
              { icon: Truck, text: "Free Monthly Shipping" },
              { icon: ShieldCheck, text: "Expert-Formulated" },
              { icon: RotateCcw, text: "Cancel Anytime" },
            ].map((badge) => (
              <div
                key={badge.text}
                className="flex items-center gap-2 text-pool-dark"
              >
                <badge.icon size={18} className="text-pool-accent" />
                <span className="font-medium text-sm">{badge.text}</span>
              </div>
            ))}
          </div>

          {/* Tier Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {tiers.map((kit) => (
              <TierCard
                key={kit.tier}
                kit={kit}
                expanded={expandedTier === kit.tier}
                onToggle={() =>
                  setExpandedTier(
                    expandedTier === kit.tier ? null : kit.tier
                  )
                }
              />
            ))}
          </div>

          {/* Not sure? CTA */}
          <div className="text-center bg-pool-dark rounded-3xl p-10">
            <h2 className="text-2xl font-extrabold text-white mb-3">
              Not sure which size you need?
            </h2>
            <p className="text-pool-wave mb-6">
              Use our free pool calculator to find your exact volume and get a
              personalized recommendation.
            </p>
            <a
              href="/calculator"
              className="inline-flex items-center gap-2 bg-pool-accent hover:bg-pool-glow text-white font-bold text-lg px-8 py-4 rounded-full shadow-xl transition"
            >
              <FlaskConical size={20} />
              Calculate My Pool Size
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

// ─── Tier Card ─────────────────────────────────────────────────────

function TierCard({
  kit,
  expanded,
  onToggle,
}: {
  kit: MonthlyKit;
  expanded: boolean;
  onToggle: () => void;
}) {
  const isBest = kit.tier === "large";
  const colors = TIER_COLORS[kit.tier];
  const priceRange = PRICE_RANGES[kit.tier];
  const emoji = TIER_ICONS[kit.tier];

  return (
    <div
      className={`relative rounded-3xl p-8 transition transform hover:scale-[1.01] ${
        isBest
          ? "bg-pool-dark text-white shadow-2xl ring-4 ring-pool-accent"
          : "bg-white shadow-lg border border-gray-200"
      }`}
    >
      {isBest && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-pool-gold text-pool-dark font-bold text-sm px-4 py-1 rounded-full flex items-center gap-1">
          <Star size={14} /> Most Popular
        </div>
      )}

      {/* Tier Header */}
      <div className="text-center mb-6">
        <span className="text-4xl mb-2 block">{emoji}</span>
        <h3
          className={`text-2xl font-extrabold mb-1 ${
            isBest ? "text-pool-accent" : "text-pool-dark"
          }`}
        >
          {kit.tierLabel}
        </h3>
        <p className={`text-sm ${isBest ? "text-pool-wave" : "text-gray-500"}`}>
          Up to {kit.gallons.toLocaleString()} gallons
        </p>
      </div>

      {/* Price */}
      <div className="text-center mb-6">
        <span
          className={`text-5xl font-extrabold ${
            isBest ? "text-white" : "text-pool-dark"
          }`}
        >
          ${priceRange.min}
        </span>
        <span className={`text-lg ${isBest ? "text-pool-wave" : "text-gray-400"}`}>
          –${priceRange.max}/mo
        </span>
      </div>

      {/* Key features */}
      <ul className="space-y-2 mb-6">
        {[
          "Pre-measured chemicals",
          "Monthly delivery",
          "Free shipping",
          `${kit.chemicals.length} products included`,
          "Dosing guide in every box",
        ].map((f) => (
          <li key={f} className="flex items-center gap-2">
            <Check
              size={16}
              className={isBest ? "text-pool-accent" : "text-pool-green"}
            />
            <span
              className={`text-sm ${isBest ? "text-pool-wave" : "text-gray-600"}`}
            >
              {f}
            </span>
          </li>
        ))}
      </ul>

      {/* Expandable chemical list */}
      <button
        onClick={onToggle}
        className={`w-full flex items-center justify-center gap-1 text-sm font-medium mb-4 transition ${
          isBest
            ? "text-pool-accent hover:text-pool-glow"
            : "text-pool-light hover:text-pool-accent"
        }`}
      >
        {expanded ? "Hide" : "See"} what&apos;s in the box
        {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>

      {expanded && (
        <div
          className={`rounded-xl p-4 mb-6 space-y-2 ${
            isBest ? "bg-pool-medium/50" : "bg-pool-surface"
          }`}
        >
          {kit.chemicals.map((chem) => (
            <div
              key={chem.name}
              className="flex items-baseline justify-between gap-2"
            >
              <span
                className={`text-xs ${isBest ? "text-pool-wave" : "text-gray-600"}`}
              >
                {chem.name}
              </span>
              <span
                className={`text-xs font-bold whitespace-nowrap ${
                  isBest ? "text-pool-accent" : "text-pool-dark"
                }`}
              >
                {chem.amountOz} {chem.unit}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Subscribe Button */}
      <a
        href="#checkout"
        className={`block text-center font-bold py-3 rounded-full transition ${
          isBest
            ? "bg-pool-accent hover:bg-pool-glow text-white"
            : "bg-pool-surface hover:bg-pool-wave text-pool-dark"
        }`}
      >
        <span className="flex items-center justify-center gap-2">
          Subscribe Now <ArrowRight size={16} />
        </span>
      </a>
    </div>
  );
}
