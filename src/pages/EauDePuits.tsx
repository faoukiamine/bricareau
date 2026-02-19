import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, ChevronRight, CheckCircle2, X, Phone } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import heroPuits from "@/assets/blog-10-copyright.jpg";
import uvSystemImg from "@/assets/Systèmes de désinfection UV.webp";
import waterSoftenerImg from "@/assets/Adoucisseurs d'eau.webp";
import drinkingWaterImg from "@/assets/Solutions d'eau potable.webp";
import specializedFiltersImg from "@/assets/Filtres d'eau spécialisés.webp";
import rouilleThumb from "@/assets/rouille_thumb.jpg";
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
import labTestImg from "@/assets/istockphoto-506610454-612x612-1.jpg";
import eauDureThumb from "@/assets/9e9f1b18-7b69-4af1-9e3d-322775a1ec72.jpg";
import rouilleThumbUpdated from "@/assets/5a4674e7-575d-4cd9-b1f2-32522f8a7072.jpg";
import mauvaisGoutThumb from "@/assets/blog3-1.jpg";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
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
    desc: "Une eau riche en calcium et magnésium laisse des dépôts calcaires tenaces, ternit votre vaisselle et assèche votre peau ainsi que vos cheveux.",
  },
  {
    title: "Eau avec mauvais goût",
    image: mauvaisGoutThumb,
    desc: "Un goût métallique, terreux ou de chlore gâche le plaisir de boire votre eau et peut altérer le goût de vos aliments et de votre café.",
  },
  {
    title: "Eau avec taches de rouille",
    image: rouilleThumbUpdated,
    desc: "Les taches rougeâtres ou orangées sur vos éviers, baignoires et vêtements sont souvent le signe d'une forte concentration de fer dans votre eau de puits.",
  },
  {
    title: "Eau avec odeur d'œufs pourris",
    image: rottenEggsThumb,
    desc: "Une odeur d'œufs pourris (soufre) ou de moisissure peut rendre votre eau impropre à la consommation et désagréable pour la douche.",
  },
  {
    title: "Eau trouble ou turbide",
    image: turbideWaterThumb,
    desc: "La présence de sable, d'argile ou de matières organiques rend l'eau trouble et peut endommager vos appareils ainsi que votre tuyauterie.",
  },
  {
    title: "Eau jaunâtre",
    image: taninWaterThumb,
    desc: "Une teinte jaune ou brune est souvent causée par des tanins organiques ou des nitrates, indiquant une infiltration de matières de surface.",
  },
  {
    title: "Eau corrosive",
    image: corrosiveWaterThumb,
    desc: "Des dépôts verts ou bleus sur vos tuyaux et robinets indiquent une eau acide qui ronge vos canalisations, menant à des fuites éventuelles.",
  },
];



const comparisonData = [
  { feature: "Technologie High Efficiency", high: true, selectPlus: true, connect: true, select: false, medallist: false },
  { feature: "Contrôle à distance (App)", high: true, selectPlus: false, connect: true, select: false, medallist: false },
  { feature: "Protection du chlore intégrée", high: "Option", selectPlus: false, connect: false, select: false, medallist: false },
  { feature: "Alertes de sel faible", high: true, selectPlus: true, connect: true, select: true, medallist: false },
  { feature: "Diagnostic à distance", high: true, selectPlus: false, connect: true, select: false, medallist: false },
];

const EauDePuits = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* 1.Hero Section */}
        <section className="relative h-[850px] flex items-center overflow-hidden -mt-[104px] pt-[104px]">
          <div className="absolute inset-0 z-0">
            <img
              src={heroPuits}
              alt="Propriété avec puits"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 lg:bg-gradient-to-r lg:from-black/60 lg:to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-white via-white/10 to-transparent" />
            {/* Brightening Start 1/3 Right */}
            <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white/90 via-white/40 to-transparent" />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-2xl text-white">
              <span className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-4 block">
                SOLUTIONS D'EAU POUR PUITS PRIVÉS
              </span>
              <h1
                className="text-[40px] md:text-[60px] leading-[1.1] md:leading-[60px] font-light mb-8 tracking-tighter text-white"
                style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
              >
                <span className="font-bold">Votre puits est un trésor.</span> <span className="font-bold">Offrez-lui la pureté qu'il mérite.</span>
              </h1>
              <p className="text-lg font-light leading-relaxed text-white/90 mb-8 max-w-xl text-justify">
                Ne laissez plus le fer, le soufre ou les bactéries gâcher la richesse de votre puits. Transformez votre eau brute en une ressource cristalline, saine et parfaitement équilibrée pour toute votre famille.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 h-14 shadow-lg shadow-blue-200"
                  style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                  asChild
                >
                  <a href="#consultation">
                    Planifiez une consultation gratuite
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 hover:bg-white/20 text-white border-white rounded-full px-8 h-14 backdrop-blur-sm shadow-lg"
                  style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                  asChild
                >
                  <a href="tel:18552649328" className="flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    1-855-264-9328
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Wave Separator Bottom - Transition to Blue Section */}
          <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-[0] z-20 pointer-events-none">
            <svg
              className="relative block w-full h-[50px] md:h-[80px]"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                fill="#ffffffff"
                transform="rotate(180 600 60)"
              ></path>
            </svg>
          </div>
        </section>

        {/* 2. Well Water Problems section */}
        <section className="bg-white py-0 h-[900px] flex flex-col justify-center overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2
                className="text-slate-900 tracking-tighter mb-8"
                style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
              >
                <span className="text-[32px] md:text-[50px] font-bold leading-[1.1] md:leading-[1.1] block">Problèmes courants</span>
                <span className="text-[32px] md:text-[50px] font-bold leading-[1.1] md:leading-[1.1] block text-blue-600">de l'eau de puits</span>
              </h2>
              <p className="text-lg font-light leading-relaxed text-slate-500 mt-6 max-w-2xl mx-auto">
                L'eau de votre puits est vivante et changeante. Une analyse rigoureuse est la première étape pour garantir la sécurité de votre foyer et la longévité de vos installations.
              </p>
            </div>

            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {problems.map((problem, idx) => (
                  <CarouselItem key={idx} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <div className="group cursor-pointer h-full pb-8">
                      <div className="relative h-[400px] rounded-[2rem] overflow-hidden bg-slate-900 shadow-xl transition-all duration-700 group-hover:scale-[1.02] border border-slate-100">
                        <img src={problem.image} alt={problem.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-100" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent transition-colors duration-500" />
                        <div className="absolute inset-0 p-8 flex flex-col justify-end text-white text-left">
                          <span className="text-[10px] font-black uppercase tracking-[0.4em] mb-4 opacity-70 group-hover:opacity-100 transition-opacity text-blue-400">PROBLÈME {idx + 1}</span>
                          <h3 className="text-2xl font-bold leading-tight mb-2 group-hover:mb-4 transition-all duration-500">{problem.title}</h3>
                          <p className="text-sm opacity-0 h-0 group-hover:opacity-100 group-hover:h-auto transition-all duration-500 leading-relaxed font-light text-justify text-gray-300">{problem.desc}</p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-end gap-2 mt-8 pr-4">
                <CarouselPrevious className="relative static translate-y-0 translate-x-0 bg-blue-600 text-white hover:bg-blue-700 border-none w-12 h-12" />
                <CarouselNext className="relative static translate-y-0 translate-x-0 bg-blue-600 text-white hover:bg-blue-700 border-none w-12 h-12" />
              </div>
            </Carousel>
          </div>
        </section>

        {/* 4. Processus Section - Expanding Gallery Layout */}
        <section className="bg-white py-32 border-t border-gray-50 overflow-hidden">
          <div className="container mx-auto px-4">
            {/* Header - Split Layout */}
            <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-24">
              <div className="max-w-3xl">
                <span className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-4 block flex items-center gap-2">
                  <span className="w-8 h-[2px] bg-blue-600 inline-block"></span>
                  NOTRE FONCTIONNEMENT
                </span>
                <h2 className="text-[32px] md:text-[48px] font-bold text-slate-900 leading-[1.1] tracking-tighter"
                  style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                >
                  Un service simple <br />& sans souci.
                </h2>
              </div>
              <div className="max-w-xl">
                <p className="text-lg font-light leading-relaxed text-slate-600 text-justify pb-2">
                  Confiez-nous la gestion de votre eau de puits. De l'expertise initiale à l'installation finale, nous nous occupons de tout pour vous garantir une eau saine, sans compromis.
                </p>
              </div>
            </div>

            {/* Steps Container - Expanding Flex Gallery */}
            <div className="flex flex-col lg:flex-row gap-4 h-auto lg:h-[600px]">
              {[
                {
                  title: "Analyse d'eau",
                  desc: "Test approfondi en laboratoire pour identifier les contaminants.",
                  fullDesc: "Nous effectuons un test approfondi en laboratoire pour identifier les contaminants spécifiques à votre puits. Une compréhension précise est la clé d'une solution durable.",
                  img: process1
                },
                {
                  title: "Diagnostic Global",
                  desc: "Solution sur mesure adaptée à la chimie de votre eau.",
                  fullDesc: "Nos experts conçoivent une solution de filtration sur mesure adaptée à la chimie unique de votre eau. Chaque système est pensé pour votre consommation réelle.",
                  img: process2
                },
                {
                  title: "Installation Experte",
                  desc: "Installation précise par nos techniciens certifiés.",
                  fullDesc: "Nos techniciens certifiés installent vos systèmes avec une précision professionnelle pour une performance durable. Nous respectons votre espace et les normes les plus strictes.",
                  img: process3
                },
                {
                  title: "Suivi de Qualité",
                  desc: "Tests de suivi et entretien pour votre sécurité.",
                  fullDesc: "Nous assurons des tests de suivi et un entretien régulier pour garantir la sécurité continue de votre foyer. Votre tranquillité d'esprit est notre priorité.",
                  img: process4
                }
              ].map((step, idx) => (
                <div
                  key={idx}
                  className="group relative flex-1 hover:flex-[3] transition-all duration-700 ease-in-out cursor-pointer overflow-hidden rounded-[2rem] min-h-[400px] lg:min-h-0"
                >
                  {/* Background Image */}
                  <img
                    src={step.img}
                    alt={step.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

                  {/* Content */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    {/* Number Badge */}
                    <div className="absolute top-8 left-8 w-12 h-12 rounded-full border border-white/30 flex items-center justify-center bg-transparent group-hover:bg-blue-600 group-hover:border-blue-600 transition-colors duration-500">
                      <span className="text-white font-bold">{idx + 1}</span>
                    </div>

                    {/* Text Container */}
                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="text-xl font-medium text-white mb-2 whitespace-nowrap">
                        {step.title}
                      </h3>

                      {/* Short Desc (Always Visible or Hidden on Expand?) - Let's use visible for context */}
                      <div className="overflow-hidden max-h-0 opacity-0 group-hover:max-h-[200px] group-hover:opacity-100 transition-all duration-700 delay-100">
                        <p className="text-lg text-white/90 font-light leading-relaxed mt-4 text-justify pr-4 border-l-2 border-blue-500 pl-4">
                          {step.fullDesc}
                        </p>

                      </div>

                      {/* Mobile Fallback: visible description on small screens if flex doesn't work well?
                          Use standard hidden logic. On mobile, flex-col means they are distinct blocks. 
                          Hover might not work well on touch. 
                          Let's assume default is 'collapsed' state visually, but readable title.
                      */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7.Water Testing Section */}
        <section className="relative h-[650px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src={labTestImg}
              alt="Analyse de l'eau en laboratoire"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-blue-900/40 lg:bg-gradient-to-r lg:from-blue-900/90 lg:to-blue-600/20 mix-blend-multiply" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-white via-white/10 to-transparent" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-2xl text-white">
              <span className="text-white/80 font-bold uppercase tracking-widest text-sm mb-4 block">
                Contrôle de la Qualité D'EAU
              </span>
              <h1
                className="text-[40px] md:text-[60px] leading-[1.1] md:leading-[60px] font-light mb-8 tracking-tighter text-white"
                style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
              >
                <span className="font-bold">Dites adieu au fer,</span><br />
                au soufre et au calcaire.
              </h1>
              <p className="text-lg font-light leading-relaxed text-white/95 mb-8 max-w-xl text-justify">
                Un puits performant commence par une analyse rigoureuse. Identifiez les contaminants invisibles et protégez durablement votre santé et vos installations.              </p>
              <div className="flex gap-4">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 h-14 shadow-lg shadow-blue-200"
                  style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                  onClick={() => document.getElementById('nos-adoucisseurs')?.scrollIntoView({ behavior: 'smooth' })}
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
                className="text-slate-900 tracking-tighter mb-8 text-left"
                style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
              >
                <span className="text-[32px] md:text-[60px] font-light leading-[1.1] md:leading-[60px] block">Découvrez nos solutions</span>
                <span className="text-[32px] md:text-[60px] font-normal leading-[1.1] md:leading-[60px] block">de traitement de l'eau de puits</span>
              </h2>
              <div className="w-24 h-1 bg-blue-600"></div>
            </div>

            <Carousel
              opts={{
                align: "start",
                loop: true,
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
                          alt={prod.name}
                          className="max-h-full object-contain group-hover:scale-110 transition-transform duration-700 mix-blend-multiply"
                        />
                      </div>
                      <div className="p-8 space-y-4 flex flex-col flex-grow border-t-2 border-transparent group-hover:border-blue-600 transition-colors">
                        <h3
                          className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors tracking-tight text-center"
                          style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                        >
                          {prod.name}
                        </h3>
                        <p
                          className="text-slate-500 font-light leading-relaxed flex-grow text-justify"
                          style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                        >
                          {prod.desc}
                        </p>
                        <div
                          className="inline-flex items-center gap-2 text-blue-600 font-bold text-xs tracking-widest uppercase mt-4 group-hover:underline self-end"
                          style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
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

        {/* 7. Testimonial Slider */}
        <TestimonialsSection />

        {/* 8. Comparison Table Section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-left mb-16">
              <h2
                className="text-slate-900 tracking-tighter mb-8 text-left"
                style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
              >
                <span className="text-[32px] md:text-[60px] font-light leading-[1.1] md:leading-[60px] block">Comparez nos solutions</span>
                <span className="text-[32px] md:text-[60px] font-normal leading-[1.1] md:leading-[60px] block">de traitement de l'eau de puits</span>
              </h2>
              <div className="w-24 h-1 bg-blue-600"></div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[1000px] border-collapse bg-white rounded-2xl overflow-hidden shadow-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-8 text-left text-gray-400 font-light uppercase tracking-wider">Solutions</th>
                    {[
                      { name: "Systèmes spécialisés de filtration d'eau", img: specializedFiltersImg },
                      { name: "Adoucisseurs d'eau", img: waterSoftenerImg },
                      { name: "Systèmes d'osmose inverse", img: drinkingWaterImg },
                      { name: "Systèmes de désinfection UV", img: uvSystemImg }
                    ].map((m, i) => (
                      <th key={i} className="p-4 text-center text-gray-900 font-bold text-sm">
                        <div className="flex flex-col items-center gap-2">
                          <img
                            src={m.img}
                            alt={m.name}
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
                      <td className="p-8 text-center">
                        {typeof row.high === 'string' ? row.high : (row.high ? <CheckCircle2 className="h-6 w-6 text-blue-600 mx-auto" /> : <X className="h-6 w-6 text-gray-300 mx-auto" />)}
                      </td>
                      <td className="p-8 text-center">
                        {row.selectPlus ? <CheckCircle2 className="h-6 w-6 text-blue-600 mx-auto" /> : <X className="h-6 w-6 text-gray-300 mx-auto" />}
                      </td>
                      <td className="p-8 text-center">
                        {row.connect ? <CheckCircle2 className="h-6 w-6 text-blue-600 mx-auto" /> : <X className="h-6 w-6 text-gray-300 mx-auto" />}
                      </td>
                      <td className="p-8 text-center">
                        {row.select ? <CheckCircle2 className="h-6 w-6 text-blue-600 mx-auto" /> : <X className="h-6 w-6 text-gray-300 mx-auto" />}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 9.CTA Section */}
        <section className="bg-primary py-16 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Besoin d'aide avec votre eau de puits ?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto text-justify">
              Le fer, le soufre et le calcaire ne sont pas une fatalité. Protégez votre plomberie et retrouvez le plaisir d'une eau inodore et cristalline grâce à nos solutions spécialisées de filtration d'eau.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 border-white text-white bg-transparent hover:bg-white/10"
                asChild
              >
                <a href="tel:18552649328">Parler avec un spécialiste d'eau au 1-855-264-9328</a>
              </Button>
            </div>
          </div>
        </section>

        {/* 10. FAQ Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-left mb-16">
              <h2
                className="text-slate-900 tracking-tighter mb-8 text-left"
                style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
              >                                <span className="text-[32px] md:text-[60px] font-normal leading-[1.1] md:leading-[60px] block">FAQ</span>
              </h2>
              <div className="w-24 h-1 bg-blue-600"></div>
            </div>

            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {[
                  {
                    q: "Pourquoi l'eau de mon puits a-t-elle une odeur d'œufs pourris ?",
                    a: "Cette odeur est causée par le gaz sulfure d'hydrogène. Bricareau installe des systèmes d'oxydation ou des filtres au charbon spécialisés qui éliminent totalement cette odeur pour une eau fraîche et inodore.",
                  },
                  {
                    q: "Le fer dans l'eau de puits est-il dangereux ?",
                    a: "Le fer n'est pas nocif pour la santé, mais il cause des taches de rouille tenaces, obstrue la tuyauterie et donne un goût métallique. Nos filtres à fer haute performance éliminent ces désagréments sans produits chimiques.",
                  },
                  {
                    q: "À quelle fréquence devrais-je faire tester mon eau de puits ?",
                    a: "Il est fortement recommandé de tester votre eau au moins une fois par an pour les bactéries et les nitrates, et tous les deux ans pour les paramètres physico-chimiques profonds.",
                  },
                  {
                    q: "Quelles sont les solutions pour éliminer les bactéries ?",
                    a: "La solution la plus fiable est la désinfection par rayons ultraviolets (UV). Elle détruit 99,9 % des virus et bactéries (comme E. coli) sans altérer le goût ou la composition chimique de votre eau.",
                  },
                  {
                    q: "Pourquoi y a-t-il des taches bleues ou vertes sur ma robinetterie ?",
                    a: "Cela indique une eau acide (pH bas) qui corrode vos tuyaux de cuivre. Un neutraliseur de pH est essentiel pour protéger votre plomberie et éviter des fuites coûteuses à long terme.",
                  },
                  {
                    q: "Un adoucisseur d'eau peut-il éliminer tout le fer ?",
                    a: "Un adoucisseur élimine le fer 'clair' (dissous), mais pour le fer 'rouge' (oxydé) ou de fortes concentrations, un filtre à fer dédié est nécessaire en amont pour éviter d'endommager les résines de l'adoucisseur.",
                  },
                  {
                    q: "Qu'est-ce que le manganèse et comment s'en débarrasser ?",
                    a: "Le manganèse cause des taches noires et des dépôts huileux. Nos systèmes de filtration spécialisés utilisent des médias oxydants qui capturent le manganèse efficacement, laissant votre eau limpide.",
                  },
                  {
                    q: "Pourquoi mon eau de puits est-elle trouble ou sableuse ?",
                    a: "C'est souvent dû à des sédiments ou de la turbidité. Un filtre à sédiments ou un système de filtration multimédia à l'entrée principale clarifiera l'eau et protégera tous vos appareils ménagers.",
                  },
                  {
                    q: "Si mon eau semble claire, ai-je quand même besoin d'un filtre ?",
                    a: "Oui, car de nombreux contaminants comme le plomb, l'arsenic, les nitrates ou les bactéries sont invisibles, sans goût et sans odeur. Seule une analyse d'eau peut confirmer sa pureté réelle.",
                  },
                  {
                    q: "Quelle est la durée de vie d'un système de traitement d'eau de puits ?",
                    a: "Avec un entretien régulier, nos systèmes Bricareau ont une durée de vie moyenne de 15 à 25 ans. Nos composantes sont sélectionnées pour leur robustesse face aux eaux de puits les plus difficiles.",
                  },
                  {
                    q: "Quels sont les avantages d'un système pour toute la maison ?",
                    a: "Vous protégez toute votre tuyauterie, prolongez la vie de vos électroménagers (chauffe-eau, lave-vaisselle), et profitez d'une eau pure à chaque robinet, pour boire, cuisiner et vous doucher.",
                  },
                  {
                    q: "Le traitement de l'eau affecte-t-il la pression dans la maison ?",
                    a: "Nos experts dimensionnent votre système en fonction de votre débit maximal pour assurer une filtration optimale sans perte de pression perceptible, même lors d'utilisations simultanées.",
                  },
                  {
                    q: "L'eau de puits est-elle naturellement dure ?",
                    a: "Dans la majorité des cas, oui. En circulant dans le sol, l'eau dissout le calcium et le magnésium. Un adoucisseur est souvent la base de tout traitement pour éviter l'accumulation de calcaire.",
                  },
                  {
                    q: "Pouvez-vous éliminer les tanins (eau jaunâtre) ?",
                    a: "Oui, les tanins proviennent de matières organiques en décomposition dans le sol. Nous utilisons des systèmes d'échange d'anions spécifiques qui retirent cette coloration 'thé' de votre eau.",
                  },
                  {
                    q: "Quelle est la différence entre un filtre à sédiments et un charbon ?",
                    a: "Le filtre à sédiments retire les particules physiques (sable, terre), tandis que le charbon activé retire les produits chimiques, les goûts et les odeurs par adsorption moléculaire.",
                  },
                ].map((item, idx) => (
                  <AccordionItem
                    key={idx}
                    value={`item-${idx}`}
                    className="border-b-gray-200"
                  >
                    <AccordionTrigger className="text-left text-base font-medium leading-6 hover:no-underline py-6" style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}>
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-base font-light leading-6 text-slate-600 pb-8 text-justify" style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}>
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* 11. Resources Section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-left mb-16">
              <h2
                className="text-slate-900 tracking-tighter mb-8 text-left"
                style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
              >                                <span className="text-[32px] md:text-[60px] font-normal leading-[1.1] md:leading-[60px] block">Ressources</span>
              </h2>
              <div className="w-24 h-1 bg-blue-600"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Comprendre les minéraux de votre puits",
                  img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop",
                },
                {
                  title: "L'importance de la filtration UV",
                  img: "https://images.unsplash.com/photo-1542013936693-884638332954?q=80&w=800&auto=format&fit=crop",
                },
                {
                  title: "Entretien de votre système Bricareau",
                  img: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=800&auto=format&fit=crop",
                },
              ].map((art, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
                >
                  <div className="h-56 overflow-hidden">
                    <img
                      src={art.img}
                      alt={art.title}
                      className="w-full h-full object-cover transition-transform group-hover:scale-110"
                    />
                  </div>
                  <div className="p-8 text-left border-t-2 border-transparent group-hover:border-blue-600 transition-colors">
                    <h4 className="text-xl font-medium mb-4">{art.title}</h4>
                    <NavLink
                      to="#"
                      className="text-blue-600 font-bold flex items-center gap-2 group-hover:underline text-sm"
                    >
                      Lire <ChevronRight className="h-4 w-4" />
                    </NavLink>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 12. Consultation Form Section */}
        <ConsultationFormSection id="consultation" />
      </main>
      <Footer />
    </div >
  );
};

export default EauDePuits;
