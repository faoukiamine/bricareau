import React, { useEffect } from "react";
import Header from "@/components/Header";
import ExpertAvatars from "@/components/ExpertAvatars";
import GlobalBreadcrumbs from "@/components/GlobalBreadcrumbs";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import {
    ArrowRight,
    Droplets,
    Star,
    ChevronRight,
    Clock,
    Sparkles,
    Zap,
    Shirt,
    TrendingDown,
    Quote,
    ChevronLeft,
    Play,
    CircleDollarSign,
    Search,
    Trophy,
    Award,
    HandCoins,
    Phone,
    Check,
    X,
    Medal,
    CupSoda,
    Activity,
    HeartHandshake,
    BatteryLow,
    ShieldAlert,
    HeartPulse,
    ShieldCheck,
    Leaf,
    Wrench,
    CheckCircle2,
    Shield
} from "lucide-react";
import safetyIcon from "@/assets/1709235770048.png";
import { useNavigate } from "react-router-dom";
import { NavLink } from "@/components/NavLink";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from "@/components/ui/accordion";
import TestimonialsSection from "@/components/TestimonialsSection";
import ConsultationFormSection from "@/components/ConsultationFormSection";
import { cn } from "@/lib/utils";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";

import heroImg from "@/assets/african-girl-stands-kitchen-drinks-water.jpg";
import uvSystemImg2 from "@/assets/VH200-F10-265x300.jpg";
import uvSystemImg3 from "@/assets/VH410-F20-200x300.jpg";
import uvSystemImg4 from "@/assets/500x500_V-Arros-15-IHS-10_straight-1-300x300.jpg";
import waterTestingImg from "@/assets/Legionella-Monitoring.webp";
import { adoucisseurImg as adoucisseurFosseImg } from "./Blog pages/Adoucisseur-deau- et-fosse-septique--Mythes-et-réalités";
import { conditionneursImg } from "./Blog pages/Adoucisseur avec sel ou sans sel";
import { softenerImg as residentialWaterSoftenerImg } from "./Blog pages/Comment régler la dureté de votre adoucisseur ";
import waterSoftenerImg from "@/assets/Adoucisseurs d'eau.webp";
import drinkingWaterImg from "@/assets/Solutions d'eau potable.webp";
import specialFiltersImg from "@/assets/Filtres d'eau spécialisés.webp";
import personShieldSvg from "@/assets/person_shield.svg";
import resetWrenchSvg from "@/assets/reset_wrench.svg";
import uvSpectrumAbstractImg from "@/assets/uv-spectrum-abstract.png";
import stormVisualImg from "@/assets/pourquoi-est-ce-que-les-orages-produisent-des-eclairs-et-du-tonnerree28089-1-1690x1200.jpg";
import ourteamstudyyourwaterImg from "@/assets/10271.jpg";
import sterileWaterImg from "@/assets/1713.jpg";


const DesinfectionUV = () => {
    const navigate = useNavigate();
    const [showAllFaqs, setShowAllFaqs] = React.useState(false);
    const [activeCol, setActiveCol] = React.useState(1);

    const resourcesRef = React.useRef<HTMLDivElement>(null);

    const scrollResources = (direction: 'left' | 'right') => {
        if (resourcesRef.current) {
            const scrollAmount = resourcesRef.current.clientWidth * 0.8;
            resourcesRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
        }
    };

    const [resourceIndex, setResourceIndex] = React.useState(1);
    const resources = [
        {
            title: "Adoucisseur d'eau et fosse septique : compatible ou non ?",
            img: adoucisseurFosseImg,
            path: "/adoucisseur-deau-et-fosse-septique-mythes-et-realites"
        },
        {
            title: "Adoucisseur sans sel vs avec sel : la vérité technique",
            img: conditionneursImg,
            path: "/adoucisseur-sans-sel-vs-avec-sel-verite-technique"
        },
        {
            title: "Comment régler la dureté de votre adoucisseur ?",
            img: residentialWaterSoftenerImg,
            path: "/comment-regler-durete-adoucisseur-eau"
        }
    ];

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
        document.title = "Désinfection UV : Éliminez 99,99% des bactéries et virus";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Protection maximale contre les bactéries et virus. Nos systèmes UV éliminent 99,99% des micro-organismes sans produits chimiques.");
        }

        // OG Tags
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) ogTitle.setAttribute("content", "Désinfection UV : Sécurité microbiologique | Bricareau");
        const ogDesc = document.querySelector('meta[property="og:description"]');
        if (ogDesc) ogDesc.setAttribute("content", "Une eau potable sécuritaire pour toute votre famille. Découvrez nos solutions de stérilisation UV haute performance.");
    }, []);


    const comparisonData = [


        { feature: "Élimination 99.99% des virus", VH410F20: true, VH200F10: true, Arros15IHS10: true },
        { feature: "Destruction des bactéries", VH410F20: true, VH200F10: true, Arros15IHS10: true },
        { feature: "Neutralisation des kystes", VH410F20: true, VH200F10: true, Arros15IHS10: true },
        { feature: "Alarme de remplacement de lampe", VH410F20: true, VH200F10: true, Arros15IHS10: true },
        { feature: "Capteur d'intensité UV", VH410F20: false, VH200F10: false, Arros15IHS10: true },
        { feature: "Garantie à vie sur la chambre", VH410F20: true, VH200F10: true, Arros15IHS10: true },
    ];

    return (
        <div className="min-h-screen bg-background text-slate-900 font-sans">
            <Header />
            <main>
                <Hero 
                    image={heroImg}
                    highlightedTitle="Systèmes de désinfection UV,"
                    mainTitle="zéro produit chimique, 100% de protection."
                    subtitle="Éliminez 99,99% des bactéries, virus et kystes de votre eau de puits ou municipale sans aucun additif chimique. Assurez une pureté microbiologique totale pour la sécurité de votre famille à chaque robinet."
                    showPhone={true}
                    showBreadcrumbs={true}
                    singleLineTitle={true}
                />

                {/* 3. Why choose UV disinfection? */}
                <section className="py-24 lg:py-32 bg-slate-50 relative overflow-hidden">
                    {/* UV Spectral Background Layer */}
                    <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
                        {/* Integrated UV Spectrum Image - Provides the core visual anchor */}
                        <div className="absolute inset-0 opacity-[0.18] pointer-events-none">
                            <img
                                src={uvSpectrumAbstractImg}
                                alt=""
                                className="w-full h-full object-cover blur-2xl scale-110"
                            />
                        </div>

                        {/* Base Spectral Glows - Enhances the image depth */}
                        <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] bg-[radial-gradient(circle,rgba(99,102,241,0.12)_0%,transparent_70%)] blur-[120px]" />
                        <div className="absolute bottom-[-20%] right-[-10%] w-[80%] h-[80%] bg-[radial-gradient(circle,rgba(167,139,250,0.15)_0%,transparent_70%)] blur-[140px]" />

                        {/* Linear Spectral Beams (Anamorphic) - Adds procedural light energy */}
                        <div className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-400/20 to-transparent -rotate-12 blur-[1px]" />
                        <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-indigo-500/10 to-transparent rotate-6 blur-[2px]" />
                        <div className="absolute bottom-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-400/10 to-transparent -rotate-3 blur-[1px]" />

                        {/* Spectral "Prism" Overlay */}
                        <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent,rgba(59,130,246,0.03)_20%,rgba(139,92,246,0.05)_40%,rgba(217,70,239,0.03)_60%,transparent)] opacity-40 mix-blend-overlay" />
                    </div>

                    <div className="container mx-auto px-6 relative z-10">
                        <div className="max-w-3xl mx-auto text-center mb-20">
                            <span className="inline-block px-4 py-1.5 bg-blue-600/10 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                                TRAITEMENT d'EAU POTABLE SANS CHLORE
                            </span>
                             <h2 className="mb-8 heading-pro-max text-center">
                                 <span className="italic font-light text-[#2563eb] block text-center">Pourquoi choisir la</span>
                                 <span className="font-bold text-[#1e3a8a] block text-center">désinfection UV ?</span>
                             </h2>
                             <p className="body-pro-max text-slate-500 max-w-2xl mx-auto text-center">
                                 Une technologie de pointe qui neutralise les pathogènes par rayonnement, offrant une eau pure sans aucun compromis chimique.
                             </p>
                        </div>

                        <div className="relative">
                            {/* Central "UV Ray" Visual Anchor (Desktop only) */}
                            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-200 to-transparent -translate-x-1/2 opacity-60" />

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 lg:gap-x-32 gap-y-16 lg:gap-y-0 relative">
                                {[
                                    { icon: Leaf, title: "Sans produits chimiques", desc: "Aucun goût ni odeur de chlore. Les rayons UV agissent physiquement sur les pathogènes, préservant la pureté originelle de votre eau sans aucun additif chimique." },
                                    { icon: Zap, title: "Action instantanée", desc: "Contrairement au chlore qui nécessite un temps de contact, les UV désinfectent l'eau dès qu'elle traverse la chambre de traitement." },
                                    { icon: Award, title: "Efficacité prouvée", desc: "Le rayonnement UV-C pénètre instantanément l'ADN des micro-organismes, les rendant inoffensifs et incapables de se reproduire." },
                                    {
                                        iconSrc: personShieldSvg,
                                        isSvg: true,
                                        title: "Sécurité absolue",
                                        desc: "Une barrière infranchissable contre les bactéries, virus et kystes (Cryptosporidium), même ceux résistants aux désinfectants classiques."
                                    },
                                    { icon: CupSoda, title: "Goût préservé", desc: "Votre eau conserve toutes ses propriétés minérales et son goût naturel frais, sans les sous-produits toxiques liés au chlore." },
                                    { icon: ShieldCheck, title: "Zéro risque", desc: "Pas de manipulation ni de stockage de produits chimiques dangereux chez vous. Une solution propre, saine et sans danger pour l'environnement." },
                                    { icon: BatteryLow, title: "Éco-Énergétique", desc: "Une protection permanente 24h/24 qui consomme aussi peu d'énergie qu'une simple ampoule domestique standard." },
                                    {
                                        iconSrc: resetWrenchSvg,
                                        isSvg: true,
                                        title: "Entretien minimal",
                                        desc: "Conçu pour la simplicité. Un changement de lampe annuel suffit pour garantir une performance optimale et une sécurité constante."
                                    },
                                ].map((benefit, i) => (
                                    <div
                                        key={i}
                                        className={`group relative flex flex-col md:flex-row items-start lg:items-center gap-6 lg:gap-8 ${i % 2 === 0 ? 'lg:justify-end lg:text-right' : 'lg:justify-start lg:text-left'
                                            } ${
                                            // Stagger effect on desktop
                                            i % 2 !== 0 ? 'lg:translate-y-32' : ''
                                            } lg:mb-40 transition-all duration-700`}
                                    >
                                        {/* Content container for better alignment */}
                                        <div className={`flex flex-col ${i % 2 === 0 ? 'lg:items-end' : 'lg:items-start'} max-w-md`}>
                                            <div className={`w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-6 text-blue-600 group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110 transition-all duration-500 shadow-[0_0_20px_rgba(37,99,235,0.1)] overflow-hidden`}>
                                                {benefit.isSvg ? (
                                                    <div
                                                        className="w-6 h-6 bg-current"
                                                        style={{
                                                            maskImage: `url("${benefit.iconSrc}")`,
                                                            WebkitMaskImage: `url("${benefit.iconSrc}")`,
                                                            maskRepeat: 'no-repeat',
                                                            WebkitMaskRepeat: 'no-repeat',
                                                            maskPosition: 'center',
                                                            WebkitMaskPosition: 'center',
                                                            maskSize: 'contain',
                                                            WebkitMaskSize: 'contain'
                                                        }}
                                                    />
                                                ) : (
                                                    <benefit.icon className="h-6 w-6" />
                                                )}
                                            </div>
                                            <h3 className="card-title mb-4 group-hover:text-blue-600 transition-colors">
                                                {benefit.title}
                                            </h3>
                                             <p className={`body-pro-max text-slate-500 text-justify md:text-inherit ${i % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                                                 {benefit.desc}
                                             </p>
                                        </div>

                                        {/* Connecting "Glow Node" on the central line (Desktop only) */}
                                        <div className={`hidden lg:block absolute top-1/2 w-4 h-4 rounded-full bg-blue-100 border-2 border-white shadow-sm transition-all duration-500 group-hover:bg-blue-600 group-hover:scale-125 group-hover:shadow-[0_0_15px_rgba(37,99,235,0.5)] ${i % 2 === 0 ? '-right-16 lg:-right-[68px]' : '-left-16 lg:-left-[68px]'
                                            } -translate-y-1/2`} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3.5. Pathogen Neutralization - Redesigned section */}
                <section className="relative py-32 flex items-center overflow-hidden bg-slate-950">
                    {/* Cinematic Background */}
                    <div className="absolute inset-0 z-0">
                        <img 
                            src={stormVisualImg} 
                            alt="Force énergétique UV - Bricareau" 
                            className="w-full h-full object-cover opacity-40 animate-pulse-slow"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/60 to-transparent" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(37,99,235,0.05)_0%,transparent_50%)]" />
                        
                        {/* Abstract procedural rays */}
                        <div className="absolute inset-0 overflow-hidden mix-blend-screen opacity-20">
                            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-blue-400 rotate-12 blur-md" />
                            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-indigo-500 -rotate-12 blur-md" />
                        </div>
                    </div>

                    <div className="container mx-auto px-6 relative z-10">
                        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
                            {/* Content Column */}
                            <div className="space-y-10 order-1">
                                <div className="space-y-6">
                                    <h2 className="heading-pro-max text-white">
                                        Éliminez l'invisible : <br />
                                        <span className="text-blue-400 italic font-bold font-serif whitespace-nowrap">Protection contre 99,99%.</span>
                                    </h2>
                                    <p className="text-lg text-slate-300 font-light leading-relaxed max-w-xl">
                                        Votre eau peut sembler cristalline tout en abritant des micro-organismes nocifs. Nos rayons UV-C ciblent le cœur des contaminants pour les rendre inoffensifs en une fraction de seconde, sans produits chimiques.
                                    </p>
                                </div>

                                {/* Pathogens Grid */}
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                    {[
                                        { name: "E. Coli", level: "99.99%" },
                                        { name: "Giardia", level: "99.99%" },
                                        { name: "Salmonelle", level: "99.99%" },
                                        { name: "Légionelle", level: "99.99%" },
                                        { name: "Hépatite A", level: "99.99%" },
                                        { name: "Cryptosporidium", level: "99.99%" }
                                    ].map((p, i) => (
                                        <div key={i} className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm group hover:bg-white/10 hover:border-blue-500/50 transition-all duration-500">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)]" />
                                            <div>
                                                <div className="text-[12px] font-bold text-white group-hover:text-blue-400 transition-colors uppercase tracking-wider">{p.name}</div>
                                                <div className="text-[9px] font-black tracking-widest text-blue-400/60 uppercase">{p.level}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Mobile/Tablet only Barrière Active block */}
                                <div className="lg:hidden p-8 rounded-[2.5rem] bg-gradient-to-br from-blue-600/20 to-indigo-900/30 border border-white/10 backdrop-blur-xl">
                                    <div className="flex flex-col items-center text-center space-y-6">
                                        <div className="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center shadow-xl">
                                            <ShieldCheck className="w-8 h-8 text-white" />
                                        </div>
                                        <div>
                                            <div className="text-3xl font-black text-white tracking-tighter mb-2 italic uppercase">BARRIÈRE ACTIVE</div>
                                            <p className="text-blue-100/60 font-light leading-relaxed text-sm italic">
                                                "Une puissance de rayonnement UV-C certifiée pour garantir une eau sécuritaire à chaque litre consommé, protégeant votre famille des menaces invisibles."
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-6 flex flex-col sm:flex-row gap-8 items-center border-t border-white/10">
                                    <Button asChild className="w-full sm:w-auto">
                                        <a href="/consultation">Évaluer la sécurité de mon eau</a>
                                    </Button>
                                </div>
                            </div>

                            {/* Impact Column (Desktop only) */}
                            <div className="hidden lg:block lg:pl-12 order-2">
                                <div className="relative p-12 rounded-[4rem] bg-gradient-to-br from-blue-600/20 to-indigo-900/30 border border-white/10 backdrop-blur-xl shadow-2xl overflow-hidden group">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-[60px]" />
                                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-500/10 blur-[60px]" />
                                    
                                    <div className="relative z-10 space-y-8 text-center lg:text-left">
                                        <div className="w-20 h-20 rounded-3xl bg-blue-600 flex items-center justify-center mx-auto lg:mx-0 rotate-3 group-hover:rotate-6 transition-transform duration-700 shadow-2xl">
                                            <ShieldCheck className="w-10 h-10 text-white" />
                                        </div>
                                        <div>
                                            <div className="text-5xl font-black text-white tracking-tighter mb-2 italic">BARRIÈRE ACTIVE</div>
                                            <p className="text-blue-100/60 font-light leading-relaxed text-lg italic">
                                                "Une puissance de rayonnement UV-C certifiée pour garantir une eau sécuritaire à chaque litre consommé, protégeant votre famille des menaces invisibles."
                                            </p>
                                        </div>
                                        <div className="flex justify-center lg:justify-start gap-2 h-1 bg-white/5 rounded-full overflow-hidden">
                                            <div className="w-1/3 bg-blue-500 animate-[loading_2s_ease-in-out_infinite]" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. UV Systems - Product Grid */}
                <section id="systemes-uv" className="py-24 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="text-left mb-16">
                            <h2 className="mb-8 heading-pro-max text-left">
                                <span className="italic font-light text-[#2563eb] block">Nos systèmes de</span>
                                <span className="font-bold text-[#1e3a8a] block">désinfection UV</span>
                            </h2>
                            <div className="w-24 h-1 bg-blue-600 mb-12"></div>

                            <p className="body-pro-max text-slate-600 text-left lg:text-justify max-w-7xl mx-auto">
                                La technologie UV est le choix idéal pour les consommateurs qui cherchent à se protéger contre les contaminants microbiologiques, notamment les bactéries (E.coli, coliformes fécaux, etc.), les virus et les protozoaires (cryptosporidium, giardia, etc.) qui peuvent être résistants au chlore. Contrairement aux traitements chimiques, les UV ne modifient pas le goût, l’odeur ou la composition physico-chimique de l’eau. Nos dispositifs UV mis en place sur le point d’entrée (POE) est installé avant que l’eau ne soit distribuée dans les foyers, au niveau de la conduite d’alimentation principale, avant qu’elle ne circule dans l’ensemble du réseau domestique.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
                            {[
                                { name: "VH200-F10", desc: "Préfiltration UV intégrée pour toute la maison\nIdéal pour : bactéries, turbidité/opacité.\nDébit : 9 gpm.", img: uvSystemImg2 },
                                { name: "VH410-F20", desc: "Préfiltration UV intégrée pour toute la maison\nIdéal pour : bactéries, turbidité/eau trouble.\nDébit : 18 gpm.", img: uvSystemImg3 },
                                { name: "Arros 15-IHS10", desc: "Système de traitement d'eau UV pour toute la maison\nIdéal pour : bactéries, turbidité/opacité.\nDébit : 15 gpm.", img: uvSystemImg4 }
                            ].map((prod, i) => (
                                <div
                                    key={i}
                                    className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full cursor-pointer"
                                    onClick={() => window.location.href = "/contact"}
                                >
                                    <div className="relative h-80 overflow-hidden bg-slate-50 flex items-center justify-center p-12">
                                        <img
                                            src={prod.img}
                                            alt={`${prod.name} - Système de désinfection UV Bricareau pour toute la maison`}
                                            className="max-h-full object-contain group-hover:scale-110 transition-transform duration-700 mix-blend-multiply"
                                        />
                                    </div>
                                    <div className="p-8 space-y-4 flex flex-col flex-grow border-t-2 border-transparent group-hover:border-blue-600 transition-colors">
                                        <h3
                                            className="card-title group-hover:text-blue-600 transition-colors text-center"
                                        >
                                            {prod.name}
                                        </h3>
                                        <p className="body-pro-max text-slate-500 flex-grow text-left lg:text-justify whitespace-pre-line">
                                            {prod.desc}
                                        </p>
                                        <div
                                            className="inline-flex items-center gap-2 text-blue-600 font-bold text-xs tracking-widest uppercase mt-4 group-hover:underline self-end"
                                            style={{}}
                                        >
                                            <span></span>
                                            <ArrowRight className="h-6 w-6 transform group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 5. Comparison Table */}
                <section className="py-24 bg-white border-t border-slate-50 relative overflow-hidden">
                    <div className="container mx-auto px-4">
                        <div className="text-left mb-16">
                            <h2 className="mb-8 heading-pro-max text-left">
                                <span className="italic font-light text-[#2563eb] block">Comparez nos systèmes</span>
                                <span className="font-bold text-[#1e3a8a] block">de stérilisation UV</span>
                            </h2>
                            <div className="w-24 h-1 bg-blue-600"></div>
                        </div>

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
                                        <th className="p-6 md:p-8 text-left text-blue-900/40 font-black uppercase tracking-widest text-[10px] sticky left-0 bg-slate-50 z-[35] border-r border-slate-100 drop-shadow-md lg:drop-shadow-none min-w-[160px] md:min-w-[200px]">
                                            Modèle
                                        </th>
                                        {[
                                            { name: "VH200-F10", img: uvSystemImg2, badge: null, color: "bg-blue-600" },
                                            { name: "VH410-F20", img: uvSystemImg3, badge: "Choix des Familles", color: "bg-blue-600" },
                                            { name: "Arros 15-IHS10", img: uvSystemImg4, badge: "Nouveau", color: "bg-emerald-600" }
                                        ].map((m, i) => (
                                            <th 
                                                key={m.name} 
                                                className={cn(
                                                    "p-4 md:p-6 text-center transition-all duration-500 min-w-[200px] lg:min-w-0",
                                                    i === activeCol ? "table-cell" : "hidden lg:table-cell"
                                                )}
                                            >
                                                <div className="flex flex-col items-center gap-4 group py-4">
                                                    <div className="relative">
                                                        {m.badge && (
                                                            <div className={`absolute -top-3 -right-6 z-20 ${m.color} text-white text-[8px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full shadow-lg whitespace-nowrap scale-90 md:scale-100`}>
                                                                {m.badge}
                                                            </div>
                                                        )}
                                                        <img
                                                            src={m.img}
                                                            alt={`Modèle ${m.name} - Stérilisateur d'eau UV haute performance Bricareau`}
                                                            className="w-[120px] md:w-[140px] h-[100px] md:h-[120px] object-contain mx-auto mix-blend-multiply group-hover:scale-110 transition-transform duration-700 relative z-10"
                                                        />
                                                    </div>
                                                    <span className="text-sm font-bold text-[#1e3a8a] uppercase tracking-wider">{m.name}</span>
                                                </div>
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100 relative z-10">
                                    {comparisonData.map((row, i) => (
                                        <tr key={i} className="hover:bg-slate-50/50 transition-colors group">
                                            <td className="p-6 md:p-8 font-medium text-slate-700 bg-white sticky left-0 z-30 border-r border-slate-50 drop-shadow-sm lg:drop-shadow-none text-sm md:text-base">
                                                {row.feature}
                                            </td>
                                            <td className={cn(
                                                "p-6 md:p-8 text-center transition-all duration-500",
                                                activeCol === 0 ? "table-cell" : "hidden lg:table-cell"
                                            )}>
                                                {typeof row.VH200F10 === 'string' ? <span className="text-blue-600 font-bold bg-blue-50/50 px-3 py-1.5 rounded-full text-[10px] md:text-[11px]">{row.VH200F10}</span> : (row.VH200F10 ? <CheckCircle2 className="h-6 w-6 text-blue-600 mx-auto" /> : null)}
                                            </td>
                                            <td className={cn(
                                                "p-6 md:p-8 text-center transition-all duration-500 bg-blue-50/10 lg:bg-transparent",
                                                activeCol === 1 ? "table-cell" : "hidden lg:table-cell"
                                            )}>
                                                {typeof row.VH410F20 === 'string' ? <span className="text-blue-600 font-bold bg-blue-50/50 px-3 py-1.5 rounded-full text-[10px] md:text-[11px]">{row.VH410F20}</span> : (row.VH410F20 ? <CheckCircle2 className="h-6 w-6 text-blue-600 mx-auto" /> : null)}
                                            </td>
                                            <td className={cn(
                                                "p-6 md:p-8 text-center transition-all duration-500",
                                                activeCol === 2 ? "table-cell" : "hidden lg:table-cell"
                                            )}>
                                                {typeof row.Arros15IHS10 === 'string' ? <span className="text-blue-600 font-bold bg-blue-50/50 px-3 py-1.5 rounded-full text-[10px] md:text-[11px]">{row.Arros15IHS10}</span> : (row.Arros15IHS10 ? <CheckCircle2 className="h-6 w-6 text-blue-600 mx-auto" /> : null)}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* 6.Water Testing Section (Redesigned for Mobile) */}
                <section className="relative lg:h-[800px] flex flex-col lg:flex-row items-stretch overflow-hidden bg-white">
                    {/* Mobile Image */}
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
                            alt="Analyse microbiologique"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/30 lg:bg-gradient-to-r lg:from-black/50 lg:to-transparent" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-white via-white/10 to-transparent" />
                    </div>

                    <div className="container mx-auto px-4 relative z-10 flex items-center py-12 lg:py-0">
                        <div className="max-w-2xl text-slate-900 lg:text-white">
                            <span className="text-blue-600 lg:text-blue-600 text-xs font-black uppercase tracking-[0.3em] mb-8 block">
                                Contrôle de la Qualité D'EAU
                            </span>
                            <h2 className="mb-8 heading-pro-max text-left">
                                <span className="italic font-light text-[#1e3a8a] lg:text-white block">Des tests d'eau précis</span>
                                <span className="text-[#1e3a8a] lg:text-white italic font-bold font-serif">pour une tranquillité d'esprit totale.</span>
                            </h2>
                            <p className="font-light text-black lg:text-white/95 mb-8 max-w-xl text-left lg:text-justify">
                                Ne devinez pas la qualité de votre eau. Nos analyses approfondies identifient les bactéries, les minéraux et les contaminants chimiques pour vous offrir une tranquillité d'esprit totale.
                            </p>
                            <div className="flex gap-4">
                                <Button
                                    asChild
                                >
                                    <a href="/tests-eau">Demandez une analyse d'eau</a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 7. Testimonials Section */}
                <TestimonialsSection
                    filterProduct="/Systemes-de-desinfection-UV"
                    title={
                        <>
                            <span className="italic font-light text-[#2563eb] block text-center">Zéro bactérie,</span>
                            <span className="font-bold text-[#1e3a8a] block text-center">100 % sérénité.</span>
                        </>
                    }
                />
                {/* 8. Section Associated Products */}
                <section className="bg-white py-24">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="mb-8 heading-pro-max text-center">
                                <span className="font-bold text-[#1e3a8a] block text-center">Découvrez les produits associés.</span>
                            </h2>
                            <p className="body-pro-max text-gray-500 max-w-2xl mx-auto text-center">
                                Optimisez votre expérience de traitement d'eau avec nos solutions complémentaires.
                            </p>
                        </div>

                        {/* Desktop Grid (lg+) */}
                        <div className="hidden lg:grid grid-cols-3 gap-8">
                            {[
                                {
                                    name: "Systèmes de filtration d'eau spécialisés",
                                    desc: "Nos filtres spécialisés sont conçus pour cibler et éliminer efficacement les contaminants spécifiques de votre eau de puits.",
                                    img: specialFiltersImg,
                                    link: "/Filtres-deau"
                                },
                                {
                                    name: "Adoucisseurs d'eau",
                                    desc: "Éliminez le calcaire pour une peau douce, un linge éclatant et une protection durable de vos installations.",
                                    img: waterSoftenerImg,
                                    link: "/adoucisseurs-eau-de-puits"
                                },
                                {
                                    name: "Stations d'eau potable",
                                    desc: "Une eau de qualité minérale directement à votre évier, pour une hydratation pure et sans déchets plastiques.",
                                    img: drinkingWaterImg,
                                    link: "/systeme-de-filtration-deau-potable"
                                }
                            ].map((prod, i) => (
                                <div
                                    key={i}
                                    className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full cursor-pointer"
                                    onClick={() => window.location.href = prod.link}
                                >
                                    <div className="relative h-80 overflow-hidden bg-slate-50 flex items-center justify-center p-12">
                                        <img
                                            src={prod.img}
                                            alt={`${prod.name} - Solution Bricareau`}
                                            className="max-h-full object-contain group-hover:scale-110 transition-transform duration-700 mix-blend-multiply"
                                        />
                                    </div>
                                    <div className="p-8 space-y-4 flex flex-col flex-grow border-t-2 border-transparent group-hover:border-blue-600 transition-colors">
                                        <h3 className="card-title group-hover:text-blue-600 transition-colors text-center">{prod.name}</h3>
                                        <p className="body-pro-max text-slate-500 flex-grow text-left lg:text-justify">{prod.desc}</p>
                                        <div className="inline-flex items-center gap-2 text-blue-600 font-bold text-xs tracking-widest uppercase mt-4 group-hover:underline self-end">
                                            <ArrowRight className="h-6 w-6 transform group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Mobile/Tablet Carousel (under lg) */}
                        <div className="lg:hidden">
                            <Carousel
                                opts={{
                                    align: "start",
                                    loop: false
                                }}
                                className="w-full"
                            >
                                <CarouselContent className="-ml-4 pb-8">
                                    {[
                                        {
                                            name: "Systèmes de filtration d'eau spécialisés",
                                            desc: "Nos filtres spécialisés sont conçus pour cibler et éliminer efficacement les contaminants spécifiques.",
                                            img: specialFiltersImg,
                                            link: "/Filtres-deau"
                                        },
                                        {
                                            name: "Adoucisseurs d'eau",
                                            desc: "Éliminez le calcaire pour une peau douce et un linge éclatant.",
                                            img: waterSoftenerImg,
                                            link: "/adoucisseurs-eau-de-puits"
                                        },
                                        {
                                            name: "Stations d'eau potable",
                                            desc: "Une eau de qualité minérale directement à votre évier.",
                                            img: drinkingWaterImg,
                                            link: "/systeme-de-filtration-deau-potable"
                                        }
                                    ].map((prod, i) => (
                                        <CarouselItem key={i} className="pl-4 basis-[80%] md:basis-[45%]">
                                            <div
                                                className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm flex flex-col h-full cursor-pointer"
                                                onClick={() => window.location.href = prod.link}
                                            >
                                                <div className="relative h-64 overflow-hidden bg-slate-50 flex items-center justify-center p-8">
                                                    <img
                                                        src={prod.img}
                                                        alt={prod.name}
                                                        className="max-h-full object-contain mix-blend-multiply"
                                                    />
                                                </div>
                                                <div className="p-8 space-y-4 flex flex-col flex-grow border-t-2 border-transparent transition-all">
                                                    <h3 className="card-title text-[#1e3a8a]">{prod.name}</h3>
                                                    <p className="body-pro-max text-slate-500 flex-grow">{prod.desc}</p>
                                                    <div className="self-end">
                                                        <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                                                            <ArrowRight className="h-5 w-5" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                            </Carousel>
                        </div>
                    </div>
                </section>


                {/* 9. FAQ Section */}
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
                                        q: "Qu'est-ce qu'un système de désinfection UV ?",
                                        a: "C'est un dispositif qui utilise la lumière ultraviolette (UV-C) pour neutraliser les micro-organismes nocifs dans l'eau. En pénétrant l'ADN des bactéries et virus, les rayons UV les empêchent de se reproduire et de causer des maladies."
                                    },
                                    {
                                        q: "Contre quels types de contaminants les UV sont-ils efficaces ?",
                                        a: "Les systèmes UV éliminent 99,99 % des micro-organismes, y compris les bactéries comme E. coli, les virus, et les parasites résistants au chlore comme Giardia et Cryptosporidium."
                                    },
                                    {
                                        q: "L'eau de puits nécessite-t-elle toujours un système UV ?",
                                        a: "Les puits sont vulnérables aux infiltrations de surface après de fortes pluies ou la fonte des neiges. Un système UV offre une barrière de sécurité permanente contre les variations soudaines de la qualité microbiologique de votre eau."
                                    },
                                    {
                                        q: "Quels sont les avantages des UV par rapport au chlore ?",
                                        a: "Les UV ne nécessitent aucun produit chimique, ne changent pas le goût ou l'odeur de l'eau, et ne créent pas de sous-produits toxiques. C'est la méthode de désinfection la plus écologique et la plus saine."
                                    },
                                    {
                                        q: "Pourquoi ai-je besoin d'un système UV si j'ai un adoucisseur ?",
                                        a: "Un adoucisseur élimine les minéraux (calcaire), mais n'élimine pas les bactéries ou les virus. Le système UV est la protection finale qui assure que l'eau que vous buvez ne contient aucun micro-organisme vivant."
                                    },
                                    {
                                        q: "À quelle fréquence faut-il changer la lampe UV ?",
                                        a: "La lampe UV doit être remplacée tous les 12 mois (environ 9 000 heures). Même si elle s'allume encore, son intensité germicide diminue drastiquement après un an et ne garantit plus la désinfection."
                                    },
                                    {
                                        q: "Qu'est-ce que le fourreau de quartz et comment l'entretenir ?",
                                        a: "Le fourreau de quartz est le tube transparent qui protège la lampe de l'eau. Il doit être nettoyé régulièrement pour rester limpide. S'il est entartré ou opaque (à cause du calcaire), les rayons UV ne peuvent plus traverser pour désinfecter l'eau."
                                    },
                                    {
                                        q: "Une filtration préalable est-elle nécessaire avant l'UV ?",
                                        a: "Oui, il est crucial d'installer un filtre à sédiments de 5 microns en amont. Les particules en suspension peuvent créer des zones d'ombre où les bactéries se 'cachent' du rayonnement UV."
                                    },
                                    {
                                        q: "Le système UV fonctionne-t-il lors d'une panne de courant ?",
                                        a: "Non, la lampe s'éteint sans électricité. En cas de panne, il ne faut pas consommer l'eau ou alors il faut la faire bouillir. Nos systèmes sont souvent équipés d'alarmes pour avertir de l'arrêt de la lampe."
                                    },
                                    {
                                        q: "L'UV consomme-t-il beaucoup d'électricité ?",
                                        a: "Non, un système résidentiel standard consomme à peu près autant d'énergie qu'une ampoule de 40 à 60 watts. C'est une solution très économique pour une protection 24h/24."
                                    },
                                    {
                                        q: "Peut-on installer un système UV sur l'entrée d'eau de la ville ?",
                                        a: "Bien que l'eau municipale soit traitée, de vieilles infrastructures ou des bris d'aqueduc peuvent introduire des bactéries. Un système UV domestique sert d'assurance supplémentaire pour votre tranquillité d'esprit."
                                    },
                                    {
                                        q: "Comment savoir si mon système UV fonctionne correctement ?",
                                        a: "Nos contrôleurs intelligents affichent le nombre de jours restants avant le changement de lampe et émettent une alarme sonore et visuelle en cas de défaillance de la lampe ou du système."
                                    },
                                    {
                                        q: "La chaleur de la lampe affecte-t-elle l'eau ?",
                                        a: "Si l'eau ne circule pas pendant plusieurs heures, l'eau à l'intérieur de la chambre d'acier inoxydable peut devenir tiède. Il suffit de laisser couler l'eau quelques secondes pour retrouver une eau fraîche."
                                    },
                                    {
                                        q: "Quelle est la garantie sur les systèmes UV Bricareau ?",
                                        a: "Nos systèmes sont couverts par une garantie robuste sur la chambre de traitement en acier inoxydable (souvent 10 ans) et sur les composantes électriques et électroniques."
                                    },
                                    {
                                        q: "Dois-je faire tester mon eau après l'installation ?",
                                        a: "Oui, nous recommandons toujours un test bactériologique professionnel après l'installation et une désinfection initiale de la tuyauterie pour confirmer que tout le réseau domestique est sain."
                                    }
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

                {/* 11. PREMIUM CTA SECTION - REBUILT FOR IMPACT */}
                <section className="relative py-32 flex items-center overflow-hidden bg-[#1e3a8a]">
                  {/* Animated background elements */}
                  <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-600/20 to-transparent skew-x-12 translate-x-1/4" />
                  <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-cyan-400/10 to-transparent -skew-x-12 -translate-x-1/4" />
                  
                  {/* Background Image with Overlay */}
                  <div className="absolute inset-0 z-0 opacity-40">
                    <img
                      src={sterileWaterImg}
                      alt="Expert Bricareau analysant vos options de filtration"
                      className="w-full h-full object-cover grayscale brightness-150"
                    />
                    <div className="absolute inset-0 bg-[#1e3a8a]/10 backdrop-blur-sm" />
                  </div>

                  <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-5xl mx-auto text-center space-y-12">
                      <div className="space-y-6">
                        <span className="inline-block px-4 py-1.5 bg-white text-blue-600 rounded-full text-[10px] font-black uppercase tracking-[0.4em]">
                          LA PROTECTION ULTIME CONTRE LES BACTÉRIES
                        </span>
                        <h2 className="heading-pro-max text-white">
                          Éliminez 99,99 % des virus et des bactéries <br />
                          <span className="text-white italic font-bold font-serif">avec la stérilisation UV.</span>
                        </h2>
                        <p className="text-lg md:text-xl text-blue-100/80 max-w-2xl mx-auto font-light leading-relaxed">
                          Ne faites aucun compromis sur la sécurité de votre famille. Nos systèmes de désinfection ultraviolette neutralisent instantanément les micro-organismes nocifs, sans ajout de produits chimiques.                        </p>
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

                {/* 10. Resources Section */}
                <section className="py-24 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="text-left mb-16">
                            <h2 className="mb-8 heading-pro-max text-left">
                                <span className="font-bold text-[#1e3a8a] block">Ressources</span>
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
                                    className="min-w-[70vw] md:min-w-[45vw] lg:min-w-0 snap-center bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer group flex flex-col h-full border border-gray-100"
                                    onClick={() => navigate(art.path)}
                                >
                                    <div className="h-56 overflow-hidden">
                                        <img src={art.img} alt={`${art.title} - Guide expert Bricareau sur la désinfection UV`} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                                    </div>
                                    <div className="p-8 text-left border-t-2 border-transparent group-hover:border-blue-600 transition-colors flex flex-col flex-grow">
                                        <h4 className="mb-4 group-hover:text-blue-600 transition-colors tracking-tight font-medium text-base leading-6 text-[#0F1729]">{art.title}</h4>
                                        <div className="mt-auto">
                                            <NavLink to={art.path} className="text-blue-600 font-bold flex items-center gap-2 group-hover:underline text-sm">
                                                Lire <ChevronRight className="h-4 w-4" />
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
                            </div>
                            
                            <div className="absolute right-2 text-sm font-black text-[#1e3a8a] bg-blue-50/50 px-4 py-2 rounded-full border border-blue-100/50">
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

export default DesinfectionUV;
