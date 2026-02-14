import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TestimonialsSection from "@/components/TestimonialsSection";
import { Button } from "@/components/ui/button";
import heroBath from "@/assets/woman-and-kid-drink-glass-water.jpg";
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
    Wifi,
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
import ConsultationFormSection from "@/components/ConsultationFormSection";
const products = [
    { name: "Adoucisseur d'eau de la série SENTINELLE", desc: "Le rythme parfait d'une eau toujours douce.", path: "/filtre-eau-haute-efficacite", image: "https://bricareau.com/wp-content/uploads/2025/01/cl10em-00-sc_bt1833-removebg-preview-1.png" },
    { name: "Adoucisseur d'eau de la série SÉRÉNITÉ", desc: "La paix durable pour votre maison et votre confort.", path: "/filtre-eau-haute-efficacite", image: "https://bricareau.com/wp-content/uploads/2025/01/cl10em-00-sc_bt1833-removebg-preview-1.png" },
    { name: "Adoucisseur d'eau de la série INFINITI", desc: "Une douceur constante, à chaque goutte, à chaque seconde.", path: "/filtre-eau-haute-efficacite", image: "https://bricareau.com/wp-content/uploads/2025/01/cl10em-00-sc_bt1833-removebg-preview-1.png" },
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

const faqItems = [
    { q: "Quelle est la différence entre un adoucisseur municipal et un adoucisseur de puits ?", a: "Un adoucisseur municipal est souvent équipé de charbon actif pour éliminer le chlore et les odeurs de l'eau traitée par la ville, en plus d'éliminer le calcaire." },
    { q: "Pourquoi adoucir l'eau de la ville ?", a: "Bien que traitée, l'eau municipale reste souvent dure. L'adoucissement protège vos appareils, réduit les taches de calcaire et est plus doux pour votre peau et vos cheveux." },
    { q: "L'entretien est-il différent ?", a: "Le fonctionnement de base est le même, mais les modèles municipaux avec charbon nécessitent parfois un remplacement périodique du média filtrant pour maintenir l'élimination optimale du chlore." },
    { q: "Puis-je boire l'eau adoucie ?", a: "Oui, la quantité de sodium ajoutée pendant le processus est minime. Cependant, pour les régimes très stricts en sodium, une station d'eau potable par osmose inverse est recommandée." },
];

const AdoucisseurEauResidentiel = () => {
    return (
        <div className="min-h-screen bg-white">
            <Header />

            <main>
                {/* 1.Hero Section */}
                <section className="relative h-[800px] flex items-start overflow-hidden pt-[220px]">
                    <div className="absolute inset-0 z-0">
                        <img
                            src={heroBath}
                            alt="femme prenant un bain d'eau douce"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/30 lg:bg-gradient-to-r lg:from-black/50 lg:to-transparent" />
                    </div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-2xl text-white">
                            <h1
                                className="text-[40px] md:text-[60px] leading-[1.1] md:leading-[60px] font-light mb-8 tracking-tighter text-white text-justify"
                                style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                            >
                                Un bien-être sans égal <span className="font-normal"><br />au quotidien</span>
                            </h1>
                            <p className="text-lg font-light leading-relaxed text-white/95 mb-8 max-w-xl text-justify">
                                Redécouvrez le confort d'une eau soyeuse protégeant votre peau et vos appareils. Alliez économies durables et bien-être absolu au quotidien.
                            </p>
                            <div className="flex gap-4">
                                <Button
                                    size="lg"
                                    className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 h-14"
                                    style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                                    onClick={() => document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' })}
                                >
                                    <a href="#consultation">Planifier une consultation gratuite</a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. Why choose our residential water softeners */}
                <section className="py-24 bg-blue-600 text-white text-center">
                    <div className="container mx-auto px-6 text-center">
                        <div className="text-center mb-16">
                            <h2 className="text-[32px] md:text-[48px] font-normal text-white mb-8 leading-[1.2] md:leading-[48px] tracking-tighter text-center">
                                Pourquoi choisir nos <br />adoucisseurs d'eau résidentiels ?
                            </h2>
                            <p className="text-lg font-light leading-relaxed text-blue-100 max-w-2xl mx-auto text-justify">
                                Plus qu'un simple appareil, c'est une solution complète pour la qualité de l'eau et le confort de toute votre famille.
                            </p>
                        </div>
                        <div className="flex flex-wrap justify-center gap-x-12 gap-y-16">
                            {[
                                { icon: Droplets, title: "Qualité supérieure", desc: "Une douceur incomparable pour votre peau et vos cheveux dès la première douche." },
                                { icon: Shirt, title: "Linge plus doux", desc: "Des vêtements qui restent éclatants et souples plus longtemps, sans adoucissants." },
                                { icon: Sparkles, title: "Vaisselle étincelante", desc: "Éliminez les taches de calcaire et le voile blanc sur vos verres et plats." },
                                { icon: Shield, title: "Protection totale", desc: "Prolongez la durée de vie de votre plomberie et de vos électroménagers coûteux." },
                                { icon: HandCoins, title: "Économies garanties", desc: "Réduisez vos factures d'énergie et vos dépenses en savons et détergents de 50%." },
                                { icon: Zap, title: "Efficacité HE", desc: "Une technologie haute efficacité qui consomme moins de sel et d'eau." },
                                { icon: Wifi, title: "Régénération adaptée", desc: "Nous avons la technologie exacte pour votre profil." },
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
                                <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer group flex flex-col h-full">
                                    <div className="bg-slate-50 aspect-square overflow-hidden flex items-center justify-center p-8">
                                        <img
                                            src={p.image}
                                            alt={p.name}
                                            className="w-full h-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-110"
                                        />
                                    </div>
                                    <div className="p-8 text-center border-t-2 border-transparent group-hover:border-blue-600 transition-colors flex flex-col flex-grow items-center">
                                        <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors uppercase tracking-tight">
                                            {p.name.includes("Adoucisseur d'eau") ? (
                                                <>
                                                    Adoucisseur d'eau <br />
                                                    {p.name.split("Adoucisseur d'eau")[1].trim()}
                                                </>
                                            ) : p.name}
                                        </h3>
                                        <p className="text-lg font-light leading-relaxed text-slate-500 mb-6 flex-grow text-justify">{p.desc}</p>
                                        <NavLink
                                            to={p.path || "/adoucisseurs"}
                                            className="text-blue-600 font-bold flex items-center justify-center gap-2 group-hover:underline text-xs tracking-widest uppercase"
                                        >
                                            EN SAVOIR PLUS <ChevronRight className="h-4 w-4" />
                                        </NavLink>
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
                                onClick={() => document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' })}
                            >
                                Parlez avec un expert
                            </Button>
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
                                        <th className="p-8 text-left text-gray-400 font-light uppercase tracking-wider w-1/4">Critères d'Analyse</th>
                                        {[
                                            { name: "Sérénité", sub: "(Calendrier)" },
                                            { name: "Sentinel", sub: "(Volumétrique / Meter)" },
                                            { name: "Infiniti", sub: "(Duplex Alterné)" }
                                        ].map(m => (
                                            <th key={m.name} className="p-8 text-center text-gray-900 font-bold">
                                                <div className="text-xl">{m.name}</div>
                                                <div className="text-sm font-normal text-gray-500">{m.sub}</div>
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

                {/* 5.Testimonials Grid Section */}
                <TestimonialsSection />

                {/* 6. Water testing Section */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col lg:flex-row items-stretch gap-0 rounded-[3rem] overflow-hidden shadow-2xl">
                            <div className="lg:w-1/2 relative min-h-[400px]">
                                <img src={waterTestingImg} alt="Analyse d'eau" className="absolute inset-0 w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-blue-900/10" />
                            </div>
                            <div className="lg:w-1/2 bg-blue-600 text-white p-12 lg:p-20 flex flex-col justify-center items-start text-left">
                                <span className="text-white/80 text-xs font-black uppercase tracking-[0.3em] mb-8 block">
                                    ANALYSE d'eau PROFESSIONNELLE
                                </span>
                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-8 leading-[1.1] tracking-tighter text-left">
                                    Des tests d'eau précis <br />
                                    pour votre sécurité.
                                </h2>
                                <p className="text-lg font-light leading-relaxed text-white/90 mb-12 text-justify">
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
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-[32px] md:text-[48px] font-normal text-slate-900 mb-16 leading-[1.2] md:leading-[48px] tracking-tighter">L'adoucisseur que vous devez avoir</h2>
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
                    <div className="container mx-auto px-4">
                        <div className="text-left mb-16">
                            <h2
                                className="text-slate-900 tracking-tighter mb-8 text-left"
                                style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                            >                                <span className="text-[32px] md:text-[60px] font-normal leading-[1.1] md:leading-[60px] block">FAQ</span>
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
                    <div className="container mx-auto px-4 text-left">
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
                                { title: "Comment choisir son adoucisseur", img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop" },
                                { title: "L'importance de l'eau adoucie", img: residentialWaterSoftenerImg },
                                { title: "Entretien de votre système Bricareau", img: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=800&auto=format&fit=crop" }
                            ].map((art, i) => (
                                <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
                                    <div className="h-56 overflow-hidden">
                                        <img src={art.img} alt={art.title} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                                    </div>
                                    <div className="p-8 text-left border-t-2 border-transparent group-hover:border-blue-600 transition-colors">
                                        <h4 className="text-xl font-bold mb-4">{art.title}</h4>
                                        <NavLink
                                            to="#"
                                            className="text-blue-600 font-bold flex items-center gap-2 group-hover:underline text-xs tracking-widest uppercase"
                                        >
                                            EN SAVOIR PLUS <ChevronRight className="h-4 w-4" />
                                        </NavLink>
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

export default AdoucisseurEauResidentiel;
