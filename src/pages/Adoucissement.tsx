import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GlobalBreadcrumbs from "@/components/GlobalBreadcrumbs";
import TestimonialsSection from "@/components/TestimonialsSection";
import { Button } from "@/components/ui/button";
import heroBath from "@/assets/young-nude-woman-taking-relaxing-foamy-bath.jpeg";
import kitchenImg from "@/assets/18036672_SIE_2720_1530_21_04_30_SIE_CRM_Dishwasher_Hand_Taking_Out_Wine_Glass_Basket_Motiv_11_0017.webp";
import untitledImg from "@/assets/2151469364.jpg";
import mobileSoftenerImg from "@/assets/9-optimized.webp";
import bathroomImg from "@/assets/2705.jpg";
import financeModeImg from "@/assets/finance_mode.svg";
import plumbingImg from "@/assets/plumbing.svg";
import moneyBagImg from "@/assets/money_bag.svg";
import healthMetricsImg from "@/assets/health_metrics.svg";
import laundryImg from "@/assets/laundry.svg";
import detergentsImg from "@/assets/detergents.svg";
import starsImg from "@/assets/stars.svg";
import healthSafetyImg from "@/assets/health_and_safety.svg";
import softImg from "@/assets/soft.svg";
import savingsImg from "@/assets/savings.svg";
import waterTestGemini from "@/assets/Gemini_Generated_Image_rk3i02rk3i02rk3i.png";
import waterTestingImg from "@/assets/2147800429.jpg";
import process1 from "@/assets/2148563485.jpg";
import labTestImg from "@/assets/test-laboratoire-diligence-inspection-750x500.jpg";
import waterTestingBg from "@/assets/undersink_filtration_header.jpg";
import specializedFiltersImg from "@/assets/Filtres d'eau spécialisés.webp";
import drinkingWaterImg from "@/assets/Solutions d'eau potable.webp";
import undersinkSystemImg from "@/assets/Système+de+filtration+Serene+Lite.webp";
import hardWaterSignsImg from "@/assets/Signs+of+hard+water+in+your+home-640w.webp";
import hardWaterImg from "@/assets/58279.jpg";
import applianceDamageImg from "@/assets/tarte-chauffe-eau.jpg";
import { conditionneursImg } from "./Blog pages/Adoucisseur avec sel ou sans sel";
import { softenerImg as residentialWaterSoftenerImg } from "./Blog pages/Comment régler la dureté de votre adoucisseur ";
import { adoucisseurImg as adoucisseurFosseImg } from "./Blog pages/Adoucisseur-deau- et-fosse-septique--Mythes-et-réalités";
import TACsystemImg from "@/assets/free salt conditionner.webp";
import womansufferingfromHardWaterImg from "@/assets/2149561614.jpg";
import womansufferingdryhairfromhardwaterImg from "@/assets/12163.jpg";

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
    Phone,
    ZapOff,
    Wrench,
    CircleDollarSign,
    TrendingUp,
    Beaker
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import { NavLink } from "@/components/NavLink";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from "@/components/ui/accordion";
import ConsultationFormSection from "@/components/ConsultationFormSection";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';


const Adoucissement = () => {
    const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 4000, stopOnInteraction: false })]);
    const [showAllFaqs, setShowAllFaqs] = React.useState(false);
    const [showAllHarms, setShowAllHarms] = React.useState(false);
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
                <section className="relative lg:h-[650px] flex flex-col lg:items-center overflow-hidden bg-white">
                    <div className="absolute top-[30px] left-0 right-0 z-30 pointer-events-none hidden lg:block">
                        <div className="container mx-auto px-4 lg:px-6 pointer-events-auto">
                            <GlobalBreadcrumbs variant="dark" />
                        </div>
                    </div>
                    <div className="relative lg:absolute lg:inset-0 h-[350px] sm:h-[450px] lg:h-full w-full lg:z-0 overflow-hidden">
                        <img
                            src={heroBath}
                            alt="Confort d'une eau douce et soyeuse Québec - Bain relaxant sans calcaire Bricareau"
                            className="w-full h-full object-cover object-[center_35%]"
                        />
                        <div className="hidden lg:block absolute inset-0 bg-black/40 lg:bg-gradient-to-r lg:from-black/60 lg:to-transparent" />
                        <div className="hidden lg:block absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-white via-white/10 to-transparent" />
                        <div className="hidden lg:block absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white/90 via-white/40 to-transparent" />
                    </div>

                    <div className="container relative z-10 mx-auto px-4 h-full flex items-center lg:px-6">
                        <div className="max-w-2xl lg:text-white py-12 lg:py-0">
                            <h1 className="mb-4 lg:mb-8 text-slate-900 lg:text-white text-left lg:text-justify max-w-xl">
                                Adoucisseurs d'eau <br />
                                Éliminez le calcaire et l'eau dure.
                            </h1>
                            <p className="font-light text-slate-600 lg:text-white/95 mb-8 max-w-xl text-left lg:text-justify">
                                Redécouvrez le confort d'une eau soyeuse protégeant votre peau, vos cheveux et vos appareils électroménagers. Alliez économies durables et bien-être absolu avec nos solutions de traitement d'eau.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button
                                    size="lg"
                                    className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 h-14 shadow-lg shadow-blue-200"
                                    style={{}}
                                    asChild
                                >
                                    <NavLink to="/consultation">
                                        Planifiez une consultation gratuite
                                    </NavLink>
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="bg-slate-100 lg:bg-white/10 hover:bg-slate-200 lg:hover:bg-white/20 text-slate-800 lg:text-white border-slate-200 lg:border-white rounded-full px-8 h-14 backdrop-blur-sm shadow-lg"
                                    style={{}}
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
                </section>

                {/* 2. The Problem Section */}
                <section className="py-32 bg-slate-50 relative overflow-hidden">
                    {/* Architectural Watermark */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] lg:text-[22rem] font-black text-slate-200/20 select-none pointer-events-none tracking-tighter z-0 uppercase">
                        CALCAIRE
                    </div>

                    <div className="container mx-auto px-6 relative z-10">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

                            {/* Left Column: Analytical Narrative (6 Harms) */}
                            <div className="lg:col-span-5 space-y-8">
                                <div>
                                    <h2 className="text-slate-900 mb-6 font-bold">
                                        L'impact silencieux du <span className="uppercase text-blue-600">calcaire.</span>
                                    </h2>
                                    <p className="font-light text-slate-600 lg:text-slate-600 mb-8 max-w-xl text-left lg:text-justify">
                                        Ce n'est pas qu'un simple dépôt ; c'est un agent d'érosion invisible qui dégrade votre confort et vos investissements jour après jour.
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-x-8 gap-y-6 overflow-hidden transition-all duration-700">
                                    {[
                                        {
                                            icon: <img src={financeModeImg} className="w-6 h-6 opacity-20 group-hover:opacity-100 transition-opacity duration-500" style={{ filter: 'invert(32%) sepia(96%) saturate(3015%) hue-rotate(212deg) brightness(97%) contrast(96%)' }} alt="finance mode" />,
                                            title: "+25% de consommation énergétique",
                                            desc: "Le tartre isole vos résistances, forçant vos appareils à consommer massivement plus."
                                        },
                                        {
                                            icon: <img src={plumbingImg} className="w-6 h-6 opacity-20 group-hover:opacity-100 transition-opacity duration-500" style={{ filter: 'invert(32%) sepia(96%) saturate(3015%) hue-rotate(212deg) brightness(97%) contrast(96%)' }} alt="plumbing" />,
                                            title: "Plomberie obstruée & Débit réduit",
                                            desc: "Obstruction progressive des canalisations et perte de pression aux robinets."
                                        },
                                        {
                                            icon: <img src={moneyBagImg} className="w-6 h-6 opacity-20 group-hover:opacity-100 transition-opacity duration-500" style={{ filter: 'invert(32%) sepia(96%) saturate(3015%) hue-rotate(212deg) brightness(97%) contrast(96%)' }} alt="money bag" />,
                                            title: "Maintenance coûteuse",
                                            desc: "Réduction de 50% de la durée de vie de vos équipements (chauffe-eau, lave-vaisselle)."
                                        },
                                        {
                                            icon: <img src={healthMetricsImg} className="w-6 h-6 opacity-20 group-hover:opacity-100 transition-opacity duration-500" style={{ filter: 'invert(32%) sepia(96%) saturate(3015%) hue-rotate(212deg) brightness(97%) contrast(96%)' }} alt="health metrics" />,
                                            title: "Soin du corps",
                                            desc: "Agression cutanée (eczéma), irritations et cheveux ternes ou cassants."
                                        },
                                        {
                                            icon: <img src={laundryImg} className="w-6 h-6 opacity-20 group-hover:opacity-100 transition-opacity duration-500" style={{ filter: 'invert(32%) sepia(96%) saturate(3015%) hue-rotate(212deg) brightness(97%) contrast(96%)' }} alt="laundry" />,
                                            title: "Linge & textiles",
                                            desc: "Fibres qui deviennent rêches et couleurs qui ternissent au fil des lavages."
                                        },
                                        {
                                            icon: <img src={detergentsImg} className="w-6 h-6 opacity-20 group-hover:opacity-100 transition-opacity duration-500" style={{ filter: 'invert(32%) sepia(96%) saturate(3015%) hue-rotate(212deg) brightness(97%) contrast(96%)' }} alt="detergents" />,
                                            title: "Surconsommation de détergents",
                                            desc: "Nécessite jusqu'à 50% de détergents et savons en plus pour obtenir de la mousse."
                                        }
                                    ].filter((_, idx) => showAllHarms || idx < 3).map((harm, idx) => (
                                        <div key={idx} className="group flex items-start gap-4 p-2 rounded-3xl transition-colors hover:bg-slate-50 animate-in fade-in slide-in-from-top-4 duration-500">
                                            <div className="pt-1">
                                                {harm.icon}
                                            </div>
                                            <div className="space-y-0.5">
                                                <h3 className="text-lg font-bold text-blue-600/20 group-hover:text-blue-600 transition-colors duration-500 mb-1">{harm.title}</h3>
                                                <p className="text-slate-500 font-light text-sm leading-snug max-w-sm">
                                                    {harm.desc}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="pt-2">
                                    <button
                                        onClick={() => setShowAllHarms(!showAllHarms)}
                                        className="flex items-center gap-2 text-blue-600 font-bold text-sm hover:gap-3 transition-all group"
                                    >
                                        {showAllHarms ? "Voir moins d'impacts" : "Voir plus d'impacts"}
                                        <ChevronRight className={`w-4 h-4 transition-transform ${showAllHarms ? 'rotate-90' : ''}`} />
                                    </button>
                                </div>
                            </div>

                            {/* Right Column: Cinematic Slideshow (Embla) */}
                            <div className="lg:col-span-7 relative sticky top-32">
                                <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white group">
                                    <div className="embla overflow-hidden" ref={emblaRef}>
                                        <div className="embla__container flex">
                                            {[womansufferingfromHardWaterImg, applianceDamageImg, womansufferingdryhairfromhardwaterImg, hardWaterSignsImg, hardWaterImg].map((img, idx) => (
                                                <div key={idx} className="embla__slide flex-[0_0_100%] min-w-0 relative h-[700px]">
                                                    <img
                                                        src={img}
                                                        alt={`Impact du calcaire ${idx + 1}`}
                                                        className="w-full h-full object-cover"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-60" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Architectural Frame Accents */}
                                <div className="absolute -top-6 -right-6 w-32 h-32 border-t-2 border-r-2 border-blue-600/10 rounded-tr-[3rem]" />
                                <div className="absolute -bottom-6 -left-6 w-32 h-32 border-b-2 border-l-2 border-blue-600/10 rounded-bl-[3rem]" />
                            </div>

                        </div>
                    </div>
                </section>

                {/* 3. Benefits Section - Redesigned for Premium Look */}
                <section className="py-24 bg-white relative overflow-hidden">
                    {/* Abstract background elements */}
                    <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 -z-10" />
                    <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-blue-50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 -z-10" />

                    <div className="container mx-auto px-6">
                        <div className="text-center mb-20 max-w-3xl mx-auto">
                            <h2 className="text-slate-900 mb-6">
                                <span className="font-light block">Les avantages de</span>
                                <span className="font-bold text-blue-600 block">l'adoucissement d'eau</span>
                            </h2>
                            <p className="text-slate-500 font-light text-lg">
                                Une transformation immédiate pour votre confort, votre santé et la longévité de votre foyer.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-justify">
                            {[
                                {
                                    iconSrc: starsImg,
                                    title: "Qualité supérieure",
                                    desc: "Une douceur incomparable pour votre peau et vos cheveux dès la première douche, sans l'agressivité du calcaire."
                                },
                                {
                                    iconSrc: healthSafetyImg,
                                    title: "Protection totale",
                                    desc: "Éliminez le tartre à la source et prolongez de façon significative la durée de vie de votre plomberie et de vos appareils."
                                },
                                {
                                    iconSrc: softImg,
                                    title: "Linge plus doux",
                                    desc: "Retrouvez des vêtements éclatants, souples et durables sans avoir recours à des adoucissants chimiques coûteux."
                                },
                                {
                                    iconSrc: savingsImg,
                                    title: "Économies garanties",
                                    desc: "Réduisez vos factures d'énergie et vos dépenses en savons et détergents jusqu'à 50% grâce à une efficacité accrue."
                                }
                            ].map((item, i) => (
                                <div key={i} className="group bg-white border border-slate-100 rounded-[2rem] p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
                                    <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity duration-500 transform group-hover:scale-110">
                                        <img src={item.iconSrc} className="w-32 h-32" style={{ filter: 'invert(32%) sepia(96%) saturate(3015%) hue-rotate(212deg) brightness(97%) contrast(96%)' }} alt="" />
                                    </div>
                                    <div className="relative w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-8 group-hover:bg-blue-600 transition-colors duration-500">
                                        <img src={item.iconSrc} className="absolute h-8 w-8 transition-opacity duration-500 opacity-100 group-hover:opacity-0" style={{ filter: 'invert(32%) sepia(96%) saturate(3015%) hue-rotate(212deg) brightness(97%) contrast(96%)' }} alt={item.title} />
                                        <img src={item.iconSrc} className="absolute h-8 w-8 transition-opacity duration-500 opacity-0 group-hover:opacity-100 brightness-0 invert" alt={`${item.title} hover`} />
                                    </div>
                                    <h5 className="text-xl font-bold text-slate-900 mb-4 tracking-tight group-hover:text-blue-600 transition-colors duration-500">
                                        {item.title}
                                    </h5>
                                    <p className="text-slate-500 font-light leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                {/* 4. Water Softeners Section */}
                <section className="relative lg:py-24 bg-white overflow-hidden">
                    {/* Mobile Image Section */}
                    <div className="lg:hidden w-full h-[350px] sm:h-[450px] relative">
                        <img
                            src={kitchenImg}
                            alt="Cuisine moderne protégée par un adoucisseur d'eau résidentiel Bricareau - Vaisselle sans taches"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/10" />
                    </div>

                    <div className="container mx-auto px-6 py-12 lg:py-0">
                        <div className="flex flex-col lg:flex-row items-start gap-16">
                            {/* Left Side: Image with Video Button - Desktop Only */}
                            <div className="hidden lg:block w-full lg:w-1/2 lg:sticky lg:top-24 mb-12 lg:mb-0">
                                <div className="rounded-[2.5rem] overflow-hidden shadow-2xl relative h-[600px] w-full group">
                                    <img
                                        src={kitchenImg}
                                        alt="Cuisine moderne protégée par un adoucisseur d'eau résidentiel Bricareau - Vaisselle sans taches"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500" />

                                    {/* Water Softeners CTA Button */}
                                    <Button
                                        onClick={() => navigate('/adoucisseur-eau-residentiel')}
                                        className="absolute bottom-10 left-10 rounded-full bg-blue-600 hover:bg-blue-700 text-white px-8 h-14 text-base shadow-xl shadow-blue-200/50 transition-all hover:scale-105 active:scale-95 flex items-center gap-2 border-none"
                                    >
                                        Découvrir nos adoucisseurs d'eau <ChevronRight className="h-5 w-5" />
                                    </Button>
                                </div>
                            </div>

                            {/* Right Side: Content */}
                            <div className="w-full lg:w-1/2 lg:pl-4">
                                <div className="space-y-8">
                                    <div className="space-y-4">
                                        <span className="inline-block px-4 py-1.5 bg-blue-600/10 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-[0.2em]">
                                            Eau municipale
                                        </span>
                                        <h2 className="text-slate-900 mb-6 font-bold text-blue-600">
                                            Adoucisseurs d'eau résidentiels
                                        </h2>
                                        <p className="font-light text-slate-500 text-lg leading-relaxed text-justify">
                                            Offrez à votre foyer le luxe d'une eau sans calcaire. Nos adoucisseurs de pointe éliminent le tartre à la source, garantissant non seulement une vaisselle étincelante sans aucune trace, mais aussi une protection durable de vos appareils électroménagers et de votre plomberie.
                                        </p>
                                    </div>

                                    <div className="space-y-2">
                                        {[
                                            { title: "Douceur infinie", desc: "Une peau et des cheveux sublimés. Retrouvez la souplesse naturelle de votre peau et l'éclat de vos cheveux dès la première douche." },
                                            { title: "Économies réelles", desc: "Réduisez vos dépenses. Économisez jusqu'à 30% sur vos produits d'entretien et réduisez drastiquement vos factures d'énergie." },
                                            { title: "Protection totale", desc: "Préservez vos installations. Dites adieu aux pannes d'électroménager et aux traces de tartre sur votre robinetterie." }
                                        ].map((item, i) => (
                                            <div key={i} className="group flex items-start gap-4 p-2 rounded-3xl transition-colors hover:bg-slate-50">
                                                <div className="text-2xl font-black text-blue-600/20 group-hover:text-blue-600 transition-colors pt-1">
                                                    0{i + 1}
                                                </div>
                                                <div className="space-y-0.5">
                                                    <h3 className="text-xl font-bold tracking-tight text-blue-600/20 group-hover:text-blue-600 transition-colors">
                                                        {item.title}
                                                    </h3>
                                                    <p className="text-slate-500 font-light text-sm leading-relaxed max-w-sm">
                                                        {item.desc}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. Portable Water Softeners Section */}
                <section className="relative lg:py-24 bg-gray-50 overflow-hidden">
                    {/* Mobile Image Section */}
                    <div className="lg:hidden w-full h-[350px] sm:h-[450px] relative">
                        <img
                            src={mobileSoftenerImg}
                            alt="Adoucisseur d'eau portable pour VR et bateau - Solution mobile Bricareau contre l'eau dure"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/10" />
                    </div>

                    <div className="container mx-auto px-6 py-12 lg:py-0">
                        <div className="flex flex-col lg:flex-row-reverse items-start gap-16">
                            {/* Right Side (visually): Image with Video Button - Desktop Only */}
                            <div className="hidden lg:block w-full lg:w-1/2 lg:sticky lg:top-24 mb-12 lg:mb-0">
                                <div className="rounded-[2.5rem] overflow-hidden shadow-2xl relative h-[600px] w-full group">
                                    <img
                                        src={mobileSoftenerImg}
                                        alt="Adoucisseur d'eau portable pour VR et bateau - Solution mobile Bricareau contre l'eau dure"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500" />

                                    {/* Conditionneurs sans sel CTA Button */}
                                    <Button
                                        onClick={() => navigate('/adoucisseurs-portables')}
                                        className="absolute bottom-10 left-10 rounded-full bg-blue-600 hover:bg-blue-700 text-white px-8 h-14 text-base shadow-xl shadow-blue-200/50 transition-all hover:scale-105 active:scale-95 flex items-center gap-2 border-none"
                                    >
                                        Découvrir nos adoucisseurs portables <ChevronRight className="h-5 w-5" />
                                    </Button>
                                </div>
                            </div>

                            {/* Left Side (visually): Content */}
                            <div className="w-full lg:w-1/2 lg:pl-4">
                                <div className="space-y-8">
                                    <div className="space-y-4">
                                        <span className="inline-block px-4 py-1.5 bg-blue-600/10 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-[0.2em]">
                                            SOLUTION MOBILE
                                        </span>
                                        <h2 className="text-slate-900 mb-6 font-bold text-blue-600">
                                            Adoucisseurs d'eau portables
                                        </h2>
                                        <p className="font-light text-slate-500 text-lg leading-relaxed text-justify">
                                            Ne laissez plus l’eau dure des campings ou des ports abîmer vos cheveux et vos équipements. Profitez d'une eau de qualité domestique dans votre VR, votre bateau ou votre chalet avec notre adoucisseur ultra-compact.
                                        </p>
                                    </div>

                                    <div className="space-y-2">
                                        {[
                                            { title: "Ultra-Compact & Léger", desc: "Conçu pour les petits espaces. Sa taille réduite lui permet de se glisser dans n'importe quel compartiment de rangement." },
                                            { title: "Plug & Play", desc: "Aucun outil requis. Se branche directement sur votre tuyau d'arrosage. Une mise en service instantanée, sans plombier." },
                                            { title: "Protection Mobile", desc: "Sauvez vos équipements. Protégez la tuyauterie de votre VR et votre chauffe-eau contre les eaux dures variables." }
                                        ].map((item, i) => (
                                            <div key={i} className="group flex items-start gap-4 p-2 rounded-3xl transition-colors hover:bg-slate-50">
                                                <div className="text-2xl font-black text-blue-600/20 group-hover:text-blue-600 transition-colors pt-1">
                                                    0{i + 1}
                                                </div>
                                                <div className="space-y-0.5">
                                                    <h3 className="text-xl font-bold tracking-tight text-blue-600/20 group-hover:text-blue-600 transition-colors">
                                                        {item.title}
                                                    </h3>
                                                    <p className="text-slate-500 font-light text-sm leading-relaxed max-w-sm">
                                                        {item.desc}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 6. Water Conditionners without salt Section */}
                <section className="relative lg:py-24 bg-white overflow-hidden">
                    {/* Mobile Image Section */}
                    <div className="lg:hidden w-full h-[350px] sm:h-[450px] relative">
                        <img
                            src={untitledImg}
                            alt="Conditionneur d'eau sans sel écologique Bricareau - Protection contre le tartre sans saumure"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/10" />
                    </div>

                    <div className="container mx-auto px-6 py-12 lg:py-0">
                        <div className="flex flex-col lg:flex-row items-start gap-16">
                            {/* Left Side: Image with Video Button - Desktop Only */}
                            <div className="hidden lg:block w-full lg:w-1/2 lg:sticky lg:top-24 mb-12 lg:mb-0">
                                <div className="rounded-[2.5rem] overflow-hidden shadow-2xl relative h-[600px] w-full group">
                                    <img
                                        src={untitledImg}
                                        alt="Conditionneur d'eau sans sel écologique Bricareau - Protection contre le tartre sans saumure"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500" />

                                    {/* Conditionneurs sans sel CTA Button */}
                                    <Button
                                        onClick={() => navigate('/conditionneurs-sans-sel')}
                                        className="absolute bottom-10 left-10 rounded-full bg-blue-600 hover:bg-blue-700 text-white px-8 h-14 text-base shadow-xl shadow-blue-200/50 transition-all hover:scale-105 active:scale-95 flex items-center gap-2 border-none"
                                    >
                                        Découvrir nos conditionneurs d'eau sans sel <ChevronRight className="h-5 w-5" />
                                    </Button>

                                </div>
                            </div>

                            {/* Right Side: Content */}
                            <div className="w-full lg:w-1/2 lg:pl-4">
                                <div className="space-y-8">
                                    <div className="space-y-4">
                                        <span className="inline-block px-4 py-1.5 bg-blue-600/10 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-[0.2em]">
                                            ALTERNATIVE ÉCOLOGIQUE
                                        </span>
                                        <h2 className="text-slate-900 mb-6 font-bold text-blue-600">
                                            Conditionneurs d'eau sans sel
                                        </h2>
                                        <p className="font-light text-slate-500 text-lg leading-relaxed text-justify">
                                            Le secret d'un linge éclatant et d'une vaisselle sans traces. Sans l'ajout de sel, votre eau devient votre meilleure alliée beauté et ménage.
                                        </p>
                                    </div>

                                    <div className="space-y-2">
                                        {[
                                            { title: "100% Écologique", desc: "Contrairement aux systèmes au sel, vous ne rejetez aucune saumure dans l'environnement et ne consommez pas d'eau." },
                                            { title: "Zéro Contrainte", desc: "Oubliez les sacs de sel. Profitez d'une protection permanente sans électricité, sans réglages et sans maintenance." },
                                            { title: "Eau Préservée", desc: "Gardez les bons minéraux. Le calcaire est neutralisé mais le calcium et le magnésium restent dans l'eau pour votre santé." }
                                        ].map((item, i) => (
                                            <div key={i} className="group flex items-start gap-4 p-2 rounded-3xl transition-colors hover:bg-slate-50">
                                                <div className="text-2xl font-black text-blue-600/20 group-hover:text-blue-600 transition-colors pt-1">
                                                    0{i + 1}
                                                </div>
                                                <div className="space-y-0.5">
                                                    <h3 className="text-xl font-bold tracking-tight text-blue-600/20 group-hover:text-blue-600 transition-colors">
                                                        {item.title}
                                                    </h3>
                                                    <p className="text-slate-500 font-light text-sm leading-relaxed max-w-sm">
                                                        {item.desc}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 7. Testimonials */}
                <TestimonialsSection
                    filterProduct="/adoucissement"
                    limit={5}
                    title={
                        <>
                            <span className="font-light block">Une eau soyeuse.</span>
                            <span className="font-bold text-blue-600 block">Un confort absolu.</span>
                        </>
                    }
                />




                {/* 8. Comparison Table */}
                <section className="py-24 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="text-left mb-16">
              <h2
                className="text-slate-900 mb-8 text-left"
                style={{}}
              >
                <span className="font-light leading-[1.1] block">Comparez nos solutions</span>
                <span className="font-normal leading-[1.1] block">d'adoucissement d'eau</span>
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
                                            { name: "Conditionneur sans Sel", img: TACsystemImg },
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

                {/* 9. Water Testing Section (Redesigned for Mobile) */}
                <section className="relative lg:h-[750px] flex flex-col lg:flex-row items-stretch overflow-hidden bg-white">
                    {/* Mobile Image */}
                    <div className="lg:hidden w-full h-[300px] relative">
                        <img
                            src={waterTestingBg}
                            alt="Analyse d'eau à domicile et test de dureté - Diagnostic expert Bricareau"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-blue-900/20" />
                    </div>

                    {/* Desktop Background */}
                    <div className="hidden lg:block absolute inset-0 z-0">
                        <img
                            src={waterTestingBg}
                            alt="Analyse d'eau à domicile et test de dureté"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-blue-900/40 lg:bg-gradient-to-r lg:from-blue-900/90 lg:to-blue-600/20 mix-blend-multiply" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-white via-white/10 to-transparent" />
                    </div>

                    <div className="container mx-auto px-6 relative z-10 flex items-center py-12 lg:py-0">
                        <div className="max-w-2xl text-slate-900 lg:text-white">
                            <span className="text-blue-600 lg:text-white/80 font-bold uppercase tracking-widest text-sm mb-4 block">
                                Contrôle de la Qualité D'EAU
                            </span>
                            <h2 className="mb-8 text-slate-900 lg:text-white font-bold uppercase font-weight-bold 900">
                                L’essence d’une vie saine coule de votre robinet.
                            </h2>
                            <p className="font-light text-slate-600 lg:text-white/95 mb-8 max-w-xl text-left">
                                Entre le chlore, les métaux lourds et les sédiments, votre eau cache souvent des secrets. Ne laissez plus le doute couler de votre robinet. Demandez votre test d'eau dès aujourd'hui et obtenez un portrait clair de votre eau ainsi que des solutions adaptées à votre foyer.
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

                {/* 10. FAQ Section */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-left mb-16">
              <h2
                                className="text-slate-900 mb-8 text-left"
                                style={{}}
                            >
                                <span className="font-light leading-[1.1] block">Pour vous éclairer</span>
                                <span className="font-normal leading-[1.1] block">Questions fréquentes</span>
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
                                        <AccordionTrigger className="text-left text-base font-medium leading-6 hover:no-underline py-6" style={{}}>
                                            {item.q}
                                        </AccordionTrigger>
                                        <AccordionContent className="text-base font-light leading-6 text-gray-600 pb-6 text-justify" style={{}}>
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

                {/* 11. Resources Section */}
                <section className="py-24 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="text-left mb-16">
                            <h2
                                className="text-slate-900 mb-8 text-left"
                                style={{}}
                            >                                <span className="font-normal leading-[1.1] block">Ressources</span>
                            </h2>
                            <div className="w-24 h-1 bg-blue-600"></div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { title: "Adoucisseur sans sel vs avec sel : la vérité technique", img: conditionneursImg, link: "/adoucisseur-sans-sel-vs-avec-sel-verite-technique" },
                                { title: "Comment régler la dureté de votre adoucisseur ?", img: residentialWaterSoftenerImg, link: "/comment-regler-durete-adoucisseur-eau" },
                                { title: "Adoucisseur d'eau et fosse septique : compatible ou non ?", img: adoucisseurFosseImg, link: "/adoucisseur-deau-et-fosse-septique-mythes-et-realites" }
                            ].map((art, i) => (
                                <div
                                    key={i}
                                    className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer group flex flex-col h-full border border-gray-100"
                                    onClick={() => navigate(art.link)}
                                >
                                    <div className="h-56 overflow-hidden">
                                        <img
                                            src={art.img}
                                            alt={`${art.title} - Guide conseil en adoucissement d'eau Bricareau`}
                                            className={`w-full h-full transition-transform duration-700 group-hover:scale-110 ${art.title === "Comment choisir votre adoucisseur d'eau ?" ? "object-contain" : "object-cover"}`}
                                        />
                                    </div>
                                    <div className="p-8 text-left border-t-2 border-transparent group-hover:border-blue-600 transition-colors flex flex-col flex-grow">
                                        <NavLink to={art.link}>
                                            <h4 className="mb-4 group-hover:text-blue-600 transition-colors tracking-tight font-medium text-base leading-6 text-[#0F1729]">{art.title}</h4>
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

            </main>
            <Footer />
        </div>
    );
};

export default Adoucissement;
