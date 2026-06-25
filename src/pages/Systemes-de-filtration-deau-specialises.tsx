import React, { useEffect, useState } from 'react';
import { cn } from "@/lib/utils";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import GlobalBreadcrumbs from "@/components/GlobalBreadcrumbs";
import ExpertAvatars from "@/components/ExpertAvatars";
import ConsultationFormSection from "@/components/ConsultationFormSection";
import Footer from "@/components/Footer";
import TestimonialsSection from "@/components/TestimonialsSection";
import { ProMaxButton } from "@/components/ui/ProMaxButton";
import { Button } from "@/components/ui/button";
import heroFilter from "@/assets/person-is-holding-a-glass-of-water-from-a-faucet.jpeg";
import heroFiltration from "@/assets/2149890905.jpg";
import {
    ArrowRight,
    Droplets,
    ChevronRight,
    CheckCircle2,
    Shield,
    GlassWater,
    Phone,
    X,
    ChevronLeft,
    Wind,
    Droplets as DropletsIcon,
    Filter,
    FlaskConical,
    Pipette,
    Coffee,
    AlertTriangle,
    Wrench,
    Recycle
} from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { useNavigate } from "react-router-dom";
import bathroomImg from "@/assets/premium_bathroom_protection_1774493901305.png";
import specializedFiltersImg from "@/assets/Filtres_specialises_transparent.png";
import process1 from "@/assets/2148563485.jpg";
import waterTestingImg1 from "@/assets/342800.jpg";
import waterTasteImg from "@/assets/water-taste.jpg";
import waterSoftenerImg from "@/assets/Adoucisseurs d'eau.webp";
import drinkingWaterImg from "@/assets/Solutions d'eau potable.webp";
import uvSystemImg2 from "@/assets/VH200-F10-265x300.jpg";
import { adoucisseurImg as adoucisseurFosseImg } from "./Blog pages/Adoucisseur-deau- et-fosse-septique--Mythes-et-réalités";
import { softenerImg as residentialWaterSoftenerImg } from "./Blog pages/Comment régler la dureté de votre adoucisseur ";
import { conditionneursImg } from "./Blog pages/Adoucisseur avec sel ou sans sel";
import crystalClearWaterImg from "@/assets/5846952.jpg";
import zeroOdorImg from "@/assets/reasons-to-drink-more-water.jpg";
import comfortImg from "@/assets/71luIOvIQuL._AC_SL1500_.jpg";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from "@/components/ui/accordion";
import ourteamstudyyourwaterImg from "@/assets/10271.jpg";

import rottenEggsThumb from "@/assets/Water_Smells_Like_Rotten_Eggs_1400x.webp";
import rouilleThumbUpdated from "@/assets/5a4674e7-575d-4cd9-b1f2-32522f8a7072.jpg";
import turbideWaterThumb from "@/assets/Turbide-Water.webp";
import corrosiveWaterThumb from "@/assets/Corrosive-Water.webp";
import taninWaterThumb from "@/assets/problemes-deau-tanin.jpg";
import dechetbouteilleImg from "@/assets/20051.jpg";
import oldpipesImg from "@/assets/Old Pipes.jpg";
import newbornHealthImg from "@/assets/47A0F39600000578-5222035-image-a-1_1514911887749.jpg";
import healthAndSafetyIcon from "@/assets/health_and_safety.svg";
import mauvaisGoutThumb from "@/assets/1255.webp";
import WCwithoutIronImg from "@/assets/Cuvette de toilette sans taches de fer.jpg";
import WCwithIronImg from "@/assets/Cuvette de toilette avec taches de fer.png";
import eauCristallineImg from "@/assets/Eau cristalline.jpg";

const products = [
    { name: "Filtre d'eau Vortex", desc: "Spécialisé pour l'eau contenant des sédiments.", image: specializedFiltersImg },
    { name: "Filtre d'eau Zen-pH", desc: "Spécialisé pour neutraliser l'eau acide.", image: specializedFiltersImg },
    { name: "Filtre d'eau ChlorStop", desc: "Spécialisé pour l'eau contenant du chlore.", image: specializedFiltersImg },
    { name: "Filtre d'eau Iron Shield", desc: "Spécialisé pour l'eau contenant du fer.", image: specializedFiltersImg },
    { name: "Filtre d'eau Oxy-pure", desc: "Spécialisé pour l'eau contenant du fer et du manganèse.", image: specializedFiltersImg },
    { name: "Filtre d'eau Sulphur Shield", desc: "Spécialisé pour l'eau contenant du sulfure d'hydrogène.", image: specializedFiltersImg },
    { name: "Filtre d'eau Zéro-As", desc: "Spécialisé pour l'eau contenant de l'arsenic.", image: specializedFiltersImg },
    { name: "Filtre d'eau Tann-Ex", desc: "Spécialisé pour l'eau contenant du tanin.", image: waterSoftenerImg },
];

const faqItems = [
    {
        q: "Comment éliminer l'odeur d'œufs pourris dans mon eau ?",
        a: "Cette odeur est causée par le gaz sulfure d'hydrogène. Notre système Outdoor HE ou nos filtres à air à oxydation sont conçus pour neutraliser ce gaz sans produits chimiques, rendant votre eau fraîche et inodore."
    },
    {
        q: "Mon eau laisse des taches de rouille, quel filtre choisir ?",
        a: "Les taches orangées indiquent la présence de fer. Le système Bricareau Iron-Cleer est notre solution la plus performante. Il oxyde et capture le fer ferrique et ferreux, protégeant ainsi vos éviers et votre linge."
    },
    {
        q: "L'arsenic dans l'eau est-il dangereux ?",
        a: "Oui, l'arsenic est un contaminant inodore et incolore lié à des problèmes de santé graves. Notre système Select Plus utilise un média spécifique certifié pour réduire l'arsenic à des niveaux sécuritaires selon les normes de santé publique."
    },
    {
        q: "Pourquoi ma robinetterie de cuivre devient-elle verte ?",
        a: "C'est le signe d'une eau acide (pH bas) qui ronge votre tuyauterie. La série Medallist est équipée d'un neutraliseur qui remonte le pH de l'eau, protégeant ainsi l'intégrité de votre plomberie et évitant les fuites."
    },
    {
        q: "Qu'est-ce que le tanin et comment le traiter ?",
        a: "Les tanins proviennent de matières organiques et donnent à l'eau une couleur jaunâtre ou brunâtre (eau de thé). Le système Select Plus Connect utilise une résine d'échange d'anions spécifique pour éliminer cette coloration et clarifier l'eau."
    },
    {
        q: "Mon eau a un goût de chlore, même si j'ai un puits ?",
        a: "Si vous utilisez un système de chloration pour la désinfection, l'excès de chlore peut être désagréable. Notre système HE Municipal ou nos filtres au charbon actif éliminent le goût et l'odeur de chlore pour une eau plus saine."
    },
    {
        q: "Quelle est la différence entre le fer et le manganèse ?",
        a: "Le fer cause des taches rouille, tandis que le manganèse produit des taches noires et des dépôts huileux. Notre série Gold Series est spécialement conçue pour traiter ces deux métaux lourds simultanément."
    },
    {
        q: "Le filtre à sédiments est-il suffisant pour une eau trouble ?",
        a: "Un filtre à sédiments retire les particules physiques (sable, terre). Cependant, si la turbidité est causée par des particules microscopiques, un filtre multimédia ou un système Bricareau HE Connect sera plus efficace."
    },
    {
        q: "Les filtres spécialisés nécessitent-ils beaucoup d'entretien ?",
        a: "La plupart de nos systèmes sont entièrement automatiques et effectuent des cycles de nettoyage périodiques. Un entretien annuel professionnel est recommandé pour optimiser les performances et la longévité."
    },
    {
        q: "Quelle est la durée de vie des médias filtrants ?",
        a: "Selon la qualité de votre eau et votre consommation, les médias filtrants spécialisés (comme pour le fer ou le soufre) durent généralement entre 5 et 10 ans avant de nécessiter un remplacement."
    },
    {
        q: "Un seul système peut-il régler tous mes problèmes ?",
        a: "Certains systèmes mixtes peuvent traiter plusieurs minéraux, mais pour des cas complexes (fer + arsenic + acide), une combinaison de deux unités spécialisées est souvent la solution la plus durable et efficace."
    },
    {
        q: "Puis-je boire l'eau après la filtration du fer ?",
        a: "Oui, la filtration du fer améliore non seulement l'aspect esthétique de l'eau mais aussi son goût. Pour une pureté absolue, nous recommandons souvent d'ajouter un système d'osmose inverse au point de consommation."
    },
    {
        q: "Comment savoir quel système convient à mon puits ?",
        a: "Une analyse d'eau complète est la première étape essentielle. Elle nous permet de mesurer précisément les niveaux de chaque contaminant et de configurer le système Bricareau parfaitement adapté à vos besoins."
    },
    {
        q: "Le système de filtration affecte-t-il la pression d'eau ?",
        a: "Nos systèmes sont dimensionnés pour maintenir un débit optimal. Grâce à nos vannes de contrôle haute performance, la perte de pression est négligeable même lors d'utilisations simultanées dans la maison."
    },
    {
        q: "Les systèmes Bricareau sont-ils garantis ?",
        a: "Absolument. Bricareau offre l'une des meilleures garanties de l'industrie sur les réservoirs, les vannes et l'électronique, vous assurant une tranquillité d'esprit pour de nombreuses années."
    }
];

interface ComparisonItem {
    feature: string;
    Vortex: boolean | string;
    ZenPH: boolean | string;
    ChlorStop: boolean | string;
    IronShield: boolean | string;
    OxyPure: boolean | string;
    SulphurShield: boolean | string;
    ZeroAs: boolean | string;
    TannEx: boolean | string;
    SerenitePure: boolean | string;
}

const comparisonData: ComparisonItem[] = [
    { feature: "Élimination du Fer (Taches rouille)", Vortex: false, ZenPH: false, ChlorStop: false, IronShield: "Maximale", OxyPure: "Maximale", SulphurShield: "Partielle", ZeroAs: false, TannEx: false, SerenitePure: "Totale" },
    { feature: "Odeur de Soufre (Œufs pourris)", Vortex: false, ZenPH: false, ChlorStop: false, IronShield: "Moyenne", OxyPure: "Moyenne", SulphurShield: "Maximale", ZeroAs: false, TannEx: false, SerenitePure: "Partielle" },
    { feature: "Manganèse (Taches noires)", Vortex: false, ZenPH: false, ChlorStop: false, IronShield: "Partielle", OxyPure: "Maximale", SulphurShield: "Partielle", ZeroAs: false, TannEx: false, SerenitePure: "Totale" },
    { feature: "Acidité (Correction pH / Eau bleue)", Vortex: false, ZenPH: "Maximale", ChlorStop: false, IronShield: false, OxyPure: false, SulphurShield: false, ZeroAs: false, TannEx: false, SerenitePure: false },
    { feature: "Sédiments, Sable & Turbidité", Vortex: "Totale", ZenPH: "Partielle", ChlorStop: "Partielle", IronShield: "Partielle", OxyPure: "Partielle", SulphurShield: "Partielle", ZeroAs: "Partielle", TannEx: "Partielle", SerenitePure: "Totale" },
    { feature: "Arsenic & Métaux Lourds", Vortex: false, ZenPH: false, ChlorStop: false, IronShield: false, OxyPure: false, SulphurShield: false, ZeroAs: "Maximale", TannEx: false, SerenitePure: "Totale" },
    { feature: "Tanins & Coloration (Eau de thé)", Vortex: false, ZenPH: false, ChlorStop: false, IronShield: false, OxyPure: false, SulphurShield: false, ZeroAs: false, TannEx: "Maximale", SerenitePure: "Partielle" },
    { feature: "Goût & Odeur de Chlore", Vortex: false, ZenPH: false, ChlorStop: "Maximale", IronShield: false, OxyPure: false, SulphurShield: false, ZeroAs: false, TannEx: false, SerenitePure: "Totale" },
    { feature: "Entretien / Maintenance", Vortex: "Minimal", ZenPH: "Moyen", ChlorStop: "Bas", IronShield: "Bas", OxyPure: "Moyen", SulphurShield: "Bas", ZeroAs: "Moyen", TannEx: "Moyen", SerenitePure: "Élevé" },];

const B = () => {
    const navigate = useNavigate();
    const [showAllFaqs, setShowAllFaqs] = React.useState(false);
    const [activeCol, setActiveCol] = React.useState(0);
    const [resourceIndex, setResourceIndex] = React.useState(1);
    const [showAllProducts, setShowAllProducts] = React.useState(false);
    const resourcesRef = React.useRef<HTMLDivElement>(null);
    const symptomCarouselRef = React.useRef<HTMLDivElement>(null);

    const scrollSymptomCarousel = (direction: 'left' | 'right') => {
        if (symptomCarouselRef.current) {
            const scrollAmount = 380 + 24; // card width + gap
            symptomCarouselRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
        }
    };

    const handleScrollRessources = () => {
        if (resourcesRef.current) {
            const scrollLeft = resourcesRef.current.scrollLeft;
            const containerWidth = resourcesRef.current.offsetWidth;
            const itemWidth = resourcesRef.current.querySelector('div')?.offsetWidth || containerWidth;
            const index = Math.round(scrollLeft / itemWidth) + 1;
            setResourceIndex(Math.min(index, resources.length));
        }
    };

    const resources = [
        { title: "Filtration d'eau de puits : guide complet", img: crystalClearWaterImg, path: "/filtration-eau-de-puits-votre-guide-complet" },
        { title: "L'importance de l'analyse d'eau", img: residentialWaterSoftenerImg, path: "/pourquoi-analyser-eau-de-puits-avant-de-filtrer" },
        { title: "Eaux ferrugineuses et soufrées", img: adoucisseurFosseImg, path: "/comment-eliminer-fer-manganese-soufre-eau-de-puits" }
    ];

    const scrollResources = (direction: 'left' | 'right') => {
        if (resourcesRef.current) {
            const scrollAmount = resourcesRef.current.clientWidth * 0.8;
            resourcesRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
        }
    };
    useEffect(() => {
        document.title = "Filtre d'Eau de Puits Québec | Fer, Soufre et Manganèse | Bricareau";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Expertise québécoise en filtration d'eau de puits. Éliminez le fer, le soufre et le manganèse avec nos systèmes spécialisés. Analyse d'eau gratuite à domicile.");
        }

        // OG Tags
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) ogTitle.setAttribute("content", "Filtration d'Eau de Puits au Québec : Solutions Spécialisées | Bricareau");
        const ogDesc = document.querySelector('meta[property="og:description"]');
        if (ogDesc) ogDesc.setAttribute("content", "Dites adieu aux odeurs d'œufs pourris et aux taches de rouille. Protection complète pour votre puits.");
        const ogUrl = document.querySelector('meta[property="og:url"]');
        if (ogUrl) ogUrl.setAttribute("content", "https://bricareau.com/Filtres-deau-de-puits");
    }, []);

    const [cardStack, setCardStack] = useState([0, 1, 2, 3]); // Initial order with 4 cards

    const handleCardClick = (cardIndex: number) => {
        // Move clicked card to the top (end of array)
        setCardStack(prev => {
            const newStack = prev.filter(idx => idx !== cardIndex);
            return [...newStack, cardIndex];
        });
    };

    // Auto-rotation for the card stack Phase III - Dynamics
    useEffect(() => {
        const interval = setInterval(() => {
            setCardStack(prev => {
                const nextCard = prev[0]; // Take the bottom-most card
                const remaining = prev.slice(1);
                return [...remaining, nextCard]; // Move it to the top
            });
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const cardData = [
        { id: 0, title: "Zéro odeur", img: zeroOdorImg, desc: "Dites adieu aux odeurs d'œufs pourris (soufre) et au goût de chlore pour une eau fraîche." },
        { id: 1, title: "Protection totale", img: bathroomImg, desc: "Empêchez le fer et les minéraux corrosifs de tacher vos éviers et de détruire votre plomberie." },
        { id: 2, title: "Eau cristalline", img: crystalClearWaterImg, desc: "Éliminez les sédiments et la turbidité pour une eau d'une clarté professionnelle partout chez vous." },
        { id: 3, title: "Confort durable", img: comfortImg, desc: "Savourez un bien-être quotidien inégalé grâce à une eau exceptionnelle." }
    ];

    // Fixed styles for the 4 positions in the stack (bottom to top)
    const positionStyles = [
        "transform -rotate-[16deg] -translate-x-20 translate-y-16 z-0 scale-90 opacity-60",
        "transform -rotate-[8deg] -translate-x-10 translate-y-8 z-10 scale-95 opacity-80",
        "transform -rotate-[2deg] translate-x-0 translate-y-0 z-20 scale-100 opacity-95",
        "transform rotate-[12deg] translate-x-16 -translate-y-10 z-30 scale-105 opacity-100 shadow-[20px_50px_100px_-20px_rgba(30,58,138,0.3)] shadow-blue-900/40"
    ];
    return (
        <div className="min-h-screen bg-background text-slate-900 font-sans">
             <Header />
             <main>
                <Hero 
                    image={heroFiltration}
                    highlightedTitle={<span className="font-bold not-italic">Protégez votre santé</span>}
                    mainTitle={<> avec <span className="text-[#8CC63F] font-bold not-italic">une filtration d'eau d'excellence.</span></>}
                    subtitle="Ne laissez plus les contaminants couler de vos robinets. Nos systèmes de filtration d'eau avancés constituent un bouclier durable pour votre maison, vous garantissant une eau d'une pureté irréprochable pour toute votre famille au Canada."
                    showPhone={true}
                    showBreadcrumbs={true}
                />

                {/* 2. The Problem Section */}
                <section id="problemes-eau" className="py-24 bg-white relative overflow-hidden">
                    <div className="container mx-auto px-6 relative z-10">
                        <div className="text-center max-w-4xl mx-auto mb-20">
                            <span className="inline-block px-4 py-1 bg-[#18448F] text-white rounded-full text-[10px] font-black tracking-widest mb-6 uppercase">
                                Diagnostic de Pureté
                            </span>
                            <h2 className="heading-pro-max">
                                <span className="font-bold not-italic text-[#18448F] block">Identifier l'invisible :</span>
                                <span className="font-bold text-[#8CC63F] block"><span className="text-[#18448F]">Pourquoi</span> filtrer votre eau ?</span>
                            </h2>
                            <p className="body-pro-max text-slate-500 mt-6 mx-auto max-w-2xl px-4">
                                L'eau municipale traverse des kilomètres de tuyauteries vétustes, tandis que l'eau de puits ou de surface est exposée aux éléments naturels avant d'arriver chez vous. Chaque verre peut ainsi contenir des traces de l'imparfait.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                            {[
                                {
                                    title: "Réseaux Vétustes",
                                    desc: "Des particules de rouille et de sédiments provenant de tuyauteries municipales centenaires se déposent dans vos verres.",
                                    benefit: "Infrastructure",
                                    color: "bg-amber-600",
                                    icon: <Wrench className="w-6 h-6" />,
                                    img: oldpipesImg
                                },
                                {
                                    title: "Santé & Nouveau-nés",
                                    desc: "Traces de plomb, micro-plastiques et hormones. Protégez les systèmes immunitaires fragiles de votre famille.",
                                    benefit: "Sécurité Totale",
                                    color: "bg-pink-500",
                                    icon: <img src={healthAndSafetyIcon} className="w-6 h-6 brightness-0 invert"  alt="Santé & Nouveau-nés icon" title="Systèmes d'eau sur mesure par Bricareau" />,
                                    img: newbornHealthImg
                                },
                                {
                                    title: "Goût de Chlore",
                                    desc: "Le chlore est nécessaire pour désinfecter, mais il altère le goût de vos boissons et dessèche votre peau sous la douche.",
                                    benefit: "Confort Gustatif",
                                    color: "bg-blue-600",
                                    icon: <GlassWater className="w-6 h-6" />,
                                    img: waterTasteImg
                                },
                                {
                                    title: "L'impact Plastique",
                                    desc: "Éliminez définitivement l'achat de 2000+ bouteilles de plastique par an. Une victoire écologique et financière.",
                                    benefit: "Zéro Déchet",
                                    color: "bg-emerald-500",
                                    icon: <Recycle className="w-6 h-6" />,
                                    img: dechetbouteilleImg
                                },
                            ].map((item, i) => (
                                <div 
                                    key={i} 
                                    className="group relative h-[500px] rounded-[3rem] overflow-hidden border border-slate-100 bg-slate-50/50 cursor-pointer shadow-sm transition-all duration-700 hover:shadow-2xl hover:shadow-blue-200/50 hover:border-blue-100 hover:-translate-y-3"
                                    onClick={() => {
                                        let targetId = 'solutions-title';
                                        if (i === 0) targetId = 'compact-filtration-title';
                                        else if (i === 1) targetId = 'undersink-title';
                                        
                                        const el = document.getElementById(targetId);
                                        el?.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                >
                                    {/* background with slight zoom on hover */}
                                    <div className="absolute inset-0 z-0 scale-105 group-hover:scale-110 transition-transform duration-[2000ms]">
                                        <img 
                                            src={item.img} 
                                            alt={item.title} 
                                            className="w-full h-full object-cover opacity-1 group-hover:opacity-40 transition-opacity grayscale group-hover:grayscale-0" 
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
                                    </div>

                                    <div className="relative z-10 p-10 flex flex-col h-full justify-between">
                                        <div className="space-y-6">
                                            <div className="flex items-center justify-between">
                                                <div className={`w-14 h-14 rounded-2xl ${item.color} text-white flex items-center justify-center shadow-lg transition-transform duration-500 group-hover:rotate-12`}>
                                                    {item.icon}
                                                </div>
                                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 group-hover:text-blue-600 transition-colors">
                                                    {item.benefit}
                                                </span>
                                            </div>
                                            <h3 className="text-3xl font-bold text-slate-800 leading-[1.1] transition-all duration-500 group-hover:text-blue-700">
                                                {item.title}
                                            </h3>
                                            <p className="body-pro-max text-sm leading-relaxed text-slate-600 opacity-80 group-hover:opacity-100 transition-all">
                                                {item.desc}
                                            </p>
                                        </div>


                                    </div>

                                    {/* Glow effect on hover */}
                                    <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-blue-400/20 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 2.5. Symptom Diagnostic Grid */}
                <section className="py-24 bg-white relative overflow-hidden">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <span className="inline-block px-4 py-1.5 bg-[#18448F] text-white rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
                                DIAGNOSTIC AUTOMATIQUE
                            </span>
                            <h2 className="heading-pro-max">
                                <span className="font-bold not-italic text-[#18448F] block">Quel <span className="text-[#8CC63F]">problème d'eau</span></span>
                                <span className="font-bold text-[#18448F] block text-center">vivez-vous au quotidien ?</span>
                            </h2>
                        </div>
                    </div>
                    <div className="w-full max-w-[1402px] mx-auto relative overflow-hidden z-10 mt-12 group">
                        <div 
                            ref={symptomCarouselRef}
                            className="flex gap-6 overflow-x-auto scroll-smooth pb-12 pt-4 snap-x snap-mandatory no-scrollbar px-4 lg:px-0"
                            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                        >
                            {[
                                { 
                                    problem: "Sable & Sédiments", 
                                    cause: "Eaux turbides", 
                                    solution: "Vortex Filtration",
                                    color: "from-slate-400 to-slate-700",
                                    icon: <Filter className="w-8 h-8" />,
                                    img: turbideWaterThumb
                                },
                                { 
                                    problem: "Taches de Rouille", 
                                    cause: "Excès de fer ferrique/ferreux", 
                                    solution: "Iron Shield",
                                    color: "from-orange-400 to-red-700",
                                    icon: <DropletsIcon className="w-8 h-8" />,
                                    img: rouilleThumbUpdated
                                },
                                { 
                                    problem: "Eau Acide (pH bas)", 
                                    cause: "Corrosion du cuivre", 
                                    solution: "Zen-pH Neutralizer",
                                    color: "from-blue-400 to-indigo-600",
                                    icon: <FlaskConical className="w-8 h-8" />,
                                    img: corrosiveWaterThumb
                                },
                                { 
                                    problem: "Odeur d'œufs pourris", 
                                    cause: "Gaz sulfure d'hydrogène", 
                                    solution: "Sulphur Shield",
                                    color: "from-amber-400 to-orange-600",
                                    icon: <Wind className="w-8 h-8" />,
                                    img: rottenEggsThumb
                                },
                                { 
                                    problem: "Taches Noires", 
                                    cause: "Présence de Manganèse", 
                                    solution: "Oxy-pure Series",
                                    color: "from-stone-600 to-black",
                                    icon: <Pipette className="w-8 h-8" />,
                                    img: mauvaisGoutThumb
                                },
                                { 
                                    problem: "Eau de thé / Colorée", 
                                    cause: "Tanins organiques", 
                                    solution: "Tann-Ex System",
                                    color: "from-yellow-600 to-amber-900",
                                    icon: <Coffee className="w-8 h-8" />,
                                    img: taninWaterThumb
                                }
                            ].map((s, i) => (
                                <div 
                                    key={i} 
                                    className="w-[80vw] md:w-[380px] shrink-0 snap-center group relative h-[420px] rounded-[3.5rem] overflow-hidden border border-white/40 bg-white/5 backdrop-blur-md cursor-pointer transition-all duration-700 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(30,58,138,0.15)] hover:-translate-y-3"
                                    onClick={() => navigate("/consultation")}
                                >
                                    {/* Background Image with Cinematic Overlay */}
                                    <div className="absolute inset-0 z-0">
                                        <img 
                                            src={s.img} 
                                            alt={s.problem} 
                                            className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110 opacity-40 group-hover:opacity-60 grayscale-[0.5] group-hover:grayscale-0"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/40 to-blue-50/40" />
                                    </div>

                                    <div className="relative z-10 p-10 h-full flex flex-col">


                                        <div className="flex-grow space-y-4">
                                            <div className="flex items-center gap-2">
                                                <span className="w-2 h-2 rounded-full bg-[#18448F] animate-pulse" />
                                                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 italic">
                                                    Cause identifiée : {s.cause}
                                                </span>
                                            </div>
                                            <h3 className="text-3xl font-medium text-[#18448F] leading-[1.1] tracking-tight">
                                                {s.problem}
                                            </h3>
                                            <p className="text-sm font-light text-slate-600 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                                                Ce symptôme affecte non seulement le goût de votre eau, mais peut également endommager vos équipements sur le long terme.
                                            </p>
                                        </div>

                                        <div className="mt-auto pt-6 border-t border-blue-100/50">
                                            <div className="flex items-center justify-between">
                                                <div className="space-y-1">
                                                    <span className="text-[10px] uppercase font-bold text-slate-400">Solution Bricareau</span>
                                                    <p className="text-sm font-black text-[#18448F]">
                                                        {s.solution}
                                                    </p>
                                                </div>
                                                <div className="w-10 h-10 rounded-full bg-[#18448F] text-white flex items-center justify-center shadow-lg shadow-[#18448F]/20 transition-all duration-500 group-hover:translate-x-2">
                                                    <ArrowRight className="w-5 h-5" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Glass Shine Effect */}
                                    <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/30 to-white/0 -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-[1.5s] ease-in-out pointer-events-none" />
                                </div>
                            ))}
                        </div>
                        {/* Navigation Arrows */}
                        <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-2 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <Button 
                                variant="outline" 
                                size="icon"
                                className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-md border-slate-200 shadow-xl pointer-events-auto hover:bg-white hover:scale-105 transition-all text-[#18448F]"
                                onClick={() => scrollSymptomCarousel('left')}
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </Button>
                            <Button 
                                variant="outline" 
                                size="icon"
                                className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-md border-slate-200 shadow-xl pointer-events-auto hover:bg-white hover:scale-105 transition-all text-[#18448F]"
                                onClick={() => scrollSymptomCarousel('right')}
                            >
                                <ChevronRight className="w-6 h-6" />
                            </Button>
                        </div>
                    </div>
                </section>

                {/* AEO TARGET PARAGRAPH (Featured Snippets & Voice Search) */}
                <section className="py-24 relative overflow-visible bg-[#0A1A3A] z-20" id="aeo-puits">
                    {/* Background Gradients */}
                    <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-600/30 via-[#0A1A3A]/0 to-[#0A1A3A]/0 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-emerald-600/20 via-[#0A1A3A]/0 to-[#0A1A3A]/0 pointer-events-none"></div>
                    
                    {/* Floating decorative elements */}
                    <div className="absolute top-20 right-[15%] w-32 h-32 bg-blue-500/20 rounded-full blur-[60px]"></div>
                    <div className="absolute bottom-20 left-[10%] w-40 h-40 bg-emerald-500/20 rounded-full blur-[80px]"></div>

                    <div className="container mx-auto px-6 max-w-6xl relative z-10">
                        <div className="flex flex-col lg:flex-row gap-16 items-center">
                            
                            {/* Left Content: Text */}
                            <div className="lg:w-1/2 space-y-8">
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-blue-200 text-xs font-bold tracking-[0.2em] uppercase">
                                    Technologie Essentielle
                                </div>
                                <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight">
                                    Qu'est-ce qu'un <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8CC63F] to-blue-400 italic font-bold">système de filtration d'eau spécialisé ?</span>
                                </h2>
                                <p className="text-blue-100/70 text-lg leading-relaxed font-light">
                                    Un système de filtration d'eau spécialisé est une solution de traitement conçue pour éliminer les contaminants spécifiques aux eaux souterraines et à l'eau municipale, tels que le chlore, le fer, le soufre (odeur d'œufs pourris), le manganèse, les tanins et l'arsenic. Il garantit une eau pure et sécuritaire pour toute la maison.
                                </p>
                            </div>

                            {/* Right Content: Illuminated Image */}
                            <div className="lg:w-1/2 w-full relative flex justify-center items-center mt-12 lg:mt-0 z-20">
                                {/* Ambient Glow Behind the Image */}
                                <div className="absolute inset-0 bg-blue-500/30 blur-[120px] rounded-full transform scale-150 pointer-events-none"></div>
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none"></div>
                                
                                <img 
                                    src={specializedFiltersImg} 
                                    alt="Système de filtration d'eau spécialisé" 
                                    className="relative z-10 w-full max-w-sm lg:max-w-md h-auto object-contain drop-shadow-[0_0_50px_rgba(59,130,246,0.3)] transform scale-[1.25] lg:scale-[1.4]" 
                                />
                            </div>

                        </div>
                    </div>
                </section>

                {/* 3. Product Grid Section */}
                <section id="specialized-filters" className="py-24 bg-gray-50 scroll-mt-20">
                    <div className="container mx-auto px-6">
                        <div className="text-left mb-16">
                            <h2 className="mb-8 heading-pro-max text-left">
                                <span className="italic font-light text-[#18448F] block text-left">Nos filtres d'eau</span>
                                <span className="font-bold text-[#18448F] block text-left">spécialisés</span>
                            </h2>
                            <div className="w-24 h-1 bg-[#18448F]"></div>
                            <p className="body-pro-max mt-8 text-justify w-full">
                                Découvrir notre gamme complète de filtres spécialisés, conçus pour répondre aux défis uniques du réseau d'eau municipale et des puits privés artésiens ou de surface. Que vous fassiez face à des taches de fer tenaces, des odeurs de soufre incommodantes, une eau acide corrosive ou la présence de contaminants invisibles comme l'arsenic, nos systèmes offrent une solution ciblée et performante. Chaque unité est dotée d'une technologie de pointe pour assurer une filtration maximale tout en préservant l'intégrité de votre plomberie et de vos appareils électroménagers. En investissant dans l'une de nos solutions Vortex, Iron Shield, Zen-pH, ou autres, vous choisissez une tranquillité d'esprit durable et une qualité d'eau irréprochable pour toute votre famille. Nos experts vous accompagnent dans le diagnostic et l'installation pour garantir que chaque goutte d'eau qui coule de votre robinet soit pure, sûre et limpide.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {(showAllProducts ? products : products.slice(0, 6)).map((p, i) => (
                                <div
                                    key={i}
                                    className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full cursor-pointer"
                                    onClick={() => navigate("/contact")}
                                >
                                    <div className="relative h-80 overflow-hidden bg-slate-50 flex items-center justify-center p-12">
                                        <img
                                            src={p.image}
                                            alt={`${p.name} - Système de filtration spécialisé Bricareau pour éliminer le fer et les odeurs`}
                                            className="max-h-full object-contain group-hover:scale-110 transition-transform duration-700 mix-blend-multiply"
                                        />
                                    </div>
                                    <div className="p-8 space-y-4 flex flex-col flex-grow border-t-2 border-transparent group-hover:border-[#18448F] transition-colors">
                                        <h3 className="card-title text-center group-hover:text-[#18448F] transition-colors duration-500">
                                            {p.name}
                                        </h3>
                                         <p className="body-pro-max text-slate-600 text-justify">
                                             {p.desc}
                                         </p>
                                        <div
                                            className="inline-flex items-center gap-2 text-[#18448F] font-bold text-xs tracking-widest uppercase mt-4 group-hover:underline self-end"
                                            style={{}}
                                        >
                                            <span></span>
                                            <ArrowRight className="h-6 w-6 transform group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 flex justify-center">
                            <Button
                                variant="outline"
                                className="rounded-full px-8 py-6 text-sm font-bold border-slate-200 text-[#18448F] hover:bg-slate-50 transition-all hover:scale-105"
                                onClick={() => setShowAllProducts(!showAllProducts)}
                            >
                                {showAllProducts ? "Voir moins de filtres" : "Voir tous les filtres"}
                            </Button>
                        </div>

                        <div className="mt-20 p-8 rounded-[2.5rem] bg-[#18448F] flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl animate-in fade-in slide-in-from-bottom-8">
                            <div className="flex items-center gap-6">
                                <div className="w-16 h-16 rounded-2xl bg-indigo-950 flex items-center justify-center text-white shadow-xl shadow-indigo-950/20">
                                    <CheckCircle2 className="w-8 h-8" />
                                </div>
                                <div className="text-left">
                                    <h4 className="text-white font-bold text-xl">Vous ne savez pas quel filtre choisir ?</h4>
                                    <p className="text-blue-100/80 font-light text-sm">Laissez nos experts d'eau faire un diagnostic de votre eau gratuitement.</p>
                                </div>
                            </div>
                            <ProMaxButton asChild variant="white" className="w-full md:w-auto">
                                <a href="/diagnostic">Démarrer le diagnostic gratuit</a>
                            </ProMaxButton>
                        </div>
                    </div>
                </section>

                {/* 3.5. Avant / Après - Visual Proof Section */}
                <section className="relative py-32 bg-slate-50 overflow-hidden">
                    <div className="container mx-auto px-6 relative z-10">
                        <div className="text-center mb-24 max-w-3xl mx-auto">
                            <span className="inline-block px-4 py-1.5 bg-blue-600/10 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-8">
                                RÉSULTATS CONCRETS
                            </span>
                            <h2 className="mb-8 heading-pro-max text-center">
                                <span className="italic font-light text-[#18448F] block">Avant / Après :</span>
                                <span className="font-bold text-[#18448F] block">La Transformation Bricareau</span>
                            </h2>
                            <p className="body-pro-max text-slate-500 text-center">
                                Ne vous contentez pas de nous croire sur parole. Visualisez l'impact immédiat de nos systèmes sur la qualité, la clarté et la sécurité de votre eau de puits.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            {/* Comparison 1: Iron & Rust */}
                            <div className="group bg-white rounded-[3rem] p-8 lg:p-12 border border-slate-100 shadow-xl hover:shadow-2xl transition-all duration-700">
                                <div className="flex items-center gap-6 mb-12">
                                    <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center text-orange-600">
                                        <span className="text-xl font-black">Fe</span>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-[#18448F]">Fer & Manganèse</h3>
                                        <p className="text-sm text-slate-500">Élimination des taches et du goût métallique</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4 relative">
                                    {/* Before */}
                                    <div className="space-y-4">
                                        <div className="relative aspect-square rounded-[2rem] overflow-hidden">
                                            <img src={WCwithIronImg} className="w-full h-full object-cover grayscale-[0.3]"  alt="Eau de puits ferreuse avant traitement - analyse d'eau professionnelle" title="Analyse d'eau professionnelle par Bricareau" />
                                            <div className="absolute inset-0 bg-orange-900/20" />
                                            <span className="absolute top-4 left-4 bg-red-600 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">Avant</span>
                                        </div>
                                        <p className="text-xs font-medium text-slate-400 text-center">Eau ferreuse et dépôts de rouille</p>
                                    </div>
                                    {/* After */}
                                    <div className="space-y-4">
                                        <div className="relative aspect-square rounded-[2rem] overflow-hidden border-4 border-blue-600/20">
                                            <img src={WCwithoutIronImg} className="w-full h-full object-cover opacity-90"  alt="Eau pure après traitement Bricareau" title="Systèmes d'eau sur mesure par Bricareau" />
                                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-transparent" />
                                            <span className="absolute top-4 left-4 bg-blue-600 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">Après</span>
                                        </div>
                                        <p className="text-xs font-bold text-blue-600 text-center">Éclat retrouvé, porcelaine comme neuve !</p>
                                    </div>
                                    {/* Connector Arrow */}
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg border border-slate-100 flex items-center justify-center z-10 text-blue-600">
                                        <ChevronRight className="w-6 h-6" />
                                    </div>
                                </div>
                            </div>

                            {/* Comparison 2: Turbidité & Clarté */}
                            <div className="group bg-white rounded-[3rem] p-8 lg:p-12 border border-slate-100 shadow-xl hover:shadow-2xl transition-all duration-700">
                                <div className="flex items-center gap-6 mb-12">
                                    <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600">
                                        <span className="text-xl font-black">H2O</span>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-[#18448F]">Turbidité & Algues</h3>
                                        <p className="text-sm text-slate-500">Filtration multi-niveaux pour une eau limpide</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4 relative">
                                    {/* Before */}
                                    <div className="space-y-4">
                                        <div className="relative aspect-square rounded-[2rem] overflow-hidden">
                                            <img src={turbideWaterThumb} className="w-full h-full object-cover"  alt="Eau de puits trouble avant filtration - traitement d'eau Québec" title="Traitement d'eau Québec par Bricareau" />
                                            <div className="absolute inset-0 bg-slate-900/20" />
                                            <span className="absolute top-4 left-4 bg-red-600 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">Avant</span>
                                        </div>
                                        <p className="text-xs font-medium text-slate-400 text-center">Eau trouble, particules en suspension</p>
                                    </div>
                                    {/* After */}
                                    <div className="space-y-4">
                                        <div className="relative aspect-square rounded-[2rem] overflow-hidden border-4 border-blue-600/20">
                                            <img src={eauCristallineImg} className="absolute inset-0 w-full h-full object-cover"  alt="Eau pure Bricareau" title="Traitement d'eau Québec par Bricareau" />
                                            <span className="absolute top-4 left-4 bg-blue-600 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">Après</span>
                                        </div>
                                        <p className="text-xs font-bold text-blue-600 text-center">Eau 100% limpide et inodore</p>
                                    </div>
                                    {/* Connector Arrow */}
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg border border-slate-100 flex items-center justify-center z-10 text-blue-600">
                                        <ChevronRight className="w-6 h-6" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="mt-20 text-center">
                            <ProMaxButton 
                                asChild
                                variant="primary"
                            >
                                <a href="/consultation">Obtenir ma solution sur mesure</a>
                            </ProMaxButton>
                        </div>
                    </div>
                </section>

                {/* 4. Why choose our water filtration system? Section - Redesigned with Pro-Max Editorial Flair */}
                <section className="py-32 bg-[#f8fafc] relative overflow-hidden">
                    {/* Background Texture */}
                    <div className="absolute inset-0 opacity-40 pointer-events-none">
                        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
                        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
                    </div>

                    <div className="container mx-auto px-6 relative z-10">
                        <div className="max-w-4xl mx-auto text-center mb-32">
                            <span className="inline-block px-4 py-1.5 bg-[#18448F] text-white rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-8">
                                L'EXCELLENCE BRICAREAU
                            </span>
                            <h2 className="mb-12 heading-pro-max text-center">
                                <span className="font-bold not-italic text-[#18448F] block">Pourquoi choisir nos</span>
                                <span className="font-bold text-[#18448F] block text-center">systèmes de filtration d'eau ?</span>
                            </h2>
                             <p className="body-pro-max text-slate-500 text-center mx-auto">
                                 Plus qu'un simple système de filtration, c'est une protection avancée pour votre santé et un confort durable pour toute votre famille.
                             </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
                            {/* Card Stack Side (Left - Interactive) */}
                            <div className="lg:col-span-7 relative h-[450px] md:h-[600px] lg:h-[700px] flex items-center justify-center mt-24 lg:mt-0 mb-16 lg:mb-0 -mx-6 lg:mx-0">
                                <div className="relative w-full lg:max-w-[450px] aspect-square md:aspect-video lg:aspect-[3/4] group">

                                    {cardStack.map((cardIdx, position) => {
                                        const card = cardData[cardIdx];
                                        return (
                                            <div 
                                                key={card.id}
                                                onClick={() => handleCardClick(card.id)}
                                                className={`absolute inset-0 bg-white rounded-none lg:rounded-[2.5rem] p-4 border border-slate-100 lg:border-slate-100 cursor-pointer transition-all duration-700 ease-out ${positionStyles[position]}`}
                                            >
                                                <div className="w-full h-full rounded-none lg:rounded-[1.8rem] overflow-hidden relative group">
                                                    <img src={card.img} alt={card.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                                                        <p className="text-white font-bold text-xl">{card.title}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Text Content Side (Vertical Column) */}
                            <div className="lg:col-span-5 space-y-16">
                                {cardData.map((feature, idx) => {
                                    const isTop = cardStack[3] === feature.id; // Check if this feature's card is on top (index 3 now)
                                    return (
                                        <div 
                                            key={idx} 
                                            className={`group transition-all duration-500 cursor-pointer ${isTop ? 'scale-110' : 'opacity-60 scale-95 hover:opacity-100'}`}
                                            onClick={() => handleCardClick(feature.id)}
                                        >
                                            <div className="flex items-start gap-8">
                                                <div className="pt-2">
                                                    <div className={`w-2.5 h-2.5 rounded-full bg-[#18448F] shadow-[0_0_15px_rgba(61,106,171,0.4)] ${isTop ? 'scale-150 animate-pulse' : 'scale-100'} transition-all`} />
                                                </div>
                                                <div className="space-y-4">
                                                    <h3 className={`text-2xl font-bold transition-all duration-500 ${isTop ? 'text-[#18448F]' : 'text-[#18448F] group-hover:text-blue-400'}`}>
                                                        {feature.title}
                                                    </h3>
                                                     <p className="body-pro-max text-slate-500 text-justify max-w-md">
                                                         {feature.desc}
                                                     </p>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. Comparison Table Section */}
                <section className="py-24 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="text-left mb-16">
                            <h2 className="mb-8 heading-pro-max text-left">
                                <span className="italic font-light text-[#18448F] block">Comparez nos filtres d'eau</span>
                                <span className="font-bold text-[#18448F] block">spécialisés</span>
                            </h2>
                            <div className="w-24 h-1 bg-[#18448F]"></div>
                        </div>
                        <div className="overflow-x-visible relative">
                            {/* Navigation Arrows for Mobile/Tablet */}
                            <div className="lg:hidden flex items-center justify-end gap-3 mb-8 relative z-30">
                                <Button 
                                    size="icon" 
                                    variant="outline" 
                                    className="w-10 h-10 rounded-full border-blue-100 hover:bg-[#18448F] hover:text-white transition-all shadow-sm"
                                    onClick={() => setActiveCol(Math.max(0, activeCol - 1))}
                                    disabled={activeCol === 0}
                                >
                                    <ChevronLeft className="h-5 w-5" />
                                </Button>
                                <div className="flex gap-1.5 px-2">
                                    {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                                        <div key={i} className={`h-1.5 rounded-full transition-all duration-300 ${i === activeCol ? 'w-6 bg-[#18448F]' : 'w-1.5 bg-blue-100'}`} />
                                    ))}
                                </div>
                                <Button 
                                    size="icon" 
                                    variant="outline" 
                                    className="w-10 h-10 rounded-full border-blue-100 hover:bg-[#18448F] hover:text-white transition-all shadow-sm"
                                    onClick={() => setActiveCol(Math.min(8, activeCol + 1))}
                                    disabled={activeCol === 8}
                                >
                                    <ChevronRight className="h-5 w-5" />
                                </Button>
                            </div>

                            <div className="overflow-x-auto lg:overflow-x-visible no-scrollbar pb-8">
                                <table className="w-full border-collapse bg-white rounded-3xl overflow-hidden shadow-2xl relative">
                                    <thead>
                                        <tr className="bg-slate-50 relative z-20">
                                            <th className="p-6 md:p-10 text-left text-blue-900/40 font-black uppercase tracking-widest text-[10px] sticky left-0 bg-slate-50 z-30 border-r border-slate-100 drop-shadow-md lg:drop-shadow-none min-w-[160px] md:min-w-[200px]">
                                                Modèles
                                            </th>
                                            {[
                                                { key: "Vortex", name: "Vortex", badge: null },
                                                { key: "ZenPH", name: "Zen-pH", badge: null },
                                                { key: "ChlorStop", name: "ChlorStop", badge: null },
                                                { key: "IronShield", name: "Iron Shield", badge: "Populaire" },
                                                { key: "OxyPure", name: "Oxy-pure", badge: null },
                                                { key: "SulphurShield", name: "Sulphur Shield", badge: null },
                                                { key: "ZeroAs", name: "Zéro-As", badge: null },
                                                { key: "TannEx", name: "Tann-Ex", badge: null },
                                                { key: "SerenitePure", name: "Sérénité Pure", badge: "Premium" }
                                            ].map((m, i) => (
                                                <th 
                                                    key={m.key} 
                                                    className={cn(
                                                        "p-4 md:p-6 text-center transition-all duration-500 min-w-[140px]",
                                                        i === activeCol ? "table-cell" : "hidden lg:table-cell"
                                                    )}
                                                >
                                                    <div className="flex flex-col items-center">
                                                        {m.badge && (
                                                            <span className="absolute top-2 right-2 bg-blue-600 text-white text-[7px] font-black px-2 py-0.5 rounded-full uppercase tracking-tighter whitespace-nowrap shadow-lg shadow-blue-200/50">
                                                                {m.badge}
                                                            </span>
                                                        )}
                                                        <div className="text-[10px] md:text-[12px] font-bold text-[#18448F] leading-tight uppercase tracking-wider min-h-[32px] flex items-center justify-center px-1">
                                                            {m.name}
                                                        </div>
                                                    </div>
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100 relative z-10">
                                        {comparisonData.map((row, i) => (
                                            <tr key={i} className="hover:bg-blue-50/30 transition-colors group">
                                                <td className="p-6 md:p-8 font-bold text-[#18448F] bg-white sticky left-0 z-30 border-r border-slate-50 drop-shadow-sm lg:drop-shadow-none text-[12px] md:text-sm italic group-hover:text-[#18448F] transition-colors max-w-[200px]">
                                                    {row.feature}
                                                </td>
                                                {["Vortex", "ZenPH", "ChlorStop", "IronShield", "OxyPure", "SulphurShield", "ZeroAs", "TannEx", "SerenitePure"].map((key, idx) => (
                                                    <td 
                                                        key={key} 
                                                        className={cn(
                                                            "p-6 md:p-8 text-center text-[13px] md:text-sm font-light leading-relaxed text-slate-600 transition-all duration-500",
                                                            idx === activeCol ? "table-cell" : "hidden lg:table-cell"
                                                        )}
                                                    >
                                                        {(() => {
                                                            const val = row[key as keyof typeof row];
                                                            if (typeof val === 'string') return <span className="text-[#18448F] font-bold bg-blue-50/50 px-3 py-1 rounded-full text-[9px] md:text-[10px] uppercase shadow-sm whitespace-nowrap">{val}</span>;
                                                            if (val === true) return <CheckCircle2 className="h-5 w-5 md:h-6 md:w-6 text-[#18448F] mx-auto" />;
                                                            return <div className="h-5 w-5 md:h-6 md:w-6 mx-auto opacity-10"><X className="h-5 w-5 md:h-6 md:w-6" /></div>;
                                                        })()}
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

                {/* 6. Water Testing Section (Redesigned for Mobile) */}
                <section className="relative lg:h-[800px] flex flex-col lg:flex-row items-stretch overflow-hidden bg-white">
                    {/* Mobile Image */}
                    <div className="lg:hidden w-full h-auto relative bg-slate-50">
                        <img
                            src={waterTestingImg1}
                            className="w-full h-auto object-contain"
                         alt="Analyse d'eau à domicile pour détecter le calcaire et le chlore - Service Bricareau" title="Expert en eau par Bricareau" />
                    </div>

                    {/* Desktop Background */}
                    <div className="hidden lg:block absolute inset-0 z-0">
                        <img
                            src={waterTestingImg1}
                            className="w-full h-full object-cover"
                         alt="Analyse d'eau de puits en laboratoire" title="Systèmes d'eau sur mesure par Bricareau" />
                        <div className="absolute inset-0 bg-blue-900/40 lg:bg-gradient-to-r lg:from-blue-900/90 lg:to-[#18448F]/20 mix-blend-multiply" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-white via-white/10 to-transparent" />
                    </div>

                    <div className="container mx-auto px-4 relative z-10 flex items-center py-12 lg:py-0">
                        <div className="max-w-2xl text-slate-900 lg:text-white">
                            <span className="text-[#18448F] lg:text-[#18448F] text-xs font-black uppercase tracking-[0.3em] mb-8 block">
                                Contrôle de la Qualité D'EAU
                            </span>
                             <h2 className="mb-8 heading-pro-max">
                                <span className="italic font-light text-[#18448F] lg:text-white block">L'excellence commence</span>
                                <span className="text-[#18448F] lg:text-white italic font-bold font-serif">par une eau parfaite.</span>
                            </h2>
                            <p className="font-light text-black lg:text-white/95 mb-8 max-w-xl text-justify lg:text-left">
                                Le luxe, c'est de ne pas avoir à se soucier de la qualité de ce que l'on consomme. Offrez-vous la sérénité d'une eau analysée par des experts, pour une maison où tout brille, sans effort et sans compromis.
                            </p>
                            <div className="flex gap-4">
                                <ProMaxButton asChild variant="primary" offsetColor="border-white" className="w-full sm:w-auto !bg-[#18448F] !text-white hover:!bg-white hover:!text-[#18448F]">
                                    <a href="/Analyses-et-Tests-d-eau">Demander une analyse d'eau</a>
                                </ProMaxButton>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 7. Testimonials Grid Section */}
                <TestimonialsSection
                    filterProduct="/filtration"
                    title={
                        <h2 className="mb-8 heading-pro-max text-center">
                            <span className="font-bold not-italic text-[#18448F] block text-center">Buvez l'eau de votre robinet <span className="text-[#8CC63F]">sans crainte</span></span>
                            <span className="font-bold text-[#18448F] block text-center">Ils ont fait le saut avec nous.</span>
                        </h2>
                    }
                />

                {/* 8. Associated Products Section */}
                <section className="bg-white py-24">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="mb-8 heading-pro-max text-center">
                                <span className="font-bold text-[#18448F] block text-center">Découvrir les produits associés</span>
                            </h2>
                             <p className="body-pro-max text-gray-500 text-center mx-auto">
                                 Optimisez votre expérience de traitement d'eau avec nos solutions complémentaires.
                             </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    name: "Adoucisseurs d'eau",
                                    desc: "Éliminez le calcaire pour une peau douce, un linge éclatant et une protection durable de vos installations.",
                                    img: waterSoftenerImg,
                                    link: "/adoucisseurs-d-eau-residentiels-pour-une-eau-sans-calcaire"
                                },
                                {
                                    name: "Systèmes de désinfection UV",
                                    desc: "Utilisés pour la stérilisation contre les bactéries, les virus, les coliformes, l'E.Coli, le Cryptosporidium,...",
                                    img: uvSystemImg2,
                                    link: "/systemes-de-desinfection-UV"
                                },
                                {
                                    name: "Stations d'eau potable",
                                    desc: "Une eau de qualité minérale directement à votre évier, pour une hydratation pure et sans déchets plastiques.",
                                    img: drinkingWaterImg,
                                    link: "/Stations-d-eau-potables-sous-l-evier-de-la-cuisine"
                                }

                            ].map((prod, i) => (
                                <div
                                    key={i}
                                    className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full cursor-pointer"
                                    onClick={() => window.location.href = prod.link}
                                >
                                    <div className="relative h-80 overflow-hidden bg-slate-50 flex items-center justify-center p-12">
                                        <img
                                            src={prod.img}
                                            alt={`${prod.name} - Solution Bricareau pour une eau pure et sans calcaire partout`}
                                            className="max-h-full object-contain group-hover:scale-110 transition-transform duration-700 mix-blend-multiply"
                                        />
                                    </div>
                                    <div className="p-8 space-y-4 flex flex-col flex-grow border-t-2 border-transparent group-hover:border-[#18448F] transition-colors">
                                        <h3 className="card-title text-center group-hover:text-[#18448F] transition-colors duration-500">
                                            {prod.name}
                                        </h3>
                                         <p className="body-pro-max text-slate-500 text-justify">
                                             {prod.desc}
                                         </p>
                                        <div
                                            className="inline-flex items-center gap-2 text-[#18448F] font-bold text-xs tracking-widest uppercase mt-4 group-hover:underline self-end"
                                            style={{}}
                                        >
                                            <span></span>
                                            <ArrowRight className="h-6 w-6 transform group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 11. PREMIUM CTA SECTION - REBUILT FOR IMPACT */}
                <section className="relative py-32 flex items-center overflow-hidden bg-[#18448F]">
                  {/* Animated background elements */}
                  <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#18448F]/20 to-transparent skew-x-12 translate-x-1/4" />
                  <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-cyan-400/10 to-transparent -skew-x-12 -translate-x-1/4" />
                  
                  {/* Background Image with Overlay */}
                  <div className="absolute inset-0 z-0 opacity-40">
                    <img
                      src={crystalClearWaterImg}
                      className="w-full h-full object-cover grayscale brightness-150"
                     alt="Expert Bricareau analysant vos options de filtration" title="Systèmes d'eau sur mesure par Bricareau" />
                    <div className="absolute inset-0 bg-[#18448F]/10 backdrop-blur-sm" />
                  </div>

                  <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-5xl mx-auto text-center space-y-12">
                      <div className="space-y-6">
                        <span className="inline-block px-4 py-1.5 bg-white text-[#18448F] rounded-full text-[10px] font-black uppercase tracking-[0.4em]">
                          L'EXCELLENCE EN FILTRATION
                        </span>
                        <h2 className="font-light block leading-tight lg:leading-[52px] text-white">
                          Passez d'une eau problématique <br />
                          <span className="text-white italic font-bold font-serif">à une source de pureté.</span>
                        </h2>
                        <p className="text-lg md:text-xl text-blue-100/80 max-w-2xl mx-auto font-light leading-relaxed">
                          Prêt à éliminer définitivement le fer, le soufre ou le chlore de votre foyer ? Profiter de l'accompagnement d'un spécialiste pour choisir l'équipement parfaitement adapté à votre réalité. Demander votre consultation gratuite dès aujourd'hui et redécouvrez le plaisir d'une eau saine à chaque robinet.                        </p>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-8 justify-center items-center pt-4">
                        <ProMaxButton asChild variant="primary" offsetColor="border-white" className="w-full sm:w-auto !bg-[#18448F] !text-white hover:!bg-white hover:!text-[#18448F]">
                          <a href="tel:18552649328" className="flex items-center gap-3">
                            <Phone className="h-5 w-5 animate-bounce" />
                            Parler à un expert
                          </a>
                        </ProMaxButton>
                        <ProMaxButton asChild variant="outline-white" className="w-full sm:w-auto">
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


                {/* 10. FAQ Section */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="text-left mb-16">
                            <h2 className="mb-8 heading-pro-max text-left">
                                <span className="italic font-light text-[#18448F] block">Pour vous éclairer</span>
                                <span className="font-bold text-[#18448F] block">Questions fréquentes</span>
                            </h2>
                            <div className="w-24 h-1 bg-[#18448F]"></div>
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
                                                        <div className="mt-12 flex justify-center">
                                                        <ProMaxButton
                                                            onClick={() => setShowAllFaqs(!showAllFaqs)}
                                                        >
                                                            {showAllFaqs ? "Voir moins de questions" : "Voir toutes les questions"}
                                                        </ProMaxButton>
                                                        </div>
                        </div>
                    </div>
                </section>

                {/* 11. Resources Section */}
                <section className="py-24 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="text-left mb-16">
                            <h2 className="mb-8 heading-pro-max text-left">
                                <span className="font-bold text-[#18448F] block text-left">Ressources</span>
                            </h2>

                            <div className="w-24 h-1 bg-[#18448F]"></div>
                        </div>
                        <div 
                            ref={resourcesRef}
                            onScroll={handleScrollRessources}
                            className="flex lg:grid lg:grid-cols-3 gap-8 overflow-x-auto lg:overflow-x-visible no-scrollbar snap-x snap-mandatory pb-12 px-1 lg:px-0 scroll-smooth"
                        >
                            {resources.map((art, i) => (
                                <div
                                    key={i}
                                    className="min-w-[70vw] md:min-w-[45vw] lg:min-w-0 snap-center group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full cursor-pointer"
                                    onClick={() => navigate(art.path)}
                                >
                                    <div className="h-56 overflow-hidden">
                                        <img
                                            src={art.img}
                                            alt={`${art.title} - Guide expert en traitement d'eau Bricareau`}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                    </div>
                                    <div className="p-8 text-left border-t-2 border-transparent group-hover:border-[#18448F] transition-colors flex flex-col flex-grow">
                                        <h4 className="mb-4 group-hover:text-[#18448F] transition-colors tracking-tight font-medium text-base leading-6 text-[#0F1729]">{art.title}</h4>
                                        <div className="mt-auto">
                                            <NavLink
                                                to={art.path}
                                                className="text-[#18448F] font-bold flex items-center gap-2 group-hover:underline text-sm"
                                            >
                                                Lire <ChevronRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
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
                                className="w-12 h-12 rounded-full bg-[#18448F] text-white hover:bg-[#18448F]/90 transition-all shadow-md shadow-blue-100"
                                onClick={() => scrollResources('left')}
                            >
                                <ChevronLeft className="h-6 w-6" />
                            </Button>
                            <Button 
                                size="icon" 
                                className="w-12 h-12 rounded-full bg-[#18448F] text-white hover:bg-[#18448F]/90 transition-all shadow-md shadow-blue-100"
                                onClick={() => scrollResources('right')}
                            >
                                <ChevronRight className="h-6 w-6" />
                            </Button>

                            <div className="absolute right-2 text-sm font-black text-[#18448F] bg-blue-50/50 px-4 py-2 rounded-full border border-blue-100/50">
                                <span className="text-[#18448F]">{resourceIndex}</span>
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

export default B;
