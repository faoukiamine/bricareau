import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GlobalBreadcrumbs from "@/components/GlobalBreadcrumbs";
import TestimonialsSection from "@/components/TestimonialsSection";
import {
    Snowflake,
    Droplets,
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
    Ban,
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
                    <div className="relative overflow-hidden p-6 rounded-[2.5rem] bg-emerald-50/50 border border-emerald-100 flex items-center justify-between group/res">
                        <div>
                            <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest block mb-1">Plastique Évité</span>
                            <div className="flex items-baseline gap-2">
                                <span className="text-4xl font-black text-slate-900 tracking-tighter tabular-nums">{bottlesSaved.toLocaleString()}</span>
                                <span className="text-emerald-600/60 text-[10px] font-bold uppercase">Unités</span>
                            </div>
                        </div>
                        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm border border-emerald-50/50 group-hover/res:scale-110 transition-transform">
                            <Recycle className="w-6 h-6 text-emerald-500" />
                        </div>
                    </div>

                    <div className="relative overflow-hidden p-6 rounded-[2.5rem] bg-blue-50/50 border border-blue-100 flex items-center justify-between group/res">
                        <div>
                            <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest block mb-1">Économies Nettes</span>
                            <div className="flex items-baseline gap-1">
                                <span className="text-4xl font-black text-slate-900 tracking-tighter tabular-nums">{moneySaved.toLocaleString()}</span>
                                <span className="text-blue-600 font-bold text-2xl tracking-tighter">$</span>
                            </div>
                        </div>
                        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm border border-blue-50/50 group-hover/res:scale-110 transition-transform">
                            <PiggyBank className="w-6 h-6 text-blue-500" />
                        </div>
                    </div>

                    <div className="pt-2">
                        <p className="text-[9px] text-slate-400 text-center font-medium italic">
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
                        className="w-full h-full object-contain mix-blend-multiply transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>

                <div className="space-y-4 text-center flex-grow">
                    <h3 
                        className="text-[20px] font-[700] text-slate-900 tracking-tight leading-[24px]"
                        style={{ fontStyle: 'normal' }}
                    >
                        {item.title}
                    </h3>
                    <div className="w-12 h-1 bg-blue-600/10 rounded-full mx-auto group-hover:w-20 group-hover:bg-blue-600 transition-all duration-700" />
                    <p className="font-light leading-relaxed text-slate-500 text-sm md:text-base text-justify">
                        {item.desc}
                    </p>
                </div>

                <div className="mt-8 w-full flex items-center justify-between">
                    <Button
                        onClick={() => setShowSpecs(true)}
                        className="rounded-full bg-blue-600 hover:bg-blue-700 text-white px-8 h-14 font-bold transition-all duration-500 group/btn shadow-xl shadow-blue-100"
                    >
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
                    className="mt-8 rounded-full border-slate-200 hover:bg-slate-50 text-slate-600 h-14 font-bold"
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
                {/* 1. Hero Section (Adoucissement Pattern) */}
                <section className="relative lg:min-h-[650px] flex flex-col lg:items-center overflow-hidden bg-white">
                    <div className="absolute top-[30px] left-0 right-0 z-30 pointer-events-none hidden lg:block">
                        <div className="container mx-auto px-4 lg:px-6 pointer-events-auto">
                            <GlobalBreadcrumbs variant="dark" />
                        </div>
                    </div>
                    <div className="relative lg:absolute lg:inset-0 h-[350px] sm:h-[450px] lg:h-full w-full lg:z-0 overflow-hidden">
                        <img
                            src={heroFountains}
                            alt="Fontaine d'eau moderne Bricareau - Design premium et filtration avancée"
                            className="w-full h-full object-cover"
                        />
                        <div className="hidden lg:block absolute inset-0 bg-black/40 lg:bg-gradient-to-r lg:from-black/60 lg:to-transparent" />
                        <div className="hidden lg:block absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-white via-white/10 to-transparent" />
                        <div className="hidden lg:block absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white/90 via-white/40 to-transparent" />
                    </div>

                    <div className="container relative z-10 mx-auto px-4 lg:min-h-[650px] flex items-center lg:px-6">
                        <div className="max-w-2xl lg:text-white py-12 lg:py-0">
                            <h1
                                className="mb-4 lg:mb-8 tracking-tighter text-slate-900 lg:text-white text-left lg:text-justify max-w-xl"
                                style={{
                                    fontWeight: 600
                                }}
                            >
                                Fontaines d'eau, l'art de l'eau pure rafraîchissante.
                            </h1>
                            <p className="font-light text-slate-600 lg:text-white/95 mb-8 max-w-xl text-left lg:text-justify">
                                Élevez votre expérience d'hydratation avec nos refroidisseurs d'eau haute performance. Design élégant et pureté absolue.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button
                                    size="lg"
                                    className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 h-14 shadow-lg shadow-blue-200"
                                    style={{}}
                                    asChild
                                >
                                    <a href="#models" className="flex items-center gap-2">
                                        Voir les modèles
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. Section 1: Modern Editorial Solutions Section */}
                <section id="models" className="relative py-32 bg-white overflow-hidden scroll-mt-20">
                    {/* Background decorations */}
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[120px] -z-0 translate-x-1/3 -translate-y-1/3" />
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-slate-100/50 rounded-full blur-[100px] -z-0 -translate-x-1/2 translate-y-1/2" />

                    <div className="container mx-auto px-6 relative z-10">
                        <div className="text-center max-w-4xl mx-auto mb-24">
                            <span className="inline-block px-4 py-1.5 bg-blue-600/10 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                                PURETÉ À DOMICILE
                            </span>
                            <h2 className="text-slate-900 mb-6 font-[400] leading-tight">
                                <span className="font-light block">L'hydratation pure à la maison.</span>
                                <span className="font-bold text-blue-600 block">L'eau fraîche à la portée de vos mains.</span>
                            </h2>
                            <p className="text-slate-500 font-light text-lg leading-relaxed max-w-3xl mx-auto">
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

                {/* 3. Impact & Technologie Section - MODERN EDITORIAL BENTO */}
                <section className="py-32 bg-white relative overflow-hidden">
                    {/* Background glows */}
                    <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 -z-0" />
                    <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-slate-50/50 rounded-full blur-[120px] translate-x-1/4 translate-y-1/4 -z-0" />

                    <div className="container mx-auto px-6 relative z-10">
                        <div className="text-center max-w-4xl mx-auto mb-24">
                            <span className="inline-block px-4 py-1.5 bg-blue-600/10 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                                TECHNOLOGIE & RESPONSABILITÉ
                            </span>
                            <h2 className="text-slate-900 mb-6 leading-tight">
                                <span className="font-light block">Plus qu'une fontaine d'eau,</span>
                                <span className="font-bold text-blue-600 block">un choix intelligent & responsable.</span>
                            </h2>
                            <p className="text-slate-500 font-light text-lg max-w-2xl mx-auto leading-relaxed">
                                Alliez performance technologique, responsabilité écologique et économies domestiques pour un quotidien sans compromis.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10">
                            {/* Main Visual Card - Asymmetrical Large */}
                            <div className="md:col-span-8 group relative rounded-[3.5rem] overflow-hidden shadow-[0_30px_70px_-20px_rgba(0,0,0,0.15)] h-[650px]">
                                <img
                                    src={artDeVivreImg}
                                    alt="L'expérience d'eau pure Bricareau"
                                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2.5s] ease-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/10 to-transparent" />

                                <div className="absolute bottom-12 left-12 right-12 z-10">
                                    <div className="flex flex-col items-start gap-4">
                                        <div className="px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center gap-2 mb-4">
                                            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                            <span className="text-[10px] font-black text-white uppercase tracking-widest">Expérience Premium</span>
                                        </div>
                                        <h3 className="text-4xl font-bold text-white tracking-tight">Art de Vivre</h3>
                                        <p className="text-white/80 font-light text-lg max-w-xl">
                                            Une pureté incomparable qui s'intègre harmonieusement à votre quotidien. Découvrez l'équilibre parfait entre esthétique et santé.
                                        </p>
                                    </div>
                                </div>

                                {/* Floating Feature Cards */}
                                <div className="absolute top-12 right-12 z-20 space-y-4 hidden lg:block">
                                    {[
                                        { icon: <DollarSign className="w-5 h-5" />, title: "Rentabilité", desc: "Économisez jusqu'à 60% dès le premier jour.", bg: "bg-white/90 backdrop-blur-xl border-blue-100", color: "text-slate-900" },
                                        { icon: <Clock className="w-5 h-5 text-blue-600" />, title: "Sérénité", desc: "Fini la corvée des bouteilles et les livraisons.", bg: "bg-white/90 backdrop-blur-xl border-blue-100", color: "text-slate-900" }
                                    ].map((feature, idx) => (
                                        <div key={idx} className={`p-6 rounded-[2rem] ${feature.bg} shadow-2xl border w-64 group transition-all duration-500 hover:-translate-x-2`}>
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0 group-hover:bg-blue-600 transition-colors">
                                                    {React.cloneElement(feature.icon as React.ReactElement, { className: `w-5 h-5 ${feature.bg.includes('text-slate-900') ? 'text-blue-600' : 'text-blue-600'} group-hover:text-white` })}
                                                </div>
                                                <div>
                                                    <h4 className={`text-base font-bold ${feature.color}`}>{feature.title}</h4>
                                                    <p className={`text-[11px] font-light text-slate-500 leading-tight`}>{feature.desc}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Impact Calculator Card - Sidebar style */}
                            <div className="md:col-span-4 flex flex-col h-full">
                                <ImpactCalculator />
                            </div>
                        </div>
                    </div>
                </section>

                <TestimonialsSection
                    filterProduct="/fontaines"
                    limit={6}
                    title={
                        <>
                            <h2 className="text-slate-900 mb-6">
                                <span className="font-light block">L’eau que vous méritez,</span>
                                <span className="font-bold text-blue-600">le service que vous n'oublierez pas.</span>
                            </h2>
                        </>
                    }
                />

                {/* 4. Impact Environnemental - Full Width Modern Section */}
                <section className="pb-32 bg-white relative overflow-hidden">
                    <div className="container mx-auto px-6 relative z-10">
                        {/* MINIMALIST LIFESTYLE ALTERNATIVE */}
                        <div className="group relative rounded-[3.5rem] overflow-hidden bg-[#F8F9FA] border border-slate-100 shadow-[0_30px_60px_rgba(0,0,0,0.04)] min-h-[600px] flex flex-col md:flex-row items-stretch">
                            {/* Text Content - Left 40% */}
                            <div className="md:w-[45%] p-12 lg:p-20 flex flex-col justify-center">
                                <div className="mb-8">
                                    <div className="flex items-center gap-3 mb-6">
                                        <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em]">
                                            DURABILITÉ & STYLE
                                        </span>
                                    </div>
                                    <h2 className="text-slate-900 mb-6 leading-tight">
                                        <span className="font-light">Impact</span>{" "}
                                        <span className="font-bold text-blue-600">Environnemental.</span>
                                    </h2>
                                    <p className="text-slate-500 font-light text-xl leading-relaxed max-w-md text-justify">
                                        L'élégance au service de la planète. Chaque gorgée est un pas vers un monde sans plastique, sans sacrifier l'esthétique de votre intérieur.
                                    </p>
                                </div>

                                <NavLink to="/contact">
                                    <Button className="rounded-full bg-blue-600 hover:bg-blue-700 text-white px-12 h-16 text-lg font-bold transition-all duration-500 shadow-xl group/btn w-fit">
                                        Passez au vert
                                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover/btn:translate-x-1" />
                                    </Button>
                                </NavLink>
                            </div>

                            {/* Lifestyle Image - Right 60% */}
                            <div className="md:w-[55%] relative overflow-hidden h-[400px] md:h-auto">
                                <img
                                    src={ecoImpactImg}
                                    alt="Modern Fontaine Bricareau"
                                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[4s]"
                                />
                                {/* Subtle Overlay for depth */}
                                <div className="absolute inset-0 bg-gradient-to-r from-[#F8F9FA] via-transparent to-transparent hidden md:block" />
                            </div>
                        </div>
                    </div>
                </section>


                {/* 5. CTA Section - Premium Immersive */}
                <section className="relative py-32 overflow-hidden">
                    {/* Background Image with Overlay */}
                    <div className="absolute inset-0 z-0">
                        <img
                            src={eauFontaineImg}
                            alt="Expert Bricareau en fontaines d'eau"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-800/60 to-blue-500/30 backdrop-blur-[2px]" />
                    </div>
                    <div className="container mx-auto px-6 relative z-10 text-center">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-white mb-6">
                                <span className="font-light leading-tight block tracking-tight opacity-90 italic">Sublimez votre quotidien avec l'excellence de nos fontaines d'eau.</span>
                            </h2>
                            <p className="text-blue-100/80 font-light text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
                                Rejoignez le club familles Bricareau et profitez d'une source d'eau digne d'un palace, sans sortir de chez vous.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                                <Button
                                    size="lg"
                                    className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-12 h-16 shadow-2xl shadow-white/30 group text-lg font-light"
                                    asChild
                                >
                                    <a href="tel:18552649328" className="flex items-center gap-3">
                                        <Phone className="h-5 w-5 animate-bounce" />
                                        Parlez à un expert
                                    </a>
                                </Button>

                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="rounded-full px-10 h-16 border-white/30 text-white bg-white/5 hover:bg-white/10 backdrop-blur-md text-lg transition-all duration-500"
                                    asChild
                                >
                                    <NavLink to="/consultation">Planifiez-vous une consultation</NavLink>
                                </Button>
                            </div>

                            <p className="mt-8 text-white/50 text-sm font-light">
                                Disponible 7j/7 — Réponse en moins de 24h
                            </p>
                        </div>
                    </div>
                </section>

                {/* 6. Mission Éco-Responsable Bricareau Section - MODERN EDITORIAL */}
                <section className="py-32 bg-slate-50 relative overflow-hidden">
                    {/* Decorative Background Elements */}
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-100/30 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-slate-200/20 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2" />

                    <div className="container mx-auto px-6 relative z-10">
                        <div className="max-w-6xl mx-auto">
                            {/* Section Header */}
                            <div className="mb-24">
                                <span className="inline-block px-4 py-1.5 bg-blue-600/10 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                                    NOTRE ENGAGEMENT
                                </span>
                                <h2 className="text-slate-900 mb-6 tracking-tight">
                                    <span className="font-light block">Vers un monde</span>
                                    <span className="font-bold text-blue-600">sans bouteilles en plastique.</span>
                                </h2>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-start">
                                {/* Left Column: Action & Philosophy */}
                                <div className="space-y-16">
                                    <div className="relative">
                                        <div className="absolute -left-8 top-0 w-1 h-full bg-blue-600/20 rounded-full" />
                                        <h3 className="text-2xl font-bold text-slate-900 mb-8 tracking-tight">
                                            Que devons-nous faire ?
                                        </h3>
                                        <ul className="space-y-10">
                                            {[
                                                { title: "Réduction Active", text: "S'engager à réduire l'usage de bouteilles en plastique à usage unique au quotidien." },
                                                { title: "Consommation Locale", text: "Favoriser la consommation d'eau \"locale\", directement au robinet de votre résidence." },
                                                { title: "Accompagnement Expert", text: "Proposer des solutions performantes pour traiter l'eau de boisson en toute sécurité." },
                                                { title: "Mission Commune", text: "Partager la vision Bricareau : Changer le monde, une gorgée après l'autre." }
                                            ].map((item, i) => (
                                                <li key={i} className="group flex flex-col gap-2">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-2 h-2 rounded-full bg-blue-600 group-hover:scale-150 transition-transform duration-300" />
                                                        <span className="text-sm font-black text-slate-900 uppercase tracking-wider">{item.title}</span>
                                                    </div>
                                                    <p className="text-slate-500 font-light text-lg leading-relaxed pl-5">
                                                        {item.text}
                                                    </p>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Right Column: Solution Grid */}
                                <div className="relative">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
                                        {[
                                            { icon: <Droplets className="w-8 h-8" />, label: "Filtration Locale", desc: "Eau pure à volonté, avec ou sans magnésium.", bg: "bg-white" },
                                            { icon: <Ban className="w-8 h-8" />, label: "Zéro Déchet", desc: "Élimination totale des bouteilles à usage unique.", bg: "bg-blue-600", dark: true },
                                            { icon: <Recycle className="w-8 h-8" />, label: "Éco-Conception", desc: "Matériaux durables et cycles de vie optimisés.", bg: "bg-white" },
                                            { icon: <PiggyBank className="w-8 h-8" />, label: "Économies", desc: "Retour sur investissement rapide et durable.", bg: "bg-white" }
                                        ].map((item, i) => (
                                            <div
                                                key={i}
                                                className={`p-10 rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100 group transition-all duration-500 hover:-translate-y-2 ${item.bg} ${item.dark ? 'text-white' : 'text-slate-900'}`}
                                            >
                                                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-colors ${item.dark ? 'bg-white/20' : 'bg-blue-50 group-hover:bg-blue-600'}`}>
                                                    {React.cloneElement(item.icon as React.ReactElement, {
                                                        className: `w-8 h-8 ${item.dark ? 'text-white' : 'text-blue-600 group-hover:text-white'} transition-colors`
                                                    })}
                                                </div>
                                                <h4 className="text-xl font-bold mb-3 tracking-tight">{item.label}</h4>
                                                <p className={`text-sm font-light leading-relaxed ${item.dark ? 'text-blue-100/70' : 'text-slate-500'}`}>
                                                    {item.desc}
                                                </p>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Subtitle/Quote inside the grid column */}
                                    <div className="mt-12 p-8 rounded-[2.5rem] bg-slate-900 text-white relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                                        <p className="text-lg font-light italic relative z-10">
                                            "Les gammes Bricareau offrent une eau saine, fraîche et délicieuse, pour les professionnels et les particuliers."
                                        </p>
                                    </div>
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

export default Fontaines;
