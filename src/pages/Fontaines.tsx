import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
    ShieldCheck,
    HeartPulse,
    Waves,
    Leaf,
    DollarSign,
    Settings,
    Recycle,
    Plus,
    Minus,
    PiggyBank,
    Ban
} from "lucide-react";
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
                        <h3 className="text-xl font-bold text-slate-900 tracking-tight leading-none mb-1.5">Eco-Bilan</h3>
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
                        <p className="text-[9px] text-slate-400 text-center font-medium leading-relaxed italic">
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
            }, 20000); // 20 seconds
        }
        return () => clearTimeout(timer);
    }, [showSpecs]);
    return (
        <div className="group w-full md:w-[350px] h-[580px] relative overflow-hidden rounded-3xl shadow-xl border border-slate-100 bg-white">
            {/* Front Panel */}
            <div className="h-full p-8 flex flex-col items-center">
                <div className="w-full aspect-square bg-slate-50 rounded-2xl mb-6 flex items-center justify-center p-4">
                    <img src={item.img} alt={`${item.title}`} className="w-full h-full object-contain mix-blend-multiply" />
                </div>
                <h3 className="text-xl font-bold mb-4 min-h-[56px] flex items-center justify-center text-center text-slate-900 tracking-tight">{item.title}</h3>
                <p className="font-light text-[18px] leading-[26px] text-slate-500 mb-6 flex-grow text-justify">{item.desc}</p>

                <Button
                    onClick={() => setShowSpecs(true)}
                    variant="link"
                    className="absolute bottom-6 right-6 p-0 group flex items-center justify-center h-auto w-auto hover:no-underline z-10"
                >
                    <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all shadow-md border border-blue-100/50">
                        <Plus className="w-6 h-6 transition-transform group-hover:rotate-90" />
                    </div>
                </Button>
            </div>

            {/* Specifications Slide-up Panel */}
            <div
                className={`absolute inset-0 bg-white p-10 flex flex-col transition-transform duration-500 ease-in-out z-20 ${showSpecs ? "translate-y-0" : "translate-y-full"
                    }`}
            >
                <div className="mb-8 text-left">
                    <h3 className="text-2xl font-bold mb-2 text-blue-600">Spécifications</h3>
                    <div className="w-12 h-1 bg-blue-500 rounded-full" />
                </div>

                <ul className="space-y-6 flex-grow text-left">
                    {item.features.map((feature: string, idx: number) => (
                        <li key={idx} className="flex items-center gap-4 group/item">
                            <div className="w-2 h-2 rounded-full bg-blue-500 group-hover/item:scale-150 transition-transform" />
                            <span className="text-lg font-light text-slate-600">{feature}</span>
                        </li>
                    ))}
                </ul>

                <Button
                    onClick={() => setShowSpecs(false)}
                    variant="link"
                    className="absolute bottom-6 right-6 p-0 group flex items-center justify-center h-auto w-auto hover:no-underline"
                >
                    <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all shadow-md border border-blue-100/50">
                        <Minus className="w-6 h-6" />
                    </div>
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
                {/* Hero Section */}
                <section className="relative h-[850px] flex items-center overflow-hidden -mt-[104px] pt-[104px]">
                    <div className="absolute inset-0 z-0">
                        <img
                            src={heroFountains}
                            alt="Fontaines d'eau modernes et bureautiques - Solutions Bricareau pour entreprises et résidences"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40 lg:bg-gradient-to-r lg:from-black/60 lg:to-transparent" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-white via-white/10 to-transparent" />
                        {/* Brightening Start 1/3 Right */}
                        <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white/90 via-white/40 to-transparent" />
                    </div>

                    <div className="container mx-auto px-6 relative z-10">
                        <div className="max-w-2xl text-white">
                            <span className="text-sm font-bold uppercase tracking-widest text-cyan-400 mb-4 block">
                                FRAÎCHEUR ILLIMITÉE
                            </span>
                            <h1
                                className="text-[32px] md:text-[48px] leading-[32px] md:leading-[48px] font-light mb-8 tracking-tighter text-white"
                                style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                            >
                                <span className="font-bold text-blue-400">Fontaines d'eau pure</span> <br />
                                <span className="font-bold text-white">& machines à glaçons d'élite</span>
                            </h1>
                            <p className="font-light text-[20px] leading-[28px] text-white/95 mb-8 max-w-xl drop-shadow-sm">
                                Offrez à votre famille le luxe d'une eau pure et d'une glace cristalline à volonté.
                                Une source inépuisable de fraîcheur et de santé, directement au cœur de votre foyer.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button
                                    size="lg"
                                    className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 h-14 shadow-lg shadow-blue-200"
                                    style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                                    asChild
                                >
                                    <a href="#consultation">
                                        Planifiez une consultation gratuite
                                    </a>
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="bg-white/10 hover:bg-white/20 text-white border-white rounded-full px-8 h-14 backdrop-blur-sm shadow-lg"
                                    style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                                    asChild
                                >
                                    <a href="tel:18552649328" className="flex items-center gap-2">
                                        <Phone className="h-5 w-5" />
                                        1-855-264-9328
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>
                    {/* Wave Separator Bottom - Transition to Dark Blue Section */}
                    <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-[0] z-20 pointer-events-none">
                        <svg
                            className="relative block w-full h-[50px] md:h-[80px]"
                            data-name="Layer 1"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 1200 120"
                            preserveAspectRatio="none"
                        >
                            <path
                                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                                fill="#2563eb"
                                transform="rotate(180 600 60)"
                            ></path>
                        </svg>
                    </div>
                </section>

                {/* Section 1: Solutions professionnelles */}
                <section className="py-24 bg-blue-600 text-white">
                    <div className="container mx-auto px-6 text-center">
                        <h2 className="text-[32px] md:text-[48px] font-normal text-white mb-8 leading-[1.2] md:leading-[48px] tracking-tighter">
                            L'hydratation pure à la maison. <br />L'eau fraîche à la portée de vos mains.
                        </h2>
                        <p className="font-light text-[20px] leading-[28px] text-white/70 max-w-4xl mx-auto mb-16">
                            Bricareau redéfinit votre expérience d'hydratation quotidienne avec des solutions d'eau fraîche haut de gamme.
                            Offrez à votre famille le luxe d'une eau d'une pureté exceptionnelle, toujours à la température idéale.
                        </p>
                        <div className="flex flex-wrap justify-center gap-8 mx-auto max-w-7xl">
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

                {/* Section 6: Impact & Technologie - BENTO GRID */}
                <section className="py-32 bg-slate-50 relative overflow-hidden">
                    <div className="container mx-auto px-6">
                        <div className="text-center max-w-5xl mx-auto mb-20">
                            <h2 className="text-[36px] md:text-[56px] font-bold text-slate-900 mb-6 leading-tight tracking-tighter">
                                Plus qu'une fontaine d'eau, <br />un choix intelligent & responsable.
                            </h2>
                            <p className="text-slate-500 text-lg font-light">
                                Alliez performance technologique, responsabilité écologique et économies domestiques.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Column 2: Art de Vivre (Dominant wide image) - Now on the Left */}
                            <div className="md:col-span-2 group relative rounded-[3rem] overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-700 min-h-[600px] order-1 md:order-1">
                                <img
                                    src={artDeVivreImg}
                                    alt="L'expérience d'eau pure Bricareau"
                                    className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-[2s]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/90 via-[#0A192F]/20 to-transparent" />
                                <div className="absolute bottom-16 left-16 right-16 z-10">
                                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/30 backdrop-blur-md mb-6">
                                        <Star className="w-4 h-4 text-blue-400 fill-blue-400" />
                                        <span className="text-xs font-black text-blue-100 uppercase tracking-widest">Choix Premium </span>
                                    </div>
                                    <h3 className="text-[42px] font-bold text-white mb-3 tracking-tighter leading-none">Art de Vivre</h3>
                                    <div className="w-20 h-1.5 bg-blue-500 rounded-full mb-6" />
                                    <p className="text-white/80 text-xl font-light max-w-lg leading-relaxed">
                                        Une pureté incomparable qui s'intègre harmonieusement à votre quotidien. Découvrez l'équilibre parfait entre esthétique et santé.
                                    </p>
                                </div>
                            </div>

                            {/* Column 1: Scientific & Practical Sidebar (Narrower) - Now on the Right */}
                            <div className="md:col-span-1 flex flex-col justify-center space-y-6 order-2 md:order-2">
                                {/* Card 1: Calculateur d'impact (Interactive) */}
                                <ImpactCalculator />

                                {/* Feature Boxes (Stacked Vertically) */}
                                <div className="grid grid-cols-1 gap-4">
                                    {/* Card 3: Économisez de l'argent */}
                                    <div className="group relative bg-[#1A2A4D] p-6 rounded-[2.5rem] overflow-hidden hover:shadow-xl transition-all duration-700">
                                        <div className="relative z-10 flex items-center gap-4">
                                            <div className="w-10 h-10 shrink-0 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-blue-600 transition-all duration-500">
                                                <DollarSign className="w-5 h-5 text-white" />
                                            </div>
                                            <div>
                                                <h3 className="text-sm font-bold text-white tracking-tight">Économisez de l'argent</h3>
                                                <p className="text-white/60 text-[11px] font-light leading-snug">Réduisez vos frais d'eau de 60% : une solution rentable dès le premier jour.</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Card 4: Gagnez du temps */}
                                    <div className="group relative bg-white p-6 rounded-[2.5rem] border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-700">
                                        <div className="relative z-10 flex items-center gap-4">
                                            <div className="w-10 h-10 shrink-0 rounded-xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-500">
                                                <Clock className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors" />
                                            </div>
                                            <div>
                                                <h3 className="text-sm font-bold text-slate-900 tracking-tight">Gagnez du temps</h3>
                                                <p className="text-slate-500 text-[11px] font-light leading-snug">Oubliez la corvée des bouteilles d'eau lourdes et les attentes de livraison interminables.</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Card 5: Sauvons l'environnement */}
                                    <div className="group relative bg-white p-6 rounded-[2.5rem] border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-700">
                                        <div className="relative z-10 flex items-center gap-4">
                                            <div className="w-10 h-10 shrink-0 rounded-xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-500">
                                                <Recycle className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors" />
                                            </div>
                                            <div>
                                                <h3 className="text-sm font-bold text-slate-900 tracking-tight">Sauvons l'environnement</h3>
                                                <p className="text-slate-500 text-[11px] font-light leading-snug">Éliminez le plastique à usage unique pour une hydratation 100% responsable.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 4: Testimonials */}
                <TestimonialsSection filterProduct="/fontaines" limit={6} />

                {/* Section 7: Mission Éco-Responsable Bricareau */}
                <section className="py-32 bg-white relative overflow-hidden">
                    <div className="container mx-auto px-6">
                        <div className="max-w-6xl mx-auto">
                            {/* Main Title */}
                            <h2 className="text-[40px] md:text-[64px] font-bold text-[#0A192F] tracking-tighter leading-[1.1] mb-20 text-balance">
                                Vers un monde <br />
                                <span className="text-[#0A192F]">sans bouteilles en plastique...</span>
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
                                {/* Left Column: Action Plan */}
                                <div className="space-y-12">
                                    <h3 className="text-blue-600 text-lg font-bold tracking-[0.1em] uppercase">
                                        Que devons-nous faire ?
                                    </h3>
                                    <ul className="space-y-8">
                                        {[
                                            "S'engager à réduire l'usage de bouteilles en plastique à usage unique",
                                            "Favoriser la consommation d'eau, \"localement\", directement au robinet",
                                            "Accompagner l'ensemble des utilisateurs dans cette démarche grâce à des solutions performantes pour traiter l'eau de boisson",
                                            "Prendre part à la mission de la marque Bricareau Changer le monde, gorgée après gorgée"
                                        ].map((text, i) => (
                                            <li key={i} className="flex items-start gap-4 group">
                                                <div className="mt-2.5 w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0 group-hover:scale-150 transition-transform" />
                                                <p className="text-slate-600 text-lg font-light leading-relaxed">
                                                    {text}
                                                </p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Right Column: Solutions & Benefits */}
                                <div className="space-y-12">
                                    <div className="space-y-6">
                                        <h3 className="text-blue-600 text-lg font-bold tracking-[0.1em] uppercase">
                                            Les solutions Bricareau pour traiter l'eau de boisson :
                                        </h3>
                                        <p className="text-slate-600 text-lg font-light leading-relaxed">
                                            Les gammes Bricareau ont été développées pour offrir une eau fraîche, délicieuse et saine, aussi bien pour les professionnels que pour le particulier :
                                        </p>
                                    </div>

                                    {/* Icon Horizontal Line Flow */}
                                    <div className="relative pt-8">
                                        {/* Connector Line */}
                                        <div className="absolute top-[44px] left-0 w-full h-[1px] bg-blue-100" />

                                        <div className="grid grid-cols-4 gap-4 relative z-10">
                                            {[
                                                { icon: <Droplets className="w-7 h-7" />, label: "Eau locale filtrée", sub: "Avec ou sans magnésium" },
                                                { icon: <Ban className="w-7 h-7" />, label: "0 bouteille", sub: "en plastique" },
                                                { icon: <Recycle className="w-7 h-7" />, label: "Responsable", sub: "" },
                                                { icon: <PiggyBank className="w-7 h-7" />, label: "Économique", sub: "" }
                                            ].map((item, i) => (
                                                <div key={i} className="flex flex-col items-center text-center group">
                                                    <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-white mb-6 shadow-lg shadow-blue-100 group-hover:bg-blue-700 group-hover:scale-110 transition-all duration-500">
                                                        {item.icon}
                                                    </div>
                                                    <div className="space-y-1">
                                                        <p className="text-[10px] font-black text-slate-800 uppercase tracking-wider leading-tight">
                                                            {item.label}
                                                        </p>
                                                        {item.sub && (
                                                            <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest leading-tight">
                                                                {item.sub}
                                                            </p>
                                                        )}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 8: CTA Pre-footer - VERSION RÉSIDENTIELLE LUXE */}
                <section className="py-32 bg-blue-600 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-700/40 via-transparent to-transparent opacity-50" />
                    <div className="container mx-auto px-6 relative z-10 text-center">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-[1.1] tracking-tighter text-balance">
                                Sublimez votre art de vivre <br />avec l'excellence de l'eau pure.
                            </h2>
                            <p className="text-white/60 text-xl md:text-2xl font-light mb-16 max-w-2xl mx-auto">
                                Rejoignez le club familles Bricareau et profitez d'une source d'eau digne d'un palace, sans sortir de chez vous.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
                                <Button className="bg-white hover:bg-blue-50 text-blue-600 rounded-full px-16 h-20 text-xl font-black shadow-[0_20px_40px_-5px_rgba(0,0,0,0.2)] transition-all hover:scale-105">
                                    Demandez une soumission
                                </Button>
                                <a href="tel:18552649328" className="flex items-center gap-4 text-white group cursor-pointer hover:text-white/80 transition-colors">
                                    <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white/10 transition-all">
                                        <Phone className="w-5 h-5 text-white" />
                                    </div>
                                    <span className="text-lg font-bold">Parlez à un conseiller</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </main >
            <Footer />
        </div >
    );
};

export default Fontaines;
