import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TestimonialsSection from "@/components/TestimonialsSection";
import { Button } from "@/components/ui/button";
import heroFilter from "@/assets/12605.jpg";
import {
    Droplets,
    ChevronRight,
    CheckCircle2,
    Shield,
    Zap,
    TrendingDown,
    Play,
    X,
    Phone
} from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { useNavigate } from "react-router-dom";
import waterTestBg from "@/assets/Enercare_JP_Day_2_Kitchen_Faucet_498-2048x1365.jpg";
import bathroomImg from "@/assets/contemporary-bathroom-elements.jpg";
import specializedFiltersImg from "@/assets/Filtres d'eau spécialisés.webp";
import watersofterImg from "@/assets/Adoucisseurs d'eau.webp";
import drinkingwatersofterImg from "@/assets/Solutions d'eau potable.webp";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

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

const comparisonData = [
    { feature: "Technologie High Efficiency", high: true, selectPlus: true, connect: true, select: false, medallist: false },
    { feature: "Contrôle à distance (App)", high: true, selectPlus: false, connect: true, select: false, medallist: false },
    { feature: "Protection du chlore intégrée", high: "Option", selectPlus: false, connect: false, select: false, medallist: false },
    { feature: "Alertes de sel faible", high: true, selectPlus: true, connect: true, select: true, medallist: false },
    { feature: "Diagnostic à distance", high: true, selectPlus: false, connect: true, select: false, medallist: false },
];

const FiltresTouteMaison = () => {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen bg-white text-slate-900 font-sans">
            <Header />

            <main>
                {/* Hero Section */}
                <section className="relative h-[800px] flex items-start overflow-hidden pt-[220px]">
                    <div className="absolute inset-0 z-0">
                        <img
                            src={heroFilter}
                            alt="Personne tenant un verre d'eau fraîche"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40 lg:bg-gradient-to-r lg:from-black/60 lg:to-transparent" />
                    </div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-2xl text-white">
                            <span className="text-sm font-bold uppercase tracking-widest text-[#60A5FA] mb-4 block">
                                SOLUTIONS DE FILTRATION d'eau pour toute la maison
                            </span>
                            <h1
                                className="text-[40px] md:text-[60px] leading-[1.1] md:leading-[60px] font-light mb-8 tracking-tighter text-white"
                                style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                            >
                                Une eau d'exception, <span className="font-normal">dans chaque robinet</span>
                            </h1>
                            <p className="font-light text-[20px] leading-[28px] text-white/95 mb-8 max-w-xl text-justify">
                                Offrez à votre famille la protection ultime avec nos systèmes de filtration haute performance pour toute la maison. De la cuisine à la salle de bain, profitez d'une eau cristalline, débarrassée des sédiments et du chlore, pour une santé préservée et des installations durablement protégées.                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button
                                    size="lg"
                                    className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 h-14 transition-all duration-300 hover:scale-105 shadow-lg"
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
                                    <p className="text-blue-100 leading-relaxed">{item.desc}</p>
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
                            <div className="w-24 h-1 bg-blue-600"></div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {products.map((p, i) => (
                                <div
                                    key={i}
                                    className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full cursor-pointer"
                                    onClick={() => navigate("/contact")}
                                >
                                    <div className="bg-slate-50 aspect-square overflow-hidden flex items-center justify-center p-12">
                                        <img
                                            src={p.image}
                                            alt={p.name}
                                            className="w-full h-full object-contain mix-blend-multiply transition-transform duration-700 group-hover:scale-110 drop-shadow-xl"
                                        />
                                    </div>
                                    <div className="p-8 text-left border-t-2 border-transparent group-hover:border-blue-600 transition-colors flex flex-col flex-grow">
                                        <h3 className="text-xl font-bold mb-4 group-hover:text-blue-600 transition-colors tracking-tight">{p.name}</h3>
                                        <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">{p.desc}</p>
                                        <div className="mt-auto">
                                            <div className="text-blue-600 font-bold flex items-center gap-2 group-hover:underline text-xs tracking-widest uppercase">
                                                EN SAVOIR PLUS <ChevronRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                                            </div>
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
                                        <th className="p-8 text-left text-gray-400 font-medium uppercase tracking-wider">Modèles</th>
                                        {["High Tech", "Select Plus", "Connect", "Select", "Medallist"].map(m => (
                                            <th key={m} className="p-8 text-center text-gray-900 font-bold text-xl">{m}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {comparisonData.map((row, i) => (
                                        <tr key={i} className="hover:bg-gray-50 transition-colors">
                                            <td className="p-8 font-medium text-gray-700">{row.feature}</td>
                                            <td className="p-8 text-center">
                                                {typeof row.high === 'string' ? row.high : (row.high ? <CheckCircle2 className="h-6 w-6 text-blue-600 mx-auto" /> : <X className="h-6 w-6 text-gray-300 mx-auto" />)}
                                            </td>
                                            <td className="p-8 text-center">
                                                {row.selectPlus ? <CheckCircle2 className="h-6 w-6 text-blue-600 mx-auto" /> : <X className="h-6 w-6 text-gray-300 mx-auto" />}
                                            </td>
                                            <td className="p-8 text-center">
                                                {row.connect ? <CheckCircle2 className="h-6 w-6 text-blue-600 mx-auto" /> : <X className="h-6 w-6 text-gray-300 mx-auto" />}
                                            </td>
                                            <td className="p-8 text-center">
                                                {row.select ? <CheckCircle2 className="h-6 w-6 text-blue-600 mx-auto" /> : <X className="h-6 w-6 text-gray-300 mx-auto" />}
                                            </td>
                                            <td className="p-8 text-center">
                                                {row.medallist ? <CheckCircle2 className="h-6 w-6 text-blue-600 mx-auto" /> : <X className="h-6 w-6 text-gray-300 mx-auto" />}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* 7. Water Test Section */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col lg:flex-row items-stretch gap-0 rounded-[3rem] overflow-hidden shadow-2xl">
                            <div className="lg:w-1/2 relative min-h-[400px] overflow-hidden">
                                <img
                                    src={bathroomImg}
                                    alt="Éléments de salle de bain contemporaine"
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-blue-900/10 pointer-events-none" />
                            </div>
                            <div className="lg:w-1/2 bg-blue-600 text-white p-12 lg:p-20 flex flex-col justify-center items-start text-left">
                                <span className="text-white/80 text-xs font-black uppercase tracking-[0.3em] mb-8 block">
                                    Qualité de l'eau
                                </span>
                                <h2 className="text-[32px] md:text-[48px] font-normal text-white mb-8 leading-[1.2] md:leading-[48px] tracking-tighter">
                                    L'excellence commence par une eau parfaite.
                                </h2>
                                <p className="font-light text-[20px] leading-[28px] text-white/90 mb-12">
                                    Le luxe, c'est de ne pas avoir à se soucier de la qualité de ce que l'on consomme. Offrez-vous la sérénité d'une eau analysée par des experts, pour une maison où tout brille, sans effort et sans compromis.
                                </p>
                                <Button
                                    size="lg"
                                    className="bg-white text-blue-600 hover:bg-blue-50 rounded-full px-8 h-14 transition-all duration-300 hover:scale-105 shadow-lg"
                                    style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                                    asChild
                                >
                                    <NavLink to="/tests-eau">Demander une analyse d'eau</NavLink>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Testimonials Grid Section */}
                <TestimonialsSection />

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
                {/* Video / Video Section Thumbnail */}
                <section className="py-24 bg-gray-50">
                    <div className="container mx-auto px-4 text-center">
                        <div className="text-left mb-16">
                            <h2
                                className="text-slate-900 tracking-tighter mb-8 text-left"
                                style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                            >
                                <span className="text-[40px] md:text-[60px] font-light leading-[1.1] md:leading-[60px] block">Le filtre d'eau </span>
                                <span className="text-[40px] md:text-[60px] font-normal leading-[1.1] md:leading-[60px] block">que vous devez avoir</span>
                            </h2>
                            <div className="w-24 h-1 bg-blue-600"></div>
                        </div>
                        <div className="max-w-4xl mx-auto relative rounded-[40px] overflow-hidden group cursor-pointer shadow-2xl">
                            <img src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1600&auto=format&fit=crop" alt="Video Placeholder" className="w-full aspect-video object-cover transition-transform group-hover:scale-105 duration-700" />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                                <div className="w-24 h-24 rounded-full bg-blue-600/90 text-white flex items-center justify-center transition-transform group-hover:scale-110">
                                    <Play className="h-10 w-10 fill-white" />
                                </div>
                            </div>
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
                                {faqItems.map((item, idx) => (
                                    <AccordionItem key={idx} value={`item-${idx}`} className="border-b-gray-200">
                                        <AccordionTrigger className="text-left font-medium text-lg hover:no-underline py-6">
                                            {item.q}
                                        </AccordionTrigger>
                                        <AccordionContent className="text-gray-600 text-lg leading-relaxed pb-6 text-left">
                                            {item.a}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
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

                {/* Consultation Form Section */}
                <section id="consultation" className="py-24 bg-white border-t border-gray-100">
                    <div className="container mx-auto px-4">
                        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-20">
                            <div className="lg:w-1/3 text-left">
                                <h2
                                    className="text-slate-900 tracking-tighter mb-8 italic text-left"
                                    style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                                >
                                    <span className="text-[32px] md:text-[60px] font-light leading-[1.1] md:leading-[60px] block">Planifiez une</span>
                                    <span className="text-[32px] md:text-[60px] font-normal leading-[1.1] md:leading-[60px] block">consultation gratuite</span>
                                </h2>
                                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                    Remplissez le formulaire ci-dessous pour organiser une consultation téléphonique avec l'un de nos experts.
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

export default FiltresTouteMaison;
