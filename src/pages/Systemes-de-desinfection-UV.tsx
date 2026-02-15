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
    ShieldCheck,
    Droplets,
    Zap,
    ZapOff,
    Activity,
    ShieldAlert,
    BatteryLow,
    CupSoda,
    HeartHandshake
} from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import TestimonialsSection from "@/components/TestimonialsSection";

import heroImg from "@/assets/african-girl-stands-kitchen-drinks-water.jpg";
import uvSystemImg from "@/assets/Systèmes de désinfection UV.webp";
import uvSystemImg2 from "@/assets/VH200-F10-265x300.jpg";
import uvSystemImg3 from "@/assets/VH410-F20-200x300.jpg";
import uvSystemImg4 from "@/assets/500x500_V-Arros-15-IHS-10_straight-1-300x300.jpg";
import waterTestingImg from "@/assets/2147800429.jpg";

const DesinfectionUV = () => {
    const comparisonData = [
        { feature: "Élimination 99.99% des virus", VH410F20: true, VH200F10: true, Arros15IHS10: true },
        { feature: "Destruction des bactéries", VH410F20: true, VH200F10: true, Arros15IHS10: true },
        { feature: "Neutralisation des kystes", VH410F20: true, VH200F10: true, Arros15IHS10: true },
        { feature: "Alarme de remplacement de lampe", VH410F20: true, VH200F10: true, Arros15IHS10: true },
        { feature: "Capteur d'intensité UV", VH410F20: true, VH200F10: true, Arros15IHS10: true },
        { feature: "Garantie à vie sur la chambre", VH410F20: true, VH200F10: true, Arros15IHS10: true },
    ];

    return (
        <div className="min-h-screen bg-background text-slate-900 font-sans">
            <Header />
            <main>
                {/* 1.Hero Section */}
                <section className="relative h-[800px] flex items-start overflow-hidden pt-[220px]">
                    <div className="absolute inset-0 z-0">
                        <img
                            src={heroImg}
                            alt="Eau pure par désinfection UV"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/20 lg:bg-gradient-to-r lg:from-black/60 lg:to-transparent" />
                    </div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-2xl text-white">
                            <span className="text-sm font-bold uppercase tracking-widest text-[#60A5FA] mb-4 block">
                                PROTECTION MICROBIOLOGIQUE
                            </span>
                            <h1
                                className="text-[40px] md:text-[60px] leading-[1.1] md:leading-[60px] font-light mb-8 tracking-tighter text-white"
                                style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                            >
                                La désinfection UV <span className="font-normal"><br />Zéro produit chimique, 100% de protection</span>
                            </h1>
                            <p className="font-light text-[20px] leading-[28px] text-white/95 mb-8 max-w-xl text-justify">
                                Éliminez 99,99% des virus, bactéries et kystes sans ajouter de produits chimiques à votre eau. Une protection invisible pour une sécurité totale.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button
                                    size="lg"
                                    className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 h-14"
                                    style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                                    asChild
                                >
                                    <a href="#consultation">Planifier une consultation gratuite</a>
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="bg-white/10 hover:bg-white/20 text-white border-white rounded-full px-8 h-14 backdrop-blur-sm shadow-lg flex items-center gap-2"
                                    style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                                    onClick={() => document.getElementById('systemes-uv')?.scrollIntoView({ behavior: 'smooth' })}
                                >
                                    Découvrir nos systèmes UV
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. Why choose UV disinfection? */}
                <section className="py-24 bg-blue-600 text-white">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2
                                className="text-[32px] md:text-[60px] font-normal text-white mb-8 leading-[1.1] md:leading-[60px] tracking-tighter text-center"
                                style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                            >
                                <span className="font-light block">Pourquoi choisir la</span>
                                <span className="font-normal block">désinfection UV ?</span>
                            </h2>
                            <p className="text-lg font-light leading-relaxed text-blue-100 max-w-2xl mx-auto text-justify">
                                Profitez d'une tranquillité d'esprit totale avec une technologie qui élimine 99,99% des pathogènes sans ajout de produits chimiques.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
                            {[
                                { icon: ShieldCheck, title: "Sans produits chimiques", desc: "Aucun goût ni odeur de chlore ajouté à votre eau." },
                                { icon: Zap, title: "Action instantanée", desc: "L'eau est désinfectée dès qu'elle traverse le débit." },
                                { icon: Activity, title: "Efficacité prouvée", desc: "Détruit l'ADN des micro-organismes nocifs." },
                                { icon: HeartHandshake, title: "Sécurité 100%", desc: "Protection permanente 24h/24 contre les bactéries." },
                                { icon: CupSoda, title: "Goût préservé", desc: "L'eau garde ses propriétés organoleptiques." },
                                { icon: Droplets, title: "Eau cristalline", desc: "Conserve les minéraux essentiels de votre eau." },
                                { icon: BatteryLow, title: "Faible énergie", desc: "Consomme autant qu'une ampoule standard." },
                                { icon: ShieldAlert, title: "Zéro risque", desc: "Pas de stockage de produits chimiques dangereux." }
                            ].map((benefit, i) => (
                                <div key={i} className="flex flex-col items-center group">
                                    <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center mb-8 transition-all group-hover:scale-110 group-hover:bg-white/10">
                                        <benefit.icon className="h-10 w-10 text-blue-600 group-hover:text-white" />
                                    </div>
                                    <h3 className="text-2xl font-medium mb-4 tracking-tight">{benefit.title}</h3>
                                    <p className="text-lg font-light leading-relaxed text-blue-100 text-justify">{benefit.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 3. UV Systems - Product Grid */}
                <section id="systemes-uv" className="py-24 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="text-left mb-16">
                            <h2
                                className="text-slate-900 tracking-tighter mb-8 text-left"
                                style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                            >
                                <span className="text-[32px] md:text-[60px] font-light leading-[1.1] md:leading-[60px] block">Nos systèmes de</span>
                                <span className="text-[32px] md:text-[60px] font-normal leading-[1.1] md:leading-[60px] block">désinfection UV</span>
                            </h2>
                            <div className="w-24 h-1 bg-blue-600"></div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                { name: "VH200-F10", desc: "Préfiltration UV intégrée pour toute la maison\nIdéal pour : bactéries, turbidité/opacité.\nDébit : 9 gpm.", img: uvSystemImg2 },
                                { name: "VH410-F20", desc: "Préfiltration UV intégrée pour toute la maison\nIdéal pour : bactéries, turbidité/eau trouble.\nDébit : 18 gpm.", img: uvSystemImg3 },
                                { name: "Arros 15-IHS10", desc: "Système de traitement d'eau UV pour toute la maison\nIdéal pour : bactéries, turbidité/opacité.\nDébit : 15 gpm.", img: uvSystemImg4 }
                            ].map((prod, i) => (
                                <div key={i} className="bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full cursor-pointer group">
                                    <div className="bg-slate-50 aspect-square overflow-hidden flex items-center justify-center p-12">
                                        <img src={prod.img} alt={prod.name} className="w-full h-full object-contain mix-blend-multiply transition-transform duration-700 group-hover:scale-110 drop-shadow-xl" />
                                    </div>
                                    <div className="p-8 text-left border-t-2 border-transparent group-hover:border-blue-600 transition-colors flex flex-col flex-grow">
                                        <h3 className="text-xl font-bold mb-4 group-hover:text-blue-600 transition-colors tracking-tight">{prod.name}</h3>
                                        <p className="text-lg font-light leading-relaxed text-slate-500 mb-6 flex-grow text-justify">{prod.desc}</p>
                                        <div className="mt-auto">
                                            <NavLink to="#" className="text-blue-600 font-bold flex items-center gap-2 group-hover:underline text-xs tracking-widest uppercase">
                                                EN SAVOIR PLUS <ChevronRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 5. Comparison Table */}
                <section className="py-24 bg-white border-t border-slate-50">
                    <div className="container mx-auto px-4">
                        <div className="text-left mb-16">
                            <h2
                                className="text-slate-900 tracking-tighter mb-8 text-left"
                                style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                            >
                                <span className="text-[32px] md:text-[60px] font-light leading-[1.1] md:leading-[60px] block">Comparez nos</span>
                                <span className="text-[32px] md:text-[60px] font-normal leading-[1.1] md:leading-[60px] block">systèmes UV</span>
                            </h2>
                            <div className="w-24 h-1 bg-blue-600"></div>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full min-w-[800px] border-collapse bg-white rounded-2xl overflow-hidden shadow-sm">
                                <thead>
                                    <tr className="bg-gray-100">
                                        <th className="p-8 text-left text-gray-400 font-light uppercase tracking-wider">Fonctionnalités</th>
                                        <th className="p-8 text-center text-blue-600 font-bold">VH200-F10</th>
                                        <th className="p-8 text-center text-blue-600 font-bold bg-blue-50/50">VH410-F20</th>
                                        <th className="p-8 text-center text-blue-600 font-bold bg-blue-50/50">Arros 15-IHS10</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {comparisonData.map((row, i) => (
                                        <tr key={i} className="hover:bg-gray-50 transition-colors">
                                            <td className="p-8 font-light text-gray-700">{row.feature}</td>
                                            <td className="p-8 text-center">
                                                {typeof row.VH200F10 === 'string' ? <span className="text-blue-600 font-bold">{row.VH200F10}</span> : (row.VH200F10 ? <CheckCircle2 className="h-6 w-6 text-blue-600 mx-auto" /> : <X className="h-6 w-6 text-gray-300 mx-auto" />)}
                                            </td>
                                            <td className="p-8 text-center bg-blue-50/20">
                                                {typeof row.VH410F20 === 'string' ? <span className="text-blue-600 font-bold">{row.VH410F20}</span> : (row.VH410F20 ? <CheckCircle2 className="h-6 w-6 text-blue-600 mx-auto" /> : <X className="h-6 w-6 text-gray-300 mx-auto" />)}
                                            </td>
                                            <td className="p-8 text-center bg-blue-50/20">
                                                {typeof row.Arros15IHS10 === 'string' ? <span className="text-blue-600 font-bold">{row.Arros15IHS10}</span> : (row.Arros15IHS10 ? <CheckCircle2 className="h-6 w-6 text-blue-600 mx-auto" /> : <X className="h-6 w-6 text-gray-300 mx-auto" />)}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

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
                                    ANALYSE MICROBIOLOGIQUE
                                </span>
                                <h2
                                    className="text-slate-900 tracking-tighter mb-8 text-left"
                                    style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                                >
                                    <span className="text-[32px] md:text-[60px] font-light leading-[1.1] md:leading-[60px] block text-white">Votre eau est-elle</span>
                                    <span className="text-[32px] md:text-[60px] font-normal leading-[1.1] md:leading-[60px] block text-white">vraiment sécuritaire ?</span>
                                </h2>
                                <p className="text-lg font-light leading-relaxed text-white/90 mb-12 text-justify">
                                    Ne devinez pas la qualité de votre eau. Nos analyses approfondies identifient les bactéries, les minéraux et les contaminants chimiques pour vous offrir une tranquillité d'esprit totale.
                                </p>
                                <Button className="bg-white text-blue-600 hover:bg-blue-50 rounded-full px-12 h-16 text-xl font-bold shadow-xl" asChild>
                                    <NavLink to="/water-testing">Tester mon eau</NavLink>
                                </Button>
                            </div>
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
                                        q: "Qu'est-ce qu'un système de désinfection UV ?",
                                        a: "C'est un dispositif qui utilise la lumière ultraviolette (UV-C) pour neutraliser les micro-organismes nocifs dans l'eau. En pénétrant l'ADN des bactéries et virus, les rayons UV les empêchent de se reproduire et de causer des maladies.",
                                    },
                                    {
                                        q: "Contre quels types de contaminants les UV sont-ils efficaces ?",
                                        a: "Les systèmes UV éliminent 99,99 % des micro-organismes, y compris les bactéries comme E. coli, les virus, et les parasites résistants au chlore comme Giardia et Cryptosporidium.",
                                    },
                                    {
                                        q: "L'eau de puits nécessite-t-elle toujours un système UV ?",
                                        a: "Les puits sont vulnérables aux infiltrations de surface après de fortes pluies ou la fonte des neiges. Un système UV offre une barrière de sécurité permanente contre les variations soudaines de la qualité microbiologique de votre eau.",
                                    },
                                    {
                                        q: "Quels sont les avantages des UV par rapport au chlore ?",
                                        a: "Les UV ne nécessitent aucun produit chimique, ne changent pas le goût ou l'odeur de l'eau, et ne créent pas de sous-produits toxiques. C'est la méthode de désinfection la plus écologique et la plus saine.",
                                    },
                                    {
                                        q: "Pourquoi ai-je besoin d'un système UV si j'ai un adoucisseur ?",
                                        a: "Un adoucisseur élimine les minéraux (calcaire), mais n'élimine pas les bactéries ou les virus. Le système UV est la protection finale qui assure que l'eau que vous buvez ne contient aucun micro-organisme vivant.",
                                    },
                                    {
                                        q: "À quelle fréquence faut-il changer la lampe UV ?",
                                        a: "La lampe UV doit être remplacée tous les 12 mois (environ 9 000 heures). Même si elle s'allume encore, son intensité germicide diminue drastiquement après un an et ne garantit plus la désinfection.",
                                    },
                                    {
                                        q: "Qu'est-ce que le fourreau de quartz et comment l'entretenir ?",
                                        a: "Le fourreau de quartz est le tube transparent qui protège la lampe de l'eau. Il doit être nettoyé régulièrement pour rester limpide. S'il est entartré ou opaque (à cause du calcaire), les rayons UV ne peuvent plus traverser pour désinfecter l'eau.",
                                    },
                                    {
                                        q: "Une filtration préalable est-elle nécessaire avant l'UV ?",
                                        a: "Oui, il est crucial d'installer un filtre à sédiments de 5 microns en amont. Les particules en suspension peuvent créer des zones d'ombre où les bactéries se 'cachent' du rayonnement UV.",
                                    },
                                    {
                                        q: "Le système UV fonctionne-t-il lors d'une panne de courant ?",
                                        a: "Non, la lampe s'éteint sans électricité. En cas de panne, il ne faut pas consommer l'eau ou alors il faut la faire bouillir. Nos systèmes sont souvent équipés d'alarmes pour avertir de l'arrêt de la lampe.",
                                    },
                                    {
                                        q: "L'UV consomme-t-il beaucoup d'électricité ?",
                                        a: "Non, un système résidentiel standard consomme à peu près autant d'énergie qu'une ampoule de 40 à 60 watts. C'est une solution très économique pour une protection 24h/24.",
                                    },
                                    {
                                        q: "Peut-on installer un système UV sur l'entrée d'eau de la ville ?",
                                        a: "Bien que l'eau municipale soit traitée, de vieilles infrastructures ou des bris d'aqueduc peuvent introduire des bactéries. Un système UV domestique sert d'assurance supplémentaire pour votre tranquillité d'esprit.",
                                    },
                                    {
                                        q: "Comment savoir si mon système UV fonctionne correctement ?",
                                        a: "Nos contrôleurs intelligents affichent le nombre de jours restants avant le changement de lampe et émettent une alarme sonore et visuelle en cas de défaillance de la lampe ou du système.",
                                    },
                                    {
                                        q: "La chaleur de la lampe affecte-t-elle l'eau ?",
                                        a: "Si l'eau ne circule pas pendant plusieurs heures, l'eau à l'intérieur de la chambre d'acier inoxydable peut devenir tiède. Il suffit de laisser couler l'eau quelques secondes pour retrouver une eau fraîche.",
                                    },
                                    {
                                        q: "Quelle est la garantie sur les systèmes UV Bricareau ?",
                                        a: "Nos systèmes sont couverts par une garantie robuste sur la chambre de traitement en acier inoxydable (souvent 10 ans) et sur les composantes électriques et électroniques.",
                                    },
                                    {
                                        q: "Dois-je faire tester mon eau après l'installation ?",
                                        a: "Oui, nous recommandons toujours un test bactériologique professionnel après l'installation et une désinfection initiale de la tuyauterie pour confirmer que tout le réseau domestique est sain.",
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

                {/* 9. Resources Section */}
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
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Comment fonctionne la désinfection UV ?",
                                    img: "https://images.unsplash.com/photo-1542013936693-884638332954?q=80&w=800&auto=format&fit=crop"
                                },
                                {
                                    title: "UV vs Chlore : Le comparatif santé",
                                    img: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=800&auto=format&fit=crop"
                                },
                                {
                                    title: "Maintenir votre lampe UV efficace",
                                    img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop"
                                }
                            ].map((art, i) => (
                                <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer group flex flex-col h-full border border-gray-100">
                                    <div className="h-56 overflow-hidden">
                                        <img src={art.img} alt={art.title} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                                    </div>
                                    <div className="p-8 text-left border-t-2 border-transparent group-hover:border-blue-600 transition-colors flex flex-col flex-grow">
                                        <h4 className="text-xl font-bold mb-4 group-hover:text-blue-600 transition-colors uppercase tracking-tight">{art.title}</h4>
                                        <div className="mt-auto">
                                            <NavLink to="#" className="text-blue-600 font-bold flex items-center gap-2 group-hover:underline text-xs tracking-widest uppercase">
                                                EN SAVOIR PLUS <ChevronRight className="h-4 w-4" />
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 10. Contact Form Section */}
                <section id="consultation" className="py-24 bg-white border-t border-gray-100">
                    <div className="container mx-auto px-4">
                        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-20">
                            <div className="lg:w-1/3 text-left">
                                <h2
                                    className="text-slate-900 tracking-tighter mb-8 italic text-left"
                                    style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                                >
                                    <span className="text-[32px] md:text-[60px] font-light leading-[1.1] md:leading-[60px] block">Protégez votre</span>
                                    <span className="text-[32px] md:text-[60px] font-normal leading-[1.1] md:leading-[60px] block">foyer dès aujourd'hui</span>
                                </h2>
                                <p className="font-light text-[20px] leading-[28px] text-gray-600 mb-8 text-justify">
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

export default DesinfectionUV;
