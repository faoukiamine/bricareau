import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TestimonialsSection from "@/components/TestimonialsSection";
import { Button } from "@/components/ui/button";
import heroFilter from "@/assets/12605.jpg";
import {
    ArrowRight,
    Droplets,
    ChevronRight,
    CheckCircle2,
    Shield,
    Zap,
    TrendingDown,
    X,
    Phone
} from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import waterTestingImg from "@/assets/3756051.jpg";
import specializedFiltersImg from "@/assets/Filtres d'eau spécialisés.webp";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import ConsultationFormSection from "@/components/ConsultationFormSection";


const products = [
    { name: "Filtre d'eau Vortex", desc: "Spécialisé pour l'eau contenant des sédiments.", image: specializedFiltersImg },
    { name: "Filtre d'eau ChlorStop", desc: "Spécialisé pour l'eau contenant du chlore.", image: specializedFiltersImg },
    { name: "Filtre d'eau Iron Shield", desc: "Spécialisé pour l'eau contenant du fer.", image: specializedFiltersImg },
];

const reviews = [
    { name: "Robert D.", rating: 4, text: "Bon produit, technicien très professionnel. Je recommande vivement.", date: "Il y a 1 mois" },
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
                {/* Hero Section */}
                <section className="relative h-[850px] flex items-center overflow-hidden -mt-[104px] pt-[104px]">
                    <div className="absolute inset-0 z-0">
                        <img
                            src={heroFilter}
                            alt="Verre d'eau pure et cristalline filtrée par un système Bricareau pour toute la maison"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40 lg:bg-gradient-to-r lg:from-black/60 lg:to-transparent" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-white via-white/10 to-transparent" />
                        {/* Brightening Start 1/3 Right */}
                        <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white/90 via-white/40 to-transparent" />
                    </div>

                    <div className="container mx-auto px-6 relative z-10">
                        <div className="max-w-2xl text-white">
                            <h1
                                className="text-[28px] md:text-[42px] leading-[32px] md:leading-[42px] font-light mb-8 tracking-tighter text-white text-justify max-w-xl"
                                style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                            >
                                <span className="font-bold text-white">Filtres d'eau toute la maison</span> <br />
                                <span className="font-bold text-white">Protection intégrale au point d'entrée.</span>
                            </h1>
                            <p className="text-lg font-light leading-snug text-white/95 mb-8 max-w-xl text-justify">
                                Éliminez le chlore, le fer et les sédiments de chaque goutte d'eau qui entre dans votre propriété. Nos systèmes de filtration intégrés protègent votre santé, votre peau et vos appareils électroménagers.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button
                                    size="lg"
                                    className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 h-14 shadow-lg shadow-blue-200"
                                    style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                                    asChild
                                >
                                    <a href="#specialized-filters">Explorez nos filtres d'eau</a>
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="bg-white/10 hover:bg-white/20 text-white border-white rounded-full px-8 h-14 backdrop-blur-sm shadow-lg flex items-center gap-2"
                                    style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                                    asChild
                                >
                                    <a href="tel:18552649328">
                                        <Phone className="h-5 w-5" />
                                        1-855-264-9328
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>
                    {/* Wave Separator Bottom - Transition to Blue Section */}
                    <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-[0] z-20 pointer-events-none">
                        <svg
                            className="relative block w-full h-[50px] md:h-[80px]"
                            data-name="Layer 1"
                            xmlns="http://www.w3.org/2000/svg"
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

                {/* Pourquoi choisir - Blue Section */}
                <section className="py-24 bg-blue-600 text-white text-center">
                    <div className="container mx-auto px-6 text-center">
                        <div className="text-center mb-16">
                            <h2 className="text-[32px] md:text-[48px] font-normal text-white mb-8 leading-[1.2] md:leading-[48px] tracking-tighter text-center">
                                Pourquoi choisir nos <br />systèmes de filtration d'eau ?
                            </h2>
                            <p className="text-blue-100 max-w-2xl mx-auto text-lg">
                                Plus qu'un simple système de filtration, c'est une protection avancée pour votre santé et un confort durable pour toute votre famille.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                            {[
                                { icon: Droplets, title: "Eau cristalline", desc: "Éliminez les sédiments et la turbidité pour une eau d'une clarté professionnelle partout chez vous." },
                                { icon: Shield, title: "Protection totale", desc: "Empêchez le fer et les minéraux corrosifs de tacher vos éviers et de détruire votre plomberie." },
                                { icon: TrendingDown, title: "Zéro odeur", desc: "Dites adieu aux odeurs d'œufs pourris (soufre) et au goût de chlore pour une eau fraîche." }
                            ].map((item, id) => (
                                <div key={id} className="flex flex-col items-center group text-center">
                                    <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center mb-8 transition-all group-hover:scale-110 group-hover:bg-white/10">
                                        <item.icon className="h-10 w-10 text-blue-600 group-hover:text-white" />
                                    </div>
                                    <h4 className="text-2xl font-medium mb-4 tracking-tight">{item.title}</h4>
                                    <p className="text-blue-100 leading-snug">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Product Grid Section */}
                <section id="specialized-filters" className="py-24 bg-gray-50 scroll-mt-20">
                    <div className="container mx-auto px-6">
                        <div className="text-left mb-16">
                            <h2
                                className="text-slate-900 tracking-tighter mb-8 text-left"
                                style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                            >
                                <span className="text-[32px] md:text-[60px] font-light leading-[1.1] md:leading-[60px] block">Nos filtres d'eau</span>
                                <span className="text-[32px] md:text-[60px] font-normal leading-[1.1] md:leading-[60px] block">spécialisés pour votre résidence</span>
                            </h2>
                            <div className="w-24 h-1 bg-blue-600 mb-8"></div>
                            <p
                                className="text-lg font-light leading-snug text-slate-600 mb-8 text-justify"
                                style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                            >
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
                                            className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors tracking-tight text-center"
                                            style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                                        >
                                            {p.name}
                                        </h3>
                                        <p
                                            className="text-slate-500 font-light leading-snug flex-grow text-justify"
                                            style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                                        >
                                            {p.desc}
                                        </p>
                                        <div
                                            className="inline-flex items-center gap-2 text-blue-600 font-bold text-xs tracking-widest uppercase mt-4 group-hover:underline self-end"
                                            style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
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

                {/* Comparison Table Section */}
                <section className="py-24 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="text-left mb-16">
                            <h2
                                className="text-slate-900 tracking-tighter mb-8 text-left"
                                style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                            >
                                <span className="text-[32px] md:text-[60px] font-light leading-[1.1] md:leading-[60px] block">Comparez nos filtres d'eau</span>
                                <span className="text-[32px] md:text-[60px] font-normal leading-[1.1] md:leading-[60px] block">spécialisés pour l'eau municipale</span>
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
                                                <div className="flex flex-col items-center gap-2">
                                                    <img
                                                        src={m.image}
                                                        alt={`Modèle ${m.name} - Système de filtration haute performance Bricareau`}
                                                        className="w-[150px] h-[120px] object-contain mx-auto mix-blend-multiply"
                                                    />
                                                    <div className="text-[14px] uppercase tracking-wider">{m.name.replace("Filtre d'eau ", "")}</div>
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

                {/* 7.Water Testing Section */}
                <section className="relative h-[650px] flex items-center overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <img
                            src={waterTestingImg}
                            alt="Prélèvement et analyse d'eau municipale à domicile - Expertise Bricareau"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-blue-900/40 lg:bg-gradient-to-r lg:from-blue-900/90 lg:to-blue-600/20 mix-blend-multiply" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-white via-white/10 to-transparent" />
                    </div>
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-2xl text-white">
                            <span className="text-white/80 font-bold uppercase tracking-widest text-sm mb-4 block">
                                Contrôle de la Qualité D'EAU
                            </span>
                            <h2
                                className="text-[40px] md:text-[60px] leading-[1.1] md:leading-[60px] font-light mb-8 tracking-tighter text-white"
                                style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                            >
                                L'excellence commence<br />
                                par <span className="font-bold">une eau parfaite.</span>
                            </h2>
                            <p className="text-lg font-light leading-snug text-white/95 mb-8 max-w-xl text-justify">
                                Le luxe, c'est de ne pas avoir à se soucier de la qualité de ce que l'on consomme. Offrez-vous la sérénité d'une eau analysée par des experts, pour une maison où tout brille, sans effort et sans compromis.
                            </p>
                            <div className="flex gap-4">
                                <Button
                                    size="lg"
                                    className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 h-14"
                                    style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                                    asChild
                                >
                                    <a href="/tests-eau">Demandez une analyse d'eau</a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Testimonials Grid Section */}
                <TestimonialsSection filterProduct="/Filtres-deau-pour-toute-la-maison"
                    title={
                        <>
                            <span className="text-[32px] md:text-[60px] font-light leading-[1.1] md:leading-[60px] block tracking-tighter text-slate-900">Fini le chlore et d'autres contaminants, </span>
                            <span className="text-[32px] md:text-[60px] font-normal leading-[1.1] md:leading-[60px] block text-blue-600 tracking-tighter">la métamorphose de votre quotidien vue par nos clients.</span>
                        </>
                    }
                />

                {/* 5. CTA Section */}
                <section className="bg-primary py-16 md:py-20">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
                            Besoin d'aide avec votre eau ?
                        </h2>
                        <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
                            Discutez avec un expert en un clic. Disponible par téléphone ou à domicile selon vos préférences.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                size="lg"
                                variant="outline"
                                className="rounded-full px-8 border-white text-white bg-transparent hover:bg-white/10"
                                asChild
                            >
                                <a href="tel:18552649328">Appelez le 1-855-264-9328</a>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="text-left mb-16">
                            <h2
                                className="text-slate-900 tracking-tighter mb-8 text-left"
                                style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
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

                {/* Resources Section */}
                <section className="py-24 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="text-left mb-16">
                            <h2
                                className="text-slate-900 tracking-tighter mb-8 text-left"
                                style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                            >
                                <span className="text-[32px] md:text-[60px] font-normal leading-[1.1] md:leading-[60px] block">Ressources</span>
                            </h2>
                            <div className="w-24 h-1 bg-blue-600"></div>
                        </div>                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { title: "Comment traiter le fer dans l'eau", img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop" },
                                { title: "Éliminer l'odeur de soufre", img: "https://images.unsplash.com/photo-1542013936693-884638332954?q=80&w=800&auto=format&fit=crop" },
                                { title: "Guide sur l'eau acide et le pH", img: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=800&auto=format&fit=crop" }
                            ].map((art, i) => (
                                <div
                                    key={i}
                                    className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full cursor-pointer"
                                    onClick={() => navigate("#")}
                                >
                                    <div className="h-56 overflow-hidden">
                                        <img
                                            src={art.img}
                                            alt={`${art.title} - Guide expert Bricareau en traitement d'eau`}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                    </div>
                                    <div className="p-8 text-left border-t-2 border-transparent group-hover:border-blue-600 transition-colors flex flex-col flex-grow">
                                        <h4 className="text-xl font-medium mb-4 group-hover:text-blue-600 transition-colors tracking-tight">{art.title}</h4>
                                        <div className="mt-auto">
                                            <NavLink
                                                to="#"
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

                {/* Consultation Form Section */}
                <ConsultationFormSection id="consultation" />
            </main>

            <Footer />
        </div>
    );
};

export default FiltresTouteMaison;
