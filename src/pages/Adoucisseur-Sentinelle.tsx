import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
    CheckCircle2, 
    Droplets, 
    Zap, 
    ShieldCheck, 
    ArrowRight, 
    ChevronRight, 
    Wifi, 
    Sparkles, 
    HandCoins, 
    CloudRain, 
    Waves,
    Info,
    Smartphone,
    Activity,
    Settings,
    Timer,
    Check,
    Brain
} from "lucide-react";
import { cn } from "@/lib/utils";
import ExpertAvatars from "@/components/ExpertAvatars";
import sentinelImg from "@/assets/Sentinelle Water Softener.png";
import heroBg from "@/assets/2150084031.jpg"; // Using a high-quality water/home background
import { motion, AnimatePresence } from "framer-motion";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from "@/components/ui/accordion";
import { Star, StarHalf } from "lucide-react";

const AdoucisseurSentinelle = () => {
    const [scrolled, setScrolled] = useState(false);
    const [activeTab, setActiveTab] = useState("benefits");

    useEffect(() => {
        document.title = "Adoucisseur Série Sentinelle - Haute Précision | Bricareau";
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const features = [
        {
            title: "Régénération Intelligente",
            desc: "Calcul automatique des cycles basé sur votre consommation réelle pour 50% d'économie en sel.",
            icon: Activity,
            color: "text-blue-600",
            bg: "bg-blue-50"
        },
        {
            title: "Technologie 'Sentinelle'",
            desc: "Surveillance 24/7 du débit et des paramètres pour une performance constante.",
            icon: ShieldCheck,
            color: "text-emerald-600",
            bg: "bg-emerald-50"
        },
        {
            title: "Compact & Élégant",
            desc: "Format optimisé pour s'intégrer discrètement dans votre sous-sol ou placard technique.",
            icon: Settings,
            color: "text-amber-600",
            bg: "bg-amber-50"
        },
        {
            title: "Mémoire Permanente",
            desc: "Sauvegarde automatique de vos réglages. Le système conserve sa programmation même après une panne de courant prolongée.",
            icon: Brain,
            color: "text-indigo-600",
            bg: "bg-indigo-50"
        }
    ];

    const [selectedModel, setSelectedModel] = useState("SEN-1044");

    const models = {
        "SEN-844": { resin: "0.75 Cu. Ft.", service_flow: "11.7 GPM", peak_flow: "16.5 GPM", capacity: "20,000 grains", dim: "8\" x 44\"", brine: "15\" x 17\" x 36\"", Power: "120V/60Hz" },
        "SEN-948": { resin: "1.0 Cu. Ft.", service_flow: "13.1 GPM", peak_flow: "18.5 GPM", capacity: "30,000 grains", dim: "9\" x 48\"", brine: "15\" x 17\" x 36\"", Power: "120V/60Hz" },
        "SEN-1044": { resin: "1.25 Cu. Ft.", service_flow: "16.0 GPM", peak_flow: "22.0 GPM", capacity: "40,000 grains", dim: "10\" x 44\"", brine: "15\" x 17\" x 36\"", Power: "120V/60Hz" },
        "SEN-1054": { resin: "1.5 Cu. Ft.", service_flow: "13.3 GPM", peak_flow: "18.5 GPM", capacity: "50,000 grains", dim: "10\" x 54\"", brine: "15\" x 17\" x 36\"", Power: "120V/60Hz" },
        "SEN-1252": { resin: "2.0 Cu. Ft.", service_flow: "16.4 GPM", peak_flow: "23.0 GPM", capacity: "60,000 grains", dim: "12\" x 52\"", brine: "18\" x 40\"", Power: "120V/60Hz" },
        "SEN-1354": { resin: "2.5 Cu. Ft.", service_flow: "17.1 GPM", peak_flow: "24.0 GPM", capacity: "75,000 grains", dim: "13\" x 54\"", brine: "18\" x 40\"", Power: "120V/60Hz" }
    };

    const currentModel = models[selectedModel];

    const specs = [
        { label: "Modèle Sélectionné", value: selectedModel },
        { label: "Débit de service", value: currentModel.service_flow },
        { label: "Débit de pointe", value: currentModel.peak_flow },
        { label: "Volume du média", value: currentModel.resin },
        { label: "Capacité (Maximum)", value: currentModel.capacity },
        { label: "Dim. Réservoir", value: currentModel.dim },
        { label: "Dim. Bac à sel", value: currentModel.brine },
        { label: "Alimentation électrique", value: currentModel.Power },
        { label: "Raccordement entrée/sortie", value: "3/4\" ou 1\"" },
        { label: "Raccordement au drain", value: "3/4\"" },
    ];

    return (
        <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">
            <Header />

            {/* 1. HERO SECTION - ULTRA PREMIUM */}
            <section className="relative lg:h-[800px] flex flex-col justify-center overflow-hidden bg-slate-50 py-20 lg:py-0">
                {/* Background Decor */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50/50 to-transparent pointer-events-none" />
                <div className="absolute -top-24 -right-24 w-[600px] h-[600px] bg-blue-100/30 rounded-full blur-[120px] pointer-events-none" />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Text Content */}
                        <div className="space-y-8 max-w-2xl">

                            
                            <h1 className="text-[32px] md:text-[46px] lg:text-[50px] font-light leading-[1.1] tracking-tight text-slate-900">
                                L'Excellence de la <br />
                                <span className="font-bold italic font-serif text-blue-600">Douceur Intelligente.</span>
                            </h1>

                            <p className="text-xl text-slate-600 font-light leading-relaxed max-w-lg">
                                Plus qu'un simple adoucisseur, la Série Sentinelle est votre bouclier technologique contre le calcaire. Performance, élégance et économies réunies dans un format compact.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <Button asChild size="lg" className="h-14 px-10 rounded-full text-lg shadow-xl shadow-blue-200 hover:shadow-2xl transition-all group">
                                    <a href="#decouvrir">
                                        Voir les détails
                                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                    </a>
                                </Button>
                                <Button asChild size="lg" className="h-14 px-10 rounded-full text-lg border-2 border-blue-600 text-blue-600 bg-transparent hover:bg-blue-600 hover:text-white transition-all">
                                    <a href="/consultation">Analyse gratuite</a>
                                </Button>
                            </div>

                            <div className="pt-10 flex items-center gap-6">
                                <ExpertAvatars />
                                <div className="text-sm text-slate-500 font-medium">
                                    Recommandé par nos clients pour sa <br />
                                    <span className="text-blue-600 font-bold uppercase tracking-tighter italic">longévité supérieure</span>
                                </div>
                            </div>
                        </div>

                        {/* Product Image */}
                        <div className="relative group perspective-1000">
                            <div className="absolute inset-0 bg-blue-400/10 blur-[100px] rounded-full group-hover:bg-blue-400/20 transition-all duration-1000" />
                            <motion.div 
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, ease: "easeOut" }}
                                className="relative z-10"
                            >
                                <img 
                                    src={sentinelImg} 
                                    alt="Adoucisseur Série Sentinelle - Design Premium Bricareau" 
                                    className="w-full max-w-[500px] mx-auto filter drop-shadow-[0_50px_50px_rgba(0,0,0,0.1)] group-hover:scale-105 transition-transform duration-700"
                                />
                                

                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. PRODUCT DETAILS & FEATURES - Expanded Section */}
            <section id="decouvrir" className="py-24 bg-white relative overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">
                        <div className="space-y-8">
                            <div className="inline-block py-1 px-3 rounded-md bg-blue-50 text-blue-600 font-bold text-xs uppercase tracking-widest">Détails du produit</div>
                            <h2 className="text-4xl font-bold tracking-tight text-slate-900 leading-tight">
                                Une technologie conçue pour <br />
                                <span className="text-blue-600">durer des décennies.</span>
                            </h2>
                            <p className="text-lg text-slate-600 font-light leading-relaxed">
                                L'adoucisseur Série Sentinelle n'est pas un simple appareil domestique ; c'est un investissement dans la santé de votre maison. Sa vanne intelligente mesure votre consommation d'eau au litre près, évitant les régénérations inutiles et prolongeant la vie de la résine de haute performance.
                            </p>
                            <div className="grid sm:grid-cols-2 gap-6">
                                {[
                                    { t: "Vanne électronique", d: "Technologie de dernière génération pour un contrôle ultra-précis." },
                                    { t: "Résine Haute Performance", d: "Résine à haute efficacité pour une capacité d'échange optimale." },
                                    { t: "Vanne Bypass Pro", d: "Permet d'isoler le système en un seul geste." },
                                    { t: "Bac à sel renforcé", d: "Empêche la formation de condensation pour garder votre sol propre et sec." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
                                            <Check className="w-3 h-3 text-blue-600" />
                                        </div>
                                        <div>
                                            <div className="font-bold text-slate-900 text-sm">{item.t}</div>
                                            <div className="text-xs text-slate-500 font-light mt-1">{item.d}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-slate-50 rounded-[3rem] p-12 lg:p-16 border border-slate-100 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/5 rounded-full -mr-20 -mt-20 blur-3xl group-hover:bg-blue-400/10 transition-colors" />
                            <h3 className="text-2xl font-bold mb-8 uppercase tracking-tighter">Caractéristiques de pointe</h3>
                            <div className="space-y-8">
                                {features.map((f, i) => (
                                    <div key={i} className="flex items-start gap-6">
                                        <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-500 group-hover:scale-110", f.bg, f.color)}>
                                            <f.icon className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 text-lg uppercase tracking-tight">{f.title}</h4>
                                            <p className="text-slate-500 font-light text-sm mt-1">{f.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>


                </div>
            </section>

            {/* 3. LIFESTYLE SECTION - Full Width Visual */}
            <section className="relative h-[600px] lg:h-[800px] overflow-hidden flex items-center">
                <img 
                    src={heroBg} 
                    alt="Vie quotidienne avec eau adoucie" 
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-blue-900/40 backdrop-blur-[2px]" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-900/60 to-transparent" />
                
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-2xl text-white space-y-8">
                        <div className="w-20 h-1 bg-blue-400" />
                        <h2 className="text-5xl lg:text-6xl font-black italic tracking-tighter leading-[1.05]">
                            PROTECTION <br />
                            TOTALE. <br />
                            <span className="text-blue-300">CONFORT ABSOLU.</span>
                        </h2>
                        <ul className="space-y-4">
                            {[
                                "Peau et cheveux d'une douceur incroyable",
                                "Vaisselle étincelante sans traces de calcaire",
                                "Protection de vos électroménagers haut de gamme",
                                "Réduction immédiate de l'utilisation de savon"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-lg font-light">
                                    <CheckCircle2 className="text-blue-400 h-6 w-6" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <div className="pt-6">
                            <Button asChild size="lg" className="rounded-full bg-white text-blue-900 hover:bg-blue-50 h-14 px-10">
                                <a href="/contact">Demander un prix</a>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. TECHNICAL SPECS - High-End Laboratory Design */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                            {/* Visual Side */}
                            <div className="lg:w-1/2 relative">
                                <div className="absolute inset-0 bg-blue-100/50 rounded-full blur-[100px] -z-10" />
                                <motion.div 
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    className="relative flex justify-center"
                                >
                                    <img 
                                        src={sentinelImg} 
                                        alt="Détails techniques Sentinelle" 
                                        className="max-h-[500px] object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
                                    />
                                    
                                </motion.div>
                            </div>

                            {/* Data Side */}
                            <div className="lg:w-1/2 space-y-10">
                                <div className="space-y-4">
                                    <div className="inline-block py-1 px-3 rounded-md bg-blue-600 text-white font-bold text-[10px] uppercase tracking-[0.2em]">Fiche Technique</div>
                                    <h2 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tighter uppercase leading-none italic">
                                        Spécifications <br />
                                        <span className="text-blue-600">Techniques.</span>
                                    </h2>
                                    
                                    {/* Model Switcher */}
                                    <div className="flex flex-wrap gap-2 pt-4">
                                        {Object.keys(models).map((m) => (
                                            <button
                                                key={m}
                                                onClick={() => setSelectedModel(m)}
                                                className={cn(
                                                    "px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all",
                                                    selectedModel === m 
                                                        ? "bg-blue-600 text-white shadow-lg shadow-blue-200" 
                                                        : "bg-slate-100 text-slate-400 hover:bg-slate-200"
                                                )}
                                            >
                                                {m}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 gap-3">
                                    {specs.map((s, i) => (
                                        <div 
                                            key={i} 
                                            className="group flex items-center justify-between p-5 rounded-2xl bg-slate-50 border border-slate-100 transition-all hover:bg-white hover:shadow-xl hover:border-blue-200"
                                        >
                                            <div className="flex items-center gap-4">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-600 opacity-20 group-hover:opacity-100 transition-opacity" />
                                                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{s.label}</span>
                                            </div>
                                            <span className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{s.value}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="pt-6 flex flex-wrap gap-10">
                                    <div className="flex items-center gap-3 text-sm font-bold text-slate-400">
                                        <CheckCircle2 className="w-5 h-5 text-blue-600" />
                                        CERTIFIÉ NSF/ANSI 44
                                    </div>
                                    <div className="flex items-center gap-3 text-sm font-bold text-slate-400">
                                        <CheckCircle2 className="w-5 h-5 text-blue-600" />
                                        GARANTIE 10 ANS
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. INSTALLATION & MAINTENANCE */}
            <section className="py-24 bg-slate-50 relative overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-8 order-2 lg:order-1">
                            <div className="inline-block py-1 px-3 rounded-md bg-blue-100 text-blue-700 font-bold text-xs uppercase tracking-widest">Installation et maintenance</div>
                            <h2 className="text-4xl font-bold text-slate-900 tracking-tight leading-tight">Installation certifiée, <br /> <span className="text-blue-600 italic">Entretien simplifié.</span></h2>
                            
                            <div className="space-y-6">
                                {[
                                    { t: "Installation en 2h", d: "Nos techniciens certifiés Bricareau effectuent une installation propre et conforme aux normes de plomberie du Québec.", icon: Timer },
                                    { t: "Entretien Minimal", d: "Ajoutez simplement du sel une fois par mois. Aucun changement de filtre requis pour la Série Sentinelle.", icon: Settings },
                                    { t: "Suivi Annuel", d: "Nous recommandons un test d'eau annuel gratuit pour s'assurer que les réglages sont toujours optimaux.", icon: Activity }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-6 p-6 rounded-2xl bg-white border border-slate-100 shadow-sm">
                                        <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0 text-blue-600">
                                            <item.icon className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 uppercase tracking-tight">{item.t}</h4>
                                            <p className="text-slate-500 text-sm font-light mt-1">{item.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="order-1 lg:order-2 space-y-10">
                            <div className="p-8 rounded-[2.5rem] bg-blue-600 text-white space-y-6 relative overflow-hidden">
                                <Waves className="absolute -top-10 -right-10 w-40 h-40 text-white/5" />
                                <h3 className="text-2xl font-bold italic tracking-tight uppercase">Plan de Maintenance Sérénité</h3>
                                <p className="text-blue-100 font-light leading-relaxed">
                                    Abonnez-vous à notre service de livraison de sel et profitez d'une extension de garantie illimitée sur toutes les pièces et la main-d’œuvre.
                                </p>
                                <Button className="bg-white text-blue-600 hover:bg-blue-50 rounded-full h-12 px-8 font-bold">Découvrir le plan</Button>
                            </div>
                            <div className="grid grid-cols-2 gap-6 text-center">
                                <div className="p-6 rounded-3xl bg-white border border-slate-100">
                                    <div className="text-3xl font-black text-slate-900">2h</div>
                                    <div className="text-[10px] text-slate-400 font-black uppercase mt-1 tracking-widest">INSTALLATION</div>
                                </div>
                                <div className="p-6 rounded-3xl bg-white border border-slate-100">
                                    <div className="text-3xl font-black text-slate-900">20 ans</div>
                                    <div className="text-[10px] text-slate-400 font-black uppercase mt-1 tracking-widest">DURABILITÉ</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. QUESTIONS ET RÉPONSES (FAQ) */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="text-center mb-16 space-y-4">
                        <div className="inline-block py-1 px-3 rounded-md bg-slate-100 text-slate-600 font-bold text-xs uppercase tracking-widest">Questions et réponses</div>
                        <h2 className="text-4xl font-bold text-slate-900">Tout ce que vous devez <span className="text-blue-600 italic">savoir.</span></h2>
                    </div>

                    <Accordion type="single" collapsible className="space-y-4">
                        {[
                            { q: "Quelle est la différence entre la Série Sentinelle et un adoucisseur standard ?", a: "La Série Sentinelle utilise une régénération volumétrique intelligente intégrée à un microprocesseur. Elle ne se régénère que lorsqu'un volume précis d'eau a été utilisé, économisant jusqu'à 50% de sel et d'eau par rapport aux systèmes chronométriques classiques." },
                            { q: "L'installation est-elle comprise dans le prix ?", a: "Oui, toutes nos soumissions incluent l'installation professionnelle certifiée, le raccordement à votre plomberie existante, la mise en service et une formation sur l'utilisation du système." },
                            { q: "Puis-je boire l'eau traitée par la Série Sentinelle ?", a: "Absolument. Elle est parfaitement potable. Pour un goût encore plus pur, nous recommandons souvent de coupler votre adoucisseur avec un système d'osmose inverse sous votre évier de cuisine." },
                            { q: "Est-ce que le système fait du bruit ?", a: "En mode normal, le système est parfaitement silencieux. Vous n'entendrez un léger bruit d'eau que pendant la régénération, qui dure environ 90 minutes et est programmée automatiquement la nuit (généralement à 2h du matin)." }
                        ].map((item, i) => (
                            <AccordionItem key={i} value={`item-${i}`} className="border rounded-2xl px-6 py-2 bg-slate-50/50 hover:bg-white hover:shadow-lg transition-all border-slate-100">
                                <AccordionTrigger className="text-lg font-bold text-slate-900 hover:no-underline text-left uppercase tracking-tight py-4">
                                    {item.q}
                                </AccordionTrigger>
                                <AccordionContent className="text-slate-500 font-light leading-relaxed text-base pt-2 pb-6">
                                    {item.a}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            {/* 7. ÉVALUATION ET AVIS */}
            <section className="py-24 bg-slate-50 relative overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-16 items-start">
                        <div className="lg:w-1/3 space-y-8 lg:sticky lg:top-32">
                            <div className="inline-block py-1 px-3 rounded-md bg-amber-50 text-amber-600 font-bold text-xs uppercase tracking-widest">Évaluation et avis</div>
                            <h2 className="text-4xl font-bold text-slate-900 tracking-tight leading-tight">Ce que disent <br /> <span className="text-blue-600 italic">nos clients.</span></h2>
                            <div className="space-y-2">
                                <div className="text-6xl font-black text-slate-900">4.9<span className="text-2xl text-slate-400">/5</span></div>
                                <div className="flex text-amber-500">
                                    {[1,2,3,4,5].map(i => <Star key={i} className="w-6 h-6 fill-current" />)}
                                </div>
                                <div className="text-slate-500 text-sm font-light">Basé sur 128 avis vérifiés</div>
                            </div>
                            <Button className="w-fit px-12 h-14 rounded-full bg-blue-600 text-white hover:bg-white hover:text-blue-600 hover:border-blue-600 border border-transparent font-bold uppercase tracking-widest text-xs shadow-lg shadow-blue-200 transition-all hover:scale-[1.02]">Laisser un avis</Button>
                        </div>
                        
                        <div className="lg:w-2/3 grid sm:grid-cols-2 gap-8">
                            {[
                                { name: "Jean-François L.", city: "Laval", date: "Janvier 2024", text: "Installer la Série Sentinelle a été la meilleure décision pour notre nouvelle maison. Plus aucune trace de calcaire dans la douche et nos verres ressortent étincelants du lave-vaisselle.", rating: 5 },
                                { name: "Sophie M.", city: "Blainville", date: "Décembre 2023", text: "Excellent service d'installation. Le système est très compact et s'est glissé parfaitement à côté de notre chauffe-eau. L'eau est d'une douceur incroyable pour la peau.", rating: 5 },
                                { name: "Robert T.", city: "Terrebonne", date: "Novembre 2023", text: "On sent vraiment la différence au niveau des économies de savon. Le technicien a pris le temps de tout m'expliquer. Très satisfait de mon achat.", rating: 5 },
                                { name: "Mélanie P.", city: "Brossard", date: "Octobre 2023", text: "Design super moderne et technologie efficace. J'adore les notifications de sel sur mon cellulaire, c'est très pratique pour ne pas oublier.", rating: 5 }
                            ].map((review, i) => (
                                <div key={i} className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="flex text-amber-500 mb-4">
                                        {[...Array(review.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                                    </div>
                                    <p className="text-slate-600 font-light italic mb-6 leading-relaxed">"{review.text}"</p>
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-400">{review.name[0]}</div>
                                        <div>
                                            <div className="text-sm font-bold text-slate-900">{review.name}</div>
                                            <div className="text-[10px] text-slate-400 font-medium uppercase tracking-widest">{review.city} • {review.date}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default AdoucisseurSentinelle;
