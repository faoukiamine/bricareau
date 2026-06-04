import React, { useEffect } from "react";
import Header from "@/components/Header";
import GlobalBreadcrumbs from "@/components/GlobalBreadcrumbs";
import Hero from "@/components/Hero";
import heroFiltersImg from "@/assets/Big-Blue-Filter-Housing-banner.webp";
import Footer from "@/components/Footer";
import { Package, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProMaxButton } from "@/components/ui/ProMaxButton";
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
                <Hero 
                    image={heroFiltersImg}
                    highlightedTitle={<span className="font-bold text-[#18448F]">Cartouches filtrantes</span>}
                    mainTitle={<span className="font-bold text-[#18448F]">de remplacement</span>}
                    subtitle="Trouvez facilement le filtre d'eau de remplacement idéal pour votre système de filtration résidentiel, commercial ou industriel."
                    ctaText="Trouver mon filtre"
                    ctaLink="#solutions-catalog"
                    showPhone={true}
                    showBreadcrumbs={true}
                    singleLineTitle={false}
                />

                {/* SLIDER SHOWCASE SECTION */}
                <section id="solutions-catalog" className="py-24 bg-white relative overflow-hidden border-b border-slate-100">
                    
                    {/* Centered Title */}
                    <div className="container mx-auto px-6 max-w-7xl text-center mb-20">
                        <h2 className="mb-8 heading-pro-max text-center">
                            <span className="font-bold not-italic text-[#18448F] block">Filtres de remplacement :</span>
                            <span className="font-bold text-[#18448F] block text-center"><span className="text-[#8CC63F]">La pureté préservée</span>, jour après jour.</span>
                        </h2>
                        <p className="mt-6 text-slate-500 max-w-2xl mx-auto text-sm md:text-base font-light leading-relaxed">
                            Identifiez facilement le filtre compatible avec votre système pour garantir une performance optimale.
                        </p>
                    </div>

                    {/* Outer layout container */}
                    <div className="w-full flex flex-col select-none overflow-hidden">
                        
                        {/* Top: Scrollable Cards Container */}
                        <div className="w-full lg:w-[73%] relative group pl-0 mb-16 mx-auto">
                            {/* Left Navigation Arrow */}
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

                            {/* Right Navigation Arrow */}
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
                                className="absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-slate-900 hover:bg-[#18448F] text-white flex items-center justify-center shadow-lg transition-all hover:scale-110 active:scale-95 opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity duration-300"
                                aria-label="Suivant"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>

                            {/* Scroll Track */}
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

                        {/* Bottom: Stationary CTA Column */}
                        <div className="container mx-auto max-w-3xl flex flex-col justify-center items-center text-center px-6 space-y-6">
                            <h3 className="text-xl md:text-2xl font-medium text-slate-800 leading-snug">
                                Besoin d'aide pour choisir le bon filtre ?
                            </h3>
                            <p className="text-slate-500 text-sm md:text-base font-light leading-relaxed">
                                Nos experts en traitement d'eau sont à votre disposition pour vous guider vers le modèle exact adapté à votre équipement.
                            </p>
                            <div>
                                <ProMaxButton 
                                    className="w-full sm:w-auto"
                                    asChild
                                >
                                    <NavLink to="/contact" className="flex items-center justify-center">
                                        Consulter un expert
                                    </NavLink>
                                </ProMaxButton>
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
