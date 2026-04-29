import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductsArray from "@/components/Products_Array";
import CustomerJourney from "@/components/CustomerJourney";
import ExpertTrustSection from "@/components/ExpertTrustSection";
import WaterDiagnosis from "@/components/water_diagnosis";
import TestimonialsSection from "@/components/TestimonialsSection";
import MarketExploration from "@/components/MarketExploration";
import Footer from "@/components/Footer";

const Home = () => {
  useEffect(() => {
    document.title = "Bricareau | Experts en Traitement et Filtration d'eau au Québec";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Découvrez les solutions Bricareau pour une eau pure, douce et saine. Plus de 20 000 foyers canadiens nous font confiance pour leur filtration d'eau, municipale ou de puits.");
    }

    // Open Graph / Facebook
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", "Bricareau | Experts en Traitement et Filtration d'eau au Québec");
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.setAttribute("content", "Expertise québécoise en traitement d'eau. Adoucisseurs, osmose inverse et filtration pour puits privés.");

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute("content", "https://bricareau.com/");
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ProductsArray />
        <CustomerJourney />
        <ExpertTrustSection />
        <TestimonialsSection
          filterProduct="/"
          limit={6}
          title={
            <>
              <span className="italic font-light text-[#18448F] block">Votre confiance.</span>
              <span className="font-bold text-[#18448F] block">Notre plus grande fierté.</span>
            </>
          }
        />

        <WaterDiagnosis />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
