/**
 * Pool Nerds Dosing Engine
 *
 * All chemical quantities are defined as base amounts per 10,000 gallons.
 * The engine scales linearly based on actual pool volume.
 */

export interface PoolDimensions {
  shape: "rectangle" | "oval" | "round" | "freeform";
  length: number; // feet
  width: number; // feet
  avgDepth: number; // feet
}

export interface ChemicalDose {
  name: string;
  amountOz: number;
  unit: string;
  description: string;
}

export interface MonthlyKit {
  tier: "small" | "medium" | "large";
  tierLabel: string;
  gallons: number;
  priceMonthly: number;
  chemicals: ChemicalDose[];
}

// ─── Volume Calculations ───────────────────────────────────────────

export function calculatePoolVolume(dims: PoolDimensions): number {
  const { shape, length, width, avgDepth } = dims;
  switch (shape) {
    case "rectangle":
      return length * width * avgDepth * 7.48; // cubic ft → gallons
    case "oval":
      return length * width * avgDepth * 5.9;
    case "round":
      return Math.PI * Math.pow(length / 2, 2) * avgDepth * 7.48;
    case "freeform":
      return length * width * avgDepth * 7.48 * 0.85; // 85% fill factor
    default:
      return length * width * avgDepth * 7.48;
  }
}

export function gallonsToTier(gallons: number): "small" | "medium" | "large" {
  if (gallons <= 15000) return "small";
  if (gallons <= 25000) return "medium";
  return "large";
}

// ─── Base Chemical Formulas (per 10,000 gallons / month) ───────────

const BASE_CHEMICALS_PER_10K: ChemicalDose[] = [
  {
    name: "Liquid Chlorine (12.5%)",
    amountOz: 128, // 1 gallon
    unit: "oz",
    description: "Primary sanitizer — maintains 1-3 ppm free chlorine",
  },
  {
    name: "pH Decreaser (Sodium Bisulfate)",
    amountOz: 24,
    unit: "oz",
    description: "Keeps pH in the 7.2-7.6 range",
  },
  {
    name: "Alkalinity Increaser (Sodium Bicarbonate)",
    amountOz: 32,
    unit: "oz",
    description: "Buffers pH — targets 80-120 ppm total alkalinity",
  },
  {
    name: "Stabilizer (Cyanuric Acid)",
    amountOz: 16,
    unit: "oz",
    description: "UV shield for chlorine — targets 30-50 ppm",
  },
  {
    name: "Algaecide (Quaternary Ammonium)",
    amountOz: 8,
    unit: "oz",
    description: "Preventive algae treatment",
  },
  {
    name: "Clarifier (Polymer-based)",
    amountOz: 4,
    unit: "oz",
    description: "Keeps water crystal clear by coagulating fine particles",
  },
];

// ─── Scaling ───────────────────────────────────────────────────────

function scaleChemicals(
  gallons: number,
  base: ChemicalDose[]
): ChemicalDose[] {
  const factor = gallons / 10000;
  return base.map((chem) => ({
    ...chem,
    amountOz: Math.round(chem.amountOz * factor * 10) / 10,
  }));
}

// ─── Tier Definitions ──────────────────────────────────────────────

const TIER_CONFIG = {
  small: { label: "High School", maxGallons: 10000, price: 49 },
  medium: { label: "College", maxGallons: 20000, price: 79 },
  large: { label: "PhD", maxGallons: 30000, price: 109 },
} as const;

export function buildMonthlyKit(gallons: number): MonthlyKit {
  const tier = gallonsToTier(gallons);
  const config = TIER_CONFIG[tier];
  // Scale chemicals to actual volume, capped at the tier's max
  const effectiveGallons = Math.min(gallons, config.maxGallons);
  const chemicals = scaleChemicals(effectiveGallons, BASE_CHEMICALS_PER_10K);

  return {
    tier,
    tierLabel: config.label,
    gallons: effectiveGallons,
    priceMonthly: config.price,
    chemicals,
  };
}

export function getAllTiers(): MonthlyKit[] {
  return [
    buildMonthlyKit(10000),
    buildMonthlyKit(20000),
    buildMonthlyKit(30000),
  ];
}

// ─── Price Range Helper ────────────────────────────────────────────

export const PRICE_RANGES = {
  small: { min: 49, max: 59, label: "High School (~10k gal)" },
  medium: { min: 79, max: 89, label: "College (~20k gal)" },
  large: { min: 109, max: 129, label: "PhD (~30k+ gal)" },
} as const;
