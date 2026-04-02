import React, { useEffect, useState } from 'react';
import { cn } from "@/lib/utils";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import GlobalBreadcrumbs from "@/components/GlobalBreadcrumbs";
import ExpertAvatars from "@/components/ExpertAvatars";
import ConsultationFormSection from "@/components/ConsultationFormSection";
import Footer from "@/components/Footer";
import TestimonialsSection from "@/components/TestimonialsSection";
import { Button } from "@/components/ui/button";
import heroFilter from "@/assets/person-is-holding-a-glass-of-water-from-a-faucet.jpeg";
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
} from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { useNavigate } from "react-router-dom";
import bathroomImg from "@/assets/premium_bathroom_protection_1774493901305.png";
import specializedFiltersImg from "@/assets/Filtres d'eau spécialisés.webp";
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
import mauvaisGoutThumb from "@/assets/blog3-1.jpg";

const products = [
    { name: "Filtre d'eau Vortex", desc: "Spécialisé pour l'eau contenant des sédiments.", image: specializedFiltersImg },
    { name: "Filtre d'eau Zen-pH", desc: "Spécialisé pour neutraliser l'eau acide.", image: specializedFiltersImg },
    { name: "Filtre d'eau ChlorStop", desc: "Spécialisé pour l'eau contenant du chlore.", image: specializedFiltersImg },
    { name: "Filtre d'eau Iron Shield", desc: "Spécialisé pour l'eau contenant du fer.", image: specializedFiltersImg },
    { name: "Filtre d'eau Oxy-pure", desc: "Spécialisé pour l'eau contenant du fer et du manganèse.", image: specializedFiltersImg },
    { name: "Filtre d'eau Sulphur Shield", desc: "Spécialisé pour l'eau contenant du sulfure d'hydrogène.", image: specializedFiltersImg },
    { name: "Filtre d'eau Zéro-As", desc: "Spécialisé pour l'eau contenant de l'arsenic.", image: specializedFiltersImg },
    { name: "Filtre d'eau Tann-Ex", desc: "Spécialisé pour l'eau contenant du tanin.", image: waterSoftenerImg },
    { name: "Système d'osmose inverse Essentiel", desc: "Spécialisé pour l'eau contenant beaucoup de sels dissous.", image: drinkingWaterImg },
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

const FiltresPuits = () => {
    const navigate = useNavigate();
    const [showAllFaqs, setShowAllFaqs] = React.useState(false);
    const [activeCol, setActiveCol] = React.useState(0);
    const [resourceIndex, setResourceIndex] = React.useState(1);
    const resourcesRef = React.useRef<HTMLDivElement>(null);

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
        document.title = "Filtres d'eau de puits | Traitement Fer, Soufre & Manganèse | Bricareau";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Éliminez les polluants de votre eau de puits : fer, odeurs de soufre, manganèse et pH acide. Solutions de filtration résidentielle expertes au Canada par Bricareau.");
        }

        // OG Tags
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) ogTitle.setAttribute("content", "Filtres d'eau de puits spécialisés - Pureté & Protection | Bricareau");
        const ogDesc = document.querySelector('meta[property="og:description"]');
        if (ogDesc) ogDesc.setAttribute("content", "Solutions avancées pour traiter le fer, le soufre et les impuretés de votre eau de puits. Protégez votre santé et votre maison.");
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
        }, 5000);
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
                    image={heroFilter}
                    highlightedTitle="Filtre d'eau de puits,"
                    mainTitle="une eau filtrée sans compromis."
                    subtitle="Nos solutions spécialisées traitent efficacement le fer, le soufre (odeurs d'œufs pourris), le manganèse et l'acidité. Protégez votre plomberie et profitez d'une eau saine et limpide partout dans votre maison."
                    ctaText="Explorez nos filtres d'eau"
                    ctaLink="#specialized-filters"
                    showPhone={true}
                    showBreadcrumbs={true}
                    singleLineTitle={true}
                />

                {/* 2. Bridge Section */}
                <section id="puits-adn" className="bg-white overflow-hidden border-y border-slate-100">
                    <div className="flex flex-col lg:flex-row items-stretch min-h-[600px] lg:min-h-[800px]">
                        
                        {/* Left Side: Content - Aligned with logo/grid */}
                        <div className="w-full lg:w-1/2 flex items-center bg-slate-50/5 justify-start lg:justify-end">
                            <div className="w-full max-w-[750px] px-6 sm:px-12 lg:px-16 xl:px-24 py-24 lg:py-32">
                                <div className="space-y-12">
                                    <div className="space-y-6">
                                        <h2 className="mb-8 heading-pro-max text-left text-[#1e3a8a]">
                                            <span className="italic font-light block">Votre puits possède</span>
                                            <span className="font-bold block">son propre ADN.</span>
                                        </h2>
                                        
                                        <div className="space-y-8">
                                            <p className="text-lg lg:text-xl italic text-slate-700 font-light leading-relaxed">
                                                "Une filtration d'eau classique est une réponse générique à un problème unique. Nous concevons la solution en respectant l'ADN de votre eau."
                                            </p>
                                            
                                            <p className="text-base lg:text-lg text-slate-600 font-light leading-relaxed text-justify">
                                                L'eau de votre puits est le fruit d'une géologie complexe. Là où d'autres voient simplement du fer ou du calcaire, Bricareau analyse la synergie des minéraux. Notre approche bridge l'écart entre une eau brute, parfois agressive, et une ressource précieuse, revitalisante et protectrice pour votre foyer. 
                                            </p>

                                            <div className="pt-4 lg:pt-6 opacity-90">
                                                <p className="text-lg lg:text-xl text-blue-600/90 font-light italic" style={{ fontFamily: '"Cormorant Garamond", serif', letterSpacing: '-0.01em' }}>
                                                    "L'eau qui court sur la pierre s'oublie, l'eau qui passe par le filtre se purifie."
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Visual Image - Edge to Edge */}
                        <div className="w-full lg:w-1/2 relative min-h-[450px] lg:min-h-full border-l border-slate-100 transition-all duration-1000">
                            <img 
                                src={process1} 
                                alt="Analyse d'eau de puits Bricareau" 
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000"
                            />
                            <div className="absolute inset-0 bg-blue-900/5" />
                            
                            {/* Feature Badge - Refined Inside positioning */}
                            <div className="absolute top-10 left-10 bg-white shadow-2xl p-8 rounded-[2.5rem] border border-slate-50 space-y-3 max-w-[220px] hidden xl:block animate-float">
                                <span className="font-bold text-[10px] uppercase text-blue-600 tracking-widest">Expertise Puits</span>
                                <p className="text-sm font-light text-slate-500 leading-snug">
                                    Traitement ciblé basé sur <span className="font-bold text-slate-900">l'analyse de votre eau.</span> 
                                </p>
                            </div>
                        </div>

                    </div>
                </section>

                {/* 2.5. Symptom Diagnostic Grid */}
                <section className="py-24 bg-white relative overflow-hidden">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
                                DIAGNOSTIC AUTOMATIQUE
                            </span>
                            <h2 className="heading-pro-max">
                                <span className="italic font-light text-[#2563eb] block">Quel problème d'eau</span>
                                <span className="font-bold text-[#1e3a8a] block text-center">de puits vivez-vous au quotidien ?</span>
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { 
                                    problem: "Odeur d'œufs pourris", 
                                    cause: "Gaz sulfure d'hydrogène", 
                                    solution: "Sulphur Shield",
                                    color: "bg-amber-500",
                                    icon: "🌀",
                                    img: rottenEggsThumb
                                },
                                { 
                                    problem: "Taches de Rouille", 
                                    cause: "Excès de fer ferrique/ferreux", 
                                    solution: "Iron Shield",
                                    color: "bg-orange-500",
                                    icon: "💧",
                                    img: rouilleThumbUpdated
                                },
                                { 
                                    problem: "Sable & Sédiments", 
                                    cause: "Eaux turbides ou filtrage incomplet", 
                                    solution: "Vortex Filtration",
                                    color: "bg-slate-400",
                                    icon: "🌪️",
                                    img: turbideWaterThumb
                                },
                                { 
                                    problem: "Eau Acide (pH bas)", 
                                    cause: "Corrosion de la plomberie (cuivre)", 
                                    solution: "Zen-pH Neutralizer",
                                    color: "bg-blue-400",
                                    icon: "🧪",
                                    img: corrosiveWaterThumb
                                },
                                { 
                                    problem: "Taches Noires", 
                                    cause: "Présence de Manganèse", 
                                    solution: "Oxy-pure Series",
                                    color: "bg-stone-900",
                                    icon: "⚫",
                                    img: mauvaisGoutThumb
                                },
                                { 
                                    problem: "Eau de thé / Colorée", 
                                    cause: "Tanins d'origine organique", 
                                    solution: "Tann-Ex System",
                                    color: "bg-yellow-700",
                                    icon: "☕",
                                    img: taninWaterThumb
                                }
                            ].map((s, i) => (
                                <div 
                                    key={i} 
                                    className="group relative h-[340px] rounded-[3rem] overflow-hidden border border-white bg-white/40 backdrop-blur-xl shadow-sm cursor-pointer transition-all duration-700 hover:shadow-2xl hover:shadow-blue-200/50 hover:border-blue-200 hover:-translate-y-2"
                                    onClick={() => navigate("/consultation")}
                                >
                                    {/* Background Image with Overlay */}
                                    <div className="absolute inset-0 z-0">
                                        <img 
                                            src={s.img} 
                                            alt={s.problem} 
                                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-30 group-hover:opacity-50"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-br from-white via-white/80 to-transparent" />
                                    </div>

                                    <div className="relative z-10 inset-0 p-10 h-full flex flex-col justify-between">
                                        <div className="space-y-4">
                                            <div className="flex items-center gap-3">
                                                <div className={`w-3 h-3 rounded-full ${s.color} shadow-lg`} />
                                                <span className="text-[10px] font-black uppercase tracking-wider text-slate-500 group-hover:text-blue-600 transition-colors">
                                                    Cause : {s.cause}
                                                </span>
                                            </div>
                                            <h3 className="text-3xl font-bold text-[#1e3a8a] leading-[1.1] transition-all duration-500 group-hover:translate-x-2">
                                                {s.problem}
                                            </h3>
                                        </div>

                                        <div className="space-y-4">
                                            <div className="h-px w-12 bg-blue-200 group-hover:w-full transition-all duration-700" />
                                            <div className="text-xs font-light text-slate-600 group-hover:text-blue-800 transition-all italic">
                                                Solution recommandée : <span className="font-bold border-b border-transparent group-hover:border-blue-600">{s.solution}</span>
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

                        <div className="mt-20 p-8 rounded-[2.5rem] bg-indigo-950 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl animate-in fade-in slide-in-from-bottom-8">
                            <div className="flex items-center gap-6">
                                <div className="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-xl shadow-blue-500/20">
                                    <CheckCircle2 className="w-8 h-8" />
                                </div>
                                <div className="text-left">
                                    <h4 className="text-white font-bold text-xl">Vous ne savez pas quel filtre choisir ?</h4>
                                    <p className="text-indigo-200/60 font-light text-sm">Laissez nos experts d'eau faire un diagnostic de votre eau gratuitement.</p>
                                </div>
                            </div>
                            <Button asChild className="h-14 px-8 rounded-full bg-white text-indigo-950 hover:bg-blue-50 font-black">
                                <a href="/consultation">Démarrer le diagnostic gratuit</a>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* 3. Product Grid Section */}
                <section id="specialized-filters" className="py-24 bg-gray-50 scroll-mt-20">
                    <div className="container mx-auto px-6">
                        <div className="text-left mb-16">
                            <h2 className="mb-8 heading-pro-max text-left">
                                <span className="italic font-light text-[#2563eb] block text-left">Nos filtres d'eau</span>
                                <span className="font-bold text-[#1e3a8a] block text-left">spécialisés - Eau de puits</span>
                            </h2>
                            <div className="w-24 h-1 bg-blue-600"></div>
                            <p className="body-pro-max mt-8 text-justify w-full">
                                Découvrez notre gamme complète de filtres spécialisés, conçus pour répondre aux défis uniques des puits privés artésiens ou de surface. Que vous fassiez face à des taches de fer tenaces, des odeurs de soufre incommodantes, une eau acide corrosive ou la présence de contaminants invisibles comme l'arsenic, nos systèmes offrent une solution ciblée et performante. Chaque unité est dotée d'une technologie de pointe pour assurer une filtration maximale tout en préservant l'intégrité de votre plomberie et de vos appareils électroménagers. En investissant dans l'une de nos solutions Vortex, Iron Shield, Zen-pH, ou autres, vous choisissez une tranquillité d'esprit durable et une qualité d'eau irréprochable pour toute votre famille. Nos experts vous accompagnent dans le diagnostic et l'installation pour garantir que chaque goutte d'eau qui coule de votre robinet soit pure, sûre et limpide.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {products.map((p, i) => (
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
                                    <div className="p-8 space-y-4 flex flex-col flex-grow border-t-2 border-transparent group-hover:border-blue-600 transition-colors">
                                        <h3 className="card-title text-center group-hover:text-blue-600 transition-colors duration-500">
                                            {p.name}
                                        </h3>
                                         <p className="body-pro-max text-slate-600 text-justify">
                                             {p.desc}
                                         </p>
                                        <div
                                            className="inline-flex items-center gap-2 text-blue-600 font-bold text-xs tracking-widest uppercase mt-4 group-hover:underline self-end"
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

                {/* 4. Why choose our water filtration system? Section - Redesigned with Pro-Max Editorial Flair */}
                <section className="py-32 bg-[#f8fafc] relative overflow-hidden">
                    {/* Background Texture */}
                    <div className="absolute inset-0 opacity-40 pointer-events-none">
                        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
                        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
                    </div>

                    <div className="container mx-auto px-6 relative z-10">
                        <div className="max-w-4xl mx-auto text-center mb-32">
                            <span className="inline-block px-4 py-1.5 bg-blue-600/10 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-8">
                                L'EXCELLENCE BRICAREAU
                            </span>
                            <h2 className="mb-12 heading-pro-max text-center">
                                <span className="italic font-light text-[#2563eb] block">Pourquoi choisir nos</span>
                                <span className="font-bold text-[#1e3a8a] block text-center">systèmes de filtration d'eau ?</span>
                            </h2>
                             <p className="body-pro-max text-slate-500 text-center mx-auto">
                                 Plus qu'un simple système de filtration, c'est une protection avancée pour votre santé et un confort durable pour toute votre famille.
                             </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
                            {/* Card Stack Side (Left - Interactive) */}
                            <div className="lg:col-span-7 relative h-[450px] md:h-[600px] lg:h-[700px] flex items-center justify-center mb-16 lg:mb-0 -mx-6 lg:mx-0">
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
                                                    <div className={`w-2.5 h-2.5 rounded-full bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.4)] ${isTop ? 'scale-150 animate-pulse' : 'scale-100'} transition-all`} />
                                                </div>
                                                <div className="space-y-4">
                                                    <h3 className={`text-2xl font-bold transition-all duration-500 ${isTop ? 'text-blue-600' : 'text-[#1e3a8a] group-hover:text-blue-400'}`}>
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
                                <span className="italic font-light text-[#2563eb] block">Comparez nos filtres d'eau</span>
                                <span className="font-bold text-[#1e3a8a] block">spécialisés pour l'eau de puits</span>
                            </h2>
                            <div className="w-24 h-1 bg-blue-600"></div>
                        </div>
                        <div className="overflow-x-visible relative">
                            {/* Navigation Arrows for Mobile/Tablet */}
                            <div className="lg:hidden flex items-center justify-end gap-3 mb-8 relative z-30">
                                <Button 
                                    size="icon" 
                                    variant="outline" 
                                    className="w-10 h-10 rounded-full border-blue-100 hover:bg-blue-600 hover:text-white transition-all shadow-sm"
                                    onClick={() => setActiveCol(Math.max(0, activeCol - 1))}
                                    disabled={activeCol === 0}
                                >
                                    <ChevronLeft className="h-5 w-5" />
                                </Button>
                                <Button 
                                    size="icon" 
                                    variant="outline" 
                                    className="w-10 h-10 rounded-full border-blue-100 hover:bg-blue-600 hover:text-white transition-all shadow-sm"
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
                                                        <div className="text-[10px] md:text-[12px] font-bold text-[#1e3a8a] leading-tight uppercase tracking-wider min-h-[32px] flex items-center justify-center px-1">
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
                                                <td className="p-6 md:p-8 font-bold text-[#1e3a8a] bg-white sticky left-0 z-30 border-r border-slate-50 drop-shadow-sm lg:drop-shadow-none text-[12px] md:text-sm italic group-hover:text-blue-600 transition-colors max-w-[200px]">
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
                                                            if (typeof val === 'string') return <span className="text-blue-600 font-bold bg-blue-50/50 px-3 py-1 rounded-full text-[9px] md:text-[10px] uppercase shadow-sm whitespace-nowrap">{val}</span>;
                                                            if (val === true) return <CheckCircle2 className="h-5 w-5 md:h-6 md:w-6 text-blue-600 mx-auto" />;
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
                            alt="Analyse d'eau à domicile pour détecter le calcaire et le chlore - Service Bricareau"
                            className="w-full h-auto object-contain"
                        />
                    </div>

                    {/* Desktop Background */}
                    <div className="hidden lg:block absolute inset-0 z-0">
                        <img
                            src={waterTestingImg1}
                            alt="Analyse d'eau de puits en laboratoire"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-blue-900/40 lg:bg-gradient-to-r lg:from-blue-900/90 lg:to-blue-600/20 mix-blend-multiply" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-white via-white/10 to-transparent" />
                    </div>

                    <div className="container mx-auto px-4 relative z-10 flex items-center py-12 lg:py-0">
                        <div className="max-w-2xl text-slate-900 lg:text-white">
                            <span className="text-blue-600 lg:text-blue-600 text-xs font-black uppercase tracking-[0.3em] mb-8 block">
                                Contrôle de la Qualité D'EAU
                            </span>
                             <h2 className="mb-8 heading-pro-max">
                                <span className="italic font-light text-[#1e3a8a] lg:text-white block">L'excellence commence</span>
                                <span className="text-[#1e3a8a] lg:text-white italic font-bold font-serif">par une eau parfaite.</span>
                            </h2>
                            <p className="font-light text-black lg:text-white/95 mb-8 max-w-xl text-left lg:text-justify">
                                Le luxe, c'est de ne pas avoir à se soucier de la qualité de ce que l'on consomme. Offrez-vous la sérénité d'une eau analysée par des experts, pour une maison où tout brille, sans effort et sans compromis.
                            </p>
                            <div className="flex gap-4">
                                <Button asChild>
                                    <a href="/tests-eau">Demandez une analyse d'eau</a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 7. Testimonials Grid Section */}
                <TestimonialsSection
                    filterProduct="/filtration"
                    title={
                        <h2 className="mb-8 heading-pro-max text-center">
                            <span className="italic font-light text-[#2563eb] block text-center">Buvez l'eau de votre puits sans crainte</span>
                            <span className="font-bold text-[#1e3a8a] block text-center">Ils ont fait le saut avec nous.</span>
                        </h2>
                    }
                />

                {/* 8. Associated Products Section */}
                <section className="bg-white py-24">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="mb-8 heading-pro-max text-center">
                                <span className="font-bold text-[#1e3a8a] block text-center">Découvrez les produits associés</span>
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
                                    link: "/adoucisseurs-eau-de-puits"
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
                                    link: "/systeme-de-filtration-deau-potable"
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
                                    <div className="p-8 space-y-4 flex flex-col flex-grow border-t-2 border-transparent group-hover:border-blue-600 transition-colors">
                                        <h3 className="card-title text-center group-hover:text-blue-600 transition-colors duration-500">
                                            {prod.name}
                                        </h3>
                                         <p className="body-pro-max text-slate-500 text-justify">
                                             {prod.desc}
                                         </p>
                                        <div
                                            className="inline-flex items-center gap-2 text-blue-600 font-bold text-xs tracking-widest uppercase mt-4 group-hover:underline self-end"
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
                <section className="relative py-32 flex items-center overflow-hidden bg-[#1e3a8a]">
                  {/* Animated background elements */}
                  <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-600/20 to-transparent skew-x-12 translate-x-1/4" />
                  <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-cyan-400/10 to-transparent -skew-x-12 -translate-x-1/4" />
                  
                  {/* Background Image with Overlay */}
                  <div className="absolute inset-0 z-0 opacity-40">
                    <img
                      src={crystalClearWaterImg}
                      alt="Expert Bricareau analysant vos options de filtration"
                      className="w-full h-full object-cover grayscale brightness-150"
                    />
                    <div className="absolute inset-0 bg-[#1e3a8a]/10 backdrop-blur-sm" />
                  </div>

                  <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-5xl mx-auto text-center space-y-12">
                      <div className="space-y-6">
                        <span className="inline-block px-4 py-1.5 bg-white text-blue-600 rounded-full text-[10px] font-black uppercase tracking-[0.4em]">
                          L'EXCELLENCE EN FILTRATION
                        </span>
                        <h2 className="text-4xl md:text-6xl lg:text-5xl font-light text-white leading-[1.1] tracking-tighter">
                          Passez d'une eau problématique <br />
                          <span className="text-white italic font-bold font-serif">à une source de pureté.</span>
                        </h2>
                        <p className="text-lg md:text-xl text-blue-100/80 max-w-2xl mx-auto font-light leading-relaxed">
                          Prêt à éliminer définitivement le fer, le soufre ou le chlore de votre foyer ? Profitez de l'accompagnement d'un spécialiste pour choisir l'équipement parfaitement adapté à votre réalité. Demandez votre consultation gratuite dès aujourd'hui et redécouvrez le plaisir d'une eau saine à chaque robinet.                        </p>
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


                {/* 10. FAQ Section */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="text-left mb-16">
                            <h2 className="mb-8 heading-pro-max text-left">
                                <span className="italic font-light text-[#2563eb] block">Pour vous éclairer</span>
                                <span className="font-bold text-[#1e3a8a] block">Questions fréquentes</span>
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

                {/* 11. Resources Section */}
                <section className="py-24 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="text-left mb-16">
                            <h2 className="mb-8 heading-pro-max text-left">
                                <span className="font-bold text-[#1e3a8a] block text-left">Ressources</span>
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
                                    <div className="p-8 text-left border-t-2 border-transparent group-hover:border-blue-600 transition-colors flex flex-col flex-grow">
                                        <h4 className="mb-4 group-hover:text-blue-600 transition-colors tracking-tight font-medium text-base leading-6 text-[#0F1729]">{art.title}</h4>
                                        <div className="mt-auto">
                                            <NavLink
                                                to={art.path}
                                                className="text-blue-600 font-bold flex items-center gap-2 group-hover:underline text-sm"
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
                                className="w-12 h-12 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-all shadow-md shadow-blue-100"
                                onClick={() => scrollResources('left')}
                            >
                                <ChevronLeft className="h-6 w-6" />
                            </Button>
                            <Button 
                                size="icon" 
                                className="w-12 h-12 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-all shadow-md shadow-blue-100"
                                onClick={() => scrollResources('right')}
                            >
                                <ChevronRight className="h-6 w-6" />
                            </Button>

                            <div className="absolute right-2 text-sm font-black text-[#1e3a8a] bg-blue-50/50 px-4 py-2 rounded-full border border-blue-100/50">
                                <span className="text-blue-600">{resourceIndex}</span>
                                <span className="mx-1 text-slate-300">/</span>
                                <span className="text-slate-400">{resources.length}</span>
                            </div>
                        </div>
                    </div>
                </section>

            </main>

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

            <Footer />
        </div>
    );
};

export default FiltresPuits;
