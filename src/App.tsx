import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Adoucisseurs-portables";
import ContactResidentiel from "./pages/ContactResidentiel";
import ContactEntreprises from "./pages/ContactEntreprises";
import Contact from "./pages/Contact";
import WaterTestingPage from "./pages/WaterTestingPage";
import FAQ from "./pages/FAQ";
import Entreprises from "./pages/Entreprises";
import CommercialIndustriel from "./pages/CommercialIndustriel";
import Solutions from "./pages/Solutions";
import Adoucisseurs from "./pages/Adoucissement";
import AdoucisseurEauResidentiel from "./pages/Adoucisseur-eau-municipal.tsx";
import AdoucisseursEauDePuits from "./pages/Adoucisseurs-eau-de-puits";
import ConditionneursSansSel from "./pages/ConditionneursSansSel";
import OsmoseFiltration from "./pages/Systeme-de-filtration-deau-potable";
import EauDure from "./pages/EauDure";
import EauDePuits from "./pages/EauDePuits";
import Filtration from "./pages/Filtration";
import Fontaines from "./pages/Fontaines";
import Blog from "./pages/Blog";
import Guides from "./pages/Guides";
import Videos from "./pages/Videos";
import Temoignages from "./pages/Temoignages";
import Service from "./pages/Service";
import Garantie from "./pages/Garantie";
import Pieces from "./pages/Pieces";
import Manuels from "./pages/Manuels";
import Promotions from "./pages/Promotions";
import SpecializedFiltration from "./pages/Filtres-deau-de-puits.tsx";
import FiltrationSousEvier from "./pages/Systemes-de-filtration-deau-sous-evier";
import DesinfectionUV from "./pages/Systemes-de-desinfection-UV";
import FiltreEauHauteEfficacite from "./pages/Filtre-eau-haute-efficacite";
import RO6 from "./pages/RO-6";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/adoucisseurs-portables" element={<Services />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/adoucissement" element={<Adoucisseurs />} />
          <Route path="/adoucisseur-eau-residentiel" element={<AdoucisseurEauResidentiel />} />
          <Route path="/adoucisseurs-eau-de-puits" element={<AdoucisseursEauDePuits />} />
          <Route path="/conditionneurs-sans-sel" element={<ConditionneursSansSel />} />
          <Route path="/osmose-filtration" element={<OsmoseFiltration />} />
          <Route path="/eau-dure" element={<EauDure />} />
          <Route path="/eau-de-puits" element={<EauDePuits />} />
          <Route path="/filtration" element={<Filtration />} />
          <Route path="/Filtres-deau" element={<SpecializedFiltration />} />
          <Route path="/Systemes-de-filtration-deau-sous-evier" element={<FiltrationSousEvier />} />
          <Route path="/Systemes-de-desinfection-UV" element={<DesinfectionUV />} />
          <Route path="/filtre-eau-haute-efficacite" element={<FiltreEauHauteEfficacite />} />
          <Route path="/ro-6" element={<RO6 />} />
          <Route path="/fontaines" element={<Fontaines />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/guides" element={<Guides />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/temoignages" element={<Temoignages />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact-residentiel" element={<ContactResidentiel />} />
          <Route path="/contact-entreprises" element={<ContactEntreprises />} />
          <Route path="/service" element={<Service />} />
          <Route path="/garantie" element={<Garantie />} />
          <Route path="/pieces" element={<Pieces />} />
          <Route path="/manuels" element={<Manuels />} />
          <Route path="/water-testing" element={<WaterTestingPage />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/entreprises" element={<Entreprises />} />
          <Route path="/commercial-industriel" element={<CommercialIndustriel />} />
          <Route path="/promotions" element={<Promotions />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
