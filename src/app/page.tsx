import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PackageComparison from "@/components/PackageComparison";
import ValueProps from "@/components/ValueProps";
import ProblemSolution from "@/components/ProblemSolution";
import PricingSection from "@/components/PricingSection";
import ServicesGrid from "@/components/ServicesGrid";
import ScienceSection from "@/components/ScienceSection";
import StatsSection from "@/components/StatsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import HowItWorks from "@/components/HowItWorks";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <PackageComparison />
      <ValueProps />
      <ProblemSolution />
      <PricingSection />
      <ServicesGrid />
      <ScienceSection />
      <StatsSection />
      <TestimonialsSection />
      <HowItWorks />
      <FinalCTA />
      <Footer />
    </main>
  );
}
