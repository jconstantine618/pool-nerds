"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  calculatePoolVolume,
  buildMonthlyKit,
  type PoolDimensions,
  type MonthlyKit,
} from "@/lib/dosing-engine";
import {
  Droplets,
  Ruler,
  FlaskConical,
  ArrowRight,
  RotateCcw,
} from "lucide-react";

const SHAPES = [
  { value: "rectangle" as const, label: "Rectangle", icon: "▬" },
  { value: "oval" as const, label: "Oval", icon: "⬮" },
  { value: "round" as const, label: "Round", icon: "●" },
  { value: "freeform" as const, label: "Freeform", icon: "◍" },
];

export default function CalculatorPage() {
  const [dims, setDims] = useState<PoolDimensions>({
    shape: "rectangle",
    length: 0,
    width: 0,
    avgDepth: 0,
  });
  const [result, setResult] = useState<{
    gallons: number;
    kit: MonthlyKit;
  } | null>(null);

  function handleCalculate() {
    if (dims.length <= 0 || dims.avgDepth <= 0) return;
    if (dims.shape !== "round" && dims.width <= 0) return;
    const gallons = calculatePoolVolume(dims);
    const kit = buildMonthlyKit(gallons);
    setResult({ gallons: Math.round(gallons), kit });
  }

  function handleReset() {
    setDims({ shape: "rectangle", length: 0, width: 0, avgDepth: 0 });
    setResult(null);
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-pool-surface to-white pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4">
          {/* Page Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-pool-accent/10 text-pool-accent font-bold text-sm px-4 py-2 rounded-full mb-4">
              <FlaskConical size={16} />
              Pool Size Calculator
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-pool-dark mb-4">
              What does your pool{" "}
              <span className="text-pool-accent">really</span> need?
            </h1>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Enter your pool dimensions and we&apos;ll calculate the exact
              volume, recommend the right chemical kit, and show you what goes
              into every monthly shipment.
            </p>
          </div>

          {/* Calculator Card */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-10">
            {/* Shape Selector */}
            <div className="mb-8">
              <label className="block text-sm font-bold text-pool-dark mb-3">
                Pool Shape
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {SHAPES.map((s) => (
                  <button
                    key={s.value}
                    onClick={() => setDims({ ...dims, shape: s.value })}
                    className={`flex flex-col items-center gap-1 p-4 rounded-xl border-2 transition font-medium ${
                      dims.shape === s.value
                        ? "border-pool-accent bg-pool-accent/5 text-pool-accent"
                        : "border-gray-200 text-gray-500 hover:border-pool-wave"
                    }`}
                  >
                    <span className="text-2xl">{s.icon}</span>
                    <span className="text-sm">{s.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Dimension Inputs */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <DimensionInput
                label={dims.shape === "round" ? "Diameter (ft)" : "Length (ft)"}
                icon={<Ruler size={18} />}
                value={dims.length}
                onChange={(v) => setDims({ ...dims, length: v })}
              />
              {dims.shape !== "round" && (
                <DimensionInput
                  label="Width (ft)"
                  icon={<Ruler size={18} />}
                  value={dims.width}
                  onChange={(v) => setDims({ ...dims, width: v })}
                />
              )}
              <DimensionInput
                label="Average Depth (ft)"
                icon={<Droplets size={18} />}
                value={dims.avgDepth}
                onChange={(v) => setDims({ ...dims, avgDepth: v })}
              />
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleCalculate}
                className="flex-1 flex items-center justify-center gap-2 bg-pool-accent hover:bg-pool-glow text-white font-bold text-lg py-4 rounded-full shadow-lg transition"
              >
                Calculate My Kit
                <ArrowRight size={20} />
              </button>
              {result && (
                <button
                  onClick={handleReset}
                  className="flex items-center justify-center gap-2 text-gray-500 hover:text-pool-dark font-medium py-4 px-6 rounded-full transition"
                >
                  <RotateCcw size={18} />
                  Reset
                </button>
              )}
            </div>
          </div>

          {/* Results */}
          {result && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              {/* Volume Result */}
              <div className="bg-pool-dark rounded-3xl p-8 md:p-12 text-white text-center">
                <p className="text-pool-wave text-sm font-bold uppercase tracking-wider mb-2">
                  Estimated Pool Volume
                </p>
                <div className="text-5xl md:text-6xl font-extrabold mb-2">
                  {result.gallons.toLocaleString()}
                  <span className="text-2xl text-pool-accent ml-2">
                    gallons
                  </span>
                </div>
                <p className="text-pool-wave">
                  Recommended tier:{" "}
                  <span className="text-pool-accent font-bold">
                    {result.kit.tierLabel}
                  </span>{" "}
                  — ${result.kit.priceMonthly}/mo
                </p>
              </div>

              {/* Chemical Breakdown */}
              <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
                <h2 className="text-2xl font-extrabold text-pool-dark mb-2">
                  Your Monthly Chemical Kit
                </h2>
                <p className="text-gray-500 mb-8">
                  Precisely dosed for {result.gallons.toLocaleString()} gallons.
                  Every chemical is pre-measured so you just pour and go.
                </p>

                <div className="space-y-4">
                  {result.kit.chemicals.map((chem) => (
                    <div
                      key={chem.name}
                      className="flex items-start gap-4 p-4 rounded-xl bg-pool-surface/50 hover:bg-pool-surface transition"
                    >
                      <div className="w-10 h-10 rounded-full bg-pool-accent/10 flex items-center justify-center shrink-0">
                        <FlaskConical size={18} className="text-pool-accent" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-baseline justify-between gap-4">
                          <h3 className="font-bold text-pool-dark">
                            {chem.name}
                          </h3>
                          <span className="text-pool-accent font-extrabold whitespace-nowrap">
                            {chem.amountOz} {chem.unit}
                          </span>
                        </div>
                        <p className="text-sm text-gray-500 mt-1">
                          {chem.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-10 text-center">
                  <a
                    href="/shop"
                    className="inline-flex items-center gap-2 bg-pool-accent hover:bg-pool-glow text-white font-bold text-lg px-10 py-4 rounded-full shadow-xl transition"
                  >
                    Enroll in Chem Class
                    <ArrowRight size={20} />
                  </a>
                  <p className="text-gray-400 text-sm mt-3">
                    Ships monthly. Cancel anytime. Free shipping.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

// ─── Sub-component ─────────────────────────────────────────────────

function DimensionInput({
  label,
  icon,
  value,
  onChange,
}: {
  label: string;
  icon: React.ReactNode;
  value: number;
  onChange: (v: number) => void;
}) {
  return (
    <div>
      <label className="block text-sm font-bold text-pool-dark mb-2">
        {label}
      </label>
      <div className="relative">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-pool-accent">
          {icon}
        </span>
        <input
          type="number"
          min={0}
          step={0.5}
          value={value || ""}
          onChange={(e) => onChange(parseFloat(e.target.value) || 0)}
          placeholder="0"
          className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-pool-accent focus:ring-2 focus:ring-pool-accent/20 outline-none transition text-lg font-medium text-pool-dark"
        />
      </div>
    </div>
  );
}
