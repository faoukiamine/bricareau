import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import CookieConsent from "./components/CookieConsent";
import Industriel from "./pages/Industriel";
import ContactResidentiel from "./pages/ContactResidentiel";
import ContactEntreprises from "./pages/ContactEntreprises";
import ContactHub from "./pages/Contact";
import TestsEau from "./pages/Tests-Eau";
import FAQ from "./pages/FAQ";
import Entreprises from "./pages/Entreprises";
import Filtration from "./pages/Filtration";
import Fontaines from "./pages/fontaines-d-eau-residentielles";
import AdoucisseurEauCommercial from "./pages/AdoucisseurEauCommercial";
import Blog from "./pages/Blog";
import BlogCategory from "./pages/BlogCategory";
import HivernisationProtegerFiltresDuGel from "./pages/Blog pages/Hivernisation-comment-proteger-vos-filtres-du-gel";
import PourquoiEauBacSelSale from "./pages/Blog pages/Pourquoi-leau-de-votre-bac-a-sel-est-elle-sale";
import QuelSelChoisirPastillesOuCristaux from "./pages/Blog pages/Quel-sel-choisir-pour-votre-adoucisseur-pastilles-ou-cristaux";
import AquariumEauOsmoseePoissons from "./pages/Blog pages/Aquarium-pourquoi-leau-osmosee-est-vitale-pour-vos-poissons";
import VraiCoutEauEmbouteillee from "./pages/Blog pages/Le-vrai-cout-de-leau-embouteillee-calculez-vos-economies";
import EauBebesBouillirEauFiltree from "./pages/Blog pages/Eau-et-bebes-faut-il-faire-bouillir-leau-filtree";
import FiltreSousEvierPichetAlternative from "./pages/Blog pages/Filtre-sous-evier-lalternative-simple-aux-pichets-filtrants";
import FluorDansEauFiltrer from "./pages/Blog pages/Le-fluor-dans-leau-faut-il-le-filtrer";
import PlombVieillesMaisonsProteger from "./pages/Blog pages/Le-plomb-dans-les-vieilles-maisons-comment-se-proteger";
import EauDeVilleBesoinFiltration from "./pages/Blog pages/Pourquoi-meme-leau-de-ville-a-besoin-detre-filtree";
import EauPureGoutCafe from "./pages/Blog pages/Pourquoi-une-eau-pure-change-le-gout-du-cafe";
import EauPurePatisseries from "./pages/Blog pages/Pourquoi-leau-pure-ameliore-vos-patisseries";
import VivreCondoFiltrationCompacte from "./pages/Blog pages/Vivre-en-condo-les-solutions-de-filtration-compactes";
import CommentSavoirSiVotreLampeUVFonctionneEncore from "./pages/Blog pages/Comment-savoir-si-votre-lampe-uv-fonctionne-encore";
import RisquesLampeUV12Mois from "./pages/Blog pages/Les-risques-de-ne-pas-changer-sa-lampe-UV-apres-12-mois";
import FrequenceEntretienSystemeUV from "./pages/Blog pages/Quelle-frequence-dentretien-pour-un-systeme-UV-domestique";
import BacteriesPuitsDesinfectionChoc from "./pages/Blog pages/Bacteries-dans-le-puits-les-etapes-de-desinfection-choc";
import FerFerreuxVsFerFerrique from "./pages/Blog pages/Fer-ferreux-vs-Fer-ferrique-Quelle-difference-pour-le-filtre";
import FiltreCartoucheVsContreCourant from "./pages/Blog pages/Filtre-a-cartouche-vs-Filtre-a-lavage-a-contre-courant";
import InjectionDAirFiltrerFer from "./pages/Blog pages/Injection-dair-Comment-filtrer-le-fer-sans-produits-chimiques";
import NitratesEauPuitsDangersSolutions from "./pages/Blog pages/Les-nitrates-dans-leau-de-puits-dangers-et-solutions";
import OsmoseInverseSante from "./pages/Blog pages/Osmose-inverse-et-sante-quelle-qualite-deau-obtenez-vous";
import OsmoseInverseContaminantsInvisibles from "./pages/Blog pages/Comment-losmose-inverse-protege-votre-famille-des-contaminants-invisibles";
import EauPuitsOsmoseInverse from "./pages/Blog pages/Eau-du-puits-au-quebec-quand-installer-un-systeme-dosmose-inverse";
import OsmoseInverseEau100Pure from "./pages/Blog pages/Osmose-inverse-la-technologie-derriere-une-eau-100-pure";
import EauEmbouteilleeDangers from "./pages/Blog pages/Eau-embouteillee-les-dangers-meconnus-pour-votre-sante-au-quotidien";
import EauEmbouteilleeImpacts from "./pages/Blog pages/Eau-embouteillee-quels-impacts-sur-la-sante-et-la-planete";
import Temoignages from "./pages/Temoignages";
import ServicesTraitementEau from "./pages/Services-de-traitement-eau";

import Pieces from "./pages/Pieces";
import Promotions from "./pages/Promotions";
import DesinfectionUV from "./pages/Systemes-de-desinfection-UV";
import Consultation from "./pages/page-consultation";
import ContactForm from "./pages/Page-contact";
import FiltresDeRemplacement from "./pages/Filtres-de-remplacement";
import Diagnostic from "./pages/Diagnostic";
import SearchPage from "./pages/Search";

import TraitementUVNaturel from "./pages/Blog pages/Adoucisseur-deau- et-fosse-septique--Mythes-et-réalités";
import FiltreDoucheBienfaits from "./pages/Blog pages/Adoucisseur-deau-portable-pour-VR";
import NiveauDureteBesoin from "./pages/Blog pages/Adoucisseur avec sel ou sans sel";
import MesurerDureteMaison from "./pages/Blog pages/Comment régler la dureté de votre adoucisseur ";
import CommentAdoucisseurReduitFacture from "./pages/Blog pages/Comment-un-adoucisseur-reduit-votre-facture-delectricite";
import ConsommationEauAdoucisseurEcologique from "./pages/Blog pages/Consommation-deau-un-adoucisseur-est-il-ecologique";
import EffetsCachesEauDureElectromenagers from "./pages/Blog pages/Eau-dure-les-effets-caches-sur-vos-electromenagers";
import EstCeSecuritaireBoireEauAdoucie from "./pages/Blog pages/Est-ce-securitaire-de-boire-de-leau-adoucie";
import GoutDeChlorePourquoiLaVilleEnAjouteAutant from "./pages/Blog pages/Gout-de-chlore-pourquoi-la-ville-en-ajoute-autant";
import PolitiqueConfidentialite from "./pages/Politique-de-Confidentialite";
import ConditionsGeneralesUtilisation from "./pages/Conditions-Generales-Utilisation";
import Desabonnement from "./pages/Desabonnement";

import NotFound from "./pages/NotFound";

import DesabonnementSucces from "./pages/DesabonnementSucces";
import ResidentialServices from "./pages/residentiel";
import HotellerieRestauration from "./pages/HotellerieRestauration";
import FiltrationHotelsRestaurants from "./pages/FiltrationHotelsRestaurants";
import Bureau from "./pages/Bureau";
import A from "./pages/Adoucisseurs-deau";
import B from "./pages/Systemes-de-filtration-deau-specialises";
import WhyChooseUs from "./pages/Pourquoi-choisir-bricareau";
import Sustainability from "./pages/Durabilite";
import OurProcess from "./pages/notre-processus";
import Carrieres from "./pages/Carrieres";
import Home1 from "./pages/home";
import C from "./pages/Systemes-de-filtration-deau-sous-l-evier";
import FiltreEauMachineCafe from "./pages/FiltreEauMachineCafe";
import FontainesDeauModernes from "./pages/FontainesDeauModernes";

import SystemesCentralises from "./pages/SystemesCentralises";
import SolutionsBrasseries from "./pages/SolutionsBrasseries";
import FiltrationIndustrielle from "./pages/FiltrationIndustrielle";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <CookieConsent />
        <Routes>
          <Route path="/" element={<Home1 />} />
          <Route path="/solutions-d-adoucissement-de-filtration-et-de-purification-d-eau-residentielles" element={<ResidentialServices />} />
          <Route path="/solutions-de-traitement-et-filtration-d-eau-pour-hotels-et-restaurants" element={<HotellerieRestauration />} />
          <Route path="/filtration-hotels-restaurants" element={<FiltrationHotelsRestaurants />} />
          <Route path="/solutions-de-traitement-d-eau-pour-offices-et-bureaux" element={<Bureau />} />
          <Route path="/pourquoi-choisir-bricareau" element={<WhyChooseUs />} />
          <Route path="/durabilite" element={<Sustainability />} />
          <Route path="/notre-processus" element={<OurProcess />} />
          <Route path="/carrieres" element={<Carrieres />} />
          <Route path="/filtration" element={<Filtration />} />
          <Route path="/systemes-de-desinfection-uv" element={<DesinfectionUV />} />
          <Route path="/fontaines-et-refroidisseurs-d-eau-pour-une-eau-fraiche" element={<Fontaines />} />
          <Route path="/fontaines-et-refroidisseurs-d-eau-modernes-pour-entreprises" element={<FontainesDeauModernes />} />

          <Route path="/systemes-de-filtration-d-eau-centralises" element={<SystemesCentralises />} />
          <Route path="/solutions-brasseries" element={<SolutionsBrasseries />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/categorie/:categoryId" element={<BlogCategory />} />
          <Route path="/hivernisation-comment-proteger-vos-filtres-du-gel" element={<HivernisationProtegerFiltresDuGel />} />
          <Route path="/pourquoi-leau-de-votre-bac-a-sel-est-elle-sale" element={<PourquoiEauBacSelSale />} />
          <Route path="/quel-sel-choisir-pour-votre-adoucisseur-pastilles-ou-cristaux" element={<QuelSelChoisirPastillesOuCristaux />} />
          <Route path="/aquarium-pourquoi-leau-osmosee-est-vitale-pour-vos-poissons" element={<AquariumEauOsmoseePoissons />} />
          <Route path="/le-vrai-cout-de-leau-embouteillee-calculez-vos-economies" element={<VraiCoutEauEmbouteillee />} />
          <Route path="/eau-et-bebes-faut-il-faire-bouillir-leau-filtree" element={<EauBebesBouillirEauFiltree />} />
          <Route path="/filtre-sous-evier-lalternative-simple-aux-pichets-filtrants" element={<FiltreSousEvierPichetAlternative />} />
          <Route path="/le-fluor-dans-leau-faut-il-le-filtrer" element={<FluorDansEauFiltrer />} />
          <Route path="/le-plomb-dans-les-vieilles-maisons-comment-se-proteger" element={<PlombVieillesMaisonsProteger />} />
          <Route path="/pourquoi-meme-leau-de-ville-a-besoin-detre-filtree" element={<EauDeVilleBesoinFiltration />} />
          <Route path="/pourquoi-une-eau-pure-change-le-gout-du-cafe" element={<EauPureGoutCafe />} />
          <Route path="/pourquoi-leau-pure-ameliore-vos-patisseries" element={<EauPurePatisseries />} />
          <Route path="/vivre-en-condo-les-solutions-de-filtration-compactes" element={<VivreCondoFiltrationCompacte />} />
          <Route path="/comment-savoir-si-votre-lampe-uv-fonctionne-encore" element={<CommentSavoirSiVotreLampeUVFonctionneEncore />} />
          <Route path="/les-risques-de-ne-pas-changer-sa-lampe-uv-apres-12-mois" element={<RisquesLampeUV12Mois />} />
          <Route path="/quelle-frequence-dentretien-pour-un-systeme-uv-domestique" element={<FrequenceEntretienSystemeUV />} />
          <Route path="/bacteries-dans-le-puits-les-etapes-de-desinfection-choc" element={<BacteriesPuitsDesinfectionChoc />} />
          <Route path="/fer-ferreux-vs-fer-ferrique-quelle-difference-pour-le-filtre" element={<FerFerreuxVsFerFerrique />} />
          <Route path="/filtre-a-cartouche-vs-filtre-a-lavage-a-contre-courant" element={<FiltreCartoucheVsContreCourant />} />
          <Route path="/injection-dair-comment-filtrer-le-fer-sans-produits-chimiques" element={<InjectionDAirFiltrerFer />} />
          <Route path="/les-nitrates-dans-leau-de-puits-dangers-et-solutions" element={<NitratesEauPuitsDangersSolutions />} />
          <Route path="/osmose-inverse-et-sante-quelle-qualite-deau-obtenez-vous" element={<OsmoseInverseSante />} />
          <Route path="/comment-losmose-inverse-protege-votre-famille-des-contaminants-invisibles" element={<OsmoseInverseContaminantsInvisibles />} />
          <Route path="/eau-du-puits-au-quebec-quand-installer-un-systeme-dosmose-inverse" element={<EauPuitsOsmoseInverse />} />
          <Route path="/osmose-inverse-la-technologie-derriere-une-eau-100-pure" element={<OsmoseInverseEau100Pure />} />
          <Route path="/eau-embouteillee-les-dangers-meconnus-pour-votre-sante-au-quotidien" element={<EauEmbouteilleeDangers />} />
          <Route path="/eau-embouteillee-quels-impacts-sur-la-sante-et-la-planete" element={<EauEmbouteilleeImpacts />} />
          <Route path="/temoignages" element={<Temoignages />} />
          <Route path="/consultation" element={<Consultation />} />
          <Route path="/contact" element={<ContactHub />} />
          <Route path="/contact-form" element={<ContactForm />} />
          <Route path="/contact-residentiel" element={<ContactResidentiel />} />
          <Route path="/contact-entreprises" element={<ContactEntreprises />} />
          <Route path="/service" element={<ServicesTraitementEau />} />
          <Route path="/services-de-traitement-eau" element={<ServicesTraitementEau />} />

          <Route path="/pieces" element={<Pieces />} />
          <Route path="/Analyses-et-Tests-d-eau" element={<TestsEau />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/entreprises" element={<Entreprises />} />
          <Route path="/industriel" element={<Industriel />} />
          <Route path="/adoucisseurs-eau-commerciaux" element={<AdoucisseurEauCommercial />} />
          <Route path="/promotions" element={<Promotions />} />
          <Route path="/politique-de-confidentialite" element={<PolitiqueConfidentialite />} />
          <Route path="/conditions-generales-utilisation" element={<ConditionsGeneralesUtilisation />} />
          <Route path="/desabonnement" element={<Desabonnement />} />
          <Route path="/desabonnement-succes" element={<DesabonnementSucces />} />
          <Route path="/adoucisseurs-d-eau-residentiels-pour-une-eau-sans-calcaire" element={<A />} />
          <Route path="/Systemes-de-filtration-d-eau-specialises-pour-toute-la-maison" element={<B />} />
          <Route path="/Stations-d-eau-potables-sous-l-evier-de-la-cuisine" element={<C />} />



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

          <Route path="/filtres-d-eau-de-remplacement" element={<FiltresDeRemplacement />} />
          <Route path="/diagnostic" element={<Diagnostic />} />


          <Route path="/filtres-eau-machine-cafe" element={<FiltreEauMachineCafe />} />
          <Route path="/filtration-industrielle" element={<FiltrationIndustrielle />} />

          <Route path="/search" element={<SearchPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
