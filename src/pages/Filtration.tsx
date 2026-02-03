import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
    ArrowRight,
    Check,
    ChevronRight,
    CheckCircle2,
    X,
    Wrench,
    GlassWater,
    CircleDollarSign,
    Trash2,
    Phone
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import heroFiltration from "@/assets/Enercare_JP_Day_2_Kitchen_Faucet_498-2048x1365.jpg";
import drinkingWaterImg from "@/assets/Solutions d'eau potable.webp";
import specializedFiltersImg from "@/assets/Filtres d'eau spécialisés.webp";
import waterSoftenerImg from "@/assets/Adoucisseurs d'eau.webp";
import uvSystemImg from "@/assets/Systèmes de désinfection UV.webp";
import waterTestBg from "@/assets/Enercare_JP_Day_2_Kitchen_Faucet_498-2048x1365.jpg";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import TestimonialsSection from "@/components/TestimonialsSection";

const Filtration = () => {
    const comparisonData = [
        { feature: "Filtration du chlore", ro: true, whole: true, basic: false },
        { feature: "Élimination des métaux lourds", ro: true, whole: "Option", basic: false },
        { feature: "Élimination des bactéries (UV)", ro: "Option", whole: "Option", basic: false },
        { feature: "Eau alcaline", ro: "Option", whole: false, basic: false },
        { feature: "Installation sous évier", ro: true, whole: false, basic: true },
        { feature: "Protection de la tuyauterie", ro: false, whole: true, basic: false },
    ];

    return (
        <div className="min-h-screen bg-background text-slate-900 font-sans">
            <Header />
            <main>
                {/* Hero Section */}
                <section className="relative h-[800px] flex items-start overflow-hidden pt-[220px]">
                    <div className="absolute inset-0 z-0">
                        <img
                            src={heroFiltration}
                            alt="Robinet de cuisine avec filtration"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40 lg:bg-gradient-to-r lg:from-black/60 lg:to-transparent" />
                    </div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-2xl text-white">
                            <span className="text-sm font-bold uppercase tracking-widest text-[#60A5FA] mb-4 block">
                                SOLUTIONS DE FILTRATION
                            </span>
                            <h1
                                className="text-[40px] md:text-[60px] leading-[1.1] md:leading-[60px] font-light mb-8 tracking-tighter text-white"
                                style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                            >
                                Systèmes de <span className="font-normal">Filtration d'eau</span>
                            </h1>
                            <p className="font-light text-[20px] leading-[28px] text-white/95 mb-8 max-w-xl">
                                Améliorez la qualité de votre eau au quotidien avec nos solutions de filtration avancées.
                                Fini le chlore, le calcaire et les impuretés.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button
                                    size="lg"
                                    className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 h-14"
                                    style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                                    asChild
                                >
                                    <NavLink to="/contact">
                                        Demandez une analyse d'eau
                                    </NavLink>
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
                </section>

                {/* 1. Intro Section (Image Left, Text Right) */}
                <section className="py-24 bg-white overflow-hidden">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                            <div className="lg:w-1/2 relative">
                                <div className="relative aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl z-10">
                                    <img
                                        src={drinkingWaterImg}
                                        alt="Systèmes de filtration Bricareau"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                {/* Decorative elements similar to the model */}
                                <div className="absolute -bottom-10 -right-10 w-2/3 h-2/3 bg-blue-50 rounded-[3rem] -z-10" />
                            </div>
                            <div className="lg:w-1/2 flex flex-col items-start text-left">
                                <span className="text-blue-600 text-[10px] font-black uppercase tracking-[0.5em] mb-8 block">
                                    ÉVOLUTION DE L'EAU
                                </span>
                                <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.05] tracking-tighter mb-10 text-balance" style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif' }}>
                                    Améliorez la qualité <br /> de votre eau aujourd'hui.
                                </h1>
                                <p className="text-xl text-slate-500 leading-relaxed mb-12 max-w-lg font-medium">
                                    Découvrez comment nos systèmes de filtration avancés transforment votre eau municipale ou de puits en une ressource pure, saine et délicieuse pour toute la famille.
                                </p>
                                <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-10 h-14 text-lg font-bold">
                                    Voir nos produits
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. Dark Benefits Section */}
                <section className="py-20 bg-[#0A192F] text-white">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center lg:px-20">
                            {[
                                { icon: GlassWater, title: "Goût exceptionnel", desc: "Élimine le chlore et les odeurs" },
                                { icon: CircleDollarSign, title: "Économies réelles", desc: "Plus besoin d'eau embouteillée" },
                                { icon: Trash2, title: "Éco-responsable", desc: "Réduit les déchets plastiques" },
                                { icon: Wrench, title: "Entretien facile", desc: "Changement de filtre simplifié" }
                            ].map((benefit, i) => (
                                <div key={i} className="flex flex-col items-center group">
                                    <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-6 transition-all group-hover:scale-110 group-hover:bg-blue-600">
                                        <benefit.icon className="h-8 w-8 text-blue-400 group-hover:text-white" />
                                    </div>
                                    <h3 className="text-lg font-bold mb-2 tracking-tight">{benefit.title}</h3>
                                    <p className="text-slate-400 text-sm">{benefit.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 3. Feature Section 1 (Reverse Osmosis) */}
                <section className="py-24 bg-slate-50 overflow-hidden">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-24">
                            <div className="lg:w-1/2 relative h-[500px]">
                                <div className="absolute right-0 top-0 w-4/5 h-4/5 rounded-[3rem] overflow-hidden shadow-2xl z-10 group">
                                    <img src={specializedFiltersImg} alt="Cuisinier utilisant de l'eau filtrée" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                </div>
                                <div className="absolute left-0 bottom-0 w-3/5 h-3/5 rounded-[2.5rem] overflow-hidden shadow-2xl z-20 border-8 border-white group">
                                    <img src={drinkingWaterImg} alt="Verre d'eau pure" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                </div>
                            </div>
                            <div className="lg:w-1/2 flex flex-col items-start text-left">
                                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-[1.1] tracking-tighter mb-8">
                                    Systèmes d'osmose <br />inverse d'élite.
                                </h2>
                                <p className="text-lg text-slate-500 font-medium mb-10">
                                    Éliminez jusqu'à 99% des pathogènes, du plomb et du fluorure. L'osmose inverse Bricareau est la solution ultime pour une eau de boisson de qualité restaurant directement chez vous.
                                </p>
                                <ul className="space-y-4 mb-12">
                                    {["Filtration en 5 étapes", "Réservoir compact gain de place", "Robinets design inclus", "Production jusqu'à 50 gallons/jour"].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-slate-700 font-semibold">
                                            <CheckCircle2 className="h-5 w-5 text-blue-600" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-10 h-14 text-lg font-bold flex items-center gap-2 group">
                                    Explorer l'osmose inverse <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. Feature Section 2 (Whole House) */}
                <section className="py-24 bg-white overflow-hidden border-t border-slate-100">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                            <div className="lg:w-1/2 relative h-[500px]">
                                <div className="absolute left-0 top-0 w-4/5 h-4/5 rounded-[3rem] overflow-hidden shadow-2xl z-10 group">
                                    <img src={waterSoftenerImg} alt="Salle de bain moderne" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                </div>
                                <div className="absolute right-0 bottom-0 w-3/5 h-3/5 rounded-[2.5rem] overflow-hidden shadow-2xl z-20 border-8 border-white group">
                                    <img src={uvSystemImg} alt="Désinfection UV" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                </div>
                            </div>
                            <div className="lg:w-1/2 flex flex-col items-start text-left">
                                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-[1.1] tracking-tighter mb-8">
                                    Filtration pour toute <br /> la résidence.
                                </h2>
                                <p className="text-lg text-slate-500 font-medium mb-10">
                                    Protégez vos appareils ménagers, votre tuyauterie et votre peau. Nos systèmes de filtration centrale traitent chaque goutte d'eau qui entre dans votre foyer.
                                </p>
                                <ul className="space-y-4 mb-12">
                                    {["Élimination du chlore résiduel", "Réduction de la turbidité", "Protection contre les odeurs", "Entretien minimal (tous les 5-7 ans)"].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-slate-700 font-semibold">
                                            <CheckCircle2 className="h-5 w-5 text-blue-600" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-10 h-14 text-lg font-bold flex items-center gap-2 group">
                                    Explorer les systèmes centraux <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 6. Expertise / Trust Section (Wide Image) */}
                <section className="relative min-h-[600px] flex items-center overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <img src={waterTestBg} alt="Expert Bricareau" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/20" />
                    </div>
                    <div className="container mx-auto px-6 relative z-10">
                        <div className="max-w-xl bg-white/95 backdrop-blur-md p-12 lg:p-16 rounded-[3rem] shadow-2xl animate-in fade-in slide-in-from-left duration-1000">
                            <span className="text-blue-600 text-xs font-black uppercase tracking-[0.3em] mb-8 block">
                                NOTRE EXPERTISE
                            </span>
                            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 leading-[1.05] tracking-tighter mb-8">
                                Conçus pour votre bien-être.
                            </h2>
                            <p className="text-lg text-slate-600 font-medium mb-10 leading-relaxed italic">
                                "Nos solutions sont conçues pour améliorer votre quotidien, une goutte d'eau à la fois. Nous allions technologie et expertise pour votre tranquillité."
                            </p>
                            <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-10 h-14 text-lg font-bold shadow-xl shadow-blue-600/20">
                                Demander une analyse d'eau
                            </Button>
                        </div>
                    </div>
                </section>

                {/* 6.5 Testimonials Section */}
                <TestimonialsSection />

                {/* 7. Comparison Table - Matching EauDePuits Design */}
                <section className="py-24 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.1] tracking-tighter mb-8 text-center">
                            Comparez nos solutions <br />de filtration d'eau de qualité.
                        </h2>
                        <div className="overflow-x-auto">
                            <table className="w-full min-w-[1000px] border-collapse bg-white rounded-2xl overflow-hidden shadow-sm">
                                <thead>
                                    <tr className="bg-gray-100">
                                        <th className="p-8 text-left text-gray-400 font-medium uppercase tracking-wider">Solutions</th>
                                        {[
                                            { name: "Osmose Inverse (Eau potable)", img: drinkingWaterImg },
                                            { name: "Système de filtration centrale", img: waterSoftenerImg },
                                            { name: "Filtres spécialisés (Sédiments)", img: specializedFiltersImg }
                                        ].map((m, i) => (
                                            <th key={i} className="p-4 text-center text-gray-900 font-bold text-sm">
                                                <div className="flex flex-col items-center gap-2">
                                                    <img
                                                        src={m.img}
                                                        alt={m.name}
                                                        className="w-[150px] h-[120px] object-contain mx-auto mix-blend-multiply"
                                                    />
                                                    <span className="max-w-[150px] inline-block uppercase tracking-wider text-[10px]">{m.name}</span>
                                                </div>
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {comparisonData.map((row, i) => (
                                        <tr key={i} className="hover:bg-gray-50 transition-colors">
                                            <td className="p-8 font-medium text-gray-700">{row.feature}</td>
                                            <td className="p-8 text-center">
                                                {typeof row.ro === 'string' ? <span className="text-blue-600 font-bold bg-blue-50 px-3 py-1 rounded-full text-[10px]">{row.ro}</span> : (row.ro ? <CheckCircle2 className="h-6 w-6 text-blue-600 mx-auto" /> : <X className="h-6 w-6 text-gray-300 mx-auto" />)}
                                            </td>
                                            <td className="p-8 text-center">
                                                {typeof row.whole === 'string' ? <span className="text-blue-600 font-bold bg-blue-50 px-3 py-1 rounded-full text-[10px]">{row.whole}</span> : (row.whole ? <CheckCircle2 className="h-6 w-6 text-blue-600 mx-auto" /> : <X className="h-6 w-6 text-gray-300 mx-auto" />)}
                                            </td>
                                            <td className="p-8 text-center">
                                                {row.basic ? <CheckCircle2 className="h-6 w-6 text-blue-600 mx-auto" /> : <X className="h-6 w-6 text-gray-300 mx-auto" />}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* 10. FAQ Section */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6 max-w-4xl">
                        <div className="text-center mb-16">
                            <span className="text-blue-600 text-[10px] font-black uppercase tracking-[0.5em] mb-4 block">
                                POUR VOUS ÉCLAIRER
                            </span>
                            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.1] tracking-tighter">
                                Vos questions.
                            </h2>
                        </div>
                        <Accordion type="single" collapsible className="w-full">
                            {[
                                {
                                    q: "Comment fonctionne l'osmose inverse ?",
                                    a: "L'osmose inverse pousse l'eau à travers une membrane semi-perméable microscopique pour éliminer les impuretés dissoutes, le chlore et les minéraux lourds, produisant une eau d'une pureté exceptionnelle.",
                                },
                                {
                                    q: "Quelle est la différence entre un adoucisseur et un filtre ?",
                                    a: "Un adoucisseur élimine spécifiquement le calcaire (calcium et magnésium), tandis qu'un système de filtration élimine les contaminants, le chlore, les odeurs et les sédiments pour améliorer la qualité de l'eau.",
                                },
                                {
                                    q: "À quelle fréquence faut-il changer les filtres ?",
                                    a: "Pour un système sous-évier, les cartouches classiques se changent aux 6-12 mois. La membrane d'osmose inverse peut durer 2 à 3 ans selon l'utilisation.",
                                },
                                {
                                    q: "Puis-je boire de l'eau filtrée sans danger ?",
                                    a: "Absolument. Nos systèmes sont certifiés pour transformer l'eau du robinet en une eau de boisson plus sûre, débarrassée des contaminants courants.",
                                },
                            ].map((item, idx) => (
                                <AccordionItem key={idx} value={`item-${idx}`} className="border-b-slate-100 px-4">
                                    <AccordionTrigger className="text-left font-bold text-xl hover:no-underline py-8 text-slate-800">
                                        {item.q}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-slate-500 text-lg leading-relaxed pb-8">
                                        {item.a}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </section>

                {/* 5. Discover More / Articles Section (Matching Resources design from EauDePuits) */}
                <section className="py-24 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-16 underline decoration-blue-600 underline-offset-8">
                            Ressources
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Comment choisir son filtre ?",
                                    img: "https://images.unsplash.com/photo-1542013936693-884638332954?q=80&w=800&auto=format&fit=crop",
                                },
                                {
                                    title: "Les bénéfices pour la santé",
                                    img: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=800&auto=format&fit=crop",
                                },
                                {
                                    title: "Guide de l'osmose inverse",
                                    img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop",
                                },
                            ].map((art, i) => (
                                <div
                                    key={i}
                                    className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
                                >
                                    <div className="h-56 overflow-hidden">
                                        <img
                                            src={art.img}
                                            alt={art.title}
                                            className="w-full h-full object-cover transition-transform group-hover:scale-110"
                                        />
                                    </div>
                                    <div className="p-8 text-left border-t-2 border-transparent group-hover:border-blue-600 transition-colors">
                                        <h4 className="text-xl font-bold mb-4">{art.title}</h4>
                                        <NavLink
                                            to="#"
                                            className="text-blue-600 font-bold flex items-center gap-2 group-hover:underline text-xs tracking-widest"
                                        >
                                            EN SAVOIR PLUS <ChevronRight className="h-4 w-4" />
                                        </NavLink>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 11. Consultation Form Section (Adopted from Adoucissement.tsx) */}
                <section className="py-24 bg-white border-t border-gray-100">
                    <div className="container mx-auto px-4">
                        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-20">
                            <div className="lg:w-1/3 text-left">
                                <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight italic">
                                    Planifiez une consultation gratuite sur l'eau
                                </h2>
                                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                    Remplissez le formulaire ci-dessous pour organiser une visite d'un de nos experts de l'eau.
                                </p>
                            </div>

                            <div className="lg:w-2/3">
                                <div className="bg-white rounded-3xl p-10 border border-gray-100 shadow-2xl">
                                    {/* Progress */}
                                    <div className="flex items-center gap-8 mb-12 overflow-x-auto pb-4 border-b border-gray-100">
                                        <div className="flex items-center gap-2 text-blue-600 font-bold whitespace-nowrap">
                                            <span className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center">1</span>
                                            VOS INFOS
                                        </div>
                                        <div className="flex items-center gap-2 text-gray-300 font-bold whitespace-nowrap">
                                            <span className="w-10 h-10 rounded-full bg-gray-200 text-white flex items-center justify-center">2</span>
                                            VOTRE DISPONIBILITÉ
                                        </div>
                                        <div className="flex items-center gap-2 text-gray-300 font-bold whitespace-nowrap">
                                            <span className="w-10 h-10 rounded-full bg-gray-200 text-white flex items-center justify-center">3</span>
                                            CONFIRMATION
                                        </div>
                                    </div>

                                    <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-3 text-left">
                                            <Label htmlFor="fname" className="font-bold flex gap-1">Prénom*</Label>
                                            <Input id="fname" className="h-14 bg-gray-50 border-none rounded-sm" placeholder="Jean" />
                                        </div>
                                        <div className="space-y-3 text-left">
                                            <Label htmlFor="lname" className="font-bold flex gap-1">Nom*</Label>
                                            <Input id="lname" className="h-14 bg-gray-50 border-none rounded-sm" placeholder="Dupont" />
                                        </div>
                                        <div className="space-y-3 text-left">
                                            <Label htmlFor="email" className="font-bold flex gap-1">Courriel*</Label>
                                            <Input id="email" type="email" className="h-14 bg-gray-50 border-none rounded-sm" placeholder="jean@exemple.com" />
                                        </div>
                                        <div className="space-y-3 text-left">
                                            <Label htmlFor="phone" className="font-bold flex gap-1">Téléphone*</Label>
                                            <Input id="phone" type="tel" className="h-14 bg-gray-50 border-none rounded-sm" placeholder="(514) 000-0000" />
                                        </div>
                                        <div className="md:col-span-2 space-y-3 text-left">
                                            <Label htmlFor="address" className="font-bold flex gap-1">Adresse*</Label>
                                            <Input id="address" className="h-14 bg-gray-50 border-none rounded-sm" placeholder="123 rue de l'Eau" />
                                        </div>
                                        <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-8">
                                            <div className="space-y-3 text-left">
                                                <Label htmlFor="city" className="font-bold flex gap-1">Ville*</Label>
                                                <Input id="city" className="h-14 bg-gray-50 border-none rounded-sm" placeholder="Montréal" />
                                            </div>
                                            <div className="space-y-3 text-left">
                                                <Label htmlFor="province" className="font-bold flex gap-1">Province*</Label>
                                                <Input id="province" className="h-14 bg-gray-50 border-none rounded-sm" placeholder="Québec" />
                                            </div>
                                            <div className="space-y-3 text-left">
                                                <Label htmlFor="zip" className="font-bold flex gap-1">Code Postal*</Label>
                                                <Input id="zip" className="h-14 bg-gray-50 border-none rounded-sm" placeholder="H1A 1A1" />
                                            </div>
                                        </div>
                                        <div className="md:col-span-2 text-left">
                                            <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-16 h-14 text-xl font-bold w-full md:w-auto">
                                                Continuer
                                            </Button>
                                            <p className="mt-4 text-[10px] text-gray-400 max-w-lg">
                                                En soumettant ce formulaire, vous acceptez nos conditions d'utilisation et notre politique de confidentialité. Un spécialiste Bricareau vous contactera sous peu.
                                            </p>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Filtration;
