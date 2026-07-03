import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ExpertAvatars from "@/components/ExpertAvatars";
import Hero from "@/components/Hero";
import GlobalBreadcrumbs from "@/components/GlobalBreadcrumbs";
import TestimonialsSection from "@/components/TestimonialsSection";
import { ProMaxButton } from "@/components/ui/ProMaxButton";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  TestTube,
  Droplet,
  Shield,
  CheckCircle2,
  Clock,
  HousePlus,
  Search,
  Wrench,
  Star,
  ChevronRight,
  Check,
  ArrowRight,
  GlassWater,
  MapPin,
  Zap,
  Thermometer,
  Heart,
  Sparkles,
  FileText,
  ChevronLeft,
  MessageCircle,
  Armchair,
  Phone,
  HeartPulse,
  FlaskConical,
  EyeOff,
  ShieldCheck
} from "lucide-react";
import safetyIcon from "@/assets/1709235770048.png";
import { NavLink } from "@/components/NavLink";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ConsultationFormSection from "@/components/ConsultationFormSection";
import WaterTestFormSection from "@/components/WaterTestFormSection";
import ourteamstudyyourwaterImg from "@/assets/10271.jpg";

import heroTesting from "@/assets/6666f4137364e2dd1bf86a0a_EauTrouble.webp";
import specializedFiltersImg from "@/assets/Filtres d'eau spécialisés.webp";
import watersofterImg from "@/assets/Adoucisseurs d'eau.webp";
import drinkingwatersofterImg from "@/assets/Solutions d'eau potable.webp";
import heroImageImg from "@/assets/hero-image.jpg";
import waterProblemImg from "@/assets/Corrosive-Water.webp";
import smellImg from "@/assets/Water_Smells_Like_Rotten_Eggs_1400x.webp";
import stainImg from "@/assets/rouille_thumb.jpg";
import plumbingImg from "@/assets/detartrage-chauffe-eau-electrique.jpg";
import movingTipsImg from "@/assets/astuces-emmenagement-maison.jpg";
import clothesStainsImg from "@/assets/302731406_443870381116589_3770801709209607894_n.jpg";
import scientistImg from "@/assets/Scientist istesting water.webp";
import newHeroImg from "@/assets/r0_0_4896_3264_w1200_h678_fmax.jpg";
import forensicWaterImg from "@/assets/2148597980.jpg";
import glasspurewaterImg from "@/assets/glass-of-water.jpeg";
import babySafetyImg from "@/assets/When-Can-Babies-Have-Water.jpg";
import acidWaterImg from "@/assets/corrosive-water-problems-Low-pH.jpg";
import stormWaterImg from "@/assets/eau trouble turbide.avif";
import mortgageImg from "@/assets/2148895486.jpg";
import tasteOdorImg from "@/assets/water-taste.jpg";

const TestsEauPage = () => {
  const [activeTestCard, setActiveTestCard] = useState(0);
  const [showAllFaqs, setShowAllFaqs] = useState(false);
  useEffect(() => {
    document.title = "Test d'eau et Analyse d'eau au Québec | Montréal, Rive Nord& Rive-Sud | Bricareau";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Obtenir une analyse d'eau complète et précise au Québec. Tests de laboratoire certifiés pour puits et réseaux municipaux à Montréal, Laval, Rive-Sud et Rive-Nord.");
    }

    // OG Tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", "Analyse d'eau professionnelle au Québec | Grand Montréal | Bricareau");
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", "Protégez votre santé avec nos tests d'eau certifiés. Résultats rapides et diagnostics d'experts pour la potabilité de votre eau.");
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute("content", "https://bricareau.com/Analyses-et-Tests-d-eau");
  }, []);

  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      title: "Nouvel emménagement",
      icon: HousePlus,
      img: movingTipsImg,
      desc: "Assurez la sécurité de votre famille dès votre arrivée en testant la qualité de l'eau de votre nouvelle maison."
    },
    {
      title: "Goût ou odeur suspecte",
      icon: Droplet,
      img: smellImg,
      desc: "Une eau malodorante ou au goût étrange peut indiquer une contamination. Identifions la cause ensemble."
    },
    {
      title: "Taches sur les vêtements",
      icon: Sparkles,
      img: clothesStainsImg,
      desc: "Le fer et le manganèse peuvent tacher vos vêtements. Une analyse révélera la solution adaptée pour protéger votre linge."
    },
    {
      title: "Problèmes de plomberie",
      icon: Wrench,
      img: plumbingImg,
      desc: "Le calcaire obstrue vos tuyaux et réduit la durée de vie de vos appareils. Protégez votre investissement."
    }
  ];
  return (
    <div className="min-h-screen bg-white">
       <Header />
       <main>
                {/* 1. HERO SECTION (STYLED LIKE RESIDENTIAL) */}
                <section className="relative bg-white overflow-hidden min-h-screen flex flex-col justify-center pt-24 pb-16 lg:pt-28 lg:pb-16 border-b border-slate-200">
                    <div className="absolute top-[30px] left-0 right-0 z-30 pointer-events-none hidden lg:block">
                        <div className="container mx-auto px-4 lg:px-6 pointer-events-auto">
                            <GlobalBreadcrumbs variant="on-light" />
                        </div>
                    </div>
                    <div className="absolute inset-0 w-full h-full opacity-40 lg:opacity-100">
                        {/* Mobile Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/40 to-transparent z-10 lg:hidden"></div>
                        {/* Desktop Gradient: 1/3 solid white, fading to transparent */}
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,white_0%,white_33.33%,rgba(255,255,255,0)_85%)] z-10 hidden lg:block"></div>
                        
                        <div className="absolute right-0 top-0 w-full lg:w-[80%] h-full">
                            <img 
                                src={newHeroImg} 
                                className="absolute inset-0 w-full h-full object-cover object-center"
                             alt="Analyses d'eau" title="Filtration Bricareau par Bricareau" />
                        </div>
                    </div>
                    <div className="absolute right-0 top-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent pointer-events-none z-20"></div>
                    
                    <div className="container mx-auto px-6 relative z-30">
                        <div className="max-w-3xl flex flex-col justify-center mt-12 lg:mt-0">
                            <div className="mb-8">
                                <h1 className="text-[40px] lg:text-[50px] leading-[45px] lg:leading-[55px] font-sans font-bold mb-6 tracking-tight">
                                    <span className="font-bold not-italic text-[#18448F]">Analyses d'eau</span><br className="hidden md:block"/>
                                    <span className="text-[#18448F]"> & tests de laboratoire </span><br className="hidden md:block"/>
                                    <span className="text-[#8CC63F]">professionnels</span>
                                </h1>
                                
                                <p className="text-slate-600 text-lg sm:text-xl font-light leading-relaxed max-w-xl">
                                    Besoin d'une analyse d'eau dans la région métropolitaine ? Que ce soit pour une vérification annuelle, une transaction hypothécaire ou un souci de qualité, Bricareau offre des tests complets de laboratoire partout dans le Grand Montréal, Laval et les couronnes.
                                </p>
                            </div>
                            
                            <div className="flex flex-col sm:flex-row items-start gap-6 mb-16">
                                <div className="relative inline-block w-full sm:w-auto group">
                                    <div className="absolute inset-0 border border-[#18448F] rounded-[2rem] -translate-x-[5px] translate-y-[5px] transition-transform group-hover:-translate-x-[3px] group-hover:translate-y-[3px]"></div>
                                    <button
                                        className="relative flex items-center justify-center w-full sm:w-auto bg-[#18448F] text-white hover:bg-transparent hover:text-[#18448F] border border-[#18448F] rounded-[2rem] h-[3.25rem] px-8 font-black uppercase tracking-[0.1em] text-[11px] transition-all"
                                        onClick={() => { document.getElementById('water-test')?.scrollIntoView({ behavior: 'smooth' }) }}
                                    >
                                        Planifier un test d'eau
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>




        <section id="scenarios-analyse" className="py-24 bg-white relative overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <span className="inline-block px-4 py-1 bg-[#18448F] text-white rounded-full text-[10px] font-black tracking-widest mb-4">
                GUIDE DE PRÉVENTION
              </span>
              <h2 className="heading-pro-max">
                <span className="font-bold not-italic text-[#18448F] block">Quand devriez-vous</span>
                <span className="font-bold text-[#8CC63F] block">tester votre eau ?</span>
              </h2>
              <p className="body-pro-max text-slate-500 mt-6 mx-auto">
                L'invisible est souvent le plus dangereux. Identifiez la situation qui vous concerne pour choisir le test de laboratoire adéquat.
              </p>
            </div>

            <div className="flex flex-col lg:flex-row h-auto lg:h-[500px] gap-4 w-full">
              {[
                { 
                  title: "Transaction Immobilière", 
                  desc: "Obligatoire pour les hypothèques et notaires. Certificat de potabilité certifié.", 
                  benefit: "Validité Légale",
                  color: "bg-blue-600",
                  img: mortgageImg
                },
                { 
                  title: "Nouveau-né & Santé", 
                  desc: "Vérification des nitrates et bactéries pour les estomacs fragiles des nourrissons.", 
                  benefit: "Sécurité Optimale",
                  color: "bg-pink-500",
                  img: babySafetyImg
                },
                { 
                  title: "Goût ou Odeur Suspecte", 
                  desc: "L'œuf pourri ou le goût métallique cachent des réalités chimiques complexes.", 
                  benefit: "Confort Gustatif",
                  color: "bg-amber-500",
                  img: tasteOdorImg
                },
                { 
                  title: "Acidité & Corrosion", 
                  desc: "Taches bleues/vertes sur les éviers ? Votre plomberie est peut-être en train de se dissoudre.", 
                  benefit: "Économie Plomberie",
                  color: "bg-cyan-500",
                  img: acidWaterImg
                },
                { 
                  title: "Après un Orage/Crues", 
                  desc: "Les fortes pluies peuvent contaminer les puits de surface. Un test rapide s'impose.", 
                  benefit: "Tranquillité d'esprit",
                  color: "bg-slate-700",
                  img: stormWaterImg
                },
                { 
                  title: "Suivi Annuel (Puits)", 
                  desc: "Santé Québec recommande une analyse microbiologique tous les 6 mois.", 
                  benefit: "Conformité Santé",
                  color: "bg-emerald-600",
                  img: forensicWaterImg
                }
              ].map((item, i) => {
                const isActive = activeTestCard === i;
                return (
                <div 
                  key={i} 
                  onMouseEnter={() => setActiveTestCard(i)}
                  className={cn(
                    "relative flex-1 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] rounded-[2.5rem] overflow-hidden bg-slate-900 cursor-pointer min-h-[250px] lg:min-h-0 border border-transparent hover:border-white/20 shadow-lg",
                    isActive ? "lg:flex-[3]" : ""
                  )}
                  onClick={() => {
                    const el = document.getElementById('water-test');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {/* Background Image */}
                  <div className="absolute inset-0 z-0">
                    <img 
                      src={item.img} 
                      alt={item.title} 
                      className={cn("w-full h-full object-cover transition-transform duration-1000 mix-blend-overlay", isActive ? "scale-110 opacity-80" : "opacity-50")}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                  </div>

                  {/* Content Container */}
                  <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                    <div className={cn("flex items-center gap-3 mb-3 transition-opacity duration-700 delay-100", isActive ? "opacity-100" : "lg:opacity-0")}>
                      <div className={`w-3 h-3 rounded-full ${item.color} shadow-[0_0_15px_rgba(255,255,255,0.5)]`} />
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">
                        {item.benefit}
                      </span>
                    </div>

                    <h3 className={cn("text-xl md:text-2xl font-bold text-white mb-2 transition-all", isActive ? "whitespace-normal" : "lg:whitespace-nowrap lg:truncate")}>
                      {item.title}
                    </h3>
                    
                    <div className={cn("grid transition-all duration-700", isActive ? "grid-rows-[1fr]" : "lg:grid-rows-[0fr] grid-rows-[1fr]")}>
                      <div className="overflow-hidden">
                        <p className="text-sm text-slate-300 leading-relaxed mt-2 opacity-90">
                          {item.desc}
                        </p>
                        <div className={cn("mt-4 flex items-center gap-2 text-[#8CC63F] font-bold text-[10px] uppercase tracking-widest transition-opacity duration-700 delay-200", isActive ? "opacity-100" : "lg:opacity-0")}>
                          Planifier ce test <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )})}
            </div>
          </div>
        </section>

        {/* 5. Water Testing plans Section */}
        <section className="py-24 bg-slate-50 relative">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-4 block flex items-center justify-center gap-2">
                 <span className="inline-block px-4 py-1.5 bg-[#18448F] text-white rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                    ANALYSE COMPARATIVE
                 </span>
              </span>
              <h2 className="heading-pro-max mb-6">
                <span className="font-bold not-italic text-[#18448F] block text-center">Quelle <span className="text-[#8CC63F]">trousse d'analyse</span></span>
                <span className="font-bold text-[#18448F] block text-center">choisir pour votre eau ?</span>
              </h2>
              <p className="body-pro-max max-w-2xl mx-auto text-center">
                Des solutions adaptées à vos besoins, de la vérification bactérienne de base au bilan complet pour une tranquillité d'esprit totale.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
              {[
                {
                  title: "Test Micro-biologique",
                  subtitle: "Sécurité de base",
                  desc: "L'essentiel pour vérifier l'absence de bactéries nocives.",
                  featured: false,
                  color: "bg-emerald-50 text-emerald-700",
                  borderColor: "border-emerald-100",
                  btnColor: "bg-emerald-600 hover:bg-emerald-700",
                  details: [
                    "Coliformes totaux",
                    "Colonies atypiques",
                    "E.coli",
                    "Entérocoques"
                  ]
                },
                {
                  title: "Test Physico-chimique type I",
                  subtitle: "Esthétique de l'eau",
                  desc: "Idéal pour identifier les causes de taches, d'odeurs et de saveurs.",
                  featured: false,
                  color: "bg-blue-50 text-blue-700",
                  borderColor: "border-blue-100",
                  btnColor: "bg-blue-600 hover:bg-blue-700",
                  details: [
                    "Alcalinité", "Calcium", "Chlorure", "Conductivité",
                    "Couleur", "Dureté", "Fer", "Magnésium",
                    "Manganèse", "pH", "Sodium", "Tannin-Lignine", "Turbidité"
                  ]
                },
                {
                  title: "Test Physico-chimique type II",
                  subtitle: "Santé",
                  desc: "Détecte les métaux lourds et contaminants invisibles dangereux.",
                  featured: false,
                  color: "bg-indigo-50 text-indigo-700",
                  borderColor: "border-indigo-100",
                  btnColor: "bg-indigo-600 hover:bg-indigo-700",
                  details: [
                    "Fluorures", "Nitrites-nitrates", "Sulfates", "Antimoine",
                    "Arsenic", "Baryum", "Bore", "Cadmium",
                    "Chrome", "Cuivre", "Plomb", "Sélénium", "Uranium"
                  ]
                },
                {
                  title: "Bilan Complet",
                  subtitle: "La protection totale",
                  desc: "L'analyse la plus exhaustive pour une paix d'esprit absolue.",
                  featured: true,
                  color: "bg-slate-900 text-white",
                  borderColor: "border-slate-800",
                  btnColor: "bg-white text-slate-900 hover:bg-blue-50",
                  details: [
                    "Analyses Microbiologiques",
                    "Paramètres Esthétiques",
                    "Métaux Lourds",
                    "Contaminants Santé",
                    "+ Tous les paramètres précédents"
                  ]
                }
              ].map((plan, idx) => (
                <div
                  key={idx}
                  className={`relative flex flex-col rounded-[2rem] p-8 transition-all duration-300 hover:translate-y-[-8px] border-2 ${plan.featured ? 'bg-slate-900 shadow-2xl scale-105 border-slate-900 ring-4 ring-blue-600/20 z-10' : 'bg-white shadow-xl hover:shadow-2xl border-slate-100'}`}
                >
                  {plan.featured && (
                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg tracking-wider uppercase">
                      Recommandé
                    </div>
                  )}

                  <div className="mb-6">
                    <span className={`text-xs font-bold uppercase tracking-widest mb-2 block ${plan.featured ? 'text-blue-400' : 'text-slate-500'}`}>
                      {plan.subtitle}
                    </span>
                    <h3 className={`text-2xl mb-4 ${plan.featured ? 'text-white' : 'text-blue-600'}`}>
                      {plan.title}
                    </h3>
                    <p className={`text-sm leading-snug ${plan.featured ? 'text-slate-400' : 'text-slate-600'}`}>
                      {plan.desc}
                    </p>
                  </div>

                  <div className={`flex-grow space-y-3 mb-8 ${plan.featured ? 'text-slate-300' : 'text-slate-600'}`}>
                    {plan.details.map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 className={`w-5 h-5 flex-shrink-0 ${plan.featured ? 'text-blue-400' : 'text-blue-600'}`} />
                        <span className="text-sm font-medium">{item}</span>
                      </div>
                    ))}

                    {plan.featured && (
                      <div className="text-xs text-blue-400 pl-8 italic pt-2">Analyse 360° pour l'eau de puits</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>



        {/* 11. PREMIUM CTA SECTION - REBUILT FOR IMPACT */}
        <section className="relative py-32 flex items-center overflow-hidden bg-[#18448F]">
          {/* Animated background elements */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-600/20 to-transparent skew-x-12 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-cyan-400/10 to-transparent -skew-x-12 -translate-x-1/4" />
          
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0 opacity-40">
            <img
              src={glasspurewaterImg}
              className="w-full h-full object-cover grayscale brightness-150"
             alt="Expert Bricareau analysant vos options de filtration" title="Filtration Bricareau par Bricareau" />
            <div className="absolute inset-0 bg-[#18448F]/10 backdrop-blur-sm" />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-5xl mx-auto text-center space-y-12">
              <div className="space-y-6">
                <span className="inline-block px-4 py-1.5 bg-white text-blue-600 rounded-full text-[10px] font-black uppercase tracking-[0.4em]">
                  COMPRENDRE POUR MIEUX AGIR
                </span>
                <h2 className="font-light block leading-tight lg:leading-[52px] text-white">
                  Vous avez un doute <br />
                  <span className="text-white italic font-bold font-serif"> sur la qualité de votre eau ?</span>
                </h2>
                <p className="text-lg md:text-xl text-blue-100/80 max-w-2xl mx-auto font-light leading-relaxed">
                  Planifier une analyse d’eau professionnelle et recevoir un rapport clair avec recommandations. Un spécialiste vous contactera pour discuter des résultats et, au besoin, vous proposer un plan de traitement adapté à votre maison.                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-8 justify-center items-center pt-4">
                  <ProMaxButton 
                    asChild
                    variant="white"
                  >
                    <a href="tel:18552649328" className="flex items-center gap-3">
                      <Phone className="h-5 w-5 animate-bounce" />
                      Parler à un expert
                    </a>
                  </ProMaxButton>

                  <ProMaxButton
                    variant="outline-white"
                    asChild
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


        {/* 7. FAQ Section */}
        <section className="pt-32 pb-16 bg-white border-t border-slate-100">
          <div className="container mx-auto px-4 text-left">
            <div className="text-left mb-20">
                             <h2 className="mb-8 heading-pro-max text-left">
                                <span className="font-light italic text-[#18448F] block">Pour vous éclairer</span>
                                <span className="font-bold text-[#18448F] block">Questions fréquentes</span>
                            </h2>
              <div className="w-24 h-1 bg-blue-600"></div>
            </div>
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {[
                  {
                    q: "Qu'est-ce qu'une analyse physico-chimique de l'eau ?",
                    a: "Une analyse physico-chimique mesure les paramètres non vivants tels que la dureté, le pH, le fer, le manganèse, les nitrates et les solides dissous. Cela permet d'évaluer l'esthétique de l'eau et son impact sur votre tuyauterie."
                  },
                  {
                    q: "Qu'est-ce qu'une analyse microbiologique ?",
                    a: "Cette analyse recherche la présence d'organismes vivants comme les bactéries coliformes et E. coli. Ces micro-organismes peuvent causer des problèmes de santé immédiats et leur absence est essentielle pour qu'une eau soit déclarée potable."
                  },
                  {
                    q: "Pourquoi tester l'eau si elle semble claire et inodore ?",
                    a: "Plusieurs contaminants dangereux comme l'arsenic, le plomb ou les nitrates sont incolores, inodores et sans goût. Seule une analyse professionnelle en laboratoire peut confirmer la sécurité réelle de votre eau."
                  },
                  {
                    q: "À quelle fréquence devrais-je faire analyser mon eau de puits ?",
                    a: "Santé Québec recommande d'analyser la qualité microbiologique de votre eau de puits au moins deux fois par an (printemps et automne) et d'effectuer une analyse physico-chimique complète tous les deux ans."
                  },
                  {
                    q: "Quels sont les paramètres les plus critiques à surveiller au Québec ?",
                    a: "Pour les puits résidentiels, les priorités sont les bactéries, les nitrates, le fer, le manganèse, la dureté et, dans certaines régions, l'arsenic et le radon."
                  },
                  {
                    q: "Comment dois-je prélever l'échantillon pour le laboratoire ?",
                    a: "Pour un test microbiologique, vous devez utiliser un flacon stérile fourni par le laboratoire et suivre une procédure de désinfection du robinet rigoureuse pour éviter de fausser les résultats."
                  },
                  {
                    q: "Quelle est la différence entre un test à domicile et une analyse en laboratoire ?",
                    a: "Le test à domicile permet d'obtenir des résultats instantanés sur les minéraux et la dureté. L'analyse en laboratoire accrédité est nécessaire pour certifier la potabilité microbiologique et détecter les contaminants chimiques complexes."
                  },
                  {
                    q: "Que signifie la présence de coliformes totaux dans mon rapport ?",
                    a: "Cela indique que votre puits est vulnérable aux infiltrations d'eau de surface. Bien que tous les coliformes ne soient pas pathogènes, leur présence suggère qu'un traitement de désinfection est nécessaire."
                  },
                  {
                    q: "Un pH acide peut-il endommager ma résidence ?",
                    a: "Absolument. Un pH inférieur à 6,5 est considéré comme corrosif. Il peut attaquer vos tuyaux de cuivre, provoquant des fuites 'trous d'épingle' et libérant des métaux lourds dans votre eau de boisson."
                  },
                  {
                    q: "Que faire si les résultats indiquent une eau non potable ?",
                    a: "Pas de panique. Nos experts analyseront votre rapport et vous recommanderont le système approprié (UV pour les bactéries, adoucisseur pour la dureté ou filtre spécialisé) pour rendre votre eau parfaitement sûre."
                  }
                ].slice(0, showAllFaqs ? undefined : 6).map((item, idx) => (
                  <AccordionItem
                    key={idx}
                    value={`item-${idx}`}
                    className="border-b-gray-200"
                  >
                    <AccordionTrigger className="text-left text-base font-medium leading-6 hover:no-underline py-6" style={{}}>
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-base font-light leading-6 text-gray-600 pb-6 text-justify" style={{}}>
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
              <div className="mt-20 text-center">
                  <ProMaxButton
                    onClick={() => setShowAllFaqs(!showAllFaqs)}
                    variant="primary"
                  >
                    {showAllFaqs ? "Voir moins de questions" : "Voir toutes les questions"}
                  </ProMaxButton>
              </div>
            </div>
          </div>
        </section>

        {/* 8. Schedule a Water Test Section */}
        <section className="pt-24 bg-white relative overflow-hidden">
          <WaterTestFormSection id="water-test" />
        </section>



      </main >
      <Footer />
    </div>
  );
};

export default TestsEauPage;
