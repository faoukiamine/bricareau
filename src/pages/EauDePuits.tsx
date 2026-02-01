import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Droplets, Check, ChevronRight, CheckCircle2, X } from "lucide-react";
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
import waterTestBg from "@/assets/Enercare_JP_Day_2_Kitchen_Faucet_498-2048x1365.jpg";
import TestimonialsSection from "@/components/TestimonialsSection";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
        {/* Hero Section */}
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
                SOLUTIONS POUR PUITS PRIVÉS
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight drop-shadow-md">
                Traitement de l'eau <br /> de puits
              </h1>
              <p className="text-lg md:text-xl font-medium opacity-90 mb-8 max-w-xl drop-shadow-sm">
                Propriétaire d'un puits privé ? Nous comprenons vos défis.
                Du fer au soufre, nous avons les solutions pour une eau saine
                et de qualité supérieure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-10 h-14 text-lg font-bold"
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

        {/* Problems Grid - Redesigned Staggered Layout */}
        <section className="py-32 bg-[#F8F9FA] overflow-hidden">
          <div className="container mx-auto px-4">
            {/* Title Header - Above Grid */}
            <div className="mb-4 max-w-4xl">
              <span className="text-blue-600 text-xs font-bold uppercase tracking-[0.3em] mb-6 block">
                ANALYSE TECHNIQUE
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.1] tracking-tighter mb-8">
                Problèmes courants <br /> de l'eau de puits.
              </h2>
              <p className="text-slate-500 text-xl leading-relaxed font-medium max-w-2xl">
                Identifiez les signes d'une contamination ou d'un déséquilibre chimique dans votre eau.
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
                        <p className="text-xs opacity-0 h-0 group-hover:opacity-100 group-hover:h-auto transition-all duration-500 leading-relaxed font-medium">{problems[0].desc}</p>
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
                          <p className="text-xs opacity-0 h-0 group-hover:opacity-100 group-hover:h-auto transition-all duration-500 leading-relaxed font-medium">{problems[idx].desc}</p>
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
                          <p className="text-xs opacity-0 h-0 group-hover:opacity-100 group-hover:h-auto transition-all duration-500 leading-relaxed font-medium">{problems[idx].desc}</p>
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
                        <p className="text-xs opacity-0 h-0 group-hover:opacity-100 group-hover:h-auto transition-all duration-500 leading-relaxed font-medium">{problems[5].desc}</p>
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
                        <p className="text-sm leading-relaxed opacity-90">{problem.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 4. SECTION PROCESSUS - Minimalist 4-Step Design */}
        <section className="bg-white py-32 border-t border-gray-50">
          <div className="container mx-auto px-4">
            {/* Header Layout */}
            <div className="mb-24">
              <span className="text-[#888] text-xs font-bold uppercase tracking-[0.3em] mb-6 block">
                NOTRE FONCTIONNEMENT
              </span>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
                <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-black leading-[1] tracking-tighter">
                  Un service simple <br />& sans souci.
                </h2>
                <p className="text-[#666] text-xl leading-relaxed max-w-xl lg:ml-auto">
                  De l'analyse initiale à l'installation certifiée, nous gérons chaque étape technique pour vous garantir une eau de puits parfaitement saine.
                </p>
              </div>
            </div>

            {/* 4-Step Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
              {[
                {
                  title: "Analyse d'eau",
                  desc: "Nous effectuons un test approfondi en laboratoire pour identifier les contaminants spécifiques à votre puits."
                },
                {
                  title: "Diagnostic Global",
                  desc: "Nos experts conçoivent une solution de filtration sur mesure adaptée à la chimie unique de votre eau."
                },
                {
                  title: "Installation Experte",
                  desc: "Nos techniciens certifiés installent vos systèmes avec une précision professionnelle pour une performance durable."
                },
                {
                  title: "Suivi de Qualité",
                  desc: "Nous assurons des tests de suivi et un entretien régulier pour garantir la sécurité continue de votre foyer."
                }
              ].map((step, idx) => (
                <div key={idx} className="flex flex-col animate-in fade-in slide-in-from-bottom duration-700" style={{ animationDelay: `${idx * 100}ms` }}>
                  {/* Circle Indicator with Number */}
                  <div className="relative mb-8">
                    <div className="w-24 h-24 rounded-full bg-[#E5E5E5] flex items-center justify-center">
                    </div>
                    <div className="absolute -top-2 -left-2 w-10 h-10 rounded-full bg-black text-white flex items-center justify-center text-sm font-bold">
                      {idx + 1}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-4 text-black tracking-tight">{step.title}</h3>
                  <p className="text-[#888] text-lg leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. SECTION TESTS D'EAU - Full Background with Overlaid Content Box */}
        <section className="relative min-h-[700px] flex items-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src={waterTestBg}
              alt="Test d'eau en laboratoire"
              className="w-full h-full object-cover"
            />
            {/* Subtle overlay to ensure the white box pops and the image isn't too distracting */}
            <div className="absolute inset-0 bg-black/10" />
          </div>

          <div className="container mx-auto px-4 relative z-10 flex justify-start">
            <div className="max-w-2xl bg-white p-10 md:p-20 shadow-2xl animate-in fade-in slide-in-from-left duration-1000">
              <span className="text-[#888] text-xs font-bold uppercase tracking-[0.3em] mb-10 block">
                ANALYSE PROFESSIONNELLE
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-black leading-[1.05] tracking-tighter mb-10">
                Des tests d'eau précis <br />
                pour votre sécurité.
              </h2>
              <p className="text-[#666] text-xl leading-relaxed mb-14 max-w-lg">
                Ne devinez pas la qualité de votre eau. Nos analyses approfondies identifient les bactéries, les minéraux et les contaminants chimiques pour vous offrir une tranquillité d'esprit totale.
              </p>
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-10 h-14 text-lg font-bold transition-all shadow-lg"
                asChild
              >
                <NavLink to="/water-testing">En savoir plus</NavLink>
              </Button>
            </div>
          </div>
        </section>

        {/* 6. SECTION PRODUITS ASSOCIÉS */}
        <section className="bg-white py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.1] tracking-tighter mb-8">
                Découvrez nos solutions <br />de traitement de l'eau de puits.
              </h2>
              <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                Optimisez votre expérience de traitement d'eau avec nos solutions complémentaires.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                {
                  name: "Filtres d'eau spécialisés",
                  desc: "Élimine les particules et impuretés pour protéger votre système.",
                  img: specializedFiltersImg,
                  link: "/specialises-filtration-eau"
                },
                {
                  name: "Adoucisseurs d'eau",
                  desc: "Pour une eau de boisson d'une pureté exceptionnelle directement au robinet.",
                  img: waterSoftenerImg,
                  link: "/adoucisseur-eau-residentiel"
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
                  link: "#"
                }
              ].map((prod, i) => (
                <div key={i} className="group cursor-pointer">
                  <NavLink to={prod.link}>
                    <div className="bg-gray-100 aspect-square rounded-xl mb-6 overflow-hidden flex items-center justify-center">
                      <img src={prod.img} alt={prod.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-gray-900">{prod.name}</h3>
                    <p className="text-gray-600 mb-4">{prod.desc}</p>
                    <div className="text-[#0066FF] font-bold flex items-center gap-2 group-hover:translate-x-1 transition-all">
                      En savoir plus <ChevronRight className="h-4 w-4" />
                    </div>
                  </NavLink>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial Slider */}
        <TestimonialsSection />

        {/* Comparison Table Section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.1] tracking-tighter mb-8">
                Comparez nos solutions <br />de traitement de l'eau de puits.
              </h2>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[1000px] border-collapse bg-white rounded-2xl overflow-hidden shadow-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-8 text-left text-gray-400 font-medium uppercase tracking-wider">Solutions</th>
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
                      <td className="p-8 font-medium text-gray-700">{row.feature}</td>
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

        {/* CTA Section */}
        <section className="bg-primary py-16 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Besoin d'aide avec votre eau de puits ?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              Nos spécialistes de l'eau de puits sont là pour vous aider à
              résoudre tous vos problèmes de qualité d'eau.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="rounded-full px-8 bg-white text-primary hover:bg-white/90"
                asChild
              >
                <NavLink to="/contact-residentiel">
                  Demandez une soumission
                </NavLink>
              </Button>
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
          <div className="container mx-auto px-4 max-w-4xl">
             <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.1] tracking-tighter mb-8">
                FAQ sur nos solutions <br />de traitement de l'eau de puits.
              </h2>
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  q: "Pourquoi l'eau de mon puits a-t-elle une odeur d'œufs pourris ?",
                  a: "Cette odeur est généralement causée par le gaz sulfure d'hydrogène. Bricareau propose des systèmes de filtration spécialisés pour éliminer efficacement cette odeur et rendre votre eau fraîche.",
                },
                {
                  q: "Le fer dans l'eau de puits est-il dangereux ?",
                  a: "Bien que le fer ne soit généralement pas dangereux pour la santé, il cause des taches tenaces sur les éviers et le linge, et peut donner un goût métallique désagréable.",
                },
                {
                  q: "À quelle fréquence devrais-je faire tester mon eau de puits ?",
                  a: "Nous recommandons une analyse complète au moins une fois par an ou dès que vous remarquez un changement de goût, d'odeur ou de clarté.",
                },
                {
                  q: "Quelles solutions proposez-vous pour les bactéries ?",
                  a: "Nous installons des systèmes de désinfection par rayons ultraviolets (UV) ou par chloration contrôlée pour éliminer 99,9% des contaminants biologiques.",
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
                  <AccordionContent className="text-gray-600 text-lg leading-relaxed pb-6 text-left">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* 11. Articles Section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-16 underline decoration-blue-600 underline-offset-8">
              Ressources
            </h2>
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
        <section className="py-24 bg-white border-t border-gray-100">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-20">
              <div className="lg:w-1/3 text-left">
                <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight italic">
                  Planifiez une consultation gratuite sur l'eau
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Remplissez le formulaire ci-dessous pour organiser une visite
                  d'un de nos experts de l'eau.
                </p>
              </div>

              <div className="lg:w-2/3">
                <div className="bg-white rounded-3xl p-10 border border-gray-100 shadow-2xl">
                  {/* Progress */}
                  <div className="flex items-center gap-8 mb-12 overflow-x-auto pb-4 border-b border-gray-100">
                    <div className="flex items-center gap-2 text-blue-600 font-bold whitespace-nowrap">
                      <span className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center">
                        1
                      </span>
                      VOS INFOS
                    </div>
                    <div className="flex items-center gap-2 text-gray-300 font-bold whitespace-nowrap">
                      <span className="w-10 h-10 rounded-full bg-gray-200 text-white flex items-center justify-center">
                        2
                      </span>
                      VOTRE DISPONIBILITÉ
                    </div>
                    <div className="flex items-center gap-2 text-gray-300 font-bold whitespace-nowrap">
                      <span className="w-10 h-10 rounded-full bg-gray-200 text-white flex items-center justify-center">
                        3
                      </span>
                      CONFIRMATION
                    </div>
                  </div>

                  <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3 text-left">
                      <Label htmlFor="fname" className="font-bold flex gap-1">
                        Prénom*
                      </Label>
                      <Input
                        id="fname"
                        className="h-14 bg-gray-50 border-none rounded-sm"
                        placeholder="Jean"
                      />
                    </div>
                    <div className="space-y-3 text-left">
                      <Label htmlFor="lname" className="font-bold flex gap-1">
                        Nom*
                      </Label>
                      <Input
                        id="lname"
                        className="h-14 bg-gray-50 border-none rounded-sm"
                        placeholder="Dupont"
                      />
                    </div>
                    <div className="space-y-3 text-left">
                      <Label htmlFor="email" className="font-bold flex gap-1">
                        Courriel*
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        className="h-14 bg-gray-50 border-none rounded-sm"
                        placeholder="jean@exemple.com"
                      />
                    </div>
                    <div className="space-y-3 text-left">
                      <Label htmlFor="phone" className="font-bold flex gap-1">
                        Téléphone*
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        className="h-14 bg-gray-50 border-none rounded-sm"
                        placeholder="(514) 000-0000"
                      />
                    </div>
                    <div className="md:col-span-2 space-y-3 text-left">
                      <Label htmlFor="address" className="font-bold flex gap-1">
                        Adresse*
                      </Label>
                      <Input
                        id="address"
                        className="h-14 bg-gray-50 border-none rounded-sm"
                        placeholder="123 rue de l'Eau"
                      />
                    </div>
                    <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-8">
                      <div className="space-y-3 text-left">
                        <Label htmlFor="city" className="font-bold flex gap-1">
                          Ville*
                        </Label>
                        <Input
                          id="city"
                          className="h-14 bg-gray-50 border-none rounded-sm"
                          placeholder="Montréal"
                        />
                      </div>
                      <div className="space-y-3 text-left">
                        <Label
                          htmlFor="province"
                          className="font-bold flex gap-1"
                        >
                          Province*
                        </Label>
                        <Input
                          id="province"
                          className="h-14 bg-gray-50 border-none rounded-sm"
                          placeholder="Québec"
                        />
                      </div>
                      <div className="space-y-3 text-left">
                        <Label htmlFor="zip" className="font-bold flex gap-1">
                          Code Postal*
                        </Label>
                        <Input
                          id="zip"
                          className="h-14 bg-gray-50 border-none rounded-sm"
                          placeholder="H1A 1A1"
                        />
                      </div>
                    </div>
                    <div className="md:col-span-2 text-left">
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-16 h-14 text-xl font-bold w-full md:w-auto">
                        Continuer
                      </Button>
                      <p className="mt-4 text-[10px] text-gray-400 max-w-lg">
                        En soumettant ce formulaire, vous acceptez nos
                        conditions d'utilisation et notre politique de
                        confidentialité. Un spécialiste Bricareau vous
                        contactera sous peu.
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default EauDePuits;
