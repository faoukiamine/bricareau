import React, { useEffect, useState, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import TestimonialsSection from "@/components/TestimonialsSection";
import { ProMaxButton } from "@/components/ui/ProMaxButton";
import { NavLink } from "@/components/NavLink";
import { Droplets, ShieldCheck, Zap, Coffee, Utensils, Hotel, ArrowRight, ChevronRight, ChevronLeft, Phone, Handshake } from "lucide-react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from "@/components/ui/accordion";

// Import images
import heroImage from "@/assets/2151081881.jpg";
import kitchenImg from "@/assets/help-kitchen.jpg";
import laundryImg from "@/assets/2152006094.jpg";
import lobbyImg from "@/assets/6633.jpg";
import roSystemImg from "@/assets/144d1310-23fc-4cbd-92df-81d17d7a393c.jpg";
import espressoImg from "@/assets/2148892882.jpg";
import iceMachineImg from "@/assets/468.jpg";
import coffeeTeaImg from "@/assets/411.jpg";
import fountainDrinksImg from "@/assets/1730390356.jpg";
import steamEquipmentImg from "@/assets/121188.jpg";
import ingredientWaterImg from "@/assets/121171.jpg";
import pidImg from "@/assets/PID.webp";
import inst1Img from "@/assets/543328f92.jpg";
import inst2Img from "@/assets/1211.jpg";
import inst3Img from "@/assets/1212.jpg";
import analysisImg from "@/assets/2148581890.jpg";
import statementImg from "@/assets/1213.jpg";
import filterCoffeeImg from "@/assets/PURITY-C-Quell-ST-Advanced.webp";
import filterSteamImg from "@/assets/1218.png";
import filterSoftenerImg from "@/assets/Alternating Water Softener.png";
import roiImg1 from "@/assets/1219.jpg";
import roiImg3 from "@/assets/18036672_SIE_2720_1530_21_04_30_SIE_CRM_Dishwasher_Hand_Taking_Out_Wine_Glass_Basket_Motiv_11_0017.webp";
import roiImg2 from "@/assets/1220.jpg";
import roiImg4 from "@/assets/2148018784.jpg";
import chefPouringImg from "@/assets/25380.jpg";
import chefFridgeImg from "@/assets/3733.jpg";
import callToActionBg from "@/assets/1996.jpg";
import glasswareImg from "@/assets/121117.jpg";
import steamedVegImg from "@/assets/2151208276.jpg";
import uvSystemImg from "@/assets/UV system installation to kill bacteria.png";

const commitments = [
    {
        title: "Pérennité Absolue des Équipements",
        content: "Il n'existe aucune solution universelle en restauration. Nous concevons une architecture de filtration sur-mesure, rigoureusement calibrée après une analyse fine de votre eau. En respectant les normes les plus strictes de vos manufacturiers, nous éradiquons le tartre et la corrosion à la source. Le résultat ? Une longévité maximale de vos machines, zéro temps d'arrêt imprévu et des économies drastiques sur la maintenance."
    },
    {
        title: "Performance Opérationnelle Sans Effort",
        content: "Libérez-vous de la corvée des changements de cartouches. Avec Bricareau, vous ne gérez plus des filtres, vous bénéficiez d'une eau parfaite sous forme de service tout compris. Notre modèle d'abonnement mensuel inclut l'intégralité de l'entretien préventif. Vous gagnez un temps précieux, vos équipes se concentrent sur l'essentiel, et votre tranquillité d'esprit est totale."
    },
    {
        title: "Partenariat d'Excellence & Réactivité",
        content: "Plus qu'un fournisseur, nous sommes le partenaire de votre réussite quotidienne. Nous mesurons l'urgence de la restauration : c'est pourquoi nous garantissons les délais d'intervention les plus rapides de l'industrie. Avec notre équipe technique certifiée à vos côtés, vous avez la certitude de ne jamais manquer d'eau purifiée. Votre service continue, quoi qu'il arrive."
    }
];

const FiltrationHotelsRestaurants = () => {
    const carouselRef = useRef<HTMLDivElement>(null);
    const scrollLeft = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: -400, behavior: 'smooth' });
        }
    };
    const scrollRight = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: 400, behavior: 'smooth' });
        }
    };
    const [hoveredCommitment, setHoveredCommitment] = useState<number | null>(0);
    const [roiImageIndex, setRoiImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setRoiImageIndex((prev) => (prev + 1) % 4);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        document.title = "Filtration d'eau pour la Restauration | Bricareau";
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">
            <Header />
            
            <main>
                {/* HERO SECTION */}
                <Hero 
                    className="min-h-[100vh]"
                    image={heroImage}
                    highlightedTitle={<span className="font-bold not-italic text-[#8CC63F] drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)]">L'excellence de l'eau </span>}
                    mainTitle="au service de la gastronomie."
                    subtitle="Dans la restauration, l'eau est votre ingrédient principal et l'alliée silencieuse de vos équipements. De la perfection d'un espresso à l'éclat de votre verrerie, découvrez nos systèmes de filtration dédiés aux professionnels."
                    ctaText="PLANIFIER UNE CONSULTATION"
                    ctaLink="/contact-entreprises"
                    showPhone={true}
                    showBreadcrumbs={true}
                    breadcrumbVariant="light"
                    homeVariant={false}
                />


                {/* L'EAU IDÉALE BENTO GRID */}
                <section className="py-24 bg-[#f4f7f9]">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:auto-rows-[250px]">
                            {/* Text (Row 1, Full Width) */}
                            <div className="md:col-span-3 md:row-span-1 flex flex-col justify-center px-8 pb-12 text-center bg-transparent">
                                <h2 className="heading-pro-max text-[#18448F] mb-4">
                                    <span className="text-[#8CC63F]">L'eau filtrée</span> n'est pas un détail, <br className="hidden md:block" />
                                    <span>c'est le fondement de la cuisine de votre restaurant.</span>
                                </h2>
                                <p className="text-slate-600 font-light leading-relaxed max-w-3xl mx-auto">
                                    Un calcaire excessif détruit vos fours mixtes professionnels et ternit votre verrerie. Un chlore persistant altère subtilement le goût de votre café et de vos créations culinaires. Bricareau conçoit des systèmes de filtration sur mesure qui protègent vos investissements et subliment l'expérience de vos clients en salle.
                                </p>
                            </div>

                            {/* Image 1 (Col 1, Row 2-3) */}
                            <div className="md:col-span-1 md:row-span-2 overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300 min-h-[400px] md:min-h-0">
                                <img src={lobbyImg} alt="Buffet restaurant" className="w-full h-full object-cover" />
                            </div>

                            {/* Image 2 (Col 2, Row 2) */}
                            <div className="md:col-span-1 md:row-span-1 overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300 min-h-[250px] md:min-h-0">
                                <img src={glasswareImg} alt="Verres et vaisselle éclatants" className="w-full h-full object-cover" />
                            </div>

                            {/* Image 3 (Col 3, Row 2-3) */}
                            <div className="md:col-span-1 md:row-span-2 overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300 min-h-[400px] md:min-h-0">
                                <img src={chefPouringImg} alt="Chef cuisinier en préparation" className="w-full h-full object-cover" />
                            </div>

                            {/* Image 4 (Col 2, Row 3) */}
                            <div className="md:col-span-1 md:row-span-1 overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300 min-h-[250px] md:min-h-0">
                                <img src={steamedVegImg} alt="Légumes vapeur" className="w-full h-full object-cover" />
                            </div>
                        </div>
                        <div className="mt-16 text-center">
                            <ProMaxButton asChild>
                                <a href="/contact" className="inline-flex items-center justify-center gap-2">
                                    Contactez-nous
                                    <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-2" />
                                </a>
                            </ProMaxButton>
                        </div>
                    </div>
                </section>

                {/* LA OU L'EAU EST LE PLUS IMPORTANTE */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6 max-w-6xl">
                        <div className="text-center mb-16">
                            <h2 className="heading-pro-max">
                                <span className="font-bold not-italic text-[#18448F] block">Là où l'eau fait</span>
                                <span className="font-bold not-italic text-[#8CC63F] block">toute la différence.</span>
                            </h2>
                        </div>
                        <style>{`
                            .hide-scrollbar::-webkit-scrollbar {
                                display: none;
                            }
                        `}</style>
                        <div className="relative group px-4">
                            <div ref={carouselRef} className="flex overflow-x-auto gap-6 pb-8 pt-4 snap-x snap-mandatory scroll-smooth hide-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                            {/* Card 1: Coffee & Tea */}
                            <div className="group relative overflow-hidden rounded-2xl cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 h-96 w-[85vw] md:w-[400px] shrink-0 snap-center">
                                <img src={coffeeTeaImg} alt="Machines à café et à thé" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
                                <div className="absolute inset-0 p-8 flex flex-col justify-end text-center">
                                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">Café & infusions</h3>
                                    <p className="text-slate-200 font-light leading-relaxed text-sm opacity-90 group-hover:opacity-100 transition-opacity duration-300 min-h-[4rem]">Révélez la richesse aromatique de vos grains tout en neutralisant l'amertume liée aux impuretés de l'eau.</p>
                                </div>
                            </div>
                            {/* Card 2: Espresso */}
                            <div className="group relative overflow-hidden rounded-2xl cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 h-96 w-[85vw] md:w-[400px] shrink-0 snap-center">
                                <img src={espressoImg} alt="Équipement pour machine à expresso" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
                                <div className="absolute inset-0 p-8 flex flex-col justify-end text-center">
                                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">Machines à expresso</h3>
                                    <p className="text-slate-200 font-light leading-relaxed text-sm opacity-90 group-hover:opacity-100 transition-opacity duration-300 min-h-[4rem]">Garantissez une extraction parfaite et protégez vos précieuses chaudières contre la menace invisible du tartre.</p>
                                </div>
                            </div>
                            {/* Card 3: Fountain Drinks */}
                            <div className="group relative overflow-hidden rounded-2xl cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 h-96 w-[85vw] md:w-[400px] shrink-0 snap-center">
                                <img src={fountainDrinksImg} alt="Boissons à la fontaine" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
                                <div className="absolute inset-0 p-8 flex flex-col justify-end text-center">
                                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">Boissons en fontaine</h3>
                                    <p className="text-slate-200 font-light leading-relaxed text-sm opacity-90 group-hover:opacity-100 transition-opacity duration-300 min-h-[4rem]">Servez des sodas pétillants et rafraîchissants, totalement libérés des arrière-goûts de chlore ou de métaux.</p>
                                </div>
                            </div>
                            {/* Card 4: Ice Machines */}
                            <div className="group relative overflow-hidden rounded-2xl cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 h-96 w-[85vw] md:w-[400px] shrink-0 snap-center">
                                <img src={iceMachineImg} alt="Machines à glaçons" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
                                <div className="absolute inset-0 p-8 flex flex-col justify-end text-center">
                                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">Machines à glaçons</h3>
                                    <p className="text-slate-200 font-light leading-relaxed text-sm opacity-90 group-hover:opacity-100 transition-opacity duration-300 min-h-[4rem]">Produisez des glaçons cristallins à fonte lente qui n'altèrent jamais la saveur de vos cocktails et breuvages.</p>
                                </div>
                            </div>
                            {/* Card 5: Ingredient Water */}
                            <div className="group relative overflow-hidden rounded-2xl cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 h-96 w-[85vw] md:w-[400px] shrink-0 snap-center">
                                <img src={ingredientWaterImg} alt="Ingrédient Eau" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
                                <div className="absolute inset-0 p-8 flex flex-col justify-end text-center">
                                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">L'eau comme ingrédient</h3>
                                    <p className="text-slate-200 font-light leading-relaxed text-sm opacity-90 group-hover:opacity-100 transition-opacity duration-300 min-h-[4rem]">Sublimez vos bouillons, soupes et cuissons avec une eau purifiée qui respecte les saveurs authentiques de vos mets.</p>
                                </div>
                            </div>
                            {/* Card 6: Steam Equipment */}
                            <div className="group relative overflow-hidden rounded-2xl cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 h-96 w-[85vw] md:w-[400px] shrink-0 snap-center">
                                <img src={steamEquipmentImg} alt="Équipement à vapeur" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
                                <div className="absolute inset-0 p-8 flex flex-col justify-end text-center">
                                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">Fours & équipements à vapeur</h3>
                                    <p className="text-slate-200 font-light leading-relaxed text-sm opacity-90 group-hover:opacity-100 transition-opacity duration-300 min-h-[4rem]">Prolongez drastiquement la durée de vie de vos fours combinés en bloquant la corrosion et la calcification à la source.</p>
                                </div>
                            </div>
                        </div>
                            <button onClick={scrollLeft} aria-label="Précédent" className="absolute top-1/2 -translate-y-1/2 -left-2 md:-left-6 w-14 h-14 rounded-full bg-[#18448F] border-2 border-[#18448F] flex items-center justify-center text-white hover:bg-blue-800 transition-all duration-300 shadow-xl z-10">
                                <ChevronLeft className="w-6 h-6" />
                            </button>
                            <button onClick={scrollRight} aria-label="Suivant" className="absolute top-1/2 -translate-y-1/2 -right-2 md:-right-6 w-14 h-14 rounded-full bg-[#18448F] border-2 border-[#18448F] flex items-center justify-center text-white hover:bg-blue-800 transition-all duration-300 shadow-xl z-10">
                                <ChevronRight className="w-6 h-6" />
                            </button>
                        </div>
                    </div>
                </section>


                {/* SOLUTIONS GRID */}
                <section className="py-24 bg-slate-50 border-t border-slate-100">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="text-center mb-20">
                            <h2 className="heading-pro-max">
                                <span className="font-bold not-italic text-[#18448F] block">Les solutions de filtration d'eau</span>
                                <span className="font-bold not-italic text-[#18448F] block">pour les <span className="text-[#8CC63F]">professionnels de la restauration.</span></span>
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {/* Card 1: Boissons & Café */}
                            <div className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 flex flex-col">
                                <div className="h-56 w-full bg-slate-50 relative overflow-hidden flex items-center justify-center p-6 border-b border-slate-100">
                                    <img src={filterCoffeeImg} alt="Filtre Boissons et Café" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700" />
                                </div>
                                <div className="p-8 flex-1 flex flex-col">

                                    <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">Filtres d'eau spécialisés</h3>
                                    <p className="text-slate-500 font-light text-[15px] leading-relaxed mb-6 flex-1">
                                        Systèmes de filtration de précision pour vos machines à espresso et distributeurs de boissons. Révélez les arômes complexes de votre café et offrez des sodas constants.
                                    </p>
                                    <ul className="space-y-3">
                                        <li className="flex items-center gap-3 text-sm text-slate-600 font-light">
                                            <ShieldCheck className="w-4 h-4 text-emerald-500" /> Protection contre l'entartrage
                                        </li>
                                        <li className="flex items-center gap-3 text-sm text-slate-600 font-light">
                                            <Droplets className="w-4 h-4 text-emerald-500" /> Profil aromatique sublimé
                                        </li>
                                        <li className="flex items-center gap-3 text-sm text-slate-600 font-light">
                                            <Zap className="w-4 h-4 text-emerald-500" /> Maintenance réduite de 80%
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Card 2: Verrerie & Plonge */}
                            <div className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 flex flex-col">
                                <div className="h-56 w-full bg-slate-50 relative overflow-hidden flex items-center justify-center p-6 border-b border-slate-100">
                                    <img src={filterSoftenerImg} alt="Adoucisseur Commercial" className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-700" />
                                </div>
                                <div className="p-8 flex-1 flex flex-col">

                                    <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">Adoucisseurs d'eau</h3>
                                    <p className="text-slate-500 font-light text-[15px] leading-relaxed mb-6 flex-1">
                                        Adoucisseurs d'eau commerciaux pour des verres étincelants dès la sortie du lave-vaisselle, sans essuyage manuel. Réduisez considérablement vos coûts de détergents.
                                    </p>
                                    <ul className="space-y-3">
                                        <li className="flex items-center gap-3 text-sm text-slate-600 font-light">
                                            <ShieldCheck className="w-4 h-4 text-emerald-500" /> Zéro trace ni dépôt blanc
                                        </li>
                                        <li className="flex items-center gap-3 text-sm text-slate-600 font-light">
                                            <Droplets className="w-4 h-4 text-emerald-500" /> -30% de produits chimiques
                                        </li>
                                        <li className="flex items-center gap-3 text-sm text-slate-600 font-light">
                                            <Zap className="w-4 h-4 text-emerald-500" /> Gain de temps en plonge
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Card 3: Cuisson & Arrière-cuisine */}
                            <div className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 flex flex-col">
                                <div className="h-56 w-full bg-slate-50 relative overflow-hidden flex items-center justify-center p-6 border-b border-slate-100">
                                    <img src={filterSteamImg} alt="Filtre Cuisson et Vapeur" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700" />
                                </div>
                                <div className="p-8 flex-1 flex flex-col">

                                    <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">Systèmes d'osmose inverse</h3>
                                    <p className="text-slate-500 font-light text-[15px] leading-relaxed mb-6 flex-1">
                                        Systèmes d'osmose inverse et adoucisseurs pour vos fours mixtes et équipements à vapeur. Évitez les pannes coûteuses causées par la corrosion et le tartre.
                                    </p>
                                    <ul className="space-y-3">
                                        <li className="flex items-center gap-3 text-sm text-slate-600 font-light">
                                            <Zap className="w-4 h-4 text-emerald-500" /> Fonctionnement ininterrompu
                                        </li>
                                        <li className="flex items-center gap-3 text-sm text-slate-600 font-light">
                                            <ShieldCheck className="w-4 h-4 text-emerald-500" /> Cuisson à la vapeur parfaite
                                        </li>
                                        <li className="flex items-center gap-3 text-sm text-slate-600 font-light">
                                            <Droplets className="w-4 h-4 text-emerald-500" /> Eau purifiée pour les sauces
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ROI SECTION */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="flex flex-col lg:flex-row items-center gap-16">
                            <div className="lg:w-1/2 space-y-8">
                                <span className="inline-block px-4 py-1.5 bg-[#18448F] text-white rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-4 shadow-sm w-fit">Rendement sur Investissement</span>
                                <h2 className="heading-pro-max">
                                    <span className="font-bold not-italic text-[#18448F] block">Transformez une dépense</span>
                                    <span className="font-bold not-italic text-[#18448F] block">en <span className="text-[#8CC63F]">avantage compétitif.</span></span>
                                </h2>
                                <p className="text-slate-600 text-lg font-light leading-relaxed">
                                    Au-delà de la qualité en tasse et dans l'assiette, nos systèmes de traitement d'eau s'autofinancent rapidement en réduisant drastiquement vos coûts opérationnels en cuisine.
                                </p>
                                
                                <div className="pt-4">
                                    <Accordion type="single" collapsible className="w-full">
                                        <AccordionItem value="item-1" className="border-b border-slate-100 last:border-none">
                                            <AccordionTrigger className="text-slate-900 font-semibold text-left text-lg hover:no-underline py-5 transition-colors">
                                                <div className="text-left">
                                                    Élimination des achats d'eau embouteillée
                                                </div>
                                            </AccordionTrigger>
                                            <AccordionContent className="text-slate-600 text-[15px] leading-relaxed pb-6 text-justify">
                                                Servez votre propre eau filtrée et gazéifiée en salle, réduisez vos factures d'approvisionnement et proposez une boisson locale et éco-responsable.
                                            </AccordionContent>
                                        </AccordionItem>

                                        <AccordionItem value="item-2" className="border-b border-slate-100 last:border-none">
                                            <AccordionTrigger className="text-slate-900 font-semibold text-left text-lg hover:no-underline py-5 transition-colors">
                                                <div className="text-left">
                                                    Baisse drastique des frais de maintenance
                                                </div>
                                            </AccordionTrigger>
                                            <AccordionContent className="text-slate-600 text-[15px] leading-relaxed pb-6 text-justify">
                                                Une eau sans calcaire prévient les pannes des machines à café, lave-vaisselles et chaudières, vous faisant économiser des milliers de dollars en réparations.
                                            </AccordionContent>
                                        </AccordionItem>

                                        <AccordionItem value="item-3" className="border-b border-slate-100 last:border-none">
                                            <AccordionTrigger className="text-slate-900 font-semibold text-left text-lg hover:no-underline py-5 transition-colors">
                                                <div className="text-left">
                                                    Sublimation du goût et de l'expérience client
                                                </div>
                                            </AccordionTrigger>
                                            <AccordionContent className="text-slate-600 text-[15px] leading-relaxed pb-6 text-justify">
                                                L'eau représentant 98% de votre café, une filtration optimale révèle des arômes complexes, garantit des glaçons cristallins purs et fidélise votre clientèle par un goût constant.
                                            </AccordionContent>
                                        </AccordionItem>

                                        <AccordionItem value="item-4" className="border-b border-slate-100 last:border-none">
                                            <AccordionTrigger className="text-slate-900 font-semibold text-left text-lg hover:no-underline py-5 transition-colors">
                                                <div className="text-left">
                                                    Économies massives sur les produits d'entretien
                                                </div>
                                            </AccordionTrigger>
                                            <AccordionContent className="text-slate-600 text-[15px] leading-relaxed pb-6 text-justify">
                                                Une eau adoucie décuple l'efficacité des détergents. Réduisez vos doses de produits chimiques jusqu'à 30% tout en obtenant une verrerie impeccable sans essuyage.
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>
                                </div>
                            </div>
                            <div className="lg:w-1/2 w-full">
                                <div className="rounded-3xl overflow-hidden shadow-2xl relative aspect-square md:aspect-[4/3]">
                                    {[roiImg4, roiImg1, roiImg2, roiImg3].map((img, index) => (
                                        <img 
                                            key={index}
                                            src={img} 
                                            alt={`Avantage compétitif Bricareau ${index + 1}`} 
                                            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${roiImageIndex === index ? 'opacity-100' : 'opacity-0'}`} 
                                        />
                                    ))}
                                    <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 z-10">
                                        {[0, 1, 2, 3].map((index) => (
                                            <button 
                                                key={index} 
                                                onClick={() => setRoiImageIndex(index)}
                                                className={`h-2 rounded-full transition-all duration-300 ${roiImageIndex === index ? 'bg-white w-6' : 'bg-white/50 w-2 hover:bg-white/75'}`}
                                                aria-label={`Aller à l'image ${index + 1}`}
                                            />
                                        ))}
                                    </div>
                                    <div className="absolute inset-0 bg-[#18448F]/10"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* DARK QUOTE BANNER */}
                <section className="py-32 bg-[#18448F] text-center px-6">
                    <div className="container mx-auto max-w-4xl">
                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-8">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                            </svg>
                        </div>
                        <h2 className="text-2xl md:text-4xl font-light text-white leading-relaxed mb-8">
                            {"\"L'excellence d'un établissement se mesure aux détails invisibles. Une eau d'une pureté absolue est le secret qui sublime nos saveurs tout en protégeant nos équipements les plus coûteux.\""}
                        </h2>
                        <div className="flex items-center justify-center gap-4">
                            <div className="w-12 h-12 rounded-full overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=200&auto=format&fit=crop" alt="Chef" className="w-full h-full object-cover" />
                            </div>
                            <div className="text-left">
                                <p className="text-white font-bold">C. Louis</p>
                                <p className="text-blue-200 text-sm">Chef Exécutif d'une chaîne de restaurants</p>
                            </div>
                        </div>
                    </div>
                </section>



                {/* NOTRE PROCESSUS */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="text-center mb-20">
                            <h2 className="heading-pro-max">
                                <span className="font-bold not-italic text-[#18448F] block">Notre <span className="text-[#8CC63F]">démarche sur-mesure</span> pour</span>
                                <span className="font-bold not-italic text-[#18448F] block">les professionnels de la restauration.</span>
                            </h2>
                        </div>
                        <div className="space-y-24 md:space-y-32">
                            {/* Step 1 */}
                            <div className="relative max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-0 group">
                                <div className="w-full md:w-7/12 relative rounded-3xl overflow-hidden shadow-2xl">
                                    <img src={analysisImg} alt="Analyse de l'eau" className="w-full h-[350px] md:h-[450px] object-cover transition-transform duration-1000 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
                                </div>
                                
                                <div className="w-[90%] md:w-5/12 mx-auto md:mx-0 bg-white/95 backdrop-blur-xl p-8 md:p-12 rounded-3xl shadow-xl -mt-16 md:mt-0 md:-ml-16 relative z-10 border border-slate-100 group-hover:border-blue-200 transition-colors duration-500 overflow-hidden">
                                    <span className="text-9xl font-black text-slate-50 absolute -top-10 -right-6 z-0 group-hover:text-blue-50 transition-colors duration-500 select-none">01</span>
                                    <div className="relative z-10">
                                        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">{"Analyse de l'eau"}</h3>
                                        <p className="text-slate-600 leading-relaxed font-light">
                                            Tout commence par un audit complet de votre établissement. Nous prélevons des échantillons et analysons la dureté, le chlore, les TDS (Total Dissolved Solids) et la pression de votre réseau. Ce diagnostic précis nous permet de comprendre exactement ce dont votre équipement a besoin.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Step 2 */}
                            <div className="relative max-w-5xl mx-auto flex flex-col md:flex-row-reverse items-center gap-0 group">
                                <div className="w-full md:w-7/12 relative rounded-3xl overflow-hidden shadow-2xl">
                                    <img src={pidImg} alt="Schéma système" className="w-full h-[350px] md:h-[450px] object-cover transition-transform duration-1000 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
                                </div>
                                
                                <div className="w-[90%] md:w-5/12 mx-auto md:mx-0 bg-white/95 backdrop-blur-xl p-8 md:p-12 rounded-3xl shadow-xl -mt-16 md:mt-0 md:-mr-16 relative z-10 border border-slate-100 group-hover:border-blue-200 transition-colors duration-500 overflow-hidden">
                                    <span className="text-9xl font-black text-slate-50 absolute -top-10 -left-6 z-0 group-hover:text-blue-50 transition-colors duration-500 select-none">02</span>
                                    <div className="relative z-10">
                                        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">Conception sur mesure</h3>
                                        <p className="text-slate-600 leading-relaxed font-light">
                                            Sur la base de notre analyse, notre équipe technique conçoit une architecture de filtration adaptée à votre volume de service. Que vous ayez besoin d'un simple filtre pour votre machine à espresso ou d'un système d'osmose inverse centralisé pour toute la cuisine.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Step 3 */}
                            <div className="relative max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-0 group">
                                <div className="w-full md:w-7/12 relative rounded-3xl overflow-hidden shadow-2xl">
                                    <div className="grid grid-cols-2 gap-2 h-[350px] md:h-[450px] group-hover:scale-105 transition-transform duration-1000">
                                        <img src={inst3Img} alt="Installation" className="w-full h-full object-cover col-span-1 row-span-2" />
                                        <img src={inst2Img} alt="Installation" className="w-full h-full object-cover" />
                                        <img src={inst1Img} alt="Installation" className="w-full h-full object-contain bg-slate-50" />
                                    </div>
                                    <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors duration-500 pointer-events-none"></div>
                                </div>
                                
                                <div className="w-[90%] md:w-5/12 mx-auto md:mx-0 bg-white/95 backdrop-blur-xl p-8 md:p-12 rounded-3xl shadow-xl -mt-16 md:mt-0 md:-ml-16 relative z-10 border border-slate-100 group-hover:border-blue-200 transition-colors duration-500 overflow-hidden">
                                    <span className="text-9xl font-black text-slate-50 absolute -top-10 -right-6 z-0 group-hover:text-blue-50 transition-colors duration-500 select-none">03</span>
                                    <div className="relative z-10">
                                        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">Installation & Service</h3>
                                        <p className="text-slate-600 leading-relaxed font-light">
                                            {"L'installation est réalisée par nos techniciens certifiés en dehors de vos heures de service pour ne pas perturber votre activité. Ensuite, notre programme d'entretien préventif garantit que vos filtres sont remplacés à temps, sans que vous n'ayez jamais à y penser."}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 11. PREMIUM CTA SECTION (Copied from A.tsx) */}
                <section className="relative py-32 flex items-center overflow-hidden bg-[#18448F]">
                    {/* Animated background elements */}
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-600/20 to-transparent skew-x-12 translate-x-1/4" />
                    <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-cyan-400/10 to-transparent -skew-x-12 -translate-x-1/4" />
                    
                    {/* Background Image with Overlay */}
                    <div className="absolute inset-0 z-0 opacity-40">
                        <img
                            src={callToActionBg}
                            alt="Problématique d'eau dure sur la robinetterie - Solution Bricareau"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-[#18448F]/10 backdrop-blur-sm" />
                    </div>

                    <div className="container mx-auto px-6 relative z-10">
                        <div className="max-w-5xl mx-auto text-center space-y-12">
                            <div className="space-y-6">
                                <span className="inline-block px-4 py-1.5 bg-white text-blue-600 rounded-full text-[10px] font-black uppercase tracking-[0.4em]">
                                    L'INGRÉDIENT SECRET DE VOTRE RÉUSSITE
                                </span>
                                <h2 className="font-light block leading-tight lg:leading-[52px] text-white text-4xl md:text-5xl">
                                    Faites de l'eau pure le pilier <br />
                                    <span className="text-white italic font-bold font-serif">de votre gastronomie.</span>
                                </h2>
                                <p className="text-lg md:text-xl text-blue-100/80 max-w-2xl mx-auto font-light leading-relaxed">
                                    Sublimez le goût de vos créations culinaires tout en protégeant durablement vos fours mixtes et équipements coûteux. <br className="hidden md:block" />
                                    Activez <span className="text-white font-bold border-b border-white">une filtration sur mesure</span> dès aujourd'hui.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-4">
                                <ProMaxButton 
                                    asChild
                                    variant="white"
                                >
                                    <a href="tel:18552649328" className="flex items-center gap-3">
                                        <Phone className="h-5 w-5 animate-bounce" />
                                        Parlez à un expert
                                    </a>
                                </ProMaxButton>
                                <ProMaxButton
                                    variant="outline-white"
                                    asChild
                                >
                                    <NavLink to="/consultation">Planifiez une consultation</NavLink>
                                </ProMaxButton>
                            </div>

                        </div>
                    </div>
                </section>



            

                {/* RESSOURCES CONNEXES */}
                <section className="py-24 bg-slate-50 border-t border-slate-100">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="mb-12">
                            <h2 className="heading-pro-max">
                                <span className="font-light italic text-[#18448F] block">Nos guides et</span>
                                <span className="font-bold text-[#18448F] block">ressources connexes.</span>
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <a href="#" className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all">
                                <div className="aspect-[4/3] bg-gray-200 overflow-hidden">
                                    <img src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Guide Café" />
                                </div>
                                <div className="p-6">
                                    <span className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-2 block">Guide Pratique</span>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{"L'impact de l'eau sur l'extraction de votre espresso"}</h3>
                                    <span className="text-sm text-slate-500 flex items-center gap-1 font-bold group-hover:translate-x-1 transition-transform">
                                        {"Lire l'article"} <ChevronRight className="w-4 h-4" />
                                    </span>
                                </div>
                            </a>
                            <a href="#" className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all">
                                <div className="aspect-[4/3] bg-gray-200 overflow-hidden">
                                    <img src="https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Guide Cuisson" />
                                </div>
                                <div className="p-6">
                                    <span className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-2 block">Étude de cas</span>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{"Comment sauver vos fours mixtes de l'entartrage"}</h3>
                                    <span className="text-sm text-slate-500 flex items-center gap-1 font-bold group-hover:translate-x-1 transition-transform">
                                        {"Lire l'article"} <ChevronRight className="w-4 h-4" />
                                    </span>
                                </div>
                            </a>
                            <a href="#" className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all">
                                <div className="aspect-[4/3] bg-gray-200 overflow-hidden">
                                    <img src="https://images.unsplash.com/photo-1580982327559-c1202864eb11?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Guide Plonge" />
                                </div>
                                <div className="p-6">
                                    <span className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-2 block">{"Conseil d'expert"}</span>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">Obtenir une verrerie sans trace dès la sortie du lave-vaisselle</h3>
                                    <span className="text-sm text-slate-500 flex items-center gap-1 font-bold group-hover:translate-x-1 transition-transform">
                                        {"Lire l'article"} <ChevronRight className="w-4 h-4" />
                                    </span>
                                </div>
                            </a>
                        </div>
                    </div>
                </section></main>
            
            <Footer />
        </div>
    );
};

export default FiltrationHotelsRestaurants;
