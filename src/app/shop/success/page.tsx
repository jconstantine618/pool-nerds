"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle, Package, ArrowRight } from "lucide-react";

export default function SuccessPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-pool-surface to-white pt-24 pb-20">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="bg-white rounded-3xl shadow-xl p-12">
            <div className="w-20 h-20 rounded-full bg-pool-green/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={48} className="text-pool-green" />
            </div>

            <h1 className="text-3xl md:text-4xl font-extrabold text-pool-dark mb-4">
              Welcome to the Nerds!
            </h1>
            <p className="text-gray-500 text-lg mb-8">
              Your subscription is confirmed. Your first chemical kit is being
              assembled by our pool scientists and will ship within 2 business
              days.
            </p>

            <div className="bg-pool-surface rounded-2xl p-6 mb-8">
              <div className="flex items-center justify-center gap-3 text-pool-dark">
                <Package size={24} className="text-pool-accent" />
                <span className="font-bold">
                  First kit ships in 1-2 business days
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <a
                href="/"
                className="inline-flex items-center gap-2 bg-pool-accent hover:bg-pool-glow text-white font-bold px-8 py-3 rounded-full transition"
              >
                Back to Home <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
