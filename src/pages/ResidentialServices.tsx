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
    HeartPulse,
    Droplets,
    Settings,
    Search,
    Leaf,
    Sparkles,
    Sun,
    GlassWater,
    Heart,
    Activity
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { cn } from "@/lib/utils";
import { ProMaxButton } from "@/components/ui/ProMaxButton";
import TestimonialsSection from "@/components/TestimonialsSection";
import ExpertTrustSection from "@/components/ExpertTrustSection";
import WaterDiagnosis from "@/components/water_diagnosis";

// Assets
import heroImg from "@/assets/23568974.png";
import softenerImg from "@/assets/Water-Softener-installation.jpg";
import filtrationImg from "@/assets/Sérénité Direct-Flow installation.png";
import wholeHouseImg from "@/assets/Filtration-eau-de-puits.webp";
import drinkWaterImg from "@/assets/20230add-4ce5-4ae6-a6dc-1f9a2c3aeb7b.jpg";
import uvImg from "@/assets/UV-system.jpg";
import teenagerShowerImg from "@/assets/teenager-taking-shower-reduce-hangover-effect.jpg";
import hotelClassImg from "@/assets/hotel_class.svg";
import savingsImg from "@/assets/savings.svg";
import verifiedImg from "@/assets/verified.svg";
import healthSafeImg from "@/assets/health_and_safety.svg";
import fountainImg from "@/assets/Fontaines d'eau.webp";
import ecoImg from "@/assets/eco.svg";

const ResidentialServices = () => {
    const navigate = useNavigate();
    const [activeSection, setActiveSection] = useState(0);
    const [showNav, setShowNav] = useState(false);
    const [isNavVisible, setIsNavVisible] = useState(true);
    
    const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        document.title = "Solutions d'eau résidentielles | Bricareau";
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
    }, []);    const programs = [
        {
            title: "Filtres d'eau spécialisés pour toute la maison",
            titlePart1: "Filtration d'eau",
            titlePart2: "pour toute la maison",
            navTitle: "Filtration Maison",
            desc: "Une protection intégrale dès l'entrée d'eau. Éliminez chlore, sédiments et métaux lourds de chaque robinet de votre résidence.",
            points: [
                { title: "Clarté de l'eau", desc: "Une eau limpide à chaque robinet, protégeant l'éclat de vos sanitaires et de votre linge." },
                { title: "Protection de la plomberie", desc: "Préservez vos tuyaux et robinetteries contre l'érosion et l'encrassement." },
                { title: "Peau & Cheveux", desc: "Réduisez l'agressivité du chlore pour une douche plus douce et naturelle." }
            ],
            image: wholeHouseImg,
            link: "/filtres-deau",
            tag: "INFRASTRUCTURE",
            floatingCard: { title: "Certifié NSF", desc: "Performance testée et validée par les plus hauts standards mondiaux.", icon: verifiedImg },
            floatingCard2: { title: "Peau & Cheveux", desc: "Réduisez l'agressivité du chlore pour une douche plus douce et naturelle.", icon: verifiedImg },
            floatingCard3: { title: "Performance Durable", desc: "Filtration efficace pendant 5 à 7 ans sans entretien lourd.", icon: savingsImg },
            floatingCard4: { title: "Protection Plomberie", desc: "Dites adieu aux sédiments qui corrodent vos précieux appareils.", icon: healthSafeImg },
            largeNumber: "01",
            bubbles: [
                { icon: ShieldCheck, label: "Sécurité", value: "A+", color: "text-blue-600" },
                { icon: Droplets, label: "Pureté", value: "99%", color: "text-sky-500" }
            ]
        },
        {
            title: "Adoucisseurs d'eau résidentiels",
            titlePart1: "Adoucisseurs d'eau",
            titlePart2: "résidentiels",
            navTitle: "Adoucisseurs",
            desc: "Dites adieu au calcaire. Protégez vos appareils électroménagers et retrouvez la douceur d'une eau soyeuse au quotidien.",
            points: [
                { title: "Zéro calcaire", desc: "Élimination totale du tartre pour des surfaces toujours étincelantes." },
                { title: "Économies", desc: "Réduisez votre consommation de savon et d'énergie jusqu'à 30%." },
                { title: "Confort textile", desc: "Un linge plus souple et des couleurs préservées lavage après lavage." }
            ],
            image: softenerImg,
            link: "/adoucisseur-eau-residentiel",
            tag: "CONFORT",
            floatingCard: { title: "Éco-Énergie", desc: "Réduisez vos factures d'énergie en optimisant votre chauffe-eau.", icon: savingsImg },
            floatingCard2: { title: "Zéro Calcaire", desc: "Élimination totale du tartre pour des surfaces toujours étincelantes.", icon: verifiedImg },
            floatingCard3: { title: "Économies ROI", desc: "Réduisez votre consommation de savon et d'énergie jusqu'à 30%.", icon: savingsImg },
            floatingCard4: { title: "Confort Textile", desc: "Un linge plus souple et des couleurs préservées lavage après lavage.", icon: verifiedImg },
            largeNumber: "02",
            bubbles: [
                { icon: Sparkles, label: "Éclat", value: "100%", color: "text-amber-500" },
                { icon: Zap, label: "Énergie", value: "-25%", color: "text-blue-600" }
            ]
        },
        {
            title: "Solutions d'eau potable premium",
            titlePart1: "Stations d'eau potable",
            titlePart2: "premium",
            navTitle: "Eau Potable",
            desc: "La pureté d'une eau de source à votre robinet. L'osmose inverse haute technologie pour une hydratation sans compromis.",
            points: [
                { title: "Goût parfait", desc: "Une eau neutre et rafraîchissante, idéale pour le café, le thé et la cuisine." },
                { title: "Santé optimale", desc: "Élimination des micro-plastiques, nitrates et résidus pharmaceutiques." },
                { title: "Praticité", desc: "Plus besoin d'acheter ou de transporter des bouteilles d'eau lourdes." }
            ],
            image: filtrationImg,
            link: "/systeme-de-filtration-deau-potable",
            tag: "SANTÉ",
            floatingCard: { title: "Standard Hôtel", desc: "La qualité des plus grands établissements dans votre cuisine.", icon: hotelClassImg },
            floatingCard2: { title: "Pureté Totale", desc: "Élimination des métaux lourds et micro-plastiques invisibles.", icon: healthSafeImg },
            floatingCard3: { title: "Goût de Source", desc: "Une eau cristalline parfaite pour sublimer vos cafés et thés.", icon: verifiedImg },
            floatingCard4: { title: "Zéro Plastique", desc: "Éliminez l'achat et le transport de bouteilles d'eau lourdes.", icon: ecoImg },
            largeNumber: "03",
            bubbles: [
                { icon: GlassWater, label: "Goût", value: "Pur", color: "text-blue-400" },
                { icon: Heart, label: "Bien-être", value: "Vital", color: "text-rose-500" }
            ]
        },
        {
            title: "Systèmes de désinfection UV",
            titlePart1: "Systèmes de désinfection",
            titlePart2: "par UV",
            navTitle: "Protection UV",
            desc: "Une barrière impénétrable contre les micro-organismes. La solution ultime pour les eaux de puits et la sécurité bactériologique.",
            points: [
                { title: "Stérilisation", desc: "Neutralise 99,99% des bactéries, virus et kystes sans produits chimiques." },
                { title: "Action continue", desc: "Une protection 24h/24 sans modifier le goût ou l'odeur de l'eau." },
                { title: "Entretien simple", desc: "Une technologie robuste ne nécessitant qu'un changement de lampe annuel." }
            ],
            image: uvImg,
            link: "/Systemes-de-desinfection-UV",
            tag: "SÉCURITÉ",
            floatingCard: { title: "Santé 99.9%", desc: "Protection certifiée contre les pathogènes invisibles.", icon: healthSafeImg },
            floatingCard2: { title: "Stérilisation", desc: "Neutralise bactéries et virus sans produits chimiques.", icon: ShieldCheck },
            floatingCard3: { title: "Sécurité 24/7", desc: "Une barrière impénétrable active en permanence pour votre foyer.", icon: healthSafeImg },
            floatingCard4: { title: "Entretien Simple", desc: "Technologie robuste ne nécessitant qu'un changement de lampe annuel.", icon: verifiedImg },
            largeNumber: "04",
            bubbles: [
                { icon: Activity, label: "Contrôle", value: "Actif", color: "text-blue-600" },
                { icon: Sun, label: "Rayonnement", value: "Max", color: "text-amber-400" }
            ]
        },
        {
            title: "Fontaines d'eau intelligentes",
            titlePart1: "Fontaines d'eau",
            titlePart2: "intelligentes",
            navTitle: "Fontaines",
            desc: "L'élégance au service de l'hydratation. Une source d'eau purifiée, fraîche ou pétillante, intégrée parfaitement à votre intérieur.",
            points: [
                { title: "Multi-température", desc: "Eau fraîche, tempérée ou chaude instantanément selon vos besoins." },
                { title: "Filtration intégrée", desc: "Technologie de pointe éliminant tout résidu pour une eau pure." },
                { title: "Éco-responsable", desc: "Dites adieu aux bouteilles jetables et réduisez vos déchets plastiques." }
            ],
            image: fountainImg,
            link: "/fontaines",
            tag: "HYDRATATION",
            floatingCard: { title: "Confort Illimité", desc: "Oubliez les bonbonnes lourdes et encombrantes pour toujours.", icon: ecoImg },
            floatingCard2: { title: "Multi-Température", desc: "Eau fraîche, tempérée ou chaude instantanément selon vos envies.", icon: verifiedImg },
            floatingCard3: { title: "Design Premium", desc: "Une esthétique moderne qui s'intègre parfaitement à votre intérieur.", icon: verifiedImg },
            floatingCard4: { title: "Option Pétillante", desc: "Dégustez une eau finement gazéifiée directement de votre fontaine.", icon: GlassWater },
            largeNumber: "05",
            bubbles: [
                { icon: Droplets, label: "Pureté", value: "Top", color: "text-blue-600" },
                { icon: Leaf, label: "Écologie", value: "Green", color: "text-green-500" }
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
                <Hero 
                    image={heroImg}
                    highlightedTitle="L'eau pure, "
                    mainTitle="que votre famille mérite."
                    subtitle="Transformez l'eau de votre maison en une ressource cristalline, saine et protectrice. Plus de 20 000 familles au Québec nous font confiance."
                    ctaText="ANALYSE D'EAU GRATUITE"
                    ctaLink="/consultation"
                    showPhone={true}
                    badge="Excellence Résidentielle"
                />
                
                {/* 2. INTRO SOLUTIONS */}
                <section className="py-24 bg-white relative">
                    <div className="container mx-auto px-6 text-center">
                        <div className="max-w-4xl mx-auto space-y-10 animate-in fade-in slide-in-from-bottom-8 duration-1000">
                            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-[1.1] text-[#18448F] uppercase">
                                Nos solutions résidentielles <br />
                                <span className="text-slate-900">de traitement de l'eau</span>
                            </h2>
                            <p className="text-slate-500 text-xl font-light leading-relaxed max-w-2xl mx-auto">
                                Découvrez une gamme complète de technologies de pointe conçues pour transformer la qualité de l'eau de votre foyer. De l'adoucissement haute efficacité à la purification par osmose inverse, nos solutions allient performance, durabilité et design pour offrir à votre famille une eau d'une pureté absolue, chaque jour.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 3. SERVICE SECTIONS - PREMIUM LIQUID DESIGN */}
                <section id="solutions" className="py-20 bg-white">
                    <div className="container mx-auto px-6">
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
                                        className="relative h-[80vh] flex items-center overflow-hidden"
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
                                                            (prog as any).floatingCard2 ? { ...(prog as any).floatingCard2, value: "Max", color: "bg-indigo-600" } : { ...prog.points[0], value: "Max", color: "bg-indigo-600" },
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
                                                                            <feat.icon className="w-5 h-5 opacity-50" />
                                                                        ) : null}
                                                                        <span className="text-xs font-bold text-slate-500">{feat.title}</span>
                                                                    </div>
                                                                    <p className="text-slate-500 text-sm font-light leading-relaxed">{feat.desc}</p>
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
                                                                <span className="text-xs font-black text-blue-600/20 uppercase tracking-[1em] rotate-180">DESIGNED IN QUEBEC</span>
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

                {/* 4. EXPERT TRUST SECTION */}
                <ExpertTrustSection />

                {/* 5. TESTIMONIALS */}
                <div className="bg-slate-50 py-32 border-y border-gray-100">
                    <TestimonialsSection 
                        filterProduct="/"
                        limit={6}
                        title={
                            <div className="text-center space-y-3 mb-16">
                                <span className="text-[10px] font-black text-blue-500 uppercase tracking-[0.5em] block mb-4">L'EXPÉRIENCE BRICAREAU</span>
                                <h2 className="heading-pro-max text-center uppercase">
                                    <span className="italic font-light text-[#18448F]">Une famille satisfaite </span>
                                    <span className="font-bold text-[#18448F]">après l'autre.</span>
                                </h2>
                            </div>
                        }
                    />
                </div>
                {/* 6. WATER DIAGNOSIS */}
                <WaterDiagnosis />
            </main>

            <Footer />
        </div>
    );
};

export default ResidentialServices;
