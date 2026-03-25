import React, { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import GlobalBreadcrumbs from "@/components/GlobalBreadcrumbs";
import Footer from "@/components/Footer";
import TestimonialsSection from "@/components/TestimonialsSection";
import { Button } from "@/components/ui/button";
import heroGirl from "@/assets/cute-little-girl-washing-hands.jpg";
import conditionneurImg from "@/assets/Gemini_Generated_Image_edgz5sedgz5sedgz.png";
import applianceDamageImg from "@/assets/tarte-chauffe-eau.jpg";
import { softenerImg as residentialWaterSoftenerImg } from "./Blog pages/Comment régler la dureté de votre adoucisseur ";
import { adoucisseurImg as adoucisseurFosseImg } from "./Blog pages/Adoucisseur-deau- et-fosse-septique--Mythes-et-réalités";
import { conditionneursImg } from "./Blog pages/Adoucisseur avec sel ou sans sel";
import {
  ChevronRight,
  Sparkles,
  Wrench,
  HeartPulse,
  Sprout,
  ShieldCheck,
  CircleDollarSign,
  TrendingUp,
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
import process1 from "@/assets/2148563485.jpg";
import process2 from "@/assets/section-image-and-content-23.jpg";
import process3 from "@/assets/SERVICES.jpg";
import process4 from "@/assets/unnamed (2).jpg";

const whyChoose = [
  {
    icon: HeartPulse,
    title: "Zéro sodium",
    description: "Les adoucisseurs à échange d'ions remplacent les minéraux sains par du sodium, ce qui peut impacter votre santé. Notre technologie cristallise le calcaire sans jamais ajouter de sel, offrant une eau parfaite pour les régimes pauvres en sodium."
  },
  {
    icon: Sprout,
    title: "Zéro rejet d'eau",
    description: "Contrairement aux adoucisseurs traditionnels, notre système ne gaspille aucune goutte d'eau. Il élimine totalement les rejets de saumure, préservant ainsi l'équilibre de vos fosses septiques et l'environnement."
  },
  {
    icon: ShieldCheck,
    title: "Zéro tartre",
    description: "Notre solution neutralise le calcaire avant qu'il ne s'incruste, formant une barrière protectrice dans toute votre plomberie. Vous prolongez la durée de vie de vos chauffe-eaux et électroménagers."
  }
];

const faqs = [
  {
    question: "Qu'est-ce qu'un conditionneur d'eau sans sel ?",
    answer: "Contrairement à l'adoucisseur, le conditionneur ne retire pas les minéraux. Il utilise une technologie de cristallisation assistée par modèle (TAC) pour transformer les minéraux de dureté en cristaux microscopiques inactifs qui ne peuvent plus adhérer aux surfaces."
  },
  {
    question: "Quelle est la principale différence avec un adoucisseur avec sel ?",
    answer: "L'adoucisseur remplace le calcium par du sodium (échange d'ions). Le conditionneur conserve les minéraux mais neutralise leur pouvoir incrustant. Il n'utilise ni sel, ni électricité, et ne rejette pas d'eau."
  },
  {
    question: "Est-ce efficace contre une eau extrêmement dure ?",
    answer: "Les conditionneurs sont excellents pour une dureté modérée à élevée. Pour une eau extrêmement dure, un adoucisseur traditionnel à sel reste souvent recommandé pour un confort maximal."
  },
  {
    question: "Y a-t-il un entretien régulier à prévoir ?",
    answer: "C'est l'un des plus grands avantages : aucun sel à porter, aucune programmation à vérifier. Seul le média filtrant interne doit être remplacé, généralement tous les 3 à 5 ans."
  }
];

const ConditionneursSansSel = () => {
  const [showAllFaqs, setShowAllFaqs] = React.useState(false);

  useEffect(() => {
    document.title = "Conditionneur d'eau sans sel | L'anti-tartre écologique | Bricareau";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Éliminez le calcaire sans sel ni électricité. Découvrez nos conditionneurs d'eau écologiques TAC pour une maison sans tartre.");
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
             <Header />
             <main>
                <Hero 
                    image={heroGirl}
                    highlightedTitle="Conditionneur d'eau sans sel,"
                    mainTitle="l'anti-tartre écologique."
                    subtitle="Neutralisez le calcaire sans sel, sans électricité et sans gaspillage d'eau. Notre technologie TAC protège votre plomberie tout en préservant les minéraux essentiels."
                    showPhone={true}
                    showBreadcrumbs={true}
                    singleLineTitle={true}
                />

        {/* 2. Problem Section */}
        <section className="py-32 bg-slate-50 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-20">
              <h2 className="text slate-900 mb-6 leading-tight">
                <span className="font-light">Ce que l'eau dure </span>
                <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">coûte réellement.</span>
              </h2>
              <p className="text-slate-500 font-light text-xl max-w-2xl mx-auto leading-relaxed">
                Le calcaire dégrade vos équipements jour après jour. Protégez-les avec une solution efficace.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <div className="md:col-span-2 md:row-span-2 group relative overflow-hidden rounded-[2.5rem] bg-white shadow-2xl">
                <img src={applianceDamageImg} alt="Dégâts du calcaire" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <h4 className="text-2xl mb-2">Usure Prématurée</h4>
                  <p className="font-light text-sm opacity-80">Coup d'arrêt sur l'efficacité de vos chauffe-eaux.</p>
                </div>
              </div>

              <div className="md:col-span-1 bg-blue-600 rounded-[2.5rem] p-8 text-white flex flex-col justify-between shadow-xl">
                <ZapOff className="w-12 h-12 opacity-20" />
                <div>
                  <div className="text-5xl font-black mb-1">+25%</div>
                  <div className="text-blue-100 text-sm font-light">de factures énergétiques liées au tartre.</div>
                </div>
              </div>

              <div className="md:col-span-1 bg-white border border-slate-200 rounded-[2.5rem] p-8 hover:shadow-xl transition-all">
                <Wrench className="w-8 h-8 text-blue-600 mb-4" />
                <h4 className="card-title mb-2">Tuyauterie</h4>
                <p className="text-slate-500 text-sm font-light">Le calcaire réduit le débit et favorise la corrosion.</p>
              </div>

              <div className="md:col-span-1 bg-white border border-slate-200 rounded-[2.5rem] p-8 hover:shadow-xl transition-all">
                <Sparkles className="w-8 h-8 text-blue-600 mb-4" />
                <h4 className="card-title mb-2">Nettoyage</h4>
                <p className="text-slate-500 text-sm font-light">Traces blanches tenaces sur vos surfaces.</p>
              </div>

              <div className="md:col-span-1 bg-white border border-slate-200 rounded-[2.5rem] p-8 hover:shadow-xl transition-all">
                <CircleDollarSign className="w-8 h-8 text-blue-600 mb-4" />
                <h4 className="card-title mb-2">Coûts Cachés</h4>
                <p className="text-slate-500 text-sm font-light">Réduction de la durée de vie des équipements.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Why Choose Section */}
        <section className="py-24 bg-white border-t border-slate-100">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-slate-900 mb-6 leading-tight">
                <span className="font-light">Pourquoi choisir le </span><span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">conditionneur d'eau sans sel ?</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {whyChoose.map((item, idx) => (
                <div key={idx} className="p-10 bg-slate-50 rounded-[2.5rem] text-center hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-slate-100 group">
                  <div className="w-16 h-16 rounded-2xl bg-blue-600 text-white flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <item.icon className="w-8 h-8" />
                  </div>
                  <h3 className="card-title mb-4">{item.title}</h3>
                  <p className="text-slate-500 font-light text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Product Section */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2">
                <h2 className="text-[42px] leading-tight font-light mb-8">
                  Une protection <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">100% écologique.</span>
                </h2>
                <div className="space-y-6">
                  {[
                    { title: "Sérénité Totale", desc: "Aucun sac de sel à porter, aucune maintenance complexe." },
                    { title: "Santé Préservée", desc: "Conserve le calcium et magnésium naturels de votre eau." },
                    { title: "Économies Durables", desc: "Zéro consommation d'eau et d'électricité." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="mt-1"><ShieldCheck className="w-6 h-6 text-blue-600" /></div>
                      <div>
                        <h4 className="card-title">{item.title}</h4>
                        <p className="text-slate-500 font-light">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:w-1/2">
                <img src={conditionneurImg} alt="Conditionneur Bricareau" className="max-w-md mx-auto drop-shadow-2xl" />
              </div>
            </div>
          </div>
        </section>

        {/* 5. Resources Section */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="text-left mb-16">
              <h2
                className="text-slate-900 mb-8 text-left"
              >
                <span className="font-normal leading-[1.1] block">Ressources</span>
              </h2>
              <div className="w-24 h-1 bg-blue-600"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Adoucisseur sans sel vs avec sel", img: residentialWaterSoftenerImg, link: "/adoucisseur-sans-sel-vs-avec-sel-verite-technique" },
                { title: "Fosse septique et adoucisseur", img: adoucisseurFosseImg, link: "/adoucisseur-deau-et-fosse-septique-mythes-et-realites" },
                { title: "L'alternative écologique", img: conditionneursImg, link: "/adoucisseur-sans-sel-vs-avec-sel-verite-technique" }
              ].map((art, i) => (
                <NavLink key={i} to={art.link} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all group border border-gray-100 flex flex-col h-full">
                  <div className="h-56 overflow-hidden">
                    <img src={art.img} alt={art.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="p-8 text-left border-t-2 border-transparent group-hover:border-blue-600 transition-colors flex flex-col flex-grow">
                    <h4 className="mb-4 group-hover:text-blue-600 transition-colors tracking-tight font-medium text-base leading-6 text-[#0F1729]">{art.title}</h4>
                    <span className="text-blue-600 font-bold flex items-center gap-2 text-sm">Lire <ChevronRight className="w-4 h-4" /></span>
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
