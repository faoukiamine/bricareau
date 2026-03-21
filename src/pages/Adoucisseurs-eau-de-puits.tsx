import React, { useEffect } from 'react';
import Header from "@/components/Header";
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
    "Sérénité HE": string;
    "Sentinel HE": string;
    "Infiniti HE": string;
}

const comparisonData: ComparisonItem[] = [
    {
        feature: "Principe de Déclenchement",
        "Sérénité HE": "Se régénère à intervalles de temps fixes (ex: tous les 3 jours).",
        "Sentinel HE": "Se régénère selon le volume d'eau réellement consommé.",
        "Infiniti HE": "Alterne entre deux bouteilles dès que l'une est saturée."
    },
    {
        feature: "Disponibilité d'Eau Douce",
        "Sérénité HE": "Interrompue pendant la régénération (souvent la nuit).",
        "Sentinel HE": "Interrompue pendant la régénération (souvent la nuit).",
        "Infiniti HE": "Permanente (24h/24) sans aucune interruption."
    },
    {
        feature: "Efficacité (Sel & Eau)",
        "Sérénité HE": "Moyenne (consomme même si peu d'eau a été utilisée).",
        "Sentinel HE": "Optimale (ne se régénère que si nécessaire).",
        "Infiniti HE": "Maximale (utilise la résine à 100% de sa capacité)."
    },
    {
        feature: "Profil Utilisateur Idéal",
        "Sérénité HE": "Consommation d'eau très stable et prévisible.",
        "Sentinel HE": "Familles avec variations de consommation (invités, saisons).",
        "Infiniti HE": "Grosses consommations ou besoins critiques (gîtes, grandes familles)."
    },
    {
        feature: "Complexité Technique",
        "Sérénité HE": "Simple et très robuste.",
        "Sentinel HE": "Électronique avancée avec capteur de débit.",
        "Infiniti HE": "Système double nécessitant plus d'espace."
    },
    {
        feature: "Investissement Initial",
        "Sérénité HE": "Économique.",
        "Sentinel HE": "Intermédiaire.",
        "Infiniti HE": "Plus élevé."
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
                {/* 1. Hero Section */}
                <section className="relative lg:h-[650px] md:h-[800px] flex items-center overflow-hidden bg-white">
                    <div className="absolute top-[30px] left-0 right-0 z-30 pointer-events-none hidden lg:block">
                        <div className="container mx-auto px-6 pointer-events-auto text-left">
                            <GlobalBreadcrumbs variant="dark" />
                        </div>
                    </div>
                    <div className="relative lg:absolute lg:inset-0 h-[350px] sm:h-[450px] lg:h-full w-full lg:z-0 overflow-hidden">
                        <picture>
                            <source media="(max-width: 768px)" srcSet={heroBath} />
                            <img
                                src={heroDesktop}
                                alt="Bain d'enfant dans une eau de puits douce et saine - Adoucisseur d'eau Bricareau"
                                className="w-full h-full object-cover object-[center_30%]"
                            />
                        </picture>
                        <div className="hidden lg:block absolute inset-0 bg-black/40 lg:bg-gradient-to-r lg:from-black/60 lg:to-transparent" />
                        <div className="hidden lg:block absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-white via-white/10 to-transparent" />
                        <div className="hidden lg:block absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white/90 via-white/40 to-transparent" />
                    </div>

                    <div className="container relative z-10 mx-auto px-4 h-full flex items-center lg:px-6">
                        <div className="max-w-2xl lg:text-white py-12 lg:py-0">
                            <h1
                                className="text-[48px] md:text-[48px] leading-[1.1] md:leading-[1.2] mb-4 lg:mb-8 tracking-tighter text-slate-900 lg:text-white text-left lg:text-justify max-w-xl"
                                style={{
                                    fontWeight: 600
                                }}
                            >
                                Adoucisseur d'eau de puits, une protection experte contre le fer et le calcaire.
                            </h1>
                            <p className="font-light text-slate-600 lg:text-white/95 mb-8 max-w-xl text-left lg:text-justify">
                                Profitez d'une eau soyeuse et douce, même avec un puits privé. Nos adoucisseurs haute performance neutralisent la dureté extrême et les traces de fer pour préserver votre santé et vos installations.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button
                                    size="lg"
                                    className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 h-14 shadow-lg shadow-blue-200"
                                    style={{}}
                                    asChild
                                >
                                    <a href="/tests-eau#water-test">Réservez une analyse d'eau</a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. Why choose our water softeners */}
                <section className="py-24 bg-blue-600 text-white text-center">
                    <div className="container mx-auto px-6 text-center">
                        <div className="text-left mb-16">
                            <h2
                                className="text-white mb-8 text-left"
                                style={{}}
                            >
                                <span className="text-[32px] md:text-[60px] font-light leading-[1.1] md:leading-[60px] block">Pourquoi choisir nos</span>
                                <span className="text-[32px] md:text-[60px] font-normal leading-[1.1] md:leading-[60px] block">adoucisseurs d'eau résidentiels ?</span>
                            </h2>
                            <div className="w-24 h-1 bg-white"></div>
                        </div>
                        <div className="flex flex-wrap justify-center gap-x-12 gap-y-16">
                            {[
                                { icon: Droplets, title: "Qualité supérieure", desc: "Une douceur incomparable pour votre peau et vos cheveux dès la première douche." },
                                { icon: Sparkles, title: "Vaisselle étincelante", desc: "Éliminez les taches de calcaire et le voile blanc sur vos verres et plats sans effort." },
                                { icon: Shirt, title: "Linge plus doux", desc: "Des vêtements qui restent éclatants et souples plus longtemps, sans adoucissants." },
                                { icon: safetyIcon, isImage: true, title: "Sécurité accrue", desc: "Tranquillité d'esprit totale pour la santé de votre famille." },
                                { icon: Shield, title: "Protection totale", desc: "Prolongez la durée de vie de votre plomberie et de vos électroménagers coûteux." },
                                { icon: HandCoins, title: "Économies garanties", desc: "Réduisez vos factures d'énergie et vos dépenses en savons et détergents de 50%." },
                                { icon: Zap, title: "Efficacité HE", desc: "Une technologie haute efficacité qui consomme moins de sel et d'eau lors des régénérations." },
                                { icon: Zap, title: "Protection Éco-Durable", desc: "Préservez l'environnement et vos installations septiques en diminuant le rejet de produits chimiques." },
                                { icon: Award, title: "Expertise Bricareau", desc: "Installation certifiée et service après-vente pour une tranquillité d'esprit totale." }
                            ].map((item, idx) => (
                                <div key={idx} className="flex flex-col items-center group w-full sm:w-[calc(50%-3rem)] lg:w-[calc(25%-3rem)]">
                                    <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center mb-8 transition-all group-hover:scale-110 group-hover:bg-white/10">
                                        {item.isImage ? (
                                            <img src={item.icon as string} alt={item.title} className="h-12 w-12 object-contain" />
                                        ) : (
                                            <item.icon className="h-10 w-10 text-blue-600 group-hover:text-white" />
                                        )}
                                    </div>
                                    <h4 className="mb-4 tracking-tight">{item.title}</h4>
                                    <p className="font-light text-blue-100 text-justify">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 4. Product Grid Section */}
                <section id="nos-adoucisseurs" className="py-24 bg-gray-50">
                    <div className="container mx-auto px-6">
                        <div className="text-left mb-16">
                            <h2
                                className="text-slate-900 mb-8 text-left"
                                style={{}}
                            >
                                <span className="text-[42px] md:text-[42px] font-light leading-[1.1] md:leading-[42px] block">Nos adoucisseurs d'eau</span>
                                <span className="text-[42px] md:text-[42px] font-normal leading-[1.1] md:leading-[42px] block">résidentiels - Eau de puits</span>
                            </h2>
                            <div className="w-24 h-1 bg-blue-600 mb-8"></div>
                            <p className="font-light text-gray-600 max-w-7xl mx-auto text-justify mb-8">
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
                                        <h3
                                            className="text-slate-900 group-hover:text-blue-600 transition-colors tracking-tight text-center"
                                            style={{}}
                                        >
                                            {p.displayName || p.name}
                                        </h3>
                                        <p
                                            className="text-slate-500 font-light leading-[24px] flex-grow text-justify"
                                            style={{}}
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
                                className="text-slate-900 mb-8 text-left"
                                style={{}}
                            >
                                <span className="text-[42px] md:text-[42px] font-light leading-[1.1] md:leading-[42px] block">Comparez nos adoucisseurs</span>
                                <span className="text-[42px] md:text-[42px] font-normal leading-[1.1] md:leading-[42px] block">d'eau de puits</span>
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
                                className="md:leading-[60px] lg:font-light mb-8 text-slate-900 lg:text-white text-left"
                                style={{}}
                            >
                                Des tests d'eau précis <span className="lg:font-bold"><br />pour une tranquillité d'esprit totale.</span>
                            </h2>
                            <p className="font-light text-slate-500 lg:text-white/95 mb-8 max-w-xl text-left lg:text-justify">
                                Ne devinez pas la qualité de votre eau. Nos analyses approfondies identifient les bactéries, les minéraux et les contaminants chimiques pour vous offrir une tranquillité d'esprit totale.
                            </p>
                            <div className="flex gap-4">
                                <Button
                                    size="lg"
                                    className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 h-14 shadow-lg shadow-blue-200"
                                    style={{}}
                                    onClick={() => document.getElementById('nos-adoucisseurs')?.scrollIntoView({ behavior: 'smooth' })}
                                >
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
               <h2 className="text-slate-900 mb-6 text-[42px] leading-[42px]">
                                <span className="font-light block">Là où le calcaire dictait sa loi,</span>
                                <span className="font-bold text-blue-600">nos clients ont repris le contrôle.</span>
                            </h2>
                        </>
                    }
                />

                {/* 8. Section Associated Products */}
                <section className="bg-white py-24">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-slate-900 mb-8 text-[42px] leading-[42px]">Découvrez les produits associés</h2>
                            <p className="font-light text-gray-500 max-w-2xl mx-auto text-justify">
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
                                        <h3
                                            className="text-slate-900 group-hover:text-blue-600 transition-colors tracking-tight text-center"
                                            style={{}}
                                        >
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

                {/* 9. CTA Section - Premium Immersive */}
                <section className="relative py-32 overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src={eauDePuitsImg}
              alt="Expert Bricareau en traitement d'eau de puits"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-900/90 to-blue-800/80 backdrop-blur-[2px]" />
          </div>

          <div className="container mx-auto px-6 relative z-10 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-white mb-6">
                <span className="text-[42px] md:text-[42px] font-light leading-tight block tracking-tight opacity-90 italic">Besoin d'aide avec</span>
                <span className="text-[42px] md:text-[42px] font-bold leading-tight block tracking-tight uppercase">votre eau de puits ?</span>
              </h2>

              <p className="text-blue-100/80 font-light text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
                Discutez avec un expert en un clic. Disponible par téléphone ou à domicile selon vos préférences.
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
                  <NavLink to="/consultation">Planifiez une consultation</NavLink>
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
                                className="text-slate-900 mb-8 text-left"
                                style={{}}
                            >
                                <span className="text-[42px] md:text-[42px] font-light leading-[1.1] md:leading-[42px] block">Pour vous éclairer</span>
                                <span className="text-[42px] md:text-[42px] font-normal leading-[1.1] md:leading-[42px] block">Questions fréquentes</span>
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
                                    className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-12 h-14 shadow-lg shadow-blue-200"
                                >
                                    {showAllFaqs ? "Voir moins de questions" : "Voir toutes les questions"}
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 11.Resources Section */}
                <section className="py-24 bg-gray-50">
                    <div className="container mx-auto px-6 text-left">
                        <div className="text-left mb-16">
                            <h2
                                className="text-slate-900 mb-8 text-left"
                                style={{}}
                            >                                <span className="text-[42px] md:text-[42px] font-normal leading-[1.1] md:leading-[42px] block">Ressources</span>
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
