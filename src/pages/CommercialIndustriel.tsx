import React, { useEffect } from "react";
import { Phone, Award, DollarSign, CheckCircle2, ChevronRight, Factory, Droplets, FlaskConical, ShieldCheck, Zap, Cog, Activity, HardHat, Recycle, Building2, ShieldAlert, BarChart3, Microscope, Workflow } from "lucide-react";
import heroIndustrialImg from "@/assets/hero_industrial_power.png";
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
import ExpertAvatars from "@/components/ExpertAvatars";

const CommercialIndustriel = () => {
  const solutions = [
    {
      title: "Adoucissement Haute Capacité",
      subtitle: "CONTINUITÉ OPÉRATIONNELLE",
      description: "Système Twin-Alternating garantissant une eau sans calcaire 24/7 pour vos processus critiques. Protégez vos chaudières et tours de refroidissement.",
      image: alternatingSoftenerImg,
      icon: Droplets,
      span: "lg:col-span-8",
      features: ["Vannes Clack WS1.5/WS2", "Régénération à contre-courant", "Contrôleur intelligent"]
    },
    {
      title: "Osmose Inverse Industrielle",
      subtitle: "PURETÉ MOLÉCULAIRE",
      description: "Systèmes RO haute efficacité pour laboratoires et manufacturing.",
      image: roMembranesImg,
      icon: Activity,
      span: "lg:col-span-4",
      features: ["Rejet minimal", "Membranes basse pression"]
    },
    {
      title: "Spécialités & Filtration Média",
      subtitle: "INGÉNIERIE SUR MESURE",
      description: "Élimination des métaux lourds, fer et soufre à grand débit.",
      image: ws1ValveImg,
      icon: FlaskConical,
      span: "lg:col-span-4",
      features: ["Médias spécifiques", "Filtration sédimentaire"]
    }
  ];

  const advantages = [
    {
      icon: Award,
      title: "Ingénierie Elite",
      description: "Conception sur-mesure par nos ingénieurs pour vos spécifications exactes."
    },
    {
      icon: Workflow,
      title: "Intégration Modulaire",
      description: "Systèmes conçus pour évoluer avec votre croissance industrielle."
    },
    {
      icon: ShieldCheck,
      title: "Uptime Garanti",
      description: "Support technique prioritaire et monitoring pour zéro temps d'arrêt."
    }
  ];

  const markets = [
    { name: "Aéronautique", icon: Factory, sub: "Précision Critique" },
    { name: "Hôtellerie", icon: Building2, sub: "Expérience Client" },
    { name: "Alimentaire", icon: Droplets, sub: "Standards HACCP" },
    { name: "Pharmaceutique", icon: Microscope, sub: "Pureté Grade Labo" }
  ];

  useEffect(() => {
    document.title = "Traitement d'Eau Industriel et Commercial au Québec | Bricareau";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Solutions de traitement d'eau haute performance pour commerces et industries au Québec. Adoucisseurs, osmose inverse et ingénierie sur mesure. Fiabilité 24/7.");
    }

    // OG Tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", "Bricareau : Partenaire de Pureté pour l'Industrie Québécoise");
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", "Optimisez vos processus opérationnels avec une eau de qualité supérieure. Expertise Bricareau en milieu commercial et industriel.");
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute("content", "https://bricareau.com/commercial-industriel");
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        {/* 1. Industrial Power Hero - Extreme High Fidelity */}
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#0A0F1C]">
          {/* Immersive Background */}
          <div className="absolute inset-0 z-0">
            <img
              src={heroIndustrialImg}
              alt="Installation industrielle Bricareau"
              className="w-full h-full object-cover opacity-40 scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A0F1C] via-[#0A0F1C]/90 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1C] via-transparent to-transparent" />
          </div>

          <div className="container mx-auto px-6 relative z-10">
              <div className="flex flex-col lg:flex-row items-center gap-16">
                  <div className="w-full lg:w-3/5 space-y-10 group">
                      <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-black tracking-[0.3em] uppercase animate-fade-in">
                          <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                          Puissance & Précision Industrielle
                      </div>
                      
                      <h1 className="text-6xl lg:text-8xl font-bold text-white leading-[0.95] tracking-tighter">
                          <span className="block text-blue-400 font-light italic opacity-90">L'eau au service</span>
                          <span className="block mt-2">de votre performance.</span>
                      </h1>
                      
                      <p className="text-xl lg:text-2xl text-slate-400 max-w-2xl font-light leading-relaxed">
                          Bricareau déploie des systèmes de traitement d'eau à haut rendement pour les leaders de l’industrie manufacturière, hôtelière et institutionnelle du Québec.
                      </p>
                      
                      <div className="flex flex-wrap gap-6 pt-4">
                          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-10 h-16 text-xl rounded-full shadow-2xl shadow-blue-600/20 border-b-4 border-blue-800" asChild>
                              <a href="#solutions">Audit Technique 24h</a>
                          </Button>
                          <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 px-10 h-16 text-xl rounded-full backdrop-blur-xl group/btn" asChild>
                              <a href="/contact" className="flex items-center gap-3">
                                  Expert-Conseil <ChevronRight className="h-6 w-6 group-hover/btn:translate-x-1 transition-transform" />
                              </a>
                          </Button>
                      </div>

                      <div className="pt-8 border-t border-white/5 flex items-center gap-8">
                         <ExpertAvatars />
                         <p className="text-slate-500 text-sm font-medium">
                            Support technique <span className="text-white">prioritaire 24/7</span> inclus.
                         </p>
                      </div>
                  </div>
                  
                  {/* Digital HUD Cards */}
                  <div className="w-full lg:w-2/5 grid grid-cols-2 gap-4">
                      <div className="space-y-4 pt-12">
                          <div className="bg-white/[0.03] backdrop-blur-2xl border border-white/10 p-8 rounded-[2.5rem] relative overflow-hidden group hover:bg-white/[0.06] transition-all">
                              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Activity className="w-16 h-16 text-blue-400" />
                              </div>
                              <div className="text-4xl font-bold text-white mb-1">99.9%</div>
                              <div className="text-[10px] text-blue-400 font-black uppercase tracking-widest">Pureté de Grade Labo</div>
                          </div>
                          <div className="bg-blue-600/10 backdrop-blur-2xl border border-blue-500/20 p-8 rounded-[2.5rem] relative overflow-hidden flex flex-col justify-end min-h-[160px] translate-x-8 group">
                              <Zap className="h-8 w-8 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
                              <div className="text-3xl font-bold text-white leading-none">Efficacité <br/>Énergétique</div>
                          </div>
                      </div>
                      <div className="space-y-4">
                          <div className="bg-white/[0.03] backdrop-blur-2xl border border-white/10 p-8 rounded-[2.5rem] relative overflow-hidden group hover:bg-white/[0.06] transition-all">
                              <BarChart3 className="h-8 w-8 text-blue-400 mb-4" />
                              <div className="text-3xl font-bold text-white">ROI &lt; 24m</div>
                              <div className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Retour sur Investissement</div>
                          </div>
                          <div className="bg-white/5 backdrop-blur-2xl border border-white/10 p-8 rounded-[2.5rem] relative overflow-hidden group -translate-x-4">
                              <div className="text-4xl font-bold text-white mb-1">0h</div>
                              <div className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Temps d'arrêt process</div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </section>

        {/* 2. Solutions: The Industrial Engine Bento Grid */}
        <section id="solutions" className="py-32 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mb-24">
                    <h2 className="mb-8 heading-pro-max text-left">
                        <span className="italic font-light text-blue-600 block">Ingénierie Modulaire</span>
                        <span className="font-bold text-slate-950 block tracking-tight">Des systèmes dimensionnés pour l'excellence.</span>
                    </h2>
                    <p className="body-pro-max text-left max-w-2xl">
                        Nos solutions ne sont pas des catalogues de produits, mais des systèmes d'ingénierie intégrés, conçus pour la fiabilité et le monitoring en temps réel.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-7xl mx-auto">
                    {solutions.map((sol, i) => (
                        <div key={i} className={cn(
                            "group relative rounded-[3.5rem] overflow-hidden bg-slate-50 border border-slate-100 transition-all duration-700 hover:-translate-y-2 flex flex-col shadow-sm",
                            sol.span
                        )}>
                            <div className="h-72 overflow-hidden relative">
                                <img src={sol.image} alt={sol.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-transparent" />
                                <div className="absolute bottom-6 left-10">
                                   <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-xl shadow-blue-900/5">
                                      <sol.icon className="h-7 w-7 text-blue-600" />
                                   </div>
                                </div>
                            </div>
                            <div className="p-12 flex-grow flex flex-col">
                                <div className="text-blue-600 font-bold text-[10px] uppercase tracking-[0.3em] mb-4">{sol.subtitle}</div>
                                <h3 className="text-3xl font-bold text-slate-950 mb-6">{sol.title}</h3>
                                <p className="text-slate-500 font-light text-xl leading-relaxed mb-8 flex-grow">
                                    {sol.description}
                                </p>
                                <div className="space-y-4 mb-10 border-t border-slate-200 pt-8">
                                   {sol.features.map((feat, fi) => (
                                      <div key={fi} className="flex items-center gap-3 text-sm font-medium text-slate-700 uppercase tracking-widest">
                                         <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                                         {feat}
                                      </div>
                                   ))}
                                </div>
                                <NavLink to="/contact" className="inline-flex items-center gap-3 text-blue-600 font-black text-xs uppercase tracking-widest group/link mt-auto">
                                    Accéder au dossier technique 
                                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center group-hover/link:bg-blue-600 group-hover/link:text-white transition-all">
                                      <ChevronRight className="h-4 w-4" />
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* 3. Performance Audit Section (Impact Visualization) */}
        <section className="py-32 bg-slate-950 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-600/10 to-transparent" />
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-24">
                    <div className="w-full lg:w-1/2 space-y-12">
                        <div className="space-y-6">
                            <h2 className="font-light block leading-tight lg:leading-[52px] text-left text-white">
                                <span className="italic font-light text-blue-400">Analyse Stratégique</span> <br />
                                <span className="font-bold font-serif whitespace-nowrap">Zéro compromis sur la continuité de service.</span>
                            </h2>
                            <p className="body-pro-max text-left !text-slate-400 max-w-xl">
                                Une eau mal traitée est un risque financier majeur. Nous auditons vos infrastructures pour transformer une dépense de maintenance en un avantage compétitif.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-6">
                           {advantages.map((adv, i) => (
                              <div key={i} className="group p-8 rounded-[2.5rem] bg-white/[0.03] border border-white/5 hover:bg-white/[0.05] hover:border-blue-500/30 transition-all flex gap-8 items-center">
                                 <div className="w-16 h-16 rounded-[1.5rem] bg-blue-600/10 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                                    <adv.icon className="h-8 w-8" />
                                 </div>
                                 <div>
                                    <h4 className="text-2xl font-bold text-white mb-2">{adv.title}</h4>
                                    <p className="text-slate-500 font-light leading-snug">{adv.description}</p>
                                 </div>
                              </div>
                           ))}
                        </div>
                    </div>
                    
                    <div className="w-full lg:w-1/2">
                        <div className="relative rounded-[4rem] overflow-hidden shadow-2xl border border-white/5 bg-slate-900 group">
                           <img src={processImg} alt="Technicien Bricareau Haute Performance" className="w-full h-[700px] object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-1000" />
                           <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1C] to-transparent opacity-60" />
                           <div className="absolute bottom-12 left-12 right-12 p-8 bg-blue-600/10 backdrop-blur-3xl border border-white/10 rounded-[2rem]">
                              <div className="flex items-center gap-4 mb-3">
                                 <HardHat className="h-6 w-6 text-blue-400" />
                                 <span className="text-sm font-black text-white uppercase tracking-[0.2em]">Excellence Québécoise</span>
                              </div>
                              <p className="text-blue-100/70 font-light">
                                 Nos techniciens certifiés déploient vos systèmes avec une interruption minimale, garantissant une intégration parfaite dans vos lignes de production existantes.
                              </p>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* 4. Sectors of Excellence: Iconic Architectural Grid */}
        <section className="py-32 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
                    <h2 className="text-5xl font-bold text-slate-950 tracking-tighter">Secteurs Stratégiques</h2>
                    <p className="text-slate-500 text-xl font-light leading-relaxed">
                        Chaque industrie possède son propre standard de pureté. Nous dimensionnons nos solutions pour répondre aux exigences les plus strictes de votre secteur.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                    {markets.map((market, i) => (
                        <div key={i} className="group p-12 rounded-[3.5rem] bg-slate-50 border border-slate-100 hover:bg-blue-600 transition-all duration-700 flex flex-col items-center text-center shadow-sm">
                            <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mb-8 shadow-xl shadow-blue-900/5 group-hover:scale-110 transition-transform">
                                <market.icon className="h-10 w-10 text-blue-600" />
                            </div>
                            <h4 className="text-2xl font-bold text-slate-950 mb-2 group-hover:text-white transition-colors tracking-tight">{market.name}</h4>
                            <p className="text-slate-500 font-medium text-xs uppercase tracking-widest group-hover:text-blue-100 transition-colors opacity-60">
                               {market.sub}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* 5. Lab Testing (Pre-Design Audit) */}
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="bg-white rounded-[4rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl shadow-blue-900/5 border border-slate-100">
                    <div className="w-full lg:w-1/2 p-16 lg:p-24 space-y-10 flex flex-col justify-center">
                        <div className="w-20 h-2 bg-blue-600 rounded-full"></div>
                        <h2 className="heading-pro-max text-left leading-tight">
                            <span className="italic font-light text-blue-600 block">La science de l'eau</span>
                            <span className="font-bold text-slate-950 block">Audit & Certification Mobile.</span>
                        </h2>
                        <p className="body-pro-max text-left text-xl">
                            Avant toute proposition technique, nous effectuons une caractérisation complète de votre eau en laboratoire. C'est la garantie d'un système dimensionné pour la réalité de votre terrain.
                        </p>
                        <div className="pt-6">
                            <Button size="lg" className="rounded-full px-10 h-16 text-lg bg-slate-950 hover:bg-slate-800 text-white shadow-xl" asChild>
                                <a href="/tests-eau">Demander un Audit de Qualité</a>
                            </Button>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 h-80 lg:h-auto overflow-hidden group">
                        <img src={labTestImg} alt="Laboratoire Bricareau" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[3s]" />
                        <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay" />
                    </div>
                </div>
            </div>
        </section>

        <TestimonialsSection />

        {/* 6. ULTIMATE CTA - CONVERSION FOCUS */}
        <section className="relative h-[800px] flex items-center overflow-hidden bg-[#0A0F1C]">
            {/* Background Kinetic Text */}
            <div className="absolute inset-0 z-0 select-none pointer-events-none overflow-hidden opacity-[0.02]">
               <div className="whitespace-nowrap text-[300px] font-black text-white leading-none -ml-40 animate-pulse">
                  PERFORMANCE PERFORMANCE PERFORMANCE
               </div>
            </div>
            
            <div className="container mx-auto px-6 relative z-10 text-center">
                <div className="max-w-5xl mx-auto space-y-16">
                    <div className="space-y-8">
                        <span className="inline-block px-5 py-2 bg-blue-600/10 border border-blue-500/20 text-blue-400 rounded-full text-xs font-black uppercase tracking-[0.4em]">
                            PRÊT À OPTIMISER VOS OPÉRATIONS ?
                        </span>
                        <h2 className="font-light block leading-tight lg:leading-[52px] text-white">
                            Élevez vos standards. <br/>
                            <span className="text-blue-400 italic font-bold font-serif">Maîtrisez votre eau.</span>
                        </h2>
                        <p className="text-xl lg:text-2xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed">
                            Ménagez vos équipements, réduisez vos coûts de maintenance et garantissez une qualité constante à chaque étape de votre processus.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
                        <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-12 h-20 text-2xl rounded-full shadow-2xl shadow-blue-600/40 border-b-4 border-blue-800 active:translate-y-1 active:border-b-0 transition-all font-bold" asChild>
                            <a href="tel:18552649328" className="flex items-center gap-4">
                                <Phone className="h-8 w-8 animate-bounce" style={{ animationDuration: '3s' }} />
                                Consultant Industriel
                            </a>
                        </Button>
                                                                    
                        <Button
                            variant="outline"
                            size="lg"
                            asChild
                            className="bg-white/5 border-white/20 text-white hover:bg-white hover:text-slate-950 px-12 h-20 text-2xl rounded-full backdrop-blur-2xl transition-all duration-500 group"
                        >
                            <a href="/contact" className="flex items-center gap-3">
                                Plan d'ingénierie offert
                                <ChevronRight className="h-7 w-7 group-hover:translate-x-2 transition-transform" />
                            </a>
                        </Button>
                    </div>

                    <div className="pt-12 border-t border-white/5 flex flex-wrap justify-center gap-x-16 gap-y-8 items-center max-w-4xl mx-auto">
                        <div className="flex items-center gap-4 text-slate-500 text-sm font-bold uppercase tracking-widest italic group">
                            <ShieldCheck className="h-6 w-6 text-blue-500 group-hover:scale-125 transition-transform" /> Support 24/7 Garanti
                        </div>
                        <div className="flex items-center gap-4 text-slate-500 text-sm font-bold uppercase tracking-widest italic group">
                            <Workflow className="h-6 w-6 text-blue-500 group-hover:scale-125 transition-transform" /> Intégration Clef en Main
                        </div>
                        <div className="flex items-center gap-4 text-slate-500 text-sm font-bold uppercase tracking-widest italic group">
                            <BarChart3 className="h-6 w-6 text-blue-500 group-hover:scale-125 transition-transform" /> Retour Rapide sur Investissement
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
