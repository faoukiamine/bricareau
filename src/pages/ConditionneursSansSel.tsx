import React, { useEffect } from "react";
import Header from "@/components/Header";
import GlobalBreadcrumbs from "@/components/GlobalBreadcrumbs";
import Footer from "@/components/Footer";
import TestimonialsSection from "@/components/TestimonialsSection";
import { Button } from "@/components/ui/button";
import heroGirl from "@/assets/cute-little-girl-washing-hands.jpg";
import sereneLite from "@/assets/Système+de+filtration+Serene+Lite.webp";
import conditionneurImg from "@/assets/Gemini_Generated_Image_edgz5sedgz5sedgz.png";
import testStripImg from "@/assets/Using-a-strip-test-for-water-quality.webp";
import applianceDamageImg from "@/assets/tarte-chauffe-eau.jpg";
import { softenerImg as residentialWaterSoftenerImg } from "./Blog pages/Comment régler la dureté de votre adoucisseur ";
import { adoucisseurImg as adoucisseurFosseImg } from "./Blog pages/Adoucisseur-deau- et-fosse-septique--Mythes-et-réalités";
import { conditionneursImg } from "./Blog pages/Adoucisseur avec sel ou sans sel";
import {
  Leaf,
  ChevronRight,
  TestTube,
  Home,
  ArrowRight,
  Heart,
  HeartPulse,
  Sprout,
  Sparkles,
  Search,
  Check,
  Phone,
  ShieldCheck,
  CircleDollarSign,
  Wrench,
  Award,
  TrendingUp,
  Zap,
  Droplets,
  ZapOff
} from "lucide-react";
import eauDePuitsImg from "@/assets/185091336.jpg";
import { NavLink } from "@/components/NavLink";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import ConsultationFormSection from "@/components/ConsultationFormSection";


const whyChoose = [
  {
    icon: HeartPulse,
    title: "Zéro sodium",
    description: "Les adoucisseurs à échange d'ions remplacent les minéraux sains par du sodium, ce qui peut impacter votre santé. Notre technologie cristallise le calcaire sans jamais ajouter de sel, offrant une eau parfaite pour les régimes pauvres en sodium et sans arrière-goût salé."
  },
  {
    icon: Sprout,
    title: "Zéro rejet d'eau",
    description: "Contrairement aux adoucisseurs traditionnels, notre système ne gaspille aucune goutte d'eau pour se régénérer. Il élimine totalement les rejets de saumure polluante, préservant ainsi l'équilibre biologique de vos fosses septiques et protégeant durablement les écosystèmes locaux et les nappes phréatiques."
  },
  {
    icon: ShieldCheck,
    title: "Zéro tartre",
    description: "Notre solution neutralise le calcaire avant qu'il ne s'incruste, formant une barrière protectrice dans toute votre plomberie. Vous prolongez considérablement la durée de vie de vos chauffe-eaux et électroménagers, tout en maintenant leur rendement énergétique optimal et en évitant les panes coûteuses."
  }
];

const faqs = [
  {
    question: "Qu'est-ce qu'un conditionneur d'eau sans sel ?",
    answer: "Contrairement à l'adoucisseur, le conditionneur ne retire pas les minéraux. Il utilise une technologie de cristallisation assistée par modèle (TAC) pour transformer les minéraux de dureté en cristaux microscopiques inactifs qui ne peuvent plus adhérer aux surfaces."
  },
  {
    question: "Quelle est la principale différence avec un adoucisseur avec sel ?",
    answer: "L'adoucisseur remplace le calcium par du sodium (échange d'ions), ce qui rend l'eau 'glissante'. Le conditionneur conserve les minéraux mais neutralise leur pouvoir incrustant. Il n'utilise ni sel, ni électricité, et ne rejette pas d'eau."
  },
  {
    question: "Quels sont les avantages écologiques de ce système ?",
    answer: "C'est la solution la plus verte : zéro rejet de saumure dans les nappes phréatiques, zéro consommation d'eau pour le nettoyage, et aucune électricité requise. C'est idéal pour les zones soumises à des restrictions environnementales."
  },
  {
    question: "Est-ce que l'eau procure la même sensation de 'douceur' ?",
    answer: "Non. Comme les minéraux sont toujours présents, vous n'aurez pas la sensation glissante ou savonneuse typique de l'eau adoucie au sel. Cependant, l'eau sera beaucoup moins agressive pour votre peau et vos cheveux que l'eau dure brute."
  },
  {
    question: "Le calcaire va-t-il disparaître de ma bouilloire ou de ma douche ?",
    answer: "Le conditionneur prévient l'accumulation de calcaire dur à l'intérieur de votre plomberie et de votre chauffe-eau. En surface (verre, chrome), vous pourriez voir une légère poussière blanche facile à essuyer, car le calcaire ne peut plus s'incrustrer solidement."
  },
  {
    question: "Est-ce efficace contre une eau extrêmement dure ?",
    answer: "Les conditionneurs sont excellents pour une dureté modérée à élevée. Pour une eau extrêmement dure (plus de 25-30 grains), un adoucisseur traditionnel à sel reste souvent la solution la plus recommandée pour un confort optimal."
  },
  {
    question: "Quels problèmes le conditionneur résout-il en priorité ?",
    answer: "Il protège efficacement vos investissements : chauffe-eau, lave-vaisselle, et tuyauterie. Il élimine le tartre existant au fil du temps et empêche la formation de nouveaux dépôts calcaires corrosifs."
  },
  {
    question: "Y a-t-il un entretien régulier à prévoir ?",
    answer: "C'est l'un des plus grands avantages : aucun sel à porter, aucune programmation à vérifier. Seul le média filtrant interne doit être remplacé, généralement tous les 3 à 5 ans selon votre consommation d'eau."
  },
  {
    question: "L'eau traitée est-elle meilleure pour la santé ?",
    answer: "Oui, car elle conserve le calcium et le magnésium naturels dont votre corps a besoin, sans ajouter de sodium (sel). C'est l'option préférée de ceux qui suivent un régime pauvre en sel ou qui aiment le goût naturel de l'eau minérale."
  },
  {
    question: "Puis-je l'installer sur une eau de puits ?",
    answer: "Oui, mais une analyse préalable est nécessaire. Le fer, le manganèse ou le cuivre peuvent empoisonner le média TAC. Si votre eau de puits contient ces métaux, des filtres de prétraitement seront nécessaires."
  },
  {
    question: "Est-ce que le système réduit la pression d'eau ?",
    answer: "Absolument pas. Nos systèmes sont conçus pour offrir un débit élevé avec une perte de pression négligeable, garantissant que vous ne sentirez aucune différence sous la douche."
  },
  {
    question: "Faut-il une prise électrique à proximité ?",
    answer: "Non. Le système fonctionne uniquement avec la pression de l'eau entrante. C'est une solution passive qui ne tombera jamais en panne à cause d'un problème électronique ou d'une piscine de courant."
  },
  {
    question: "Est-ce que cela élimine les taches sur la vaisselle ?",
    answer: "Il réduit considérablement les résidus incrustés. Les traces résiduelles sur les verres sont transformées en une fine poudre de minéraux neutralisés qui s'enlève d'un simple coup de linge, contrairement au tartre dur."
  },
  {
    question: "Quelle est la durée de vie du réservoir ?",
    answer: "Le réservoir robuste Bricareau est conçu pour durer plus de 20 ans. Seul le média actif à l'intérieur est considéré comme un consommable à long terme."
  },
  {
    question: "Quelle est la garantie offerte par Bricareau ?",
    answer: "Nous offrons une garantie de satisfaction ainsi qu'une protection de 10 ans sur le réservoir et les composants structurels, assortie de notre service après-vente légendaire."
  }
];

const ConditionneursSansSel = () => {
  const [showAllFaqs, setShowAllFaqs] = React.useState(false);
  useEffect(() => {
    document.title = "Conditionneur d'eau sans sel | L'anti-tartre écologique";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Éliminez le calcaire sans sel ni électricité. Découvrez nos conditionneurs d'eau écologiques TAC pour une maison sans tartre et une eau pure.");
    }

    // OG Tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", "Conditionneur d'eau sans sel | Anti-tartre Écologique");
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", "La technologie verte pour neutraliser le calcaire. Zéro sel, zéro électricité, protection maximale pour votre plomberie.");
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* 1. Hero Section */}
        <section className="relative lg:h-[650px] flex flex-col lg:items-center overflow-hidden bg-white text-slate-900 lg:text-white">
          <div className="absolute top-[30px] left-0 right-0 z-30 pointer-events-none hidden lg:block">
            <div className="container mx-auto px-4 lg:px-6 pointer-events-auto">
              <GlobalBreadcrumbs variant="dark" />
            </div>
          </div>
          <div className="relative lg:absolute lg:inset-0 h-[350px] sm:h-[450px] lg:h-full w-full lg:z-0 overflow-hidden">
            <img
              src={heroGirl}
              alt="Petite fille se lavant les mains dans une eau traitée sans sel - Conditionneur d'eau écologique Bricareau"
              className="w-full h-full object-cover object-[center_35%]"
            />
            <div className="hidden lg:block absolute inset-0 bg-black/40 lg:bg-gradient-to-r lg:from-black/60 lg:to-transparent" />
            <div className="hidden lg:block absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-white via-white/10 to-transparent" />
            <div className="hidden lg:block absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white/90 via-white/40 to-transparent" />
          </div>

          <div className="container relative z-10 mx-auto px-4 h-full flex items-center lg:px-6">
            <div className="max-w-2xl lg:text-white py-12 lg:py-0">
              <span className="text-sm font-bold uppercase tracking-widest mb-4 block text-blue-600 lg:text-blue-300 animate-pulse">
                NOUVEAU CHEZ BRICAREAU
              </span>
              <h1
                className="text-[48px] md:text-[48px] leading-[1.1] md:leading-[1.2] mb-4 lg:mb-8 tracking-tighter text-slate-900 lg:text-white text-justify lg max-w-xl"
                style={{
                  fontWeight: 600
                }}
              >
                Conditionneur d'eau sans sel, l'anti-tartre écologique par excellence.
              </h1>
              <p className="font-light text-slate-600 lg:text-white/95 mb-8 max-w-xl text-left lg:text-justify text-lg leading-relaxed">
                Neutralisez le calcaire sans sel, sans électricité et sans gaspillage d'eau. Notre technologie avancée TAC protège votre plomberie tout en préservant les minéraux essentiels à votre santé.
              </p>
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 h-14 shadow-lg shadow-blue-200"
                asChild
              >
                <NavLink to="/consultation">Planifiez une consultation gratuite</NavLink>
              </Button>
            </div>
          </div>
        </section>

        {/* 2. The Problem Section - Creative Diagnostic Bento */}
        <section className="py-32 bg-slate-50 relative overflow-hidden">
          {/* Background Decorative Elements */}
          <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-40"></div>
          <div className="absolute -bottom-24 -right-24 text-[20rem] font-black text-slate-200/40 select-none pointer-events-none hidden lg:block tracking-tighter">
            CALCAIRE
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-20">
              <h2 className="text-slate-900 mb-6 text-[42px] leading-[42px]">
                <span className="font-light block">Ce que l'eau dure </span>
                <span className="font-bold text-blue-600">coûte réellement </span>
                <span className="font-light">à votre foyer.</span>
              </h2>
              <p className="text-slate-500 font-light text-xl max-w-2xl mx-auto leading-relaxed">
                Le calcaire n'est pas un simple dépôt calcaire ; c'est un agent d'érosion silencieux qui dégrade vos équipements jour après jour.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {/* Main Image Card */}
              <div className="md:col-span-2 md:row-span-2 group relative overflow-hidden rounded-[2.5rem] bg-white shadow-2xl transition-all duration-700 hover:shadow-blue-200/50">
                <img
                  src={applianceDamageImg}
                  alt="Inspection d'un chauffe-eau entartré - Dégâts du calcaire"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                <div className="absolute top-6 left-6 flex gap-2">
                  <span className="bg-red-500/90 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter animate-pulse">
                    Alerte : Dégâts Critiques
                  </span>
                </div>
                <div className="absolute bottom-8 left-8 right-8">
                  <h4 className="text-white text-2xl font-bold mb-2">Usure Prématurée</h4>
                  <p className="text-white/70 font-light text-sm">Coup d'arrêt sur l'efficacité de vos chauffe-eaux.</p>
                </div>
              </div>

              {/* Energy Score Card */}
              <div className="md:col-span-1 bg-blue-600 rounded-[2.5rem] p-8 text-white flex flex-col justify-between shadow-xl shadow-blue-200 hover:-translate-y-2 transition-all duration-500 relative overflow-hidden group">
                <ZapOff className="absolute -right-6 -top-6 w-32 h-32 opacity-10 rotate-12 group-hover:rotate-45 transition-transform duration-700" />
                <div className="relative z-10">
                  <span className="text-blue-100/60 text-[10px] font-bold uppercase tracking-widest mb-2 block">Surconsommation</span>
                  <div className="text-5xl font-black mb-1">+25%</div>
                  <div className="text-blue-100 text-sm font-light">de factures énergétiques liées au tartre.</div>
                </div>
                <div className="relative z-10 mt-6 pt-6 border-t border-white/20">
                  <p className="text-xs font-bold text-blue-200 uppercase tracking-tighter">Impact Énergétique</p>
                </div>
              </div>

              {/* Plumbing Card */}
              <div className="md:col-span-1 bg-white border border-slate-200 rounded-[2.5rem] p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group">
                <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-500">
                  <Wrench className="w-6 h-6 text-slate-400 group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">Tuyauterie</h4>
                <p className="text-slate-500 font-light text-sm">Le calcaire réduit le débit et favorise la corrosion interne par points.</p>
              </div>

              {/* Cleaning Card */}
              <div className="md:col-span-1 bg-white border border-slate-200 rounded-[2.5rem] p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group">
                <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-500">
                  <Sparkles className="w-6 h-6 text-slate-400 group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">Nettoyage</h4>
                <p className="text-slate-500 font-light text-sm">Traces blanches et ternissement irréparable de vos surfaces.</p>
              </div>

              {/* Hidden Costs Card */}
              <div className="md:col-span-1 bg-white border border-slate-200 rounded-[2.5rem] p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group relative overflow-hidden">
                <div className="absolute right-0 top-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                   <TrendingUp className="w-12 h-12 text-slate-900" />
                </div>
                <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-500">
                  <CircleDollarSign className="w-6 h-6 text-slate-400 group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">Coûts Cachés</h4>
                <p className="text-slate-500 font-light text-sm">Réduction drastique de la durée de vie de vos équipements coûteux.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Why Choose Section - Unified Layout */}
        <section className="py-24 bg-slate-50 relative pointer-events-auto border-t border-slate-200">
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <span className="text-blue-600 font-bold tracking-widest text-xs uppercase mb-4 block">
                Prévention du tartre
              </span>
              <h2 className="text-slate-900 mb-6 text-[42px] leading-[42px]">
                <span className="font-light block">Pourquoi choisir un </span>
                <span className="font-bold text-blue-600">conditionneur d'eau sans sel ?</span>
              </h2>
              <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full opacity-20" />
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="bg-white rounded-[3.5rem] shadow-2xl shadow-blue-200/20 overflow-hidden border border-slate-100 flex flex-col md:flex-row transition-all duration-700 hover:shadow-blue-200/40 group">
                {whyChoose.map((item, idx) => (
                  <div 
                    key={idx} 
                    className="flex-1 p-10 md:p-14 flex flex-col items-center text-center relative group/item"
                  >
                    {/* Vertical Divider */}
                    {idx < whyChoose.length - 1 && (
                      <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-2/3 bg-slate-100"></div>
                    )}
                    {/* Horizontal Divider for Mobile */}
                    {idx < whyChoose.length - 1 && (
                      <div className="md:hidden absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-slate-100"></div>
                    )}

                    <div className="w-20 h-20 rounded-3xl bg-blue-50 text-blue-600 flex items-center justify-center mb-10 group-hover/item:bg-blue-600 group-hover/item:text-white transition-all duration-500 shadow-sm group-hover/item:shadow-blue-600/30 group-hover/item:rotate-6">
                      <item.icon className="h-10 w-10 transition-transform duration-500" />
                    </div>

                    <h3 className="text-slate-900 text-2xl font-bold mb-6 group-hover/item:text-blue-600 transition-colors duration-300 tracking-tight">
                      {item.title}
                    </h3>

                    <p className="text-slate-500 font-light leading-relaxed text-sm md:text-base text-justify md:text-center px-2">
                      {item.description}
                    </p>

                    {/* Subtle Side Glow on Hover */}
                    <div className="absolute inset-0 bg-blue-50/0 group-hover/item:bg-blue-50/30 transition-colors duration-500 pointer-events-none -z-10"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 4. Product Details Section - Ultra Modern */}
        <section className="py-24 relative overflow-hidden bg-gradient-to-br from-white to-blue-50/30">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-20">

              {/* Text Content */}
              <div className="lg:w-1/2">
                <div className="mb-8">
                  <span className="text-blue-600 font-bold tracking-widest text-xs uppercase mb-4 block">Innovation Durable</span>
                  <h2
                    className="text-[42px] md:text-[42px] text-slate-900 mb-6"
                  >
                    Choisissez une <span className="text-[42px] md:text-[42px] text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">protection 100% écologique</span> et préservez les minéraux essentiels de votre eau.
                  </h2>
                  <p className="text-slate-600 mb-8 font-light max-w-lg text-left lg:text-justify text-lg leading-relaxed">
                    Le conditionneur d'eau sans sel de Bricareau est une alternative efficace et écologique
                    à l'adoucisseur traditionnel. Il protège votre maison du calcaire sans jamais avoir à soulever un sac de sel. Une solution durable, autonome et efficace.
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    { title: "Sécurité maximale", desc: "Protection active contre les sédiments et les impuretés pour toute la famille." },
                    { title: "Économies réelles", desc: "Réduisez les coûts d'entretien et prolonge la vie des appareils jusqu'à 50%." },
                    { title: "Installation simplifiée", desc: "S'installe facilement sur l'arrivée d'eau principale sans travaux majeurs." },
                    { title: "Qualité supérieure", desc: "Conserve l'eau potable et riche en minéraux naturels tout en éliminant le tartre." }
                  ].map((item, i) => (
                    <div key={i} className="group/item">
                      <h3 className="mb-1 text-blue-600 flex items-center gap-3 font-bold text-xl transition-colors duration-300">
                        <div className="w-2 h-2 rounded-full bg-blue-600/30 group-hover/item:bg-blue-600 transition-colors duration-500" /> {item.title}
                      </h3>
                      <div className="pl-5 border-l-2 border-blue-600/10 group-hover/item:border-blue-600 transition-colors duration-500 ml-1">
                        <p className="text-base text-slate-500 text-justify font-light leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image Content */}
              <div className="lg:w-1/2 relative">
                <div className="relative z-10 animate-in fade-in zoom-in duration-1000">
                  <div className="absolute inset-0 bg-blue-500/5 rounded-full blur-3xl transform scale-90"></div>
                  <img
                    src={conditionneurImg}
                    alt="Conditionneur d'eau sans sel professionnel Bricareau - Système anti-tartre haute performance"
                    className="relative w-full max-w-[550px] mx-auto drop-shadow-2xl hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
                {/* Decorative Elements */}
                <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-yellow-400/20 rounded-full blur-2xl"></div>
                <div className="absolute top-1/2 left-0 w-24 h-24 bg-blue-400/20 rounded-full blur-2xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Testimonials Section */}
        <TestimonialsSection
          filterProduct="/conditionneurs-sans-sel"
          title={
            <>
              <h2 className="text-slate-900 mb-6 text-[42px] leading-[42px]">
                <span className="font-light block">Le standard pro,</span>
                <span className="font-bold text-blue-600">l’honnêteté en prime.</span>
              </h2>
            </>
          }
        />
        {/* 9. CTA Section - Premium Immersive */}
        <section className="relative py-32 overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src={eauDePuitsImg}
              alt="Expert Bricareau en traitement d'eau de puits"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-900/90 to-blue-800/80 backdrop-blur-[2px]" />
          </div>

          <div className="container mx-auto px-6 relative z-10 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-white mb-6">
                <span className="text-[42px] font-light leading-tight block tracking-tight opacity-90 italic">Besoin d'aide avec votre eau ?</span>
              </h2>

              <p className="text-blue-100/80 font-light text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
                Discutez avec un expert en un clic. Disponible par téléphone ou à domicile selon vos préférences.
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
              </div>
              <p className="mt-8 text-white/50 text-sm font-light">
                Disponible 7j/7 — Réponse en moins de 24h
              </p>
            </div>
          </div>
        </section>

        {/* 7. FAQ Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-left mb-16">
              <h2
                className="text-slate-900 mb-8 text-left"
              >
                <span className="text-[42px] md:text-[42px] font-light leading-[1.1] md:leading-[42px] block">Pour vous éclairer</span>
                <span className="text-[42px] md:text-[42px] font-normal leading-[1.1] md:leading-[42px] block">Questions fréquentes</span>
              </h2>
              <div className="w-24 h-1 bg-blue-600"></div>
            </div>

            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {faqs.slice(0, showAllFaqs ? undefined : 6).map((faq, idx) => (
                  <AccordionItem key={idx} value={`item-${idx}`} className="border-b-slate-100 px-4">
                    <AccordionTrigger className="text-left text-base font-medium leading-6 hover:no-underline py-8 text-slate-800">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-base font-light leading-6 text-slate-500 pb-8 text-justify">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
              <div className="mt-12 text-center">
                <Button
                  onClick={() => setShowAllFaqs(!showAllFaqs)}
                  className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-12 h-14 shadow-lg shadow-blue-200"
                >
                  {showAllFaqs ? "Voir moins" : "Voir plus de questions"}
                </Button>
              </div>
            </div>
          </div>
        </section>


        {/* 8. Resources Section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-left mb-16">
              <h2
                className="text-slate-900 mb-8 text-left"
              >
                <span className="text-[42px] md:text-[42px] font-normal leading-[1.1] md:leading-[42px] block">Ressources</span>
              </h2>
              <div className="w-24 h-1 bg-blue-600"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Adoucisseur sans sel vs avec sel : la vérité technique",
                  img: residentialWaterSoftenerImg,
                  link: "/adoucisseur-sans-sel-vs-avec-sel-verite-technique"
                },
                {
                  title: "Adoucisseur d'eau et fosse septique : compatible ou non ?",
                  img: adoucisseurFosseImg,
                  link: "/adoucisseur-deau-et-fosse-septique-mythes-et-realites"
                },
                {
                  title: "Conditionneur d'eau : Une alternative écologique à l'adoucisseur sans sel",
                  img: conditionneursImg,
                  link: "/conditionneur-deau-une-alternative-ecologique-a-ladoucisseur-sans-sel"
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

export default ConditionneursSansSel;
