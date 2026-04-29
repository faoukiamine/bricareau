import React, { useEffect } from "react";
import { Phone, CheckCircle, Leaf, Users, ChevronRight, ArrowRight, CupSoda, Coffee, Snowflake, Sparkles, Building2, ShieldCheck, HeartPulse } from "lucide-react";
import heroImage from "@/assets/Hero-Entreprise.jpg";
import { Card, CardContent } from "@/components/ui/card";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import GlobalBreadcrumbs from "@/components/GlobalBreadcrumbs";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";

import fountainImg from "@/assets/20230add-4ce5-4ae6-a6dc-1f9a2c3aeb7b.jpg";
import officeMeetingImg from "@/assets/Gallery_Extra_I-Tap_Images_4-1.png";
import coffeeImg from "@/assets/vki-eccellenza-touch-keurigcollection-matrix.full.webp";
import iceCubeImg from "@/assets/Manitowoc-NEO-120V-42-Air-Cooled-Countertop-Chewing-Ice-Nugget-Ice-Maker-and-20-lbs_-Bin-with-Lever-Dispensing-CNP0202A-161L_1100x971.jpg";
import coolerImg from "@/assets/774f43e9-1fd4-49ec-86f5-7c8e51bcbd81-removebg-preview.png";
import lifestyleFountainImg from "@/assets/C-Tap-Under-Counter-1-1-1.webp";
import corporateLifeImg from "@/assets/20230add-4ce5-4ae6-a6dc-1f9a2c3aeb7b.jpg";

const Entreprises = () => {
  const products = [
    {
      title: "Refroidisseurs Haute Performance",
      description: "Eau froide, tempérée et chaude à volonté. Sans bouteille, reliés directement à votre réseau.",
      icon: CupSoda,
      image: coolerImg,
      color: "blue"
    },
    {
      title: "Eau Pétillante & Saveurs",
      description: "Ajoutez une touche de luxe à votre bureau avec nos distributeurs d'eau pétillante filtrée.",
      icon: Sparkles,
      image: lifestyleFountainImg,
      color: "indigo"
    },
    {
      title: "Machines à Glaçons",
      description: "Production de glace pure et abondante pour vos cafétérias et événements corporatifs.",
      icon: Snowflake,
      image: iceCubeImg,
      color: "cyan"
    },
    {
      title: "Solutions Café Premium",
      description: "Une eau parfaitement filtrée pour sublimer les arômes de vos cafés préférés.",
      icon: Coffee,
      image: coffeeImg,
      color: "amber"
    }
  ];

  const benefits = [
    {
      icon: HeartPulse,
      title: "Bien-être des Employés",
      description: "Une hydratation saine augmente la concentration et la productivité de vos équipes au quotidien."
    },
    {
      icon: Leaf,
      title: "Engagement Écologique",
      description: "Éliminez des milliers de bouteilles plastique à usage unique chaque année pour votre entreprise."
    },
    {
      icon: ShieldCheck,
      title: "Service 5 Étoiles",
      description: "Maintenance préventive, changements de filtres proactifs et support technique prioritaire."
    }
  ];

  useEffect(() => {
    document.title = "Solutions d'Eau pour Entreprises et Bureaux au Québec | Bricareau";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Optimisez le bien-être de vos employés avec nos solutions d'hydratation premium au Québec. Refroidisseurs sans bouteille, eau pétillante et machines à glaçons pour bureaux.");
    }

    // OG Tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", "Bricareau : L'Excellence de l'Eau au Bureau | Québec");
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", "Offrez une eau pure et fraîche à vos collaborateurs. Solutions écologiques, design et performantes pour entreprises québécoises.");
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute("content", "https://bricareau.com/entreprises");
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        {/* 1. Modern Hero Section with Video/Image Overlay */}
        <section className="relative min-h-[85vh] flex items-center pt-24 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src={heroImage} 
              alt="Solutions Hydratation Business Bricareau" 
              className="absolute inset-0 w-full h-full object-cover opacity-95 brightness-110" 
            />
            <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
          </div>

          <div className="container mx-auto px-6 relative z-10">
              <div className="max-w-3xl space-y-8">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-600/10 border border-blue-600/20 text-blue-700 text-[10px] font-black uppercase tracking-widest">
                      <Building2 className="h-4 w-4" />
                      Solutions Hydratation Business
                  </div>
                  <h1 className="leading-[1.1] tracking-tighter text-slate-900">
                      <span className="block font-light italic text-blue-600">L'excellence de l'eau</span>
                      <span className="block font-bold">pour vos collaborateurs.</span>
                  </h1>
                  <p className="body-pro-max text-left max-w-xl">
                      Transformez votre espace de travail avec nos systèmes d'hydratation haut de gamme. Pureté, design et durabilité pour une culture d'entreprise saine.
                  </p>
                  <div className="flex flex-wrap gap-8 pt-4">
                      <div className="relative inline-block w-full sm:w-auto group">
                          <div className="absolute inset-0 border border-[#3d6aab] rounded-[2rem] -translate-x-[5px] translate-y-[5px] transition-transform group-hover:-translate-x-[3px] group-hover:translate-y-[3px]"></div>
                          <Button 
                              className="relative w-full sm:w-auto bg-[#3d6aab] hover:bg-white hover:text-[#3d6aab] text-white rounded-[2rem] h-[3.25rem] px-8 font-black uppercase tracking-[0.1em] text-[11px] transition-all border-none"
                              asChild
                          >
                              <a href="#solutions">Découvrir nos solutions</a>
                          </Button>
                      </div>
                      <div className="relative inline-block w-full sm:w-auto group">
                          <div className="absolute inset-0 border border-[#3d6aab] rounded-[2rem] -translate-x-[5px] translate-y-[5px] transition-transform group-hover:-translate-x-[3px] group-hover:translate-y-[3px]"></div>
                          <Button 
                              className="relative w-full sm:w-auto bg-[#3d6aab] hover:bg-white hover:text-[#3d6aab] text-white rounded-[2rem] h-[3.25rem] px-8 font-black uppercase tracking-[0.1em] text-[11px] transition-all border-none"
                              asChild
                          >
                              <a href="tel:18552649328" className="flex items-center gap-2">
                                  <Phone className="h-5 w-5" /> 1-855-264-9328
                              </a>
                          </Button>
                      </div>
                  </div>
              </div>
          </div>

          {/* Breadcrumbs - Hidden on Mobile, Absolute on Desktop */}
          <div className="absolute top-[30px] left-0 right-0 z-30 pointer-events-none hidden lg:block">
              <div className="container mx-auto px-6 pointer-events-auto">
                  <GlobalBreadcrumbs variant="light" />
              </div>
          </div>
        </section>

        {/* 2. Key Pillars of Productivity */}
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-6xl mx-auto">
                    {benefits.map((benefit, i) => (
                        <div key={i} className="text-center space-y-6 group">
                            <div className="w-20 h-20 bg-slate-50 rounded-3xl flex items-center justify-center mx-auto group-hover:bg-blue-600 transition-colors duration-500 shadow-sm border border-slate-100">
                                <benefit.icon className="h-10 w-10 text-blue-600 group-hover:text-white transition-colors duration-500" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900">{benefit.title}</h3>
                            <p className="text-slate-500 font-light leading-relaxed">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* 3. Product Gallery (Bento Style) */}
        <section id="solutions" className="py-24 bg-slate-50 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
                    <h2 className="heading-pro-max">
                        <span className="italic font-light text-blue-600 block">Variété & Qualité</span>
                        <span className="font-bold text-slate-900">Le Choix des Professionnels.</span>
                    </h2>
                    <p className="body-pro-max">
                        Des solutions adaptées à chaque recoin de votre entreprise : de l'accueil vip à la salle de repos des employés.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((p, i) => (
                        <div key={i} className="bg-white rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col border border-slate-200/50 group overflow-hidden">
                            <div className="h-64 bg-white relative p-6">
                                <img src={p.image} alt={p.title} className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700" />
                                <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm">
                                    <p.icon className={cn("h-6 w-6 text-blue-600")} />
                                </div>
                            </div>
                            <div className="p-8 flex flex-col flex-grow">
                                <h4 className="text-xl font-bold text-slate-900 mb-4">{p.title}</h4>
                                <p className="text-slate-500 font-light text-sm leading-relaxed mb-6 flex-grow">
                                    {p.description}
                                </p>
                                <NavLink to="/contact" className="text-blue-600 font-bold flex items-center gap-2 group/link text-sm uppercase tracking-wider">
                                    En savoir plus <ChevronRight className="h-4 w-4 transform group-hover/link:translate-x-1 transition-transform" />
                                </NavLink>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* 4. Immersive Context Section - Full Width */}
        <section className="bg-white border-y border-slate-100 overflow-hidden">
            <div className="flex flex-col lg:flex-row items-stretch min-h-[500px] lg:min-h-[700px]">
                {/* Left Side: Image */}
                <div className="w-full lg:w-1/2 relative group overflow-hidden h-[400px] md:h-[550px] lg:h-auto border-r border-slate-100">
                    <img
                        src={corporateLifeImg}
                        alt="Expérience d'hydratation urbaine Bricareau"
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                    />
                    {/* Floating Badge */}
                    <div className="absolute bottom-10 left-10 right-10 md:right-auto md:w-80 bg-blue-600/95 backdrop-blur-xl p-8 rounded-[2rem] shadow-2xl border border-white/20 z-20">
                         <div className="text-4xl font-bold mb-2 text-white italic tracking-tighter">10k+</div>
                         <div className="text-sm font-medium text-white/90 uppercase tracking-widest leading-tight">Entreprises satisfaites au Québec</div>
                    </div>
                </div>

                {/* Right Side: Content */}
                <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-start">
                    <div className="w-full max-w-[750px] px-8 sm:px-16 lg:px-20 xl:px-24 py-24 lg:py-32 space-y-12">
                        <div className="space-y-6">
                            <h2 className="heading-pro-max text-left">
                                <span className="italic font-light text-blue-600 block">Plus qu'une machine</span>
                                <span className="font-bold text-slate-900 leading-tight">Une Expérience d'Accueil.</span>
                            </h2>
                            <p className="body-pro-max text-left font-light leading-relaxed">
                                Chaque détail compte pour l'image de votre marque. Nos fontaines au design moderne et épuré s'intègrent parfaitement dans vos salles d'attente, halls d'entrée et bureaux de direction.
                            </p>
                        </div>

                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-12">
                            {[
                                "Installation soignée et discrète",
                                "Maintenance préventive quadrimestrielle",
                                "Technologie sans contact (options capteurs)",
                                "Glace & café en complément"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-4 text-slate-700 font-medium italic group/item">
                                    <div className="mt-1 w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center group-hover/item:bg-blue-600 transition-colors duration-300 flex-shrink-0">
                                        <CheckCircle className="h-4 w-4 text-blue-600 group-hover/item:text-white transition-colors duration-300" />
                                    </div>
                                    <span className="flex-1 leading-snug">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="flex gap-4 pt-10">
                            <div className="relative inline-block group">
                                <div className="absolute inset-0 border border-[#3d6aab] rounded-[2rem] -translate-x-[5px] translate-y-[5px] transition-transform group-hover:-translate-x-[3px] group-hover:translate-y-[3px]"></div>
                                <Button 
                                    className="relative bg-[#3d6aab] hover:bg-white hover:text-[#3d6aab] text-white rounded-[2rem] h-14 px-10 font-black uppercase tracking-widest text-[11px] transition-all border-none"
                                    asChild
                                >
                                    <NavLink to="/contact-entreprises">Essayer nos fontaines gratuitement</NavLink>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Breadcrumbs - Hidden on Mobile, Absolute on Desktop */}
                <div className="absolute top-[30px] left-0 right-0 z-30 pointer-events-none hidden lg:block">
                    <div className="container mx-auto px-6 pointer-events-auto">
                        <GlobalBreadcrumbs variant="dark" />
                    </div>
                </div>
            </div>
        </section>

        {/* 5. Ecological Impact Banner */}
        <section className="py-20 bg-slate-950 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/10 blur-[120px] rounded-full translate-x-1/2" />
            <div className="container mx-auto px-6 relative z-10 text-center space-y-8">
                <Leaf className="h-16 w-16 text-green-400 mx-auto animate-pulse" />
                <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">Zéro Plastique. Impact Maximal.</h2>
                <p className="text-slate-400 text-xl font-light max-w-2xl mx-auto leading-relaxed">
                    Un seul refroidisseur Bricareau élimine en moyenne 2 500 bouteilles de plastique par an. Rejoignez le mouvement vers un bureau sans déchets.
                </p>
                <div className="pt-4">
                    <div className="relative inline-block group">
                        <div className="absolute inset-0 border border-white rounded-[2rem] -translate-x-[5px] translate-y-[5px] transition-transform group-hover:-translate-x-[3px] group-hover:translate-y-[3px]"></div>
                        <Button 
                            className="relative bg-white hover:bg-[#3d6aab] hover:text-white text-[#0c1016] rounded-[2rem] h-14 px-10 font-black uppercase tracking-widest text-[11px] transition-all border-none"
                            asChild
                        >
                            <a href="/guides">Calculer votre impact</a>
                        </Button>
                    </div>
                </div>
            </div>
        </section>

        {/* 6. Eau Pétillante & Saveurs Section - Full Width */}
        <section id="petillante" className="bg-white border-y border-slate-100 overflow-hidden">
            <div className="flex flex-col-reverse lg:flex-row items-stretch min-h-[500px] lg:min-h-[700px]">
                {/* Left Side: Content */}
                <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end bg-slate-50/50">
                    <div className="w-full max-w-[750px] px-8 sm:px-16 lg:px-20 xl:px-24 py-24 lg:py-32 space-y-12">
                        <div className="space-y-6">
                            <h2 className="heading-pro-max text-left">
                                <span className="italic font-light text-blue-600 block">L'Effervescence Chic</span>
                                <span className="font-bold text-slate-900 leading-tight">Le luxe au quotidien.</span>
                            </h2>
                            <p className="body-pro-max text-left font-light leading-relaxed">
                                Remplacez les boissons sucrées par une eau pétillante fraîche, micro-filtrée et ajustable selon les goûts. Une solution élégante pour vos salles de conférences et bureaux de direction.
                            </p>
                        </div>

                        <ul className="space-y-6 text-left">
                            {[
                                "Système sous-comptoir ultra discret et épuré",
                                "Eau plate, fraîche et pétillante en un seul geste",
                                "Option d'ajout de saveurs naturelles",
                                "Design minimaliste s'intégrant parfaitement au décor"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-4 text-slate-800 font-medium italic group/item">
                                    <Sparkles className="h-5 w-5 text-indigo-400 group-hover/item:scale-125 transition-transform duration-300" />
                                    <span className="leading-snug">{item}</span>
                                </li>
                            ))}
                        </ul>
                         <div className="pt-8 text-left">
                            <div className="relative inline-block group">
                                <div className="absolute inset-0 border border-[#3d6aab] rounded-[2rem] -translate-x-[5px] translate-y-[5px] transition-transform group-hover:-translate-x-[3px] group-hover:translate-y-[3px]"></div>
                                <Button 
                                    className="relative bg-[#3d6aab] hover:bg-white hover:text-[#3d6aab] text-white rounded-[2rem] px-12 h-16 font-black uppercase tracking-widest text-xs transition-all border-none shadow-lg"
                                    asChild
                                >
                                    <a href="/contact">Personnaliser votre fontaine</a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                 {/* Right Side: Image */}
                <div className="w-full lg:w-1/2 relative group overflow-hidden h-[400px] md:h-[550px] lg:h-auto border-l border-slate-100">
                    <img
                        src={officeMeetingImg}
                        alt="Collaboration au bureau"
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                    />
                    {/* Floating Badge */}
                    <div className="absolute top-10 left-10 right-10 md:right-auto md:w-80 bg-white/95 backdrop-blur-xl p-8 rounded-[2rem] shadow-2xl border border-white/20 z-20">
                         <Sparkles className="h-10 w-10 text-indigo-500 mb-4" />
                         <div className="text-sm font-bold text-slate-900 leading-tight">Customisation totale du niveau de bulles.</div>
                    </div>
                </div>
            </div>
        </section>

        {/* 7. Machines à Glaçons Section - Full Width */}
        <section id="glacons" className="bg-slate-50 border-y border-slate-200 overflow-hidden">
            <div className="flex flex-col lg:flex-row items-stretch min-h-[500px] lg:min-h-[700px]">
                {/* Left Side: Image */}
                <div className="w-full lg:w-1/2 relative group overflow-hidden h-[400px] md:h-[550px] lg:h-auto border-r border-slate-200 bg-white shadow-inner">
                    <img
                        src={iceCubeImg}
                        alt="Machine à glaçons Manitowoc"
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                    />
                    {/* Floating Badge */}
                    <div className="absolute bottom-10 left-10 right-10 md:right-auto md:w-80 bg-blue-600/95 backdrop-blur-xl p-8 rounded-[2rem] shadow-2xl border border-white/20 z-20">
                         <Snowflake className="h-8 w-8 text-blue-200 mb-4" />
                         <div className="text-sm font-bold text-white uppercase tracking-wider">Production 24/7</div>
                    </div>
                </div>

                {/* Right Side: Content */}
                <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-start">
                    <div className="w-full max-w-[750px] px-8 sm:px-16 lg:px-20 xl:px-24 py-24 lg:py-32 space-y-12">
                        <div className="space-y-6">
                            <h2 className="heading-pro-max text-left">
                                <span className="italic font-light text-blue-600 block">La Glace Pure Pro</span>
                                <span className="font-bold text-slate-900 leading-tight">À la demande au bureau.</span>
                            </h2>
                            <p className="body-pro-max text-left font-light leading-relaxed">
                                Offrez à vos équipes une glace croustillante, cristalline et sans odeur. Idéale pour les réceptions d'affaires, les cafétérias ou simplement pour rafraîchir une journée de travail dynamique.
                            </p>
                        </div>

                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4 text-left">
                             <div className="p-8 bg-white rounded-3xl border border-slate-200 shadow-sm group/card hover:border-blue-300 transition-all duration-300">
                                 <h4 className="font-bold text-slate-900 mb-3 underline decoration-blue-600 decoration-2 underline-offset-4">Technologie Nugget</h4>
                                 <p className="text-sm text-slate-500 italic leading-relaxed">Une glace plus tendre, facile à croquer et qui préserve parfaitement les arômes de vos boissons préférées.</p>
                             </div>
                             <div className="p-8 bg-white rounded-3xl border border-slate-200 shadow-sm group/card hover:border-blue-300 transition-all duration-300 text-left">
                                 <h4 className="font-bold text-slate-900 mb-3 underline decoration-blue-600 decoration-2 underline-offset-4">Hygiène Totale</h4>
                                 <p className="text-sm text-slate-500 italic leading-relaxed">Circuit d'eaux micro-filtrées garantissant une glace d'une pureté absolue, 100% sécuritaire pour vos employés.</p>
                             </div>
                        </div>

                        <div className="pt-8 text-left">
                            <div className="relative inline-block group">
                                <div className="absolute inset-0 border border-[#3d6aab] rounded-[2rem] -translate-x-[5px] translate-y-[5px] transition-transform group-hover:-translate-x-[3px] group-hover:translate-y-[3px]"></div>
                                <Button 
                                    className="relative bg-[#3d6aab] hover:bg-white hover:text-[#3d6aab] text-white rounded-[2rem] px-12 h-16 font-black uppercase tracking-widest text-xs transition-all border-none"
                                    asChild
                                >
                                    <a href="/contact" className="flex items-center gap-2">Découvrir les modèles <ArrowRight className="h-4 w-4" /></a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* 6. Testimonials */}
        <TestimonialsSection />

        {/* 7. REDEFINED CTA SECTION */}
        <section className="relative h-[650px] flex items-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img
                    src={fountainImg}
                    alt="Hydratation premium au bureau"
                    className="w-full h-full object-cover object-left scale-110 -translate-x-20"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-900/80 to-blue-600/40" />
            </div>
            <div className="container mx-auto px-6 relative z-10 text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="font-light block leading-tight lg:leading-[52px] text-white text-center mb-8">
                        <span className="italic font-light text-blue-300">Modernisez votre bureau</span> <br />
                        <span className="font-bold font-serif">Réinventez la pause eau.</span>
                    </h2>
                    <p className="body-pro-max !text-white text-center mb-12 max-w-2xl mx-auto opacity-90 leading-relaxed">
                        Nos consultants sont spécialisés dans l'aménagement d'espaces d'hydratation haute performance. Profitez d'un essai gratuit de 7 jours pour votre équipe.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
                        <div className="relative inline-block group">
                            <div className="absolute inset-0 border border-white rounded-[2rem] -translate-x-[5px] translate-y-[5px] transition-transform group-hover:-translate-x-[3px] group-hover:translate-y-[3px]"></div>
                            <Button 
                                className="relative bg-white hover:bg-[#3d6aab] hover:text-white text-[#3d6aab] rounded-[2rem] px-10 h-16 font-black uppercase tracking-widest text-xs transition-all border-none"
                                asChild
                            >
                                <a href="/contact">Demander un essai gratuit</a>
                            </Button>
                        </div>
                                                                    
                        <div className="relative inline-block group">
                            <div className="absolute inset-0 border border-white rounded-[2rem] -translate-x-[5px] translate-y-[5px] transition-transform group-hover:-translate-x-[3px] group-hover:translate-y-[3px]"></div>
                            <Button
                                asChild
                                className="relative bg-transparent border border-white/30 text-white hover:bg-white hover:text-[#3d6aab] px-10 h-16 rounded-[2rem] font-black uppercase tracking-widest text-xs transition-all"
                            >
                                <a href="tel:18552649328">Parler à un conseiller</a>
                            </Button>
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

export default Entreprises;
