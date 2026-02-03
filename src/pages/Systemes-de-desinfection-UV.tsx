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
    ShieldAlert
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
import waterTestBg from "@/assets/Finishes_website_700x700_px_Flex_Gunmetal_20.jpg";

const DesinfectionUV = () => {
    const comparisonData = [
        { feature: "Élimination 99.99% des virus", premium: true, standard: true },
        { feature: "Destruction des bactéries", premium: true, standard: true },
        { feature: "Neutralisation des kystes", premium: true, standard: true },
        { feature: "Alarme de remplacement de lampe", premium: true, standard: "Option" },
        { feature: "Capteur d'intensité UV", premium: true, standard: false },
        { feature: "Garantie à vie sur la chambre", premium: true, standard: true },
    ];

    return (
        <div className="min-h-screen bg-background text-slate-900 font-sans">
            <Header />
            <main>
                {/* Hero Section */}
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
                            <p className="font-light text-[20px] leading-[28px] text-white/95 mb-8 max-w-xl">
                                Éliminez 99,99% des virus, bactéries et kystes sans ajouter de produits chimiques à votre eau. Une protection invisible pour une sécurité totale.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button
                                    size="lg"
                                    className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 h-14"
                                    style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                                    asChild
                                >
                                    <NavLink to="/contact">
                                        Explorez nos systèmes UV
                                    </NavLink>
                                </Button>
                                <Button
                                    size="lg"
                                    className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 h-14"
                                    style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                                    asChild
                                >
                                    <NavLink to="/contact">
                                        Demandez une analyse d'eau
                                    </NavLink>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. Pourquoi choisir - Blue Section (Merged with Avantages) */}
                <section className="py-24 bg-blue-600 text-white">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-[32px] md:text-[48px] font-normal text-white mb-8 leading-[1.2] md:leading-[48px] tracking-tighter text-center">
                                Pourquoi choisir la désinfection UV ?
                            </h2>
                            <p className="text-blue-100 max-w-2xl mx-auto text-lg">
                                La méthode la plus efficace et la plus écologique pour désinfecter votre eau potable tout en offrant une protection permanente.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
                            {[
                                { icon: ShieldCheck, title: "Sans produits chimiques", desc: "Aucun goût ni odeur de chlore ajouté à votre eau." },
                                { icon: Zap, title: "Action instantanée", desc: "L'eau est désinfectée dès qu'elle traverse le débit." },
                                { icon: Activity, title: "Efficacité prouvée", desc: "Détruit l'ADN des micro-organismes nocifs." },
                                { icon: ShieldCheck, title: "Sécurité 100%", desc: "Protection permanente 24h/24 contre les bactéries." },
                                { icon: ZapOff, title: "Faible énergie", desc: "Consomme autant qu'une ampoule standard." },
                                { icon: Droplets, title: "Eau cristalline", desc: "Conserve les minéraux essentiels de votre eau." },
                                { icon: ShieldAlert, title: "Zéro risque", desc: "Pas de stockage de produits chimiques dangereux." }
                            ].map((item, i) => (
                                <div key={i} className="flex flex-col items-center group">
                                    <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center mb-8 transition-all group-hover:scale-110 group-hover:bg-white/10">
                                        <item.icon className="h-10 w-10 text-blue-600 group-hover:text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4 tracking-tight">{item.title}</h3>
                                    <p className="text-blue-100 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 3. Systèmes UV - Product Grid */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="text-left mb-16">
                            <h2 className="text-[32px] md:text-[48px] font-normal text-slate-900 mb-8 leading-[1.2] md:leading-[48px] tracking-tighter text-left">
                                Nos systèmes de <br />désinfection UV
                            </h2>
                            <div className="w-24 h-1 bg-blue-600"></div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-left">
                            {[
                                { name: "VH200-F10", desc: "Préfiltration UV intégrée pour toute la maison\nIdéal pour : bactéries, turbidité/opacité.\nDébit : 9 gpm.", img: uvSystemImg2 },
                                { name: "VH410-F20", desc: "Préfiltration UV intégrée pour toute la maison\nIdéal pour : bactéries, turbidité/eau trouble.\nDébit : 18 gpm.", img: uvSystemImg3 },
                                { name: "Arros 15-IHS10", desc: "Système de traitement d'eau UV pour toute la maison\nIdéal pour : bactéries, turbidité/opacité.\nDébit : 15 gpm (56,8 l/min) 3,41 m³/h.", img: uvSystemImg4 }
                            ].map((product, i) => (
                                <div key={i} className="group cursor-pointer">
                                    <div className="bg-slate-50 aspect-video rounded-3xl mb-6 overflow-hidden flex items-center justify-center p-8 transition-all group-hover:shadow-xl group-hover:bg-white group-hover:-translate-y-2">
                                        <img src={product.img} alt={product.name} className="w-full h-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-110" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors uppercase tracking-tight">{product.name}</h3>
                                    <p className="text-slate-500 text-sm leading-relaxed mb-4 whitespace-pre-line">{product.desc}</p>
                                    <NavLink to="#" className="text-blue-600 font-bold flex items-center gap-2 text-sm tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-all">
                                        EN SAVOIR PLUS <ChevronRight className="h-4 w-4" />
                                    </NavLink>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 5. Comparison Table */}
                <section className="py-24 bg-white border-t border-slate-50">
                    <div className="container mx-auto px-4">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-slate-900 mb-8 leading-[1.1] tracking-tighter text-center">
                            Comparez nos systèmes UV.
                        </h2>
                        <div className="overflow-x-auto">
                            <table className="w-full min-w-[800px] border-collapse bg-white rounded-2xl overflow-hidden shadow-sm">
                                <thead>
                                    <tr className="bg-gray-100">
                                        <th className="p-8 text-left text-gray-400 font-medium uppercase tracking-wider">Fonctionnalités</th>
                                        <th className="p-8 text-center text-gray-900 font-bold">Standard</th>
                                        <th className="p-8 text-center text-blue-600 font-bold bg-blue-50/50">UV Pro Series</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {comparisonData.map((row, i) => (
                                        <tr key={i} className="hover:bg-gray-50 transition-colors">
                                            <td className="p-8 font-medium text-gray-700">{row.feature}</td>
                                            <td className="p-8 text-center">
                                                {typeof row.standard === 'string' ? <span className="text-slate-500 font-bold">{row.standard}</span> : (row.standard ? <CheckCircle2 className="h-6 w-6 text-slate-400 mx-auto" /> : <X className="h-6 w-6 text-gray-200 mx-auto" />)}
                                            </td>
                                            <td className="p-8 text-center bg-blue-50/20">
                                                {row.premium ? <CheckCircle2 className="h-6 w-6 text-blue-600 mx-auto" /> : <X className="h-6 w-6 text-gray-300 mx-auto" />}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* 6. Expertise Section (Blue Box Design) */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col lg:flex-row items-stretch gap-0 rounded-[3rem] overflow-hidden shadow-2xl">
                            <div className="lg:w-1/2 relative min-h-[400px]">
                                <img src={waterTestBg} alt="Analyse d'eau" className="absolute inset-0 w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-blue-900/10" />
                            </div>
                            <div className="lg:w-1/2 bg-blue-600 text-white p-12 lg:p-20 flex flex-col justify-center items-start text-left">
                                <span className="text-white/80 text-xs font-black uppercase tracking-[0.3em] mb-8 block">
                                    ANALYSE MICROBIENNE
                                </span>
                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-8 leading-[1.1] tracking-tighter text-left">
                                    Votre eau est-elle <br /> vraiment sécuritaire ?
                                </h2>
                                <p className="text-white/90 text-lg font-medium mb-12 leading-relaxed">
                                    Contrairement aux minéraux, les bactéries et virus ne se voient pas et n'ont pas de goût. Une analyse microbiologique est le seul moyen de garantir la potabilité de votre eau, surtout pour les puits privés.
                                </p>
                                <Button className="bg-white text-blue-600 hover:bg-blue-50 rounded-full px-12 h-16 text-xl font-bold shadow-xl">
                                    Testez mon eau
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 7. Testimonials Section */}
                <TestimonialsSection />

                {/* 8. FAQ Section */}
                <section className="py-24 bg-white border-t border-slate-100">
                    <div className="container mx-auto px-6 max-w-4xl text-left">
                        <div className="text-center mb-16">
                            <h2 className="text-[32px] md:text-[48px] font-normal text-slate-900 mb-8 leading-[1.2] md:leading-[48px] tracking-tighter text-center">
                                Questions fréquentes
                            </h2>
                        </div>
                        <Accordion type="single" collapsible className="w-full">
                            {[
                                {
                                    q: "Pourquoi ai-je besoin d'un système UV si j'ai un adoucisseur ?",
                                    a: "Un adoucisseur élimine les minéraux (calcaire), mais n'élimine pas les bactéries ou les virus. Le système UV est la protection finale qui assure que l'eau que vous buvez ne contient aucun micro-organisme vivant.",
                                },
                                {
                                    q: "À quelle fréquence faut-il changer la lampe ?",
                                    a: "La lampe UV doit être remplacée tous les 12 mois (environ 9000 heures de fonctionnement). Même si elle s'allume encore, son intensité germicide diminue avec le temps.",
                                },
                                {
                                    q: "Le système fonctionne-t-il lors d'une panne de courant ?",
                                    a: "Non, la lampe UV a besoin d'électricité pour fonctionner. En cas de panne prolongée, il est recommandé de faire bouillir l'eau jusqu'à ce que le système redémarre et que les conduites soient rincées.",
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
                </section>

                {/* 9. Consultation Form Section */}
                <section className="py-24 bg-white border-t border-gray-100">
                    <div className="container mx-auto px-4">
                        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-20">
                            <div className="lg:w-1/3 text-left">
                                <h2 className="text-[32px] md:text-[48px] font-normal text-slate-900 mb-8 leading-[1.2] md:leading-[48px] tracking-tighter italic">
                                    Protégez votre foyer dès aujourd'hui
                                </h2>
                                <p className="font-light text-[20px] leading-[28px] text-gray-600 mb-8">
                                    Remplissez le formulaire ci-dessous pour organiser une visite d'un de nos experts de l'eau et évaluer vos besoins en désinfection microbiologique.
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
