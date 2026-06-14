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
    CheckCircle,
    Shield,
    Biohazard,
    CloudLightning,
    AlertTriangle,
    FlaskConical,
    Microscope,
    Droplets as DropletsIcon
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
import sterileWaterImg from "@/assets/1254.webp";
import installationuvsystemImg from "@/assets/UV system installation to kill bacteria.png";
import avisEbullitionImg from "@/assets/Avis_debullition.png";
import puitsDeSurfaceImg from "@/assets/puits de surface.jpg";
import virusEnteriqueImg from "@/assets/virus entérique.jpg";


const HighEfficiencyIcon = ({ className }: { className?: string }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 -960 960 960" 
        fill="currentColor"
        className={className}
    >
        <path d="M130-240q-37.5 0-63.75-26.25T40-330v-300q0-37.5 26.25-63.75T130-720h620q37.5 0 63.75 26.25T840-630v300q0 37.5-26.25 63.75T750-240H130Zm0-60h620q12.75 0 21.38-8.63Q780-317.25 780-330v-300q0-12.75-8.62-21.38Q762.75-660 750-660H130q-12.75 0-21.37 8.62Q100-642.75 100-630v300q0 12.75 8.63 21.37Q117.25-300 130-300Zm740-87v-186h20q12 0 21 9t9 21v126q0 12-9 21t-21 9h-20Zm-740 57v-300h620v300H130Z"/>
    </svg>
);


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
        document.title = "Systèmes de Désinfection UV au Québec | Stérilisateur d'Eau | Bricareau";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Éliminez 99,99% des bactéries et virus de votre eau de puits au Québec. Nos systèmes de désinfection UV certifiés offrent une eau 100% sécuritaire sans produits chimiques.");
        }

        // OG Tags
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) ogTitle.setAttribute("content", "Stérilisateur UV Québec : Protection Bactérienne Totale | Bricareau");
        const ogDesc = document.querySelector('meta[property="og:description"]');
        if (ogDesc) ogDesc.setAttribute("content", "Zéro bactérie, 100% sérénité. Protégez la santé de votre famille avec nos solutions de désinfection UV de haute performance au Québec.");
        const ogUrl = document.querySelector('meta[property="og:url"]');
        if (ogUrl) ogUrl.setAttribute("content", "https://bricareau.com/systemes-de-desinfection-UV");
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
                    highlightedTitle={<span className="font-bold not-italic">Systèmes de désinfection UV,</span>}
                    mainTitle={<span className="text-[#8CC63F] font-bold not-italic">zéro produit chimique, 100% de protection.</span>}
                    subtitle="Éliminez 99,99% des bactéries, virus et kystes de votre eau de puits ou municipale sans aucun additif chimique. Assurez une pureté microbiologique totale pour la sécurité de votre famille à chaque robinet."
                    showPhone={true}
                    showBreadcrumbs={true}
                    singleLineTitle={false}
                />

                {/* 3. Why choose UV disinfection? - Technical/Swiss Design Precision Grid with Integrated Background */}
                <section className="py-24 lg:py-32 relative bg-white">
                    {/* Integrated background image harmonizing with UV water tech */}
                    <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
                        <img 
                            src={sterileWaterImg} 
                            className="w-full h-full object-cover opacity-50 grayscale mix-blend-multiply" 
                         alt="Eau stérile sous rayon UV - analyse d'eau professionnelle" title="Analyse d'eau professionnelle par Bricareau" />
                        {/* Soft white overlay to ensure perfect text readability and preserve the "sterile" technical look */}
                        <div className="absolute inset-0 bg-white/85 backdrop-blur-[1px]"></div>
                        
                        {/* Gradient mask to fade smoothly into the next/previous sections */}
                        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/40 to-white opacity-90"></div>
                    </div>

                    <div className="container mx-auto px-6 max-w-7xl relative z-10">
                        <div className="max-w-4xl mb-24">

                             <h2 className="mb-8 heading-pro-max text-left">
                                 <span className="italic font-light text-[#18448F] block">Pourquoi la</span>
                                 <span className="font-bold text-[#18448F] block">Désinfection UV ?</span>
                             </h2>
                             <p className="text-lg text-slate-500 max-w-2xl font-light leading-relaxed text-justify lg:text-left">
                                 Une ingénierie de précision paramétrée pour éradiquer 99,99% des micro-organismes sans aucun additif chimique.
                             </p>
                        </div>

                        {/* Architectural Grid (Swiss Style) */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-slate-200">
                            {[
                                { 
                                    icon: Leaf, title: "100% Naturel", 
                                    desc: "Purification physique sans additifs chimiques. La minéralité de l'eau est intégralement préservée.",
                                },
                                { 
                                    icon: Zap, title: "Action Instantanée", 
                                    desc: "Éradication immédiate des pathogènes lors du passage à travers le sas de rayonnement UV-C.",
                                },
                                { 
                                    icon: Award, title: "Qualité Clinique", 
                                    desc: "Efficacité prouvée en laboratoire : neutralisation totale de l'ADN des micro-organismes.",
                                },
                                {
                                    iconSrc: personShieldSvg, isSvg: true, title: "Tolérance Zéro", 
                                    desc: "Barrière infranchissable certifiée contre les bactéries, virus et kystes parasitoïdes exclus.",
                                },
                                { 
                                    icon: CupSoda, title: "Goût Inaltéré", 
                                    desc: "Sans composés chlorés, l'eau conserve son intégrité gustative et sa fraîcheur pure.",
                                },
                                { 
                                    icon: ShieldCheck, title: "Zéro Particule Nocive", 
                                    desc: "Aucun stockage, aucune manipulation de substances toxiques n'est requise. Sécurité intégrale.",
                                },
                                { 
                                    icon: HighEfficiencyIcon, title: "Haut Rendement", 
                                    desc: "Fonctionnement passif 24h/24 dont la consommation énergétique équivaut à celle d'une simple ampoule LED.",
                                },
                                {
                                    iconSrc: resetWrenchSvg, isSvg: true, title: "Maintenance Réduite", 
                                    desc: "Cycle d'entretien optimisé : remplacement unique de la lampe ultraviolette une fois par annuité.",
                                },
                            ].map((benefit, i) => (
                                <div
                                    key={i}
                                    className="group relative p-10 border-b border-r border-slate-200 bg-white/40 backdrop-blur-sm hover:bg-white transition-all duration-500 flex flex-col h-full overflow-hidden"
                                >
                                    
                                    <div className="w-12 h-12 mb-10 flex items-center justify-center text-slate-800 group-hover:text-blue-600 transition-colors duration-300 relative z-10">
                                        {benefit.isSvg ? (
                                            <div
                                                className="w-7 h-7 bg-current shrink-0"
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
                                            <benefit.icon className="h-7 w-7 stroke-[1.5] shrink-0" />
                                        )}
                                    </div>
                                    
                                    <div className="relative z-10 flex flex-col flex-grow mt-auto">
                                        <h3 className="text-lg font-bold text-slate-900 mb-4 tracking-tight group-hover:text-blue-700 transition-colors">
                                            {benefit.title}
                                        </h3>
                                        <p className="font-normal leading-relaxed text-slate-500 text-[14px]">
                                            {benefit.desc}
                                        </p>
                                    </div>

                                    {/* Precision corner accent */}
                                    <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-600 group-hover:w-full transition-all duration-500 ease-out" />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 3.5. Pathogen Neutralization - Redesigned section */}
                <section className="relative py-32 flex items-center overflow-hidden bg-slate-950">
                    {/* Cinematic Background */}
                    <div className="absolute inset-0 z-0">
                        <img 
                            src={stormVisualImg} 
                            className="w-full h-full object-cover opacity-40 animate-pulse-slow"
                         alt="Force énergétique UV - Bricareau" title="Systèmes d'eau sur mesure par Bricareau" />
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
                                    <h2 className="font-light block leading-tight lg:leading-[52px] text-white">
                                        Éliminez l'invisible : <br />
                                        <span className="text-[#8CC63F] font-bold font-serif whitespace-nowrap">Protection contre 99,99%.</span>
                                    </h2>
                                    <p className="text-lg text-slate-300 font-light leading-relaxed max-w-xl text-justify lg:text-left">
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
                                    <div className="relative inline-block w-full sm:w-auto group">
                                        <div className="absolute inset-0 border border-[#18448F] rounded-[2rem] -translate-x-[5px] translate-y-[5px] transition-transform group-hover:-translate-x-[3px] group-hover:translate-y-[3px]"></div>
                                        <Button 
                                            asChild 
                                            className="relative w-full sm:w-auto bg-[#18448F] hover:bg-white hover:text-[#18448F] text-white rounded-[2rem] h-16 px-12 font-black uppercase tracking-widest text-xs transition-all border-none"
                                        >
                                            <a href="/consultation">Évaluer la sécurité de mon eau</a>
                                        </Button>
                                    </div>
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

                {/* 2.5. Symptom Diagnostic Grid - UV Focused */}
                <section className="py-24 bg-white relative overflow-hidden">
                    <div className="container mx-auto px-6 font-sans">
                        <div className="text-center mb-16">
                            <span className="inline-block px-4 py-1.5 bg-[#18448F] text-white rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
                                DIAGNOSTIC DE SÉCURITÉ
                            </span>
                            <h2 className="heading-pro-max mb-6">
                                <span className="font-bold not-italic text-[#18448F] block text-center">Quelles <span className="text-[#8CC63F]">menaces invisibles</span></span>
                                <span className="font-bold text-[#18448F] block text-center"><span className="text-[#8CC63F]">s'infiltrent</span> dans votre eau ?</span>
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
                            {[
                                { 
                                    problem: "Test Coliformes Positif", 
                                    cause: "Infiltration de bactéries", 
                                    solution: "Stérilisateur UV Select",
                                    color: "from-red-500 to-rose-700",
                                    icon: <Biohazard className="w-8 h-8" />,
                                    img: waterTestingImg
                                },
                                { 
                                    problem: "Virus Entériques", 
                                    cause: "Contamination des nappes", 
                                    solution: "UV Haute-Performance",
                                    icon: <ShieldAlert className="w-8 h-8" />,
                                    color: "from-purple-500 to-indigo-700",
                                    img: virusEnteriqueImg
                                },
                                { 
                                    problem: "Kystes & Parasites", 
                                    cause: "Giardia & Cryptosporidium", 
                                    solution: "Filtration 1 Micron + UV",
                                    color: "from-amber-500 to-orange-700",
                                    icon: <Microscope className="w-8 h-8" />,
                                    img: sterileWaterImg
                                },
                                { 
                                    problem: "Post-Orage / Fontes", 
                                    cause: "Ruissellement de surface", 
                                    solution: "Système UV-IHS",
                                    color: "from-indigo-600 to-blue-900",
                                    icon: <CloudLightning className="w-8 h-8" />,
                                    img: stormVisualImg
                                },
                                { 
                                    problem: "Puits de Surface", 
                                    cause: "Forte vulnérabilité externe", 
                                    solution: "Série VH Bricareau",
                                    color: "from-emerald-500 to-teal-700",
                                    icon: <DropletsIcon className="w-8 h-8" />,
                                    img: puitsDeSurfaceImg
                                },
                                { 
                                    problem: "Avis d'Ébullition", 
                                    cause: "Prévention proactive", 
                                    solution: "Protection 24/7 Bricareau",
                                    color: "from-blue-400 to-cyan-600",
                                    icon: <ShieldCheck className="w-8 h-8" />,
                                    img: avisEbullitionImg
                                }
                            ].map((s, i) => (
                                <div 
                                    key={i} 
                                    className="group relative h-[420px] rounded-[3.5rem] overflow-hidden border border-white/40 bg-white/5 backdrop-blur-md cursor-pointer transition-all duration-700 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(30,58,138,0.15)] hover:-translate-y-3"
                                    onClick={() => navigate("/consultation")}
                                >
                                    {/* Background Image with Cinematic Overlay */}
                                    <div className="absolute inset-0 z-0">
                                        <img 
                                            src={s.img} 
                                            alt={s.problem} 
                                            className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110 opacity-40 group-hover:opacity-60 grayscale-[0.5] group-hover:grayscale-0"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/80 to-blue-50/40" />
                                    </div>

                                    <div className="relative z-10 p-10 h-full flex flex-col">
                                        <div className="flex justify-end items-start mb-8">
                                            <div className="bg-blue-600/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-blue-200/50">
                                                <span className="text-[9px] font-black uppercase tracking-widest text-blue-700">Alerte Sanitaire</span>
                                            </div>
                                        </div>

                                        <div className="flex-grow space-y-4">
                                            <div className="flex items-center gap-2">
                                                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                                                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 italic">
                                                    Risque : {s.cause}
                                                </span>
                                            </div>
                                            <h3 className="text-3xl font-medium text-[#18448F] leading-[1.1] tracking-tight">
                                                {s.problem}
                                            </h3>
                                            <p className="text-sm font-light text-slate-600 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                                                Les micro-organismes ne préviennent pas. Protégez votre famille contre les menaces invisibles présentes dans votre eau de puits.
                                            </p>
                                        </div>

                                        <div className="mt-auto pt-6 border-t border-blue-100/50">
                                            <div className="flex items-center justify-between">
                                                <div className="space-y-1">
                                                    <span className="text-[10px] uppercase font-bold text-slate-400">Solution Recommandée</span>
                                                    <p className="text-sm font-black text-blue-600">
                                                        {s.solution}
                                                    </p>
                                                </div>
                                                <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-200 transition-all duration-500 group-hover:translate-x-2">
                                                    <ArrowRight className="w-5 h-5" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Glass Shine Effect */}
                                    <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/30 to-white/0 -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-[1.5s] ease-in-out pointer-events-none" />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 4. UV Systems - Product Grid */}
                <section id="systemes-uv" className="py-24 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="text-left mb-16">
                            <h2 className="mb-8 heading-pro-max text-left">
                                <span className="italic font-light text-[#18448F] block">Nos systèmes de</span>
                                <span className="font-bold text-[#18448F] block">désinfection UV</span>
                            </h2>
                            <div className="w-24 h-1 bg-blue-600 mb-12"></div>

                            <p className="body-pro-max text-slate-600 text-justify lg:text-left max-w-7xl mx-auto">
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

                {/* Engagement Certifié Section */}
                <section className="bg-white py-12">
                    <div className="container mx-auto px-6">
                        <div className="rounded-none lg:rounded-[3rem] overflow-hidden shadow-none lg:shadow-2xl border-0 lg:border border-slate-100 group relative -mx-6 lg:mx-0">
                            <img 
                                src={installationuvsystemImg} 
                                className="w-full h-[450px] md:h-[550px] lg:h-[650px] object-cover group-hover:scale-105 transition-transform duration-[3000ms] brightness-[1.2] contrast-[1.05]"
                             alt="Installation experte d'un système de désinfection UV Bricareau" title="Systèmes d'eau sur mesure par Bricareau" />
                            <div className="absolute inset-0 bg-gradient-to-r from-[#18448F]/70 via-[#18448F]/30 to-transparent p-8 md:p-12 lg:p-20 flex items-center">
                                <div className="max-w-lg">
                                    <div className="flex items-center gap-3 text-white font-bold text-xs tracking-widest uppercase mb-6">
                                        <CheckCircle className="w-5 h-5" />
                                        Une protection microbiologique sans faille
                                    </div>
                                    <h3 className="text-white text-4xl font-bold mb-6 leading-tight">La puissance de la lumière UV pour une eau parfaitement saine</h3>
                                    <p className="text-white text-lg mb-10 text-justify">
                                        Adoptez la tranquillité d'esprit absolue avec nos systèmes de désinfection par rayons ultraviolets (UV). Conçus pour éliminer efficacement les bactéries, virus et autres micro-organismes nocifs, nos systèmes garantissent une eau saine pour toute votre famille, sans altérer le goût ni la minéralisation naturelle.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* 5. Comparison Table */}
                <section className="py-24 bg-white border-t border-slate-50 relative overflow-hidden">
                    <div className="container mx-auto px-4">
                        <div className="text-left mb-16">
                            <h2 className="mb-8 heading-pro-max text-left">
                                <span className="italic font-light text-[#18448F] block">Comparez nos systèmes</span>
                                <span className="font-bold text-[#18448F] block">de stérilisation UV</span>
                            </h2>
                            <div className="w-24 h-1 bg-blue-600"></div>
                        </div>

                        {/* Navigation Arrows for Mobile/Tablet */}
                        <div className="lg:hidden flex items-center justify-end gap-3 mb-8 relative z-30">
                            <Button 
                                size="icon" 
                                variant="outline" 
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
                                                    <span className="text-sm font-bold text-[#18448F] uppercase tracking-wider">{m.name}</span>
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
                            className="w-full h-auto object-contain"
                         alt="Analyse d'eau à domicile pour détecter le calcaire et le chlore - Service Bricareau" title="Expert en eau par Bricareau" />
                    </div>

                    {/* Desktop Background */}
                    <div className="hidden lg:block absolute inset-0 z-0">
                        <img
                            src={waterTestingImg}
                            className="w-full h-full object-cover"
                         alt="Analyse microbiologique - traitement d'eau Québec" title="Traitement d'eau Québec par Bricareau" />
                        <div className="absolute inset-0 bg-black/30 lg:bg-gradient-to-r lg:from-black/50 lg:to-transparent" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-white via-white/10 to-transparent" />
                    </div>

                    <div className="container mx-auto px-4 relative z-10 flex items-center py-12 lg:py-0">
                        <div className="max-w-2xl text-slate-900 lg:text-white">
                            <span className="text-blue-600 lg:text-blue-600 text-xs font-black uppercase tracking-[0.3em] mb-8 block">
                                Contrôle de la Qualité D'EAU
                            </span>
                            <h2 className="mb-8 heading-pro-max text-left">
                                <span className="italic font-light text-[#18448F] lg:text-white block">Des tests d'eau précis</span>
                                <span className="text-[#18448F] lg:text-white italic font-bold font-serif">pour une tranquillité d'esprit totale.</span>
                            </h2>
                            <p className="font-light text-black lg:text-white/95 mb-8 max-w-xl text-justify lg:text-left">
                                Ne devinez pas la qualité de votre eau. Nos analyses approfondies identifient les bactéries, les minéraux et les contaminants chimiques pour vous offrir une tranquillité d'esprit totale.
                            </p>
                            <div className="flex gap-4">
                                <div className="relative inline-block w-full sm:w-auto group">
                                    <div className="absolute inset-0 border border-[#18448F] rounded-[2rem] -translate-x-[5px] translate-y-[5px] transition-transform group-hover:-translate-x-[3px] group-hover:translate-y-[3px]"></div>
                                    <Button
                                        asChild
                                        className="relative w-full sm:w-auto bg-[#18448F] hover:bg-white hover:text-[#18448F] text-white rounded-[2rem] h-16 px-12 font-black uppercase tracking-widest text-xs transition-all border-none"
                                    >
                                        <a href="/tests-eau">Demandez une analyse d'eau</a>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 7. Testimonials Section */}
                <TestimonialsSection
                    filterProduct="/Systemes-de-desinfection-UV"
                    title={
                        <h2 className="mb-8 heading-pro-max text-center">
                            <span className="font-bold not-italic text-[#18448F]">Zéro bactérie, </span>
                            <span className="font-bold text-[#8CC63F]">100 % sérénité.</span>
                        </h2>
                    }
                />
                {/* 8. Section Associated Products */}
                <section className="bg-white py-24">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="mb-8 heading-pro-max text-center">
                                <span className="font-bold text-[#18448F] block text-center">Découvrez les produits associés.</span>
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
                                                    <h3 className="card-title text-[#18448F]">{prod.name}</h3>
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
                                <span className="italic font-light text-[#18448F] block">Pour vous éclairer</span>
                                <span className="font-bold text-[#18448F] block">Questions fréquentes</span>
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
                                <div className="relative inline-block group">
                                    <div className="absolute inset-0 border border-[#18448F] rounded-[2rem] -translate-x-[5px] translate-y-[5px] transition-transform group-hover:-translate-x-[3px] group-hover:translate-y-[3px]"></div>
                                    <Button
                                        className="relative bg-[#18448F] hover:bg-white hover:text-[#18448F] text-white rounded-[2rem] h-16 px-12 font-black uppercase tracking-widest text-xs transition-all border-none"
                                        onClick={() => setShowAllFaqs(!showAllFaqs)}
                                    >
                                        {showAllFaqs ? "Voir moins de questions" : "Voir toutes les questions"}
                                    </Button>
                                </div>
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
                      src={sterileWaterImg}
                      className="w-full h-full object-cover grayscale brightness-150"
                     alt="Expert Bricareau analysant vos options de filtration" title="Systèmes d'eau sur mesure par Bricareau" />
                    <div className="absolute inset-0 bg-[#18448F]/10 backdrop-blur-sm" />
                  </div>

                  <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-5xl mx-auto text-center space-y-12">
                      <div className="space-y-6">
                        <span className="inline-block px-4 py-1.5 bg-white text-blue-600 rounded-full text-[10px] font-black uppercase tracking-[0.4em]">
                          LA PROTECTION ULTIME CONTRE LES BACTÉRIES
                        </span>
                        <h2 className="font-light block leading-tight lg:leading-[52px] text-white">
                          Éliminez 99,99 % des virus et des bactéries <br />
                          <span className="text-white italic font-bold font-serif">avec la stérilisation UV.</span>
                        </h2>
                        <p className="text-lg md:text-xl text-blue-100/80 max-w-2xl mx-auto font-light leading-relaxed">
                          Ne faites aucun compromis sur la sécurité de votre famille. Nos systèmes de désinfection ultraviolette neutralisent instantanément les micro-organismes nocifs, sans ajout de produits chimiques.                        </p>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-8 justify-center items-center pt-4">
                        <div className="relative inline-block w-full sm:w-auto group">
                          <div className="absolute inset-0 border border-white rounded-[2rem] -translate-x-[5px] translate-y-[5px] transition-transform group-hover:-translate-x-[3px] group-hover:translate-y-[3px]"></div>
                          <Button 
                            asChild 
                            className="relative w-full sm:w-auto bg-white hover:bg-blue-600 hover:text-white text-blue-600 rounded-[2rem] h-16 px-12 font-black uppercase tracking-widest text-xs transition-all border-none"
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
                            className="relative w-full sm:w-auto bg-transparent border-none text-white hover:bg-white hover:text-blue-600 rounded-[2rem] h-16 px-12 font-black uppercase tracking-widest text-xs transition-all"
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

                {/* 10. Resources Section */}
                <section className="py-24 bg-gray-50">
                    <div className="container mx-auto px-4">
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
              <div className="pointer-events-auto group/sticky">
                <Button
                  asChild
                  className="bg-white hover:-translate-y-2 active:scale-95 transition-all duration-300 shadow-2xl"
                  style={{ backdropFilter: "blur(20px)" }}
                >
                  <a href="/consultation" className="flex items-center gap-4 animate-bounce" style={{ animationDuration: '3s' }}>
                    <span className="font-bold text-sm tracking-wider text-blue-600 whitespace-nowrap text-center">
                      Réservez votre <br />consultation gratuite
                    </span>
                    <div className="w-10 h-10 bg-[#18448F] rounded-full flex items-center justify-center text-white group-hover/sticky:rotate-[360deg] shadow-lg shadow-blue-200">
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
