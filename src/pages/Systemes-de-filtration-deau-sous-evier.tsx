import Header from "@/components/Header";
import { cn } from "@/lib/utils";
import Hero from "@/components/Hero";
import ExpertAvatars from "@/components/ExpertAvatars";
import GlobalBreadcrumbs from "@/components/GlobalBreadcrumbs";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
    ArrowRight,
    Phone,
    CheckCircle2,
    ChevronRight,
    ChevronLeft,
    Droplets,
    ShieldCheck,
    ShieldAlert,
    Sparkles,
    Leaf,
    Activity,
    Check,
    X,
    FlaskConical,
    Layers,
    Sprout,
    Atom,
    GlassWater,
    Anvil,
    Microscope,
    Bug,
    Mountain,
    TriangleAlert,
    Waves
} from "lucide-react";
import waterFilterPng from "@/assets/water-filter_8782563.png";
import safetyIcon from "@/assets/1709235770048.png";
import { NavLink } from "@/components/NavLink";
import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from "@/components/ui/accordion";
import ConsultationFormSection from "@/components/ConsultationFormSection";
import TestimonialsSection from "@/components/TestimonialsSection";

import heroDrink from "@/assets/hero-image.jpg";
import eliteROImg from "@/assets/Triple Stage Filter.jpg";
import plusROImg from "@/assets/Double Stage Filter.jpg";
import essentialImg from "@/assets/Single Stage Filter.jpg";
import waterTestingImg from "@/assets/185091336.jpg";
import multiStageFilterImg from "@/assets/RO undersink system.jpg";
import medsInWaterImg from "@/assets/eau_medicaments.png";
import undersinkVsWholeHouseImg from "@/assets/2148947324.jpg";
import bgEfficiencyImg from "@/assets/2148728701.jpg";
import { heroImg as filtreSousEvierImg } from "./Blog pages/Filtre-sous-evier-lalternative-simple-aux-pichets-filtrants";
import { heroImg as plombVieillesMaisonsImg } from "./Blog pages/Le-plomb-dans-les-vieilles-maisons-comment-se-proteger";
import { heroImg as eauVilleFiltreeImg } from "./Blog pages/Pourquoi-meme-leau-de-ville-a-besoin-detre-filtree";
import womandrinkingwaterImg from "@/assets/25716.jpg";
import ourteamstudyyourwaterImg from "@/assets/10271.jpg";
import springWaterImg from "@/assets/pure-spring-water.png";

const WaterFilterIcon = ({ className }: { className?: string }) => (
    <div 
        className={className} 
        style={{
            backgroundColor: "currentColor",
            maskImage: `url(${waterFilterPng})`,
            maskSize: 'contain',
            maskRepeat: 'no-repeat',
            maskPosition: 'center',
            WebkitMaskImage: `url(${waterFilterPng})`,
            WebkitMaskSize: 'contain',
            WebkitMaskRepeat: 'no-repeat',
            WebkitMaskPosition: 'center',
        }}
    />
);

const FiltrationSousEvier = () => {
    const navigate = useNavigate();
    const [showAllFaqs, setShowAllFaqs] = React.useState(false);
    const [activeCol, setActiveCol] = React.useState(0);

    useEffect(() => {
        document.title = "Filtration sous évier : Eau pure directement au robinet";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Découvrez nos systèmes de filtration sous évier. Une eau potable pure, sans chlore et au goût parfait directement de votre robinet.");
        }

        // OG Tags
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) ogTitle.setAttribute("content", "Filtration sous évier : Pureté et Confort | Bricareau");
        const ogDesc = document.querySelector('meta[property="og:description"]');
        if (ogDesc) ogDesc.setAttribute("content", "Profitez d'une eau saine et délicieuse avec nos solutions d'ultrafiltration Cristal Pro. Gain d'espace et performance.");
        const ogUrl = document.querySelector('meta[property="og:url"]');
        if (ogUrl) ogUrl.setAttribute("content", "https://bricareau.com/systemes-de-filtration-deau-sous-evier");
    }, []);

    const [resourceIndex, setResourceIndex] = React.useState(1);
    const resourcesRef = React.useRef<HTMLDivElement>(null);

    const handleScrollRessources = () => {
        if (resourcesRef.current) {
            const scrollLeft = resourcesRef.current.scrollLeft;
            const containerWidth = resourcesRef.current.offsetWidth;
            const itemWidth = resourcesRef.current.querySelector('div')?.offsetWidth || containerWidth;
            const index = Math.round(scrollLeft / itemWidth) + 1;
            setResourceIndex(Math.min(index, resources.length));
        }
    };

    const resources = [
        { title: "L'alternative aux pichets", img: filtreSousEvierImg, link: "/filtre-sous-evier-lalternative-simple-aux-pichets-filtrants" },
        { title: "Protéger sa famille du plomb", img: plombVieillesMaisonsImg, link: "/le-plomb-dans-les-vieilles-maisons-comment-se-proteger" },
        { title: "Filtrer l'eau de ville ?", img: eauVilleFiltreeImg, link: "/pourquoi-meme-leau-de-ville-a-besoin-detre-filtree" }
    ];

    const scrollResources = (direction: 'left' | 'right') => {
        if (resourcesRef.current) {
            const scrollAmount = resourcesRef.current.clientWidth * 0.8;
            resourcesRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
        }
    };

    interface ComparisonItem {
        feature: string;
        elite: boolean | string;
        plus: boolean | string;
        essential: boolean | string;
    }

    const comparisonData: ComparisonItem[] = [
        { feature: "Nombre d'étapes de filtration", elite: "3 Étapes", plus: "2 Étapes", essential: "1 Étape" },
        { feature: "Élimination des sédiments (sable, terre et rouille)", elite: true, plus: true, essential: true },
        { feature: "Élimination du chlore (Goût/Odeur)", elite: true, plus: true, essential: false },
        { feature: "Retrait des COV et pesticides", elite: true, plus: true, essential: false },
        { feature: "Membrane d'ultrafiltration (0.01 µm)", elite: true, plus: false, essential: false },
        { feature: "Élimination 99.9% bactéries/virus", elite: true, plus: false, essential: false },
        { feature: "Préservation des minéraux naturels", elite: true, plus: true, essential: true },
        { feature: "Aucun rejet d'eau au drain", elite: true, plus: true, essential: true },
    ];

    return (
        <div className="min-h-screen bg-background text-slate-900 font-sans">
             <Header />
             <main>
                <Hero 
                    image={heroDrink}
                    highlightedTitle="Système de filtration sous évier,"
                    mainTitle="de l'eau pure à chaque goutte."
                    subtitle="Profitez d'une eau potable d'une qualité exceptionnelle directement de votre robinet. Nos systèmes de filtration sous comptoir et d'ultrafiltration éliminent 99% des contaminants pour la santé de votre famille."
                    ctaText="Explorez nos systèmes de filtration"
                    ctaLink="#systemes-filtration"
                    showPhone={true}
                    showBreadcrumbs={true}
                    singleLineTitle={true}

                />

                {/* 2. L'EAU DE SOURCE, SANS LA BOUTEILLE - Editorial Impact Redesign */}
                <section className="py-24 lg:py-40 bg-white relative overflow-hidden">
                    {/* Immersive Background Decor */}
                    <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 -skew-x-12 translate-x-1/4 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-50/30 rounded-full blur-[100px] -translate-x-1/2 pointer-events-none" />

                    <div className="container mx-auto px-6 relative z-10">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-x-24 lg:gap-y-8 items-start">
                            
                            {/* 1. Header Column (Mobile: 1st, Desktop: Top Right) */}
                            <div className="lg:col-span-7 lg:col-start-6 space-y-8">
                                <div className="space-y-8">
                                    <span className="inline-block px-4 py-1.5 bg-cyan-600/10 text-cyan-700 rounded-full text-[10px] font-black uppercase tracking-[0.3em]">
                                        OPTIMISATION DU ROBINET
                                    </span>
                                    <h2 className="heading-pro-max text-left !leading-[1.1]">
                                        <span className="italic font-light text-[#0891B2] block">L'eau de source,</span>
                                        <span className="font-bold text-[#164E63] block">sans la bouteille.</span>
                                    </h2>
                                    <p className="body-pro-max text-slate-500 max-w-2xl text-justify">
                                        Ne faites plus aucun compromis. Transformez votre robinet en une source de pureté gastronomique. Nos systèmes filtrent l'indésirable pour ne laisser couler que l'essentiel : une eau fraîche, saine et libérée des contraintes du plastique.
                                    </p>
                                </div>
                            </div>

                            {/* 2. Image Column (Mobile: 2nd, Desktop: Spanning Left) */}
                            <div className="lg:col-span-5 lg:row-start-1 lg:row-span-2 relative group mt-8 lg:mt-0">
                                <div className="absolute -inset-4 bg-slate-100 rounded-[4rem] group-hover:bg-cyan-50 transition-colors duration-700 -rotate-2" />
                                <div className="relative aspect-[4/5] overflow-hidden rounded-[3rem] shadow-2xl border border-white/50">
                                    <img 
                                        src={springWaterImg} 
                                        alt="Eau de source pure Bricareau" 
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                                    />
                                    {/* Experience Label */}
                                    <div className="absolute bottom-8 left-8 right-8 p-8 bg-white/70 backdrop-blur-xl rounded-3xl border border-white/20 shadow-xl group-hover:-translate-y-2 transition-all duration-500">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-blue-200">
                                                <Droplets className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-black uppercase tracking-widest text-[#164E63]">Pureté Absolue</p>
                                                <p className="text-lg font-bold text-[#1e3a8a]">Zéro Chlore, 100% Vie</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 3. Benefits Column (Mobile: 3rd, Desktop: Bottom Right) */}
                            <div className="lg:col-span-7 lg:col-start-6 space-y-12 mt-8 lg:mt-0">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {[
                                        { 
                                            title: "Gastronomie", 
                                            benefit: "Goût & Odeur", 
                                            desc: "Redécouvrez l'arôme pur de vos cafés et thés, libéré des saveurs chimiques de l'eau de ville.",
                                            icon: <Anvil className="w-5 h-5 text-cyan-600" /> 
                                        },
                                        { 
                                            title: "Protection", 
                                            benefit: "Zéro Plomb", 
                                            desc: "Une barrière physique impénétrable contre les résidus métalliques des canalisations anciennes.",
                                            icon: <ShieldCheck className="w-5 h-5 text-emerald-600" />
                                        },
                                        { 
                                            title: "Science", 
                                            benefit: "Ultrafiltration", 
                                            desc: "Technologie 0.01 micron bloquant 99.9% des micro-organismes sans aucun ajout chimique.",
                                            icon: <Microscope className="w-5 h-5 text-emerald-600" />
                                        },
                                        { 
                                            title: "Écologie", 
                                            benefit: "Zéro Déchet", 
                                            desc: "Évitez 2000 bouteilles plastiques par an. Économisez pour vous et préservez pour la planète.",
                                            icon: <Leaf className="w-5 h-5 text-emerald-500" />
                                        }
                                    ].map((item, idx) => (
                                        <div key={idx} className="group/item flex flex-col gap-4 p-6 bg-slate-50/50 rounded-3xl border border-transparent hover:border-cyan-100 hover:bg-white hover:shadow-xl transition-all duration-500">
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm border border-slate-100 group-hover/item:scale-110 transition-transform">
                                                    {item.icon}
                                                </div>
                                                <div>
                                                    <p className="text-[10px] font-black text-cyan-600 uppercase tracking-widest">{item.title}</p>
                                                    <h3 className="text-lg font-bold text-[#164E63]">{item.benefit}</h3>
                                                </div>
                                            </div>
                                            <p className="text-slate-500 text-sm leading-relaxed font-light text-justify">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>

                                <div className="pt-8">
                                    <Button asChild size="lg" variant="default" className="w-full sm:w-fit font-bold rounded-full group">
                                        <a href="tel:18552649328" className="flex items-center gap-3">
                                            Passer à l'eau pure dès aujourd'hui
                                            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. Product Grid */}
                <section id="systemes-filtration" className="py-24 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="text-left mb-16">
                            <h2 className="mb-8 heading-pro-max text-left">
                                <span className="italic font-light text-[#2563eb] block">Nos systèmes de filtration</span>
                                <span className="font-bold text-[#1e3a8a] block">d'eau sous évier</span>
                            </h2>
                            <div className="w-24 h-1 bg-blue-600 mb-8"></div>
                            <p className="body-pro-max mb-16 max-w-7xl mx-auto text-justify">
                                Nos systèmes de filtration d'eau sous évier représentent la solution ultime pour transformer votre cuisine en une source de pureté inépuisable. Conçus pour s'intégrer discrètement sous votre comptoir, ces systèmes utilisent des technologies de pointe pour éliminer jusqu'à 99 % des contaminants, incluant le chlore, le plomb et les sédiments. Contrairement aux pichets filtrants, ils offrent un débit constant et une filtration beaucoup plus rigoureuse, garantissant une eau de boisson cristalline et un goût irréprochable pour vos cafés et vos repas. Avec un entretien simplifié, vous reprenez le contrôle total sur la qualité de l’eau que votre famille consomme au quotidien.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
                            {[
                                { name: "Cristal Pro I", desc: "La première ligne de défense pour votre eau. Ce filtre à sédiments haute performance élimine efficacement le sable, la rouille et les particules en suspension, en clarifiant instantanément votre eau, jour après jour, en toute simplicité.", img: essentialImg },
                                { name: "Cristal Pro II", desc: "La combinaison parfaite pour une eau saine. Ce système duo associe la filtration des sédiments à un filtre charbon actif premium, éliminant non seulement les particules mais aussi le chlore, les COV et les goûts désagréables.", img: plusROImg },
                                { name: "Cristal Pro III", desc: "La technologie d'ultrafiltration avancée. Ce système offre une purification microscopique supérieure, filtrant virus, bactéries et kystes tout en conservant les minéraux bénéfiques pour une eau d'une pureté absolue, rafraîchissante et inégalée.", img: eliteROImg },
                            ].map((product, i) => (
                                <div
                                    key={i}
                                    className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full cursor-pointer"
                                    onClick={() => navigate("/contact")}
                                >
                                    <div className="relative h-80 overflow-hidden bg-slate-50 flex items-center justify-center p-12">
                                        <img
                                            src={product.img}
                                            alt={`${product.name} - Système de filtration d'eau sous évier haute performance Bricareau`}
                                            className="max-h-full object-contain group-hover:scale-110 transition-transform duration-700 mix-blend-multiply"
                                        />
                                    </div>
                                    <div className="p-8 space-y-4 flex flex-col flex-grow border-t-2 border-transparent group-hover:border-blue-600 transition-colors">
                                        <h3 className="card-title text-center group-hover:text-blue-600 transition-colors duration-500">
                                            {product.name}
                                        </h3>
                                        <p className="body-pro-max text-slate-500 flex-grow text-justify">
                                            {product.desc}
                                        </p>
                                        <div
                                            className="inline-flex items-center gap-2 text-blue-600 font-bold text-xs tracking-widest uppercase mt-4 group-hover:underline self-end"
                                            style={{}}
                                        >
                                            <ArrowRight className="h-6 w-6 transform group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

               {/* 3. Pourquoi choisir - Fluid Editorial Design */}
                <section className="py-32 bg-white relative overflow-hidden">
                    {/* Background Decorative Elements */}
                    <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-50/30 rounded-full blur-[120px] -translate-y-1/2 z-0" />
                    <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-50/20 rounded-full blur-[100px] translate-y-1/2 z-0" />

                    <div className="container mx-auto px-6 relative z-10">
                        <div className="max-w-4xl mx-auto text-center mb-24">
              <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-xs font-black uppercase tracking-widest mb-6">
                                L'EXCELLENCE DE L'EAU FILTRÉE AU QUOTIDIEN
                            </span>
                            <h2 className="mb-8 heading-pro-max text-center">
                                <span className="italic font-light text-[#2563eb] block">Pourquoi privilégier nos</span>
                                <span className="font-bold text-[#1e3a8a] block">systèmes de filtration d'eau sous l'évier ?</span>
                            </h2>
                            <div className="w-16 h-0.5 bg-blue-600/20 mx-auto mb-10" />
                            <p className="font-light text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed italic">
                                Une fusion parfaite entre haute technologie, durabilité environnementale et confort domestique absolu.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-24">
                            {[
                                { 
                                    icon: GlassWater, 
                                    title: "Goût Authentique", 
                                    desc: "Sublimez vos saveurs. Un café aux arômes authentiques et des plats qui retrouvent leur vrai goût, libérés du chlore.",
                                    num: "01"
                                },
                                { 
                                    icon: Leaf, 
                                    title: "Zéro Plastique", 
                                    desc: "Dites définitivement adieu au plastique. Une seule cartouche préserve la planète de milliers de bouteilles jetables.",
                                    num: "02"
                                },
                                { 
                                    icon: WaterFilterIcon, 
                                    title: "Design compact", 
                                    desc: "L'élégance de la discrétion. Une intégration fluide sous votre comptoir qui préserve l'esthétique de votre cuisine.",
                                    num: "03"
                                },
                                { 
                                    icon: Activity, 
                                    title: "Rendement Durable", 
                                    desc: "Une économie intelligente. Transformez votre eau du robinet en une ressource premium, sans coût récurrent.",
                                    num: "04"
                                },
                            ].map((item, i) => (
                                <div key={i} className="group flex items-start gap-10">
                                    <div className="relative flex-shrink-0">
                                        <div className="w-16 h-16 flex items-center justify-center text-blue-600 transition-all duration-700">
                                            <item.icon strokeWidth={1} className="w-14 h-14 group-hover:scale-110 group-hover:rotate-6 transition-all duration-700" />
                                        </div>
                                        <span className="absolute -top-6 -left-6 text-6xl font-black text-blue-100/20 group-hover:text-blue-200/30 transition-colors duration-700 select-none">
                                            {item.num}
                                        </span>
                                    </div>
                                    
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-4">
                                            <h3 className="font-bold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors duration-500">
                                                {item.title}
                                            </h3>
                                            <div className="h-px w-0 group-hover:w-12 bg-blue-600/30 transition-all duration-700" />
                                        </div>
                                        <p className="text-slate-500 font-light text-base leading-relaxed text-justify opacity-80 group-hover:opacity-100 transition-opacity duration-500 max-w-lg">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 4. Comparison Table */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-left mb-16">
                            <h2 className="mb-8 heading-pro-max text-left">
                                <span className="italic font-light text-[#2563eb] block">Comparez nos solutions</span>
                                <span className="font-bold text-[#1e3a8a] block">de filtration d'eau potable.</span>
                            </h2>
                            <div className="w-24 h-1 bg-blue-600"></div>
                        </div>
                        <div className="overflow-x-visible relative">
                            {/* Navigation Arrows for Mobile/Tablet */}
                            <div className="lg:hidden flex items-center justify-end gap-3 mb-8 relative z-30">
                                <Button 
                                    size="icon" 
                                    variant="outline" 
                                    className="w-10 h-10 rounded-full border-blue-100 hover:bg-blue-600 hover:text-white transition-all shadow-sm"
                                    onClick={() => setActiveCol(Math.max(0, activeCol - 1))}
                                    disabled={activeCol === 0}
                                >
                                    <ChevronLeft className="h-5 w-5" />
                                </Button>
                                <div className="flex gap-1.5 px-2">
                                    {[0, 1, 2].map((i) => (
                                        <div key={i} className={`h-1.5 rounded-full transition-all duration-300 ${i === activeCol ? 'w-6 bg-blue-600' : 'w-1.5 bg-blue-100'}`} />
                                    ))}
                                </div>
                                <Button 
                                    size="icon" 
                                    variant="outline" 
                                    className="w-10 h-10 rounded-full border-blue-100 hover:bg-blue-600 hover:text-white transition-all shadow-sm"
                                    onClick={() => setActiveCol(Math.min(2, activeCol + 1))}
                                    disabled={activeCol === 2}
                                >
                                    <ChevronRight className="h-5 w-5" />
                                </Button>
                            </div>

                            <div className="overflow-x-auto lg:overflow-x-visible no-scrollbar pb-8">
                                <table className="w-full border-collapse bg-white rounded-3xl overflow-hidden shadow-2xl relative">
                                    <thead>
                                        <tr className="bg-slate-50 relative z-20">
                                            <th className="p-6 md:p-10 text-left text-blue-900/40 font-black uppercase tracking-widest text-[10px] sticky left-0 bg-slate-50 z-30 border-r border-slate-100 drop-shadow-md lg:drop-shadow-none min-w-[160px] md:min-w-[200px]">
                                                Critères Techniques
                                            </th>
                                            {[
                                                { name: "Cristal Pro I", img: essentialImg, badge: "L'Essentiel", color: "bg-cyan-600" },
                                                { name: "Cristal Pro II", img: plusROImg, badge: "Le Plus Populaire", color: "bg-emerald-600" },
                                                { name: "Cristal Pro III", img: eliteROImg, badge: "Ultra-Protection", color: "bg-blue-600" },
                                            ].map((m, i) => (
                                                <th 
                                                    key={i} 
                                                    className={cn(
                                                        "p-4 md:p-6 text-center transition-all duration-500 min-w-[220px]",
                                                        i === activeCol ? "table-cell" : "hidden lg:table-cell"
                                                    )}
                                                >
                                                    <div className="flex flex-col items-center gap-6">
                                                        <div className="relative group/img">
                                                            <div className={`absolute -top-3 -right-12 z-20 ${m.color} text-white text-[8px] font-black uppercase tracking-[0.4em] px-3 py-1 rounded-full shadow-2xl whitespace-nowrap scale-90 md:scale-100`}>
                                                                {m.badge}
                                                            </div>
                                                            <div className="absolute inset-0 bg-blue-600 rounded-full blur-2xl opacity-0 group-hover/img:opacity-20 transition-opacity duration-700" />
                                                            <img
                                                                src={m.img}
                                                                alt={`Modèle ${m.name}`}
                                                                className="w-[140px] md:w-[160px] h-[100px] md:h-[130px] object-contain mx-auto mix-blend-multiply relative z-10 transition-transform duration-700 group-hover/img:scale-110"
                                                            />
                                                        </div>
                                                        <div className="text-[13px] md:text-lg font-bold text-[#1e3a8a] max-w-[150px] mx-auto leading-tight">{m.name}</div>
                                                    </div>
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100 relative z-10">
                                        {comparisonData.map((row, i) => (
                                            <tr key={i} className="hover:bg-blue-50/30 transition-colors group">
                                                <td className="p-6 md:p-10 font-bold text-[#1e3a8a] bg-white sticky left-0 z-30 border-r border-slate-50 drop-shadow-sm lg:drop-shadow-none text-[12px] md:text-sm italic group-hover:text-blue-600 transition-colors">
                                                    {row.feature}
                                                </td>
                                                {["essential", "plus", "elite"].map((model, idx) => (
                                                    <td 
                                                        key={model} 
                                                        className={cn(
                                                            "p-6 md:p-10 text-center text-[13px] md:text-sm font-light leading-relaxed text-slate-600 transition-all duration-500",
                                                            idx === activeCol ? "table-cell" : "hidden lg:table-cell"
                                                        )}
                                                    >
                                                        {(() => {
                                                            const val = row[model as keyof typeof row];
                                                            if (typeof val === 'string') return <span className="text-blue-600 font-bold bg-blue-50/50 px-4 py-1.5 rounded-full text-[10px] uppercase shadow-sm whitespace-nowrap">{val}</span>;
                                                            if (val === true) return <CheckCircle2 className="h-5 w-5 md:h-6 md:w-6 text-blue-600 mx-auto" />;
                                                            return <div className="h-5 w-5 md:h-6 md:w-6 mx-auto opacity-10"><X className="h-5 w-5 md:h-6 md:w-6" /></div>;
                                                        })()}
                                                    </td>
                                                ))}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5.Water Testing Section (Redesigned for Mobile) */}
                <section className="relative lg:h-[800px] flex flex-col lg:flex-row items-stretch overflow-hidden bg-white">
                    {/* Mobile Image */}
                    <div className="lg:hidden w-full h-auto relative bg-slate-50">
                        <img
                            src={waterTestingImg}
                            alt="Analyse d'eau à domicile pour détecter le calcaire et le chlore - Service Bricareau"
                            className="w-full h-auto object-contain"
                        />
                    </div>

                    {/* Desktop Background */}
                    <div className="hidden lg:block absolute inset-0 z-0">
                        <img
                            src={waterTestingImg}
                            alt="Analyse professionnelle"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/30 lg:bg-gradient-to-r lg:from-black/50 lg:to-transparent" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-white via-white/10 to-transparent" />
                    </div>

                    <div className="container mx-auto px-4 relative z-10 flex items-center py-12 lg:py-0">
                        <div className="max-w-2xl text-slate-900 lg:text-white">
                            <span className="text-blue-600 lg:text-blue-600 text-xs font-black uppercase tracking-[0.3em] mb-8 block">
                                TESTS D'EAU PROFESSIONNELS
                            </span>
                            <h2 className="mb-8 heading-pro-max text-left">
                                <span className="italic font-light text-[#1e3a8a] lg:text-white block">Identifiez l'invisible,</span>
                                <span className="text-[#1e3a8a] lg:text-white italic font-bold font-serif">maîtrisez la pureté de votre eau.</span>
                            </h2>
                            <p className="font-light text-black lg:text-white/95 mb-8 max-w-xl text-justify lg:text-left">
                                Ne laissez plus le doute couler de votre robinet. Nos tests d'eau révèlent la composition réelle de votre eau pour vous offrir une solution de filtration sur mesure, garantissant santé et sérénité à toute votre famille.
                            </p>
                            <div className="flex gap-4">
                                <Button asChild>
                                    <a href="/tests-eau">
                                        Demandez une analyse d'eau
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 6. Testimonials Section */}
                <TestimonialsSection
                    filterProduct="/Systemes-de-filtration-deau-sous-evier"
                 title={
                    <h2 className="mb-8 heading-pro-max text-center">
                        <span className="italic font-light text-[#2563eb] block text-center">Adieu les bouteilles plastiques,</span>
                        <span className="font-bold text-[#1e3a8a] block text-center">Enfin la liberté au robinet.</span>
                    </h2>
                 }
                />

                {/* 7. FAQ Section */}
                <section className="py-24 bg-white border-t border-slate-100">
                    <div className="container mx-auto px-4 text-left">
                        <div className="text-left mb-16">
                            <h2 className="mb-8 heading-pro-max text-left">
                                <span className="italic font-light text-[#2563eb] block">Pour vous éclairer</span>
                                <span className="font-bold text-[#1e3a8a] block">Questions fréquentes</span>
                            </h2>

                            <div className="w-24 h-1 bg-blue-600"></div>
                        </div>
                        <div className="max-w-4xl mx-auto">
                            <Accordion type="single" collapsible className="w-full">
                                {[
                                    {
                                        q: "Quels sont les avantages d'un système de filtration sous l'évier ?",
                                        a: "Il offre une eau de qualité embouteillée directement à votre robinet, élimine le goût et l'odeur de chlore, retire les métaux lourds et réduit drastiquement vos dépenses ainsi que votre empreinte plastique."
                                    },
                                    {
                                        q: "Quels problèmes d'eau ce système peut-il résoudre ?",
                                        a: "Il est particulièrement efficace contre le chlore, les sédiments, le plomb, le mercure, les résidus de pesticides, et les microplastiques, garantissant une eau saine pour boire et cuisiner."
                                    },
                                    {
                                        q: "Quelle est la différence entre un filtre standard et l'osmose inverse ?",
                                        a: "Un filtre standard réduit principalement le chlore et les sédiments. L'osmose inverse va plus loin en éliminant jusqu'à 99 % de tous les contaminants dissous grâce à une membrane semi-perméable ultra-fine."
                                    },
                                    {
                                        q: "À quelle fréquence faut-il remplacer les filtres ?",
                                        a: "Pour une performance optimale, les cartouches de pré-filtration et de post-filtration doivent être changées tous les 6 à 12 mois. La membrane d'osmose inverse peut durer de 2 à 4 ans."
                                    },
                                    {
                                        q: "Le système prend-il beaucoup de place sous l'évier ?",
                                        a: "Nos systèmes modernes sont très compacts. Ils occupent généralement moins de 25 % de l'espace de votre armoire sous l'évier, vous laissant de la place pour vos autres articles ménagers."
                                    },
                                    {
                                        q: "Puis-je l'utiliser pour mon réfrigérateur et ma machine à glaçons ?",
                                        a: "Absolument ! Nous pouvons raccorder votre système de filtration à votre frigo pour que vous profitiez d'une eau fraîche et de glaçons cristallins, sans aucun goût indésirable."
                                    },
                                ].slice(0, showAllFaqs ? undefined : 6).map((item, idx) => (
                                    <AccordionItem key={idx} value={`item-${idx}`} className="border-b-slate-100 px-4">
                                        <AccordionTrigger className="text-left text-base font-medium leading-6 hover:no-underline py-8 text-slate-800" style={{}}>
                                            {item.q}
                                        </AccordionTrigger>
                                        <AccordionContent className="text-base font-light leading-6 text-slate-500 pb-8 text-justify" style={{}}>
                                            {item.a}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                            <div className="mt-12 text-center">
                                            <Button
                                              onClick={() => setShowAllFaqs(!showAllFaqs)}
                                            >
                                              {showAllFaqs ? "Voir moins de questions" : "Voir toutes les questions"}
                                            </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 10. PREMIUM CTA SECTION - REBUILT FOR IMPACT */}
                <section className="relative py-32 flex items-center overflow-hidden bg-[#1e3a8a]">
                    {/* Animated background elements */}
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-600/20 to-transparent skew-x-12 translate-x-1/4" />
                    <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-cyan-400/10 to-transparent -skew-x-12 -translate-x-1/4" />
                    
                    {/* Background Image with Overlay */}
                    <div className="absolute inset-0 z-0 opacity-40">
                        <img
                            src={womandrinkingwaterImg}
                            alt="Problématique d'eau dure sur la robinetterie - Solution Bricareau"
                            className="w-full h-full object-cover grayscale brightness-150"
                        />
                        <div className="absolute inset-0 bg-[#1e3a8a]/10 backdrop-blur-sm" />
                    </div>

                    <div className="container mx-auto px-6 relative z-10">
                        <div className="max-w-5xl mx-auto text-center space-y-12">
                            <div className="space-y-6">
                                <span className="inline-block px-4 py-1.5 bg-white text-blue-600 rounded-full text-[10px] font-black uppercase tracking-[0.4em]">
                                    FINI LES BOUTEILLES EN PLASTIQUE
                                </span>
                                <h2 className="font-light block leading-tight lg:leading-[52px] text-white">
                                    Optez pour un filtre sous évier et savourez <br />
                                    <span className="text-white italic font-bold font-serif">une eau pure au robinet.</span>
                                </h2>
                                <p className="text-lg md:text-xl text-blue-100/80 max-w-2xl mx-auto font-light leading-relaxed">
                                    Passez au filtre sous évier et profitez d’une eau filtrée, savoureuse et économique directement à votre robinet. Contactez-nous pour une démonstration, une analyse d’eau ou un devis personnalisé. Installation rapide sous 48h disponible dans plusieurs régions !                                </p>
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


                {/* 9. Resources Section */}
                <section className="py-24 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="text-left mb-16">
                             <h2 className="mb-8 heading-pro-max text-left">
                                <span className="font-bold text-[#1e3a8a] block text-left">Ressources</span>
                            </h2>
                            <div className="w-24 h-1 bg-blue-600"></div>
                        </div>
                        <div 
                            ref={resourcesRef}
                            onScroll={handleScrollRessources}
                            className="flex lg:grid lg:grid-cols-3 gap-8 overflow-x-auto lg:overflow-x-visible no-scrollbar snap-x snap-mandatory pb-12 px-1 lg:px-0 scroll-smooth"
                        >
                            {resources.map((art, i) => (
                                <NavLink
                                    key={i}
                                    to={art.link || "#"}
                                    className="min-w-[70vw] md:min-w-[45vw] lg:min-w-0 snap-center group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full block cursor-pointer"
                                >
                                    <div className="h-56 overflow-hidden">
                                        <img
                                            src={art.img}
                                            alt={`${art.title} - Guide expert Bricareau sur la filtration sous évier`}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                    </div>
                                    <div className="p-8 text-left border-t-2 border-transparent group-hover:border-blue-600 transition-colors flex flex-col flex-grow">
                                        <h4 className="mb-4 group-hover:text-blue-600 transition-colors tracking-tight font-medium text-base leading-6 text-[#0F1729]">{art.title}</h4>
                                        <div className="mt-auto">
                                            <span className="text-blue-600 font-bold flex items-center gap-2 group-hover:underline text-sm">
                                                Lire <ChevronRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                                            </span>
                                        </div>
                                    </div>
                                </NavLink>
                            ))}
                        </div>

                        {/* Navigation arrows for carousel - Mobile/Tablet ONLY */}
                        <div className="lg:hidden flex items-center justify-center gap-4 mt-6 relative z-30">
                            <Button 
                                size="icon" 
                                className="w-12 h-12 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-all shadow-md shadow-blue-100"
                                onClick={() => scrollResources('left')}
                            >
                                <ChevronLeft className="h-6 w-6" />
                            </Button>
                            <Button 
                                size="icon" 
                                className="w-12 h-12 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-all shadow-md shadow-blue-100"
                                onClick={() => scrollResources('right')}
                            >
                                <ChevronRight className="h-6 w-6" />
                            </Button>

                            <div className="absolute right-2 text-sm font-black text-[#1e3a8a] bg-blue-50/50 px-4 py-2 rounded-full border border-blue-100/50">
                                <span className="text-blue-600">{resourceIndex}</span>
                                <span className="mx-1 text-slate-300">/</span>
                                <span className="text-slate-400">{resources.length}</span>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />

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
        </div>
    );
};

export default FiltrationSousEvier;
