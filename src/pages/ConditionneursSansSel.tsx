import React, { useEffect } from "react";
import Header from "@/components/Header";
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
              alt="Conditionneur d'eau écologique Bricareau"
              className="w-full h-full object-cover object-[center_35%]"
            />
            <div className="hidden lg:block absolute inset-0 bg-black/40 lg:bg-gradient-to-r lg:from-black/60 lg:to-transparent" />
            <div className="hidden lg:block absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-white via-white/10 to-transparent" />
          </div>

          <div className="container relative z-10 mx-auto px-4 h-full flex items-center lg:px-6">
            <div className="max-w-2xl lg:text-white py-12 lg:py-0">
              <span className="text-sm font-bold uppercase tracking-widest mb-4 block text-blue-600 lg:text-blue-300">
                NOUVEAU CHEZ BRICAREAU
              </span>
              <h1 className="leading-[1.1] md:leading-[1.2] mb-4 lg:mb-8 tracking-tighter">
                Conditionneur d'eau sans sel, l'anti-tartre écologique.
              </h1>
              <p className="font-light text-slate-600 lg:text-white/95 mb-8 max-w-xl text-left lg:text-justify text-lg leading-relaxed">
                Neutralisez le calcaire sans sel, sans électricité et sans gaspillage d'eau. Notre technologie TAC protège votre plomberie tout en préservant les minéraux essentiels.
              </p>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 h-14" asChild>
                <NavLink to="/consultation">Planifiez une consultation gratuite</NavLink>
              </Button>
            </div>
          </div>
        </section>

        {/* 2. Problem Section */}
        <section className="py-32 bg-slate-50 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-20">
              <h2 className="text-slate-900 mb-6 leading-tight">
                Ce que l'eau dure <span className="text-blue-600">coûte réellement.</span>
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
                Pourquoi choisir le <span className="text-blue-600">sans sel ?</span>
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
                  Une protection <span className="font-bold text-blue-600">100% écologique.</span>
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

        {/* 5. Processus Section */}
        <section className="relative py-32 bg-white overflow-hidden">
            <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-slate-100 hidden lg:block" />
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-32 max-w-4xl mx-auto">
                    <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-xs font-black uppercase tracking-widest mb-6">
                        NOTRE FONCTIONNEMENT
                    </span>
                    <h2 className="text-slate-900 mb-6 text-[42px] leading-tight">
                        <span className="font-light block">Un service simple</span>
                        <span className="font-bold text-blue-600">& sans souci.</span>
                    </h2>
                </div>

                <div className="space-y-24 lg:space-y-0">
                    {[
                        { title: "Analyse d'eau", desc: "Identification précise de la chimie de votre eau.", img: process1 },
                        { title: "Conseil Expert", desc: "Choix de la technologie TAC adaptée à votre foyer.", img: process2 },
                        { title: "Installation", desc: "Mise en place rapide par nos techniciens certifiés.", img: process3 },
                        { title: "Sérénité", desc: "Protection durable contre le tartre, sans sel.", img: process4 }
                    ].map((step, idx) => (
                        <div key={idx} className={`group relative flex flex-col md:flex-row items-center gap-12 lg:gap-0 ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''} lg:min-h-[400px]`}>
                            <div className="w-full lg:w-1/2 flex justify-center p-4">
                                <div className="relative w-full max-w-md aspect-[4/3] rounded-[3rem] overflow-hidden shadow-xl">
                                    <img src={step.img} alt={step.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                    <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl font-bold text-blue-600">0{idx + 1}</div>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2 flex flex-col justify-center px-4 lg:px-20 text-center lg:text-left">
                                <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-600 transition-colors">{step.title}</h3>
                                <p className="text-slate-500 font-light text-lg">{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* 6. Testimonials */}
        <TestimonialsSection
          filterProduct="/conditionneurs-sans-sel"
          title={
            <>
              <span className="font-light block">Le standard pro,</span>
              <span className="font-bold text-blue-600 block">l’honnêteté en prime.</span>
            </>
          }
        />

        {/* 7. FAQ Section */}
        <section className="py-24 bg-white border-t border-slate-100">
          <div className="container mx-auto px-4">
            <div className="text-left mb-16 max-w-4xl mx-auto">
              <h2 className="text-slate-900 mb-8 text-[42px] font-light leading-tight">Questions <span className="font-bold text-blue-600">fréquentes</span></h2>
              <div className="w-24 h-1 bg-blue-600"></div>
            </div>
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible>
                {faqs.map((faq, idx) => (
                  <AccordionItem key={idx} value={`item-${idx}`} className="border-b-slate-100">
                    <AccordionTrigger className="text-left py-6">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-slate-500 font-light pb-6">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* 8. Resources Section */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12">Ressources</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Adoucisseur sans sel vs avec sel", img: residentialWaterSoftenerImg, link: "/adoucisseur-sans-sel-vs-avec-sel-verite-technique" },
                { title: "Fosse septique et adoucisseur", img: adoucisseurFosseImg, link: "/adoucisseur-deau-et-fosse-septique-mythes-et-realites" },
                { title: "L'alternative écologique", img: conditionneursImg, link: "/conditionneur-deau-une-alternative-ecologique-a-ladoucisseur-sans-sel" }
              ].map((art, i) => (
                <NavLink key={i} to={art.link} className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all group border border-slate-100">
                  <div className="h-56 overflow-hidden">
                    <img src={art.img} alt={art.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="p-8">
                    <h4 className="font-bold group-hover:text-blue-600 transition-colors mb-4">{art.title}</h4>
                    <span className="text-blue-600 font-bold flex items-center gap-2 text-sm">Lire <ChevronRight className="w-4 h-4" /></span>
                  </div>
                </NavLink>
              ))}
            </div>
          </div>
        </section>

        <ConsultationFormSection />
      </main>
      <Footer />
    </div>
  );
};

export default ConditionneursSansSel;
