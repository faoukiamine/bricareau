import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TestimonialsSection from "@/components/TestimonialsSection";
import { Button } from "@/components/ui/button";
import {
  TestTube,
  Droplet,
  Shield,
  CheckCircle2,
  Clock,
  Home,
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
  ShieldCheck,
  ChevronLeft
} from "lucide-react";
import { NavLink } from "@/components/NavLink";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ConsultationFormSection from "@/components/ConsultationFormSection";

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
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* 1.Hero Section */}
        <section className="relative h-[850px] flex items-center overflow-hidden -mt-[104px] pt-[104px]">
          <div className="absolute inset-0 z-0">
            <img
              src={newHeroImg}
              alt="Expert Bricareau"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 lg:bg-gradient-to-r lg:from-black/60 lg:to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-white via-white/10 to-transparent" />
            {/* Brightening Start 1/3 Right */}
            <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white/90 via-white/40 to-transparent" />
          </div >

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-2xl text-white">
              <span className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-4 block">
                TESTS & ANALYSES D'EAU
              </span>
              <h1
                className="text-[40px] md:text-[60px] leading-[1.1] md:leading-[60px] font-light mb-8 tracking-tighter text-white"
                style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
              >
                <span className="font-bold">Vous désirez faire analyser</span> <br />
                <span className="font-bold">votre eau résidentielle?</span>
              </h1>

              <p className="text-lg font-light leading-relaxed text-white/95 mb-8 max-w-xl text-justify">
                Pour vos analyses annuelles, une transaction hypothécaire ou encore parce que vous avez un souci avec la qualité de votre eau, bricareau est là pour vous!
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 h-14 shadow-lg shadow-blue-200"
                  style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                  asChild
                >
                  <a href="#consultation">
                    Planifiez un test d'eau
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
                    <Clock className="h-5 w-5" />
                    1-855-264-9328
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Wave Separator Bottom - Transition to Dark Blue */}
          <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-[0] z-20 pointer-events-none">
            <svg
              className="relative block w-full h-[80px] md:h-[150px]"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                fill="#001533"
                transform="rotate(180 600 60)"
              ></path>
            </svg>
          </div>
        </section >




        {/* 2. Why test your water Section (Dark Blue Background) */}
        < section className="pt-24 pb-32 bg-[#001533] text-white relative z-10 -mt-2" >
          <div className="container mx-auto px-6">
            <div className="mb-20 text-center">
              <h2
                className="text-white tracking-tighter mb-8"
                style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
              >
                <span className="text-[32px] md:text-[50px] font-bold leading-[1.1] md:leading-[1.1] block">Voici ce que vous pourriez</span>
                <span className="text-[32px] md:text-[50px] font-bold leading-[1.1] md:leading-[1.1] block text-blue-400">découvrir dans votre eau</span>
              </h2>
              <p className="text-lg font-light leading-relaxed text-blue-100/70 max-w-2xl mx-auto">
                Même si votre eau semble propre, elle peut contenir des minéraux invisibles et des impuretés qui nuisent à votre maison et à votre santé.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Heart,
                  title: "Santé et bien-être",
                  desc: "Détectez les contaminants invisibles qui peuvent nuire à votre santé et à votre famille."
                },
                {
                  icon: Home,
                  title: "Protection Maison",
                  desc: "Limitez les dégâts et bris pouvant être causés par certains contaminants de l’eau."
                },
                {
                  icon: Sparkles,
                  title: "Tranquillité d’esprit",
                  desc: "Avec un rapport professionnel, vous aurez tout en main pour choisir le bon système."
                },
                {
                  icon: FileText,
                  title: "Conformité Normes",
                  desc: "Ayez en main les documents légaux requis pour une transaction hypothécaire."
                }
              ].map((item, id) => (
                <div key={id} className="flex items-start space-x-4 text-left group hover:translate-y-[-4px] transition-transform duration-300">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                    <p className="text-sm font-light leading-relaxed text-blue-100/70">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section >

        {/* 3. When you should test your water Section*/}
        < section className="py-24 bg-slate-50" >
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
              <h2
                className="text-slate-900 tracking-tighter mb-8 text-center"
                style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
              >
                <span className="text-[32px] md:text-[60px] font-light leading-[1.1] md:leading-[60px] block">Quand faut-il faire analyser</span>
                <span className="text-[32px] md:text-[60px] font-normal leading-[1.1] md:leading-[60px] block">l'eau de votre maison ?</span>
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Nouvel emménagement",
                  desc: "Testez votre eau dès que vous emménagez dans une nouvelle propriété pour votre sécurité.",
                  img: movingTipsImg
                },
                {
                  title: "Goût ou odeur suspecte",
                  desc: "Si votre eau a un goût métallique ou une odeur d'œufs pourris inhabituelle.",
                  img: smellImg
                },
                {
                  title: "Taches sur les vêtements",
                  desc: "Des taches blanches ou rouge-orange indiquent souvent des minéraux en excès.",
                  img: clothesStainsImg
                },
                {
                  title: "Problèmes de plomberie",
                  desc: "L'accumulation de calcaire réduit considérablement l'efficacité de vos équipements.",
                  img: plumbingImg
                }
              ].map((item, idx) => (
                <div key={idx} className="group relative h-[450px] rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <img src={item.img} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-8">
                    <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center mb-6 transform -translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <ChevronRight className="text-white h-6 w-6" />
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-4 leading-tight min-h-[64px] flex items-end">{item.title}</h4>
                    <p className="text-lg font-light leading-relaxed text-white/80 line-clamp-3 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100 text-justify">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section >

        {/* 5. Water Testing plans Section*/}
        < section className="py-24 bg-white" >
          <div className="container mx-auto px-6 text-center">
            <div className="text-center mb-16">
              <h2
                className="text-slate-900 tracking-tighter mb-8 text-center"
                style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
              >
                <span className="text-[32px] md:text-[60px] font-light leading-[1.1] md:leading-[60px] block">Nos trousses d'analyse</span>
                <span className="text-[32px] md:text-[60px] font-normal leading-[1.1] md:leading-[60px] block">de la qualité de l'eau</span>
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "1. Analyse d'eau microbiologique",
                  desc: "Analyse en dénombrement incluant:",
                  href: "#",
                  details: [
                    "Coliformes totaux",
                    "Colonies atypiques",
                    "E.coli",
                    "Entérocoques"
                  ]
                },
                {
                  title: "2. Analyse d'eau physico-chimique Type I",
                  desc: "Analyse des minéraux et paramètres physico-chimiques causant des problèmes au niveau de l'esthétisme de l'eau (cerne dans les toilettes, eau dure, dépôts, eau trouble, odeur, goût, etc.).",
                  href: "#",
                  details: [
                    "Alcalinité",
                    "Calcium",
                    "Chlorure",
                    "Conductivité",
                    "Couleur",
                    "Dureté",
                    "Fer",
                    "Magnésium",
                    "Manganèse",
                    "pH",
                    "Sodium",
                    "Tannin-Lignine",
                    "Turbidité"
                  ]
                },
                {
                  title: "3. Analyse d'eau physico-chimique Type II",
                  desc: "Paramètres physico-chimiques et métaux lourds, pouvant se retrouver dans l'eau naturellement. Ils sont inodores et incolores, mais peuvent causer des problèmes de santé, si ingérés à long terme.",
                  href: "#",
                  details: [
                    "Fluorures",
                    "Nitrites-nitrates",
                    "Sulfates",
                    "Antimoine",
                    "Arsenic",
                    "Baryum",
                    "Bore",
                    "Cadmium",
                    "Chrome",
                    "Cuivre",
                    "Manganèse",
                    "Plomb",
                    "Sélénium",
                    "Uranium",
                  ]
                },
                {
                  title: "4. Bilan complet",
                  desc: "Une protection globale contre les contaminants et impuretés.",
                  href: "#",
                  details: [
                    "Coliformes Tot.",
                    "Colonies atyp.",
                    "E.coli",
                    "Entérocoques",
                    "Alcalinité",
                    "Calcium",
                    "Chlorure",
                    "Conductivité",
                    "Couleur",
                    "Dureté",
                    "Fer",
                    "Magnésium",
                    "Manganèse",
                    "pH",
                    "Sodium",
                    "Tannin-Lignine",
                    "Turbidité",
                    "Fluorures",
                    "Nitrites-nitrates",
                    "Sulfates",
                    "Antimoine",
                    "Arsenic",
                    "Baryum",
                    "Bore",
                    "Cadmium",
                    "Chrome",
                    "Cuivre",
                    "Manganèse",
                    "Plomb",
                    "Sélénium",
                    "Uranium",
                  ]
                }
              ].map((prod, i) => (
                <div key={i} className={`group bg-[#001A4D] p-8 rounded-[2rem] border border-white/5 hover:bg-[#00266b] hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full shadow-xl ${expandedId === i ? 'row-span-2' : ''}`}>
                  <h4 className="text-xl font-medium mb-4 text-white">{prod.title}</h4>
                  <p className="text-lg font-light leading-relaxed text-blue-100/70 mb-6 flex-grow text-justify">{prod.desc}</p>

                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedId === i ? 'max-h-[500px] opacity-100 mb-6' : 'max-h-0 opacity-0'}`}>
                    <ul className={`text-sm font-light text-blue-200 text-left border-t border-white/10 pt-4 list-disc pl-5 space-y-1 ${i === 0 ? '' : 'grid grid-cols-2 gap-x-4'}`}>
                      {prod.details.map((detail, idx) => (
                        <li key={idx}>{detail}</li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    variant="link"
                    className="text-blue-400 font-bold p-0 group-hover:text-blue-300 transition-colors w-fit mt-auto self-end"
                    onClick={(e) => {
                      e.preventDefault();
                      toggleExpand(i);
                    }}
                  >
                    {expandedId === i ? '' : ''} <ChevronRight className={`h-6 w-6 transition-transform duration-300 ${expandedId === i ? 'rotate-90' : ''}`} />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section >

        <section className="py-24 bg-white border-t border-slate-100">
          <div className="container mx-auto px-4 text-left">
            <div className="text-left mb-16">
              <h2
                className="text-slate-900 tracking-tighter mb-8 text-left"
                style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
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
                ].map((item, idx) => (
                  <AccordionItem
                    key={idx}
                    value={`item-${idx}`}
                    className="border-b-gray-200"
                  >
                    <AccordionTrigger className="text-left text-base font-medium leading-6 hover:no-underline py-6" style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}>
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-base font-light leading-6 text-gray-600 pb-6 text-justify" style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}>
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* 6 Contact Section */}
        <ConsultationFormSection id="consultation" />


      </main >
      <Footer />
    </div >
  );
};

export default TestsEauPage;
