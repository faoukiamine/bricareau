import React, { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
    ArrowRight,
    Check,
    Phone,
    CheckCircle2,
    X,
    ChevronRight,
    ShieldCheck,
    Droplets,
    Zap,
    Activity,
    ShieldAlert,
    BatteryLow,
    CupSoda,
    HeartHandshake
} from "lucide-react";
import { NavLink } from "@/components/NavLink";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import TestimonialsSection from "@/components/TestimonialsSection";
import ConsultationFormSection from "@/components/ConsultationFormSection";

import heroImg from "@/assets/african-girl-stands-kitchen-drinks-water.jpg";
import uvSystemImg2 from "@/assets/VH200-F10-265x300.jpg";
import uvSystemImg3 from "@/assets/VH410-F20-200x300.jpg";
import uvSystemImg4 from "@/assets/500x500_V-Arros-15-IHS-10_straight-1-300x300.jpg";
import waterTestingImg from "@/assets/Legionella-Monitoring.webp";

const DesinfectionUV = () => {
    const [showAllFaqs, setShowAllFaqs] = React.useState(false);
    useEffect(() => {
        document.title = "Désinfection UV : Éliminez 99,99% des bactéries et virus";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Protection maximale contre les bactéries et virus. Nos systèmes UV éliminent 99,99% des micro-organismes sans produits chimiques.");
        }

        // OG Tags
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) ogTitle.setAttribute("content", "Désinfection UV : Sécurité microbiologique | Bricareau");
        const ogDesc = document.querySelector('meta[property="og:description"]');
        if (ogDesc) ogDesc.setAttribute("content", "Une eau potable sécuritaire pour toute votre famille. Découvrez nos solutions de stérilisation UV haute performance.");
    }, []);


    const comparisonData = [


        { feature: "Élimination 99.99% des virus", VH410F20: true, VH200F10: true, Arros15IHS10: true },
        { feature: "Destruction des bactéries", VH410F20: true, VH200F10: true, Arros15IHS10: true },
        { feature: "Neutralisation des kystes", VH410F20: true, VH200F10: true, Arros15IHS10: true },
        { feature: "Alarme de remplacement de lampe", VH410F20: true, VH200F10: true, Arros15IHS10: true },
        { feature: "Capteur d'intensité UV", VH410F20: false, VH200F10: false, Arros15IHS10: true },
        { feature: "Garantie à vie sur la chambre", VH410F20: true, VH200F10: true, Arros15IHS10: true },
    ];

    return (
        <div className="min-h-screen bg-background text-slate-900 font-sans">
            <Header />
            <main>
                {/* 1.Hero Section */}
                <section className="relative h-[850px] flex items-center overflow-hidden -mt-[104px] pt-[104px]">
                    <div className="absolute inset-0 z-0">
                        <img
                            src={heroImg}
                            alt="Efficacité d'un système de désinfection UV pour une eau potable sans bactéries par Bricareau"
                            className="w-full h-full object-cover object-[center_35%]"
                        />
                        <div className="absolute inset-0 bg-black/40 lg:bg-gradient-to-r lg:from-black/60 lg:to-transparent" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-white via-white/10 to-transparent" />
                        {/* Brightening Start 1/3 Right */}
                        <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white/90 via-white/40 to-transparent" />
                    </div>

                    <div className="container mx-auto px-6 relative z-10">
                        <div className="max-w-2xl text-white">
                            <h1
                                className="text-[32px] md:text-[48px] leading-[32px] md:leading-[48px] font-light mb-8 tracking-tighter text-white"
                                style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                            >
                                <span className="font-bold text-blue-400">Systèmes de désinfection UV</span> <br />
                                <span className="font-bold text-white">Zéro produit chimique, 100% de protection.</span>
                            </h1>
                            <p className="font-light text-[20px] leading-[28px] text-white/95 mb-8 max-w-xl text-justify">
                                Éliminez 99,99% des bactéries, virus et kystes de votre eau de puits ou municipale sans aucun additif chimique. Assurez une pureté microbiologique totale pour la sécurité de votre famille à chaque robinet.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button
                                    size="lg"
                                    className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 h-14 shadow-lg shadow-blue-200"
                                    style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                                    asChild
                                >
                                    <a href="#consultation">Planifiez une consultation gratuite</a>
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="bg-white/10 hover:bg-white/20 text-white border-white rounded-full px-8 h-14 backdrop-blur-sm shadow-lg flex items-center gap-2"
                                    style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                                    onClick={() => document.getElementById('systemes-uv')?.scrollIntoView({ behavior: 'smooth' })}
                                >
                                    Découvrir nos systèmes UV
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

                {/* 2. Why choose UV disinfection? */}
                <section className="py-24 bg-blue-600 text-white">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2
                                className="text-[32px] md:text-[60px] font-normal text-white mb-8 leading-[1.1] md:leading-[60px] tracking-tighter text-center"
                                style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                            >
                                <span className="font-light block">Pourquoi choisir la</span>
                                <span className="font-normal block">désinfection UV ?</span>
                            </h2>
                            <p className="text-lg font-light leading-relaxed text-blue-100 max-w-2xl mx-auto text-justify">
                                Profitez d'une tranquillité d'esprit totale avec une technologie qui élimine 99,99% des pathogènes sans ajout de produits chimiques.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
                            {[
                                { icon: ShieldCheck, title: "Sans produits chimiques", desc: "Aucun goût ni odeur de chlore ajouté à votre eau." },
                                { icon: Zap, title: "Action instantanée", desc: "L'eau est désinfectée dès qu'elle traverse le débit." },
                                { icon: Activity, title: "Efficacité prouvée", desc: "Détruit l'ADN des micro-organismes nocifs." },
                                { icon: HeartHandshake, title: "Sécurité 100%", desc: "Protection permanente 24h/24 contre les bactéries." },
                                { icon: CupSoda, title: "Goût préservé", desc: "L'eau garde ses propriétés organoleptiques." },
                                { icon: Droplets, title: "Eau cristalline", desc: "Conserve les minéraux essentiels de votre eau." },
                                { icon: BatteryLow, title: "Faible énergie", desc: "Consomme autant qu'une ampoule standard." },
                                { icon: ShieldAlert, title: "Zéro risque", desc: "Pas de stockage de produits chimiques dangereux." }
                            ].map((benefit, i) => (
                                <div key={i} className="flex flex-col items-center group">
                                    <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center mb-8 transition-all group-hover:scale-110 group-hover:bg-white/10">
                                        <benefit.icon className="h-10 w-10 text-blue-600 group-hover:text-white" />
                                    </div>
                                    <h3 className="text-2xl font-medium mb-4 tracking-tight">{benefit.title}</h3>
                                    <p className="text-lg font-light leading-relaxed text-blue-100 text-justify">{benefit.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 3. UV Systems - Product Grid */}
                <section id="systemes-uv" className="py-24 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="text-left mb-16">
                            <h2
                                className="text-slate-900 tracking-tighter mb-8 text-left"
                                style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                            >
                                <span className="text-[32px] md:text-[60px] font-light leading-[1.1] md:leading-[60px] block">Nos systèmes de</span>
                                <span className="text-[32px] md:text-[60px] font-normal leading-[1.1] md:leading-[60px] block">désinfection UV</span>
                            </h2>
                            <div className="w-24 h-1 bg-blue-600 mb-12"></div>

                            <p className="text-lg font-light leading-relaxed text-slate-600 text-justify max-w-7xl mx-auto" style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}>
                                La technologie UV est le choix idéal pour les consommateurs qui cherchent à se protéger contre les contaminants microbiologiques, notamment les bactéries (E.coli, coliformes fécaux, etc.), les virus et les protozoaires (cryptosporidium, giardia, etc.) qui peuvent être résistants au chlore. Contrairement aux traitements chimiques, les UV ne modifient pas le goût, l’odeur ou la composition physico-chimique de l’eau. Nos dispositifs UV mis en place sur le point d’entrée (POE) est installé avant que l’eau ne soit distribuée dans les foyers, au niveau de la conduite d’alimentation principale, avant qu’elle ne circule dans l’ensemble du réseau domestique.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
                            {[
                                { name: "VH200-F10", desc: "Préfiltration UV intégrée pour toute la maison\nIdéal pour : bactéries, turbidité/opacité.\nDébit : 9 gpm.", img: uvSystemImg2 },
                                { name: "VH410-F20", desc: "Préfiltration UV intégrée pour toute la maison\nIdéal pour : bactéries, turbidité/eau trouble.\nDébit : 18 gpm.", img: uvSystemImg3 },
                                { name: "Arros 15-IHS10", desc: "Système de traitement d'eau UV pour toute la maison\nIdéal pour : bactéries, turbidité/opacité.\nDébit : 15 gpm.", img: uvSystemImg4 }
                            ].map((prod, i) => (
                                <div
                                    key={i}
                                    className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full cursor-pointer"
                                    onClick={() => window.location.href = "/contact"}
                                >
                                    <div className="relative h-80 overflow-hidden bg-slate-50 flex items-center justify-center p-12">
                                        <img
                                            src={prod.img}
                                            alt={`${prod.name} - Système de désinfection UV Bricareau pour toute la maison`}
                                            className="max-h-full object-contain group-hover:scale-110 transition-transform duration-700 mix-blend-multiply"
                                        />
                                    </div>
                                    <div className="p-8 space-y-4 flex flex-col flex-grow border-t-2 border-transparent group-hover:border-blue-600 transition-colors">
                                        <h3
                                            className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors tracking-tight text-center"
                                            style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                                        >
                                            {prod.name}
                                        </h3>
                                        <p
                                            className="text-slate-500 font-light leading-[24px] flex-grow text-justify whitespace-pre-line text-[18px]"
                                            style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                                        >
                                            {prod.desc}
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

                {/* 5. Comparison Table */}
                <section className="py-24 bg-white border-t border-slate-50">
                    <div className="container mx-auto px-4">
                        <div className="text-left mb-16">
                            <h2
                                className="text-slate-900 tracking-tighter mb-8 text-left"
                                style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                            >
                                <span className="text-[32px] md:text-[60px] font-light leading-[1.1] md:leading-[60px] block">Comparez nos</span>
                                <span className="text-[32px] md:text-[60px] font-normal leading-[1.1] md:leading-[60px] block">systèmes UV</span>
                            </h2>
                            <div className="w-24 h-1 bg-blue-600"></div>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full min-w-[1000px] border-collapse bg-white rounded-2xl overflow-hidden shadow-sm">
                                <thead>
                                    <tr className="bg-gray-100">
                                        <th className="p-8 text-left text-gray-400 font-light uppercase tracking-wider w-1/4">Modèle</th>
                                        {[
                                            { name: "VH200-F10", img: uvSystemImg2 },
                                            { name: "VH410-F20", img: uvSystemImg3 },
                                            { name: "Arros 15-IHS10", img: uvSystemImg4 }
                                        ].map(m => (
                                            <th key={m.name} className="p-4 text-center text-gray-900 font-bold">
                                                <div className="flex flex-col items-center gap-2">
                                                    <img
                                                        src={m.img}
                                                        alt={`Modèle ${m.name} - Stérilisateur d'eau UV haute performance Bricareau`}
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
                                            <td className="p-8 text-center">
                                                {typeof row.VH200F10 === 'string' ? <span className="text-blue-600 font-bold">{row.VH200F10}</span> : (row.VH200F10 ? <CheckCircle2 className="h-6 w-6 text-blue-600 mx-auto" /> : null)}
                                            </td>
                                            <td className="p-8 text-center bg-blue-50/20">
                                                {typeof row.VH410F20 === 'string' ? <span className="text-blue-600 font-bold">{row.VH410F20}</span> : (row.VH410F20 ? <CheckCircle2 className="h-6 w-6 text-blue-600 mx-auto" /> : null)}
                                            </td>
                                            <td className="p-8 text-center bg-blue-50/20">
                                                {typeof row.Arros15IHS10 === 'string' ? <span className="text-blue-600 font-bold">{row.Arros15IHS10}</span> : (row.Arros15IHS10 ? <CheckCircle2 className="h-6 w-6 text-blue-600 mx-auto" /> : null)}
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
                            alt="Analyse microbiologique de l'eau de puits pour détecter les bactéries - Expertise Bricareau"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/30 lg:bg-gradient-to-r lg:from-black/50 lg:to-transparent" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-white via-white/10 to-transparent" />
                    </div>
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-2xl text-white">
                            <span className="text-white/80 text-xs font-black uppercase tracking-[0.3em] mb-8 block">
                                ANALYSE MICROBIOLOGIQUE
                            </span>
                            <h2
                                className="text-[40px] md:text-[60px] leading-[1.1] md:leading-[60px] font-light mb-8 tracking-tighter text-white"
                                style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                            >
                                Votre eau de puits est-elle <span className="font-bold"><br />vraiment sécuritaire ?</span>
                            </h2>
                            <p className="text-lg font-light leading-relaxed text-white/95 mb-8 max-w-xl text-justify">
                                Ne devinez pas la qualité de votre eau. Nos analyses approfondies identifient les bactéries, les minéraux et les contaminants chimiques pour vous offrir une tranquillité d'esprit totale.
                            </p>
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
                    filterProduct="/Systemes-de-desinfection-UV"
                    title={
                        <>
                            <span className="text-[32px] md:text-[60px] font-light leading-[1.2] md:leading-[60px] block">Une eau saine.</span>
                            <span className="text-[32px] md:text-[60px] font-normal leading-[1.2] md:leading-[60px] block text-blue-600">Une sécurité UV.</span>
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
                                        q: "Qu'est-ce qu'un système de désinfection UV ?",
                                        a: "C'est un dispositif qui utilise la lumière ultraviolette (UV-C) pour neutraliser les micro-organismes nocifs dans l'eau. En pénétrant l'ADN des bactéries et virus, les rayons UV les empêchent de se reproduire et de causer des maladies.",
                                    },
                                    {
                                        q: "Contre quels types de contaminants les UV sont-ils efficaces ?",
                                        a: "Les systèmes UV éliminent 99,99 % des micro-organismes, y compris les bactéries comme E. coli, les virus, et les parasites résistants au chlore comme Giardia et Cryptosporidium.",
                                    },
                                    {
                                        q: "L'eau de puits nécessite-t-elle toujours un système UV ?",
                                        a: "Les puits sont vulnérables aux infiltrations de surface après de fortes pluies ou la fonte des neiges. Un système UV offre une barrière de sécurité permanente contre les variations soudaines de la qualité microbiologique de votre eau.",
                                    },
                                    {
                                        q: "Quels sont les avantages des UV par rapport au chlore ?",
                                        a: "Les UV ne nécessitent aucun produit chimique, ne changent pas le goût ou l'odeur de l'eau, et ne créent pas de sous-produits toxiques. C'est la méthode de désinfection la plus écologique et la plus saine.",
                                    },
                                    {
                                        q: "Pourquoi ai-je besoin d'un système UV si j'ai un adoucisseur ?",
                                        a: "Un adoucisseur élimine les minéraux (calcaire), mais n'élimine pas les bactéries ou les virus. Le système UV est la protection finale qui assure que l'eau que vous buvez ne contient aucun micro-organisme vivant.",
                                    },
                                    {
                                        q: "À quelle fréquence faut-il changer la lampe UV ?",
                                        a: "La lampe UV doit être remplacée tous les 12 mois (environ 9 000 heures). Même si elle s'allume encore, son intensité germicide diminue drastiquement après un an et ne garantit plus la désinfection.",
                                    },
                                    {
                                        q: "Qu'est-ce que le fourreau de quartz et comment l'entretenir ?",
                                        a: "Le fourreau de quartz est le tube transparent qui protège la lampe de l'eau. Il doit être nettoyé régulièrement pour rester limpide. S'il est entartré ou opaque (à cause du calcaire), les rayons UV ne peuvent plus traverser pour désinfecter l'eau.",
                                    },
                                    {
                                        q: "Une filtration préalable est-elle nécessaire avant l'UV ?",
                                        a: "Oui, il est crucial d'installer un filtre à sédiments de 5 microns en amont. Les particules en suspension peuvent créer des zones d'ombre où les bactéries se 'cachent' du rayonnement UV.",
                                    },
                                    {
                                        q: "Le système UV fonctionne-t-il lors d'une panne de courant ?",
                                        a: "Non, la lampe s'éteint sans électricité. En cas de panne, il ne faut pas consommer l'eau ou alors il faut la faire bouillir. Nos systèmes sont souvent équipés d'alarmes pour avertir de l'arrêt de la lampe.",
                                    },
                                    {
                                        q: "L'UV consomme-t-il beaucoup d'électricité ?",
                                        a: "Non, un système résidentiel standard consomme à peu près autant d'énergie qu'une ampoule de 40 à 60 watts. C'est une solution très économique pour une protection 24h/24.",
                                    },
                                    {
                                        q: "Peut-on installer un système UV sur l'entrée d'eau de la ville ?",
                                        a: "Bien que l'eau municipale soit traitée, de vieilles infrastructures ou des bris d'aqueduc peuvent introduire des bactéries. Un système UV domestique sert d'assurance supplémentaire pour votre tranquillité d'esprit.",
                                    },
                                    {
                                        q: "Comment savoir si mon système UV fonctionne correctement ?",
                                        a: "Nos contrôleurs intelligents affichent le nombre de jours restants avant le changement de lampe et émettent une alarme sonore et visuelle en cas de défaillance de la lampe ou du système.",
                                    },
                                    {
                                        q: "La chaleur de la lampe affecte-t-elle l'eau ?",
                                        a: "Si l'eau ne circule pas pendant plusieurs heures, l'eau à l'intérieur de la chambre d'acier inoxydable peut devenir tiède. Il suffit de laisser couler l'eau quelques secondes pour retrouver une eau fraîche.",
                                    },
                                    {
                                        q: "Quelle est la garantie sur les systèmes UV Bricareau ?",
                                        a: "Nos systèmes sont couverts par une garantie robuste sur la chambre de traitement en acier inoxydable (souvent 10 ans) et sur les composantes électriques et électroniques.",
                                    },
                                    {
                                        q: "Dois-je faire tester mon eau après l'installation ?",
                                        a: "Oui, nous recommandons toujours un test bactériologique professionnel après l'installation et une désinfection initiale de la tuyauterie pour confirmer que tout le réseau domestique est sain.",
                                    }
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

                {/* 9. Resources Section */}
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
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Comment fonctionne la désinfection UV ?",
                                    img: "https://images.unsplash.com/photo-1542013936693-884638332954?q=80&w=800&auto=format&fit=crop",
                                    path: "/blog/lampe-uv-eau-de-puits"
                                },
                                {
                                    title: "UV vs Chlore : Le comparatif santé",
                                    img: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=800&auto=format&fit=crop",
                                    path: "/blog/lampe-uv-eau-de-puits"
                                },
                                {
                                    title: "Maintenir votre lampe UV efficace",
                                    img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop",
                                    path: "/blog/lampe-uv-eau-de-puits"
                                }
                            ].map((art, i) => (
                                <div
                                    key={i}
                                    className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer group flex flex-col h-full border border-gray-100"
                                    onClick={() => window.location.href = art.path}
                                >
                                    <div className="h-56 overflow-hidden">
                                        <img src={art.img} alt={`${art.title} - Guide expert Bricareau sur la désinfection UV`} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                                    </div>
                                    <div className="p-8 text-left border-t-2 border-transparent group-hover:border-blue-600 transition-colors flex flex-col flex-grow">
                                        <h4 className="text-xl font-medium mb-4 group-hover:text-blue-600 transition-colors tracking-tight">{art.title}</h4>
                                        <div className="mt-auto">
                                            <NavLink to={art.path} className="text-blue-600 font-bold flex items-center gap-2 group-hover:underline text-sm">
                                                Lire <ChevronRight className="h-4 w-4" />
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </section>

                {/* 10. Contact Form Section */}
                <ConsultationFormSection id="consultation" />


            </main>
            <Footer />
        </div>
    );
};

export default DesinfectionUV;
