import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, ChevronRight, CheckCircle2, X } from "lucide-react";
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
import process1 from "@/assets/Scientist istesting water.webp";
import process2 from "@/assets/section-image-and-content-23.jpg";
import process3 from "@/assets/SERVICES.jpg";
import process4 from "@/assets/pexels-latronico-1560546.jpg";
import TestimonialsSection from "@/components/TestimonialsSection";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ConsultationFormSection from "@/components/ConsultationFormSection";

interface Problem {
  title: string;
  image: string;
  desc: string;
  isLabelTitle?: boolean;
}

const problems: Problem[] = [
  {
    title: "Eau avec taches de rouille",
    image: rouilleThumb,
    desc: "Les taches rougeâtres ou orangées sur vos éviers, baignoires et vêtements sont souvent le signe d'une forte concentration de fer dans votre eau de puits.",
  },
  {
    title: "Eau avec odeur d'œufs pourris",
    image: rottenEggsThumb,
    desc: "Une odeur d'œufs pourris (soufre) ou de moisissure peut rendre votre eau impropre à la consommation et désagréable pour la douche.",
  },
  {
    title: "Eau avec mauvais goût",
    image: waterTasteThumb,
    desc: "Un goût métallique, terreux ou de chlore gâche le plaisir de boire votre eau et peut altérer le goût de vos aliments et de votre café.",
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
        <section className="relative h-[800px] flex items-start overflow-hidden pt-[220px]">
          <div className="absolute inset-0 z-0">
            <img
              src={heroPuits}
              alt="Propriété avec puits"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 lg:bg-gradient-to-r lg:from-black/60 lg:to-transparent" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-2xl text-white">
              <span className="text-sm font-bold uppercase tracking-widest text-[#60A5FA] mb-4 block">
                SOLUTIONS D'EAU POUR PUITS PRIVÉS
              </span>
              <h1
                className="text-[40px] md:text-[60px] leading-[1.1] md:leading-[60px] font-light mb-8 tracking-tighter text-white"
                style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
              >
                Votre puits est un trésor. <span className="font-normal">Offrez-lui la pureté qu'il mérite</span>
              </h1>
              <p className="text-lg font-light leading-relaxed text-white/90 mb-8 max-w-xl text-justify">
                Ne laissez plus le fer, le soufre ou les bactéries gâcher la richesse de votre puits. Transformez votre eau brute en une ressource cristalline, saine et parfaitement équilibrée pour toute votre famille.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 h-14"
                  style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                  asChild
                >
                  <NavLink to="/water-testing">
                    Planifiez une consultation gratuite
                  </NavLink>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 hover:bg-white/20 text-white border-white rounded-full px-10 h-14 text-lg font-bold backdrop-blur-sm"
                  asChild
                >
                  <a href="tel:18552649328">Appelez le 1-855-264-9328</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Well Water Problems section */}
        <section className="py-32 bg-[#F8F9FA] overflow-hidden">
          <div className="container mx-auto px-4">
            {/* Title Header - Above Grid */}
            <div className="mb-4 max-w-4xl">
              <span className="text-sm font-bold uppercase tracking-widest text-[#60A5FA] mb-4 block">
                ANALYSE TECHNIQUE
              </span>
              <h2 className="text-[32px] md:text-[48px] font-light text-slate-900 mb-8 leading-[1.2] md:leading-[48px] tracking-tighter"
                style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
              >
                Problèmes courants <br /> de l'eau de puits.
              </h2>
              <p className="text-lg font-light leading-relaxed text-slate-500 mb-12 max-w-2xl text-justify">
                L'eau de votre puits est vivante et changeante. Une analyse rigoureuse est la première étape pour garantir la sécurité de votre foyer et la longévité de vos installations.
              </p>
            </div>

            {/* Layout Grid */}
            <div className="relative">
              {/* Desktop Staggered Grid (XL+) */}
              <div className="hidden xl:grid grid-cols-4 gap-8 min-h-[900px]">
                {/* Column 1 */}
                <div className="pt-[300px]">
                  <div className="group cursor-pointer transition-all duration-500">
                    <div className="relative h-[320px] rounded-[2.5rem] overflow-hidden bg-slate-200 shadow-2xl shadow-slate-200/50 transition-all duration-700 group-hover:scale-[1.03] group-hover:-translate-y-2">
                      <img src={problems[0].image} alt={problems[0].title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/60 transition-colors duration-500" />
                      <div className="absolute inset-0 p-8 flex flex-col justify-end text-white text-left">
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] mb-4 opacity-70 group-hover:opacity-100 transition-opacity">PROBLÈME 1</span>
                        <h3 className="text-xl font-bold leading-tight group-hover:mb-4 transition-all duration-500">{problems[0].title}</h3>
                        <p className="text-xs opacity-0 h-0 group-hover:opacity-100 group-hover:h-auto transition-all duration-500 leading-relaxed font-light text-justify">{problems[0].desc}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Column 2 */}
                <div className="pt-[110px] flex flex-col gap-16">
                  {[1, 2].map((idx) => (
                    <div key={idx} className="group cursor-pointer transition-all duration-500">
                      <div className="relative h-[320px] rounded-[2.5rem] overflow-hidden bg-slate-200 shadow-2xl shadow-slate-200/50 transition-all duration-700 group-hover:scale-[1.03] group-hover:-translate-y-2">
                        <img src={problems[idx].image} alt={problems[idx].title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/60 transition-colors duration-500" />
                        <div className="absolute inset-0 p-8 flex flex-col justify-end text-white text-left">
                          <span className="text-[10px] font-black uppercase tracking-[0.4em] mb-4 opacity-70 group-hover:opacity-100 transition-opacity">PROBLÈME {idx + 1}</span>
                          <h3 className="text-xl font-bold leading-tight group-hover:mb-4 transition-all duration-500">{problems[idx].title}</h3>
                          <p className="text-xs opacity-0 h-0 group-hover:opacity-100 group-hover:h-auto transition-all duration-500 leading-relaxed font-light text-justify">{problems[idx].desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Column 3 */}
                <div className="pt-[0px] flex flex-col gap-16">
                  {[3, 4].map((idx) => (
                    <div key={idx} className="group cursor-pointer transition-all duration-500">
                      <div className="relative h-[320px] rounded-[2.5rem] overflow-hidden bg-slate-200 shadow-2xl shadow-slate-200/50 transition-all duration-700 group-hover:scale-[1.03] group-hover:-translate-y-2">
                        <img src={problems[idx].image} alt={problems[idx].title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/60 transition-colors duration-500" />
                        <div className="absolute inset-0 p-8 flex flex-col justify-end text-white text-left">
                          <span className="text-[10px] font-black uppercase tracking-[0.4em] mb-4 opacity-70 group-hover:opacity-100 transition-opacity">PROBLÈME {idx + 1}</span>
                          <h3 className="text-xl font-bold leading-tight group-hover:mb-4 transition-all duration-500">{problems[idx].title}</h3>
                          <p className="text-xs opacity-0 h-0 group-hover:opacity-100 group-hover:h-auto transition-all duration-500 leading-relaxed font-light text-justify">{problems[idx].desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Column 4 */}
                <div className="pt-[260px]">
                  <div className="group cursor-pointer transition-all duration-500">
                    <div className="relative h-[320px] rounded-[2.5rem] overflow-hidden bg-slate-200 shadow-2xl shadow-slate-200/50 transition-all duration-700 group-hover:scale-[1.03] group-hover:-translate-y-2">
                      <img src={problems[5].image} alt={problems[5].title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/60 transition-colors duration-500" />
                      <div className="absolute inset-0 p-8 flex flex-col justify-end text-white text-left">
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] mb-4 opacity-70 group-hover:opacity-100 transition-opacity">PROBLÈME 6</span>
                        <h3 className="text-xl font-bold leading-tight group-hover:mb-4 transition-all duration-500">{problems[5].title}</h3>
                        <p className="text-xs opacity-0 h-0 group-hover:opacity-100 group-hover:h-auto transition-all duration-500 leading-relaxed font-light text-justify">{problems[5].desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tablet/Mobile Responsive Grid */}
              <div className="xl:hidden grid grid-cols-1 md:grid-cols-2 gap-8">
                {problems.map((problem, index) => (
                  <div key={index} className="group cursor-pointer">
                    <div className="relative h-[400px] rounded-[2rem] overflow-hidden bg-slate-200 shadow-xl shadow-slate-200/30">
                      <img
                        src={problem.image}
                        alt={problem.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8 flex flex-col justify-end text-white">
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] mb-3 opacity-80">
                          PROBLÈME {index + 1}
                        </span>
                        <h3 className="text-2xl font-bold mb-4">{problem.title}</h3>
                        <p className="text-lg font-light leading-relaxed text-blue-100 text-justify">{problem.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 4. Processus Section */}
        <section className="bg-white py-32 border-t border-gray-50">
          <div className="container mx-auto px-4">
            {/* Header Layout */}
            <div className="mb-24">
              <span className="text-sm font-bold uppercase tracking-widest text-[#60A5FA] mb-4 block">
                NOTRE FONCTIONNEMENT
              </span>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
                <h2 className="text-[32px] md:text-[48px] font-light text-slate-900 mb-8 leading-[1.2] md:leading-[48px] tracking-tighter"
                  style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                >
                  Un service simple <br />& sans souci.
                </h2>
                <p className="text-lg font-light leading-relaxed text-slate-600 max-w-xl lg:ml-auto text-justify">
                  Confiez-nous la gestion de votre eau de puits. De l'expertise initiale à l'installation finale, nous nous occupons de tout pour vous garantir une eau saine, sans compromis.
                </p>
              </div>
            </div>

            {/* 4-Step Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
              {[
                {
                  title: "Analyse d'eau",
                  desc: "Nous effectuons un test approfondi en laboratoire pour identifier les contaminants spécifiques à votre puits.",
                  img: process1
                },
                {
                  title: "Diagnostic Global",
                  desc: "Nos experts conçoivent une solution de filtration sur mesure adaptée à la chimie unique de votre eau.",
                  img: process2
                },
                {
                  title: "Installation Experte",
                  desc: "Nos techniciens certifiés installent vos systèmes avec une précision professionnelle pour une performance durable.",
                  img: process3
                },
                {
                  title: "Suivi de Qualité",
                  desc: "Nous assurons des tests de suivi et un entretien régulier pour garantir la sécurité continue de votre foyer.",
                  img: process4
                }
              ].map((step, idx) => (
                <div key={idx} className="flex flex-col animate-in fade-in slide-in-from-bottom duration-700" style={{ animationDelay: `${idx * 100}ms` }}>
                  {/* Circle Indicator with Number */}
                  <div className="relative mb-8">
                    <div className="w-24 h-24 rounded-full bg-[#E5E5E5] flex items-center justify-center overflow-hidden border-4 border-white shadow-lg">
                      <img src={step.img} alt={step.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute top-0 left-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold border-2 border-white shadow-md">
                      {idx + 1}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-4 text-black tracking-tight">{step.title}</h3>
                  <p className="text-lg font-light leading-relaxed text-slate-600 text-justify">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Water Testing Section*/}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-stretch gap-0 rounded-[3rem] overflow-hidden shadow-2xl">
              <div className="lg:w-1/2 relative min-h-[400px]">
                <img src={waterTestingImg} alt="Analyse d'eau" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-blue-900/10" />
              </div>
              <div className="lg:w-1/2 bg-blue-600 text-white p-12 lg:p-20 flex flex-col justify-center items-start text-left">
                <span className="text-white/80 text-sm font-bold uppercase tracking-widest mb-8 block">
                  Contrôle de la Qualité D'EAU
                </span>
                <h2 className="text-[32px] md:text-[48px] font-light text-white mb-8 leading-[1.2] md:leading-[48px] tracking-tighter text-left"
                  style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                >
                  Des tests d'eau précis <br />
                  <span className="font-bold">pour votre sécurité.</span>
                </h2>
                <p className="text-lg font-light leading-relaxed text-white/90 mb-12 text-justify">
                  Ne prenez aucun risque avec la santé de votre foyer. Nos tests de précision révèlent les polluants et contaminants invisibles, vous garantissant ainsi une eau parfaitement saine et une sérénité absolue.
                </p>
                <Button className="bg-white text-blue-600 hover:bg-blue-50 rounded-full px-12 h-16 text-xl font-bold shadow-xl" asChild>
                  <NavLink to="/water-testing">En savoir plus</NavLink>
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "Filtres d'eau spécialisés",
                  desc: "Élimine les particules et impuretés pour protéger votre système.",
                  img: specializedFiltersImg,
                  link: "/filtres-deau"
                },
                {
                  name: "Adoucisseurs d'eau de puits",
                  desc: "Dites adieu aux problèmes de calcaire ! Nos adoucisseurs d'eau traitent durablement l'eau pour vous faire bénéficier d'une eau douce toute l'année.",
                  img: waterSoftenerImg,
                  link: "/adoucisseurs-eau-de-puits"
                },
                {
                  name: "Stations d'eau potable",
                  desc: "Élimine 99.9% des bactéries et virus pour une sécurité totale.",
                  img: drinkingWaterImg,
                  link: "/osmose-filtration"
                },
                {
                  name: "Systèmes de stérilisation UV",
                  desc: "Élimine 99.9% des bactéries et virus pour une sécurité totale.",
                  img: uvSystemImg,
                  link: "/Systemes-de-desinfection-UV"
                }
              ].map((prod, i) => (
                <div
                  key={i}
                  className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full cursor-pointer"
                  onClick={() => window.location.href = prod.link || "/contact"}
                >
                  <div className="bg-slate-50 aspect-square overflow-hidden flex items-center justify-center p-8">
                    <img
                      src={prod.img}
                      alt={prod.name}
                      className="w-full h-full object-contain mix-blend-multiply transition-transform duration-700 group-hover:scale-110 drop-shadow-xl"
                    />
                  </div>
                  <div className="p-8 text-left border-t-2 border-transparent group-hover:border-blue-600 transition-colors flex flex-col flex-grow">
                    <h3 className="text-xl font-bold mb-4 group-hover:text-blue-600 transition-colors uppercase tracking-tight">{prod.name}</h3>
                    <p className="text-lg font-light leading-relaxed text-slate-500 mb-6 flex-grow text-justify">{prod.desc}</p>
                    <div className="mt-auto">
                      <NavLink
                        to={prod.link || "#"}
                        className="text-blue-600 font-bold flex items-center gap-2 group-hover:underline text-xs tracking-widest uppercase"
                      >
                        EN SAVOIR PLUS <ChevronRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                      </NavLink>
                    </div>
                  </div>
                </div>
              ))}
            </div>
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
              Discutez avec un expert en un clic. Disponible par téléphone ou à domicile selon vos préférences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 border-white text-white bg-transparent hover:bg-white/10"
                asChild
              >
                <a href="tel:18552649328">Appelez le 1-855-264-9328</a>
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
                    <AccordionTrigger className="text-left font-bold text-lg hover:no-underline py-6">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-200 text-lg font-light leading-relaxed pb-8 text-justify">
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
            </div>            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                    <h4 className="text-xl font-bold mb-4">{art.title}</h4>
                    <NavLink
                      to="#"
                      className="text-blue-600 font-bold flex items-center gap-2 group-hover:underline text-xs tracking-widest"
                    >
                      EN SAVOIR PLUS <ChevronRight className="h-4 w-4" />
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
    </div>
  );
};

export default EauDePuits;
