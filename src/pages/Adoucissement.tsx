import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TestimonialsSection from "@/components/TestimonialsSection";
import { Button } from "@/components/ui/button";
import heroBath from "@/assets/teenager-taking-shower-reduce-hangover-effect.jpg";
import kitchenImg from "@/assets/18036672_SIE_2720_1530_21_04_30_SIE_CRM_Dishwasher_Hand_Taking_Out_Wine_Glass_Basket_Motiv_11_0017.webp";
import kitchenkidImg from "@/assets/5846952.jpg";
import {
    ArrowRight,
    Droplets,
    Heart,
    Shield,
    TrendingDown,
    Shirt,
    Zap,
    Check,
    CheckCircle2,
    ChevronRight,
    Star,
    Play,
    X,
    Sparkles,
    Clock,
    Home
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

const Adoucissement = () => {
    return (
        <div className="min-h-screen bg-white font-sans text-[#1a1a1a]">
            <Header />
            <main>
                {/* 1. Hero Section */}
                <section className="relative h-[800px] flex items-start overflow-hidden pt-[220px]">
                    <div className="absolute inset-0 z-0">
                        <img
                            src={heroBath}
                            alt="Homme prenant son bain"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/20 lg:bg-gradient-to-r lg:from-white/40 lg:to-transparent" />
                    </div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-2xl">
                            <span className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-4 block">
                                ADOUCISSEURS D'EAU
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight text-white drop-shadow-md">
                                Une eau douce,<br />meilleure pour vous et votre maison
                            </h1>
                            <p className="text-lg md:text-xl font-medium text-white mb-8 max-w-xl drop-shadow-sm">
                                Une solution pour toute la famille. Protégez votre plomberie et profitez d'une peau plus saine.
                            </p>
                            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-10 h-14 text-lg font-bold">
                                Démarrer ici
                            </Button>
                        </div>
                    </div>
                </section>

                {/* 2. Product Intro Section */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col md:flex-row items-center gap-16">
                            <div className="md:w-1/2">
                                <img
                                    src="https://bricareau.com/wp-content/uploads/2025/01/cl10em-00-sc_bt1833-removebg-preview-1.png"
                                    alt="Adoucisseur"
                                    className="w-full max-w-md mx-auto"
                                />
                            </div>
                            <div className="md:w-1/2">
                                <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                                    Éliminez les coûts, économisez l'énergie et simplifiez vos tâches
                                </h2>
                                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                    Nos adoucisseurs d'eau haute technologie réduisent le calcaire, prolongent la vie de
                                    vos appareils et rendent le nettoyage plus facile que jamais.
                                </p>
                                <NavLink to="/contact-residentiel" className="text-blue-600 font-bold flex items-center gap-2 group">
                                    EN SAVOIR PLUS <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. Benefits Bar */}
                <section className="py-12 bg-[#00153D] text-white">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Avantages de l'adoucissement de l'eau</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                            {[
                                { icon: Heart, text: "Peau & Cheveux doux" },
                                { icon: Shield, text: "Protection Plomberie" },
                                { icon: Shirt, text: "Linge soyeux" },
                                { icon: TrendingDown, text: "Économies d'énergie" }
                            ].map((item, i) => (
                                <div key={i} className="flex flex-col items-center">
                                    <div className="w-12 h-12 rounded-full border border-blue-400 flex items-center justify-center mb-4">
                                        <item.icon className="h-6 w-6 text-blue-400" />
                                    </div>
                                    <span className="font-medium">{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 4. Kitchen / Dishwasher Section */}
                <section className="py-24 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col lg:flex-row-reverse items-center gap-16 mb-20">
                            <div className="lg:w-1/2">
                                <img
                                    src={kitchenImg}
                                    alt="Cuisine moderne avec eau adoucie"
                                    className="rounded-2xl shadow-xl w-full"
                                />
                            </div>
                            <div className="lg:w-1/2">
                                <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                                    Lave-vaisselle sans traces
                                </h2>
                                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                    L'eau adoucie empêche les taches de calcaire sur vos verres et votre vaisselle.
                                    Dites adieu au rinçage manuel et profitez d'une brillance étincelante dès la sortie de la machine.
                                </p>
                                <NavLink to="#" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3 rounded-full transition-colors">
                                    Voir comment
                                </NavLink>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
                            {[
                                { title: "Efficacité énergétique", desc: "Les chauffe-eau fonctionnent plus efficacement sans accumulation de tartre." },
                                { title: "Moins de savon", desc: "L'eau douce nécessite jusqu'à 50% moins de détergent pour le même résultat." },
                                { title: "Vie du linge", desc: "Vos vêtements restent neufs plus longtemps et les couleurs ne ternissent pas." }
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

                {/* 5. Health Section */}
                <section className="py-24 bg-white text-center">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col lg:flex-row items-center gap-16 mb-20">
                            <div className="lg:w-1/2">
                                <img
                                    src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200&auto=format&fit=crop"
                                    alt="Femme se lavant les mains"
                                    className="rounded-2xl shadow-xl w-full"
                                />
                            </div>
                            <div className="lg:w-1/2 text-left">
                                <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                                    Une santé d'eau saine pour toute votre maison
                                </h2>
                                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                    L'eau adoucie n'est pas seulement bénéfique pour vos appareils, elle est essentielle
                                    pour le bien-être de votre famille au quotidien.
                                </p>
                                <Button className="bg-blue-600 text-white rounded-full px-12 h-14 text-lg font-bold">
                                    Démarrer ici
                                </Button>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
                            {[
                                { title: "Peau plus saine", desc: "L'eau douce prévient la sécheresse cutanée et les irritations." },
                                { title: "Nettoyage facile", desc: "Moins de calcaire signifie moins de frottage dans la salle de bain." },
                                { title: "Plus d'espace", desc: "Réduisez le nombre de produits de nettoyage stockés sous l'évier." }
                            ].map((item, i) => (
                                <div key={i}>
                                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                        <span className="text-blue-600 font-bold italic">0{i + 4}</span> {item.title}
                                    </h3>
                                    <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 6. Kitchen Section */}
                <section className="py-24 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col lg:flex-row-reverse items-center gap-16 mb-20">
                            <div className="lg:w-1/2">
                                <img
                                    src={kitchenkidImg}
                                    alt="Cuisine moderne avec eau adoucie"
                                    className="rounded-2xl shadow-xl w-full"
                                />
                            </div>
                            <div className="lg:w-1/2">
                                <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                                    Lave-vaisselle sans traces
                                </h2>
                                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                    L'eau adoucie empêche les taches de calcaire sur vos verres et votre vaisselle.
                                    Dites adieu au rinçage manuel et profitez d'une brillance étincelante dès la sortie de la machine.
                                </p>
                                <NavLink to="#" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3 rounded-full transition-colors">
                                    Voir comment
                                </NavLink>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
                            {[
                                { title: "Efficacité énergétique", desc: "Les chauffe-eau fonctionnent plus efficacement sans accumulation de tartre." },
                                { title: "Moins de savon", desc: "L'eau douce nécessite jusqu'à 50% moins de détergent pour le même résultat." },
                                { title: "Vie du linge", desc: "Vos vêtements restent neufs plus longtemps et les couleurs ne ternissent pas." }
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

                {/* 6. Testimonials */}
                <TestimonialsSection />

                {/* 7. Water Test Section */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="bg-[#00153D] rounded-[40px] overflow-hidden flex flex-col md:flex-row items-center">
                            <div className="md:w-1/2 h-[450px]">
                                <img
                                    src="https://images.unsplash.com/photo-1542013936693-884638332954?q=80&w=1200&auto=format&fit=crop"
                                    alt="Analyse d'eau"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="md:w-1/2 p-12 lg:p-20 text-white">
                                <h2 className="text-3xl md:text-5xl font-bold mb-8 italic">Comment analyser votre eau</h2>
                                <p className="text-lg opacity-80 mb-8 leading-relaxed">
                                    Planifiez une analyse d'eau gratuite à domicile pour comprendre ce qu'il y a dans votre eau.
                                </p>
                                <Button className="bg-white text-blue-900 hover:bg-gray-100 rounded-full px-10 h-14 text-lg font-bold">
                                    Réserver une analyse
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 8. Quick Links */}
                <section className="py-16 bg-white border-y border-gray-100">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="flex flex-col md:flex-row gap-6 items-center border-b md:border-b-0 md:border-r border-gray-100 pb-8 md:pb-0 md:pr-12">
                                <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center shrink-0">
                                    <Play className="h-8 w-8 text-blue-600 fill-blue-600" />
                                </div>
                                <div className="text-center md:text-left">
                                    <h3 className="text-2xl font-bold mb-4">Vous avez besoin d'autre chose ?</h3>
                                    <NavLink to="/water-testing" className="text-blue-600 font-bold flex items-center gap-2 group justify-center md:justify-start">
                                        ANALYSER L'EAU <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                                    </NavLink>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row gap-6 items-center">
                                <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center shrink-0">
                                    <Sparkles className="h-8 w-8 text-blue-600" />
                                </div>
                                <div className="text-center md:text-left">
                                    <h3 className="text-2xl font-bold mb-4">Découvrez nos solutions</h3>
                                    <NavLink to="/adoucisseurs-portables" className="text-blue-600 font-bold flex items-center gap-2 group justify-center md:justify-start">
                                        ADOUCISSEURS PORTABLES <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 9. Comparison Table */}
                <section className="py-24 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">Compare Water Softening Systems</h2>
                        <div className="overflow-x-auto">
                            <table className="w-full min-w-[800px] border-collapse bg-white rounded-2xl overflow-hidden shadow-sm">
                                <thead>
                                    <tr className="bg-gray-100">
                                        <th className="p-8 text-left text-gray-400 font-medium uppercase tracking-widest text-xs">MODELLES</th>
                                        <th className="p-8 text-center text-gray-900 font-bold text-xl">Culligan HE</th>
                                        <th className="p-8 text-center text-gray-900 font-bold text-xl text-gray-400 font-normal italic">Culligan Medallist</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {[
                                        { f: "Technologie High Efficiency", h: true, m: true },
                                        { f: "Aqua-Sensor®", h: true, m: true },
                                        { f: "AccuSoft® Microprocessor", h: true, m: true },
                                        { f: "Dial-a-Softness®", h: true, m: true },
                                        { f: "Connectivité App", h: true, m: false },
                                        { f: "Débit ultra-rapide", h: true, m: false },
                                        { f: "Détection de sel", h: "Option", m: false },
                                        { f: "Installation extérieure", h: "Option", m: true }
                                    ].map((row, i) => (
                                        <tr key={i} className="hover:bg-gray-50 transition-colors">
                                            <td className="p-8 font-medium text-gray-700">{row.f}</td>
                                            <td className="p-8 text-center">
                                                {typeof row.h === 'string' ? row.h : (row.h ? <Check className="h-6 w-6 text-blue-600 mx-auto" /> : <X className="h-6 w-6 text-gray-300 mx-auto" />)}
                                            </td>
                                            <td className="p-8 text-center">
                                                {typeof row.m === 'string' ? row.m : (row.m ? <Check className="h-6 w-6 text-blue-600 mx-auto" /> : <X className="h-6 w-6 text-gray-300 mx-auto" />)}
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
                    <div className="container mx-auto px-4 max-w-4xl">
                        <h2 className="text-3xl font-bold mb-12 text-center underline decoration-blue-600 underline-offset-8">FAQ sur les adoucisseurs d'eau</h2>
                        <Accordion type="single" collapsible className="w-full">
                            {[
                                { q: "Quels sont les avantages d'un adoucisseur d'eau ?", a: "Un adoucisseur élimine le calcaire, protège vos appareils, adoucit votre peau et vos cheveux, et vous fait économiser sur les produits de nettoyage." },
                                { q: "Comment fonctionne un adoucisseur Culligan ?", a: "Il utilise un processus d'échange d'ions pour remplacer les minéraux de dureté (calcium et magnésium) par des ions sodium doux." },
                                { q: "À quelle fréquence faut-il entretenir l'appareil ?", a: "Nous recommandons un entretien annuel pour garantir des performances optimales et prolonger la vie du système." },
                                { q: "Quelle quantité de sel consomme l'adoucisseur ?", a: "Cela dépend de votre consommation d'eau et de la dureté de celle-ci. Nos systèmes HE sont parmi les plus économes du marché." }
                            ].map((item, idx) => (
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

                {/* 11. Articles Section */}
                <section className="py-24 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-16 underline decoration-blue-600 underline-offset-8">Guides, ressources et informations</h2>
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
                                    <div className="p-8 text-left border-t-2 border-transparent group-hover:border-blue-600 transition-colors">
                                        <h4 className="text-xl font-bold mb-4">{art.title}</h4>
                                        <NavLink to="#" className="text-blue-600 font-bold flex items-center gap-2 group-hover:underline text-xs tracking-widest">
                                            EN SAVOIR PLUS <ChevronRight className="h-4 w-4" />
                                        </NavLink>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 12. Consultation Form Section */}
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

export default Adoucissement;
