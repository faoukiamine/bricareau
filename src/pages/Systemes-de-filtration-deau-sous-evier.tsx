import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
    ArrowRight,
    Phone,
    CheckCircle2,
    ChevronRight,
    ShieldCheck,
    Droplets,
    Zap,
    CircleDollarSign
} from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import ConsultationFormSection from "@/components/ConsultationFormSection";
import TestimonialsSection from "@/components/TestimonialsSection";

import heroDrink from "@/assets/hero-image.jpg";
import eliteROImg from "@/assets/Triple Stage Filter.jpg";
import plusROImg from "@/assets/Double Stage Filter.jpg";
import essentialImg from "@/assets/Single Stage Filter.jpg";
import waterTestingImg from "@/assets/undersink_filtration_header.jpg";

const FiltrationSousEvier = () => {
    const navigate = useNavigate();
    const [showAllFaqs, setShowAllFaqs] = React.useState(false);

    useEffect(() => {
        document.title = "Filtration sous évier : Eau pure directement au robinet";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Découvrez nos systèmes de filtration sous évier. Une eau potable pure, sans chlore et au goût parfait directement de votre robinet.");
        }

        // OG Tags
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) ogTitle.setAttribute("content", "Filtration sous évier : Pureté et Confort | Bricareau");
        const ogDesc = document.querySelector('meta[property="og:description"]');
        if (ogDesc) ogDesc.setAttribute("content", "Profitez d'une eau saine et délicieuse avec nos solutions d'ultrafiltration Cristal Pro. Gain d'espace et performance.");
    }, []);

    interface ComparisonItem {
        feature: string;
        elite: boolean | string;
        plus: boolean | string;
        essential: boolean | string;
    }

    const comparisonData: ComparisonItem[] = [
        { feature: "Nombre d'étapes de filtration", elite: "3 Étapes", plus: "2 Étapes", essential: "1 Étape" },
        { feature: "Élimination des sédiments (sable, terre et rouille)", elite: true, plus: true, essential: true },
        { feature: "Élimination du chlore (Goût/Odeur)", elite: true, plus: true, essential: false },
        { feature: "Retrait des COV et pesticides", elite: true, plus: true, essential: false },
        { feature: "Membrane d'ultrafiltration (0.01 µm)", elite: true, plus: false, essential: false },
        { feature: "Élimination 99.9% bactéries/virus", elite: true, plus: false, essential: false },
        { feature: "Préservation des minéraux naturels", elite: true, plus: true, essential: true },
        { feature: "Aucun rejet d'eau au drain", elite: true, plus: true, essential: true },
    ];

    return (
        <div className="min-h-screen bg-background text-slate-900 font-sans">
            <Header />
            <main>
                {/* Hero Section */}
                <section className="relative h-[850px] flex items-center overflow-hidden -mt-[104px] pt-[104px]">
                    <div className="absolute inset-0 z-0">
                        <img
                            src={heroDrink}
                            alt="Femme appréciant un verre d'eau fraîchement filtrée au robinet - Système Bricareau"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40 lg:bg-gradient-to-r lg:from-black/60 lg:to-transparent" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-white via-white/10 to-transparent" />
                        <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white/90 via-white/40 to-transparent" />
                    </div>

                    <div className="container mx-auto px-6 relative z-10">
                        <div className="max-w-2xl text-white">
                            <h1
                                className="text-[28px] md:text-[42px] leading-[32px] md:leading-[42px] font-light mb-8 tracking-tighter text-white text-justify max-w-xl"
                                style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                            >
                                <span className="font-bold">Systèmes de filtration d'eau sous évier, de la pureté et de la fraîcheur à chaque goutte.</span>
                            </h1>
                            <p className="text-lg font-light leading-snug text-white/90 mb-8 max-w-xl text-justify">
                                Profitez d'une eau potable d'une qualité exceptionnelle directement de votre robinet. Nos systèmes de filtration sous comptoir et d'ultrafiltration éliminent 99% des contaminants pour la santé de votre famille.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button
                                    size="lg"
                                    className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 h-14 shadow-lg shadow-blue-200"
                                    style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                                    asChild
                                >
                                    <a href="#systemes-filtration">
                                        Explorez nos systèmes de filtration
                                    </a>
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="bg-white/10 hover:bg-white/20 text-white border-white rounded-full px-8 h-14 backdrop-blur-sm shadow-lg"
                                    style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                                    asChild
                                >
                                    <a href="tel:18552649328" className="flex items-center gap-2">
                                        <Phone className="h-5 w-5" />
                                        1-855-264-9328
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>
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

                {/* 2. Pourquoi choisir */}
                <section className="py-24 bg-blue-600 text-white">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-[32px] md:text-[48px] font-normal text-white mb-8 leading-[1.2] md:leading-[48px] tracking-tighter">
                                Pourquoi installer l'un de nos systèmes <br />de filtration d'eau sous l'évier de votre cuisine?
                            </h2>
                            <p className="text-lg font-light leading-snug text-blue-100 max-w-2xl mx-auto text-justify">
                                Profitez d'une eau d'une pureté exceptionnelle pour votre boisson et votre cuisine tout en simplifiant votre quotidien.
                            </p>
                        </div>
                        <div className="flex flex-wrap justify-center gap-x-12 gap-y-16 text-center">
                            {[
                                { icon: ShieldCheck, title: "Goût Incomparable", desc: "Sublimez vos saveurs quotidiennes. Idéal pour un café aux arômes riches et des légumes qui conservent leurs nutriments sans le goût désagréable du chlore." },
                                { icon: Droplets, title: "Éco-Responsable", desc: "Dites adieu au plastique. Une seule cartouche remplace des milliers de bouteilles à usage unique, offrant un geste concret et puissant pour la planète." },
                                { icon: Zap, title: "Discrétion Totale", desc: "Une solution compacte et invisible. S'installe discrètement sous votre comptoir de cuisine sans encombrer votre plan de travail ou votre espace de rangement." },
                                { icon: CircleDollarSign, title: "Économies", desc: "Rentabilisez vite votre investissement. Réduisez vos dépenses annuelles en éliminant définitivement l'achat coûteux d'eau embouteillée pour tout votre foyer." },
                            ].map((item, i) => (
                                <div key={i} className="flex flex-col items-center group w-full sm:w-[calc(50%-3rem)] lg:w-[calc(25%-3rem)]">
                                    <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center mb-8 transition-all group-hover:scale-110 group-hover:bg-white/10">
                                        <item.icon className="h-10 w-10 text-blue-600 group-hover:text-white" />
                                    </div>
                                    <h3 className="text-2xl font-medium mb-4 tracking-tight">{item.title}</h3>
                                    <p className="text-lg font-light leading-snug text-blue-100 text-justify">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 3. Product Grid */}
                <section id="systemes-filtration" className="py-24 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="text-left mb-16">
                            <h2
                                className="text-slate-900 tracking-tighter mb-8 text-left"
                                style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                            >
                                <span className="text-[32px] md:text-[60px] font-light leading-[1.1] md:leading-[60px] block">Nos systèmes de filtration</span>
                                <span className="text-[32px] md:text-[60px] font-normal leading-[1.1] md:leading-[60px] block">d'eau sous évier</span>
                            </h2>
                            <div className="w-24 h-1 bg-blue-600 mb-8"></div>
                            <p className="text-lg font-light leading-snug text-slate-600 mb-16 max-w-7xl mx-auto text-justify">
                                Nos systèmes de filtration d'eau sous évier représentent la solution ultime pour transformer votre cuisine en une source de pureté inépuisable. Conçus pour s'intégrer discrètement sous votre comptoir, ces systèmes utilisent des technologies de pointe pour éliminer jusqu'à 99 % des contaminants, incluant le chlore, le plomb et les sédiments. Contrairement aux pichets filtrants, ils offrent un débit constant et une filtration beaucoup plus rigoureuse, garantissant une eau de boisson cristalline et un goût irréprochable pour vos cafés et vos repas. Avec un entretien simplifié, vous reprenez le contrôle total sur la qualité de l’eau que votre famille consomme au quotidien.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
                            {[
                                { name: "Cristal Pro I", desc: "La première ligne de défense pour votre eau. Ce filtre à sédiments haute performance élimine efficacement le sable, la rouille et les particules en suspension, en clarifiant instantanément votre eau, jour après jour, en toute simplicité.", img: essentialImg },
                                { name: "Cristal Pro II", desc: "La combinaison parfaite pour une eau saine. Ce système duo associe la filtration des sédiments à un filtre charbon actif premium, éliminant non seulement les particules mais aussi le chlore, les COV et les goûts désagréables.", img: plusROImg },
                                { name: "Cristal Pro III", desc: "La technologie d'ultrafiltration avancée. Ce système offre une purification microscopique supérieure, filtrant virus, bactéries et kystes tout en conservant les minéraux bénéfiques pour une eau d'une pureté absolue, rafraîchissante et inégalée.", img: eliteROImg },
                            ].map((product, i) => (
                                <div
                                    key={i}
                                    className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full cursor-pointer"
                                    onClick={() => navigate("/contact")}
                                >
                                    <div className="relative h-80 overflow-hidden bg-slate-50 flex items-center justify-center p-12">
                                        <img
                                            src={product.img}
                                            alt={`${product.name} - Système de filtration d'eau sous évier haute performance Bricareau`}
                                            className="max-h-full object-contain group-hover:scale-110 transition-transform duration-700 mix-blend-multiply"
                                        />
                                    </div>
                                    <div className="p-8 space-y-4 flex flex-col flex-grow border-t-2 border-transparent group-hover:border-blue-600 transition-colors">
                                        <h3
                                            className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors tracking-tight text-center"
                                            style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                                        >
                                            {product.name}
                                        </h3>
                                        <p
                                            className="text-slate-500 font-light leading-snug flex-grow text-justify"
                                            style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                                        >
                                            {product.desc}
                                        </p>
                                        <div
                                            className="inline-flex items-center gap-2 text-blue-600 font-bold text-xs tracking-widest uppercase mt-4 group-hover:underline self-end"
                                            style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                                        >
                                            <ArrowRight className="h-6 w-6 transform group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 6. Comparison Table */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-left mb-16">
                            <h2
                                className="text-slate-900 tracking-tighter mb-8 text-left"
                                style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                            >
                                <span className="text-[32px] md:text-[60px] font-light leading-[1.1] md:leading-[60px] block">Comparez nos solutions</span>
                                <span className="text-[32px] md:text-[60px] font-normal leading-[1.1] md:leading-[60px] block">de filtration d'eau potable.</span>
                            </h2>
                            <div className="w-24 h-1 bg-blue-600"></div>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full min-w-[1000px] border-collapse bg-white rounded-2xl overflow-hidden shadow-sm">
                                <thead>
                                    <tr className="bg-gray-100">
                                        <th className="p-8 text-left text-gray-400 font-light uppercase tracking-wider">Solutions</th>
                                        {[
                                            { name: "Cristal Pro I", img: essentialImg },
                                            { name: "Cristal Pro II", img: plusROImg },
                                            { name: "Cristal Pro III", img: eliteROImg },
                                        ].map((m, i) => (
                                            <th key={i} className="p-4 text-center text-gray-900 font-bold">
                                                <div className="flex flex-col items-center gap-2">
                                                    <img
                                                        src={m.img}
                                                        alt={`Filtre d'eau ${m.name} - Technologie d'ultrafiltration Bricareau`}
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
                                            <td className="p-8 font-light text-gray-700">{row.feature}</td>
                                            <td className="p-8 text-center text-sm">
                                                {typeof row.essential === 'string' ? <span className="text-blue-600 font-bold bg-blue-50 px-3 py-1 rounded-full text-[10px] whitespace-nowrap">{row.essential}</span> : (row.essential ? <CheckCircle2 className="h-6 w-6 text-blue-600 mx-auto" /> : null)}
                                            </td>
                                            <td className="p-8 text-center text-sm">
                                                {typeof row.plus === 'string' ? <span className="text-blue-600 font-bold bg-blue-50 px-3 py-1 rounded-full text-[10px] whitespace-nowrap">{row.plus}</span> : (row.plus ? <CheckCircle2 className="h-6 w-6 text-blue-600 mx-auto" /> : null)}
                                            </td>
                                            <td className="p-8 text-center text-sm">
                                                {typeof row.elite === 'string' ? <span className="text-blue-600 font-bold bg-blue-50 px-3 py-1 rounded-full text-[10px] whitespace-nowrap">{row.elite}</span> : (row.elite ? <CheckCircle2 className="h-6 w-6 text-blue-600 mx-auto" /> : null)}
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
                            alt="Analyse professionnelle de la qualité d'eau sous évier pour une filtration sur mesure - Bricareau"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/30 lg:bg-gradient-to-r lg:from-black/50 lg:to-transparent" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-white via-white/10 to-transparent" />
                    </div>
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-2xl text-white">
                            <span className="text-white/80 text-xs font-black uppercase tracking-[0.3em] mb-8 block">
                                ANALYSE PROFESSIONNELLE
                            </span>
                            <h2
                                className="text-[40px] md:text-[60px] leading-[1.1] md:leading-[60px] font-light mb-8 tracking-tighter text-white"
                                style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                            >
                                Identifiez l'invisible, <span className="font-bold"><br />maîtrisez votre pureté.</span>
                            </h2>
                            <p className="text-lg font-light leading-snug text-white/95 mb-8 max-w-xl text-justify">
                                Ne laissez plus le doute couler de votre robinet. Nos tests d'eau révèlent la composition réelle de votre eau pour vous offrir une solution de filtration sur mesure, garantissant santé et sérénité à toute votre famille.                            </p>
                            <div className="flex gap-4">
                                <Button
                                    size="lg"
                                    className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 h-14 shadow-lg shadow-blue-200"
                                    style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                                    asChild
                                >
                                    <a href="/tests-eau">Demandez une analyse d'eau</a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 7. Testimonials Section */}
                <TestimonialsSection
                    filterProduct="/Systemes-de-filtration-deau-sous-evier"
                    title={
                        <>
                            <span className="text-[32px] md:text-[60px] font-light leading-[1.2] md:leading-[60px] block">Adieu les bouteilles plastiques</span>
                            <span className="text-[32px] md:text-[60px] font-normal leading-[1.2] md:leading-[60px] block"> Ils ont enfin retrouvé la liberté au robinet</span>
                        </>
                    }
                />

                {/* 8. FAQ Section */}
                <section className="py-24 bg-white border-t border-slate-100">
                    <div className="container mx-auto px-4 text-left">
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
                                {[
                                    {
                                        q: "Quels sont les avantages d'un système de filtration sous l'évier ?",
                                        a: "Il offre une eau de qualité embouteillée directement à votre robinet, élimine le goût et l'odeur de chlore, retire les métaux lourds et réduit drastiquement vos dépenses ainsi que votre empreinte plastique.",
                                    },
                                    {
                                        q: "Quels problèmes d'eau ce système peut-il résoudre ?",
                                        a: "Il est particulièrement efficace contre le chlore, les sédiments, le plomb, le mercure, les résidus de pesticides, et les microplastiques, garantissant une eau saine pour boire et cuisiner.",
                                    },
                                    {
                                        q: "Quelle est la différence entre un filtre standard et l'osmose inverse ?",
                                        a: "Un filtre standard réduit principalement le chlore et les sédiments. L'osmose inverse va plus loin en éliminant jusqu'à 99 % de tous les contaminants dissous grâce à une membrane semi-perméable ultra-fine.",
                                    },
                                    {
                                        q: "À quelle fréquence faut-il remplacer les filtres ?",
                                        a: "Pour une performance optimale, les cartouches de pré-filtration et de post-filtration doivent être changées tous les 6 à 12 mois. La membrane d'osmose inverse peut durer de 2 à 4 ans.",
                                    },
                                    {
                                        q: "Le système prend-il beaucoup de place sous l'évier ?",
                                        a: "Nos systèmes modernes sont très compacts. Ils occupent généralement moins de 25 % de l'espace de votre armoire sous l'évier, vous laissant de la place pour vos autres articles ménagers.",
                                    },
                                    {
                                        q: "Puis-je l'utiliser pour mon réfrigérateur et ma machine à glaçons ?",
                                        a: "Absolument ! Nous pouvons raccorder votre système de filtration à votre frigo pour que vous profitiez d'une eau fraîche et de glaçons cristallins, sans aucun goût indésirable.",
                                    },
                                ].slice(0, showAllFaqs ? undefined : 6).map((item, idx) => (
                                    <AccordionItem key={idx} value={`item-${idx}`} className="border-b-slate-100 px-4">
                                        <AccordionTrigger className="text-left text-base font-medium leading-6 hover:no-underline py-8 text-slate-800" style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}>
                                            {item.q}
                                        </AccordionTrigger>
                                        <AccordionContent className="text-base font-light leading-6 text-slate-500 pb-8 text-justify" style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}>
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
                            >                                <span className="text-[32px] md:text-[60px] font-normal leading-[1.1] md:leading-[60px] block">Ressources</span>
                            </h2>
                            <div className="w-24 h-1 bg-blue-600"></div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Filtre à eau sous l'évier vs système maison entière : lequel choisir ?",
                                    img: "https://images.unsplash.com/photo-1542013936693-884638332954?q=80&w=800&auto=format&fit=crop",
                                    link: "/filtre-evier-vs-maison-entiere-choisir",
                                },
                                {
                                    title: "Système de filtration en 3 étapes vs 5 étapes : quelle différence pour votre santé ?",
                                    img: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=800&auto=format&fit=crop",
                                    link: "/filtration-3vs5-etapes-sante-difference",
                                },
                                {
                                    title: "Résidus de médicaments dans l'eau : à quel point faut-il s'inquiéter ?",
                                    img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop",
                                    link: "/residus-medicaments-eau-risques-solutions",
                                },
                            ].map((art, i) => (
                                <NavLink
                                    key={i}
                                    to={art.link || "#"}
                                    className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full block cursor-pointer"
                                >
                                    <div className="h-56 overflow-hidden">
                                        <img
                                            src={art.img}
                                            alt={`${art.title} - Guide expert Bricareau sur la filtration sous évier`}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                    </div>
                                    <div className="p-8 text-left border-t-2 border-transparent group-hover:border-blue-600 transition-colors flex flex-col flex-grow">
                                        <h4 className="text-xl font-medium mb-4 group-hover:text-blue-600 transition-colors tracking-tight">{art.title}</h4>
                                        <div className="mt-auto">
                                            <span className="text-blue-600 font-bold flex items-center gap-2 group-hover:underline text-sm">
                                                Lire <ChevronRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                                            </span>
                                        </div>
                                    </div>
                                </NavLink>
                            ))}
                        </div>
                    </div>
                </section>

                <ConsultationFormSection id="consultation" />
            </main>
            <Footer />
        </div>
    );
};

export default FiltrationSousEvier;
