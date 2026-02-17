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
import waterSoftenerImg from "@/assets/Adoucisseurs d'eau.webp";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ConsultationFormSection from "@/components/ConsultationFormSection";

const products = [
    { name: "Adoucisseur d'eau de la série Sentinelle", desc: "Le rythme parfait d'une eau toujours douce.", path: "/adoucisseur-eau-municipal", image: "https://bricareau.com/wp-content/uploads/2025/01/cl10em-00-sc_bt1833-removebg-preview-1.png" },
    { name: "Adoucisseur d'eau de la série Sérénité", desc: "La paix durable pour votre maison et votre confort.", path: "/adoucisseur-eau-municipal", image: "https://bricareau.com/wp-content/uploads/2025/01/cl10em-00-sc_bt1833-removebg-preview-1.png" },
    { name: "Adoucisseur d'eau de la série Infiniti", desc: "Une douceur constante, à chaque goutte, à chaque seconde.", path: "/adoucisseur-eau-municipal", image: "https://bricareau.com/wp-content/uploads/2025/01/cl10em-00-sc_bt1833-removebg-preview-1.png" },
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

const AdoucisseursEauDePuits = () => {
    return (
        <div className="min-h-screen bg-white">
            <Header />

            <main>
                {/* 1.Hero Section */}
                <section className="relative h-[850px] flex items-center overflow-hidden -mt-[104px] pt-[104px]">
                    <div className="absolute inset-0 z-0">
                        <img
                            src={heroBath}
                            alt="Homme prenant un bain d'eau douce"
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
                                className="text-[40px] md:text-[60px] leading-[1.1] md:leading-[60px] font-light mb-8 tracking-tighter text-white"
                                style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                            >
                                <span className="font-bold">Un bien-être sans égal</span> <span className="font-bold"><br />au quotidien</span>
                            </h1>
                            <p className="text-lg font-light leading-relaxed text-white/95 mb-8 max-w-xl text-justify">
                                Bricareau vous offre une eau douce, source de bien-être et de confort.
                            </p>
                            <div className="flex gap-4">
                                <Button
                                    size="lg"
                                    className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 h-14 shadow-lg shadow-blue-200"
                                    style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                                    onClick={() => document.getElementById('nos-adoucisseurs')?.scrollIntoView({ behavior: 'smooth' })}
                                >
                                    <a href="#consultation">Planifiez une consultation gratuite</a>
                                </Button>
                            </div>
                        </div>
                    </div>
                    {/* Wave Separator Bottom - Transition to Blue Section */}
                    <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-[0] z-20 pointer-events-none">
                        <svg
                            className="relative block w-full h-[80px] md:h-[150px]"
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
                                    <h4 className="text-2xl font-medium mb-4 tracking-tight">{item.title}</h4>
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
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
                            {products.map((p, i) => (
                                <div
                                    key={i}
                                    className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full cursor-pointer"
                                    onClick={() => window.location.href = p.path || "/adoucisseurs"}
                                >
                                    <div className="relative h-80 overflow-hidden bg-slate-50 flex items-center justify-center p-12">
                                        <img
                                            src={p.image}
                                            alt={p.name}
                                            className="max-h-full object-contain group-hover:scale-110 transition-transform duration-700 mix-blend-multiply"
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
                                            className="text-slate-500 font-light leading-relaxed flex-grow text-justify"
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

                {/* 4.Comparison Table Section */}
                <section className="py-24 bg-white border-t border-gray-100">
                    <div className="container mx-auto px-4">
                        <div className="text-left mb-16">
                            <h2
                                className="text-[32px] md:text-[60px] font-light text-slate-900 mb-8 leading-[1.1] md:leading-[60px] tracking-tighter text-left"
                                style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
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
                                            { name: "Sérénité", img: waterSoftenerImg },
                                            { name: "Sentinel", img: waterSoftenerImg },
                                            { name: "Infiniti", img: waterSoftenerImg }
                                        ].map(m => (
                                            <th key={m.name} className="p-4 text-center text-gray-900 font-bold border-l border-white/50 first:border-l-0">
                                                <div className="flex flex-col items-center">
                                                    <div className="h-[100px] w-full flex items-center justify-center mb-4">
                                                        <img
                                                            src={m.img}
                                                            alt={m.name}
                                                            className="max-h-full max-w-full object-contain mix-blend-multiply"
                                                        />
                                                    </div>
                                                    <div className="text-[13px] leading-tight uppercase tracking-wider min-h-[32px] flex items-center justify-center px-1">
                                                        {m.name}
                                                    </div>
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
                                                <td key={model} className="p-8 text-center text-lg font-light leading-relaxed text-gray-600 text-justify">
                                                    {(row as any)[model]}
                                                </td>
                                            ))}
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
                            alt="Homme prenant un bain d'eau douce"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/30 lg:bg-gradient-to-r lg:from-black/50 lg:to-transparent" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-white via-white/10 to-transparent" />
                    </div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-2xl text-white">
                            <h2
                                className="text-[40px] md:text-[60px] leading-[1.1] md:leading-[60px] font-light mb-8 tracking-tighter text-white"
                                style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                            >
                                Des tests d'eau précis <span className="font-bold"><br />pour une tranquillité d'esprit totale.</span>
                            </h2>
                            <p className="text-lg font-light leading-relaxed text-white/95 mb-8 max-w-xl text-justify">
                                Ne devinez pas la qualité de votre eau. Nos analyses approfondies identifient les bactéries, les minéraux et les contaminants chimiques pour vous offrir une tranquillité d'esprit totale.
                            </p>
                            <div className="flex gap-4">
                                <Button
                                    size="lg"
                                    className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 h-14"
                                    style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                                    onClick={() => document.getElementById('nos-adoucisseurs')?.scrollIntoView({ behavior: 'smooth' })}
                                >
                                    <a href="/tests-eau">Demandez une analyse d'eau</a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 6.Testimonials Grid Section */}
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

                {/* 8.FAQ Section */}
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
                                        <AccordionTrigger className="text-left text-base font-medium leading-6 hover:no-underline py-6" style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}>
                                            {item.q}
                                        </AccordionTrigger>
                                        <AccordionContent className="text-base font-light leading-6 text-gray-600 pb-6 text-justify" style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}>
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
                                        <h4 className="text-xl font-medium mb-4 group-hover:text-blue-600 transition-colors tracking-tight">{art.title}</h4>
                                        <div className="mt-auto">
                                            <NavLink
                                                to="#"
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

                {/* 10.Consultation Form Section */}
                <ConsultationFormSection id="consultation" />
            </main>

            <Footer />
        </div>
    );
};

export default AdoucisseursEauDePuits;
