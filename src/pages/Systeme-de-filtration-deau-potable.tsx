import Header from "@/components/Header";
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
  ShieldCheck,
  Droplets,
  Zap
} from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
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
    { feature: "Nombre d'étapes de filtration", stage4: "4 Étapes", stage6: "6 Étapes", stage5: "5 Étapes" },
    { feature: "Production journalière", stage4: "75 GPD", stage6: "75 GPD", stage5: "600 GPD" },
    { feature: "Élimination sédiments et chlore", stage4: true, stage6: true, stage5: true },
    { feature: "Membrane d'osmose inverse (99%)", stage4: true, stage6: true, stage5: true },
    { feature: "Double pré-filtration au charbon", stage4: false, stage6: true, stage5: true },
    { feature: "Filtre de polissage final", stage4: true, stage6: true, stage5: true },
    { feature: "Cartouche de reminéralisation", stage4: "Option", stage6: true, stage5: "Option" },
    { feature: "Équilibrage du pH (Alcalin)", stage4: "Option", stage6: true, stage5: "Option" },
  ];

  return (
    <div className="min-h-screen bg-background text-slate-900 font-sans">
      <Header />
      <main>
        {/* 1. Hero Section - UNCHANGED */}
        <section className="relative h-[850px] flex items-center overflow-hidden -mt-[104px] pt-[104px]">
          <div className="absolute inset-0 z-0">
            <img
              src={heroDrink}
              alt="Enfant buvant une eau cristalline directement du robinet filtré par Bricareau"
              className="w-full h-full object-cover object-[center_35%]"
            />
            <div className="absolute inset-0 bg-black/40 lg:bg-gradient-to-r lg:from-black/60 lg:to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-white via-white/10 to-transparent" />
            {/* Brightening Start 1/3 Right */}
            <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white/90 via-white/40 to-transparent" />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-2xl text-white">
              <h1
                className="text-[28px] md:text-[42px] leading-[32px] md:leading-[42px] font-light mb-8 tracking-tighter text-white max-w-xl"
                style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
              >
                <span className="font-bold text-white">Systèmes d'osmose inverse</span> <br />
                <span className="font-bold text-white">La pureté absolue à votre robinet.</span>
              </h1>
              <p className="text-lg font-light leading-snug text-white/95 mb-8 max-w-xl text-justify">
                Transformez votre eau municipale en une source de pureté cristalline. Nos purificateurs d'eau par osmose inverse éliminent 99% des contaminants, du plomb au chlore, pour une eau fraîche, saine et alcaline.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 h-14 shadow-lg shadow-blue-200"
                  style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                  asChild
                >
                  <a href="#purification-systems">
                    Découvrir nos systèmes d'osmose inverse
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
                    <Phone className="h-5 w-5" />
                    1-855-264-9328
                  </a>
                </Button>
              </div>
            </div>
          </div>
          {/* 2. Wave Separator Bottom - Transition to Blue Section */}
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
                fill="#2563EB"
                transform="rotate(180 600 60)"
              ></path>
            </svg>
          </div>
        </section>

        {/* 3. Pourquoi choisir - Blue Section */}
        <section className="py-24 bg-blue-600 text-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-[32px] md:text-[48px] font-normal text-white mb-8 leading-[1.2] md:leading-[48px] tracking-tighter text-center">
                Pourquoi choisir nos systèmes <br />d'osmose inverse ?
              </h2>
              <p className="text-lg font-light leading-snug text-blue-100 max-w-2xl mx-auto text-justify">
                Une technologie de pointe pour une eau d'une pureté exceptionnelle tout en offrant une protection permanente pour votre foyer.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
              {[
                { icon: ShieldCheck, title: "Sécurité maximale", desc: "Élimine 99% des virus, bactéries et contaminants chimiques." },
                { icon: Droplets, title: "Goût incomparable", desc: "Retrouvez le vrai goût de l'eau, limpide et rafraîchissante." },
                { icon: GlassWater, title: "Eau pure 24/7", desc: "Accès instantané à une eau de meilleure qualité." },
                { icon: CircleDollarSign, title: "Économies", desc: "Éliminez l'achat de bouteilles d'eau plastique." },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center group">
                  <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center mb-8 transition-all group-hover:scale-110 group-hover:bg-white/10">
                    <item.icon className="h-10 w-10 text-blue-600 group-hover:text-white" />
                  </div>
                  <h3 className="text-2xl font-medium mb-4 tracking-tight">{item.title}</h3>
                  <p className="text-lg font-light leading-snug text-blue-100 text-justify">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Systèmes d'osmose inverse - Product Grid */}
        <section id="purification-systems" className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-left mb-16">
              <h2
                className="text-slate-900 tracking-tighter mb-8 text-left"
                style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
              >
                <span className="text-[32px] md:text-[60px] font-light leading-[1.1] md:leading-[60px] block">Nos systèmes de purification</span>
                <span className="text-[32px] md:text-[60px] font-normal leading-[1.1] md:leading-[60px] block">d'eau par osmose inverse</span>
              </h2>
              <div className="w-24 h-1 bg-blue-600 mb-8"></div>
              <p
                className="text-lg font-light leading-snug text-slate-600 mb-8 text-justify"
                style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
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
                      className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors tracking-tight text-center"
                      style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                    >
                      {product.name}
                    </h3>
                    <p
                      className="text-slate-500 font-light leading-snug flex-grow text-justify"
                      style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                    >
                      {product.desc}
                    </p>
                    <div
                      className="inline-flex items-center gap-2 text-blue-600 font-bold text-xs tracking-widest uppercase mt-4 group-hover:underline self-end"
                      style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
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

        {/* 5. Comparison Table */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-left mb-16">
              <h2
                className="text-slate-900 tracking-tighter mb-8 text-left"
                style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
              >
                <span className="text-[32px] md:text-[60px] font-light leading-[1.1] md:leading-[60px] block">Comparez nos solutions</span>
                <span className="text-[32px] md:text-[60px] font-normal leading-[1.1] md:leading-[60px] block">de filtration d'eau potable</span>
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
        {/* 6. Water Testing Section */}
        <section className="relative h-[650px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src={waterTestingImg}
              alt="Test de qualité d'eau à domicile pour détecter les contaminants - Expertise Bricareau"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/30 lg:bg-gradient-to-r lg:from-black/50 lg:to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-white via-white/10 to-transparent" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-2xl text-white">
              <h2
                className="text-[40px] md:text-[60px] leading-[1.1] md:leading-[60px] font-light mb-8 tracking-tighter text-white"
                style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
              >
                La vérité dans <span className="font-bold"><br />chaque goutte.</span>
              </h2>
              <p className="text-lg font-light leading-snug text-white/95 mb-8 max-w-xl text-justify">
                Pourquoi deviner quand vous pouvez vérifier ? Un test d'eau simple pour une protection durable de votre foyer.              </p>
              <div className="flex gap-4">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 h-14"
                  style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
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
              <span className="text-[32px] md:text-[60px] font-light leading-[1.2] md:leading-[60px] block">L'eau de source,</span>
              <span className="text-[32px] md:text-[60px] font-normal leading-[1.2] md:leading-[60px] block text-blue-600">directement à votre robinet.</span>
            </>
          }
        />

        <section className="py-24 bg-white border-t border-slate-100">
          <div className="container mx-auto px-6">
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
                    q: "Qu'est-ce qu'un système d'osmose inverse sous évier ?",
                    a: "C'est un système de purification d'eau compact installé directement sous votre évier de cuisine. Il utilise une technologie de filtration à plusieurs étapes, incluant une membrane semi-perméable, pour fournir une eau d'une pureté exceptionnelle directement à un robinet dédié.",
                  },
                  {
                    q: "Quels sont les principaux avantages d'un système d'osmose inverse ?",
                    a: "Le principal avantage est la suppression de 99 % des contaminants (plomb, chlore, fluorure, arsenic, nitrates, etc.). Cela améliore considérablement le goût, l'odeur et la sécurité de votre eau pour boire et cuisiner, tout en éliminant le besoin d'acheter de l'eau en bouteille.",
                  },
                  {
                    q: "Est-ce difficile à installer sous un évier de cuisine ?",
                    a: "Bien que l'installation puisse être réalisée par un bon bricoleur, nous recommandons une installation professionnelle par nos techniciens certifiés Bricareau. Cela garantit une étanchéité parfaite, un raccordement conforme au drain et une pression optimale du réservoir.",
                  },
                  {
                    q: "Combien de place le système prend-il dans mon armoire ?",
                    a: "Nos systèmes modernes sont conçus pour être compacts. L'unité de filtration mesure généralement environ 15-18 pouces de hauteur, et le réservoir de stockage occupe une place similaire à celle d'un grand panier à pharmacie. Il reste généralement assez d'espace pour vos produits ménagers.",
                  },
                  {
                    q: "L'osmose inverse élimine-t-elle les minéraux essentiels ?",
                    a: "L'osmose inverse est si efficace qu'elle retire presque tout, y compris les minéraux. C'est pourquoi nos systèmes haut de gamme incluent une cartouche de reminéralisation qui réintroduit du calcium et du magnésium, équilibrant le pH pour une eau alcaline plus saine.",
                  },
                  {
                    q: "Est-ce que le système nécessite un robinet séparé ?",
                    a: "Oui, la plupart des installations incluent un petit robinet design dédié à l'eau purifiée. Cela permet de préserver vos filtres en utilisant l'eau standard pour la vaisselle et l'eau osmosée uniquement pour la consommation et la cuisson. Des robinets '3-en-1' sont aussi disponibles en option.",
                  },
                  {
                    q: "À quelle fréquence faut-il remplacer les filtres ?",
                    a: "Les pré-filtres (sédiments et charbon) doivent généralement être changés tous les 6 à 12 mois pour protéger la membrane. La membrane d'osmose inverse elle-même dure généralement entre 2 et 4 ans, selon votre consommation et la dureté de votre eau.",
                  },
                  {
                    q: "Peut-on connecter le système à un réfrigérateur ou une machine à glaçons ?",
                    a: "Absolument ! Nous pouvons installer une ligne de dérivation pour alimenter votre réfrigérateur en eau osmosée. Vous obtiendrez ainsi des glaçons cristallins et de l'eau fraîche purifiée directement de votre distributeur de porte.",
                  },
                  {
                    q: "L'eau osmosée est-elle meilleure que l'eau en bouteille ?",
                    a: "Dans la majorité des cas, oui. L'eau osmosée à domicile est souvent plus fraîche et subit moins de risques de contamination par le plastique des bouteilles. De plus, c'est une solution beaucoup plus écologique et économique à long terme.",
                  },
                  {
                    q: "Quelle est la différence entre un filtre à charbon simple et l'osmose inverse ?",
                    a: "Un filtre à charbon simple réduit principalement le goût de chlore et les odeurs. L'osmose inverse va beaucoup plus loin en éliminant les solides dissous, les métaux lourds, les virus et les bactéries que le charbon seul ne peut pas arrêter.",
                  },
                  {
                    q: "Le système fait-il du bruit pendant son fonctionnement ?",
                    a: "Le système est pratiquement silencieux. Vous pourriez entendre un léger sifflement ou un gargouillis très discret pendant qu'il remplit le réservoir ou évacue les impuretés, mais cela s'arrête dès que le réservoir est plein.",
                  },
                  {
                    q: "Comment savoir si mes filtres doivent être changés ?",
                    a: "Une baisse notable du débit au robinet dédié ou un changement subtil du goût sont des indicateurs. Chez Bricareau, nous proposons également des tests de conductivité (TDS) lors de nos visites d'entretien pour mesurer précisément l'efficacité de la membrane.",
                  },
                  {
                    q: "L'osmose inverse retire-t-elle le calcaire ?",
                    a: "Oui, elle est extrêmement efficace pour retirer les minéraux de dureté (calcium/magnésium). Cependant, si votre eau est extrêmement dure, nous recommandons un adoucisseur en amont pour éviter que la membrane de l'osmose ne s'encrasse trop rapidement.",
                  },
                  {
                    q: "Est-ce que le système gaspille beaucoup d'eau ?",
                    a: "L'osmose inverse nécessite un flux d'eau pour rincer les impuretés de la membrane (eau de rejet). Nos systèmes récents sont optimisés pour être très efficaces, avec des ratios de rejet très bas comparés aux anciens modèles des années 90.",
                  },
                  {
                    q: "Quelle est la durée de vie globale du système ?",
                    a: "Avec un entretien régulier et des changements de filtres planifiés, un système d'osmose inverse de qualité Bricareau peut facilement durer 15 à 20 ans. C'est un investissement durable pour la santé de votre famille.",
                  },
                ].slice(0, showAllFaqs ? undefined : 6).map((item, idx) => (
                  <AccordionItem key={idx} value={`item-${idx}`} className="border-b-slate-100 px-4">
                    <AccordionTrigger className="text-left text-base font-medium leading-6 hover:no-underline py-8 text-slate-800" style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}>
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-base font-light leading-6 text-slate-500 pb-8 text-justify" style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}>
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
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-left mb-16">
              <h2
                className="text-slate-900 tracking-tighter mb-8 text-left"
                style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
              > <span className="text-[32px] md:text-[60px] font-normal leading-[1.1] md:leading-[60px] block">Ressources</span>
              </h2>
              <div className="w-24 h-1 bg-blue-600"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Fluor dans l'eau : Bienfait ou Danger ?",
                  img: fluorideImg,
                  link: "/fluor-eau-bienfait-danger",
                },
                {
                  title: "Microplastiques dans l'eau du robinet : mythe ou réalité inquiétante ?",
                  img: microplasticsImg,
                  link: "/microplastiques-eau-robinet-realite-inquietante",
                },
                {
                  title: "PFAS dans l'eau du robinet : ce que vous devez savoir et comment les éliminer",
                  img: pfasImg,
                  link: "/pfas-eau-robinet-elimination",
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
                    <h4 className="text-xl font-medium mb-4 group-hover:text-blue-600 transition-colors tracking-tight">{art.title}</h4>
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

        {/* 9. Consultation Form Section */}
        <ConsultationFormSection id="consultation" />
      </main >
      <Footer />
    </div >
  );
};

export default StationEauPotable;
