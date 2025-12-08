import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import ContactResidentiel from "./pages/ContactResidentiel";
import ContactEntreprises from "./pages/ContactEntreprises";
import WaterTestingPage from "./pages/WaterTestingPage";
import FAQ from "./pages/FAQ";
import Entreprises from "./pages/Entreprises";
import CommercialIndustriel from "./pages/CommercialIndustriel";
import Solutions from "./pages/Solutions";
import Adoucisseurs from "./pages/Adoucisseurs";
import ConditionneursSansSel from "./pages/ConditionneursSansSel";
import OsmoseFiltration from "./pages/OsmoseFiltration";
import EauDure from "./pages/EauDure";
import EauDePuits from "./pages/EauDePuits";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/adoucisseurs" element={<Adoucisseurs />} />
          <Route path="/conditionneurs-sans-sel" element={<ConditionneursSansSel />} />
          <Route path="/osmose-filtration" element={<OsmoseFiltration />} />
          <Route path="/eau-dure" element={<EauDure />} />
          <Route path="/eau-de-puits" element={<EauDePuits />} />
          <Route path="/contact-residentiel" element={<ContactResidentiel />} />
          <Route path="/contact-entreprises" element={<ContactEntreprises />} />
          <Route path="/water-testing" element={<WaterTestingPage />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/entreprises" element={<Entreprises />} />
          <Route path="/commercial-industriel" element={<CommercialIndustriel />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
