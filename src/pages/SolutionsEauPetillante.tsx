import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GlobalBreadcrumbs from "@/components/GlobalBreadcrumbs";
import TestimonialsSection from "@/components/TestimonialsSection";
import Hero from "@/components/Hero";
import {
    Phone,
    Zap,
    ArrowRight,
    Leaf,
    Plus,
    Minus,
    Award,
    ShieldCheck,
    Droplets,
    Recycle,
    PiggyBank,
    Star,
    ChevronRight,
    ChevronLeft,
    Sparkles,
    Settings,
    ChevronDown
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from "@/components/ui/accordion";

// Existing high-fidelity assets
import heroFountains from "@/assets/Fontaines d'eau.webp";
import countertopFountainImg from "@/assets/A9.jpg";
import bottlelessFountainImg from "@/assets/A13.jpg";
import iceMachineImg from "@/assets/Machine+à+glaçons+de+comptoir+auto-nettoyante+de+26+lb+R.W.FLAME-78609293.webp";
import ecoImpactImg4 from "@/assets/water-dispenser in office.jpg";
import ecoImpactImg5 from "@/assets/water-dispenser in kitchen.jpg";
import eauFontaineImg from "@/assets/83658.jpg";

const SolutionsEauPetillante = () => {
    const [activeFeature, setActiveFeature] = useState(0);
    const [activeFeatureImage, setActiveFeatureImage] = useState(eauFontaineImg);
    const [activeTab, setActiveTab] = useState("sparkling");
    const [activeFaq, setActiveFaq] = useState<number | null>(null);

    useEffect(() => {
        document.title = "Systèmes d'Eau Gazeuse pour Bureaux | Bricareau";
        window.scrollTo(0, 0);
    }, []);

    const features = [
        {
            title: "Pureté absolue",
            desc: "Une filtration avancée au charbon actif combinée à une désinfection UV-C de pointe pour éliminer 99,99% des contaminants microbiologiques et offrir une eau pure.",
        },
        {
            title: "Température idéale",
            desc: "De l'eau glacée intensément rafraîchissante, de l'eau tiède équilibrée, ou de l'eau chaude instantanée à température optimale pour vos thés et cafés.",
        },
        {
            title: "Design élégant",
            desc: "Des lignes contemporaines épurées, des finitions en inox brossé et une esthétique prestigieuse qui s'intègrent parfaitement dans vos locaux modernes.",
        },
        {
            title: "Économies durables",
            desc: "Réduisez vos coûts d'hydratation jusqu'à 70% par rapport à l'achat et à la logistique complexe des bonbonnes ou bouteilles d'eau en plastique.",
        }
    ];

    const faqItems = [
        {
            title: "Filtration Charbon Actif",
            content: "Notre filtre à charbon actif de haute densité absorbe le chlore, retient les sédiments, neutralise les odeurs et améliore considérablement le goût de l'eau pour une expérience gustative d'exception à chaque tasse."
        },
        {
            title: "Stérilisation UV-C",
            content: "Un rayonnement ultraviolet de type C puissant détruit l'ADN des micro-organismes, bactéries et virus directement au point de distribution, garantissant une eau stérile et d'une sécurité hygiénique absolue."
        },
        {
            title: "Osmose Inverse",
            content: "Pour une pureté moléculaire absolue, la membrane d'osmose inverse élimine les métaux lourds, le calcaire, les nitrates, les résidus chimiques de pesticides et toutes les impuretés microscopiques en suspension."
        }
    ];

    return (
        <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">
            <Header />
            
            <main>
                {/* SECTION 1: MODERN CINEMATIC HERO (Same style as /residentiel) */}
                <Hero 
                    image={heroFountains}
                    highlightedTitle="Systèmes d'eau "
                    mainTitle="gazeuse pour bureaux."
                    subtitle="Offrez à vos collaborateurs une eau gazeuse filtrée d'exception, fraîche et pétillante, directement raccordée à votre réseau. Une solution écologique, économique et sans logistique de bonbonnes."
                    ctaText="OBTENIR MON ESSAI GRATUIT"
                    ctaLink="/contact-entreprises"
                    showPhone={true}
                    badge="Prestige & Hydratation"
                    showBreadcrumbs={true}
                    breadcrumbVariant="light"
                    homeVariant={false}
                />

                {/* SECTION 2: HIGH-FIDELITY STATEMENT BANNER */}
                <section className="py-24 bg-white border-y border-slate-100">
                    <div className="container mx-auto px-6 text-center max-w-4xl">
                        <div className="space-y-6">
                            <h3 className="text-xs font-black text-blue-600 uppercase tracking-[0.2em] mb-4">
                                L'EXCELLENCE DE L'EAU À LA SOURCE
                            </h3>
                            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
                                Engagé à fournir des solutions de haute qualité.
                            </h2>
                            <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full" />
                            <p className="text-slate-500 text-lg font-light leading-relaxed max-w-3xl mx-auto pt-2">
                                Nos fontaines à eau gazeuse sont conçues pour améliorer le bien-être de vos collaborateurs et de vos clients. Grâce à nos technologies de filtration d'eau avancées, profitez d'une eau d'une pureté absolue, d'un goût incomparable et d'une fraîcheur constante à chaque tasse.
                            </p>
                            <div className="pt-4">
                                <a href="#solutions-catalog" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-bold uppercase tracking-widest text-xs transition-colors group">
                                    En savoir plus <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 3: BENTO FLUID HUB ("Élevez le standard d'hydratation de vos bureaux") */}
                <section id="office-benefits" className="py-32 bg-slate-50/50 relative overflow-hidden">
                    <style>{`
                        @keyframes shimmer {
                            0% { transform: translateX(-150%) skewX(-12deg); }
                            100% { transform: translateX(500%) skewX(-12deg); }
                        }
                        .animate-shimmer {
                            animation: shimmer 3s infinite;
                        }
                    `}</style>

                    {/* Background architectural vertical lines */}
                    <div className="absolute left-[8%] top-0 bottom-0 w-px bg-slate-100 hidden xl:block z-0" />
                    <div className="absolute right-[8%] top-0 bottom-0 w-px bg-slate-100 hidden xl:block z-0" />

                    <div className="container mx-auto px-6 relative z-10 max-w-7xl">
                        <div className="text-center mb-24 max-w-3xl mx-auto space-y-6">
                            <span className="inline-block px-4 py-1.5 bg-blue-600/10 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-[0.3em]">
                                VALEUR AJOUTÉE
                            </span>
                            <h2 className="text-4xl md:text-6xl font-light tracking-tight text-slate-900 leading-tight uppercase">
                                Élevez le standard <br />
                                <span className="text-blue-600 italic font-bold font-serif lowercase">d'hydratation de vos bureaux.</span>
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                            
                            {/* Left Column: Asymmetrical Bento Grid of Features */}
                            <div className="col-span-1 lg:col-span-7 z-20">
                                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                                    
                                    {/* Cell 1: Pureté absolue (Large 7-col) */}
                                    <div 
                                        onClick={() => {
                                            setActiveFeature(0);
                                            setActiveFeatureImage(eauFontaineImg);
                                        }}
                                        className={cn(
                                            "md:col-span-7 p-8 rounded-[2.5rem] cursor-pointer transition-all duration-500 border relative overflow-hidden flex flex-col justify-between min-h-[280px]",
                                            activeFeature === 0 
                                                ? "bg-[#18448F] border-transparent text-white shadow-[0_20px_50px_rgba(24,68,143,0.15)] translate-x-1"
                                                : "bg-white/80 backdrop-blur-md border-slate-100 hover:border-slate-200 text-slate-800 shadow-sm hover:shadow-md hover:translate-x-0.5"
                                        )}
                                    >
                                        {/* Pure water bouncing laser scanner overlay */}
                                        {activeFeature === 0 && (
                                            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-300 to-transparent opacity-60 animate-[bounce_4s_infinite]" />
                                        )}
                                        {activeFeature === 0 && (
                                            <div className="absolute -top-16 -left-16 w-32 h-32 bg-blue-400/20 blur-2xl rounded-full pointer-events-none" />
                                        )}

                                        <div className="flex justify-between items-start">
                                            <span className={cn(
                                                "text-[9px] font-black uppercase tracking-widest",
                                                activeFeature === 0 ? "text-blue-200" : "text-blue-600"
                                            )}>
                                                Purification Moléculaire
                                            </span>
                                            <span className={cn("text-3xl font-light font-serif tracking-tighter", activeFeature === 0 ? "text-blue-300/40" : "text-slate-250")}>
                                                01
                                            </span>
                                        </div>
                                        
                                        <div className="space-y-3 mt-6">
                                            <h3 className="text-xl font-bold tracking-tight">{features[0].title}</h3>
                                            <p className={cn("text-sm font-light leading-relaxed text-justify", activeFeature === 0 ? "text-blue-100/90" : "text-slate-500")}>
                                                {features[0].desc}
                                            </p>
                                        </div>
                                    </div>
                                    
                                    {/* Cell 2: Température idéale (Compact 5-col) */}
                                    <div 
                                        onClick={() => {
                                            setActiveFeature(1);
                                            setActiveFeatureImage(countertopFountainImg);
                                        }}
                                        className={cn(
                                            "md:col-span-5 p-8 rounded-[2.5rem] cursor-pointer transition-all duration-500 border relative overflow-hidden flex flex-col justify-between min-h-[280px]",
                                            activeFeature === 1 
                                                ? "bg-[#18448F] border-transparent text-white shadow-[0_20px_50px_rgba(24,68,143,0.15)] translate-x-1"
                                                : "bg-white/80 backdrop-blur-md border-slate-100 hover:border-slate-200 text-slate-800 shadow-sm hover:shadow-md hover:translate-x-0.5"
                                        )}
                                    >
                                        {activeFeature === 1 && (
                                            <div className="absolute -top-16 -left-16 w-32 h-32 bg-cyan-400/20 blur-2xl rounded-full pointer-events-none" />
                                        )}

                                        <div className="flex justify-between items-start">
                                            <span className={cn(
                                                "text-[9px] font-black uppercase tracking-widest",
                                                activeFeature === 1 ? "text-cyan-200" : "text-[#18448F]"
                                            )}>
                                                Multi-Température
                                            </span>
                                            <span className={cn("text-3xl font-light font-serif tracking-tighter", activeFeature === 1 ? "text-cyan-300/40" : "text-slate-250")}>
                                                02
                                            </span>
                                        </div>

                                        <div className="space-y-3 mt-6">
                                            <h3 className="text-xl font-bold tracking-tight">{features[1].title}</h3>
                                            <p className={cn("text-sm font-light leading-relaxed text-justify", activeFeature === 1 ? "text-blue-100/90" : "text-slate-500")}>
                                                {features[1].desc}
                                            </p>
                                        </div>

                                        {/* Interactive thermal indicators at the bottom */}
                                        <div className="flex gap-2 mt-4 pt-2">
                                            <span className={cn(
                                                "px-2.5 py-0.5 rounded-full text-[9px] font-bold tracking-wider uppercase border",
                                                activeFeature === 1 ? "bg-cyan-500/20 border-cyan-300 text-cyan-200" : "bg-cyan-50 border-cyan-200 text-cyan-600"
                                            )}>
                                                Froid
                                            </span>
                                            <span className={cn(
                                                "px-2.5 py-0.5 rounded-full text-[9px] font-bold tracking-wider uppercase border",
                                                activeFeature === 1 ? "bg-slate-400/20 border-slate-350 text-slate-200" : "bg-slate-50 border-slate-200 text-slate-600"
                                            )}>
                                                Tempéré
                                            </span>
                                            <span className={cn(
                                                "px-2.5 py-0.5 rounded-full text-[9px] font-bold tracking-wider uppercase border",
                                                activeFeature === 1 ? "bg-amber-500/20 border-amber-300 text-amber-250" : "bg-amber-50 border-amber-200 text-amber-600"
                                            )}>
                                                Chaud
                                            </span>
                                        </div>
                                    </div>

                                    {/* Cell 3: Design élégant (Compact 5-col) */}
                                    <div 
                                        onClick={() => {
                                            setActiveFeature(2);
                                            setActiveFeatureImage(bottlelessFountainImg);
                                        }}
                                        className={cn(
                                            "md:col-span-5 p-8 rounded-[2.5rem] cursor-pointer transition-all duration-500 border relative overflow-hidden flex flex-col justify-between min-h-[280px]",
                                            activeFeature === 2 
                                                ? "bg-[#18448F] border-transparent text-white shadow-[0_20px_50px_rgba(24,68,143,0.15)] translate-x-1"
                                                : "bg-white/80 backdrop-blur-md border-slate-100 hover:border-slate-200 text-slate-800 shadow-sm hover:shadow-md hover:translate-x-0.5"
                                        )}
                                    >
                                        {activeFeature === 2 && (
                                            <div className="absolute -top-16 -left-16 w-32 h-32 bg-indigo-400/20 blur-2xl rounded-full pointer-events-none" />
                                        )}

                                        <div className="flex justify-between items-start">
                                            <span className={cn(
                                                "text-[9px] font-black uppercase tracking-widest",
                                                activeFeature === 2 ? "text-indigo-200" : "text-[#18448F]"
                                            )}>
                                                Esthétique Noble
                                            </span>
                                            <span className={cn("text-3xl font-light font-serif tracking-tighter", activeFeature === 2 ? "text-indigo-300/40" : "text-slate-250")}>
                                                03
                                            </span>
                                        </div>

                                        <div className="space-y-3 mt-6">
                                            <h3 className="text-xl font-bold tracking-tight">{features[2].title}</h3>
                                            <p className={cn("text-sm font-light leading-relaxed text-justify", activeFeature === 2 ? "text-blue-100/90" : "text-slate-500")}>
                                                {features[2].desc}
                                            </p>
                                        </div>

                                        {/* Glass glare shimmer effect */}
                                        <div className={cn(
                                            "absolute -inset-y-12 w-8 bg-white/20 blur-lg -skew-x-12 translate-x-[-150%] transition-transform duration-1000",
                                            activeFeature === 2 ? "animate-shimmer" : ""
                                        )} />
                                    </div>

                                    {/* Cell 4: Économies durables (Large 7-col) */}
                                    <div 
                                        onClick={() => {
                                            setActiveFeature(3);
                                            setActiveFeatureImage(ecoImpactImg4);
                                        }}
                                        className={cn(
                                            "md:col-span-7 p-8 rounded-[2.5rem] cursor-pointer transition-all duration-500 border relative overflow-hidden flex flex-col justify-between min-h-[280px]",
                                            activeFeature === 3 
                                                ? "bg-[#18448F] border-transparent text-white shadow-[0_20px_50px_rgba(24,68,143,0.15)] translate-x-1"
                                                : "bg-white/80 backdrop-blur-md border-slate-100 hover:border-slate-200 text-slate-800 shadow-sm hover:shadow-md hover:translate-x-0.5"
                                        )}
                                    >
                                        {activeFeature === 3 && (
                                            <div className="absolute -top-16 -left-16 w-32 h-32 bg-sky-400/20 blur-2xl rounded-full pointer-events-none" />
                                        )}

                                        <div className="flex justify-between items-start">
                                            <span className={cn(
                                                "text-[9px] font-black uppercase tracking-widest",
                                                activeFeature === 3 ? "text-sky-200" : "text-[#18448F]"
                                            )}>
                                                Rendement ROI & Éco
                                            </span>
                                            <span className={cn("text-3xl font-light font-serif tracking-tighter", activeFeature === 3 ? "text-sky-300/40" : "text-slate-250")}>
                                                04
                                            </span>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center mt-6">
                                            <div className="md:col-span-8 space-y-2">
                                                <h3 className="text-xl font-bold tracking-tight">{features[3].title}</h3>
                                                <p className={cn("text-sm font-light leading-relaxed text-justify", activeFeature === 3 ? "text-blue-100/90" : "text-slate-500")}>
                                                    {features[3].desc}
                                                </p>
                                            </div>
                                            <div className="md:col-span-4 flex justify-center pt-2 md:pt-0">
                                                <div className={cn(
                                                    "w-20 h-20 rounded-full border-4 flex flex-col items-center justify-center shadow-lg relative overflow-hidden transition-all duration-500",
                                                    activeFeature === 3 
                                                        ? "border-cyan-400 bg-cyan-950/20 text-white" 
                                                        : "border-blue-100 bg-blue-50/50 text-[#18448F]"
                                                )}>
                                                    <div className={cn(
                                                        "absolute bottom-0 left-0 right-0 h-[70%] transition-transform duration-1000 origin-bottom scale-y-100 opacity-20",
                                                        activeFeature === 3 ? "bg-cyan-400" : "bg-blue-600"
                                                    )} />
                                                    <span className="text-xl font-black leading-none">-70%</span>
                                                    <span className="text-[7px] font-black uppercase tracking-wider mt-1 opacity-80">Coûts</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            {/* Right Column: Liquid Glass Showcase Window */}
                            <div className="col-span-1 lg:col-span-5 relative z-10 flex justify-center">
                                
                                {/* Ambient Shifting Glow */}
                                <div className={cn(
                                    "absolute -inset-12 blur-[120px] rounded-full transition-all duration-1000 opacity-60 z-0",
                                    activeFeature === 0 && "bg-blue-500/20 translate-x-4 translate-y-4",
                                    activeFeature === 1 && "bg-cyan-500/20 -translate-x-4 -translate-y-4",
                                    activeFeature === 2 && "bg-indigo-500/20 translate-x-6 -translate-y-6",
                                    activeFeature === 3 && "bg-sky-500/20 -translate-x-6 translate-y-6"
                                )} />

                                {/* Interactive Frame with Glassmorphic Overlay */}
                                <div className="w-full relative max-w-[480px]">
                                    
                                    {/* Dot pattern decorative element */}
                                    <div className="absolute -top-8 -left-8 w-32 h-32 opacity-30 pointer-events-none z-0">
                                        <div className="grid grid-cols-8 gap-3">
                                            {Array.from({ length: 64 }).map((_, i) => (
                                                <div key={i} className="w-1 h-1 bg-blue-500 rounded-full" />
                                            ))}
                                        </div>
                                    </div>

                                    {/* Main Glass Frame Container */}
                                    <div className="bg-white rounded-[2.5rem] p-6 sm:p-10 border border-slate-100/80 shadow-[0_45px_90px_-25px_rgba(0,0,0,0.08)] relative z-10 overflow-hidden flex items-center justify-center aspect-square sm:aspect-square">
                                        
                                        {/* Fluid background pattern */}
                                        <div className="absolute inset-0 bg-gradient-to-tr from-slate-50 via-white to-blue-50/30 opacity-60" />
                                        
                                        {/* Pure water molecular circle overlay */}
                                        <div className="absolute w-64 h-64 rounded-full border border-blue-500/5 animate-[spin_40s_linear_infinite] z-0" />
                                        
                                        <img 
                                            key={activeFeatureImage}
                                            src={activeFeatureImage} 
                                            alt="Solutions d'hydratation écologiques et design pour le bureau Bricareau" 
                                            className="relative z-10 max-h-full max-w-full object-contain drop-shadow-2xl animate-in fade-in zoom-in-95 duration-700"
                                        />

                                        {/* Floating Badge */}
                                        <div className="absolute bottom-6 right-6 z-20 bg-white/70 backdrop-blur-md border border-slate-100 py-2 px-4 rounded-full shadow-sm flex items-center gap-2">
                                            <Sparkles className="w-3.5 h-3.5 text-blue-600 animate-pulse" />
                                            <span className="text-[9px] font-black uppercase tracking-widest text-[#18448F]">
                                                Pureté & Design Bricareau
                                            </span>
                                        </div>
                                    </div>

                                    {/* Outer Decorative Rings */}
                                    <div className="absolute -bottom-10 -right-10 w-24 h-24 border border-blue-500/10 rounded-full z-0 pointer-events-none" />
                                    <div className="absolute -bottom-16 -right-16 w-36 h-36 border border-blue-600/5 rounded-full z-0 pointer-events-none" />
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 4: DARK ECO CALLOUT BANNER */}
                <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
                    <div className="absolute inset-0 bg-radial-gradient opacity-10" />
                    <div className="container mx-auto px-6 max-w-5xl text-center relative z-10 space-y-8">
                        <div className="w-16 h-16 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center mx-auto text-blue-400">
                            <Leaf className="w-8 h-8" />
                        </div>
                        
                        <blockquote className="text-xl md:text-3xl font-light leading-relaxed italic text-blue-100 max-w-4xl mx-auto">
                            "Nos fontaines à eau gazeuse de bureau ne se contentent pas de fournir une eau fraîche. Elles s'inscrivent dans une démarche écoresponsable en éliminant les bouteilles plastiques à usage unique de vos locaux. Grâce à leur système de filtration d'eau innovant, elles garantissent une eau sans impuretés, exempte de chlore et de contaminants microbiologiques. Offrir le meilleur de l'hydratation est un geste fort pour la santé de vos équipes et l'image de marque de votre entreprise."
                        </blockquote>

                        <div className="w-12 h-[1px] bg-blue-500/40 mx-auto" />
                        
                        <p className="text-[11px] font-black text-blue-400 uppercase tracking-[0.3em]">
                            Essai gratuit et sans engagement - Installation et entretien inclus.
                        </p>
                    </div>
                </section>

                {/* SECTION 5: HORIZONTAL DUAL GALLERY */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-white">
                    <div className="aspect-[16/10] rounded-[2.5rem] overflow-hidden shadow-md">
                        <img 
                            src={ecoImpactImg4} 
                            alt="Fontaine à eau dans un espace café corporatif" 
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" 
                        />
                    </div>
                    <div className="aspect-[16/10] rounded-[2.5rem] overflow-hidden shadow-md">
                        <img 
                            src={eauFontaineImg} 
                            alt="Remplissage d'une bouteille d'eau filtrée pure" 
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" 
                        />
                    </div>
                </section>

                {/* SECTION 6: COLUMN SPACE & SERVICE GRID */}
                <section className="py-32 bg-white">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                            
                            {/* Block 1: Adaptability */}
                            <div className="flex flex-col md:flex-row items-center gap-8 bg-slate-50 p-10 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                                <div className="space-y-4 flex-1">
                                    <h3 className="text-2xl font-bold text-slate-900">
                                        Conçu pour s'adapter à votre espace
                                    </h3>
                                    <p className="text-slate-500 font-light text-sm leading-relaxed">
                                        Des formats ultra-compacts de comptoir ou autoportants au design prestigieux, s'intégrant parfaitement dans vos cafétérias, salles de conférence et halls d'accueil.
                                    </p>
                                </div>
                                <div className="w-40 aspect-[1/2] relative flex justify-center items-center">
                                    <div className="absolute w-24 h-24 bg-blue-100/40 rounded-full blur-xl -z-10" />
                                    <img 
                                        src={bottlelessFountainImg} 
                                        alt="Format autoportant slim" 
                                        className="h-full object-contain mix-blend-multiply" 
                                    />
                                </div>
                            </div>

                            {/* Block 2: Simplicity */}
                            <div className="flex flex-col md:flex-row-reverse items-center gap-8 bg-slate-50 p-10 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                                <div className="space-y-4 flex-1">
                                    <h3 className="text-2xl font-bold text-slate-900">
                                        Simplicité dans le service
                                    </h3>
                                    <p className="text-slate-500 font-light text-sm leading-relaxed">
                                        Une interface tactile moderne et intuitive, avec commande mécanique ou sans contact pour une hygiène optimale et une utilisation facilitée au quotidien.
                                    </p>
                                </div>
                                <div className="w-48 aspect-square rounded-full overflow-hidden border-[6px] border-white shadow-lg relative flex justify-center items-center">
                                    <img 
                                        src={eauFontaineImg} 
                                        alt="Service d'eau filtrée" 
                                        className="h-full w-full object-cover" 
                                    />
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* SECTION 7: MODERN SLIDER SHOWCASE ("Des systèmes pour tous les environnements") */}
                <section id="solutions-catalog" className="py-24 bg-white relative overflow-hidden border-y border-slate-100">
                    
                    {/* Centered Title */}
                    <div className="container mx-auto px-6 max-w-7xl text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
                            Des systèmes pour tous les environnements
                        </h2>
                    </div>

                    {/* Outer flex container spanning full viewport width */}
                    <div className="w-full flex flex-col lg:flex-row items-center gap-12 select-none overflow-hidden pl-0">
                        
                        {/* Left Column: Scrollable Cards Container */}
                        <div className="w-full lg:w-[73%] relative group pl-0">
                            {/* Left Navigation Arrow (Prev Circle Button) */}
                            <button 
                                onClick={() => {
                                    const el = document.getElementById("sparkling-slider-track");
                                    if (el) {
                                        const cardWidth = el.firstElementChild ? el.firstElementChild.clientWidth + 24 : 360;
                                        if (el.scrollLeft <= 15) {
                                            const maxScrollLeft = el.scrollWidth - el.clientWidth;
                                            el.scrollTo({ left: maxScrollLeft, behavior: "smooth" });
                                        } else {
                                            el.scrollBy({ left: -cardWidth, behavior: "smooth" });
                                        }
                                    }
                                }}
                                className="absolute -left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-slate-900 hover:bg-blue-600 text-white flex items-center justify-center shadow-lg transition-all hover:scale-110 active:scale-95 opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity duration-300"
                                aria-label="Précédent"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>

                            {/* Right Navigation Arrow (Next Circle Button) */}
                            <button 
                                onClick={() => {
                                    const el = document.getElementById("sparkling-slider-track");
                                    if (el) {
                                        const cardWidth = el.firstElementChild ? el.firstElementChild.clientWidth + 24 : 360;
                                        const maxScrollLeft = el.scrollWidth - el.clientWidth;
                                        if (el.scrollLeft >= maxScrollLeft - 15) {
                                            el.scrollTo({ left: 0, behavior: "smooth" });
                                        } else {
                                            el.scrollBy({ left: cardWidth, behavior: "smooth" });
                                        }
                                    }
                                }}
                                className="absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-slate-900 hover:bg-blue-600 text-white flex items-center justify-center shadow-lg transition-all hover:scale-110 active:scale-95"
                                aria-label="Suivant"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>

                            {/* Scroll Track - Starts flush to screen's left edge */}
                            <div 
                                id="sparkling-slider-track"
                                className="flex gap-6 overflow-x-auto scroll-smooth pb-6 snap-x snap-mandatory no-scrollbar pl-0 pr-12"
                                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                            >
                                {[
                                    {
                                        title: "Bluedrop Ice Sparkling",
                                        desc: "Le sommet du raffinement combinant une fontaine à eau pétillante et une machine à glaçons intégrée. Idéal pour offrir à vos collaborateurs et clients une expérience unique.",
                                        img: iceMachineImg
                                    },
                                    {
                                        title: "Bluedrop Ravello",
                                        desc: "La fontaine à eau Bluedrop Ravello vous propose de l'eau filtrée plate, gazeuse, à température ambiante et chaude pour votre bureau. Grâce à ses dimensions incroyablement compactes, elle s'intègre harmonieusement à tous les environnements.",
                                        img: countertopFountainImg
                                    },
                                    {
                                        title: "Bluedrop U1",
                                        desc: "L'élégance minimaliste ultime avec un robinet design sur comptoir et un groupe de filtration caché. Le choix parfait pour allier design épuré et pétillance haut de gamme.",
                                        img: countertopFountainImg
                                    },
                                    {
                                        title: "Bluedrop B4.2",
                                        desc: "La solution sur pied robuste à haute capacité, idéale pour les halls de réception et zones de grand passage. Elle offre une eau pétillante glacée en continu.",
                                        img: bottlelessFountainImg
                                    }
                                ].map((card, idx) => (
                                    <div 
                                        key={idx} 
                                        className="w-[280px] md:w-[320px] lg:w-[calc((100%-4.5rem)/3.5)] shrink-0 bg-white border border-slate-100 rounded-[2rem] p-6 shadow-[0_15px_40px_rgba(0,0,0,0.02)] flex flex-col h-[520px] snap-start hover:shadow-md transition-shadow"
                                    >
                                        {/* Image container in light gray background */}
                                        <div className="h-[240px] bg-slate-50 rounded-2xl p-6 flex items-center justify-center mb-6 overflow-hidden border border-slate-100/50">
                                            <img 
                                                src={card.img} 
                                                alt={card.title} 
                                                className="max-h-full object-contain hover:scale-105 transition-transform duration-700" 
                                            />
                                        </div>

                                        {/* Card Info */}
                                        <div className="space-y-3 flex-grow">
                                            <h4 className="text-xl font-bold text-slate-900">{card.title}</h4>
                                            <p className="text-slate-500 text-xs font-light leading-relaxed text-justify line-clamp-6">
                                                {card.desc}
                                            </p>
                                        </div>

                                        {/* Details Button */}
                                        <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                                            <NavLink 
                                                to="/contact-entreprises" 
                                                className="inline-flex items-center gap-2 text-[10px] font-black text-slate-800 uppercase tracking-widest hover:text-blue-600 transition-colors group"
                                            >
                                                Voir les détails <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-blue-600" />
                                            </NavLink>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Column: Stationary CTA Column - Aligned to standard container's right edge */}
                        <div className="w-full lg:w-[27%] flex flex-col justify-center items-center lg:items-start text-center lg:text-left pr-6 lg:pr-[calc((100vw-1232px)/2)] pl-6 lg:pl-12 space-y-6">
                            <h3 className="text-xl md:text-2xl font-medium text-slate-800 leading-snug">
                                Besoin d'aide pour trouver le système qui vous convient ?
                            </h3>
                            <div>
                                <Button 
                                    variant="outline" 
                                    className="rounded-full border-slate-300 hover:border-slate-800 text-slate-800 hover:bg-slate-50 px-8 h-12 text-xs font-black uppercase tracking-widest transition-all"
                                    asChild
                                >
                                    <NavLink to="/contact-entreprises">
                                        Demander une consultation
                                    </NavLink>
                                </Button>
                            </div>
                        </div>

                    </div>
                </section>

                {/* ========================================================================= */}
                {/* NOTRE SAVOIR-FAIRE - SENSORIEL & PRESTIGE GRID */}
                {/* ========================================================================= */}
                <section className="py-32 bg-[#FAF9F6] relative overflow-hidden border-y border-slate-100">
                    <div className="container mx-auto px-6 max-w-6xl">
                        
                        <div className="text-center space-y-4 mb-20">
                            <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-widest">
                                NOTRE SAVOIR-FAIRE
                            </span>
                            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight uppercase">
                                L'art de raffiner <br />
                                <span className="text-[#18448F] italic font-serif lowercase font-bold">l'eau au bureau.</span>
                            </h2>
                            <p className="text-slate-500 font-light max-w-2xl mx-auto text-base">
                                Parce que chaque collaborateur mérite une eau d'une légèreté et d'une fraîcheur incomparables. Découvrez l'expérience gustative ultime.
                            </p>
                        </div>

                        {/* Prestige grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {faqItems.map((item, idx) => (
                                <div 
                                    key={idx}
                                    className="bg-white rounded-[2rem] p-8 border border-amber-100/50 shadow-sm relative group hover:border-[#18448F]/20 transition-all duration-300"
                                >
                                    <div className="absolute top-0 left-8 right-8 h-1 bg-[#18448F] rounded-b-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                                    
                                    <div className="text-5xl font-black text-[#18448F]/5 mb-6">
                                        0{idx + 1}
                                    </div>
                                    
                                    <h3 className="text-xl font-bold text-slate-800 mb-4">
                                        {item.title}
                                    </h3>
                                    
                                    <p className="text-slate-500 font-light leading-relaxed text-sm">
                                        {item.content}
                                    </p>
                                </div>
                            ))}
                        </div>

                    </div>
                </section>


                {/* SECTION 9: WATER WAVE CALL TO ACTION */}
                <section className="relative py-32 bg-slate-900 text-white overflow-hidden text-center">
                    {/* Deep Blue Water Wave Background Layer */}
                    <div className="absolute inset-0 z-0 opacity-30 mix-blend-overlay">
                        <img 
                            src={heroFountains} 
                            alt="Vagues d'eau pure" 
                            className="w-full h-full object-cover" 
                        />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/90 to-slate-900/40" />

                    <div className="container mx-auto px-6 max-w-4xl relative z-10 space-y-10">
                        <span className="inline-block px-4 py-1.5 bg-blue-500/20 border border-blue-500/30 text-blue-400 rounded-full text-[10px] font-black uppercase tracking-widest">
                            ASSISTANCE EN LIGNE
                        </span>
                        <h2 className="text-3xl md:text-6xl font-bold tracking-tight text-white leading-tight uppercase">
                            Laissez-nous vous aider à trouver <br />
                            <span className="text-blue-400 italic font-light lowercase">la solution adaptée.</span>
                        </h2>
                        <div className="pt-4">
                            <Button size="lg" className="h-16 px-12 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold uppercase tracking-widest text-xs transition-transform hover:scale-[1.02]" asChild>
                                <NavLink to="/contact-entreprises">ME FAIRE RECOMMANDER UN MODÈLE</NavLink>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* SECTION 10: TESTIMONIALS SECTION */}
                <div className="bg-slate-50 py-32 border-y border-slate-100">
                    <TestimonialsSection 
                        filterProduct="Bureau"
                        limit={6}
                        title={
                            <div className="text-center space-y-3 mb-16">
                                <span className="text-[10px] font-black text-blue-500 uppercase tracking-[0.5em] block mb-4">ILS NOUS FONT CONFIANCE</span>
                                <h2 className="heading-pro-max text-center uppercase">
                                    <span className="italic font-light text-[#18448F]">Le choix des </span>
                                    <span className="font-bold text-[#18448F]">entreprises leaders.</span>
                                </h2>
                            </div>
                        }
                    />
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default SolutionsEauPetillante;
