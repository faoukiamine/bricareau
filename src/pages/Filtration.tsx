import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
    ChevronRight,
    CheckCircle2,
    X,
    Wrench,
    GlassWater,
    HandCoins,
    Recycle,
    Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import heroFiltration from "@/assets/5846952.jpg";
import drinkingWaterImg from "@/assets/Solutions d'eau potable.webp";
import specializedFiltersImg from "@/assets/Filtres d'eau spécialisés.webp";
import waterSoftenerImg from "@/assets/Adoucisseurs d'eau.webp";
import teenagerShowerImg from "@/assets/teenager-taking-shower-reduce-hangover-effect.jpg";
import undersinkSystemImg from "@/assets/Triple Stage Filter.jpg";
import africanGirlImg from "@/assets/african-girl-stands-kitchen-drinks-water.jpg";
import glassOfWaterImg from "@/assets/glass-of-water.jpeg";
import waterTestingImg from "@/assets/Scientist istesting water.webp";
import process1 from "@/assets/2149228790.jpg";
import labTestImg from "@/assets/2149239334.jpg";


import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import ConsultationFormSection from "@/components/ConsultationFormSection";
import TestimonialsSection from "@/components/TestimonialsSection";

const Filtration = () => {
    const comparisonData = [
        { feature: "Spectre d'épuration", whole: true, ro: true, basic: false },
        { feature: "Élimination des métaux lourds", whole: true, ro: "Option", basic: false },
        { feature: "Élimination des bactéries (UV)", whole: false, ro: "Option", basic: false },
        { feature: "Eau alcaline", whole: "Option", ro: false, basic: false },
        { feature: "Installation sous évier", whole: true, ro: false, basic: true },
        { feature: "Protection de la tuyauterie", whole: false, ro: true, basic: false },
    ];

    return (
        <div className="min-h-screen bg-background text-slate-900 font-sans">
            <Header />
            <main>
                {/* 1.Hero Section */}
                <section className="relative h-[800px] flex items-start overflow-hidden pt-[220px]">
                    <div className="absolute inset-0 z-0">
                        <img
                            src={heroFiltration}
                            alt="Robinet de cuisine avec filtration"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40 lg:bg-gradient-to-r lg:from-black/60 lg:to-transparent" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-white via-white/10 to-transparent" />
                    </div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-2xl text-white">
                            <span className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-4 block">
                                SOLUTIONS DE FILTRATION D'EAU
                            </span>
                            <h1
                                className="text-[40px] md:text-[60px] leading-[1.1] md:leading-[60px] font-light mb-8 tracking-tighter text-white"
                                style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                            >
                                <span className="font-bold">Systèmes de Filtration d'eau,</span>
                                 <span className="font-bold">conçus pour votre bien-être.</span>
                            </h1>
                            <p className="text-lg font-light leading-relaxed text-white/95 mb-8 max-w-xl text-justify">
                                Ne laissez plus le doute couler de votre robinet. Nos systèmes de filtration d'eau avancés agissent comme un bouclier invisible contre les contaminants, vous garantissant une eau d'une pureté irréprochable pour boire, cuisiner et grandir en toute confiance.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button
                                    size="lg"
                                    className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 h-14"
                                    style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                                    asChild
                                >
                                    <a href="#consultation">
                                        Planifier une consultation gratuite
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
                </section>

                {/* 2. Benefits Section */}
                <section className="py-24 bg-blue-600 text-white text-center">
                    <div className="container mx-auto px-6 text-center">
                        <div className="text-center mb-16">
                            <h2 className="text-[32px] md:text-[48px] font-normal text-white mb-8 leading-[1.2] md:leading-[48px] tracking-tighter text-center">
                                Pourquoi choisir nos <br />systèmes de filtration d'eau ?
                            </h2>
                            <p className="text-lg font-light leading-relaxed text-blue-100 max-w-2xl mx-auto text-justify">
                                Plus qu'une simple filtration, c'est une protection avancée pour votre santé et un confort durable pour votre foyer.
                            </p>
                        </div>
                        <div className="flex flex-wrap justify-center gap-x-12 gap-y-16">
                            {[
                                { icon: GlassWater, title: "Goût exceptionnel", desc: "Élimine 99% du chlore et des mauvaises odeurs pour une eau pure au robinet." },
                                { icon: HandCoins, title: "Économies réelles", desc: "Réduisez vos dépenses en éliminant définitivement l'achat d'eau embouteillée." },
                                { icon: Recycle, title: "Éco-responsable", desc: "Contribuez à la protection de l'environnement en réduisant les déchets plastiques." },
                                { icon: Wrench, title: "Entretien facile", desc: "Des systèmes conçus pour une maintenance simple et des changements de filtres rapides." }
                            ].map((benefit, i) => (
                                <div key={i} className="flex flex-col items-center group w-full sm:w-[calc(50%-3rem)] lg:w-[calc(25%-3rem)]">
                                    <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center mb-8 transition-all group-hover:scale-110 group-hover:bg-white/10">
                                        <benefit.icon className="h-10 w-10 text-blue-600 group-hover:text-white" />
                                    </div>
                                    <h4 className="text-2xl font-medium mb-4 tracking-tight">{benefit.title}</h4>
                                    <p className="text-lg font-light leading-relaxed text-blue-100 text-justify">{benefit.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>


                {/* 3. Whole House Water Filter Section */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col lg:flex-row items-center gap-20 mb-20">
                            {/* Left Side: Overlapping Images */}
                            <div className="w-full lg:w-1/2 relative h-[350px] md:h-[500px] lg:h-[600px]">
                                {/* Main Image (Larger) */}
                                <div className="absolute top-0 right-0 w-4/5 h-[85%] rounded-[2rem] overflow-hidden shadow-2xl z-10 transition-transform duration-500 hover:scale-[1.02]">
                                    <img
                                        src={teenagerShowerImg}
                                        alt="Eau filtrée sous la douche"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                {/* Overlapping Image (Smaller) */}
                                <div className="absolute bottom-0 left-0 w-1/2 h-1/2 rounded-[2rem] overflow-hidden shadow-2xl z-20 border-[12px] border-white transition-transform duration-500 hover:scale-110">
                                    <img
                                        src={specializedFiltersImg}
                                        alt="Filtration centrale"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                            <div className="lg:w-1/2 text-left">
                                <h2 className="text-[32px] md:text-[48px] font-normal text-slate-900 mb-8 leading-[1.2] md:leading-[48px] tracking-tighter">
                                    Redécouvrez le luxe d'une eau filtrée cristalline à chaque jet de douche.
                                </h2>
                                <p className="text-lg font-light leading-relaxed text-gray-600 mb-8 text-justify">
                                    Protégez vos appareils ménagers, votre tuyauterie et votre peau. Nos systèmes de filtration centrale traitent chaque goutte d'eau qui entre dans votre foyer pour une tranquillité d'esprit totale.
                                </p>
                                <NavLink to="/Filtres-deau-pour-toute-la-maison" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3 rounded-full transition-colors">
                                    Découvrir nos filtres d'eau spécialisés
                                </NavLink>
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
                                    <p className="text-lg font-light leading-relaxed text-gray-500 text-justify">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 4. Reverse Osmosis Water Filtration Section */}
                <section className="py-24 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col lg:flex-row-reverse items-center gap-20 mb-20">
                            {/* Left Side: Overlapping Images */}
                            <div className="w-full lg:w-1/2 relative h-[350px] md:h-[500px] lg:h-[600px]">
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
                                <p className="text-lg font-light leading-relaxed text-gray-600 mb-8 text-justify">
                                    Découvrez comment notre système d'osmose inverse libère votre quotidien du goût de chlore et de la corvée des bouteilles plastique. Profitez d'une eau légère, d'une clarté de diamant, idéale pour une hydratation saine et une cuisine riche en saveurs.
                                </p>
                                <NavLink to="/systeme-de-filtration-deau-potable" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3 rounded-full transition-colors">
                                    Découvrir nos systèmes d'osmose inverse
                                </NavLink>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
                            {[
                                { title: "Pureté Absolue", desc: "Élimine 99% des contaminants, métaux lourds et micro-plastiques pour une sécurité totale de toute la famille." },
                                { title: "Éco-Conscient", desc: "Réduisez drastiquement votre empreinte carbone en éliminant définitivement les bouteilles d'eau jetables de votre foyer." },
                                { title: "Saveurs Révélées", desc: "Sublimez le goût de vos boissons et petits plats avec une eau pure, sans chlore ni impuretés pour une cuisine d'exception." }
                            ].map((item, i) => (
                                <div key={i} className="group">
                                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                        <span className="text-blue-600 font-bold italic">0{i + 1}</span> {item.title}
                                    </h3>
                                    <p className="text-lg font-light leading-relaxed text-gray-500 text-justify">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>


                {/* 5. Under Sink Water Filtration Systems Section */}
                <section className="py-24 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col lg:flex-row items-center gap-20 mb-20">
                            {/* Left Side: Overlapping Images */}
                            <div className="w-full lg:w-1/2 relative h-[350px] md:h-[500px] lg:h-[600px]">
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
                                        src={undersinkSystemImg}
                                        alt="Osmose inverse"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                            <div className="lg:w-1/2 text-left">
                                <h2 className="text-[32px] md:text-[48px] font-normal text-slate-900 mb-8 leading-[1.2] md:leading-[48px] tracking-tighter">
                                    Systèmes de filtration d'eau <br />sous l'évier
                                </h2>
                                <p className="text-lg font-light leading-relaxed text-gray-600 mb-8 text-justify">
                                    Éliminez jusqu'à 99% des pathogènes, du plomb et du fluorure. L'osmose inverse Bricareau est la solution ultime pour une eau de boisson de qualité restaurant directement chez vous.
                                </p>
                                <NavLink to="/Systemes-de-filtration-deau-sous-evier" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3 rounded-full transition-colors">
                                    Explorer nos systèmes de filtration sous l'évier
                                </NavLink>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
                            {[
                                { title: "Filtration d'Élite", desc: "Un processus rigoureux en 5 étapes qui neutralise les métaux lourds, le micro-plastique et les sédiments invisibles à l'œil nu." },
                                { title: "Design Intelligent", desc: "Un réservoir ultra-compact conçu pour maximiser votre espace de rangement tout en offrant une réserve d'eau constante." },
                                { title: "Finition de Luxe", desc: "Inclut une sélection de robinets au design contemporain qui s'intègrent parfaitement à l'esthétique de votre cuisine moderne." }
                            ].map((item, i) => (
                                <div key={i} className="group">
                                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                        <span className="text-blue-600 font-bold italic">0{i + 1}</span> {item.title}
                                    </h3>
                                    <p className="text-lg font-light leading-relaxed text-gray-500 text-justify">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 6. Water Testing Section */}
                                {/* 7.Water Testing Section */}
                <section className="relative h-[650px] flex items-start overflow-hidden pt-[180px]">
                    <div className="absolute inset-0 z-0">
                        <img
                            src={waterTestingImg}
                            alt="Analyse de l'eau en laboratoire"
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
                                <span className="font-bold">Votre eau sous la loupe.</span>
                            </h2>
                            <p className="text-lg font-light leading-relaxed text-white/95 mb-8 max-w-xl text-justify">
                            Ne devinez pas la qualité de votre eau. Nos analyses approfondies identifient les bactéries, les minéraux et les contaminants chimiques pour vous offrir une tranquillité d'esprit totale.                            </p>
                            <div className="flex gap-4">
                                <Button
                                    size="lg"
                                    className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 h-14"
                                    style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                                    asChild
                                >
                                    <a href="/tests-eau">Demander une analyse d'eau</a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 7. Testimonials Section */}
                <TestimonialsSection />

                {/* 8. Comparison Table */}
                <section className="py-24 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="text-left mb-16">
                            <h2
                                className="text-slate-900 tracking-tighter mb-8 text-left"
                                style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                            >
                                <span className="text-[32px] md:text-[60px] font-light leading-[1.1] md:leading-[60px] block">Comparez nos solutions</span>
                                <span className="text-[32px] md:text-[60px] font-normal leading-[1.1] md:leading-[60px] block">de filtration d'eau de qualité.</span>
                            </h2>
                            <div className="w-24 h-1 bg-blue-600"></div>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full min-w-[1000px] border-collapse bg-white rounded-2xl overflow-hidden shadow-sm">
                                <thead>
                                    <tr className="bg-gray-100">
                                        <th className="p-8 text-left text-gray-400 font-light uppercase tracking-wider">Solutions</th>
                                        {[
                                            { name: "Filtres spécialisés", img: specializedFiltersImg },
                                            { name: "Stations d'eau potable", img: drinkingWaterImg },
                                            { name: "Systèmes de filtration sous l'évier", img: undersinkSystemImg }
                                        ].map((m, i) => (
                                            <th key={i} className="p-4 text-center text-gray-900 font-bold text-sm">
                                                <div className="flex flex-col items-center gap-2">
                                                    <img
                                                        src={m.img}
                                                        alt={m.name}
                                                        className="w-[150px] h-[120px] object-contain mx-auto mix-blend-multiply"
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

                {/* 9. FAQ Section */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-4">
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
                                        q: "Comment fonctionne l'osmose inverse ?",
                                        a: "L'osmose inverse pousse l'eau à travers une membrane semi-perméable microscopique pour éliminer les impuretés dissoutes, le chlore et les minéraux lourds, produisant une eau d'une pureté exceptionnelle.",
                                    },
                                    {
                                        q: "Quelle est la différence entre un adoucisseur et un filtre ?",
                                        a: "Un adoucisseur élimine spécifiquement le calcaire (calcium et magnésium), tandis qu'un système de filtration élimine les contaminants, le chlore, les odeurs et les sédiments pour améliorer la qualité de l'eau.",
                                    },
                                    {
                                        q: "À quelle fréquence faut-il changer les filtres sous l'évier ?",
                                        a: "Pour un système sous-évier, les cartouches classiques se changent généralement tous les 6 à 12 mois. La membrane d'osmose inverse peut durer 2 à 3 ans selon la qualité de votre eau d'entrée.",
                                    },
                                    {
                                        q: "Les filtres sous-évier éliminent-ils les bactéries ?",
                                        a: "Les systèmes d'osmose inverse et certains filtres spécialisés à ultrafiltration sont extrêmement efficaces contre les particules microscopiques, mais pour une protection bactériologique totale, nous recommandons un système UV en complément.",
                                    },
                                    {
                                        q: "Est-ce que l'installation d'un filtre sous-évier réduit la pression d'eau ?",
                                        a: "Nos systèmes modernes sont conçus pour minimiser l'impact sur la pression. Les systèmes d'osmose inverse utilisent souvent un réservoir de stockage pour garantir un débit constant à votre robinet dédié.",
                                    },
                                    {
                                        q: "Pourquoi choisir un filtre spécialisé pour le fer ou le soufre ?",
                                        a: "Les filtres standards ne peuvent pas traiter les fortes concentrations de fer (taches jaunes/rouges) ou de soufre (odeur d'œufs pourris). Nos filtres spécialisés utilisent des médias spécifiques pour neutraliser ces problèmes à la source.",
                                    },
                                    {
                                        q: "Peut-on brancher un filtre sous-évier sur le frigo ?",
                                        a: "Absolument. Il est très courant de raccorder la sortie de votre système de filtration à votre distributeur d'eau de frigo et à votre machine à glaçons pour une glace cristalline.",
                                    },
                                    {
                                        q: "Quelle place prend un système de filtration sous l'évier ?",
                                        a: "Nos systèmes compacts occupent généralement moins de 25% de l'espace sous l'évier, laissant amplement de place pour vos articles ménagers habituels.",
                                    },
                                    {
                                        q: "L'eau filtrée est-elle meilleure pour cuisiner ?",
                                        a: "Oui, l'élimination du chlore et des impuretés rehausse considérablement les saveurs naturelles de vos aliments, du café et du thé, tout en évitant les dépôts de calcaire dans vos cafetières et bouilloires.",
                                    },
                                    {
                                        q: "Est-ce que le système de filtration fait du bruit ?",
                                        a: "Non, les systèmes de filtration sont totalement silencieux. Seule la régénération de certains filtres centraux peut faire un léger bruit de circulation d'eau, généralement programmé la nuit.",
                                    },
                                    {
                                        q: "Les filtres éliminent-ils le plomb et les métaux lourds ?",
                                        a: "Oui, nos systèmes d'osmose inverse et nos cartouches spécialisées sont certifiés pour réduire drastiquement le plomb, le cuivre et les autres métaux lourds souvent présents dans les vieilles tuyauteries.",
                                    },
                                    {
                                        q: "Comment savoir quel filtre spécialisé choisir ?",
                                        a: "La meilleure façon est de procéder à une analyse d'eau. Selon que vous ayez du fer, du manganèse, des tanins ou du chlore, nos experts vous recommanderont le média filtrant approprié.",
                                    },
                                    {
                                        q: "Quelle est la garantie sur les systèmes de filtration Bricareau ?",
                                        a: "Nous offrons des garanties complètes allant jusqu'à 10 ans sur la structure des réservoirs et des garanties solides sur les composants de contrôle et les robinetteries.",
                                    },
                                    {
                                        q: "Un filtre sous-évier nécessite-t-il de l'électricité ?",
                                        a: "La plupart des systèmes de filtration standard et d'osmose inverse fonctionnent uniquement avec la pression de l'eau. Seuls certains modèles haute performance avec pompe de surpression nécessitent une prise électrique.",
                                    },
                                    {
                                        q: "Est-ce que je peux installer le système moi-même ?",
                                        a: "Bien que cela soit possible pour les bricoleurs, nous recommandons une installation par nos techniciens certifiés pour garantir l'étanchéité parfaite et la validation de votre garantie Bricareau.",
                                    }
                                ].map((item, idx) => (
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
                        </div>
                    </div>
                </section>

                {/* 10. Ressources Section */}
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
                                    className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full cursor-pointer"
                                    onClick={() => window.location.href = "#"}
                                >
                                    <div className="h-56 overflow-hidden">
                                        <img
                                            src={art.img}
                                            alt={art.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                    </div>
                                    <div className="p-8 text-left border-t-2 border-transparent group-hover:border-blue-600 transition-colors flex flex-col flex-grow">
                                        <h4 className="text-xl font-bold mb-4 group-hover:text-blue-600 transition-colors uppercase tracking-tight">{art.title}</h4>
                                        <div className="mt-auto">
                                            <NavLink
                                                to="#"
                                                className="text-blue-600 font-bold flex items-center gap-2 group-hover:underline text-xs tracking-widest uppercase"
                                            >
                                                EN SAVOIR PLUS <ChevronRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 11. Consultation Form Section (Adopted from Adoucissement.tsx) */}
                <ConsultationFormSection id="consultation" />
            </main>
            <Footer />
        </div>
    );
};

export default Filtration;
