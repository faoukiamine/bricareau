import React, { useEffect, useState, useRef } from "react";
import {
    ChevronRight,
    ArrowRight,
    CheckCircle2,
    ArrowDown,
    Star,
    Phone,
    ShieldCheck,
    Zap,
    Coffee,
    Settings,
    Building2,
    Users2,
    Sparkles,
    GlassWater,
    Heart,
    Activity,
    Leaf,
    Utensils,
    Wine,
    Droplets,
    Shield,
    TrendingUp
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";
import { ProMaxButton } from "@/components/ui/ProMaxButton";
import TestimonialsSection from "@/components/TestimonialsSection";
import ExpertTrustSection from "@/components/ExpertTrustSection";
import WaterDiagnosis from "@/components/water_diagnosis";

// Assets
import heroImg from "@/assets/Hero-Entreprise.jpg";
import softenerImg from "@/assets/Water-Softener-installation.jpg";
import filtrationImg from "@/assets/Sérénité Direct-Flow installation.png";
import drinkWaterImg from "@/assets/20230add-4ce5-4ae6-a6dc-1f9a2c3aeb7b.jpg";
import sparklingImg from "@/assets/Slider_V3-204_1.png";
import centralSystemImg from "@/assets/LZS8WSSP-PF.webp";
import verifiedImg from "@/assets/verified.svg";
import savingsImg from "@/assets/savings.svg";
import healthSafeImg from "@/assets/health_and_safety.svg";
import ecoImg from "@/assets/eco.svg";
import pauseEauImg from "@/assets/Pause-eau.jpg";
import corporateExpertImg from "@/assets/4428cdd0-67df-4075-b0ba-d69247eb98dc.jpg";

const Bureau = () => {
    const navigate = useNavigate();
    const [activeSection, setActiveSection] = useState(0);
    const [showNav, setShowNav] = useState(false);
    const [isNavVisible, setIsNavVisible] = useState(true);
    

    const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        document.title = "Solutions d'eau pour Bureaux | Bricareau";
        window.scrollTo(0, 0);

        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const index = sectionRefs.current.findIndex(ref => ref === entry.target);
                    if (index !== -1) {
                        setActiveSection(index);


                        if (index === programs.length - 1) {
                            setTimeout(() => setIsNavVisible(false), 1000);
                        } else {
                            setIsNavVisible(true);
                        }
                    }
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        sectionRefs.current.forEach(ref => { if (ref) observer.observe(ref); });


        const handleGlobalScroll = () => {
            if (containerRef.current) {
                const { offsetTop, offsetHeight } = containerRef.current;
                const isInside = window.scrollY >= offsetTop - 200 && window.scrollY < offsetTop + offsetHeight - 300;
                setShowNav(isInside);
            }
        };

        window.addEventListener("scroll", handleGlobalScroll);


        return () => {
            observer.disconnect();
            window.removeEventListener("scroll", handleGlobalScroll);
        };
    }, []);

    const programs = [
        {
            title: "Filtration d'Eau Potable",
            titlePart1: "Filtration ",
            titlePart2: "d'Eau Potable",
            navTitle: "Filtration Potable",
            desc: "L'osmose inverse au bureau : une eau d'une pureté exceptionnelle pour vos employés, directement sous l'évier de la salle de pause.",
            points: [
                { title: "Pureté totale", desc: "Une eau d'une qualité exceptionnelle, débarrassée des micro-contaminants pour vos équipes." },
                { title: "Élimination des goûts & odeurs", desc: "Supprimez le goût de chlore pour une hydratation plaisir tout au long de la journée." }
            ],
            image: filtrationImg,
            link: "/systeme-de-filtration-deau-potable",
            tag: "PURETÉ",
            largeNumber: "01",
            floatingCard: { title: "Bureau Pure", desc: "Eau osmosée d'une pureté exceptionnelle.", icon: ShieldCheck },
            floatingCard2: { title: "Sécurité Pro", desc: "Élimination des contaminants pour vos équipes.", icon: healthSafeImg },
            floatingCard3: { title: "Goût Parfait", desc: "Une eau sans chlore pour des boissons sublimées.", icon: verifiedImg },
            floatingCard4: { title: "Économies ROI", desc: "Rentabilité immédiate face aux bouteilles.", icon: savingsImg },
            bubbles: [
                { icon: ShieldCheck, label: "Sécurité", value: "Haut", color: "text-blue-600" },
                { icon: Zap, label: "Efficacité", value: "99%", color: "text-amber-400" }
            ]
        },
        {
            title: "Fontaines d'Eau Modernes",
            titlePart1: "Fontaines ",
            titlePart2: "d'Eau Modernes",
            navTitle: "Fontaines d'eau",
            desc: "Éliminez la logistique des bouteilles. Nos fontaines branchées au réseau offrent une eau filtrée, fraîche ou chaude, en continu.",
            points: [
                { title: "Zéro bouteille", desc: "Plus de stockage de bonbonnes lourdes. Une eau purifiée en accès illimité." },
                { title: "Design épuré", desc: "Des fontaines esthétiques qui s'intègrent parfaitement dans vos espaces collaboratifs." }
            ],
            image: drinkWaterImg,
            link: "/refroidisseurs-eau-entreprises",
            tag: "BIEN-ÊTRE",
            largeNumber: "02",
            floatingCard: { title: "Zéro Bouteille", desc: "Éliminez la logistique des bonbonnes.", icon: Leaf },
            floatingCard2: { title: "Hygiène Plus", desc: "Technologie sans contact pour une sécurité totale.", icon: healthSafeImg },
            floatingCard3: { title: "Design Office", desc: "Esthétique épurée pour vos espaces collaboratifs.", icon: verifiedImg },
            floatingCard4: { title: "Flux Continu", desc: "Une eau fraîche filtrée disponible en illimité.", icon: Droplets },
            bubbles: [
                { icon: GlassWater, label: "Hydratation", value: "Illimitée", color: "text-sky-400" },
                { icon: Sparkles, label: "Éclat", value: "Premium", color: "text-blue-500" }
            ]
        },
        {
            title: "Solutions Eau Pétillante",
            titlePart1: "Solutions ",
            titlePart2: "Eau Pétillante",
            navTitle: "Eau Pétillante",
            desc: "Offrez une touche premium à vos espaces communs avec nos systèmes d'eau pétillante filtrée. Fraîcheur et effervescence à la demande.",
            points: [
                { title: "Effervescence ajustable", desc: "De l'eau plate à très pétillante pour satisfaire toutes les préférences." },
                { title: "Zéro déchet plastique", desc: "Une solution 100% durable qui valorise votre engagement RSE auprès de vos employés." }
            ],
            image: sparklingImg,
            link: "/eau-petillante-entreprises",
            tag: "PREMIUM",
            largeNumber: "03",
            floatingCard: { title: "Effervescence", desc: "De l'eau pétillante filtrée à la demande.", icon: GlassWater },
            floatingCard2: { title: "Engagement RSE", desc: "Valorisez votre image de marque durable.", icon: Leaf },
            floatingCard3: { title: "Productivité", desc: "Hydratation optimale pour la concentration.", icon: Zap },
            floatingCard4: { title: "Fraîcheur Pro", desc: "Une touche de luxe dans vos espaces communs.", icon: GlassWater },
            bubbles: [
                { icon: Droplets, label: "Bulles", value: "Fines", color: "text-blue-600" },
                { icon: Sparkles, label: "Luxe", value: "Au Quotidien", color: "text-amber-500" }
            ]
        },
        {
            title: "Systèmes Centralisés",
            titlePart1: "Systèmes ",
            titlePart2: "Centralisés",
            navTitle: "Gestion de Tour",
            desc: "Pour les tours de bureaux et grands complexes, nous installons des systèmes de filtration centralisés haute capacité.",
            points: [
                { title: "Capacité industrielle", desc: "Filtration haute performance dimensionnée pour les grands immeubles de bureaux." },
                { title: "Filtration haute performance", desc: "Une barrière robuste contre les impuretés pour l'ensemble de votre réseau d'eau." }
            ],
            image: centralSystemImg,
            link: "/eau-petillante-entreprises",
            tag: "INFRASTRUCTURE",
            largeNumber: "04",
            floatingCard: { title: "Bâtiment Intelligent", desc: "Gestion centralisée de l'eau.", icon: Settings },
            floatingCard2: { title: "Protection Réseau", desc: "Sécurité pour toutes les installations.", icon: ShieldCheck },
            floatingCard3: { title: "Volume Illimité", desc: "Adapté aux grands besoins collectifs.", icon: Activity },
            floatingCard4: { title: "Gestion Totale", desc: "Contrôle global de votre infrastructure.", icon: Building2 },
            bubbles: [
                { icon: Building2, label: "Réseau", value: "Global", color: "text-slate-600" },
                { icon: Activity, label: "Flux", value: "Stable", color: "text-indigo-400" }
            ]
        }
    ];

    const scrollToProgram = (idx: number) => {
        const el = sectionRefs.current[idx];
        if (el) window.scrollTo({ top: el.offsetTop, behavior: 'smooth' });
    };

    return (
        <div className="min-h-screen bg-[#FDFDFD] font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">
            <Header />

            <main>
                {/* 1. CINEMATIC HERO */}
                <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
                    <div className="absolute inset-0 z-0">
                        <img src={heroImg} alt="Office Water Solutions" className="w-full h-full object-cover opacity-90" />
                        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
                        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                    </div>

                    <div className="container mx-auto px-6 relative z-10">
                        <div className="max-w-4xl space-y-12">
                            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-50 border border-blue-100">
                                <Building2 className="w-4 h-4 text-blue-600" />
                                <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.3em]">Solutions Bureaux & Corporatives</span>
                            </div>
                            
                            <h1 className="text-4xl md:text-6xl lg:text-[72px] leading-[1.1] tracking-tight animate-in fade-in slide-in-from-left duration-1000">
                                <span className="italic font-light text-[#18448F]">L'eau pure, </span>
                                <span className="font-bold text-[#18448F]">moteur de productivité.</span>
                            </h1>
                            
                            <p className="text-lg md:text-2xl text-slate-500 font-light max-w-2xl leading-relaxed">
                                Optimisez le bien-être de vos équipes avec des solutions d'hydratation premium, écologiques et sans logistique encombrante.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-6 pt-8">
                                <ProMaxButton variant="primary" className="px-12 h-16 text-[11px]" onClick={() => navigate("/consultation")}>
                                    CONSULTATION CORPORATIVE GRATUITE
                                </ProMaxButton>
                                <a href="tel:18552649328" className="flex items-center gap-4 group">
                                    <div className="w-14 h-14 rounded-full bg-slate-50 flex items-center justify-center border border-slate-200 group-hover:border-blue-500/50 group-hover:bg-white transition-all">
                                        <Phone className="w-5 h-5 text-[#18448F]" />
                                    </div>
                                    <div className="text-left">
                                        <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Service Commercial</div>
                                        <div className="text-xl font-bold tracking-tight text-[#18448F]">1-855-264-9328</div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Scroll Badge */}
                    <div className="absolute bottom-12 right-12 hidden lg:block">
                        <div className="flex items-center gap-4 text-slate-400">
                            <span className="text-[10px] font-black uppercase tracking-widest rotate-90 origin-right translate-y-12">DÉCOUVRIR NOS SYSTÈMES</span>
                            <div className="w-[1px] h-24 bg-slate-200" />
                        </div>
                    </div>
                </section>

                {/* SERVICE SECTIONS - PREMIUM LIQUID DESIGN */}
                <section id="solutions" className="py-20 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col md:flex-row md:items-end justify-between mb-32 gap-8">
                            <div className="max-w-2xl space-y-6">
                                <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.5em]">NOTRE ENGAGEMENT</span>
                                <h2 className="heading-pro-max text-left uppercase">
                                    <span className="italic font-light text-[#18448F]">Une hydratation </span><br />
                                    <span className="font-bold text-[#18448F]">sans compromis.</span>
                                </h2>
                            </div>
                            <p className="text-slate-400 text-sm font-light max-w-sm border-l border-blue-100 pl-6">
                                "Un collaborateur bien hydraté est un collaborateur concentré et performant au quotidien."
                            </p>
                        </div>

                        {/* Side Nav for Sections */}
                        <div className="relative">
                            <div className={cn(
                                "fixed left-12 top-1/2 -translate-y-1/2 z-50 hidden xl:flex flex-col gap-10 transition-all duration-700",
                                showNav && isNavVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10 pointer-events-none"
                            )}>
                                {programs.map((prog, idx) => (
                                    <button 
                                        key={idx} 
                                        className="relative flex items-center gap-6 group text-left"
                                        onClick={() => scrollToProgram(idx)}
                                    >
                                        <div className={cn(
                                            "w-2 h-2 rounded-full transition-all duration-500",
                                            activeSection === idx ? "bg-[#18448F] scale-150 ring-4 ring-blue-100" : "bg-slate-300 scale-100"
                                        )} />
                                        <span className={cn(
                                            "text-[10px] font-black uppercase tracking-widest transition-all",
                                            activeSection === idx ? "text-[#18448F] opacity-100" : "text-slate-400 opacity-0 group-hover:opacity-50"
                                        )}>
                                            {prog.navTitle}
                                        </span>
                                    </button>
                                ))}
                            </div>

                            {/* Service Sections Content */}
                            <div ref={containerRef} className="space-y-48">
                                {programs.map((prog, idx) => (
                                    <div 
                                        key={idx}
                                        ref={el => sectionRefs.current[idx] = el}
                                        className="relative min-h-[80vh] flex items-center py-24 overflow-hidden"
                                    >
                                        {/* Background Orbs */}
                                        <div className="absolute inset-0 z-0 pointer-events-none">
                                            <div className={cn(
                                                "absolute w-[40%] h-[40%] bg-blue-50 rounded-full blur-[100px] opacity-60",
                                                idx % 2 === 0 ? "-top-[10%] -left-[10%]" : "-top-[10%] -right-[10%]"
                                            )} />
                                            <div className={cn(
                                                "absolute w-[30%] h-[30%] bg-indigo-50 rounded-full blur-[80px] opacity-40",
                                                idx % 2 === 0 ? "top-[20%] -right-[5%]" : "top-[20%] -left-[5%]"
                                            )} />
                                        </div>

                                        <div className="container mx-auto px-6 relative z-10">
                                            <div className={cn(
                                                "flex flex-col items-center gap-20",
                                                idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                                            )}>
                                                {/* Text Column */}
                                                <div className="lg:w-1/2 space-y-16">
                                                    <div className="relative">
                                                        <div className="absolute -left-12 top-0 text-[180px] font-black text-blue-50/50 select-none leading-none -z-10">
                                                            {(prog as any).largeNumber}
                                                        </div>
                                                        <div className="space-y-6">
                                                            <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.5em] flex items-center gap-3">
                                                                <span className="w-8 h-[1px] bg-blue-600" />
                                                                {prog.tag}
                                                            </span>
                                                            <h2 className="text-6xl md:text-[80px] font-bold tracking-tighter leading-[0.9] text-slate-900 uppercase">
                                                                {prog.titlePart1} <br />
                                                                <span className="text-blue-600 italic font-light lowercase">{prog.titlePart2}</span>
                                                            </h2>
                                                            <p className="text-slate-500 text-xl font-light leading-relaxed max-w-lg">
                                                                {prog.desc}
                                                            </p>
                                                        </div>
                                                    </div>

                                                    <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10">
                                                        {[
                                                            { ...prog.floatingCard, value: "Elite", color: "bg-blue-600" },
                                                            (prog as any).floatingCard2 ? { ...(prog as any).floatingCard2, value: "Max", color: "bg-indigo-600" } : null,
                                                            (prog as any).floatingCard3 ? { ...(prog as any).floatingCard3, value: "Pro", color: "bg-sky-600" } : null,
                                                            (prog as any).floatingCard4 ? { ...(prog as any).floatingCard4, value: "Ultra", color: "bg-blue-500" } : null,
                                                        ].filter(Boolean).map((feat: any, fIdx) => (
                                                            <div key={fIdx} className="group relative p-10 rounded-[3rem] bg-white border border-slate-100 shadow-xl shadow-slate-100/50 hover:shadow-2xl hover:shadow-blue-100 transition-all duration-500 overflow-hidden">
                                                                <div className={cn("absolute top-0 right-0 w-32 h-32 opacity-5 translate-x-10 -translate-y-10 rounded-full", feat.color)} />
                                                                <div className="relative z-10 space-y-4">
                                                                    <div className="flex items-center gap-3">
                                                                        {feat.icon && typeof feat.icon === 'string' ? (
                                                                            <img src={feat.icon} className="w-5 h-5 opacity-50" alt="" />
                                                                        ) : feat.icon ? (
                                                                            <feat.icon className="w-5 h-5 text-blue-600 opacity-50" />
                                                                        ) : null}
                                                                        <span className="text-[10px] font-black text-slate-500 uppercase tracking-wider">{feat.title}</span>
                                                                    </div>
                                                                    <p className="text-slate-500 text-xs font-light leading-relaxed">{feat.desc}</p>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                    
                                                    <div className="pt-4">
                                                        <ProMaxButton variant="outline" className="px-12 h-16 text-[10px]" onClick={() => navigate(prog.link)}>
                                                            DÉCOUVRIR LA SOLUTION
                                                        </ProMaxButton>
                                                    </div>
                                                </div>

                                                {/* Liquid Visual Column */}
                                                <div className="lg:w-1/2 relative">
                                                    <div className="relative w-full aspect-square max-w-[600px] mx-auto">
                                                        <div className="absolute inset-0 bg-blue-600/5 animate-morph" />
                                                        
                                                        <div className="absolute top-0 left-0 w-full h-full">
                                                            {(prog as any).bubbles.map((bubble: any, bIdx: number) => (
                                                                <div 
                                                                    key={bIdx} 
                                                                    className={cn(
                                                                        "absolute z-30 bg-white/80 backdrop-blur-xl rounded-full shadow-2xl border border-white/50 flex flex-col items-center justify-center text-center animate-float",
                                                                        bIdx === 0 ? "top-[10%] right-[10%] w-48 h-48 p-8" : "bottom-[10%] left-[5%] w-56 h-56 p-10 animation-delay-2000"
                                                                    )}
                                                                >
                                                                    <bubble.icon className={cn("w-8 h-8 mb-3", bubble.color)} />
                                                                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{bubble.label}</span>
                                                                    <span className="text-lg font-bold text-slate-900 leading-none">{bubble.value}</span>
                                                                </div>
                                                            ))}

                                                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full overflow-hidden border-[15px] border-white shadow-2xl animate-morph" style={{ animationDelay: '-2s' }}>
                                                                <img 
                                                                    src={prog.image} 
                                                                    alt={prog.title} 
                                                                    className="w-full h-full object-cover scale-110 hover:scale-125 transition-transform duration-[2s]"
                                                                />
                                                                <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay" />
                                                            </div>

                                                            <div className={cn(
                                                                "absolute top-1/2 -translate-y-1/2 vertical-text hidden xl:block",
                                                                idx % 2 === 0 ? "-right-12" : "-left-12"
                                                            )}>
                                                                <span className="text-xs font-black text-blue-600/20 uppercase tracking-[1em] rotate-180">OFFICE EXCELLENCE</span>
                                                            </div>
                                                        </div>

                                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-blue-100 rounded-full animate-spin-slow opacity-20 -z-10" />
                                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] border border-blue-50 rounded-full animate-spin-slow-reverse opacity-10 -z-10" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. PERFORMANCE DURABLE - ALIGNED DESIGN */}
                <section className="py-32 bg-white overflow-hidden relative">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center lg:flex-row-reverse lg:flex">
                            {/* Visual Side (Left for alternation) */}
                            <div className="relative order-2 lg:order-1">
                                <div className="relative">
                                    <div className={cn(
                                        "relative aspect-[4/5] bg-slate-50 rounded-[4rem] overflow-hidden group transition-all duration-700",
                                        "hover:rounded-[2rem] shadow-2xl -rotate-2 origin-bottom-left"
                                    )}>
                                        <img 
                                            src={pauseEauImg} 
                                            alt="Performance Durable" 
                                            className="w-full h-full object-contain object-center transition-transform duration-1000 group-hover:scale-105" 
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-transparent opacity-60" />
                                    </div>

                                    {/* Floating Bubbles focused on Cold/Freshness */}
                                    <div className="absolute -top-10 -right-10 w-48 h-48 bg-white/80 backdrop-blur-2xl rounded-[3rem] p-8 shadow-2xl border border-blue-50/50 flex flex-col items-center justify-center animate-bounce-slow">
                                        <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-4">
                                            <Zap className="w-6 h-6 text-blue-600" />
                                        </div>
                                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest text-center italic">Fraîcheur<br />Instantanée</span>
                                    </div>
                                    <div className="absolute -bottom-12 -left-12 w-56 h-56 bg-gradient-to-br from-blue-600 to-sky-400 rounded-[4rem] p-10 text-white shadow-2xl rotate-6 animate-float">
                                        <div className="text-4xl font-black italic tracking-tighter leading-none mb-4">PURETÉ<br />GLACIALE</div>
                                        <p className="text-[10px] font-black uppercase tracking-widest opacity-80">Technologie Arctique</p>
                                    </div>
                                </div>
                            </div>

                            {/* Text Side (Right for alternation) */}
                            <div className="space-y-16 order-1 lg:order-2">
                                <div className="relative">
                                    <div className="absolute -left-12 top-0 text-[180px] font-black text-blue-50/50 select-none leading-none -z-10">
                                        04
                                    </div>
                                    <div className="space-y-6">
                                        <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.5em] flex items-center gap-3">
                                            <span className="w-8 h-[1px] bg-blue-600" />
                                            AVANTAGE CORPORATIF
                                        </span>
                                        <h2 className="text-6xl md:text-[80px] font-bold tracking-tighter leading-[0.9] text-slate-900 uppercase">
                                            L'Excellence <br />
                                            <span className="text-blue-600 italic font-light lowercase">à la source.</span>
                                        </h2>
                                        <p className="text-slate-500 text-xl font-light leading-relaxed max-w-lg">
                                            Plus qu'une simple fontaine, un véritable pôle de bien-être pour vos collaborateurs, alliant technologie de purification avancée et design haut de gamme.
                                        </p>
                                    </div>
                                </div>

                                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10">
                                    {[
                                        { title: "Pureté Absolue", desc: "Élimination de 99.9% des impuretés et bactéries.", icon: ShieldCheck, color: "bg-blue-600" },
                                        { title: "Design Slim", desc: "Une intégration parfaite dans vos espaces de travail.", icon: Settings, color: "bg-indigo-600" },
                                        { title: "Engagement RSE", desc: "Zéro plastique, une empreinte écologique minimale.", icon: Leaf, color: "bg-sky-600" },
                                        { title: "Expérience Élite", desc: "Une eau fraîche et filtrée à volonté pour vos équipes.", icon: Star, color: "bg-blue-500" }
                                    ].map((feat: any, fIdx) => (
                                        <div key={fIdx} className="group relative py-8 border-b border-slate-100 last:border-0 hover:pl-4 transition-all duration-500">
                                            <div className="flex flex-col gap-4">
                                                {/* Number and Title Row */}
                                                <div className="flex items-center gap-6">
                                                    <div className={cn(
                                                        "text-5xl font-black italic tracking-tighter leading-none transition-all duration-500 group-hover:scale-110",
                                                        feat.color === "bg-blue-600" ? "text-blue-600/20 group-hover:text-blue-600" : 
                                                        feat.color === "bg-indigo-600" ? "text-indigo-600/20 group-hover:text-indigo-600" : 
                                                        feat.color === "bg-sky-600" ? "text-sky-600/20 group-hover:text-sky-600" : "text-blue-500/20 group-hover:text-blue-500"
                                                    )}>
                                                        {String(fIdx + 1).padStart(2, '0')}
                                                    </div>
                                                    <div className="space-y-1">
                                                        <h4 className="text-xl font-bold text-slate-900 uppercase tracking-tight group-hover:text-blue-600 transition-colors">
                                                            {feat.title}
                                                        </h4>
                                                        <div className={cn("w-12 h-1 rounded-full transition-all duration-500 group-hover:w-24", feat.color)} />
                                                    </div>
                                                </div>

                                                {/* Description with indentation */}
                                                <div className="pl-[76px]">
                                                    <p className="text-slate-500 text-sm font-light leading-relaxed max-w-md opacity-80 group-hover:opacity-100 transition-opacity">
                                                        {feat.desc}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. EXPERT TRUST SECTION */}
                <ExpertTrustSection 
                    title="L'expertise au service du corporatif, "
                    highlight="la performance dans chaque goutte."
                    description="Garantissez le bien-être de vos collaborateurs et la longévité de vos infrastructures. Chez Bricareau, nous transformons chaque analyse en un levier stratégique pour la qualité de vie au travail et l'excellence opérationnelle de votre organisation."
                    buttonText="Demander une consultation corporative"
                    image={corporateExpertImg}
                />

                {/* 5. TESTIMONIALS */}
                <div className="bg-slate-50 py-32 border-y border-gray-100">
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

export default Bureau;
