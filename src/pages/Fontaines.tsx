import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import GlobalBreadcrumbs from "@/components/GlobalBreadcrumbs";
import TestimonialsSection from "@/components/TestimonialsSection";
import ExpertAvatars from "@/components/ExpertAvatars";
import DiscoverExpert from "@/components/DiscoverExpert";
import {
    Snowflake,
    Building2,
    Phone,
    Zap,
    Coffee,
    ChevronRight,
    ArrowRight,
    Star,
    ChevronLeft,
    Coins,
    Clock,
    Layout,
    HeartPulse,
    Waves,
    Leaf,
    DollarSign,
    Settings,
    Recycle,
    Plus,
    Minus,
    PiggyBank,
    Award,
    CircleDollarSign,
    Search
} from "lucide-react";
import safetyIcon from "@/assets/1709235770048.png";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import heroFountains from "@/assets/Fontaines d'eau.webp";
import solutionsEauImg from "@/assets/Solutions d'eau potable.webp";
import artDeVivreImg from "@/assets/unnamed (3).jpg";
import drinkingTapImg from "@/assets/boire-eau-robinet.jpg";
import fontaineAutoportanteImg from "@/assets/Refroidisseur+d'eau+autoportant+à+eau+chaude,+froide+et+à+température+ambiante.webp";
import countertopFountainImg from "@/assets/A9.jpg";
import bottlelessFountainImg from "@/assets/A13.jpg";
import iceMachineImg from "@/assets/Machine+à+glaçons+de+comptoir+auto-nettoyante+de+26+lb+R.W.FLAME-78609293.webp";
import eauFontaineImg from "@/assets/83658.jpg";
import ecoImpactImg from "@/assets/kitchen1.webp";
import ecoImpactImg2 from "@/assets/block-img-3-d.webp";
import ecoImpactImg3 from "@/assets/Water fountain in the dining room.jpg";
import ecoImpactImg4 from "@/assets/water-dispenser in office.jpg";
import ecoImpactImg5 from "@/assets/water-dispenser in kitchen.jpg";
import ecoImpactImg6 from "@/assets/water-dispenser in evening room.png";
import recycleSvg from "@/assets/recycling.svg";
import nestEcoLeafSvg from "@/assets/nest_eco_leaf.svg";
import financeModeSvg from "@/assets/finance_mode.svg";
import waterFilterPng from "@/assets/water-filter_8782563.png";
import ourteamstudyyourwaterImg from "@/assets/10271.jpg";

interface SolutionItem {
    title: string;
    desc: string;
    img: string;
    features: string[];
}

const ImpactCalculator = () => {
    const [adults, setAdults] = useState(2);
    const [children, setChildren] = useState(1);
    const [timeframe, setTimeframe] = useState(1);

    const adultBottlesPerYear = adults * 4 * 365;
    const childBottlesPerYear = children * 2 * 365;
    const bottlesSavedBase = Math.round(adultBottlesPerYear + childBottlesPerYear);
    const bottlesSaved = bottlesSavedBase * timeframe;

    const taxRate = 1.14975;
    const costPerBottle = (6 * taxRate / 28) + 0.10;
    const moneySaved = Math.round(bottlesSaved * costPerBottle);

    return (
        <div className="relative group bg-white p-8 rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100 h-full flex flex-col overflow-hidden">
            {/* Soft background glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50/50 rounded-full -mr-20 -mt-20 blur-3xl opacity-60" />

            <div className="relative z-10 flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-200">
                        <Leaf className="w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="text-slate-900 tracking-tight leading-none mb-1.5">Eco-Bilan</h3>
                        <p className="text-blue-500 text-[10px] font-black uppercase tracking-widest leading-none">Simulateur d'économie</p>
                    </div>
                </div>

                {/* Simulation Inputs */}
                <div className="space-y-4 mb-8">
                    <div className="grid grid-cols-2 gap-4">
                        {[
                            { label: "Adultes", value: adults, setter: setAdults },
                            { label: "Enfants", value: children, setter: setChildren }
                        ].map((input, idx) => (
                            <div key={idx} className="bg-slate-50/50 rounded-[2rem] p-4 border border-slate-100/80">
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest text-center mb-3">{input.label}</p>
                                <div className="flex items-center justify-between bg-white rounded-2xl p-1 shadow-sm border border-slate-100">
                                    <button
                                        onClick={() => input.setter(Math.max(0, input.value - 1))}
                                        className="w-8 h-8 rounded-xl hover:bg-slate-50 flex items-center justify-center text-slate-400 hover:text-blue-600 transition-colors active:scale-90"
                                    >
                                        <Minus className="w-4 h-4" />
                                    </button>
                                    <span className="text-xl font-bold text-slate-900">{input.value}</span>
                                    <button
                                        onClick={() => input.setter(Math.min(10, input.value + 1))}
                                        className="w-8 h-8 rounded-xl hover:bg-slate-50 flex items-center justify-center text-slate-400 hover:text-blue-600 transition-colors active:scale-90"
                                    >
                                        <Plus className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex p-1 bg-slate-100/50 rounded-2xl border border-slate-200/50">
                        {[1, 5, 10].map((y) => (
                            <button
                                key={y}
                                onClick={() => setTimeframe(y)}
                                className={`flex-1 py-2.5 text-xs font-bold rounded-xl transition-all duration-300 ${timeframe === y ? 'bg-white text-blue-600 shadow-sm transform scale-[1.02]' : 'text-slate-400 hover:text-slate-600'}`}
                            >
                                {y} {y === 1 ? 'AN' : 'ANS'}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Dynamic Results */}
                <div className="mt-auto space-y-3">
                    <div className="relative overflow-hidden p-6 rounded-[2.5rem] bg-emerald-600 border border-emerald-700 flex items-center justify-between group/res transition-all duration-500 shadow-xl shadow-emerald-200">
                        <div>
                            <span className="text-[10px] font-black text-emerald-100 uppercase tracking-widest block mb-1">Plastique Évité</span>
                            <div className="flex items-baseline gap-2">
                                <span className="text-4xl font-black text-white tracking-tighter tabular-nums">{bottlesSaved.toLocaleString()}</span>
                                <span className="text-emerald-100/60 text-[10px] font-bold uppercase">Unités</span>
                            </div>
                        </div>
                        <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 group-hover/res:scale-110 transition-transform">
                            <Recycle className="w-6 h-6 text-white" />
                        </div>
                    </div>

                    <div className="relative overflow-hidden p-6 rounded-[2.5rem] bg-blue-600 border border-blue-700 flex items-center justify-between group/res transition-all duration-500 shadow-xl shadow-blue-200">
                        <div>
                            <span className="text-[10px] font-black text-blue-100 uppercase tracking-widest block mb-1">Économies Nettes</span>
                            <div className="flex items-baseline gap-1">
                                <span className="text-4xl font-black text-white tracking-tighter tabular-nums">{moneySaved.toLocaleString()}</span>
                                <span className="text-white font-bold text-2xl tracking-tighter">$</span>
                            </div>
                        </div>
                        <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 group-hover/res:scale-110 transition-transform">
                            <PiggyBank className="w-6 h-6 text-white" />
                        </div>
                    </div>

                    <div className="pt-2">
                        <p 
                            className="text-center italic"
                            style={{
                                fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                                fontWeight: 300,
                                color: 'rgb(71, 85, 105)',
                                fontSize: '18px',
                                lineHeight: '24px',
                                fontStyle: 'italic'
                            }}
                        >
                            Éliminez le plastique, valorisez votre santé.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const SolutionCard = ({ item }: { item: SolutionItem }) => {
    const [showSpecs, setShowSpecs] = useState(false);

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (showSpecs) {
            timer = setTimeout(() => {
                setShowSpecs(false);
            }, 20000);
        }
        return () => clearTimeout(timer);
    }, [showSpecs]);

    return (
        <div className="group w-full md:w-[380px] h-[620px] relative overflow-hidden rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-slate-100 bg-white transition-all duration-700 hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)] hover:-translate-y-2">
            {/* Front Panel */}
            <div className="h-full p-10 flex flex-col items-center">
                <div className="w-full aspect-square bg-slate-50/50 rounded-[2.5rem] mb-8 flex items-center justify-center p-8 relative overflow-hidden group-hover:bg-blue-50/30 transition-colors duration-700">
                    <img
                        src={item.img}
                        alt={`${item.title}`}
                        className={`w-full h-full object-contain mix-blend-multiply transition-transform duration-1000 ${item.title === "Machine à glaçons"
                            ? "scale-[1.45] group-hover:scale-[1.55]"
                            : "scale-100 group-hover:scale-110"
                            }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>

                <div className="space-y-4 text-center flex-grow">
                    <h3
                        className="card-title h-[48px] flex items-center justify-center text-center"
                    >
                        {item.title}
                    </h3>
                    <div className="w-12 h-1 bg-blue-600/10 rounded-full mx-auto group-hover:w-20 group-hover:bg-blue-600 transition-all duration-700" />
                    <p 
                        className="flex-grow text-justify"
                        style={{
                            fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                            fontWeight: 300,
                            color: 'rgb(71, 85, 105)',
                            fontSize: '20px',
                            lineHeight: '28px',
                            fontStyle: 'normal'
                        }}
                    >
                        {item.desc}
                    </p>
                </div>

                <div className="mt-8 w-full flex items-center justify-between">
                    <Button onClick={() => setShowSpecs(true)}>
                        Spécifications
                        <Plus className="ml-2 w-4 h-4 transition-transform group-hover/btn:rotate-90" />
                    </Button>
                </div>
            </div>

            {/* Specifications Slide-up Panel */}
            <div
                className={`absolute inset-0 bg-white/95 backdrop-blur-xl p-12 flex flex-col transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] z-20 ${showSpecs ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
                    }`}
            >
                <div className="mb-10 text-left">
                    <h3 className="text-3xl font-bold text-slate-900 tracking-tight">Caractéristiques</h3>
                    <div className="w-16 h-1.5 bg-blue-600 rounded-full mt-4" />
                </div>

                <ul className="space-y-6 flex-grow">
                    {item.features.map((feature: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-4 group/item">
                            <div className="mt-1.5 w-2 h-2 rounded-full bg-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.4)] group-hover/item:scale-150 transition-transform" />
                            <span className="text-base font-light text-slate-600 leading-tight">
                                {feature}
                            </span>
                        </li>
                    ))}
                </ul>

                <Button
                    onClick={() => setShowSpecs(false)}
                    variant="outline"
                >
                    Retour
                </Button>
            </div>
        </div>
    );
};

const Fontaines = () => {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main>
                {/* 1. HERO SECTION PRO MAX - Phase I Modernization */}
                <section className="relative h-[800px] flex flex-col items-center justify-center overflow-hidden bg-white group">
                    {/* Breadcrumbs Positioning - Aligned with site standard */}
                    <div className="absolute top-[30px] left-0 right-0 z-30 pointer-events-none hidden lg:block animate-in fade-in slide-in-from-top-4 duration-700">
                        <div className="container mx-auto px-6 pointer-events-auto">
                            <GlobalBreadcrumbs variant="dark" />
                        </div>
                    </div>

                    {/* Background Layer with Signature Filter */}
                    <div className="absolute inset-0 w-full h-full overflow-hidden">
                        <img
                            src={heroFountains}
                            alt="Fontaines d'eau Bricareau"
                            className="w-full h-full object-cover object-center scale-105 group-hover:scale-100 transition-transform duration-[3s] ease-out"
                        />
                        {/* Signature Bricareau Gradient Filter */}
                        <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#f0f9ff] via-[#f0f9ff]/40 35% to-transparent" />
                        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent" />
                    </div>

                    {/* Content Layer */}
                    <div className="container relative z-20 mx-auto px-6 h-full flex flex-col items-start justify-center">
                        <div className="mt-12 max-w-3xl space-y-8 animate-in fade-in slide-in-from-bottom-12 duration-[1.2s]">
                            <h1 
                                className="leading-tight lg:leading-[55px] tracking-tighter text-left mb-8 max-w-4xl"
                                style={{
                                    fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                                }}
                            >
                                <span className="italic font-light text-[#2563eb] text-[35px] lg:text-[50px] block lg:inline-block">Fontaines d'eau,</span>
                                <br className="hidden lg:block" />
                                <span className="font-bold text-[#1e3a8a] text-[35px] lg:text-[50px] block lg:inline-block">l'art de l'eau pure.</span>
                            </h1>

                            <p className="body-pro-max text-slate-800 lg:text-slate-600 max-w-xl text-left font-medium lg:font-light leading-relaxed">
                                Élevez votre expérience d'hydratation avec nos refroidisseurs d'eau haute performance. Un design élégant allié à une pureté absolue pour votre maison ou votre bureau.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <Button asChild className="w-fit group">
                                    <a href="/consultation" className="inline-flex items-center gap-2">
                                        Planifiez une consultation
                                        <ArrowRight className="ml-1 w-5 h-5 transition-transform group-hover:translate-x-1" />
                                    </a>
                                </Button>
                                <Button variant="outline" asChild className="w-fit">
                                    <a href="tel:18552649328" className="inline-flex items-center gap-2">
                                        <Phone className="w-5 h-5" />
                                        1-855-264-9328
                                    </a>
                                </Button>
                            </div>

                            {/* Aligned Trust Row Section */}
                            <div className="pt-12 z-20 animate-in fade-in slide-in-from-left-12 duration-1000 delay-700 w-full lg:w-auto">
                                <div className="grid grid-cols-3 lg:flex lg:flex-row gap-2 lg:gap-4 pointer-events-auto">
                                    {[
                                        { label: "Technologie", val: "Filtration Double", icon: <Zap className="w-4 h-4 lg:w-5 lg:h-5" /> },
                                        { label: "Pureté", val: "Certifié NSF/ANSI", icon: <Award className="w-4 h-4 lg:w-5 lg:h-5" /> },
                                        { label: "Éco-Conçu", val: "Zéro Bouteilles", icon: <Leaf className="w-4 h-4 lg:w-5 lg:h-5" /> }
                                    ].map((item, i) => (
                                        <div key={i} className="bg-white/90 lg:bg-white/70 backdrop-blur-3xl p-2 lg:p-4 rounded-2xl lg:rounded-full border border-white/50 shadow-2xl shadow-blue-900/10 flex flex-col lg:flex-row items-center text-center lg:text-left gap-2 lg:gap-4 group cursor-default transition-all duration-500 hover:scale-105">
                                            <div className="w-8 h-8 lg:w-12 lg:h-12 bg-blue-600/10 rounded-full flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm shrink-0">
                                                {item.icon}
                                            </div>
                                            <div className="min-w-0">
                                                <p className="text-[9px] lg:text-[10px] font-black text-slate-500 lg:text-slate-400 uppercase tracking-widest leading-none mb-1">{item.label}</p>
                                                <p className="text-[10px] lg:text-sm font-bold text-[#1e3a8a] leading-tight">{item.val}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* 2. Section 1: Modern Editorial Solutions Section */}
                <section id="models" className="relative py-32 bg-white overflow-hidden scroll-mt-20">
                    {/* Background Watermark 1 */}
                    <div className="absolute top-20 left-1/2 -translate-x-1/2 text-[15rem] lg:text-[25rem] font-black text-slate-50/50 select-none pointer-events-none tracking-tighter uppercase whitespace-nowrap z-0">
                        PURETÉ
                    </div>

                    {/* Background decorations */}
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[120px] -z-0 translate-x-1/3 -translate-y-1/3" />
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-slate-100/50 rounded-full blur-[100px] -z-0 -translate-x-1/2 translate-y-1/2" />

                    <div className="container mx-auto px-6 relative z-10">
                        <div className="text-center max-w-4xl mx-auto mb-24 animate-in fade-in slide-in-from-bottom-8 duration-1000">
                            <span className="inline-block px-4 py-1.5 bg-blue-600/10 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                                PURETÉ À DOMICILE
                            </span>
                            <h2 className="mb-6 heading-pro-max text-center">
                                <span className="italic font-light text-[#2563eb] block">L'hydratation pure à la maison,</span>
                                <span className="font-bold text-[#1e3a8a] block">l'eau fraîche à la portée de vos mains.</span>
                            </h2>
                            <p 
                                className="max-w-3xl mx-auto"
                                style={{
                                    fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                                    fontWeight: 300,
                                    color: 'rgb(71, 85, 105)',
                                    fontSize: '20px',
                                    lineHeight: '28px',
                                    fontStyle: 'normal'
                                }}
                            >
                                Bricareau redéfinit votre expérience d'hydratation quotidienne avec des solutions d'eau fraîche haut de gamme.
                                Offrez à votre famille le luxe d'une eau d'une pureté exceptionnelle, toujours à la température idéale.
                            </p>
                        </div>

                        <div className="flex flex-wrap justify-center gap-10 lg:gap-14 mx-auto max-w-7xl">
                            {[
                                {
                                    title: "Distributeur d'eau de comptoir",
                                    desc: "Une solution compacte offrant une eau filtrée de qualité supérieure directement sur votre comptoir, sans encombrement.",
                                    img: countertopFountainImg,
                                    features: ["Sortie d'eau chaude, froide et tiède", "Boutons tactiles électroniques", "Comprend le premier jeu de filtres et le kit d'installation", "Homologué UL", "Double filtration certifiée NSF", "Garantie d'un an"]
                                },
                                {
                                    title: "Fontaine d'eau sans bouteille",
                                    desc: "Eau fraîche et purifiée en continu, sans la corvée des bouteilles. Hydratation illimitée pour votre famille.",
                                    img: bottlelessFountainImg,
                                    features: ["Sortie d'eau chaude, froide et tiède", "Boutons tactiles électroniques", "Comprend le premier jeu de filtres et le kit d'installation", "Homologué UL", "Double filtration certifiée NSF", "Garantie d'un an"]
                                },
                                {
                                    title: "Machine à glaçons",
                                    desc: "Machines robustes produisant une glace pure et abondante pour satisfaire vos besoins en toute circonstance, sans aucune interruption.",
                                    img: iceMachineImg,
                                    features: ["Production 26lb/jour", "Auto-nettoyante", "Indicateur de niveau", "Glaçons cristallins"]
                                },
                            ].map((item, i) => (
                                <SolutionCard key={i} item={item} />
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-32 bg-white relative overflow-hidden">
                    {/* Centered technical header */}
                    <div className="container mx-auto px-6 relative z-10 mb-20">
                        <div className="text-center max-w-4xl mx-auto">
                            <span className="inline-block px-4 py-1.5 bg-blue-600/10 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                                TECHNOLOGIE & RESPONSABILITÉ
                            </span>
                            <h2 className="mb-6 heading-pro-max text-center">
                                <span className="italic font-light text-[#2563eb] block text-[32px] md:text-[40px] lg:text-[48px]">Plus qu'une fontaine d'eau,</span>
                                <span className="font-bold text-[#1e3a8a] block text-[32px] md:text-[40px] lg:text-[48px]">un choix intelligent & responsable.</span>
                            </h2>
                            <p 
                                className="max-w-3xl mx-auto"
                                style={{
                                    fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                                    fontWeight: 300,
                                    color: 'rgb(71, 85, 105)',
                                    fontSize: '20px',
                                    lineHeight: '28px',
                                    fontStyle: 'normal'
                                }}
                            >
                                Alliez performance technologique, responsabilité écologique et économies domestiques pour un quotidien sans compromis. Dépassons ensemble les standards de l'hydratation classique.
                            </p>
                        </div>
                    </div>

                    {/* Full-Width immersive content */}
                    <div className="flex flex-col lg:flex-row items-stretch border-y border-slate-100 min-h-[650px] lg:min-h-[800px]">
                        {/* Left Side: Editorial Image & Narrative */}
                        <div className="w-full lg:w-1/2 relative group overflow-hidden flex flex-col h-auto bg-slate-50">
                            {/* Image Part */}
                            <div className="relative lg:absolute lg:inset-0 h-[450px] md:h-[600px] lg:h-full overflow-hidden">
                                <img
                                    src={ecoImpactImg6}
                                    alt="L'expérience d'eau pure Bricareau"
                                    className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/10 to-transparent hidden lg:block" />
                            </div>
                            
                            {/* Text Part - Repositioned for Mobile */}
                            <div className="relative lg:absolute lg:bottom-12 lg:left-12 lg:right-12 z-20 p-8 lg:p-0">
                                <div className="max-w-xl space-y-6">
                                    <div className="hidden lg:inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
                                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                        <span className="text-[10px] font-black text-white uppercase tracking-widest">Expérience Premium</span>
                                    </div>
                                    <h3 className="text-3xl lg:text-4xl font-bold text-[#1e3a8a] lg:text-white tracking-tight">Art de Vivre</h3>
                                    <p className="text-slate-700 lg:text-white text-[18px] lg:text-[20px] leading-relaxed italic border-l-2 border-blue-500 pl-6">
                                        Une pureté incomparable qui s'intègre harmonieusement à votre quotidien. Découvrez l'équilibre parfait entre esthétique et santé, où chaque gorgée est une signature de qualité.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Results & Eco-Bilan Container */}
                        <div className="w-full lg:w-1/2 flex items-center bg-slate-50/10 justify-start">
                            <div className="w-full max-w-[700px] px-6 sm:px-12 lg:px-16 xl:px-24 py-20 lg:py-0">
                                <ImpactCalculator />
                            </div>
                        </div>
                    </div>
                </section>

                <TestimonialsSection
                    filterProduct="/fontaines-d-eau"
                    limit={5}
                title={
                    <h2 className="mb-8 heading-pro-max text-center">
                        <span className="italic font-light text-[#2563eb] block">L’eau que vous méritez,</span>
                        <span className="font-bold text-[#1e3a8a] block">le service que vous n'oublierez pas.</span>
                    </h2>
                }
                />

                {/* 3.5. Portfolio Section - Modern Bento 5 Images */}
                <section className="py-24 bg-white relative overflow-hidden">
                    {/* Background Watermark 2 */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] lg:text-[22rem] font-black text-slate-50/50 select-none pointer-events-none tracking-tighter uppercase whitespace-nowrap z-0">
                        SÉLECTION
                    </div>

                    <div className="container mx-auto px-6 relative z-10">
                        <div className="text-center md:text-left mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
                            <div>
                                <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
                                    NOTRE PORTFOLIO
                                </span>
                                <h2 className="heading-pro-max tracking-tight leading-[1.1]">
                                    <span className="italic font-light text-[#2563eb] block">Intégration</span>
                                    <span className="font-bold text-[#1e3a8a] block">parfaite & élégante.</span>
                                </h2>
                            </div>
                            <div className="max-w-md pb-2">
                                <p 
                                    style={{
                                        fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                                        fontWeight: 300,
                                        color: 'rgb(71, 85, 105)',
                                        fontSize: '20px',
                                        lineHeight: '28px',
                                        fontStyle: 'normal'
                                    }}
                                >
                                    Découvrez comment nos fontaines et refroidisseurs d'eau s'intègrent harmonieusement dans tous les espaces, alliant esthétique moderne et fonctionnalité.
                                </p>
                            </div>
                        </div>

                        {/* 5-Image Bento Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 md:grid-rows-2 gap-4 lg:gap-6 lg:h-[650px]">
                            {/* Image 1: Main (left side) */}
                            <div className="sm:col-span-2 md:col-span-6 md:row-span-2 relative group overflow-hidden rounded-[2rem] shadow-sm min-h-[350px] md:min-h-0">
                                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                                <img src={ecoImpactImg3} alt="Fontaine de comptoir Bricareau" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" />
                            </div>

                            {/* Image 2: Center Top */}
                            <div className="sm:col-span-1 md:col-span-3 md:row-span-1 relative group overflow-hidden rounded-[2rem] shadow-sm min-h-[250px] md:min-h-0">
                                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                                <img src={ecoImpactImg5} alt="Robinet d'eau pure" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" />
                            </div>

                            {/* Image 3: Right Top - Empty Slot */}
                            <div className="sm:col-span-1 md:col-span-3 md:row-span-1" />

                            {/* Image 4: Center Bottom */}
                            <div className="sm:col-span-1 md:col-span-3 md:row-span-1 relative group overflow-hidden rounded-[2rem] shadow-sm min-h-[250px] md:min-h-0">
                                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                                <img src={ecoImpactImg2} alt="Art de vivre Bricareau" className="w-full h-full object-cover object-right group-hover:scale-105 transition-transform duration-700" />
                            </div>

                            {/* Image 5: Right Bottom */}
                            <div className="sm:col-span-1 md:col-span-3 md:row-span-1 relative group overflow-hidden rounded-[2rem] shadow-sm min-h-[250px] md:min-h-0">
                                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                                <img src={ecoImpactImg4} alt="Eau fraîche et pure" className="w-full h-full object-cover object-right group-hover:scale-105 transition-transform duration-700" />
                            </div>
                        </div>
                    </div>
                </section>



                {/* 11. PREMIUM CTA SECTION - REBUILT FOR IMPACT */}
                <section className="relative py-32 flex items-center overflow-hidden bg-[#1e3a8a]">
                  {/* Animated background elements */}
                  <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-600/20 to-transparent skew-x-12 translate-x-1/4" />
                  <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-cyan-400/10 to-transparent -skew-x-12 -translate-x-1/4" />
                  
                  {/* Background Image with Overlay */}
                  <div className="absolute inset-0 z-0 opacity-40">
                    <img
                      src={eauFontaineImg}
                      alt="Expert Bricareau analysant vos options de filtration"
                      className="w-full h-full object-cover grayscale brightness-150"
                    />
                    <div className="absolute inset-0 bg-[#1e3a8a]/10 backdrop-blur-sm" />
                  </div>

                  <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-5xl mx-auto text-center space-y-12">
                      <div className="space-y-6">
                        <span className="inline-block px-4 py-1.5 bg-white text-blue-600 rounded-full text-[10px] font-black uppercase tracking-[0.4em]">
                          L’HYDRATATION SUPÉRIEURE À PORTÉE DE MAIN
                        </span>
                        <h2 className="text-4xl md:text-6xl lg:text-5xl font-light text-white leading-[1.1] tracking-tighter">
                          Sublimez votre quotidien avec l'excellence <br />
                          <span className="text-white italic font-bold font-serif">de nos fontaines d'eau.</span>
                        </h2>
                        <p className="text-lg md:text-xl text-blue-100/80 max-w-2xl mx-auto font-light leading-relaxed">
                          Dites adieu aux bouteilles de plastique encombrantes et profitez d'une source d'eau pure, fraîche ou chaude, instantanément. Que ce soit pour votre foyer ou votre espace de travail, nos distributeurs allient design moderne et filtration de pointe pour une hydratation saine et écologique.</p>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-4">
                        <Button asChild>
                          <a href="tel:18552649328" className="flex items-center gap-3">
                            <Phone className="h-5 w-5 animate-bounce" />
                            Parlez à un expert
                          </a>
                        </Button>
                        <Button
                          variant="outline"
                          asChild
                        >
                          <NavLink to="/consultation">Planifiez une consultation</NavLink>
                        </Button>
                      </div>

                      <div className="pt-8 flex flex-col items-center gap-4">
                        <ExpertAvatars />
                        <p className="text-blue-200/60 text-sm font-medium">
                          Rejoignez plus de <span className="text-white">1,500 familles</span> satisfaites au Québec cette année.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>


                {/* 6. Mission Éco-Responsable Bricareau Section - ULTRA MINIMALIST WITH DIFFUSED IMAGE */}
                <section className="py-32 bg-slate-50 relative overflow-hidden">
                    {/* Background Watermark 3 */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] lg:text-[20rem] font-black text-slate-100/50 select-none pointer-events-none tracking-tighter uppercase whitespace-nowrap z-0">
                        L'IMPACT
                    </div>

                    {/* Advanced "Service Flow" Background Layers */}
                    <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
                        {/* Diffused Product Image - Integrating the subject without clutter */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-full opacity-10 md:opacity-[0.22] pointer-events-none z-0">
                            <img
                                src={drinkingTapImg}
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
                        <div className="max-w-7xl mx-auto">
                            {/* Section Header */}
                            <div className="text-center md:text-left mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-slate-200/60 pb-12 relative z-10 animate-in fade-in slide-in-from-left duration-1000">
                                <div className="max-w-2xl">
                                    <span className="inline-block px-4 py-1.5 bg-blue-600/10 text-blue-600 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] mb-8">
                                        NOTRE ENGAGEMENT
                                    </span>
                                    <h2 className="heading-pro-max tracking-tight leading-[1.1]">
                                        <span className="italic font-light text-[#2563eb] block mb-2">Vers un monde</span>
                                        <span className="font-bold text-[#1e3a8a] block">sans bouteilles en plastique.</span>
                                    </h2>
                                </div>
                                <div className="max-w-md md:pb-3">
                                    <p 
                                        className="italic border-l-[3px] border-blue-600 pl-6 py-2"
                                        style={{
                                            fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                                            fontWeight: 300,
                                            color: 'rgb(71, 85, 105)',
                                            fontSize: '20px',
                                            lineHeight: '28px',
                                            fontStyle: 'italic'
                                        }}
                                    >
                                        "Notre gamme offre une eau saine, fraîche et délicieuse, pour les professionnels et les particuliers."
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                                {/* Left Content: Timeline "Que devons-nous faire?" */}
                                <div className="space-y-12 relative z-10">
                                    <h3 className="text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-4">
                                        Que devons-nous faire ?
                                    </h3>

                                    <div className="relative pl-5">
                                        <div className="absolute left-[3px] top-2 bottom-6 w-px bg-slate-200" />

                                        <ul className="space-y-10">
                                            {[
                                                { title: "Réduction Active", text: "S'engager à réduire l'usage de bouteilles en plastique à usage unique au quotidien." },
                                                { title: "Consommation Locale", text: "Favoriser la consommation d'eau \"locale\", directement au robinet de votre résidence." },
                                                { title: "Accompagnement Expert", text: "Proposer des solutions performantes pour traiter l'eau de boisson en toute sécurité." },
                                                { title: "Mission Commune", text: "Partager la vision Bricareau : Changer le monde, une gorgée après l'autre." }
                                            ].map((item, i) => (
                                                <li key={i} className="relative group/item">
                                                    <div className="absolute -left-[27px] top-2 w-[7px] h-[7px] bg-slate-300 rounded-full group-hover/item:bg-blue-600 group-hover/item:scale-150 transition-all duration-300" />

                                                    <div className="flex flex-col gap-1">
                                                        <span className="text-sm font-semibold text-slate-900 transition-colors duration-300">{item.title}</span>
                                                        <p 
                                                            className="max-w-lg transition-colors duration-300"
                                                            style={{
                                                                fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                                                                fontWeight: 300,
                                                                color: 'rgb(71, 85, 105)',
                                                                fontSize: '20px',
                                                                lineHeight: '28px',
                                                                fontStyle: 'normal'
                                                            }}
                                                        >
                                                            {item.text}
                                                        </p>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Right Content: Grid features */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 relative z-10">
                                    {[
                                        { isSvg: true, iconSrc: waterFilterPng, label: "Filtration Locale", desc: "Eau pure à volonté, avec ou sans magnésium." },
                                        { isSvg: true, iconSrc: nestEcoLeafSvg, label: "Zéro Déchet", desc: "Élimination totale des bouteilles à usage unique." },
                                        { isSvg: true, iconSrc: recycleSvg, label: "Éco-Conception", desc: "Matériaux durables et cycles de vie optimisés." },
                                        { isSvg: true, iconSrc: financeModeSvg, label: "Économies", desc: "Retour sur investissement rapide et durable." }
                                    ].map((item, i) => (
                                        <div key={i} className="relative bg-white/40 backdrop-blur-xl p-8 rounded-[2rem] border border-white shadow-sm hover:bg-white/70 hover:shadow-2xl hover:shadow-blue-900/10 hover:-translate-y-1.5 group transition-all duration-500 overflow-hidden">
                                            {/* Subliminal Hover Background */}
                                            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-50/50 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                                            <div className="relative z-10 flex flex-col items-start text-left h-full">
                                                <div className="w-14 h-14 rounded-[1.25rem] bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 mb-8 group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:text-white group-hover:shadow-[0_8px_20px_rgba(37,99,235,0.25)] transition-all duration-500 group-hover:scale-110">
                                                    <div
                                                        className="w-6 h-6 bg-current transition-colors duration-500"
                                                        style={{
                                                            maskImage: `url("${item.iconSrc}")`,
                                                            WebkitMaskImage: `url("${item.iconSrc}")`,
                                                            maskSize: 'contain',
                                                            maskRepeat: 'no-repeat',
                                                            maskPosition: 'center'
                                                        }}
                                                    />
                                                </div>

                                                <div className="flex-grow">
                                                    <h4 className="text-slate-900 font-bold text-lg tracking-tight mb-3 group-hover:text-blue-700 transition-colors duration-300">{item.label}</h4>
                                                    {/* Animated Underline */}
                                                    <div className="h-[2px] w-6 bg-slate-200 mb-4 group-hover:w-12 group-hover:bg-blue-600 transition-all duration-500 ease-out rounded-full" />
                                                    <p 
                                                        style={{
                                                            fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                                                            fontWeight: 300,
                                                            color: 'rgb(71, 85, 105)',
                                                            fontSize: '20px',
                                                            lineHeight: '28px',
                                                            fontStyle: 'normal'
                                                        }}
                                                    >
                                                        {item.desc}
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

                
            </main>
            
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

            <Footer />
        </div>
    );
};

export default Fontaines;
