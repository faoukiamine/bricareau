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
    Utensils,
    Droplets,
    Settings,
    Building2,
    Coffee,
    Wine,
    Sparkles,
    GlassWater,
    Heart,
    Activity,
    Activity as SparklesIcon,
    Leaf
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
import heroImg from "@/assets/2151949236.jpg";
import TechnicalRoomHotelImg from "@/assets/WaterSoftenerInstallation.jpg";
import CommercialfiltrationImg from "@/assets/1494014028920430592_8e1000580b747b8dac3a78e0855f0394-removebg-preview.png";
import brasserieWaterImg from "@/assets/124521.jpg";
import coffeeFilterImg from "@/assets/167206.jpg";
import verifiedImg from "@/assets/verified.svg";
import savingsImg from "@/assets/savings.svg";
import healthSafeImg from "@/assets/health_and_safety.svg";
import ecoImg from "@/assets/eco.svg";
import industrialHospitalityImg from "@/assets/industrial_hospitality.png";

const HotellerieRestauration = () => {
    const navigate = useNavigate();
    const [activeSection, setActiveSection] = useState(0);
    const [showNav, setShowNav] = useState(false);
    const [isNavVisible, setIsNavVisible] = useState(true);
    
    const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        document.title = "Hôtellerie & Restauration | Bricareau";
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
            title: "Adoucissement Commercial",
            titlePart1: "Adoucisseurs d'eau ",
            titlePart2: "Commercial",
            navTitle: "Adoucisseurs",
            desc: "Protégez vos investissements et garantissez une verrerie étincelante. Nos adoucisseurs haute performance éliminent le calcaire qui dégrade vos fours et lave-vaisselles.",
            points: [
                { title: "Longévité des équipements", desc: "Prolongez la vie de vos fours et lave-vaisselles en éliminant le tartre à la source." },
                { title: "Verrerie sans traces", desc: "Garantissez une brillance éclatante et sans taches pour un service client irréprochable." }
            ],
            image: TechnicalRoomHotelImg,
            link: "/adoucisseurs-eau-commerciaux",
            tag: "PROTECTION contre la calcaire",
            largeNumber: "02",
            floatingCard: { title: "Zéro Calcaire", desc: "Protégez vos machines onéreuses du tartre.", icon: ShieldCheck },
            floatingCard2: { title: "Zéro Panne", desc: "Réduisez les interventions sur vos équipements.", icon: ShieldCheck },
            floatingCard3: { title: "Longue Durée", desc: "Prolongez la vie de vos fours et machines.", icon: Star },
            floatingCard4: { title: "Éclat Vaisselle", desc: "Des verres étincelants sans traces de calcaire.", icon: Sparkles },
            bubbles: [
                { icon: ShieldCheck, label: "Sécurité", value: "Haut", color: "text-blue-600" },
                { icon: Zap, label: "Efficacité", value: "99%", color: "text-amber-400" }
            ]
        },
        {
            title: "Filtration d'Eau Potable",
            titlePart1: "Filtration d'eau ",
            titlePart2: "Potable",
            navTitle: "Systèmes de filtration",
            desc: "De la cuisine au bar, offrez une eau sans chlore ni odeurs. Améliorez le goût de vos préparations culinaires et la qualité de vos services d'eau en carafe.",
            points: [
                { title: "Goût neutre & pur", desc: "Offrez une eau cristalline sans chlore ni odeurs, sublimant chaque plat et boisson." },
                { title: "Standards HACCP", desc: "Une conformité totale aux normes d'hygiène les plus strictes de la restauration professionnelle." }
            ],
            image: CommercialfiltrationImg,
            imageFit: "contain",
            link: "/filtres-deau",
            tag: "GASTRONOMIE",
            largeNumber: "01",
            floatingCard: { title: "Goût Pur", desc: "Sublimez la saveur de vos plats et cafés.", icon: GlassWater },
            floatingCard2: { title: "Pureté Totale", desc: "Élimination des impuretés pour une eau cristalline.", icon: ShieldCheck },
            floatingCard3: { title: "Sommelier Choice", desc: "Valorise la robe et le bouquet de vos crus.", icon: Wine },
            floatingCard4: { title: "ROI Restaurateur", desc: "Supprimez l'achat et le stockage des bouteilles.", icon: Settings },
            bubbles: [
                { icon: GlassWater, label: "Pureté", value: "Top", color: "text-sky-400" },
                { icon: Sparkles, label: "Éclat", value: "Max", color: "text-blue-500" }
            ]
        },
        {
            title: "Solutions pour Brasseries",
            titlePart1: "Solutions pour ",
            titlePart2: "Brasseries",
            navTitle: "Espace Brasserie",
            desc: "Valorisez votre établissement avec des fontaines à eau design. Proposez une eau filtrée, plate ou pétillante, à volonté et à la température idéale.",
            points: [
                { title: "Eau pétillante à volonté", desc: "Proposez une eau fraîche et pétillante en continu sans la logistique des bouteilles." },
                { title: "Réduction des coûts carafe", desc: "Éliminez les frais d'achat et de stockage d'eau embouteillée avec notre solution interne." }
            ],
            image: brasserieWaterImg,
            link: "/fontaines",
            tag: "EXPÉRIENCE",
            largeNumber: "03",
            floatingCard: { title: "Design Luxe", desc: "Une fontaine qui valorise votre intérieur.", icon: Sparkles },
            floatingCard2: { title: "Esthétique Pro", desc: "Finition premium pour vos salles et lobbies.", icon: Star },
            floatingCard3: { title: "Multi-Flux", desc: "Eau fraîche, tempérée ou pétillante filtrée.", icon: GlassWater },
            floatingCard4: { title: "Zéro Déchet", desc: "Engagement éco-responsable pour vos clients.", icon: Leaf },
            bubbles: [
                { icon: Droplets, label: "Fraîcheur", value: "Active", color: "text-blue-600" },
                { icon: Leaf, label: "Écologie", value: "Zéro Déchet", color: "text-green-500" }
            ]
        },
        {
            title: "Filtres pour Machines à Café",
            titlePart1: "Filtres d'eau pour ",
            titlePart2: "Machines à Café",
            navTitle: "Experts Café",
            desc: "Le café est composé à 98% d'eau. Assurez une extraction parfaite et protégez vos machines espresso contre le tartre avec nos filtres spécialisés.",
            points: [
                { title: "Arômes sublimés", desc: "L'eau idéale pour extraire toutes les nuances aromatiques de vos grains de café." },
                { title: "Protection antitartre", desc: "Évitez les pannes coûteuses en protégeant les circuits sensibles de vos machines espresso." }
            ],
            image: coffeeFilterImg,
            link: "/filtres-eau-machine-cafe",
            tag: "EXTRACTION",
            largeNumber: "04",
            floatingCard: { title: "Barista Pro", desc: "L'eau secrète des champions.", icon: Coffee },
            floatingCard2: { title: "Protection Pro", desc: "Préservez les circuits internes de vos machines.", icon: ShieldCheck },
            floatingCard3: { title: "Flux Stable", desc: "Pression constante pour une crème parfaite.", icon: Activity },
            floatingCard4: { title: "Extraction Pure", desc: "Révélez le caractère unique de chaque grain.", icon: Heart },
            bubbles: [
                { icon: Heart, label: "Extraction", value: "Optimale", color: "text-red-400" },
                { icon: Activity, label: "Pression", value: "Stable", color: "text-indigo-400" }
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
                <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
                    <div className="absolute inset-0 z-0">
                        <img src={heroImg} alt="Hospitality Water Solutions" className="w-full h-full object-cover opacity-90" />
                        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
                        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                    </div>

                    <div className="container mx-auto px-6 relative z-10">
                        <div className="max-w-4xl space-y-12">
                            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-50 border border-blue-100">
                                <Utensils className="w-4 h-4 text-blue-600" />
                                <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.3em]">Hôtellerie & Restauration de Luxe</span>
                            </div>
                            
                            <h1 className="text-4xl md:text-6xl lg:text-[72px] leading-[1.1] tracking-tight animate-in fade-in slide-in-from-left duration-1000">
                                <span className="italic font-light text-[#18448F]">L'excellence pure, </span>
                                <span className="font-bold text-[#18448F]">à la table des plus grands.</span>
                            </h1>
                            
                            <p className="text-lg md:text-2xl text-slate-500 font-light max-w-2xl leading-relaxed">
                                Sublimez l'expérience de vos convives et optimisez vos opérations avec des solutions d'eau intelligentes conçues pour l'exigence du milieu HORECA.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-6 pt-8">
                                <ProMaxButton variant="primary" className="px-12 h-16 text-[11px]" onClick={() => navigate("/consultation")}>
                                    ANALYSE DE BESOINS GRATUITE
                                </ProMaxButton>
                                <a href="tel:18552649328" className="flex items-center gap-4 group">
                                    <div className="w-14 h-14 rounded-full bg-slate-50 flex items-center justify-center border border-slate-200 group-hover:border-blue-500/50 group-hover:bg-white transition-all">
                                        <Phone className="w-5 h-5 text-[#18448F]" />
                                    </div>
                                    <div className="text-left">
                                        <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Ligne Prioritaire</div>
                                        <div className="text-xl font-bold tracking-tight text-[#18448F]">1-855-264-9328</div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="absolute bottom-12 right-12 hidden lg:block">
                        <div className="flex items-center gap-4 text-slate-400">
                            <span className="text-[10px] font-black uppercase tracking-widest rotate-90 origin-right translate-y-12">DÉCOUVREZ L'EXPÉRIENCE</span>
                            <div className="w-[1px] h-24 bg-slate-200" />
                        </div>
                    </div>
                </section>

                <section id="solutions" className="py-20 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col md:flex-row md:items-end justify-between mb-32 gap-8">
                            <div className="max-w-2xl space-y-6">
                                <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.5em]">SERVICES DÉDIÉS</span>
                                <h2 className="heading-pro-max text-left uppercase">
                                    <span className="italic font-light text-[#18448F]">Performance & </span><br />
                                    <span className="font-bold text-[#18448F]">Raffinement.</span>
                                </h2>
                            </div>
                            <p className="text-slate-400 text-sm font-light max-w-sm border-l border-blue-100 pl-6">
                                "La qualité de l'eau est l'ingrédient invisible qui définit la réputation d'une table d'exception."
                            </p>
                        </div>

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

                            <div ref={containerRef} className="space-y-48">
                                {programs.map((prog, idx) => (
                                    <div 
                                        key={idx}
                                        ref={el => sectionRefs.current[idx] = el}
                                        className="relative min-h-[80vh] flex items-center py-24 overflow-hidden"
                                    >
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
                                                <div className="lg:w-1/2 space-y-16">
                                                    <div className="relative">
                                                        <div className="absolute -left-12 top-0 text-[180px] font-black text-blue-50/50 select-none leading-none -z-10">
                                                            {prog.largeNumber}
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
                                                                    className={cn(
                                                                        "w-full h-full transition-transform duration-[2s]",
                                                                        (prog as any).imageFit === "contain" ? "object-contain p-0 scale-110 hover:scale-125" : "object-cover scale-110 hover:scale-125"
                                                                    )}
                                                                />
                                                                <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay" />
                                                            </div>

                                                            <div className={cn(
                                                                "absolute top-1/2 -translate-y-1/2 vertical-text hidden xl:block",
                                                                idx % 2 === 0 ? "-right-12" : "-left-12"
                                                            )}>
                                                                <span className="text-xs font-black text-blue-600/20 uppercase tracking-[1em] rotate-180">HORECA EXCELLENCE</span>
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

                {/* 3. EXPERTISE CULINAIRE SECTION (Side-by-Side like Expert Section) */}
                <section className="bg-white relative overflow-hidden border-y border-slate-100">
                    <div className="flex flex-col lg:flex-row items-stretch min-h-[600px] lg:min-h-[800px]">
                        
                        {/* Image Side - 50% width, Full Bleed with Tilt */}
                        <div className="w-full lg:w-1/2 relative group overflow-hidden bg-slate-900">
                            <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                                <img
                                    src={industrialHospitalityImg}
                                    alt="Expertise Culinaire"
                                    className="absolute inset-0 w-full h-full object-cover -rotate-2 scale-125 origin-center"
                                />
                                <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-blue-900/10 transition-colors" />
                            </div>

                            {/* Floating Bubbles on the Image (Expert Style) */}
                            <div className="absolute top-10 right-10 bg-white/90 backdrop-blur-md p-8 rounded-[2rem] shadow-2xl border border-white/50 max-w-[200px] z-20 animate-bounce-slow">
                                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-4">
                                    <Utensils className="w-6 h-6 text-blue-600" />
                                </div>
                                <div className="text-xl font-bold text-blue-600 mb-1">GOÛT</div>
                                <div className="text-xs font-black text-slate-900 uppercase tracking-widest leading-tight italic">Sublimé</div>
                            </div>

                        </div>

                        {/* Content Side */}
                        <div className="w-full lg:w-1/2 flex items-center bg-slate-50/10 justify-start">
                            <div className="w-full max-w-[700px] px-6 sm:px-12 lg:px-10 xl:px-16 py-20 lg:py-32">
                                <div className="space-y-16">
                                    <div className="space-y-8">
                                        <div className="space-y-4">
                                            <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.5em] flex items-center gap-3">
                                                <span className="w-8 h-[1px] bg-blue-600" />
                                                POURQUOI BRICAREAU?
                                            </span>
                                            <h2 className="text-6xl md:text-[80px] font-bold tracking-tighter leading-[0.9] text-slate-900 uppercase">
                                                L'Expertise <br />
                                                <span className="text-blue-600 italic font-light lowercase">culinaire.</span>
                                            </h2>
                                            <p className="text-slate-500 text-xl font-light leading-relaxed max-w-lg">
                                                Nous comprenons les défis uniques de la restauration : pics de service, exigences d'hygiène et besoin de fiabilité absolue pour vos cuisines.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="relative grid grid-cols-1 gap-2">
                                        {[
                                            { title: "Certifié HACCP", desc: "Conformité totale aux normes de sécurité alimentaire les plus strictes.", color: "bg-blue-600" },
                                            { title: "Haute Capacité", desc: "Systèmes conçus pour les débits les plus intenses en période de rush.", color: "bg-indigo-600" },
                                            { title: "Maintenance Pro", desc: "Contrats d'entretien préventif pour garantir zéro interruption de service.", color: "bg-sky-600" },
                                            { title: "Design Carafe", desc: "Une eau pure qui valorise votre signature visuelle en salle.", color: "bg-blue-500" }
                                        ].map((feat, fIdx) => (
                                            <div key={fIdx} className="group relative py-8 border-b border-slate-100 last:border-0 hover:pl-4 transition-all duration-500">
                                                <div className="flex flex-col gap-4">
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
                    </div>
                </section>

                {/* 4. TESTIMONIALS */}
                <div className="bg-slate-50 py-32 border-y border-gray-100">
                    <TestimonialsSection 
                        filterProduct="Hotellerie"
                        limit={6}
                        title={
                            <div className="text-center space-y-3 mb-16">
                                <span className="text-[10px] font-black text-blue-500 uppercase tracking-[0.5em] block mb-4">ILS NOUS FONT CONFIANCE</span>
                                <h2 className="heading-pro-max text-center uppercase">
                                    <span className="italic font-light text-[#18448F]">Partenaire des </span>
                                    <span className="font-bold text-[#18448F]">meilleures tables.</span>
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

export default HotellerieRestauration;
