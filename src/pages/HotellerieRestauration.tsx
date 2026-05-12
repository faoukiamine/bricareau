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
    Wine
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";
import { ProMaxButton } from "@/components/ui/ProMaxButton";
import TestimonialsSection from "@/components/TestimonialsSection";

// Assets
import heroImg from "@/assets/129871.jpg";
import TechnicalRoomHotelImg from "@/assets/203427810.jpeg";
import CommercialfiltrationImg from "@/assets/Commercial-Water-Softener.webp";
import brasserieWaterImg from "@/assets/124521.jpg";
import coffeeFilterImg from "@/assets/167206.jpg";

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
            navTitle: "Adoucisseurs",
            desc: "Protégez vos investissements et garantissez une verrerie étincelante. Nos adoucisseurs haute performance éliminent le calcaire qui dégrade vos fours et lave-vaisselles.",
            points: ["Longévité des Équipements", "Verrerie sans Traces", "Économie de Détergents"],
            image: TechnicalRoomHotelImg,
            link: "/adoucisseur-eau-residentiel",
            tag: "PROTECTION"
        },
        {
            title: "Filtration Haute Pureté",
            navTitle: "Systèmes de filtration",
            desc: "De la cuisine au bar, offrez une eau sans chlore ni odeurs. Améliorez le goût de vos préparations culinaires et la qualité de vos services d'eau en carafe.",
            points: ["Goût Neutre & Pur", "Standards HACCP", "Débit Haute Performance"],
            image: CommercialfiltrationImg,
            link: "/filtres-deau",
            tag: "GASTRONOMIE"
        },
        {
            title: "Solutions pour Brasseries",
            navTitle: "Espace Brasserie",
            desc: "Valorisez votre établissement avec des fontaines à eau design. Proposez une eau filtrée, plate ou pétillante, à volonté et à la température idéale.",
            points: ["Eau Pétillante à Volonté", "Réduction des Coûts Carafe", "Expérience Client Premium"],
            image: brasserieWaterImg,
            link: "/fontaines",
            tag: "PREMIUM"
        },
        {
            title: "Filtres pour Machines à Café",
            navTitle: "Experts Café",
            desc: "Le café est composé à 98% d'eau. Assurez une extraction parfaite et protégez vos machines espresso contre le tartre avec nos filtres spécialisés.",
            points: ["Arômes Sublimés", "Protection Antitartre", "Maintenance Réduite"],
            image: coffeeFilterImg,
            link: "/Systemes-de-desinfection-UV",
            tag: "EXTRACTION"
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
                                <span className="italic font-light text-[#18448F] block">L'excellence,</span>
                                <span className="font-bold text-[#18448F] block">dans chaque verre.</span>
                            </h1>
                            
                            <p className="text-lg md:text-2xl text-slate-500 font-light max-w-2xl leading-relaxed">
                                Sublimez l'expérience de vos convives et optimisez vos opérations avec des solutions d'eau intelligentes conçues pour l'exigence du milieu HORECA.
                            </p> outreach

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

                {/* 2. THE BENTO SERVICE SHOWCASE */}
                <section id="solutions" className="py-32 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
                            <div className="max-w-2xl space-y-6">
                                <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.5em]">SERVICES DÉDIÉS</span>
                                <h2 className="text-4xl md:text-7xl font-bold text-slate-900 tracking-tighter leading-none uppercase">
                                    Performance & <span className="text-[#18448F]">Raffinement.</span>
                                </h2>
                            </div>
                            <p className="text-slate-500 text-lg max-w-md italic border-l-2 border-blue-100 pl-8">
                                "La qualité de l'eau est l'ingrédient invisible qui définit la réputation d'une table d'exception."
                            </p> outreach
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

                            <div ref={containerRef} className="space-y-32">
                                {programs.map((prog, idx) => (
                                    <div 
                                        key={idx}
                                        ref={el => sectionRefs.current[idx] = el}
                                        className="relative group min-h-[600px] flex items-center"
                                    >
                                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
                                            <div className={cn(
                                                "lg:col-span-7 rounded-[3rem] overflow-hidden aspect-video relative shadow-2xl",
                                                idx % 2 === 0 ? "lg:order-1" : "lg:order-2"
                                            )}>
                                                <img src={prog.image} alt={prog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3s]" />
                                                <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply" />
                                            </div>

                                            <div className={cn(
                                                "lg:col-span-5 space-y-8",
                                                idx % 2 === 0 ? "lg:order-2 lg:pl-12" : "lg:order-1 lg:pr-12"
                                            )}>
                                                <span className="text-[10px] font-black text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-widest">
                                                    {prog.tag}
                                                </span>
                                                <h3 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-none uppercase">
                                                    {prog.title}
                                                </h3>
                                                <p className="text-slate-500 text-lg leading-relaxed">
                                                    {prog.desc}
                                                </p>
                                                <div className="space-y-4">
                                                    {prog.points.map((pt, pIdx) => (
                                                        <div key={pIdx} className="flex items-center gap-4 text-slate-800 font-medium">
                                                            <CheckCircle2 className="w-5 h-5 text-blue-600" />
                                                            <span>{pt}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                                <div className="pt-6">
                                                    <ProMaxButton variant="outline" className="px-10 h-14 text-[10px]" onClick={() => navigate(prog.link)}>
                                                        EN SAVOIR PLUS
                                                    </ProMaxButton>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. TECHNICAL DNA GRID */}
                <section className="py-32 bg-slate-900 text-white overflow-hidden">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                            <div className="space-y-12">
                                <div className="space-y-6">
                                    <span className="text-[10px] font-black text-blue-400 uppercase tracking-[0.5em]">POURQUOI BRICAREAU?</span>
                                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-none uppercase">
                                        L'Expertise <br /> <span className="text-blue-500">Culinaire.</span>
                                    </h2>
                                    <p className="text-slate-400 text-lg md:text-xl font-light leading-relaxed max-w-lg">
                                        Nous comprenons les défis uniques de la restauration : pics de service, exigences d'hygiène et besoin de fiabilité absolue.
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                    {[
                                        { title: "Certifié HACCP", desc: "Conformité totale aux normes de sécurité alimentaire.", icon: <ShieldCheck className="w-6 h-6" /> },
                                        { title: "Haute Capacité", desc: "Systèmes conçus pour les débits les plus intenses.", icon: <Zap className="w-6 h-6" /> },
                                        { title: "Maintenance Pro", desc: "Contrats d'entretien préventif pour zéro interruption.", icon: <Settings className="w-6 h-6" /> },
                                        { title: "Design Carafe", desc: "Personnalisation pour une signature visuelle unique.", icon: <Wine className="w-6 h-6" /> }
                                    ].map((item, i) => (
                                        <div key={i} className="space-y-4 p-6 rounded-[2rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group">
                                            <div className="text-blue-400 group-hover:scale-110 transition-transform">
                                                {item.icon}
                                            </div>
                                            <h4 className="text-lg font-bold">{item.title}</h4>
                                            <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="relative">
                                <div className="absolute -inset-20 bg-blue-600/20 blur-[120px] rounded-full" />
                                <div className="relative aspect-square rounded-[3rem] border border-white/10 bg-white/5 p-8 backdrop-blur-3xl">
                                    <div className="w-full h-full rounded-[2rem] overflow-hidden">
                                        <img src="https://images.unsplash.com/photo-1550966841-3ee7adac1af0?auto=format&fit=crop&q=80&w=800" alt="Restaurant Scene" className="w-full h-full object-cover opacity-80" />
                                    </div>
                                    <div className="absolute -bottom-10 -right-10 bg-white p-10 rounded-[2rem] shadow-2xl text-slate-900 hidden md:block">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="text-3xl font-black italic tracking-tighter leading-none">SIGNATURE<br />GOURMET</div>
                                        </div>
                                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Le goût avant tout</p>
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
                                <span className="font-bold text-[#18448F] block text-4xl md:text-7xl tracking-tighter uppercase">Partenaire des <br />meilleures tables.</span>
                            </div>
                        }
                    />
                </div>

                {/* 5. FINAL CALL TO ACTION */}
                <section className="py-32 bg-white overflow-hidden">
                    <div className="container mx-auto px-6">
                        <div className="relative bg-[#18448F] rounded-[3.5rem] p-12 md:p-24 overflow-hidden text-center space-y-10 group">
                            <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl group-hover:scale-110 transition-transform duration-[5s]" />
                            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl group-hover:scale-110 transition-transform duration-[5s]" />

                            <div className="relative z-10 space-y-6 max-w-3xl mx-auto">
                                <h2 className="text-4xl md:text-7xl font-bold text-white tracking-tighter leading-none uppercase">
                                    Garantissez la pureté <br /><span className="text-blue-300 italic font-light lowercase">à chaque service.</span>
                                </h2>
                                <p className="text-blue-100/70 text-lg md:text-xl font-light">
                                    Optimisez vos coûts d'exploitation et offrez une expérience d'hydratation premium à vos clients dès aujourd'hui.
                                </p>
                            </div>

                            <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-8 pt-4">
                                <ProMaxButton variant="white" className="px-16 h-20 text-[12px]" onClick={() => navigate("/consultation")}>
                                    ANALYSE & DEVIS SUR MESURE
                                </ProMaxButton>
                                <div className="flex flex-col items-start gap-1">
                                    <span className="text-[10px] font-black text-blue-300 uppercase tracking-widest">Conseiller HORECA Dédié</span>
                                    <span className="text-2xl font-bold text-white">1-855-264-9328</span>
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

export default HotellerieRestauration;
