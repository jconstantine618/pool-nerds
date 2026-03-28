# Pool Nerds — Deployment Guide

## Quick Deploy (Vercel CLI)

```bash
cd pool-nerds-src
npm install
npx vercel --yes
```

That's it. Vercel will build and deploy the site.

## Or: Push to GitHub (auto-deploys via Vercel)

Since your Vercel project is connected to `jconstantine618/pool-nerds`:

```bash
cd pool-nerds-src
git init
git add -A
git commit -m "Pool Nerds site with e-commerce"
git remote add origin https://github.com/jconstantine618/pool-nerds.git
git push -u origin main --force
```

Vercel will auto-deploy from the push.

## Environment Variables (set in Vercel dashboard)

For the e-commerce features to work, add these in Vercel → Settings → Environment Variables:

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anon/public key |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase service role key |
| `STRIPE_SECRET_KEY` | Stripe secret key (sk_test_...) |
| `STRIPE_WEBHOOK_SECRET` | Stripe webhook signing secret |
| `STRIPE_PRICE_SMALL` | Stripe price ID for Small kit |
| `STRIPE_PRICE_MEDIUM` | Stripe price ID for Medium kit |
| `STRIPE_PRICE_LARGE` | Stripe price ID for Large kit |
| `NEXT_PUBLIC_SITE_URL` | Your deployed URL |

## Supabase Setup

Run `supabase/schema.sql` in your Supabase SQL Editor to create all tables.
