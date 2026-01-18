import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductShowcase from "@/components/ProductShowcase";
import IdealCulliganCTA from "@/components/IdealCulliganCTA";
import BetterWaterStats from "@/components/BetterWaterStats";
import QualityService from "@/components/QualityService";
import DiscoverExpert from "@/components/DiscoverExpert";
import EverythingYouNeed from "@/components/EverythingYouNeed";
import NewEraStats from "@/components/NewEraStats";
import FinalCTA from "@/components/FinalCTA";
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
        <QualityService />
        <DiscoverExpert />
        <EverythingYouNeed />
        <NewEraStats />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
