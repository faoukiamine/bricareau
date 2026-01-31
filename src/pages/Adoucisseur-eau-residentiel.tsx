import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import heroBath from "@/assets/close-up-handsom-man-taking-bath.jpg";
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
    X
} from "lucide-react";
import { NavLink } from "@/components/NavLink";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const products = [
    { name: "Culligan High Efficiency", desc: "Notre système le plus avancé et économe.", image: "https://bricareau.com/wp-content/uploads/2025/01/cl10em-00-sc_bt1833-removebg-preview-1.png" },
    { name: "Culligan HE Connect", desc: "Contrôlez votre eau via votre smartphone.", image: "https://bricareau.com/wp-content/uploads/2025/01/cl10em-00-sc_bt1833-removebg-preview-1.png" },
    { name: "Culligan HE Municipal", desc: "Élimine le chlore et adoucit l'eau.", image: "https://bricareau.com/wp-content/uploads/2025/01/cl10em-00-sc_bt1833-removebg-preview-1.png" },
    { name: "Culligan Select Plus", desc: "Performance fiable pour toute la famille.", image: "https://bricareau.com/wp-content/uploads/2025/01/cl10em-00-sc_bt1833-removebg-preview-1.png" },
    { name: "Culligan Select Plus Connect", desc: "Connectivité intelligente et grand confort.", image: "https://bricareau.com/wp-content/uploads/2025/01/cl10em-00-sc_bt1833-removebg-preview-1.png" },
    { name: "Culligan Medallist Series", desc: "Design compact, efficacité maximale.", image: "https://bricareau.com/wp-content/uploads/2025/01/cl10em-00-sc_bt1833-removebg-preview-1.png" },
    { name: "Culligan Gold Series", desc: "La référence de l'eau adoucie.", image: "https://bricareau.com/wp-content/uploads/2025/01/cl10em-00-sc_bt1833-removebg-preview-1.png" },
    { name: "Culligan Outdoor HE", desc: "Solution robuste pour l'extérieur.", image: "https://bricareau.com/wp-content/uploads/2025/01/cl10em-00-sc_bt1833-removebg-preview-1.png" },
    { name: "Culligan Iron-Cleer", desc: "Spécialisé pour l'eau contenant du fer.", image: "https://bricareau.com/wp-content/uploads/2025/01/cl10em-00-sc_bt1833-removebg-preview-1.png" },
];

const reviews = [
    { name: "Pierre L.", rating: 5, text: "Excellent service. L'installation a été rapide et les résultats sont au rendez-vous. Plus de calcaire !", date: "Il y a 2 mois" },
    { name: "Marie C.", rating: 5, text: "Enfin une douche qui ne m'irrite plus la peau. Très satisfaite de mon adoucisseur Culligan.", date: "Il y a 3 mois" },
    { name: "Robert D.", rating: 4, text: "Bon produit, technicien très professionnel. Je recommande vivement.", date: "Il y a 1 mois" },
    { name: "Sophie T.", rating: 5, text: "Une eau de qualité partout dans la maison. Le service client de Bricareau est top.", date: "Il y a 2 semaines" },
];

const faqItems = [
    { q: "Quels sont les avantages d'un adoucisseur d'eau ?", a: "Un adoucisseur élimine le calcaire, protège vos appareils, adoucit votre peau et vos cheveux, et vous fait économiser sur les produits de nettoyage." },
    { q: "Comment fonctionne un adoucisseur Culligan ?", a: "Il utilise un processus d'échange d'ions pour remplacer les minéraux de dureté (calcium et magnésium) par des ions sodium doux." },
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

const AdoucisseurEauResidentiel = () => {
    return (
        <div className="min-h-screen bg-white">
            <Header />

            <main>
                {/* Hero Section */}
                <section className="relative h-[750px] flex items-center overflow-hidden">
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
                            <span className="inline-block px-3 py-1 bg-blue-600 text-xs font-bold uppercase tracking-wider rounded-sm mb-4">
                                Solutions Résidentielles
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                                Profitez d'une solution sur mesure pour une eau de qualité
                            </h1>
                            <p className="text-lg md:text-xl opacity-95 mb-8 max-w-xl leading-relaxed">
                                Modernisez votre maison avec les technologies Culligan et redécouvrez le plaisir d'une eau douce,
                                plus saine pour vous et vos installations.
                            </p>
                            <div className="flex gap-4">
                                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 h-14 text-lg font-bold">
                                    Démarrer ici
                                </Button>
                                <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white rounded-full px-8 h-14 text-lg font-bold backdrop-blur-sm">
                                    Voir les produits
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Benefits Icons Bar */}
                <section className="py-16 bg-[#001A4D] text-white">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                            <div className="flex flex-col items-center">
                                <div className="w-16 h-16 rounded-full border border-blue-400 flex items-center justify-center mb-6">
                                    <Droplets className="h-8 w-8 text-blue-400" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">Eau de qualité supérieure</h3>
                                <p className="opacity-70">Une douceur incomparable pour votre peau et vos cheveux.</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="w-16 h-16 rounded-full border border-blue-400 flex items-center justify-center mb-6">
                                    <Shield className="h-8 w-8 text-blue-400" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">Protection des appareils</h3>
                                <p className="opacity-70">Prolongez la durée de vie de votre plomberie et électroménagers.</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="w-16 h-16 rounded-full border border-blue-400 flex items-center justify-center mb-6">
                                    <TrendingDown className="h-8 w-8 text-blue-400" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">Économies garanties</h3>
                                <p className="opacity-70">Réduisez vos factures d'énergie et vos dépenses en produits d'entretien.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Product Grid Section */}
                <section className="py-24 bg-gray-50">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl md:text-5xl font-bold mb-16">Adoucisseur d'eau résidentiel Culligan</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {products.map((p, i) => (
                                <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center transition-all hover:shadow-md hover:-translate-y-1">
                                    <div className="h-48 mb-8 flex items-center justify-center">
                                        <img src={p.image} alt={p.name} className="max-h-full object-contain" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-4">{p.name}</h3>
                                    <p className="text-gray-500 mb-6 flex-grow">{p.desc}</p>
                                    <Button variant="link" className="text-blue-600 font-bold p-0 group">
                                        EN SAVOIR PLUS <ChevronRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
                                    </Button>
                                </div>
                            ))}
                        </div>
                        <div className="mt-16">
                            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                                Vous ne savez pas quel système choisir ? Nos experts peuvent vous aider à trouver la solution
                                parfaite pour votre foyer.
                            </p>
                            <Button className="bg-blue-600 text-white rounded-full px-12 h-14 text-lg">
                                Trouver un expert Culligan
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Testimonials Grid Section */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl md:text-5xl font-bold mb-16">Commentaires sur l'adoucisseur-d'eau Culligan</h2>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-left">
                            {reviews.map((r, i) => (
                                <div key={i} className="bg-gray-50 p-8 rounded-2xl flex flex-col">
                                    <div className="flex gap-1 mb-4">
                                        {[1, 2, 3, 4, 5].map(s => <Star key={s} className="h-4 w-4 fill-blue-600 text-blue-600" />)}
                                    </div>
                                    <p className="text-gray-600 italic mb-8 flex-grow leading-relaxed">"{r.text}"</p>
                                    <div>
                                        <h4 className="font-bold">{r.name}</h4>
                                        <span className="text-xs text-gray-400">{r.date}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-12 flex items-center justify-center gap-4">
                            <div className="w-10 h-1 bg-blue-600 rounded-full" />
                            <div className="w-20 h-1 bg-gray-200 rounded-full" />
                        </div>
                    </div>
                </section>

                {/* Content Section: Plus qu'un adoucisseur */}
                <section className="py-24 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col lg:flex-row items-center gap-20">
                            <div className="lg:w-1/2">
                                <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">C'est plus qu'un adoucisseur d'eau</h2>
                                <p className="text-lg text-gray-600 mb-12">
                                    Il s'agit d'une solution complète pour toute la maison. Nos systèmes sont conçus pour
                                    offrir une performance intelligente et une efficacité sans précédent.
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                    {[
                                        { icon: Sparkles, title: "Vaisselle sans traces", body: "Plus besoin de rincer à la main." },
                                        { icon: Shirt, title: "Linge plus doux", body: "Utilisez moins de détergent." },
                                        { icon: TrendingDown, title: "Coûts réduits", body: "Économisez sur l'énergie." },
                                        { icon: Zap, title: "Efficacité HE", body: "Consomme moins de sel et d'eau." }
                                    ].map((item, id) => (
                                        <div key={id} className="flex gap-4">
                                            <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center shrink-0">
                                                <item.icon className="h-6 w-6 text-blue-600" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold mb-1">{item.title}</h4>
                                                <p className="text-sm text-gray-500">{item.body}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="lg:w-1/2">
                                <img src="https://images.unsplash.com/photo-1542013936693-884638332954?q=80&w=1200&auto=format&fit=crop" alt="Cuisine propre" className="rounded-[40px] shadow-2xl" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA: Analyse d'eau */}
                <section className="py-24 bg-white overflow-hidden">
                    <div className="container mx-auto px-4">
                        <div className="bg-[#001A4D] rounded-[40px] overflow-hidden flex flex-col md:flex-row items-center">
                            <div className="md:w-1/2 h-[400px]">
                                <img
                                    src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200&auto=format&fit=crop"
                                    alt="Analyse d'eau"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="md:w-1/2 p-12 lg:p-20 text-white">
                                <h2 className="text-3xl md:text-5xl font-bold mb-8">Comment analyser votre eau</h2>
                                <p className="text-lg opacity-80 mb-8 max-w-md">
                                    Commencez dès aujourd'hui par un test gratuit à domicile pour identifier le système idéal.
                                </p>
                                <Button className="bg-blue-600 text-white rounded-full px-12 h-14 text-lg">
                                    Planifiez l'analyse de votre eau
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Comparison Table Section */}
                <section className="py-24 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">Comparaison des adoucisseurs d'eau</h2>
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

                {/* Content Section: Pourquoi opter */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col lg:flex-row items-center gap-20">
                            <div className="lg:w-1/2">
                                <img src="https://images.unsplash.com/photo-1595152772835-2196740b6ca0?q=80&w=1200&auto=format&fit=crop" alt="Famille heureuse" className="rounded-[40px] shadow-2xl" />
                            </div>
                            <div className="lg:w-1/2">
                                <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">Pourquoi opter pour un adoucisseur Culligan ?</h2>
                                <div className="space-y-6">
                                    {[
                                        "Une eau douce instantanément dans toute la maison.",
                                        "Une technologie de pointe (HE) pour des économies durables.",
                                        "Un service d'installation et d'entretien professionnel.",
                                        "Une garantie locale et un support client réactif."
                                    ].map((txt, i) => (
                                        <div key={i} className="flex gap-4 items-start">
                                            <div className="mt-1 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center shrink-0">
                                                <Check className="h-4 w-4 text-white" />
                                            </div>
                                            <p className="text-lg text-gray-700">{txt}</p>
                                        </div>
                                    ))}
                                </div>
                                <Button className="mt-12 bg-blue-600 text-white rounded-full px-12 h-14 text-lg">
                                    Découvrez nos nouveautés
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Video / Video Section Thumbnail */}
                <section className="py-24 bg-gray-50">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl d:text-5xl font-bold mb-16">L'adoucisseur que vous devez avoir</h2>
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
                    <div className="container mx-auto px-4 max-w-4xl">
                        <h2 className="text-3xl font-bold mb-12 text-center underline decoration-blue-600 underline-offset-8">FAQ sur les adoucisseurs d'eau</h2>
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
                </section>

                {/* Articles Section */}
                <section className="py-24 bg-gray-50">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold mb-16">Articles et ressources</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { title: "Comment choisir son adoucisseur", img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop" },
                                { title: "L'importance de l'eau adoucie", img: "https://images.unsplash.com/photo-1542013936693-884638332954?q=80&w=800&auto=format&fit=crop" },
                                { title: "Entretien de votre système Culligan", img: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=800&auto=format&fit=crop" }
                            ].map((art, i) => (
                                <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
                                    <div className="h-56 overflow-hidden">
                                        <img src={art.img} alt={art.title} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                                    </div>
                                    <div className="p-8 text-left">
                                        <h4 className="text-xl font-bold mb-4">{art.title}</h4>
                                        <Button variant="link" className="p-0 text-blue-600 font-bold group-hover:underline">
                                            LIRE L'ARTICLE <ChevronRight className="h-4 w-4 ml-1" />
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Consultation Form Section */}
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

export default AdoucisseurEauResidentiel;
