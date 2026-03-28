import React, { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import GlobalBreadcrumbs from "@/components/GlobalBreadcrumbs";
import Footer from "@/components/Footer";
import TestimonialsSection from "@/components/TestimonialsSection";
import { Button } from "@/components/ui/button";
import heroGirl from "@/assets/cute-little-girl-washing-hands.jpg";
import conditionneurImg from "@/assets/Gemini_Generated_Image_edgz5sedgz5sedgz.png";
import tacComparisonImg from "@/assets/tac-comparison.png";
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
  Zap,
  Droplets,
  ArrowRight,
  CheckCircle2,
  X,
  ShieldAlert,
  Trash2,
  ZapOff,
  Phone
} from "lucide-react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

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
                    className="lg:h-[750px]"
                />
 
        {/* 1.5. Education Section: Understanding Limescale */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2">
                <h2 
                    className="mb-8"
                    style={{
                        fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                        fontSize: '48px',
                        lineHeight: '48px',
                        fontStyle: 'normal'
                    }}
                >
                    <span className="italic font-light text-[#2563eb] block">Comprendre le calcaire autrement</span>
                    <span className="font-bold text-[#1e3a8a] block">Le problème n'est pas le minéral, c'est son cristal</span>
                </h2>
                <div className="space-y-6 text-slate-600 font-light text-lg leading-snug">
                  <p className="text-justify">
                    La dureté de l'eau est causée par le calcium et le magnésium. Ces minéraux sont essentiels à la santé, mais lorsqu'ils chauffent ou s'accumulent, ils se transforment en carbonate de calcium (calcite), un cristal dur et adhésif qui :
                  </p>
                  <ul className="space-y-4">
                    <li className="flex gap-3">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                      <span>Entartre vos canalisations et vos appareils (chauffe-eau, lave-linge).</span>
                    </li>
                    <li className="flex gap-3">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                      <span>Diminue l'efficacité de vos détergents et assèche votre peau.</span>
                    </li>
                    <li className="flex gap-3">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                      <span>Gaspille de l'énergie, car une mince couche de tartre sur un élément chauffant agit comme un isolant.</span>
                    </li>
                  </ul>
                  <p className="pt-4 border-t border-slate-100 text-justify">
                    Une solution standard (adoucisseur au sel) retire ces minéraux. <span className="font-medium text-[#1e3a8a]">La technologie TAC, elle, change la structure du minéral</span> pour qu'il ne puisse plus se déposer.
                  </p>
                </div>
              </div>
              <div className="lg:w-1/2">
                <img 
                    src={tacComparisonImg} 
                    alt="Comparaison entre eau dure et technologie TAC" 
                    className="w-full h-auto mix-blend-multiply"
                />
                <p className="mt-6 text-center text-slate-400 text-sm italic">
                    Dépôts de tartre vs minéraux neutralisés par la technologie TAC.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Problem Section - "The Financial Audit" Alternative */}
        <section className="py-32 bg-[#F8FAFC] relative overflow-hidden">
          {/* Abstract pattern background */}
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-blue-50/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-24">
              <h2 
                className="mb-8 text-center"
                style={{
                  fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                  fontSize: '48px',
                  lineHeight: '48px',
                  fontStyle: 'normal'
                }}
              >
                <span className="italic font-light text-[#2563eb] block">Ce que l'eau dure</span>
                <span className="font-bold text-[#1e3a8a] block">coûte réellement.</span>
              </h2>
              <p className="text-slate-600 font-light text-xl max-w-3xl mx-auto leading-snug">
                On la voit sur la paroi de la douche ou au fond de la bouilloire, mais le véritable coût se cache là où vous ne regardez pas <span className="text-[#2563eb] font-medium">une fuite financière invisible</span> dans votre maison.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-7xl mx-auto items-stretch">
              {/* Point 1: Taxe Énergétique - Large Focus Card */}
              <div className="lg:col-span-12 xl:col-span-4 flex flex-col">
                <div className="group bg-white/70 backdrop-blur-md rounded-[2.5rem] p-10 border border-white shadow-xl hover:shadow-2xl transition-all duration-300 flex-grow relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-90 transition-opacity">
                    <TrendingUp className="w-32 h-32 text-blue-900 text-[#1e3a8a] group-hover:text-blue-600 transition-colors" />
                  </div>
                  <div className="text-blue-600 font-bold text-sm tracking-widest uppercase mb-6 flex items-center gap-2">
                    Impact Énergétique
                  </div>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-7xl font-black text-[#1e3a8a] group-hover:text-blue-600 transition-colors">+15%</span>
                    <span className="text-slate-400 font-light italic">de conso</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-6 font-primary leading-tight">La "Taxe Énergétique" du calcaire</h3>
                  <div className="space-y-4 text-slate-600 font-light leading-snug">
                    <p>Le calcaire agit comme un isolant entre la chaleur et l'eau. Pour une famille au Québec, c'est entre <span className="font-bold text-slate-900 underline decoration-blue-200 decoration-8 underline-offset-0">100$ et 200$ d'énergie gaspillée</span> chaque année juste pour chauffer le tartre.</p>
                    <div className="flex items-center gap-3 text-sm font-medium text-slate-400 border-t border-slate-100 pt-6">
                      <Zap className="w-4 h-4 text-orange-400" />
                      Constat : 1mm de tartre = +10% de facture.
                    </div>
                  </div>
                </div>
              </div>

              {/* Point 2: Le Vol des électros - Split with visual cues */}
              <div className="lg:col-span-12 xl:col-span-8">
                <div className="bg-[#1e3a8a] rounded-[2.5rem] p-1.5 shadow-2xl overflow-hidden group">
                  <div className="bg-white rounded-[2rem] p-10 lg:p-12 flex flex-col md:flex-row gap-12">
                    <div className="md:w-3/5">
                      <div className="text-blue-600 font-bold text-sm tracking-widest uppercase mb-6 flex items-center gap-2">
                        Risque Matériel
                      </div>
                      <h3 className="text-3xl font-bold text-slate-800 mb-8 leading-[1.1]">Le "Vol" de vos électroménagers haut de gamme</h3>
                      <p className="text-slate-500 font-light text-lg mb-8 leading-relaxed">
                        Sans protection, vos investissements s'usent deux fois plus vite. Le calcaire ronge les pompes et les joints de l'intérieur.
                      </p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100 transition-colors group-hover:bg-slate-50/80">
                          <span className="text-3xl font-black text-[#1e3a8a] group-hover:text-blue-600 transition-colors">-50%</span>
                          <p className="text-slate-500 text-sm font-light">
                            <span className="font-bold text-slate-700">Chauffe-eau :</span> 6 ans au lieu de 12 ans.
                          </p>
                        </div>
                        <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100 transition-colors group-hover:bg-slate-50/80">
                          <span className="text-3xl font-black text-[#1e3a8a] group-hover:text-blue-600 transition-colors">500$</span>
                          <p className="text-slate-500 text-sm font-light">
                            <span className="font-bold text-slate-700">Réparations :</span> Coût moyen par visite de technicien.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="md:w-2/5 flex flex-col justify-center border-l border-slate-100 pl-4 md:pl-10">
                      <div className="space-y-8">
                        <div>
                          <h4 className="font-bold text-slate-800 mb-2 flex items-center gap-2 leading-tight">
                            Produits d'entretien ménager
                          </h4>
                          <p className="text-slate-500 font-light text-sm leading-relaxed">
                            Les minéraux "emprisonnent" vos savons, votre shampoing et vos détergents. Vous utilisez <span className="font-bold text-blue-600">+50% de détergent</span> pour le même résultat.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-800 mb-2 flex items-center gap-2 leading-tight">
                            Vêtements & Linge
                          </h4>
                          <p className="text-slate-500 font-light text-sm leading-relaxed">
                            Les fibres s'usent prématurément, le linge devient rêche et les couleurs se ternissent dès les premiers lavages.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Why Choose Section */}
        <section className="py-24 bg-white border-t border-slate-100">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 
                                className="mb-8 text-center"
                                style={{
                                    fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                                    fontSize: '48px',
                                    lineHeight: '48px',
                                    fontStyle: 'normal'
                                }}
                            >
                                <span className="italic font-light text-[#2563eb] block">Pourquoi choisir le</span>
                                <span className="font-bold text-[#1e3a8a] block">conditionneur d'eau sans sel ?</span>
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

        {/* 4. Product Section - Mirrored from DiscoverExpert layout */}
        <section className="bg-white relative overflow-hidden border-y border-slate-100">
          <div className="flex flex-col-reverse lg:flex-row items-stretch min-h-[500px] lg:min-h-[750px]">
            {/* Content Side */}
            <div className="w-full lg:w-1/2 flex items-center bg-slate-50/10 justify-start lg:justify-end">
              <div className="w-full max-w-[700px] px-6 sm:px-12 lg:px-10 xl:px-12 py-20 lg:py-32">
                <div className="space-y-10">
                  <div className="space-y-6">
                    <h2 className="text-[42px] lg:text-[56px] leading-[1.1] font-light text-[#1e3a8a]">
                      Une protection <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">100% écologique.</span>
                    </h2>
                    <div className="space-y-8">
                      {[
                        { title: "Sérénité Totale", desc: "Aucun sac de sel à porter, aucune maintenance complexe." },
                        { title: "Santé Préservée", desc: "Conserve le calcium et magnésium naturels de votre eau." },
                        { title: "Économies Durables", desc: "Zéro consommation d'eau et d'électricité." }
                      ].map((item, i) => (
                        <div key={i} className="flex gap-6 group">
                          <div className="mt-1 flex-shrink-0">
                            <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 border border-slate-100">
                              <ShieldCheck className="w-6 h-6" />
                            </div>
                          </div>
                          <div>
                            <h4 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h4>
                            <p className="text-slate-500 font-light text-[18px] leading-snug">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Image Side */}
            <div className="w-full lg:w-1/2 relative group overflow-hidden h-[400px] md:h-[550px] lg:h-auto border-l border-slate-100 bg-white">
              <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(37,99,235,0.03)_0%,transparent_70%)] pointer-events-none" />
              
              <img 
                src={conditionneurImg} 
                alt="Conditionneur Bricareau haute performance" 
                className="absolute inset-0 w-full h-full object-cover drop-shadow-[0_20px_50px_rgba(0,0,0,0.12)]" 
              />
              
              {/* Decorative branding anchor */}
              <div className="absolute bottom-10 right-10 opacity-30 select-none">
                <div className="text-[80px] font-black text-slate-50 leading-none">TAC</div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. CTA Section - Premium Immersive */}
        <section className="relative h-[600px] flex items-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src={heroGirl}
                    alt="Protection écologique du foyer"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-800/60 to-blue-500/30 backdrop-blur-[2px]" />
            </div>
            <div className="container mx-auto px-6 relative z-10 text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-white mb-6">
                        <span className="font-bold block tracking-tight opacity-90">Protégez votre maison, préservez la nature.</span>
                    </h2>
                    <p className="text-white font-light text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
                        Passez à la technologie TAC et neutralisez le calcaire sans aucun produit chimique ni gaspillage d'eau. Profitez d’une solution anti-tartre performante, écologique et sans entretien.
                    </p>
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

                    <p className="mt-8 text-white/50 text-sm font-light">
                        Disponible 7j/7 — Réponse en moins de 24h
                    </p>
                </div>
            </div>
        </section>

        {/* 5. Resources Section */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="text-left mb-16">
              <h2 
                                className="mb-8"
                                style={{
                                    fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                                    fontSize: '48px',
                                    lineHeight: '48px',
                                    fontStyle: 'normal'
                                }}
                            >
                                <span className="font-bold text-[#1e3a8a] block text-left">Ressources</span>
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
