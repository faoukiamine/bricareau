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
import waterTestingBg from "@/assets/undersink_filtration_header.jpg";
import adoucisseursImg from "@/assets/Adoucisseurs d'eau.webp";
import specializedFiltersImg from "@/assets/Filtres d'eau spécialisés.webp";
import drinkingWaterImg from "@/assets/Solutions d'eau potable.webp";
import undersinkSystemImg from "@/assets/Système+de+filtration+Serene+Lite.webp";
import hardWaterSignsImg from "@/assets/Signs+of+hard+water+in+your+home-640w.webp";
import hardWaterImg from "@/assets/58279.jpg";
import applianceDamageImg from "@/assets/beautiful-shot-modern-house-kitchen.jpg";
import energyCostImg from "@/assets/2148386945.jpg";
import laveVaisselleEncrasséImg from "@/assets/lave-vaisselle encrassé par le calcaire.webp";
import compteurImg from "@/assets/compteur.avif";
import entretienMenagerImg from "@/assets/2147916568.jpg";
import textileLingeImg from "@/assets/2149117085.jpg";
import consommationImg from "@/assets/23981.jpg";
import benefitsVisualImg from "@/assets/2150084031.jpg";
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
    ShieldCheck,
    Search,
    Lightbulb,
    Leaf,
    RefreshCw
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
        q: "Pourquoi installer un adoucisseur si l'eau est déjà  traitée par la municipalité ?", 
        a: "L'eau municipale est traitée pour être potable, pas pour être douce. Elle contient souvent beaucoup de calcaire qui endommage vos appareils, ternit votre robinetterie et assèche votre peau." 
    },
    { 
        q: "L'eau adoucie a-t-elle un goût salé ?", 
        a: "Non. La quantité de sodium échangée contre le calcaire est minime et indétectable au goût pour la majorité des gens. C'est bien moins de sel que dans une simple tranche de pain blanc." 
    },
    {
        q: "L'adoucisseur nécessite-t-il beaucoup d'entretien ?",
        a: "Très peu. Il suffit d'ajouter du sel régulièrement et de procéder à  un nettoyage annuel de la résine avec un produit spécialisé que nous fournissons. Nos techniciens peuvent également s'en charger lors d'une visite de routine."
    },
    { 
        q: "Est-ce que l'adoucisseur enlève le chlore de l'eau de ville ?", 
        a: "Un adoucisseur standard enlève uniquement le calcaire. Pour le chlore, nous recommandons nos modèles hybrides (comme la série Sérénité avec charbon) qui filtrent aussi le chlore et les mauvaises odeurs." 
    },
    { 
        q: "Combien de sel un adoucisseur consomme-t-il par an ?", 
        a: "Cela dépend de votre consommation d'eau et de la dureté initiale, mais en moyenne pour une famille de 4 personnes, nos modèles haute efficacité consomment environ 6 à  8 sacs de sel par an." 
    },
    { 
        q: "L'adoucisseur augmente-t-il ma facture d'eau ?", 
        a: "Très peu. La régénération utilise un volume d'eau négligeable par rapport à  votre consommation totale. En revanche, il protège votre chauffe-eau et le rend plus efficace, réduisant votre facture énergétique." 
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
        a: "Avec un entretien minimal, nos systèmes sont conçus pour durer de 15 à  20 ans. La résine de haute qualité à  l'intérieur peut durer plus de 15 ans avant de nécessiter un remplacement." 
    },
    { 
        q: "L'adoucisseur fait-il du bruit ?", 
        a: "Il fonctionne silencieusement la plupart du temps. Vous n'entendrez un léger bruit d'eau que pendant la régénération, qui est programmée généralement la nuit (par exemple à  2h du matin) pour ne pas vous déranger." 
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
        a: "Nous recommandons du sel en pastilles de haute pureté pour éviter les résidus insolubles dans le bac. Certains sels contiennent aussi des nettoyants à  résine pour maintenir l'efficacité du système." 
    },
    { 
        q: "Comment savoir si mon adoucisseur fonctionne correctement ?", 
        a: "Vous remarquerez immédiatement la différence : votre savon moussera beaucoup plus, votre peau sera plus douce après la douche et il n'y aura plus de nouvelles traces de calcaire sur vos parois de douche." 
    },
    { 
        q: "Un adoucisseur est-il compatible avec une fosse septique ?", 
        a: "Oui, tout à  fait. Les eaux de régénération rejetées sont sans danger et n'affectent pas le fonctionnement biologique d'une fosse septique standard correctement dimensionnée." 
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
    const [activeAdvantageImage, setActiveAdvantageImage] = useState(benefitsVisualImg);
    const [activeTransitionStep, setActiveTransitionStep] = useState(0);
    const navigate = useNavigate();

    const [diagnosticEmblaRef, diagnosticEmblaApi] = useEmblaCarousel({ loop: false, align: 'start' });
    const scrollPrevDiagnostic = React.useCallback(() => { if (diagnosticEmblaApi) diagnosticEmblaApi.scrollPrev(); }, [diagnosticEmblaApi]);
    const scrollNextDiagnostic = React.useCallback(() => { if (diagnosticEmblaApi) diagnosticEmblaApi.scrollNext(); }, [diagnosticEmblaApi]);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setActiveTransitionStep(prev => (prev + 1) % 4);
        }, 5000);
        return () => clearInterval(timer);
    }, []);
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
        if (ogDesc) ogDesc.setAttribute("content", "Dites adieu à  l'eau dure. Découvrir nos adoucisseurs résidentiels pour une eau soyeuse et protéger votre plomberie dans tout votre foyer.");
        const ogUrl = document.querySelector('meta[property="og:url"]');
        if (ogUrl) ogUrl.setAttribute("content", "https://bricareau.com/adoucissement");
    }, []);
    return (
        <div className="min-h-screen bg-background font-sans text-slate-900">
            <Header />
            <main>
                <Hero 
                    image={heroBath}
                    highlightedTitle={<span className="font-bold not-italic">Finis le calcaire et l'eau dure :</span>}
                    mainTitle={<>offrez-vous <span className="text-[#8CC63F]">le confort d'une eau douce.</span></>}
                    subtitle="Redécouvrez l'expérience d'une eau soyeuse qui préserve votre peau, vos cheveux et vos investissements. Une technologie de pointe pour une protection durable de votre foyer."
                    showPhone={false}
                    showBreadcrumbs={true}
                />

                {/* AEO TARGET PARAGRAPH (Featured Snippets & Voice Search) */}
                {/* 2. Diagnostic Impact - Bento Grid */}
                <section className="py-24 lg:py-32 bg-slate-50/50 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,_rgba(37,99,235,0.05)_0%,_transparent_50%)] pointer-events-none" />
                    
                    <div className="container mx-auto px-6 relative z-10">
                        <div className="max-w-4xl mx-auto text-center mb-24">
                            <span className="inline-block px-4 py-1.5 bg-[#18448F] text-white rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-8">
                                DIAGNOSTIC L'EAU DURE
                            </span>
                            <h2 className="mb-8 heading-pro-max text-center">
                                <span className="font-bold not-italic text-[#18448F] block">L'impact silencieux du</span>
                                <span className="font-bold not-italic text-[#18448F] block text-center"><span className="text-[#8CC63F]">calcaire</span> sur votre vie.</span>
                            </h2>
                            <p className="body-pro-max text-slate-500 text-center mx-auto max-w-2xl">
                                Le calcaire n'est pas qu'un dépôt blanc ; c'est un agent d'érosion invisible qui dégrade votre confort, votre santé et vos finances au quotidien.
                            </p>
                        </div>

                        <div className="relative">
                            <div className="overflow-hidden px-4 md:px-0" ref={diagnosticEmblaRef}>
                                <div className="flex gap-6 py-4">
                                    {[
                                        { 
                                            title: "Énergie & Coût", 
                                            impact: "+25% Facture", 
                                            desc: "L'accumulation de calcaire liée à l'eau dure diminue l'efficacité énergétique de votre chauffe-eau. Un adoucisseur d'eau performant élimine le tartre, réduisant ainsi vos factures d'énergie.",
                                            icon: <Zap className="w-5 h-5 text-blue-500" />,
                                            badge: "Impact Financier",
                                            img: compteurImg
                                        },
                                        { 
                                            title: "Peau & Dermatite", 
                                            impact: "Irritations", 
                                            desc: "Les minéraux de l'eau dure assèchent l'épiderme et aggravent l'eczéma. L'installation d'un adoucisseur d'eau garantit une eau douce, idéale pour retrouver une peau soyeuse et apaiser les irritations.",
                                            icon: <Heart className="w-5 h-5 text-rose-500" />,
                                            badge: "Soin Personnel",
                                            img: womansufferingfromHardWaterImg
                                        },
                                        { 
                                            title: "Électroménagers", 
                                            impact: "Vie /2", 
                                            desc: "Les dépôts calcaires réduisent de moitié la durée de vie de vos électroménagers. Protégez votre plomberie et votre lave-vaisselle avec nos systèmes de traitement de l'eau anti-calcaire.",
                                            icon: <Shield className="w-5 h-5 text-emerald-500" />,
                                            badge: "Protection Actifs",
                                            img: laveVaisselleEncrasséImg
                                        },
                                        { 
                                            title: "Entretien Ménager", 
                                            impact: "Double effort", 
                                            desc: "Finies les traces de tartre tenaces sur la robinetterie et la paroi de douche. Une eau adoucie facilite grandement l'entretien ménager et laisse votre vaisselle éclatante, sans résidus.",
                                            icon: <Sparkles className="w-5 h-5 text-cyan-500" />,
                                            badge: "Confort",
                                            img: entretienMenagerImg
                                        },
                                        { 
                                            title: "Textiles & Linge", 
                                            impact: "Usure Précoce", 
                                            desc: "L'eau dure rend les fibres rêches et ternit les couleurs. Laver votre linge avec de l'eau douce préserve la qualité des textiles et prolonge considérablement la durée de vie de vos vêtements.",
                                            icon: <Shirt className="w-5 h-5 text-indigo-500" />,
                                            badge: "Linge Doux",
                                            img: textileLingeImg
                                        },
                                        { 
                                            title: "Consommation", 
                                            impact: "Savon x2", 
                                            desc: "En neutralisant la dureté de l'eau, un adoucisseur réduit jusqu'à 50% votre consommation de savons et détergents. Une solution écologique et très économique au quotidien.",
                                            icon: <HandCoins className="w-5 h-5 text-amber-500" />,
                                            badge: "Économie",
                                            img: consommationImg
                                        }
                                    ].map((item, idx) => (
                                        <div 
                                            key={idx} 
                                            className="flex-[0_0_100%] md:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(33.333%-16px)] min-w-0 shrink-0 group relative bg-[#F8FAFC] rounded-[2.5rem] p-4 border border-slate-100/50 hover:bg-white transition-all duration-700 hover:shadow-[0_40px_100px_-20px_rgba(30,58,138,0.1)] overflow-hidden cursor-pointer flex flex-col"
                                            onClick={() => navigate("/consultation")}
                                        >
                                            <div className="relative h-64 shrink-0 overflow-hidden rounded-[2rem] mb-8">
                                                <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-[3000ms] group-hover:scale-110" />
                                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                                <div className="absolute top-4 left-4 z-20">
                                                    <div className="bg-white/90 backdrop-blur-xl px-4 py-1.5 rounded-full flex items-center gap-2 shadow-sm">
                                                        {item.icon}
                                                        <span className="text-[10px] font-black text-slate-900 uppercase tracking-widest">{item.badge}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="px-4 pb-4 space-y-4 flex flex-col flex-grow">
                                                <div className="space-y-1">
                                                    <span className="text-[10px] font-black text-[#8CC63F] uppercase tracking-widest">Impact: {item.impact}</span>
                                                    <h3 className="text-xl font-bold text-[#18448F] leading-tight group-hover:text-blue-600 transition-colors">{item.title}</h3>
                                                </div>
                                                <p className="text-slate-500 text-sm leading-relaxed font-light text-justify flex-grow">{item.desc}</p>
                                                <div className="pt-4 flex items-center gap-2 text-blue-600 text-xs font-bold uppercase tracking-widest group-hover:gap-4 transition-all">
                                                    La Solution <ArrowRight className="w-4 h-4" />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            
                            {/* Navigation Arrows */}
                            <div className="flex items-center justify-center gap-4 mt-8">
                                <Button 
                                    size="icon" 
                                    variant="outline" 
                                    className="rounded-full bg-white shadow-sm hover:bg-slate-50 border-slate-200 h-12 w-12" 
                                    onClick={scrollPrevDiagnostic}
                                >
                                    <ChevronLeft className="h-6 w-6 text-[#18448F]" />
                                </Button>
                                <Button 
                                    size="icon" 
                                    variant="outline" 
                                    className="rounded-full bg-white shadow-sm hover:bg-slate-50 border-slate-200 h-12 w-12" 
                                    onClick={scrollNextDiagnostic}
                                >
                                    <ChevronRight className="h-6 w-6 text-[#18448F]" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>


                {/* Qu'est-ce qu'un adoucisseur d'eau ? - Premium Redesign */}
                <section className="py-24 relative overflow-visible bg-[#0A1A3A] z-20" id="aeo-adoucisseur">
                    {/* Background Gradients */}
                    <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-600/30 via-[#0A1A3A]/0 to-[#0A1A3A]/0 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-emerald-600/20 via-[#0A1A3A]/0 to-[#0A1A3A]/0 pointer-events-none"></div>
                    
                    {/* Floating decorative elements */}
                    <div className="absolute top-20 right-[15%] w-32 h-32 bg-blue-500/20 rounded-full blur-[60px]"></div>
                    <div className="absolute bottom-20 left-[10%] w-40 h-40 bg-emerald-500/20 rounded-full blur-[80px]"></div>

                    <div className="container mx-auto px-6 max-w-6xl relative z-10">
                        <div className="flex flex-col lg:flex-row gap-16 items-center">
                            
                            {/* Left Content: Text */}
                            <div className="lg:w-5/12 space-y-8">
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-blue-200 text-xs font-bold tracking-[0.2em] uppercase">
                                    Technologie Essentielle
                                </div>
                                <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight">
                                    Qu'est-ce qu'un <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8CC63F] to-blue-400 italic font-bold">adoucisseur d'eau ?</span>
                                </h2>
                                <p className="text-blue-100/70 text-lg leading-relaxed font-light">
                                    C'est le gardien de votre maison. Ce système de filtration spécialisé élimine à la source le calcium et le magnésium—les minéraux responsables de l'eau dure. En transformant cette eau agressive en une eau douce et soyeuse, il protège durablement vos équipements, votre peau et votre budget.
                                </p>
                            </div>

                            {/* Right Content: Illuminated Softener Image */}
                            <div className="lg:w-7/12 w-full relative flex justify-center items-center mt-12 lg:mt-0 z-20">
                                {/* Ambient Glow Behind the Image */}
                                <div className="absolute inset-0 bg-blue-500/30 blur-[120px] rounded-full transform scale-150 pointer-events-none"></div>
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none"></div>
                                
                                <img 
                                    src={SentinelWaterSoftenerImg} 
                                    alt="Adoucisseur d'eau Sentinelle" 
                                    className="relative z-10 w-full max-w-sm lg:max-w-md h-auto object-contain drop-shadow-[0_0_50px_rgba(59,130,246,0.3)] transform scale-[1.25] lg:scale-[1.4]" 
                                />
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
                            className="w-full h-full object-cover grayscale"
                         alt="Image illustrant nos solutions - analyse d'eau professionnelle | traitement d'eau Québec" title="Analyse d'eau professionnelle par Bricareau" />
                    </div>

                    <div className="container mx-auto px-6 relative z-10">
                        <div className="text-center max-w-7xl mx-auto mb-20 lg:mb-24 px-6 md:px-0">
                            <span className="inline-block px-4 py-1.5 bg-[#18448F] text-white rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-8">
                                GUIDE D'EXPERTISE RÉSIDENTIELLE
                            </span>
                            <h2 className="mb-8 heading-pro-max text-center">
                                <span className="font-bold not-italic text-[#8CC63F] block">L'expertise anticalcaire</span>
                                <span className="font-bold not-italic text-[#18448F] block text-center">adaptée à  votre réseau domestique.</span>
                            </h2>
                            <p className="body-pro-max text-center max-w-4xl mx-auto px-4">
                                Nos adoucisseurs d'eau résidentiels sont spécifiquement calibrés pour neutraliser la dureté de l'eau tout en préservant l'intégrité de vos installations. Une synergie parfaite entre <span className="text-blue-600 font-bold">économie de ressources</span> et <span className="text-blue-600 font-bold">confort absolu</span>.
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
                                            navigate(p.path || "/adoucisseurs-d-eau-residentiels-pour-une-eau-sans-calcaire");
                                        }
                                    }}
                                >
                                    <div className="relative h-80 overflow-hidden bg-slate-50/30 flex items-center justify-center p-12 overflow-hidden">
                                        {p.isRecommended && (
                                            <div className="absolute top-8 right-8 z-10">
                                                <span className="inline-block px-4 py-1.5 bg-[#18448F] text-white rounded-full text-[10px] font-black uppercase tracking-[0.3em] shadow-xl shadow-blue-500/30 animate-pulse">
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
                <section className="pt-24 lg:pt-32 pb-16 lg:pb-32 bg-white relative overflow-hidden">

                     {/* Full-width container for the slider */}
                     <div className="w-full relative z-0 mb-0 pb-0 overflow-visible mt-12 lg:mt-0">
                         {/* Left Side: Circular Slider */}
                         <div className="w-full lg:w-1/2 lg:absolute lg:left-0 lg:top-[-215px] xl:top-[-340px] 2xl:top-[-385px] relative flex justify-center lg:justify-start z-0 pointer-events-none">
                                {/* Translated left to create a semi-circle effect stuck to the edge */}
                                <div className="relative w-[340px] h-[340px] md:w-[600px] md:h-[600px] lg:w-[835px] lg:h-[835px] xl:w-[980px] xl:h-[980px] 2xl:w-[1080px] 2xl:h-[1080px] lg:translate-y-0 lg:-translate-x-1/3 xl:-translate-x-1/4 shrink-0 pointer-events-auto">
                                    {/* The blue circle border (full circle, but styled to look like an arc via the svg) */}
                                    <div className="absolute inset-4 rounded-full border-[2px] border-slate-100"></div>
                                    {/* The active blue arc */}
                                    <svg className="absolute inset-0 w-full h-full -rotate-[135deg] pointer-events-none" viewBox="0 0 100 100">
                                        {/* Arc covering roughly the right side */}
                                        <circle 
                                            cx="50" cy="50" r="48" 
                                            fill="none" 
                                            stroke="#18448F" 
                                            strokeWidth="1" 
                                            strokeDasharray="301" 
                                            strokeDashoffset="220" 
                                            className="transition-all duration-700 opacity-80"
                                        />
                                        <circle 
                                            cx="50" cy="50" r="48" 
                                            fill="none" 
                                            stroke="#18448F" 
                                            strokeWidth="2" 
                                            strokeDasharray="301" 
                                            strokeDashoffset="250" 
                                            className="transition-all duration-700"
                                        />
                                    </svg>
                                    
                                    {/* The image inside */}
                                    <div className="absolute inset-8 rounded-full overflow-hidden shadow-2xl bg-slate-50">
                                        <img 
                                            src={[
                                                benefitsVisualImg,
                                                applianceDamageImg,
                                                laundryImg,
                                                kitchenImg
                                            ][activeTransitionStep]} 
                                            className="w-full h-full object-cover"
                                         alt="Étape de transition - analyse d'eau professionnelle" title="Analyse d'eau professionnelle par Bricareau" />
                                    </div>

                                    {/* Icons positioned on the edge */}
                                    {[
                                        { icon: <Droplets className="w-5 h-5" />, angle: -5 },
                                        { icon: <ShieldCheck className="w-5 h-5" />, angle: 20 },
                                        { icon: <Shirt className="w-5 h-5" />, angle: 45 },
                                        { icon: <CircleDollarSign className="w-5 h-5" />, angle: 70 }
                                    ].map((step, idx) => {
                                        const radius = 50;
                                        const x = 50 + radius * Math.cos(step.angle * Math.PI / 180);
                                        const y = 50 + radius * Math.sin(step.angle * Math.PI / 180);
                                        
                                        return (
                                            <button 
                                                key={idx}
                                                onClick={() => setActiveTransitionStep(idx)}
                                                className={`absolute w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 z-10 border-[3px] shadow-lg ${activeTransitionStep === idx ? 'bg-[#18448F] text-white border-white scale-110' : 'bg-white text-[#18448F] border-[#18448F] hover:bg-blue-50'}`}
                                                style={{ 
                                                    left: `${x}%`, 
                                                    top: `${y}%`, 
                                                    transform: 'translate(-50%, -50%)' 
                                                }}
                                                aria-label={`Étape ${idx + 1}`}
                                            >
                                                {step.icon}
                                            </button>
                                        )
                                    })}
                                </div>
                            </div>

                            {/* Right Side: Title and Content grouped to be vertically centered */}
                            <div className="container mx-auto px-6 relative z-10 pointer-events-none">
                                <div className="w-full lg:w-1/2 lg:ml-auto space-y-6 lg:space-y-8 lg:pl-8 lg:pr-12 xl:pr-24 max-w-3xl mt-12 lg:mt-0 pointer-events-auto">
                                    
                                    {/* Title Block */}
                                    <div className="text-center lg:text-left mb-0">
                                        <span className="inline-block px-4 py-1.5 bg-[#18448F] text-white rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-4">
                                            LE PARCOURS BRICAREAU
                                        </span>
                                        <h2 className="heading-pro-max text-center lg:text-left mb-4 text-[#18448F]">
                                            <span className="font-bold not-italic">Une transition fluide 360° vers une <span className="text-[#8CC63F]">eau douce d'exception.</span></span>
                                        </h2>
                                        <p className="body-pro-max text-center lg:text-left max-w-3xl mx-auto lg:mx-0">
                                            Le Parcours Bricareau : une expertise d'élite, depuis votre première analyse jusqu'à  la douceur éternelle de votre eau.
                                        </p>
                                    </div>

                                    {/* Steps Block */}
                                    <div className="space-y-8">
                                    {(() => {
                                    const steps = [
                                        { 
                                            title: "Qualité supérieure", 
                                            desc: "Offrez à  votre corps le luxe qu'il mérite avec une eau soyeuse qui préserve l'hydratation naturelle de votre épiderme. Dès la première utilisation, vous ressentirez une différence notable : une peau moins irritée, des cheveux plus brillants et une sensation de bien-être pur à  chaque douche quotidienne.",
                                            icon: <Droplets className="w-6 h-6" />
                                        },
                                        { 
                                            title: "Protection totale", 
                                            desc: "Le calcaire est l'ennemi invisible de votre maison, s'accumulant dans vos tuyaux et obstruant vos résistances. Nos solutions neutralisent les minéraux durs à  la source, protégeant ainsi durablement votre chauffe-eau, votre lave-vaisselle et toute votre robinetterie contre la corrosion et les dépôts de tartre coûteux.",
                                            icon: <ShieldCheck className="w-6 h-6" />
                                        },
                                        { 
                                            title: "Linge plus doux", 
                                            desc: "Redécouvrez la texture originelle de vos textiles préférés sans avoir recours à  des produits chimiques agressifs. En éliminant la dureté de l'eau, les fibres de vos vêtements restent souples, les couleurs demeurent éclatantes plus longtemps et votre linge ressort de la machine avec une fraîcheur et une douceur incomparables.",
                                            icon: <Shirt className="w-6 h-6" />
                                        },
                                        { 
                                            title: "Économies garanties", 
                                            desc: "L'investissement dans un adoucisseur se rentabilise rapidement grâce à  une efficacité énergétique accrue de vos appareils de chauffage. En plus de réduire vos factures d'électricité, vous consommerez jusqu'à  50% de savon et de détergent en moins pour un résultat de nettoyage supérieur, tout en évitant des réparations de plomberie imprévues.",
                                            icon: <CircleDollarSign className="w-6 h-6" />
                                        }
                                    ];
                                    const activeData = steps[activeTransitionStep];
                                    return (
                                        <>
                                            <div className="flex items-center gap-4 animate-in slide-in-from-right-4 fade-in duration-500" key={`title-${activeTransitionStep}`}>
                                                <h3 className="text-xl lg:text-2xl font-semibold text-[#18448F] leading-tight">{activeData.title}</h3>
                                            </div>
                                            
                                            <p className="text-slate-600 text-lg leading-relaxed text-justify animate-in slide-in-from-right-8 fade-in duration-700" key={`desc-${activeTransitionStep}`}>
                                                {activeData.desc}
                                            </p>
                                            

                                        </>
                                    );
                                })()}

                                {/* Carousel indicators & arrows */}
                                <div className="flex items-center justify-between pt-8 border-t border-slate-100">
                                    <div className="flex gap-3">
                                        {[0, 1, 2, 3].map((idx) => (
                                            <button 
                                                key={idx}
                                                onClick={() => setActiveTransitionStep(idx)}
                                                className={`w-2 h-2 rounded-full transition-all duration-300 ${activeTransitionStep === idx ? 'bg-[#18448F] scale-125 ring-2 ring-blue-100' : 'bg-slate-300 hover:bg-slate-400'}`}
                                                aria-label={`Aller à l'étape ${idx + 1}`}
                                            />
                                        ))}
                                    </div>

                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section Spacer */}
                <div className="w-full bg-white py-12 lg:py-20 flex justify-center items-center">
                    <div className="w-32 h-1 bg-gradient-to-r from-[#18448F] to-[#8CC63F] rounded-full opacity-30"></div>
                </div>

                {/* 4. Comparative Analysis Section */}
                <section className="py-24 bg-white relative overflow-hidden">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <span className="inline-block px-4 py-1.5 bg-[#18448F] text-white rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
                                ANALYSE COMPARATIVE
                            </span>
                            <h2 className="heading-pro-max">
                                <span className="font-bold not-italic text-[#18448F] block text-center">Identifiez la performance</span>
                                <span className="font-bold not-italic text-[#18448F] block text-center">optimale pour votre foyer.</span>
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

                {/* Featured Banner */}
                <section className="bg-white relative z-20 overflow-hidden py-16 lg:py-24">
                    <div className="container mx-auto px-6 relative">
                        <div className="rounded-none lg:rounded-[3rem] overflow-hidden shadow-none lg:shadow-2xl border-0 lg:border border-white/20 group relative -mx-6 lg:mx-0">
                            <img 
                                src={installationSoftenerImg} 
                                className="w-full h-[450px] md:h-[550px] lg:h-[650px] object-cover group-hover:scale-105 transition-transform duration-[3000ms] brightness-[1.1] contrast-[1.05]"
                             alt="Installation professionnelle d'un adoucisseur d'eau Bricareau" title="Expert en eau par Bricareau" />
                            <div className="absolute inset-0 bg-gradient-to-r from-[#18448F]/90 via-[#18448F]/60 to-transparent p-8 md:p-12 lg:p-20 flex items-center lg:pt-32">
                                <div className="max-w-xl">
                                    <div className="flex items-center gap-3 text-blue-200 font-bold text-xs tracking-widest uppercase mb-6">
                                        <CheckCircle className="w-5 h-5" />
                                        Engagement Certifié
                                    </div>
                                    <h3 className="text-white text-4xl lg:text-5xl font-bold mb-6 leading-tight">L'excellence Bricareau s'installe chez vous.</h3>
                                    <p className="text-blue-50 text-lg lg:text-xl mb-10 text-justify">
                                        Chaque installation est une signature de qualité. Nos techniciens assurent une meilleure mise en place de vos systèmes, garantissant performance et esthétique.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 6.Testimonials Grid Section */}
                <TestimonialsSection
                    filterProduct="/adoucisseurs-d-eau-residentiels-pour-une-eau-sans-calcaire"
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
                            className="w-full h-auto object-contain"
                         alt="Analyse d'eau à  domicile pour détecter le calcaire et le chlore - Service Bricareau" title="Traitement d'eau Québec par Bricareau" />
                    </div>

                    {/* Desktop Background */}
                    <div className="hidden lg:block absolute inset-0 z-0">
                        <img
                            src={waterTestingImg}
                            className="w-full h-full object-cover object-[75%_15%]"
                         alt="Analyse d'eau à  domicile pour détecter le calcaire et le chlore" title="Traitement d'eau Québec par Bricareau" />
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
                                    <a href="/Analyses-et-Tests-d-eau">Demander une analyse d'eau</a>
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
                            className="w-full h-full object-cover grayscale brightness-150"
                         alt="Problématique d'eau dure sur la robinetterie - Solution Bricareau" title="Analyse d'eau professionnelle par Bricareau" />
                        <div className="absolute inset-0 bg-[#18448F]/10 backdrop-blur-sm" />
                    </div>

                    <div className="container mx-auto px-6 relative z-10">
                        <div className="max-w-5xl mx-auto text-center space-y-12">
                            <div className="space-y-6">
                                <span className="inline-block px-4 py-1.5 bg-white text-blue-600 rounded-full text-[10px] font-black uppercase tracking-[0.4em]">
                                    PRENEZ LE CONTRà”LE DE VOTRE EAU
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
                                        Parler à  un expert
                                    </a>
                                </ProMaxButton>
                                <ProMaxButton
                                    variant="outline-white"
                                    asChild
                                >
                                    <NavLink to="/consultation">Planifier une consultation</NavLink>
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

