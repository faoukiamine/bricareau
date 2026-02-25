
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProblemHero from "@/components/ProblemHero";
import ProductShowcase from "@/components/ProductShowcase";

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

        <BetterWaterStats />
        <TestimonialsSection
          filterProduct="/"
          title={
            <>
              <span className="text-[32px] md:text-[60px] font-light leading-[1.2] md:leading-[60px] block">Votre confiance.</span>
              <span className="text-[32px] md:text-[60px] font-normal leading-[1.2] md:leading-[60px] block text-blue-600">Notre plus grande fierté.</span>
            </>
          }
        />
        <DiscoverExpert />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
