import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GlobalBreadcrumbs from "@/components/GlobalBreadcrumbs";
import TestimonialsSection from "@/components/TestimonialsSection";
import Hero from "@/components/Hero";
import {
    Building2,
    ShieldCheck,
    Settings,
    Activity,
    ArrowRight,
    Zap,
    Phone,
    Plus,
    Minus,
    ChevronDown,
    ChevronRight,
    Eye
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from "@/components/ui/accordion";

// High-fidelity generated assets
import engineeringHeroImg from "@/assets/61TWBHPkOiL._AC_SX679_.jpg";
import blueprintImg from "@/assets/water_system_blueprint_render_1778902045750.png";
import filterHousingImg from "@/assets/high_flow_cartridge_filter_housing_render_1778897048455.png";
import filtrationSkidImg from "@/assets/multimedia_filtration_skid_render_1778897031272.png";
import technicianInspectionImg from "@/assets/10271.jpg";
import reverseOsmosisSkidImg from "@/assets/industrial_reverse_osmosis_hero_1778897309067.png";

const SystemesCentralises = () => {
    const [activeAdvantageImage, setActiveAdvantageImage] = useState(blueprintImg);

    useEffect(() => {
        document.title = "Systèmes de Filtration Centralisés pour Bâtiments | Bricareau";
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">
            <Header />
            
            <main>
                {/* SECTION 1: MODERN CINEMATIC HERO (Same style as /residentiel) */}
                <Hero 
                    image={engineeringHeroImg}
                    highlightedTitle="Systèmes de filtration "
                    mainTitle="centralisés pour bâtiments."
                    subtitle="Protégez l'ensemble des installations de votre bâtiment avec une filtration industrielle et commerciale centralisée de premier ordre. Une solution sur mesure pour éliminer le calcaire, le chlore et les contaminants."
                    ctaText="DEMANDER UNE ÉTUDE SUR MESURE"
                    ctaLink="/contact-entreprises"
                    showPhone={true}
                    badge="Solutions Centralisées & Bâtiment"
                    showBreadcrumbs={true}
                    breadcrumbVariant="light"
                    homeVariant={false}
                />

                {/* SECTION 2: HIGH-FIDELITY STATEMENT BANNER */}
                <section className="py-24 bg-white border-y border-slate-100">
                    <div className="container mx-auto px-6 text-center max-w-4xl">
                        <div className="space-y-6">
                            <h3 className="text-xs font-black text-blue-600 uppercase tracking-[0.2em] mb-4">
                                DURABILITÉ & VALEUR PATRIMONIALE
                            </h3>
                            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
                                Engagés à fournir des solutions de haute qualité
                            </h2>
                            <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full" />
                            <p className="text-slate-500 text-lg font-light leading-relaxed max-w-3xl mx-auto pt-2">
                                Nos systèmes de filtration centralisés pour bâtiments sont conçus pour protéger les infrastructures, prolonger la durée de vie des équipements thermiques et garantir une eau de qualité supérieure à tous les points de tirage. Grâce à nos technologies industrielles éprouvées, assurez la continuité et la conformité de vos installations.
                            </p>
                            <div className="pt-4">
                                <a href="#campus-benefits" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-bold uppercase tracking-widest text-xs transition-colors group">
                                    En savoir plus <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 3: ACCORDION FEATURE GRID ("Ce que nous apportons à votre campus" using the "Avantages de l'eau douce" layout) */}
                <section id="campus-benefits" className="py-24 bg-white relative overflow-hidden">
                    {/* Background vertical line */}
                    <div className="absolute left-[10%] top-0 bottom-0 w-px bg-slate-200 hidden xl:block z-0" />

                    <div className="container mx-auto px-6 relative z-10">
                        <div className="text-center mb-24">
                            <span className="inline-block px-4 py-1.5 bg-blue-600/10 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-8">
                                L'INGÉNIERIE DE L'INFRASTRUCTURE
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold text-[#18448F] tracking-tight">
                                Ce que nous apportons à votre campus
                            </h2>
                        </div>

                        <div className="relative max-w-6xl mx-auto">
                            {/* Vertical text on the left */}
                            <div className="absolute -left-16 top-1/2 -translate-y-1/2 hidden xl:block">
                                <span className="inline-block [writing-mode:vertical-lr] rotate-180 text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 h-fit">
                                    SOLUTIONS IMMOBILIÈRES
                                </span>
                            </div>

                            <div className="flex flex-col lg:flex-row items-center gap-0 relative">
                                {/* Left: Benefits Accordion in a Card */}
                                <div className="w-full lg:w-[45%] z-20 mb-12 lg:mb-0">
                                    <div className="bg-white rounded-2xl shadow-[0_30px_60px_rgba(0,0,0,0.12)] p-8 md:p-12 border border-slate-50 lg:-mr-32 relative">
                                        <Accordion 
                                            type="single" 
                                            defaultValue="item-0" 
                                            className="w-full space-y-2"
                                            onValueChange={(value) => {
                                                const mapping: Record<string, string> = {
                                                    "item-0": blueprintImg,
                                                    "item-1": filtrationSkidImg,
                                                    "item-2": filterHousingImg,
                                                    "item-3": reverseOsmosisSkidImg
                                                };
                                                if (value && mapping[value]) {
                                                    setActiveAdvantageImage(mapping[value]);
                                                }
                                            }}
                                        >
                                            {[
                                                {
                                                    title: "Protection des conduits",
                                                    desc: "Élimination totale du calcaire et des sédiments pour préserver l'ensemble du réseau de tuyauteries et éviter l'entartrage prématuré de vos actifs immobiliers."
                                                },
                                                {
                                                    title: "Économies d'énergie",
                                                    desc: "Des échangeurs de chaleur et chauffe-eau propres consomment jusqu'à 30% d'énergie en moins, réduisant considérablement vos factures énergétiques et l'empreinte carbone."
                                                },
                                                {
                                                    title: "Conformité sanitaire",
                                                    desc: "Barrière microbiologique complète empêchant la prolifération de bactéries nocives comme la légionelle dans l'ensemble du bâtiment, protégeant vos usagers."
                                                },
                                                {
                                                    title: "Maintenance prédictive",
                                                    desc: "Des capteurs intelligents et une gestion technique centralisée (GTC) pour surveiller en temps réel la qualité de l'eau, anticiper les entretiens et sécuriser vos opérations."
                                                }
                                            ].map((item, idx) => (
                                                <AccordionItem key={idx} value={`item-${idx}`} className="border-b border-slate-100 last:border-none">
                                                    <AccordionTrigger className="text-[#18448F] font-bold text-left text-lg hover:no-underline py-5 data-[state=open]:text-blue-600 transition-colors">
                                                        {item.title}
                                                    </AccordionTrigger>
                                                    <AccordionContent className="text-slate-600 text-[15px] leading-relaxed pb-6 text-justify">
                                                        {item.desc}
                                                    </AccordionContent>
                                                </AccordionItem>
                                            ))}
                                        </Accordion>
                                    </div>
                                </div>

                                {/* Right: Image Section with Dot Pattern */}
                                <div className="w-full lg:w-[65%] relative">
                                    {/* Dot pattern background */}
                                    <div className="absolute -top-12 -left-12 w-48 h-48 opacity-40 pointer-events-none z-0">
                                        <div className="grid grid-cols-12 gap-3">
                                            {Array.from({ length: 144 }).map((_, i) => (
                                                <div key={i} className="w-1 h-1 bg-blue-500 rounded-full" />
                                            ))}
                                        </div>
                                    </div>

                                    <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] lg:aspect-auto lg:h-[550px] bg-white p-6 border border-slate-100 flex items-center justify-center">
                                        <img 
                                            key={activeAdvantageImage}
                                            src={activeAdvantageImage} 
                                            alt="Schéma technique et infrastructures de filtration centralisées" 
                                            className="max-h-full object-contain animate-in fade-in zoom-in duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/10 to-transparent pointer-events-none" />
                                    </div>

                                    {/* Another Dot pattern bottom right */}
                                    <div className="absolute -bottom-16 -right-16 w-64 h-64 opacity-30 pointer-events-none z-0">
                                        <div className="grid grid-cols-12 gap-4">
                                            {Array.from({ length: 144 }).map((_, i) => (
                                                <div key={i} className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 4: HORIZONTAL DUAL GALLERY */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-white max-w-7xl mx-auto">
                    <div className="aspect-[16/10] rounded-[2.5rem] overflow-hidden shadow-md bg-slate-50 p-4 border border-slate-100 flex items-center justify-center">
                        <img 
                            src={filterHousingImg} 
                            alt="Corps de filtre de cartouche haute pression" 
                            className="max-h-full object-contain hover:scale-105 transition-transform duration-1000" 
                        />
                    </div>
                    <div className="aspect-[16/10] rounded-[2.5rem] overflow-hidden shadow-md bg-slate-50 p-4 border border-slate-100 flex items-center justify-center">
                        <img 
                            src={filtrationSkidImg} 
                            alt="Skid de filtration multimédia industriel" 
                            className="max-h-full object-contain hover:scale-105 transition-transform duration-1000" 
                        />
                    </div>
                </section>

                {/* SECTION 5: COLUMN SPACE & SERVICE GRID */}
                <section className="py-32 bg-white">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="text-center space-y-4 mb-20">
                            <span className="inline-block px-4 py-1 bg-blue-50 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-widest">
                                NOTRE SERVICE GLOBAL
                            </span>
                            <h2 className="heading-pro-max text-center">
                                <span className="italic font-light text-blue-600">Ce que nous apportons</span> <br />
                                <span className="font-bold text-slate-900">à votre bâtiment.</span>
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                            
                            {/* Block 1: Innovative Solutions */}
                            <div className="flex flex-col gap-8 bg-slate-50 p-10 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                                <div className="space-y-4">
                                    <h3 className="text-3xl font-bold text-slate-900">
                                        Des solutions innovantes pour votre entreprise
                                    </h3>
                                    <p className="text-slate-500 font-light text-sm leading-relaxed max-w-xl">
                                        Nos ingénieurs conçoivent des stations de filtration centralisées modulaires s'intégrant parfaitement dans vos locaux techniques, optimisant l'encombrement au sol et facilitant l'accès pour l'entretien.
                                    </p>
                                </div>
                                <div className="aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-inner">
                                    <img 
                                        src={technicianInspectionImg} 
                                        alt="Techniciens Bricareau effectuant une inspection technique" 
                                        className="w-full h-full object-cover" 
                                    />
                                </div>
                            </div>

                            {/* Block 2: Maintenance and Support */}
                            <div className="flex flex-col gap-8 bg-slate-50 p-10 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                                <div className="space-y-4">
                                    <h3 className="text-3xl font-bold text-slate-900">
                                        Maintenance des systèmes existants
                                    </h3>
                                    <p className="text-slate-500 font-light text-sm leading-relaxed max-w-xl">
                                        Un service d'assistance technique disponible 24/7 et des contrats d'entretien préventif sur mesure pour garantir la performance continue de vos installations de filtration d'eau.
                                    </p>
                                </div>
                                <div className="aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-inner">
                                    <img 
                                        src={reverseOsmosisSkidImg} 
                                        alt="Système industriel d'osmose inverse et de traitement centralisé" 
                                        className="w-full h-full object-cover" 
                                    />
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* SECTION 6: RELATED RESOURCES / CASE STUDIES */}
                <section className="py-32 bg-slate-50/50">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-16 gap-6">
                            <div className="space-y-4">
                                <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-[10px] font-black uppercase tracking-widest">
                                    CAS D'EXCELLENCE
                                </span>
                                <h2 className="heading-pro-max text-left">
                                    <span className="italic font-light text-blue-600 block">Ressources connexes</span>
                                    <span className="font-bold text-slate-955 block">& Études de cas.</span>
                                </h2>
                            </div>
                            <div>
                                <Button variant="outline" className="rounded-full border-slate-300 text-slate-700 hover:bg-slate-100" asChild>
                                    <NavLink to="/blog">Toutes les ressources &nbsp;<ArrowRight className="w-4 h-4" /></NavLink>
                                </Button>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    cat: "Étude de cas : Campus",
                                    title: "Filtration et traitement d'un campus universitaire complet à Québec.",
                                    desc: "Découvrez comment nos filtres centralisés ont réduit les coûts de maintenance de 35% tout en assurant une eau d'une pureté absolue pour 15 000 étudiants."
                                },
                                {
                                    cat: "Étude de cas : Hôpital",
                                    title: "Conformité sanitaire et traitement ultra-pur d'un centre hospitalier.",
                                    desc: "Une solution stérile avec désinfection UV-C industrielle pour garantir la conformité microbiologique absolue aux points de soins critiques."
                                },
                                {
                                    cat: "Étude de cas : Hôtel",
                                    title: "Amélioration de l'expérience client et protection anticalcaire pour un hôtel 5 étoiles.",
                                    desc: "Une eau douce et protectrice pour l'ensemble des installations de bien-être, préservant la robinetterie haut de gamme et les systèmes de spa."
                                }
                            ].map((res, idx) => (
                                <div key={idx} className="bg-white border border-slate-100 p-10 rounded-[2.5rem] shadow-[0_15px_40px_rgba(0,0,0,0.02)] flex flex-col justify-between h-[360px] hover:-translate-y-1.5 transition-transform duration-500">
                                    <div className="space-y-4">
                                        <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest leading-none block">
                                            {res.cat}
                                        </span>
                                        <h4 className="text-xl font-bold text-slate-900 leading-snug">
                                            {res.title}
                                        </h4>
                                        <p className="text-slate-500 text-xs font-light leading-relaxed">
                                            {res.desc}
                                        </p>
                                    </div>
                                    <div className="pt-6 border-t border-slate-100">
                                        <NavLink to="/blog" className="inline-flex items-center gap-2 text-[10px] font-black text-slate-800 uppercase tracking-widest hover:text-blue-600 transition-colors group">
                                            Lire l'étude de cas <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                                        </NavLink>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SECTION 7: WATER WAVE CALL TO ACTION */}
                <section className="relative py-32 bg-slate-900 text-white overflow-hidden text-center">
                    {/* Deep Blue Water Wave Background Layer */}
                    <div className="absolute inset-0 z-0 opacity-20 mix-blend-overlay">
                        <img 
                            src={engineeringHeroImg} 
                            alt="Vagues d'eau pure" 
                            className="w-full h-full object-cover" 
                        />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/90 to-slate-900/40" />

                    <div className="container mx-auto px-6 max-w-4xl relative z-10 space-y-10">
                        <span className="inline-block px-4 py-1.5 bg-blue-500/20 border border-blue-500/30 text-blue-400 rounded-full text-[10px] font-black uppercase tracking-widest">
                            EXPERTIS TECHNIQUE
                        </span>
                        <h2 className="text-3xl md:text-6xl font-bold tracking-tight text-white leading-tight uppercase">
                            Laissez-nous vous aider à trouver <br />
                            <span className="text-blue-400 italic font-light lowercase">la solution adaptée.</span>
                        </h2>
                        <div className="pt-4">
                            <Button size="lg" className="h-16 px-12 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold uppercase tracking-widest text-xs transition-transform hover:scale-[1.02]" asChild>
                                <NavLink to="/contact-entreprises">DEMANDER UNE ÉTUDE TECHNIQUE</NavLink>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* SECTION 8: TESTIMONIALS SECTION */}
                <div className="bg-slate-50 py-32 border-y border-slate-100">
                    <TestimonialsSection 
                        filterProduct="Industriel"
                        limit={6}
                        title={
                            <div className="text-center space-y-3 mb-16">
                                <span className="text-[10px] font-black text-blue-500 uppercase tracking-[0.5em] block mb-4">AVIS CLIENTS</span>
                                <h2 className="heading-pro-max text-center uppercase">
                                    <span className="italic font-light text-[#18448F]">La satisfaction de nos </span>
                                    <span className="font-bold text-[#18448F]">partenaires.</span>
                                </h2>
                            </div>
                        }
                    />
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default SystemesCentralises;
