import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import GlobalBreadcrumbs from "@/components/GlobalBreadcrumbs";
import TestimonialsSection from "@/components/TestimonialsSection";
import ExpertAvatars from "@/components/ExpertAvatars";
import WaterDiagnosis from "@/components/water_diagnosis";
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
    Search,
    Heart,
    Droplets,
    ShieldCheck
} from "lucide-react";
import safetyIcon from "@/assets/1709235770048.png";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import heroFountains from "@/assets/Fontaines d'eau.webp";
import solutionsEauImg from "@/assets/Solutions d'eau potable.webp";
import artDeVivreImg from "@/assets/unnamed (3).jpg";
import drinkingTapImg from "@/assets/boire-eau-robinet.jpg";
import fontaineAutoportanteImg from "@/assets/Refroidisseur+d'eau+autoportant+à+eau+chaude,+froide+et+à+température+ambiante.webp";
import countertopFountainImg from "@/assets/nouveau-distributeur-comptoir.png";
import distributeur1 from "@/assets/Aspen_PF1.png";
import distributeur2 from "@/assets/distributeur-2-removebg-preview.png";
import distributeur3 from "@/assets/distributeur-3-removebg-preview.png";
import distributeur4 from "@/assets/distributeur-4-removebg-preview.png";
import bottlelessFountainImg from "@/assets/A13.jpg";
import iceMachineImg from "@/assets/Machine+à+glaçons+de+comptoir+auto-nettoyante+de+26+lb+R.W.FLAME-78609293.webp";
import eauFontaineImg from "@/assets/83658.jpg";
import ecoImpactImg from "@/assets/kitchen1.webp";
import ecoImpactImg2 from "@/assets/2115.jpg";
import ecoImpactImg3 from "@/assets/2113.jpg";
import ecoImpactImg4 from "@/assets/2116.jpg";
import ecoImpactImg5 from "@/assets/2114.png";
import ecoImpactImg6 from "@/assets/2112.png";
import ecoImpactImg7 from "@/assets/2117.jpg";
import { useNavigate } from "react-router-dom";
import { heroImg as healthwaterImg } from "./Blog pages/Eau-du-puits-au-quebec-quand-installer-un-systeme-dosmose-inverse";
import { heroImg as drinkpurewaterImg } from "./Blog pages/Comment-losmose-inverse-protege-votre-famille-des-contaminants-invisibles";
import rowaterImg from "@/assets/reasons-to-drink-more-water.jpg";
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
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#8CC63F] to-[#7BB52E] flex items-center justify-center text-white shadow-lg shadow-[#8CC63F]/30">
                        <Leaf className="w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="text-slate-900 tracking-tight leading-none mb-1.5">Eco-Bilan</h3>
                        <p className="text-[#18448F] text-[10px] font-black uppercase tracking-widest leading-none">Simulateur d'économie</p>
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
                                        className="w-8 h-8 rounded-xl hover:bg-slate-50 flex items-center justify-center text-slate-400 hover:text-[#18448F] transition-colors active:scale-90"
                                    >
                                        <Minus className="w-4 h-4" />
                                    </button>
                                    <span className="text-xl font-bold text-slate-900">{input.value}</span>
                                    <button
                                        onClick={() => input.setter(Math.min(10, input.value + 1))}
                                        className="w-8 h-8 rounded-xl hover:bg-slate-50 flex items-center justify-center text-slate-400 hover:text-[#18448F] transition-colors active:scale-90"
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
                                className={`flex-1 py-2.5 text-xs font-bold rounded-xl transition-all duration-300 ${timeframe === y ? 'bg-white text-[#18448F] shadow-sm transform scale-[1.02]' : 'text-slate-400 hover:text-slate-600'}`}
                            >
                                {y} {y === 1 ? 'AN' : 'ANS'}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Dynamic Results */}
                <div className="mt-auto space-y-3">
                    <div className="relative overflow-hidden p-6 rounded-[2.5rem] bg-[#8CC63F] border border-[#7BB52E] flex items-center justify-between group/res transition-all duration-500 shadow-xl shadow-[#8CC63F]/30">
                        <div>
                            <span className="text-[10px] font-black text-white/90 uppercase tracking-widest block mb-1">Plastique Évité</span>
                            <div className="flex items-baseline gap-2">
                                <span className="text-4xl font-black text-white tracking-tighter tabular-nums">{bottlesSaved.toLocaleString()}</span>
                                <span className="text-white/70 text-[10px] font-bold uppercase">Unités</span>
                            </div>
                        </div>
                        <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 group-hover/res:scale-110 transition-transform">
                            <Recycle className="w-6 h-6 text-white" />
                        </div>
                    </div>

                    <div className="relative overflow-hidden p-6 rounded-[2.5rem] bg-[#18448F] border border-[#18448F]/80 flex items-center justify-between group/res transition-all duration-500 shadow-xl shadow-[#18448F]/20">
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
    return (
        <div className="w-full md:w-[360px] lg:w-[380px] bg-white border border-slate-100 rounded-[2rem] p-6 shadow-[0_15px_40px_rgba(0,0,0,0.02)] flex flex-col h-[560px] hover:shadow-md transition-shadow group">
            {/* Image container */}
            <div className="relative w-full aspect-square rounded-[2rem] overflow-hidden bg-slate-50 border border-slate-100 flex items-center justify-center p-8 mb-6">
                <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-contain object-bottom transition-transform duration-700 scale-100 group-hover:scale-110" 
                />
            </div>

            {/* Card Info */}
            <div className="space-y-3 flex-grow">
                <h4 className="text-xl font-bold text-slate-900">{item.title}</h4>
                <p className="text-slate-500 text-sm font-light leading-relaxed text-justify line-clamp-6">
                    {item.desc}
                </p>
            </div>

            {/* Details Button */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
                <NavLink 
                    to="/consultation" 
                    className="inline-flex items-center gap-2 text-[10px] font-black text-slate-800 uppercase tracking-widest hover:text-blue-600 transition-colors group/link"
                >
                    Voir les détails <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform text-blue-600" />
                </NavLink>
            </div>
        </div>
    );
};

const Fontaines = () => {
    const navigate = useNavigate();
    const [resourceIndex, setResourceIndex] = useState(1);
    const resourcesRef = React.useRef<HTMLDivElement>(null);
    
    const resources = [
        {
            title: "Eau du puits au Québec : quand installer un système d'osmose inverse",
            img: healthwaterImg,
            link: "/eau-du-puits-au-quebec-quand-installer-un-systeme-dosmose-inverse"
        },
        {
            title: "Comment l'osmose inverse protège votre famille des contaminants invisibles",
            img: drinkpurewaterImg,
            link: "/comment-losmose-inverse-protege-votre-famille-des-contaminants-invisibles"
        },
        {
            title: "Osmose inverse : la technologie derrière une eau 100 % pure",
            img: rowaterImg,
            link: "/osmose-inverse-la-technologie-derriere-une-eau-100-pure"
        },
    ];

    const scrollResources = (direction: 'left' | 'right') => {
        if (resourcesRef.current) {
            const scrollAmount = resourcesRef.current.clientWidth * 0.8;
            resourcesRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
        }
    };

    const handleScrollRessources = () => {
        if (resourcesRef.current) {
            const scrollLeft = resourcesRef.current.scrollLeft;
            const containerWidth = resourcesRef.current.offsetWidth;
            const itemWidth = resourcesRef.current.querySelector('div')?.offsetWidth || containerWidth;
            const newIndex = Math.round(scrollLeft / itemWidth) + 1;
            setResourceIndex(Math.min(newIndex, resources.length));
        }
    };

    useEffect(() => {
        document.title = "Fontaines d'Eau et Refroidisseurs | Solutions de Pureté au Québec | Bricareau";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Découvrez notre gamme de fontaines d'eau sans bouteille et refroidisseurs pour maison ou bureau au Québec. Technologie de filtration avancée pour une eau pure.");
        }

        // OG Tags
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) ogTitle.setAttribute("content", "Fontaines d'Eau Haute Performance | Bricareau");
        const ogDesc = document.querySelector('meta[property="og:description"]');
        if (ogDesc) ogDesc.setAttribute("content", "Dites adieu aux bouteilles de plastique. Eau fraîche et pure à volonté.");
        const ogUrl = document.querySelector('meta[property="og:url"]');
        if (ogUrl) ogUrl.setAttribute("content", "https://bricareau.com/fontaines-d-eau");
    }, []);

    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main>
                {/* 1. IMMERSIVE HERO - INDEX STYLE */}
                <section className="relative min-h-[100vh] flex flex-col overflow-hidden bg-white lg:pt-32">
                    {/* Image Section - Stacked on Mobile/Tablet Portrait, Overlay on Desktop */}
                    <div className="relative lg:absolute lg:inset-0 w-full h-[400px] md:h-[550px] lg:h-full z-0 overflow-hidden">
                        <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-[#f0f9ff]/20 to-white lg:bg-gradient-to-r lg:from-[#f0f9ff] lg:via-[#f0f9ff]/40 35% lg:to-transparent" />
                        <img 
                            src={heroFountains} 
                            alt="Fontaines d'eau Bricareau"
                            className="w-full h-full object-cover object-center scale-105 group-hover:scale-100 transition-transform duration-[3s] ease-out"
                        />
                        {/* Floating Trust Row - Mobile/Tablet Only */}
                        <div className="absolute bottom-4 left-4 right-4 z-20 lg:hidden">
                            <div className="grid grid-cols-3 gap-2">
                                {[
                                    { label: "Technologie", val: "Filtration Double", icon: <Zap className="w-4 h-4" /> },
                                    { label: "Pureté", val: "Certifié NSF/ANSI", icon: <Award className="w-4 h-4" /> },
                                    { label: "Éco-Conçu", val: "Zéro Bouteilles", icon: <Leaf className="w-4 h-4" /> }
                                ].map((item, i) => (
                                    <div key={i} className="group bg-white/90 backdrop-blur-md p-2 rounded-xl border border-white/50 shadow-lg flex flex-col items-center text-center gap-1.5 transition-all duration-500 hover:scale-105">
                                        <div className={`w-10 h-10 bg-[#18448F]/10 rounded-full flex items-center justify-center text-[#18448F] shadow-sm shrink-0 transition-all duration-500 ${item.label === 'Éco-Conçu' ? 'group-hover:bg-[#8CC63F] group-hover:text-white' : 'group-hover:bg-[#18448F] group-hover:text-white'}`}>
                                            {item.icon}
                                        </div>
                                        <div className="min-w-0">
                                            <p className="text-[7.5px] font-black text-slate-400 uppercase tracking-tight leading-none mb-1">{item.label}</p>
                                            <p className="text-[9px] font-bold text-[#18448F] leading-tight break-words">{item.val}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Breadcrumbs - Hidden on Mobile, Absolute on Desktop */}
                    <div className="absolute top-[30px] left-0 right-0 z-30 pointer-events-none hidden lg:block">
                        <div className="container mx-auto px-6 pointer-events-auto">
                            <GlobalBreadcrumbs variant="light" />
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="container relative z-10 mx-auto px-6 py-12 lg:py-0 h-full flex items-center">
                        <div className="max-w-4xl text-left space-y-8 animate-in fade-in slide-in-from-left duration-1000">
                            <h1 className="heading-pro-max font-sans font-bold not-italic text-[#18448F] mb-6 text-left max-w-4xl">
                                Nos fontaines d'eau, <span className="text-blue-600">l'art de</span><br className="hidden md:block"/> <span className="text-[#8CC63F] font-sans font-bold not-italic drop-shadow-sm">l'eau pure.</span>
                            </h1>

                            <p className="body-pro-max text-slate-600 max-w-xl text-justify lg:text-left">
                                Élevez votre expérience d'hydratation avec nos refroidisseurs d'eau haute performance. Un design élégant allié à une pureté absolue pour votre maison ou votre bureau.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-6 pt-4">
                                <div className="relative inline-block group">
                                    <div className="absolute inset-0 border border-[#18448F] rounded-[2rem] -translate-x-[5px] translate-y-[5px] transition-transform group-hover:-translate-x-[3px] group-hover:translate-y-[3px]"></div>
                                    <Button asChild className="relative bg-[#18448F] hover:bg-white hover:text-[#18448F] text-white rounded-[2rem] h-16 px-12 font-black uppercase tracking-widest text-xs transition-all border-none">
                                        <a href="/consultation" className="inline-flex items-center gap-2">
                                            Planifiez une consultation
                                            <ArrowRight className="ml-1 w-5 h-5 transition-transform group-hover:translate-x-1" />
                                        </a>
                                    </Button>
                                </div>
                                <div className="relative inline-block group">
                                    <div className="absolute inset-0 border border-[#18448F] rounded-[2rem] -translate-x-[5px] translate-y-[5px] transition-transform group-hover:-translate-x-[3px] group-hover:translate-y-[3px]"></div>
                                    <Button variant="outline" asChild className="relative bg-transparent border border-[#18448F]/30 hover:bg-[#18448F] hover:text-white text-[#18448F] rounded-[2rem] h-16 px-12 font-black uppercase tracking-widest text-xs transition-all">
                                        <a href="tel:18552649328" className="inline-flex items-center gap-2">
                                            <Phone className="w-5 h-5" />
                                            1-855-264-9328
                                        </a>
                                    </Button>
                                </div>
                            </div>

                            {/* Aligned Trust Row Section - Desktop Only */}
                            <div className="pt-8 w-full lg:w-auto hidden lg:block">
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                    {[
                                        { label: "Technologie", val: "Filtration Double", icon: <Zap className="w-5 h-5" /> },
                                        { label: "Pureté", val: "Certifié NSF/ANSI", icon: <Award className="w-5 h-5" /> },
                                        { label: "Éco-Conçu", val: "Zéro Bouteilles", icon: <Leaf className="w-5 h-5" /> }
                                    ].map((item, i) => (
                                        <div key={i} className="bg-white/60 backdrop-blur-md p-4 rounded-2xl border border-white/50 shadow-sm flex items-center gap-4 group cursor-default transition-all duration-500 hover:scale-105">
                                            <div className={`w-10 h-10 bg-[#18448F]/10 rounded-full flex items-center justify-center text-[#18448F] transition-all duration-500 shadow-sm shrink-0 ${item.label === 'Éco-Conçu' ? 'group-hover:bg-[#8CC63F] group-hover:text-white' : 'group-hover:bg-[#18448F] group-hover:text-white'}`}>
                                                {item.icon}
                                            </div>
                                            <div className="min-w-0">
                                                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">{item.label}</p>
                                                <p className="text-sm font-bold text-[#18448F] leading-tight">{item.val}</p>
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
                        <div className="text-center max-w-4xl mx-auto mb-20 animate-in fade-in slide-in-from-bottom-8 duration-1000">
                            <span className="inline-block px-4 py-1.5 bg-[#18448F] text-white rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                                PURETÉ À DOMICILE
                            </span>
                            <h2 className="heading-pro-max font-sans font-bold not-italic text-[#18448F] mb-6 text-center">
                                L'hydratation pure à la maison, <br className="hidden md:block"/><span className="text-[#8CC63F] font-sans font-bold not-italic drop-shadow-sm">l'eau fraîche</span> à la portée de vos mains.
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
                    </div>

                    {/* Outer layout container */}
                    <div className="w-full flex flex-col select-none overflow-hidden">
                        
                        {/* Top: Scrollable Cards Container */}
                        <div className="w-full max-w-[1340px] relative group pl-0 mb-16 mx-auto">
                            {/* Left Navigation Arrow */}
                            <button 
                                onClick={() => {
                                    const el = document.getElementById("fountain-slider-track-home");
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
                                className="absolute -left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-slate-900 hover:bg-[#18448F] text-white flex items-center justify-center shadow-lg transition-all hover:scale-110 active:scale-95 opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity duration-300"
                                aria-label="Précédent"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>

                            {/* Right Navigation Arrow */}
                            <button 
                                onClick={() => {
                                    const el = document.getElementById("fountain-slider-track-home");
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
                                className="absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-slate-900 hover:bg-[#18448F] text-white flex items-center justify-center shadow-lg transition-all hover:scale-110 active:scale-95 opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity duration-300"
                                aria-label="Suivant"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>

                            {/* Scroll Track */}
                            <div 
                                id="fountain-slider-track-home"
                                className="flex gap-6 overflow-x-auto scroll-smooth pb-6 snap-x snap-mandatory no-scrollbar pl-0 pr-12"
                                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                            >
                                {[
                                    {
                                        title: "Distributeur d'eau de comptoir - Avalanche",
                                        desc: "L'Avalanche est conçu pour s'intégrer harmonieusement sur n'importe quel comptoir. Ce distributeur d'eau allie un design compact à une technologie de refroidissement performante, fournissant une eau pure et rafraîchissante au quotidien.",
                                        img: countertopFountainImg,
                                        features: ["Sortie d'eau chaude, froide et tiède", "Boutons tactiles électroniques", "Comprend le premier jeu de filtres et le kit d'installation", "Homologué UL", "Double filtration certifiée NSF", "Garantie d'un an"]
                                    },
                                    {
                                        title: "Fontaine d'eau sans bouteille - Aspen",
                                        desc: "Dotée d'un design épuré, la fontaine Aspen offre une distribution d'eau continue sans bouteille. Sa construction robuste et son système de filtration avancé garantissent une hydratation saine pour toute la famille.",
                                        img: distributeur1,
                                        features: ["Sortie d'eau chaude, froide et tiède", "Boutons tactiles électroniques", "Comprend le premier jeu de filtres et le kit d'installation", "Homologué UL", "Double filtration certifiée NSF", "Garantie d'un an"]
                                    },
                                    {
                                        title: "Fontaine d'eau sans bouteille - Glacier",
                                        desc: "Le modèle Glacier se distingue par son élégance classique et sa fiabilité. Profitez d'une eau limpide à la température de votre choix, grâce à un système conçu pour allier durabilité et efficacité énergétique.",
                                        img: distributeur2,
                                        features: ["Production 26lb/jour", "Auto-nettoyante", "Indicateur de niveau", "Glaçons cristallins"]
                                    },
                                    {
                                        title: "Fontaine d'eau sans bouteille - Nordic",
                                        desc: "Inspiré par la pureté scandinave, le refroidisseur Nordic combine un style minimaliste et une ingénierie de pointe. Parfait pour tout espace de vie, il assure une eau toujours fraîche et au goût irréprochable.",
                                        img: distributeur3,
                                        features: ["Eau chaude, froide, tempérée", "Design autoportant", "Installation facile"]
                                    },
                                    {
                                        title: "Fontaine d'eau sans bouteille - Crystal Pro",
                                        desc: "Le Crystal Pro représente l'excellence en matière d'hydratation. Il allie une esthétique moderne haut de gamme à une filtration de qualité supérieure, s'intégrant parfaitement dans les intérieurs contemporains.",
                                        img: distributeur4,
                                        features: ["Gain d'espace", "Filtre haute capacité", "Robinetterie premium"]
                                    },
                                ].map((item, i) => (
                                    <div key={i} className="shrink-0 snap-start">
                                        <SolutionCard item={item} />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Bottom Row: CTA Column */}
                        <div className="container mx-auto max-w-3xl flex flex-col justify-center items-center text-center px-6 space-y-6 mt-24">
                            <h3 className="text-xl md:text-2xl font-medium text-slate-800 leading-snug">
                                Besoin d'aide pour trouver le système qui vous convient ?
                            </h3>
                            <div className="relative inline-flex group">
                                <div className="absolute inset-0 border border-[#18448F]/30 rounded-[2rem] -translate-x-[5px] translate-y-[5px] transition-transform group-hover:-translate-x-[3px] group-hover:translate-y-[3px]"></div>
                                <Button 
                                    className="relative w-full sm:w-auto bg-[#18448F] text-white hover:bg-transparent hover:text-[#18448F] border border-[#18448F] rounded-[2rem] min-h-[3.25rem] px-8 font-black uppercase tracking-[0.1em] text-[11px] whitespace-normal break-words transition-all"
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

                <section className="py-32 bg-white relative overflow-hidden">
                    {/* Centered technical header */}
                    <div className="container mx-auto px-6 relative z-10 mb-20">
                        <div className="text-center max-w-4xl mx-auto">
                            <span className="inline-block px-4 py-1.5 bg-[#18448F] text-white rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                                TECHNOLOGIE & RESPONSABILITÉ
                            </span>
                            <h2 className="heading-pro-max font-sans font-bold not-italic text-[#18448F] mb-6 text-center">
                                Plus qu'une fontaine d'eau, <br className="hidden md:block"/>un choix <span className="text-[#8CC63F] font-sans font-bold not-italic drop-shadow-sm">intelligent & responsable.</span>
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
                                    <h3 className="text-3xl lg:text-4xl font-bold text-[#18448F] lg:text-white tracking-tight">Art de Vivre</h3>
                                    <p className="text-slate-700 lg:text-white text-[18px] lg:text-[20px] leading-relaxed italic border-l-2 border-blue-500 pl-6 text-justify lg:text-left">
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
                    <h2 className="heading-pro-max font-sans font-bold not-italic text-[#18448F] mb-8 text-center">
                        L’eau <span className="text-[#8CC63F] font-sans font-bold not-italic drop-shadow-sm">que vous méritez,</span><br className="hidden md:block"/> le service que vous n'oublierez pas.
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
                                <span className="inline-block px-4 py-1.5 bg-[#18448F] text-white rounded-full text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
                                    NOTRE PORTFOLIO
                                </span>
                                <h2 className="heading-pro-max tracking-tight leading-[1.1]">
                                    <span className="italic font-light text-[#18448F] block">Intégration</span>
                                    <span className="font-bold text-[#18448F] block">parfaite & élégante.</span>
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
                                <img src={ecoImpactImg4} alt="Eau fraîche et pure" className="w-full h-full object-cover object-left group-hover:scale-105 transition-transform duration-700" />
                            </div>
                        </div>
                    </div>
                </section>



                {/* 11. PREMIUM CTA SECTION - REBUILT FOR IMPACT */}
                <section className="relative py-32 flex items-center overflow-hidden bg-[#18448F]">
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
                    <div className="absolute inset-0 bg-[#18448F]/10 backdrop-blur-sm" />
                  </div>

                  <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-5xl mx-auto text-center space-y-12">
                      <div className="space-y-6">
                        <span className="inline-block px-4 py-1.5 bg-white text-blue-600 rounded-full text-[10px] font-black uppercase tracking-[0.4em]">
                          L’HYDRATATION SUPÉRIEURE À PORTÉE DE MAIN
                        </span>
                        <h2 className="font-light block leading-tight lg:leading-[52px] text-white">
                          Sublimez votre quotidien avec l'excellence <br />
                          <span className="text-white italic font-bold font-serif">de nos fontaines d'eau.</span>
                        </h2>
                        <p className="text-lg md:text-xl text-blue-100/80 max-w-2xl mx-auto font-light leading-relaxed">
                          Dites adieu aux bouteilles de plastique encombrantes et profitez d'une source d'eau pure, fraîche ou chaude, instantanément. Que ce soit pour votre foyer ou votre espace de travail, nos distributeurs allient design moderne et filtration de pointe pour une hydratation saine et écologique.</p>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-8 justify-center items-center pt-4">
                        <div className="relative inline-block w-full sm:w-auto group">
                          <div className="absolute inset-0 border border-white rounded-[2rem] -translate-x-[5px] translate-y-[5px] transition-transform group-hover:-translate-x-[3px] group-hover:translate-y-[3px]"></div>
                          <Button 
                            asChild
                            className="relative w-full sm:w-auto bg-white text-[#18448F] hover:bg-blue-600 hover:text-white rounded-[2rem] h-16 px-12 font-black uppercase tracking-widest text-xs transition-all border-none"
                          >
                            <a href="tel:18552649328" className="flex items-center gap-3">
                              <Phone className="h-5 w-5 animate-bounce" />
                              Parlez à un expert
                            </a>
                          </Button>
                        </div>
                        <div className="relative inline-block w-full sm:w-auto group">
                          <div className="absolute inset-0 border border-white rounded-[2rem] -translate-x-[5px] translate-y-[5px] transition-transform group-hover:-translate-x-[3px] group-hover:translate-y-[3px]"></div>
                          <Button
                            variant="outline"
                            asChild
                            className="relative w-full sm:w-auto bg-transparent border border-white/30 text-white hover:bg-white hover:text-[#18448F] rounded-[2rem] h-16 px-12 font-black uppercase tracking-widest text-xs transition-all"
                          >
                            <NavLink to="/consultation">Planifiez une consultation</NavLink>
                          </Button>
                        </div>
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


                {/* 6. MISSION ÉCO-RESPONSABLE - BENTO REDESIGN */}
                <section className="py-24 lg:py-40 bg-white relative overflow-hidden">
                    {/* Deep Aesthetic Background Layers (Glassmorphism backdrop) */}
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-50/60 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 z-0" />
                    <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-cyan-50/60 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2 z-0" />

                    <div className="container mx-auto px-6 relative z-10 mb-16">
                        {/* Header */}
                        <div className="flex flex-col items-center text-center space-y-4">
                            <span className="inline-block px-4 py-1.5 bg-[#18448F] text-white rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-sm">
                                Notre Impact Écologique
                            </span>
                            <h2 className="heading-pro-max font-sans font-bold not-italic text-[#18448F] mb-6 text-center">
                                Vers un monde <br className="hidden md:block"/>
                                <span className="text-[#8CC63F] font-sans font-bold not-italic drop-shadow-sm">sans bouteilles en plastique.</span>
                            </h2>
                            <p className="body-pro-max text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
                                Notre gamme offre une eau saine, fraîche et délicieuse, pour les professionnels et les particuliers. Ensemble, transformons notre consommation d'eau en un acte durable.
                            </p>
                        </div>
                    </div>

                    {/* Contained Image with Floating Cards */}
                    <div className="container mx-auto px-6 relative z-10">
                        <div className="relative w-full max-w-7xl mx-auto h-[500px] lg:h-[600px] rounded-[2.5rem] overflow-hidden shadow-sm border border-slate-100">
                            <img 
                                src={ecoImpactImg7} 
                                alt="Bricareau sustainable office"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[10s] hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-slate-900/30" />
                            
                            <div className="h-full relative z-10 flex flex-col justify-center items-center lg:items-end p-8 lg:p-16">
                                <div className="w-full max-w-[380px] flex flex-col gap-6">
                                {/* Card 2: Stats */}
                                <div className="rounded-[2.5rem] bg-gradient-to-br from-[#8CC63F] to-green-600 p-8 flex flex-col items-center justify-center text-center relative overflow-hidden group shadow-2xl shadow-[#8CC63F]/40">
                                    <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
                                    <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
                                    
                                    <div className="relative z-10 flex flex-col items-center">
                                        <Recycle className="w-12 h-12 text-white/80 mb-6" />
                                        <span className="text-5xl lg:text-7xl font-black text-white leading-none tracking-tighter mb-2 group-hover:scale-110 transition-transform duration-500">
                                            -2920
                                        </span>
                                        <div className="w-12 h-1 bg-white/30 rounded-full my-4" />
                                        <span className="text-sm font-bold text-emerald-50 uppercase tracking-[0.2em] leading-relaxed">
                                            Bouteilles évitées par an<br/>pour un couple
                                        </span>
                                    </div>
                                </div>

                                {/* Floating CTA Action Bar */}
                                <div className="relative inline-block group w-full">
                                    <div className="absolute inset-0 border border-white/60 rounded-[2rem] -translate-x-[5px] translate-y-[5px] transition-transform group-hover:-translate-x-[3px] group-hover:translate-y-[3px]"></div>
                                    <Button 
                                        asChild 
                                        className="relative bg-white hover:bg-[#8CC63F] text-[#18448F] hover:text-white rounded-[2rem] h-14 w-full font-black uppercase tracking-widest text-xs transition-all border-none shadow-xl"
                                    >
                                        <NavLink to="/consultation" className="flex items-center justify-center gap-3">
                                            Planifiez votre impact
                                            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                                        </NavLink>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </section>

                {/* 7. Resources Section */}
                <section className="py-24 bg-white border-t border-slate-100">
                    <div className="container mx-auto px-6">
                        <div className="text-left mb-16">
                            <h2 className="mb-8 heading-pro-max text-left">
                                <span className="font-bold text-[#18448F] block">Ressources</span>
                            </h2>
                            <div className="w-24 h-1 bg-blue-600"></div>
                        </div>
                        <div 
                            ref={resourcesRef}
                            onScroll={handleScrollRessources}
                            className="flex lg:grid lg:grid-cols-3 gap-8 overflow-x-auto lg:overflow-x-visible no-scrollbar snap-x snap-mandatory pb-12 px-1 lg:px-0 scroll-smooth"
                        >
                            {resources.map((art, i) => (
                                <div
                                    key={i}
                                    className="min-w-[70vw] md:min-w-[45vw] lg:min-w-0 snap-center group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full cursor-pointer"
                                    onClick={() => navigate(art.link || "#")}
                                >
                                    <div className="h-56 overflow-hidden">
                                        <img
                                            src={art.img}
                                            alt={`${art.title} - Guide expert Bricareau sur la filtration d'eau potable`}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                    </div>
                                    <div className="p-8 text-left border-t-2 border-transparent group-hover:border-blue-600 transition-colors flex flex-col flex-grow">
                                        <h4 className="mb-4 group-hover:text-blue-600 transition-colors tracking-tight font-medium text-base leading-6 text-[#0F1729]">{art.title}</h4>
                                        <div className="mt-auto">
                                            <NavLink
                                                to={art.link || "#"}
                                                className="text-blue-600 font-bold flex items-center gap-2 group-hover:underline text-sm"
                                            >
                                                Lire <ChevronRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Navigation arrows and numbering for carousel - Mobile/Tablet ONLY */}
                        <div className="lg:hidden flex items-center justify-center relative mt-6">
                            <div className="flex items-center gap-4">
                                <Button 
                                    size="icon" 
                                    onClick={() => scrollResources('left')}
                                >
                                    <ChevronLeft className="h-6 w-6" />
                                </Button>
                                <Button 
                                    size="icon" 
                                    onClick={() => scrollResources('right')}
                                >
                                    <ChevronRight className="h-6 w-6" />
                                </Button>
                            </div>
                            
                            <div className="absolute right-2 text-sm font-black text-[#18448F] bg-blue-50/50 px-4 py-2 rounded-full border border-blue-100/50">
                                <span className="text-blue-600">{resourceIndex}</span>
                                <span className="mx-1 text-slate-300">/</span>
                                <span className="text-slate-400">{resources.length}</span>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            
            {/* Floating Sticky CTA - Phase III Conversion Focus */}
            <div className="hidden md:block fixed bottom-8 right-8 z-[100] animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-[3s] pointer-events-none">
              <div className="pointer-events-auto group/sticky relative">
                <div className="absolute inset-0 border border-[#18448F] rounded-[2rem] -translate-x-[5px] translate-y-[5px] transition-transform group-hover/sticky:-translate-x-[3px] group-hover/sticky:translate-y-[3px]"></div>
                <Button
                  asChild
                  className="relative bg-white hover:bg-white text-[#18448F] rounded-[2rem] h-20 px-8 transition-all duration-300 shadow-2xl border-none"
                >
                  <a href="/consultation" className="flex items-center gap-4">
                    <span className="font-black text-[11px] uppercase tracking-widest leading-tight text-center">
                      Réservez votre <br />consultation gratuite
                    </span>
                    <div className="w-10 h-10 bg-[#18448F] rounded-full flex items-center justify-center text-white group-hover/sticky:rotate-[360deg] transition-transform duration-700 shadow-lg shadow-blue-200 shrink-0">
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
