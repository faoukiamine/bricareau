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
  Home
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
    icon: Home,
    title: "Maison plus propre",
    description: "Des surfaces étincelantes et des cheveux plus soyeux sans les résidus de calcaire."
  },
  {
    icon: TestTube,
    title: "D'eau plus douce",
    description: "Une sensation de douceur sur la peau et une protection accrue pour vos appareils."
  },
  {
    icon: Leaf,
    title: "Respectueux de l'environnement",
    description: "Pas de rejet de sel dans l'environnement et aucune consommation d'eau supplémentaire."
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
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        {/* 1.Hero Section */}
        <section className="relative h-[850px] flex items-center overflow-hidden -mt-[104px] pt-[104px]">
          <div className="absolute inset-0 z-0">
            <img
              src={heroGirl}
              alt="Petite fille se lavant les mains avec l'eau douce"
              className="w-full h-full object-cover"
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
                className="text-[40px] md:text-[60px] leading-[1.1] md:leading-[60px] font-light mb-8 tracking-tighter text-white"
                style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
              >
                <span className="font-bold">Lutter contre le calcaire ?</span> <span className="font-bold"><br />Il y a une autre solution...</span>
              </h1>
              <p className="font-light text-[20px] leading-[28px] text-white/95 mb-8 max-w-xl">
                Protégez votre plomberie et profitez d'une eau plus saine grâce à notre technologie
                de conditionnement avancée, sans sel et sans entretien.
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
              className="relative block w-full h-[80px] md:h-[150px]"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                fill="#2563EB"
                transform="rotate(180 600 60)"
              ></path>
            </svg>
          </div>
        </section>

        {/* 2. Why Choose Section */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-[32px] md:text-[48px] font-normal text-white mb-8 leading-[1.2] md:leading-[48px] tracking-tighter text-center">
                Pourquoi choisir un conditionneur <br />d'eau sans sel ?
              </h2>
              <div className="w-20 h-1 bg-white mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              {whyChoose.map((item, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center mb-6">
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                  <p className="opacity-70 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Product Details Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2">
                <h2 className="text-[32px] md:text-[48px] font-normal text-slate-900 mb-8 leading-[1.2] md:leading-[48px] tracking-tighter text-left">
                  Une protection maximale <br /> pour votre plomberie
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Le conditionneur d'eau sans sel de Bricareau est une alternative efficace et écologique
                  à l'adoucisseur traditionnel. Il protège vos tuyaux et appareils sans ajouter de sel
                  ni rejeter d'eau, idéal pour les foyers soucieux de leur empreinte écologique.
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 mb-12">
                  Voir toutes les options
                </Button>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { c: "01", t: "Économies", d: "Réduit les coûts d'entretien et prolonge la vie des appareils." },
                    { c: "02", t: "Installation", d: "S'installe facilement sur l'arrivée d'eau principale." },
                    { c: "03", t: "Qualité", d: "Conserve l'eau potable et riche en minéraux naturels." }
                  ].map((item, idx) => (
                    <div key={idx} className="border-t border-gray-200 pt-6">
                      <span className="text-blue-600 font-bold mb-2 block">{item.c}</span>
                      <h4 className="font-bold mb-2">{item.t}</h4>
                      <p className="text-sm text-gray-500">{item.d}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="bg-gray-100 rounded-2xl p-8 flex items-center justify-center min-h-[500px]">
                  <img
                    src={conditionneurImg}
                    alt="Conditionneur d'eau professionnel"
                    className="max-h-[650px] object-contain drop-shadow-2xl"
                  />
                </div>
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
                {faqs.map((faq, idx) => (
                  <AccordionItem key={idx} value={`item-${idx}`} className="border-b-gray-200">
                    <AccordionTrigger className="text-left font-medium text-lg hover:no-underline py-6">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 text-lg leading-relaxed pb-6">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
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
                      alt={res.title}
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
