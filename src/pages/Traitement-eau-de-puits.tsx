import React, { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import GlobalBreadcrumbs from "@/components/GlobalBreadcrumbs";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, ChevronRight, CheckCircle2, X, Phone } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import heroPuits from "@/assets/blog-10-copyright.jpg";
import uvSystemImg from "@/assets/Systèmes de désinfection UV.webp";
import waterSoftenerImg from "@/assets/Adoucisseurs d'eau.webp";
import drinkingWaterImg from "@/assets/Solutions d'eau potable.webp";
import specializedFiltersImg from "@/assets/Filtres d'eau spécialisés.webp";
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


  const [showAllFaqs, setShowAllFaqs] = React.useState(false);
  useEffect(() => {
    document.title = "Eau de puits : Solutions de traitement et filtration";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Solutions expertes pour l'eau de puits : fer, soufre et bactéries. Profitez d'une eau pure avec nos systèmes de filtration haute performance.");
    }

    // OG Tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", "Eau de puits : Traitement et Purification | Bricareau");
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", "Protégez votre santé avec nos systèmes de filtration spécialisés pour puits privés. Expertise et fiabilité.");
  }, []);


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
              <h2 className="text-slate-900 mb-5">
                <span className="font-light leading-tight block tracking-tighter">Problèmes courants</span>
                <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
                  de l'eau de puits</span>
              </h2>
              <p className="text-slate-500 font-light text-lg leading-relaxed">
                L'eau de votre puits est vivante et changeante. Identifiez les signes avant-coureurs pour garantir la sécurité de votre foyer et la longévité de vos installations.
              </p>
            </div>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[240px]">
              {problems.map((problem, idx) => {
                // Custom grid spans for Bento feel
                const isFeatured = idx === 0; // First item (Fer) is large
                const isWide = idx === 5;     // 6th item (Tanins) is wide

                return (
                  <div
                    key={idx}
                    className={`group relative rounded-[2.5rem] overflow-hidden border border-white bg-white/40 backdrop-blur-xl shadow-sm hover:shadow-2xl transition-all duration-700 hover:-translate-y-2
                      ${isFeatured ? 'md:col-span-2 md:row-span-2' : ''}
                      ${isWide ? 'md:col-span-2' : ''}
                    `}
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
                    <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                      <div className="flex justify-between items-start">
                        <div className="w-12 h-12 rounded-2xl bg-white shadow-md flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-500">
                          <span className="text-sm font-black text-slate-400 group-hover:text-white">0{idx + 1}</span>
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
                        <p className={`text-slate-500 font-light leading-relaxed text-justify
                          ${isFeatured ? 'text-lg max-w-md' : 'text-sm'}
                        `}>
                          {problem.desc}
                        </p>
                      </div>
                    </div>

                    {/* Interactive Corners */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-4 right-8 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-500">
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 4. Processus Section - Modern Alternating Timeline */}
        <section className="relative py-32 bg-white overflow-hidden">
          {/* Subtle connecting vertical line for desktop and mobile */}
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-slate-100 hidden lg:block" />
          <div className="absolute top-0 bottom-0 left-8 md:left-1/2 md:-translate-x-1/2 w-px bg-slate-100 lg:hidden" />

          <div className="container mx-auto px-6 relative z-10">
            {/* Header */}
            <div className="text-center mb-32 max-w-4xl mx-auto">
              <span className="inline-block px-4 py-1.5 bg-blue-600/10 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-8">
                NOTRE FONCTIONNEMENT
              </span>
              <h2 className="text-slate-900 mb-6">
                <span className="font-light leading-tight block tracking-tighter">Un service simple</span>
                <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
                  & sans souci.</span>
              </h2>
              <p className="text-slate-500 font-light text-lg max-w-2xl mx-auto text-center leading-relaxed">
                Confiez-nous la gestion de votre eau de puits. De l'expertise initiale à l'installation finale, nous nous occupons de tout pour vous garantir une eau saine, sans compromis.
              </p>
            </div>

            {/* Steps - Alternating Zig Zag */}
            <div className="space-y-24 lg:space-y-0">
              {[
                {
                  title: "Analyse d'eau",
                  desc: "Nous effectuons un test approfondi en laboratoire pour identifier les contaminants spécifiques à votre puits. Une compréhension précise est la clé d'une solution durable.",
                  img: process1
                },
                {
                  title: "Diagnostic Global",
                  desc: "Nos experts conçoivent une solution de filtration sur mesure adaptée à la chimie unique de votre eau. Chaque système est pensé pour votre consommation réelle.",
                  img: process2
                },
                {
                  title: "Installation Experte",
                  desc: "Nos techniciens certifiés installent vos systèmes avec une précision professionnelle pour une performance durable. Nous respectons votre espace et les normes les plus strictes.",
                  img: process3
                },
                {
                  title: "Suivi de Qualité",
                  desc: "Nous assurons des tests de suivi et un entretien régulier pour garantir la sécurité continue de votre foyer. Votre tranquillité d'esprit est notre priorité.",
                  img: process4
                }
              ].map((step, idx) => (
                <div key={idx} className={`group relative flex flex-col md:flex-row items-center gap-12 lg:gap-0 ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''} lg:min-h-[450px]`}>

                  {/* Visual Content Section */}
                  <div className="w-full lg:w-1/2 flex justify-center p-4">
                    <div className="relative w-full max-w-md aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]">
                      <img
                        src={step.img}
                        alt={`${step.title} - Expertise Bricareau`}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors duration-500" />

                      {/* Step Badge Overlapping Image */}
                      <div className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-md px-6 py-4 rounded-3xl shadow-xl flex items-baseline gap-2 border border-white/50">
                        <span className="text-xl font-black text-blue-600">
                          {idx + 1}<sup className="text-xs">{idx === 0 ? 'ère' : 'ème'}</sup>
                        </span>
                        <span className="text-xs font-black uppercase tracking-widest text-blue-600">Phase</span>
                      </div>
                    </div>
                  </div>

                  {/* Pulsing Marker on the line */}
                  <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 w-12 h-12 flex items-center justify-center z-20 top-0 md:top-1/2 md:-translate-y-1/2 lg:flex lg:static lg:w-0 lg:h-0">
                    <div className="relative w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow-[0_0_0_8px_rgba(37,99,235,0.1)] group-hover:shadow-[0_0_0_15px_rgba(37,99,235,0.15)] transition-all duration-500 hidden lg:block"
                      style={{ position: 'absolute', transform: 'translateX(-50%)', left: '0' }} />
                  </div>

                  {/* Text Content Section */}
                  <div className="w-full lg:w-1/2 flex flex-col justify-center px-4 lg:px-20">
                    <div className={`space-y-6 ${idx % 2 === 1 ? 'lg:text-right lg:items-end' : 'lg:text-left lg:items-start'}`}>
                      <h3 className="font-bold text-slate-900 leading-tight group-hover:text-blue-600 transition-colors">
                        {step.title}
                      </h3>
                      <div className={`w-12 h-1.5 bg-blue-600 rounded-full ${idx % 2 === 1 ? 'ml-auto' : ''}`} />
                      <p className="text-slate-500 font-light text-lg leading-relaxed text-justify max-w-xl">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5.Water Testing Section (Redesigned for Mobile) */}
        <section className="relative lg:h-[750px] flex flex-col lg:flex-row items-stretch overflow-hidden bg-white">
          {/* Mobile Image */}
          <div className="lg:hidden w-full h-[300px] relative">
            <img
              src={labTestImg}
              alt="Analyse d'eau de puits en laboratoire certifié pour détecter bactéries et minéraux"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-blue-900/20" />
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
              <span className="text-blue-600 lg:text-white/80 font-bold uppercase tracking-widest text-sm mb-4 block">
                Contrôle de la Qualité D'EAU
              </span>
              <h2 className="mb-8 text-slate-900 lg:text-white font-bold uppercase font-weight-bold 900">
                <span className="lg:font-bold">Dites adieu au fer,</span><br />
                au soufre et au calcaire.
              </h2>
              <p className="font-light text-slate-600 lg:text-white/95 mb-8 max-w-xl text-left lg:text-justify">
                Un puits performant commence par une analyse rigoureuse. Identifiez les contaminants invisibles et protégez durablement votre santé et vos installations.</p>
              <div className="flex gap-4">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 h-14 shadow-lg shadow-blue-200"
                  style={{}}
                >
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
              <h2
                className="text-slate-900 mb-8 text-left"
                style={{}}
              >
                <span className="font-light leading-[1.1] md:leading-[1.1] block">Découvrez nos solutions</span>
                <span className="font-normal leading-[1.1] md:leading-[1.1] block">de traitement de l'eau de puits</span>
              </h2>
              <div className="w-24 h-1 bg-blue-600 mb-8"></div>
              <p
                className="font-light text-slate-600 mb-8 text-justify"
                style={{}}
              >
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
                        <p
                          className="text-slate-500 font-light flex-grow text-justify"
                          style={{}}
                        >
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

        {/* 7. Testimonials Section */}
        <TestimonialsSection
          filterProduct="/traitement-eau-de-puits"
          limit={5}
          title={
            <>
              <span className="font-light block">La solution là </span>
              <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
où d'autres ont échoué.</span>
            </>
          }
        />



        {/* 8. Comparison Table Section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-left mb-16">
              <h2
                className="text-slate-900 mb-8 text-left"
                style={{}}
              >
                <span className="font-light leading-[1.1] block">Comparez nos solutions</span>
                <span className="font-normal leading-[1.1] block">de traitement de l'eau de puits</span>
              </h2>
              <div className="w-24 h-1 bg-blue-600 mb-8"></div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[1000px] border-collapse bg-white rounded-2xl overflow-hidden shadow-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-8 text-left text-gray-400 font-light uppercase tracking-wider">Solutions</th>
                    {[
                      { name: "Filtres spécialisés", img: specializedFiltersImg },
                      { name: "Adoucisseurs", img: waterSoftenerImg },
                      { name: "Osmose inverse", img: drinkingWaterImg },
                      { name: "Stérilisation UV", img: uvSystemImg }
                    ].map((m, i) => (
                      <th key={i} className="p-4 text-center text-gray-900 font-bold text-sm">
                        <div className="flex flex-col items-center gap-2">
                          <img
                            src={m.img}
                            alt={`Comparaison ${m.name} - Système de traitement pour puits privés`}
                            className="w-[150px] h-[120px] object-contain mx-auto mix-blend-multiply"
                          />
                          <span className="max-w-[150px] inline-block">{m.name}</span>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {comparisonData.map((row, i) => (
                    <tr key={i} className="hover:bg-gray-50 transition-colors">
                      <td className="p-8 font-light text-gray-700">{row.feature}</td>
                      <td className="p-8 text-center text-sm">
                        {typeof row.filters === 'string' ? <span className="text-blue-600 font-bold bg-blue-50 px-3 py-1 rounded-full text-[10px] whitespace-nowrap">{row.filters}</span> : (row.filters ? <CheckCircle2 className="h-6 w-6 text-blue-600 mx-auto" /> : null)}
                      </td>
                      <td className="p-8 text-center text-sm">
                        {typeof row.softeners === 'string' ? <span className="text-blue-600 font-bold bg-blue-50 px-3 py-1 rounded-full text-[10px] whitespace-nowrap">{row.softeners}</span> : (row.softeners ? <CheckCircle2 className="h-6 w-6 text-blue-600 mx-auto" /> : null)}
                      </td>
                      <td className="p-8 text-center text-sm">
                        {typeof row.osmose === 'string' ? <span className="text-blue-600 font-bold bg-blue-50 px-3 py-1 rounded-full text-[10px] whitespace-nowrap">{row.osmose}</span> : (row.osmose ? <CheckCircle2 className="h-6 w-6 text-blue-600 mx-auto" /> : null)}
                      </td>
                      <td className="p-8 text-center text-sm">
                        {typeof row.uv === 'string' ? <span className="text-blue-600 font-bold bg-blue-50 px-3 py-1 rounded-full text-[10px] whitespace-nowrap">{row.uv}</span> : (row.uv ? <CheckCircle2 className="h-6 w-6 text-blue-600 mx-auto" /> : null)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 9. CTA Section - Premium Immersive */}
        <section className="relative py-32 overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src={happyFamilyImg}
              alt="Expert Bricareau en traitement d'eau de puits"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-900/60 to-blue-800/30 backdrop-blur-[6px]" />
          </div>

          <div className="container mx-auto px-6 relative z-10 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-white mb-6">
                <span className="font-bold leading-tight block tracking-tight opacity-90">Maîtrisez la qualité de votre eau de puits</span>
              </h2>

              <p className="text-blue-100/80 font-light text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
                Le fer, le soufre et le calcaire ne sont pas une fatalité. Protégez votre santé et retrouvez le plaisir d'une eau pure, inodore et cristalline dès aujourd'hui.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-12 h-16 shadow-2xl shadow-white/30 group text-lg font-light"
                  asChild
                >
                  <a href="tel:18552649328" className="flex items-center gap-3">
                    <Phone className="h-5 w-5 animate-bounce" />
                    Parlez à un expert
                  </a>
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-10 h-16 border-white/30 text-white bg-white/5 hover:bg-white/10 backdrop-blur-md text-lg transition-all duration-500"
                  asChild
                >
                  <NavLink to="/consultation">Planifiez une consultation gratuite</NavLink>
                </Button>
              </div>

              <p className="mt-8 text-white/50 text-sm font-light">
                Disponible 7j/7 — Réponse en moins de 24h
              </p>
            </div>
          </div>
        </section>

        {/* 10. FAQ Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-left mb-16">
              <h2
                                className="text-slate-900 mb-8 text-left"
                                style={{}}
                            >
                                <span className="font-light leading-[1.1] block">Pour vous éclairer</span>
                                <span className="font-normal leading-[1.1] block">Questions fréquentes</span>
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
                    <AccordionContent className="text-base font-light leading-6 text-slate-600 pb-8 text-justify" style={{}}>
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

        {/* 11. Resources Section */}

        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-left mb-16">
              <h2
                className="text-slate-900 mb-8 text-left"
                style={{}}
              >                                <span className="font-normal leading-[1.1] block">Ressources</span>
              </h2>
              <div className="w-24 h-1 bg-blue-600"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Adoucisseur avec sel ou sans sel : la vérité technique",
                  img: conditionneursImg,
                  link: "/adoucisseur-sans-sel-vs-avec-sel-verite-technique"
                },
                {
                  title: "Comment régler la dureté de votre adoucisseur d'eau ?",
                  img: residentialWaterSoftenerImg,
                  link: "/comment-regler-durete-adoucisseur-eau"
                },
                {
                  title: "Adoucisseur d'eau et fosse septique : compatible ou non ?",
                  img: adoucisseurFosseImg,
                  link: "/adoucisseur-deau-et-fosse-septique-mythes-et-realites"
                },
              ].map((art, i) => (
                <NavLink
                  key={i}
                  to={art.link || "#"}
                  className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full block cursor-pointer"
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
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TraitementEauDePuits;
