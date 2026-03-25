import React, { useEffect } from 'react';
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import GlobalBreadcrumbs from "@/components/GlobalBreadcrumbs";
import TestimonialsSection from "@/components/TestimonialsSection";
import { Button } from "@/components/ui/button";
import heroBath from "@/assets/kid-playing-bathtub.jpg";
import heroDesktop from "@/assets/family-preparing-dinner-together.jpg";
import eauDePuitsImg from "@/assets/189573.jpg";
import TwinAlternatingWaterSoftenerImg from "@/assets/Alternating Water Softener.png";
import SentinelWaterSoftenerImg from "@/assets/Sentinelle Water Softener.png";
import SerenityWaterSoftenerImg from "@/assets/Serenity Water Softener.png";
import mantakesbathImg from "@/assets/pexels-gabby-k-6621025 (1).jpg";
import waterRipples from "@/assets/water_purity_ripples_1774299396791.png";
import residentialSoftenerAsset from "@/assets/Adoucisseur_d_eau.png";
import softwaterImg from "@/assets/glass-of-water.jpeg";
import luxuryBathroomImg from "@/assets/7031878.jpg";
import spaRelaxationImg from "@/assets/young-nude-woman-taking-relaxing-foamy-bath.jpg";
import {
    ArrowRight,
    Droplets,
    Star,
    ChevronRight,
    CheckCircle2,
    Clock,
    Sparkles,
    Shield,
    Zap,
    Shirt,
    TrendingDown,
    Quote,
    ChevronLeft,
    Play,
    CircleDollarSign,
    Search,
    Trophy,
    Award,
    HandCoins,
    Phone,
    Check,
    X,
    Medal
} from "lucide-react";
import safetyIcon from "@/assets/1709235770048.png";
import { NavLink } from "@/components/NavLink";
import { useNavigate } from "react-router-dom";
import waterTestingImg from "@/assets/2147800429.jpg";
import { softenerImg as residentialWaterSoftenerImg } from "./Blog pages/Comment régler la dureté de votre adoucisseur ";
import { adoucisseurImg as adoucisseurFosseImg } from "./Blog pages/Adoucisseur-deau- et-fosse-septique--Mythes-et-réalités";
import { conditionneursImg } from "./Blog pages/Adoucisseur avec sel ou sans sel";
import waterSoftenerImg from "@/assets/Adoucisseurs d'eau.webp";
import specialFiltersImg from "@/assets/Filtres d'eau spécialisés.webp";
import uvSystemImg2 from "@/assets/VH200-F10-265x300.jpg";
import drinkingWaterImg from "@/assets/Solutions d'eau potable.webp";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ConsultationFormSection from "@/components/ConsultationFormSection";
import process1 from "@/assets/2148563485.jpg";
import process2 from "@/assets/section-image-and-content-23.jpg";
import process3 from "@/assets/SERVICES.jpg";
import process4 from "@/assets/unnamed (2).jpg";


const products = [

    { name: "Adoucisseur d'eau de la série Sentinelle HE", displayName: <>Adoucisseur d'eau de la série<br />Sentinelle HE</>, desc: "Le rythme parfait d'une eau toujours douce.", path: "/contact", image: SentinelWaterSoftenerImg },
    { name: "Adoucisseur d'eau de la série Sérénité HE", displayName: <>Adoucisseur d'eau de la série<br />Sérénité HE</>, desc: "La paix durable pour votre maison et votre confort.", path: "/contact", image: SerenityWaterSoftenerImg },
    { name: "Adoucisseur d'eau de la série Infiniti HE", displayName: <>Adoucisseur d'eau de la série<br />Infiniti HE</>, desc: "Une douceur constante, à chaque goutte, à chaque seconde.", path: "/contact", image: TwinAlternatingWaterSoftenerImg },
];
const faqItems = [
    {
        q: "Pourquoi un adoucisseur est-il presque essentiel pour l'eau de puits ?",
        a: "L'eau souterraine est naturellement riche en minéraux comme le calcium et le magnésium. Sans adoucisseur, cette dureté élevée provoque une accumulation rapide de calcaire qui endommage vos tuyaux, votre chauffe-eau et vos appareils ménagers."
    },
    {
        q: "L'adoucisseur peut-il éliminer le fer présent dans mon eau de puits ?",
        a: "Oui, nos adoucisseurs spécialisés peuvent éliminer de petites quantités de fer dissous (fer clair). Cependant, pour des concentrations élevées ou du fer oxydé, nous recommandons un filtre à fer dédié en amont pour protéger le système."
    },
    {
        q: "Quelle est la différence entre un adoucisseur municipal et un modèle pour puits ?",
        a: "Les modèles pour puits sont conçus pour gérer des niveaux de dureté beaucoup plus variables et souvent plus élevés, ainsi que la présence fréquente de fer et de manganèse, ce que les modèles municipaux (orientés chlore) ne traitent pas."
    },
    {
        q: "Comment l'adoucisseur gère-t-il les sédiments ou le sable du puits ?",
        a: "L'adoucisseur n'est pas un filtre à sédiments. Pour l'eau de puits, il est impératif d'installer un pré-filtre à sédiments (5 à 20 microns) avant l'adoucisseur pour éviter que les particules n'obstruent la vanne de contrôle et les résines."
    },
    {
        q: "Est-ce que l'adoucisseur rend l'eau de mon puits potable ?",
        a: "Non, l'adoucisseur améliore la qualité esthétique et physico-chimique de l'eau (calcaire, fer). Pour la potabilité microbiologique (bactéries), vous devez impérativement installer un système de désinfection UV."
    },
    {
        q: "À quelle fréquence faut-il vérifier le sel pour une eau de puits ?",
        a: "Étant donné que l'eau de puits est souvent plus dure, la consommation de sel peut être plus élevée. Nous recommandons de vérifier le bac à sel une fois par mois et de le maintenir au moins au tiers de sa capacité."
    },
    {
        q: "Quel type de sel est recommandé pour les propriétaires de puits ?",
        a: "Nous recommandons fortement l'utilisation de pastilles de sel de haute pureté avec additif 'anti-fer' (Iron Fighter). Cela aide à nettoyer les résines et prévient l'encrassement dû au fer ferreux."
    },
    {
        q: "Un adoucisseur peut-il éliminer l'odeur d'œufs pourris ?",
        a: "Non. Cette odeur est causée par le gaz sulfure d'hydrogène. Bien que l'adoucisseur puisse capter une infime partie du soufre, un filtre à charbon ou un système d'oxydation à l'air est nécessaire pour éliminer totalement cette odeur."
    },
    {
        q: "L'eau de puits réduit-elle la durée de vie de l'adoucisseur ?",
        a: "Si l'eau est très chargée en fer ou en sédiments sans prétraitement, les résines peuvent s'épuiser plus vite. Avec un entretien annuel et une configuration adéquate par nos experts, nos systèmes durent de 15 à 20 ans."
    },
    {
        q: "Pourquoi mon eau de puits est-elle encore jaunâtre après l'adoucisseur ?",
        a: "Si la dureté est éliminée mais que l'eau reste jaune, il s'agit probablement de tanins (matières organiques). Un adoucisseur standard ne traite pas les tanins; un système d'échange d'anions spécifique est requis."
    },
    {
        q: "Est-ce que l'adoucisseur peut être installé dans un puits ou à l'extérieur ?",
        a: "Non, l'unité de contrôle électronique et le bac à sel doivent être protégés du gel et des intempéries. L'installation idéale se fait dans un sous-sol, un garage chauffé ou un placard technique isolé."
    },
    {
        q: "Combien d'eau utilise la régénération d'un adoucisseur Bricareau ?",
        a: "Nos modèles High Efficiency calculent la consommation exacte et utilisent entre 30 et 60 gallons par cycle de régénération, soit moins que ce qu'une personne consomme par jour, optimisant ainsi votre puits."
    },
    {
        q: "Le rejet de sel est-il dangereux pour ma fosse septique ?",
        a: "Les études démontrent que le rejet de saumure d'un adoucisseur moderne n'endommage pas les fosses septiques. Au contraire, le calcium rejeté peut parfois aider à maintenir la porosité du champ d'épuration."
    },
    {
        q: "Faut-il ajuster la pression de ma pompe de puits pour l'adoucisseur ?",
        a: "Nos systèmes fonctionnent avec la pression standard des réservoirs de puits (souvent 30-50 psi ou 40-60 psi). Aucun ajustement majeur n'est requis tant que votre pompe fournit un débit constant."
    },
    {
        q: "Quelle garantie Bricareau offre-t-elle pour les applications d'eau de puits ?",
        a: "Nous offrons la même garantie premium : 10 ans sur la bouteille de résine et la tête de contrôle, ce qui témoigne de la confiance que nous avons dans la robustesse de nos équipements face aux eaux difficiles."
    }
];

interface ComparisonItem {
    feature: string;
    'Sérénité HE': string;
    'Sentinel HE': string;
    'Infiniti HE': string;
}

const comparisonData: ComparisonItem[] = [
    {
        feature: "Principe de Déclenchement",
        'Sérénité HE': "Se régénère à intervalles de temps fixes (ex: tous les 3 jours).",
        'Sentinel HE': "Se régénère selon le volume d'eau réellement consommé.",
        'Infiniti HE': "Alterne entre deux bouteilles dès que l'une est saturée."
    },
    {
        feature: "Disponibilité d'Eau Douce",
        'Sérénité HE': "Interrompue pendant la régénération (souvent la nuit).",
        'Sentinel HE': "Interrompue pendant la régénération (souvent la nuit).",
        'Infiniti HE': "Permanente (24h/24) sans aucune interruption."
    },
    {
        feature: "Efficacité (Sel & Eau)",
        'Sérénité HE': "Modérée (environ 75-80% d'efficacité).",
        'Sentinel HE': "Optimale (jusqu'à 95% d'efficacité).",
        'Infiniti HE': "Maximale (jusqu'à 100% sans gaspillage)."
    },
    {
        feature: "Coût d'Entretien (Annuel)",
        'Sérénité HE': "Moyen ($)",
        'Sentinel HE': "Bas ($$)",
        'Infiniti HE': "Économique ($$$)"
    },
    {
        feature: "Profil Utilisateur Idéal",
        'Sérénité HE': "Consommation d'eau très stable et prévisible.",
        'Sentinel HE': "Familles avec variations de consommation (invités, saisons).",
        'Infiniti HE': "Grosses consommations ou besoins critiques (gîtes, grandes familles)."
    },
    {
        feature: "Complexité Technique",
        'Sérénité HE': "Simple et très robuste.",
        'Sentinel HE': "Électronique avancée avec capteur de débit.",
        'Infiniti HE': "Système double nécessitant plus d'espace."
    },
    {
        feature: "Investissement Initial",
        'Sérénité HE': "Économique.",
        'Sentinel HE': "Intermédiaire.",
        'Infiniti HE': "Plus élevé."
    },
];

const AdoucisseursEauDePuits = () => {
    const [showAllFaqs, setShowAllFaqs] = React.useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        document.title = "Adoucisseur d'eau de puits : Protection fer et calcaire";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Protégez votre maison et vos appareils avec nos adoucisseurs d'eau spécialisés pour puits privés. Élimination efficace du fer et du calcaire.");
        }

        // OG Tags
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) ogTitle.setAttribute("content", "Adoucisseur de puits : Fer et Calcaire | Bricareau");
        const ogDesc = document.querySelector('meta[property="og:description"]');
        if (ogDesc) ogDesc.setAttribute("content", "Solutions d'adoucissement robustes pour traiter l'eau dure et le fer de votre puits. Performance et fiabilité garanties.");
    }, []);


    return (
        <div className="min-h-screen bg-white">
             <Header />
             <main>
                <Hero 
                    image={heroDesktop}
                    highlightedTitle="Adoucisseur d'eau de puits,"
                    mainTitle="une protection experte contre le fer et le calcaire."
                    subtitle="Profitez d'une eau soyeuse et douce, même avec un puits privé. Nos adoucisseurs haute performance neutralisent la dureté extrême et les traces de fer pour préserver votre santé et vos installations."
                    ctaText="Réservez une analyse d'eau"
                    ctaLink="/tests-eau#water-test"
                    showPhone={true}
                    showBreadcrumbs={true}
                    singleLineTitle={true}
                />

                {/* 2. Transition Section - L'Impact de la Pureté */}
                <section className="relative py-32 bg-white overflow-hidden">
                    {/* Background Texture */}
                    <div className="absolute top-0 right-0 w-full h-full opacity-[0.03] pointer-events-none">
                        <img 
                            src={waterRipples} 
                            alt="" 
                            className="w-full h-full object-cover scale-150 rotate-12"
                        />
                    </div>
                    
                    <div className="container mx-auto px-6 relative z-10">
                        <div className="flex flex-col md:flex-row gap-12 md:items-center mb-32">
                            <div className="flex-1 max-w-3xl">
                <span className="inline-block px-4 py-1.5 bg-blue-600/10 text-blue-600 rounded-full text-[10px] font-black tracking-[0.2em] mb-6">
                                    Eau adoucie
                                </span>
                                <h2 
                                    className="scroll-mt-[120px] mb-8"
                                    style={{
                                        fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                                        fontSize: '48px',
                                        lineHeight: '48px',
                                        fontStyle: 'normal'
                                    }}
                                >
                                    <span className="italic font-light text-[#2563eb] block">Vivez l'eau au-delà</span>
                                    <span className="font-bold text-[#1e3a8a] block">de la simple apparence.</span>
                                </h2>
                                <p 
                                    className="text-justify max-w-2xl"
                                    style={{
                                        fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                                        fontSize: '20px',
                                        fontWeight: '300',
                                        lineHeight: '28px',
                                        color: 'rgb(71, 85, 105)'
                                    }}
                                >
                                    Dans un puits privé, la clarté visuelle n'est que la surface. Notre technologie d'adoucissement transforme la structure même de votre eau, éliminant l'agressivité du calcaire et du fer pour une douceur que vous ressentirez à chaque goutte, sur chaque surface.
                                </p>
                            </div>
                            <div className="md:w-1/3 flex justify-center md:justify-end">
                                <img 
                                    src={residentialSoftenerAsset} 
                                    alt="Adoucisseur d'eau résidentiel" 
                                    className="h-auto max-h-[500px] object-contain drop-shadow-2xl"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col space-y-32 md:space-y-48">
                            {/* Benefit 1 - Right Text, Left Image */}
                            <div className="flex flex-col md:flex-row-reverse gap-12 md:items-center group relative">
                                <div className="absolute -top-12 -right-8 text-[180px] font-black text-slate-50 opacity-100 group-hover:text-blue-50 transition-colors duration-1000 select-none tracking-tighter -z-10">
                                    01
                                </div>
                                <div className="md:w-1/2 space-y-8 pr-4 md:text-right flex flex-col items-end">
                                    <div className="space-y-4 items-end flex flex-col">
                                        <h3 className="text-[24px] font-bold text-slate-900 leading-tight group-hover:text-blue-600 transition-colors duration-500">
                                            Adoucissement de haute performance
                                        </h3>
                                        <div className="w-16 h-1 bg-blue-600 rounded-full transform origin-right group-hover:scale-x-150 transition-transform duration-500" />
                                    </div>
                                    <p 
                                        className="text-right max-w-xl"
                                        style={{
                                            fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                                            fontSize: '20px',
                                            fontWeight: '300',
                                            lineHeight: '28px',
                                            color: 'rgb(71, 85, 105)'
                                        }}
                                    >
                                        Un équilibre parfait entre minéralité et douceur. Notre système transforme la structure du calcaire, protégeant vos installations tout en préservant la fraîcheur naturelle de l'eau de puits pour une pureté cristalline inégalée.
                                    </p>
                                </div>
                                <div className="md:w-1/2 overflow-hidden rounded-3xl shadow-2xl">
                                    <img 
                                        src={softwaterImg} 
                                        alt="Test de pureté de l'eau" 
                                        className="w-full h-64 md:h-[400px] object-cover transform group-hover:scale-110 transition-transform duration-1000"
                                    />
                                </div>
                            </div>

                            {/* Benefit 2 - Left Text, Right Image */}
                            <div className="flex flex-col md:flex-row gap-12 md:items-center group relative">
                                <div className="absolute -top-12 -left-8 text-[180px] font-black text-slate-50 opacity-100 group-hover:text-blue-50 transition-colors duration-1000 select-none tracking-tighter -z-10">
                                    02
                                </div>
                                <div className="md:w-1/2 space-y-8 pl-4">
                                    <div className="space-y-4">
                                        <h3 className="text-[24px] font-bold text-slate-900 leading-tight group-hover:text-blue-600 transition-colors duration-500">
                                            Protection et longévité de votre foyer
                                        </h3>
                                        <div className="w-16 h-1 bg-blue-600 rounded-full transform origin-left group-hover:scale-x-150 transition-transform duration-500" />
                                    </div>
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
                                        Dites adieu aux traces de rouille et au vert-de-gris. Une protection active pour votre robinetterie de luxe et vos appareils haut de gamme, prolongeant l'éclat originel de votre foyer pour des décennies.
                                    </p>
                                </div>
                                <div className="md:w-1/2 overflow-hidden rounded-3xl shadow-2xl">
                                    <img 
                                        src={luxuryBathroomImg} 
                                        alt="Salle de bain luxueuse et protégée" 
                                        className="w-full h-64 md:h-[400px] object-cover transform group-hover:scale-110 transition-transform duration-1000"
                                    />
                                </div>
                            </div>

                            {/* Benefit 3 - Right Text, Left Image */}
                            <div className="flex flex-col md:flex-row-reverse gap-12 md:items-center group relative pb-16">
                                <div className="absolute -top-12 -right-8 text-[180px] font-black text-slate-50 opacity-100 group-hover:text-blue-50 transition-colors duration-1000 select-none tracking-tighter -z-10">
                                    03
                                </div>
                                <div className="md:w-1/2 space-y-8 pr-4 md:text-right flex flex-col items-end">
                                    <div className="space-y-4 items-end flex flex-col">
                                        <h3 className="text-[24px] font-bold text-slate-900 leading-tight group-hover:text-blue-600 transition-colors duration-500">
                                            Confort et douceur sensorielle
                                        </h3>
                                        <div className="w-16 h-1 bg-blue-600 rounded-full transform origin-right group-hover:scale-x-150 transition-transform duration-500" />
                                    </div>
                                    <p 
                                        className="text-right max-w-xl"
                                        style={{
                                            fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                                            fontSize: '20px',
                                            fontWeight: '300',
                                            lineHeight: '28px',
                                            color: 'rgb(71, 85, 105)'
                                        }}
                                    >
                                        Offrez à votre famille le luxe d'une eau soyeuse qui hydrate profondément. Une sensation de douceur sur la peau, des cheveux visiblement plus brillants et un linge enveloppé d'un éclat soigné à chaque lavage.
                                    </p>
                                </div>
                                <div className="md:w-1/2 overflow-hidden rounded-3xl shadow-2xl">
                                    <img 
                                        src={spaRelaxationImg} 
                                        alt="Moment de détente spa à domicile" 
                                        className="w-full h-64 md:h-[400px] object-cover transform group-hover:scale-110 transition-transform duration-1000"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. Product Grid Section */}
                <section id="nos-adoucisseurs" className="py-24 bg-gray-50">
                    <div className="container mx-auto px-6">
                        <div className="text-left mb-16">
                            <h2 
                                className="scroll-mt-[120px] mb-8"
                                style={{
                                    fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                                    fontSize: '48px',
                                    lineHeight: '48px',
                                    fontStyle: 'normal'
                                }}
                            >
                                <span className="italic font-light text-[#2563eb] block">Nos adoucisseurs d'eau</span>
                                <span className="font-bold text-[#1e3a8a] block">résidentiels - Eau de puits</span>
                            </h2>
                            <div className="w-24 h-1 bg-blue-600 mb-8"></div>
                            <p 
                                className="mx-auto text-justify mb-8"
                                style={{
                                    fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                                    fontSize: '20px',
                                    fontWeight: '300',
                                    lineHeight: '28px',
                                    color: 'rgb(71, 85, 105)'
                                }}
                            >
                                Découvrez notre gamme exclusive d'adoucisseurs d'eau pour puits, spécialement conçue pour traiter les eaux souterraines les plus complexes. Nos systèmes haute efficacité (HE) éliminent efficacement la dureté, le fer et le manganèse, garantissant une eau pure et douce pour toute votre maison. Grâce à une technologie de régénération intelligente, nos solutions durables protègent vos installations tout en réduisant votre consommation de sel et d'eau. Offrez à votre famille le confort d'une eau de qualité supérieure, débarrassée des impuretés et des problèmes de calcaire typiques des puits artésiens ou de surface.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
                            {products.map((p, i) => (
                                <div
                                    key={i}
                                    className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full cursor-pointer"
                                    onClick={() => window.location.href = p.path || "/adoucisseurs"}
                                >
                                    <div className="relative h-80 overflow-hidden bg-slate-50 flex items-center justify-center p-12">
                                        <img
                                            src={p.image}
                                            alt={`${p.name} - Adoucisseur d'eau spécialisé pour traiter le fer des puits Bricareau`}
                                            className="max-h-full object-contain group-hover:scale-110 transition-transform duration-700 mix-blend-multiply"
                                        />
                                    </div>
                                    <div className="p-8 space-y-4 flex flex-col flex-grow border-t-2 border-transparent group-hover:border-blue-600 transition-colors">
                                        <h3 className="card-title text-center group-hover:text-blue-600 transition-colors duration-500">
                                            {p.displayName || p.name}
                                        </h3>
                                        <p
                                            className="flex-grow text-justify"
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

                {/* 5. Comparison Table Section */}
                <section className="py-24 bg-white border-t border-gray-100">
                    <div className="container mx-auto px-4">
                        <div className="text-left mb-16">
                            <h2 
                                className="scroll-mt-[120px] mb-8"
                                style={{
                                    fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                                    fontSize: '48px',
                                    lineHeight: '48px',
                                    fontStyle: 'normal'
                                }}
                            >
                                <span className="italic font-light text-[#2563eb] block">Comparez nos adoucisseurs</span>
                                <span className="font-bold text-[#1e3a8a] block">d'eau de puits</span>
                            </h2>
                            <div className="w-24 h-1 bg-blue-600"></div>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full min-w-[1000px] border-collapse bg-white rounded-2xl overflow-hidden shadow-sm">
                                <thead>
                                    <tr className="bg-gray-100">
                                        <th className="p-8 text-left text-gray-400 font-light uppercase tracking-wider w-1/4">Modèle</th>
                                        {[
                                            { name: "Sérénité HE", img: SerenityWaterSoftenerImg },
                                            { name: "Sentinel HE", img: SentinelWaterSoftenerImg },
                                            { name: "Infiniti HE", img: TwinAlternatingWaterSoftenerImg }
                                        ].map(m => (
                                            <th key={m.name} className="p-4 text-center text-gray-900 font-bold border-l border-white/50 first:border-l-0">
                                                <div className="flex flex-col items-center">
                                                    <div className="h-[100px] w-full flex items-center justify-center mb-4">
                                                        <img
                                                            src={m.img}
                                                            alt={`Modèle ${m.name} - Système de filtration d'eau de puits haute efficacité Bricareau`}
                                                            className="max-h-full max-w-full object-contain mix-blend-multiply"
                                                        />
                                                    </div>
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
                                            <td className="p-8 font-bold text-slate-900 border-r border-gray-100 bg-gray-50/30">{row.feature}</td>
                                            {["Sérénité HE", "Sentinel HE", "Infiniti HE"].map((model) => (
                                                <td key={model} className="p-8 text-center text-lg font-light leading-snug text-gray-600 text-justify">
                                                    {row[model as keyof ComparisonItem]}
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
                            src={waterTestingImg}
                            alt="Test de dureté et analyse de fer pour eau de puits résidentielle - Expertise Bricareau"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/20" />
                    </div>

                    {/* Desktop Background */}
                    <div className="hidden lg:block absolute inset-0 z-0">
                        <img
                            src={waterTestingImg}
                            alt="Test de dureté et analyse de fer pour eau de puits résidentielle"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/30 lg:bg-gradient-to-r lg:from-black/50 lg:to-transparent" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-white via-white/10 to-transparent" />
                    </div>

                    <div className="container mx-auto px-4 relative z-10 flex items-center py-12 lg:py-0">
                        <div className="max-w-2xl text-slate-900 lg:text-white">
                             <h2 
                                 className="scroll-mt-[120px] mb-8"
                                 style={{
                                    fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                                    fontSize: '48px',
                                    lineHeight: '48px',
                                    fontStyle: 'normal'
                                 }}
                             >
                                 <span className="italic font-light text-blue-400 block tracking-tight">Des tests d'eau précis</span>
                                 <span className="font-bold text-white block tracking-tight">pour une tranquillité d'esprit.</span>
                             </h2>
                            <p className="font-light text-slate-500 lg:text-white/95 mb-8 max-w-xl text-left lg:text-justify">
                                Ne devinez pas la qualité de votre eau. Nos analyses approfondies identifient les bactéries, les minéraux et les contaminants chimiques pour vous offrir une tranquillité d'esprit totale.
                            </p>
                            <div className="flex gap-4">
                                <Button asChild>
                                    <a href="/tests-eau">Demandez une analyse d'eau</a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 7.Testimonials Grid Section */}
                <TestimonialsSection
                    filterProduct="/adoucisseurs-eau-de-puits"
                    title={
                        <>
                            <h2 
                                className="mb-8"
                                style={{
                                    fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                                    fontSize: '48px',
                                    lineHeight: '48px',
                                    fontStyle: 'normal'
                                }}
                            >
                                <span className="italic font-light text-[#2563eb] block text-center">Là où le calcaire dictait sa loi,</span>
                                <span className="font-bold text-[#1e3a8a] block text-center">nos clients ont repris le contrôle.</span>
                            </h2>
                        </>
                    }
                />

                {/* 8. Section Associated Products */}
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
                            <p 
                                className="mx-auto text-center"
                                style={{
                                    fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                                    fontSize: '20px',
                                    fontWeight: '300',
                                    lineHeight: '28px',
                                    color: 'rgb(71, 85, 105)'
                                }}
                            >
                                Optimisez votre expérience de traitement d'eau avec nos solutions complémentaires.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    name: "Systèmes de filtration d'eau spécialisés",
                                    desc: "Nos filtres spécialisés sont conçus pour cibler et éliminer efficacement les contaminants spécifiques de votre eau de puits.",
                                    img: specialFiltersImg,
                                    link: "/Filtres-deau"
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
                                            className="flex-grow text-justify"
                                            style={{
                                                fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                                                fontSize: '20px',
                                                fontWeight: '300',
                                                lineHeight: '28px',
                                                color: 'rgb(71, 85, 105)'
                                            }}
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

                {/* 9. CTA Section - Premium Immersive */}
                <section className="relative py-32 overflow-hidden">
                    {/* Background Image with Overlay */}
                    <div className="absolute inset-0 z-0">
                        <img
                            src={mantakesbathImg}
                            alt="Expert Bricareau en traitement d'eau de puits"
                            className="w-full h-full object-cover object-[center_30%]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-900/60 to-blue-800/40 backdrop-blur-[2px]" />
                    </div>

                    <div className="container mx-auto px-6 relative z-10 text-center">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-white mb-6">
                                <span className="font-bold leading-tight block tracking-tight">Préservez votre foyer avec une eau d'une douceur absolue.</span>
                            </h2>

                            <p className="text-white/80 text-xl font-light mb-10 max-w-2xl mx-auto">
                                Ne laissez plus le calcaire de votre puits user vos électroménagers et agresser votre peau. Alliez la performance d'une plomberie protégée au confort d'une eau douce à chaque robinet.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                                <Button asChild>
                                    <a href="tel:18552649328" className="flex items-center gap-3">
                                        <Phone className="h-5 w-5 animate-bounce" />
                                        Parlez à un expert
                                    </a>
                                </Button>

                                <Button variant="secondary" asChild>
                                    <NavLink to="/consultation">Planifiez une consultation</NavLink>
                                </Button>
                            </div>

                            <p className="mt-8 text-white/50 text-sm font-light">
                                Disponible 7j/7 — Réponse en moins de 24h
                            </p>
                        </div>
                    </div>
                </section>

                {/* 11. FAQ Section */}
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

                {/* 12. Resources Section */}
                <section className="py-24 bg-gray-50">
                    <div className="container mx-auto px-6 text-left">
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
                                { title: "Adoucisseur d'eau et fosse septique : compatible ou non ?", img: adoucisseurFosseImg, link: "/adoucisseur-deau-et-fosse-septique-mythes-et-realites" },
                                { title: "Adoucisseur sans sel vs avec sel : la vérité technique", img: residentialWaterSoftenerImg, link: "/adoucisseur-sans-sel-vs-avec-sel-verite-technique" },
                                { title: "Conditionneur d'eau : Une alternative écologique à l'adoucisseur sans sel", img: conditionneursImg, link: "/conditionneur-deau-une-alternative-ecologique-a-ladoucisseur-sans-sel" }
                            ].map((art, i) => (
                                <div
                                    key={i}
                                    className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer group flex flex-col h-full border border-gray-100"
                                    onClick={() => navigate(art.link)}
                                >
                                    <div className="h-56 overflow-hidden">
                                        <img src={art.img} alt={`${art.title} - Expertise Bricareau en traitement d'eau de puits`} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
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
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default AdoucisseursEauDePuits;
