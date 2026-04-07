import React, { useEffect } from "react";
import { cn } from "@/lib/utils";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ExpertAvatars from "@/components/ExpertAvatars";
import Hero from "@/components/Hero";
import GlobalBreadcrumbs from "@/components/GlobalBreadcrumbs";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Check, ChevronRight, ChevronLeft, CheckCircle2, X, Phone } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import heroPuits from "@/assets/blog-10-copyright.jpg";
import uvSystemImg from "@/assets/Systèmes de désinfection UV.webp";
import waterSoftenerImg from "@/assets/Adoucisseurs d'eau.webp";
import drinkingWaterImg from "@/assets/Solutions d'eau potable.webp";
import specializedFiltersImg from "@/assets/Filtres d'eau spécialisés.webp";
import eauCristallineImg from "@/assets/Eau cristalline.jpg";
import rottenEggsThumb from "@/assets/Water_Smells_Like_Rotten_Eggs_1400x.webp";
import waterTasteThumb from "@/assets/water-taste.jpg";
import turbideWaterThumb from "@/assets/Turbide-Water.webp";
import taninWaterThumb from "@/assets/problemes-deau-tanin.jpg";
import corrosiveWaterThumb from "@/assets/Corrosive-Water.webp";
import waterTestingImg from "@/assets/2147800429.jpg";
import waterTesting1Img from "@/assets/Gemini_Generated_Image_48dg6b48dg6b48dg.png";
import process1 from "@/assets/work-life-balance-in-science.jpg";
import process2 from "@/assets/section-image-and-content-23.jpg";
import process3 from "@/assets/SERVICES.jpg";
import process4 from "@/assets/unnamed (2).jpg";
import TestimonialsSection from "@/components/TestimonialsSection";
import labTestImg from "@/assets/506610454-612x612-1.jpg";
import eauDureThumb from "@/assets/9e9f1b18-7b69-4af1-9e3d-322775a1ec72.jpg";
import happyFamilyImg from "@/assets/happy-family-enjoying-time-together.jpg";
import rouilleThumbUpdated from "@/assets/5a4674e7-575d-4cd9-b1f2-32522f8a7072.jpg";
import WCwithoutIronImg from "@/assets/Cuvette de toilette sans taches de fer.jpg";
import WCwithIronImg from "@/assets/Cuvette de toilette avec taches de fer.png";
import mauvaisGoutThumb from "@/assets/blog3-1.jpg";
import { heroImg as coliformBacteriaImg } from "./Blog pages/Bacteries-dans-le-puits-les-etapes-de-desinfection-choc";
import { softenerImg as residentialWaterSoftenerImg } from "./Blog pages/Comment régler la dureté de votre adoucisseur ";
import { adoucisseurImg as adoucisseurFosseImg } from "./Blog pages/Adoucisseur-deau- et-fosse-septique--Mythes-et-réalités";
import { conditionneursImg } from "./Blog pages/Adoucisseur avec sel ou sans sel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import ConsultationFormSection from "@/components/ConsultationFormSection";
import ourteamstudyyourwaterImg from "@/assets/10271.jpg";
import pidImg from "@/assets/PID.webp";
import supportImg from "@/assets/8786.jpg";
import laboratoryImg from "@/assets/2148926623.jpg";

interface Problem {
  title: string;
  image: string;
  desc: string;
  isLabelTitle?: boolean;
}

const problems: Problem[] = [
  {
    title: "Eau dure",
    image: eauDureThumb,
    desc: "Une eau riche en calcium et magnésium laisse des dépôts calcaires tenaces, ternit votre vaisselle et assèche votre peau ainsi que vos cheveux."
  },
  {
    title: "Eau avec mauvais goût",
    image: mauvaisGoutThumb,
    desc: "Un goût métallique, terreux ou de chlore gâche le plaisir de boire votre eau et peut altérer le goût de vos aliments et de votre café."
  },
  {
    title: "Eau avec taches de rouille",
    image: rouilleThumbUpdated,
    desc: "Les taches rougeâtres ou orangées sur vos éviers, baignoires et vêtements sont souvent le signe d'une forte concentration de fer dans votre eau de puits."
  },
  {
    title: "Eau avec odeur d'œufs pourris",
    image: rottenEggsThumb,
    desc: "Une odeur d'œufs pourris (soufre) ou de moisissure peut rendre votre eau impropre à la consommation et désagréable pour la douche."
  },
  {
    title: "Eau trouble ou turbide",
    image: turbideWaterThumb,
    desc: "La présence de sable, d'argile ou de matières organiques rend l'eau trouble et peut endommager vos appareils ainsi que votre tuyauterie."
  },
  {
    title: "Eau jaunâtre",
    image: taninWaterThumb,
    desc: "Une teinte jaune ou brune est souvent causée par des tanins organiques ou des nitrates, indiquant une infiltration de matières de surface."
  },
  {
    title: "Eau corrosive",
    image: corrosiveWaterThumb,
    desc: "Des dépôts verts ou bleus sur vos tuyaux et robinets indiquent une eau acide qui ronge vos canalisations, menant à des fuites éventuelles."
  },
  {
    title: "Bactéries et coliformes",
    image: coliformBacteriaImg,
    desc: "La présence de bactéries, coliformes ou E. coli dans l'eau de puits représente un risque sanitaire majeur pour votre famille."
  }
];



interface ComparisonItem {
  feature: string;
  filters: boolean | string;
  softeners: boolean | string;
  osmose: boolean | string;
  uv: boolean | string;
}

const comparisonData: ComparisonItem[] = [
  { feature: "Solutions au Point d'entrée (Toute la maison)", filters: true, softeners: true, osmose: false, uv: true },
  { feature: "Solutions au Point d'usage", filters: false, softeners: false, osmose: true, uv: false },
  { feature: "Élimination des sédiments et de la turbidité", filters: true, softeners: "Partielle", osmose: true, uv: false },
  { feature: "Traitement du calcaire et de la dureté", filters: false, softeners: true, osmose: "Option", uv: false },
  { feature: "Élimination du fer et du manganèse", filters: true, softeners: true, osmose: false, uv: false },
  { feature: "Neutralisation des bactéries et virus", filters: false, softeners: false, osmose: true, uv: true },
  { feature: "Élimination du soufre (odeur d'oeufs pourris)", filters: true, softeners: false, osmose: false, uv: false },
  { feature: "Filtration des polluants chimiques", filters: "Option", softeners: false, osmose: true, uv: false },
];

const TraitementEauDePuits = () => {
  const navigate = useNavigate();
  const [showAllFaqs, setShowAllFaqs] = React.useState(false);
  const [activeCol, setActiveCol] = React.useState(0);
  const [resourceIndex, setResourceIndex] = React.useState(1);
  const resourcesRef = React.useRef<HTMLDivElement>(null);

  const handleScrollRessources = () => {
    if (resourcesRef.current) {
        const scrollLeft = resourcesRef.current.scrollLeft;
        const containerWidth = resourcesRef.current.offsetWidth;
        const itemWidth = resourcesRef.current.querySelector('div')?.offsetWidth || containerWidth;
        const index = Math.round(scrollLeft / itemWidth) + 1;
        setResourceIndex(Math.min(index, resources.length));
    }
  };

  const resources = [
    { title: "Bactéries dans le puits", img: coliformBacteriaImg, link: "/bacteries-dans-le-puits-etapes-de-desinfection-choc" },
    { title: "Fosse septique et adoucisseur", img: adoucisseurFosseImg, link: "/adoucisseur-deau-et-fosse-septique-mythes-et-realites" },
    { title: "Réglage de l'adoucisseur", img: residentialWaterSoftenerImg, link: "/comment-regler-durete-adoucisseur-eau" }
  ];

  useEffect(() => {
    document.title = "Traitement d'eau de puits au Québec | Fer, Soufre et Bactéries | Bricareau";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Experts en traitement d'eau de puits au Québec. Éliminez efficacement le fer, le soufre (odeur d'œufs pourris), le calcaire et les bactéries. Analyse d'eau complète et solutions certifiées.");
    }

    // OG Tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", "Traitement d'eau de puits au Québec : Solutions Spécialisées | Bricareau");
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", "Retrouvez une eau de puits cristalline et sécuritaire pour votre famille. Spécialistes en filtration de fer, soufre et désinfection UV au Québec.");
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute("content", "https://bricareau.com/traitement-eau-de-puits");
  }, []);

  const scrollResources = (direction: 'left' | 'right') => {
    if (resourcesRef.current) {
      const scrollAmount = resourcesRef.current.clientWidth * 0.8;
      resourcesRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero 
            image={heroPuits}
            highlightedTitle="Votre puits est un trésor,"
            mainTitle="offrez-lui la pureté qu'il mérite."
            subtitle="Protégez votre santé et vos installations avec nos solutions expertes pour puits privés. Éliminez le fer, le soufre, le calcaire et les bactéries pour une eau cristalline et sécuritaire partout dans votre maison."
            showPhone={true}
            showBreadcrumbs={true}
        />

        {/* 3. Well Water Problems section - Ultramodern Bento Grid */}
        <section className="relative py-32 bg-slate-50 overflow-hidden">
          {/* Background Decorations */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 -z-0" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 -z-0" />

          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-24 max-w-3xl mx-auto">
              <span className="inline-block px-4 py-1.5 bg-blue-600/10 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-8">
                Contaminants fréquents dans l'eau
              </span>
               <h2 className="mb-8 heading-pro-max text-center">
                 <span className="italic font-light text-[#2563eb] block">Problèmes courants</span>
                 <span className="font-bold text-[#1e3a8a] block">de l'eau de puits</span>
               </h2>
               <p className="body-pro-max text-slate-500 text-center">
                 L'eau de votre puits est vivante et changeante. Identifiez les signes avant-coureurs pour garantir la sécurité de votre foyer et la longévité de vos installations.
               </p>
            </div>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[minmax(320px,auto)]">
              {problems.map((problem, idx) => {
                // Custom grid spans for Bento feel
                const isFeatured = idx === 0; // First item (Fer) is large
                const isWide = idx === 5;     // 6th item (Tanins) is wide

                return (
                  <div
                    key={idx}
                    className={`group relative rounded-[2.5rem] overflow-hidden border border-white bg-white/40 backdrop-blur-xl shadow-sm hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 cursor-pointer
                      ${isFeatured ? "md:col-span-2 md:row-span-2" : ""}
                      ${isWide ? "md:col-span-2" : ""}
                    `}
                    onClick={() => (window.location.href = "/consultation")}
                  >
                    {/* Background Image with Overlay */}
                    <div className="absolute inset-0 z-0">
                      <img
                        src={problem.image}
                        alt={`${problem.title} - Solution Bricareau`}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-40 group-hover:opacity-60"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-white via-white/80 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 p-10 h-full flex flex-col justify-start gap-6">
                      <div className="flex justify-between items-start">
                        <div className="w-12 h-12 rounded-2xl bg-white shadow-md flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-500">
                          <span className="text-sm font-black text-slate-400 group-hover:text-white">
                            0{idx + 1}
                          </span>
                        </div>
                        {isFeatured && (
                          <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-[10px] font-black uppercase tracking-widest">
                            Contaminant populaire
                          </span>
                        )}
                      </div>

                      <div className="space-y-4">
                        <h3 className="card-title group-hover:text-blue-600 transition-colors duration-500">
                          {problem.title}
                        </h3>
                        <p
                          className={`body-pro-max text-slate-600 text-left ${
                            isFeatured ? "max-w-md" : "line-clamp-4"
                          }`}
                        >
                          {problem.desc}
                        </p>
                      </div>

                      {/* Diagnostic Action Overlay - Only visible on hover */}
                      <div className="mt-auto pt-2 flex items-center gap-3 text-[#2563eb] font-black text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                        <span>Diagnostiquer cette eau</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 4. Processus Section - Liquid Glass Bento Journey Alternative */}
        <section className="relative py-32 bg-white overflow-hidden">
          {/* Iridescent Background Accents */}
          <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-400/20 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-cyan-300/10 rounded-full blur-[150px]" />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            {/* Header - Centered Minimal */}
            <div className="text-center mb-24 max-w-3xl mx-auto">
               <span className="inline-block px-4 py-1.5 bg-blue-600/5 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-[0.4em] mb-8 border border-blue-100">
                L'EXPÉRIENCE BRICAREAU
              </span>
               <h2 className="mb-8 heading-pro-max text-center">
                 <span className="italic font-light text-blue-500 block">Une transformation</span>
                 <span className="font-bold text-[#1e3a8a] block text-center">Simple & Transparente.</span>
               </h2>
               <p className="body-pro-max text-slate-500 text-center">
                 Quatre étapes clés orchestrées avec une précision chirurgicale pour libérer tout le potentiel de votre eau.
               </p>
            </div>

            {/* The Bento Grid Journey */}
            <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6 auto-rows-[280px]">
              
              {/* STEP 1: Full-Height Vertical (Diagnostic) */}
              <div className="md:col-span-3 lg:col-span-4 lg:row-span-2 group relative rounded-[3rem] overflow-hidden border border-slate-100 bg-white shadow-sm hover:shadow-2xl transition-all duration-700">
                <div className="absolute inset-0 z-0">
                  <img src={laboratoryImg} alt="Analyse" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-30 grayscale group-hover:grayscale-0" />
                  <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-blue-50/40" />
                </div>
                <div className="relative z-10 p-10 h-full flex flex-col">
                  <span className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-black text-xl mb-8 shadow-lg shadow-blue-200">01</span>
                  <h3 className="card-title text-3xl mb-6">Analyse experte en laboratoire</h3>
                  <p className="text-slate-500 font-light leading-relaxed mb-auto text-justify">
                    Tout commence par la vérité scientifique. Nous identifions avec une précision millimétrée chaque contaminant présent dans votre eau brute pour définir la base de votre solution.
                  </p>
                  <div className="w-full h-1 bg-blue-600/10 rounded-full mt-10 overflow-hidden">
                    <div className="w-1/4 h-full bg-blue-600 group-hover:w-full transition-all duration-1000" />
                  </div>
                </div>
              </div>

              {/* STEP 2: Wide Horizontal (Engineering) */}
              <div className="md:col-span-3 lg:col-span-8 group relative rounded-[3rem] overflow-hidden border border-slate-100 bg-white shadow-sm hover:shadow-2xl transition-all duration-700">
                <div className="absolute inset-0 z-0">
                  <img src={pidImg} alt="Conception" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-40 grayscale group-hover:grayscale-0" />
                  <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-transparent" />
                </div>
                <div className="relative z-10 p-10 h-full flex flex-col justify-center max-w-xl">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold">02</span>
                    <span className="text-[10px] font-black tracking-widest text-blue-600 uppercase">Architecture Technique</span>
                  </div>
                  <h3 className="card-title text-2xl mb-4">Ingénierie sur mesure</h3>
                  <p className="text-slate-500 font-light leading-relaxed">
                    Nos ingénieurs conçoivent une architecture de filtration optimisée, calibrée selon vos résultats et votre volume de consommation quotidien.
                  </p>
                </div>
              </div>

              {/* STEP 3: Square (Installation) */}
              <div className="md:col-span-3 lg:col-span-4 group relative rounded-[3rem] overflow-hidden border border-slate-100 bg-slate-900 shadow-xl hover:shadow-blue-900/20 transition-all duration-700">
                 <div className="absolute inset-0 z-0 opacity-40">
                  <img src={process3} alt="Installation" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-900/40 to-transparent" />
                <div className="relative z-10 p-10 h-full flex flex-col">
                  <span className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center font-bold mb-auto">03</span>
                  <h3 className="text-white font-bold text-2xl mb-4">Mise en œuvre experte</h3>
                  <p className="text-blue-100/70 text-sm font-light leading-relaxed">
                    Installation de haute précision pilotée par nos techniciens spécialisés.
                  </p>
                </div>
              </div>

              {/* STEP 4: Horizontal (Support) */}
              <div className="md:col-span-3 lg:col-span-4 group relative rounded-[3rem] overflow-hidden border border-blue-100 bg-white shadow-sm hover:shadow-blue-200 transition-all duration-700">
                <div className="absolute inset-0 z-0">
                  <img src={supportImg} alt="Suivi" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-30 grayscale group-hover:grayscale-0" />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-blue-50/20" />
                </div>
                <div className="relative z-10 p-10 h-full flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <span className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold">04</span>
                    <div className="flex gap-1">
                      {[1,2,3].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-blue-400 group-hover:bg-blue-600 transition-colors" />)}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-[#1e3a8a] font-bold text-xl mb-2 italic">Suivi & Excellence</h3>
                    <p className="text-slate-500 text-sm font-light">Accompagnement continu et maintenance préventive certifiée.</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Global CTA - Glass Floating */}
            <div className="mt-20 flex justify-center">
               <div className="inline-flex items-center p-2 rounded-full bg-white/50 backdrop-blur-md border border-slate-100 shadow-xl">
                 <span className="px-6 text-sm font-medium text-slate-500 hidden sm:inline">Prêt pour votre diagnostic ?</span>
                 <Button asChild className="rounded-full px-10 h-14 shadow-lg shadow-blue-200">
                   <a href="/consultation">Débuter l'analyse <ArrowRight className="ml-2 w-4 h-4" /></a>
                 </Button>
               </div>
            </div>
          </div>
        </section>

        {/* 5.Water Testing Section (Redesigned for Mobile) */}
        <section className="relative lg:h-[800px] flex flex-col lg:flex-row items-stretch overflow-hidden bg-white">
          {/* Mobile Image */}
          <div className="lg:hidden w-full h-auto relative bg-slate-50">
            <img
              src={waterTestingImg}
              alt="Analyse d'eau de puits - Service Bricareau"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Desktop Background */}
          <div className="hidden lg:block absolute inset-0 z-0">
            <img
              src={labTestImg}
              alt="Analyse d'eau de puits en laboratoire certifié"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-blue-900/40 lg:bg-gradient-to-r lg:from-blue-900/90 lg:to-blue-600/20 mix-blend-multiply" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-white via-white/10 to-transparent" />
          </div>

          <div className="container mx-auto px-4 relative z-10 flex items-center py-12 lg:py-0">
                        <div className="max-w-2xl text-slate-900 lg:text-white">
                            <span className="text-blue-600 lg:text-blue-600 text-xs font-black uppercase tracking-[0.3em] mb-8 block">
                                Contrôle de la Qualité D'EAU
                            </span>
               <h2 className="mb-8 heading-pro-max text-left">
                 <span className="italic font-light text-[#1e3a8a] lg:text-white block">Dites adieu au</span>
                 <span className="text-[#1e3a8a] lg:text-white italic font-bold font-serif">fer, soufre et calcaire.</span>
               </h2>
               <p className="body-pro-max text-black lg:text-white/95 mb-8 max-w-xl text-justify lg:text-left">
                 Un puits performant commence par une analyse rigoureuse. Identifiez les contaminants invisibles et protégez durablement votre santé et vos installations.
               </p>
              <div className="flex gap-4">
                  <Button asChild>
                    <a href="/tests-eau">Réservez une analyse d'eau</a>
                  </Button>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Associated products Section */}
        <section className="bg-white py-24">
          <div className="container mx-auto px-6">
            <div className="text-left mb-16">
               <h2 className="mb-8 heading-pro-max text-left">
                 <span className="italic font-light text-[#2563eb] block">Découvrez nos solutions</span>
                 <span className="font-bold text-[#1e3a8a] block">de traitement de l'eau de puits</span>
               </h2>
               <div className="w-24 h-1 bg-blue-600 mb-8"></div>
               <p className="body-pro-max text-slate-600 mb-8 text-justify">
                 Nos solutions spécialisées pour l'eau de puits sont conçues pour transformer une eau brute et imprévisible en une source de pureté irréprochable au sein de votre foyer. Nous proposons une gamme complète incluant nos filtres spécialisés contre les différents contaminants, nos adoucisseurs de pointe éliminant le fer et le calcaire, ainsi que nos stations d'eau potable par osmose inverse pour une hydratation saine. Pour une sécurité microbiologique absolue, nos systèmes de stérilisation UV neutralisent efficacement les bactéries sans aucun ajout chimique. Chaque produit est sélectionné pour sa robustesse et sa capacité à répondre aux défis uniques posés par les eaux souterraines, vous garantissant ainsi une performance durable et une tranquillité d'esprit totale au quotidien. Faites confiance à l'expertise de Bricareau pour protéger votre santé et préserver l'intégrité de vos installations grâce à une filtration sur mesure, fiable et adaptée à vos besoins spécifiques.
               </p>
            </div>

            <Carousel
              opts={{
                align: "start",
                loop: true
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {[
                  {
                    name: "Filtres d'eau spécialisés",
                    desc: "Éliminez sédiments et particules indésirables. Cette protection préserve vos tuyaux et appareils pour une eau claire et sans impuretés visibles.",
                    img: specializedFiltersImg,
                    link: "/filtres-deau"
                  },
                  {
                    name: "Adoucisseurs d'eau de puits",
                    desc: "Stop au calcaire et à la rouille. Une eau douce qui respecte votre peau, protège votre plomberie et garantit une vaisselle éclatante jour après jour.",
                    img: waterSoftenerImg,
                    link: "/adoucisseurs-eau-de-puits"
                  },
                  {
                    name: "Stations d'eau\npotable",
                    desc: "Une eau de qualité supérieure à l'évier. L'osmose inverse élimine polluants, sodium et nitrates pour une hydratation pure, saine et au goût parfait.",
                    img: drinkingWaterImg,
                    link: "/systeme-de-filtration-deau-potable"
                  },
                  {
                    name: "Systèmes de stérilisation UV",
                    desc: "Sécurité totale sans produits chimiques. La technologie UV neutralise 99,99% des bactéries pour une eau potable saine et une tranquillité d'esprit absolue.",
                    img: uvSystemImg,
                    link: "/Systemes-de-desinfection-UV"
                  }
                ].map((prod, i) => (
                  <CarouselItem key={i} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <div
                      className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full cursor-pointer"
                      onClick={() => window.location.href = prod.link || "/contact"}
                    >
                      <div className="relative h-80 overflow-hidden bg-slate-50 flex items-center justify-center p-12">
                        <img
                          src={prod.img}
                          alt={`${prod.name} - Solution Bricareau pour une eau de puits sécuritaire`}
                          className="max-h-full object-contain group-hover:scale-110 transition-transform duration-700 mix-blend-multiply"
                        />
                      </div>
                      <div className="p-8 space-y-4 flex flex-col flex-grow border-t-2 border-transparent group-hover:border-blue-600 transition-colors">
                        <h3
                          className="card-title group-hover:text-blue-600 transition-colors text-center"
                        >
                          {prod.name}
                        </h3>
                         <p className="body-pro-max text-slate-600 flex-grow text-justify">
                           {prod.desc}
                         </p>
                        <div
                          className="inline-flex items-center gap-2 text-blue-600 font-bold text-xs tracking-widest uppercase mt-4 group-hover:underline self-end"
                          style={{}}
                        >
                          <span></span>
                          <ArrowRight className="h-6 w-6 transform group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-end gap-2 mt-8">
                <CarouselPrevious className="relative static translate-y-0 translate-x-0 bg-blue-600 text-white hover:bg-blue-700 border-none" />
                <CarouselNext className="relative static translate-y-0 translate-x-0 bg-blue-600 text-white hover:bg-blue-700 border-none" />
              </div>
            </Carousel>
          </div>
        </section>

        {/* 6.5. Avant / Après - Visual Proof Section */}
        <section className="relative py-32 bg-slate-50 overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-24 max-w-3xl mx-auto">
              <span className="inline-block px-4 py-1.5 bg-blue-600/10 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-8">
                RÉSULTATS CONCRETS
              </span>
              <h2 className="mb-8 heading-pro-max text-center">
                <span className="italic font-light text-[#2563eb] block">Avant / Après :</span>
                <span className="font-bold text-[#1e3a8a] block">La Transformation Bricareau</span>
              </h2>
              <p className="body-pro-max text-slate-500 text-center">
                Ne vous contentez pas de nous croire sur parole. Visualisez l'impact immédiat de nos systèmes sur la qualité, la clarté et la sécurité de votre eau de puits.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Comparison 1: Iron & Rust */}
              <div className="group bg-white rounded-[3rem] p-8 lg:p-12 border border-slate-100 shadow-xl hover:shadow-2xl transition-all duration-700">
                <div className="flex items-center gap-6 mb-12">
                   <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center text-orange-600">
                     <span className="text-xl font-black">Fe</span>
                   </div>
                   <div>
                     <h3 className="text-2xl font-bold text-[#1e3a8a]">Fer & Manganèse</h3>
                     <p className="text-sm text-slate-500">Élimination des taches et du goût métallique</p>
                   </div>
                </div>

                <div className="grid grid-cols-2 gap-4 relative">
                  {/* Before */}
                  <div className="space-y-4">
                    <div className="relative aspect-square rounded-[2rem] overflow-hidden">
                      <img src={WCwithIronImg} alt="Eau de puits ferreuse avant traitement" className="w-full h-full object-cover grayscale-[0.3]" />
                      <div className="absolute inset-0 bg-orange-900/20" />
                      <span className="absolute top-4 left-4 bg-red-600 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">Avant</span>
                    </div>
                    <p className="text-xs font-medium text-slate-400 text-center">Eau ferreuse et dépôts de rouille</p>
                  </div>
                  {/* After */}
                  <div className="space-y-4">
                    <div className="relative aspect-square rounded-[2rem] overflow-hidden border-4 border-blue-600/20">
                      <img src={WCwithoutIronImg} alt="Eau pure après traitement Bricareau" className="w-full h-full object-cover opacity-90" />
                      <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-transparent" />
                      <span className="absolute top-4 left-4 bg-blue-600 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">Après</span>
                    </div>
                    <p className="text-xs font-bold text-blue-600 text-center">Éclat retrouvé, porcelaine comme neuve !</p>
                  </div>
                  {/* Connector Arrow */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg border border-slate-100 flex items-center justify-center z-10 text-blue-600">
                    <ChevronRight className="w-6 h-6" />
                  </div>
                </div>
              </div>

              {/* Comparison 2: Turbidité & Clarté */}
              <div className="group bg-white rounded-[3rem] p-8 lg:p-12 border border-slate-100 shadow-xl hover:shadow-2xl transition-all duration-700">
                <div className="flex items-center gap-6 mb-12">
                   <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600">
                     <span className="text-xl font-black">H2O</span>
                   </div>
                   <div>
                     <h3 className="text-2xl font-bold text-[#1e3a8a]">Turbidité & Algues</h3>
                     <p className="text-sm text-slate-500">Filtration multi-niveaux pour une eau limpide</p>
                   </div>
                </div>

                <div className="grid grid-cols-2 gap-4 relative">
                  {/* Before */}
                  <div className="space-y-4">
                    <div className="relative aspect-square rounded-[2rem] overflow-hidden">
                      <img src={turbideWaterThumb} alt="Eau de puits trouble avant filtration" className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-slate-900/20" />
                      <span className="absolute top-4 left-4 bg-red-600 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">Avant</span>
                    </div>
                    <p className="text-xs font-medium text-slate-400 text-center">Eau trouble, particules en suspension</p>
                  </div>
                  {/* After */}
                  <div className="space-y-4">
                    <div className="relative aspect-square rounded-[2rem] overflow-hidden border-4 border-blue-600/20">
                        <img src={eauCristallineImg} alt="Eau pure Bricareau" className="absolute inset-0 w-full h-full object-cover" />
                      <span className="absolute top-4 left-4 bg-blue-600 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">Après</span>
                    </div>
                    <p className="text-xs font-bold text-blue-600 text-center">Eau 100% limpide et inodore</p>
                  </div>
                  {/* Connector Arrow */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg border border-slate-100 flex items-center justify-center z-10 text-blue-600">
                    <ChevronRight className="w-6 h-6" />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-20 text-center">
              <Button asChild className="h-16 px-12 rounded-full text-lg shadow-blue-200">
                <a href="/consultation">Obtenir ma solution sur mesure</a>
              </Button>
            </div>
          </div>
        </section>

        {/* 7. Testimonials Section */}
        <TestimonialsSection
          filterProduct="/traitement-eau-de-puits"
          limit={5}
          title={
            <>
              <span className="italic font-light text-[#2563eb] block">La solution là </span>
              <span className="font-bold text-[#1e3a8a] block">où d'autres ont échoué.</span>
            </>
          }
        />



        {/* 8. Comparison Table Section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-left mb-16">
               <h2 className="mb-8 heading-pro-max text-left">
                 <span className="italic font-light text-[#2563eb] block">Comparez nos solutions</span>
                 <span className="font-bold text-[#1e3a8a] block">de traitement de l'eau de puits</span>
               </h2>
               <div className="w-24 h-1 bg-blue-600 mb-8"></div>
            </div>

                        <div className="overflow-x-visible relative">
                            {/* Navigation Arrows for Mobile/Tablet */}
                            <div className="lg:hidden flex items-center justify-end gap-3 mb-8 relative z-30">
                                <Button 
                                    size="icon" 
                                    variant="outline" 
                                    className="w-10 h-10 rounded-full border-blue-100 hover:bg-blue-600 hover:text-white transition-all shadow-sm"
                                    onClick={() => setActiveCol(Math.max(0, activeCol - 1))}
                                    disabled={activeCol === 0}
                                >
                                    <ChevronLeft className="h-5 w-5" />
                                </Button>
                                <Button 
                                    size="icon" 
                                    variant="outline" 
                                    className="w-10 h-10 rounded-full border-blue-100 hover:bg-blue-600 hover:text-white transition-all shadow-sm"
                                    onClick={() => setActiveCol(Math.min(3, activeCol + 1))}
                                    disabled={activeCol === 3}
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
                                                { name: "Filtres spécialisés", img: specializedFiltersImg, badge: "Sédiments & Fer", color: "bg-slate-500" },
                                                { name: "Adoucisseurs", img: waterSoftenerImg, badge: "Calcaire & Fer", color: "bg-blue-600" },
                                                { name: "Osmose inverse", img: drinkingWaterImg, badge: "Eau salée", color: "bg-emerald-600" },
                                                { name: "Stérilisation UV", img: uvSystemImg, badge: "Désinfection", color: "bg-amber-600" }
                                            ].map((m, i) => (
                                                <th 
                                                    key={i} 
                                                    className={cn(
                                                        "p-4 md:p-6 text-center transition-all duration-500 min-w-[220px]",
                                                        i === activeCol ? "table-cell" : "hidden lg:table-cell"
                                                    )}
                                                >
                                                    <div className="flex flex-col items-center gap-6">
                                                        <div className="relative group/img pr-4 pt-4">
                                                            <span className={`absolute top-0 right-0 z-20 px-3 py-1 ${m.color} text-white rounded-full text-[8px] font-bold uppercase tracking-widest shadow-lg shadow-blue-900/10 whitespace-nowrap scale-90 md:scale-100`}>
                                                                {m.badge}
                                                            </span>
                                                            <div className="absolute inset-0 bg-blue-600 rounded-full blur-2xl opacity-0 group-hover/img:opacity-20 transition-opacity duration-700" />
                                                            <img
                                                                src={m.img}
                                                                alt={m.name}
                                                                className="w-[120px] md:w-[140px] h-[100px] md:h-[120px] object-contain mx-auto mix-blend-multiply relative z-10 transition-transform duration-700 group-hover/img:scale-110"
                                                            />
                                                        </div>
                                                        <div className="text-[13px] md:text-lg font-bold text-[#1e3a8a]">{m.name}</div>
                                                    </div>
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100 relative z-10">
                                        {comparisonData.map((row, i) => (
                                            <tr key={i} className="hover:bg-blue-50/30 transition-colors group">
                                                <td className="p-6 md:p-10 font-bold text-[#1e3a8a] bg-white sticky left-0 z-30 border-r border-slate-50 drop-shadow-sm lg:drop-shadow-none text-[12px] md:text-sm italic group-hover:text-blue-600 transition-colors">
                                                    {row.feature}
                                                </td>
                                                {["filters", "softeners", "osmose", "uv"].map((model, idx) => (
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
                                    </tbody>
                                </table>
                            </div>
                        </div>
          </div>
        </section>

        {/* 11. PREMIUM CTA SECTION */}
        <section className="relative py-32 flex items-center overflow-hidden bg-[#1e3a8a]">
          {/* Animated background elements */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-600/20 to-transparent skew-x-12 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-cyan-400/10 to-transparent -skew-x-12 -translate-x-1/4" />
          
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0 opacity-40">
            <img
              src={happyFamilyImg}
              alt="Expert Bricareau analysant l'eau de puits"
              className="w-full h-full object-cover grayscale brightness-150"
            />
            <div className="absolute inset-0 bg-[#1e3a8a]/10 backdrop-blur-sm" />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-5xl mx-auto text-center space-y-12">
              <div className="space-y-6">
                <span className="inline-block px-4 py-1.5 bg-white text-blue-600 rounded-full text-[10px] font-black uppercase tracking-[0.4em]">
                  UNE EAU ENFIN SANS ODEUR NI TACHES
                </span>
                <h2 className="font-light block leading-tight lg:leading-[52px] text-center text-white">
                  <span>Maîtrisez la qualité de votre eau de puits</span> <br />
                  <span className="italic font-bold font-serif">et protégez votre famille contre les contaminants.</span>
                </h2>
                <p className="text-lg md:text-xl text-blue-100/80 max-w-2xl mx-auto font-light leading-relaxed">
                    Le fer, le soufre et le calcaire ne sont pas une fatalité. Protégez votre santé et retrouvez le plaisir d'une eau pure, inodore et cristalline dès aujourd'hui.                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-4">
                <Button asChild>
                  <a href="tel:18552649328" className="flex items-center gap-3">
                    <Phone className="h-5 w-5 animate-bounce" />
                    Parlez à un expert
                  </a>
                </Button>
                <Button
                  variant="outline"
                  asChild
                >
                  <NavLink to="/consultation">Planifiez une consultation</NavLink>
                </Button>
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


        {/* 10. FAQ Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-left mb-16">
               <h2 className="mb-8 heading-pro-max text-left">
                 <span className="italic font-light text-[#2563eb] block">Pour vous éclairer</span>
                 <span className="font-bold text-[#1e3a8a] block">Questions fréquentes</span>
               </h2>
               <div className="w-24 h-1 bg-blue-600 mb-8"></div>
            </div>

            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {[
                  {
                    q: "Pourquoi l'eau de mon puits a-t-elle une odeur d'œufs pourris ?",
                    a: "Cette odeur est causée par le gaz sulfure d'hydrogène. Bricareau installe des systèmes d'oxydation ou des filtres au charbon spécialisés qui éliminent totalement cette odeur pour une eau fraîche et inodore."
                  },
                  {
                    q: "Le fer dans l'eau de puits est-il dangereux ?",
                    a: "Le fer n'est pas nocif pour la santé, mais il cause des taches de rouille tenaces, obstrue la tuyauterie et donne un goût métallique. Nos filtres à fer haute performance éliminent ces désagréments sans produits chimiques."
                  },
                  {
                    q: "À quelle fréquence devrais-je faire tester mon eau de puits ?",
                    a: "Il est fortement recommandé de tester votre eau au moins une fois par an pour les bactéries et les nitrates, et tous les deux ans pour les paramètres physico-chimiques profonds."
                  },
                  {
                    q: "Quelles sont les solutions pour éliminer les bactéries ?",
                    a: "La solution la plus fiable est la désinfection par rayons ultraviolets (UV). Elle détruit 99,9 % des virus et bactéries (comme E. coli) sans altérer le goût ou la composition chimique de votre eau."
                  },
                  {
                    q: "Pourquoi y a-t-il des taches bleues ou vertes sur ma robinetterie ?",
                    a: "Cela indique une eau acide (pH bas) qui corrode vos tuyaux de cuivre. Un neutraliseur de pH est essentiel pour protéger votre plomberie et éviter des fuites coûteuses à long terme."
                  },
                  {
                    q: "Un adoucisseur d'eau peut-il éliminer tout le fer ?",
                    a: "Un adoucisseur élimine le fer 'clair' (dissous), mais pour le fer 'rouge' (oxydé) ou de fortes concentrations, un filtre à fer dédié est nécessaire en amont pour éviter d'endommager les résines de l'adoucisseur."
                  },
                  {
                    q: "Qu'est-ce que le manganèse et comment s'en débarrasser ?",
                    a: "Le manganèse cause des taches noires et des dépôts huileux. Nos systèmes de filtration spécialisés utilisent des médias oxydants qui capturent le manganèse efficacement, laissant votre eau limpide."
                  },
                  {
                    q: "Pourquoi mon eau de puits est-elle trouble ou sableuse ?",
                    a: "C'est souvent dû à des sédiments ou de la turbidité. Un filtre à sédiments ou un système de filtration multimédia à l'entrée principale clarifiera l'eau et protégera tous vos appareils ménagers."
                  },
                  {
                    q: "Si mon eau semble claire, ai-je quand même besoin d'un filtre ?",
                    a: "Oui, car de nombreux contaminants comme le plomb, l'arsenic, les nitrates ou les bactéries sont invisibles, sans goût et sans odeur. Seule une analyse d'eau peut confirmer sa pureté réelle."
                  },
                  {
                    q: "Quelle est la durée de vie d'un système de traitement d'eau de puits ?",
                    a: "Avec un entretien régulier, nos systèmes Bricareau ont une durée de vie moyenne de 15 à 25 ans. Nos composantes sont sélectionnées pour leur robustesse face aux eaux de puits les plus difficiles."
                  },
                  {
                    q: "Quels sont les avantages d'un système pour toute la maison ?",
                    a: "Vous protégez toute votre tuyauterie, prolongez la vie de vos électroménagers (chauffe-eau, lave-vaisselle), et profitez d'une eau pure à chaque robinet, pour boire, cuisiner et vous doucher."
                  },
                  {
                    q: "Le traitement de l'eau affecte-t-il la pression dans la maison ?",
                    a: "Nos experts dimensionnent votre système en fonction de votre débit maximal pour assurer une filtration optimale sans perte de pression perceptible, même lors d'utilisations simultanées."
                  },
                  {
                    q: "L'eau de puits est-elle naturellement dure ?",
                    a: "Dans la majorité des cas, oui. En circulant dans le sol, l'eau dissout le calcium et le magnésium. Un adoucisseur est souvent la base de tout traitement pour éviter l'accumulation de calcaire."
                  },
                  {
                    q: "Pouvez-vous éliminer les tanins (eau jaunâtre) ?",
                    a: "Oui, les tanins proviennent de matières organiques en décomposition dans le sol. Nous utilisons des systèmes d'échange d'anions spécifiques qui retirent cette coloration 'thé' de votre eau."
                  },
                  {
                    q: "Quelle est la différence entre un filtre à sédiments et un charbon ?",
                    a: "Le filtre à sédiments retire les particules physiques (sable, terre), tandis que le charbon activé retire les produits chimiques, les goûts et les odeurs par adsorption moléculaire."
                  },
                ].slice(0, showAllFaqs ? undefined : 6).map((item, idx) => (
                  <AccordionItem
                    key={idx}
                    value={`item-${idx}`}
                    className="border-b-gray-200"
                  >
                    <AccordionTrigger className="text-left text-base font-medium leading-6 hover:no-underline py-6" style={{}}>
                      {item.q}
                    </AccordionTrigger>
                     <AccordionContent className="body-pro-max text-slate-500 pb-8 text-justify">
                       {item.a}
                     </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
              <div className="mt-12 text-center">
                <Button
                  onClick={() => setShowAllFaqs(!showAllFaqs)}
                  className="shadow-lg shadow-blue-200"
                >
                  {showAllFaqs ? "Voir moins de questions" : "Voir toutes les questions"}
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* 11. Resources Section */}

        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-left mb-16">
               <h2 className="mb-8 heading-pro-max text-left">
                 <span className="font-bold text-[#1e3a8a] block">Ressources</span>
               </h2>
              <div className="w-24 h-1 bg-blue-600"></div>
            </div>
            <div 
              ref={resourcesRef}
              onScroll={handleScrollRessources}
              className="flex lg:grid lg:grid-cols-3 gap-8 overflow-x-auto lg:overflow-x-visible no-scrollbar snap-x snap-mandatory pb-12 px-1 lg:px-0 scroll-smooth"
            >
              {resources.map((art, i) => (
                <NavLink
                  key={i}
                  to={art.link || "#"}
                  className="min-w-[70vw] md:min-w-[45vw] lg:min-w-0 snap-center group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full block cursor-pointer"
                >
                  <div className="h-56 overflow-hidden">
                    <img
                      src={art.img}
                      alt={`${art.title} - Guide expert Bricareau`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-8 text-left border-t-2 border-transparent group-hover:border-blue-600 transition-colors flex flex-col flex-grow">
                    <h4 className="mb-4 group-hover:text-blue-600 transition-colors tracking-tight font-medium text-base leading-6 text-[#0F1729]">{art.title}</h4>
                    <div className="mt-auto">
                      <span className="text-blue-600 font-bold flex items-center gap-2 group-hover:underline text-sm">
                        Lire <ChevronRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </NavLink>
              ))}
            </div>

            {/* Navigation arrows for carousel - Mobile/Tablet ONLY */}
            <div className="lg:hidden flex items-center justify-center gap-4 mt-6 relative z-30">
                <Button 
                    size="icon" 
                    className="w-12 h-12 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-all shadow-md shadow-blue-100"
                    onClick={() => scrollResources('left')}
                >
                    <ChevronLeft className="h-6 w-6" />
                </Button>
                <Button 
                    size="icon" 
                    className="w-12 h-12 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-all shadow-md shadow-blue-100"
                    onClick={() => scrollResources('right')}
                >
                    <ChevronRight className="h-6 w-6" />
                </Button>

                <div className="absolute right-2 text-sm font-black text-[#1e3a8a] bg-blue-50/50 px-4 py-2 rounded-full border border-blue-100/50">
                    <span className="text-blue-600">{resourceIndex}</span>
                    <span className="mx-1 text-slate-300">/</span>
                    <span className="text-slate-400">{resources.length}</span>
                </div>
            </div>
          </div>
        </section>
      </main>

      {/* Floating Sticky CTA - Phase III Conversion Focus */}
            <div className="hidden md:block fixed bottom-8 right-8 z-[100] animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-[3s] pointer-events-none">
              <div className="pointer-events-auto group/sticky">
                <Button
                  asChild
                  className="bg-white hover:-translate-y-2 transition-all duration-10000 active:scale-95"
                  style={{ backdropFilter: "blur(20px)" }}
                >
                  <a href="/consultation" className="flex items-center gap-4 animate-bounce" style={{ animationDuration: '3s' }}>
                    <span className="font-black-light text-sm tracking-wider white text-blue-600 space-nowrap text-center">
                      Réservez votre <br />consultation gratuite
                    </span>
                    <div className="w-10 h-10 bg-[#2563eb] rounded-full flex items-center justify-center text-white group-hover/sticky:rotate-[360deg] shadow-lg shadow-blue-200">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                            </a>
                </Button>
              </div>
            </div>

      <Footer />
    </div>
  );
};

export default TraitementEauDePuits;
