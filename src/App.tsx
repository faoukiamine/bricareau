import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import ChatWidget from "./components/ChatWidget";
import CookieConsent from "./components/CookieConsent";
import Index from "./pages/Index";
import Services from "./pages/Adoucisseurs-portables";
import ContactResidentiel from "./pages/ContactResidentiel";
import ContactEntreprises from "./pages/ContactEntreprises";
import Contact from "./pages/Contact";
import TestsEau from "./pages/Tests-Eau";
import FAQ from "./pages/FAQ";
import Entreprises from "./pages/Entreprises";
import CommercialIndustriel from "./pages/CommercialIndustriel";
import Solutions from "./pages/Solutions";
import Adoucisseurs from "./pages/Adoucissement";
import AdoucisseurEauResidentiel from "./pages/Adoucisseur-eau-municipal";
import AdoucisseursEauDePuits from "./pages/Adoucisseurs-eau-de-puits";
import ConditionneursSansSel from "./pages/ConditionneursSansSel";
import StationEauPotable from "./pages/Systeme-de-filtration-deau-potable";
import EauDePuits from "./pages/EauDePuits";
import Filtration from "./pages/Filtration";
import Fontaines from "./pages/Fontaines";
import Blog from "./pages/Blog";
import BlogCategory from "./pages/BlogCategory";
import HivernisationProtegerFiltresDuGel from "./pages/Blog pages/Hivernisation-comment-proteger-vos-filtres-du-gel";
import PourquoiEauBacSelSale from "./pages/Blog pages/Pourquoi-leau-de-votre-bac-a-sel-est-elle-sale";
import QuelSelChoisirPastillesOuCristaux from "./pages/Blog pages/Quel-sel-choisir-pour-votre-adoucisseur-pastilles-ou-cristaux";
import AquariumEauOsmoseePoissons from "./pages/Blog pages/Aquarium-pourquoi-leau-osmosee-est-vitale-pour-vos-poissons";
import VraiCoutEauEmbouteillee from "./pages/Blog pages/Le-vrai-cout-de-leau-embouteillee-calculez-vos-economies";
import EauBebesBouillirEauFiltree from "./pages/Blog pages/Eau-et-bebes-faut-il-faire-bouillir-leau-filtree";
import Guides from "./pages/Guides";
import Videos from "./pages/Videos";
import Temoignages from "./pages/Temoignages";
import Service from "./pages/Service";
import Garantie from "./pages/Garantie";
import Pieces from "./pages/Pieces";
import Manuels from "./pages/Manuels";
import Promotions from "./pages/Promotions";
import SpecializedFiltration from "./pages/Filtres-deau-de-puits";
import FiltresPourTouteLaMaison from "./pages/Filtres-deau-pour-toute-la-maison";
import FiltrationSousEvier from "./pages/Systemes-de-filtration-deau-sous-evier";
import DesinfectionUV from "./pages/Systemes-de-desinfection-UV";
import FiltreEauHauteEfficacite from "./pages/Filtre-eau-haute-efficacite";
import RO6 from "./pages/RO-6";

import FiltresDeRemplacement from "./pages/Filtres-de-remplacement";
import Diagnostic from "./pages/Diagnostic";
import OperatorDashboard from "./pages/OperatorDashboard";
// import PourquoiLaLampeUV from "./pages/Blog pages/Pourquoi-la-lampe-UV-est-elle-indispensable-pour-votre-eau-de-puits";
import TraitementUVNaturel from "./pages/Blog pages/Adoucisseur-deau- et-fosse-septique--Mythes-et-réalités";
import FiltreDoucheBienfaits from "./pages/Blog pages/Adoucisseur-deau-portable-pour-VR";
import NiveauDureteBesoin from "./pages/Blog pages/Adoucisseur avec sel ou sans sel";
import MesurerDureteMaison from "./pages/Blog pages/Comment régler la dureté de votre adoucisseur ";
import CommentAdoucisseurReduitFacture from "./pages/Blog pages/Comment-un-adoucisseur-reduit-votre-facture-delectricite";
import ConsommationEauAdoucisseurEcologique from "./pages/Blog pages/Consommation-deau-un-adoucisseur-est-il-ecologique";
import EffetsCachesEauDureElectromenagers from "./pages/Blog pages/Eau-dure-les-effets-caches-sur-vos-electromenagers";
import EstCeSecuritaireBoireEauAdoucie from "./pages/Blog pages/Est-ce-securitaire-de-boire-de-leau-adoucie";
import GoutDeChlorePourquoiLaVilleEnAjouteAutant from "./pages/Blog pages/Gout-de-chlore-pourquoi-la-ville-en-ajoute-autant";


import NotFound from "./pages/NotFound";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <ChatWidget />
        <CookieConsent />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/adoucisseurs-portables" element={<Services />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/adoucissement" element={<Adoucisseurs />} />
          <Route path="/adoucisseur-eau-residentiel" element={<AdoucisseurEauResidentiel />} />
          <Route path="/adoucisseurs-eau-de-puits" element={<AdoucisseursEauDePuits />} />
          <Route path="/conditionneurs-sans-sel" element={<ConditionneursSansSel />} />
          <Route path="/systeme-de-filtration-deau-potable" element={<StationEauPotable />} />
          <Route path="/eau-de-puits" element={<EauDePuits />} />
          <Route path="/filtration" element={<Filtration />} />
          <Route path="/Filtres-deau" element={<SpecializedFiltration />} />
          <Route path="/Filtres-deau-pour-toute-la-maison" element={<FiltresPourTouteLaMaison />} />
          <Route path="/Systemes-de-filtration-deau-sous-evier" element={<FiltrationSousEvier />} />
          <Route path="/Systemes-de-desinfection-UV" element={<DesinfectionUV />} />
          <Route path="/filtre-eau-haute-efficacite" element={<FiltreEauHauteEfficacite />} />
          <Route path="/ro-6" element={<RO6 />} />
          <Route path="/fontaines" element={<Fontaines />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/categorie/:categoryId" element={<BlogCategory />} />
          <Route path="/hivernisation-comment-proteger-vos-filtres-du-gel" element={<HivernisationProtegerFiltresDuGel />} />
          <Route path="/pourquoi-leau-de-votre-bac-a-sel-est-elle-sale" element={<PourquoiEauBacSelSale />} />
          <Route path="/quel-sel-choisir-pour-votre-adoucisseur-pastilles-ou-cristaux" element={<QuelSelChoisirPastillesOuCristaux />} />
          <Route path="/aquarium-pourquoi-leau-osmosee-est-vitale-pour-vos-poissons" element={<AquariumEauOsmoseePoissons />} />
          <Route path="/le-vrai-cout-de-leau-embouteillee-calculez-vos-economies" element={<VraiCoutEauEmbouteillee />} />
          <Route path="/eau-et-bebes-faut-il-faire-bouillir-leau-filtree" element={<EauBebesBouillirEauFiltree />} />
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
          <Route path="/tests-eau" element={<TestsEau />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/entreprises" element={<Entreprises />} />
          <Route path="/commercial-industriel" element={<CommercialIndustriel />} />
          <Route path="/promotions" element={<Promotions />} />

          {/* Blog Routes */}
          <Route path="/adoucisseur-deau-et-fosse-septique-mythes-et-realites" element={<TraitementUVNaturel />} />
          <Route path="/adoucisseur-deau-portable-pour-vr" element={<FiltreDoucheBienfaits />} />
          <Route path="/adoucisseur-sans-sel-vs-avec-sel-verite-technique" element={<NiveauDureteBesoin />} />
          <Route path="/comment-regler-durete-adoucisseur-eau" element={<MesurerDureteMaison />} />
          <Route path="/comment-un-adoucisseur-reduit-votre-facture-delectricite" element={<CommentAdoucisseurReduitFacture />} />
          <Route path="/consommation-deau-un-adoucisseur-est-il-ecologique" element={<ConsommationEauAdoucisseurEcologique />} />
          <Route path="/eau-dure-les-effets-caches-sur-vos-electromenagers" element={<EffetsCachesEauDureElectromenagers />} />
          <Route path="/est-ce-securitaire-de-boire-de-leau-adoucie" element={<EstCeSecuritaireBoireEauAdoucie />} />
          <Route path="/gout-de-chlore-pourquoi-la-ville-en-ajoute-autant" element={<GoutDeChlorePourquoiLaVilleEnAjouteAutant />} />


          <Route path="/filtres-de-remplacement" element={<FiltresDeRemplacement />} />

          <Route path="/diagnostic" element={<Diagnostic />} />
          <Route path="/operator" element={<OperatorDashboard />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
