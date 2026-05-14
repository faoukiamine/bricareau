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
    Factory,
    Sparkles,
    GlassWater,
    Heart,
    Leaf,
    Wine
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
            titlePart1: "Filtration ",
            titlePart2: "Multimédia",
            navTitle: "Filtres Multimédia",
            desc: "Systèmes haute capacité conçus pour éliminer les sédiments, le fer et le manganèse à grande échelle, protégeant l'ensemble de vos installations.",
            points: [
                { title: "Débit constant", desc: "Assurez un flux d'eau ininterrompu même lors des pics de consommation les plus élevés." },
                { title: "Protection de tuyauterie", desc: "Évitez l'érosion et l'encrassement de vos réseaux de distribution à long terme." }
            ],
            image: commercialFiltrationImg,
            link: "/filtres-deau",
            tag: "INFRASTRUCTURE",
            largeNumber: "01",
            floatingCard: { title: "Protection Réseau", desc: "Élimination totale sédiments.", icon: ShieldCheck },
            bubbles: [
                { icon: Factory, label: "Capacité", value: "Haute", color: "text-slate-600" },
                { icon: Zap, label: "Flux", value: "Constant", color: "text-amber-400" }
            ]
        },
        {
            title: "Adoucisseurs Industriels",
            titlePart1: "Adoucisseurs ",
            titlePart2: "Industriels",
            navTitle: "Adoucisseurs",
            desc: "Éliminez le calcaire de vos processus industriels. Augmentez l'efficacité thermique de vos chaudières et la durée de vie de vos échangeurs.",
            points: [
                { title: "Protection antitartre", desc: "Supprimez définitivement les dépôts de calcaire sur vos chaudières et échangeurs." },
                { title: "Efficacité énergétique", desc: "Optimisez vos transferts thermiques et réduisez vos coûts de chauffage industriels." }
            ],
            image: industrialSoftenerImg,
            link: "/adoucisseur-eau-residentiel",
            tag: "THERMIQUE",
            largeNumber: "02",
            floatingCard: { title: "Efficacité Énergie", desc: "Zéro tartre, moins de coûts.", icon: Zap },
            bubbles: [
                { icon: Droplets, label: "Dureté", value: "0°f", color: "text-blue-600" },
                { icon: Zap, label: "ROI", value: "+35%", color: "text-green-500" }
            ]
        },
        {
            title: "Groupes de Dosage & Contrôle",
            titlePart1: "Groupes de ",
            titlePart2: "Dosage & Contrôle",
            navTitle: "Dosage & Contrôle",
            desc: "Précision chirurgicale pour l'injection chimique et le contrôle de la qualité d'eau. Automatisation complète de vos paramètres critiques.",
            points: [
                { title: "Précision de dosage", desc: "Injection ultra-précise de réactifs chimiques pour une conformité totale." },
                { title: "Contrôle automatisé", desc: "Systèmes intelligents gérant vos paramètres d'eau sans intervention humaine constante." }
            ],
            image: dosinggroupImg,
            link: "/fontaines",
            tag: "PRÉCISION",
            largeNumber: "03",
            floatingCard: { title: "Dosage Auto", desc: "Gestion chimique parfaite.", icon: Settings },
            bubbles: [
                { icon: Cpu, label: "IA", value: "Active", color: "text-indigo-400" },
                { icon: Activity, label: "Précision", value: "99.9%", color: "text-red-400" }
            ]
        },
        {
            title: "Osmose Inverse Industrielle",
            titlePart1: "Osmose Inverse ",
            titlePart2: "Industrielle",
            navTitle: "Osmose Inverse",
            desc: "Production d'eau ultra-pure pour les processus les plus exigeants. Élimination totale des TDS pour une qualité d'eau constante.",
            points: [
                { title: "Pureté moléculaire", desc: "Élimination totale des minéraux dissous pour les processus les plus sensibles." },
                { title: "Capacité sur mesure", desc: "Systèmes dimensionnés précisément selon vos besoins volumétriques quotidiens." }
            ],
            image: IndustrialROSystemsImg,
            link: "/systeme-de-filtration-deau-potable",
            tag: "PURIFICATION",
            largeNumber: "04",
            floatingCard: { title: "Eau Process", desc: "Le standard de pureté.", icon: ShieldCheck },
            bubbles: [
                { icon: GlassWater, label: "Pureté", value: "TDS < 1", color: "text-sky-400" },
                { icon: Sparkles, label: "Grade", value: "Ultra-Pur", color: "text-blue-500" }
            ]
        },
        {
            title: "Déionisation & Échange d'Ions",
            titlePart1: "Déionisation & ",
            titlePart2: "Échange d'Ions",
            navTitle: "Déionisation",
            desc: "Solutions spécialisées pour obtenir une conductivité minimale. Indispensable pour les laboratoires et l'industrie électronique.",
            points: [
                { title: "Conductivité ultra-basse", desc: "Atteignez les niveaux de résistivité nécessaires pour l'électronique de pointe." },
                { title: "Lits de résine spécifiques", desc: "Mélanges de résines haute performance adaptés à vos polluants cibles." }
            ],
            image: DISystemsImg,
            link: "/systeme-de-filtration-deau-potable",
            tag: "LABORATOIRE",
            largeNumber: "05",
            floatingCard: { title: "Laboratoire", desc: "Eau de type 1.", icon: Cpu },
            bubbles: [
                { icon: Layers, label: "Résines", value: "High-Grade", color: "text-indigo-500" },
                { icon: Activity, label: "Ω", value: "18.2 MΩ", color: "text-slate-400" }
            ]
        },
        {
            title: "Désinfection UV de Puissance",
            titlePart1: "Désinfection ",
            titlePart2: "UV de Puissance",
            navTitle: "Systèmes UV",
            desc: "Neutralisation bactériologique haute intensité sans produits chimiques. Sécurisez vos lignes de production contre les risques microbiens.",
            points: [
                { title: "Sécurité biologique", desc: "Neutralisation à 99.99% des pathogènes sans modification chimique de l'eau." },
                { title: "Action instantanée", desc: "Traitement en temps réel au passage de l'eau pour une sécurité de ligne constante." }
            ],
            image: uvSystemImg,
            link: "/Systemes-de-desinfection-UV",
            tag: "SÉCURITÉ",
            largeNumber: "06",
            floatingCard: { title: "Désinfection", desc: "Neutralisation instantanée.", icon: Activity },
            bubbles: [
                { icon: ShieldCheck, label: "Bio", value: "Log 4", color: "text-blue-600" },
                { icon: Sparkles, label: "UV-C", value: "Intense", color: "text-purple-400" }
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

                {/* SERVICE SECTIONS - PREMIUM LIQUID DESIGN */}
                <section id="solutions" className="py-20 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col md:flex-row md:items-end justify-between mb-32 gap-8">
                            <div className="max-w-2xl space-y-6">
                                <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.5em]">SOLUTIONS TECHNIQUES</span>
                                <h2 className="heading-pro-max text-left uppercase">
                                    <span className="italic font-light text-[#18448F]">Performance </span><br />
                                    <span className="font-bold text-[#18448F]">Opérationnelle.</span>
                                </h2>
                            </div>
                            <p className="text-slate-400 text-sm font-light max-w-sm border-l border-blue-100 pl-6">
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
                                                            { title: prog.floatingCard.title, value: "Elite", desc: prog.floatingCard.desc, icon: prog.floatingCard.icon },
                                                            { title: prog.points[0].title, value: "Top", desc: prog.points[0].desc, icon: ShieldCheck },
                                                        ].map((feat, fIdx) => (
                                                            <div key={fIdx} className="group relative p-10 rounded-[3rem] bg-white border border-slate-100 shadow-xl shadow-slate-100/50 hover:shadow-2xl hover:shadow-blue-100 transition-all duration-500 overflow-hidden">
                                                                <div className="absolute top-0 right-0 w-32 h-32 opacity-5 translate-x-10 -translate-y-10 rounded-full bg-blue-600" />
                                                                <div className="relative z-10 space-y-4">
                                                                    <div className="flex items-center justify-between">
                                                                        <div className="p-2 rounded-xl bg-blue-50 text-blue-600">
                                                                            <feat.icon className="w-4 h-4" />
                                                                        </div>
                                                                        <span className="text-2xl font-black text-blue-600">{feat.value}</span>
                                                                    </div>
                                                                    <div className="space-y-1">
                                                                        <span className="text-xs font-bold text-slate-500 block">{feat.title}</span>
                                                                        <p className="text-slate-500 text-sm font-light leading-relaxed">{feat.desc}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                    
                                                    <div className="pt-4">
                                                        <ProMaxButton variant="outline" className="px-12 h-16 text-[10px]" onClick={() => navigate(prog.link)}>
                                                            SPÉCIFICATIONS TECHNIQUES
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
                                                                idx % 2 === 0 ? "-right-10" : "-left-10"
                                                            )}>
                                                                <span className="text-[10px] font-black text-slate-300 uppercase tracking-[1em] rotate-180">INDUSTRIAL DNA</span>
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

                {/* 3. INDUSTRIAL DNA GRID */}
                <section className="py-32 bg-slate-900 text-white overflow-hidden">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                            <div className="space-y-12">
                                <div className="space-y-6">
                                    <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.5em] flex items-center gap-3">
                                        <span className="w-8 h-[1px] bg-blue-600" />
                                        VALEUR AJOUTÉE
                                    </span>
                                    <h2 className="heading-pro-max text-left uppercase">
                                        <span className="italic font-light text-white">Rigueur & </span>
                                        <span className="font-bold text-white">Fiabilité.</span>
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

                {/* 4. EXPERT TRUST SECTION */}
                <ExpertTrustSection />

                {/* 5. TESTIMONIALS */}
                <div className="bg-slate-50 py-32 border-y border-gray-100">
                    <TestimonialsSection 
                        filterProduct="Industriel"
                        limit={6}
                        title={
                            <div className="text-center space-y-3 mb-16">
                                <span className="text-[10px] font-black text-blue-500 uppercase tracking-[0.5em] block mb-4">NOTRE RÉPUTATION</span>
                                <h2 className="heading-pro-max text-center uppercase">
                                    <span className="italic font-light text-[#18448F]">La confiance des </span>
                                    <span className="font-bold text-[#18448F]">grands noms.</span>
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

export default Industriel;
