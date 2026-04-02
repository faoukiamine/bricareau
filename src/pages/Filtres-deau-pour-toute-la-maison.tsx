import Header from "@/components/Header";
import { cn } from "@/lib/utils";
import Hero from "@/components/Hero";
import ExpertAvatars from "@/components/ExpertAvatars";
import GlobalBreadcrumbs from "@/components/GlobalBreadcrumbs";
import Footer from "@/components/Footer";
import TestimonialsSection from "@/components/TestimonialsSection";
import { Button } from "@/components/ui/button";
import heroFilter from "@/assets/12605.jpg";
import FilteredcitywaterImg from "@/assets/2150084031.jpg";
import {
    ArrowRight,
    ChevronRight,
    ChevronLeft,
    CheckCircle2,
    CheckCircle,
    X,
    Phone,
    Sparkles,
} from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import excellenceWaterImg from "@/assets/2943.jpg";
import hardWaterFaucetImg from "@/assets/Hard Water-Faucet.jpg";
import waterzeroodorImg from "@/assets/pexels-vlada-karpovich-6802947.jpg";
import specializedFiltersImg from "@/assets/Filtres d'eau spécialisés.webp";
import crystalClearWaterImg from "@/assets/5846952.jpg";
import installationSoftenerImg from "@/assets/WaterSoftenerInstallation.jpg";
import comfortImg from "@/assets/71luIOvIQuL._AC_SL1500_.jpg";
import wholeHouseprotectionImg from "@/assets/342800.jpg";
import { heroImg as eauVilleFiltreeImg } from "./Blog pages/Pourquoi-meme-leau-de-ville-a-besoin-detre-filtree";
import { heroImg as plombVieillesMaisonsImg } from "./Blog pages/Le-plomb-dans-les-vieilles-maisons-comment-se-proteger";
import { heroImg as filtreSousEvierImg } from "./Blog pages/Filtre-sous-evier-lalternative-simple-aux-pichets-filtrants";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import ConsultationFormSection from "@/components/ConsultationFormSection";


const products = [
    { name: "Filtre d'eau Vortex", desc: "Protection supérieure contre les sédiments, le sable et les particules de rouille.", image: specializedFiltersImg, badge: "Zéro Sédiments", badgeColor: "bg-blue-600" },
    { name: "Filtre d'eau ChlorStop", desc: "Notre solution d'élite pour une eau sans goût ni odeur de chlore (piscine).", image: specializedFiltersImg, badge: "Best-Seller", badgeColor: "bg-emerald-600" },
    { name: "Filtre d'eau Iron Shield", desc: "Élimine efficacement le fer et les taches brunes qui altèrent vos sanitaires.", image: specializedFiltersImg, badge: "Expert Fer", badgeColor: "bg-blue-900" },
];

const reviews = [
    { name: "Robert D.", rating: 5, text: "Bon produit, technicien très professionnel. Je recommande vivement.", date: "Il y a 1 mois" },
    { name: "Sophie T.", rating: 5, text: "Une eau de qualité partout dans la maison. Le service client de Bricareau est top.", date: "Il y a 2 semaines" },
];

const faqItems = [
    {
        q: "Pourquoi installer un filtre d'eau pour toute la maison avec l'eau municipale ?",
        a: "Même si l'eau municipale est traitée, elle peut contenir du chlore, des sous-produits de désinfection, des sédiments et parfois des traces de métaux lourds. Un système de filtration pour toute la maison élimine ces contaminants à la source, protégeant votre santé et vos appareils."
    },
    {
        q: "Comment éliminer le goût et l'odeur de chlore de mon eau municipale ?",
        a: "Le filtre ChlorStop utilise du charbon actif de haute qualité pour éliminer efficacement le chlore et ses sous-produits. Vous obtiendrez une eau au goût frais et naturel à tous vos robinets, sans l'odeur désagréable de piscine."
    },
    {
        q: "Mon eau municipale laisse des dépôts blancs, que faire ?",
        a: "Ces dépôts sont causés par les minéraux dissous (calcium, magnésium). Le filtre Vortex élimine les sédiments et particules, tandis qu'un adoucisseur d'eau traite spécifiquement la dureté pour protéger vos appareils et votre plomberie."
    },
    {
        q: "Les filtres pour eau municipale protègent-ils contre les contaminants émergents ?",
        a: "Oui, nos systèmes de filtration au charbon actif réduisent efficacement les contaminants émergents comme les produits pharmaceutiques, les pesticides et les microplastiques qui peuvent se retrouver dans l'eau municipale."
    },
    {
        q: "Quelle est la différence entre un filtre au point d'entrée et au point d'utilisation ?",
        a: "Un filtre au point d'entrée (toute la maison) traite toute l'eau qui entre dans votre domicile, protégeant tous vos robinets et appareils. Un filtre au point d'utilisation (sous évier) ne traite que l'eau d'un robinet spécifique."
    },
    {
        q: "À quelle fréquence dois-je changer les cartouches de mon filtre ?",
        a: "Pour l'eau municipale, les cartouches de charbon actif se changent généralement tous les 6 à 12 mois selon votre consommation. Les filtres à sédiments peuvent nécessiter un remplacement tous les 3 à 6 mois. Nos systèmes vous alertent automatiquement."
    },
    {
        q: "Un filtre d'eau pour toute la maison réduit-il la pression d'eau ?",
        a: "Nos systèmes sont conçus pour maintenir une pression optimale. Avec un dimensionnement approprié et un entretien régulier, la perte de pression est minime (généralement moins de 5 PSI), imperceptible dans l'usage quotidien."
    },
    {
        q: "Les filtres éliminent-ils les minéraux bénéfiques de l'eau ?",
        a: "Non, nos filtres au charbon actif ciblent spécifiquement le chlore, les composés organiques et les contaminants, tout en préservant les minéraux essentiels comme le calcium et le magnésium qui sont bénéfiques pour la santé."
    },
    {
        q: "Puis-je installer moi-même un système de filtration pour toute la maison ?",
        a: "Bien que certains bricoleurs expérimentés puissent l'installer, nous recommandons une installation professionnelle pour garantir un fonctionnement optimal, éviter les fuites et valider la garantie. Nos techniciens certifiés assurent une installation conforme aux normes."
    },
    {
        q: "Les filtres d'eau municipale nécessitent-ils de l'électricité ?",
        a: "La plupart de nos filtres mécaniques (charbon actif, sédiments) fonctionnent sans électricité, utilisant simplement la pression de l'eau. Seuls certains systèmes avancés avec surveillance électronique ou UV nécessitent une alimentation électrique."
    },
    {
        q: "Comment savoir si mon filtre fonctionne correctement ?",
        a: "Nos systèmes modernes incluent des indicateurs visuels ou électroniques qui surveillent la durée de vie des cartouches et le débit. Vous remarquerez également une amélioration du goût, de l'odeur et de la clarté de votre eau."
    },
    {
        q: "Un filtre d'eau pour toute la maison protège-t-il contre les bactéries ?",
        a: "L'eau municipale est déjà désinfectée. Cependant, si vous souhaitez une protection supplémentaire contre les bactéries, nous recommandons d'ajouter un système UV en complément de votre filtre, offrant une barrière de sécurité ultime."
    },
    {
        q: "Quel est le coût d'entretien annuel d'un système de filtration ?",
        a: "Pour l'eau municipale, comptez entre 150$ et 400$ par an pour le remplacement des cartouches, selon le modèle et votre consommation. C'est un investissement minime comparé aux bénéfices pour votre santé et la protection de vos appareils."
    },
    {
        q: "Les filtres éliminent-ils le fluorure de l'eau municipale ?",
        a: "Les filtres standard au charbon actif réduisent partiellement le fluorure. Pour une élimination complète, un système d'osmose inverse au point d'utilisation est plus efficace. Consultez nos experts pour déterminer la meilleure solution selon vos besoins."
    },
    {
        q: "Quelle garantie offrez-vous sur vos systèmes de filtration ?",
        a: "Bricareau offre une garantie complète : 10 ans sur les réservoirs et composants structurels, 5 ans sur les vannes de contrôle, et 1 an sur les pièces électroniques. Notre service après-vente légendaire assure votre tranquillité d'esprit."
    }
];

interface ComparisonItem {
    feature: string;
    vortex: boolean | string;
    chlorstop: boolean | string;
    ironshield: boolean | string;
}

const comparisonData: ComparisonItem[] = [
    { feature: "Filtration Toute la Maison (Point d'entrée)", vortex: true, chlorstop: true, ironshield: true },
    { feature: "Élimination des sédiments et turbidité", vortex: true, chlorstop: "Partielle", ironshield: true },
    { feature: "Élimination du chlore et des odeurs", vortex: false, chlorstop: true, ironshield: false },
    { feature: "Élimination du fer et manganèse", vortex: false, chlorstop: false, ironshield: true },
    { feature: "Amélioration du goût de l'eau", vortex: "Mineure", chlorstop: true, ironshield: true },
    { feature: "Protection de la plomberie et robinetterie", vortex: true, chlorstop: true, ironshield: true },
    { feature: "Fonctionnement avec électricité", vortex: true, chlorstop: true, ironshield: true },
];

const FiltresTouteMaison = () => {
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
        { title: "Pourquoi l'eau de ville ?", img: eauVilleFiltreeImg, link: "/pourquoi-meme-leau-de-ville-a-besoin-detre-filtree" },
        { title: "Le plomb dans l'eau", img: plombVieillesMaisonsImg, link: "/le-plomb-dans-les-vieilles-maisons-comment-se-proteger" },
        { title: "L'alternative simple aux pichets", img: filtreSousEvierImg, link: "/filtre-sous-evier-lalternative-simple-aux-pichets-filtrants" }
    ];

    const scrollResources = (direction: 'left' | 'right') => {
        if (resourcesRef.current) {
            const scrollAmount = resourcesRef.current.clientWidth * 0.8;
            resourcesRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
        }
    };

    useEffect(() => {
        document.title = "Filtres d'eau pour toute la maison | Filtration Point d'Entrée | Bricareau";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Protégez toute votre plomberie avec nos filtres d'eau pour toute la maison. Solutions efficaces contre le chlore, les sédiments et le fer au Canada.");
        }

        // OG Tags
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) ogTitle.setAttribute("content", "Filtres d'eau pour toute la maison - Protection intégrale | Bricareau");
        const ogDesc = document.querySelector('meta[property="og:description"]');
        if (ogDesc) ogDesc.setAttribute("content", "Une eau filtrée à chaque robinet. Découvrez nos systèmes Vortex, ChlorStop et Iron Shield.");
    }, []);

    return (
        <div className="min-h-screen bg-white text-slate-900 font-sans">
             <Header />
 
             <main>
                <Hero 
                    image={heroFilter}
                    highlightedTitle="Filtre d'eau pour toute la maison,"
                    mainTitle="une protection intégrale."
                    subtitle="Éliminez le chlore, le fer et les sédiments de chaque goutte d'eau qui entre dans votre propriété. Nos systèmes de filtration intégrés protègent votre santé, votre peau et vos appareils électroménagers."
                    ctaText="Explorez nos filtres"
                    ctaLink="#specialized-filters"
                    showPhone={true}
                    showBreadcrumbs={true}
                    singleLineTitle={true}
                />

                {/* 3. Diagnostic Bento Grid - Symptom Logic Modernization */}
                <section className="relative py-32 bg-white overflow-hidden">
                    <div className="container mx-auto px-6 relative z-10">
                        <div className="max-w-4xl mx-auto text-center mb-24">
                            <span className="inline-block px-4 py-1.5 bg-blue-600/10 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-8">
                                L'EAU DE MUNICIPALITÉ DÉCRYPTÉE
                            </span>
                             <h2 className="mb-8 heading-pro-max text-center">
                                <span className="italic font-light text-[#2563eb] block">L'invisible menace sous</span>
                                <span className="font-bold text-[#1e3a8a] block">votre robinet quotidien.</span>
                            </h2>
                            <p className="body-pro-max text-slate-500 text-center mx-auto">
                                Vos sens vous alertent : une odeur de chlore, une peau qui tiraille, ou des dépôts suspects. Identifiez votre symptôme et découvrez le bouclier Bricareau adapté.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                            {[
                                { 
                                    title: "Goût de Chlore", 
                                    benefit: "Pureté de source", 
                                    desc: "Fini l'odeur de 'piscine'. Transformez chaque robinet en une fontaine d'eau fraîche, évitant l'achat de milliers de bouteilles plastiques.",
                                    img: waterzeroodorImg,
                                    badge: "Le Confort Gout",
                                },
                                { 
                                    title: "Peau & Cheveux", 
                                    benefit: "Hydratation Soin", 
                                    desc: "Le chlore et les sédiments dessèchent votre peau et ternissent vos cheveux. Offrez-vous une expérience spa à chaque douche.",
                                    img: comfortImg,
                                    badge: "Bien-être",
                                },
                                { 
                                    title: "Plomberie Saine", 
                                    benefit: "Économie Durable", 
                                    desc: "Les sédiments et le fer créent des micro-abrasions et de la corrosion. Protégez vos tuyauteries et vos lave-vaisselles haut de gamme.",
                                    img: wholeHouseprotectionImg,
                                    badge: "Protection Asset",
                                },
                                { 
                                    title: "Eau Cristalline", 
                                    benefit: "Clarté Visuelle", 
                                    desc: "Éliminez la turbidité et les particules de rouille pour une eau transparente. Idéal pour ceux qui ne tolèrent aucun compromis sur la pureté.",
                                    img: crystalClearWaterImg,
                                    badge: "Pureté Vision",
                                }
                            ].map((item, i) => (
                                <div key={i} className="group relative bg-[#F8FAFC] rounded-[2.5rem] p-4 border border-slate-100/50 hover:bg-white transition-all duration-700 hover:shadow-[0_40px_100px_-20px_rgba(30,58,138,0.1)] overflow-hidden">
                                     {/* Background Image with Parallax-ish Effect */}
                                     <div className="relative h-64 overflow-hidden rounded-[2rem] mb-8">
                                        <img 
                                            src={item.img} 
                                            alt={item.title} 
                                            className="w-full h-full object-cover transition-transform duration-[3000ms] group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        
                                        <div className="absolute top-4 left-4 z-20">
                                            <div className="bg-white/30 backdrop-blur-md px-4 py-1.5 rounded-full flex items-center shadow-sm border border-white/20">
                                                <span className="text-[10px] font-black text-white uppercase tracking-widest">{item.badge}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="px-4 pb-4 space-y-4">
                                        <div className="space-y-1">
                                            <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">{item.benefit}</span>
                                            <h3 className="text-2xl font-bold text-[#1e3a8a] leading-tight group-hover:text-blue-600 transition-colors">
                                                {item.title}
                                            </h3>
                                        </div>
                                        <p className="text-slate-500 text-sm leading-relaxed font-light text-justify">
                                            {item.desc}
                                        </p>
                                        
                                        <button 
                                            onClick={() => document.getElementById('specialized-filters')?.scrollIntoView({ behavior: 'smooth' })}
                                            className="pt-4 flex items-center gap-2 text-blue-600 text-xs font-bold uppercase tracking-widest group-hover:gap-4 transition-all"
                                        >
                                            La Solution <ArrowRight className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 4. Product Grid Section */}
                <section id="specialized-filters" className="py-24 bg-gray-50 scroll-mt-20">
                    <div className="container mx-auto px-6">
                        <div className="text-left mb-16">
                            <h2 className="mb-8 heading-pro-max text-left">
                                <span className="italic font-light text-[#2563eb] block text-left">Nos filtres d'eau</span>
                                <span className="font-bold text-[#1e3a8a] block text-left">spécialisés - Eau municipale</span>
                            </h2>
                            <div className="w-24 h-1 bg-blue-600 mb-8"></div>
                            <p className="body-pro-max mb-8 text-justify">
                                Nos filtres d’eau spécialisés pour toute la maison sont méticuleusement conçus pour offrir une protection robuste et ciblée contre les contaminants spécifiques que l’on retrouve fréquemment dans les réseaux de distribution municipaux. En intégrant des technologies de pointe telles que nos séries Vortex, ChlorStop et Iron Shield, nous garantissons l'élimination efficace des sédiments, du chlore et des métaux lourds qui peuvent altérer le goût, l'odeur et la qualité globale de votre eau quotidienne. Chaque solution est installée au point d’entrée de votre résidence pour assurer une pureté cristalline constante dans tous vos robinets, tout en prolongeant durablement la durée de vie de votre plomberie et de vos précieux électroménagers. Choisir un système Bricareau, c'est opter pour une expertise reconnue qui transforme votre eau municipale en une ressource revitalisante, saine et parfaitement équilibrée pour l'ensemble de votre foyer. Profitez dès aujourd'hui d'une tranquillité d'esprit absolue grâce à une filtration sur-mesure, fiable et performante, répondant aux standards les plus élevés d'excellence et de confort.
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
                                            alt={`${p.name} - Filtre d'eau spécialisé Bricareau pour résidence`}
                                            className="w-full h-full object-contain mix-blend-multiply transition-transform duration-700 group-hover:scale-110"
                                        />
                                    </div>
                                    <div className="p-8 space-y-4 flex flex-col flex-grow border-t-2 border-transparent group-hover:border-blue-600 transition-colors">
                                        <h3
                                            className="card-title group-hover:text-blue-600 transition-colors text-center"
                                        >
                                            {p.name}
                                        </h3>
                                         <p className="body-pro-max text-slate-500 text-justify">
                                             {p.desc}
                                         </p>
                                        <div
                                            className="inline-flex items-center gap-2 text-blue-600 font-bold text-xs tracking-widest uppercase mt-4 group-hover:underline self-end"
                                        >
                                            <span>En savoir plus</span>
                                            <ArrowRight className="h-6 w-6 transform group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        {/* Featured Banner with generated image */}
                        <div className="rounded-none lg:rounded-[3rem] overflow-hidden shadow-none lg:shadow-2xl border-0 lg:border border-slate-100 group relative -mx-6 lg:mx-0 mt-24 lg:mt-32">
                            <img 
                                src={installationSoftenerImg} 
                                alt="Installation professionnelle d'un adoucisseur d'eau Bricareau" 
                                className="w-full h-[450px] md:h-[550px] lg:h-[650px] object-cover group-hover:scale-105 transition-transform duration-[3000ms] brightness-[1.1] contrast-[1.05]"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a8a]/80 via-[#1e3a8a]/40 to-transparent p-8 md:p-12 lg:p-20 flex items-center lg:pt-32">
                                <div className="max-w-lg">
                                    <div className="flex items-center gap-3 text-blue-400 font-bold text-xs tracking-widest uppercase mb-6">
                                        <CheckCircle className="w-5 h-5" />
                                        Engagement Certifié
                                    </div>
                                    <h3 className="text-white text-4xl font-bold mb-6 leading-tight">Offrez à votre famille la qualité d'une eau filtrée supérieure.</h3>
                                    <p className="text-white text-lg mb-10 text-justify">
                                        Profitez d'une installation propre, durable et optimisée par nos experts. Optez pour la tranquillité d'esprit avec une intégration technique signée Bricareau Water Specialist.                                
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. Comparison Table Section */}
                <section className="py-24 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="text-left mb-16">
                            <h2 className="mb-8 heading-pro-max text-left">
                                <span className="italic font-light text-[#2563eb] block text-left">Comparez nos filtres d'eau</span>
                                <span className="font-bold text-[#1e3a8a] block text-left">spécialisés pour l'eau municipale</span>
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
                                            {products.map((m, i) => (
                                                <th 
                                                    key={i} 
                                                    className={cn(
                                                        "p-4 md:p-6 text-center transition-all duration-500 min-w-[220px]",
                                                        i === activeCol ? "table-cell" : "hidden lg:table-cell"
                                                    )}
                                                >
                                                    <div className="flex flex-col items-center gap-6">
                                                        <div className="relative group/img pr-4 pt-4">
                                                            <div className={`absolute top-0 right-0 z-20 ${m.badgeColor} text-white text-[8px] font-black uppercase tracking-[0.4em] px-3 py-1 rounded-full shadow-2xl whitespace-nowrap scale-90 md:scale-100`}>
                                                                {m.badge}
                                                            </div>
                                                            <div className="absolute inset-0 bg-blue-600 rounded-full blur-2xl opacity-0 group-hover/img:opacity-20 transition-opacity duration-700" />
                                                            <img
                                                                src={m.image}
                                                                alt={`Modèle ${m.name}`}
                                                                className="w-[140px] md:w-[180px] h-[100px] md:h-[140px] object-contain mx-auto mix-blend-multiply relative z-10 transition-transform duration-700 group-hover/img:scale-110"
                                                            />
                                                        </div>
                                                        <div className="text-[13px] md:text-lg font-bold text-[#1e3a8a] max-w-[150px] mx-auto leading-tight">{m.name.replace("Filtre d'eau ", "")}</div>
                                                    </div>
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100 relative z-10">
                                        {comparisonData.map((row, i) => (
                                            <tr key={i} className="hover:bg-blue-50/30 transition-colors group">
                                                <td className="p-6 md:p-10 font-bold text-[#1e3a8a] bg-white sticky left-0 z-30 border-r border-slate-50 drop-shadow-sm lg:drop-shadow-none text-[12px] md:text-sm italic group-hover:text-blue-600 transition-colors">
                                                    {row.feature}
                                                </td>
                                                {["vortex", "chlorstop", "ironshield"].map((model, idx) => (
                                                    <td 
                                                        key={model} 
                                                        className={cn(
                                                            "p-6 md:p-10 text-center text-[13px] md:text-sm font-light leading-relaxed text-slate-600 transition-all duration-500",
                                                            idx === activeCol ? "table-cell" : "hidden lg:table-cell"
                                                        )}
                                                    >
                                                        {(() => {
                                                            const val = row[model as keyof typeof row];
                                                            if (typeof val === 'string') return <span className="text-blue-600 font-bold bg-blue-50/50 px-4 py-1.5 rounded-full text-[10px] uppercase shadow-sm whitespace-nowrap">{val}</span>;
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
                            src={excellenceWaterImg}
                            alt="Analyse d'eau à domicile pour détecter le calcaire et le chlore - Service Bricareau"
                            className="w-full h-auto object-contain"
                        />
                    </div>

                    {/* Desktop Background */}
                    <div className="hidden lg:block absolute inset-0 z-0">
                        <img
                            src={excellenceWaterImg}
                            alt="Analyse d'eau à domicile"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-blue-900/40 lg:bg-gradient-to-r lg:from-blue-900/90 lg:to-blue-600/20 mix-blend-multiply" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-white via-white/10 to-transparent" />
                    </div>

                    <div className="container mx-auto px-4 relative z-10 flex items-center py-12 lg:py-0 lg:h-full">
                        <div className="max-w-2xl text-slate-900 lg:text-white">
                            <span className="text-blue-600 lg:text-blue-600 text-xs font-black uppercase tracking-[0.3em] mb-8 block">
                                Contrôle de la Qualité D'EAU
                            </span>
                             <h2 className="mb-8 heading-pro-max">
                                <span className="italic font-light text-[#1e3a8a] lg:text-white block">L'excellence commence par</span>
                                <span className="text-[#1e3a8a] lg:text-white italic font-bold font-serif">une eau parfaite.</span>
                            </h2>
                            <p className="font-light text-black lg:text-white/95 mb-8 max-w-xl text-left lg:text-justify">
                                Le luxe, c'est de ne pas avoir à se soucier de la qualité de ce que l'on consomme. Offrez-vous la sérénité d'une eau analysée par des experts, pour une maison où tout brille, sans effort et sans compromis.
                            </p>
                            <div className="flex gap-4">
                                <div className="flex gap-4">
                                                <Button
                                                  asChild
                                                >
                                                  <a href="/tests-eau">Demandez une analyse d'eau</a>
                                                </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 7. Testimonials Grid Section */}
                <TestimonialsSection 
                    filterProduct="/filtres-deau-pour-toute-la-maison"
                    title={
                        <>
                            <span className="italic font-light text-[#2563eb] block text-center">Fini le chlore et les contaminants,</span>
                            <span className="font-bold text-[#1e3a8a] block text-center">la métamorphose vue par nos clients.</span>
                        </>
                    }
                />

                {/* 8. FAQ Section */}
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
                                        <AccordionTrigger className="text-left font-medium text-lg hover:no-underline py-6">
                                            {item.q}
                                        </AccordionTrigger>
                                        <AccordionContent className="text-gray-600 text-lg leading-snug pb-6 text-left">
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

                {/* 9. PREMIUM CTA SECTION */}
                <section className="relative py-32 flex items-center overflow-hidden bg-[#1e3a8a]">
                    {/* Animated background elements */}
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-600/20 to-transparent skew-x-12 translate-x-1/4" />
                    <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-cyan-400/10 to-transparent -skew-x-12 -translate-x-1/4" />
                    
                    {/* Background Image with Overlay */}
                    <div className="absolute inset-0 z-0 opacity-40">
                        <img
                            src={FilteredcitywaterImg}
                            alt="Problématique d'eau dure sur la robinetterie - Solution Bricareau"
                            className="w-full h-full object-cover grayscale brightness-150"
                        />
                        <div className="absolute inset-0 bg-[#1e3a8a]/10 backdrop-blur-sm" />
                    </div>

                    <div className="container mx-auto px-6 relative z-10">
                        <div className="max-w-5xl mx-auto text-center space-y-12">
                            <div className="space-y-6">
                                <span className="inline-block px-4 py-1.5 bg-white text-blue-600 rounded-full text-[10px] font-black uppercase tracking-[0.4em]">
                                    VOTRE PEAU ET VOS CHEVEUX VOUS REMERCIERONT
                                </span>
                                <h2 className="text-4xl md:text-6xl lg:text-5xl font-light text-white leading-[1.1] tracking-tighter">
                                    Libérez votre foyer <br />
                                    <span className="text-white italic font-bold font-serif">du chlore et des sédiments.</span>
                                </h2>
                                <p className="text-lg md:text-xl text-blue-100/80 max-w-2xl mx-auto font-light leading-relaxed">
                                    Le chlore et les impuretés de l'eau municipale altèrent le goût de votre eau, assèchent votre peau et abîment vos cheveux. Installez une barrière protectrice pour toute la maison et ressentez la différence dès la première douche.<br className="hidden md:block" />
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

                {/* 10. Resources Section */}
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
                                    onClick={() => navigate(art.link || "#")}
                                >
                                    <div className="h-56 overflow-hidden">
                                        <img
                                            src={art.img}
                                            alt={`${art.title} - Guide expert Bricareau en traitement d'eau`}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                    </div>
                                    <div className="p-8 text-left border-t-2 border-transparent group-hover:border-blue-600 transition-colors flex flex-col flex-grow">
                                        <h4 className="mb-4 group-hover:text-blue-600 transition-colors tracking-tight font-medium text-base leading-6 text-[#0F1729]">{art.title}</h4>
                                        <div className="mt-auto">
                                            <NavLink
                                                to={art.link || "#"}
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

export default FiltresTouteMaison;
