import Header from "@/components/Header";
import Hero from "@/components/Hero";
import GlobalBreadcrumbs from "@/components/GlobalBreadcrumbs";
import Footer from "@/components/Footer";
import TestimonialsSection from "@/components/TestimonialsSection";
import { Button } from "@/components/ui/button";
import heroFilter from "@/assets/12605.jpg";
import eauFontaineImg from "@/assets/10341859.jpg";
import {
    ArrowRight,
    Droplets,
    ChevronRight,
    CheckCircle2,
    Shield,
    TrendingDown,
    Phone,
    Sparkles,
    Waves
} from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import waterTestingImg from "@/assets/reasons-to-drink-more-water.jpg";
import waterzeroodorImg from "@/assets/pexels-vlada-karpovich-6802947.jpg";
import specializedFiltersImg from "@/assets/Filtres d'eau spécialisés.webp";
import crystalClearWaterImg from "@/assets/5846952.jpg";
import comfortImg from "@/assets/71luIOvIQuL._AC_SL1500_.jpg";
import wholeHouseprotectionImg from "@/assets/342800.jpg";
import { heroImg as eauVilleFiltreeImg } from "./Blog pages/Pourquoi-meme-leau-de-ville-a-besoin-detre-filtree";
import { heroImg as plombVieillesMaisonsImg } from "./Blog pages/Le-plomb-dans-les-vieilles-maisons-comment-se-proteger";
import { heroImg as filtreSousEvierImg } from "./Blog pages/Filtre-sous-evier-lalternative-simple-aux-pichets-filtrants";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
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
    const [cardStack, setCardStack] = useState([0, 1, 2, 3]);

    const handleCardClick = (cardIndex: number) => {
        setCardStack(prev => {
            const newStack = prev.filter(idx => idx !== cardIndex);
            return [...newStack, cardIndex];
        });
    };

    const cardData = [
        { id: 0, title: "Zéro odeur", img: waterzeroodorImg, desc: "Dites adieu aux odeurs d'œufs pourris (soufre) et au goût de chlore pour une eau fraîche, revigorante et délicieuse à chaque gorgée." },
        { id: 1, title: "Protection totale", img: wholeHouseprotectionImg, desc: "Empêchez le fer et les minéraux corrosifs de tacher vos éviers et de détruire votre plomberie. Nos filtres prolongent la vie de vos électroménagers." },
        { id: 2, title: "Eau cristalline", img: crystalClearWaterImg, desc: "Éliminez les sédiments et la turbidité pour une eau d'une clarté professionnelle partout chez vous, à chaque robinet. Une pureté visible." },
        { id: 3, title: "Confort durable", img: comfortImg, desc: "Savourez un bien-être quotidien inégalé grâce à une eau exceptionnelle qui protège votre peau et votre tuyauterie." }
    ];

    const positionStyles = [
        "transform -rotate-[16deg] -translate-x-20 translate-y-16 z-0 scale-90 opacity-60",
        "transform -rotate-[8deg] -translate-x-10 translate-y-8 z-10 scale-95 opacity-80",
        "transform -rotate-[2deg] translate-x-0 translate-y-0 z-20 scale-100 opacity-95",
        "transform rotate-[12deg] translate-x-16 -translate-y-10 z-30 scale-105 opacity-100 shadow-[20px_50px_100px_-20px_rgba(30,58,138,0.3)] shadow-blue-900/40"
    ];

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
                                <span className="font-bold text-[#1e3a8a] block text-center">votre robinet quotidien.</span>
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
                                    icon: <Droplets className="w-5 h-5 text-emerald-500" />
                                },
                                { 
                                    title: "Peau & Cheveux", 
                                    benefit: "Hydratation Soin", 
                                    desc: "Le chlore et les sédiments dessèchent votre peau et ternissent vos cheveux. Offrez-vous une expérience spa à chaque douche.",
                                    img: comfortImg,
                                    badge: "Bien-être",
                                    icon: <Sparkles className="w-5 h-5 text-blue-400" />
                                },
                                { 
                                    title: "Plomberie Saine", 
                                    benefit: "Économie Durable", 
                                    desc: "Les sédiments et le fer créent des micro-abrasions et de la corrosion. Protégez vos tuyauteries et vos lave-vaisselles haut de gamme.",
                                    img: wholeHouseprotectionImg,
                                    badge: "Protection Asset",
                                    icon: <Shield className="w-5 h-5 text-amber-500" />
                                },
                                { 
                                    title: "Eau Cristalline", 
                                    benefit: "Clarté Visuelle", 
                                    desc: "Éliminez la turbidité et les particules de rouille pour une eau transparente. Idéal pour ceux qui ne tolèrent aucun compromis sur la pureté.",
                                    img: crystalClearWaterImg,
                                    badge: "Pureté Vision",
                                    icon: <Waves className="w-5 h-5 text-blue-600" />
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
                                            <div className="bg-white/90 backdrop-blur-xl px-4 py-1.5 rounded-full flex items-center gap-2 shadow-sm">
                                                {item.icon}
                                                <span className="text-[10px] font-black text-slate-900 uppercase tracking-widest">{item.badge}</span>
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
                        <div className="overflow-x-auto">
                            <table className="w-full min-w-[1000px] border-collapse bg-white rounded-2xl overflow-hidden shadow-sm">
                                <thead>
                                    <tr className="bg-gray-100">
                                        <th className="p-8 text-left text-gray-400 font-light uppercase tracking-wider">Solutions</th>
                                        {products.map((m, i) => (
                                            <th key={i} className="p-4 text-center text-gray-900 font-bold text-sm">
                                                <div className="flex flex-col items-center gap-4 group">
                                                    <div className="relative">
                                                        <div className={`absolute -top-3 -right-12 z-20 ${m.badgeColor} text-white text-[8px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full shadow-xl whitespace-nowrap`}>
                                                            {m.badge}
                                                        </div>
                                                        <img
                                                            src={m.image}
                                                            alt={`Modèle ${m.name} - Système de filtration haute performance Bricareau`}
                                                            className="w-[180px] h-[140px] object-contain mx-auto mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
                                                        />
                                                    </div>
                                                    <div className="text-[14px] uppercase tracking-wider text-[#1e3a8a]">{m.name.replace("Filtre d'eau ", "")}</div>
                                                </div>
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {comparisonData.map((row, i) => (
                                        <tr key={i} className="hover:bg-gray-50 transition-colors">
                                            <td className="p-8 font-light text-gray-700">{row.feature}</td>
                                            <td className="p-8 text-center text-sm">
                                                {typeof row.vortex === 'string' ? <span className="text-blue-600 font-bold bg-blue-50 px-3 py-1 rounded-full text-[10px] whitespace-nowrap">{row.vortex}</span> : (row.vortex ? <CheckCircle2 className="h-6 w-6 text-blue-600 mx-auto" /> : null)}
                                            </td>
                                            <td className="p-8 text-center text-sm">
                                                {typeof row.chlorstop === 'string' ? <span className="text-blue-600 font-bold bg-blue-50 px-3 py-1 rounded-full text-[10px] whitespace-nowrap">{row.chlorstop}</span> : (row.chlorstop ? <CheckCircle2 className="h-6 w-6 text-blue-600 mx-auto" /> : null)}
                                            </td>
                                            <td className="p-8 text-center text-sm">
                                                {typeof row.ironshield === 'string' ? <span className="text-blue-600 font-bold bg-blue-50 px-3 py-1 rounded-full text-[10px] whitespace-nowrap">{row.ironshield}</span> : (row.ironshield ? <CheckCircle2 className="h-6 w-6 text-blue-600 mx-auto" /> : null)}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* 6. Water Testing Section (Redesigned for Mobile) */}
                <section className="relative lg:h-[750px] flex flex-col lg:flex-row items-stretch overflow-hidden bg-white">
                    {/* Mobile Image */}
                    <div className="lg:hidden w-full h-[300px] relative">
                        <img
                            src={waterTestingImg}
                            alt="Prélèvement et analyse d'eau municipale à domicile - Expertise Bricareau"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-blue-900/20" />
                    </div>

                    {/* Desktop Background */}
                    <div className="hidden lg:block absolute inset-0 z-0">
                        <img
                            src={waterTestingImg}
                            alt="Analyse d'eau à domicile"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-blue-900/40 lg:bg-gradient-to-r lg:from-blue-900/90 lg:to-blue-600/20 mix-blend-multiply" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-white via-white/10 to-transparent" />
                    </div>

                    <div className="container mx-auto px-4 relative z-10 flex items-center py-12 lg:py-0">
                        <div className="max-w-2xl text-slate-900 lg:text-white">
                            <span className="text-blue-600 lg:text-[#1e3a8a] text-xs font-black uppercase tracking-[0.3em] mb-8 block">
                                Contrôle de la Qualité D'EAU
                            </span>
                             <h2 className="mb-8 heading-pro-max">
                                <span className="italic font-light text-[#2563eb] lg:text-white block">L'excellence commence</span>
                                <span className="font-bold text-[#1e3a8a] lg:text-white block">par une eau parfaite.</span>
                            </h2>
                            <p className="font-light text-slate-600 lg:text-white/95 mb-8 max-w-xl text-left lg:text-justify">
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
                            <h2 className="mb-8 heading-pro-max text-center">
                                <span className="italic font-light text-[#2563eb] block text-center">Fini le chlore et les contaminants,</span>
                                <span className="font-bold text-[#1e3a8a] block text-center">la métamorphose vue par nos clients.</span>
                            </h2>
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

                {/* 9. CTA Section - Premium Immersive */}
                <section className="relative h-[600px] flex items-center overflow-hidden">
                    {/* Background Image with Overlay */}
                    <div className="absolute inset-0 z-0">
                        <img
                            src={eauFontaineImg}
                            alt="Expert Bricareau en fontaines d'eau"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-900/90 to-blue-800/80 backdrop-blur-[2px]" />
                    </div>
                    <div className="container mx-auto px-6 relative z-10 text-center">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="mb-6 heading-pro-max">
                                <span className="font-bold text-white block">Protégez votre peau et votre santé à la source.</span>
                            </h2>
                            <p className="text-white font-light text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
                                Le chlore et les impuretés de l'eau municipale altèrent le goût de votre eau, assèchent votre peau et abîment vos cheveux. Installez une barrière protectrice pour toute la maison et ressentez la différence dès la première douche.                           
                            </p>
                            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
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
                                    <NavLink to="/consultation">Planifiez-vous une consultation</NavLink>
                                </Button>
                            </div>

                            <p className="mt-8 text-white/50 text-sm font-light">
                                Disponible 7j/7 — Réponse en moins de 24h
                            </p>
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
                        </div>                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { title: "Pourquoi même l'eau de ville a besoin d'être filtrée?", img: eauVilleFiltreeImg, link: "/pourquoi-meme-leau-de-ville-a-besoin-detre-filtree" },
                                { title: "Le plomb dans les vieilles maisons : Comment se protéger?", img: plombVieillesMaisonsImg, link: "/le-plomb-dans-les-vieilles-maisons-comment-se-proteger" },
                                { title: "Filtre sous évier, l'alternative simple aux pichets filtrants", img: filtreSousEvierImg, link: "/filtre-sous-evier-lalternative-simple-aux-pichets-filtrants" }
                            ].map((art, i) => (
                                <div
                                    key={i}
                                    className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full cursor-pointer"
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
                    </div>
                </section>

            </main>

            <Footer />

            {/* Sticky Consultation CTA - Pro Max Conversion Tool */}
            <div className="fixed bottom-8 right-8 z-[100] group hidden md:block">
                <NavLink to="/consultation">
                    <div className="relative">
                        <div className="absolute inset-0 bg-blue-600 rounded-full animate-ping opacity-20 group-hover:opacity-40 transition-opacity" />
                        <div className="relative flex items-center gap-3 bg-white/90 backdrop-blur-xl border border-blue-100 p-2 pr-6 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:shadow-[0_25px_60px_rgba(37,99,235,0.2)] transition-all duration-500 group-hover:-translate-y-2 group-hover:bg-blue-600">
                            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white group-hover:bg-white group-hover:text-blue-600 transition-colors duration-500">
                                <Sparkles className="w-6 h-6 animate-pulse" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600 group-hover:text-white/80 transition-colors">Audit Gratuit</span>
                                <span className="text-sm font-bold text-slate-900 group-hover:text-white transition-colors">Analyse d'eau</span>
                            </div>
                        </div>
                    </div>
                </NavLink>
            </div>
        </div>
    );
};

export default FiltresTouteMaison;
