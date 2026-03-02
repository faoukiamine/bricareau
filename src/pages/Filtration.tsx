import React, { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
    ChevronRight,
    CheckCircle2,
    X,
    Wrench,
    GlassWater,
    HandCoins,
    Recycle,
    Phone,
    Play,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import heroFiltration from "@/assets/5846952.jpg";
import drinkingWaterImg from "@/assets/Solutions d'eau potable.webp";
import specializedFiltersImg from "@/assets/Filtres d'eau spécialisés.webp";
import teenagerShowerImg from "@/assets/teenager-taking-shower-reduce-hangover-effect.jpg";
import undersinkSystemImg from "@/assets/Triple Stage Filter.jpg";
import africanGirlImg from "@/assets/african-girl-stands-kitchen-drinks-water.jpg";
import glassOfWaterImg from "@/assets/glass-of-water.jpeg";
import waterTestingImg from "@/assets/Legionella-Monitoring.webp";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import ConsultationFormSection from "@/components/ConsultationFormSection";
import TestimonialsSection from "@/components/TestimonialsSection";

const Filtration = () => {
    const [showAllFaqs, setShowAllFaqs] = React.useState(false);
    useEffect(() => {
        document.title = "Filtration d'eau : Une pureté maximale pour votre maison";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Découvrez nos systèmes de filtration d'eau pour toute la maison. Éliminez les contaminants et améliorez le goût de votre eau avec Bricareau.");
        }

        // OG Tags
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) ogTitle.setAttribute("content", "Filtration d'eau : Pureté maximale | Bricareau");
        const ogDesc = document.querySelector('meta[property="og:description"]');
        if (ogDesc) ogDesc.setAttribute("content", "Une eau pure à chaque robinet. Investissez dans la santé de votre famille avec nos solutions de filtration avancées.");
    }, []);


    const comparisonData = [
        { feature: "Installation", whole: "Point d'entrée", basic: "Sous l'évier" },
        { feature: "Portée de filtration", whole: "Toute la maison", basic: "Point d'utilisation" },
        { feature: "Élimine sédiments, chlore et odeurs", whole: true, basic: true },
        { feature: "Traitement spécialisé (Fer, Soufre, Manganèse)", whole: true, basic: false },
        { feature: "Élimination plomb, arsenic et métaux lourds", whole: false, basic: true },
        { feature: "Pureté de l'eau (99% sans contaminants)", whole: false, basic: true },
        { feature: "Rinçage et entretien du média", whole: "Automatique", basic: "Manuel (Cartouches)" },
        { feature: "Changement de membrane périodique", whole: false, basic: true },
        { feature: "Goût d'une eau embouteillée premium", whole: true, basic: "Supérieur" },
        { feature: "Emplacement courant", whole: "Salle mécanique", basic: "Cuisine" },
    ];

    return (

        <div className="min-h-screen bg-background text-slate-900 font-sans">
            <Header />
            <main>
                {/* 1.Hero Section */}
                <section className="relative h-[850px] flex items-center overflow-hidden -mt-[104px] pt-[104px]">
                    <div className="absolute inset-0 z-0">
                        <img
                            src={heroFiltration}
                            alt="Système de filtration d'eau résidentiel haute performance Bricareau Canada - Eau pure et santé"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40 lg:bg-gradient-to-r lg:from-black/60 lg:to-transparent" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-white via-white/10 to-transparent" />
                        {/* Brightening Start 1/3 Right */}
                        <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white/90 via-white/40 to-transparent" />
                    </div>

                    <div className="container mx-auto px-6 relative z-10">
                        <div className="max-w-2xl text-white">
                            <h1
                                className="text-[28px] md:text-[42px] leading-[32px] md:leading-[42px] font-light mb-8 tracking-tighter text-white text-justify max-w-xl"
                                style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                            >
                                <span className="font-bold">Filtration d'eau résidentielle</span> <br />
                                <span className="font-bold">L'excellence pour votre santé.</span>
                            </h1>
                            <p className="text-lg font-light leading-snug text-white/95 mb-8 max-w-xl text-justify">
                                Ne laissez plus les contaminants couler de vos robinets. Nos systèmes de filtration d'eau avancés constituent un bouclier durable pour votre maison, vous garantissant une eau d'une pureté irréprochable pour toute votre famille au Canada.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button
                                    size="lg"
                                    className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 h-14 shadow-lg shadow-blue-200"
                                    style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                                    asChild
                                >
                                    <a href="#consultation">
                                        Planifiez une consultation gratuite
                                    </a>
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="bg-white/10 hover:bg-white/20 text-white border-white rounded-full px-8 h-14 backdrop-blur-sm shadow-lg"
                                    style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                                    asChild
                                >
                                    <a href="tel:18552649328" className="flex items-center gap-2">
                                        <Phone className="h-5 w-5" />
                                        1-855-264-9328
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>
                    {/* Wave Separator Bottom - Transition to Blue Section */}
                    <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-[0] z-20 pointer-events-none">
                        <svg
                            className="relative block w-full h-[50px] md:h-[80px]"
                            data-name="Layer 1"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 1200 120"
                            preserveAspectRatio="none"
                        >
                            <path
                                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                                fill="#2563EB"
                                transform="rotate(180 600 60)"
                            ></path>
                        </svg>
                    </div>
                </section>

                {/* 2. Benefits Section */}
                <section className="py-24 bg-blue-600 text-white text-center">
                    <div className="container mx-auto px-6 text-center">
                        <div className="text-center mb-16">
                            <h2 className="text-[32px] md:text-[48px] font-normal text-white mb-8 leading-[1.2] md:leading-[48px] tracking-tighter text-center">
                                Pourquoi choisir nos <br />systèmes de filtration d'eau ?
                            </h2>
                            <p className="text-lg font-light leading-relaxed text-blue-100 max-w-2xl mx-auto text-justify">
                                Plus qu'une simple filtration, c'est une protection avancée pour votre santé et un confort durable pour votre foyer.
                            </p>
                        </div>
                        <div className="flex flex-wrap justify-center gap-x-12 gap-y-16">
                            {[
                                { icon: GlassWater, title: "Goût exceptionnel", desc: "Élimine 99% du chlore et des mauvaises odeurs pour une eau pure au robinet." },
                                { icon: HandCoins, title: "Économies réelles", desc: "Réduisez vos dépenses en éliminant définitivement l'achat d'eau embouteillée." },
                                { icon: Recycle, title: "Éco-responsable", desc: "Contribuez à la protection de l'environnement en réduisant les déchets plastiques." },
                                { icon: Wrench, title: "Entretien facile", desc: "Des systèmes conçus pour une maintenance simple et des changements de filtres rapides." }
                            ].map((benefit, i) => (
                                <div key={i} className="flex flex-col items-center group w-full sm:w-[calc(50%-3rem)] lg:w-[calc(25%-3rem)]">
                                    <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center mb-8 transition-all group-hover:scale-110 group-hover:bg-white/10">
                                        <benefit.icon className="h-10 w-10 text-blue-600 group-hover:text-white" />
                                    </div>
                                    <h4 className="text-2xl font-medium mb-4 tracking-tight">{benefit.title}</h4>
                                    <p className="text-lg font-light leading-relaxed text-blue-100 text-justify">{benefit.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>


                {/* 3. Whole House Water Filter Section - PRO EXCELLENCE */}
                <section className="py-24 bg-white relative overflow-hidden">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col lg:flex-row items-start gap-16">
                            {/* Left Side: Image with Video Button */}
                            <div className="w-full lg:w-1/2 lg:sticky lg:top-24 mb-12 lg:mb-0">
                                <div className="rounded-[2.5rem] overflow-hidden shadow-2xl relative h-[300px] sm:h-[400px] lg:h-[600px] w-full group">
                                    <img
                                        src={teenagerShowerImg}
                                        alt="Douche sous eau filtrée Bricareau - Protection de la peau et des cheveux contre le chlore"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500" />

                                    {/* Play Button Card */}
                                    <div className="absolute bottom-10 left-10 bg-blue-600/90 backdrop-blur-md rounded-2xl p-4 pr-8 flex items-center gap-4 shadow-xl cursor-pointer hover:bg-blue-700 transition-all hover:scale-105 active:scale-95 group/btn border border-white/20">
                                        <div className="bg-white rounded-full p-3 shadow-lg group-hover/btn:shadow-xl transition-shadow relative">
                                            <div className="absolute inset-0 rounded-full bg-blue-200 animate-ping opacity-20"></div>
                                            <Play className="h-6 w-6 text-blue-600 fill-blue-600 ml-1 relative z-10" />
                                        </div>
                                        <div>
                                            <span className="font-bold text-white text-lg block">Voir la vidéo</span>
                                            <span className="text-blue-100 text-xs font-light">Découvrir l'expérience</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Side: Content */}
                            <div className="w-full lg:w-1/2 pt-12 lg:pt-4 relative z-10">
                                <span className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-4 block flex items-center gap-2">
                                    <span className="w-8 h-[2px] bg-blue-600 inline-block"></span>
                                    Eau filtrée pour toute la maison
                                </span>
                                <h2 className="text-[32px] md:text-[48px] font-bold text-slate-900 mb-6 leading-[1.1] tracking-tighter">
                                    Redécouvrez le luxe d'une eau filtrée cristalline.
                                </h2>
                                <p className="text-lg font-light leading-relaxed text-gray-600 mb-12 text-justify">
                                    Protégez vos appareils ménagers, votre tuyauterie et votre peau. Nos systèmes de filtration centrale traitent chaque goutte d'eau qui entre dans votre foyer pour une tranquillité d'esprit totale.
                                </p>

                                <div className="space-y-3">
                                    {[
                                        { title: "Défense Plomberie", desc: "Dites adieu au chlore résiduel et aux sédiments qui corrodent vos précieux appareils et obstruent votre robinetterie de luxe." },
                                        { title: "Clarté de l'Eau", desc: "Réduisez drastiquement la turbidité pour une eau limpide à chaque robinet, protégeant ainsi l'éclat de vos sanitaires et de votre linge." },
                                        { title: "Performance Longue Durée", desc: "Une technologie haute fidélité offrant une filtration efficace pendant 5 à 7 ans sans aucun entretien lourd ou changement fréquent." }
                                    ].map((item, i) => (
                                        <div key={i} className="group/item">
                                            <h3 className="text-xl font-bold mb-4 text-blue-600 flex items-center gap-3">
                                                <span className="text-2xl opacity-50">0{i + 1}.</span> {item.title}
                                            </h3>
                                            <div className="pl-6 border-l-2 border-blue-600/20 group-hover/item:border-blue-600 transition-colors duration-500 ml-2">
                                                <p className="text-base text-gray-500 leading-relaxed text-justify">
                                                    {item.desc}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-14 pt-8 border-t border-gray-100">
                                    <NavLink to="/Filtres-deau-pour-toute-la-maison">
                                        <Button className="rounded-full bg-blue-600 hover:bg-blue-700 text-white px-8 h-14 text-base shadow-lg transition-all duration-300 w-full sm:w-auto hover:shadow-blue-200">
                                            Découvrir nos filtres d'eau <ChevronRight className="ml-2 h-5 w-5" />
                                        </Button>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. Reverse Osmosis Water Filtration Section - STYLE MATCHED */}
                <section className="py-24 bg-gray-50 relative overflow-hidden">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col lg:flex-row-reverse items-start gap-16">
                            {/* Right Side (visually): Image with Video Button */}
                            <div className="w-full lg:w-1/2 lg:sticky lg:top-24 mb-12 lg:mb-0">
                                <div className="rounded-[2.5rem] overflow-hidden shadow-2xl relative h-[300px] sm:h-[400px] lg:h-[600px] w-full group">
                                    <img
                                        src={glassOfWaterImg}
                                        alt="Verre d'eau pure provenant d'un système d'osmose inverse Bricareau - Élimination du goût de chlore"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500" />

                                    {/* Play Button Card */}
                                    <div className="absolute bottom-10 right-10 bg-blue-600/90 backdrop-blur-md rounded-2xl p-4 pl-8 flex items-center gap-4 shadow-xl cursor-pointer hover:bg-blue-700 transition-all hover:scale-105 active:scale-95 group/btn border border-white/20 flex-row-reverse">
                                        <div className="bg-white rounded-full p-3 shadow-lg group-hover/btn:shadow-xl transition-shadow relative">
                                            <div className="absolute inset-0 rounded-full bg-blue-200 animate-ping opacity-20"></div>
                                            <Play className="h-6 w-6 text-blue-600 fill-blue-600 ml-1 relative z-10" />
                                        </div>
                                        <div className="text-right">
                                            <span className="font-bold text-white text-lg block">Voir la vidéo</span>
                                            <span className="text-blue-100 text-xs font-light">Découvrir l'expérience</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Left Side (visually): Content */}
                            <div className="w-full lg:w-1/2 pt-12 lg:pt-4 relative z-10">
                                <span className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-4 block flex items-center gap-2">
                                    <span className="w-8 h-[2px] bg-blue-600 inline-block"></span>
                                    EAU PURE À VOLONTÉ
                                </span>
                                <h2 className="text-[32px] md:text-[48px] font-bold text-slate-900 mb-6 leading-[1.1] tracking-tighter">
                                    Votre source d'eau cristalline, <br />sans compromis.
                                </h2>
                                <p className="text-lg font-light leading-relaxed text-gray-600 mb-12 text-justify">
                                    Découvrez comment notre système d'osmose inverse libère votre quotidien du goût de chlore et de la corvée des bouteilles plastique. Profitez d'une eau légère, d'une clarté de diamant, idéale pour une hydratation saine et une cuisine riche en saveurs.
                                </p>

                                <div className="space-y-3">
                                    {[
                                        { title: "Pureté Absolue", desc: "Élimine 99% des contaminants, métaux lourds et micro-plastiques pour une sécurité totale de toute la famille." },
                                        { title: "Éco-Conscient", desc: "Réduisez drastiquement votre empreinte carbone en éliminant définitivement les bouteilles d'eau jetables de votre foyer." },
                                        { title: "Saveurs Révélées", desc: "Sublimez le goût de vos boissons et petits plats avec une eau pure, sans chlore ni impuretés pour une cuisine d'exception." }
                                    ].map((item, i) => (
                                        <div key={i} className="group/item">
                                            <h3 className="text-xl font-bold mb-4 text-blue-600 flex items-center gap-3">
                                                <span className="text-2xl opacity-50">0{i + 1}.</span> {item.title}
                                            </h3>
                                            <div className="pl-6 border-l-2 border-blue-600/20 group-hover/item:border-blue-600 transition-colors duration-500 ml-2">
                                                <p className="text-base text-gray-500 leading-relaxed text-justify">
                                                    {item.desc}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-14 pt-8 border-t border-gray-200">
                                    <NavLink to="/systeme-de-filtration-deau-potable">
                                        <Button className="rounded-full bg-blue-600 hover:bg-blue-700 text-white px-8 h-14 text-base shadow-lg transition-all duration-300 w-full sm:w-auto hover:shadow-blue-200">
                                            Découvrir nos systèmes d'osmose inverse <ChevronRight className="ml-2 h-5 w-5" />
                                        </Button>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* 5. Under Sink Water Filtration Systems Section - STYLE MATCHED */}
                <section className="py-24 bg-white relative overflow-hidden">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col lg:flex-row items-start gap-16">
                            {/* Left Side: Image with Video Button */}
                            <div className="w-full lg:w-1/2 lg:sticky lg:top-24 mb-12 lg:mb-0">
                                <div className="rounded-[2.5rem] overflow-hidden shadow-2xl relative h-[300px] sm:h-[400px] lg:h-[600px] w-full group">
                                    <img
                                        src={africanGirlImg}
                                        alt="Enfant buvant de l'eau saine filtrée sous l'évier Bricareau - Sécurité alimentaire et santé"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500" />

                                    {/* Play Button Card */}
                                    <div className="absolute bottom-10 left-10 bg-blue-600/90 backdrop-blur-md rounded-2xl p-4 pr-8 flex items-center gap-4 shadow-xl cursor-pointer hover:bg-blue-700 transition-all hover:scale-105 active:scale-95 group/btn border border-white/20">
                                        <div className="bg-white rounded-full p-3 shadow-lg group-hover/btn:shadow-xl transition-shadow relative">
                                            <div className="absolute inset-0 rounded-full bg-blue-200 animate-ping opacity-20"></div>
                                            <Play className="h-6 w-6 text-blue-600 fill-blue-600 ml-1 relative z-10" />
                                        </div>
                                        <div>
                                            <span className="font-bold text-white text-lg block">Voir la vidéo</span>
                                            <span className="text-blue-100 text-xs font-light">Découvrir l'expérience</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Side: Content */}
                            <div className="w-full lg:w-1/2 pt-12 lg:pt-4 relative z-10">
                                <span className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-4 block flex items-center gap-2">
                                    <span className="w-8 h-[2px] bg-blue-600 inline-block"></span>
                                    COMPACT & PUISSANT
                                </span>
                                <h2 className="text-[32px] md:text-[48px] font-bold text-slate-900 mb-6 leading-[1.1] tracking-tighter">
                                    Systèmes de filtration d'eau <br />sous l'évier
                                </h2>
                                <p className="text-lg font-light leading-relaxed text-gray-600 mb-12 text-justify">
                                    Éliminez jusqu'à 99% des pathogènes, du plomb et du fluorure. L'osmose inverse Bricareau est la solution ultime pour une eau de boisson de qualité restaurant directement chez vous.
                                </p>

                                <div className="space-y-3">
                                    {[
                                        { title: "Filtration d'Élite", desc: "Un processus rigoureux en 5 étapes qui neutralise les métaux lourds, le micro-plastique et les sédiments invisibles à l'œil nu." },
                                        { title: "Design Intelligent", desc: "Un réservoir ultra-compact conçu pour maximiser votre espace de rangement tout en offrant une réserve d'eau constante." },
                                        { title: "Finition de Luxe", desc: "Inclut une sélection de robinets au design contemporain qui s'intègrent parfaitement à l'esthétique de votre cuisine moderne." }
                                    ].map((item, i) => (
                                        <div key={i} className="group/item">
                                            <h3 className="text-xl font-bold mb-4 text-blue-600 flex items-center gap-3">
                                                <span className="text-2xl opacity-50">0{i + 1}.</span> {item.title}
                                            </h3>
                                            <div className="pl-6 border-l-2 border-blue-600/20 group-hover/item:border-blue-600 transition-colors duration-500 ml-2">
                                                <p className="text-base text-gray-500 leading-relaxed text-justify">
                                                    {item.desc}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-14 pt-8 border-t border-gray-100">
                                    <NavLink to="/Systemes-de-filtration-deau-sous-evier">
                                        <Button className="rounded-full bg-blue-600 hover:bg-blue-700 text-white px-8 h-14 text-base shadow-lg transition-all duration-300 w-full sm:w-auto hover:shadow-blue-200">
                                            Découvrir nos filtres d'eau sous-évier <ChevronRight className="ml-2 h-5 w-5" />
                                        </Button>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 7.Water Testing Section */}
                <section className="relative h-[650px] flex items-center overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <img
                            src={waterTestingImg}
                            alt="Analyse d'eau en laboratoire pour détection de contaminants - Service expert Bricareau"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-blue-950/60 lg:bg-gradient-to-r lg:from-blue-950/95 lg:to-blue-900/40 mix-blend-multiply" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-white via-white/10 to-transparent" />
                    </div>
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-2xl text-white">
                            <span className="text-white/80 font-bold uppercase tracking-widest text-sm mb-4 block">
                                Contrôle de la Qualité D'EAU
                            </span>
                            <h2
                                className="text-[40px] md:text-[60px] leading-[1.1] md:leading-[60px] font-light mb-8 tracking-tighter text-white"
                                style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                            >
                                <span className="font-bold">Votre eau sous la loupe.</span>
                            </h2>
                            <p className="text-lg font-light leading-snug text-white/95 mb-8 max-w-xl text-justify">
                                Ne devinez pas la qualité de votre eau. Nos analyses approfondies identifient les bactéries, les minéraux et les contaminants chimiques pour vous offrir une tranquillité d'esprit totale.                            </p>
                            <div className="flex gap-4">
                                <Button
                                    size="lg"
                                    className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 h-14 shadow-lg shadow-blue-200"
                                    style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
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
                    filterProduct="/filtration"
                    title={
                        <>
                            <span className="text-[32px] md:text-[60px] font-light leading-[1.1] md:leading-[60px] block tracking-tighter">Honnêteté et passion</span>
                            <span className="text-[32px] md:text-[60px] font-normal leading-[1.1] md:leading-[60px] block text-blue-600 tracking-tighter">la signature Bricareau vue par vous.</span>
                        </>
                    }
                />


                {/* 8. Comparison Table */}
                <section className="py-24 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="text-left mb-16">
                            <h2
                                className="text-slate-900 tracking-tighter mb-8 text-left"
                                style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                            >
                                <span className="text-[32px] md:text-[60px] font-light leading-[1.1] md:leading-[60px] block">Comparez nos solutions</span>
                                <span className="text-[32px] md:text-[60px] font-normal leading-[1.1] md:leading-[60px] block">de filtration d'eau de qualité.</span>
                            </h2>
                            <div className="w-24 h-1 bg-blue-600"></div>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full min-w-[1000px] border-collapse bg-white rounded-2xl overflow-hidden shadow-sm">
                                <thead>
                                    <tr className="bg-gray-100">
                                        <th className="p-8 text-left text-gray-400 font-light uppercase tracking-wider">Solutions</th>
                                        {[
                                            { name: "Filtres d'eau spécialisés", img: specializedFiltersImg },
                                            { name: "Systèmes de filtration sous l'évier", img: undersinkSystemImg }
                                        ].map((m, i) => (
                                            <th key={i} className="p-4 text-center text-gray-900 font-bold text-sm">
                                                <div className="flex flex-col items-center gap-2">
                                                    <img
                                                        src={m.img}
                                                        alt={`${m.name} - Solution de filtration d'eau Bricareau pour maison et cuisine`}
                                                        className="w-[150px] h-[120px] object-contain mx-auto mix-blend-multiply"
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
                                                {typeof row.whole === 'string' ? <span className="text-blue-600 font-bold bg-blue-50 px-4 py-1.5 rounded-full text-[10px] uppercase">{row.whole}</span> : (row.whole ? <CheckCircle2 className="h-6 w-6 text-blue-600 mx-auto" /> : null)}
                                            </td>
                                            <td className="p-8 text-center">
                                                {typeof row.basic === 'string' ? <span className="text-blue-600 font-bold bg-blue-50 px-4 py-1.5 rounded-full text-[10px] uppercase">{row.basic}</span> : (row.basic ? <CheckCircle2 className="h-6 w-6 text-blue-600 mx-auto" /> : null)}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* 9. FAQ Section */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-left mb-16">
                            <h2
                                className="text-slate-900 tracking-tighter mb-8 text-left"
                                style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                            >
                                <span className="text-[32px] md:text-[60px] font-light leading-[1.1] md:leading-[60px] block">Pour vous éclairer</span>
                                <span className="text-[32px] md:text-[60px] font-normal leading-[1.1] md:leading-[60px] block">Questions fréquentes</span>
                            </h2>
                            <div className="w-24 h-1 bg-blue-600"></div>
                        </div>
                        <div className="max-w-4xl mx-auto">
                            <Accordion type="single" collapsible className="w-full">
                                {[
                                    {
                                        q: "Comment fonctionne l'osmose inverse ?",
                                        a: "L'osmose inverse pousse l'eau à travers une membrane semi-perméable microscopique pour éliminer les impuretés dissoutes, le chlore et les minéraux lourds, produisant une eau d'une pureté exceptionnelle.",
                                    },
                                    {
                                        q: "Quelle est la différence entre un adoucisseur et un filtre ?",
                                        a: "Un adoucisseur élimine spécifiquement le calcaire (calcium et magnésium), tandis qu'un système de filtration élimine les contaminants, le chlore, les odeurs et les sédiments pour améliorer la qualité de l'eau.",
                                    },
                                    {
                                        q: "À quelle fréquence faut-il changer les filtres sous l'évier ?",
                                        a: "Pour un système sous-évier, les cartouches classiques se changent généralement tous les 6 à 12 mois. La membrane d'osmose inverse peut durer 2 à 3 ans selon la qualité de votre eau d'entrée.",
                                    },
                                    {
                                        q: "Les filtres sous-évier éliminent-ils les bactéries ?",
                                        a: "Les systèmes d'osmose inverse et certains filtres spécialisés à ultrafiltration sont extrêmement efficaces contre les particules microscopiques, mais pour une protection bactériologique totale, nous recommandons un système UV en complément.",
                                    },
                                    {
                                        q: "Est-ce que l'installation d'un filtre sous-évier réduit la pression d'eau ?",
                                        a: "Nos systèmes modernes sont conçus pour minimiser l'impact sur la pression. Les systèmes d'osmose inverse utilisent souvent un réservoir de stockage pour garantir un débit constant à votre robinet dédié.",
                                    },
                                    {
                                        q: "Pourquoi choisir un filtre spécialisé pour le fer ou le soufre ?",
                                        a: "Les filtres standards ne peuvent pas traiter les fortes concentrations de fer (taches jaunes/rouges) ou de soufre (odeur d'œufs pourris). Nos filtres spécialisés utilisent des médias spécifiques pour neutraliser ces problèmes à la source.",
                                    },
                                    {
                                        q: "Peut-on brancher un filtre sous-évier sur le frigo ?",
                                        a: "Absolument. Il est très courant de raccorder la sortie de votre système de filtration à votre distributeur d'eau de frigo et à votre machine à glaçons pour une glace cristalline.",
                                    },
                                    {
                                        q: "Quelle place prend un système de filtration sous l'évier ?",
                                        a: "Nos systèmes compacts occupent généralement moins de 25% de l'espace sous l'évier, laissant amplement de place pour vos articles ménagers habituels.",
                                    },
                                    {
                                        q: "L'eau filtrée est-elle meilleure pour cuisiner ?",
                                        a: "Oui, l'élimination du chlore et des impuretés rehausse considérablement les saveurs naturelles de vos aliments, du café et du thé, tout en évitant les dépôts de calcaire dans vos cafetières et bouilloires.",
                                    },
                                    {
                                        q: "Est-ce que le système de filtration fait du bruit ?",
                                        a: "Non, les systèmes de filtration sont totalement silencieux. Seule la régénération de certains filtres centraux peut faire un léger bruit de circulation d'eau, généralement programmé la nuit.",
                                    },
                                    {
                                        q: "Les filtres éliminent-ils le plomb et les métaux lourds ?",
                                        a: "Oui, nos systèmes d'osmose inverse et nos cartouches spécialisées sont certifiés pour réduire drastiquement le plomb, le cuivre et les autres métaux lourds souvent présents dans les vieilles tuyauteries.",
                                    },
                                    {
                                        q: "Comment savoir quel filtre spécialisé choisir ?",
                                        a: "La meilleure façon est de procéder à une analyse d'eau. Selon que vous ayez du fer, du manganèse, des tanins ou du chlore, nos experts vous recommanderont le média filtrant approprié.",
                                    },
                                    {
                                        q: "Quelle est la garantie sur les systèmes de filtration Bricareau ?",
                                        a: "Nous offrons des garanties complètes allant jusqu'à 10 ans sur la structure des réservoirs et des garanties solides sur les composants de contrôle et les robinetteries.",
                                    },
                                    {
                                        q: "Un filtre sous-évier nécessite-t-il de l'électricité ?",
                                        a: "La plupart des systèmes de filtration standard et d'osmose inverse fonctionnent uniquement avec la pression de l'eau. Seuls certains modèles haute performance avec pompe de surpression nécessitent une prise électrique.",
                                    },
                                    {
                                        q: "Est-ce que je peux installer le système moi-même ?",
                                        a: "Bien que cela soit possible pour les bricoleurs, nous recommandons une installation par nos techniciens certifiés pour garantir l'étanchéité parfaite et la validation de votre garantie Bricareau.",
                                    }
                                ].slice(0, showAllFaqs ? undefined : 6).map((item, idx) => (
                                    <AccordionItem key={idx} value={`item-${idx}`} className="border-b-slate-100 px-4">
                                        <AccordionTrigger className="text-left text-base font-medium leading-6 hover:no-underline py-8 text-slate-800" style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}>
                                            {item.q}
                                        </AccordionTrigger>
                                        <AccordionContent className="text-base font-light leading-6 text-slate-500 pb-8 text-justify" style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}>
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
                                className="text-slate-900 tracking-tighter mb-8 text-left"
                                style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                            >
                                <span className="text-[32px] md:text-[60px] font-normal leading-[1.1] md:leading-[60px] block">Ressources</span>
                            </h2>
                            <div className="w-24 h-1 bg-blue-600"></div>
                        </div>                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Comment choisir son filtre ?",
                                    img: "https://images.unsplash.com/photo-1542013936693-884638332954?q=80&w=800&auto=format&fit=crop",
                                },
                                {
                                    title: "Les bénéfices pour la santé",
                                    img: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=800&auto=format&fit=crop",
                                },
                                {
                                    title: "Guide de l'osmose inverse",
                                    img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop",
                                },
                            ].map((art, i) => (
                                <div
                                    key={i}
                                    className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full cursor-pointer"
                                    onClick={() => window.location.href = "#"}
                                >
                                    <div className="h-56 overflow-hidden">
                                        <img
                                            src={art.img}
                                            alt={`${art.title} - Guide pratique Bricareau pour une meilleure qualité d'eau`}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                    </div>
                                    <div className="p-8 text-left border-t-2 border-transparent group-hover:border-blue-600 transition-colors flex flex-col flex-grow">
                                        <h4 className="text-xl font-medium mb-4 group-hover:text-blue-600 transition-colors tracking-tight">{art.title}</h4>
                                        <div className="mt-auto">
                                            <NavLink
                                                to="#"
                                                className="text-blue-600 font-bold flex items-center gap-2 group-hover:underline text-sm"
                                            >
                                                Lire <ChevronRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 11. Consultation Form Section (Adopted from Adoucissement.tsx) */}
                <ConsultationFormSection id="consultation" />
            </main>
            <Footer />
        </div>
    );
};

export default Filtration;
