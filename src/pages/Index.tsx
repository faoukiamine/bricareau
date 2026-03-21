
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
              <span className="text-[32px] md:text-[32px] font-light leading-[1.2] block">Votre confiance.</span>
              <span className="text-[32px] md:text-[32px] font-normal leading-[1.2] block text-blue-600">Notre plus grande fierté.</span>
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
