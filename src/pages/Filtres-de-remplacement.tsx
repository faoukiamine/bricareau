import React, { useEffect } from "react";
import Header from "@/components/Header";
import GlobalBreadcrumbs from "@/components/GlobalBreadcrumbs";
import Footer from "@/components/Footer";
import { Package, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import polypropyleneIcon from "@/assets/Polypropylene.svg";
import pleatedWaterFilters from "@/assets/Pleated Water Filters.png";
import GranularActivatedCarbon from "@/assets/gac water filters.png";
import CarbonBlockFilters from "@/assets/cbc water filters.png";
import AntiScaleFilter from "@/assets/Water Softening Filters.png";
import DeionizationCartridges from "@/assets/deionized water filters.png";
import InlineFilters from "@/assets/inline water filters.png";
import woundFilterImg from "@/assets/String Wound Cartridge Filters.png";

const FiltresDeRemplacement = () => {
    useEffect(() => {
        document.title = "Filtres de remplacement d'eau au Québec | Cartouches et Médias | Bricareau";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Large sélection de filtres de remplacement au Québec : sédiments, charbon actif, membrane osmose inverse et cartouches anti-calcaire. Maintenez la pureté de votre eau.");
        }

        // OG Tags
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) ogTitle.setAttribute("content", "Filtres de remplacement d'eau | Cartouches Haute Performance | Bricareau");
        const ogDesc = document.querySelector('meta[property="og:description"]');
        if (ogDesc) ogDesc.setAttribute("content", "Trouvez les cartouches et filtres compatibles avec votre système de traitement d'eau. Qualité supérieure pour une filtration durable.");
        const ogUrl = document.querySelector('meta[property="og:url"]');
        if (ogUrl) ogUrl.setAttribute("content", "https://bricareau.com/filtres-de-remplacement");
    }, []);
    const partCategories = [
        {
            items: [
                { 
                    name: "Filtres à sédiments", 
                    image: polypropyleneIcon,
                    desc: "Élimine efficacement le sable, la poussière, la rouille et les particules en suspension. Protège vos équipements ménagers et préserve la clarté de votre eau dès son entrée." 
                },
                { 
                    name: "Filtres à bobine", 
                    image: woundFilterImg,
                    desc: "Conçu pour une filtration en profondeur avec une grande capacité de rétention des impuretés. Idéal pour les eaux chargées en sédiments fins ou pour des applications industrielles." 
                },
                { 
                    name: "Filtres à papier plissé", 
                    image: pleatedWaterFilters,
                    desc: "Offre une surface de filtration maximale pour un débit d'eau optimal. Lavables et réutilisables, ils constituent une solution économique pour capturer les sédiments grossiers." 
                },
                { 
                    name: "Filtres à charbon actif granulé", 
                    image: GranularActivatedCarbon,
                    desc: "Élimine le chlore, les mauvais goûts et les odeurs désagréables de l'eau. Idéal pour améliorer la qualité gustative de l'eau potable au robinet." 
                },
                { 
                    name: "Filtres à charbon actif en bloc", 
                    image: CarbonBlockFilters,
                    desc: "Technologie de compression avancée offrant une double action : filtration fine des sédiments et absorption maximale du chlore, des composés organiques et des résidus de pesticides." 
                },
                { 
                    name: "Filtres anti calcaire", 
                    image: AntiScaleFilter,
                    desc: "Prévient activement la formation de tartre et de dépôts calcaires sur les éléments chauffants de vos appareils. Idéal pour prolonger la durée de vie de vos équipements." 
                },
                { 
                    name: "Filtres de déionisation", 
                    image: DeionizationCartridges,
                    desc: "Produit une eau d'une pureté absolue sans aucun minéral dissous (zéro TDS). Indispensable pour les laboratoires, l'aquariophilie et les applications industrielles de haute précision." 
                },
                { 
                    name: "Filtres inline", 
                    image: InlineFilters,
                    desc: "Cartouches compactes prêtes à l'emploi, parfaites pour les réfrigérateurs, les machines à café et les systèmes d'osmose inverse sous évier. Installation simple et rapide." 
                }
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">
            <Header />
            <main>
                {/* Breadcrumbs Section - Matching Adoucissement positioning */}
                <div className="relative h-[100px] bg-white hidden lg:block">
                    <div className="absolute top-[30px] left-0 right-0 z-30 pointer-events-none">
                        <div className="container mx-auto px-4 lg:px-6 pointer-events-auto">
                            <GlobalBreadcrumbs variant="light" />
                        </div>
                    </div>
                </div>

                {/* SLIDER SHOWCASE SECTION */}
                <section id="solutions-catalog" className="py-24 bg-white relative overflow-hidden border-b border-slate-100">
                    
                    {/* Centered Title */}
                    <div className="container mx-auto px-6 max-w-7xl text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                            <span className="italic font-light text-[#18448F] block text-2xl md:text-3xl mb-2">Filtres de remplacement :</span>
                            <span className="font-bold text-slate-900">La pureté préservée, jour après jour.</span>
                        </h2>
                        <p className="mt-6 text-slate-500 max-w-2xl mx-auto text-sm md:text-base font-light leading-relaxed">
                            Identifiez facilement le filtre compatible avec votre système pour garantir une performance optimale.
                        </p>
                    </div>

                    {/* Outer flex container spanning full viewport width */}
                    <div className="w-full flex flex-col lg:flex-row items-center gap-12 select-none overflow-hidden pl-0">
                        
                        {/* Left Column: Scrollable Cards Container */}
                        <div className="w-full lg:w-[73%] relative group pl-0">
                            {/* Left Navigation Arrow (Prev Circle Button) */}
                            <button 
                                onClick={() => {
                                    const el = document.getElementById("filters-slider-track");
                                    if (el) {
                                        const cardWidth = el.firstElementChild ? el.firstElementChild.clientWidth + 24 : 360;
                                        if (el.scrollLeft <= 15) {
                                            const maxScrollLeft = el.scrollWidth - el.clientWidth;
                                            el.scrollTo({ left: maxScrollLeft, behavior: "smooth" });
                                        } else {
                                            el.scrollBy({ left: -cardWidth, behavior: "smooth" });
                                        }
                                    }
                                }}
                                className="absolute -left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-slate-900 hover:bg-[#18448F] text-white flex items-center justify-center shadow-lg transition-all hover:scale-110 active:scale-95 opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity duration-300"
                                aria-label="Précédent"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>

                            {/* Right Navigation Arrow (Next Circle Button) */}
                            <button 
                                onClick={() => {
                                    const el = document.getElementById("filters-slider-track");
                                    if (el) {
                                        const cardWidth = el.firstElementChild ? el.firstElementChild.clientWidth + 24 : 360;
                                        const maxScrollLeft = el.scrollWidth - el.clientWidth;
                                        if (el.scrollLeft >= maxScrollLeft - 15) {
                                            el.scrollTo({ left: 0, behavior: "smooth" });
                                        } else {
                                            el.scrollBy({ left: cardWidth, behavior: "smooth" });
                                        }
                                    }
                                }}
                                className="absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-slate-900 hover:bg-[#18448F] text-white flex items-center justify-center shadow-lg transition-all hover:scale-110 active:scale-95"
                                aria-label="Suivant"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>

                            {/* Scroll Track - Starts flush to screen's left edge */}
                            <div 
                                id="filters-slider-track"
                                className="flex gap-6 overflow-x-auto scroll-smooth pb-6 snap-x snap-mandatory no-scrollbar pl-0 pr-12"
                                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                            >
                                {partCategories[0].items.map((card, idx) => (
                                    <div 
                                        key={idx} 
                                        className="w-[280px] md:w-[320px] lg:w-[calc((100%-4.5rem)/3.5)] shrink-0 bg-white border border-slate-100 rounded-[2rem] p-6 shadow-[0_15px_40px_rgba(0,0,0,0.02)] flex flex-col h-[520px] snap-start hover:shadow-md transition-shadow"
                                    >
                                        {/* Image container in light gray background */}
                                        <div className="h-[240px] bg-slate-50 rounded-2xl p-6 flex items-center justify-center mb-6 overflow-hidden border border-slate-100/50">
                                            {card.image ? (
                                                <img 
                                                    src={card.image} 
                                                    alt={card.name} 
                                                    className="max-h-full object-contain hover:scale-105 transition-transform duration-700 mix-blend-multiply" 
                                                />
                                            ) : (
                                                <Package className="h-16 w-16 text-slate-400" />
                                            )}
                                        </div>

                                        {/* Card Info */}
                                        <div className="space-y-3 flex-grow">
                                            <h4 className="text-xl font-bold text-slate-900">{card.name}</h4>
                                            <p className="text-slate-500 text-xs font-light leading-relaxed text-justify line-clamp-6">
                                                {card.desc}
                                            </p>
                                        </div>

                                        {/* Details Button */}
                                        <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                                            <NavLink 
                                                to="/contact" 
                                                className="inline-flex items-center gap-2 text-[10px] font-black text-slate-800 uppercase tracking-widest hover:text-[#18448F] transition-colors group"
                                            >
                                                Demander un prix <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-[#18448F]" />
                                            </NavLink>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Column: Stationary CTA Column - Aligned to standard container's right edge */}
                        <div className="w-full lg:w-[27%] flex flex-col justify-center items-center lg:items-start text-center lg:text-left pr-6 lg:pr-[calc((100vw-1232px)/2)] pl-6 lg:pl-12 space-y-6">
                            <h3 className="text-xl md:text-2xl font-medium text-slate-800 leading-snug">
                                Besoin d'aide pour choisir le bon filtre ?
                            </h3>
                            <p className="text-slate-500 text-xs font-light leading-relaxed">
                                Nos experts en traitement d'eau sont à votre disposition pour vous guider vers le modèle exact adapté à votre équipement.
                            </p>
                            <div>
                                <Button 
                                    variant="outline" 
                                    className="rounded-full border-slate-300 hover:border-slate-800 text-slate-800 hover:bg-slate-50 px-8 h-12 text-xs font-black uppercase tracking-widest transition-all"
                                    asChild
                                >
                                    <NavLink to="/contact">
                                        Consulter un expert
                                    </NavLink>
                                </Button>
                            </div>
                        </div>

                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default FiltresDeRemplacement;
