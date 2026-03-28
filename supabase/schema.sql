-- Pool Nerds Supabase Schema
-- Run this in the Supabase SQL Editor to set up the database

-- ─── Products ──────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS products (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  tier TEXT NOT NULL CHECK (tier IN ('small', 'medium', 'large')),
  price_cents INTEGER NOT NULL,
  stripe_price_id TEXT,
  active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- ─── Chemicals (per-product line items) ────────────────────────────
CREATE TABLE IF NOT EXISTS chemicals (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  product_id UUID REFERENCES products(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  amount_oz NUMERIC NOT NULL,
  description TEXT,
  sort_order INTEGER DEFAULT 0
);

-- ─── Customers ─────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS customers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  name TEXT,
  stripe_customer_id TEXT UNIQUE,
  pool_gallons INTEGER,
  pool_shape TEXT,
  address_line1 TEXT,
  address_line2 TEXT,
  city TEXT,
  state TEXT,
  zip TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- ─── Orders / Subscriptions ────────────────────────────────────────
CREATE TABLE IF NOT EXISTS orders (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  customer_id UUID REFERENCES customers(id),
  email TEXT,
  tier TEXT NOT NULL,
  stripe_session_id TEXT,
  stripe_customer_id TEXT,
  stripe_subscription_id TEXT UNIQUE,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'active', 'paused', 'canceled', 'past_due')),
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- ─── Shipments (for tracking monthly kit deliveries) ───────────────
CREATE TABLE IF NOT EXISTS shipments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  order_id UUID REFERENCES orders(id) ON DELETE CASCADE,
  tracking_number TEXT,
  carrier TEXT DEFAULT 'usps',
  status TEXT DEFAULT 'preparing' CHECK (status IN ('preparing', 'shipped', 'delivered')),
  shipped_at TIMESTAMPTZ,
  delivered_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- ─── RLS Policies ──────────────────────────────────────────────────
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE chemicals ENABLE ROW LEVEL SECURITY;
ALTER TABLE customers ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE shipments ENABLE ROW LEVEL SECURITY;

-- Public read on products & chemicals
CREATE POLICY "Products are viewable by everyone" ON products
  FOR SELECT USING (active = true);

CREATE POLICY "Chemicals are viewable by everyone" ON chemicals
  FOR SELECT USING (true);

-- Orders: service role only (managed by webhooks)
CREATE POLICY "Orders managed by service role" ON orders
  FOR ALL USING (auth.role() = 'service_role');

-- Customers: service role only
CREATE POLICY "Customers managed by service role" ON customers
  FOR ALL USING (auth.role() = 'service_role');

-- Shipments: service role only
CREATE POLICY "Shipments managed by service role" ON shipments
  FOR ALL USING (auth.role() = 'service_role');

-- ─── Seed Data: Products ───────────────────────────────────────────
INSERT INTO products (name, description, tier, price_cents) VALUES
  ('Small Pool Kit', 'Monthly chemical kit for pools up to 10,000 gallons', 'small', 4900),
  ('Medium Pool Kit', 'Monthly chemical kit for pools up to 20,000 gallons', 'medium', 7900),
  ('Large Pool Kit', 'Monthly chemical kit for pools up to 30,000 gallons', 'large', 10900);

-- ─── Indexes ───────────────────────────────────────────────────────
CREATE INDEX idx_orders_email ON orders(email);
CREATE INDEX idx_orders_stripe_sub ON orders(stripe_subscription_id);
CREATE INDEX idx_customers_email ON customers(email);
CREATE INDEX idx_shipments_order ON shipments(order_id);
