import { useState, useEffect } from "react";
import Header from "@/components/Header";
import GlobalBreadcrumbs from "@/components/GlobalBreadcrumbs";
import Footer from "@/components/Footer";
import TestimonialsSection from "@/components/TestimonialsSection";
import { Button } from "@/components/ui/button";
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
  Armchair
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

const TestsEauPage = () => {
  const [showAllFaqs, setShowAllFaqs] = useState(false);
  useEffect(() => {
    document.title = "Test d'eau et Analyse d'eau | Montréal, Rive-Sud & Rive-Nord | Bricareau";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Besoin d'un test d'eau à Montréal, sur la Rive-Sud ou la Rive-Nord ? Analyse d'eau complète et précise pour puits et réseaux municipaux par les experts de Bricareau.");
    }

    // OG Tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", "Analyse d'eau professionnelle | Grand Montréal & Environs | Bricareau");
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", "Service complet de tests d'eau pour le Grand Montréal. Résultats certifiés et solutions sur mesure pour votre résidence.");
  }, []);

  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      title: "Nouvel emménagement",
      icon: MessageCircle,
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
      icon: FileText,
      img: clothesStainsImg,
      desc: "Le fer et le manganèse peuvent tacher vos vêtements. Une analyse révélera la solution adaptée pour protéger votre linge."
    },
    {
      title: "Problèmes de plomberie",
      icon: FileText,
      img: plumbingImg,
      desc: "Le calcaire obstrue vos tuyaux et réduit la durée de vie de vos appareils. Protégez votre investissement."
    }
  ];
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* 1. Hero Section (Redesigned for Mobile) */}
        <section className="relative lg:h-[850px] flex flex-col items-center overflow-hidden bg-white">
          <div className="absolute top-[30px] left-0 right-0 z-30 pointer-events-none">
            <div className="container mx-auto px-6 pointer-events-auto">
              <GlobalBreadcrumbs variant="dark" />
            </div>
          </div>
          {/* Mobile Image */}
          <div className="lg:hidden w-full h-[300px] relative">
            <img
              src={newHeroImg}
              alt="Analyse d'eau professionnelle à Montréal, Rive-Sud et Rive-Nord par Bricareau - Expert en qualité d'eau"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>

          {/* Desktop Background */}
          <div className="hidden lg:block absolute inset-0 z-0">
            <img
              src={newHeroImg}
              alt="Analyse d'eau professionnelle"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 lg:bg-gradient-to-r lg:from-black/60 lg:to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-white via-white/10 to-transparent" />
            <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white/90 via-white/40 to-transparent" />
          </div>

          <div className="container mx-auto px-6 relative z-10 h-full flex items-center">
            <div className="max-w-2xl text-slate-900 lg:text-white py-12 lg:py-0">
              <h1
                className="text-[32px] md:text-[42px] leading-[1.1] md:leading-[1.2] mb-4 lg:mb-8 tracking-tighter text-slate-900 lg:text-white text-left lg:text-justify max-w-xl"
                style={{
                  fontWeight: 350
                }}
              >
                <span className="sr-only">Montréal • Rive-Sud • Rive-Nord</span>
                Analyses d'eau professionnelles & Tests de laboratoire
              </h1>
              <p className="font-light text-slate-600 lg:text-white/95 mb-8 max-w-xl text-left lg:text-justify">
                Besoin d'une analyse d'eau dans la région métropolitaine ? Que ce soit pour une vérification annuelle, une transaction hypothécaire ou un souci de qualité, Bricareau offre des tests complets de laboratoire partout dans le Grand Montréal, Laval et les couronnes.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 h-14 shadow-lg shadow-blue-200"
                  asChild
                >
                  <a href="#water-test">
                    Planifiez un test d'eau
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white border-blue-600 text-blue-600 lg:bg-white/10 lg:hover:bg-white/20 lg:text-white lg:border-white rounded-full px-8 h-14 backdrop-blur-sm shadow-lg"
                  asChild
                >
                  <a href="tel:18552649328" className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    1-855-264-9328
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Wave Separator (Hidden on Mobile) */}
          <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-[0] z-20 pointer-events-none hidden lg:block">
            <svg
              className="relative block w-full h-[50px] md:h-[80px]"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                fill="#2563EB"
                transform="rotate(180 600 60)"
              ></path>
            </svg>
          </div>
        </section >




        {/* 3. Why test your water Section (Blue Background) - Editorial Split Layout */}
        <section className="py-32 bg-blue-600 text-white relative z-10 -mt-2 overflow-hidden">
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:24px_24px]"></div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

              {/* Left Column: Sticky Title */}
              <div className="lg:w-1/3 lg:sticky lg:top-32 h-fit">
                <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-widest mb-6 border border-white/20">
                  POURQUOI TESTER ?
                </span>
                <h2
                  className="text-white mb-8"
                  style={{}}
                >
                  <span className="text-[36px] md:text-[50px] font-bold leading-[1.05] block mb-2">Découvrez</span>
                  <span className="text-[36px] md:text-[50px] font-light leading-[1.05] block text-blue-100">l'invisible.</span>
                </h2>
                <p className="font-light text-white/80 text-justify border-l-2 border-white/20 pl-6">
                  L'eau claire cache parfois des secrets. Minéraux, bactéries ou contaminants chimiques : une analyse est la seule façon de savoir ce que vous buvez réellement.
                </p>
              </div>

              {/* Right Column: 2x2 Grid */}
              <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-white" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.479 19.374-.971.939a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5a5.2 5.2 0 0 1-.219 1.49" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 15h6" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 12v6" />
                      </svg>
                    ),
                    title: "Santé et bien-être",
                    desc: "Protégez votre famille des contaminants invisibles qui peuvent avoir des effets à long terme.",
                    gradient: "from-blue-600 to-sky-400"
                  },
                  {
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-white" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12.35 21H5a2 2 0 0 1-2-2v-9a2 2 0 0 1 .71-1.53l7-6a2 2 0 0 1 2.58 0l7 6A2 2 0 0 1 21 10v2.35" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.8 12.4A1 1 0 0 0 14 12h-4a1 1 0 0 0-1 1v8" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 18h6" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 15v6" />
                      </svg>
                    ),
                    title: "Protection Maison",
                    desc: "Prévenez la corrosion de la tuyauterie et prolongez la vie de vos appareils ménagers.",
                    gradient: "from-sky-500 to-cyan-400"
                  },
                  {
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-white" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M22 11v1a10 10 0 1 1-9-10" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 14s1.5 2 4 2 4-2 4-2" />
                        <line x1="9" x2="9.01" y1="9" y2="9" strokeLinecap="round" strokeLinejoin="round" />
                        <line x1="15" x2="15.01" y1="9" y2="9" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 5h6" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 2v6" />
                      </svg>
                    ),
                    title: "Tranquillité d’esprit",
                    desc: "Obtenez des réponses claires et certifiées pour ne plus douter de la qualité de votre eau.",
                    gradient: "from-cyan-500 to-blue-400"
                  },
                  {
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-white" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="m9 11 3 3L22 4" />
                      </svg>
                    ),
                    title: "Conformité & Valeur",
                    desc: "Essentiel pour la vente d'une propriété et pour respecter les normes hypothécaires.",
                    gradient: "from-blue-500 to-indigo-500"
                  }
                ].map((item, id) => (
                  <div
                    key={id}
                    className="group bg-white/10 hover:bg-white/20 border border-white/10 hover:border-white/20 rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-900/20 backdrop-blur-sm"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-500">
                      <div className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors">
                        {item.icon}
                      </div>
                    </div>
                    <h3 className="text-white mb-3">{item.title}</h3>
                    <p className="text-base text-blue-50 group-hover:text-white transition-colors">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* 4. When you should test your water Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
              {/* Title Section (Row 1, Left) */}
              <div className="lg:col-start-1 lg:row-start-1 flex flex-col justify-center">
                <h2
                  className="text-slate-900 mb-8"
                  style={{}}
                >
                  <span className="text-[28px] md:text-[48px] font-light leading-[1.1] md:leading-[1.1] block">Quand faut-il faire analyser</span>
                  <span className="text-[28px] md:text-[48px] font-normal leading-[1.1] md:leading-[1.1] block">l'eau de votre maison ?</span>
                </h2>
                <div className="w-24 h-1 bg-blue-600"></div>
              </div>

              {/* Services List (Row 2, Left) */}
              <div className="lg:col-start-1 lg:row-start-2 space-y-2">
                {services.map((item, idx) => (
                  <div
                    key={idx}
                    onClick={() => setActiveService(idx)}
                    onMouseEnter={() => setActiveService(idx)}
                    className={`group cursor-pointer py-4 px-4 -mx-4 rounded-lg transition-all duration-300 ${activeService === idx ? 'bg-blue-50/50' : 'hover:bg-gray-50'}`}
                  >
                    <div className="flex flex-col">
                      <div className="flex items-center gap-4">
                        <span className="text-2xl md:text-3xl font-bold text-blue-600/50 group-hover:text-blue-600 transition-colors duration-300">
                          {String(idx + 1).padStart(2, '0')}.
                        </span>
                        <span
                          className={`text-[20px] font-bold transition-colors duration-300 ${activeService === idx ? 'text-blue-600' : 'text-slate-900 group-hover:text-blue-600'}`}
                          style={{}}
                        >
                          {item.title}
                        </span>
                      </div>
                      <div className={`grid transition-all duration-500 ease-in-out ${activeService === idx ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0 mt-0'}`}>
                        <div className="overflow-hidden">
                          <div className="pl-4 ml-3 border-l-2 border-blue-200">
                            <p className="text-slate-600 max-w-lg">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Image Display (Row 2, Right) */}
              <div className="lg:col-start-2 lg:row-start-2 relative rounded-[2.5rem] overflow-hidden shadow-2xl h-[400px] lg:h-full w-full">
                {services.map((service, idx) => (
                  <div
                    key={idx}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${activeService === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                  >
                    <img
                      src={service.img}
                      alt={`${service.title} - Raison de faire tester votre eau par Bricareau`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2000ms]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* 5. Water Testing plans Section */}
        <section className="py-24 bg-slate-50 relative">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-4 block flex items-center justify-center gap-2">
                <span className="w-8 h-[2px] bg-blue-600 inline-block"></span>
                NOS SOLUTIONS D'ANALYSE DE LA QUALITÉ D'EAU
              </span>
              <h2 className="text-slate-900 mb-8"
                style={{}}
              >
                <span className="text-[28px] md:text-[48px] font-light leading-[1.1] md:leading-[1.1] block">Quelle trousse d'analyse</span>
                <span className="text-[28px] md:text-[48px] font-normal leading-[1.1] md:leading-[1.1] block">choisir pour votre eau ?</span>
              </h2>
              <p className="text-slate-600 font-light max-w-2xl mx-auto">
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
                    <h3 className={`text-2xl font-bold mb-4 ${plan.featured ? 'text-white' : 'text-blue-600'}`}>
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

            <div className="mt-16 text-center">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 h-14 shadow-lg shadow-blue-200 animate-heartbeat"
                style={{}}
                asChild
              >
                <a href="#water-test">
                  Planifiez un test d'eau
                </a>
              </Button>
            </div>
          </div>
        </section>


        {/* 6. FAQ Section */}
        <section className="py-24 bg-white border-t border-slate-100">
          <div className="container mx-auto px-4 text-left">
            <div className="text-left mb-16">
              <h2
                className="text-slate-900 mb-8 text-left"
                style={{}}
              >
                <span className="text-[32px] md:text-[60px] font-light leading-[1.1] md:leading-[60px] block">Pour vous éclairer</span>
                <span className="text-[32px] md:text-[60px] font-normal leading-[1.1] md:leading-[60px] block">Questions fréquentes</span>
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
              <div className="mt-12 text-center">
                <Button
                  onClick={() => setShowAllFaqs(!showAllFaqs)}
                  className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-12 h-14 shadow-lg shadow-blue-200"
                >
                  {showAllFaqs ? "Voir moins de questions" : "Voir toutes les questions"}
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Schedule a Water Test Section */}
        <WaterTestFormSection id="water-test" />

      </main >
      <Footer />
    </div >
  );
};

export default TestsEauPage;
