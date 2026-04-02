import { cn } from "@/lib/utils";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import GlobalBreadcrumbs from "@/components/GlobalBreadcrumbs";
import TestimonialsSection from "@/components/TestimonialsSection";
import ExpertAvatars from "@/components/ExpertAvatars";
import { Button } from "@/components/ui/button";
import heroBath from "@/assets/young-nude-woman-taking-relaxing-foamy-bath.jpeg";
import kitchenImg from "@/assets/18036672_SIE_2720_1530_21_04_30_SIE_CRM_Dishwasher_Hand_Taking_Out_Wine_Glass_Basket_Motiv_11_0017.webp";
import untitledImg from "@/assets/2151469364.jpg";
import mobileSoftenerImg from "@/assets/9-optimized.webp";
import portableWaterSoftenerImg from "@/assets/Portable_Water_Softener.jpg";
import designImg from "@/assets/Design.jpg";
import bathroomImg from "@/assets/342800.jpg";
import financeModeImg from "@/assets/finance_mode.svg";
import plumbingImg from "@/assets/plumbing.svg";
import moneyBagImg from "@/assets/money_bag.svg";
import healthMetricsImg from "@/assets/health_metrics.svg";
import laundryImg from "@/assets/302731406_443870381116589_3770801709209607894_n.jpg";
import laundryIcon from "@/assets/laundry.svg";
import detergentsImg from "@/assets/Detergents.svg";
import starsImg from "@/assets/stars.svg";
import healthSafetyImg from "@/assets/health_and_safety.svg";
import softImg from "@/assets/Soft.svg";
import savingsImg from "@/assets/savings.svg";
import waterTestingImg from "@/assets/2147800429.jpg";
import process1 from "@/assets/2148563485.jpg";
import labTestImg from "@/assets/test-laboratoire-diligence-inspection-750x500.jpg";
import waterTestingBg from "@/assets/undersink_filtration_header.jpg";
import adoucisseursImg from "@/assets/Adoucisseurs d'eau.webp";
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
import arrowDownIcon from "@/assets/keyboard_double_arrow_down.svg";
import arrowUpIcon from "@/assets/keyboard_double_arrow_up.svg";
import hardWaterFaucetImg from "@/assets/Hard Water-Faucet.jpg";

import {
    ArrowRight,
    ChevronRight,
    ChevronLeft,
    Droplets,
    Heart,
    Shield,
    TrendingDown,
    Shirt,
    Zap,
    Check,
    CheckCircle2,
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
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 4000, stopOnInteraction: false })]);
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);

    const onSelect = React.useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi, setSelectedIndex]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        setScrollSnaps(emblaApi.scrollSnapList());
        emblaApi.on('select', onSelect);
    }, [emblaApi, setScrollSnaps, onSelect]);
    const [showAllFaqs, setShowAllFaqs] = useState(false);
    const [showAllHarms, setShowAllHarms] = useState(false);
    const [activeCol, setActiveCol] = useState(0); 
    const navigate = useNavigate();
    const resourcesRef = React.useRef<HTMLDivElement>(null);

    const scrollResources = (direction: 'left' | 'right') => {
        if (resourcesRef.current) {
            const scrollAmount = resourcesRef.current.clientWidth * 0.8;
            resourcesRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
        }
    };

    const [resourceIndex, setResourceIndex] = React.useState(1);
    const resources = [
        { title: "Adoucisseur sans sel vs avec sel : la vérité technique", img: conditionneursImg, link: "/adoucisseur-sans-sel-vs-avec-sel-verite-technique" },
        { title: "Comment régler la dureté de votre adoucisseur ?", img: residentialWaterSoftenerImg, link: "/comment-regler-durete-adoucisseur-eau" },
        { title: "Adoucisseur d'eau et fosse septique : compatible ou non ?", img: adoucisseurFosseImg, link: "/adoucisseur-deau-et-fosse-septique-mythes-et-realites" }
    ];

    const handleScrollRessources = () => {
        if (resourcesRef.current) {
            const scrollLeft = resourcesRef.current.scrollLeft;
            const containerWidth = resourcesRef.current.offsetWidth;
            const itemWidth = resourcesRef.current.querySelector('div')?.offsetWidth || containerWidth;
            const newIndex = Math.round(scrollLeft / itemWidth) + 1;
            setResourceIndex(Math.min(newIndex, resources.length));
        }
    };


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
                <Hero 
                    image={heroBath}
                    highlightedTitle="Adoucisseurs d'eau,"
                    mainTitle="éliminez le calcaire et l'eau dure."
                    subtitle="Redécouvrez l'expérience d'une eau soyeuse qui préserve votre peau, vos cheveux et vos investissements. Une technologie de pointe pour une protection durable de votre foyer."
                    showPhone={true}
                    showBreadcrumbs={true}
                />

                {/* 2. Diagnostic Impact - Bento Grid */}
                <section className="py-24 lg:py-32 bg-slate-50/50 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,_rgba(37,99,235,0.05)_0%,_transparent_50%)] pointer-events-none" />
                    
                    <div className="container mx-auto px-6 relative z-10">
                        <div className="max-w-4xl mx-auto text-center mb-24">
                            <span className="inline-block px-4 py-1.5 bg-blue-600/10 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-8">
                                DIAGNOSTIC L'EAU DURE
                            </span>
                            <h2 className="mb-8 heading-pro-max text-center">
                                <span className="italic font-light text-[#2563eb] block">L'impact silencieux du</span>
                                <span className="font-bold text-[#1e3a8a] block text-center">calcaire sur votre vie.</span>
                            </h2>
                            <p className="body-pro-max text-slate-500 text-center mx-auto max-w-2xl">
                                Le calcaire n'est pas qu'un dépôt blanc ; c'est un agent d'érosion invisible qui dégrade votre confort, votre santé et vos finances au quotidien.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                { 
                                    title: "Énergie & Coût", 
                                    impact: "+25% Facture", 
                                    desc: "Le tartre isole vos résistances, forçant vos appareils à consommer massivement plus d'électricité pour chauffer l'eau.",
                                    icon: <Zap className="w-6 h-6 text-blue-600" />,
                                    badge: "Impact Financier",
                                    img: applianceDamageImg,
                                    color: "bg-amber-500"
                                },
                                { 
                                    title: "Peau & Dermatite", 
                                    impact: "Irritations", 
                                    desc: "L'eau dure assèche l'épiderme et peut aggraver l'eczéma. Retrouvez une peau soyeuse et des cheveux éclatants.",
                                    icon: <Heart className="w-6 h-6 text-rose-500" />,
                                    badge: "Soin Personnel",
                                    img: womansufferingfromHardWaterImg,
                                    color: "bg-rose-500"
                                },
                                { 
                                    title: "Électroménagers", 
                                    impact: "Vie /2", 
                                    desc: "Réduisez drastiquement la fréquence de remplacement de votre chauffe-eau, lave-linge et lave-vaisselle.",
                                    icon: <Shield className="w-6 h-6 text-emerald-600" />,
                                    badge: "Protection Actifs",
                                    img: kitchenImg,
                                    color: "bg-emerald-600"
                                },
                                { 
                                    title: "Entretien Ménager", 
                                    impact: "Double effort", 
                                    desc: "Dites adieu aux traces de tartre sur la robinetterie et aux voiles blanchâtres sur votre vaisselle étincelante.",
                                    icon: <Sparkles className="w-6 h-6 text-cyan-500" />,
                                    badge: "Confort",
                                    img: hardWaterSignsImg,
                                    color: "bg-cyan-500"
                                },
                                { 
                                    title: "Textiles & Linge", 
                                    impact: "Usure Précoce", 
                                    desc: "Les fibres deviennent rêches et les couleurs ternissent. Protégez la douceur de vos vêtements préférés.",
                                    icon: <Shirt className="w-6 h-6 text-indigo-500" />,
                                    badge: "Linge Doux",
                                    img: laundryImg,
                                    color: "bg-indigo-500"
                                },
                                { 
                                    title: "Consommation", 
                                    impact: "Savon x2", 
                                    desc: "L'eau dure nécessite jusqu'à 50% de détergents et savons en plus pour obtenir une mousse efficace.",
                                    icon: <HandCoins className="w-6 h-6 text-amber-500" />,
                                    badge: "Économie",
                                    img: hardWaterImg,
                                    color: "bg-amber-500"
                                }
                            ].map((item, idx) => (
                                <div 
                                    key={idx} 
                                    className="group relative h-[420px] rounded-[3rem] overflow-hidden border border-white bg-white/40 backdrop-blur-xl shadow-sm cursor-pointer transition-all duration-700 hover:shadow-2xl hover:shadow-blue-200/50 hover:border-blue-200 hover:-translate-y-2"
                                    onClick={() => navigate("/consultation")}
                                >
                                    {/* Background Image with Overlay */}
                                    <div className="absolute inset-0 z-0">
                                        <img 
                                            src={item.img} 
                                            alt={item.title} 
                                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-40 group-hover:opacity-60"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-br from-white via-white/80 to-transparent" />
                                    </div>

                                    <div className="relative z-10 inset-0 p-10 h-full flex flex-col justify-between">
                                        <div className="space-y-4">
                                            <div className="flex items-center gap-3">
                                                <div className={`w-3 h-3 rounded-full ${item.color} shadow-lg`} />
                                                <span className="text-[10px] font-black uppercase tracking-wider text-slate-500 group-hover:text-blue-600 transition-colors">
                                                    {item.badge}
                                                </span>
                                            </div>
                                            <h3 className="text-3xl font-bold text-[#1e3a8a] leading-[1.1] transition-all duration-500 group-hover:translate-x-2">
                                                {item.title}
                                            </h3>
                                            <p className="text-slate-600 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-1000 translate-y-4 group-hover:translate-y-0 text-justify">
                                                {item.desc}
                                            </p>
                                        </div>

                                        <div className="space-y-4">
                                            <div className="h-px w-12 bg-blue-200 group-hover:w-full transition-all duration-700" />
                                            <div className="text-xs font-light text-slate-600 group-hover:text-blue-800 transition-all italic">
                                                Impact : <span className="font-bold border-b border-transparent group-hover:border-blue-600">{item.impact}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Hover Overlay CTA */}
                                    <div className="absolute inset-0 bg-blue-600/95 z-20 opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col items-center justify-center p-8 space-y-6 translate-y-full group-hover:translate-y-0 text-center">
                                        <div className="text-center">
                                            <p className="text-white/80 text-xs font-black uppercase tracking-widest mb-2 italic">Résoudre ce problème</p>
                                            <h4 className="text-white text-2xl font-bold leading-tight px-6">Expertise gratuite pour cette solution</h4>
                                        </div>
                                        <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white border border-white/20 group-hover:rotate-45 transition-transform duration-700">
                                            <ArrowRight className="w-6 h-6" />
                                        </div>
                                    </div>
                                </div>
                            ))}
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
                         <h2 
                                     id="benefits-title"
                                     className="scroll-mt-[120px] mb-8 heading-pro-max text-center"
                                 >
                                     <span className="italic font-light text-[#2563eb] block">Les avantages de</span>
                                     <span className="font-bold text-[#1e3a8a] block">l'adoucissement d'eau</span>
                                 </h2>
                         <p className="body-pro-max text-center">
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
                                     <p className="body-pro-max">
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


                                </div>
                            </div>

                            {/* Right Side: Content */}
                            <div className="w-full lg:w-1/2 lg:pl-4">
                                <div className="space-y-8">
                                    <div className="space-y-4">
                                        <span className="inline-block px-4 py-1.5 bg-blue-600/10 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-[0.2em]">
                                            Eau municipale
                                        </span>
                                        <h2 
                                         id="impact-title"
                                         className="scroll-mt-[120px] mb-8 heading-pro-max text-left"
                                     >
                                         <span className="italic font-light text-[#2563eb] block">Adoucisseurs d'eau résidentiels</span>
                                     </h2>
                                     <p className="body-pro-max mb-8 max-w-xl text-left">
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
                                    <div className="pt-6">
                                        <Button
                                            onClick={() => navigate('/adoucisseur-eau-residentiel')}
                                            size="lg"
                                            className="w-full sm:w-auto"
                                        >
                                            Découvrir nos adoucisseurs d'eau <ChevronRight className="h-5 w-5 ml-2" />
                                        </Button>
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
                            src={designImg}
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
                                        src={designImg}
                                        alt="Adoucisseur d'eau portable pour VR et bateau - Solution mobile Bricareau contre l'eau dure"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500" />


                                </div>
                            </div>

                            {/* Left Side (visually): Content */}
                            <div className="w-full lg:w-1/2 lg:pl-4">
                                <div className="space-y-8">
                                    <div className="space-y-4">
                                        <span className="inline-block px-4 py-1.5 bg-blue-600/10 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-[0.2em]">
                                            SOLUTION MOBILE
                                        </span>
                                        <h2 className="mb-8 heading-pro-max text-left">
                                             <span className="italic font-light text-[#2563eb] block text-left">Adoucisseurs d'eau portables</span>
                                         </h2>
                                         <p className="body-pro-max text-left">
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
                                    <div className="pt-6">
                                        <Button
                                            onClick={() => navigate('/adoucisseurs-portables')}
                                            size="lg"
                                            className="w-full sm:w-auto"
                                        >
                                            Découvrir nos adoucisseurs portables <ChevronRight className="h-5 w-5 ml-2" />
                                        </Button>
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



                                </div>
                            </div>

                            {/* Right Side: Content */}
                            <div className="w-full lg:w-1/2 lg:pl-4">
                                <div className="space-y-8">
                                    <div className="space-y-4">
                                        <span className="inline-block px-4 py-1.5 bg-blue-600/10 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-[0.2em]">
                                            ALTERNATIVE ÉCOLOGIQUE
                                        </span>
                                        <h2 className="mb-8 heading-pro-max text-left">
                                             <span className="italic font-light text-[#2563eb] block text-left">Conditionneurs d'eau sans sel</span>
                                         </h2>
                                         <p className="body-pro-max text-left">
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
                                    <div className="pt-6">
                                        <Button
                                            onClick={() => navigate('/conditionneurs-sans-sel')}
                                            size="lg"
                                            className="w-full sm:w-auto"
                                        >
                                            Découvrir nos conditionneurs d'eau sans sel <ChevronRight className="h-5 w-5 ml-2" />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <TestimonialsSection
                    filterProduct="/adoucissement"
                    limit={5}
                    title={
                        <h2 className="mb-8 heading-pro-max text-center">
                            <span className="italic font-light text-[#2563eb] block">Une eau soyeuse.</span>
                            <span className="font-bold text-[#1e3a8a] block">Un confort absolu.</span>
                        </h2>
                    }
                />

                {/* 8. Comparison Table */}
                <section className="py-24 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="text-left mb-16">
                            <h2 className="mb-8 heading-pro-max text-left">
                                         <span className="italic font-light text-[#2563eb] block">Comparez nos solutions</span>
                                         <span className="font-bold text-[#1e3a8a] block">d'adoucissement d'eau</span>
                                     </h2>
                            <div className="w-24 h-1 bg-blue-600"></div>
                        </div>
                        <div className="overflow-x-visible relative">
                            {/* Navigation Arrows for Mobile/Tablet */}
                            <div className="lg:hidden flex items-center justify-end gap-3 mb-6 relative z-30">
                                <Button 
                                    size="icon" 
                                    variant="outline" 
                                    className="w-10 h-10 rounded-full border-blue-100 hover:bg-blue-600 hover:text-white transition-all shadow-sm"
                                    onClick={() => setActiveCol(0)}
                                    disabled={activeCol === 0}
                                >
                                    <ChevronLeft className="h-5 w-5" />
                                </Button>
                                <Button 
                                    size="icon" 
                                    variant="outline" 
                                    className="w-10 h-10 rounded-full border-blue-100 hover:bg-blue-600 hover:text-white transition-all shadow-sm"
                                    onClick={() => setActiveCol(1)}
                                    disabled={activeCol === 1}
                                >
                                    <ChevronRight className="h-5 w-5" />
                                </Button>
                            </div>

                            <div className="overflow-x-auto lg:overflow-x-visible no-scrollbar pb-8">
                                <table className="w-full border-collapse bg-white rounded-3xl overflow-hidden shadow-2xl relative">
                                    <thead>
                                        <tr className="bg-slate-50 relative z-20">
                                            <th className="p-6 md:p-8 text-left text-blue-900/40 font-black uppercase tracking-widest text-[10px] sticky left-0 bg-slate-50 z-30 border-r border-slate-100 drop-shadow-md lg:drop-shadow-none min-w-[160px] md:min-w-[200px]">
                                                Solutions
                                            </th>
                                            {[
                                                { name: "Adoucisseur Sentinel", img: adoucisseursImg, badge: "Performance Totale", color: "bg-[#1e3a8a]" },
                                                { name: "Conditionneur sans Sel", img: TACsystemImg, badge: "Éco-Responsable", color: "bg-[#2563eb]" },
                                            ].map((m, i) => (
                                                <th 
                                                    key={i} 
                                                    className={cn(
                                                        "p-4 md:p-6 text-center text-gray-900 font-bold transition-all duration-500",
                                                        i === activeCol ? "table-cell" : "hidden lg:table-cell"
                                                    )}
                                                >
                                                    <div className="flex flex-col items-center gap-4 group py-4">
                                                        <div className="relative">
                                                            <div className={`absolute -top-3 -right-6 z-20 ${m.color} text-white text-[8px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full shadow-lg whitespace-nowrap scale-90 md:scale-100`}>
                                                                {m.badge}
                                                            </div>
                                                            <img
                                                                src={m.img}
                                                                alt={`${m.name} - Système de traitement d'eau haute performance Bricareau`}
                                                                className="w-[120px] md:w-[150px] h-[100px] md:h-[120px] object-contain mx-auto mix-blend-multiply group-hover:scale-110 transition-transform duration-500 rounded-xl"
                                                            />
                                                        </div>
                                                        <span className="max-w-[140px] inline-block uppercase tracking-wider text-[10px] md:text-[11px] text-[#1e3a8a]">{m.name}</span>
                                                    </div>
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100 relative z-10">
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
                                            <tr key={i} className="hover:bg-slate-50/50 transition-colors group">
                                                <td className="p-6 md:p-8 font-medium text-slate-700 bg-white sticky left-0 z-30 border-r border-slate-50 drop-shadow-sm lg:drop-shadow-none text-sm md:text-base">
                                                    {row.feature}
                                                </td>
                                                <td 
                                                    className={cn(
                                                        "p-6 md:p-8 text-center transition-all duration-500",
                                                        activeCol === 0 ? "table-cell" : "hidden lg:table-cell"
                                                    )}
                                                >
                                                    {typeof row.specialized === 'string' ? <span className="text-blue-600 font-bold bg-blue-50/50 px-3 py-1.5 rounded-full text-[10px] md:text-[11px]">{row.specialized}</span> : (row.specialized ? <CheckCircle2 className="h-5 w-5 md:h-6 md:w-6 text-blue-600 mx-auto" /> : null)}
                                                </td>
                                                <td 
                                                    className={cn(
                                                        "p-6 md:p-8 text-center transition-all duration-500",
                                                        activeCol === 1 ? "table-cell" : "hidden lg:table-cell"
                                                    )}
                                                >
                                                    {typeof row.station === 'string' ? <span className="text-blue-600 font-bold bg-blue-50/50 px-3 py-1.5 rounded-full text-[10px] md:text-[11px]">{row.station}</span> : (row.station ? <CheckCircle2 className="h-5 w-5 md:h-6 md:w-6 text-blue-600 mx-auto" /> : null)}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 9. Water Testing Section (Redesigned for Mobile) */}
                <section className="relative lg:h-[800px] flex flex-col lg:flex-row items-stretch overflow-hidden bg-white">
                    {/* Mobile Image */}
                    {/* Mobile Image */}
                    <div className="lg:hidden w-full relative bg-[#F8FAFC]">
                        <img
                            src={waterTestingImg}
                            alt="Analyse d'eau à domicile et test de dureté - Bricareau"
                            className="w-full h-auto object-contain block mx-auto"
                        />
                        <div className="absolute inset-0 bg-blue-900/5" />
                    </div>

                    {/* Desktop Background */}
                    <div className="hidden lg:block absolute inset-0 z-0 bg-slate-50">
                        <img
                            src={waterTestingImg}
                            alt="Analyse d'eau à domicile et test de dureté"
                            className="w-full h-full object-cover opacity-95"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent lg:from-white/95 lg:via-white/70 lg:to-transparent" />
                    </div>

                    <div className="container mx-auto px-4 relative z-10 flex items-center py-12 lg:py-0">
                        <div className="max-w-2xl text-slate-900 lg:text-white">
                            <span className="text-blue-600 lg:text-blue-600 text-xs font-black uppercase tracking-[0.3em] mb-8 block">
                                Contrôle de la Qualité D'EAU
                            </span>

                            <h2 className="mb-8 heading-pro-max text-left">
                                <span className="font-light italic text-[#1e3a8a] lg:text-white block">L’essence d’une vie saine</span>
                                <span className="text-[#1e3a8a] lg:text-white italic font-bold font-serif">coule de votre robinet.</span>
                            </h2>
                            <p className="body-pro-max text-black lg:text-white/95 mb-8 max-w-xl text-left">
                                 Entre le chlore, les métaux lourds et les sédiments, votre eau cache souvent des secrets. Ne laissez plus le doute couler de votre robinet. Demandez votre test d'eau dès aujourd'hui et obtenez un portrait clair de votre eau ainsi que des solutions adaptées à votre foyer.
                             </p>
                            <div className="flex gap-4">
                                <Button asChild>
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
                            <h2 className="mb-8 heading-pro-max text-left">
                                         <span className="italic font-light text-[#2563eb] block">Pour vous éclairer</span>
                                         <span className="font-bold text-[#1e3a8a] block">Questions fréquentes</span>
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
                                >
                                    {showAllFaqs ? "Voir moins de questions" : "Voir toutes les questions"}
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>


                {/* 10. PREMIUM CTA SECTION */}
                <section className="relative py-32 flex items-center overflow-hidden bg-[#1e3a8a]">
                    {/* Animated background elements */}
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-600/20 to-transparent skew-x-12 translate-x-1/4" />
                    <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-cyan-400/10 to-transparent -skew-x-12 -translate-x-1/4" />
                    
                    {/* Background Image with Overlay */}
                    <div className="absolute inset-0 z-0 opacity-40">
                        <img
                            src={bathroomImg}
                            alt="Problématique d'eau dure sur la robinetterie - Solution Bricareau"
                            className="w-full h-full object-cover grayscale brightness-150"
                        />
                        <div className="absolute inset-0 bg-[#1e3a8a]/10 backdrop-blur-sm" />
                    </div>

                    <div className="container mx-auto px-6 relative z-10">
                        <div className="max-w-5xl mx-auto text-center space-y-12">
                            <div className="space-y-6">
                                <span className="inline-block px-4 py-1.5 bg-white text-blue-600 rounded-full text-[10px] font-black uppercase tracking-[0.4em]">
                                    PRENEZ LE CONTRÔLE DE VOTRE EAU
                                </span>
                                <h2 className="text-4xl md:text-6xl lg:text-5xl font-light text-white leading-[1.1] tracking-tighter">
                                    Prêt à retrouver la douceur <span className="text-white italic font-bold font-serif"> <br />d'une eau sans Calcaire ?</span>
                                </h2>
                                <p className="text-lg md:text-xl text-blue-100/80 max-w-2xl mx-auto font-light leading-relaxed">
                                    Éliminez le tartre, protégez votre foyer et redécouvrez le confort d’une peau soyeuse. Contactez nos experts pour une analyse de dureté gratuite et une solution sur mesure.<br className="hidden md:block" />
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-4">
                                <Button asChild>
                                    <a href="tel:18552649328" className="flex items-center gap-3">
                                        <Phone className="h-5 w-5 animate-bounce" />
                                        Parlez à un expert
                                    </a>
                                </Button>
                                                                            
                                <Button
                                    variant="outline"
                                    asChild
                                >
                                    <NavLink to="/consultation">Planifiez une consultation</NavLink>
                                </Button>
                            </div>

                            <div className="pt-8 flex flex-col items-center gap-4">
                                <ExpertAvatars />
                                <p className="text-blue-200/60 text-sm font-medium">
                                    Rejoignez plus de <span className="text-white">1,500 familles</span> satisfaites au Québec cette année.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>


                {/* 11. Resources Section */}
                <section className="py-24 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="text-left mb-16">
                            <h2 className="mb-8 heading-pro-max text-left">
                                         <span className="font-bold text-[#1e3a8a] block">Ressources</span>
                                     </h2>
                            <div className="w-24 h-1 bg-blue-600"></div>
                        </div>
                        <div 
                            ref={resourcesRef}
                            onScroll={handleScrollRessources}
                            className="flex lg:grid lg:grid-cols-3 gap-8 overflow-x-auto lg:overflow-x-visible no-scrollbar snap-x snap-mandatory pb-12 px-1 lg:px-0 scroll-smooth"
                        >
                            {resources.map((art, i) => (
                                <div
                                    key={i}
                                    className="min-w-[70vw] md:min-w-[45vw] lg:min-w-0 snap-center bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer group flex flex-col h-full border border-gray-100"
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

                        {/* Navigation arrows and numbering for carousel - Mobile ONLY */}
                        <div className="lg:hidden flex items-center justify-center relative mt-6">
                            <div className="flex items-center gap-4">
                                <Button 
                                    size="icon" 
                                    variant="outline" 
                                    className="w-12 h-12 rounded-full border-blue-100 hover:bg-blue-600 hover:text-white transition-all shadow-sm bg-white"
                                    onClick={() => scrollResources('left')}
                                >
                                    <ChevronLeft className="h-6 w-6" />
                                </Button>
                                <Button 
                                    size="icon" 
                                    variant="outline" 
                                    className="w-12 h-12 rounded-full border-blue-100 hover:bg-blue-600 hover:text-white transition-all shadow-sm bg-white"
                                    onClick={() => scrollResources('right')}
                                >
                                    <ChevronRight className="h-6 w-6" />
                                </Button>
                            </div>
                            
                            <div className="absolute right-2 text-sm font-black text-[#1e3a8a] bg-blue-50/50 px-4 py-2 rounded-full border border-blue-100/50">
                                <span className="text-blue-600">{resourceIndex}</span>
                                <span className="mx-1 text-slate-300">/</span>
                                <span className="text-slate-400">{resources.length}</span>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />

                {/* Floating Sticky CTA - Phase III Conversion Focus */}
                      <div className="hidden md:block fixed bottom-8 right-8 z-[100] animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-[3s] pointer-events-none">
                        <div className="pointer-events-auto group/sticky">
                          <Button
                            asChild
                            className="bg-white hover:-translate-y-2 transition-all duration-10000 active:scale-95"
                            style={{ backdropFilter: "blur(20px)" }}
                          >
                            <a href="/consultation" className="flex items-center gap-4 animate-bounce" style={{ animationDuration: '3s' }}>
                              <span className="font-black-light text-sm tracking-wider white text-blue-600 space-nowrap text-center">
                                Réservez votre <br />consultation gratuite
                              </span>
                              <div className="w-10 h-10 bg-[#2563eb] rounded-full flex items-center justify-center text-white group-hover/sticky:rotate-[360deg] shadow-lg shadow-blue-200">
                                  <ArrowRight className="w-5 h-5" />
                                </div>
                            </a>
                          </Button>
                        </div>
                      </div>
        </div>
    );
};

export default Adoucissement;
