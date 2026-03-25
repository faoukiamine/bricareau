
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductShowcase from "@/components/ProductShowcase";
import ExpertTrustSection from "@/components/ExpertTrustSection";

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
        <ExpertTrustSection />
        <TestimonialsSection
          filterProduct="/"
          limit={6}
          title={
            <>
              <span className="italic font-light text-[#2563eb] block">Votre confiance.</span>
              <span className="font-bold text-[#1e3a8a] block">Notre plus grande fierté.</span>
            </>
          }
        />
        <BetterWaterStats />

        <DiscoverExpert />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
