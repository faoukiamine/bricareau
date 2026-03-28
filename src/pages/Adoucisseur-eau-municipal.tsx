import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import TestimonialsSection from "@/components/TestimonialsSection";
import { Button } from "@/components/ui/button";
import heroBath from "@/assets/sub-category-dryer.webp";
import {
    ArrowRight,
    Droplets,
    ChevronRight,
    CheckCircle2,
    Shield,
    Zap,
    Wifi,
    Binary,
    HandCoins,
    Award,
    Search,
    Microscope,
    Sparkles,
    Phone,
    CheckCircle
} from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import waterTestingImg from "@/assets/water-test.jpg";
import { softenerImg as residentialWaterSoftenerImg } from "./Blog pages/Comment régler la dureté de votre adoucisseur ";
import { adoucisseurImg as adoucisseurFosseImg } from "./Blog pages/Adoucisseur-deau- et-fosse-septique--Mythes-et-réalités";
import { conditionneursImg } from "./Blog pages/Adoucisseur avec sel ou sans sel";
import TwinAlternatingWaterSoftenerImg from "@/assets/Alternating Water Softener.png";
import SentinelWaterSoftenerImg from "@/assets/Sentinelle Water Softener.png";
import SerenityWaterSoftenerImg from "@/assets/Serenity Water Softener.png";
import savingsConceptImg from "@/assets/savings-water.png";
import efficiencyTechnoImg from "@/assets/efficiency-water.png";
import intelligenceWaterImg from "@/assets/intelligence-water.png";
import expertiseWaterImg from "@/assets/expertise-water.png";
import installationSoftenerImg from "@/assets/WaterSoftenerInstallation.jpg";
import diagnosticStepImg from "@/assets/step-diagnostic.png";
import customStepImg from "@/assets/step-custom.png";
import installationStepImg from "@/assets/step-installation.png";
import serenityStepImg from "@/assets/step-serenity.png";
import panoramaBgImg from "@/assets/Rain.webp";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from "@/components/ui/accordion";
import ConsultationFormSection from "@/components/ConsultationFormSection";
import labTestImg from "@/assets/test-laboratoire-diligence-inspection-750x500.jpg";
const products = [
    { 
        name: "Adoucisseur d'eau de la série \n Sentinelle", 
        desc: "Votre priorité est d'éradiquer le calcaire avec une précision chirurgicale, sans complexité inutile.", 
        features: ["Protection des électros", "Format compact intelligent", "Économie de sel optimisée"],
        path: "/contact", 
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
    Sérénité: string;
    Sentinel: string;
    Infiniti: string;
}

const comparisonData: ComparisonItem[] = [
    {
        feature: "Principe de Déclenchement",
        Sérénité: "Se régénère à intervalles de temps fixes (ex: tous les 3 jours).",
        Sentinel: "Se régénère selon le volume d'eau réellement consommé.",
        Infiniti: "Alterne entre deux bouteilles dès que l'une est saturée."
    },
    {
        feature: "Disponibilité d'Eau Douce",
        Sérénité: "Interrompue pendant la régénération (souvent la nuit).",
        Sentinel: "Interrompue pendant la régénération (souvent la nuit).",
        Infiniti: "Permanente (24h/24) sans aucune interruption."
    },
    {
        feature: "Efficacité (Sel & Eau)",
        Sérénité: "Moyenne (consomme même si peu d'eau a été utilisée).",
        Sentinel: "Optimale (ne se régénère que si nécessaire).",
        Infiniti: "Maximale (utilise la résine à 100% de sa capacité)."
    },
    {
        feature: "Profil Utilisateur Idéal",
        Sérénité: "Consommation d'eau très stable et prévisible.",
        Sentinel: "Familles avec variations de consommation (invités, saisons).",
        Infiniti: "Grosses consommations ou besoins critiques (gîtes, grandes familles)."
    },
    {
        feature: "Complexité Technique",
        Sérénité: "Simple et très robuste.",
        Sentinel: "Électronique avancée avec capteur de débit.",
        Infiniti: "Système double nécessitant plus d'espace."
    },
    {
        feature: "Investissement Initial",
        Sérénité: "Économique.",
        Sentinel: "Intermédiaire.",
        Infiniti: "Plus élevé."
    },
];

const faqItems = [
    { q: "Pourquoi installer un adoucisseur si l'eau est déjà traitée par la municipalité ?", a: "L'eau municipale est traitée pour être potable, pas pour être douce. Elle contient souvent beaucoup de calcaire qui endommage vos appareils, ternit votre robinetterie et assèche votre peau." },
    { q: "L'eau adoucie a-t-elle un goût salé ?", a: "Non. La quantité de sodium échangée contre le calcaire est minime et indétectable au goût pour la majorité des gens. C'est bien moins de sel que dans une simple tranche de pain blanc." },
    { q: "Est-ce que l'adoucisseur enlève le chlore de l'eau de ville ?", a: "Un adoucisseur standard enlève uniquement le calcaire. Pour le chlore, nous recommandons nos modèles hybrides (comme la série Sérénité avec charbon) qui filtrent aussi le chlore et les mauvaises odeurs." },
    { q: "Combien de sel un adoucisseur consomme-t-il par an ?", a: "Cela dépend de votre consommation d'eau et de la dureté initiale, mais en moyenne pour une famille de 4 personnes, nos modèles haute efficacité consomment environ 6 à 8 sacs de sel par an." },
    { q: "L'adoucisseur augmente-t-il ma facture d'eau ?", a: "Très peu. La régénération utilise un volume d'eau négligeable par rapport à votre consommation totale. En revanche, il protège votre chauffe-eau et le rend plus efficace, réduisant votre facture énergétique." },
    { q: "Puis-je boire l'eau adoucie ?", a: "Oui, elle est parfaitement potable. Cependant, pour les personnes suivant un régime strict sans sel ou pour le goût le plus pur (thé, café), nous recommandons d'ajouter un système d'osmose inverse sous l'évier." },
    { q: "Puis-je installer l'adoucisseur moi-même ?", a: "Bien que possible pour un bricoleur averti, nous recommandons fortement une installation professionnelle pour garantir le bon réglage de la dureté, l'étanchéité et le respect des normes de plomberie locales." },
    { q: "Quelle est la durée de vie d'un adoucisseur d'eau Bricareau ?", a: "Avec un entretien minimal, nos systèmes sont conçus pour durer de 15 à 20 ans. La résine de haute qualité à l'intérieur peut durer plus de 15 ans avant de nécessiter un remplacement." },
    { q: "L'adoucisseur fait-il du bruit ?", a: "Il fonctionne silencieusement la plupart du temps. Vous n'entendrez un léger bruit d'eau que pendant la régénération, qui est programmée généralement la nuit (par exemple à 2h du matin) pour ne pas vous déranger." },
    { q: "Est-ce que l'eau adoucie est bonne pour les plantes ?", a: "Il est préférable d'arroser les plantes intérieures avec de l'eau non adoucie car le sodium peut s'accumuler dans le terreau. Nous installons souvent un robinet de dérivation pour l'arrosage extérieur." },
    { q: "Que se passe-t-il en cas de panne de courant ?", a: "Nos vannes électroniques conservent leur programmation en mémoire pendant 48 heures ou plus. Une fois le courant rétabli, l'adoucisseur reprend son cycle normal sans perdre vos réglages." },
    { q: "Dois-je utiliser un type de sel spécifique ?", a: "Nous recommandons du sel en pastilles de haute pureté pour éviter les résidus insolubles dans le bac. Certains sels contiennent aussi des nettoyants à résine pour maintenir l'efficacité du système." },
    { q: "Comment savoir si mon adoucisseur fonctionne correctement ?", a: "Vous remarquerez immédiatement la différence : votre savon moussera beaucoup plus, votre peau sera plus douce après la douche et il n'y aura plus de nouvelles traces de calcaire sur vos parois de douche." },
    { q: "Un adoucisseur est-il compatible avec une fosse septique ?", a: "Oui, tout à fait. Les eaux de régénération rejetées sont sans danger et n'affectent pas le fonctionnement biologique d'une fosse septique standard correctement dimensionnée." },
    { q: "Est-ce que l'adoucisseur réduit la pression d'eau ?", a: "Non. Nos systèmes sont conçus 'High Flow' (haut débit) pour ne causer aucune perte de pression perceptible dans votre maison, même lorsque vous prenez une douche et utilisez la laveuse en même temps." },
];

const AdoucisseurEauMunicipal = () => {
    const [showAllFaqs, setShowAllFaqs] = React.useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        document.title = "Adoucisseur d'eau résidentiel | Solutions pour l'eau municipale | Bricareau";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Éliminez le calcaire de votre eau de ville. Nos adoucisseurs résidentiels Sentinelle, Sérénité et Infiniti protègent votre maison et votre confort au Canada.");
        }

        // OG Tags
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) ogTitle.setAttribute("content", "Adoucisseur d'eau résidentiel pour eau municipale | Bricareau");
        const ogDesc = document.querySelector('meta[property="og:description"]');
        if (ogDesc) ogDesc.setAttribute("content", "Des solutions intelligentes pour une eau sans calcaire 24h/24. Découvrez nos adoucisseurs Sentinelle et Infiniti.");
    }, []);

    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main>
                <Hero 
                    image={heroBath}
                    highlightedTitle="Une douceur qui se sent,"
                    mainTitle="un confort qui se vit."
                    subtitle="Protégez votre confort et vos installations avec nos adoucisseurs d'eau intelligents conçus spécifiquement pour les eaux de ville. Éliminez définitivement l'eau dure et prolongez la vie de vos électroménagers."
                    showPhone={true}
                    showBreadcrumbs={true}
                />
                
                {/* 2. Selection Guide: The Bridge */}
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
                        <div className="text-center max-w-7xl mx-auto mb-20 lg:mb-24">
                            <span className="inline-block px-4 py-1.5 bg-blue-600 text-white rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-6">
                                GUIDE DE SÉLECTION DE VOTRE ADOUCISSEUR D'EAU
                            </span>
                            <h2 className="mb-8 heading-pro-max text-center">
                                <span className="italic font-light text-[#2563eb] block">L'équilibre idéal pour</span>
                                <span className="font-bold text-[#1e3a8a] block">votre ville et votre vie.</span>
                            </h2>
                            <p className="body-pro-max text-center lg:text-justify mx-auto">
                                Nos adoucisseurs d'eau pour eau municipale sont spécialement conçus pour contrer les effets néfastes du calcaire tout en s'adaptant parfaitement aux spécificités des réseaux de distribution urbains. Nos solutions de pointe — les séries Sentinelle, Sérénité et Infiniti — offrent une technologie de régénération intelligente qui optimise votre consommation d'eau et de sel selon votre usage réel au quotidien. Que vous recherchiez une efficacité énergétique maximale, une protection accrue de votre plomberie ou une douceur incomparable pour votre peau et vos cheveux, nos systèmes garantissent une performance durable et une fiabilité exceptionnelle. Investir dans un adoucisseur Bricareau, c'est choisir de prolonger la vie de vos appareils électroménagers tout en réalisant des économies substantielles sur vos produits d'entretien et vos factures énergétiques. Découvrez une nouvelle dimension de confort domestique grâce à une eau parfaitement balancée, pure et saine pour l'ensemble de votre foyer.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
                            {products.map((p, i) => (
                                <div
                                    key={i}
                                    className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full cursor-pointer"
                                    onClick={() => navigate(p.path || "/adoucisseurs")}
                                >
                                    <div className="relative h-80 overflow-hidden bg-slate-50 flex items-center justify-center p-12">
                                        {p.isRecommended && (
                                            <div className="absolute top-4 right-4 z-10">
                                                <span className="inline-block px-4 py-1.5 bg-blue-600 text-white rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-6">
                                                    RECOMMANDÉ
                                                </span>
                                            </div>
                                        )}
                                        <img
                                            src={p.image}
                                            alt={`${p.name} - Adoucisseur d'eau résidentiel haute performance Bricareau`}
                                            className="max-h-full object-contain group-hover:scale-110 transition-transform duration-700 mix-blend-multiply"
                                        />
                                    </div>
                                    <div className="p-8 space-y-4 flex flex-col flex-grow border-t-2 border-transparent group-hover:border-blue-600 transition-colors">
                                        <h3
                                            className="card-title group-hover:text-blue-600 transition-colors text-center whitespace-pre-line"
                                        >
                                            {p.name}
                                        </h3>
                                        <p className="body-pro-max text-slate-500 text-justify">
                                            {p.desc}
                                        </p>
                                        <ul className="space-y-3 pt-2">
                                            {p.features?.map((f, idx) => (
                                                <li key={idx} className="flex items-center gap-2 text-sm text-slate-600 font-light">
                                                    <CheckCircle2 className="w-4 h-4 text-blue-500" /> {f}
                                                </li>
                                            ))}
                                        </ul>
                                        <div
                                            className="inline-flex items-center gap-2 text-blue-600 font-bold text-xs tracking-widest uppercase mt-4 group-hover:underline self-end"
                                        >
                                            <ArrowRight className="h-6 w-6 transform group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                
                {/* 4.5 PARCOURS SÉRÉNITÉ */}
                <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
                     <div className="container mx-auto px-6 relative z-10">
                        <div className="text-center max-w-3xl mx-auto mb-20 lg:mb-24">
                            <span className="inline-block px-4 py-1.5 bg-blue-600 text-white rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-6">
                                VOTRE EXPÉRIENCE CLIENT
                            </span>
                            <h2 className="mb-8 heading-pro-max text-center">
                                <span className="italic font-light text-[#2563eb] block">Une transition fluide vers</span>
                                <span className="font-bold text-[#1e3a8a] block">l'eau adoucie.</span>
                            </h2>
                            <p className="body-pro-max text-center max-w-3xl mx-auto">
                                Le Parcours Bricareau : une expertise d'élite, depuis votre première analyse jusqu'à la douceur éternelle de votre eau municipale.
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
                                    title: "Sur-Mesure", 
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
                                        <div className={`w-32 h-32 rounded-[2.5rem] overflow-hidden border-2 ${item.color} shadow-xl shadow-slate-200/50 group-hover:scale-110 transition-transform duration-500 bg-white`}>
                                            <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                                        </div>
                                        <div className="absolute -top-2 -right-2 w-10 h-10 bg-[#1e3a8a] text-white rounded-full flex items-center justify-center font-black text-xs shadow-lg border-2 border-white">
                                            {item.step}
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
                            <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a8a]/70 via-[#1e3a8a]/30 to-transparent p-8 md:p-12 lg:p-20 flex items-center">
                                <div className="max-w-lg">
                                    <div className="flex items-center gap-3 text-blue-400 font-bold text-xs tracking-widest uppercase mb-6">
                                        <CheckCircle className="w-5 h-5" />
                                        Engagement Certifié
                                    </div>
                                    <h3 className="text-white text-4xl font-bold mb-6 leading-tight">L'excellence Bricareau s'installe chez vous.</h3>
                                    <p className="text-white text-lg mb-10 text-justify">
                                        Chaque installation est une signature de qualité. Nos techniciens assurent une mise en place chirurgicale de vos systèmes, garantissant performance et esthétique.
                                    </p>
                                </div>
                            </div>
                        </div>
                     </div>
                </section>

                {/* 5.Comparison Table Section */}
                <section className="py-24 bg-white border-t border-gray-100">
                    <div className="container mx-auto px-4">
                        <div className="text-left mb-16">
                            <h2 className="mb-8 heading-pro-max text-left">
                                <span className="italic font-light text-[#2563eb] block">Comparez nos</span>
                                <span className="font-bold text-[#1e3a8a] block">adoucisseurs d'eau</span>
                            </h2>
                            <div className="w-24 h-1 bg-blue-600"></div>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full min-w-[1000px] border-collapse bg-white rounded-2xl overflow-hidden shadow-sm">
                                <thead>
                                    <tr className="bg-gray-100">
                                        <th className="p-8 text-left text-gray-400 font-light uppercase tracking-wider w-1/4">Modèle</th>
                                        {[
                                            { name: "Sentinel", img: SentinelWaterSoftenerImg },
                                            { name: "Sérénité", img: SerenityWaterSoftenerImg },
                                            { name: "Infiniti", img: TwinAlternatingWaterSoftenerImg }
                                        ].map(m => (
                                            <th key={m.name} className="p-4 text-center text-gray-900 font-bold">
                                                <div className="flex flex-col items-center gap-2">
                                                    <img
                                                        src={m.img}
                                                        alt={`Modèle ${m.name} - Système d'adoucissement d'eau municipal Bricareau`}
                                                        className="w-[120px] h-[100px] object-contain mx-auto mix-blend-multiply"
                                                    />
                                                    <div className="text-[14px]">{m.name}</div>
                                                </div>
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {comparisonData.map((row, i) => (
                                        <tr key={i} className="hover:bg-gray-50 transition-colors">
                                            <td className="p-8 font-bold text-slate-900 border-r border-gray-100 bg-gray-50/30">{row.feature}</td>
                                            {["Sérénité", "Sentinel", "Infiniti"].map((model) => (
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

                {/* 6.Testimonials Grid Section */}
                <TestimonialsSection
                    filterProduct="/adoucissement"
                    limit={5}
                    title={
                        <>
                            <span className="italic font-light text-[#2563eb] block text-center">Une eau soyeuse.</span>
                            <span className="font-bold text-[#1e3a8a] block text-center">Un confort absolu.</span>
                        </>
                    }
                />

                {/* 7.Water Testing Section (Redesigned for Mobile) */}
                <section className="relative lg:h-[750px] flex flex-col lg:flex-row items-stretch overflow-hidden bg-white">
                    {/* Mobile Image */}
                    <div className="lg:hidden w-full h-[300px] relative">
                        <img
                            src={waterTestingImg}
                            alt="Analyse d'eau à domicile pour détecter le calcaire et le chlore - Service Bricareau"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/20" />
                    </div>

                    {/* Desktop Background */}
                    <div className="hidden lg:block absolute inset-0 z-0">
                        <img
                            src={waterTestingImg}
                            alt="Analyse d'eau à domicile pour détecter le calcaire et le chlore"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/30 lg:bg-gradient-to-r lg:from-black/50 lg:to-transparent" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-white via-white/10 to-transparent" />
                    </div>

                    <div className="container mx-auto px-4 relative z-10 flex items-center py-12 lg:py-0">
                        <div className="max-w-2xl text-slate-900 lg:text-white">
                            <h2 className="mb-8 heading-pro-max text-left">
                                <span className="italic font-light text-[#1e3a8a] lg:text-white block">Des tests d'eau précis</span>
                                <span className="font-bold text-[#1e3a8a] lg:text-white block">pour une tranquillité d'esprit totale.</span>
                            </h2>
                            <p className="body-pro-max text-slate-500 lg:text-white/95 mb-8 max-w-xl text-left lg:text-justify">
                                Ne devinez pas la qualité de votre eau. Nos analyses approfondies identifient les bactéries, les minéraux et les contaminants chimiques pour vous offrir une tranquillité d'esprit totale.
                            </p>
                            <div className="flex gap-4">
                                <Button 
                                    asChild
                                >
                                    <a href="/tests-eau">Demandez une analyse d'eau</a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 9. FAQ Section */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-4">
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

                {/* 10. PREMIUM CTA SECTION */}
                <section className="relative h-[600px] flex items-center overflow-hidden">
                    {/* Background Image with Overlay */}
                    <div className="absolute inset-0 z-0">
                        <img
                            src={heroBath}
                            alt="Confort municipal supérieur"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-800/60 to-blue-500/30 backdrop-blur-[2px]" />
                    </div>
                    <div className="container mx-auto px-6 relative z-10 text-center">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-white mb-6">
                                <span className="font-bold block tracking-tight opacity-90">Libérez votre robinet du calcaire de la ville.</span>
                            </h2>
                            <p className="text-white font-light text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
                                Les solutions municipales ne suffisent pas toujours. Prenez le contrôle total de votre eau et redécouvrez la douceur d’un foyer protégé.
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
                    <div className="container mx-auto px-4 text-left">
                        <div className="text-left mb-16">
                            <h2 className="mb-8 heading-pro-max text-left">
                                <span className="font-bold text-[#1e3a8a] block text-left">Ressources</span>
                            </h2>
                            <div className="w-24 h-1 bg-blue-600"></div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { title: "Adoucisseur sans sel vs avec sel : la vérité technique", img: conditionneursImg, link: "/adoucisseur-sans-sel-vs-avec-sel-verite-technique" },
                                { title: "Comment régler la dureté de votre adoucisseur ?", img: residentialWaterSoftenerImg, link: "/comment-regler-durete-adoucisseur-eau" },
                                { title: "Adoucisseur d'eau et fosse septique : compatible ou non ?", img: adoucisseurFosseImg, link: "/adoucisseur-deau-et-fosse-septique-mythes-et-realites" }
                            ].map((art, i) => (
                                <div
                                    key={i}
                                    className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer group flex flex-col h-full border border-gray-100"
                                    onClick={() => navigate(art.link)}
                                >
                                    <div className="h-56 overflow-hidden">
                                        <img src={art.img} alt={`${art.title} - Expertise Bricareau en traitement d'eau municipale`} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
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

export default AdoucisseurEauMunicipal;
