import Header from "@/components/Header";
import GlobalBreadcrumbs from "@/components/GlobalBreadcrumbs";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Check,
  Phone,
  CheckCircle2,
  X,
  ChevronRight,
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
  Activity
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
import freezelifeROImg from "@/assets/PX500_2.webp";
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
import eauFontaineImg from "@/assets/33860.jpg";

const StationEauPotable = () => {
  const navigate = useNavigate();
  const [showAllFaqs, setShowAllFaqs] = React.useState(false);

  useEffect(() => {
    document.title = "Systèmes d'osmose inverse | Purificateur d'eau potable | Bricareau";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Optimisez la qualité de votre eau avec nos systèmes d'osmose inverse à 4, 5 et 6 étapes. Éliminez 99% des contaminants pour une eau pure et alcaline à domicile.");
    }

    // OG Tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", "Systèmes d'osmose inverse et purification d'eau | Bricareau");
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", "Découvrez la pureté absolue avec nos stations d'osmose inverse Cristal Pro et Sérénité.");
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
        {/* 1. Hero Section */}
        <section className="relative lg:h-[650px] flex flex-col lg:items-center overflow-hidden bg-white">
          <div className="absolute top-[30px] left-0 right-0 z-30 pointer-events-none hidden lg:block">
            <div className="container mx-auto px-6 pointer-events-auto">
              <GlobalBreadcrumbs variant="dark" />
            </div>
          </div>
          <div className="relative lg:absolute lg:inset-0 h-[350px] sm:h-[450px] lg:h-full w-full lg:z-0 overflow-hidden">
            <img
              src={heroDrink}
              alt="Enfant buvant une eau cristalline directement du robinet filtré par Bricareau"
              className="w-full h-full object-cover object-[center_35%]"
            />
            <div className="hidden lg:block absolute inset-0 bg-black/40 lg:bg-gradient-to-r lg:from-black/60 lg:to-transparent" />
            <div className="hidden lg:block absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-white via-white/10 to-transparent" />
            <div className="hidden lg:block absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white/90 via-white/40 to-transparent" />
          </div>

          <div className="container relative z-10 mx-auto px-4 h-full flex items-center lg:px-6">
            <div className="max-w-2xl lg:text-white py-12 lg:py-0">
              <h1
                className="leading-[1.05] mb-6 lg:mb-8 tracking-tighter text-slate-900 lg:text-white text-left max-w-xl"
              >
                Système d'osmose inverse, la pureté absolue à chaque goutte.
              </h1>
              <p className="font-light text-slate-600 lg:text-white/95 mb-10 max-w-xl text-left lg:text-justify text-lg leading-relaxed">
                Transformez votre eau municipale en une source de pureté cristalline. Nos purificateurs d'eau par osmose inverse éliminent 99% des contaminants pour une eau fraîche, saine et alcaline.
              </p>
              <div className="flex flex-col sm:flex-row gap-5">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-10 h-16 shadow-xl shadow-blue-200/50 transition-all hover:scale-105 active:scale-95"
                  asChild
                >
                  <a href="#purification-systems">
                    Explorer nos systèmes
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-slate-100 lg:bg-white/10 hover:bg-slate-200 lg:hover:bg-white/20 text-slate-800 lg:text-white border-slate-200 lg:border-white rounded-full px-10 h-16 backdrop-blur-sm shadow-lg transition-all hover:scale-105"
                  asChild
                >
                  <a href="tel:18552649328" className="flex items-center gap-3">
                    <Phone className="h-5 w-5" />
                    1-855-264-9328
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Decorative Flow Line - Desktop Only */}
          <div className="hidden lg:block absolute bottom-0 left-[4.5rem] w-px h-32 bg-gradient-to-b from-transparent to-blue-200/50 z-20" />
        </section>
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
                  <h2 className="text-slate-900 leading-[1.05] tracking-tight">
                    <span className="font-light block text-slate-400">Plus qu’un filtre,</span>
                    <span className="font-bold block text-blue-600">une métamorphose.</span>
                  </h2>
                </div>
                
                <p className="font-light text-slate-600 text-lg leading-relaxed text-justify max-w-xl">
                  Issue du dessalement de l’eau de mer, cette technologie utilise une membrane de 0,0001 micron pour bloquer les impuretés les plus infimes. Cette barrière physique absolue élimine virus, métaux lourds et micropolluants, garantissant une pureté cristalline constante à chaque verre.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8 border-t border-slate-100 text-justify">
                   {[
                     { 
                       title: "Qualité supérieure à la bouteille", 
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
                     <div key={idx} className="group flex gap-3 p-1 transition-all duration-500 cursor-default">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-[10px] flex-shrink-0 group-hover:scale-125 transition-transform" />
                        <div>
                           <h4 className="font-bold text-slate-800 text-lg mb-2 group-hover:text-blue-600 transition-colors">{item.title}</h4>
                           <p className="text-slate-500 font-light text-sm leading-relaxed">{item.desc}</p>
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

        {/* 3. Systèmes d'osmose inverse - Product Grid */}
        <section id="purification-systems" className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-left mb-16">
              <h2
                className="text-slate-900 mb-8 text-left"
                style={{}}
              >
                <span className="font-light leading-[1.1] block">Nos systèmes de purification</span>
                <span className="font-normal leading-[1.1] block">d'eau par osmose inverse</span>
              </h2>
              <div className="w-24 h-1 bg-blue-600 mb-8"></div>
              <p
                className="font-light text-slate-600 mb-8 text-justify"
                style={{}}
              >
                Nos systèmes d'osmose inverse représentent le summum de la technologie moderne permettant de transformer votre eau municipale ou de puits en une source de pureté exceptionnelle. Conçus pour s'intégrer discrètement sous votre évier, nos trois modèles phares — Vectapure, Essentiel et Sérénité — répondent avec précision à toutes vos exigences, allant de la filtration haute performance à la reminéralisation alcaline pour une eau plus saine. Chaque système a été rigoureusement testé et sélectionné pour sa fiabilité exemplaire et sa capacité inégalée à éliminer jusqu'à 99% des contaminants invisibles, vous offrant ainsi une tranquillité d'esprit absolue et un goût incomparable au quotidien. Choisir l'un de nos purificateurs, c'est investir durablement dans la santé de vos proches tout en réalisant des économies significatives sur l'achat d'eau en bouteille plastique. Profitez dès maintenant d'un accès illimité à une eau parfaitement purifiée, revitalisante et rafraîchissante, directement depuis le confort de votre cuisine.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[
                { name: "Système d'osmose inverse de la série Vectapure", desc: "La pureté accessible sans compromis sur la qualité.", img: vectapureROImg },
                { name: "Système d'osmose inverse de la série Essentiel", desc: "Le summum de la filtration avec reminéralisation alcaline incluse.", img: drinkingWaterImg, path: "/ro-6" },
                { name: "Système d'osmose inverse de la série Sérénité", desc: "Performance exceptionnelle pour les familles actives.", img: freezelifeROImg },
              ].map((product, i) => (
                <div
                  key={i}
                  className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full cursor-pointer"
                  onClick={() => navigate(product.path || "/contact")}
                >
                  <div className="relative h-80 overflow-hidden bg-slate-50 flex items-center justify-center p-12">
                    <img
                      src={product.img}
                      alt={`${product.name} - Système de purification d'eau par osmose inverse Bricareau`}
                      className="max-h-full object-contain group-hover:scale-110 transition-transform duration-700 mix-blend-multiply"
                    />
                  </div>
                  <div className="p-8 space-y-4 flex flex-col flex-grow border-t-2 border-transparent group-hover:border-blue-600 transition-colors">
                    <h3
                      className="card-title group-hover:text-blue-600 transition-colors text-center"
                    >
                      {product.name}
                    </h3>
                    <p
                      className="text-slate-500 font-light flex-grow text-justify"
                      style={{}}
                    >
                      {product.desc}
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
              ))}
            </div>
          </div>
        </section>
        {/* 4. Pourquoi choisir - Fluid Editorial Design */}
        <section className="py-32 bg-white relative overflow-hidden">
          {/* Background Decorative Elements */}
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-50/30 rounded-full blur-[120px] -translate-y-1/2 z-0" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-50/20 rounded-full blur-[100px] translate-y-1/2 z-0" />

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-24">
              <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-xs font-black uppercase tracking-widest mb-6">
                L'EXCELLENCE DE L'OSMOSE INVERSE AU QUOTIDIEN
              </span>
              <h2 className="text-slate-900 leading-[1.05] tracking-[ -0.04em] mb-10 text-center">
                <span className="font-light leading-[1.1] block tracking-tighter text-slate-900">Pourquoi choisir nos</span>
                <span className="font-bold text-blue-600 leading-[1.1] block tracking-tighter">systèmes d'osmose inverse ?</span>
              </h2>
              <div className="w-16 h-0.5 bg-blue-600/20 mx-auto mb-10" />
              <p className="font-light text-slate-500 text-lg sm:text-lg max-w-2xl mx-auto leading-relaxed italic text-center">
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
                    <p className="text-slate-500 font-light text-base leading-relaxed text-left opacity-80 group-hover:opacity-100 transition-opacity duration-500 max-w-lg">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Comparison Table */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-left mb-16">
              <h2
                className="text-slate-900 mb-8 text-left"
                style={{}}
              >
                <span className="font-light leading-[1.1] block">Comparez nos solutions</span>
                <span className="font-normal leading-[1.1] block">de filtration d'eau potable</span>
              </h2>
              <div className="w-24 h-1 bg-blue-600"></div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[1000px] border-collapse bg-white rounded-2xl overflow-hidden shadow-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-8 text-left text-gray-400 font-light uppercase tracking-wider">Solutions</th>
                    {[
                      { name: "Série Vectapure", img: vectapureROImg },
                      { name: "Série Essentiel", img: drinkingWaterImg },
                      { name: "Série Sérénité", img: freezelifeROImg },

                    ].map((m, i) => (
                      <th key={i} className="p-4 text-center text-gray-900 font-bold text-sm">
                        <div className="flex flex-col items-center gap-2">
                          <img
                            src={m.img}
                            alt={`Purificateur d'eau ${m.name} - Technologie d'osmose inverse Bricareau`}
                            className="w-[120px] h-[100px] object-contain mx-auto mix-blend-multiply"
                          />
                          <span className="max-w-[100px] inline-block uppercase tracking-wider text-[10px]">{m.name}</span>
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
                        {typeof row.stage4 === 'string' ? <span className="text-blue-600 font-bold bg-blue-50 px-3 py-1 rounded-full text-[10px] whitespace-nowrap">{row.stage4}</span> : (row.stage4 ? <CheckCircle2 className="h-6 w-6 text-blue-600 mx-auto" /> : null)}
                      </td>
                      <td className="p-8 text-center text-sm">
                        {typeof row.stage5 === 'string' ? <span className="text-blue-600 font-bold bg-blue-50 px-3 py-1 rounded-full text-[10px] whitespace-nowrap">{row.stage5}</span> : (row.stage5 ? <CheckCircle2 className="h-6 w-6 text-blue-600 mx-auto" /> : null)}
                      </td>
                      <td className="p-8 text-center text-sm">
                        {typeof row.stage6 === 'string' ? <span className="text-blue-600 font-bold bg-blue-50 px-3 py-1 rounded-full text-[10px] whitespace-nowrap">{row.stage6}</span> : (row.stage6 ? <CheckCircle2 className="h-6 w-6 text-blue-600 mx-auto" /> : null)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
        {/* 6. Water Testing Section (Redesigned for Mobile) */}
        <section className="relative lg:h-[750px] flex flex-col lg:flex-row items-stretch overflow-hidden bg-white">
          {/* Mobile Image */}
          <div className="lg:hidden w-full h-[300px] relative">
            <img
              src={waterTestingImg}
              alt="Test de qualité d'eau à domicile pour détecter les contaminants - Expertise Bricareau"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />
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
              <h2
                className="lg:font-light mb-8 md:leading-[60px] text-slate-900 lg:text-white text-left"
                style={{}}
              >
                La vérité dans <span className="lg:font-bold"><br />chaque goutte.</span>
              </h2>
              <p className="font-light text-slate-600 lg:text-white/95 mb-8 max-w-xl text-left lg:text-justify">
                Pourquoi deviner quand vous pouvez vérifier ? <br />Un test d'eau simple pour une protection durable<br /> de l'eau de votre foyer.
              </p>
              <div className="flex gap-4">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 h-14 shadow-lg shadow-blue-200"
                  style={{}}
                  asChild
                >
                  <a href="/tests-eau">Demandez une analyse d'eau</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Testimonials Section */}
        <TestimonialsSection
          filterProduct="/systeme-de-filtration-deau-potable"
          title={
            <>
                <span className="font-light block">L'eau de source,</span>
                <span className="font-bold text-blue-600 block">directement à votre robinet.</span>
            </>
          }
        />

{/* 8. CTA Section - Premium Immersive */}
                <section className="relative py-32 overflow-hidden">
                    {/* Background Image with Overlay */}
                    <div className="absolute inset-0 z-0">
                        <img
                            src={eauFontaineImg}
                            alt="Expert Bricareau en fontaines d'eau"
                            className="w-full h-full object-cover object-[50%_20%]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-800/50 to-blue-500/20 backdrop-blur-[5px]" />
                    </div>
                    <div className="container mx-auto px-6 relative z-10 text-center">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-white mb-6">
                                <span className="font-light leading-tight block tracking-tight opacity-90 italic">Redéfinissez votre standard de pureté.</span>
                            </h2>
                            <p className="text-blue-100/80 font-light text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
                            Pourquoi vous contenter d'une eau ordinaire quand vous pouvez offrir à votre foyer une source de pureté incomparable ? L'osmose inverse élimine les impuretés invisibles pour ne laisser que l'essentiel : une eau cristalline, un goût exceptionnel et une tranquillité d'esprit totale. Faites le choix de la technologie la plus avancée pour votre santé et votre confort.                            </p>
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
                                    <NavLink to="/consultation">Planifiez-vous une consultation</NavLink>
                                </Button>
                            </div>

                            <p className="mt-8 text-white/50 text-sm font-light">
                                Disponible 7j/7 — Réponse en moins de 24h
                            </p>
                        </div>
                    </div>
                </section>

{/* 9. FAQ Section */}
        <section className="py-24 bg-white border-t border-slate-100">
          <div className="container mx-auto px-6">
            <div className="text-left mb-16">
               <h2
                                className="text-slate-900 mb-8 text-left"
                                style={{}}
                            >
                                <span className="font-light leading-[1.1] block">Pour vous éclairer</span>
                                <span className="font-normal leading-[1.1] block">Questions fréquentes</span>
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
                    <AccordionContent className="text-base font-light leading-6 text-slate-500 pb-8 text-justify" style={{}}>
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

        {/* 8. Resources Section */}
        <section className="py-24 bg-white border-t border-slate-100">
          <div className="container mx-auto px-6">
            <div className="text-left mb-16">
               <h2
                                className="text-slate-900 mb-8 text-left"
                                style={{}}
                            >
                                <span className="font-light leading-[1.1] block">Ressources</span>
                            </h2>
              <div className="w-24 h-1 bg-blue-600"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Osmose inverse et santé : quelle qualité d’eau obtenez-vous ?",
                  img: healthwaterImg,
                  link: "/osmose-inverse-et-sante-quelle-qualite-deau-obtenez-vous"
                },
                {
                  title: "Comment l’osmose inverse protège votre famille des contaminants invisibles",
                  img: drinkpurewaterImg,
                  link: "/comment-losmose-inverse-protege-votre-famille-des-contaminants-invisibles"
                },
                {
                  title: "Osmose inverse : la technologie derrière une eau 100 % pure",
                  img: rowaterImg,
                  link: "/osmose-inverse-la-technologie-derriere-une-eau-100-pure"
                },
              ].map((art, i) => (
                <div
                  key={i}
                  className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full cursor-pointer"
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

export default StationEauPotable;
