import React, { useEffect } from 'react';
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import ExpertAvatars from "@/components/ExpertAvatars";
import TestimonialsSection from "@/components/TestimonialsSection";
import { Button } from "@/components/ui/button";
import heroDesktop from "@/assets/family-preparing-dinner-together.jpg";
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
    ChevronRight,
    CheckCircle2,
    Phone
} from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { useNavigate } from "react-router-dom";
import waterTestingImg from "@/assets/2147800429.jpg";
import { softenerImg as residentialWaterSoftenerImg } from "./Blog pages/Comment régler la dureté de votre adoucisseur ";
import { adoucisseurImg as adoucisseurFosseImg } from "./Blog pages/Adoucisseur-deau- et-fosse-septique--Mythes-et-réalités";
import { conditionneursImg } from "./Blog pages/Adoucisseur avec sel ou sans sel";
import specialFiltersImg from "@/assets/Filtres d'eau spécialisés.webp";
import uvSystemImg2 from "@/assets/VH200-F10-265x300.jpg";
import drinkingWaterImg from "@/assets/Solutions d'eau potable.webp";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from "@/components/ui/accordion";
import hardWaterFaucetImg from "@/assets/Hard Water-Faucet.jpg";
import drySkinImg from "@/assets/different-types-of-eczema.jpg";
import cloudyGlassImg from "@/assets/18036672_SIE_2720_1530_21_04_30_SIE_CRM_Dishwasher_Hand_Taking_Out_Wine_Glass_Basket_Motiv_11_0017.webp";
import brokenHeaterImg from "@/assets/detartrage-chauffe-eau-electrique.jpg";
import ironStainImg from "@/assets/5a4674e7-575d-4cd9-b1f2-32522f8a7072.jpg";
import ourteamstudyyourwaterImg from "@/assets/10271.jpg";

const products = [
    { 
        name: "Adoucisseur d'eau de la série Sentinelle HE", 
        displayName: <>Adoucisseur d'eau de la série<br />Sentinelle HE</>, 
        desc: "Votre priorité est d'éradiquer le calcaire avec une précision chirurgicale, sans complexité inutile.", 
        features: ["Protection des électros", "Format compact intelligent", "Économie de sel optimisée"],
        path: "/contact", 
        image: SentinelWaterSoftenerImg 
    },
    { 
        name: "Adoucisseur d'eau de la série Sérénité HE", 
        displayName: <>Adoucisseur d'eau de la série<br />Sérénité HE</>, 
        desc: "Vous cherchez l'eau parfaite pour la peau, les cheveux et la consommation, en éliminant aussi le chlore.", 
        features: ["Hybride : Calcaire & Chlore", "Douceur dermatologique", "Élimine odeurs et goûts"],
        isRecommended: true,
        path: "/contact", 
        image: SerenityWaterSoftenerImg 
    },
    { 
        name: "Adoucisseur d'eau de la série Infiniti HE", 
        displayName: <>Adoucisseur d'eau de la série<br />Infiniti HE</>, 
        desc: "Grandes familles ou besoins critiques : vous refusez toute interruption de douceur, 24h/24.", 
        features: ["Double bouteille alternée", "Eau douce non-stop", "Performance industrielle"],
        path: "/contact", 
        image: TwinAlternatingWaterSoftenerImg 
    },
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
                    <div className="absolute top-0 right-0 w-full h-full opacity-[0.1] pointer-events-none">
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
                                <h2 className="scroll-mt-[120px] mb-8 heading-pro-max">
                                    <span className="italic font-light text-[#2563eb] block">Vivez l'eau au-delà</span>
                                    <span className="font-bold text-[#1e3a8a] block">de la simple apparence.</span>
                                </h2>
                                <p className="body-pro-max text-justify max-w-2xl text-slate-600 font-light">
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

                        {/* Architectural Benefits Deck */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-slate-100 shadow-2xl overflow-hidden rounded-none">
                            <div className="group relative bg-transparent border-r border-b lg:border-b-0 border-slate-100 min-h-[450px] flex flex-col transition-all duration-1000">
                                <div className="absolute top-4 left-6 text-[120px] font-black text-slate-900/5 select-none pointer-events-none tracking-tighter italic">01</div>
                                <div className="relative z-10 flex-1 p-10 lg:p-14 flex flex-col justify-between">
                                    <div className="space-y-6">
                                        <div className="w-12 h-1 bg-blue-600"></div>
                                        <h3 className="text-3xl font-bold text-[#1e3a8a] leading-tight max-w-[280px]">Adoucissement de haute performance</h3>
                                        <p className="body-pro-max text-justify text-[15px] leading-relaxed max-w-xs text-slate-600 font-light">Un équilibre parfait entre minéralité et douceur. Notre système transforme la structure du calcaire, protégeant vos installations.</p>
                                    </div>
                                    <div className="mt-12 -mx-10 lg:-mx-14 -mb-10 lg:-mb-14 h-64 overflow-hidden border-t border-slate-50">
                                        <img src={softwaterImg} alt="Pureté de l'eau" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[4000ms]" />
                                    </div>
                                </div>
                            </div>

                            <div className="group relative bg-transparent border-b lg:border-b-0 border-slate-100 min-h-[450px] flex flex-col transition-all duration-1000">
                                <div className="absolute top-4 left-6 text-[120px] font-black text-slate-900/5 select-none pointer-events-none tracking-tighter italic">02</div>
                                <div className="relative z-10 flex-1 p-10 lg:p-14 flex flex-col justify-between">
                                    <div className="space-y-6">
                                        <div className="w-12 h-1 bg-blue-600"></div>
                                        <h3 className="text-3xl font-bold text-[#1e3a8a] leading-tight max-w-[280px]">Confort et douceur sensorielle</h3>
                                        <p className="body-pro-max text-justify text-[15px] leading-relaxed max-w-xs text-slate-600 font-light">Offrez à votre famille le luxe d'une eau soyeuse qui hydrate profondément. Une sensation de douceur sur la peau.</p>
                                    </div>
                                    <div className="mt-12 -mx-10 lg:-mx-14 -mb-10 lg:-mb-14 h-64 overflow-hidden border-t border-slate-50">
                                        <img src={spaRelaxationImg} alt="Douceur sensorielle" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[4000ms]" />
                                    </div>
                                </div>
                            </div>

                            <div className="group relative bg-transparent col-span-1 lg:col-span-2 border-t border-slate-100 flex flex-col transition-all duration-1000">
                                <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
                                    <div className="relative p-10 lg:p-20 flex flex-col justify-center space-y-8 overflow-hidden">
                                        <div className="absolute -top-10 -right-10 text-[240px] font-black text-slate-900/5 select-none pointer-events-none tracking-tighter italic">03</div>
                                        <div className="relative z-10 space-y-8">
                                            <div className="w-20 h-1.5 bg-blue-600"></div>
                                            <h3 className="text-4xl lg:text-5xl font-black text-[#1e3a8a] leading-[1.1]">Protection et longévité <br/> <span className="text-blue-600 italic font-light">de votre foyer</span></h3>
                                            <p className="body-pro-max text-justify text-lg leading-relaxed max-w-2xl text-slate-600 font-light">Dites adieu aux traces de rouille. Une protection active pour votre robinetterie de luxe et vos appareils haut de gamme.</p>
                                            <div className="pt-6">
                                                <Button asChild><a href="/tests-eau">Protégez vos installations</a></Button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="relative overflow-hidden h-[400px] lg:h-auto">
                                        <img src={luxuryBathroomImg} alt="Protection" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[6000ms]" />
                                        <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent hidden lg:block opacity-50"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2.5 Diagnostic Branding Section */}
                <section className="py-24 bg-slate-50 relative overflow-hidden">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                            <div className="max-w-3xl">
                                <span className="inline-block px-4 py-1 bg-red-600/10 text-red-600 rounded-full text-[10px] font-black tracking-widest mb-4">VOTRE PUITS VOUS PARLE</span>
                                <h2 className="heading-pro-max">
                                    <span className="italic font-light text-blue-600 block">Identifiez les signes de</span>
                                    <span className="font-bold text-[#1e3a8a] block">la dureté extrême.</span>
                                </h2>
                            </div>
                            <p className="body-pro-max max-w-sm text-slate-500 italic border-l-2 border-red-500 pl-6">Le calcaire de puits est plus agressif. Ne le laissez pas ronger la valeur de votre investissement.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { problem: "Robinetterie Entartrée", cause: "Calcaire & Magnésium", solution: "Protection Active", color: "bg-blue-500", img: hardWaterFaucetImg },
                                { problem: "Peau & Cheveux Secs", cause: "Irritation par les minéraux", solution: "Douceur Sensorielle", color: "bg-pink-500", img: drySkinImg },
                                { problem: "Vaisselle Voilée", cause: "Dépôts minéraux", solution: "Éclat Crystal", color: "bg-cyan-400", img: cloudyGlassImg },
                                { problem: "Chauffe-eau Entartré", cause: "Calcaire", solution: "Efficacité Énergétique", color: "bg-orange-600", img: brokenHeaterImg },
                                { problem: "Taches de Rouille", cause: "Fer ferreux", solution: "Iron Fighter Technology", color: "bg-amber-700", img: ironStainImg },
                                { problem: "Linge Rêche", cause: "Frottement minéral", solution: "Soin des Textiles", color: "bg-indigo-500", img: residentialSoftenerAsset }
                            ].map((s, i) => (
                                <div 
                                    key={i} 
                                    className="group relative h-[360px] rounded-[3.5rem] overflow-hidden border border-white bg-white/40 backdrop-blur-xl shadow-sm cursor-pointer transition-all duration-700 hover:shadow-2xl hover:-translate-y-2"
                                    onClick={() => navigate("/consultation")}
                                >
                                    <div className="absolute inset-0 z-0">
                                        <img src={s.img} alt={s.problem} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-30" />
                                        <div className="absolute inset-0 bg-gradient-to-br from-white via-white/80 to-transparent" />
                                    </div>
                                    <div className="relative z-10 inset-0 p-10 h-full flex flex-col justify-between">
                                        <div className="space-y-4">
                                            <div className="flex items-center gap-3">
                                                <div className={`w-3 h-3 rounded-full ${s.color} shadow-lg`} />
                                                <span className="text-[10px] font-black uppercase tracking-wider text-slate-500">Cause : {s.cause}</span>
                                            </div>
                                            <h3 className="text-3xl font-bold text-[#1e3a8a] leading-[1.1]">{s.problem}</h3>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="h-px w-12 bg-blue-200 group-hover:w-full transition-all duration-700" />
                                            <div className="text-xs font-light text-slate-600 italic">Bénéfice : <span className="font-bold">{s.solution}</span></div>
                                        </div>
                                    </div>
                                    <div className="absolute inset-0 bg-blue-600/95 z-20 opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col items-center justify-center p-8 translate-y-full group-hover:translate-y-0 text-center">
                                        <p className="text-white/80 text-xs font-black uppercase tracking-widest mb-2 italic">Analyse gratuite</p>
                                        <h4 className="text-white text-2xl font-bold leading-tight px-6 mb-6">Mesurer ma dureté d'eau</h4>
                                        <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white border border-white/20"><ArrowRight className="w-6 h-6" /></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 3. Product Grid Section */}
                <section id="nos-adoucisseurs" className="py-24 bg-gray-50">
                    <div className="container mx-auto px-6 text-left">
                        <div className="text-left mb-16">
                            <h2 className="mb-8 heading-pro-max text-left">
                                <span className="italic font-light text-[#2563eb] block text-left">Nos adoucisseurs d'eau</span>
                                <span className="font-bold text-[#1e3a8a] block text-left">résidentiels - Eau de puits</span>
                            </h2>
                            <div className="w-24 h-1 bg-blue-600"></div>
                            <p className="body-pro-max mt-8 text-justify w-full">Découvrez notre gamme exclusive d'adoucisseurs d'eau pour puits, conçue pour traiter les eaux souterraines complexes.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {products.map((p, i) => (
                                <div key={i} className="group bg-white rounded-[3rem] overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-700 hover:-translate-y-3 flex flex-col h-full cursor-pointer" onClick={() => navigate(p.path || "/contact")}>
                                    <div className="relative h-80 overflow-hidden bg-slate-50/50 flex items-center justify-center p-12">
                                        {p.isRecommended && <div className="absolute top-6 right-6 z-10"><span className="inline-block px-4 py-1.5 bg-blue-600 text-white rounded-full text-[10px] font-black uppercase tracking-[0.3em] shadow-lg">RECOMMANDÉ</span></div>}
                                        <img src={p.image} alt={p.name} className="max-h-full object-contain group-hover:scale-110 transition-transform duration-1000 mix-blend-multiply" />
                                    </div>
                                    <div className="p-10 space-y-6 flex flex-col flex-grow border-t border-transparent group-hover:border-blue-600 transition-all duration-500">
                                        <h3 className="text-2xl font-bold text-[#1e3a8a] text-center whitespace-pre-line">{p.displayName || p.name}</h3>
                                        <p className="text-slate-500 text-sm leading-relaxed text-center italic font-light">{p.desc}</p>
                                        <div className="space-y-4 flex-grow">
                                            {p.features?.map((f, idx) => (
                                                <div key={idx} className="flex items-start gap-3">
                                                    <div className="mt-1 w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors"><CheckCircle2 className="w-3 h-3 text-blue-600 group-hover:text-white" /></div>
                                                    <span className="text-sm text-slate-600 font-medium">{f}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="pt-6 border-t border-slate-50 flex items-center justify-between">
                                            <span className="text-[10px] font-black uppercase tracking-widest text-blue-600/40 italic">Détails techniques</span>
                                            <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all"><ArrowRight className="h-5 w-5" /></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 5. Comparison Table Section */}
                <section className="py-24 bg-white relative overflow-hidden">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-widest mb-6">ANALYSE COMPARATIVE</span>
                            <h2 className="heading-pro-max">
                                <span className="italic font-light text-[#2563eb] block">L'expertise technique</span>
                                <span className="font-bold text-[#1e3a8a] block">au service de votre puits.</span>
                            </h2>
                        </div>
                        <div className="overflow-x-auto pb-12">
                            <table className="w-full min-w-[1000px] border-collapse bg-white rounded-[3rem] overflow-hidden shadow-xl border border-slate-100">
                                <thead>
                                    <tr className="bg-slate-50/50">
                                        <th className="p-10 text-left text-blue-900/40 font-black uppercase tracking-widest text-[10px]">Critères de Performance</th>
                                        {[
                                            { name: "Sentinelle HE", img: SentinelWaterSoftenerImg, badge: "Efficacité Pure", color: "bg-emerald-600" },
                                            { name: "Sérénité HE", img: SerenityWaterSoftenerImg, badge: "Choix des Familles", color: "bg-blue-600" },
                                            { name: "Infiniti HE", img: TwinAlternatingWaterSoftenerImg, badge: "Performance 24/7", color: "bg-indigo-700" }
                                        ].map((m, i) => (
                                            <th key={i} className="p-6 text-center align-bottom">
                                                <div className="flex flex-col items-center gap-6">
                                                    <div className="relative group/img pr-4 pt-4">
                                                        <span className={`absolute top-0 right-0 z-20 px-3 py-1 ${m.color} text-white rounded-full text-[8px] font-bold uppercase tracking-widest shadow-lg shadow-blue-900/10 whitespace-nowrap`}>
                                                            {m.badge}
                                                        </span>
                                                        <div className="absolute inset-0 bg-blue-600 rounded-full blur-2xl opacity-0 group-hover/img:opacity-20 transition-opacity duration-700" />
                                                        <img
                                                            src={m.img}
                                                            alt={m.name}
                                                            className="w-[140px] h-[120px] object-contain mx-auto mix-blend-multiply relative z-10 transition-transform duration-700 group-hover/img:scale-110"
                                                        />
                                                    </div>
                                                    <div className="space-y-2">
                                                        <div className="text-lg font-bold text-[#1e3a8a]">{m.name}</div>
                                                    </div>
                                                </div>
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {comparisonData.map((row, i) => (
                                        <tr key={i} className="hover:bg-blue-50/30 transition-colors group">
                                            <td className="p-10 font-bold text-[#1e3a8a] border-r border-slate-50 bg-slate-50/20 text-sm italic group-hover:text-blue-600">{row.feature}</td>
                                            {["Sérénité HE", "Sentinel HE", "Infiniti HE"].map((model) => (
                                                <td key={model} className="p-10 text-center text-sm font-light text-slate-600">{row[model as keyof ComparisonItem]}</td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* 6. Water Testing Section */}
                <section className="relative lg:h-[750px] flex flex-col lg:flex-row items-stretch overflow-hidden bg-white">
                    <div className="lg:hidden w-full h-[300px] relative">
                        <img src={waterTestingImg} alt="Test de dureté" className="w-full h-full object-cover" />
                    </div>
                    <div className="hidden lg:block absolute inset-0 z-0">
                        <img src={waterTestingImg} alt="Test de dureté" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/30 lg:bg-gradient-to-r lg:from-black/50 lg:to-transparent" />
                    </div>
                    <div className="container mx-auto px-6 relative z-10 flex items-center py-12 lg:py-0">
                        <div className="max-w-2xl text-slate-900 lg:text-white">
                            <span className="font-bold text-[#1e3a8a] lg:text-white block uppercase tracking-widest text-xs mb-4">Contrôle de la Qualité D'EAU</span>
                            <h2 className="heading-pro-max">
                                <span className="italic font-light text-[#1e3a8a] lg:text-white block tracking-tight">Des tests d'eau précis</span>
                                <span className="font-bold text-[#1e3a8a] lg:text-white block tracking-tight">pour une tranquillité d'esprit.</span>
                            </h2>
                            <p className="font-light text-slate-500 lg:text-white/95 mb-8 max-w-xl text-lg mt-6">Analyse approfondie pour identifier les minéraux et contaminants.</p>
                            <div className="flex gap-4"><Button asChild><a href="/tests-eau">Demandez une analyse d'eau</a></Button></div>
                        </div>
                    </div>
                </section>

                {/* 7. Testimonials */}
                <TestimonialsSection
                    filterProduct="/adoucisseurs-eau-de-puits"
                    title={
                        <h2 className="mb-16 heading-pro-max text-center">
                            <span className="italic font-light text-[#2563eb] block text-center">Là où le calcaire dictait sa loi,</span>
                            <span className="font-bold text-[#1e3a8a] block text-center">nos clients ont repris le contrôle.</span>
                        </h2>
                    }
                />

                {/* 8. Associated Products */}
                <section className="bg-white py-24">
                    <div className="container mx-auto px-6 text-left">
                        <div className="text-left mb-16">
                            <h2 className="mb-8 heading-pro-max text-center">
                                <span className="font-bold text-[#1e3a8a] block text-center">Découvrez les produits associés</span>
                            </h2>
                            <p className="body-pro-max text-gray-500 text-center mx-auto">
                                Optimisez votre expérience de traitement d'eau avec nos solutions complémentaires.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { name: "Filtration spécialisée", desc: "Ciblez fer, tanins, soufre.", img: specialFiltersImg, link: "/Filtres-deau" },
                                { name: "Désinfection UV", desc: "Stérilisation absolue.", img: uvSystemImg2, link: "/systemes-de-desinfection-UV" },
                                { name: "Stations d'eau potable", desc: "Qualité minérale à l'évier.", img: drinkingWaterImg, link: "/systeme-de-filtration-deau-potable" }
                            ].map((prod, i) => (
                                <div key={i} className="group bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 flex flex-col h-full cursor-pointer" onClick={() => navigate(prod.link)}>
                                    <div className="relative h-64 overflow-hidden bg-slate-50/50 flex items-center justify-center p-10">
                                        <img src={prod.img} alt={prod.name} className="max-h-full object-contain mix-blend-multiply" />
                                    </div>
                                    <div className="p-8 space-y-4 flex flex-col flex-grow border-t border-slate-50 group-hover:border-blue-600 transition-all">
                                        <h3 className="text-xl font-bold text-[#1e3a8a] text-center">{prod.name}</h3>
                                        <p className="text-slate-500 text-sm leading-relaxed text-center italic font-light">{prod.desc}</p>
                                        <div className="pt-4 flex justify-center"><div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all"><ArrowRight className="h-5 w-5" /></div></div>
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
                      src={mantakesbathImg}
                      alt="Expert Bricareau analysant vos options d'adoucissement"
                      className="w-full h-full object-cover grayscale brightness-150"
                    />
                    <div className="absolute inset-0 bg-[#1e3a8a]/10 backdrop-blur-sm" />
                  </div>

                  <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-5xl mx-auto text-center space-y-12">
                      <div className="space-y-6">
                        <span className="inline-block px-4 py-1.5 bg-white text-blue-600 rounded-full text-[10px] font-black uppercase tracking-[0.4em]">
                          LE CONFORT RÉSIDENTIEL RÉINVENTÉ
                        </span>
                        <h2 className="text-4xl md:text-6xl lg:text-5xl font-light text-white leading-[1.1] tracking-tighter">
                          Préservez votre foyer avec <br />
                          <span className="text-white italic font-bold font-serif">une eau d'une douceur absolue.</span>
                        </h2>
                        <p className="text-lg md:text-xl text-blue-100/80 max-w-2xl mx-auto font-light leading-relaxed">
                          Protégez vos appareils et votre plomberie du calcaire tout en profitant d'une eau douce au quotidien. Contactez nos experts pour votre solution d'adoucissement sur mesure.</p>
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


                {/* 11. FAQ */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6 text-left">
                        <div className="text-left mb-16">
                            <h2 className="mb-8 heading-pro-max">
                                <span className="italic font-light text-[#2563eb] block">Pour vous éclairer</span>
                                <span className="font-bold text-[#1e3a8a] block">Questions fréquentes</span>
                            </h2>
                            <div className="w-24 h-1 bg-blue-600"></div>
                        </div>
                        <div className="max-w-4xl mx-auto">
                            <Accordion type="single" collapsible className="w-full">
                                {faqItems.slice(0, showAllFaqs ? undefined : 6).map((item, idx) => (
                                    <AccordionItem key={idx} value={`item-${idx}`} className="border-b-gray-200">
                                        <AccordionTrigger className="text-left text-base font-medium py-6">{item.q}</AccordionTrigger>
                                        <AccordionContent className="text-base font-light text-gray-600 pb-6 text-justify">{item.a}</AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                            <div className="mt-12 text-center">
                                <Button onClick={() => setShowAllFaqs(!showAllFaqs)} variant="outline" className="rounded-full px-8">{showAllFaqs ? "Voir moins" : "Voir toutes les questions"}</Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 12. Resources */}
                <section className="py-24 bg-gray-50">
                    <div className="container mx-auto px-6 text-left">
                        <div className="text-left mb-16">
                            <h2 className="mb-8 heading-pro-max"><span className="font-bold text-[#1e3a8a] block">Ressources</span></h2>
                            <div className="w-24 h-1 bg-blue-600"></div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { title: "Fosse septique : compatible ?", img: adoucisseurFosseImg, link: "/adoucisseur-deau-et-fosse-septique-mythes-et-realites" },
                                { title: "Sans sel vs Avec sel", img: residentialWaterSoftenerImg, link: "/adoucisseur-sans-sel-vs-avec-sel-verite-technique" },
                                { title: "Conditionneur d'eau", img: conditionneursImg, link: "/conditionneur-deau-une-alternative-ecologique-a-ladoucisseur-sans-sel" }
                            ].map((art, i) => (
                                <div key={i} className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer group flex flex-col h-full border border-slate-100" onClick={() => navigate(art.link)}>
                                    <div className="h-56 overflow-hidden">
                                        <img src={art.img} alt={art.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                                    </div>
                                    <div className="p-8 text-left transition-colors flex flex-col flex-grow">
                                        <h4 className="mb-4 group-hover:text-blue-600 transition-colors font-bold text-lg text-[#0F1729] leading-tight">{art.title}</h4>
                                        <div className="mt-auto"><div className="text-blue-600 font-bold flex items-center gap-2 text-sm uppercase tracking-widest">Lire <ArrowRight className="h-4 w-4" /></div></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
            <div className="fixed bottom-8 right-8 z-[100] group">
                <div onClick={() => navigate("/consultation")} className="relative flex items-center gap-4 bg-white/60 backdrop-blur-xl border border-white p-2 pr-6 rounded-full shadow-2xl cursor-pointer transition-all duration-500 hover:scale-105 hover:bg-white/90">
                    <div className="relative">
                        <div className="absolute inset-0 bg-blue-600 rounded-full animate-ping opacity-20 group-hover:opacity-40" />
                        <div className="relative w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg"><Phone className="w-5 h-5" /></div>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[10px] font-black uppercase tracking-widest text-[#1e3a8a]/60">Expertise de puits</span>
                        <span className="text-sm font-bold text-[#1e3a8a]">Consultation Gratuite</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-blue-600 group-hover:translate-x-1 transition-transform" />
                </div>
            </div>
        </div>
    );
};

export default AdoucisseursEauDePuits;
