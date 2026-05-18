import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TestimonialsSection from "@/components/TestimonialsSection";
import Hero from "@/components/Hero";
import {
    Beer,
    Droplets,
    Zap,
    Leaf,
    ShieldCheck,
    Star,
    GlassWater,
    ArrowRight,
    Phone,
    Building2,
    Settings,
    Activity,
    Plus,
    Minus,
    ChevronDown,
    ChevronRight,
    Eye
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ProMaxButton } from "@/components/ui/ProMaxButton";
import ExpertAvatars from "@/components/ExpertAvatars";

// Assets
import brasserieWaterImg from "@/assets/124521.jpg";
import heroImg from "@/assets/2150573931.jpg";
import protectionConduitsImg from "@/assets/70609919.jpg";
import conformiteSanitaireImg from "@/assets/initial.jpg";
import economiesEnergieImg from "@/assets/2149281314.jpg";
import technicianInspectionImg from "@/assets/10271.jpg";
import reverseOsmosisSkidImg from "@/assets/144d1310-23fc-4cbd-92df-81d17d7a393c.jpg";
import uvSystemKillBacteriaImg from "@/assets/UV system installation to kill bacteria.png";
import filtrationSkidImg from "@/assets/7kbp.png";
import skid0454Img from "@/assets/0454.jpg";
import brewerySingleImg from "@/assets/5879.png";
import breweryBgDetailImg from "@/assets/2150573920.jpg";

const SolutionsBrasseries = () => {

    useEffect(() => {
        document.title = "Solutions pour Brasseries | Bricareau";
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main>
                {/* Hero Section */}
                <Hero 
                    image={heroImg}
                    highlightedTitle="L'effervescence pure"
                    mainTitle="pour votre brasserie."
                    subtitle="Transformez l'expérience de vos clients avec des solutions d'eau filtrée, plate ou pétillante, directement à la source. Alliez rentabilité, design et engagement écologique."
                    ctaText="Essai gratuit 7 jours"
                    ctaLink="/contact-entreprises"
                    showPhone={true}
                    showBreadcrumbs={true}
                    breadcrumbVariant="light"
                    badge="Espace Brasserie & Bar"
                />

                {/* SECTION 2: HIGH-FIDELITY STATEMENT BANNER */}
                <section className="py-24 bg-[#FAFBFD] border-y border-slate-100 relative overflow-hidden">
                    {/* Creative dissolved background image */}
                    <div className="absolute inset-0 z-0 select-none pointer-events-none opacity-[0.12] mix-blend-multiply">
                        <img 
                            src={breweryBgDetailImg} 
                            alt="" 
                            className="w-full h-full object-cover grayscale scale-105" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#FAFBFD] via-transparent to-[#FAFBFD]" />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#FAFBFD] via-transparent to-[#FAFBFD]" />
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#FAFBFD_75%)]" />
                    </div>

                    <div className="container mx-auto px-6 text-center max-w-4xl relative z-10">
                        <div className="space-y-6">
                            <h3 className="text-xs font-black text-blue-600 uppercase tracking-[0.2em] mb-4">
                                L'INGRÉDIENT LE PLUS CRITIQUE
                            </h3>
                            <h2 className="mb-8 heading-pro-max text-center">
                                <span className="italic font-light text-[#18448F] block">Sublimez le profil de brassage </span>
                                <span className="font-bold text-[#18448F] block text-center">de vos bières.</span>
                            </h2>
                            <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full" />
                            <p className="text-slate-500 text-lg font-light leading-relaxed max-w-3xl mx-auto pt-2">
                                L'eau représente plus de 95% de la composition de votre bière. Elle dicte la performance de vos levures, l'extraction de vos houblons et la clarté du produit fini. Nos solutions de filtration et de traitement d'eau sur mesure pour microbrasseries garantissent un profil minéral constant, une élimination totale du chlore et une pureté bactériologique absolue. Protégez vos cuves, optimisez vos recettes et assurez la répétabilité parfaite de chaque brassin.
                            </p>
                            <div className="pt-4">
                                <a href="#brewery-benefits" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-bold uppercase tracking-widest text-xs transition-colors group">
                                    En savoir plus <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 3: ACCORDION FEATURE GRID ("Ce que nous apportons à l'excellence de vos brassins") */}
                <section id="brewery-benefits" className="py-24 bg-white relative overflow-hidden">
                    {/* Background vertical line */}
                    <div className="absolute left-[10%] top-0 bottom-0 w-px bg-slate-200 hidden xl:block z-0" />

                    <div className="container mx-auto px-6 relative z-10">
                        <div className="text-center mb-24">
                            <span className="inline-block px-4 py-1.5 bg-[#18448F] text-white rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-8">
                                L'INGÉNIERIE DU BRASSAGE
                            </span>
                            <h2 className="mb-8 heading-pro-max text-center">
                                <span className="italic font-light text-[#18448F] block">Ce que nous apportons </span>
                                <span className="font-bold text-[#18448F] block text-center">à l'excellence de vos brassins.</span>
                            </h2>
                        </div>

                        <div className="relative max-w-6xl mx-auto">
                            {/* Vertical text on the left */}
                            <div className="absolute -left-16 top-1/2 -translate-y-1/2 hidden xl:block">
                                <span className="inline-block [writing-mode:vertical-lr] rotate-180 text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 h-fit">
                                    SOLUTIONS BRASSICOLES
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
                                        >
                                            {[
                                                {
                                                    title: "Ajustement du profil minéral",
                                                    desc: "Équilibrez précisément le rapport sulfate/chlorure et la dureté pour accentuer l'amertume tranchante de vos IPA ou la rondeur veloutée de vos stouts. Un contrôle total du pH de votre eau d'empâtage."
                                                },
                                                {
                                                    title: "Déchloration absolue",
                                                    desc: "Élimination complète du chlore et des chloramines pour bannir les phénols et les goûts médicaux ou plastiques de vos bières, libérant ainsi des arômes de malt et de houblon d'une netteté parfaite."
                                                },
                                                {
                                                    title: "Stérilité microbiologique",
                                                    desc: "Intégration d'une protection UV-C et d'une ultrafiltration en amont pour éliminer tout risque de contamination par des bactéries sauvages ou des levures indésirables, préservant la stabilité de vos produits."
                                                },
                                                {
                                                    title: "Préservation des équipements",
                                                    desc: "Adoucissement et déminéralisation ciblés pour empêcher l'entartrage de vos chaudières à vapeur, échangeurs de chaleur à plaques et fermenteurs, réduisant considérablement vos cycles CIP."
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
                                            src={brewerySingleImg} 
                                            alt="Schéma technique de filtration et de profilage d'eau pour brasseries" 
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
                                NOTRE SERVICE BRASSICOLE
                            </span>
                            <h2 className="mb-8 heading-pro-max text-center">
                                <span className="italic font-light text-[#18448F] block">Optimiser & sécuriser</span>
                                <span className="font-bold text-[#18448F] block text-center">vos opérations de brassage.</span>
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            
                            {/* Block 1: Osmosis & Mineral Profiling */}
                            <div className="flex flex-col gap-8 bg-slate-50 p-10 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-md transition-shadow justify-between">
                                <div className="space-y-4">
                                    <span className="inline-block px-3 py-1 bg-[#18448F] text-white rounded-full text-[9px] font-black uppercase tracking-wider">
                                        Répétabilité des Recettes
                                    </span>
                                    <h3 className="text-3xl font-bold text-slate-900 leading-tight">
                                        Osmose Inverse & Profilage Minéral
                                    </h3>
                                    <p className="text-slate-500 font-light text-sm leading-relaxed text-justify">
                                        Générez une eau de base parfaitement pure (0 ppm) grâce à nos systèmes d'osmose inverse industriels, puis réintroduisez avec précision les sels minéraux spécifiques à chaque style de bière, de la Pilsner traditionnelle à la NEIPA moderne.
                                    </p>
                                </div>
                                <div className="aspect-[16/10] w-full rounded-2xl overflow-hidden shadow-inner">
                                    <img 
                                        src={uvSystemKillBacteriaImg} 
                                        alt="Équipement d'osmose inverse industriel de haute technologie conçu par Bricareau" 
                                        className="w-full h-full object-cover" 
                                    />
                                </div>
                            </div>

                            {/* Block 2: Brewery Custom Skids */}
                            <div className="flex flex-col gap-8 bg-slate-50 p-10 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-md transition-shadow justify-between">
                                <div className="space-y-4">
                                    <span className="inline-block px-3 py-1 bg-[#18448F] text-white rounded-full text-[9px] font-black uppercase tracking-wider">
                                        Ingénierie & Intégration CIP
                                    </span>
                                    <h3 className="text-3xl font-bold text-slate-900 leading-tight">
                                        Skids de Filtration sur mesure & CIP
                                    </h3>
                                    <p className="text-slate-500 font-light text-sm leading-relaxed text-justify">
                                        Nous concevons des stations de traitement compactes qui s'intègrent directement à vos conduites et systèmes de nettoyage en place (CIP). Optimisez l'encombrement au sol tout en réduisant la consommation d'eau et de produits chimiques.
                                    </p>
                                </div>
                                <div className="aspect-[16/10] w-full rounded-2xl overflow-hidden shadow-inner">
                                    <img 
                                        src={skid0454Img} 
                                        alt="Station modulaire de filtration et skid de traitement pour microbrasseries" 
                                        className="w-full h-full object-cover" 
                                    />
                                </div>
                            </div>

                            {/* Block 3: Audits & 24/7 Support */}
                            <div className="flex flex-col gap-8 bg-slate-50 p-10 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-md transition-shadow justify-between">
                                <div className="space-y-4">
                                    <span className="inline-block px-3 py-1 bg-[#18448F] text-white rounded-full text-[9px] font-black uppercase tracking-wider">
                                        Disponibilité & Stabilité
                                    </span>
                                    <h3 className="text-3xl font-bold text-slate-900 leading-tight">
                                        Audits de Qualité & Support 24/7
                                    </h3>
                                    <p className="text-slate-500 font-light text-sm leading-relaxed text-justify">
                                        Notre équipe technique et nos ingénieurs experts interviennent en urgence 24/7 pour veiller à la constance de votre eau. De plus, nos contrats d'entretien préventif garantissent la disponibilité permanente de vos lignes de production.
                                    </p>
                                </div>
                                <div className="aspect-[16/10] w-full rounded-2xl overflow-hidden shadow-inner">
                                    <img 
                                        src={technicianInspectionImg} 
                                        alt="Technicien Bricareau effectuant la maintenance préventive d'une station de traitement" 
                                        className="w-full h-full object-cover" 
                                    />
                                </div>
                            </div>

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
                                    <span className="font-bold text-[#18448F]">maîtres brasseurs.</span>
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
                            alt="Technicien inspectant les systèmes de filtration de la brasserie - Solution Bricareau"
                            className="w-full h-full object-cover grayscale brightness-110"
                        />
                        <div className="absolute inset-0 bg-[#18448F]/30 backdrop-blur-sm" />
                    </div>

                    <div className="container mx-auto px-6 relative z-10">
                        <div className="max-w-5xl mx-auto text-center space-y-12">
                            <div className="space-y-6">
                                <span className="inline-block px-4 py-1.5 bg-white text-[#18448F] rounded-full text-[10px] font-black uppercase tracking-[0.4em]">
                                    OPTIMISATION & PERFORMANCE BRASSICOLE
                                </span>
                                <h2 className="font-light block leading-tight lg:leading-[52px] text-white">
                                    Garantissez la signature gustative <br />
                                    <span className="text-white italic font-bold font-serif">de vos bières, brassin après brassin.</span>
                                </h2>
                                <p className="text-lg md:text-xl text-blue-100/90 max-w-3xl mx-auto font-light leading-relaxed">
                                    Des solutions de filtration et de traitement d'eau sur mesure pour éliminer les chloramines, équilibrer les profils ioniques et écarter tout risque microbiologique. <br className="hidden md:block" />
                                    Assurez <span className="text-white font-bold border-b border-white">la réputation et la constance de votre brasserie</span> dès aujourd'hui.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-4">
                                <ProMaxButton 
                                    asChild
                                    variant="white"
                                >
                                    <a href="tel:18552649328" className="flex items-center gap-3">
                                        <Phone className="h-5 w-5 animate-bounce" />
                                        Parlez à un ingénieur brasseur
                                    </a>
                                </ProMaxButton>
                                <ProMaxButton
                                    variant="outline-white"
                                    asChild
                                >
                                    <NavLink to="/contact-entreprises">Demander une analyse d'eau gratuite</NavLink>
                                </ProMaxButton>
                            </div>

                            <div className="pt-8 flex flex-col items-center gap-4">
                                <ExpertAvatars />
                                <p className="text-blue-200/60 text-sm font-medium">
                                    Déjà adopté par <span className="text-white">plus de 45 brasseries et microbrasseries d'exception</span> au Québec.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 6: RELATED RESOURCES / CASE STUDIES */}
                <section className="py-32 bg-white">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-16 gap-6">
                            <div className="space-y-4">
                                <span className="inline-block px-4 py-1.5 bg-[#18448F] text-white rounded-full text-[10px] font-black uppercase tracking-widest">
                                    CAS DE RÉUSSITE BRASSICOLE
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
                                    cat: "Étude de cas : Microbrasserie",
                                    title: "Profilage minéral complet d'une microbrasserie à Montréal.",
                                    desc: "Découvrez comment notre solution d'osmose inverse couplée à une minéralisation précise a stabilisé le goût des IPA et éliminé les variations saisonnières d'eau."
                                },
                                {
                                    cat: "Étude de cas : Brasserie de Débit",
                                    title: "Déchloration complète et filtration à Sherbrooke.",
                                    desc: "Élimination absolue de tout composé phénolique et microbiologique grâce à un système d'ultrafiltration industrielle, assurant 50 000 hl/an de pureté."
                                },
                                {
                                    cat: "Étude de cas : Économie Circulaire",
                                    title: "Réutilisation d'eau et optimisation CIP pour brasserie verde.",
                                    desc: "Une solution de filtration innovante permettant de recycler plus de 30% de l'eau de lavage et de rinçage chaud des cuves sans aucun risque sanitaire."
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

export default SolutionsBrasseries;

