import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

function getStripe() {
  return new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2026-03-25.dahlia",
  });
}

export async function POST(req: NextRequest) {
  try {
    const stripe = getStripe();
    const body = await req.json();
    const { tier, email } = body as { tier: string; email?: string };

    // Map tier to Stripe price IDs (set these in env or Supabase)
    const priceMap: Record<string, string> = {
      small: process.env.STRIPE_PRICE_SMALL!,
      medium: process.env.STRIPE_PRICE_MEDIUM!,
      large: process.env.STRIPE_PRICE_LARGE!,
    };

    const priceId = priceMap[tier];
    if (!priceId) {
      return NextResponse.json(
        { error: "Invalid tier" },
        { status: 400 }
      );
    }

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
      customer_email: email || undefined,
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/shop/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/shop`,
      metadata: { tier },
    });

    return NextResponse.json({ url: session.url });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error("Checkout error:", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
