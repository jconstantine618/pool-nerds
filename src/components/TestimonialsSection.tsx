"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    text: "Pool Nerds is the best decision we ever made. Our pool went from green and embarrassing to crystal clear in just two visits. The water testing is thorough and the team actually explains what they're doing.",
    date: "March 2026",
  },
  {
    name: "David R.",
    text: "I've had various pool services over the years but Pool Nerds has been the best by far. They test the water every visit and customize the treatment. My pool has never looked this good.",
    date: "February 2026",
  },
  {
    name: "Jennifer K.",
    text: "Super impressed with their scientific approach. They showed me my water analysis results and explained exactly what was off. Two weeks later, my pool was perfect. Highly recommend!",
    date: "January 2026",
  },
  {
    name: "Mike T.",
    text: "These guys really know their stuff. Professional, punctual, and my pool stays pristine all summer. Worth every penny for the peace of mind.",
    date: "December 2025",
  },
  {
    name: "Amanda L.",
    text: "I reached out to Pool Nerds because their website thoroughly explained their treatment process. They delivered on every promise. Customer service is outstanding.",
    date: "November 2025",
  },
  {
    name: "Chris B.",
    text: "Great company! They do amazing work and are very responsive. My pool has never been cleaner and I don't have to worry about a thing.",
    date: "October 2025",
  },
];

export default function TestimonialsSection() {
  const [currentPage, setCurrentPage] = useState(0);
  const perPage = 3;
  const totalPages = Math.ceil(testimonials.length / perPage);

  return (
    <section className="py-20 bg-pool-surface">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-pool-dark text-center mb-12">
          A Few Of Our Happy Clients!
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {testimonials
            .slice(currentPage * perPage, (currentPage + 1) * perPage)
            .map((t, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition"
              >
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      size={16}
                      className="text-pool-gold fill-pool-gold"
                    />
                  ))}
                </div>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-pool-dark">{t.name}</span>
                  <span className="text-xs text-gray-400">{t.date}</span>
                </div>
              </div>
            ))}
        </div>

        <div className="flex justify-center gap-4">
          <button
            onClick={() =>
              setCurrentPage((p) => (p === 0 ? totalPages - 1 : p - 1))
            }
            className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center hover:bg-pool-accent hover:text-white transition"
          >
            <ChevronLeft size={20} />
          </button>
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i)}
              className={`w-3 h-3 rounded-full transition ${
                i === currentPage ? "bg-pool-accent" : "bg-gray-300"
              }`}
            />
          ))}
          <button
            onClick={() =>
              setCurrentPage((p) => (p === totalPages - 1 ? 0 : p + 1))
            }
            className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center hover:bg-pool-accent hover:text-white transition"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
