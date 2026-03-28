import { Phone, Award, DollarSign, CheckCircle2, ChevronRight, Factory, Droplets, FlaskConical, ShieldCheck, Zap, Cog, Activity, HardHat, Recycle } from "lucide-react";
import heroImage from "@/assets/1451506551.JPG";
import waterTestingBg from "@/assets/undersink_filtration_header.jpg";
import processImg from "@/assets/2148563485.jpg";
import roMembranesImg from "@/assets/Commercial & industrial RO-Membranes.png";
import alternatingSoftenerImg from "@/assets/Alternating Water Softener.png";
import labTestImg from "@/assets/test-laboratoire-diligence-inspection-750x500.jpg";
import ws1ValveImg from "@/assets/WS1_CI_Valve_Left_side_view.webp";

import { Card, CardContent } from "@/components/ui/card";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import GlobalBreadcrumbs from "@/components/GlobalBreadcrumbs";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";

const CommercialIndustriel = () => {
  const solutions = [
    {
      title: "Adoucissement Haute Performance",
      description: "Système twin-alternating garantissant une eau douce 24h/24 pour vos processus industriels les plus critiques.",
      image: alternatingSoftenerImg,
      icon: Droplets
    },
    {
      title: "Osmose Inverse Industrielle",
      description: "Production d'eau ultra-pure avec un taux de rejet minimal. Idéal pour les laboratoires et la fabrication délicate.",
      image: roMembranesImg,
      icon: Activity
    },
    {
      title: "Déionisation & Filtration-Média",
      description: "Solutions sur mesure pour éliminer les impuretés spécifiques : fer, soufre, manganèse et métaux lourds.",
      image: ws1ValveImg,
      icon: FlaskConical
    }
  ];

  const advantages = [
    {
      icon: Award,
      title: "Ingénierie de Précision",
      description: "Chaque système est conçu par nos ingénieurs pour répondre aux spécifications exactes de votre flux de production."
    },
    {
      icon: Recycle,
      title: "Optimisation de l'Eau",
      description: "Réduisez votre empreinte hydrique avec nos technologies de récupération et d'ultrafiltration haute efficacité."
    },
    {
      icon: ShieldCheck,
      title: "Conformité Normative",
      description: "Nous garantissons le respect des normes gouvernementales et environnementales les plus strictes de votre industrie."
    }
  ];

  const markets = [
    { name: "Aéronautique", icon: "✈️" },
    { name: "Agriculture", icon: "🌾" },
    { name: "Alimentaire", icon: "🥫" },
    { name: "Pharmaceutique", icon: "🧪" },
    { name: "Manufacturier", icon: "🏭" },
    { name: "Hôtellerie", icon: "🏨" },
    { name: "Laundries", icon: "🧺" },
    { name: "Serres", icon: "🌿" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        {/* 1. Ultramodern Hero Section */}
        <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden bg-slate-950">
          {/* Background Elements */}
          <div className="absolute inset-0 z-0">
            <img
              src={heroImage}
              alt="Installation industrielle Bricareau"
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
          </div>

          <div className="container mx-auto px-6 relative z-10">
              <div className="flex flex-col lg:flex-row items-center gap-12">
                  <div className="w-full lg:w-3/5 space-y-8">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-widest uppercase">
                          <Factory className="h-4 w-4" />
                          Expertise Industrielle & Commerciale
                      </div>
                      <h1 className="text-5xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
                          <span className="block text-blue-400 font-light italic">Maîtrisez la pureté</span>
                          <span className="block">de votre production.</span>
                      </h1>
                      <p className="text-xl text-slate-300 max-w-2xl font-light leading-relaxed">
                          De la conception technique à la maintenance 24/7, Bricareau déploie des systèmes de traitement d'eau robustes pour les environnements les plus exigeants.
                      </p>
                      <div className="flex flex-wrap gap-4 pt-4">
                          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 h-14 text-lg rounded-full" asChild>
                              <a href="#expertise">Découvrir notre expertise</a>
                          </Button>
                          <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 px-8 h-14 text-lg rounded-full backdrop-blur-sm" asChild>
                              <a href="/contact" className="flex items-center gap-2">
                                  Expert Conseil <ChevronRight className="h-5 w-5" />
                              </a>
                          </Button>
                      </div>
                  </div>
                  
                  <div className="hidden lg:grid w-full lg:w-2/5 grid-cols-2 gap-4">
                      <div className="space-y-4 pt-12">
                          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-[2rem] space-y-2">
                              <div className="text-3xl font-bold text-white">99.9%</div>
                              <div className="text-sm text-slate-400 font-medium uppercase tracking-wider">Taux de Pureté RO</div>
                          </div>
                          <div className="bg-blue-600/10 backdrop-blur-md border border-blue-500/20 p-6 rounded-[2rem] space-y-2 translate-x-8">
                              <div className="text-3xl font-bold text-blue-400">24/7</div>
                              <div className="text-sm text-slate-400 font-medium uppercase tracking-wider">Monitoring À Distance</div>
                          </div>
                      </div>
                      <div className="space-y-4">
                          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-[2rem] space-y-2">
                              <div className="text-3xl font-bold text-white">+15 Ans</div>
                              <div className="text-sm text-slate-400 font-medium uppercase tracking-wider">D'expertise Terrain</div>
                          </div>
                          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-[2rem] space-y-2 -translate-x-4">
                              <div className="text-3xl font-bold text-white">Zéro</div>
                              <div className="text-sm text-slate-400 font-medium uppercase tracking-wider">Arrêts de Production</div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </section>

        {/* 2. Partner Logos / Trust Bar */}
        <section className="py-12 bg-white border-b border-slate-100">
            <div className="container mx-auto px-6">
                <p className="text-center text-slate-400 text-sm font-medium uppercase tracking-[0.3em] mb-8">Partenaire de confiance des leaders québécois</p>
                <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
                   {/* This would be logos, using text placeholders for now to maintain professionalism */}
                   <span className="text-2xl font-black text-slate-900 border-2 border-slate-900 px-4 py-1">AÉRO</span>
                   <span className="text-2xl font-black text-slate-900 italic underline decoration-blue-500">PHARMA+</span>
                   <span className="text-2xl font-black text-slate-900 flex items-center gap-1"><Droplets className="h-6 w-6 text-blue-500" /> AQUA-TECH</span>
                   <span className="text-2xl font-black text-slate-900 tracking-tighter">AGRI-SOL</span>
                   <span className="text-2xl font-black text-slate-900 font-serif">FOOD-CORP</span>
                </div>
            </div>
        </section>

        {/* 3. Solutions Grid (Premium Cards) */}
        <section id="expertise" className="py-24 bg-slate-50">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mb-20">
                    <h2 className="heading-pro-max text-left mb-6">
                        <span className="italic font-light text-blue-600 block">Solutions Techniques</span>
                        <span className="font-bold text-slate-950 block">Ingénierie de l'Eau.</span>
                    </h2>
                    <p className="body-pro-max text-left">
                        Nous concevons des systèmes modulaires, évolutifs et intelligents, capables de traiter des volumes massifs tout en optimisant chaque litre d'eau utilisé.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {solutions.map((sol, i) => (
                        <div key={i} className="group relative bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col border border-slate-200/50">
                            <div className="h-64 overflow-hidden relative">
                                <img src={sol.image} alt={sol.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
                                <div className="absolute top-6 left-6 w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                                    <sol.icon className="h-6 w-6 text-blue-600" />
                                </div>
                            </div>
                            <div className="p-10 flex-grow">
                                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">{sol.title}</h3>
                                <p className="text-slate-500 font-light leading-relaxed mb-8">
                                    {sol.description}
                                </p>
                                <NavLink to="/contact" className="inline-flex items-center gap-2 text-blue-600 font-bold group/link">
                                    Consulter le cahier technique <ChevronRight className="h-4 w-4 transform group-hover/link:translate-x-1 transition-transform" />
                                </NavLink>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* 4. Strategic Advantages */}
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-20">
                    <div className="w-full lg:w-1/2 relative">
                        <div className="rounded-[3rem] overflow-hidden shadow-2xl relative">
                            <img src={processImg} alt="Technicien Bricareau" className="w-full h-72 lg:h-[600px] object-cover" />
                            <div className="absolute inset-0 bg-blue-900/10" />
                        </div>
                        {/* Floating elements */}
                        <div className="absolute -bottom-10 -right-10 hidden lg:block bg-white p-8 rounded-[2rem] shadow-xl border border-slate-100 max-w-[280px]">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                                    <HardHat className="h-6 w-6 text-white" />
                                </div>
                                <div className="text-sm font-bold text-slate-900 uppercase tracking-wider">Installation Elite</div>
                            </div>
                            <p className="text-xs text-slate-500 font-light leading-relaxed">
                                Déploiement rapide avec un arrêt minimal de vos opérations courantes.
                            </p>
                        </div>
                    </div>
                    
                    <div className="w-full lg:w-1/2 space-y-12">
                        <div className="space-y-6">
                            <h2 className="heading-pro-max text-left">
                                <span className="italic font-light text-blue-600 block">Performance Mesurable</span>
                                <span className="font-bold text-slate-950 block">Pourquoi Bricareau ?</span>
                            </h2>
                            <p className="body-pro-max text-left">
                                Plus qu'un fournisseur d'équipement, nous sommes un partenaire stratégique dédié à la continuité de vos opérations.
                            </p>
                        </div>

                        <div className="space-y-8">
                            {advantages.map((adv, i) => (
                                <div key={i} className="flex gap-6 group">
                                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-500 shadow-sm border border-blue-100/50">
                                        <adv.icon className="h-7 w-7 text-blue-600 group-hover:text-white transition-colors duration-500" />
                                    </div>
                                    <div className="space-y-2">
                                        <h4 className="text-xl font-bold text-slate-900">{adv.title}</h4>
                                        <p className="text-slate-500 font-light leading-relaxed max-w-md">
                                            {adv.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* 5. Markets we Serve (Iconic Grid) */}
        <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:40px_40px]" />
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold mb-6">Expertise Multidisciplinaire</h2>
                    <p className="text-slate-400 text-lg font-light leading-relaxed">
                        Chaque secteur a ses propres contraintes. Nous les maîtrisons toutes pour vous offrir la solution optimale.
                    </p>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8 max-w-6xl mx-auto">
                    {markets.map((market, i) => (
                        <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-[2rem] text-center hover:bg-white/10 hover:border-blue-500/50 transition-all duration-500 group">
                            <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform">{market.icon}</div>
                            <h4 className="font-bold tracking-tight text-white">{market.name}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* 6. Lab Testing Section (The Scientific Approach) */}
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6 px-4">
                <div className="bg-slate-50 rounded-[3rem] overflow-hidden flex flex-col lg:flex-row shadow-sm border border-slate-100">
                    <div className="w-full lg:w-1/2 p-12 lg:p-20 space-y-8 flex flex-col justify-center">
                        <div className="w-16 h-1 bg-blue-600 mb-2"></div>
                        <h2 className="heading-pro-max text-left">
                            <span className="italic font-light text-blue-600 block">Analyse & Diagnostic</span>
                            <span className="font-bold text-slate-950 block">Audit de Qualité d'Eau.</span>
                        </h2>
                        <p className="body-pro-max text-left">
                            Avant tout projet, nous réalisons une analyse microbiologique et physico-chimique complète en laboratoire accrédité pour identifier la signature unique de votre eau.
                        </p>
                        <div className="pt-4">
                            <Button size="lg" className="rounded-full px-8 h-14 text-lg bg-slate-950 hover:bg-slate-800 text-white" asChild>
                                <a href="/tests-eau">Réserver une analyse</a>
                            </Button>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 h-72 lg:h-auto">
                        <img src={labTestImg} alt="Laboratoire Bricareau" className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>
        </section>

        {/* 7. Testimonials */}
        <div className="bg-slate-50">
           <TestimonialsSection />
        </div>

        {/* 8. EPIC CTA SECTION */}
        <section className="relative h-[650px] flex items-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src={waterTestingBg}
                    alt="Processus industriel optimisé"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900/90 to-blue-900/40" />
            </div>
            <div className="container mx-auto px-6 relative z-10 text-center">
                <div className="max-w-4xl mx-auto">
                    <div className="w-20 h-2 bg-blue-600 mx-auto mb-10 rounded-full" />
                    <h2 className="heading-pro-max text-white text-center mb-8">
                        <span className="italic font-light text-blue-400 block tracking-tight">Prêt pour l'excellence ?</span>
                        <span className="font-bold block tracking-tight">Propulsez votre performance industrielle.</span>
                    </h2>
                    <p className="body-pro-max !text-white text-center mb-12 max-w-2xl mx-auto opacity-90">
                        Nos ingénieurs sont prêts à analyser vos besoins et à concevoir le système qui fera la différence sur vos résultats. Sans engagement.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-10 h-16 text-xl rounded-full shadow-xl shadow-blue-600/20" asChild>
                            <a href="tel:18552649328" className="flex items-center gap-3">
                                <Phone className="h-6 w-6 animate-pulse" />
                                Consultant Expert
                            </a>
                        </Button>
                                                                    
                        <Button
                            variant="outline"
                            size="lg"
                            asChild
                            className="bg-transparent border-white/30 text-white hover:bg-white hover:text-slate-950 px-10 h-16 text-xl rounded-full backdrop-blur-md transition-all duration-300"
                        >
                            <a href="/contact">Demander une étude</a>
                        </Button>
                    </div>

                    <div className="mt-16 pt-8 border-t border-white/10 flex flex-wrap justify-center gap-10 items-center">
                        <div className="flex items-center gap-2 text-white/50 text-sm italic font-light">
                            <ShieldCheck className="h-5 w-5 text-blue-400" /> Soutien Technique Prioritaire
                        </div>
                        <div className="flex items-center gap-2 text-white/50 text-sm italic font-light">
                            <Zap className="h-5 w-5 text-blue-400" /> Économies Énergétiques Garanties
                        </div>
                        <div className="flex items-center gap-2 text-white/50 text-sm italic font-light">
                            <Cog className="h-5 w-5 text-blue-400" /> Conception Québécoise
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

export default CommercialIndustriel;
