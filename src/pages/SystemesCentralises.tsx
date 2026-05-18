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
import ExpertAvatars from "@/components/ExpertAvatars";
import { ProMaxButton } from "@/components/ui/ProMaxButton";

// High-fidelity generated assets
import engineeringHeroImg from "@/assets/2148836794.jpg";
import protectionConduitsImg from "@/assets/70609919.jpg";
import conformiteSanitaireImg from "@/assets/initial.jpg";
import economiesEnergieImg from "@/assets/2149281314.jpg";
import technicianInspectionImg from "@/assets/10271.jpg";
import reverseOsmosisSkidImg from "@/assets/144d1310-23fc-4cbd-92df-81d17d7a393c.jpg";
import filtrationSkidImg from "@/assets/7kbp.png";
import elkayBottleFillerImg from "@/assets/elkayv2-LZS8WSLK_image_vignette.webp";

const SystemesCentralises = () => {
    const [activeAdvantageImage, setActiveAdvantageImage] = useState(protectionConduitsImg);

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
                    highlightedTitle="Solutions de filtration d'eau "
                    mainTitle="centralisées pour bâtiments."
                    subtitle="Protégez l'ensemble des installations de votre bâtiment avec une filtration industrielle et commerciale centralisée de premier ordre. Une solution sur mesure pour éliminer le calcaire, le chlore et les contaminants."
                    ctaText="DEMANDER UNE ÉTUDE SUR MESURE"
                    ctaLink="/contact-entreprises"
                    showPhone={true}
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
                            <h2 className="mb-8 heading-pro-max text-center">
                                <span className="italic font-light text-[#18448F] block">Engagé à fournir des solutions </span>
                                <span className="font-bold text-[#18448F] block text-center">de haute qualité.</span>
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
                            <span className="inline-block px-4 py-1.5 bg-[#18448F] text-white rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-8">
                                L'INGÉNIERIE DE L'INFRASTRUCTURE
                            </span>
                            <h2 className="mb-8 heading-pro-max text-center">
                                <span className="italic font-light text-[#18448F] block">Ce que nous apportons </span>
                                <span className="font-bold text-[#18448F] block text-center">à la performance de votre campus.</span>
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
                                                    "item-0": protectionConduitsImg,
                                                    "item-1": economiesEnergieImg,
                                                    "item-2": conformiteSanitaireImg,
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

                {/* SECTION 5: COLUMN SPACE & SERVICE GRID */}
                <section className="py-32 bg-white">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="text-center space-y-4 mb-20">
                            <span className="inline-block px-4 py-1.5 bg-[#18448F] text-white rounded-full text-[10px] font-black uppercase tracking-widest">
                                NOTRE SERVICE GLOBAL
                            </span>
                            <h2 className="mb-8 heading-pro-max text-center">
                                <span className="italic font-light text-[#18448F] block">Valoriser & sécuriser</span>
                                <span className="font-bold text-[#18448F] block text-center">vos infrastructures.</span>
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            
                            {/* Block 1: Elkay Bottle Filling Stations */}
                            <div className="flex flex-col gap-8 bg-slate-50 p-10 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-md transition-shadow justify-between">
                                <div className="space-y-4">
                                    <span className="inline-block px-3 py-1 bg-[#18448F] text-white rounded-full text-[9px] font-black uppercase tracking-wider">
                                        Remplissage Écoresponsable
                                    </span>
                                    <h3 className="text-3xl font-bold text-slate-900 leading-tight">
                                        Stations de Remplissage Elkay
                                    </h3>
                                    <p className="text-slate-500 font-light text-sm leading-relaxed text-justify">
                                        Intégrez nos stations de remplissage automatique Elkay intelligentes. Une solution robuste et hygiénique à activation sans contact, idéale pour réduire l'usage de plastique à usage unique et offrir une eau réfrigérée et purifiée de grand débit à vos usagers.
                                    </p>
                                </div>
                                <div className="aspect-[16/10] w-full rounded-2xl overflow-hidden shadow-inner">
                                    <img 
                                        src={elkayBottleFillerImg} 
                                        alt="Station de remplissage automatique de bouteilles d'eau Elkay intégrée par Bricareau" 
                                        className="w-full h-full object-cover" 
                                    />
                                </div>
                            </div>

                            {/* Block 2: Innovative Solutions */}
                            <div className="flex flex-col gap-8 bg-slate-50 p-10 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-md transition-shadow justify-between">
                                <div className="space-y-4">
                                    <span className="inline-block px-3 py-1 bg-[#18448F] text-white rounded-full text-[9px] font-black uppercase tracking-wider">
                                        Conception & Planification
                                    </span>
                                    <h3 className="text-3xl font-bold text-slate-900 leading-tight">
                                        Ingénierie & Solutions sur mesure
                                    </h3>
                                    <p className="text-slate-500 font-light text-sm leading-relaxed text-justify">
                                        Nous concevons des stations de filtration centralisées modulaires s'intégrant parfaitement dans vos locaux techniques, optimisant l'encombrement au sol tout en maximisant la performance globale.
                                    </p>
                                </div>
                                <div className="aspect-[16/10] w-full rounded-2xl overflow-hidden shadow-inner">
                                    <img 
                                        src={filtrationSkidImg} 
                                        alt="Station de filtration centralisée modulaire conçue par Bricareau" 
                                        className="w-full h-full object-cover" 
                                    />
                                </div>
                            </div>

                            {/* Block 3: Maintenance and Support */}
                            <div className="flex flex-col gap-8 bg-slate-50 p-10 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-md transition-shadow justify-between">
                                <div className="space-y-4">
                                    <span className="inline-block px-3 py-1 bg-[#18448F] text-white rounded-full text-[9px] font-black uppercase tracking-wider">
                                        Disponibilité & Opérabilité
                                    </span>
                                    <h3 className="text-3xl font-bold text-slate-900 leading-tight">
                                        Maintenance & Support technique
                                    </h3>
                                    <p className="text-slate-500 font-light text-sm leading-relaxed text-justify">
                                        Notre assistance technique disponible 24/7 et nos contrats d'entretien préventif sur mesure garantissent la continuité de vos opérations et la longévité de vos infrastructures hydrauliques.
                                    </p>
                                </div>
                                <div className="aspect-[16/10] w-full rounded-2xl overflow-hidden shadow-inner">
                                    <img 
                                        src={reverseOsmosisSkidImg} 
                                        alt="Équipement d'osmose inverse industriel et support technique Bricareau" 
                                        className="w-full h-full object-cover" 
                                    />
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* SECTION 8: TESTIMONIALS SECTION (MOVED HERE) */}
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

                {/* SECTION 7: PREMIUM CTA SECTION */}
                <section className="py-32 bg-[#18448F] relative overflow-hidden text-center">
                    <div className="absolute inset-0 bg-radial-gradient opacity-20" />
                    
                    {/* Background Image with Overlay */}
                    <div className="absolute inset-0 z-0 opacity-25">
                        <img
                            src={technicianInspectionImg}
                            alt="Technicien inspectant les systèmes de filtration du bâtiment - Solution Bricareau"
                            className="w-full h-full object-cover grayscale brightness-110"
                        />
                        <div className="absolute inset-0 bg-[#18448F]/30 backdrop-blur-sm" />
                    </div>

                    <div className="container mx-auto px-6 relative z-10">
                        <div className="max-w-5xl mx-auto text-center space-y-12">
                            <div className="space-y-6">
                                <span className="inline-block px-4 py-1.5 bg-white text-[#18448F] rounded-full text-[10px] font-black uppercase tracking-[0.4em]">
                                    PROTECTION & PERFORMANCE DES INFRASTRUCTURES
                                </span>
                                <h2 className="font-light block leading-tight lg:leading-[52px] text-white">
                                    Garantissez une eau d'excellence <br />
                                    <span className="text-white italic font-bold font-serif">à l'échelle de votre bâtiment.</span>
                                </h2>
                                <p className="text-lg md:text-xl text-blue-100/90 max-w-3xl mx-auto font-light leading-relaxed">
                                    Des solutions de filtration centralisées sur mesure pour protéger vos canalisations, préserver vos équipements thermiques et garantir la conformité sanitaire absolue de tout votre réseau. <br className="hidden md:block" />
                                    Sécurisez <span className="text-white font-bold border-b border-white">la longévité de vos installations</span> dès aujourd'hui.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-4">
                                <ProMaxButton 
                                    asChild
                                    variant="white"
                                >
                                    <a href="tel:18552649328" className="flex items-center gap-3">
                                        <Phone className="h-5 w-5 animate-bounce" />
                                        Parlez à un ingénieur-conseil
                                    </a>
                                </ProMaxButton>
                                <ProMaxButton
                                    variant="outline-white"
                                    asChild
                                >
                                    <NavLink to="/contact-entreprises">Demander une étude technique</NavLink>
                                </ProMaxButton>
                            </div>

                            <div className="pt-8 flex flex-col items-center gap-4">
                                <ExpertAvatars />
                                <p className="text-blue-200/60 text-sm font-medium">
                                    Déjà adopté par <span className="text-white">plus de 180 gestionnaires immobiliers</span> et sites d'envergure au Québec.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 6: RELATED RESOURCES / CASE STUDIES (MOVED TO THE END) */}
                <section className="py-32 bg-white">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-16 gap-6">
                            <div className="space-y-4">
                                <span className="inline-block px-4 py-1.5 bg-[#18448F] text-white rounded-full text-[10px] font-black uppercase tracking-widest">
                                    CAS D'EXCELLENCE
                                </span>
                                <h2 className="mb-8 heading-pro-max text-left">
                                    <span className="italic font-light text-[#18448F] block">Ressources connexes</span>
                                    <span className="font-bold text-[#18448F] block text-left">& Études de cas.</span>
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
                                <div key={idx} className="bg-slate-50/50 border border-slate-100 p-10 rounded-[2.5rem] shadow-[0_15px_40px_rgba(0,0,0,0.02)] flex flex-col justify-between h-[360px] hover:-translate-y-1.5 transition-transform duration-500">
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
            </main>

            <Footer />
        </div>
    );
};

export default SystemesCentralises;
