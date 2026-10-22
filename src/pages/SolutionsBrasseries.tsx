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
import {
    Carousel,
    CarouselContent,
    CarouselItem
} from "@/components/ui/carousel";


// Assets
import brasserieWaterImg from "@/assets/124521.jpg";
import heroImg from "@/assets/2150573931.jpg";
import protectionConduitsImg from "@/assets/70609919.jpg";
import conformiteSanitaireImg from "@/assets/initial.jpg";
import economiesEnergieImg from "@/assets/2149281314.jpg";
import beerImg from "@/assets/2149757160.jpg";
import technicianInspectionImg from "@/assets/2151615016.jpg";
import reverseOsmosisSkidImg from "@/assets/144d1310-23fc-4cbd-92df-81d17d7a393c.jpg";
import uvSystemKillBacteriaImg from "@/assets/UV system installation to kill bacteria.png";
import filtrationSkidImg from "@/assets/7kbp.png";
import skid0454Img from "@/assets/0454.jpg";
import brewerySingleImg from "@/assets/5879.png";
import breweryBgDetailImg from "@/assets/2150573920.jpg";
import industrialSoftenerImg from "@/assets/2158.jpg";
import multimediaFiltersImg from "@/assets/water-softener-plant.jpg";

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
                    className="min-h-screen justify-center pb-16 md:pb-0 lg:pb-16"
                    paragraphClassName="text-slate-600 text-lg sm:text-xl font-light leading-relaxed max-w-xl"
                    image={heroImg}
                    highlightedTitle={<span className="font-bold not-italic text-[#18448F]">L'effervescence <span className="text-[#8CC63F]">de l'eau pure</span></span>}
                    mainTitle={<><br className="hidden md:block" />pour votre brasserie.</>}
                    subtitle="Sublimez le profil de vos bières grâce à une eau parfaitement maîtrisée. Nos solutions de filtration de pointe vous permettent d'ajuster votre profil minéral avec une régularité absolue, tout en optimisant le rendement de vos brassins et en réduisant votre empreinte écologique."
                    ctaText="Planifier une consultation"
                    ctaLink="/consultation"
                    showPhone={false}
                    showBreadcrumbs={true}
                    breadcrumbVariant="light"
                    singleLineTitle={true}
                />

                {/* SECTION 2: HIGH-FIDELITY STATEMENT BANNER */}
                <section className="py-24 bg-[#FAFBFD] border-y border-slate-100 relative overflow-hidden">
                    {/* Creative dissolved background image */}
                    <div className="absolute inset-0 z-0 select-none pointer-events-none opacity-[0.28] mix-blend-multiply">
                        <img 
                            src={breweryBgDetailImg} 
                            className="w-full h-full object-cover grayscale scale-105" 
                         alt="Image illustrant nos solutions - systèmes d'eau sur mesure | traitement d'eau Québec" title="Systèmes d'eau sur mesure par Bricareau" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#FAFBFD] via-transparent to-[#FAFBFD]" />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#FAFBFD] via-transparent to-[#FAFBFD]" />
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#FAFBFD_75%)]" />
                    </div>

                    <div className="container mx-auto px-6 text-center max-w-4xl relative z-10">
                        <div className="space-y-6">
                            <span className="inline-block px-4 py-1.5 bg-[#18448F] text-white rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-4 shadow-sm">
                                L'INGRÉDIENT LE PLUS CRITIQUE
                            </span>
                            <h2 className="mb-8 heading-pro-max text-center">
                                <span className="font-bold not-italic text-[#18448F] block">Sublimez le profil de brassage </span>
                                <span className="font-bold not-italic text-[#18448F] block text-center">de vos <span className="text-[#8CC63F]">bières.</span></span>
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
                    <div className="container mx-auto px-6 relative z-10 max-w-7xl">
                        
                        {/* Top half split layout */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                            
                            {/* Left column: titles & description */}
                            <div className="lg:col-span-5 space-y-6 text-left">
                                <span className="inline-block px-4 py-1.5 bg-[#18448F] text-white rounded-full text-[10px] font-black uppercase tracking-[0.3em]">
                                    L'INGÉNIERIE DU BRASSAGE
                                </span>
                                <h2 className="text-4xl lg:text-5xl leading-tight">
                                    <span className="italic font-light text-[#18448F] block">Ce que nous apportons</span>
                                    <span className="font-extrabold text-[#18448F] block">à l'excellence de vos brassins.</span>
                                </h2>
                                <p className="text-slate-500 font-light text-base leading-relaxed text-justify">
                                    Pour les maîtres brasseurs, chaque détail moléculaire compte. Notre ingénierie de l'eau permet de calibrer les minéraux, d'éradiquer le chlore et de garantir une pureté microbiologique totale. Donnez à vos recettes la constance et la grandeur qu'elles méritent.
                                </p>
                            </div>

                            {/* Right column: premium rounded video/diagram player */}
                            <div className="lg:col-span-7">
                                <div className="relative rounded-[2rem] overflow-hidden aspect-[16/10] bg-slate-950 group shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-slate-100 flex items-center justify-center cursor-pointer">
                                    <img 
                                        src={brewerySingleImg} 
                                        className="w-full h-full object-cover opacity-90 group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                                     alt="Schéma technique de filtration et de profilage d'eau pour brasseries" title="Filtration Bricareau par Bricareau" />
                                    {/* Glassmorphic Play Button overlay */}
                                    <div className="absolute inset-0 bg-blue-900/5 group-hover:bg-blue-900/10 transition-colors" />
                                    <div className="absolute w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                                        <svg className="w-8 h-8 text-[#18448F] fill-current ml-1" viewBox="0 0 24 24">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* Horizontal divider */}
                        <div className="border-t border-slate-100 my-16 w-full" />

                        {/* Bottom half: 4 feature columns */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
                            {[
                                {
                                    title: "Ajustement du profil minéral",
                                    desc: "Équilibrez précisément le rapport sulfate/chlorure et la dureté pour accentuer l'amertume tranchante de vos IPA ou la rondeur veloutée de vos stouts. Un contrôle total du pH de votre eau d'empâtage.",
                                    icon: Droplets
                                },
                                {
                                    title: "Déchloration absolue",
                                    desc: "Élimination complète du chlore et des chloramines pour bannir les phénols et les goûts médicaux ou plastiques de vos bières, libérant ainsi des arômes de malt et de houblon d'une netteté parfaite.",
                                    icon: Leaf
                                },
                                {
                                    title: "Stérilité microbiologique",
                                    desc: "Intégration d'une protection UV-C et d'une ultrafiltration en amont pour éliminer tout risque de contamination par des bactéries sauvages ou des levures indésirables, préservant la stabilité de vos produits.",
                                    icon: ShieldCheck
                                },
                                {
                                    title: "Préservation des équipements",
                                    desc: "Adoucissement et déminéralisation ciblés pour empêcher l'entartrage de vos chaudières à vapeur, échangeurs de chaleur à plaques et fermenteurs, réduisant considérablement vos cycles CIP.",
                                    icon: Settings
                                }
                            ].map((item, idx) => {
                                const IconComponent = item.icon;
                                return (
                                    <div key={idx} className="flex gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#E8F1FC] text-[#18448F] flex items-center justify-center">
                                            <IconComponent className="w-6 h-6" />
                                        </div>
                                        <div className="space-y-2 flex-1">
                                            <h4 className="text-lg font-bold text-slate-900 leading-snug lg:min-h-[3.5rem] flex items-start">
                                                {item.title}
                                            </h4>
                                            <p className="text-slate-500 text-xs font-light leading-relaxed text-justify">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
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
                                <span className="font-bold not-italic text-[#18448F] block">Optimiser & sécuriser</span>
                                <span className="font-bold not-italic text-[#18448F] block text-center">vos opérations de <span className="text-[#8CC63F]">brassage.</span></span>
                            </h2>
                            <p className="body-pro-max max-w-3xl mx-auto text-slate-500">
                                L'eau représente jusqu'à 95 % de votre bière. Sa qualité et sa constance sont fondamentales. Nous concevons des solutions de traitement sur mesure pour garantir la pureté de votre eau de brassage, optimiser l'efficacité de vos équipements et assurer la répétabilité parfaite de vos recettes.
                            </p>
                        </div>

                        <Carousel 
                            opts={{
                                align: "center",
                                loop: true,
                                breakpoints: {
                                    "(min-width: 1024px)": { align: "start" }
                                }
                            }}
                            className="w-full"
                        >
                            <CarouselContent className="-ml-8">
                            
                            {/* Block New 1: Adoucisseurs */}
                            <CarouselItem className="pl-8 md:basis-1/2 lg:basis-[30%]">
                            <div className="group block relative bg-[#18448F] rounded-[2.5rem] p-10 h-auto min-h-[600px] flex flex-col transition-all duration-700 hover:-translate-y-4 shadow-2xl overflow-hidden">
                                <div className="space-y-0 relative z-10 flex flex-col flex-1 w-full">
                                    <div className="h-16">
                                        <span className="inline-block px-3 py-1 bg-white/20 text-white rounded-full text-[9px] font-black uppercase tracking-wider">
                                            Dureté & Tartre
                                        </span>
                                    </div>
                                    <div className="w-full h-48 overflow-hidden rounded-3xl shadow-lg relative">
                                        <img 
                                            src={industrialSoftenerImg} 
                                            className="w-full h-full object-cover object-[50%_20%] scale-125" 
                                         alt="Adoucisseur d'eau industriel Bricareau" title="Adoucissement d'eau pour brasseries" />
                                    </div>
                                    <div className="space-y-6 pt-8 mt-auto">
                                        <h3 className="text-3xl font-medium text-white leading-[1.1] group-hover:text-blue-200 transition-colors">
                                            Adoucisseurs d'eau industriels
                                        </h3>
                                        <p className="text-white/70 text-sm leading-relaxed text-justify">
                                            Nos systèmes entièrement automatiques protègent vos équipements de brassage contre l'entartrage et optimisent l'extraction des houblons, sans aucune intervention manuelle. Améliorez l'efficacité de vos bouilloires et prolongez la durée de vie de vos CIP.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            </CarouselItem>

                            {/* Block 2: Multimedia & Carbon */}
                            <CarouselItem className="pl-8 md:basis-1/2 lg:basis-[30%]">
                            <div className="group block relative bg-[#18448F] rounded-[2.5rem] p-10 h-auto min-h-[600px] flex flex-col transition-all duration-700 hover:-translate-y-4 shadow-2xl overflow-hidden">
                                <div className="space-y-0 relative z-10 flex flex-col flex-1 w-full">
                                    <div className="h-16">
                                        <span className="inline-block px-3 py-1 bg-white/20 text-white rounded-full text-[9px] font-black uppercase tracking-wider">
                                            Chlore & Sédiments
                                        </span>
                                    </div>
                                    <div className="w-full h-48 overflow-hidden rounded-3xl shadow-lg relative">
                                        <img 
                                            src={multimediaFiltersImg} 
                                            className="w-full h-full object-cover object-top" 
                                         alt="Filtres industriels multimédia et charbon actif" title="Filtration au charbon actif" />
                                    </div>
                                    <div className="space-y-6 pt-8 mt-auto">
                                        <h3 className="text-3xl font-medium text-white leading-[1.1] group-hover:text-blue-200 transition-colors">
                                            Filtres automatiques & Charbon actif
                                        </h3>
                                        <p className="text-white/70 text-sm leading-relaxed text-justify">
                                            Équipés de vannes de lavage à contre-courant automatiques, nos filtres éliminent le chlore, les chloramines et les COV en toute autonomie. Assurez la pureté aromatique de vos bières et évitez les faux goûts sans vous soucier de l'entretien.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            </CarouselItem>

                            {/* Block 1: Osmosis & Mineral Profiling */}
                            <CarouselItem className="pl-8 md:basis-1/2 lg:basis-[30%]">
                            <div className="group block relative bg-[#18448F] rounded-[2.5rem] p-10 h-auto min-h-[600px] flex flex-col transition-all duration-700 hover:-translate-y-4 shadow-2xl overflow-hidden">
                                <div className="space-y-0 relative z-10 flex flex-col flex-1 w-full">
                                    <div className="h-16">
                                        <span className="inline-block px-3 py-1 bg-white/20 text-white rounded-full text-[9px] font-black uppercase tracking-wider">
                                            Répétabilité des Recettes
                                        </span>
                                    </div>
                                    <div className="w-full h-48 overflow-hidden rounded-3xl shadow-lg relative">
                                        <img 
                                            src={uvSystemKillBacteriaImg} 
                                            className="w-full h-full object-cover object-top" 
                                         alt="Équipement d'osmose inverse industriel de haute technologie conçu par Bricareau" title="Traitement d'eau Québec par Bricareau" />
                                    </div>
                                    <div className="space-y-6 pt-8 mt-auto">
                                        <h3 className="text-3xl font-medium text-white leading-[1.1] group-hover:text-blue-200 transition-colors">
                                            Systèmes d'osmose inverse
                                        </h3>
                                        <p className="text-white/70 text-sm leading-relaxed text-justify">
                                            Générez une eau de base parfaitement pure grâce à nos systèmes d'osmose inverse, puis réintroduisez avec précision les sels minéraux spécifiques à chaque style de bière, de la Pilsner traditionnelle à la NEIPA moderne.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            </CarouselItem>

                            {/* Block 2: Brewery Custom Skids */}
                            <CarouselItem className="pl-8 md:basis-1/2 lg:basis-[30%]">
                            <div className="group block relative bg-[#18448F] rounded-[2.5rem] p-10 h-auto min-h-[600px] flex flex-col transition-all duration-700 hover:-translate-y-4 shadow-2xl overflow-hidden">
                                <div className="space-y-0 relative z-10 flex flex-col flex-1 w-full">
                                    <div className="h-16">
                                        <span className="inline-block px-3 py-1 bg-white/20 text-white rounded-full text-[9px] font-black uppercase tracking-wider">
                                            Ingénierie & Intégration CIP
                                        </span>
                                    </div>
                                    <div className="w-full h-48 overflow-hidden rounded-3xl shadow-lg relative">
                                        <img 
                                            src={skid0454Img} 
                                            className="w-full h-full object-cover object-top" 
                                         alt="Station modulaire de filtration et skid de traitement pour microbrasseries" title="Filtration Bricareau par Bricareau" />
                                    </div>
                                    <div className="space-y-6 pt-8 mt-auto">
                                        <h3 className="text-3xl font-medium text-white leading-[1.1] group-hover:text-blue-200 transition-colors">
                                            Skids de Filtration sur mesure & CIP
                                        </h3>
                                        <p className="text-white/70 text-sm leading-relaxed text-justify">
                                            Nous concevons des stations de traitement compactes qui s'intègrent directement à vos conduites et systèmes de nettoyage en place (CIP). Optimisez l'encombrement au sol tout en réduisant la consommation d'eau et de produits chimiques.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            </CarouselItem>

                            {/* Block 3: Audits & 24/7 Support */}
                            <CarouselItem className="pl-8 md:basis-1/2 lg:basis-[30%]">
                            <div className="group block relative bg-[#18448F] rounded-[2.5rem] p-10 h-auto min-h-[600px] flex flex-col transition-all duration-700 hover:-translate-y-4 shadow-2xl overflow-hidden">
                                <div className="space-y-0 relative z-10 flex flex-col flex-1 w-full">
                                    <div className="h-16">
                                        <span className="inline-block px-3 py-1 bg-white/20 text-white rounded-full text-[9px] font-black uppercase tracking-wider">
                                            Disponibilité & Stabilité
                                        </span>
                                    </div>
                                    <div className="w-full h-48 overflow-hidden rounded-3xl shadow-lg relative">
                                        <img 
                                            src={technicianInspectionImg} 
                                            className="w-full h-full object-cover object-top" 
                                         alt="Technicien Bricareau effectuant la maintenance préventive d'une station de traitement" title="Traitement d'eau Québec par Bricareau" />
                                    </div>
                                    <div className="space-y-6 pt-8 mt-auto">
                                        <h3 className="text-3xl font-medium text-white leading-[1.1] group-hover:text-blue-200 transition-colors">
                                            Audits de Qualité & Support 24/7
                                        </h3>
                                        <p className="text-white/70 text-sm leading-relaxed text-justify">
                                            Notre équipe technique et nos ingénieurs experts interviennent en urgence 24/7 pour veiller à la constance de votre eau. De plus, nos contrats d'entretien préventif garantissent la disponibilité permanente de vos lignes de production.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            </CarouselItem>

                            </CarouselContent>
                        </Carousel>
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
                                 <h2 className="mb-8 heading-pro-max text-center">
                                <span className="italic font-light text-[#18448F] block">La satisfaction de nos </span>
                                <span className="font-bold text-[#18448F] block text-center">maîtres brasseurs.</span>
                            </h2>
                            </div>
                        }
                    />
                </div>

                {/* SECTION 7: PREMIUM CTA SECTION */}
                <section className="py-32 bg-[#18448F] relative overflow-hidden text-center">
                    <div className="absolute inset-0 bg-radial-gradient opacity-20" />
                    
                    {/* Background Image with Overlay */}
                    <div className="absolute inset-0 z-0 opacity-40">
                        <img
                            src={beerImg}
                            className="w-full h-full object-cover grayscale brightness-110"
                         alt="Technicien inspectant les systèmes de filtration de la brasserie - Solution Bricareau" title="Filtration Bricareau par Bricareau" />
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
                                        Parler à un expert
                                    </a>
                                </ProMaxButton>
                                <ProMaxButton
                                    variant="outline-white"
                                    asChild
                                >
                                    <NavLink to="/contact-entreprises">Planifier une consultation gratuite</NavLink>
                                </ProMaxButton>
                            </div>


                        </div>
                    </div>
                </section>

                {/* SECTION 6: RELATED RESOURCES / CASE STUDIES - masquée sur le front-end (ordinateur, tablette, mobile) */}
                <section className="hidden py-32 bg-white">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-16 gap-6">
                            <div className="text-left">
                                <h2 className="mb-8 heading-pro-max text-left">
                                    <span className="font-bold text-[#18448F] block text-left">Ressources</span>
                                </h2>
                                <div className="w-24 h-1 bg-blue-600"></div>
                            </div>
                            <div>
                                <ProMaxButton asChild>
                                    <NavLink to="/blog" className="inline-flex items-center justify-center gap-2 group">
                                        Toutes les ressources
                                        <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-2" />
                                    </NavLink>
                                </ProMaxButton>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    cat: "Étude de cas : Microbrasserie",
                                    title: "Profilage minéral complet d'une microbrasserie à Montréal.",
                                    desc: "Découvrir comment notre solution d'osmose inverse couplée à une minéralisation précise a stabilisé le goût des IPA et éliminé les variations saisonnières d'eau."
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

