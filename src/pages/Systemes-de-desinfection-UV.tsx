import React, { useEffect } from "react";
import Header from "@/components/Header";
import GlobalBreadcrumbs from "@/components/GlobalBreadcrumbs";
import Footer from "@/components/Footer";
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
import { NavLink } from "@/components/NavLink";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from "@/components/ui/accordion";
import TestimonialsSection from "@/components/TestimonialsSection";
import ConsultationFormSection from "@/components/ConsultationFormSection";

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

const DesinfectionUV = () => {
    const [showAllFaqs, setShowAllFaqs] = React.useState(false);
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
                {/* 1. Hero Section */}
                <section className="relative lg:h-[650px] flex flex-col lg:items-center overflow-hidden bg-white">
                    <div className="absolute top-[30px] left-0 right-0 z-30 pointer-events-none hidden lg:block">
                        <div className="container mx-auto px-4 lg:px-6 pointer-events-auto">
                            <GlobalBreadcrumbs variant="dark" />
                        </div>
                    </div>
                    <div className="relative lg:absolute lg:inset-0 h-[350px] sm:h-[450px] lg:h-full w-full lg:z-0 overflow-hidden">
                        <img
                            src={heroImg}
                            alt="Efficacité d'un système de désinfection UV pour une eau potable sans bactéries par Bricareau"
                            className="w-full h-full object-cover object-[center_35%]"
                        />
                        <div className="hidden lg:block absolute inset-0 bg-black/40 lg:bg-gradient-to-r lg:from-black/60 lg:to-transparent" />
                        <div className="hidden lg:block absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-white via-white/10 to-transparent" />
                        <div className="hidden lg:block absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white/90 via-white/40 to-transparent" />
                    </div>

                    <div className="container relative z-10 mx-auto px-4 h-full flex items-center lg:px-6">
                        <div className="max-w-2xl lg:text-white py-12 lg:py-0">
                            <h1
                                className="text-[48px] md:text-[48px] leading-[1.1] md:leading-[1.2] mb-4 lg:mb-8 tracking-tighter text-slate-900 lg:text-white text-left lg:text-justify max-w-xl"
                                style={{
                                    fontWeight: 600
                                }}
                            >
                                Systèmes de désinfection UV, zéro produit chimique, 100% de protection.
                            </h1>
                            <p className="font-light md:text-[16px] text-slate-600 lg:text-white/95 mb-8 max-w-xl text-left lg:text-justify">
                                Éliminez 99,99% des bactéries, virus et kystes de votre eau de puits ou municipale sans aucun additif chimique. Assurez une pureté microbiologique totale pour la sécurité de votre famille à chaque robinet.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button
                                    size="lg"
                                    className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 h-14 shadow-lg shadow-blue-200"
                                    style={{}}
                                    asChild
                                >
                                    <NavLink to="/consultation">Planifiez une consultation gratuite</NavLink>
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="bg-slate-100 lg:bg-white/10 hover:bg-slate-200 lg:hover:bg-white/20 text-slate-800 lg:text-white border-slate-200 lg:border-white rounded-full px-8 h-14 backdrop-blur-sm shadow-lg flex items-center gap-2"
                                    style={{}}
                                    onClick={() => document.getElementById('systemes-uv')?.scrollIntoView({ behavior: 'smooth' })}
                                >
                                    Découvrir nos systèmes UV
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. Why choose UV disinfection? */}
                <section className="py-24 lg:py-32 bg-slate-50 relative overflow-hidden">
                    {/* UV Spectral Background Layer */}
                    <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
                        {/* Integrated UV Spectrum Image - Provides the core visual anchor */}
                        <div className="absolute inset-0 opacity-[0.18] pointer-events-none">
                            <img 
                                src="/src/assets/uv-spectrum-abstract.png" 
                                alt="" 
                                className="w-full h-full object-cover blur-2xl scale-110"
                            />
                        </div>

                        {/* Base Spectral Glows - Enhances the image depth */}
                        <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] bg-[radial-gradient(circle,rgba(99,102,241,0.12)_0%,transparent_70%)] blur-[120px]" />
                        <div className="absolute bottom-[-20%] right-[-10%] w-[80%] h-[80%] bg-[radial-gradient(circle,rgba(167,139,250,0.15)_0%,transparent_70%)] blur-[140px]" />
                        
                        {/* Linear Spectral Beams (Anamorphic) - Adds procedural light energy */}
                        <div className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-400/30 to-transparent -rotate-12 blur-[1px]" />
                        <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-indigo-500/25 to-transparent rotate-6 blur-[2px]" />
                        <div className="absolute bottom-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-400/30 to-transparent -rotate-3 blur-[1px]" />

                        {/* Spectral "Prism" Overlay */}
                        <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent,rgba(59,130,246,0.03)_20%,rgba(139,92,246,0.05)_40%,rgba(217,70,239,0.03)_60%,transparent)] opacity-40 mix-blend-overlay" />
                    </div>

                    <div className="container mx-auto px-6 relative z-10">
                        <div className="max-w-3xl mx-auto text-center mb-20">
                            <span className="inline-block px-4 py-1.5 bg-blue-600/10 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                                TRAITEMENT d'EAU POTABLE SANS CHLORE
                            </span>
                            <h2 className="text-slate-900 mb-8 text-[42px] leading-[1.1]">
                                <span className="font-light block">Pourquoi choisir la</span>
                                <span className="font-bold text-blue-600">désinfection UV ?</span>
                            </h2>
                            <p className="text-slate-500 font-light text-lg max-w-2xl mx-auto leading-relaxed">
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
                                    { icon: Shield, title: "Sécurité absolue", desc: "Une barrière infranchissable contre les bactéries, virus et kystes (Cryptosporidium), même ceux résistants aux désinfectants classiques." },
                                    { icon: CupSoda, title: "Goût préservé", desc: "Votre eau conserve toutes ses propriétés minérales et son goût naturel frais, sans les sous-produits toxiques liés au chlore." },
                                    { icon: ShieldCheck, title: "Zéro risque", desc: "Pas de manipulation ni de stockage de produits chimiques dangereux chez vous. Une solution propre, saine et sans danger pour l'environnement." },
                                    { icon: BatteryLow, title: "Éco-Énergétique", desc: "Une protection permanente 24h/24 qui consomme aussi peu d'énergie qu'une simple ampoule domestique standard." },
                                    { icon: Wrench, title: "Entretien minimal", desc: "Conçu pour la simplicité. Un changement de lampe annuel suffit pour garantir une performance optimale et une sécurité constante." }
                                ].map((benefit, i) => (
                                    <div 
                                        key={i} 
                                        className={`group relative flex flex-col md:flex-row items-start lg:items-center gap-6 lg:gap-8 ${
                                            i % 2 === 0 ? 'lg:justify-end lg:text-right' : 'lg:justify-start lg:text-left'
                                        } ${
                                            // Stagger effect on desktop
                                            i % 2 !== 0 ? 'lg:translate-y-32' : ''
                                        } lg:mb-40 transition-all duration-700`}
                                    >
                                        {/* Content container for better alignment */}
                                        <div className={`flex flex-col ${i % 2 === 0 ? 'lg:items-end' : 'lg:items-start'} max-w-md`}>
                                            <div className={`w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-6 text-blue-600 group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110 transition-all duration-500 shadow-[0_0_20px_rgba(37,99,235,0.1)]`}>
                                                <benefit.icon className="h-6 w-6" />
                                            </div>
                                            <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight group-hover:text-blue-600 transition-colors">
                                                {benefit.title}
                                            </h3>
                                            <p className={`text-slate-500 font-light leading-relaxed ${i % 2 === 0 ? 'lg:text-right' : 'lg:text-left'} text-justify md:text-inherit`}>
                                                {benefit.desc}
                                            </p>
                                        </div>

                                        {/* Connecting "Glow Node" on the central line (Desktop only) */}
                                        <div className={`hidden lg:block absolute top-1/2 w-4 h-4 rounded-full bg-blue-100 border-2 border-white shadow-sm transition-all duration-500 group-hover:bg-blue-600 group-hover:scale-125 group-hover:shadow-[0_0_15px_rgba(37,99,235,0.5)] ${
                                            i % 2 === 0 ? '-right-16 lg:-right-[68px]' : '-left-16 lg:-left-[68px]'
                                        } -translate-y-1/2`} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. UV Systems - Product Grid */}
                <section id="systemes-uv" className="py-24 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="text-left mb-16">
                                                        <h2
                                className="text-slate-900 mb-8 text-left"
                                style={{}}
                            >
                                <span className="text-[42px] md:text-[42px] font-light leading-[1.1] md:leading-[42px] block">Nos systèmes de</span>
                                <span className="text-[42px] md:text-[42px] font-normal leading-[1.1] md:leading-[42px] block">désinfection UV</span>
                            </h2>
                            <div className="w-24 h-1 bg-blue-600 mb-12"></div>

                            <p className="font-light text-slate-600 text-justify max-w-7xl mx-auto" style={{}}>
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
                                            className="text-slate-900 group-hover:text-blue-600 transition-colors tracking-tight text-center"
                                            style={{}}
                                        >
                                            {prod.name}
                                        </h3>
                                        <p
                                            className="text-slate-500 font-light flex-grow text-justify whitespace-pre-line"
                                            style={{}}
                                        >
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
                <section className="py-24 bg-white border-t border-slate-50">
                    <div className="container mx-auto px-4">
                        <div className="text-left mb-16">
                            <h2
                                className="text-slate-900 mb-8 text-left"
                                style={{}}
                            >
                                <span className="text-[42px] md:text-[42px] font-light leading-[1.1] md:leading-[42px] block">Comparez nos</span>
                                <span className="text-[42px] md:text-[42px] font-normal leading-[1.1] md:leading-[42px] block">systèmes UV</span>
                            </h2>
                            <div className="w-24 h-1 bg-blue-600"></div>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full min-w-[1000px] border-collapse bg-white rounded-2xl overflow-hidden shadow-sm">
                                <thead>
                                    <tr className="bg-gray-100">
                                        <th className="p-8 text-left text-gray-400 font-light uppercase tracking-wider w-1/4">Modèle</th>
                                        {[
                                            { name: "VH200-F10", img: uvSystemImg2 },
                                            { name: "VH410-F20", img: uvSystemImg3 },
                                            { name: "Arros 15-IHS10", img: uvSystemImg4 }
                                        ].map(m => (
                                            <th key={m.name} className="p-4 text-center text-gray-900 font-bold">
                                                <div className="flex flex-col items-center gap-2">
                                                    <img
                                                        src={m.img}
                                                        alt={`Modèle ${m.name} - Stérilisateur d'eau UV haute performance Bricareau`}
                                                        className="w-[120px] h-[100px] object-contain mx-auto mix-blend-multiply"
                                                    />
                                                    <div className="text-[14px]">{m.name}</div>
                                                </div>
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {comparisonData.map((row, i) => (
                                        <tr key={i} className="hover:bg-gray-50 transition-colors">
                                            <td className="p-8 font-light text-gray-700">{row.feature}</td>
                                            <td className="p-8 text-center">
                                                {typeof row.VH200F10 === 'string' ? <span className="text-blue-600 font-bold">{row.VH200F10}</span> : (row.VH200F10 ? <CheckCircle2 className="h-6 w-6 text-blue-600 mx-auto" /> : null)}
                                            </td>
                                            <td className="p-8 text-center bg-blue-50/20">
                                                {typeof row.VH410F20 === 'string' ? <span className="text-blue-600 font-bold">{row.VH410F20}</span> : (row.VH410F20 ? <CheckCircle2 className="h-6 w-6 text-blue-600 mx-auto" /> : null)}
                                            </td>
                                            <td className="p-8 text-center bg-blue-50/20">
                                                {typeof row.Arros15IHS10 === 'string' ? <span className="text-blue-600 font-bold">{row.Arros15IHS10}</span> : (row.Arros15IHS10 ? <CheckCircle2 className="h-6 w-6 text-blue-600 mx-auto" /> : null)}
                                            </td>

                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* 6.Water Testing Section (Redesigned for Mobile) */}
                <section className="relative lg:h-[750px] flex flex-col lg:flex-row items-stretch overflow-hidden bg-white">
                    {/* Mobile Image */}
                    <div className="lg:hidden w-full h-[300px] relative">
                        <img
                            src={waterTestingImg}
                            alt="Analyse microbiologique de l'eau de puits pour détecter les bactéries - Expertise Bricareau"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/20" />
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
                            <span className="text-blue-600 lg:text-white/80 text-xs font-black uppercase tracking-[0.3em] mb-8 block">
                                ANALYSE MICROBIOLOGIQUE
                            </span>
                            <h2
                                className="lg:font-light mb-8 md:leading-[60px] text-slate-900 lg:text-white text-left"
                                style={{}}
                            >
                                Votre eau de puits est-elle <span className="lg:font-bold"><br />vraiment sécuritaire ?</span>
                            </h2>
                            <p className="font-light text-slate-600 lg:text-white/95 mb-8 max-w-xl text-left lg:text-justify">
                                Ne devinez pas la qualité de votre eau. Nos analyses approfondies identifient les bactéries, les minéraux et les contaminants chimiques pour vous offrir une tranquillité d'esprit totale.
                            </p>
                            <div className="flex gap-4">
                                <Button
                                    size="lg"
                                    className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 h-14 shadow-lg shadow-blue-200"
                                    style={{}}
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
                        <h2 className="text-slate-900 mb-6 text-[42px] leading-[42px]">
                                <span className="font-light">Zéro bactérie, </span><span className="font-bold text-blue-600">100 % sérénité</span></h2>
                        </>
                    }
                />
                {/* 8. Section Associated Products */}
                <section className="bg-white py-24">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-slate-900 mb-8 text-[42px] leading-[42px]">Découvrez les produits associés</h2>                            <p className="font-light text-gray-500 max-w-2xl mx-auto text-justify">
                                Optimisez votre expérience de traitement d'eau avec nos solutions complémentaires.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                                            alt={`${prod.name} - Solution Bricareau pour une eau pure et sans calcaire partout`}
                                            className="max-h-full object-contain group-hover:scale-110 transition-transform duration-700 mix-blend-multiply"
                                        />
                                    </div>
                                    <div className="p-8 space-y-4 flex flex-col flex-grow border-t-2 border-transparent group-hover:border-blue-600 transition-colors">
                                        <h3
                                            className="text-slate-900 group-hover:text-blue-600 transition-colors tracking-tight text-center"
                                            style={{}}
                                        >
                                            {prod.name}
                                        </h3>
                                        <p
                                            className="leading-[25px] text-slate-500 font-light flex-grow text-justify"
                                            style={{}}
                                        >
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


                {/* 9. FAQ Section */}
                <section className="py-24 bg-white border-t border-slate-100">
                    <div className="container mx-auto px-4 text-left">
                        <div className="text-left mb-16">
                             <h2
                                className="text-slate-900 mb-8 text-left"
                                style={{}}
                            >
                                <span className="text-[42px] md:text-[42px] font-light leading-[1.1] md:leading-[42px] block">Pour vous éclairer</span>
                                <span className="text-[42px] md:text-[42px] font-normal leading-[1.1] md:leading-[42px] block">Questions fréquentes</span>
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
                                    className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-12 h-14 shadow-lg shadow-blue-200"
                                >
                                    {showAllFaqs ? "Voir moins de questions" : "Voir toutes les questions"}
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 10. Resources Section */}
                <section className="py-24 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="text-left mb-16">
                            <h2
                                className="text-slate-900 mb-8 text-left"
                                style={{}}
                            >                                <span className="text-[42px] md:text-[42px] font-normal leading-[1.1] md:leading-[42px] block">Ressources</span>
                            </h2>
                            <div className="w-24 h-1 bg-blue-600"></div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
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
                            ].map((art, i) => (
                                <div
                                    key={i}
                                    className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer group flex flex-col h-full border border-gray-100"
                                    onClick={() => window.location.href = art.path}
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

                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
};

export default DesinfectionUV;
