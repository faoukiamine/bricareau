import { cn } from "@/lib/utils";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import GlobalBreadcrumbs from "@/components/GlobalBreadcrumbs";
import TestimonialsSection from "@/components/TestimonialsSection";
import ExpertAvatars from "@/components/ExpertAvatars";
import { ProMaxButton } from "@/components/ui/ProMaxButton";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/640320.jpg";
import kitchenImg from "@/assets/9194.jpg";
import untitledImg from "@/assets/2151469364.jpg";
import mobileSoftenerImg from "@/assets/9-optimized.webp";
import portableWaterSoftenerImg from "@/assets/Portable_Water_Softener.jpg";
import designImg from "@/assets/Design.jpg";
import bathroomImg from "@/assets/342800.jpg";
import financeModeImg from "@/assets/finance_mode.svg";
import plumbingImg from "@/assets/plumbing.svg";
import moneyBagImg from "@/assets/money_bag.svg";
import healthMetricsImg from "@/assets/health_metrics.svg";
import laundryImg from "@/assets/2151468669.jpg";
import laundryIcon from "@/assets/laundry.svg";
import detergentsImg from "@/assets/Detergents.svg";
import starsImg from "@/assets/stars.svg";
import healthSafetyImg from "@/assets/health_and_safety.svg";
import softImg from "@/assets/Soft.svg";
import savingsImg from "@/assets/savings.svg";
import waterTestingImg from "@/assets/2147800429.jpg";
import process1 from "@/assets/2148563485.jpg";
import labTestImg from "@/assets/test-laboratoire-diligence-inspection-750x500.jpg";
import equipmentProImg from "@/assets/2151949237.jpg";
import tableArtImg from "@/assets/2150901946.jpg";
import profitabilityImg from "@/assets/2077.jpg";
import waterTestingBg from "@/assets/undersink_filtration_header.jpg";
import adoucisseursImg from "@/assets/Adoucisseurs d'eau.webp";
import specializedFiltersImg from "@/assets/Filtres d'eau spécialisés.webp";
import drinkingWaterImg from "@/assets/Solutions d'eau potable.webp";
import undersinkSystemImg from "@/assets/Système+de+filtration+Serene+Lite.webp";
import hardWaterSignsImg from "@/assets/Signs+of+hard+water+in+your+home-640w.webp";
import hardWaterImg from "@/assets/58279.jpg";
import benefitsVisualImg from "@/assets/2148003850.jpg";
import { conditionneursImg } from "./Blog pages/Adoucisseur avec sel ou sans sel";
import { softenerImg as residentialWaterSoftenerImg } from "./Blog pages/Comment régler la dureté de votre adoucisseur ";
import { adoucisseurImg as adoucisseurFosseImg } from "./Blog pages/Adoucisseur-deau- et-fosse-septique--Mythes-et-réalités";
import TACsystemImg from "@/assets/free salt conditionner.webp";
import womansufferingfromHardWaterImg from "@/assets/2149561614.jpg";
import womansufferingdryhairfromhardwaterImg from "@/assets/12163.jpg";
import arrowDownIcon from "@/assets/keyboard_double_arrow_down.svg";
import arrowUpIcon from "@/assets/keyboard_double_arrow_up.svg";
import hardWaterFaucetImg from "@/assets/Hard Water-Faucet.jpg";
import panoramaBgImg from "@/assets/Rain.webp";
import SentinellePDF from "@/assets/brochure-freshpoint-fr.pdf";
import TwinAlternatingWaterSoftenerImg from "@/assets/Alternating Water Softener.png";
import SentinelWaterSoftenerImg from "@/assets/Sentinelle Water Softener.png";
import SerenityWaterSoftenerImg from "@/assets/Serenity Water Softener.png";
import installationSoftenerImg from "@/assets/WaterSoftenerInstallation.jpg";
import diagnosticStepImg from "@/assets/step-diagnostic.png";
import customStepImg from "@/assets/step-custom.png";
import installationStepImg from "@/assets/step-installation.png";
import serenityStepImg from "@/assets/step-serenity.png";
import energyImg from "@/assets/detartrage-chauffe-eau-electrique.jpg";
import coffeeImg from "@/assets/jura-x10-dark-inox.jpg";

import {
    ArrowRight,
    ChevronRight,
    ChevronLeft,
    Shield,
    Sparkles,
    Shirt,
    Zap,
    HandCoins,
    Phone,
    CheckCircle,
    CheckCircle2,
    Coffee
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
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const products = [
    { 
        name: "Adoucisseur d'eau de la série \n Sentinelle", 
        desc: "Votre priorité est d'éradiquer le calcaire avec une précision chirurgicale, sans complexité inutile.", 
        features: ["Protection des électros", "Format compact intelligent", "Économie de sel optimisée"],
        path: "/adoucisseur-sentinelle", 
        image: SentinelWaterSoftenerImg 
    },
    { 
        name: "Adoucisseur d'eau de la série \n Sérénité", 
        desc: "Vous cherchez l'eau parfaite pour la peau, les cheveux et la consommation, en éliminant aussi le chlore.", 
        features: ["Hybride : Calcaire & Chlore", "Douceur dermatologique", "Élimine odeurs et goûts"],
        isRecommended: true,
        path: "/contact", 
        image: SerenityWaterSoftenerImg 
    },
    { 
        name: "Adoucisseur d'eau de la série \n Infiniti", 
        desc: "Grandes familles ou besoins critiques : vous refusez toute interruption de douceur, 24h/24.", 
        features: ["Double bouteille alternée", "Eau douce non-stop", "Performance industrielle"],
        path: "/contact", 
        image: TwinAlternatingWaterSoftenerImg 
    },
];

interface ComparisonItem {
    feature: string;
    Sentinel: string | boolean;
    Sérénité: string | boolean;
    Infiniti: string | boolean;
}

const comparisonData: ComparisonItem[] = [
    { 
        feature: "Cible principale", 
        Sentinel: "Dureté (Calcaire)", 
        Sérénité: "Dureté + Chlore + Goût", 
        Infiniti: "Dureté (Haute Capacité)" 
    },
    { 
        feature: "Technologie de Vanne", 
        Sentinel: "Électronique Volumétrique", 
        Sérénité: "Double Régulation Luxe", 
        Infiniti: "Alternance Hydrométrique" 
    },
    { 
        feature: "Média Filtrant", 
        Sentinel: "Résine Haute Capacité", 
        Sérénité: "Résine + Charbon KDF", 
        Infiniti: "Résine Premium X2" 
    },
    { 
        feature: "Garantie Structurelle", 
        Sentinel: "10 ans", 
        Sérénité: "À Vie (Limitée)", 
        Infiniti: "À Vie (Limitée)" 
    },
    { 
        feature: "Économie de Sel", 
        Sentinel: "Standard", 
        Sérénité: "Optimisée (+30%)", 
        Infiniti: "Maximale (Contrôle Continu)" 
    }
];

const faqItems = [
    { 
        q: "Pourquoi un adoucisseur est-il indispensable pour un hôtel ou un restaurant ?", 
        a: "Au-delà du confort client, c'est une nécessité opérationnelle. L'eau dure entartre vos machines à café, fours vapeur et lave-vaisselle, augmentant vos coûts de maintenance et raccourcissant la durée de vie de vos équipements professionnels coûteux." 
    },
    { 
        q: "Quelles économies réelles peut-on espérer ?", 
        a: "Un établissement peut réduire sa consommation de détergents et produits de nettoyage jusqu'à 40%. De plus, l'absence de tartre dans les chauffe-eau permet une économie d'énergie de 15% à 25%." 
    },
    {
        q: "L'installation perturbe-t-elle le service ?",
        a: "Nos équipes planifient l'installation durant vos heures creuses pour minimiser l'impact. Une fois installé, le système fonctionne de manière autonome avec une maintenance minimale."
    },
    { 
        q: "L'adoucisseur affecte-t-il la pression d'eau pour les douches ?", 
        a: "Absolument pas. Nos modèles commerciaux 'High Flow' sont dimensionnés pour répondre aux pics de demande, garantissant une pression optimale même en pleine occupation." 
    },
    { 
        q: "Est-ce compatible avec les normes de santé et sécurité ?", 
        a: "Oui, nos systèmes répondent aux normes les plus strictes de l'industrie. L'eau adoucie facilite également le respect des standards d'hygiène en éliminant les nids à bactéries que constitue le tartre." 
    },
    { 
        q: "Quelle est la durée de vie de vos systèmes ?", 
        a: "Conçus pour un usage intensif, nos adoucisseurs commerciaux ont une durée de vie moyenne de 15 à 20 ans avec un entretien régulier." 
    },
    { 
        q: "Quelle est la différence majeure entre un modèle résidentiel et commercial ?", 
        a: "Un modèle commercial dispose de vannes à plus haut débit, d'un réservoir de résine plus volumineux et d'une électronique capable de gérer des cycles de régénération plus fréquents sans usure prématurée." 
    },
    { 
        q: "Proposez-vous des contrats d'entretien pour les entreprises ?", 
        a: "Absolument. Nous offrons des forfaits de maintenance préventive incluant la livraison de sel, le nettoyage des résines et le test annuel de performance pour vous garantir une tranquillité d'esprit totale." 
    }
];

const AdoucisseurEauCommercial = () => {
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
    const [activeAdvantageImage, setActiveAdvantageImage] = useState(benefitsVisualImg);
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
        document.title = "Adoucisseur d'eau commercial | Solutions pour Entreprises | Bricareau";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Optimisez la performance de votre hôtel ou restaurant avec nos adoucisseurs d'eau commerciaux au Québec. Protection des équipements pro et confort client supérieur. Expertise Bricareau.");
        }

        // OG Tags
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) ogTitle.setAttribute("content", "Adoucisseur d'eau Commercial Québec : Excellence Opérationnelle | Bricareau");
        const ogDesc = document.querySelector('meta[property="og:description"]');
        if (ogDesc) ogDesc.setAttribute("content", "Sublimez votre établissement. Découvrez nos solutions d'adoucissement d'eau pour l'hôtellerie et la restauration. Performance et prestige garantis.");
        const ogUrl = document.querySelector('meta[property="og:url"]');
        if (ogUrl) ogUrl.setAttribute("content", "https://bricareau.com/adoucisseurs-eau-commerciaux");
    }, []);
    return (
        <div className="min-h-screen bg-background font-sans text-slate-900">
            <Header />
            <main>
                <Hero 
                    image={heroImg}
                    highlightedTitle="L'excellence de l'eau douce,"
                    mainTitle="la signature de prestige des Hôtels & Restaurants."
                    subtitle="Sublimez votre service, protégez vos équipements de haute précision et offrez à vos clients une expérience sensorielle inégalée. L'expertise anticalcaire dédiée aux standards de l'hôtellerie d'exception."
                    showPhone={true}
                    showBreadcrumbs={true}
                />

                {/* 2. Diagnostic Impact - Bento Grid */}
                <section className="py-24 lg:py-32 bg-slate-50/50 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,_rgba(37,99,235,0.05)_0%,_transparent_50%)] pointer-events-none" />
                    
                    <div className="container mx-auto px-6 relative z-10">
                        <div className="max-w-4xl mx-auto text-center mb-24">
                            <span className="inline-block px-4 py-1.5 bg-blue-600/10 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-8">
                                IMPACT OPÉRATIONNEL
                            </span>
                            <h2 className="mb-8 heading-pro-max text-center">
                                <span className="italic font-light text-[#18448F] block">Le calcaire, l'ennemi silencieux</span>
                                <span className="font-bold text-[#18448F] block text-center">de votre art de recevoir.</span>
                            </h2>
                            <p className="body-pro-max text-slate-500 text-center mx-auto max-w-2xl">
                                Plus qu'un simple dépôt, le calcaire est un ennemi silencieux de votre rentabilité et de votre image de marque. Il altère la brillance de votre service et réduit la durée de vie de vos équipements critiques.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                { 
                                    title: "Équipements Pro", 
                                    impact: "Pannes Critiques", 
                                    desc: "Protégez vos fours combinés, lave-vaisselle industriels et machines à glace des pannes coûteuses liées à l'accumulation de calcaire.",
                                    icon: <Shield className="w-6 h-6 text-emerald-600" />,
                                    badge: "Maintenance",
                                    img: kitchenImg,
                                    color: "bg-emerald-600"
                                },
                                { 
                                    title: "Art de la Table", 
                                    impact: "Verrerie ternie", 
                                    desc: "Dites adieu aux traces blanches sur les verres et les couverts. Garantissez une présentation étincelante sans polissage manuel excessif.",
                                    icon: <Sparkles className="w-6 h-6 text-cyan-500" />,
                                    badge: "Image de Marque",
                                    img: hardWaterSignsImg,
                                    color: "bg-cyan-500"
                                },
                                { 
                                    title: "Linge de Chambre", 
                                    impact: "Fibres Rêches", 
                                    desc: "Préservez la douceur des draps et le gonflant des serviettes. Réduisez l'usure des fibres causée par les minéraux agressifs.",
                                    icon: <Shirt className="w-6 h-6 text-indigo-500" />,
                                    badge: "Confort Client",
                                    img: laundryImg,
                                    color: "bg-indigo-500"
                                },
                                { 
                                    title: "Consommables Pro", 
                                    impact: "+40% Budget", 
                                    desc: "L'eau dure neutralise l'efficacité de vos détergents professionnels, vous obligeant à une surconsommation de produits de nettoyage.",
                                    icon: <HandCoins className="w-6 h-6 text-amber-500" />,
                                    badge: "Optimisation",
                                    img: hardWaterImg,
                                    color: "bg-amber-500"
                                },
                                { 
                                    title: "Facture Énergétique", 
                                    impact: "+15% de Coûts", 
                                    desc: "Le tartre agit comme un isolant thermique sur vos résistances. Une fine couche suffit pour faire grimper vos factures de gaz et d'électricité.",
                                    icon: <Zap className="w-6 h-6 text-yellow-500" />,
                                    badge: "Efficacité",
                                    img: energyImg,
                                    color: "bg-yellow-500"
                                },
                                { 
                                    title: "Service Barista", 
                                    impact: "Arômes Altérés", 
                                    desc: "Le café est composé à 98% d'eau. Une eau dure dénature les arômes précieux et obstrue les composants internes de vos machines expresso.",
                                    icon: <Coffee className="w-6 h-6 text-orange-700" />,
                                    badge: "Art Culinaire",
                                    img: coffeeImg,
                                    color: "bg-orange-700"
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
                                            <h3 className="text-3xl font-bold text-[#18448F] leading-[1.1] transition-all duration-500 group-hover:translate-x-2">
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

                {/* 3. Benefits Section - Redesigned based on mockup with original content */}
                <section className="py-24 bg-white relative overflow-hidden">
                    {/* Background vertical line */}
                    <div className="absolute left-[10%] top-0 bottom-0 w-px bg-slate-200 hidden xl:block z-0" />

                    <div className="container mx-auto px-6 relative z-10">
                        <div className="text-center mb-24">
                            <span className="inline-block px-4 py-1.5 bg-blue-600/10 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-8">
                                L'INGÉNIERIE DU BIEN-ÊTRE
                            </span>
                             <h2 className="text-4xl md:text-5xl font-bold text-[#18448F] tracking-tight">
                                Avantages de l'eau douce
                            </h2>
                        </div>

                        <div className="relative max-w-6xl mx-auto">
                            {/* Vertical text on the left */}
                            <div className="absolute -left-16 top-1/2 -translate-y-1/2 hidden xl:block">
                                <span className="inline-block [writing-mode:vertical-lr] rotate-180 text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 h-fit">
                                    VOTRE SOLUTION UNIQUE
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
                                                    "item-0": benefitsVisualImg,
                                                    "item-1": equipmentProImg,
                                                    "item-2": tableArtImg,
                                                    "item-3": profitabilityImg
                                                };
                                                if (value && mapping[value]) {
                                                    setActiveAdvantageImage(mapping[value]);
                                                }
                                            }}
                                        >
                                            {[
                                                {
                                                    title: "Confort & Hospitalité",
                                                    desc: "Offrez à vos clients une expérience sensorielle digne d'un spa. L'eau douce préserve l'hydratation de la peau et l'éclat des cheveux sous la douche, renforçant immédiatement le sentiment de bien-être et de luxe au sein de vos chambres."
                                                },
                                                {
                                                    title: "Protection des Équipements Pro",
                                                    desc: "Le calcaire est l'ennemi invisible de votre rentabilité, s'accumulant dans vos chauffe-eau industriels, lave-vaisselle et fours à vapeur. Nos solutions neutralisent le tartre à la source, prolongeant la vie de vos actifs critiques et évitant les arrêts de service imprévus."
                                                },
                                                {
                                                    title: "Art de la Table Impeccable",
                                                    desc: "Garantissez une verrerie et une argenterie étincelantes sans effort. En éliminant la dureté de l'eau, vous supprimez les traces blanches tenaces, réduisez le temps de polissage manuel et éblouissez vos convives dès le premier coup d'œil."
                                                },
                                                {
                                                    title: "Rentabilité & Durabilité",
                                                    desc: "L'investissement se rentabilise rapidement par une efficacité énergétique accrue et une réduction massive (jusqu'à 40%) de la consommation de détergents et produits de nettoyage. Un choix à la fois économique pour vos finances et écologique pour la planète."
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

                                    <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] lg:aspect-auto lg:h-[550px]">
                                        <img 
                                            key={activeAdvantageImage}
                                            src={activeAdvantageImage} 
                                            alt="Bienfaits de l'eau adoucie sur la santé et l'efficacité opérationnelle" 
                                            className="w-full h-full object-cover animate-in fade-in zoom-in duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/10 to-transparent" />
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

                {/* 4. Selection Guide: The Bridge - Copied from Adoucisseur-eau-municipal */}
                <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
                    {/* Atmospheric Background */}
                    <div className="absolute inset-0 opacity-5 pointer-events-none">
                        <img 
                            src={panoramaBgImg} 
                            alt="" 
                            className="w-full h-full object-cover grayscale"
                        />
                    </div>

                    <div className="container mx-auto px-6 relative z-10">
                        <div className="text-center max-w-7xl mx-auto mb-20 lg:mb-24 px-6 md:px-0">
                            <span className="inline-block px-4 py-1.5 bg-blue-600/10 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-8">
                                GUIDE D'EXPERTISE COMMERCIALE
                            </span>
                            <h2 className="mb-8 heading-pro-max text-center">
                                <span className="italic font-light text-[#18448F] block text-center">L'expertise anticalcaire dédiée</span>
                                <span className="font-bold text-[#18448F] block text-center">aux Hôtels & Restaurants.</span>
                            </h2>
                            <p className="body-pro-max text-center max-w-4xl mx-auto px-4">
                                Nos adoucisseurs d'eau commerciaux sont spécifiquement calibrés pour neutraliser la dureté tout en préservant l'intégrité de vos installations professionnelles. Une synergie parfaite entre <span className="text-blue-600 font-bold">économie de ressources</span> et <span className="text-blue-600 font-bold">performance opérationnelle</span>.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {products.map((p, i) => (
                                <div
                                    key={i}
                                    className="group relative bg-white rounded-[3rem] overflow-hidden border border-slate-100 hover:shadow-[0_40px_80px_-20px_rgba(37,99,235,0.15)] transition-all duration-700 hover:-translate-y-4 flex flex-col h-full cursor-pointer"
                                    onClick={() => {
                                        if (p.name.includes("Sentinelle")) {
                                            window.open(SentinellePDF, '_blank');
                                        } else {
                                            navigate(p.path || "/adoucisseurs");
                                        }
                                    }}
                                >
                                    <div className="relative h-80 overflow-hidden bg-slate-50/30 flex items-center justify-center p-12 overflow-hidden">
                                        {p.isRecommended && (
                                            <div className="absolute top-8 right-8 z-10">
                                                <span className="inline-block px-4 py-1.5 bg-blue-600 text-white rounded-full text-[10px] font-black uppercase tracking-[0.3em] shadow-xl shadow-blue-500/30 animate-pulse">
                                                    LE CHOIX DES EXPERTS
                                                </span>
                                            </div>
                                        )}
                                        <img
                                            src={p.image}
                                            alt={`${p.name}`}
                                            className="max-h-full object-contain group-hover:scale-110 transition-transform duration-1000 mix-blend-multiply relative z-10"
                                        />
                                        {/* Dynamic Background Circle */}
                                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(37,99,235,0.05)_0%,_transparent_70%)] group-hover:scale-150 transition-transform duration-1000" />
                                    </div>

                                    <div className="p-10 space-y-6 flex flex-col flex-grow relative">
                                        <div className="absolute top-0 left-10 right-10 h-1 bg-gradient-to-r from-transparent via-blue-100 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                                        
                                        <h3 className="text-2xl font-bold text-[#18448F] text-center whitespace-pre-line group-hover:text-blue-600 transition-colors">
                                            {p.name}
                                        </h3>
                                        
                                        <p className="text-slate-500 text-sm leading-relaxed text-center italic font-light px-4">
                                            {p.desc}
                                        </p>

                                        <div className="space-y-4 pt-4 border-t border-slate-50">
                                            {p.features?.map((f, idx) => (
                                                <div key={idx} className="flex items-center gap-4 group/item">
                                                    <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors duration-500">
                                                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 group-hover:text-white transition-colors" />
                                                    </div>
                                                    <span className="text-sm text-slate-600 font-medium group-hover:text-[#18448F] transition-colors">{f}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="pt-8 mt-auto flex items-center justify-between">
                                            <div className="flex flex-col">
                                                <span className="text-[10px] font-black uppercase tracking-widest text-[#18448F]/40 group-hover:text-blue-600 transition-colors">Performance</span>
                                                <span className="text-[10px] font-bold text-slate-400 group-hover:text-slate-600 transition-colors">Certifiée CSA/NSF</span>
                                            </div>
                                            <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-500/30 transition-all duration-500">
                                                <ArrowRight className="h-6 w-6" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 3. TimeLine SÉRÉNITÉ */}
                <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
                     <div className="container mx-auto px-6 relative z-10">
                        <div className="text-center max-w-3xl mx-auto mb-20 lg:mb-24">
                            <span className="inline-block px-4 py-1.5 bg-blue-600/10 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-8">
                                VOTRE EXPÉRIENCE CLIENT
                            </span>
                            <h2 className="mb-8 heading-pro-max text-center">
                                <span className="italic font-light text-[#18448F] block">Une intégration invisible pour</span>
                                <span className="font-bold text-[#18448F] block">une excellence d'eau sans compromis.</span>
                            </h2>
                            <p className="body-pro-max text-center max-w-3xl mx-auto">
                                Le Parcours Bricareau : une ingénierie de précision, depuis le diagnostic initial jusqu'à l'optimisation continue de vos performances opérationnelles.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative mb-24 lg:mb-32">
                            {/* Connecting Line (Desktop) */}
                            <div className="hidden lg:block absolute top-[48px] left-[10%] w-[80%] h-px bg-slate-100 z-0" />
                            
                            {[
                                { 
                                    step: "01",
                                    title: "Audit de Flux & Pureté", 
                                    desc: "Analyse rigoureuse de vos débits et de la composition chimique de votre eau.",
                                    image: diagnosticStepImg,
                                    color: "border-blue-100"
                                },
                                { 
                                    step: "02",
                                    title: "Ingénierie sur-mesure", 
                                    desc: "Nous calibrons vos systèmes selon vos pics d'activité et vos besoins en équipements critiques.",
                                    image: customStepImg,
                                    color: "border-indigo-100"
                                },
                                { 
                                    step: "03",
                                    title: "Déploiement Stratégique", 
                                    desc: "Mise en service certifiée, planifiée pour minimiser toute interruption de vos opérations.",
                                    image: installationStepImg,
                                    color: "border-cyan-100"
                                },
                                { 
                                    step: "04",
                                    title: "Continuité Opérationnelle", 
                                    desc: "Une eau parfaite garantie 24/7 avec un support technique prioritaire pour votre établissement.",
                                    image: serenityStepImg,
                                    color: "border-emerald-100"
                                }
                            ].map((item, idx) => (
                                <div key={idx} className="relative z-10 group text-center">
                                    <div className="mb-8 relative flex items-center justify-center">
                                        <div className="relative w-fit mx-auto">
                                            <div className={`w-32 h-32 rounded-[2.5rem] overflow-hidden border-2 ${item.color} shadow-xl shadow-slate-200/50 group-hover:scale-110 transition-transform duration-500 bg-white`}>
                                                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                                            </div>
                                            <div className="absolute -top-2 -left-2 lg:-left-auto lg:-top-2 lg:-right-2 w-10 h-10 bg-blue-600 lg:bg-[#18448F] text-white rounded-full flex items-center justify-center font-black text-xs shadow-lg border-2 border-white z-20">
                                                {item.step}
                                            </div>
                                        </div>
                                    </div>
                                    <h4 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-blue-600 transition-colors leading-tight">{item.title}</h4>
                                    <p className="body-pro-max text-slate-500 text-center max-w-[220px] mx-auto">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                        
                        {/* Featured Banner with generated image */}
                        <div className="rounded-none lg:rounded-[3rem] overflow-hidden shadow-none lg:shadow-2xl border-0 lg:border border-slate-100 group relative -mx-6 lg:mx-0">
                            <img 
                                src={installationSoftenerImg} 
                                alt="Installation professionnelle d'un adoucisseur d'eau Bricareau" 
                                className="w-full h-[450px] md:h-[550px] lg:h-[650px] object-cover group-hover:scale-105 transition-transform duration-[3000ms] brightness-[1.2] contrast-[1.05]"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-[#18448F]/70 via-[#18448F]/30 to-transparent p-8 md:p-12 lg:p-20 flex items-center">
                                <div className="max-w-lg">
                                    <div className="flex items-center gap-3 text-blue-400 font-bold text-xs tracking-widest uppercase mb-6">
                                        <CheckCircle className="w-5 h-5" />
                                        Engagement Certifié
                                    </div>
                                    <h3 className="text-white text-4xl font-bold mb-6 leading-tight">L'excellence Bricareau s'installe chez vous.</h3>
                                    <p className="text-white text-lg mb-10 text-justify">
                                        Chaque installation est une signature de qualité. Nos techniciens assurent une meilleure mise en place de vos systèmes, garantissant performance et esthétique.
                                    </p>
                                </div>
                            </div>
                        </div>
                     </div>
                </section>

                {/* 4. Comparative Analysis Section */}
                <section className="py-24 bg-white relative overflow-hidden">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
                                ANALYSE COMPARATIVE
                            </span>
                            <h2 className="heading-pro-max">
                                <span className="italic font-light text-[#18448F] block text-center">Identifiez la performance</span>
                                <span className="font-bold text-[#18448F] block text-center">optimale pour votre établissement.</span>
                            </h2>
                        </div>

                        <div className="overflow-x-visible relative">
                            {/* Navigation Arrows for Mobile/Tablet */}
                            <div className="lg:hidden flex items-center justify-end gap-3 mb-8 relative z-30">
                                <Button 
                                    size="icon" 
                                    variant="outline" 
                                    onClick={() => setActiveCol(Math.max(0, activeCol - 1))}
                                    disabled={activeCol === 0}
                                >
                                    <ChevronLeft className="h-5 w-5" />
                                </Button>
                                <div className="flex gap-1.5 px-2">
                                    {[0, 1, 2].map((i) => (
                                        <div key={i} className={`h-1.5 rounded-full transition-all duration-300 ${i === activeCol ? 'w-6 bg-blue-600' : 'w-1.5 bg-blue-100'}`} />
                                    ))}
                                </div>
                                <Button 
                                    size="icon" 
                                    variant="outline" 
                                    onClick={() => setActiveCol(Math.min(2, activeCol + 1))}
                                    disabled={activeCol === 2}
                                >
                                    <ChevronRight className="h-5 w-5" />
                                </Button>
                            </div>

                            <div className="overflow-x-auto lg:overflow-x-visible no-scrollbar pb-8">
                                <table className="w-full border-collapse bg-white rounded-3xl overflow-hidden shadow-2xl relative">
                                    <thead>
                                        <tr className="bg-slate-50 relative z-20">
                                            <th className="p-6 md:p-10 text-left text-blue-900/40 font-black uppercase tracking-widest text-[10px] sticky left-0 bg-slate-50 z-30 border-r border-slate-100 drop-shadow-md lg:drop-shadow-none min-w-[160px] md:min-w-[200px]">
                                                Critères Techniques
                                            </th>
                                            {[
                                                { name: "Série Sentinelle", img: SentinelWaterSoftenerImg, badge: "Précision Économique", color: "bg-[#18448F]", offset: "-right-20" },
                                                { name: "Série Sérénité", img: SerenityWaterSoftenerImg, badge: "Hybride Ultime", color: "bg-[#18448F]", offset: "-right-12" },
                                                { name: "Série Infiniti", img: TwinAlternatingWaterSoftenerImg, badge: "Puissance 24h/24", color: "bg-orange-500", offset: "-right-20" }
                                            ].map((m, i) => (
                                                <th 
                                                    key={i} 
                                                    className={cn(
                                                        "p-4 md:p-6 text-center transition-all duration-500 min-w-[220px]",
                                                        i === activeCol ? "table-cell" : "hidden lg:table-cell"
                                                    )}
                                                >
                                                    <div className="flex flex-col items-center gap-6">
                                                        <div className="relative group/img">
                                                            <div className={`absolute -top-3 ${m.offset} z-20 ${m.color} text-white text-[8px] font-black uppercase tracking-[0.4em] px-3 py-1 rounded-full shadow-2xl whitespace-nowrap scale-90 md:scale-100`}>
                                                                {m.badge}
                                                            </div>
                                                            <div className="absolute inset-0 bg-blue-600 rounded-full blur-2xl opacity-0 group-hover/img:opacity-20 transition-opacity duration-700" />
                                                            <img
                                                                src={m.img}
                                                                alt={m.name}
                                                                className="w-[120px] md:w-[140px] h-[100px] md:h-[120px] object-contain mx-auto mix-blend-multiply relative z-10 transition-transform duration-700 group-hover/img:scale-110"
                                                            />
                                                        </div>
                                                        <div className="text-sm md:text-lg font-bold text-[#18448F]">{m.name}</div>
                                                    </div>
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100 relative z-10">
                                        {comparisonData.map((row, i) => (
                                            <tr key={i} className="hover:bg-blue-50/30 transition-colors group">
                                                <td className="p-6 md:p-10 font-bold text-[#18448F] bg-white sticky left-0 z-30 border-r border-slate-50 drop-shadow-sm lg:drop-shadow-none text-[12px] md:text-sm italic group-hover:text-blue-600 transition-colors">
                                                    {row.feature}
                                                </td>
                                                {["Sentinel", "Sérénité", "Infiniti"].map((model, idx) => (
                                                    <td 
                                                        key={model} 
                                                        className={cn(
                                                            "p-6 md:p-10 text-center text-[13px] md:text-sm font-light leading-relaxed text-slate-600 transition-all duration-500",
                                                            idx === activeCol ? "table-cell" : "hidden lg:table-cell"
                                                        )}
                                                    >
                                                        {row[model as keyof ComparisonItem]}
                                                    </td>
                                                ))}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 6.Testimonials Grid Section */}
                <TestimonialsSection
                    filterProduct="/adoucissement"
                    limit={5}
                    title={
                        <>
                            <span className="italic font-light text-[#18448F] block text-center">Une eau soyeuse.</span>
                            <span className="font-bold text-[#18448F] block text-center">Un confort absolu.</span>
                        </>
                    }
                />

                {/* 7.Water Testing Section (Redesigned for Mobile) */}
                <section className="relative lg:h-[800px] flex flex-col lg:flex-row items-stretch overflow-hidden bg-white">
                    {/* Mobile Image */}
                    <div className="lg:hidden w-full h-auto relative bg-slate-50">
                        <img
                            src={waterTestingImg}
                            alt="Analyse d'eau sur place pour détecter le calcaire et le chlore - Expertise Commerciale Bricareau"
                            className="w-full h-auto object-contain"
                        />
                    </div>

                    {/* Desktop Background */}
                    <div className="hidden lg:block absolute inset-0 z-0">
                        <img
                            src={waterTestingImg}
                            alt="Analyse d'eau professionnelle pour détecter le calcaire et le chlore"
                            className="w-full h-full object-cover object-[75%_15%]"
                        />
                        <div className="absolute inset-0 bg-black/30 lg:bg-gradient-to-r lg:from-black/50 lg:to-transparent" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-white via-white/10 to-transparent" />
                    </div>

                    <div className="container mx-auto px-4 relative z-10 flex items-center py-12 lg:py-0">
                        <div className="max-w-2xl text-slate-900 lg:text-white">
                            <span className="text-blue-600 lg:text-blue-600 text-xs font-black uppercase tracking-[0.3em] mb-8 block">
                                Contrôle de la Qualité D'EAU
                            </span>
                            <h2 className="mb-8 heading-pro-max text-left">
                                <span className="italic font-light text-[#18448F] lg:text-white block">Des tests d'eau précis</span>
                                <span className="text-[#18448F] lg:text-white italic font-bold font-serif">pour une tranquillité d'esprit totale.</span>
                            </h2>
                            <p className="body-pro-max text-black lg:text-white/95 mb-8 max-w-xl text-justify lg:text-left">
                                Ne laissez pas la qualité de votre eau compromettre vos standards d'excellence. Nos analyses certifiées identifient les risques minéraux et bactériologiques pour assurer la conformité sanitaire et la protection de vos actifs critiques.
                            </p>
                            <div className="flex gap-4">
                                <ProMaxButton 
                                    asChild
                                    variant="primary"
                                >
                                    <a href="/tests-eau">Demandez une analyse d'eau</a>
                                </ProMaxButton>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 9. FAQ Section */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-left mb-16">
                            <h2 className="mb-8 heading-pro-max text-left">
                                <span className="italic font-light text-[#18448F] block">Pour vous éclairer</span>
                                <span className="font-bold text-[#18448F] block">Questions fréquentes</span>
                            </h2>
                            <div className="w-24 h-1 bg-blue-600"></div>
                        </div>

                        <div className="max-w-4xl mx-auto">
                            <Accordion type="single" collapsible className="w-full">
                                {faqItems.slice(0, showAllFaqs ? undefined : 6).map((item, idx) => (
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
                            {faqItems.length > 6 && (
                                <div className="mt-12 text-center">
                                    <ProMaxButton
                                        onClick={() => setShowAllFaqs(!showAllFaqs)}
                                        variant="primary"
                                    >
                                        {showAllFaqs ? "Voir moins de questions" : "Voir toutes les questions"}
                                    </ProMaxButton>
                                </div>
                            )}
                        </div>
                    </div>
                </section>


                {/* 11. PREMIUM CTA SECTION */}
                <section className="relative py-32 flex items-center overflow-hidden bg-[#18448F]">
                    {/* Animated background elements */}
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-600/20 to-transparent skew-x-12 translate-x-1/4" />
                    <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-cyan-400/10 to-transparent -skew-x-12 -translate-x-1/4" />
                    
                    {/* Background Image with Overlay */}
                    <div className="absolute inset-0 z-0 opacity-40">
                        <img
                            src={hardWaterFaucetImg}
                            alt="Problématique d'eau dure sur la robinetterie - Solution Bricareau"
                            className="w-full h-full object-cover grayscale brightness-150"
                        />
                        <div className="absolute inset-0 bg-[#18448F]/10 backdrop-blur-sm" />
                    </div>

                    <div className="container mx-auto px-6 relative z-10">
                        <div className="max-w-5xl mx-auto text-center space-y-12">
                            <div className="space-y-6">
                                <span className="inline-block px-4 py-1.5 bg-white text-blue-600 rounded-full text-[10px] font-black uppercase tracking-[0.4em]">
                                    PRENEZ LE CONTRÔLE DE VOTRE EAU
                                </span>
                                <h2 className="font-light block leading-tight lg:leading-[52px] text-white">
                                    Sublimez votre établissement <br />
                                    <span className="text-white italic font-bold font-serif">par la pureté de l'eau.</span>
                                </h2>
                                <p className="text-lg md:text-xl text-blue-100/80 max-w-2xl mx-auto font-light leading-relaxed">
                                    Une protection intégrale pour vos infrastructures et une expérience client mémorable. <br className="hidden md:block" />
                                    Activez <span className="text-white font-bold border-b border-white">l'excellence opérationnelle</span> dès aujourd'hui.
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

                            <div className="pt-8 flex flex-col items-center gap-4">
                                <ExpertAvatars />
                                <p className="text-blue-200/60 text-sm font-medium">
                                    Rejoignez plus de <span className="text-white">1,500 entreprises</span> satisfaites au Québec cette année.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 12. Resources Section */}
                <section className="py-24 bg-gray-50">
                    <div className="container mx-auto px-4 text-left">
                        <div className="text-left mb-16">
                            <h2 className="mb-8 heading-pro-max text-left">
                                <span className="font-bold text-[#18448F] block text-left">Ressources</span>
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
                                        <img src={art.img} alt={`${art.title} - Expertise Bricareau`} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                                    </div>
                                    <div className="p-8 text-left border-t-2 border-transparent group-hover:border-blue-600 transition-colors flex flex-col flex-grow">
                                        <NavLink to={art.link}>
                                            <h4 className="mb-4 group-hover:text-blue-600 transition-colors tracking-tight font-medium text-base leading-6 text-[#0F1729]">{art.title}</h4>
                                        </NavLink>
                                        <div className="mt-auto">
                                            <NavLink
                                                to={art.link}
                                                className="text-blue-600 font-bold flex items-center gap-2 group-hover:underline text-sm"
                                            >
                                                Lire <ChevronRight className="h-4 w-4" />
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Navigation arrows for carousel - Mobile/Tablet ONLY */}
                        <div className="lg:hidden flex items-center justify-center gap-4 mt-6 relative z-30">
                            <Button 
                                size="icon" 
                                onClick={() => scrollResources('left')}
                            >
                                <ChevronLeft className="h-6 w-6" />
                            </Button>
                            <Button 
                                size="icon" 
                                onClick={() => scrollResources('right')}
                            >
                                <ChevronRight className="h-6 w-6" />
                            </Button>

                            <div className="absolute right-2 text-sm font-black text-[#18448F] bg-blue-50/50 px-4 py-2 rounded-full border border-blue-100/50">
                                <span className="text-blue-600">{resourceIndex}</span>
                                <span className="mx-1 text-slate-300">/</span>
                                <span className="text-slate-400">{resources.length}</span>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default AdoucisseurEauCommercial;
