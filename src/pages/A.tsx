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
import benefitsVisualImg from "@/assets/2149141912.jpg";
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
    CheckCircle,
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
    Beaker,
    ShieldCheck
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
        q: "Pourquoi installer un adoucisseur si l'eau est déjà traitée par la municipalité ?", 
        a: "L'eau municipale est traitée pour être potable, pas pour être douce. Elle contient souvent beaucoup de calcaire qui endommage vos appareils, ternit votre robinetterie et assèche votre peau." 
    },
    { 
        q: "L'eau adoucie a-t-elle un goût salé ?", 
        a: "Non. La quantité de sodium échangée contre le calcaire est minime et indétectable au goût pour la majorité des gens. C'est bien moins de sel que dans une simple tranche de pain blanc." 
    },
    {
        q: "L'adoucisseur nécessite-t-il beaucoup d'entretien ?",
        a: "Très peu. Il suffit d'ajouter du sel régulièrement et de procéder à un nettoyage annuel de la résine avec un produit spécialisé que nous fournissons. Nos techniciens peuvent également s'en charger lors d'une visite de routine."
    },
    { 
        q: "Est-ce que l'adoucisseur enlève le chlore de l'eau de ville ?", 
        a: "Un adoucisseur standard enlève uniquement le calcaire. Pour le chlore, nous recommandons nos modèles hybrides (comme la série Sérénité avec charbon) qui filtrent aussi le chlore et les mauvaises odeurs." 
    },
    { 
        q: "Combien de sel un adoucisseur consomme-t-il par an ?", 
        a: "Cela dépend de votre consommation d'eau et de la dureté initiale, mais en moyenne pour une famille de 4 personnes, nos modèles haute efficacité consomment environ 6 à 8 sacs de sel par an." 
    },
    { 
        q: "L'adoucisseur augmente-t-il ma facture d'eau ?", 
        a: "Très peu. La régénération utilise un volume d'eau négligeable par rapport à votre consommation totale. En revanche, il protège votre chauffe-eau et le rend plus efficace, réduisant votre facture énergétique." 
    },
    { 
        q: "Puis-je boire l'eau adoucie ?", 
        a: "Oui, elle est parfaitement potable. Cependant, pour les personnes suivant un régime strict sans sel ou pour le goût le plus pur (thé, café), nous recommandons d'ajouter un système d'osmose inverse sous l'évier." 
    },
    { 
        q: "Puis-je installer l'adoucisseur moi-même ?", 
        a: "Bien que possible pour un bricoleur averti, nous recommandons fortement une installation professionnelle pour garantir le bon réglage de la dureté, l'étanchéité et le respect des normes de plomberie locales." 
    },
    {
        q: "Quelle est la différence entre un adoucisseur et un filtre ?",
        a: "Un filtre retire des sédiments ou des contaminants (chlore, plomb). Un adoucisseur retire spécifiquement le calcaire (dureté) pour protéger votre tuyauterie et adoucir votre eau."
    },
    { 
        q: "Quelle est la durée de vie d'un adoucisseur d'eau Bricareau ?", 
        a: "Avec un entretien minimal, nos systèmes sont conçus pour durer de 15 à 20 ans. La résine de haute qualité à l'intérieur peut durer plus de 15 ans avant de nécessiter un remplacement." 
    },
    { 
        q: "L'adoucisseur fait-il du bruit ?", 
        a: "Il fonctionne silencieusement la plupart du temps. Vous n'entendrez un léger bruit d'eau que pendant la régénération, qui est programmée généralement la nuit (par exemple à 2h du matin) pour ne pas vous déranger." 
    },
    { 
        q: "Est-ce que l'eau adoucie est bonne pour les plantes ?", 
        a: "Il est préférable d'arroser les plantes intérieures avec de l'eau non adoucie car le sodium peut s'accumuler dans le terreau. Nous installons souvent un robinet de dérivation pour l'arrosage extérieur." 
    },
    { 
        q: "Que se passe-t-il en cas de panne de courant ?", 
        a: "Nos vannes électroniques conservent leur programmation en mémoire pendant 48 heures ou plus. Une fois le courant rétabli, l'adoucisseur reprend son cycle normal sans perdre vos réglages." 
    },
    { 
        q: "Dois-je utiliser un type de sel spécifique ?", 
        a: "Nous recommandons du sel en pastilles de haute pureté pour éviter les résidus insolubles dans le bac. Certains sels contiennent aussi des nettoyants à résine pour maintenir l'efficacité du système." 
    },
    { 
        q: "Comment savoir si mon adoucisseur fonctionne correctement ?", 
        a: "Vous remarquerez immédiatement la différence : votre savon moussera beaucoup plus, votre peau sera plus douce après la douche et il n'y aura plus de nouvelles traces de calcaire sur vos parois de douche." 
    },
    { 
        q: "Un adoucisseur est-il compatible avec une fosse septique ?", 
        a: "Oui, tout à fait. Les eaux de régénération rejetées sont sans danger et n'affectent pas le fonctionnement biologique d'une fosse septique standard correctement dimensionnée." 
    },
    { 
        q: "Est-ce que l'adoucisseur réduit la pression d'eau ?", 
        a: "Non. Nos systèmes sont conçus 'High Flow' (haut débit) pour ne causer aucune perte de pression perceptible dans votre maison, même lorsque vous prenez une douche et utilisez la laveuse en même temps." 
    }
];

const A = () => {
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
        document.title = "Adoucisseur d'eau au Québec | Éliminez le Calcaire | Bricareau";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Protégez votre maison du calcaire avec nos adoucisseurs d'eau haute efficacité au Québec. Peau douce, linge éclatant et protection durable de vos appareils. Expertise Bricareau.");
        }

        // OG Tags
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) ogTitle.setAttribute("content", "Adoucisseur d'eau au Québec : Solutions Anti-Calcaire | Bricareau");
        const ogDesc = document.querySelector('meta[property="og:description"]');
        if (ogDesc) ogDesc.setAttribute("content", "Dites adieu à l'eau dure. Découvrez nos adoucisseurs résidentiels pour une eau soyeuse et protéger votre plomberie dans tout votre foyer.");
        const ogUrl = document.querySelector('meta[property="og:url"]');
        if (ogUrl) ogUrl.setAttribute("content", "https://bricareau.com/adoucissement");
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
                                <span className="italic font-light text-[#18448F] block">L'impact silencieux du</span>
                                <span className="font-bold text-[#18448F] block text-center">calcaire sur votre vie.</span>
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
                                        <Accordion type="single" defaultValue="item-0" className="w-full space-y-2">
                                            {[
                                                {
                                                    title: "Qualité supérieure",
                                                    desc: "Offrez à votre corps le luxe qu'il mérite avec une eau soyeuse qui préserve l'hydratation naturelle de votre épiderme. Dès la première utilisation, vous ressentirez une différence notable : une peau moins irritée, des cheveux plus brillants et une sensation de bien-être pur à chaque douche quotidienne."
                                                },
                                                {
                                                    title: "Protection totale",
                                                    desc: "Le calcaire est l'ennemi invisible de votre maison, s'accumulant dans vos tuyaux et obstruant vos résistances. Nos solutions neutralisent les minéraux durs à la source, protégeant ainsi durablement votre chauffe-eau, votre lave-vaisselle et toute votre robinetterie contre la corrosion et les dépôts de tartre coûteux."
                                                },
                                                {
                                                    title: "Linge plus doux",
                                                    desc: "Redécouvrez la texture originelle de vos textiles préférés sans avoir recours à des produits chimiques agressifs. En éliminant la dureté de l'eau, les fibres de vos vêtements restent souples, les couleurs demeurent éclatantes plus longtemps et votre linge ressort de la machine avec une fraîcheur et une douceur incomparables."
                                                },
                                                {
                                                    title: "Économies garanties",
                                                    desc: "L'investissement dans un adoucisseur se rentabilise rapidement grâce à une efficacité énergétique accrue de vos appareils de chauffage. En plus de réduire vos factures d'électricité, vous consommerez jusqu'à 50% de savon et de détergent en moins pour un résultat de nettoyage supérieur, tout en évitant des réparations de plomberie imprévues."
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
                                            src={benefitsVisualImg} 
                                            alt="Bienfaits de l'eau adoucie sur la santé et le foyer" 
                                            className="w-full h-full object-cover"
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
                                GUIDE D'EXPERTISE RÉSIDENTIELLE
                            </span>
                            <h2 className="mb-8 heading-pro-max text-center">
                                <span className="italic font-light text-[#18448F] block">L'expertise anticalcaire</span>
                                <span className="font-bold text-[#18448F] block">adaptée à votre réseau domestique.</span>
                            </h2>
                            <p className="body-pro-max text-center max-w-4xl mx-auto px-4">
                                Nos adoucisseurs d'eau résidentiels sont spécifiquement calibrés pour neutraliser la dureté urbaine tout en préservant l'intégrité de vos installations. Une synergie parfaite entre <span className="text-blue-600 font-bold">économie de ressources</span> et <span className="text-blue-600 font-bold">confort absolu</span>.
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
                                <span className="italic font-light text-[#18448F] block">Une transition fluide vers</span>
                                <span className="font-bold text-[#18448F] block">une eau douce d'exception.</span>
                            </h2>
                            <p className="body-pro-max text-center max-w-3xl mx-auto">
                                Le Parcours Bricareau : une expertise d'élite, depuis votre première analyse jusqu'à la douceur éternelle de votre eau.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative mb-24 lg:mb-32">
                            {/* Connecting Line (Desktop) */}
                            <div className="hidden lg:block absolute top-[48px] left-[10%] w-[80%] h-px bg-slate-100 z-0" />
                            
                            {[
                                { 
                                    step: "01",
                                    title: "Diagnostic Précis", 
                                    desc: "Analyse de la dureté et du chlore de votre eau.",
                                    image: diagnosticStepImg,
                                    color: "border-blue-100"
                                },
                                { 
                                    step: "02",
                                    title: "Solutions sur-mesure", 
                                    desc: "Nous calibrons votre futur adoucisseur d'eau selon vos habitudes de consommation réelles.",
                                    image: customStepImg,
                                    color: "border-indigo-100"
                                },
                                { 
                                    step: "03",
                                    title: "Installation d'Élite", 
                                    desc: "Mise en place rigoureuse par nos plombiers certifiés. Propreté et excellence garanties.",
                                    image: installationStepImg,
                                    color: "border-cyan-100"
                                },
                                { 
                                    step: "04",
                                    title: "Sérénité Totale", 
                                    desc: "Bénéficiez d'une eau parfaite 24h/24 et d'un suivi proactif de nos experts.",
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
                                <span className="font-bold text-[#18448F] block text-center">optimale pour votre foyer.</span>
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
                            alt="Analyse d'eau à domicile pour détecter le calcaire et le chlore - Service Bricareau"
                            className="w-full h-auto object-contain"
                        />
                    </div>

                    {/* Desktop Background */}
                    <div className="hidden lg:block absolute inset-0 z-0">
                        <img
                            src={waterTestingImg}
                            alt="Analyse d'eau à domicile pour détecter le calcaire et le chlore"
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
                                Ne devinez pas la qualité de votre eau. Nos analyses approfondies identifient les bactéries, les minéraux et les contaminants chimiques pour vous offrir une tranquillité d'esprit totale.
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
                                    Libérez votre foyer <br />
                                    <span className="text-white italic font-bold font-serif">du calcaire.</span>
                                </h2>
                                <p className="text-lg md:text-xl text-blue-100/80 max-w-2xl mx-auto font-light leading-relaxed">
                                    Une protection intégrale pour votre plomberie et vos électroménagers. <br className="hidden md:block" />
                                    Activez <span className="text-white font-bold border-b border-white">la protection ultime</span> dès aujourd'hui.
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
                                    Rejoignez plus de <span className="text-white">1,500 familles</span> satisfaites au Québec cette année.
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

export default A;
