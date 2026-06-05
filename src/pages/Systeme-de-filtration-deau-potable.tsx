import Header from "@/components/Header";
import { cn } from "@/lib/utils";
import Hero from "@/components/Hero";
import ExpertAvatars from "@/components/ExpertAvatars";
import GlobalBreadcrumbs from "@/components/GlobalBreadcrumbs";
import Footer from "@/components/Footer";
import { ProMaxButton } from "@/components/ui/ProMaxButton";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Check,
  Phone,
  CheckCircle2,
  X,
  ChevronRight,
  ChevronLeft,
  GlassWater,
  CircleDollarSign,
  Trash2,
  Wrench,
  Droplets,
  Zap,
  Search,
  ShieldCheck,
  ShieldAlert,
  Sparkles,
  Activity,
  Microscope,
  Waves,
  CheckCircle
} from "lucide-react";
import safetyIcon from "@/assets/1709235770048.png";
import { NavLink } from "@/components/NavLink";
import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import ConsultationFormSection from "@/components/ConsultationFormSection";
import TestimonialsSection from "@/components/TestimonialsSection";

import heroDrink from "@/assets/boire-eau-robinet.jpg";
import drinkingWaterImg from "@/assets/Solutions d'eau potable.webp";
import vectapureROImg from "@/assets/V3604RO.jpg";
import freezelifeROImg from "@/assets/67acea99-c085-4df5-b21f-e840244a30db.jpg";
import sereneLiteImg from "@/assets/Système+de+filtration+Serene+Lite.webp";
import specializedFiltersImg from "@/assets/Filtres d'eau spécialisés.webp";
import waterSoftenerImg from "@/assets/Adoucisseurs d'eau.webp";
import uvSystemImg from "@/assets/Systèmes de désinfection UV.webp";
import waterTestingImg from "@/assets/leaky-faucet-with-dripping-water-drop-conservation-concept.jpg";
import fluorideImg from "@/assets/2147807855.jpg";
import microplasticsImg from "@/assets/2148214464.jpg";
import pfasImg from "@/assets/PFAS.jpg.jpg";
import { heroImg as healthwaterImg } from "./Blog pages/Eau-du-puits-au-quebec-quand-installer-un-systeme-dosmose-inverse";
import { heroImg as drinkpurewaterImg } from "./Blog pages/Comment-losmose-inverse-protege-votre-famille-des-contaminants-invisibles";
import rowaterImg from "@/assets/reasons-to-drink-more-water.jpg";
import schemaOsmoseImg from "@/assets/Schema-osmose-inverse.png";
import eauFontaineImg from "@/assets/reasons-to-drink-more-water.jpg";
import eauMedicamentsImg from "@/assets/eau_medicaments.png";
import ourteamstudyyourwaterImg from "@/assets/10271.jpg";
import reverseosmosisinstallationImg from "@/assets/Reverse Osmosis Installation.jpg";

const StationEauPotable = () => {
  const navigate = useNavigate();
  const [showAllFaqs, setShowAllFaqs] = React.useState(false);
  const [activeCol, setActiveCol] = React.useState(0);
  const resourcesRef = React.useRef<HTMLDivElement>(null);

  const scrollResources = (direction: 'left' | 'right') => {
      if (resourcesRef.current) {
          const scrollAmount = resourcesRef.current.clientWidth * 0.8;
          resourcesRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
      }
  };

  const [resourceIndex, setResourceIndex] = React.useState(1);
  const resources = [
    {
      title: "Eau du puits au Québec : quand installer un système d'osmose inverse",
      img: healthwaterImg,
      link: "/eau-du-puits-au-quebec-quand-installer-un-systeme-dosmose-inverse"
    },
    {
      title: "Comment l'osmose inverse protège votre famille des contaminants invisibles",
      img: drinkpurewaterImg,
      link: "/comment-losmose-inverse-protege-votre-famille-des-contaminants-invisibles"
    },
    {
      title: "Osmose inverse : la technologie derrière une eau 100 % pure",
      img: rowaterImg,
      link: "/osmose-inverse-la-technologie-derriere-une-eau-100-pure"
    },
  ];

  const handleScrollRessources = () => {
    if (resourcesRef.current) {
        const scrollLeft = resourcesRef.current.scrollLeft;
        const containerWidth = resourcesRef.current.offsetWidth;
        const itemWidth = resourcesRef.current.querySelector('div')?.offsetWidth || containerWidth;
        const newIndex = Math.round(scrollLeft / itemWidth) + 1;
        setResourceIndex(Math.min(newIndex, resources.length));
    }
  };

  useEffect(() => {
    document.title = "Osmose Inverse au Québec | Système de Filtration d'Eau Potable | Bricareau";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
        metaDesc.setAttribute("content", "Obtenez une eau d'une pureté absolue avec nos systèmes d'osmose inverse au Québec. Élimine 99% des contaminants, métaux lourds et chlore pour une santé optimale.");
    }

    // OG Tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", "Osmose Inverse Québec : L'Eau la plus Pure à Domicile | Bricareau");
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", "Dites adieu aux bouteilles d'eau. Profitez d'une eau filtrée de qualité premium directement à votre robinet avec Bricareau au Québec.");
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute("content", "https://bricareau.com/systeme-de-filtration-deau-potable");
  }, []);

  interface ComparisonItem {
    feature: string;
    stage4: boolean | string;
    stage6: boolean | string;
    stage5: boolean | string;
  }

  const comparisonData: ComparisonItem[] = [
    { feature: "Installation sous l'évier (Point d'usage)", stage4: true, stage6: true, stage5: true },
    { feature: "Nombre d'étapes de filtration", stage4: "4 Étapes", stage6: "5 Étapes", stage5: "6 Étapes" },
    { feature: "Production journalière", stage4: "75 GPD", stage6: "600 GPD", stage5: "75 GPD" },
    { feature: "Élimination sédiments et chlore", stage4: true, stage6: true, stage5: true },
    { feature: "Membrane d'osmose inverse (99%)", stage4: true, stage6: true, stage5: true },
    { feature: "Double pré-filtration au charbon", stage4: false, stage6: true, stage5: true },
    { feature: "Filtre de polissage final", stage4: true, stage6: true, stage5: true },
    { feature: "Cartouche de reminéralisation", stage4: "Option", stage6: "Option", stage5: true },
    { feature: "Équilibrage du pH (Alcalin)", stage4: "Option", stage6: "Option", stage5: "Option" },
  ];

  return (
    <div className="min-h-screen bg-background text-slate-900 font-sans">
       <Header />
       <main>
                <Hero 
                    image={heroDrink}
                    highlightedTitle="Système d'osmose inverse,"
                    mainTitle="la pureté absolue à chaque goutte."
                    subtitle="Transformez votre eau municipale en une source de pureté cristalline. Nos purificateurs d'eau par osmose inverse éliminent 99% des contaminants pour une eau fraîche, saine et alcaline."
                    ctaText="Explorer nos systèmes"
                    ctaLink="#purification-systems"
                    showPhone={true}
                    showBreadcrumbs={true}
                />
        {/* 2. La Science de la Pureté - Technical Journey Transition */}
        <section className="py-20 lg:py-24 bg-slate-50/50 relative overflow-hidden">
          {/* Background Technical Watermark */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.03] pointer-events-none z-0">
             <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-600 to-transparent scale-150" />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
              
              {/* Left: The Narrative Content */}
              <div className="lg:col-span-6 space-y-10">
                <div className="space-y-6">
                  <span className="inline-block px-4 py-1.5 bg-blue-600 text-white rounded-full text-[10px] font-black uppercase tracking-[0.3em] shadow-lg shadow-blue-200">
                    L'INGÉNIERIE DE LA PURETÉ
                  </span>
                            <h2 className="mb-8 heading-pro-max text-left">
                                <span className="italic font-light text-[#18448F] block">Plus qu’un filtre,</span>
                                <span className="font-bold text-[#18448F] block text-left">une métamorphose.</span>
                            </h2>
                </div>
                
                <p className="body-pro-max text-slate-600 mb-0 text-justify max-w-xl">
                  Issue du dessalement de l’eau de mer, cette technologie utilise une membrane de 0,0001 micron pour bloquer les impuretés les plus infimes. Cette barrière physique absolue élimine virus, métaux lourds et micropolluants, garantissant une pureté cristalline constante à chaque verre.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8 border-t border-slate-100">
                   {[
                     { 
                       title: "Qualité supérieure à l'eau embouteillée", 
                       desc: "Accédez à une eau d'une pureté certifiée, surpassant les standards des eaux minérales du commerce."
                     },
                     { 
                       title: "Barrière anti-polluants", 
                       desc: "Éliminez efficacement les résidus de médicaments, le plomb et les micro-plastiques indétectables."
                     },
                     { 
                       title: "Saveur des aliments préservée", 
                       desc: "Redécouvrez le vrai goût de vos infusions, de votre café et de vos préparations culinaires."
                     },
                     { 
                       title: "Pureté en libre-service", 
                       desc: "Profitez d'un débit constant et illimité directement à votre robinet, sans aucune attente."
                     }
                   ].map((item, idx) => (
                     <div key={idx} className="group p-1 transition-all duration-500 cursor-default">
                        <div className="flex items-start gap-3 mb-2">
                           <div className="h-6 flex items-center shrink-0"> {/* H-6 matching the line-height of text-lg (approx 1.5rem/24px) */}
                              <div className="w-1.5 h-1.5 bg-slate-500 rounded-full group-hover:scale-125 transition-transform" />
                           </div>
                           <h5 className="font-[420] block text-slate-500 text-left leading-6">{item.title}</h5>
                        </div>
                        <div className="pl-[1.125rem]"> {/* Align with title text (6px bullet + 12px gap) */}
                           <p className="text-slate-500 font-light text-sm leading-relaxed text-left">{item.desc}</p>
                        </div>
                     </div>
                   ))}
                </div>
              </div>

              {/* Right: The Visual Connection (The "Core" of Osmosis) */}
              <div className="lg:col-span-6 relative">
                 <div className="relative max-w-2xl mx-auto group">
                    {/* Integrated Schema - No Card/Box */}
                    <div className="relative overflow-hidden transition-all duration-700">
                       <img 
                          src={schemaOsmoseImg} 
                          alt="Schéma technique du processus de filtration par osmose inverse Bricareau" 
                          className="w-full h-auto relative z-10 transition-transform duration-700"
                       />
                    </div>
                 </div>

                 {/* Tech Label */}
                 <div className="mt-16 bg-slate-50 rounded-3xl p-8 border border-slate-100 flex items-center gap-6">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                       <ShieldCheck className="w-6 h-6 text-blue-600" />
                    </div>
                    <p className="text-slate-500 text-sm font-light italic leading-snug">
                       "Une barrière physique absolue contre les virus, PFAS, hormones et métaux lourds."
                    </p>
                 </div>
              </div>

            </div>
          </div>
        </section>

        {/* 3. Menaces Invisibles - Symptom-Logic Bento Grid */}
        <section className="relative py-32 bg-white overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-24">
              <span className="inline-block px-4 py-1.5 bg-blue-600 text-blue-600 rounded-full text-xs text-white font-black uppercase tracking-widest mb-6">
                L'INVISIBLE DANS VOTRE VERRE
              </span>
               <h2 className="mb-8 heading-pro-max text-center">
                  <span className="font-bold not-italic text-[#18448F] block">Ce que vos sens ne peuvent</span>
                  <span className="font-bold text-[#18448F] block text-center">pas détecter.</span>
              </h2>
              <p className="body-pro-max text-slate-500 text-center mx-auto">
                Le chlore n'est que la pointe de l'iceberg. Votre eau municipale peut abriter des micro-polluants invisibles qui s'accumulent silencieusement dans votre organisme.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {[
                { 
                  title: "PFAS 'Polluants Éternels'", 
                  threat: "Hautement Persistant", 
                  desc: "Utilisés dans l'industrie, ils ne se dégradent jamais. L'osmose inverse est l'une des rares barrières physiques certifiées pour les bloquer.",
                  img: pfasImg,
                  badge: "Risque Santé",
                  icon: <ShieldAlert className="w-5 h-5 text-red-500" />
                },
                { 
                  title: "Micro-plastiques", 
                  threat: "Omniprésent", 
                  desc: "Des milliers de fragments par litre. Nos membranes de 0.0001 micron garantissent une eau sans résidus plastiques pour toute la famille.",
                  img: microplasticsImg,
                  badge: "Environnement",
                  icon: <Microscope className="w-5 h-5 text-blue-500" />
                },
                { 
                  title: "Fluorure & Chlore", 
                  threat: "Goût & Équilibre", 
                  desc: "Indispensables au traitement, mais désagréables en bouche. Retrouvez la pureté d'une eau de source minérale sans les additifs chimiques.",
                  img: fluorideImg,
                  badge: "Pureté Gout",
                  icon: <Waves className="w-5 h-5 text-emerald-500" />
                },
                { 
                  title: "Résidus Médicinaux", 
                  threat: "Invisible", 
                  desc: "Trace d'hormones et d'antibiotiques traversant les filtres standards. Offrez à vos enfants une eau débarrassée de toute substance étrangère.",
                  img: eauMedicamentsImg,
                  badge: "Protection Enfant",
                  icon: <Activity className="w-5 h-5 text-amber-500" />
                }
              ].map((item, i) => (
                <div key={i} className="group relative bg-[#F8FAFC] rounded-[2.5rem] p-4 border border-slate-100/50 hover:bg-white transition-all duration-700 hover:shadow-[0_40px_100px_-20px_rgba(30,58,138,0.1)] overflow-hidden">
                  <div className="relative h-64 overflow-hidden rounded-[2rem] mb-8">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-[3000ms] group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute top-4 left-4 z-20">
                      <div className="bg-white/90 backdrop-blur-xl px-4 py-1.5 rounded-full flex items-center gap-2 shadow-sm">
                        {item.icon}
                        <span className="text-[10px] font-black text-slate-900 uppercase tracking-widest">{item.badge}</span>
                      </div>
                    </div>
                  </div>
                  <div className="px-4 pb-4 space-y-4">
                    <div className="space-y-1">
                      <span className="text-[10px] font-black text-red-600 uppercase tracking-widest">{item.threat}</span>
                      <h3 className="text-xl font-bold text-[#18448F] leading-tight group-hover:text-blue-600 transition-colors">{item.title}</h3>
                    </div>
                    <p className="text-slate-500 text-sm leading-relaxed font-light text-justify">{item.desc}</p>
                    <Button 
                      variant="link"
                      onClick={() => document.getElementById('nos-produits')?.scrollIntoView({ behavior: 'smooth' })} 
                      className="pt-4 flex items-center gap-2 text-blue-600 text-xs font-bold uppercase tracking-widest group-hover:gap-4 transition-all h-auto p-0"
                    >
                      La Barrière <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3.5 NOS PRODUITS - Premium Catalog Grid */}
        <section id="nos-produits" className="py-32 bg-slate-50/50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-[120px] -mr-64 -mt-64 z-0" />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center max-w-4xl mx-auto mb-20 space-y-4">
              <span className="inline-block px-4 py-1.5 bg-blue-600 text-white rounded-full text-xs font-black uppercase tracking-widest mb-6">
                La Gamme Bricareau Pure
              </span>
              <h2 className="mb-8 heading-pro-max text-center">
                <span className="italic font-light text-[#18448F] block">Nos systèmes de</span>
                <span className="font-bold text-[#18448F] block text-center">purification d'eau.</span>
              </h2>
              <p className="body-pro-max text-center mx-auto max-w-2xl px-4 lg:px-0">
                Découvrez nos solutions de pointe, de la filtration compacte sous évier aux systèmes d'osmose inverse haute performance sans réservoir.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 max-w-7xl mx-auto">
              {[
                {
                  title: "Vectapure NX",
                  subtitle: "L'Essentiel de la Pureté",
                  desc: "Un système à 4 étapes éprouvé, ultra-compact et efficace pour les budgets maîtrisés.",
                  img: vectapureROImg,
                  badge: "Série NX",
                  color: "bg-blue-600",
                  features: ["4 étapes", "75 GPD", "Changement des filtres facile "]
                },
                {
                  title: "Essentiel",
                  subtitle: "Le Choix des Familles",
                  desc: "Notre best-seller à 6 étapes avec polissage final pour une eau d'une douceur incomparable.",
                  img: drinkingWaterImg,
                  badge: "Populaire",
                  color: "bg-emerald-600",
                  features: ["6 étapes", "Production 75 GPD", "Maintenance Facile"]
                },
                {
                  title: "Sérénité Direct-Flow",
                  subtitle: "Performance sans Réservoir",
                  desc: "Débit instantané 600 GPD. Pas de réservoir encombrant, eau fraîche en continu à volonté.",
                  img: freezelifeROImg,
                  badge: "Vitesse XXL",
                  color: "bg-amber-600",
                  features: ["5 étapes", "600 GPD réels", "Compact"]
                }
              ].map((item, i) => (
                <div key={i} className="group bg-white rounded-[3rem] p-8 border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.03)] hover:shadow-[0_45px_100px_rgba(0,0,0,0.1)] transition-all duration-700 hover:-translate-y-2 flex flex-col h-full">
                  <div className="w-full aspect-square bg-slate-50/50 rounded-[2.5rem] mb-8 overflow-hidden relative p-4 flex items-center justify-center">
                    <img src={item.img} alt={item.title} className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-[2s]" />
                    <div className="absolute top-4 right-4">
                      <div className={cn("px-4 py-1.5 rounded-full shadow-lg backdrop-blur-sm", item.color)}>
                        <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white italic">{item.badge}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-grow space-y-3">
                    <div className="text-blue-600 font-bold text-[9px] uppercase tracking-[0.2em]">{item.subtitle}</div>
                    <h3 className="text-2xl font-bold text-slate-900 tracking-tight leading-tight group-hover:text-blue-600 transition-colors">{item.title}</h3>
                    <p className="text-slate-500 font-light text-sm leading-relaxed mb-6">{item.desc}</p>
                    
                    <div className="space-y-3 pt-4 border-t border-slate-50">
                      {item.features.map((f, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                          <span className="text-xs font-medium text-slate-600">{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-10 pt-8 border-t border-slate-50 flex items-center justify-end">
                    <div 
                      onClick={() => navigate('/contact')}
                      className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-500 cursor-pointer group/btn"
                    >
                      <ArrowRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-1" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Pourquoi choisir - Fluid Editorial Design */}
        <section id="purification-systems" className="py-32 bg-white relative overflow-hidden">
          {/* Background Decorative Elements */}
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-50/30 rounded-full blur-[120px] -translate-y-1/2 z-0" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-50/20 rounded-full blur-[100px] translate-y-1/2 z-0" />

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-24">
              <span className="inline-block px-4 py-1.5 bg-blue-600 text-blue-600 rounded-full text-xs text-white font-black uppercase tracking-widest mb-6">
                L'EXCELLENCE D'UNE EAU SANTÉ AU QUOTIDIEN
              </span>
              <h2 className="mb-8 heading-pro-max text-center">
                                <span className="italic font-light text-[#18448F] block">Pourquoi choisir nos</span>
                                <span className="font-bold text-[#18448F] block text-center">systèmes de purification d'eau par osmose inverse ?</span>
                            </h2>
              <div className="w-16 h-0.5 bg-blue-600/20 mx-auto mb-10" />
              <p className="body-pro-max text-slate-500 max-w-2xl mx-auto text-center italic">
                Une technologie de pointe pour une eau d'une pureté exceptionnelle tout en offrant une protection permanente pour votre foyer.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-24">
              {[
                { 
                  icon: ShieldCheck, 
                  title: "Sécurité maximale", 
                  desc: "Élimine 99% des virus, bactéries et contaminants chimiques.",
                  num: "01"
                },
                { 
                  icon: Droplets, 
                  title: "Goût incomparable", 
                  desc: "Retrouvez le vrai goût de l'eau, limpide et rafraîchissante.",
                  num: "02"
                },
                { 
                  icon: GlassWater, 
                  title: "Eau pure 24/7", 
                  desc: "Accès instantané à une eau de meilleure qualité.",
                  num: "03"
                },
                { 
                  icon: CircleDollarSign, 
                  title: "Économies", 
                  desc: "Éliminez l'achat de bouteilles d'eau plastique.",
                  num: "04"
                },
              ].map((item, i) => (
                <div key={i} className="group flex items-start gap-10">
                  <div className="relative flex-shrink-0">
                    <div className="w-16 h-16 flex items-center justify-center text-blue-600 transition-all duration-700">
                      <item.icon strokeWidth={1} className="w-14 h-14 group-hover:scale-110 group-hover:rotate-6 transition-all duration-700" />
                    </div>
                    <span className="absolute -top-6 -left-6 text-6xl font-black text-blue-100/20 group-hover:text-blue-200/30 transition-colors duration-700 select-none">
                      {item.num}
                    </span>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <h3 className="text-2xl font-bold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors duration-500 text-left">
                        {item.title}
                      </h3>
                      <div className="h-px w-0 group-hover:w-12 bg-blue-600/30 transition-all duration-700" />
                    </div>
                    <p className="body-pro-max text-slate-500 text-left opacity-80 group-hover:opacity-100 transition-opacity duration-500 max-w-lg">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
             {/* Featured Banner with generated image */}
                        <div className="rounded-none lg:rounded-[3rem] overflow-hidden shadow-none lg:shadow-2xl border-0 lg:border border-slate-100 group relative -mx-6 lg:mx-0 mt-24 lg:mt-32">
                            <img 
                                src={reverseosmosisinstallationImg} 
                                alt="Installation professionnelle d'un adoucisseur d'eau Bricareau" 
                                className="w-full h-[450px] md:h-[550px] lg:h-[650px] object-cover group-hover:scale-105 transition-transform duration-[3000ms] brightness-[1.1] contrast-[1.05]"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-[#18448F]/80 via-[#18448F]/40 to-transparent p-8 md:p-12 lg:p-20 flex items-center lg:pt-32">
                                <div className="max-w-lg">
                                    <div className="flex items-center gap-3 text-blue-400 font-bold text-xs tracking-widest uppercase mb-6">
                                        <CheckCircle className="w-5 h-5" />
                                        Engagement Certifié
                                    </div>
                                    <h3 className="text-white text-4xl font-bold mb-6 leading-tight">Offrez à votre famille la qualité d'une eau pure de qualité minérale.</h3>
                                    <p className="text-white text-lg mb-10 text-justify">
                                        Profitez d'une installation propre, durable et optimisée par nos experts. Optez pour la tranquillité d'esprit avec une intégration technique signée Bricareau Water Specialist.                                
                                    </p>
                                </div>
                            </div>
                        </div>
          </div>
        </section>

        {/* 5. Comparison Table */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-left mb-16">
              <h2 className="mb-8 heading-pro-max text-left">
                                <span className="italic font-light text-[#18448F] block">Comparez nos solutions</span>
                                <span className="font-bold text-[#18448F] block text-left">de filtration d'eau potable</span>
                            </h2>
              <div className="w-24 h-1 bg-blue-600"></div>
            </div>
                        <div className="overflow-x-visible relative">
                            {/* Navigation Arrows for Mobile/Tablet */}
                            <div className="lg:hidden flex items-center justify-end gap-3 mb-8 relative z-30">
                                <Button 
                                    size="icon" 
                                    variant="outline" 
                                    onClick={() => setActiveCol(Math.max(0, activeCol - 1))}
                                    disabled={activeCol === 0}
                                >
                                    <ChevronLeft className="h-5 w-5" />
                                </Button>
                                <div className="flex gap-1.5 px-2">
                                    {[0, 1, 2].map((i) => (
                                        <div key={i} className={`h-1.5 rounded-full transition-all duration-300 ${i === activeCol ? 'w-6 bg-blue-600' : 'w-1.5 bg-blue-100'}`} />
                                    ))}
                                </div>
                                <Button 
                                    size="icon" 
                                    variant="outline" 
                                    onClick={() => setActiveCol(Math.min(2, activeCol + 1))}
                                    disabled={activeCol === 2}
                                >
                                    <ChevronRight className="h-5 w-5" />
                                </Button>
                            </div>

                            <div className="overflow-x-auto lg:overflow-x-visible no-scrollbar pb-8">
                                <table className="w-full border-collapse bg-white rounded-3xl overflow-hidden shadow-2xl relative">
                                    <thead>
                                        <tr className="bg-slate-50 relative z-20">
                                            <th className="p-6 md:p-10 text-left text-blue-900/40 font-black uppercase tracking-widest text-[10px] sticky left-0 bg-slate-50 z-30 border-r border-slate-100 drop-shadow-md lg:drop-shadow-none min-w-[160px] md:min-w-[200px]">
                                                Critères Techniques
                                            </th>
                                            {[
                                                { name: "Série Vectapure", img: vectapureROImg, badge: "L'Essentiel", color: "bg-blue-600" },
                                                { name: "Série Essentiel", img: drinkingWaterImg, badge: "Le Plus Populaire", color: "bg-emerald-600" },
                                                { name: "Série Sérénité", img: freezelifeROImg, badge: "Débit Direct", color: "bg-amber-600" },
                                            ].map((m, i) => (
                                                <th 
                                                    key={i} 
                                                    className={cn(
                                                        "p-4 md:p-6 text-center transition-all duration-500 min-w-[220px]",
                                                        i === activeCol ? "table-cell" : "hidden lg:table-cell"
                                                    )}
                                                >
                                                    <div className="flex flex-col items-center gap-6">
                                                        <div className="relative group/img">
                                                            <div className={`absolute -top-3 -right-12 z-20 ${m.color} text-white text-[8px] font-black uppercase tracking-[0.4em] px-3 py-1 rounded-full shadow-2xl whitespace-nowrap scale-90 md:scale-100`}>
                                                                {m.badge}
                                                            </div>
                                                            <div className="absolute inset-0 bg-blue-600 rounded-full blur-2xl opacity-0 group-hover/img:opacity-20 transition-opacity duration-700" />
                                                            <img
                                                                src={m.img}
                                                                alt={m.name}
                                                                className="w-[140px] md:w-[140px] h-[100px] md:h-[120px] object-contain mx-auto mix-blend-multiply relative z-10 transition-transform duration-700 group-hover/img:scale-110"
                                                            />
                                                        </div>
                                                        <div className="text-[13px] md:text-lg font-bold text-[#18448F]">{m.name}</div>
                                                    </div>
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100 relative z-10">
                                        {comparisonData.map((row, i) => (
                                            <tr key={i} className="hover:bg-blue-50/30 transition-colors group">
                                                <td className="p-6 md:p-10 font-bold text-[#18448F] bg-white sticky left-0 z-30 border-r border-slate-50 drop-shadow-sm lg:drop-shadow-none text-[12px] md:text-sm italic group-hover:text-blue-600 transition-colors">
                                                    {row.feature}
                                                </td>
                                                {["stage4", "stage5", "stage6"].map((model, idx) => (
                                                    <td 
                                                        key={model} 
                                                        className={cn(
                                                            "p-6 md:p-10 text-center text-[13px] md:text-sm font-light leading-relaxed text-slate-600 transition-all duration-500",
                                                            idx === activeCol ? "table-cell" : "hidden lg:table-cell"
                                                        )}
                                                    >
                                                        {(() => {
                                                            const val = row[model as keyof typeof row];
                                                            if (typeof val === 'string') return <span className="text-blue-600 font-bold bg-blue-50/50 px-4 py-1.5 rounded-full text-[10px] uppercase shadow-sm whitespace-nowrap">{val}</span>;
                                                            if (val === true) return <CheckCircle2 className="h-5 w-5 md:h-6 md:w-6 text-blue-600 mx-auto" />;
                                                            return <div className="h-5 w-5 md:h-6 md:w-6 mx-auto opacity-10"><X className="h-5 w-5 md:h-6 md:w-6" /></div>;
                                                        })()}
                                                    </td>
                                                ))}
                                            </tr>
                                        ))}
                                            <tr className="bg-slate-50/50">
                                                <td className="p-6 md:p-10 sticky left-0 z-30 bg-slate-50 border-r border-slate-100"></td>
                                                {[0, 1, 2].map((idx) => (
                                                    <td 
                                                        key={idx}
                                                        className={cn(
                                                            "p-6 md:p-10 text-center transition-all duration-500",
                                                            idx === activeCol ? "table-cell" : "hidden lg:table-cell"
                                                        )}
                                                    >
                                                        <ProMaxButton asChild className="w-full h-16">
                                                            <NavLink to="/contact">Choisir ce système</NavLink>
                                                        </ProMaxButton>
                                                    </td>
                                                ))}
                                            </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
          </div>
        </section>
        {/* 6. Water Testing Section (Redesigned for Mobile) */}
        <section className="relative lg:h-[800px] flex flex-col lg:flex-row items-stretch overflow-hidden bg-white">
          {/* Mobile Image */}
          <div className="lg:hidden w-full h-auto relative bg-slate-50">
            <img
              src={waterTestingImg}
              alt="Analyse d'eau à domicile pour détecter le calcaire et le chlore - Service Bricareau"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Desktop Background */}
          <div className="hidden lg:block absolute inset-0 z-0">
            <img
              src={waterTestingImg}
              alt="Analyse d'eau à domicile"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/30 lg:bg-gradient-to-r lg:from-black/50 lg:to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-white via-white/10 to-transparent" />
          </div>
          <div className="container mx-auto px-4 relative z-10 flex items-center py-12 lg:py-0">
                        <div className="max-w-2xl text-slate-900 lg:text-white">
                            <span className="text-blue-600 lg:text-blue-600 text-xs font-black uppercase tracking-[0.3em] mb-8 block">
                                Contrôle de la Qualité D'EAU
                            </span>
                            <h2
                                className="mb-8 heading-pro-max text-left"
                            >
                                <span className="font-light italic text-[#18448F] lg:text-white block">La vérité dans chaque</span>
                                <span className="text-[#18448F] lg:text-white italic font-bold font-serif">goutte d'eau.</span>
                            </h2>
              <p className="body-pro-max text-black lg:text-white/95 mb-8 max-w-xl text-left lg:text-justify">
                Pourquoi deviner quand vous pouvez vérifier ? Un test d'eau simple pour une protection durable de l'eau de votre foyer.
              </p>
              <div className="flex gap-4">
                                <ProMaxButton
                                    asChild
                                    variant="dark"
                                    className="w-full sm:w-auto h-16 px-12"
                                >
                                    <a href="/tests-eau">Demandez une analyse d'eau</a>
                                </ProMaxButton>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Testimonials Section */}
        <TestimonialsSection
          filterProduct="/systeme-de-filtration-deau-potable"
          title={
                            <h2 className="heading-pro-max tracking-tight leading-[1.1] mb-6 relative z-10">
                                <span className="font-bold not-italic text-[#18448F] block text-center">L'eau de source,</span>
                                <span className="font-bold not-italic text-[#18448F] block text-center"><span className="text-[#8CC63F]">sans</span> la bouteille.</span>
                            </h2>
          }
        />

                {/* 10. PREMIUM CTA SECTION - REBUILT FOR IMPACT */}
                <section className="relative py-32 flex items-center overflow-hidden bg-[#18448F]">
                    {/* Animated background elements */}
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-600/20 to-transparent skew-x-12 translate-x-1/4" />
                    <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-cyan-400/10 to-transparent -skew-x-12 -translate-x-1/4" />
                    
                    {/* Background Image with Overlay */}
                    <div className="absolute inset-0 z-0 opacity-40">
                        <img
                            src={eauFontaineImg}
                            alt="Problématique d'eau dure sur la robinetterie - Solution Bricareau"
                            className="w-full h-full object-cover grayscale brightness-150"
                        />
                        <div className="absolute inset-0 bg-[#18448F]/10 backdrop-blur-sm" />
                    </div>

                    <div className="container mx-auto px-6 relative z-10">
                        <div className="max-w-5xl mx-auto text-center space-y-12">
                            <div className="space-y-6">
                                <span className="inline-block px-4 py-1.5 bg-white text-blue-600 rounded-full text-[10px] font-black uppercase tracking-[0.4em]">
                                    LE SOMMET DE LA PURETÉ À LA MAISON
                                </span>
                                <h2 className="font-light block leading-tight lg:leading-[52px] text-white">
                                    Redéfinissez votre standard <br />
                                    <span className="text-white italic font-bold font-serif">de pureté d'eau.</span>
                                </h2>
                                <p className="text-lg md:text-xl text-blue-100/80 max-w-2xl mx-auto font-light leading-relaxed">
                                    Pourquoi vous contenter d'une eau ordinaire quand vous pouvez offrir à votre foyer une source de pureté incomparable ? L'osmose inverse élimine les impuretés invisibles pour ne laisser que l'essentiel : une eau cristalline, un goût exceptionnel et une tranquillité d'esprit totale. Faites le choix de la technologie la plus avancée pour votre santé et votre confort.                                </p>
                            </div>

                                 <ProMaxButton 
                                     asChild
                                     variant="white"
                                     className="w-full sm:w-auto h-16 px-12"
                                 >
                                     <a href="tel:18552649328" className="flex items-center gap-3">
                                         <Phone className="h-5 w-5 animate-bounce" />
                                         Parlez à un expert
                                     </a>
                                 </ProMaxButton>
                                 <ProMaxButton
                                     asChild
                                     variant="outline-white"
                                     className="w-full sm:w-auto h-16 px-12"
                                 >
                                     <NavLink to="/consultation">Planifiez une consultation</NavLink>
                                 </ProMaxButton>

                            <div className="pt-8 flex flex-col items-center gap-4">
                                <ExpertAvatars />
                                <p className="text-blue-200/60 text-sm font-medium">
                                    Rejoignez plus de <span className="text-white">1,500 familles</span> satisfaites au Québec cette année.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>


{/* 9. FAQ Section */}
        <section className="py-24 bg-white border-t border-slate-100">
          <div className="container mx-auto px-6">
            <div className="text-left mb-16">
              <h2 className="mb-8 heading-pro-max text-left">
                                <span className="italic font-light text-[#18448F] block">Pour vous éclairer</span>
                                <span className="font-bold text-[#18448F] block">Questions fréquentes</span>
                            </h2>

              <div className="w-24 h-1 bg-blue-600"></div>
            </div>

            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {[
                  {
                    q: "Qu'est-ce qu'un système d'osmose inverse sous évier ?",
                    a: "C'est un système de purification d'eau compact installé directement sous votre évier de cuisine. Il utilise une technologie de filtration à plusieurs étapes, incluant une membrane semi-perméable, pour fournir une eau d'une pureté exceptionnelle directement à un robinet dédié."
                  },
                  {
                    q: "Quels sont les principaux avantages d'un système d'osmose inverse ?",
                    a: "Le principal avantage est la suppression de 99 % des contaminants (plomb, chlore, fluorure, arsenic, nitrates, etc.). Cela améliore considérablement le goût, l'odeur et la sécurité de votre eau pour boire et cuisiner, tout en éliminant le besoin d'acheter de l'eau en bouteille."
                  },
                  {
                    q: "Est-ce difficile à installer sous un évier de cuisine ?",
                    a: "Bien que l'installation puisse être réalisée par un bon bricoleur, nous recommandons une installation professionnelle par nos techniciens certifiés Bricareau. Cela garantit une étanchéité parfaite, un raccordement conforme au drain et une pression optimale du réservoir."
                  },
                  {
                    q: "Combien de place le système prend-il dans mon armoire ?",
                    a: "Nos systèmes modernes sont conçus pour être compacts. L'unité de filtration mesure généralement environ 15-18 pouces de hauteur, et le réservoir de stockage occupe une place similaire à celle d'un grand panier à pharmacie. Il reste généralement assez d'espace pour vos produits ménagers."
                  },
                  {
                    q: "L'osmose inverse élimine-t-elle les minéraux essentiels ?",
                    a: "L'osmose inverse est si efficace qu'elle retire presque tout, y compris les minéraux. C'est pourquoi nos systèmes haut de gamme incluent une cartouche de reminéralisation qui réintroduit du calcium et du magnésium, équilibrant le pH pour une eau alcaline plus saine."
                  },
                  {
                    q: "Est-ce que le système nécessite un robinet séparé ?",
                    a: "Oui, la plupart des installations incluent un petit robinet design dédié à l'eau purifiée. Cela permet de préserver vos filtres en utilisant l'eau standard pour la vaisselle et l'eau osmosée uniquement pour la consommation et la cuisson. Des robinets '3-en-1' sont aussi disponibles en option."
                  },
                  {
                    q: "À quelle fréquence faut-il remplacer les filtres ?",
                    a: "Les pré-filtres (sédiments et charbon) doivent généralement être changés tous les 6 à 12 mois pour protéger la membrane. La membrane d'osmose inverse elle-même dure généralement entre 2 et 4 ans, selon votre consommation et la dureté de votre eau."
                  },
                  {
                    q: "Peut-on connecter le système à un réfrigérateur ou une machine à glaçons ?",
                    a: "Absolument ! Nous pouvons installer une ligne de dérivation pour alimenter votre réfrigérateur en eau osmosée. Vous obtiendrez ainsi des glaçons cristallins et de l'eau fraîche purifiée directement de votre distributeur de porte."
                  },
                  {
                    q: "L'eau osmosée est-elle meilleure que l'eau en bouteille ?",
                    a: "Dans la majorité des cas, oui. L'eau osmosée à domicile est souvent plus fraîche et subit moins de risques de contamination par le plastique des bouteilles. De plus, c'est une solution beaucoup plus écologique et économique à long terme."
                  },
                  {
                    q: "Quelle est la différence entre un filtre à charbon simple et l'osmose inverse ?",
                    a: "Un filtre à charbon simple réduit principalement le goût de chlore et les odeurs. L'osmose inverse va beaucoup plus loin en éliminant les solides dissous, les métaux lourds, les virus et les bactéries que le charbon seul ne peut pas arrêter."
                  },
                  {
                    q: "Le système fait-il du bruit pendant son fonctionnement ?",
                    a: "Le système est pratiquement silencieux. Vous pourriez entendre un léger sifflement ou un gargouillis très discret pendant qu'il remplit le réservoir ou évacue les impuretés, mais cela s'arrête dès que le réservoir est plein."
                  },
                  {
                    q: "Comment savoir si mes filtres doivent être changés ?",
                    a: "Une baisse notable du débit au robinet dédié ou un changement subtil du goût sont des indicateurs. Chez Bricareau, nous proposons également des tests de conductivité (TDS) lors de nos visites d'entretien pour mesurer précisément l'efficacité de la membrane."
                  },
                  {
                    q: "L'osmose inverse retire-t-elle le calcaire ?",
                    a: "Oui, elle est extrêmement efficace pour retirer les minéraux de dureté (calcium/magnésium). Cependant, si votre eau est extrêmement dure, nous recommandons un adoucisseur en amont pour éviter que la membrane de l'osmose ne s'encrasse trop rapidement."
                  },
                  {
                    q: "Est-ce que le système gaspille beaucoup d'eau ?",
                    a: "L'osmose inverse nécessite un flux d'eau pour rincer les impuretés de la membrane (eau de rejet). Nos systèmes récents sont optimisés pour être très efficaces, avec des ratios de rejet très bas comparés aux anciens modèles des années 90."
                  },
                  {
                    q: "Quelle est la durée de vie globale du système ?",
                    a: "Avec un entretien régulier et des changements de filtres planifiés, un système d'osmose inverse de qualité Bricareau peut facilement durer 15 à 20 ans. C'est un investissement durable pour la santé de votre famille."
                  },
                ].slice(0, showAllFaqs ? undefined : 6).map((item, idx) => (
                  <AccordionItem key={idx} value={`item-${idx}`} className="border-b-slate-100 px-4">
                    <AccordionTrigger className="text-left text-base font-medium leading-6 hover:no-underline py-8 text-slate-800" style={{}}>
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="body-pro-max text-slate-500 pb-8 text-justify">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
              <div className="mt-12 text-center">
                <ProMaxButton
                  onClick={() => setShowAllFaqs(!showAllFaqs)}
                >
                  {showAllFaqs ? "Voir moins de questions" : "Voir toutes les questions"}
                </ProMaxButton>
              </div>
            </div>
          </div>
        </section>

        {/* 8. Resources Section */}
        <section className="py-24 bg-white border-t border-slate-100">
          <div className="container mx-auto px-6">
            <div className="text-left mb-16">
               <h2 className="mb-8 heading-pro-max text-left">
                                <span className="font-bold text-[#18448F] block">Ressources</span>
                            </h2>
              <div className="w-24 h-1 bg-blue-600"></div>
            </div>
            <div 
              ref={resourcesRef}
              onScroll={handleScrollRessources}
              className="flex lg:grid lg:grid-cols-3 gap-8 overflow-x-auto lg:overflow-x-visible no-scrollbar snap-x snap-mandatory pb-12 px-1 lg:px-0 scroll-smooth"
            >
              {resources.map((art, i) => (
                <div
                  key={i}
                  className="min-w-[70vw] md:min-w-[45vw] lg:min-w-0 snap-center group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full cursor-pointer"
                  onClick={() => navigate(art.link || "#")}
                >
                  <div className="h-56 overflow-hidden">
                    <img
                      src={art.img}
                      alt={`${art.title} - Guide expert Bricareau sur la filtration d'eau potable`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-8 text-left border-t-2 border-transparent group-hover:border-blue-600 transition-colors flex flex-col flex-grow">
                    <h4 className="mb-4 group-hover:text-blue-600 transition-colors tracking-tight font-medium text-base leading-6 text-[#0F1729]">{art.title}</h4>
                    <div className="mt-auto">
                      <NavLink
                        to={art.link || "#"}
                        className="text-blue-600 font-bold flex items-center gap-2 group-hover:underline text-sm"
                      >
                        Lire <ChevronRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                      </NavLink>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation arrows and numbering for carousel - Mobile/Tablet ONLY */}
            <div className="lg:hidden flex items-center justify-center relative mt-6">
              <div className="flex items-center gap-4">
                <Button 
                    size="icon" 
                    onClick={() => scrollResources('left')}
                >
                    <ChevronLeft className="h-6 w-6" />
                </Button>
                <Button 
                    size="icon" 
                    onClick={() => scrollResources('right')}
                >
                    <ChevronRight className="h-6 w-6" />
                </Button>
              </div>
                
                <div className="absolute right-2 text-sm font-black text-[#18448F] bg-blue-50/50 px-4 py-2 rounded-full border border-blue-100/50">
                    <span className="text-blue-600">{resourceIndex}</span>
                    <span className="mx-1 text-slate-300">/</span>
                    <span className="text-slate-400">{resources.length}</span>
                </div>
            </div>
          </div>
        </section>

      </main >
      <Footer />

      <ProMaxButton
        asChild
        variant="white"
        className="rounded-[2.5rem] h-16 px-8 shadow-2xl transition-all border-none"
        style={{ backdropFilter: "blur(20px)" }}
      >
        <a href="/consultation" className="flex items-center gap-4">
          <span className="font-black text-[10px] uppercase tracking-[0.2em] text-[#18448F] whitespace-nowrap text-left leading-relaxed">
            Réservez votre <br />consultation gratuite
          </span>
          <div className="w-10 h-10 bg-[#18448F] rounded-full flex items-center justify-center text-white group-hover:rotate-[360deg] transition-transform duration-700 shadow-lg shadow-blue-200">
            <ArrowRight className="w-5 h-5" />
          </div>
        </a>
      </ProMaxButton>
    </div >
  );
};

export default StationEauPotable;
