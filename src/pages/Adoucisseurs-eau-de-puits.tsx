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
import waterTestBg from "@/assets/Enercare_JP_Day_2_Kitchen_Faucet_498-2048x1365.jpg";
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
    { q: "Quels sont les avantages d'un adoucisseur d'eau ?", a: "Un adoucisseur élimine le calcaire, protège vos appareils, adoucit votre peau et vos cheveux, et vous fait économiser sur les produits de nettoyage." },
    { q: "Comment fonctionne un adoucisseur Bricareau ?", a: "Il utilise un processus d'échange d'ions pour remplacer les minéraux de dureté (calcium et magnésium) par des ions sodium doux." },
    { q: "À quelle fréquence faut-il entretenir l'appareil ?", a: "Nous recommandons un entretien annuel pour garantir des performances optimales et prolonger la vie du système." },
    { q: "Quelle quantité de sel consomme l'adoucisseur ?", a: "Cela dépend de votre consommation d'eau et de la dureté de celle-ci. Nos systèmes HE sont parmi les plus économes du marché." },
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
                {/* Hero Section */}
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
                            <p className="font-light text-[20px] leading-[28px] text-white/95 mb-8 max-w-xl">
                                Bricareau vous offre une eau douce, source de bien-être et de confort.
                            </p>
                            <div className="flex gap-4">
                                <Button
                                    size="lg"
                                    className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 h-14"
                                    style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                                    onClick={() => document.getElementById('nos-adoucisseurs')?.scrollIntoView({ behavior: 'smooth' })}
                                >
                                    Explorez nos adoucisseurs d'eau
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. Pourquoi choisir - Blue Section (Merged with Plus qu'un adoucisseur) */}
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
                                    <p className="text-blue-100 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Product Grid Section */}
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
                                <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-start text-left transition-all hover:shadow-md hover:-translate-y-1">
                                    <div className="h-48 mb-8 flex items-center justify-center">
                                        <img src={p.image} alt={p.name} className="max-h-full object-contain" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-4">{p.name}</h3>
                                    <p className="font-light text-[18px] leading-[24px] text-slate-500 mb-6 flex-grow">{p.desc}</p>
                                    <Button variant="link" className="text-blue-600 font-bold p-0 group" asChild>
                                        <NavLink to={p.path || "/adoucisseurs"}>
                                            EN SAVOIR PLUS <ChevronRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
                                        </NavLink>
                                    </Button>
                                </div>
                            ))}
                        </div>
                        <div className="mt-16 text-center">
                            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
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

                {/* Comparison Table Section */}
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

                {/* Testimonials Grid Section */}
                <TestimonialsSection />

                {/* 5. Expertise Section (Blue Box Design) */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col lg:flex-row items-stretch gap-0 rounded-[3rem] overflow-hidden shadow-2xl">
                            <div className="lg:w-1/2 relative min-h-[400px]">
                                <img src={waterTestBg} alt="Analyse d'eau" className="absolute inset-0 w-full h-full object-cover" />
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
                                <p className="text-white/90 text-lg font-medium mb-12 leading-relaxed">
                                    Ne devinez pas la qualité de votre eau. Nos analyses approfondies identifient les bactéries, les minéraux et les contaminants chimiques pour vous offrir une tranquillité d'esprit totale.
                                </p>
                                <Button className="bg-white text-blue-600 hover:bg-blue-50 rounded-full px-12 h-16 text-xl font-bold shadow-xl" asChild>
                                    <NavLink to="/water-testing">En savoir plus</NavLink>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Video / Video Section Thumbnail */}
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

                {/* FAQ Section */}
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
                                        <AccordionContent className="text-gray-600 text-lg leading-relaxed pb-6 text-left">
                                            {item.a}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                    </div>
                </section>

                {/* Articles Section (Matching Resources design from Filtration.tsx) */}
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

                {/* Consultation Form Section */}
                <section className="py-24 bg-white border-t border-gray-100">
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
