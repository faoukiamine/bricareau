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
  CheckCircle,
  Anvil,
  Leaf
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
import waterSoftenerImg from "@/assets/Alternating Water Softener.png";
import uvSystemImg from "@/assets/Systèmes de désinfection UV.webp";
import fountainCardImg from "@/assets/nouveau-distributeur-comptoir.png";
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
import springWaterImg from "@/assets/pure-spring-water.png";
import eliteROImg_filtration from "@/assets/Triple Stage Filter.jpg";
import plusROImg_filtration from "@/assets/Double Stage Filter.jpg";
import essentialImg_filtration from "@/assets/Single Stage Filter.jpg";
import waterFilterPng from "@/assets/water-filter_8782563.png";

const WaterFilterIcon = ({ className }: { className?: string }) => (
    <div 
        className={className} 
        style={{
            backgroundColor: "currentColor",
            maskImage: `url(${waterFilterPng})`,
            maskSize: 'contain',
            maskRepeat: 'no-repeat',
            maskPosition: 'center',
            WebkitMaskImage: `url(${waterFilterPng})`,
            WebkitMaskSize: 'contain',
            WebkitMaskRepeat: 'no-repeat',
            WebkitMaskPosition: 'center',
        }}
    />
);

const C = () => {
  const navigate = useNavigate();
  const [showAllFaqs, setShowAllFaqs] = React.useState(false);
  const [activeCol, setActiveCol] = React.useState(0);
  const [desktopPage, setDesktopPage] = React.useState(0); // 0 or 1
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
    document.title = "Stations d'eau potable sous l'évier | Bricareau";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
        metaDesc.setAttribute("content", "Profitez d'une eau pure, saine et sans contaminants directement à votre robinet grâce à nos systèmes de filtration et stations d'eau potable sous l'évier.");
    }
    
    // OG Tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", "Stations d'eau potable sous l'évier | Bricareau");
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", "Profitez d'une eau pure, saine et sans contaminants directement à votre robinet grâce à nos systèmes de filtration et stations d'eau potable sous l'évier.");
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute("content", "https://bricareau.com/Stations-d-eau-potables-sous-l-evier-de-la-cuisine");
  }, []);

  interface ComparisonItem {
    feature: string;
    essential: boolean | string;
    plus: boolean | string;
    elite: boolean | string;
    stage4: boolean | string;
    stage5: boolean | string;
    stage6: boolean | string;
  }

  const comparisonData: ComparisonItem[] = [
    { feature: "Installation sous l'évier", essential: true, plus: true, elite: true, stage4: true, stage5: true, stage6: true },
    { feature: "Technologie de pointe", essential: "Filtration", plus: "Filtration", elite: "Ultrafiltration", stage4: "Osmose Inverse", stage5: "Osmose Inverse", stage6: "Osmose Inverse" },
    { feature: "Nombre d'étapes", essential: "1 étape", plus: "2 étapes", elite: "3 étapes", stage4: "4 étapes", stage5: "6 étapes", stage6: "5 étapes" },
    { feature: "Élimination sédiments", essential: true, plus: true, elite: true, stage4: true, stage5: true, stage6: true },
    { feature: "Élimination Chlore / Goût", essential: false, plus: true, elite: true, stage4: true, stage5: true, stage6: true },
    { feature: "Retrait COV / Pesticides", essential: false, plus: true, elite: true, stage4: true, stage5: true, stage6: true },
    { feature: "Ultrafiltration (0.01µ)", essential: false, plus: false, elite: true, stage4: false, stage5: false, stage6: false },
    { feature: "Osmose Inverse (0.0001µ)", essential: false, plus: false, elite: false, stage4: true, stage5: true, stage6: true },
    { feature: "Bactéries / Virus", essential: false, plus: false, elite: "99.9%", stage4: "99.9%", stage5: "99.9%", stage6: "99.9%" },
    { feature: "Maintien des minéraux", essential: true, plus: true, elite: true, stage4: "Non", stage5: "Non", stage6: "Non" },
    { feature: "Reminéralisation (Alcalin)", essential: false, plus: false, elite: false, stage4: "Option", stage5: true, stage6: "Option" },
    { feature: "Aucun rejet d'eau au drain", essential: true, plus: true, elite: true, stage4: false, stage5: false, stage6: false },
    { feature: "Production (GPD)", essential: "Débit Direct", plus: "Débit Direct", elite: "Débit Direct", stage4: "75 GPD", stage5: "75 GPD", stage6: "600 GPD" },
  ];



  return (
    <div className="min-h-screen bg-background text-slate-900 font-sans">
       <Header />
       <main>
                <section className="relative bg-white overflow-hidden min-h-screen flex flex-col justify-center pt-24 pb-16 lg:pt-28 lg:pb-16 border-b border-slate-200">
                    <div className="absolute top-[30px] left-0 right-0 z-30 pointer-events-none hidden lg:block">
                        <div className="container mx-auto px-6 pointer-events-auto">
                            <GlobalBreadcrumbs />
                        </div>
                    </div>
                    <div className="absolute inset-0 w-full h-full opacity-40 md:opacity-100">
                        {/* Mobile Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/40 to-transparent z-10 md:hidden"></div>
                        {/* Tablet Vertical Filter (Progressive) */}
                        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,white_0%,rgba(255,255,255,0.8)_25%,rgba(255,255,255,0.4)_60%,transparent_100%)] z-10 hidden md:block lg:hidden"></div>
                        {/* Desktop Gradient: fade over the text area */}
                        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent z-10 hidden lg:block w-[50%]"></div>
                        
                        <div className="absolute right-0 top-0 w-full h-full lg:w-[65%]">
                            {/* Inner gradient to blend the hard edge on desktop */}
                            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent z-10 hidden lg:block w-1/3"></div>
                            <img 
                                src={heroDrink} 
                                className="absolute inset-0 w-full h-full object-cover object-center lg:object-center"
                                alt="Stations d'eau potables sous l'évier" 
                                title="Filtration d'eau par Bricareau" 
                            />
                        </div>
                    </div>
                    <div className="absolute right-0 top-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent pointer-events-none z-20"></div>
                    
                    <div className="container mx-auto px-6 relative z-30">
                        <div className="max-w-3xl flex flex-col justify-center">
                            <div className="mb-8">
                                <h1 className="text-[50px] leading-[55px] font-sans font-bold mb-6 tracking-tight drop-shadow-sm">
                                    <span className="text-[#18448F]">Prêt à découvrir</span> <span className="text-[#8CC63F]">l'excellence</span>
                                    <br className="hidden md:block lg:hidden" />
                                    <span className="text-[#8CC63F]"> de l'eau pure</span> <br className="md:hidden"/>
                                    <span className="text-[#18448F]"> directement</span>
                                    <br className="hidden md:block lg:hidden" />
                                    <span className="text-[#18448F]"> sous votre évier ?</span>
                                </h1>
                                
                                <p className="text-slate-600 text-lg sm:text-xl font-light leading-relaxed max-w-xl">
                                    Profitez d'une eau potable d'une qualité exceptionnelle directement de votre robinet. Nos systèmes de filtration d'eau sous comptoir et d'ultrafiltration éliminent 99% des contaminants pour la santé de votre famille.
                                </p>
                            </div>
                            
                            <div className="flex flex-col sm:flex-row items-start gap-6 mb-16">
                                <div className="relative inline-block w-full sm:w-auto group">
                                    <div className="absolute inset-0 border border-[#18448F] rounded-[2rem] -translate-x-[5px] translate-y-[5px] transition-transform group-hover:-translate-x-[3px] group-hover:translate-y-[3px]"></div>
                                    <button
                                        className="relative flex items-center justify-center w-full sm:w-auto bg-[#18448F] text-white hover:bg-transparent hover:text-[#18448F] border border-[#18448F] rounded-[2rem] h-[3.25rem] px-8 font-black uppercase tracking-[0.1em] text-[11px] transition-all"
                                        onClick={() => navigate("/consultation")}
                                    >
                                        Planifier une consultation gratuite
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. Menaces Invisibles - Symptom-Logic Bento Grid */}
        <section className="relative py-32 bg-white overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-24">
              <span className="inline-block px-4 py-1.5 bg-[#18448F] text-white rounded-full text-xs font-black uppercase tracking-widest mb-6">
                L'INVISIBLE DANS VOTRE VERRE
              </span>
               <h2 className="mb-8 heading-pro-max text-center">
                  <span className="font-bold not-italic text-[#18448F] block">Quelles menaces invisibles se cachent</span>
                  <span className="font-bold text-[#8CC63F] block text-center">dans votre eau du robinet ?</span>
              </h2>
              <p className="body-pro-max text-slate-500 text-center mx-auto">
                Le chlore n'est que la pointe de l'iceberg. Votre eau municipale peut abriter des micro-polluants invisibles qui s'accumulent silencieusement dans votre organisme.
              </p>
            </div>
            <div className="flex lg:grid lg:grid-cols-2 gap-6 lg:gap-12 overflow-x-auto lg:overflow-x-visible snap-x snap-mandatory lg:snap-none no-scrollbar px-4 lg:px-0 max-w-5xl mx-auto pb-12 lg:pb-0" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
              {Array(20).fill([
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
              ]).flat().map((item, i) => (
                <div key={i} className={`w-[85vw] md:w-[50vw] lg:w-auto shrink-0 snap-center lg:snap-none group relative bg-[#F8FAFC] rounded-[2.5rem] p-4 border border-slate-100/50 hover:bg-white transition-all duration-700 hover:shadow-[0_40px_100px_-20px_rgba(30,58,138,0.1)] overflow-hidden ${i >= 4 ? 'lg:hidden' : ''}`}>
                  <div className="relative h-64 overflow-hidden rounded-[2rem] mb-8">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-[3000ms] group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute top-4 left-4 z-20">
                      <div className="bg-white/90 backdrop-blur-xl px-4 py-1.5 rounded-full flex items-center gap-2 shadow-sm">
                        <span className="text-[10px] font-black text-slate-900 uppercase tracking-widest">{item.badge}</span>
                      </div>
                    </div>
                  </div>
                  <div className="px-4 pb-4 space-y-4">
                    <div className="space-y-1">
                      <span className="text-[10px] font-black text-[#8CC63F] uppercase tracking-widest">{item.threat}</span>
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

                {/* FUSION: AEO TARGET PARAGRAPH & L'EAU DE SOURCE */}
                <section className="py-24 lg:py-40 bg-white relative overflow-hidden" id="aeo-osmose">
                    {/* Immersive Background Decor */}
                    <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 -skew-x-12 translate-x-1/4 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-50/30 rounded-full blur-[100px] -translate-x-1/2 pointer-events-none" />

                    <div className="container mx-auto px-6 relative z-10">
                        
                        {/* AEO Intro (Centered) */}
                        <div className="max-w-4xl mx-auto text-center mb-20 lg:mb-32">
                            <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#18448F] border border-blue-800 text-white text-xs font-bold tracking-[0.2em] uppercase mb-8">
                                Technologie de pointe
                            </div>
                            <h2 className="mb-8 heading-pro-max text-center">
                                <span className="font-bold not-italic text-[#18448F]">Qu'est-ce qu'un système de filtration </span>
                                <span className="font-bold not-italic text-[#8CC63F]">sous évier ?</span>
                            </h2>
                        </div>

                        {/* L'EAU DE SOURCE Core Content */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-x-24 lg:gap-y-8 items-start">
                            
                            {/* 1. Header Column (Mobile: 1st, Desktop: Top Right) */}
                            <div className="lg:col-span-7 lg:col-start-6 space-y-8">
                                <div className="space-y-8">
                                    <p className="body-pro-max text-slate-500 max-w-2xl text-justify">
                                        Une solution d'avant-garde (osmose inverse ou ultrafiltration) qui s'intègre de manière invisible sous votre comptoir. Elle élimine jusqu'à 99 % des contaminants—chlore, plomb, PFAS et microplastiques—pour vous offrir une eau pure, cristalline et sécuritaire à chaque utilisation. Ne faites plus aucun compromis. Transformez votre robinet en une source de pureté gastronomique. Nos systèmes filtrent l'indésirable pour ne laisser couler que l'essentiel : une eau fraîche, saine et libérée des contraintes du plastique.
                                    </p>
                                </div>
                            </div>

                            {/* 2. Image Column (Mobile: 2nd, Desktop: Spanning Left) */}
                            <div className="lg:col-span-5 lg:row-start-1 lg:row-span-2 relative group mt-8 lg:mt-0">
                                <div className="absolute -inset-4 bg-slate-100 rounded-[4rem] group-hover:bg-cyan-50 transition-colors duration-700 -rotate-2" />
                                <div className="relative aspect-[4/5] overflow-hidden rounded-[3rem] shadow-2xl border border-white/50">
                                    <img 
                                        src={springWaterImg} 
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                                     alt="Eau de source pure Bricareau" title="Expert en eau par Bricareau" />
                                    {/* Experience Label */}
                                    <div className="absolute bottom-6 left-6 p-4 bg-white/10 backdrop-blur-md rounded-2xl group-hover:-translate-y-2 transition-all duration-500">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-blue-200">
                                                <Droplets className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <p className="text-[9px] font-black uppercase tracking-widest text-[#164E63]">Pureté Absolue</p>
                                                <p className="text-base font-bold text-[#18448F]">Zéro Chlore, 100% Vie</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 3. Benefits Column (Mobile: 3rd, Desktop: Bottom Right) */}
                            <div className="lg:col-span-7 lg:col-start-6 space-y-12 mt-8 lg:mt-0">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {[
                                        { 
                                            title: "Gastronomie", 
                                            benefit: "Goût & Odeur", 
                                            desc: "Redécouvrez l'arôme pur de vos cafés et thés, libéré des saveurs chimiques de l'eau de ville.",
                                            icon: <Anvil className="w-5 h-5 text-cyan-600" /> 
                                        },
                                        { 
                                            title: "Protection", 
                                            benefit: "Zéro Plomb", 
                                            desc: "Une barrière physique impénétrable contre les résidus métalliques des canalisations anciennes.",
                                            icon: <ShieldCheck className="w-5 h-5 text-emerald-600" />
                                        },
                                        { 
                                            title: "Science", 
                                            benefit: "Technologies Multiples", 
                                            desc: "Sédiments, charbon actif, ultrafiltration (UF) et osmose inverse (RO). Un arsenal complet et modulable selon vos besoins.",
                                            icon: <Microscope className="w-5 h-5 text-blue-600" />
                                        },
                                        { 
                                            title: "Écologie", 
                                            benefit: "Zéro Déchet", 
                                            desc: "Évitez 2000 bouteilles plastiques par an. Économisez pour vous et préservez pour la planète.",
                                            icon: <Leaf className="w-5 h-5 text-emerald-500" />
                                        }
                                    ].map((item, idx) => (
                                        <div key={idx} className="group/item flex flex-col gap-4 p-6 bg-slate-50/50 rounded-3xl border border-transparent hover:border-cyan-100 hover:bg-white hover:shadow-xl transition-all duration-500">
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm border border-slate-100 group-hover/item:scale-110 transition-transform">
                                                    {item.icon}
                                                </div>
                                                <div>
                                                    <p className="text-[10px] font-black text-cyan-600 uppercase tracking-widest">{item.title}</p>
                                                    <h3 className="text-lg font-bold text-[#164E63]">{item.benefit}</h3>
                                                </div>
                                            </div>
                                            <p className="text-slate-500 text-sm leading-relaxed font-light text-justify">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>

                                <div className="pt-8">
                                    <ProMaxButton asChild className="w-full sm:w-fit group">
                                        <button onClick={() => document.getElementById('nos-produits')?.scrollIntoView({ behavior: 'smooth' })} className="flex items-center justify-center gap-3">
                                            Passer à l'eau pure dès aujourd'hui
                                            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                        </button>
                                    </ProMaxButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3.5 NOS PRODUITS - Premium Catalog Grid */}
            <section id="nos-produits" className="py-32 bg-slate-50/50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-[120px] -mr-64 -mt-64 z-0" />
                
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center max-w-4xl mx-auto mb-20 space-y-4">
                        <span className="inline-block px-4 py-1.5 bg-[#18448F] text-white rounded-full text-xs font-black uppercase tracking-widest mb-6">
                            La Gamme Bricareau Pure
                        </span>
                        <h2 className="mb-8 heading-pro-max text-center whitespace-nowrap">
                            <span className="font-bold not-italic text-[#18448F]">Nos systèmes de filtration d'eau </span>
                            <span className="font-bold not-italic text-[#8CC63F]">sous évier.</span>
                        </h2>
                        <p className="body-pro-max text-center mx-auto max-w-2xl px-4 lg:px-0">
                            Découvrez nos solutions de pointe, de la filtration compacte sous évier aux systèmes d'osmose inverse haute performance sans réservoir.
                        </p>
                    </div>

                    {/* Carousel layout container */}
                    <div className="w-full flex flex-col select-none overflow-hidden">
                        <div className="w-full max-w-7xl relative group px-4 lg:px-12 mb-16 mx-auto">
                            {/* Left Navigation Arrow */}
                            <button 
                                onClick={() => {
                                    const el = document.getElementById("c-systemes-slider-track");
                                    if (el) {
                                        const cardWidth = el.firstElementChild ? el.firstElementChild.clientWidth + 24 : 360;
                                        if (el.scrollLeft <= 15) {
                                            const maxScrollLeft = el.scrollWidth - el.clientWidth;
                                            el.scrollTo({ left: maxScrollLeft, behavior: "smooth" });
                                        } else {
                                            el.scrollBy({ left: -cardWidth, behavior: "smooth" });
                                        }
                                    }
                                }}
                                className="absolute left-0 lg:-left-2 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-slate-900 hover:bg-[#18448F] text-white flex items-center justify-center shadow-lg transition-all hover:scale-110 active:scale-95"
                                aria-label="Précédent"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>

                            {/* Right Navigation Arrow */}
                            <button 
                                onClick={() => {
                                    const el = document.getElementById("c-systemes-slider-track");
                                    if (el) {
                                        const cardWidth = el.firstElementChild ? el.firstElementChild.clientWidth + 24 : 360;
                                        const maxScrollLeft = el.scrollWidth - el.clientWidth;
                                        if (el.scrollLeft >= maxScrollLeft - 15) {
                                            el.scrollTo({ left: 0, behavior: "smooth" });
                                        } else {
                                            el.scrollBy({ left: cardWidth, behavior: "smooth" });
                                        }
                                    }
                                }}
                                className="absolute right-0 lg:-right-2 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-slate-900 hover:bg-[#18448F] text-white flex items-center justify-center shadow-lg transition-all hover:scale-110 active:scale-95"
                                aria-label="Suivant"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>

                            {/* Scroll Track */}
                            <div 
                                id="c-systemes-slider-track"
                                className="flex gap-6 overflow-x-auto scroll-smooth pb-6 snap-x snap-mandatory no-scrollbar pl-0 pr-0"
                                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                            >
                                {[
                                    { 
                                        title: "Cristal Pro I", 
                                        desc: "La première ligne de défense pour votre eau. Ce filtre à sédiments haute performance élimine efficacement le sable, la rouille et les particules en suspension.", 
                                        img: essentialImg_filtration, 
                                        badge: "Sédiments", 
                                        color: "bg-blue-600",
                                        features: ["Filtration sédiments 5µ", "Élimine sable et rouille", "Installation ultra-simple"]
                                    },
                                    { 
                                        title: "Cristal Pro II", 
                                        desc: "La combinaison parfaite pour une eau saine. Ce système duo associe la filtration des sédiments à un filtre charbon actif premium, éliminant chlore et goûts désagréables.", 
                                        img: plusROImg_filtration, 
                                        badge: "Duo Pur", 
                                        color: "bg-emerald-600",
                                        features: ["Duo Sédiments + Charbon", "Élimine le goût de chlore", "Cartouches haute capacité"]
                                    },
                                    { 
                                        title: "Cristal Pro III", 
                                        desc: "La technologie d'ultrafiltration avancée. Ce système offre une purification microscopique supérieure, filtrant virus et bactéries tout en conservant les minéraux.", 
                                        img: eliteROImg_filtration, 
                                        badge: "Ultrafiltration", 
                                        color: "bg-amber-600",
                                        features: ["Ultrafiltration 0.01 micron", "Barrière microbiologique", "Conserve les minéraux"]
                                    },
                                    {
                                        title: "Vectapure NX",
                                        desc: "Un système à 4 étapes éprouvé, ultra-compact et efficace pour les budgets maîtrisés. Idéal pour les appartements et petits espaces.",
                                        img: vectapureROImg,
                                        badge: "Série NX",
                                        color: "bg-blue-600",
                                        features: ["4 étapes de filtration", "Membrane 75 GPD", "Changement de filtres rapide"]
                                    },
                                    {
                                        title: "Série Essentiel",
                                        desc: "Notre best-seller à 6 étapes avec polissage final pour une eau d'une douceur incomparable. Le choix numéro 1 des familles québécoises.",
                                        img: drinkingWaterImg,
                                        badge: "Populaire",
                                        color: "bg-emerald-600",
                                        features: ["6 étapes complètes", "Production 75 GPD", "Eau minérale balancée"]
                                    },
                                    {
                                        title: "Sérénité Direct-Flow",
                                        desc: "Débit instantané 600 GPD. Pas de réservoir encombrant, eau fraîche en continu à volonté. Technologie Direct-Flow sans stagnation.",
                                        img: freezelifeROImg,
                                        badge: "Vitesse XXL",
                                        color: "bg-amber-600",
                                        features: ["5 étapes Direct-Flow", "600 GPD (2L/min)", "Format ultra-compact"]
                                    }
                                ].map((product, i) => (
                                    <div
                                        key={i}
                                        className="w-[80vw] md:w-[50vw] lg:w-[calc((100%-4.5rem)/3.33)] shrink-0 group bg-white rounded-[3rem] p-8 border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.03)] hover:shadow-[0_45px_100px_rgba(0,0,0,0.1)] transition-all duration-700 hover:-translate-y-2 flex flex-col snap-center cursor-pointer"
                                        onClick={() => navigate("/contact")}
                                    >
                                        <div className="w-full aspect-square bg-slate-50/50 rounded-[2.5rem] mb-8 overflow-hidden relative p-8 flex items-center justify-center">
                                            <img
                                                src={product.img}
                                                alt={product.title}
                                                className="max-h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-[2s]"
                                            />
                                            <div className="absolute top-4 right-4">
                                                <div className={cn("px-4 py-1.5 rounded-full shadow-lg backdrop-blur-sm", product.color)}>
                                                    <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white italic">{product.badge}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex-grow space-y-4">
                                            <h3 className="text-2xl font-bold text-slate-900 tracking-tight leading-tight group-hover:text-blue-600 transition-colors">
                                                {product.title}
                                            </h3>
                                            <p className="text-slate-500 font-light text-sm leading-relaxed text-justify mb-6">
                                                {product.desc}
                                            </p>
                                            
                                            <div className="space-y-3 pt-4 border-t border-slate-50">
                                                {product.features.map((f, idx) => (
                                                    <div key={idx} className="flex items-center gap-3">
                                                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                                                        <span className="text-xs font-medium text-slate-600">{f}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="mt-10 pt-8 border-t border-slate-50 flex items-center justify-end">
                                            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-500">
                                                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
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
                                <span className="font-bold not-italic text-[#18448F] block">Pourquoi installer l'un de  nos</span>
                                <span className="font-bold text-[#18448F] block text-center"><span className="text-[#8CC63F]">systèmes de purification d'eau sous l'évier</span> de votre cuisine ?</span>
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
                { 
                  icon: Leaf, 
                  title: "Zéro Plastique", 
                  desc: "Dites définitivement adieu au plastique. Une seule cartouche préserve la planète de milliers de bouteilles jetables.",
                  num: "05"
                },
                { 
                  icon: WaterFilterIcon, 
                  title: "Design compact", 
                  desc: "L'élégance de la discrétion. Une intégration fluide sous votre comptoir qui préserve l'esthétique de votre cuisine.",
                  num: "06"
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
                                className="w-full h-[450px] md:h-[550px] lg:h-[650px] object-cover group-hover:scale-105 transition-transform duration-[3000ms] brightness-[1.1] contrast-[1.05]"
                             alt="Installation professionnelle d'un adoucisseur d'eau Bricareau" title="Expert en eau par Bricareau" />
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
                            {/* Navigation Arrows for Mobile/Tablet & Desktop Carousel */}
                            <div className="flex items-center justify-end gap-3 mb-8 relative z-30">
                                {/* Mobile/Tablet Pagination Indicator */}
                                <div className="lg:hidden flex gap-1.5 px-2 mr-auto">
                                    {[0, 1, 2, 3, 4, 5].map((i) => (
                                        <div key={i} className={`h-1.5 rounded-full transition-all duration-300 ${i === activeCol ? 'w-6 bg-blue-600' : 'w-1.5 bg-blue-100'}`} />
                                    ))}
                                </div>

                                {/* Desktop Carousel Spacer */}
                                <div className="hidden lg:block mr-auto"></div>

                                <div className="flex items-center gap-2">
                                    <Button 
                                        size="icon" 
                                        variant="outline" 
                                        onClick={() => {
                                            setActiveCol(Math.max(0, activeCol - 1));
                                            setDesktopPage(0);
                                        }}
                                        disabled={(window.innerWidth < 1024 && activeCol === 0) || (window.innerWidth >= 1024 && desktopPage === 0)}
                                        className="rounded-full shadow-sm hover:shadow-md transition-all h-10 w-10 md:h-12 md:w-12 border-slate-200"
                                    >
                                        <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
                                    </Button>
                                    
                                    {/* Desktop Dot Indicator */}
                                    <div className="hidden lg:flex gap-1.5 px-2">
                                        {[0, 1].map((i) => (
                                            <div key={i} className={`h-1.5 rounded-full transition-all duration-300 ${i === desktopPage ? 'w-6 bg-blue-600' : 'w-1.5 bg-blue-100'}`} />
                                        ))}
                                    </div>

                                    <Button 
                                        size="icon" 
                                        variant="outline" 
                                        onClick={() => {
                                            setActiveCol(Math.min(5, activeCol + 1));
                                            setDesktopPage(1);
                                        }}
                                        disabled={(window.innerWidth < 1024 && activeCol === 5) || (window.innerWidth >= 1024 && desktopPage === 1)}
                                        className="rounded-full shadow-sm hover:shadow-md transition-all h-10 w-10 md:h-12 md:w-12 border-slate-200"
                                    >
                                        <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
                                    </Button>
                                </div>
                            </div>

                            <div className="overflow-x-auto lg:overflow-x-visible no-scrollbar pb-8">
                                <table className="w-full border-collapse bg-white rounded-3xl overflow-hidden shadow-2xl relative">
                                    <thead>
                                        <tr className="bg-slate-50 relative z-20">
                                            <th className="p-6 md:p-10 text-left text-blue-900/40 font-black uppercase tracking-widest text-[10px] sticky left-0 bg-slate-50 z-30 border-r border-slate-100 drop-shadow-md lg:drop-shadow-none min-w-[160px] md:min-w-[200px]">
                                                Critères Techniques
                                            </th>
                                            {[
                                                { name: "Cristal Pro I", img: essentialImg_filtration, badge: "Sédiments", color: "bg-blue-600" },
                                                { name: "Cristal Pro II", img: plusROImg_filtration, badge: "Duo Pur", color: "bg-emerald-600" },
                                                { name: "Cristal Pro III", img: eliteROImg_filtration, badge: "Ultrafiltration", color: "bg-amber-600" },
                                                { name: "Vectapure NX", img: vectapureROImg, badge: "Osmose NX", color: "bg-blue-600" },
                                                { name: "Série Essentiel", img: drinkingWaterImg, badge: "Osmose 6E", color: "bg-emerald-600" },
                                                { name: "Sérénité Direct", img: freezelifeROImg, badge: "600 GPD", color: "bg-amber-600" },
                                            ].map((m, i) => (
                                             <th 
                                                    key={i} 
                                                     className={cn(
                                                        "p-4 md:p-6 text-center transition-all duration-500 min-w-[220px]",
                                                        i === activeCol ? "table-cell" : "hidden",
                                                        ((desktopPage === 0 && (i === 0 || i === 1 || i === 2)) || (desktopPage === 1 && (i === 3 || i === 4 || i === 5))) ? "lg:table-cell" : "lg:hidden"
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
                                                {["essential", "plus", "elite", "stage4", "stage5", "stage6"].map((model, idx) => (
                                                     <td 
                                                        key={model} 
                                                        className={cn(
                                                            "p-6 md:p-10 text-center text-[13px] md:text-sm font-light leading-relaxed text-slate-600 transition-all duration-500",
                                                            idx === activeCol ? "table-cell" : "hidden",
                                                            ((desktopPage === 0 && (idx === 0 || idx === 1 || idx === 2)) || (desktopPage === 1 && (idx === 3 || idx === 4 || idx === 5))) ? "lg:table-cell" : "lg:hidden"
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
              className="w-full h-auto object-contain"
             alt="Analyse d'eau à domicile pour détecter le calcaire et le chlore - Service Bricareau" title="Expert en eau par Bricareau" />
          </div>

          {/* Desktop Background */}
          <div className="hidden lg:block absolute inset-0 z-0">
            <img
              src={waterTestingImg}
              className="w-full h-full object-cover object-center"
             alt="Analyse d'eau à domicile" title="Expert en eau par Bricareau" />
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
                                    <a href="/Analyses-et-Tests-d-eau">Demandez une analyse d'eau</a>
                                </ProMaxButton>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Testimonials Section */}
        <TestimonialsSection
          filterProduct="/filtration"
          title={
                            <h2 className="heading-pro-max tracking-tight leading-[1.1] mb-6 relative z-10">
                                <span className="font-bold not-italic text-[#18448F] block text-center">L'eau de source,</span>
                                <span className="font-bold not-italic text-[#18448F] block text-center"><span className="text-[#8CC63F]">sans</span> la bouteille de plastique.</span>
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
                            className="w-full h-full object-cover grayscale brightness-150"
                         alt="Problématique d'eau dure sur la robinetterie - Solution Bricareau" title="Traitement d'eau Québec par Bricareau" />
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

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                                 <ProMaxButton 
                                     asChild
                                     variant="white"
                                     className="w-full sm:w-auto h-16 px-12"
                                 >
                                     <a href="tel:18552649328" className="flex items-center gap-3">
                                         <Phone className="h-5 w-5 animate-bounce" />
                                         Parler à un expert
                                     </a>
                                 </ProMaxButton>
                                 <ProMaxButton
                                     asChild
                                     variant="outline-white"
                                     className="w-full sm:w-auto h-16 px-12"
                                 >
                                     <NavLink to="/consultation">Planifier une consultation</NavLink>
                                 </ProMaxButton>
                            </div>

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
                  {
                    q: "Quels sont les avantages d'un système de filtration sous l'évier ?",
                    a: "Il offre une eau de qualité embouteillée directement à votre robinet, élimine le goût et l'odeur de chlore, retire les métaux lourds et réduit drastiquement vos dépenses ainsi que votre empreinte plastique."
                  },
                  {
                    q: "Quelle est la différence entre un filtre à cartouche standard et l'osmose inverse ?",
                    a: "Un filtre standard réduit principalement le chlore et les sédiments. L'osmose inverse va plus loin en éliminant jusqu'à 99 % de tous les contaminants dissous grâce à une membrane semi-perméable ultra-fine."
                  },
                  {
                    q: "Quels problèmes d'eau les systèmes sous évier peuvent-ils résoudre ?",
                    a: "Ils sont particulièrement efficaces contre le chlore, les sédiments, le plomb, le mercure, les résidus de pesticides, et les microplastiques, garantissant une eau saine pour boire et cuisiner."
                  },
                  {
                    q: "Le système prend-il beaucoup de place sous l'évier ?",
                    a: "Nos systèmes modernes sont très compacts. Ils occupent généralement moins de 25 % de l'espace de votre armoire sous l'évier, vous laissant de la place pour vos autres articles ménagers."
                  },
                  {
                    q: "Puis-je l'utiliser pour mon réfrigérateur et ma machine à glaçons ?",
                    a: "Absolument ! Nous pouvons raccorder votre système de filtration à votre frigo pour que vous profitiez d'une eau fraîche et de glaçons cristallins, sans aucun goût indésirable."
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
        {/* Section Associated Products */}
                <section className="bg-white py-24">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="mb-8 heading-pro-max text-center">
                                <span className="font-bold text-[#18448F] block text-center">Découvrir les produits associés.</span>
                            </h2>
                             <p className="body-pro-max text-gray-500 text-center mx-auto">
                                 Optimisez votre expérience de traitement d'eau avec nos solutions complémentaires.
                             </p>
                        </div>

                        <div 
                            className="flex overflow-x-auto lg:grid lg:grid-cols-4 gap-6 md:gap-8 snap-x snap-mandatory no-scrollbar pb-8 -mx-4 px-4 md:-mx-6 md:px-6 lg:mx-0 lg:px-0"
                        >
                            {[
                                {
                                    name: "Filtres d'eau spécialisés",
                                    desc: "Des solutions ciblées pour traiter le fer, le manganèse, le soufre, les tanins et l'acidité pour une eau parfaite.",
                                    img: specializedFiltersImg,
                                    link: "/Systemes-de-filtration-d-eau-specialises-pour-toute-la-maison"
                                },
                                {
                                    name: "Adoucisseurs d'eau",
                                    desc: "Éliminez le calcaire pour une peau douce, un linge éclatant et une protection durable de vos installations.",
                                    img: waterSoftenerImg,
                                    link: "/adoucisseurs-d-eau-residentiels-pour-une-eau-sans-calcaire"
                                },
                                {
                                    name: "Systèmes de désinfection UV",
                                    desc: "Utilisés pour la stérilisation contre les bactéries, les virus, les coliformes, l'E.Coli, le Cryptosporidium,...",
                                    img: uvSystemImg,
                                    link: "/systemes-de-desinfection-uv"
                                },
                                {
                                    name: "Fontaines d'eau",
                                    desc: "Eau fraîche, tempérée ou pétillante, avec un design intégré.",
                                    img: fountainCardImg,
                                    link: "/fontaines-et-refroidisseurs-d-eau-pour-une-eau-fraiche"
                                }
                            ].map((prod, i) => (
                                <div
                                    key={i}
                                    className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full cursor-pointer shrink-0 snap-center w-[85%] md:w-[38%] lg:w-auto"
                                    onClick={() => window.location.href = prod.link}
                                >
                                    <div className="relative h-80 overflow-hidden bg-slate-50 flex items-center justify-center p-12">
                                        <img
                                            src={prod.img}
                                            alt={`${prod.name} - Solution Bricareau`}
                                            className="max-h-full object-contain group-hover:scale-110 transition-transform duration-700 mix-blend-multiply"
                                        />
                                    </div>
                                    <div className="p-8 space-y-4 flex flex-col flex-grow border-t-2 border-transparent group-hover:border-[#18448F] transition-colors">
                                        <h3 className="card-title text-center group-hover:text-[#18448F] transition-colors duration-500">
                                            {prod.name}
                                        </h3>
                                         <p className="body-pro-max text-slate-500 text-justify">
                                             {prod.desc}
                                         </p>
                                        <div
                                            className="inline-flex items-center gap-2 text-[#18448F] font-bold text-xs tracking-widest uppercase mt-4 group-hover:underline self-end"
                                        >
                                            <span></span>
                                            <ArrowRight className="h-6 w-6 transform group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

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
                  className="min-w-[70vw] md:min-w-[38vw] lg:min-w-0 snap-center group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full cursor-pointer"
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

          </div>
        </section>

      </main >
      <Footer />


    </div >
  );
};

export default C;
