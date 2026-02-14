import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TestimonialsSection from "@/components/TestimonialsSection";
import { Button } from "@/components/ui/button";
import heroBath from "@/assets/kid-playing-bathtub.jpg";
import {
    ArrowRight,
    Droplets,
    Star,
    ChevronRight,
    CheckCircle2,
    Clock,
    Sparkles,
    Shield,
    Zap,
    Shirt,
    TrendingDown,
    Quote,
    ChevronLeft,
    Play,
    Check,
    X,
    ShieldCheck,
    Medal,
    Trophy,
    Award,
    HandCoins
} from "lucide-react";
import { NavLink } from "@/components/NavLink";
import waterTestingImg from "@/assets/2147800429.jpg";
import residentialWaterSoftenerImg from "@/assets/residential-water-softener.png";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const products = [
    { name: "Bricareau High Efficiency", desc: "Notre système le plus avancé et économe.", path: "/filtre-eau-haute-efficacite", image: "https://bricareau.com/wp-content/uploads/2025/01/cl10em-00-sc_bt1833-removebg-preview-1.png" },
    { name: "Bricareau HE Connect", desc: "Contrôlez votre eau via votre smartphone.", path: "/filtre-eau-haute-efficacite", image: "https://bricareau.com/wp-content/uploads/2025/01/cl10em-00-sc_bt1833-removebg-preview-1.png" },
    { name: "Bricareau HE Municipal", desc: "Élimine le chlore et adoucit l'eau.", path: "/filtre-eau-haute-efficacite", image: "https://bricareau.com/wp-content/uploads/2025/01/cl10em-00-sc_bt1833-removebg-preview-1.png" },
];

const reviews = [
    { name: "Pierre L.", rating: 5, text: "Excellent service. L'installation a été rapide et les résultats sont au rendez-vous. Plus de calcaire !", date: "Il y a 2 mois" },
    { name: "Marie C.", rating: 5, text: "Enfin une douche qui ne m'irrite plus la peau. Très satisfaite de mon adoucisseur Bricareau.", date: "Il y a 3 mois" },
    { name: "Robert D.", rating: 4, text: "Bon produit, technicien très professionnel. Je recommande vivement.", date: "Il y a 1 mois" },
    { name: "Sophie T.", rating: 5, text: "Une eau de qualité partout dans la maison. Le service client de Bricareau est top.", date: "Il y a 2 semaines" },
];

const faqItems = [
    {
        q: "Pourquoi un adoucisseur est-il presque essentiel pour l'eau de puits ?",
        a: "L'eau souterraine est naturellement riche en minéraux comme le calcium et le magnésium. Sans adoucisseur, cette dureté élevée provoque une accumulation rapide de calcaire qui endommage vos tuyaux, votre chauffe-eau et vos appareils ménagers."
    },
    {
        q: "L'adoucisseur peut-il éliminer le fer présent dans mon eau de puits ?",
        a: "Oui, nos adoucisseurs spécialisés peuvent éliminer de petites quantités de fer dissous (fer clair). Cependant, pour des concentrations élevées ou du fer oxydé, nous recommandons un filtre à fer dédié en amont pour protéger le système."
    },
    {
        q: "Quelle est la différence entre un adoucisseur municipal et un modèle pour puits ?",
        a: "Les modèles pour puits sont conçus pour gérer des niveaux de dureté beaucoup plus variables et souvent plus élevés, ainsi que la présence fréquente de fer et de manganèse, ce que les modèles municipaux (orientés chlore) ne traitent pas."
    },
    {
        q: "Comment l'adoucisseur gère-t-il les sédiments ou le sable du puits ?",
        a: "L'adoucisseur n'est pas un filtre à sédiments. Pour l'eau de puits, il est impératif d'installer un pré-filtre à sédiments (5 à 20 microns) avant l'adoucisseur pour éviter que les particules n'obstruent la vanne de contrôle et les résines."
    },
    {
        q: "Est-ce que l'adoucisseur rend l'eau de mon puits potable ?",
        a: "Non, l'adoucisseur améliore la qualité esthétique et physico-chimique de l'eau (calcaire, fer). Pour la potabilité microbiologique (bactéries), vous devez impérativement installer un système de désinfection UV."
    },
    {
        q: "À quelle fréquence faut-il vérifier le sel pour une eau de puits ?",
        a: "Étant donné que l'eau de puits est souvent plus dure, la consommation de sel peut être plus élevée. Nous recommandons de vérifier le bac à sel une fois par mois et de le maintenir au moins au tiers de sa capacité."
    },
    {
        q: "Quel type de sel est recommandé pour les propriétaires de puits ?",
        a: "Nous recommandons fortement l'utilisation de pastilles de sel de haute pureté avec additif 'anti-fer' (Iron Fighter). Cela aide à nettoyer les résines et prévient l'encrassement dû au fer ferreux."
    },
    {
        q: "Un adoucisseur peut-il éliminer l'odeur d'œufs pourris ?",
        a: "Non. Cette odeur est causée par le gaz sulfure d'hydrogène. Bien que l'adoucisseur puisse capter une infime partie du soufre, un filtre à charbon ou un système d'oxydation à l'air est nécessaire pour éliminer totalement cette odeur."
    },
    {
        q: "L'eau de puits réduit-elle la durée de vie de l'adoucisseur ?",
        a: "Si l'eau est très chargée en fer ou en sédiments sans prétraitement, les résines peuvent s'épuiser plus vite. Avec un entretien annuel et une configuration adéquate par nos experts, nos systèmes durent de 15 à 20 ans."
    },
    {
        q: "Pourquoi mon eau de puits est-elle encore jaunâtre après l'adoucisseur ?",
        a: "Si la dureté est éliminée mais que l'eau reste jaune, il s'agit probablement de tanins (matières organiques). Un adoucisseur standard ne traite pas les tanins; un système d'échange d'anions spécifique est requis."
    },
    {
        q: "Est-ce que l'adoucisseur peut être installé dans un puits ou à l'extérieur ?",
        a: "Non, l'unité de contrôle électronique et le bac à sel doivent être protégés du gel et des intempéries. L'installation idéale se fait dans un sous-sol, un garage chauffé ou un placard technique isolé."
    },
    {
        q: "Combien d'eau utilise la régénération d'un adoucisseur Bricareau ?",
        a: "Nos modèles High Efficiency calculent la consommation exacte et utilisent entre 30 et 60 gallons par cycle de régénération, soit moins que ce qu'une personne consomme par jour, optimisant ainsi votre puits."
    },
    {
        q: "Le rejet de sel est-il dangereux pour ma fosse septique ?",
        a: "Les études démontrent que le rejet de saumure d'un adoucisseur moderne n'endommage pas les fosses septiques. Au contraire, le calcium rejeté peut parfois aider à maintenir la porosité du champ d'épuration."
    },
    {
        q: "Faut-il ajuster la pression de ma pompe de puits pour l'adoucisseur ?",
        a: "Nos systèmes fonctionnent avec la pression standard des réservoirs de puits (souvent 30-50 psi ou 40-60 psi). Aucun ajustement majeur n'est requis tant que votre pompe fournit un débit constant."
    },
    {
        q: "Quelle garantie Bricareau offre-t-elle pour les applications d'eau de puits ?",
        a: "Nous offrons la même garantie premium : 10 ans sur la bouteille de résine et la tête de contrôle, ce qui témoigne de la confiance que nous avons dans la robustesse de nos équipements face aux eaux difficiles."
    }
];

const comparisonData = [
    { feature: "Technologie High Efficiency", high: true, selectPlus: true, connect: true, select: false, medallist: false },
    { feature: "Contrôle à distance (App)", high: true, selectPlus: false, connect: true, select: false, medallist: false },
    { feature: "Protection du chlore intégrée", high: "Option", selectPlus: false, connect: false, select: false, medallist: false },
    { feature: "Alertes de sel faible", high: true, selectPlus: true, connect: true, select: true, medallist: false },
    { feature: "Diagnostic à distance", high: true, selectPlus: false, connect: true, select: false, medallist: false },
];

const AdoucisseursEauDePuits = () => {
    return (
        <div className="min-h-screen bg-white">
            <Header />

            <main>
                {/* 1.Hero Section */}
                <section className="relative h-[800px] flex items-start overflow-hidden pt-[220px]">
                    <div className="absolute inset-0 z-0">
                        <img
                            src={heroBath}
                            alt="Homme prenant un bain d'eau douce"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/30 lg:bg-gradient-to-r lg:from-black/50 lg:to-transparent" />
                    </div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-2xl text-white">
                            <h1
                                className="text-[40px] md:text-[60px] leading-[1.1] md:leading-[60px] font-light mb-8 tracking-tighter text-white"
                                style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                            >
                                Un bien-être sans égal <span className="font-normal"><br />au quotidien</span>
                            </h1>
                            <p className="text-lg font-light leading-relaxed text-white/95 mb-8 max-w-xl text-justify">
                                Bricareau vous offre une eau douce, source de bien-être et de confort.
                            </p>
                            <div className="flex gap-4">
                                <Button
                                    size="lg"
                                    className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 h-14"
                                    style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                                    onClick={() => document.getElementById('nos-adoucisseurs')?.scrollIntoView({ behavior: 'smooth' })}
                                >
                                    <a href="#consultation">Planifier une consultation gratuite</a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. Why choose our water softeners */}
                <section className="py-24 bg-blue-600 text-white text-center">
                    <div className="container mx-auto px-6 text-center">
                        <div className="text-left mb-16">
                            <h2
                                className="text-white tracking-tighter mb-8 text-left"
                                style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                            >
                                <span className="text-[32px] md:text-[60px] font-light leading-[1.1] md:leading-[60px] block">Pourquoi choisir nos</span>
                                <span className="text-[32px] md:text-[60px] font-normal leading-[1.1] md:leading-[60px] block">adoucisseurs d'eau résidentiels ?</span>
                            </h2>
                            <div className="w-24 h-1 bg-white"></div>
                        </div>
                        <div className="flex flex-wrap justify-center gap-x-12 gap-y-16">
                            {[
                                { icon: Droplets, title: "Qualité supérieure", desc: "Une douceur incomparable pour votre peau et vos cheveux dès la première douche." },
                                { icon: Shield, title: "Protection totale", desc: "Prolongez la durée de vie de votre plomberie et de vos électroménagers coûteux." },
                                { icon: HandCoins, title: "Économies garanties", desc: "Réduisez vos factures d'énergie et vos dépenses en savons et détergents de 50%." },
                                { icon: Sparkles, title: "Vaisselle étincelante", desc: "Éliminez les taches de calcaire et le voile blanc sur vos verres et plats." },
                                { icon: Shirt, title: "Linge plus doux", desc: "Des vêtements qui restent éclatants et souples plus longtemps, sans adoucissants." },
                                { icon: Zap, title: "Efficacité HE", desc: "Une technologie haute efficacité qui consomme moins de sel et d'eau." },
                                { icon: Award, title: "Expertise Bricareau", desc: "Installation certifiée et service après-vente pour une tranquillité d'esprit totale." }
                            ].map((item, id) => (
                                <div key={id} className="flex flex-col items-center group w-full sm:w-[calc(50%-3rem)] lg:w-[calc(25%-3rem)]">
                                    <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center mb-8 transition-all group-hover:scale-110 group-hover:bg-white/10">
                                        <item.icon className="h-10 w-10 text-blue-600 group-hover:text-white" />
                                    </div>
                                    <h4 className="text-2xl font-bold mb-4 tracking-tight">{item.title}</h4>
                                    <p className="text-lg font-light leading-relaxed text-blue-100 text-justify">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 3.Product Grid Section */}
                <section id="nos-adoucisseurs" className="py-24 bg-gray-50">
                    <div className="container mx-auto px-6">
                        <div className="text-left mb-16">
                            <h2
                                className="text-[32px] md:text-[60px] font-light text-slate-900 mb-8 leading-[1.1] md:leading-[60px] tracking-tighter text-left"
                                style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                            >
                                Nos adoucisseurs d'eau <br /><span className="font-normal">résidentiels</span>
                            </h2>
                            <div className="w-24 h-1 bg-blue-600"></div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {products.map((p, i) => (
                                <div
                                    key={i}
                                    className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full cursor-pointer"
                                    onClick={() => window.location.href = p.path || "/adoucisseurs"}
                                >
                                    <div className="bg-slate-50 aspect-square overflow-hidden flex items-center justify-center p-12">
                                        <img
                                            src={p.image}
                                            alt={p.name}
                                            className="w-full h-full object-contain mix-blend-multiply transition-transform duration-700 group-hover:scale-110 drop-shadow-xl"
                                        />
                                    </div>
                                    <div className="p-8 text-left border-t-2 border-transparent group-hover:border-blue-600 transition-colors flex flex-col flex-grow">
                                        <h3 className="text-xl font-bold mb-4 group-hover:text-blue-600 transition-colors uppercase tracking-tight">{p.name}</h3>
                                        <p className="text-lg font-light leading-relaxed text-slate-500 mb-6 flex-grow text-justify">{p.desc}</p>
                                        <div className="mt-auto">
                                            <NavLink
                                                to={p.path || "/adoucisseurs"}
                                                className="text-blue-600 font-bold flex items-center gap-2 group-hover:underline text-xs tracking-widest uppercase"
                                            >
                                                EN SAVOIR PLUS <ChevronRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-16 text-center">
                            <p className="text-lg font-light leading-relaxed text-gray-600 mb-8 max-w-2xl mx-auto text-justify">
                                Vous ne savez pas quel système choisir ? Nos experts peuvent vous aider à trouver la solution
                                parfaite pour votre foyer.
                            </p>
                            <Button
                                className="bg-blue-600 text-white rounded-full px-12 h-14"
                                style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                            >
                                Parlez avec un expert
                            </Button>
                        </div>
                    </div>
                </section>

                {/* 4.Comparison Table Section */}
                <section className="py-24 bg-white border-t border-gray-100">
                    <div className="container mx-auto px-6">
                        <div className="text-left mb-16">
                            <h2
                                className="text-slate-900 tracking-tighter mb-8 text-left"
                                style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                            >
                                <span className="text-[32px] md:text-[60px] font-normal leading-[1.1] md:leading-[60px] block">Comparaison des adoucisseurs<br />de l'eau de puits</span>
                            </h2>
                            <div className="w-24 h-1 bg-blue-600"></div>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full min-w-[1000px] border-collapse bg-white rounded-2xl overflow-hidden shadow-sm">
                                <thead>
                                    <tr className="bg-gray-100">
                                        <th className="p-8 text-left text-gray-400 font-light uppercase tracking-wider">Modèles</th>
                                        {["High Tech", "Select Plus", "Connect", "Select", "Medallist"].map(m => (
                                            <th key={m} className="p-8 text-center text-gray-900 font-bold text-xl">{m}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {comparisonData.map((row, i) => (
                                        <tr key={i} className="hover:bg-gray-50 transition-colors">
                                            <td className="p-8 font-light text-gray-700">{row.feature}</td>
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

                {/* 5.Testimonials Grid Section */}
                <TestimonialsSection />

                {/* 6. Water Testing Section */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col lg:flex-row items-stretch gap-0 rounded-[3rem] overflow-hidden shadow-2xl">
                            <div className="lg:w-1/2 relative min-h-[400px]">
                                <img src={waterTestingImg} alt="Analyse d'eau" className="absolute inset-0 w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-blue-900/10" />
                            </div>
                            <div className="lg:w-1/2 bg-blue-600 text-white p-12 lg:p-20 flex flex-col justify-center items-start text-left">
                                <span className="text-white/80 text-xs font-black uppercase tracking-[0.3em] mb-8 block">
                                    ANALYSE PROFESSIONNELLE
                                </span>
                                <h2
                                    className="text-white tracking-tighter mb-8 text-left"
                                    style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                                >
                                    <span className="text-[32px] md:text-[60px] font-light leading-[1.1] md:leading-[60px] block">Des tests d'eau précis</span>
                                    <span className="text-[32px] md:text-[60px] font-normal leading-[1.1] md:leading-[60px] block">pour votre sécurité.</span>
                                </h2>
                                <div className="w-24 h-1 bg-white mb-10"></div>
                                <p className="text-white/90 text-lg font-light mb-12 leading-relaxed text-justify">
                                    Ne devinez pas la qualité de votre eau. Nos analyses approfondies identifient les bactéries, les minéraux et les contaminants chimiques pour vous offrir une tranquillité d'esprit totale.
                                </p>
                                <Button className="bg-white text-blue-600 hover:bg-blue-50 rounded-full px-12 h-16 text-xl font-bold shadow-xl" asChild>
                                    <NavLink to="/water-testing">En savoir plus</NavLink>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 7.Video / Video Section Thumbnail */}
                <section className="py-24 bg-gray-50">
                    <div className="container mx-auto px-6 text-center">
                        <div className="text-left mb-16">
                            <h2
                                className="text-slate-900 tracking-tighter mb-8 text-left"
                                style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                            >
                                <span className="text-[32px] md:text-[60px] font-light leading-[1.1] md:leading-[60px] block">L'adoucisseur que</span>
                                <span className="text-[32px] md:text-[60px] font-normal leading-[1.1] md:leading-[60px] block">vous devez avoir</span>
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

                {/* 8.FAQ Section */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="text-left mb-16">
                            <h2
                                className="text-slate-900 tracking-tighter mb-8 text-left"
                                style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                            >
                                <span className="text-[32px] md:text-[60px] font-normal leading-[1.1] md:leading-[60px] block">FAQ</span>
                            </h2>
                            <div className="w-24 h-1 bg-blue-600"></div>
                        </div>

                        <div className="max-w-4xl mx-auto">
                            <Accordion type="single" collapsible className="w-full">
                                {faqItems.map((item, idx) => (
                                    <AccordionItem key={idx} value={`item-${idx}`} className="border-b-gray-200">
                                        <AccordionTrigger className="text-left font-bold text-lg hover:no-underline py-6">
                                            {item.q}
                                        </AccordionTrigger>
                                        <AccordionContent className="text-lg font-light leading-relaxed text-gray-600 pb-6 text-justify">
                                            {item.a}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                    </div>
                </section>

                {/* 9.Resources Section */}
                <section className="py-24 bg-gray-50">
                    <div className="container mx-auto px-6 text-left">
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
                                { title: "Comment choisir son adoucisseur", img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop" },
                                { title: "L'importance de l'eau adoucie", img: residentialWaterSoftenerImg },
                                { title: "Entretien de votre système Bricareau", img: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=800&auto=format&fit=crop" }
                            ].map((art, i) => (
                                <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer group flex flex-col h-full border border-gray-100">
                                    <div className="h-56 overflow-hidden">
                                        <img src={art.img} alt={art.title} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                                    </div>
                                    <div className="p-8 text-left border-t-2 border-transparent group-hover:border-blue-600 transition-colors flex flex-col flex-grow">
                                        <h4 className="text-xl font-bold mb-4 group-hover:text-blue-600 transition-colors uppercase tracking-tight">{art.title}</h4>
                                        <div className="mt-auto">
                                            <NavLink
                                                to="#"
                                                className="text-blue-600 font-bold flex items-center gap-2 group-hover:underline text-xs tracking-widest uppercase"
                                            >
                                                EN SAVOIR PLUS <ChevronRight className="h-4 w-4" />
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 10.Consultation Form Section */}
                <section id="consultation" className="py-24 bg-white border-t border-gray-100">
                    <div className="container mx-auto px-6">
                        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-20">
                            <div className="lg:w-1/3 text-left">
                                <h2
                                    className="text-slate-900 tracking-tighter mb-8 italic text-left"
                                    style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                                >
                                    <span className="text-[32px] md:text-[60px] font-light leading-[1.1] md:leading-[60px] block">Planifiez une</span>
                                    <span className="text-[32px] md:text-[60px] font-normal leading-[1.1] md:leading-[60px] block">consultation gratuite</span>
                                </h2>
                                <div className="w-24 h-1 bg-blue-600 mb-8"></div>
                                <p className="text-lg font-light leading-relaxed text-gray-600 mb-8 text-justify">
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
                                            <Button
                                                className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-16 h-14 w-full md:w-auto"
                                                style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                                            >
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

export default AdoucisseursEauDePuits;
