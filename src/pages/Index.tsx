
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProblemHero from "@/components/ProblemHero";
import ProductShowcase from "@/components/ProductShowcase";
import IdealCulliganCTA from "@/components/BricareauCTA";
import BetterWaterStats from "@/components/BetterWaterStats";
import DiscoverExpert from "@/components/DiscoverExpert";
import TestimonialsSection from "@/components/TestimonialsSection";
import MarketExploration from "@/components/MarketExploration";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ProductShowcase />
        <ProblemHero />
        <IdealCulliganCTA />
        <BetterWaterStats />
        <DiscoverExpert />
        <TestimonialsSection />
        <MarketExploration />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
