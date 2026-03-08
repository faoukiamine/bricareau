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
import CommentChoisirAdoucisseur from "./pages/Blog pages/Comment-choisir-un-adoucisseur-deau";
import FiltresDeRemplacement from "./pages/Filtres-de-remplacement";
import Diagnostic from "./pages/Diagnostic";
import OperatorDashboard from "./pages/OperatorDashboard";
// import PourquoiLaLampeUV from "./pages/Blog pages/Pourquoi-la-lampe-UV-est-elle-indispensable-pour-votre-eau-de-puits";
import PourquoiEauSentOeufsPourris from "./pages/Blog pages/Pourquoi-mon-eau-sent-l-odeur-des-oeufs-pourris";
import TachesOrangeDansLevier from "./pages/Blog pages/Taches-orange-dans-levier-eliminer-le-fer";
import FonctionnementUV from "./pages/Blog pages/Comment-fonctionne-la-desinfection-UV";
import SignesBesoinAdoucisseur from "./pages/Blog pages/5-signes-besoin-adoucisseur-eau";
import CalcaireElectromenagers from "./pages/Blog pages/calcaire-duree-vie-electromenagers";
import VaisselleTachetee from "./pages/Blog pages/vaisselle-tachetee-causes-solutions";
import PFASEauRobinet from "./pages/Blog pages/pfas-eau-robinet-elimination";
import EauDureVsDouce from "./pages/Blog pages/eau-dure-vs-eau-douce";
import PlombEauPotable from "./pages/Blog pages/plomb-eau-potable-risques-solutions";
import FluorEauBienfaitDanger from "./pages/Blog pages/fluor-eau-bienfait-danger";
import ContaminantsInvisiblesPuits from "./pages/Blog pages/contaminants-invisibles-eau-puits";
import ArsenicEauPotable from "./pages/Blog pages/arsenic-eau-potable-risques-filtration";
import NitratesEauDanger from "./pages/Blog pages/nitrates-eau-danger-nourrissons-elimination";
import MicroplastiquesEauRobinet from "./pages/Blog pages/microplastiques-eau-robinet-realite-inquietante";
import ResidusMedicamentsEau from "./pages/Blog pages/residus-medicaments-eau-risques-solutions";
import ManganeseFerEauBrune from "./pages/Blog pages/manganese-fer-eau-brune-remedes";
import ChloreEauMunicipale from "./pages/Blog pages/chlore-eau-municipale-nocif-necessaire";
import BacteriesEColiPuits from "./pages/Blog pages/bacteries-e-coli-eau-puits-causes-solutions";
import EauTurbideTrouble from "./pages/Blog pages/eau-turbide-trouble-causes-clarification";
import OsmoseInverseFamille from "./pages/Blog pages/osmose-inverse-domicile-meilleur-systeme-famille";
import FiltreEvierVsMaisonEntiere from "./pages/Blog pages/filtre-evier-vs-maison-entiere-choisir";
import FiltreCharbonActifLimites from "./pages/Blog pages/filtre-charbon-actif-capacite-limites";
import TraitementUVNaturel from "./pages/Blog pages/systeme-traitement-uv-solution-naturelle-bacteries";
import Filtration3vs5Etapes from "./pages/Blog pages/filtration-3vs5-etapes-sante-difference";
import FiltreDoucheBienfaits from "./pages/Blog pages/filtre-douche-bienfaits-peau-cheveux";
import FiltreEauAppartement from "./pages/Blog pages/filtre-eau-appartement-sans-plomberie";
import QuEstCeQuUnAdoucisseur from "./pages/Blog pages/qu-est-ce-qu-un-adoucisseur-eau-fonctionnement";
import NiveauDureteBesoin from "./pages/Blog pages/niveau-durete-eau-besoin-adoucisseur";
import MesurerDureteMaison from "./pages/Blog pages/comment-mesurer-durete-eau-maison";
import SignesBesoinAbsoluAdoucisseur from "./pages/Blog pages/les-signes-absolument-besoin-adoucisseur-eau";
import AdoucisseurSelVsSansSelEfficacite from "./pages/Blog pages/adoucisseur-eau-sel-vs-sans-sel-efficacite";
import RadonEtUraniumPuitsPrives from "./pages/Blog pages/radon-et-uranium-dans-les-puits-prives";

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
          <Route path="/comment-choisir-un-adoucisseur-deau" element={<CommentChoisirAdoucisseur />} />
          {/* <Route path="/blog/lampe-uv-eau-de-puits" element={<PourquoiLaLampeUV />} /> */}
          <Route path="/pourquoi-mon-eau-sent-l-odeur-des-oeufs-pourris" element={<PourquoiEauSentOeufsPourris />} />
          <Route path="/taches-orange-dans-levier-eliminer-le-fer" element={<TachesOrangeDansLevier />} />
          <Route path="/comment-fonctionne-la-desinfection-uv" element={<FonctionnementUV />} />
          <Route path="/5-signes-besoin-adoucisseur-eau" element={<SignesBesoinAdoucisseur />} />
          <Route path="/calcaire-duree-vie-electromenagers" element={<CalcaireElectromenagers />} />
          <Route path="/vaisselle-tachetee-causes-solutions" element={<VaisselleTachetee />} />
          <Route path="/pfas-eau-robinet-elimination" element={<PFASEauRobinet />} />
          <Route path="/eau-dure-vs-eau-douce" element={<EauDureVsDouce />} />
          <Route path="/plomb-eau-potable-risques-solutions" element={<PlombEauPotable />} />
          <Route path="/fluor-eau-bienfait-danger" element={<FluorEauBienfaitDanger />} />
          <Route path="/contaminants-invisibles-eau-puits" element={<ContaminantsInvisiblesPuits />} />
          <Route path="/arsenic-eau-potable-risques-filtration" element={<ArsenicEauPotable />} />
          <Route path="/nitrates-eau-danger-nourrissons-elimination" element={<NitratesEauDanger />} />
          <Route path="/microplastiques-eau-robinet-realite-inquietante" element={<MicroplastiquesEauRobinet />} />
          <Route path="/residus-medicaments-eau-risques-solutions" element={<ResidusMedicamentsEau />} />
          <Route path="/manganese-fer-eau-brune-remedes" element={<ManganeseFerEauBrune />} />
          <Route path="/chlore-eau-municipale-nocif-necessaire" element={<ChloreEauMunicipale />} />
          <Route path="/bacteries-e-coli-eau-puits-causes-solutions" element={<BacteriesEColiPuits />} />
          <Route path="/eau-turbide-trouble-causes-clarification" element={<EauTurbideTrouble />} />
          <Route path="/osmose-inverse-domicile-meilleur-systeme-famille" element={<OsmoseInverseFamille />} />
          <Route path="/filtre-evier-vs-maison-entiere-choisir" element={<FiltreEvierVsMaisonEntiere />} />
          <Route path="/filtre-charbon-actif-capacite-limites" element={<FiltreCharbonActifLimites />} />
          <Route path="/systeme-traitement-uv-solution-naturelle-bacteries" element={<TraitementUVNaturel />} />
          <Route path="/filtration-3vs5-etapes-sante-difference" element={<Filtration3vs5Etapes />} />
          <Route path="/filtre-douche-bienfaits-peau-cheveux" element={<FiltreDoucheBienfaits />} />
          <Route path="/filtre-eau-appartement-sans-plomberie" element={<FiltreEauAppartement />} />
          <Route path="/qu-est-ce-qu-un-adoucisseur-eau-fonctionnement" element={<QuEstCeQuUnAdoucisseur />} />
          <Route path="/niveau-durete-eau-besoin-adoucisseur" element={<NiveauDureteBesoin />} />
          <Route path="/comment-mesurer-durete-eau-maison" element={<MesurerDureteMaison />} />
          <Route path="/les-signes-absolument-besoin-adoucisseur-eau" element={<SignesBesoinAbsoluAdoucisseur />} />
          <Route path="/adoucisseur-eau-sel-vs-sans-sel-efficacite" element={<AdoucisseurSelVsSansSelEfficacite />} />
          <Route path="/radon-et-uranium-dans-les-puits-prives" element={<RadonEtUraniumPuitsPrives />} />

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
