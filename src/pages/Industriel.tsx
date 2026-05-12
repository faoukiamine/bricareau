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
    Settings,
    Activity,
    Cpu,
    Layers,
    Droplets,
    Wrench,
    Factory
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";
import { ProMaxButton } from "@/components/ui/ProMaxButton";
import TestimonialsSection from "@/components/TestimonialsSection";

// Assets
import heroImg from "@/assets/1451506551.JPG";
import commercialFiltrationImg from "@/assets/Commercial-Water-Softener.webp";
import industrialSoftenerImg from "@/assets/Industrial Water Softeners.png";
import dosinggroupImg from "@/assets/Pulsafeeder dosing group.jpg";
import IndustrialROSystemsImg from "@/assets/jpg100.jpg";
import DISystemsImg from "@/assets/DI-Water-System.jpg";
import uvSystemImg from "@/assets/Aquaviva-Cannes-480x355.png";

const Industriel = () => {
    const navigate = useNavigate();
    const [activeSection, setActiveSection] = useState(0);
    const [showNav, setShowNav] = useState(false);
    const [isNavVisible, setIsNavVisible] = useState(true);
    

    const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        document.title = "Solutions Industrielles | Bricareau";
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
            title: "Filtration Multimédia",
            navTitle: "Filtres Multimédia",
            desc: "Systèmes haute capacité conçus pour éliminer les sédiments, le fer et le manganèse à grande échelle, protégeant l'ensemble de vos installations.",
            points: ["Débit Constant", "Protection de Tuyauterie", "Filtration Haute Performance"],
            image: commercialFiltrationImg,
            link: "/filtres-deau",
            tag: "INFRASTRUCTURE"
        },
        {
            title: "Adoucisseurs Industriels",
            navTitle: "Adoucisseurs",
            desc: "Éliminez le calcaire de vos processus industriels. Augmentez l'efficacité thermique de vos chaudières et la durée de vie de vos échangeurs.",
            points: ["Protection Antitartre", "Efficacité Énergétique", "Cycles de Vie Prolongés"],
            image: industrialSoftenerImg,
            link: "/adoucisseur-eau-residentiel",
            tag: "THERMIQUE"
        },
        {
            title: "Groupes de Dosage & Contrôle",
            navTitle: "Dosage & Contrôle",
            desc: "Précision chirurgicale pour l'injection chimique et le contrôle de la qualité d'eau. Automatisation complète de vos paramètres critiques.",
            points: ["Précision de Dosage", "Contrôle Automatisé", "Surveillance en Temps Réel"],
            image: dosinggroupImg,
            link: "/fontaines",
            tag: "PRÉCISION"
        },
        {
            title: "Osmose Inverse Industrielle",
            navTitle: "Osmose Inverse",
            desc: "Production d'eau ultra-pure pour les processus les plus exigeants. Élimination totale des TDS pour une qualité d'eau constante.",
            points: ["Pureté Moléculaire", "Capacité sur Mesure", "Récupération d'Eau Optimisée"],
            image: IndustrialROSystemsImg,
            link: "/systeme-de-filtration-deau-potable",
            tag: "PURIFICATION"
        },
        {
            title: "Déionisation & Échange d'Ions",
            navTitle: "Déionisation",
            desc: "Solutions spécialisées pour obtenir une conductivité minimale. Indispensable pour les laboratoires et l'industrie électronique.",
            points: ["Conductivité Ultra-Basse", "Lits de Résine Spécifiques", "Contrôle Analytique"],
            image: DISystemsImg,
            link: "/systeme-de-filtration-deau-potable",
            tag: "LABORATOIRE"
        },
        {
            title: "Désinfection UV de Puissance",
            navTitle: "Systèmes UV",
            desc: "Neutralisation bactériologique haute intensité sans produits chimiques. Sécurisez vos lignes de production contre les risques microbiens.",
            points: ["Sécurité Biologique", "Action Instantanée", "Zéro Résidu Chimique"],
            image: uvSystemImg,
            link: "/Systemes-de-desinfection-UV",
            tag: "SÉCURITÉ"
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
                <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-900">
                    <div className="absolute inset-0 z-0">
                        <img src={heroImg} alt="Industrial Engineering" className="w-full h-full object-cover opacity-40 mix-blend-luminosity" />
                        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                    </div>

                    <div className="container mx-auto px-6 relative z-10">
                        <div className="max-w-4xl space-y-12">
                            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-md">
                                <Factory className="w-4 h-4 text-blue-400" />
                                <span className="text-[10px] font-black text-blue-400 uppercase tracking-[0.3em]">Ingénierie Industrielle Bricareau</span>
                            </div>
                            
                            <h1 className="text-4xl md:text-6xl lg:text-[72px] leading-[1.1] tracking-tight animate-in fade-in slide-in-from-left duration-1000">
                                <span className="italic font-light text-white">La puissance, </span>
                                <span className="font-bold text-white">de la précision industrielle.</span>
                            </h1>
                            
                            <p className="text-lg md:text-2xl text-slate-400 font-light max-w-2xl leading-relaxed">
                                Optimisez vos processus, protégez vos infrastructures et garantissez la continuité de vos opérations avec nos solutions d'ingénierie de l'eau.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-6 pt-8">
                                <ProMaxButton variant="primary" className="px-12 h-16 text-[11px]" onClick={() => navigate("/consultation")}>
                                    CONSULTATION TECHNIQUE
                                </ProMaxButton>
                                <a href="tel:18552649328" className="flex items-center gap-4 group">
                                    <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-blue-500/50 group-hover:bg-white/10 transition-all">
                                        <Phone className="w-5 h-5 text-blue-400" />
                                    </div>
                                    <div className="text-left">
                                        <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Division Commerciale</div>
                                        <div className="text-xl font-bold tracking-tight text-white">1-855-264-9328</div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="absolute bottom-12 right-12 hidden lg:block">
                        <div className="flex items-center gap-4 text-slate-500">
                            <span className="text-[10px] font-black uppercase tracking-widest rotate-90 origin-right translate-y-12">SYSTÈMES HAUTE CAPACITÉ</span>
                            <div className="w-[1px] h-24 bg-white/10" />
                        </div>
                    </div>
                </section>

                {/* 2. BENTO SHOWCASE */}
                <section id="solutions" className="py-32 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
                            <div className="max-w-2xl space-y-6">
                                <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.5em]">SOLUTIONS TECHNIQUES</span>
                                <h2 className="text-4xl md:text-7xl font-bold text-slate-900 tracking-tighter leading-none uppercase">
                                    Performance <span className="text-[#18448F]">Opérationnelle.</span>
                                </h2>
                            </div>
                            <p className="text-slate-500 text-lg max-w-md italic border-l-2 border-blue-100 pl-8">
                                "Une maîtrise totale de la qualité d'eau est le pilier d'une industrie performante et durable."
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

                            <div ref={containerRef} className="space-y-32">
                                {programs.map((prog, idx) => (
                                    <div 
                                        key={idx}
                                        ref={el => sectionRefs.current[idx] = el}
                                        className="relative group min-h-[600px] flex items-center"
                                    >
                                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
                                            <div className={cn(
                                                "lg:col-span-7 rounded-[3rem] overflow-hidden aspect-video relative shadow-2xl bg-slate-100",
                                                idx % 2 === 0 ? "lg:order-1" : "lg:order-2"
                                            )}>
                                                <img src={prog.image} alt={prog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3s]" />
                                                <div className="absolute inset-0 bg-blue-900/5 mix-blend-multiply" />
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
                                                        SPÉCIFICATIONS TECHNIQUES
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

                {/* 3. INDUSTRIAL DNA GRID */}
                <section className="py-32 bg-slate-900 text-white overflow-hidden">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                            <div className="space-y-12">
                                <div className="space-y-6">
                                    <span className="text-[10px] font-black text-blue-400 uppercase tracking-[0.5em]">VALEUR AJOUTÉE</span>
                                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-none uppercase">
                                        Rigueur & <br /> <span className="text-blue-500">Fiabilité.</span>
                                    </h2>
                                    <p className="text-slate-400 text-lg md:text-xl font-light leading-relaxed max-w-lg">
                                        Nos ingénieurs conçoivent des systèmes robustes capables de supporter des cycles de production intensifs 24/7.
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                    {[
                                        { title: "Sur Mesure", desc: "Conception adaptée à vos contraintes d'espace et de débit.", icon: <Cpu className="w-6 h-6" /> },
                                        { title: "Support 24/7", desc: "Intervention d'urgence pour maintenir votre production.", icon: <Wrench className="w-6 h-6" /> },
                                        { title: "Analytique", desc: "Suivi télémétrique des performances de vos systèmes.", icon: <Activity className="w-6 h-6" /> },
                                        { title: "Évolutivité", desc: "Solutions modulaires accompagnant votre croissance.", icon: <Layers className="w-6 h-6" /> }
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
                                        <img src="https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&q=80&w=800" alt="Industrial Plant" className="w-full h-full object-cover opacity-80" />
                                    </div>
                                    <div className="absolute -bottom-10 -right-10 bg-white p-10 rounded-[2rem] shadow-2xl text-slate-900 hidden md:block">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="text-3xl font-black italic tracking-tighter leading-none">PRÉCISION<br />INDUSTRIELLE</div>
                                        </div>
                                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Standard d'excellence</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. TESTIMONIALS */}
                <div className="bg-slate-50 py-32 border-y border-gray-100">
                    <TestimonialsSection 
                        filterProduct="Industriel"
                        limit={6}
                        title={
                            <div className="text-center space-y-3 mb-16">
                                <span className="text-[10px] font-black text-blue-500 uppercase tracking-[0.5em] block mb-4">NOTRE RÉPUTATION</span>
                                <span className="font-bold text-[#18448F] block text-4xl md:text-7xl tracking-tighter uppercase">La confiance des <br />grands noms de l'industrie.</span>
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
                                    Sécurisez vos opérations <br /><span className="text-blue-300 italic font-light lowercase">avec l'expertise Bricareau.</span>
                                </h2>
                                <p className="text-blue-100/70 text-lg md:text-xl font-light">
                                    Une analyse technique approfondie est le premier pas vers une meilleure performance. Discutons de vos projets industriels.
                                </p>
                            </div>

                            <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-8 pt-4">
                                <ProMaxButton variant="white" className="px-16 h-20 text-[12px]" onClick={() => navigate("/consultation")}>
                                    OBTENIR UNE ANALYSE TECHNIQUE
                                </ProMaxButton>
                                <div className="flex flex-col items-start gap-1">
                                    <span className="text-[10px] font-black text-blue-300 uppercase tracking-widest">Ingénieur Technico-Commercial</span>
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

export default Industriel;
