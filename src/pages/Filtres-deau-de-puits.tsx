import React, { useEffect } from 'react';
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import GlobalBreadcrumbs from "@/components/GlobalBreadcrumbs";
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
} from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { useNavigate } from "react-router-dom";
import bathroomImg from "@/assets/1571462.jpg";
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
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from "@/components/ui/accordion";

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
    const [showAllFaqs, setShowAllFaqs] = React.useState(false);
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

    const navigate = useNavigate();
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
                <section className="relative py-32 bg-white overflow-hidden">
                    {/* Background Decorative Elements */}
                    <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 -skew-x-12 translate-x-1/2 pointer-events-none" />
                    <div className="absolute -bottom-24 left-1/4 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-60 pointer-events-none" />

                    <div className="container mx-auto px-6 relative z-10">
                        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                            {/* Left: Text Content with Creative Typography */}
                            <div className="lg:w-1/2 space-y-12">
                                <div className="space-y-6">
                                    <h2 
                                        className="mb-12"
                                        style={{
                                            fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                                            fontSize: '48px',
                                            lineHeight: '48px',
                                            fontStyle: 'normal'
                                        }}
                                    >
                                        <span className="italic font-light text-[#2563eb] block text-left">Votre puits possède</span>
                                        <span className="font-bold text-[#1e3a8a] block text-left">son propre ADN.</span>
                                    </h2>
                                </div>

                                <div className="space-y-8">
                                     <p 
                                        className="italic text-justify max-w-xl"
                                        style={{
                                            fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                                            fontSize: '20px',
                                            fontWeight: '300',
                                            lineHeight: '28px',
                                            color: 'rgb(71, 85, 105)'
                                        }}
                                    >
                                        "Une filtration d'eau classique est une réponse générique à un problème unique. Nous concevons la solution en respectant l'ADN de votre eau."
                                    </p>
                                    
                                    <p 
                                        className="text-justify max-w-xl"
                                        style={{
                                            fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                                            fontSize: '20px',
                                            fontWeight: '300',
                                            lineHeight: '28px',
                                            color: 'rgb(71, 85, 105)'
                                        }}
                                    >
                                        L'eau de votre puits est le fruit d'une géologie complexe. Là où d'autres voient simplement du fer ou du calcaire, Bricareau analyse la synergie des minéraux. Notre approche bridge l'écart entre une eau brute, parfois agressive, et une ressource précieuse, revitalisante et protectrice pour votre foyer. 
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-12 pt-12 border-t border-slate-100">
                                    <div className="space-y-1">
                                        <p className="text-3xl font-bold text-slate-900 tracking-tighter">Labo</p>
                                        <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-blue-600">Analyse d'Eau de Puits</p>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-3xl font-bold text-slate-900 tracking-tighter">Zéro</p>
                                        <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-blue-600">Fer, Soufre & Manganèse</p>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-3xl font-bold text-slate-900 tracking-tighter">Traitement</p>
                                        <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-blue-600">Performance Élite</p>
                                    </div>
                                </div>
                            </div>

                            {/* Right: Creative Visual Montage */}
                            <div className="lg:w-1/2 relative">
                                <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square">
                                    {/* Abstract background shapes */}
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle,rgba(37,99,235,0.05)_0%,transparent_95%)] animate-pulse" />
                                    
                                    {/* Primary Visual */}
                                    <div className="absolute inset-0 rounded-[4rem] overflow-hidden shadow-2xl skew-y-2 transform hover:skew-y-0 transition-transform duration-1000 z-10 group">
                                        <img 
                                            src={process1} 
                                            alt="Analyse d'eau de puits de précision par Bricareau" 
                                            className="w-full h-full object-cover transform scale-110 group-hover:scale-100 transition-transform duration-1000"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-transparent" />
                                    </div>

                                    {/* Secondary floating element */}
                                    <div className="absolute -bottom-24 -right-12 w-2/3 h-2/5 bg-blue-600/20 backdrop-blur-xl rounded-[3rem] shadow-2xl z-20 p-10 flex flex-col justify-center transform -rotate-3 border border-white/10">
                                        <Droplets className="text-white h-12 w-12 mb-6" />
                                        <h4 className="text-lg text-slate-700 font-light leading-relaxed italic text-justify max-w-xl">
                                            "L'eau qui court sur la pierre s'oublie, l'eau qui passe par le filtre se purifie."
                                        </h4>
                                    </div>

                                    {/* Floating Stats or Details */}
                                    <div className="absolute -top-12 -left-12 bg-white p-8 rounded-[2rem] shadow-xl z-30 border border-slate-50 space-y-4 max-w-[220px] hidden md:block animate-float">
                                        <div className="flex items-center gap-2 text-blue-600">
                                            <div className="w-2 h-2 rounded-full bg-blue-600 animate-ping" />
                                            <span className="font-bold text-[10px] uppercase tracking-widest">En temps réel</span>
                                        </div>
                                        <p className="text-sm font-light text-slate-500 leading-snug">
                                            Neutralisation instantanée de <span className="font-bold text-slate-900">sulfure d'hydrogène</span> et des <span className="font-bold text-slate-900">métaux lourds</span>.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. Product Grid Section */}
                <section id="specialized-filters" className="py-24 bg-gray-50 scroll-mt-20">
                    <div className="container mx-auto px-6">
                        <div className="text-left mb-16">
                            <h2 
                                className="mb-8 text-left"
                                style={{
                                    fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                                    fontSize: '48px',
                                    lineHeight: '48px',
                                    fontStyle: 'normal'
                                }}
                            >
                                <span className="italic font-light text-[#2563eb] block text-left">Nos filtres d'eau</span>
                                <span className="font-bold text-[#1e3a8a] block text-left">spécialisés - Eau de puits</span>
                            </h2>
                            <div className="w-24 h-1 bg-blue-600"></div>
                            <p 
                                className="mt-8 text-justify w-full"
                                style={{
                                    fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                                    fontSize: '20px',
                                    fontWeight: '300',
                                    lineHeight: '28px',
                                    color: 'rgb(71, 85, 105)'
                                }}
                            >
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
                                        <p
                                            className="text-justify"
                                            style={{
                                                fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                                                fontSize: '20px',
                                                fontWeight: '300',
                                                lineHeight: '28px',
                                                color: 'rgb(71, 85, 105)'
                                            }}
                                        >
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

                {/* 4. Why choose our water filtration system? Section - Redesigned with Editorial Flair */}
                <section className="py-32 bg-white relative overflow-hidden">
                    {/* Background Decorative Element */}
                    <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 -skew-x-12 translate-x-1/2 pointer-events-none" />
                    
                    <div className="container mx-auto px-6 relative z-10">
                        <div className="max-w-4xl mx-auto text-center mb-32">
                            <h2
                                className="mb-12"
                                style={{
                                    fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                                    fontSize: '48px',
                                    lineHeight: '48px',
                                    fontStyle: 'normal'
                                }}
                            >
                                <span className="italic font-light text-[#2563eb] block">Pourquoi choisir nos</span>
                                <span className="font-bold text-[#1e3a8a] block text-center">systèmes de filtration d'eau ?</span>
                            </h2>
                            <p 
                                className="text-center max-w-xl mx-auto"
                                style={{
                                    fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                                    fontSize: '20px',
                                    fontWeight: '300',
                                    lineHeight: '28px',
                                    color: 'rgb(71, 85, 105)'
                                }}
                            >
                                Plus qu'un simple système de filtration, c'est une protection avancée pour votre santé et un confort durable pour toute votre famille.
                            </p>
                        </div>

                        <div className="space-y-48">
                            {/* Feature 1 - Right Text, Left Image */}
                            <div className="flex flex-col md:flex-row-reverse gap-20 items-center group relative">
                                <div className="absolute -top-16 -right-12 text-[240px] font-black text-slate-50 pointer-events-none select-none tracking-tighter opacity-100 group-hover:text-blue-50 transition-colors duration-1000 -z-10">
                                    01
                                </div>
                                <div className="md:w-1/2 space-y-8 md:text-right flex flex-col items-end">
                                    <div className="w-20 h-20 rounded-3xl bg-blue-600 flex items-center justify-center shadow-2xl shadow-blue-200 group-hover:scale-110 transition-transform duration-500">
                                        <Droplets className="text-white h-10 w-10" />
                                    </div>
                                    <h3 className="text-[24px] font-bold text-slate-900 leading-tight group-hover:text-blue-600 transition-colors duration-500">
                                        Eau cristalline
                                    </h3>
                                     <p 
                                        className="text-justify max-w-xl"
                                        style={{
                                            fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                                            fontSize: '20px',
                                            fontWeight: '300',
                                            lineHeight: '28px',
                                            color: 'rgb(71, 85, 105)'
                                        }}
                                    >
                                        Éliminez les sédiments et la turbidité pour une eau d'une clarté professionnelle partout chez vous.
                                    </p>
                                </div>
                                <div className="md:w-1/2">
                                    <div className="relative aspect-[4/3] rounded-[4rem] overflow-hidden shadow-2xl skew-y-1 group-hover:skew-y-0 transition-transform duration-1000 border-8 border-white">
                                        <img 
                                            src={crystalClearWaterImg} 
                                            alt="Eau d'une clarté cristalline" 
                                            className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
                                        />
                                        <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay" />
                                    </div>
                                </div>
                            </div>

                            {/* Feature 2 - Left Text, Right Image */}
                            <div className="flex flex-col md:flex-row gap-20 items-center group relative">
                                <div className="absolute -top-16 -left-12 text-[240px] font-black text-slate-50 pointer-events-none select-none tracking-tighter opacity-100 group-hover:text-blue-50 transition-colors duration-1000 -z-10">
                                    02
                                </div>
                                <div className="md:w-1/2 space-y-8">
                                    <div className="w-20 h-20 rounded-3xl bg-blue-600 flex items-center justify-center shadow-2xl shadow-blue-200 group-hover:scale-110 transition-transform duration-500">
                                        <Shield className="text-white h-10 w-10" />
                                    </div>
                                    <h3 className="text-[24px] font-bold text-slate-900 leading-tight group-hover:text-blue-600 transition-colors duration-500">
                                        Protection totale
                                    </h3>
                                     <p 
                                        className="text-justify max-w-xl"
                                        style={{
                                            fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                                            fontSize: '20px',
                                            fontWeight: '300',
                                            lineHeight: '28px',
                                            color: 'rgb(71, 85, 105)'
                                        }}
                                    >
                                        Empêchez le fer et les minéraux corrosifs de tacher vos éviers et de détruire votre plomberie.
                                    </p>
                                </div>
                                <div className="md:w-1/2">
                                    <div className="relative aspect-[4/3] rounded-[4rem] overflow-hidden shadow-2xl -skew-y-1 group-hover:skew-y-0 transition-transform duration-1000 border-8 border-white">
                                        <img 
                                            src={bathroomImg} 
                                            alt="Protection de la plomberie et robinetterie" 
                                            className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
                                        />
                                        <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay" />
                                    </div>
                                </div>
                            </div>

                            {/* Feature 3 - Right Text, Left Image */}
                            <div className="flex flex-col md:flex-row-reverse gap-20 items-center group relative pb-16">
                                <div className="absolute -top-16 -right-12 text-[240px] font-black text-slate-50 pointer-events-none select-none tracking-tighter opacity-100 group-hover:text-blue-50 transition-colors duration-1000 -z-10">
                                    03
                                </div>
                                <div className="md:w-1/2 space-y-8 md:text-right flex flex-col items-end">
                                    <div className="w-20 h-20 rounded-3xl bg-blue-600 flex items-center justify-center shadow-2xl shadow-blue-200 group-hover:scale-110 transition-transform duration-500">
                                        <GlassWater className="text-white h-10 w-10" />
                                    </div>
                                    <h3 className="text-[24px] font-bold text-slate-900 leading-tight group-hover:text-blue-600 transition-colors duration-500">
                                        Zéro odeur
                                    </h3>
                                     <p 
                                        className="text-justify max-w-xl"
                                        style={{
                                            fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                                            fontSize: '20px',
                                            fontWeight: '300',
                                            lineHeight: '28px',
                                            color: 'rgb(71, 85, 105)'
                                        }}
                                    >
                                        Dites adieu aux odeurs d'œufs pourris (soufre) et au goût de chlore pour une eau fraîche.
                                    </p>
                                </div>
                                <div className="md:w-1/2">
                                    <div className="relative aspect-[4/3] rounded-[4rem] overflow-hidden shadow-2xl skew-y-1 group-hover:skew-y-0 transition-transform duration-1000 border-8 border-white">
                                        <img 
                                            src={zeroOdorImg} 
                                            alt="Eau inodore et pure au goût" 
                                            className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
                                        />
                                        <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. Comparison Table Section */}
                <section className="py-24 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="text-left mb-16">
                            <h2
                                className="mb-8 text-left"
                                style={{
                                    fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                                    fontSize: '48px',
                                    lineHeight: '48px',
                                    fontStyle: 'normal'
                                }}
                            >
                                <span className="italic font-light text-[#2563eb] block">Comparez nos filtres d'eau</span>
                                <span className="font-bold text-[#1e3a8a] block">spécialisés pour l'eau de puits</span>
                            </h2>
                            <div className="w-24 h-1 bg-blue-600"></div>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full min-w-[1600px] border-collapse bg-white rounded-2xl overflow-hidden shadow-sm">
                                <thead>
                                    <tr className="bg-gray-100">
                                        <th className="p-8 text-left text-gray-400 font-medium uppercase tracking-wider w-[280px]">Modèles</th>
                                        {[
                                            { key: "Vortex", name: "Vortex"},
                                            { key: "ZenPH", name: "Zen-pH"},
                                            { key: "ChlorStop", name: "ChlorStop"},
                                            { key: "IronShield", name: "Iron Shield"},
                                            { key: "OxyPure", name: "Oxy-pure"},
                                            { key: "SulphurShield", name: "Sulphur Shield"},
                                            { key: "ZeroAs", name: "Zéro-As"},
                                            { key: "TannEx", name: "Tann-Ex"},
                                            { key: "SerenitePure", name: "Sérénité Pure"}
                                        ].map(m => (
                                            <th key={m.key} className="p-4 text-center text-gray-900 font-bold border-l border-white/50 first:border-l-0">
                                                <div className="flex flex-col items-center">
                                                    <div className="text-[13px] leading-tight uppercase tracking-wider min-h-[32px] flex items-center justify-center px-1">
                                                        {m.name}
                                                    </div>
                                                </div>
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {comparisonData.map((row, i) => (
                                        <tr key={i} className="hover:bg-gray-50 transition-colors">
                                            <td className="p-8 font-medium text-gray-700">{row.feature}</td>
                                            {["Vortex", "ZenPH", "ChlorStop", "IronShield", "OxyPure", "SulphurShield", "ZeroAs", "TannEx", "SerenitePure"].map((key) => (
                                                <td key={key} className="p-8 text-center">
                                                    {typeof row[key as keyof ComparisonItem] === 'string' ? (
                                                        <span className="text-blue-600 font-bold text-[10px] bg-blue-50 px-3 py-1 rounded-full">{row[key as keyof ComparisonItem]}</span>
                                                    ) : (
                                                        row[key as keyof ComparisonItem] ? <CheckCircle2 className="h-6 w-6 text-blue-600 mx-auto" /> : null
                                                    )}
                                                </td>
                                            ))}
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
                            src={waterTestingImg1}
                            alt="Analyse d'eau de puits en laboratoire - Test de fer, soufre, pH et bactéries Bricareau"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-blue-900/20" />
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
                            <span className="text-blue-600 lg:text-white/80 font-bold uppercase tracking-widest text-sm mb-4 block">
                                Contrôle de la Qualité D'EAU
                            </span>
                            <h2
                                className="mb-8"
                                style={{
                                    fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                                    fontSize: '48px',
                                    lineHeight: '48px',
                                    fontStyle: 'normal'
                                }}
                            >
                                <span className="italic font-light text-blue-400 block">L'excellence commence</span>
                                <span className="font-bold text-white block">par une eau parfaite.</span>
                            </h2>
                            <p className="font-light text-slate-600 lg:text-white/95 mb-8 max-w-xl text-left lg:text-justify">
                                Le luxe, c'est de ne pas avoir à se soucier de la qualité de ce que l'on consomme. Offrez-vous la sérénité d'une eau analysée par des experts, pour une maison où tout brille, sans effort et sans compromis.
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

                {/* 7. Testimonials Grid Section */}
                <TestimonialsSection
                    filterProduct="/filtration"
                    title={
                        <>
                             <h2
                                className="mb-6"
                                style={{
                                    fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                                    fontSize: '48px',
                                    lineHeight: '48px',
                                    fontStyle: 'normal'
                                }}
                            >
                                <span className="italic font-light text-[#2563eb] block text-center">Buvez l'eau de votre puits sans crainte</span>
                                <span className="font-bold text-[#1e3a8a] block text-center">Ils ont fait le saut avec nous.</span>
                            </h2>
                        </>
                    }
                />

                {/* 8. Associated Products Section */}
                <section className="bg-white py-24">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2
                                className="mb-8"
                                style={{
                                    fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                                    fontSize: '48px',
                                    lineHeight: '48px',
                                    fontStyle: 'normal'
                                }}
                            >
                                <span className="font-bold text-[#1e3a8a] block text-center">Découvrez les produits associés</span>
                            </h2>
                            <p className="font-light text-gray-500 max-w-2xl mx-auto">
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
                                        <p
                                            className="leading-[25px] text-slate-500 font-light flex-grow text-justify"
                                            style={{}}
                                        >
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

                {/* 9. CTA Sectiion */}
                <section className="relative py-32 overflow-hidden">
                    {/* Background Image with Overlay */}
                    <div className="absolute inset-0 z-0">
                        <img
                            src={crystalClearWaterImg}
                            alt="Expert Bricareau en traitement d'eau de puits"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-900/70 to-blue-800/30 backdrop-blur-[2px]" />
                    </div>

                    <div className="container mx-auto px-6 relative z-10 text-center">
                        <div className="max-w-4xl mx-auto">
                            <h2 
                                className="mb-6"
                                style={{
                                    fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                                    fontSize: '48px',
                                    lineHeight: '48px',
                                    fontStyle: 'normal'
                                }}
                            >
                                <span className="italic font-light text-blue-400 block tracking-tight">Passez d'une eau problématique</span>
                                <span className="font-bold text-white block tracking-tight">à une source de pureté.</span>
                            </h2>

                            <p className="text-blue-100/80 font-light text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
                                Le fer, le soufre et le calcaire ne sont pas une fatalité. Protégez votre santé et retrouvez le plaisir d'une eau pure, inodore et cristalline dès aujourd'hui.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                                <Button
                                    size="lg"
                                    className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-12 h-16 shadow-2xl shadow-white/30 group text-lg font-light"
                                    asChild
                                >
                                    <a href="tel:18552649328" className="flex items-center gap-3">
                                        <Phone className="h-5 w-5 animate-bounce" />
                                        Parlez à un expert
                                    </a>
                                </Button>

                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="rounded-full px-10 h-16 border-white/30 text-white bg-white/5 hover:bg-white/10 backdrop-blur-md text-lg transition-all duration-500"
                                    asChild
                                >
                                    <NavLink to="/tests-eau">Demandez une analyse d'eau</NavLink>
                                </Button>
                            </div>

                            <p className="mt-8 text-white/50 text-sm font-light">
                                Disponible 7j/7 — Réponse en moins de 24h
                            </p>
                        </div>
                    </div>
                </section>

                {/* 10. FAQ Section */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="text-left mb-16">
                            <h2
                                className="mb-8 text-left"
                                style={{
                                    fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                                    fontSize: '48px',
                                    lineHeight: '48px',
                                    fontStyle: 'normal'
                                }}
                            >
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
                                className="mb-8 text-left"
                                style={{
                                    fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                                    fontSize: '48px',
                                    lineHeight: '48px',
                                    fontStyle: 'normal'
                                }}
                            >
                                <span className="font-bold text-[#1e3a8a] block text-left">Ressources</span>
                            </h2>

                            <div className="w-24 h-1 bg-blue-600"></div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { title: "Adoucisseur d'eau et fosse septique : compatible ou non ?", path: "/adoucisseur-deau-et-fosse-septique-mythes-et-realites", img: adoucisseurFosseImg },
                                { title: "Adoucisseur sans sel vs avec sel : la vérité technique", path: "/adoucisseur-sans-sel-vs-avec-sel-verite-technique", img: residentialWaterSoftenerImg },
                                { title: "Conditionneur d'eau : Une alternative écologique à l'adoucisseur sans sel", path: "/adoucisseur-sans-sel-vs-avec-sel-verite-technique", img: conditionneursImg }
                            ].map((art, i) => (
                                <div
                                    key={i}
                                    className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full cursor-pointer"
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
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
};

export default FiltresPuits;
