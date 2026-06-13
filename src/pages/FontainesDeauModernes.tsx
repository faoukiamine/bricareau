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
import ExpertAvatars from "@/components/ExpertAvatars";
import { ProMaxButton } from "@/components/ui/ProMaxButton";
import hardWaterFaucetImg from "@/assets/Hard Water-Faucet.jpg";

// Existing high-fidelity assets
import heroFountains from "@/assets/2118.jpg";
import countertopFountainImg1 from "@/assets/A8_no_bg.png";
import countertopFountainImg2 from "@/assets/A9_no_bg.png";
import countertopFountainImg3 from "@/assets/A12_no_bg.png";
import bottlelessFountainImg1 from "@/assets/A13_no_bg.png";
import bottlelessFountainImg2 from "@/assets/A7_no_bg.png";
import bottlelessFountainImg3 from "@/assets/4rlkbv4rlkbv4rlk.png";
import iceMachineImg from "@/assets/Machine+à+glaçons+de+comptoir+auto-nettoyante+de+26+lb+R.W.FLAME-78609293.webp";
import ecoImpactImg4 from "@/assets/water-dispenser in office.jpg";
import ecoImpactImg5 from "@/assets/water-dispenser in kitchen.jpg";
import eauFontaineImg from "@/assets/1jp5k.png";
import mandrinkingglassofwaterImg from "@/assets/6115.jpg";
import officeHydrationImg from "@/assets/2539.jpg";

const FontainesDeauModernes = () => {
    const [activeFeature, setActiveFeature] = useState(0);
    const [activeFeatureImage, setActiveFeatureImage] = useState(officeHydrationImg);
    const [activeTab, setActiveTab] = useState("cold");
    const [activeFaq, setActiveFaq] = useState<number | null>(null);

    useEffect(() => {
        document.title = "Fontaines d'Eau de Bureau Modernes | Bricareau";
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

    const tabContents = {
        cold: {
            title: "Eau Glacée & Pure",
            desc: "Une eau purifiée refroidie instantanément, idéale pour dynamiser vos collaborateurs et assurer leur bien-être tout au long de la journée."
        },
        ambient: {
            title: "Eau Tiède & Équilibrée",
            desc: "Une eau à température ambiante filtrée à la source pour une hydratation douce, continue et respectueuse de la physiologie naturelle."
        },
        hot: {
            title: "Eau Chaude Instantanée",
            desc: "Une distribution sécurisée d'eau chaude à température idéale pour préparer instantanément vos thés, infusions et cafés au bureau."
        },
        sparkling: {
            title: "Eau Pétillante d'Exception",
            desc: "Des bulles fines et rafraîchissantes filtrées avec soin, parfaites pour impressionner vos clients et rehausser le prestige de vos réunions."
        }
    };

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
                {/* SECTION 1: MODERN CINEMATIC HERO */}
                <Hero 
                    className="min-h-[100vh]"
                    image={heroFountains}
                    highlightedTitle={<span className="font-bold not-italic">Optez pour <span className="text-[#8CC63F]">une hydratation</span> </span>}
                    mainTitle={<span className="font-bold not-italic">intelligente et durable.</span>}
                    subtitle="Offrez à vos collaborateurs une eau filtrée d'exception, fraîche, chaude ou pétillante, directement raccordée à votre réseau. Une solution écologique, économique et sans logistique de bonbonnes."
                    ctaText="OBTENIR MON ESSAI GRATUIT"
                    ctaLink="/contact-entreprises"
                    showPhone={true}
                    showBreadcrumbs={true}
                    breadcrumbVariant="light"
                    homeVariant={false}
                />

                {/* SECTION 2: HIGH-FIDELITY STATEMENT BANNER */}
                <section className="py-24 bg-white border-y border-slate-100">
                    <div className="container mx-auto px-6 max-w-6xl">
                        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-16 items-center">
                            {/* Text Content */}
                            <div className="space-y-6 text-center lg:text-left">
                                <h3 className="inline-block px-4 py-1.5 bg-[#18448F] text-white rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-4">
                                    L'EXCELLENCE DE L'EAU À LA SOURCE
                                </h3>
                                <h2 className="mb-8 heading-pro-max">
                                    <span className="font-bold not-italic text-[#18448F] block">Engagé à fournir des solutions de </span>
                                    <span className="font-bold not-italic text-[#18448F] block">fontaines à eau de <span className="text-[#8CC63F]">haute qualité.</span></span>
                                </h2>

                                <p className="text-slate-500 text-lg font-light leading-relaxed pt-2">
                                    Nos fontaines à eau sont conçues pour améliorer le bien-être de vos collaborateurs et de vos clients. Grâce à nos technologies de filtration d'eau avancées, profitez d'une eau d'une pureté absolue, d'un goût incomparable et d'une fraîcheur constante à chaque tasse.
                                </p>
                                <div className="pt-4 flex justify-center lg:justify-start">
                                    <a href="#solutions-catalog" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-bold uppercase tracking-widest text-xs transition-colors group">
                                        En savoir plus <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </a>
                                </div>
                            </div>
                            
                            {/* Image */}
                            <div className="relative rounded-[2rem] overflow-hidden shadow-xl aspect-square lg:aspect-[4/3] group">
                                <img 
                                    src={mandrinkingglassofwaterImg} 
                                    alt="L'excellence de l'eau à la source" 
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#18448F]/20 to-transparent mix-blend-multiply" />
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
                            <span className="inline-block px-4 py-1.5 bg-[#18448F] text-white rounded-full text-[10px] font-black uppercase tracking-[0.3em]">
                                VALEUR AJOUTÉE
                            </span>
                            <h2 className="mb-8 heading-pro-max text-center">
                                <span className="font-bold not-italic text-[#18448F] block">Élevez le standard</span>
                                <span className="font-bold not-italic text-[#18448F] block text-center">d'hydratation de vos bureaux.</span>
                            </h2> 
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                            
                            {/* Left Column: Asymmetrical Bento Grid of Features */}
                            <div className="col-span-1 lg:col-span-7 z-20 lg:order-2">
                                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                                    
                                    {/* Cell 1: Pureté absolue (Large 7-col) */}
                                    <div 
                                        onClick={() => {
                                            setActiveFeature(0);
                                            setActiveFeatureImage(officeHydrationImg);
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
                                            setActiveFeatureImage(officeHydrationImg);
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
                                            setActiveFeatureImage(officeHydrationImg);
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
                                            setActiveFeatureImage(officeHydrationImg);
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
                            <div className="col-span-1 lg:col-span-5 relative z-10 flex justify-center lg:order-1">
                                
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
                                    <div className="bg-white rounded-[2.5rem] border border-slate-100/80 shadow-[0_45px_90px_-25px_rgba(0,0,0,0.08)] relative z-10 overflow-hidden flex items-center justify-center aspect-square sm:aspect-square">
                                        
                                        {/* Fluid background pattern */}
                                        <div className="absolute inset-0 bg-gradient-to-tr from-slate-50 via-white to-blue-50/30 opacity-60" />
                                        
                                        {/* Pure water molecular circle overlay */}
                                        <div className="absolute w-64 h-64 rounded-full border border-blue-500/5 animate-[spin_40s_linear_infinite] z-0" />
                                        
                                        <img 
                                            key={activeFeatureImage}
                                            src={activeFeatureImage} 
                                            alt="Solutions d'hydratation écologiques et design pour le bureau Bricareau" 
                                            className="relative z-10 w-full h-full object-cover drop-shadow-2xl animate-in fade-in zoom-in-95 duration-700"
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
                <section className="py-24 bg-[#18448F] text-white overflow-hidden relative">
                    <div className="absolute inset-0 bg-radial-gradient opacity-10" />
                    <div className="container mx-auto px-6 max-w-5xl text-center relative z-10 space-y-8">
                        <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mx-auto text-blue-200">
                            <Leaf className="w-8 h-8" />
                        </div>
                        
                        <blockquote className="text-xl md:text-3xl font-light leading-relaxed italic text-blue-50 max-w-4xl mx-auto">
                            "Bien plus qu'un simple point d'eau, nos fontaines réseau redéfinissent l'expérience d'hydratation au bureau en éliminant définitivement les bouteilles plastiques de vos locaux. Grâce à une technologie de filtration de pointe, elles garantissent une eau d'une pureté absolue, débarrassée du chlore, des microplastiques et des contaminants microbiologiques. Investir dans une hydratation d'exception est un levier majeur pour la santé de vos collaborateurs et l'image écoresponsable de votre entreprise."
                        </blockquote>
                    </div>
                </section>

                {/* SECTION 5: HORIZONTAL DUAL GALLERY */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-white">
                    <div className="aspect-[16/10] rounded-[2.5rem] overflow-hidden shadow-md">
                        <img 
                            src={eauFontaineImg} 
                            alt="Remplissage d'une bouteille d'eau filtrée pure" 
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" 
                        />
                    </div>
                     <div className="aspect-[16/10] rounded-[2.5rem] overflow-hidden shadow-md">
                        <img 
                            src={bottlelessFountainImg3} 
                            alt="Remplissage d'une bouteille d'eau filtrée pure" 
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" 
                        />
                    </div>
                </section>

                {/* ========================================================================= */}


                {/* SECTION 6: MODERN SLIDER SHOWCASE ("Des systèmes pour tous les environnements") */}
                <section id="solutions-catalog" className="py-24 bg-white relative overflow-hidden border-y border-slate-100">
                    
                    {/* Centered Title */}
                    <div className="container mx-auto px-6 max-w-7xl text-center mb-20">
                        
                        <h2 className="mb-8 heading-pro-max text-center">
                            <span className="font-bold text-[#18448F] block text-center">Une <span className="text-[#8CC63F]">polyvalence totale</span>, peu importe l'environnement</span>
                        </h2>

                    </div>

                    {/* Outer flex container spanning full viewport width */}
                    <div className="w-full flex flex-col items-center gap-12 select-none overflow-hidden">
                        
                        {/* Left Column: Scrollable Cards Container */}
                        <div className="w-full max-w-7xl relative group px-8 mx-auto">
                            {/* Left Navigation Arrow (Prev Circle Button) */}
                            <button 
                                onClick={() => {
                                    const el = document.getElementById("fountain-slider-track");
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
                                className="absolute -left-4 md:-left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#18448F] hover:bg-blue-600 text-white flex items-center justify-center shadow-lg transition-all hover:scale-110 active:scale-95 opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity duration-300"
                                aria-label="Précédent"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>

                            {/* Right Navigation Arrow (Next Circle Button) */}
                            <button 
                                onClick={() => {
                                    const el = document.getElementById("fountain-slider-track");
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
                                className="absolute -right-4 md:-right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#18448F] hover:bg-blue-600 text-white flex items-center justify-center shadow-lg transition-all hover:scale-110 active:scale-95"
                                aria-label="Suivant"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>

                            {/* Scroll Track - Starts flush to screen's left edge */}
                            <div 
                                id="fountain-slider-track"
                                className="flex gap-6 overflow-x-auto scroll-smooth pb-6 snap-x snap-mandatory no-scrollbar lg:justify-center"
                                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                            >
                                {[
                                    {
                                        title: "Bluedrop Ice",
                                        desc: "La fontaine avec machine à glaçons intégrée Bluedrop Ice vous propose de l'eau filtrée et des glaçons purs au gré de vos envies. Son système de filtration en 5 étapes offre une barrière de protection totale et vous rafraîchit en continu. Cette plateforme d'hydratation tout-en-un s'intègre aussi bien dans les réceptions que dans les cafétérias.",
                                        img: countertopFountainImg3
                                    },
                                    {
                                        title: "Ravello",
                                        desc: "La fontaine à eau Bluedrop Ravello vous propose de l'eau filtrée plate, gazeuse, à température ambiante et chaude pour votre bureau. Grâce à ses dimensions incroyablement compactes, elle s'intègre harmonieusement à tous les environnements vous offrant toute l'eau dont vous avez besoin et répondant à vos besoins d'hydratation avec élégance et praticité.",
                                        img: countertopFountainImg1
                                    },
                                    {
                                        title: "B3",
                                        desc: "La fontaine à eau de bureau Bluedrop B3 fournit de l'eau chaude et froide filtrée à la demande. Son système de filtration intégré en 3 étapes garantit un approvisionnement continu en eau savoureuse pour votre bureau. Disponible en version sur pied (B4) et à poser (B3), elle offre un design élégant et moderne qui s'intègre à tous les environnements.",
                                        img: countertopFountainImg2 // B3 Countertop asset
                                    },
                                    {
                                        title: "B4",
                                        desc: "La fontaine à eau de bureau Bluedrop B4 fournit de l'eau chaude et froide filtrée à la demande. Son système de filtration intégré en 3 étapes garantit un approvisionnement continu en eau savoureuse pour votre bureau. Disponible en version sur pied ou à poser, elle offre un design élégant et moderne qui s'intègre à tous les environnements. Grâce à son débit rapide et à la stérilisation automatique du réservoir, s'hydrater n'a jamais été aussi simple.",
                                        img: bottlelessFountainImg1
                                    },
                                     {
                                        title: "B4",
                                        desc: "La fontaine à eau de bureau Bluedrop B4 fournit de l'eau chaude et froide filtrée à la demande. Son système de filtration intégré en 3 étapes garantit un approvisionnement continu en eau savoureuse pour votre bureau. Disponible en version sur pied ou à poser, elle offre un design élégant et moderne qui s'intègre à tous les environnements. Grâce à son débit rapide et à la stérilisation automatique du réservoir, s'hydrater n'a jamais été aussi simple.",
                                        img: bottlelessFountainImg2
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

                        {/* Bottom Block: CTA */}
                        <div className="w-full flex flex-col justify-center items-center text-center px-6 space-y-6">
                            <h3 className="text-xl md:text-2xl font-medium text-slate-800 leading-snug">
                                Besoin d'aide pour trouver le système qui vous convient ?
                            </h3>
                            <div>
                                <Button 
                                    variant="outline" 
                                    className="rounded-full border-slate-300 hover:border-slate-800 text-slate-800 hover:bg-slate-50 px-8 h-12 text-xs font-black uppercase tracking-widest transition-all"
                                    asChild
                                >
                                    <NavLink to="/consultation">
                                        Demandez une consultation
                                    </NavLink>
                                </Button>
                            </div>
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
                                <div className="inline-flex items-center justify-center gap-4 mb-4">
                                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em]">ILS NOUS FONT CONFIANCE</span>
                                </div>
                                <h2 
                                    className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-8 mx-auto"
                                    style={{
                                        fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                                        fontStyle: 'normal',
                                        fontWeight: 700,
                                        fontSize: '48px',
                                        lineHeight: '52px'
                                    }}
                                >
                                    <span className="block text-blue-600">Le choix des</span>
                                    <span className="block text-[#8CC63F]">entreprises leaders.</span>
                                </h2>
                            </div>
                        }
                    />
                </div>
{/* 11. PREMIUM CTA SECTION */}
                <section className="relative py-32 flex items-center overflow-hidden bg-[#18448F]">
                    {/* Animated background elements */}
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-600/20 to-transparent skew-x-12 translate-x-1/4" />
                    <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-cyan-400/10 to-transparent -skew-x-12 -translate-x-1/4" />
                    
                    {/* Background Image with Overlay */}
                    <div className="absolute inset-0 z-0 opacity-25">
                        <img
                            src={ecoImpactImg4}
                            alt="Fontaine d'eau moderne installée en entreprise - Solution Bricareau"
                            className="w-full h-full object-cover grayscale brightness-110"
                        />
                        <div className="absolute inset-0 bg-[#18448F]/30 backdrop-blur-sm" />
                    </div>
                    
                    {/* Fade to light gradient at the bottom */}
                    <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-[#FAF9F6] z-0 pointer-events-none" />

                    <div className="container mx-auto px-6 relative z-10">
                        <div className="max-w-5xl mx-auto text-center space-y-12">
                            <div className="space-y-6">
                                <span className="inline-block px-4 py-1.5 bg-white text-[#18448F] rounded-full text-[10px] font-black uppercase tracking-[0.4em]">
                                    VITALITÉ & PERFORMANCE AU BUREAU
                                </span>
                                <h2 className="font-light block leading-tight lg:leading-[52px] text-white">
                                    Offrez le meilleur de l'hydratation <br />
                                    <span className="text-white italic font-bold font-serif">à votre entreprise.</span>
                                </h2>
                                <p className="text-lg md:text-xl text-blue-100/90 max-w-3xl mx-auto font-light leading-relaxed">
                                    Des fontaines réseau ultra-modernes au design d'exception et sans bonbonne. <br className="hidden md:block" />
                                    Activez <span className="text-white font-bold border-b border-white">le bien-être au travail</span> dès aujourd'hui.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-4">
                                <ProMaxButton 
                                    asChild
                                    variant="white"
                                >
                                    <a href="tel:18552649328" className="flex items-center gap-3">
                                        <Phone className="h-5 w-5 animate-bounce" />
                                        Parlez à un conseiller pro
                                    </a>
                                </ProMaxButton>
                            </div>
                            <div className="pt-8 flex flex-col items-center gap-4">
                                <ExpertAvatars />
                                <p className="text-blue-200/60 text-sm font-medium">
                                    Déjà adopté par <span className="text-white">plus de 350 entreprises</span> de premier plan au Québec.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
};

export default FontainesDeauModernes;
