import React, { useEffect } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import GlobalBreadcrumbs from "@/components/GlobalBreadcrumbs";
import TestimonialsSection from "@/components/TestimonialsSection";
import {
    Phone,
    ArrowRight,
    Settings,
    Calendar,
    RefreshCw,
    CheckCircle2,
    Droplets,
    Waves,
    MessageSquare,
    Mail,
    MapPin,
    Star,
    ChevronRight,
    PackageCheck,
    Check,
    Search,
    Wrench,
    HeartHandshake,
    ShieldCheck,
    Shield
} from 'lucide-react';
import safetyIcon from "@/assets/1709235770048.png";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import ConsultationFormSection from "@/components/ConsultationFormSection";
import heroPortables from "@/assets/sub-category-dryer.webp";
import heroBg from "@/assets/unnamed (4).jpg";
import waterSoftenerImg from "@/assets/Adoucisseurs d'eau.webp";
import drinkingWaterImg from "@/assets/Solutions d'eau potable.webp";
import specialFiltersImg from "@/assets/Filtres d'eau spécialisés.webp";
import missionImg from "@/assets/boire-eau-robinet.jpg";
import portableSoftenerProdImg from "@/assets/Portable Water Softener.webp";
import { cn } from "@/lib/utils";
import rvCampingImg from "@/assets/luxury_rv_camping.png";
import yachtImg from "@/assets/luxury_yacht.png";
import cabinImg from "@/assets/modern_cabin.png";
import waterGlassImg from "@/assets/portable_water_glass.png";
import cableIcon from "@/assets/cable.svg";
import boatBusIcon from "@/assets/boat_bus.svg";
import carryOnBagIcon from "@/assets/carry_on_bag.svg";


const AdoucisseursPortables = () => {
    const [currentSlide, setCurrentSlide] = React.useState(0);
    const slides = [rvCampingImg, yachtImg, cabinImg];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000); // 5 seconds
        return () => clearInterval(timer);
    }, [slides.length]);

    useEffect(() => {
        document.title = "Adoucisseur d'eau portable | Service d'Échange et Livraison au Québec | Bricareau";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "La solution flexible pour une eau douce partout au Québec : l'adoucisseur d'eau portable par échange. Idéal pour VR, bateaux et chalets. Livraison à domicile.");
        }

        // OG Tags
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) ogTitle.setAttribute("content", "Adoucisseur d'eau portable au Québec | Bricareau");
        const ogDesc = document.querySelector('meta[property="og:description"]');
        if (ogDesc) ogDesc.setAttribute("content", "Profitez d’une eau douce sans installation permanente avec notre service d'échange d'adoucisseurs portables.");
        const ogUrl = document.querySelector('meta[property="og:url"]');
        if (ogUrl) ogUrl.setAttribute("content", "https://bricareau.com/adoucisseurs-portables");
    }, []);

    return (
        <div className="min-h-screen font-sans text-gray-900 bg-white selection:bg-[#0066FF] selection:text-white" style={{ '--top-banner': '168 100% 42%' } as React.CSSProperties}>
             <Header />
 
             <main>
                <Hero 
                    image={heroBg}
                    highlightedTitle="Adoucisseur d'eau portable,"
                    mainTitle="une eau douce où que vous soyez !"
                    subtitle="La solution d'adoucissement flexible pour votre résidence ou commerce sans installation permanence. Profitez de notre service d'échange d'adoucisseur portable avec livraison directement chez vous."
                    showPhone={true}
                    showBreadcrumbs={true}
                    imagePosition="object-[center_25%]"
                />


            {/* 3. Sections Benefits - Ultra-Modern Nomad Portfolio */}
            <section className="py-24 lg:py-40 bg-white relative overflow-hidden">
                {/* Decorative Fluid Background */}
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-slate-50/50 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />

                <div className="container mx-auto px-6 relative z-10">
                    {/* Centered Premium Header */}
                    <div className="max-w-4xl mx-auto text-center mb-24">
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-600/10 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-8">
                            <Waves className="w-3 h-3" />
                            L'Expérience Nomade Bricareau
                        </span>
                        <h2 className="heading-pro-max text-center mb-8">
                            <span className="italic font-light text-[#2563eb] block">Une eau parfaite,</span>
                            <span className="font-bold text-[#1e3a8a] block">kilomètre après kilomètre.</span>
                        </h2>
                        <p className="text-slate-500 font-light text-xl leading-relaxed max-w-2xl mx-auto">
                            Que vous exploriez les routes dans un VR de luxe ou que vous profitiez du calme d'un chalet isolé, nos solutions portables redéfinissent le confort en voyage.
                        </p>
                    </div>

                    {/* Premium Bento Portfolio Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 h-auto lg:h-[900px]">
                        
                        {/* Main Feature Card - 100% Nomade (Left, Large) */}
                        <div className="md:col-span-12 lg:col-span-7 group relative rounded-[3.5rem] overflow-hidden shadow-2xl shadow-blue-900/10 border border-slate-100 transition-all duration-700 hover:-translate-y-2">
                            {/* Background Images with Multi-Slide Logic */}
                            <div className="absolute inset-0 w-full h-full">
                                {slides.map((slide, idx) => (
                                    <img 
                                        key={idx}
                                        src={slide} 
                                        alt={`Nomade Bricareau Slide ${idx + 1}`}
                                        className={cn(
                                            "absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out",
                                            currentSlide === idx ? "opacity-100 scale-100 z-0" : "opacity-0 scale-110 -z-10"
                                        )}
                                    />
                                ))}
                            </div>
                            {/* Glassmorphic Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a8a]/90 via-[#1e3a8a]/40 to-transparent" />
                            
                            {/* Floating intelligence chip */}
                            <div className="absolute top-8 left-8 z-20 backdrop-blur-md bg-white/10 border border-white/20 p-6 rounded-[2rem] max-w-[280px] hidden md:block">
                                <p className="text-white/90 text-sm font-light italic leading-relaxed">
                                    "L'eau dure des campings endommage les chauffe-eaux de VR en moins de 2 ans."
                                </p>
                            </div>

                            {/* Content at Bottom */}
                            <div className="absolute inset-x-0 bottom-0 p-10 md:p-14 z-20">
                                <div className="flex flex-col gap-6">
                                    <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-xl flex items-center justify-center text-white border border-white/30 mb-2 group-hover:scale-110 transition-transform">
                                        <img src={carryOnBagIcon} alt="Carry On Bag Icon" className="h-8 w-8 filter brightness-0 invert" />
                                    </div>
                                    <div>
                                        <span className="text-blue-300 font-bold text-xs uppercase tracking-[0.2em]">Liberté Totale</span>
                                        <h3 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-6">100% Nomade</h3>
                                        <p className="text-white/80 font-light text-lg leading-relaxed max-w-lg mb-8">
                                            Un format ultra-compact et poids plume conçu pour se glisser dans n'importe quelle soute. Emportez la qualité Bricareau partout avec vous.
                                        </p>
                                        <div className="flex flex-wrap gap-3">
                                            {["Poids réduit", "Format valise", "Poignée ergonomique"].map((f, i) => (
                                                <span key={i} className="px-5 py-2.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-sm font-medium">
                                                    {f}
                                                </span>
                                            ))}
                                        </div>
                                        {/* Slide Indicators */}
                                        <div className="flex gap-2 mt-8">
                                            {slides.map((_, idx) => (
                                                <div 
                                                    key={idx} 
                                                    className={cn(
                                                        "h-1.5 rounded-full transition-all duration-500",
                                                        currentSlide === idx ? "w-8 bg-blue-400" : "w-2 bg-white/30"
                                                    )} 
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Stacked Column */}
                        <div className="md:col-span-12 lg:col-span-5 grid grid-cols-1 gap-8">
                            {/* Card 2: Plug & Play (Top Right) */}
                            <div className="group relative bg-[#1e3a8a] rounded-[3rem] p-10 md:p-12 overflow-hidden shadow-2xl shadow-blue-900/20 transition-all duration-700 hover:-translate-y-2 min-h-[400px] flex flex-col">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-blue-400/20 transition-colors" />
                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-xl flex items-center justify-center mb-8 border border-white/20 group-hover:scale-110 transition-transform">
                                        <img src={cableIcon} alt="Cable Icon" className="h-7 w-7 filter brightness-0 invert opacity-80 group-hover:opacity-100 transition-all" />
                                    </div>
                                    <div className="mt-auto">
                                        <span className="text-blue-100 font-bold text-xs uppercase tracking-[0.2em]">Plug & Play</span>
                                        <h3 className="text-2xl font-bold text-white mt-3 mb-4">Installation Instantanée</h3>
                                        <p className="text-blue-50 font-light text-lg leading-relaxed mb-6">
                                            Connectez-le simplement entre le robinet et votre entrée d'eau. Prêt en moins de 5 minutes.
                                        </p>
                                        <div className="flex items-center gap-4 text-blue-100 font-medium">
                                            <span className="w-8 h-[1px] bg-white/50" />
                                            <span className="text-sm">Aucun outil requis</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Card 3: Protection (Bottom Right) */}
                            <div className="group relative bg-white rounded-[3rem] overflow-hidden shadow-xl shadow-blue-900/5 hover:shadow-2xl transition-all duration-700 border border-slate-100 flex flex-col">
                                <div className="relative h-48 md:h-64 overflow-hidden bg-slate-50">
                                    <img 
                                        src={waterGlassImg} 
                                        alt="Pureté de l'eau adoucie Bricareau"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                                <div className="p-10 relative z-10 -mt-12 bg-white rounded-t-[3rem] flex-1 flex flex-col">
                                    <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center mb-6 shadow-lg shadow-blue-200 group-hover:scale-110 transition-transform">
                                        <img src={boatBusIcon} alt="Boat & Bus Icon" className="h-7 w-7 filter brightness-0 invert" />
                                    </div>
                                    <span className="text-blue-600 font-bold text-xs uppercase tracking-[0.2em]">Actifs Préservés</span>
                                    <h3 className="text-2xl font-bold text-[#1e3a8a] mt-3 mb-4">Protection Maximale</h3>
                                    <p className="text-slate-500 font-light text-lg leading-relaxed">
                                        Élimine le calcaire qui réduit l'efficacité de vos tuyauteries et appareils de voyage. Longue vie à votre confort.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Section Processus - Modern "Timeline" Service Design (UV Inspired) */}
            <section className="py-24 lg:py-32 bg-slate-50 relative overflow-hidden">
                {/* Advanced "Service Flow" Background Layers */}
                <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
                    {/* Diffused Product Image - Integrating the subject without clutter */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-full opacity-10 md:opacity-[0.22] pointer-events-none z-0">
                        <img 
                            src={portableSoftenerProdImg} 
                            alt="" 
                            className="w-full h-full object-contain scale-110"
                        />
                         {/* Soft Gradient Fade for diffusion */}
                        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-transparent to-slate-50" />
                        <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-transparent to-slate-50" />
                    </div>

                    {/* Spectral Glows - Water and Purity Focus */}
                    <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] bg-[radial-gradient(circle,rgba(37,99,235,0.08)_0%,transparent_70%)] blur-[120px]" />
                    <div className="absolute bottom-[-20%] right-[-10%] w-[80%] h-[80%] bg-[radial-gradient(circle,rgba(59,130,246,0.1)_0%,transparent_70%)] blur-[140px]" />
                    
                    {/* Linear Flow Beams */}
                    <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-400/20 to-transparent rotate-3 blur-[1px]" />
                    <div className="absolute bottom-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-600/10 to-transparent -rotate-6 blur-[2px]" />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-24">
                        <span className="inline-block px-4 py-1.5 bg-blue-600/10 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-6">
                            NOTRE FONCTIONNEMENT
                        </span>
                        <h2 className="mb-8 text-center heading-pro-max">
                            <span className="italic font-light text-[#2563eb] block">Un service simple</span>
                            <span className="font-bold text-[#1e3a8a] block">& sans souci.</span>
                        </h2>
                        
                        <p className="text-slate-500 font-light text-lg max-w-2xl mx-auto leading-relaxed">
                            De l'installation initiale à la livraison des unités fraîchement régénérées, nous gérons chaque détail technique pour vous garantir une eau parfaite en permanence.
                        </p>
                    </div>

                    <div className="relative">
                        {/* Central Flow Line (Desktop Only) */}
                        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-200 to-transparent -translate-x-1/2 opacity-60" />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 lg:gap-x-32 gap-y-16 lg:gap-y-0 relative">
                            {[
                                {
                                    number: "01",
                                    title: "Analyse d'eau",
                                    desc: "Nous commençons par un test complet pour calibrer votre adoucisseur portable selon vos besoins spécifiques."
                                },
                                {
                                    number: "02",
                                    title: "Installation Rapide",
                                    desc: "Nos techniciens installent votre système portatif en quelques minutes, sans travaux lourds ni plomberie complexe."
                                },
                                {
                                    number: "03",
                                    title: "Cycles d'Échange",
                                    desc: "Recevez des unités fraîchement régénérées selon un calendrier simplifié qui s'adapte à votre consommation réelle."
                                },
                                {
                                    number: "04",
                                    title: "Suivi & Support",
                                    desc: "Une assistance continue et des vérifications de routine pour s'assurer que votre eau reste d'une qualité irréprochable."
                                }
                            ].map((step, idx) => (
                                <div 
                                    key={idx} 
                                    className={`group relative flex flex-col md:flex-row items-start lg:items-center gap-6 lg:gap-8 ${
                                        idx % 2 === 0 ? 'lg:justify-end lg:text-right text-left' : 'lg:justify-start lg:text-left text-left'
                                    } ${
                                        // Stagger effect on desktop
                                        idx % 2 !== 0 ? 'lg:translate-y-24' : ''
                                    } lg:mb-32 transition-all duration-700`}
                                >
                                    {/* Content container */}
                                    <div className={`flex flex-col ${idx % 2 === 0 ? 'lg:items-end' : 'lg:items-start'} max-w-md`}>
                                        <div className={`w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-6 text-blue-600 font-bold text-lg group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110 transition-all duration-500 shadow-[0_0_20px_rgba(37,99,235,0.1)]`}>
                                            {step.number}
                                        </div>
                                        <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight group-hover:text-blue-600 transition-colors">
                                            {step.title}
                                        </h3>
                                        <p className={`text-slate-500 font-light leading-relaxed ${idx % 2 === 0 ? 'lg:text-right' : 'lg:text-left'} text-justify md:text-inherit`}>
                                            {step.desc}
                                        </p>
                                    </div>

                                    {/* Connecting Glow Node on the central line (Desktop only) */}
                                    <div className={`hidden lg:block absolute top-1/4 w-4 h-4 rounded-full bg-blue-100 border-2 border-white shadow-sm transition-all duration-500 group-hover:bg-blue-600 group-hover:scale-125 group-hover:shadow-[0_0_15px_rgba(37,99,235,0.5)] ${
                                        idx % 2 === 0 ? '-right-16 lg:-right-[68px]' : '-left-16 lg:-left-[68px]'
                                    } `} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Section Testimonials */}
            <TestimonialsSection
                filterProduct="/adoucisseurs-portables"
            title={
                <>
                <h2 className="mb-8 heading-pro-max text-center">
                    <span className="italic font-light text-[#2563eb] block">L’eau pure comme standard.</span>
                    <span className="font-bold text-[#1e3a8a] block">Le service comme signature.</span>
                </h2>
                </>
            }
        />

            {/* 6. Section Associated Products */}
            <section className="bg-white py-24">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="mb-8 heading-pro-max text-center">                                
                                <span className="font-bold text-[#1e3a8a] block">Découvrez les produits associés</span>
                             </h2>
                        <p className="font-light text-gray-500 max-w-2xl mx-auto text-center">
                            Optimisez votre expérience de traitement d'eau avec nos solutions complémentaires.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                name: "Adoucisseurs d'eau",
                                desc: "Éliminez le calcaire pour une peau douce, un linge éclatant et une protection durable de vos installations.",
                                img: waterSoftenerImg,
                                link: "/adoucisseur-eau-residentiel"
                            },
                            {
                                name: "Stations d'eau potable",
                                desc: "Une eau de qualité minérale directement à votre évier, pour une hydratation pure et sans déchets plastiques.",
                                img: drinkingWaterImg,
                                link: "/systeme-de-filtration-deau-potable"
                            },
                            {
                                name: "Systèmes de filtration d'eau spécialisés",
                                desc: "Nos filtres spécialisés sont conçus pour cibler et éliminer efficacement les contaminants spécifiques de votre eau.",
                                img: specialFiltersImg,
                                link: "/filtres-deau-pour-toute-la-maison"
                            }
                        ].map((prod, i) => (
                            <div
                                key={i}
                                className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full cursor-pointer"
                                onClick={() => window.location.href = prod.link}
                            >
                                <div className="relative h-80 overflow-hidden bg-slate-50 flex items-center justify-center p-12">
                                    <img
                                        src={prod.img}
                                        alt={`${prod.name} - Solution Bricareau pour une eau pure et sans calcaire partout`}
                                        className="max-h-full object-contain group-hover:scale-110 transition-transform duration-700 mix-blend-multiply"
                                    />
                                </div>
                                <div className="p-8 space-y-4 flex flex-col flex-grow border-t-2 border-transparent group-hover:border-blue-600 transition-colors">
                                    <h3
                                        className="card-title group-hover:text-blue-600 transition-colors text-center"
                                    >
                                        {prod.name}
                                    </h3>
                                    <p
                                        className="leading-[25px] text-slate-500 font-light flex-grow text-justify"
                                        style={{}}
                                    >
                                        {prod.desc}
                                    </p>
                                    <div
                                        className="inline-flex items-center gap-2 text-blue-600 font-bold text-xs tracking-widest uppercase mt-4 group-hover:underline self-end"
                                        style={{}}
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
                {/* Floating Sticky CTA - Phase III Conversion Focus */}
                      <div className="hidden md:block fixed bottom-8 right-8 z-[100] animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-[3s] pointer-events-none">
                        <div className="pointer-events-auto group/sticky">
                          <Button
                            asChild
                            className="bg-white hover:-translate-y-2 transition-all duration-10000 active:scale-95"
                            style={{ backdropFilter: "blur(20px)" }}
                          >
                            <a href="/consultation" className="flex items-center gap-4 animate-bounce" style={{ animationDuration: '3s' }}>
                              <span className="font-black-light text-sm tracking-wider white text-blue-600 space-nowrap text-center">
                                Réservez votre <br />consultation gratuite
                              </span>
                              <div className="w-10 h-10 bg-[#2563eb] rounded-full flex items-center justify-center text-white group-hover/sticky:rotate-[360deg] shadow-lg shadow-blue-200">
                                  <ArrowRight className="w-5 h-5" />
                                </div>
                            </a>
                          </Button>
                        </div>
                      </div>
             </main>
            <Footer />
        </div>
    );
};

export default AdoucisseursPortables;
