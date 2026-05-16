import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import GlobalBreadcrumbs from "@/components/GlobalBreadcrumbs";
import { ProMaxButton } from "@/components/ui/ProMaxButton";
import { Button } from "@/components/ui/button";
import { 
    CheckCircle2, 
    Droplets, 
    ArrowRight, 
    Activity
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



    const [selectedModel, setSelectedModel] = useState("SEN-40K");

    const models = {
        "SEN-32K": { capacity: "32,000 grains", resin: "1.00 pi³", service_flow: "9 GPM", tank: "9\" x 48\"", backwash: "2.2 GPM", weight: "98 lbs" },
        "SEN-40K": { capacity: "40,000 grains", resin: "1.25 pi³", service_flow: "10 GPM", tank: "10\" x 44\"", backwash: "2.7 GPM", weight: "111 lbs" },
        "SEN-48K": { capacity: "48,000 grains", resin: "1.50 pi³", service_flow: "12 GPM", tank: "10\" x 54\"", backwash: "2.7 GPM", weight: "124 lbs" },
        "SEN-64K": { capacity: "64,000 grains", resin: "2.00 pi³", service_flow: "13 GPM", tank: "12\" x 48\"", backwash: "3.2 GPM", weight: "152 lbs" },
        "SEN-80K": { capacity: "80,000 grains", resin: "2.50 pi³", service_flow: "18 GPM", tank: "13\" x 54\"", backwash: "4.2 GPM", weight: "219 lbs" }
    };

    const currentModel = models[selectedModel];

    const specs = [
        { label: "Modèle Sélectionné", value: selectedModel },
        { label: "Capacité en grains", value: currentModel.capacity },
        { label: "Volume de résine", value: currentModel.resin },
        { label: "Débit de service", value: currentModel.service_flow },
        { label: "Débit de lavage (Backwash)", value: currentModel.backwash },
        { label: "Dimensions du réservoir", value: currentModel.tank },
        { label: "Raccordement", value: "1\" High Flow" },
        { label: "Poids approximatif", value: currentModel.weight },
        { label: "Alimentation électrique", value: "120V/60Hz" },
        { label: "Pression de service", value: "20-125 psi" },
        { label: "Température d'opération", value: "2°C - 43°C" },
        { label: "Type de vanne", value: "Série Signature" },
   ];

    return (
        <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">
            <Header />

            {/* 1. HERO SECTION */}
            <Hero 
                image={heroBg}
                highlightedTitle="L'Excellence de la,"
                mainTitle="Douceur Intelligente."
                subtitle="Une eau douce de qualité supérieure que vous ressentez à chaque douche et dans la douceur de votre serviette. La Série Sentinelle est votre bouclier technologique contre le calcaire."
                showPhone={true}
                showBreadcrumbs={true}
            />

            {/* Product Feature Overlay (Optional/Move below) */}
            <section className="py-12 bg-white relative">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-6">
                            <div className="pt-4 flex items-center gap-6">
                                <ExpertAvatars />
                                <div className="text-sm text-slate-500 font-medium">
                                    Recommandé par nos clients pour sa <br />
                                    <span className="text-blue-600 font-bold uppercase tracking-tighter italic">longévité supérieure</span>
                                </div>
                            </div>
                        </div>
                        <div className="relative group">
                            <div className="absolute inset-0 bg-blue-400/10 blur-[100px] rounded-full" />
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="relative z-10"
                            >
                                <img 
                                    src={sentinelImg} 
                                    alt="Adoucisseur Série Sentinelle" 
                                    className="w-full max-w-[400px] mx-auto filter drop-shadow-2xl"
                                />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
                
                {/* Integrated Specs Console */}
                    <div className="mt-24 pt-24 border-t border-slate-200/60">
                        <div className="max-w-4xl mx-auto space-y-12">
                            <div className="text-center space-y-6">
                                <div className="inline-block py-1 px-3 rounded-md bg-blue-600 text-white font-bold text-[10px] uppercase tracking-[0.2em]">Fiche Technique</div>
                                <h2 className="heading-pro-max text-center">
                                    <span className="italic font-light text-[#18448F] block text-3xl">Spécifications</span>
                                    <span className="font-bold text-[#18448F] block uppercase text-4xl">Série Sentinelle.</span>
                                </h2>
                                
                                <div className="flex flex-wrap justify-center gap-2 pt-4">
                                    {Object.keys(models).map((m) => (
                                        <button
                                            key={m}
                                            onClick={() => setSelectedModel(m)}
                                            className={cn(
                                                "px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all",
                                                selectedModel === m 
                                                    ? "bg-blue-600 text-white shadow-xl shadow-blue-200" 
                                                    : "bg-slate-100 text-slate-400 hover:bg-slate-200"
                                            )}
                                        >
                                            {m.split('-')[1]}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                                {specs.map((s, i) => (
                                    <div 
                                        key={i} 
                                        className="group flex items-center justify-between p-6 rounded-3xl bg-white border border-slate-100 transition-all hover:shadow-2xl hover:border-blue-200"
                                    >
                                        <div className="flex flex-col gap-1">
                                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{s.label}</span>
                                            <span className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors tracking-tight">{s.value}</span>
                                        </div>
                                        <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100 group-hover:bg-blue-50 group-hover:border-blue-100 transition-all">
                                            <CheckCircle2 className="w-5 h-5 text-blue-100 group-hover:text-blue-600 transition-colors" />
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-wrap justify-center gap-12">
                                <div className="flex items-center gap-4 text-xs font-bold text-slate-500 tracking-widest uppercase">
                                    <div className="w-12 h-[1px] bg-slate-200" />
                                    CERTIFIÉ NSF/ANSI 44
                                </div>
                                <div className="flex items-center gap-4 text-xs font-bold text-slate-500 tracking-widest uppercase">
                                    <div className="w-12 h-[1px] bg-slate-200" />
                                    GARANTIE 10 ANS
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2.5 ADVANCED TECHNOLOGY SECTION - New Content from PDF */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div className="order-2 lg:order-1 relative rounded-[3rem] overflow-hidden bg-slate-100 p-12 flex items-center justify-center">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent" />
                                <div className="relative space-y-6 text-center">
                                    <div className="text-6xl font-black text-blue-600/10 uppercase italic select-none">Ion Exchange</div>
                                    <div className="p-8 bg-white rounded-3xl shadow-xl border border-slate-100 max-w-sm mx-auto">
                                        <h3 className="text-xl font-bold text-slate-900 mb-4">Le Processus d'Échange d'Ions</h3>
                                        <p className="text-sm text-slate-500 leading-relaxed font-light">
                                            L'adoucisseur remplace les minéraux responsables de la dureté (calcium et magnésium) par des ions adoucissants. La résine haute performance capture ces minéraux et les évacue lors de la régénération automatique.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="order-1 lg:order-2 space-y-8">
                                <div className="space-y-4">
                                    <div className="inline-block py-1 px-3 rounded-md bg-slate-100 text-slate-600 font-bold text-[10px] uppercase tracking-[0.2em]">Technologie de Pointe</div>
                                    <h2 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tighter uppercase leading-tight italic">
                                        Vanne de contrôle <br />
                                        <span className="text-blue-600 font-serif lowercase italic font-light">Série Signature.</span>
                                    </h2>
                                </div>
                                
                                <div className="space-y-6">
                                    {[
                                        { title: "Mouvement Linéaire Breveté", desc: "Équipée d'un piston à mouvement linéaire alternatif breveté pour un service et des taux de lavage à contre-courant optimaux." },
                                        { title: "Conception Monobloc", desc: "Assemblage de cales d'espacement scellées en une seule pièce, conçu pour durer des décennies sans entretien." },
                                        { title: "Intelligence Volumétrique", desc: "S'adapte automatiquement à votre consommation réelle pour minimiser l'utilisation de sel et d'eau." }
                                    ].map((tech, i) => (
                                        <div key={i} className="flex gap-6 group">
                                            <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shrink-0">
                                                <CheckCircle2 className="w-6 h-6" />
                                            </div>
                                            <div className="space-y-1">
                                                <h4 className="font-bold text-slate-900 uppercase tracking-tight italic">{tech.title}</h4>
                                                <p className="text-sm text-slate-500 leading-relaxed font-light">{tech.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* 3. BÉNÉFICES SECTION - Dynamic Grid */}
            <section className="py-24 bg-slate-50 relative overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-24 items-center">
                            <div className="space-y-12">
                                <div className="space-y-4">
                                    <div className="inline-block py-1 px-3 rounded-md bg-blue-100 text-blue-600 font-bold text-[10px] uppercase tracking-[0.2em]">Bénéfices de la Série Sentinelle</div>
                                    <h2 className="text-4xl lg:text-6xl font-black text-slate-900 tracking-tighter uppercase leading-[0.9] italic">
                                        Une eau que <br />
                                        <span className="text-blue-600">vous ressentez.</span>
                                    </h2>
                                    <p className="text-xl text-slate-500 font-light leading-relaxed">
                                        Chaque adoucisseur est conçu pour répondre aux défis uniques de votre eau, offrant à votre famille un confort exceptionnel au quotidien.
                                    </p>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-8">
                                    {[
                                        { title: "Salle de Bain", text: "Votre peau et vos cheveux seront visiblement plus doux. Fini les traces de savon sur l'évier et la douche." },
                                        { title: "Cuisine", text: "La vaisselle se nettoie plus facilement et ressort sans taches. Vos mains seront plus douces." },
                                        { title: "Buanderie", text: "Les vêtements seront plus éclatants et dureront plus longtemps (+33% de durée de vie)." },
                                        { title: "Appareils", text: "Vos chauffe-eau et lave-vaisselle durent 30% plus longtemps grâce à l'élimination du tartre." }
                                    ].map((benefit, i) => (
                                        <div key={i} className="space-y-2">
                                            <h4 className="font-bold text-slate-900 uppercase tracking-tight italic flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                                                {benefit.title}
                                            </h4>
                                            <p className="text-sm text-slate-500 leading-relaxed font-light">{benefit.text}</p>
                                        </div>
                                    ))}
                                </div>
                                
                                <ProMaxButton asChild variant="primary">
                                    <a href="/contact">Obtenir ma soumission</a>
                                </ProMaxButton>
                            </div>

                            <div className="relative rounded-[3rem] overflow-hidden aspect-square lg:aspect-auto lg:h-[700px]">
                                <img 
                                    src={heroBg} 
                                    alt="Confort de l'eau adoucie" 
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent" />
                                <div className="absolute bottom-12 left-12 right-12 p-8 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 text-white">
                                    <p className="text-lg font-light italic leading-relaxed">
                                        "L'investissement dans un adoucisseur Nelsen vous récompensera avec une eau de qualité à chaque robinet de votre maison."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* 4. PRODUCT ECOSYSTEM - Editorial Split Alternative */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="max-w-7xl mx-auto">
                        {/* Section Header */}
                        <div className="mb-20 space-y-4">
                            <motion.div 
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="flex items-center gap-4"
                            >
                                <div className="h-[2px] w-12 bg-blue-600" />
                                <span className="text-blue-600 font-bold text-xs uppercase tracking-[0.4em]">Écosystème Bricareau</span>
                            </motion.div>
                            <motion.h2 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-4xl lg:text-6xl font-black text-slate-900 tracking-tighter uppercase leading-none italic"
                            >
                                Une eau parfaite, <br />
                                <span className="text-blue-600">souvent une affaire de combo.</span>
                            </motion.h2>
                        </div>

                        {/* Interactive Split Layout */}
                        <div className="flex flex-col lg:flex-row gap-4 items-stretch relative min-h-[500px]">
                            {/* Step 1: Horizontal Block */}
                            <motion.a 
                                href="/tests-eau"
                                initial={{ opacity: 0, scale: 0.98 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                whileHover={{ flex: 1.2 }}
                                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                                className="flex-1 group relative overflow-hidden rounded-[3rem] bg-slate-50 border border-slate-100 p-12 lg:p-16 flex flex-col justify-between transition-all duration-700"
                            >
                                {/* Background Watermark */}
                                <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 text-[20rem] font-black text-slate-200/50 italic select-none -z-10 group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-1000">01</div>
                                
                                <div className="space-y-8 relative z-10">
                                    <div className="w-16 h-16 rounded-2xl bg-amber-500 text-white flex items-center justify-center shadow-lg shadow-amber-200 group-hover:rotate-12 transition-transform duration-500">
                                        <Activity className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-3xl lg:text-4xl font-black text-slate-900 uppercase tracking-tighter leading-none italic">
                                        D'abord, testez <br />
                                        <span className="text-amber-500">votre niveau de dureté.</span>
                                    </h3>
                                    <p className="text-slate-500 font-light text-lg leading-relaxed max-w-sm">
                                        Une analyse précise permet de calibrer votre Série Sentinelle au grain près pour une efficacité maximale du sel.
                                    </p>
                                </div>

                                <div className="relative z-10 flex items-center gap-4 text-xs font-black text-slate-900 uppercase tracking-widest pt-12 group-hover:gap-8 transition-all">
                                    <div className="h-[2px] w-8 bg-slate-900 group-hover:w-16 transition-all duration-500" />
                                    Obtenir mon test d'eau
                                </div>
                            </motion.a>

                            {/* Middle Connector - Dynamic Plus Sign */}
                            <div className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-16 h-16 rounded-full bg-white border border-slate-200 items-center justify-center text-slate-400 shadow-xl group-hover:scale-125 transition-transform duration-500">
                                <ArrowRight className="w-6 h-6 rotate-90 lg:rotate-0" />
                            </div>

                            {/* Step 2: Horizontal Block */}
                            <motion.a 
                                href="/filtres-deau-pour-toute-la-maison"
                                initial={{ opacity: 0, scale: 0.98 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                whileHover={{ flex: 1.2 }}
                                transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
                                className="flex-1 group relative overflow-hidden rounded-[3rem] bg-slate-900 p-12 lg:p-16 flex flex-col justify-between transition-all duration-700"
                            >
                                {/* Background Watermark */}
                                <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 text-[20rem] font-black text-white/5 italic select-none -z-10 group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-1000">02</div>
                                
                                <div className="space-y-8 relative z-10">
                                    <div className="w-16 h-16 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:rotate-12 transition-transform duration-500">
                                        <Droplets className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-3xl lg:text-4xl font-black text-white uppercase tracking-tighter leading-none italic">
                                        Ensuite, filtrez <br />
                                        <span className="text-blue-500">sédiments & chlore.</span>
                                    </h3>
                                    <p className="text-slate-400 font-light text-lg leading-relaxed max-w-sm">
                                        Coupler l'adoucisseur à une filtration haute efficacité garantit une protection totale et une eau au goût cristallin.
                                    </p>
                                </div>

                                <div className="relative z-10 flex items-center gap-4 text-xs font-black text-white uppercase tracking-widest pt-12 group-hover:gap-8 transition-all">
                                    <div className="h-[2px] w-8 bg-blue-600 group-hover:w-16 transition-all duration-500" />
                                    Voir les filtres combos
                                </div>
                            </motion.a>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. QUESTIONS ET RÉPONSES (FAQ) */}
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

            {/* 6. ÉVALUATION ET AVIS */}
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
                            <ProMaxButton variant="primary">Laisser un avis</ProMaxButton>
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
