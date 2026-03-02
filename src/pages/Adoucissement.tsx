import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TestimonialsSection from "@/components/TestimonialsSection";
import { Button } from "@/components/ui/button";
import heroBath from "@/assets/young-nude-woman-taking-relaxing-foamy-bath.jpeg";
import kitchenImg from "@/assets/18036672_SIE_2720_1530_21_04_30_SIE_CRM_Dishwasher_Hand_Taking_Out_Wine_Glass_Basket_Motiv_11_0017.webp";
import untitledImg from "@/assets/avantages conditionneurs sans sel.jpg";
import mobileSoftenerImg from "@/assets/9-optimized.webp";
import bathroomImg from "@/assets/2705.jpg";
import waterTestGemini from "@/assets/Gemini_Generated_Image_rk3i02rk3i02rk3i.png";
import waterTestingImg from "@/assets/2147800429.jpg";
import process1 from "@/assets/2148563485.jpg";
import labTestImg from "@/assets/test-laboratoire-diligence-inspection-750x500.jpg";
import waterTestingBg from "@/assets/undersink_filtration_header.jpg";
import specializedFiltersImg from "@/assets/Filtres d'eau spécialisés.webp";
import drinkingWaterImg from "@/assets/Solutions d'eau potable.webp";
import undersinkSystemImg from "@/assets/Système+de+filtration+Serene+Lite.webp";
import {
    ArrowRight,
    Droplets,
    Heart,
    Shield,
    TrendingDown,
    Shirt,
    Zap,
    Check,
    CheckCircle2,
    ChevronRight,
    Star,
    Play,
    X,
    Sparkles,
    Clock,
    Home,
    Award,
    HandCoins,
    Phone
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import { NavLink } from "@/components/NavLink";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import ConsultationFormSection from "@/components/ConsultationFormSection";


const Adoucissement = () => {
    const [showAllFaqs, setShowAllFaqs] = React.useState(false);
    const navigate = useNavigate();


    useEffect(() => {
        document.title = "Adoucisseur d'eau : Adieu le calcaire et l'eau dure";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Dites adieu au calcaire avec nos adoucisseurs d'eau haute performance. Profitez d'une peau plus douce et protégez vos appareils.");
        }

        // OG Tags
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) ogTitle.setAttribute("content", "Adoucisseur d'eau : Éliminez le calcaire | Bricareau");
        const ogDesc = document.querySelector('meta[property="og:description"]');
        if (ogDesc) ogDesc.setAttribute("content", "Une eau soyeuse pour toute la maison. Découvrez nos solutions d'adoucissement haute performance.");
    }, []);
    return (
        <div className="min-h-screen bg-background font-sans text-slate-900">
            <Header />
            <main>
                {/* 1. Hero Section */}
                <section className="relative h-[850px] flex items-center overflow-hidden -mt-[104px] pt-[104px]">
                    <div className="absolute inset-0 z-0">
                        <img
                            src={heroBath}
                            alt="Confort d'une eau douce et soyeuse Québec - Bain relaxant sans calcaire Bricareau"
                            className="w-full h-full object-cover object-[center_35%]"
                        />
                        <div className="absolute inset-0 bg-black/40 lg:bg-gradient-to-r lg:from-black/60 lg:to-transparent" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-white via-white/10 to-transparent" />
                        {/* Brightening Start 1/3 Right */}
                        <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white/90 via-white/40 to-transparent" />
                    </div>

                    <div className="container mx-auto px-6 relative z-10">
                        <div className="max-w-2xl text-white">
                            <h1
                                className="text-[32px] md:text-[48px] leading-[32px] md:leading-[48px] font-light mb-8 tracking-tighter text-white"
                                style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                            >
                                <span className="font-bold text-blue-400">Adoucisseurs d'eau</span> <br />
                                <span className="font-bold text-white">Éliminez le calcaire et l'eau dure.</span>
                            </h1>
                            <p className="text-lg font-light leading-relaxed text-white/95 mb-8 max-w-xl text-justify">
                                Redécouvrez le confort d'une eau soyeuse protégeant votre peau, vos cheveux et vos appareils électroménagers. Alliez économies durables et bien-être absolu avec nos solutions de traitement d'eau.
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

                {/* 2. Why choose our water softeners Section */}
                <section className="py-24 bg-blue-600 text-white text-center">
                    <div className="container mx-auto px-6 text-center">
                        <div className="text-center mb-16">
                            <h2 className="text-[32px] md:text-[48px] font-normal text-white mb-8 leading-[1.2] md:leading-[48px] tracking-tighter text-center">
                                Les avantages de l'adoucissement d'eau
                            </h2>
                        </div>
                        <div className="flex flex-wrap justify-center gap-x-12 gap-y-16">
                            {[
                                { icon: Droplets, title: "Qualité supérieure", desc: "Une douceur incomparable pour votre peau et vos cheveux dès la première douche." },
                                { icon: Shield, title: "Protection totale", desc: "Prolongez la durée de vie de votre plomberie et de vos électroménagers coûteux." },
                                { icon: Shirt, title: "Linge plus doux", desc: "Des vêtements qui restent éclatants et souples plus longtemps, sans adoucissants." },
                                { icon: HandCoins, title: "Économies garanties", desc: "Réduisez vos factures d'énergie et vos dépenses en savons et détergents de 50%." },

                            ].map((item, id) => (
                                <div key={id} className="flex flex-col items-center group w-full sm:w-[calc(50%-3rem)] lg:w-[calc(25%-3rem)]">
                                    <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center mb-8 transition-all group-hover:scale-110 group-hover:bg-white/10">
                                        <item.icon className="h-10 w-10 text-blue-600 group-hover:text-white" />
                                    </div>
                                    <h4 className="text-2xl font-medium mb-4 tracking-tight">{item.title}</h4>
                                    <p className="text-lg font-light leading-relaxed text-blue-100 text-justify">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                {/* 3. Water Softeners Section - NEW DESIGN */}
                <section className="py-24 bg-white relative overflow-hidden">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col lg:flex-row items-start gap-16">
                            {/* Left Side: Image with Video Button */}
                            <div className="w-full lg:w-1/2 lg:sticky lg:top-24 mb-12 lg:mb-0">
                                <div className="rounded-[2.5rem] overflow-hidden shadow-2xl relative h-[300px] sm:h-[400px] lg:h-[600px] w-full group">
                                    <img
                                        src={kitchenImg}
                                        alt="Cuisine moderne protégée par un adoucisseur d'eau résidentiel Bricareau - Vaisselle sans taches"
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
                                    ADOUCISSEURS D'EAU RÉSIDENTIELS
                                </span>
                                <h2 className="text-[32px] md:text-[48px] font-bold text-slate-900 mb-6 leading-[1.1] tracking-tighter">
                                    L'éclat d'une vaisselle protégée, la douceur d'une eau maîtrisée.
                                </h2>
                                <p className="text-lg font-light leading-relaxed text-gray-600 mb-12 text-justify">
                                    Offrez à votre foyer le luxe d'une eau sans calcaire. Nos adoucisseurs de pointe éliminent le tartre à la source, garantissant non seulement une vaisselle étincelante sans aucune trace, mais aussi une protection durable de vos appareils électroménagers et de votre plomberie. Redécouvrez la brillance et la douceur dans chaque recoin de votre maison.
                                </p>

                                <div className="space-y-3">
                                    {[
                                        { title: "Économies réelles", desc: "Réduisez vos dépenses. Économisez jusqu'à 30% sur vos produits d'entretien et réduisez drastiquement vos factures d'énergie." },
                                        { title: "Douceur infinie", desc: "Une peau et des cheveux sublimés. Retrouvez la souplesse naturelle de votre peau et l'éclat de vos cheveux dès la première douche." },
                                        { title: "Protection totale", desc: "Préservez vos installations. Dites adieu aux pannes d'électroménager et aux traces de tartre sur votre robinetterie." }
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
                                    <NavLink to="/adoucisseur-eau-residentiel">
                                        <Button className="rounded-full bg-blue-600 hover:bg-blue-700 text-white px-8 h-14 text-base shadow-lg transition-all duration-300 w-full sm:w-auto hover:shadow-blue-200">
                                            Découvrir nos adoucisseurs d'eau <ChevronRight className="ml-2 h-5 w-5" />
                                        </Button>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. Portable Water Softeners Section - NEW DESIGN */}
                <section className="py-24 bg-gray-50 relative overflow-hidden">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col lg:flex-row-reverse items-start gap-16">
                            {/* Right Side (visually): Image with Video Button */}
                            <div className="w-full lg:w-1/2 lg:sticky lg:top-24 mb-12 lg:mb-0">
                                <div className="rounded-[2.5rem] overflow-hidden shadow-2xl relative h-[300px] sm:h-[400px] lg:h-[600px] w-full group">
                                    <img
                                        src={mobileSoftenerImg}
                                        alt="Adoucisseur d'eau portable pour VR et bateau - Solution mobile Bricareau contre l'eau dure"
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
                                    SOLUTION MOBILE
                                </span>
                                <h2 className="text-[32px] md:text-[48px] font-bold text-slate-900 mb-6 leading-[1.1] tracking-tighter">
                                    La douceur sans frontières : l'eau douce vous suit partout.
                                </h2>
                                <p className="text-lg font-light leading-relaxed text-gray-600 mb-12 text-justify">
                                    Ne laissez plus l’eau dure des campings ou des ports abîmer vos cheveux et vos équipements. Profitez d'une eau de qualité domestique dans votre VR, votre bateau ou votre chalet avec notre adoucisseur ultra-compact.
                                </p>

                                <div className="space-y-3">
                                    {[
                                        { title: "Ultra-Compact & Léger", desc: "Conçu pour les petits espaces. Sa taille réduite lui permet de se glisser dans n'importe quel compartiment de rangement sans alourdir votre véhicule." },
                                        { title: "Plug & Play", desc: "Aucun outil requis. Se branche directement sur votre tuyau d'arrosage ou votre arrivée d'eau standard. Une mise en service instantanée, sans plombier." },
                                        { title: "Protection Mobile", desc: "Sauvez vos équipements. Protégez la tuyauterie de votre VR et votre chauffe-eau contre les eaux dures variables des terrains de camping." }
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
                                    <NavLink to="/adoucisseurs-portables">
                                        <Button className="rounded-full bg-blue-600 hover:bg-blue-700 text-white px-8 h-14 text-base shadow-lg transition-all duration-300 w-full sm:w-auto hover:shadow-blue-200">
                                            Découvrir nos adoucisseurs portables <ChevronRight className="ml-2 h-5 w-5" />
                                        </Button>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. Water Conditionners without salt Section - NEW DESIGN */}
                <section className="py-24 bg-white relative overflow-hidden">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col lg:flex-row items-start gap-16">
                            {/* Left Side: Image with Video Button */}
                            <div className="w-full lg:w-1/2 lg:sticky lg:top-24 mb-12 lg:mb-0">
                                <div className="rounded-[2.5rem] overflow-hidden shadow-2xl relative h-[300px] sm:h-[400px] lg:h-[600px] w-full group">
                                    <img
                                        src={untitledImg}
                                        alt="Conditionneur d'eau sans sel écologique Bricareau - Protection contre le tartre sans saumure"
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
                                    ALTERNATIVE ÉCOLOGIQUE
                                </span>
                                <h2 className="text-[32px] md:text-[48px] font-bold text-slate-900 mb-6 leading-[1.1] tracking-tighter">
                                    Zéro sel. Zéro électricité. Zéro souci.
                                </h2>
                                <p className="text-lg font-light leading-relaxed text-gray-600 mb-12 text-justify">
                                    Le secret d'un linge éclatant et d'une vaisselle sans traces. Sans l'ajout de sel, votre eau devient votre meilleure alliée beauté et ménage.
                                </p>

                                <div className="space-y-3">
                                    {[
                                        { title: "100% Écologique", desc: "Contrairement aux systèmes au sel, vous ne rejetez aucune saumure dans l'environnement et ne consommez pas d'eau pour la régénération." },
                                        { title: "Zéro Contrainte", desc: "Oubliez les sacs de sel. Profitez d'une protection permanente sans électricité, sans réglages et sans maintenance mensuelle. Installez-le, oubliez-le." },
                                        { title: "Eau Préservée", desc: "Gardez les bons minéraux. Le calcaire est neutralisé mais le calcium et le magnésium restent dans l'eau. Une eau saine pour votre santé et celle de votre famille." }
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
                                    <NavLink to="/conditionneurs-sans-sel">
                                        <Button className="rounded-full bg-blue-600 hover:bg-blue-700 text-white px-8 h-14 text-base shadow-lg transition-all duration-300 w-full sm:w-auto hover:shadow-blue-200">
                                            Découvrir nos conditionneurs sans sel <ChevronRight className="ml-2 h-5 w-5" />
                                        </Button>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 6. Testimonials */}
                <TestimonialsSection
                    filterProduct="/adoucissement"
                    title={
                        <>
                            <span className="text-[32px] md:text-[60px] font-light leading-[1.2] md:leading-[60px] block">Une eau soyeuse.</span>
                            <span className="text-[32px] md:text-[60px] font-normal leading-[1.2] md:leading-[60px] block">Un confort absolu.</span>
                        </>
                    }
                />




                {/* 7. Comparison Table */}
                <section className="py-24 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="text-left mb-16">
                            <h2
                                className="text-slate-900 tracking-tighter mb-8 text-left"
                                style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                            >
                                <span className="text-[32px] md:text-[60px] font-light leading-[1.1] md:leading-[60px] block">Comparez nos solutions</span>
                                <span className="text-[32px] md:text-[60px] font-normal leading-[1.1] md:leading-[60px] block">d'adoucissement d'eau.</span>
                            </h2>
                            <div className="w-24 h-1 bg-blue-600"></div>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full min-w-[1000px] border-collapse bg-white rounded-2xl overflow-hidden shadow-sm">
                                <thead>
                                    <tr className="bg-gray-100">
                                        <th className="p-8 text-left text-gray-400 font-light uppercase tracking-wider">Solutions</th>
                                        {[
                                            { name: "Adoucisseur au Sel", img: specializedFiltersImg },
                                            { name: "Conditionneur sans Sel", img: drinkingWaterImg },
                                        ].map((m, i) => (
                                            <th key={i} className="p-4 text-center text-gray-900 font-bold text-sm">
                                                <div className="flex flex-col items-center gap-2">
                                                    <img
                                                        src={m.img}
                                                        alt={`${m.name} - Système de traitement d'eau haute performance Bricareau`}
                                                        className="w-[150px] h-[120px] object-contain mx-auto mix-blend-multiply"
                                                    />
                                                    <div className="text-[14px]">{m.name}</div>
                                                </div>
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {[
                                        { feature: "Technologie de traitement", specialized: "Échange Ionique", station: "Temp-A-Cure (TAC)" },
                                        { feature: "Action sur les minéraux", specialized: "Élimination Physique", station: "Neutralisation" },
                                        { feature: "Sacs de sel à manipuler", specialized: "Oui (Mensuel)", station: "Non (Jamais)" },
                                        { feature: "Gaspillage d'eau", specialized: "Régénération", station: "0% Gaspillage" },
                                        { feature: "Énergie & Électricité", specialized: "Nécessaire", station: "Sans électricité" },
                                        { feature: "Sensation sur la peau", specialized: "Soyeuse / Glissante", station: "Naturelle" },
                                        { feature: "Impact Environnemental", specialized: "Rejet de saumure", station: "100% Écologique" },
                                        { feature: "Minéraux de santé (Ca/Mg)", specialized: "Retirés", station: "Préservés" },
                                        { feature: "Protection contre le tartre", specialized: "Totale", station: "Excellente" },
                                        { feature: "Espace d'installation", specialized: "Moyen", station: "Compact" }
                                    ].map((row, i) => (
                                        <tr key={i} className="hover:bg-gray-50 transition-colors">
                                            <td className="p-8 font-light text-gray-700">{row.feature}</td>
                                            <td className="p-8 text-center">
                                                {typeof row.specialized === 'string' ? <span className="text-blue-600 font-bold bg-blue-50 px-3 py-1 rounded-full text-[10px]">{row.specialized}</span> : (row.specialized ? <CheckCircle2 className="h-6 w-6 text-blue-600 mx-auto" /> : null)}
                                            </td>
                                            <td className="p-8 text-center">
                                                {typeof row.station === 'string' ? <span className="text-blue-600 font-bold bg-blue-50 px-3 py-1 rounded-full text-[10px]">{row.station}</span> : (row.station ? <CheckCircle2 className="h-6 w-6 text-blue-600 mx-auto" /> : null)}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* 7. Water Testing Section */}
                <section className="relative h-[650px] flex items-center overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <img
                            src={waterTestingBg}
                            alt="Analyse d'eau à domicile et test de dureté - Diagnostic expert Bricareau"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-blue-900/40 lg:bg-gradient-to-r lg:from-blue-900/90 lg:to-blue-600/20 mix-blend-multiply" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-white via-white/10 to-transparent" />
                    </div>
                    <div className="container mx-auto px-6 relative z-10">
                        <div className="max-w-2xl text-white">
                            <span className="text-white/80 font-bold uppercase tracking-widest text-sm mb-4 block">
                                Contrôle de la Qualité D'EAU
                            </span>
                            <h2
                                className="text-[40px] md:text-[60px] leading-[1.1] md:leading-[60px] font-light mb-8 tracking-tighter text-white"
                                style={{
                                    fontFamily:
                                        'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                                }}
                            >
                                <span className="font-bold">L’essence d’une vie saine</span><br />
                                coule de votre robinet.
                            </h2>
                            <p className="text-lg font-light leading-relaxed text-white/95 mb-8 max-w-xl text-justify">
                                Entre le chlore, les métaux lourds et les sédiments, votre eau cache souvent des secrets. Ne laissez plus le doute couler de votre robinet. Demandez votre test d'eau dès aujourd'hui et obtenez un portrait clair de votre eau ainsi que des solutions adaptées à votre foyer.
                            </p>
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

                {/* 8. FAQ Section */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-left mb-16">
                            <h2
                                className="text-slate-900 tracking-tighter mb-8 text-left"
                                style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                            >                                <span className="text-[32px] md:text-[60px] font-normal leading-[1.1] md:leading-[60px] block">FAQ </span>
                            </h2>
                            <div className="w-24 h-1 bg-blue-600"></div>
                        </div>
                        <div className="max-w-4xl mx-auto">
                            <Accordion type="single" collapsible className="w-full">
                                {[
                                    { q: "Qu'est-ce qu'un adoucisseur d'eau ?", a: "Un adoucisseur d'eau est un système de filtration qui élimine le calcium et le magnésium, les minéraux responsables de la dureté de l'eau, par un processus appelé échange d'ions." },
                                    { q: "Quels sont les avantages d'une eau adoucie ?", a: "L'eau adoucie rend la peau et les cheveux plus souples, prévient les dépôts de calcaire dans la tuyauterie, prolonge la vie de vos appareils ménagers et réduit votre consommation de savon et détergents jusqu'à 50%." },
                                    { q: "Est-ce que l'eau adoucie est potable ?", a: "Oui, l'eau adoucie est parfaitement potable. Le processus d'adoucissement ajoute une infime quantité de sodium, mais bien moins que ce que l'on trouve naturellement dans une tranche de pain blanc." },
                                    { q: "Comment savoir si mon eau est dure ?", a: "Les signes incluent des taches blanches sur la vaisselle, une accumulation de calcaire sur les robinets, une peau sèche après la douche et un besoin excessif de savon pour faire de la mousse." },
                                    { q: "À quelle fréquence faut-il ajouter du sel ?", a: "Pour une famille moyenne, il faut généralement vérifier et ajouter du sel une fois par mois. Il est recommandé de maintenir le bac à sel au moins au tiers de sa capacité." },
                                    { q: "Quel type de sel dois-je utiliser ?", a: "Nous recommandons d'utiliser du sel en pastilles de haute pureté (pureté de 99 % minimum). Cela évite l'accumulation de résidus dans le bac à sel et assure une performance optimale." },
                                    { q: "Un adoucisseur d'eau élimine-t-il le fer ?", a: "Un adoucisseur peut éliminer de petites quantités de fer ferreux (fer clair). Cependant, pour une eau avec une forte teneur en fer, nous recommandons un système de filtration spécialisé en amont." },
                                    { q: "Quelle est la durée de vie d'un adoucisseur Bricareau ?", a: "Grâce à notre conception robuste et à une installation professionnelle, nos systèmes d'adoucissement ont une durée de vie moyenne de 15 à 20 ans avec un entretien minimal." },
                                    { q: "L'installation prend-elle beaucoup de place ?", a: "Nos modèles modernes sont conçus pour être compacts. Ils s'installent généralement près de l'entrée d'eau principale, souvent dans un sous-sol, un garage ou un placard technique." },
                                    { q: "Est-ce que l'adoucisseur gaspille beaucoup d'eau ?", a: "Non, nos systèmes 'High Efficiency' sont dotés d'une technologie intelligente qui calcule exactement quand la régénération est nécessaire, économisant ainsi de l'eau et du sel." },
                                    { q: "Peut-on installer un adoucisseur sur une eau de puits ?", a: "Absolument. En fait, les propriétaires de puits sont nos clients les plus fréquents car l'eau souterraine est naturellement chargée en minéraux de dureté." },
                                    { q: "Qu'est-ce que la régénération de l'adoucisseur ?", a: "La régénération est le cycle de nettoyage automatique où l'appareil utilise une solution de saumure pour rincer les minéraux accumulés sur les résines, les rendant prêtes à adoucir l'eau à nouveau." },
                                    { q: "L'adoucisseur nécessite-t-il un entretien professionnel ?", a: "Nous recommandons une vérification annuelle par l'un de nos techniciens pour optimiser les réglages, nettoyer les composants internes et garantir que votre eau reste de qualité supérieure." },
                                    { q: "L'eau adoucie est-elle meilleure pour les vêtements ?", a: "Oui, les minéraux de dureté rendent les fibres textiles rêches et ternes. L'eau adoucie permet de garder vos vêtements plus souples, plus éclatants et plus durables." },
                                    { q: "Quelle est la garantie offerte par Bricareau ?", a: "Bricareau offre l'une des garanties les plus solides du marché, couvrant la bouteille de résine, la tête de contrôle et les composants internes pour votre tranquillité d'esprit totale." }
                                ].slice(0, showAllFaqs ? undefined : 6).map((item, idx) => (
                                    <AccordionItem key={idx} value={`item-${idx}`} className="border-b-gray-200">
                                        <AccordionTrigger className="text-left text-base font-medium leading-6 hover:no-underline py-6" style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}>
                                            {item.q}
                                        </AccordionTrigger>
                                        <AccordionContent className="text-base font-light leading-6 text-gray-600 pb-6 text-justify" style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}>
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

                {/* 9. Resources Section */}
                <section className="py-24 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="text-left mb-16">
                            <h2
                                className="text-slate-900 tracking-tighter mb-8 text-left"
                                style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                            >                                <span className="text-[32px] md:text-[60px] font-normal leading-[1.1] md:leading-[60px] block">Ressources</span>
                            </h2>
                            <div className="w-24 h-1 bg-blue-600"></div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { title: "Comment choisir son adoucisseur d'eau ?", img: untitledImg, link: "/comment-choisir-un-adoucisseur-deau" },
                                { title: "5 signes que vous avez besoin d'un adoucisseur", img: "https://images.unsplash.com/photo-1542013936693-884638332954?q=80&w=800&auto=format&fit=crop", link: "/5-signes-besoin-adoucisseur-eau" },
                                { title: "Impact du calcaire sur vos électroménagers", img: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=800&auto=format&fit=crop", link: "/calcaire-duree-vie-electromenagers" }
                            ].map((art, i) => (
                                <div
                                    key={i}
                                    className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer group flex flex-col h-full border border-gray-100"
                                    onClick={() => navigate(art.link)}
                                >
                                    <div className="h-56 overflow-hidden">
                                        <img src={art.img} alt={`${art.title} - Guide conseil en adoucissement d'eau Bricareau`} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                                    </div>
                                    <div className="p-8 text-left border-t-2 border-transparent group-hover:border-blue-600 transition-colors flex flex-col flex-grow">
                                        <NavLink to={art.link}>
                                            <h4 className="text-xl font-medium mb-4 group-hover:text-blue-600 transition-colors tracking-tight">{art.title}</h4>
                                        </NavLink>
                                        <div className="mt-auto">
                                            <NavLink to={art.link} className="text-blue-600 font-bold flex items-center gap-2 group-hover:underline text-sm">
                                                Lire <ChevronRight className="h-4 w-4" />
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Consultation Form Section */}
                <ConsultationFormSection id="consultation" />
            </main>
            <Footer />
        </div>
    );
};

export default Adoucissement;
