import React, { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TestimonialsSection from "@/components/TestimonialsSection";
import { Button } from "@/components/ui/button";
import heroGirl from "@/assets/cute-little-girl-washing-hands.jpg";
import sereneLite from "@/assets/Système+de+filtration+Serene+Lite.webp";
import conditionneurImg from "@/assets/Gemini_Generated_Image_edgz5sedgz5sedgz.png";
import {
  Leaf,
  ChevronRight,
  TestTube,
  Home,
  ArrowRight,
  Heart,
  ShieldCheck,
  HeartPulse,
  Sprout,
  Sparkles
} from "lucide-react";
import { NavLink } from "@/components/NavLink";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
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
    icon: Sparkles,
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
    answer: "Le conditionneur prévient l'accumulation de calcaire dur à l'intérieur de votre plomberie et de votre chauffe-eau. En surface (verre, chrome), vous pourriez voir une légère poussière blanche facile à essuyer, car le calcaire ne peut plus s'incruster solidement."
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
    answer: "Non. Le système fonctionne uniquement avec la pression de l'eau entrante. C'est une solution passive qui ne tombera jamais en panne à cause d'un problème électronique ou d'une panne de courant."
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

const resources = [
  {
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop",
    title: "Guide d'installation de l'adoucisseur",
    description: "Découvrez comment nos experts assurent une installation parfaite de votre système."
  },
  {
    image: "https://images.unsplash.com/photo-1595152772835-2196740b6ca0?q=80&w=800&auto=format&fit=crop",
    title: "Solution contre l'eau dure : Guide complet",
    description: "Tout ce que vous devez savoir pour protéger votre maison du calcaire."
  },
  {
    image: "https://images.unsplash.com/photo-1542013936693-884638332954?q=80&w=800&auto=format&fit=crop",
    title: "Comment tester la dureté de son eau",
    description: "Des étapes simples pour comprendre la qualité de l'eau à votre robinet."
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
        {/* 1.Hero Section */}
        <section className="relative h-[850px] flex items-center overflow-hidden -mt-[104px] pt-[104px]">
          <div className="absolute inset-0 z-0">
            <img
              src={heroGirl}
              alt="Petite fille se lavant les mains dans une eau traitée sans sel - Conditionneur d'eau écologique Bricareau"
              className="w-full h-full object-cover object-[center_35%]"
            />
            <div className="absolute inset-0 bg-black/40 lg:bg-gradient-to-r lg:from-black/60 lg:to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-white via-white/10 to-transparent" />
            {/* Brightening Start 1/3 Right */}
            <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white/90 via-white/40 to-transparent" />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-2xl text-white">
              <span className="text-sm font-bold uppercase tracking-widest mb-4 block animate-color-pulse">
                NOUVEAU CHEZ BRICAREAU
              </span>
              <h1
                className="text-[32px] md:text-[48px] leading-[32px] md:leading-[48px] font-light mb-8 tracking-tighter text-white"
                style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
              >
                <span className="font-bold text-blue-400">Conditionneur d'eau sans sel</span> <br />
                <span className="font-bold">L'anti-tartre écologique par excellence.</span>
              </h1>
              <p className="text-lg font-light leading-relaxed text-white/95 mb-8 max-w-xl text-justify">
                Neutralisez le calcaire sans sel, sans électricité et sans gaspillage d'eau. Notre technologie avancée TAC protège votre plomberie tout en préservant les minéraux essentiels à votre santé.
              </p>
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 h-14 shadow-lg shadow-blue-200"
                style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                asChild
              >
                <a href="#consultation">Planifiez une consultation gratuite</a>
              </Button>
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
                fill="#F8FAFC"
                transform="rotate(180 600 60)"
              ></path>
            </svg>
          </div>
        </section>

        {/* 2. Why Choose Section - Ultra Modern */}
        <section className="py-24 bg-slate-50 relative">
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <span className="text-blue-600 font-bold tracking-widest text-xs uppercase mb-4 block">
                Prévention du tartre
              </span>
              <h2 className="text-[32px] md:text-[48px] font-normal text-slate-900 mb-8 leading-[48px] tracking-tight">
                Pourquoi choisir un conditionneur <br />d'eau sans sel ?
              </h2>
              <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full opacity-20" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {whyChoose.map((item, idx) => (
                <div key={idx} className="group relative bg-white rounded-[2.5rem] p-10 shadow-[0_20px_50px_rgba(8,_112,_184,_0.07)] hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.14)] transition-all duration-500 hover:-translate-y-2 border border-slate-100 hover:border-blue-100">
                  <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-blue-600/30 group-hover:rotate-3">
                    <item.icon className="h-8 w-8 transition-transform duration-500" />
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {item.title}
                  </h3>

                  <p className="text-slate-500 text-lg leading-relaxed font-light text-justify group-hover:text-slate-600 transition-colors duration-300">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Product Details Section - Ultra Modern */}
        <section className="py-24 relative overflow-hidden bg-gradient-to-br from-white to-blue-50/30">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-20">

              {/* Text Content */}
              <div className="lg:w-1/2">
                <div className="mb-12">
                  <span className="text-blue-600 font-bold tracking-widest text-xs uppercase mb-4 block">Innovation Durable</span>
                  <h2
                    className="text-[32px] md:text-[34px] font-bold text-slate-900 mb-8 leading-[1.1] tracking-tight"
                    style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                  >
                    Choisissez une protection 100% écologique et préservez les minéraux essentiels de votre eau.
                  </h2>
                  <p className="text-lg text-slate-600 mb-10 leading-relaxed font-light max-w-lg">
                    Le conditionneur d'eau sans sel de Bricareau est une alternative efficace et écologique
                    à l'adoucisseur traditionnel. Il protège votre maison du calcaire sans jamais avoir à soulever un sac de sel. Une solution durable, autonome et efficace.
                  </p>

                  <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-10 py-7 text-lg transition-all duration-300 shadow-xl shadow-blue-600/20 hover:shadow-blue-600/40 group">
                    <span className="mr-2">Voir toutes les options</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>

                {/* Features Grid - Modern Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { c: "01", t: "Économies", d: "Réduit les coûts d'entretien et prolonge la vie des appareils." },
                    { c: "02", t: "Installation", d: "S'installe facilement sur l'arrivée d'eau principale." },
                    { c: "03", t: "Qualité", d: "Conserve l'eau potable et riche en minéraux naturels." }
                  ].map((item, idx) => (
                    <div key={idx} className="group relative pt-8 pb-6 px-6 bg-white rounded-[2rem] shadow-sm border border-blue-200 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-500 hover:-translate-y-1">
                      <span className="absolute top-4 right-6 text-4xl font-black text-slate-100 group-hover:text-blue-50 transition-colors duration-500 select-none">
                        {item.c}
                      </span>
                      <h4 className="text-xl font-bold text-slate-900 mb-3 relative z-10">{item.t}</h4>
                      <p className="text-sm text-slate-500 font-light leading-relaxed relative z-10 text-justify">
                        {item.d}
                      </p>
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
                    className="relative w-full max-w-[500px] mx-auto drop-shadow-2xl hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
                {/* Decorative Elements */}
                <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-yellow-400/20 rounded-full blur-2xl"></div>
                <div className="absolute top-1/2 left-0 w-24 h-24 bg-blue-400/20 rounded-full blur-2xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Testimonials Section */}
        <TestimonialsSection />

        {/* 5. CTA Section */}
        <section className="bg-primary py-16 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Besoin d'aide avec votre eau ?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
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

        {/* 6. FAQ Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
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
                {faqs.slice(0, showAllFaqs ? undefined : 6).map((faq, idx) => (
                  <AccordionItem key={idx} value={`item-${idx}`} className="border-b-slate-100 px-4">
                    <AccordionTrigger className="text-left text-base font-medium leading-6 hover:no-underline py-8 text-slate-800" style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}>
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-base font-light leading-6 text-slate-500 pb-8 text-justify" style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}>
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
              <div className="mt-12 text-center">
                <Button
                  onClick={() => setShowAllFaqs(!showAllFaqs)}
                  className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-12 h-14 shadow-lg shadow-blue-200"
                  style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                >
                  {showAllFaqs ? "Voir moins" : "Voir plus de questions"}
                </Button>
              </div>
            </div>
          </div>
        </section>


        {/* 7. Resources Section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-left mb-16">
              <h2
                className="text-slate-900 tracking-tighter mb-8 text-left"
                style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
              >
                <span className="text-[32px] md:text-[60px] font-normal leading-[1.1] md:leading-[60px] block">Ressources</span>
              </h2>
              <div className="w-24 h-1 bg-blue-600"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {resources.map((res, idx) => (
                <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer group flex flex-col h-full border border-gray-100">
                  <div className="h-56 overflow-hidden">
                    <img
                      src={res.image}
                      alt={`${res.title} - Expertise Bricareau en traitement d'eau sans sel`}
                      className="w-full h-full object-cover transition-transform group-hover:scale-110"
                    />
                  </div>
                  <div className="p-8 text-left border-t-2 border-transparent group-hover:border-blue-600 transition-colors flex flex-col flex-grow">
                    <h3 className="text-xl font-medium mb-4 group-hover:text-blue-600 transition-colors">{res.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">{res.description}</p>
                    <div className="text-blue-600 font-bold flex items-center gap-2 group-hover:underline text-sm">
                      Lire <ChevronRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. Consultation Form Section */}
        <ConsultationFormSection id="consultation" />
      </main>

      <Footer />
    </div>
  );
};

export default ConditionneursSansSel;
