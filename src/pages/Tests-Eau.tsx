import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
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
import forensicWaterImg from "@/assets/1062.jpg";
import glasspurewaterImg from "@/assets/glass-of-water.jpeg";

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
                <Hero 
                    image={newHeroImg}
                    highlightedTitle="Analyses d'eau professionnelles"
                    mainTitle="& Tests de laboratoire"
                    subtitle="Besoin d'une analyse d'eau dans la région métropolitaine ? Que ce soit pour une vérification annuelle, une transaction hypothécaire ou un souci de qualité, Bricareau offre des tests complets de laboratoire partout dans le Grand Montréal, Laval et les couronnes."
                    ctaText="Planifiez un test d'eau"
                    ctaLink="#water-test"
                    showPhone={true}
                    showBreadcrumbs={true}
                    singleLineTitle={true}
                />




        <section className="pt-32 pb-0 bg-white relative overflow-hidden">
          {/* Centered technical header */}
          <div className="container mx-auto px-6 relative z-10 mb-20 text-center">
            <div className="max-w-4xl mx-auto">
              <span className="inline-block px-4 py-1.5 bg-blue-600/10 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                TESTS & ANALYSES D'EAU DE PRÉCISION
              </span>
              <h2 className="mb-8 heading-pro-max">
                <span className="italic font-light text-[#2563eb] block">Savoir exactement</span>
                <span className="font-bold text-[#1e3a8a] block">ce que vous buvez.</span>
              </h2>
              <p className="body-pro-max max-w-6xl mx-auto text-justify" style={{ fontWeight: 300, color: 'rgb(71, 85, 105)', fontSize: '20px', lineHeight: '28px' }}>
                Les analyses d’eau professionnelles et les tests de laboratoire sont la façon la plus fiable de connaître la qualité réelle de votre eau potable. Ils permettent de détecter les contaminants invisibles à l’œil nu et de choisir ensuite le bon système de traitement d'eau pour protéger votre famille. il est préférable de procéder à une analyse d'eau dans les cas suivants:
              </p>
            </div>
          </div>

          {/* Full-Width immersive content */}
          <div className="flex flex-col-reverse lg:flex-row items-stretch min-h-[650px] lg:min-h-[850px]">
            {/* Left Side: Cinematic Visual */}
            <div className="w-full lg:w-1/2 relative group overflow-hidden h-[450px] md:h-[600px] lg:h-auto">
              <img
                src={forensicWaterImg}
                alt="Microscopic water analysis"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-blue-900/10 backdrop-blur-[1px]" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
            </div>

            {/* Right Side: Information Grid */}
            <div className="w-full lg:w-1/2 flex items-center bg-slate-50/10 justify-start border-b border-slate-100">
              <div className="w-full max-w-[800px] px-6 sm:px-12 lg:px-16 xl:px-24 py-20 lg:py-0">
                <div className="space-y-8">
                  <div className="space-y-4">
                    <p className="text-slate-500 font-light text-lg">
                      Il est préférable de procéder à une analyse d'eau dans les cas suivants :
                    </p>
                  </div>
                  
                  {/* Integrated Diagnostic Feature List (with Circular Images) - RESTORED ORIGINAL CONTENT DESIGN */}
                  <div className="mt-8 space-y-4">
                    {services.map((item, idx) => (
                      <div 
                        key={idx}
                        className="group flex items-start gap-5 p-4 -mx-4 rounded-3xl transition-all duration-500 hover:bg-blue-50/30"
                      >
                        {/* Circular Image Frame */}
                        <div className="relative flex-shrink-0 w-20 h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden border-2 border-white shadow-xl shadow-blue-900/10 group-hover:scale-110 transition-transform duration-700">
                          <img 
                            src={item.img} 
                            alt={item.title} 
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2000ms]"
                          />
                          <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>

                        {/* Text Content */}
                        <div className="flex-1">
                           <h4 className="text-xl font-bold tracking-tight text-blue-600/20 group-hover:text-blue-600 transition-colors duration-500 mb-0 leading-tight">
                             {item.title}
                           </h4>
                           <p className="text-slate-500 text-sm leading-snug font-light max-w-md">
                             {item.desc}
                           </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Water Testing plans Section */}
        <section className="py-24 bg-slate-50 relative">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-4 block flex items-center justify-center gap-2">
                 <span className="inline-block px-4 py-1.5 bg-blue-600/10 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                   NOS SOLUTIONS D'ANALYSE DE LA QUALITÉ D'EAU
                 </span>
              </span>
              <h2 className="mb-8 heading-pro-max text-center">
                <span className="italic font-light text-[#2563eb] block text-center">Quelle trousse d'analyse</span>
                <span className="font-bold text-[#1e3a8a] block text-center">choisir pour votre eau ?</span>
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



        {/* 6. CTA Section - Premium Immersive */}
        <section className="relative py-32 overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src={glasspurewaterImg}
              alt="Expert Bricareau en traitement d'eau de puits"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-900/70 to-blue-800/10 backdrop-blur-[2px]" />
          </div>

          <div className="container mx-auto px-6 relative z-10 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="mb-8 heading-pro-max text-center">
                <span className="font-bold text-white block">Vous avez un doute</span>
                <span className="font-bold text-white block">sur la qualité de votre eau ?</span>
              </h2>

              <p className="text-white font-light text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
                Planifier une analyse d’eau professionnelle et recevoir un rapport clair avec recommandations. Un spécialiste vous contactera pour discuter des résultats et, au besoin, vous proposer un plan de traitement adapté à votre maison.              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
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
                                                  <NavLink to="/consultation">Planifiez-vous une consultation</NavLink>
                                              </Button>
                                          </div>
            </div>
          </div>
        </section>

        {/* 7. FAQ Section */}
        <section className="py-32 bg-white border-t border-slate-100">
          <div className="container mx-auto px-4 text-left">
            <div className="text-left mb-20">
                             <h2 className="mb-8 heading-pro-max text-left">
                                <span className="italic font-light text-[#2563eb] block">Pour vous éclairer</span>
                                <span className="font-bold text-[#1e3a8a] block">Questions fréquentes</span>
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
                <Button
                  onClick={() => setShowAllFaqs(!showAllFaqs)}
                  size="lg"
                >
                  {showAllFaqs ? "Voir moins de questions" : "Voir toutes les questions"}
                </Button>
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
    </div >
  );
};

export default TestsEauPage;
