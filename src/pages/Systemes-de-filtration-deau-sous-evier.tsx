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
    GlassWater,
    CircleDollarSign,
    Trash2,
    Wrench,
    ShieldCheck,
    Droplets,
    Zap
} from "lucide-react";
import { NavLink } from "@/components/NavLink";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import ConsultationFormSection from "@/components/ConsultationFormSection";
import TestimonialsSection from "@/components/TestimonialsSection";

import heroDrink from "@/assets/boire-eau-robinet.jpg";
import eliteROImg from "@/assets/Triple Stage Filter.jpg";
import plusROImg from "@/assets/Double Stage Filter.jpg";
import essentialImg from "@/assets/Single Stage Filter.jpg";
import sereneLiteImg from "@/assets/Système+de+filtration+Serene+Lite.webp";
import waterTestBg from "@/assets/water-taste.jpg";

const FiltrationSousEvier = () => {
    const comparisonData = [
        { feature: "Filtration en 5 étapes", elite: true, plus: true, essential: true },
        { feature: "Élimination des métaux lourds", elite: true, plus: true, essential: true },
        { feature: "Membrane d'osmose inverse", elite: true, plus: true, essential: true },
        { feature: "Reminéralisation alcaline", elite: true, plus: "Option", essential: false },
        { feature: "Débit rapide (75 GPD)", elite: true, plus: true, essential: false },
        { feature: "Compact (Sans réservoir)", elite: false, plus: false, essential: false },
        { feature: "Garantie prolongée", elite: true, plus: true, essential: true },
    ];

    return (
        <div className="min-h-screen bg-background text-slate-900 font-sans">
            <Header />
            <main>
                {/* Hero Section - UNCHANGED */}
                <section className="relative h-[800px] flex items-start overflow-hidden pt-[220px]">
                    <div className="absolute inset-0 z-0">
                        <img
                            src={heroDrink}
                            alt="Femme buvant de l'eau pure"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/20 lg:bg-gradient-to-r lg:from-black/60 lg:to-transparent" />
                    </div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-2xl text-white">
                            <span className="text-sm font-bold uppercase tracking-widest text-[#60A5FA] mb-4 block">
                                PURETÉ INÉGALÉE
                            </span>
                            <h1
                                className="text-[40px] md:text-[60px] leading-[1.1] md:leading-[60px] font-light mb-8 tracking-tighter text-white"
                                style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                            >
                                Buvez en toute confiance, <span className="font-normal">sans jamais porter une seule bouteille.</span>
                            </h1>
                            <p className="font-light text-[20px] leading-[28px] text-white/90 mb-8 max-w-xl">
                                Profitez d'une eau pure et délicieuse directement de votre robinet.
                                Nos systèmes éliminent 99% des contaminants pour une tranquillité d'esprit totale.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button
                                    size="lg"
                                    className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 h-14"
                                    style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                                    asChild
                                >
                                    <NavLink to="/contact">
                                        Explorez nos systèmes de filtration
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

                {/* 2. Pourquoi choisir - Blue Section (Merged with Avantages) */}
                <section className="py-24 bg-blue-600 text-white">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-[32px] md:text-[48px] font-normal text-white mb-8 leading-[1.2] md:leading-[48px] tracking-tighter">
                                Pourquoi installer l'un de nos systèmes <br />de filtration d'eau sous l'évier de votre cuisine?
                            </h2>
                            <p className="text-blue-100 max-w-2xl mx-auto text-lg leading-relaxed">
                                Profitez d'une eau d'une pureté exceptionnelle pour votre boisson et votre cuisine tout en simplifiant votre quotidien.
                            </p>
                        </div>
                        <div className="flex flex-wrap justify-center gap-x-12 gap-y-16 text-center">
                            {[
                                { icon: ShieldCheck, title: "Goût Incomparable", desc: "Sublimez vos saveurs. Idéal pour un café riche en arômes et des légumes qui gardent leurs nutriments sans le goût du chlore." },
                                { icon: Droplets, title: "Éco-Responsable", desc: "Dites adieu au plastique. Une seule cartouche remplace des milliers de bouteilles à usage unique. Un geste fort pour la planète." },
                                { icon: Zap, title: "Discrétion Totale", desc: "Compact et invisible. S'installe discrètement sous votre comptoir sans encombrer votre espace de travail." },
                                { icon: GlassWater, title: "Eau pure 24/7", desc: "Plus besoin de bouteilles. Accès instantané à une eau de qualité restaurant directement à votre robinet." },
                                { icon: CircleDollarSign, title: "Économies", desc: "Réduisez vos dépenses annuelles en éliminant définitivement l'achat d'eau embouteillée." },
                                { icon: Trash2, title: "Zéro déchet", desc: "Protégez l'environnement en limitant drastiquement la production de déchets plastiques dans votre foyer." },
                                { icon: Wrench, title: "Entretien Suivi", desc: "Tranquillité d'esprit totale. Notre équipe assure le suivi et le remplacement périodique de vos filtres." }
                            ].map((item, i) => (
                                <div key={i} className="flex flex-col items-center group w-full sm:w-[calc(50%-3rem)] lg:w-[calc(25%-3rem)]">
                                    <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center mb-8 transition-all group-hover:scale-110 group-hover:bg-white/10">
                                        <item.icon className="h-10 w-10 text-blue-600 group-hover:text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4 tracking-tight">{item.title}</h3>
                                    <p className="text-blue-100 leading-relaxed font-light">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 3. Systèmes d'osmose inverse - Product Grid */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="text-left mb-16">
                            <h2
                                className="text-slate-900 tracking-tighter mb-8 text-left"
                                style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                            >
                                <span className="text-[32px] md:text-[60px] font-light leading-[1.1] md:leading-[60px] block">Nos systèmes de filtration</span>
                                <span className="text-[32px] md:text-[60px] font-normal leading-[1.1] md:leading-[60px] block">d'eau sous évier</span>
                            </h2>
                            <div className="w-24 h-1 bg-blue-600"></div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {[
                                { name: "Bricareau Essential", desc: "La pureté accessible sans compromis sur la qualité.", img: essentialImg },
                                { name: "Bricareau Plus RO", desc: "Performance exceptionnelle pour les familles actives.", img: plusROImg },
                                { name: "Bricareau Elite RO", desc: "Le summum de la filtration avec reminéralisation alcaline incluse.", path: "/ro-6", img: eliteROImg },

                            ].map((product, i) => (
                                <div
                                    key={i}
                                    className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full cursor-pointer"
                                    onClick={() => window.location.href = product.path || "/contact"}
                                >
                                    <div className="bg-slate-50 aspect-square overflow-hidden flex items-center justify-center p-12">
                                        <img
                                            src={product.img}
                                            alt={product.name}
                                            className="w-full h-full object-contain mix-blend-multiply transition-transform duration-700 group-hover:scale-110 drop-shadow-xl"
                                        />
                                    </div>
                                    <div className="p-8 text-left border-t-2 border-transparent group-hover:border-blue-600 transition-colors flex flex-col flex-grow">
                                        <h3 className="text-xl font-bold mb-4 group-hover:text-blue-600 transition-colors uppercase tracking-tight">{product.name}</h3>
                                        <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">{product.desc}</p>
                                        <div className="mt-auto">
                                            <NavLink
                                                to={product.path || "/contact"}
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

                {/* 5. Expertise Section (Blue Box Design) */}
                <section className="py-24 bg-slate-50">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col lg:flex-row items-stretch gap-0 rounded-[3rem] overflow-hidden shadow-2xl">
                            <div className="lg:w-1/2 relative min-h-[400px]">
                                <img src={waterTestBg} alt="Analyse d'eau" className="absolute inset-0 w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-blue-900/10" />
                            </div>
                            <div className="lg:w-1/2 bg-blue-600 text-white p-12 lg:p-20 flex flex-col justify-center items-start text-left">
                                <span className="text-white/80 text-xs font-black uppercase tracking-[0.3em] mb-8 block">
                                    ANALYSE ET CONSEIL
                                </span>
                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-8 leading-[1.1] tracking-tighter">
                                    Ne devinez pas, <br /> testez votre eau.
                                </h2>
                                <p className="text-white/90 text-lg font-medium mb-12 leading-relaxed">
                                    Chaque foyer est différent. Nos experts effectuent une analyse gratuite sur place pour identifier les contaminants spécifiques à votre résidence et vous recommander la solution optimale.
                                </p>
                                <Button className="bg-white text-blue-600 hover:bg-blue-50 rounded-full px-12 h-16 text-xl font-bold shadow-xl" asChild>
                                    <a href="#consultation">Prendre rendez-vous</a>
                                </Button>
                            </div>
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
                                        <th className="p-8 text-left text-gray-400 font-medium uppercase tracking-wider">Solutions</th>
                                        {[
                                            { name: "Essential", img: essentialImg },
                                            { name: "Plus RO", img: plusROImg },
                                            { name: "Elite RO", img: eliteROImg },

                                        ].map((m, i) => (
                                            <th key={i} className="p-4 text-center text-gray-900 font-bold text-sm">
                                                <div className="flex flex-col items-center gap-2">
                                                    <img
                                                        src={m.img}
                                                        alt={m.name}
                                                        className="w-[120px] h-[100px] object-contain mx-auto mix-blend-multiply"
                                                    />
                                                    <span className="max-w-[100px] inline-block uppercase tracking-wider text-[10px]">{m.name}</span>
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
                                                {typeof row.elite === 'string' ? <span className="text-blue-600 font-bold bg-blue-50 px-3 py-1 rounded-full text-[10px]">{row.elite}</span> : (row.elite ? <CheckCircle2 className="h-6 w-6 text-blue-600 mx-auto" /> : <X className="h-6 w-6 text-gray-300 mx-auto" />)}
                                            </td>
                                            <td className="p-8 text-center">
                                                {typeof row.plus === 'string' ? <span className="text-blue-600 font-bold bg-blue-50 px-3 py-1 rounded-full text-[10px]">{row.plus}</span> : (row.plus ? <CheckCircle2 className="h-6 w-6 text-blue-600 mx-auto" /> : <X className="h-6 w-6 text-gray-300 mx-auto" />)}
                                            </td>
                                            <td className="p-8 text-center">
                                                {row.essential ? <CheckCircle2 className="h-6 w-6 text-blue-600 mx-auto" /> : <X className="h-6 w-6 text-gray-300 mx-auto" />}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* 7. Testimonials Section */}
                <TestimonialsSection />

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
                                    {
                                        q: "L'installation nécessite-t-elle de percer mon comptoir ?",
                                        a: "Nous installons généralement un robinet dédié élégant. Si vous avez déjà un trou pour un distributeur de savon, nous pouvons l'utiliser. Sinon, nos techniciens effectuent un perçage précis et propre.",
                                    },
                                    {
                                        q: "Est-ce que l'eau osmosée est trop acide ?",
                                        a: "L'osmose peut légèrement abaisser le pH. C'est pourquoi nos modèles Elite et Plus incluent une cartouche de reminéralisation qui rééquilibre le pH et redonne à l'eau un goût frais et naturel.",
                                    },
                                    {
                                        q: "Le système de filtration est-il bruyant ?",
                                        a: "Non, les systèmes de filtration sous évier sont presque totalement silencieux. Vous pourriez entendre un léger murmure d'eau uniquement pendant le cycle de remplissage du réservoir.",
                                    },
                                    {
                                        q: "L'osmose inverse 'gaspille'-t-elle de l'eau ?",
                                        a: "Les systèmes modernes sont très efficaces. L'eau utilisée pour rincer la membrane est nécessaire pour maintenir la pureté. Ce coût est dérisoire comparé à l'achat d'eau en bouteille.",
                                    },
                                    {
                                        q: "L'entretien est-il compliqué à faire soi-même ?",
                                        a: "Bien que certains clients le fassent, Bricareau offre un service de maintenance professionnelle pour garantir l'étanchéité, la désinfection du système et une performance constante année après année.",
                                    },
                                    {
                                        q: "Est-ce efficace contre les PFAS et les résidus de médicaments ?",
                                        a: "Oui, la technologie d'osmose inverse combinée au charbon actif est l'une des méthodes les plus reconnues pour réduire les PFAS ('produits chimiques éternels') et les contaminants émergents.",
                                    },
                                    {
                                        q: "Le système fonctionne-t-il sans électricité ?",
                                        a: "La majorité de nos systèmes fonctionnent uniquement avec la pression d'eau de votre résidence. Seuls certains modèles haute capacité nécessitent une petite pompe de surpression électrique.",
                                    },
                                    {
                                        q: "Quelle est la garantie offerte par Bricareau ?",
                                        a: "Nous offrons une protection complète incluant 10 ans sur les composantes structurelles et un support technique prioritaire pour tous nos clients installés.",
                                    },
                                    {
                                        q: "Pourquoi choisir Bricareau plutôt qu'un pichet filtrant ?",
                                        a: "Contrairement aux pichets qui ont une capacité limitée et une filtration superficielle, nos systèmes offrent un débit constant et une filtration de niveau industriel beaucoup plus profonde et durable.",
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
                    </div>
                </section>

                {/* 9. Resources Section */}
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
                                    title: "Eau municipale vs Osmose inverse",
                                    img: "https://images.unsplash.com/photo-1542013936693-884638332954?q=80&w=800&auto=format&fit=crop",
                                },
                                {
                                    title: "Le guide complet de l'eau alcaline",
                                    img: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=800&auto=format&fit=crop",
                                },
                                {
                                    title: "Maintenance préventive de votre osmoseur",
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

                {/* 10. Consultation Form Section */}
                <ConsultationFormSection id="consultation" />
            </main>
            <Footer />
        </div>
    );
};

export default FiltrationSousEvier;
