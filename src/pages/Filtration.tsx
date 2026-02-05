import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
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
import heroFiltration from "@/assets/woman-and-kid-drink-glass-water.jpg";
import drinkingWaterImg from "@/assets/Solutions d'eau potable.webp";
import specializedFiltersImg from "@/assets/5e9e4e01e48a5.jpg";
import waterSoftenerImg from "@/assets/Adoucisseurs d'eau.webp";
import showerWaterImg from "@/assets/Shower-water.jpg";
import uvSystemImg from "@/assets/Filtres d'eau spécialisés.webp";
import africanGirlImg from "@/assets/african-girl-stands-kitchen-drinks-water.jpg";
import glassOfWaterImg from "@/assets/glass-of-water.jpeg";

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
                                Systèmes de <span className="font-normal">Filtration d'eau,</span>
                                <br />
                                conçus pour <span className="font-normal">votre bien-être.</span>
                            </h1>
                            <p className="font-light text-[20px] leading-[28px] text-white/95 mb-8 max-w-xl">
                                Ne laissez plus le doute couler de votre robinet. Nos systèmes de filtration d'eau avancés agissent comme un bouclier invisible contre les contaminants, vous garantissant une eau d'une pureté irréprochable pour boire, cuisiner et grandir en toute confiance.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button
                                    size="lg"
                                    className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 h-14"
                                    style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                                    asChild
                                >
                                    <NavLink to="/contact">
                                        Obtenez une consultation
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

                {/* 1. Dark Benefits Section */}
                <section className="py-24 bg-blue-600 text-white text-center">
                    <div className="container mx-auto px-6 text-center">
                        <div className="text-center mb-16">
                            <h2 className="text-[32px] md:text-[48px] font-normal text-white mb-8 leading-[1.2] md:leading-[48px] tracking-tighter text-center">
                                Pourquoi choisir nos <br />systèmes de filtration d'eau ?
                            </h2>
                            <p className="text-blue-100 max-w-2xl mx-auto text-lg">
                                Plus qu'une simple filtration, c'est une protection avancée pour votre santé et un confort durable pour votre foyer.
                            </p>
                        </div>
                        <div className="flex flex-wrap justify-center gap-x-12 gap-y-16">
                            {[
                                { icon: GlassWater, title: "Goût exceptionnel", desc: "Élimine 99% du chlore et des mauvaises odeurs pour une eau pure au robinet." },
                                { icon: CircleDollarSign, title: "Économies réelles", desc: "Réduisez vos dépenses en éliminant définitivement l'achat d'eau embouteillée." },
                                { icon: Trash2, title: "Éco-responsable", desc: "Contribuez à la protection de l'environnement en réduisant les déchets plastiques." },
                                { icon: Wrench, title: "Entretien facile", desc: "Des systèmes conçus pour une maintenance simple et des changements de filtres rapides." }
                            ].map((benefit, i) => (
                                <div key={i} className="flex flex-col items-center group w-full sm:w-[calc(50%-3rem)] lg:w-[calc(25%-3rem)]">
                                    <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center mb-8 transition-all group-hover:scale-110 group-hover:bg-white/10">
                                        <benefit.icon className="h-10 w-10 text-blue-600 group-hover:text-white" />
                                    </div>
                                    <h4 className="text-2xl font-bold mb-4 tracking-tight">{benefit.title}</h4>
                                    <p className="text-blue-100 leading-relaxed">{benefit.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 2. Intro Section (Design matching Kitchen Section from Adoucissement.tsx) */}
                <section className="py-24 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col lg:flex-row-reverse items-center gap-20 mb-20">
                            {/* Left Side: Overlapping Images */}
                            <div className="lg:w-1/2 relative h-[500px] md:h-[600px]">
                                {/* Main Image (Larger) */}
                                <div className="absolute top-0 right-0 w-4/5 h-[85%] rounded-[2rem] overflow-hidden shadow-2xl z-10 transition-transform duration-500 hover:scale-[1.02]">
                                    <img
                                        src={glassOfWaterImg}
                                        alt="Systèmes de filtration d'eau potable"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                {/* Overlapping Image (Smaller) */}
                                <div className="absolute bottom-0 left-0 w-1/2 h-1/2 rounded-[2rem] overflow-hidden shadow-2xl z-20 border-[12px] border-gray-50 transition-transform duration-500 hover:scale-110">
                                    <img
                                        src={drinkingWaterImg}
                                        alt="Eau pure"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                            <div className="lg:w-1/2 text-left">
                                <h2 className="text-[32px] md:text-[48px] font-normal text-slate-900 mb-8 leading-[1.2] md:leading-[48px] tracking-tighter">
                                    Votre source d'eau cristalline, <br /> à volonté et sans compromis.
                                </h2>
                                <p className="font-light text-[20px] leading-[28px] text-gray-600 mb-8">
                                    Découvrez comment notre système d'osmose inverse libère votre quotidien du goût de chlore et de la corvée des bouteilles plastique. Profitez d'une eau légère, d'une clarté de diamant, idéale pour une hydratation saine et une cuisine riche en saveurs.
                                </p>
                                <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-10 h-14 text-lg font-bold" asChild>
                                    <NavLink to="/systeme-de-filtration-deau-potable">En savoir plus sur nos systèmes</NavLink>
                                </Button>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
                            {[
                                { title: "Pureté Absolue", desc: "Élimine 99% des contaminants, métaux lourds et micro-plastiques pour une sécurité totale de toute la famille." },
                                { title: "Éco-Conscient", desc: "Réduisez drastiquement votre empreinte carbone en éliminant définitivement les bouteilles d'eau jetables de votre foyer." },
                                { title: "Saveurs Révélées", desc: "Sublimez le goût de vos boissons et petits plats avec une eau pure, sans chlore ni impuretés pour une cuisine d'exception." }
                            ].map((item, i) => (
                                <div key={i}>
                                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                        <span className="text-blue-600 font-bold italic">0{i + 1}</span> {item.title}
                                    </h3>
                                    <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>


                {/* 3. Feature Section 1 (Under Sink - Design matching Adoucissement) */}
                <section className="py-24 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col lg:flex-row items-center gap-20 mb-20">
                            {/* Left Side: Overlapping Images */}
                            <div className="lg:w-1/2 relative h-[500px] md:h-[600px]">
                                {/* Main Image (Larger) */}
                                <div className="absolute top-0 left-0 w-4/5 h-[85%] rounded-[2rem] overflow-hidden shadow-2xl z-10 transition-transform duration-500 hover:scale-[1.02]">
                                    <img
                                        src={africanGirlImg}
                                        alt="Fille buvant de l'eau pure"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                {/* Overlapping Image (Smaller) */}
                                <div className="absolute bottom-0 right-0 w-1/2 h-1/2 rounded-[2rem] overflow-hidden shadow-2xl z-20 border-[12px] border-gray-50 transition-transform duration-500 hover:scale-110">
                                    <img
                                        src={specializedFiltersImg}
                                        alt="Osmose inverse"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                            <div className="lg:w-1/2 text-left">
                                <h2 className="text-[32px] md:text-[48px] font-normal text-slate-900 mb-8 leading-[1.2] md:leading-[48px] tracking-tighter">
                                    Systèmes de filtration d'eau <br />sous l'évier
                                </h2>
                                <p className="font-light text-[20px] leading-[28px] text-gray-600 mb-8">
                                    Éliminez jusqu'à 99% des pathogènes, du plomb et du fluorure. L'osmose inverse Bricareau est la solution ultime pour une eau de boisson de qualité restaurant directement chez vous.
                                </p>
                                <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-10 h-14 text-lg font-bold" asChild>
                                    <NavLink to="/systemes-de-filtration-deau-sous-evier">Explorer l'osmose inverse</NavLink>
                                </Button>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
                            {[
                                { title: "Filtration d'Élite", desc: "Un processus rigoureux en 5 étapes qui neutralise les métaux lourds, le micro-plastique et les sédiments invisibles à l'œil nu." },
                                { title: "Design Intelligent", desc: "Un réservoir ultra-compact conçu pour maximiser votre espace de rangement tout en offrant une réserve d'eau constante." },
                                { title: "Finition de Luxe", desc: "Inclut une sélection de robinets au design contemporain qui s'intègrent parfaitement à l'esthétique de votre cuisine moderne." }
                            ].map((item, i) => (
                                <div key={i}>
                                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                        <span className="text-blue-600 font-bold italic">0{i + 1}</span> {item.title}
                                    </h3>
                                    <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 4. Feature Section 2 (Whole House - Design matching Adoucissement) */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col lg:flex-row-reverse items-center gap-20 mb-20">
                            {/* Left Side: Overlapping Images */}
                            <div className="lg:w-1/2 relative h-[500px] md:h-[600px]">
                                {/* Main Image (Larger) */}
                                <div className="absolute top-0 right-0 w-4/5 h-[85%] rounded-[2rem] overflow-hidden shadow-2xl z-10 transition-transform duration-500 hover:scale-[1.02]">
                                    <img
                                        src={showerWaterImg}
                                        alt="Eau filtrée sous la douche"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                {/* Overlapping Image (Smaller) */}
                                <div className="absolute bottom-0 left-0 w-1/2 h-1/2 rounded-[2rem] overflow-hidden shadow-2xl z-20 border-[12px] border-white transition-transform duration-500 hover:scale-110">
                                    <img
                                        src={uvSystemImg}
                                        alt="Filtration centrale"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                            <div className="lg:w-1/2 text-left">
                                <h2 className="text-[32px] md:text-[48px] font-normal text-slate-900 mb-8 leading-[1.2] md:leading-[48px] tracking-tighter">
                                    Redécouvrez le luxe d'une eau filtrée cristalline à chaque jet de douche.
                                </h2>
                                <p className="font-light text-[20px] leading-[28px] text-gray-600 mb-8">
                                    Protégez vos appareils ménagers, votre tuyauterie et votre peau. Nos systèmes de filtration centrale traitent chaque goutte d'eau qui entre dans votre foyer pour une tranquillité d'esprit totale.
                                </p>
                                <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-10 h-14 text-lg font-bold" asChild>
                                    <NavLink to="/contact">Découvrez nos filtres d'eau spécialisés</NavLink>
                                </Button>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
                            {[
                                { title: "Défense Plomberie", desc: "Dites adieu au chlore résiduel et aux sédiments qui corrodent vos précieux appareils et obstruent votre robinetterie de luxe." },
                                { title: "Clarté de l'Eau", desc: "Réduisez drastiquement la turbidité pour une eau limpide à chaque robinet, protégeant ainsi l'éclat de vos sanitaires et de votre linge." },
                                { title: "Performance Longue Durée", desc: "Une technologie haute fidélité offrant une filtration efficace pendant 5 à 7 ans sans aucun entretien lourd ou changement fréquent." }
                            ].map((item, i) => (
                                <div key={i}>
                                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                        <span className="text-blue-600 font-bold italic">0{i + 1}</span> {item.title}
                                    </h3>
                                    <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 5. Elite Protection Section - Custom Design from Image */}
                <section className="py-24 bg-[#F8F9FA]">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                            {/* Left Side: Overlapping Images */}
                            <div className="relative h-[500px] md:h-[600px]">
                                {/* Main Image (Larger) */}
                                <div className="absolute top-0 left-0 w-4/5 h-[85%] rounded-[2rem] overflow-hidden shadow-2xl z-10 transition-transform duration-500 hover:scale-[1.02]">
                                    <img
                                        src={showerWaterImg}
                                        alt="Système UV Protection"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                            {/* Right Side: Content */}
                            <div className="flex flex-col items-start text-left lg:pl-10">
                                <span className="text-slate-400 text-xs font-bold uppercase tracking-[0.3em] mb-6">
                                    NOTRE ENGAGEMENT
                                </span>
                                <h2 className="text-[40px] md:text-[56px] font-bold text-slate-900 leading-[1.1] tracking-tighter mb-8">
                                    Analyse & Expertise : <br />
                                    Votre eau sous <br />
                                    la loupe.
                                </h2>
                                <p className="text-slate-500 text-lg leading-relaxed mb-10 max-w-lg">
                                    La qualité de l'eau n'est pas une question de hasard. Nos experts analysent chaque paramètre pour vous proposer la solution de filtration la plus adaptée à la composition unique de votre eau municipale ou de puits.
                                </p>
                                <div className="flex flex-wrap items-center gap-8">
                                    <Button className="bg-black hover:bg-slate-800 text-white rounded-full px-10 h-14 text-sm font-bold uppercase tracking-widest transition-all">
                                        En savoir plus
                                    </Button>
                                </div>
                            </div>
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
                        <div className="text-left mb-16">
                            <h2
                                className="text-slate-900 tracking-tighter mb-8 text-left"
                                style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                            >                                <span className="text-[32px] md:text-[60px] font-normal leading-[1.1] md:leading-[60px] block">Ressources</span>
                            </h2>
                            <div className="w-24 h-1 bg-blue-600"></div>
                        </div>                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
