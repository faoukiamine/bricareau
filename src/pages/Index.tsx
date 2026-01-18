import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductShowcase from "@/components/ProductShowcase";
import IdealCulliganCTA from "@/components/IdealCulliganCTA";
import BetterWaterStats from "@/components/BetterWaterStats";
import DiscoverExpert from "@/components/DiscoverExpert";
import Testimonials from "@/components/Testimonials";
import MarketExploration from "@/components/MarketExploration";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ProductShowcase />
        <IdealCulliganCTA />
        <BetterWaterStats />
        <DiscoverExpert />
        <Testimonials />
        <MarketExploration />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
