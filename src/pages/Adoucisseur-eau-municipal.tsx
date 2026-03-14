import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TestimonialsSection from "@/components/TestimonialsSection";
import { Button } from "@/components/ui/button";
import heroBath from "@/assets/sub-category-dryer.webp";
import {
    ArrowRight,
    Droplets,
    ChevronRight,
    CheckCircle2,
    Sparkles,
    Shield,
    Zap,
    Wifi,
    Shirt,
    Award,
    HandCoins
} from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import waterTestingImg from "@/assets/water-test.jpg";
import { softenerImg as residentialWaterSoftenerImg } from "./Blog pages/Comment régler la dureté de votre adoucisseur ";
import { adoucisseurImg as adoucisseurFosseImg } from "./Blog pages/Adoucisseur-deau- et-fosse-septique--Mythes-et-réalités";
import { conditionneursImg } from "./Blog pages/Adoucisseur avec sel ou sans sel";
import waterSoftenerImg from "@/assets/Adoucisseurs d'eau.webp";
import TwinAlternatingWaterSoftenerImg from "@/assets/TwinTank.webp";
import SentinelWaterSoftenerImg from "@/assets/Sentinelle Water Softener.png";
import SerenityWaterSoftenerImg from "@/assets/Serenity Water Softener.png";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger } from "@/components/ui/accordion";
import ConsultationFormSection from "@/components/ConsultationFormSection";
const products = [
    { name: "Adoucisseur d'eau de la série \n Sentinelle", desc: "Le rythme parfait d'une eau toujours douce.", path: "/contact", image: SentinelWaterSoftenerImg },
    { name: "Adoucisseur d'eau de la série \n Sérénité", desc: "La paix durable pour votre maison et votre confort.", path: "/contact", image: SerenityWaterSoftenerImg },
    { name: "Adoucisseur d'eau de la série \n Infiniti", desc: "Une douceur constante, à chaque goutte, à chaque seconde.", path: "/contact", image: TwinAlternatingWaterSoftenerImg },
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
                {/* 1. Hero Section (Redesigned for Mobile) */}
                <section className="relative lg:h-[850px] flex flex-col lg:flex-row items-stretch overflow-hidden">
                    {/* Mobile Image */}
                    <div className="lg:hidden w-full h-[300px] relative">
                        <img
                            src={heroBath}
                            alt="Bain relaxant dans une eau douce - Adoucisseur d'eau municipal Bricareau contre le calcaire"
                            className="w-full h-full object-cover object-[center_35%]"
                        />
                        <div className="absolute inset-0 bg-black/20" />
                    </div>

                    {/* Desktop Background */}
                    <div className="hidden lg:block absolute inset-0 z-0">
                        <img
                            src={heroBath}
                            alt="Bain relaxant dans une eau douce"
                            className="w-full h-full object-cover object-[center_35%]"
                        />
                        <div className="absolute inset-0 bg-black/40 lg:bg-gradient-to-r lg:from-black/60 lg:to-transparent" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-white via-white/10 to-transparent" />
                        <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white/90 via-white/40 to-transparent" />
                    </div>

                    <div className="container mx-auto px-6 relative z-10 flex items-center py-12 lg:py-0">
                        <div className="max-w-2xl text-slate-900 lg:text-white">
                            <h1
                                className="text-[32px] md:text-[42px] leading-[1.1] md:leading-[1.2] mb-4 lg:mb-8 tracking-tighter text-slate-900 lg:text-white text-left lg:text-justify max-w-xl"
                                style={{
                                    fontWeight: 350
                                }}
                            >
                                <span className="text-blue-600 lg:text-white/80">Une douceur qui se sent,</span> <br />
                                <span>un confort qui se vit.</span>
                            </h1>

                            <p className="font-light text-slate-600 lg:text-white/95 mb-8 max-w-xl">
                                Protégez votre confort et vos installations avec nos adoucisseurs d'eau intelligents conçus spécifiquement pour les eaux de ville. Éliminez définitivement l'eau dure et prolongez la vie de vos électroménagers.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button
                                    size="lg"
                                    className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 h-14 shadow-lg shadow-blue-200"
                                    asChild
                                >
                                    <NavLink to="/consultation">Planifiez une consultation gratuite</NavLink>
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Wave Separator (Hidden on Mobile if it doesn't fit well, or kept for transition) */}
                    <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-[0] z-20 pointer-events-none hidden lg:block">
                        <svg
                            className="relative block w-full h-[50px] md:h-[80px]"
                            viewBox="0 0 1200 120"
                            preserveAspectRatio="none"
                        >
                            <path
                                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                                fill="#2563EB"
                                transform="rotate(180 600 60)"
                            ></path>
                        </svg>
                    </div>
                </section>

                {/* 3. Why choose our residential water softeners */}
                <section className="py-24 bg-blue-600 text-white text-center">
                    <div className="container mx-auto px-6 text-center">
                        <div className="text-center mb-16">
                            <h2 className="text-white mb-8 md:leading-[48px] text-center">
                                Pourquoi choisir nos <br />adoucisseurs d'eau résidentiels ?
                            </h2>
                            <p className="font-light text-blue-100 max-w-2xl mx-auto text-justify">
                                Plus qu'un simple appareil, c'est une solution complète pour la qualité de l'eau et le confort de toute votre famille.
                            </p>
                        </div>
                        <div className="flex flex-wrap justify-center gap-x-12 gap-y-16">
                            {[
                                { icon: HandCoins, title: "Économies garanties", desc: "Réduisez vos factures d'énergie et vos dépenses en savons et détergents de 50%." },
                                { icon: Zap, title: "Efficacité HE", desc: "Une technologie haute efficacité qui consomme moins de sel et d'eau." },
                                { icon: Wifi, title: "Régénération adaptée", desc: "Nous avons la technologie exacte pour votre profil." },
                                { icon: Award, title: "Expertise Bricareau", desc: "Installation certifiée et service après-vente pour une tranquillité d'esprit totale." }
                            ].map((item, id) => (
                                <div key={id} className="flex flex-col items-center group w-full sm:w-[calc(50%-3rem)] lg:w-[calc(25%-3rem)]">
                                    <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center mb-8 transition-all group-hover:scale-110 group-hover:bg-white/10">
                                        <item.icon className="h-10 w-10 text-blue-600 group-hover:text-white" />
                                    </div>
                                    <h4 className="mb-4 tracking-tight">{item.title}</h4>
                                    <p className="font-light text-blue-100 text-justify">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 4.Product Grid Section */}
                <section id="nos-adoucisseurs" className="py-24 bg-gray-50">
                    <div className="container mx-auto px-6">
                        <div className="text-left mb-16">
                            <h2
                                className="text-slate-900 mb-8 md:leading-[60px] text-left"
                                style={{ }}
                            >
                                Nos adoucisseurs d'eau <br /><span className="font-normal">résidentiels</span>
                            </h2>
                            <div className="w-24 h-1 bg-blue-600 mb-8"></div>
                            <p
                                className="font-light text-slate-600 mb-8 text-justify"
                                style={{ }}
                            >
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
                                        <img
                                            src={p.image}
                                            alt={`${p.name} - Adoucisseur d'eau résidentiel haute performance Bricareau`}
                                            className="max-h-full object-contain group-hover:scale-110 transition-transform duration-700 mix-blend-multiply"
                                        />
                                    </div>
                                    <div className="p-8 space-y-4 flex flex-col flex-grow border-t-2 border-transparent group-hover:border-blue-600 transition-colors">
                                        <h3
                                            className="text-slate-900 group-hover:text-blue-600 transition-colors tracking-tight text-center whitespace-pre-line"
                                            style={{ }}
                                        >
                                            {p.name}
                                        </h3>
                                        <p
                                            className="leading-[25px] text-slate-500 font-light flex-grow text-justify"
                                            style={{ }}
                                        >
                                            {p.desc}
                                        </p>
                                        <div
                                            className="inline-flex items-center gap-2 text-blue-600 font-bold text-xs tracking-widest uppercase mt-4 group-hover:underline self-end"
                                            style={{ }}
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

                {/* 5.Comparison Table Section */}
                <section className="py-24 bg-white border-t border-gray-100">
                    <div className="container mx-auto px-4">
                        <div className="text-left mb-16">
                            <h2
                                className="text-slate-900 mb-8 md:leading-[60px] text-left"
                                style={{ }}
                            >
                                Comparez nos <br /><span className="font-normal">adoucisseurs d'eau</span>
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
                    filterProduct="/adoucisseur-eau-residentiel"
                    title={
                        <>
                            <span className="text-[32px] md:text-[60px] font-light leading-[1.2] md:leading-[60px] block text-slate-900">Une eau soyeuse.</span>
                            <span className="text-[32px] md:text-[60px] font-normal leading-[1.2] md:leading-[60px] block text-blue-600">Un confort absolu.</span>
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
                            <h2
                                className="md:leading-[60px] lg:font-light mb-8 text-slate-900 lg:text-white text-left"
                                style={{ }}
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
                                    style={{ }}
                                    asChild
                                >
                                    <a href="/tests-eau">Demandez une analyse d'eau</a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 8.FAQ Section */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-left mb-16">
                            <h2
                                className="text-slate-900 mb-8 text-left"
                                style={{ }}
                            >
                                <span className="text-[32px] md:text-[60px] font-light leading-[1.1] md:leading-[60px] block">Pour vous éclairer</span>
                                <span className="text-[32px] md:text-[60px] font-normal leading-[1.1] md:leading-[60px] block">Questions fréquentes</span>
                            </h2>
                            <div className="w-24 h-1 bg-blue-600"></div>
                        </div>

                        <div className="max-w-4xl mx-auto">
                            <Accordion type="single" collapsible className="w-full">
                                {faqItems.slice(0, showAllFaqs ? undefined : 6).map((item, idx) => (
                                    <AccordionItem key={idx} value={`item-${idx}`} className="border-b-gray-200">
                                        <AccordionTrigger className="text-left text-base font-medium leading-6 hover:no-underline py-6" style={{ }}>
                                            {item.q}
                                        </AccordionTrigger>
                                        <AccordionContent className="text-base font-light leading-6 text-gray-600 pb-6 text-justify" style={{ }}>
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

                {/* 9. Resources Section */}
                <section className="py-24 bg-gray-50">
                    <div className="container mx-auto px-4 text-left">
                        <div className="text-left mb-16">
                            <h2
                                className="text-slate-900 mb-8 text-left"
                                style={{ }}
                            >                                <span className="text-[32px] md:text-[60px] font-normal leading-[1.1] md:leading-[60px] block">Ressources</span>
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
                                            <h4 className="mb-4 group-hover:text-blue-600 transition-colors tracking-tight">{art.title}</h4>
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
