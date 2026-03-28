import React, { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GlobalBreadcrumbs from "@/components/GlobalBreadcrumbs";
import { 
    ArrowRight, 
    ChevronRight, 
    CheckCircle2, 
    Wrench, 
    ShieldCheck, 
    Clock, 
    PhoneCall, 
    Settings, 
    UserCheck,
    Calendar,
    Zap,
    MapPin,
    Droplets
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import servicesHero from "@/assets/SERVICES.jpg";
import technicianImg from "@/assets/discover_expert.jpg";
import installationImg from "@/assets/WaterSoftenerInstallation.jpg";
import roSystemImg from "@/assets/reverse osmosis system_11062146.png";
import labTestImg from "@/assets/test-laboratoire-diligence-inspection-750x500.jpg";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";

const Service = () => {
    const navigate = useNavigate();

    useEffect(() => {
        document.title = "Services & Entretien Bricareau | Expertise en Traitement d'Eau";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Bénéficiez d'une maintenance experte pour vos adoucisseurs et systèmes de filtration. Mise en service, dépannage et contrats d'entretien Bricareau.");
        }
    }, []);

    const services = [
        {
            icon: <Zap className="w-8 h-8 text-blue-600" />,
            title: "Mise en service",
            subtitle: "Pour bien commencer",
            desc: "L'installation par un expert certifié garantit la validité de votre garantie et la performance optimale de votre système dès le premier jour.",
            benefits: ["Calibration précise", "Tests d'étanchéité", "Formation utilisateur"],
            bgColor: "bg-blue-50/50"
        },
        {
            icon: <Settings className="w-8 h-8 text-blue-600" />,
            title: "Entretien préventif",
            subtitle: "Votre sérénité durable",
            desc: "Un système bien entretenu dure deux fois plus longtemps. Nos techniciens réalisent un diagnostic complet et le nettoyage de vos composants.",
            benefits: ["Nettoyage résine", "Vérification vannes", "Livraison de consommables"],
            bgColor: "bg-slate-50"
        },
        {
            icon: <Wrench className="w-8 h-8 text-blue-600" />,
            title: "Dépannage expert",
            subtitle: "Réactivité 24/7",
            desc: "Votre système montre des signes de fatigue ? Nous intervenons sur toutes les marques du marché pour restaurer la qualité de votre eau.",
            benefits: ["Diagnostic rapide", "Pièces d'origine", "Réparation garantie"],
            bgColor: "bg-blue-50/30"
        }
    ];

    return (
        <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden">
            <Header />
            
            <main>
                {/* 1. IMMERSIVE HERO */}
                <section className="relative h-[80vh] md:h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
                    <img 
                        src={servicesHero} 
                        className="absolute inset-0 w-full h-full object-cover"
                        alt="Services Bricareau - Expertise technique"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/40 to-transparent" />
                    
                    <div className="container mx-auto px-6 relative z-10">
                        <div className="max-w-3xl">
                             <div className="mb-8 animate-in fade-in slide-in-from-left-4 duration-700">
                                <GlobalBreadcrumbs variant="light" />
                            </div>
                            <h1 className="heading-pro-max text-white text-left mb-6 [text-shadow:_0_2px_10px_rgb(0_0_0_/_20%)] animate-in fade-in slide-in-from-left-8 duration-1000">
                                <span className="italic font-light text-blue-400 block">Expertise & Sérénité</span>
                                <span className="font-bold block leading-[1.1]">Des services dédiés à <br />votre tranquillité.</span>
                            </h1>
                            <p className="body-pro-max text-white/80 text-left mb-10 max-w-xl animate-in fade-in slide-in-from-left-12 duration-1200">
                                Bricareau s'engage à vos côtés pour simplifier le suivi, l'entretien et la performance de vos installations d'eau, partout au Québec.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-top-8 duration-1000 delay-500">
                                <Button 
                                    onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="h-16 px-10 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-lg font-bold shadow-2xl shadow-blue-500/20"
                                >
                                    Planifier un service
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                                <Button variant="outline" className="h-16 px-10 rounded-full border-white/20 bg-white/5 backdrop-blur-md text-white hover:bg-white/10 text-lg font-bold">
                                    Nos contrats d'entretien
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Architectural Accent */}
                    <div className="absolute bottom-0 right-0 w-1/3 h-24 bg-white rounded-tl-[5rem] hidden md:block" />
                </section>

                {/* 2. THE SERVICES GRID - PILLARS */}
                <section className="py-32 bg-white relative overflow-hidden">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
                            {services.map((item, idx) => (
                                <div key={idx} className={`group p-10 rounded-[3rem] ${item.bgColor} border border-slate-100 transition-all duration-700 hover:-translate-y-4 hover:shadow-2xl hover:shadow-blue-900/5`}>
                                    <div className="mb-8 w-16 h-16 rounded-2xl bg-white shadow-xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500">
                                        {item.icon}
                                    </div>
                                    <span className="text-blue-600 font-black text-[10px] uppercase tracking-[0.2em] mb-4 block">
                                        {item.subtitle}
                                    </span>
                                    <h3 className="text-3xl font-bold text-slate-900 mb-6 group-hover:text-blue-600 transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-slate-500 font-light leading-relaxed mb-8">
                                        {item.desc}
                                    </p>
                                    <ul className="space-y-3 mb-10">
                                        {item.benefits.map((benefit, i) => (
                                            <li key={i} className="flex items-center gap-2 text-sm font-medium text-slate-700">
                                                <CheckCircle2 className="w-4 h-4 text-blue-500" />
                                                {benefit}
                                            </li>
                                        ))}
                                    </ul>
                                    <Button variant="link" className="p-0 text-blue-600 font-bold flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                                        En savoir plus <ChevronRight className="w-4 h-4" />
                                    </Button>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 3. BRICAREAU CARE - SERVICE CONTRACTS (Inspired by BWT Service) */}
                <section className="py-32 bg-slate-900 text-white relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500 rounded-full blur-[200px] -translate-y-1/2 translate-x-1/2" />
                    </div>

                    <div className="container mx-auto px-6 relative z-10">
                        <div className="flex flex-col lg:flex-row items-center gap-20">
                            <div className="lg:w-1/2 space-y-8">
                                <h2 className="heading-pro-max text-white text-left">
                                    <span className="italic font-light text-blue-400 block">Bricareau Care</span>
                                    <span className="font-bold block leading-[1.1]">Contrats d'entretien <br />All-Inclusive.</span>
                                </h2>
                                <p className="body-pro-max text-white/70 text-left">
                                    Ne vous souciez plus jamais de la qualité de votre eau. Nos plans d'entretien annuels assurent un suivi proactif de vos équipements pour une tranquillité totale.
                                </p>
                                
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    {[
                                        { icon: <ShieldCheck className="w-5 h-5" />, text: "Garantie étendue pièces & MO" },
                                        { icon: <PhoneCall className="w-5 h-5" />, text: "Dépannage prioritaire sous 24h" },
                                        { icon: <CheckCircle2 className="w-5 h-5" />, text: "Analyses d'eau incluses" },
                                        { icon: <UserCheck className="w-5 h-5" />, text: "Suivi par un technicien dédié" }
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-2xl">
                                            <div className="text-blue-400">{item.icon}</div>
                                            <span className="text-sm font-medium">{item.text}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="pt-6">
                                    <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-12 h-14 text-lg font-bold">
                                        Découvrir les forfaits
                                    </Button>
                                </div>
                            </div>

                            <div className="lg:w-1/2 relative group">
                                <div className="relative z-10 rounded-[4rem] overflow-hidden aspect-square shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]">
                                    <img 
                                        src={technicianImg} 
                                        className="w-full h-full object-cover"
                                        alt="Technicien Bricareau en intervention"
                                    />
                                    <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply" />
                                </div>
                                <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-blue-600 rounded-full flex flex-col items-center justify-center text-center p-6 shadow-2xl z-20 border-8 border-slate-900">
                                    <span className="text-4xl font-black block">10+</span>
                                    <span className="text-[10px] font-bold uppercase tracking-widest block">Ans de sérénité</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. WATER SOFTENER & WHOLE HOUSE FILTER MAINTENANCE */}
                <section className="py-32 bg-slate-50 overflow-hidden">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col lg:flex-row-reverse items-center gap-24">
                            <div className="lg:w-1/2 space-y-8">
                                <h2 className="heading-pro-max text-left text-slate-900">
                                    <span className="italic font-light text-blue-600 block">Expertise Adoucisseur</span>
                                    <span className="font-bold block leading-[1.1]">Entretien des systèmes <br />automatiques & centraux.</span>
                                </h2>
                                <p className="body-pro-max text-slate-600 text-justify">
                                    Les systèmes automatiques de traitement d'eau sont l'épine dorsale de votre maison. Leur complexité mécanique demande une précision d'orfèvre pour garantir une eau douce et pure à chaque instant.
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12">
                                    {[
                                        { title: "Réparation Valves & Contrôleurs", desc: "Expertise sur toutes les grandes marques (Fleck, Clack, etc.)." },
                                        { title: "Remplacement des Médias", desc: "Nettoyage ou changement des résines et médias filtrants." },
                                        { title: "Désinfection du Système", desc: "Traitement antibactérien des lits de média et réservoirs de sel." },
                                        { title: "Optimisation des Cycles", desc: "Réglages fins pour réduire la consommation d'eau et de sel." }
                                    ].map((item, i) => (
                                        <div key={i} className="space-y-2">
                                            <h4 className="font-bold text-slate-900 border-l-2 border-blue-600 pl-3">{item.title}</h4>
                                            <p className="text-sm text-slate-500">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className="pt-6">
                                    <Button className="rounded-full px-10 h-14 bg-blue-600 hover:bg-blue-700 text-white font-bold">
                                        Planifier une maintenance centrale
                                    </Button>
                                </div>
                            </div>
                            <div className="lg:w-1/2">
                                <div className="relative rounded-[4rem] overflow-hidden aspect-[4/5] shadow-2xl group">
                                    <img 
                                        src={installationImg} 
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                        alt="Maintenance adoucisseur d'eau Bricareau"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a8a]/40 to-transparent" />
                                     <div className="absolute bottom-10 left-10 right-10 p-8 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20">
                                        <p className="text-white font-medium italic">"Une valve bien réglée peut économiser jusqu'à 30% de sel par an."</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. REVERSE OSMOSIS MAINTENANCE */}
                <section className="py-32 bg-white overflow-hidden">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col lg:flex-row items-center gap-24">
                            <div className="lg:w-1/2 space-y-8">
                                <h2 className="heading-pro-max text-left text-slate-900">
                                    <span className="italic font-light text-blue-600 block">Expertise Osmose</span>
                                    <span className="font-bold block leading-[1.1]">Maintenance des <br />systèmes d'osmose inverse.</span>
                                </h2>
                                <p className="body-pro-max text-slate-600 text-justify">
                                    Pour une eau d'une pureté absolue, votre système d'osmose inverse nécessite un entretien rigoureux. Nos experts s'assurent du bon débit et de la qualité microbiologique de votre réserve d'eau.
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12">
                                    {[
                                        { title: "Filtres sédiments & charbon", desc: "Remplacement semestriel pour protéger la membrane." },
                                        { title: "Membranes TFC", desc: "Test de TDS et remplacement tous les 2 à 3 ans." },
                                        { title: "Désinfection du réservoir", desc: "Élimination des biofilms pour une eau saine." },
                                        { title: "Test de Pureté (TDS)", desc: "Vérification instantanée de l'efficacité du système." }
                                    ].map((item, i) => (
                                        <div key={i} className="space-y-2">
                                            <h4 className="font-bold text-slate-900 border-l-2 border-blue-600 pl-3">{item.title}</h4>
                                            <p className="text-sm text-slate-500">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className="pt-6">
                                    <Button className="rounded-full px-10 h-14 bg-[#1e3a8a] hover:bg-blue-900 text-white font-bold">
                                        Réserver un entretien RO
                                    </Button>
                                </div>
                            </div>
                            <div className="lg:w-1/2">
                                <div className="relative p-12 bg-slate-50 rounded-[4rem] flex items-center justify-center group overflow-hidden">
                                    <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                    <img 
                                        src={roSystemImg} 
                                        className="w-full max-w-md h-auto object-contain transition-transform duration-700 group-hover:scale-110 drop-shadow-2xl"
                                        alt="Système d'osmose inverse Bricareau"
                                    />
                                    <div className="absolute bottom-8 right-8">
                                        <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-xl">
                                            <Droplets className="w-10 h-10 text-blue-600 animate-pulse" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 6. WATER ANALYSIS & DIGITAL DIAGNOSTIC */}
                <section className="py-32 bg-white overflow-hidden">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col lg:flex-row-reverse items-center gap-24">
                            <div className="lg:w-1/2 space-y-8">
                                <h2 className="heading-pro-max text-left text-slate-900">
                                    <span className="italic font-light text-blue-600 block">Analyses de pointe</span>
                                    <span className="font-bold block leading-[1.1]">Rendre l'invisible <br />enfin visible.</span>
                                </h2>
                                <p className="body-pro-max text-slate-600 text-justify">
                                    Une eau cristalline peut cacher des contaminants invisibles. Bricareau révolutionne l'analyse d'eau avec des outils de diagnostic digitaux ultra-précis. Que ce soit pour le calcaire, le fer ou le soufre, notre technologie identifie la source exacte du problème pour vous proposer la solution de traitement idéale.
                                </p>
                                <div className="space-y-4">
                                    {[
                                        "Diagnostic de dureté certifié",
                                        "Analyse chromatographique des métaux",
                                        "Rapport d'expertise labo sous 48h"
                                    ].map((text, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <div className="w-2 h-2 rounded-full bg-blue-600" />
                                            <span className="font-bold text-slate-900">{text}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="pt-4">
                                    <Button 
                                        onClick={() => navigate('/tests-eau')}
                                        variant="outline" 
                                        className="rounded-full px-8 h-12 border-blue-600 text-blue-600 hover:bg-blue-50"
                                    >
                                        Voir toutes les analyses <ArrowRight className="ml-2 w-4 h-4" />
                                    </Button>
                                </div>
                            </div>
                            <div className="lg:w-1/2">
                                <div className="relative rounded-[3rem] overflow-hidden aspect-[16/10] shadow-2xl group">
                                    <img 
                                        src={labTestImg} 
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                        alt="Analyse d'eau digitale en laboratoire"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent" />
                                    <div className="absolute top-6 left-6 px-4 py-2 bg-white/90 backdrop-blur-md rounded-full shadow-lg">
                                        <span className="text-[10px] font-black text-blue-600 tracking-widest uppercase">Précision 99.9%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 7. CONTACT FORM SECTION */}
                <section id="contact-form" className="py-32 bg-slate-50 relative scroll-mt-24">
                     {/* Background Watermark */}
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] lg:text-[22rem] font-black text-slate-200/20 select-none pointer-events-none tracking-tighter z-0 uppercase">
                        SUPPORT
                    </div>

                    <div className="container mx-auto px-6 relative z-10">
                        <div className="flex flex-col lg:flex-row gap-20">
                            {/* Left Content */}
                            <div className="lg:w-2/5 text-left space-y-8">
                                <div className="space-y-4">
                                    <span className="inline-block px-4 py-1.5 bg-blue-600/10 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-[0.2em]">
                                        Assistance Client
                                    </span>
                                    <h2 className="heading-pro-max text-left mb-8">
                                        <span className="italic font-light text-[#2563eb] block text-left">Planifiez votre</span>
                                        <span className="font-bold text-[#1e3a8a] block">rendez-vous.</span>
                                    </h2>
                                </div>
                                
                                <p className="body-pro-max text-left">
                                    Besoin d'une installation, d'une réparation ou d'un simple changement de filtres ? Nos experts interviennent sur tous les types d'équipements, même ceux que nous n'avons pas installés.
                                </p>

                                <div className="space-y-6 pt-4">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-lg text-blue-600">
                                            <PhoneCall className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900">Urgence technique</h4>
                                            <p className="text-blue-600 font-bold text-xl">1-800-BRICAREAU</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-lg text-blue-600">
                                            <Calendar className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900">Disponibilités</h4>
                                            <p className="text-slate-500 text-sm">Lun - Ven : 8h00 - 18h00</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-lg text-blue-600">
                                            <MapPin className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900">Zone d'intervention</h4>
                                            <p className="text-slate-500 text-sm">Grand Montréal et partout au Québec</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Form Card */}
                            <div className="lg:w-3/5">
                                <div className="bg-white p-10 md:p-14 rounded-[3rem] shadow-2xl border border-slate-100 relative">
                                     <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-600/5 rounded-full -z-10 animate-pulse" />
                                    
                                    <h3 className="text-3xl font-bold text-slate-900 mb-8 text-left">Parlez-nous de votre projet.</h3>

                                    <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-2 text-left">
                                            <Label htmlFor="fname" className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Prénom*</Label>
                                            <Input id="fname" className="h-14 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all shadow-inner" />
                                        </div>
                                        <div className="space-y-2 text-left">
                                            <Label htmlFor="lname" className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Nom*</Label>
                                            <Input id="lname" className="h-14 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all shadow-inner" />
                                        </div>
                                        <div className="space-y-2 text-left lg:col-span-2">
                                            <Label htmlFor="email" className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Courriel*</Label>
                                            <Input id="email" type="email" className="h-14 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all shadow-inner" />
                                        </div>
                                        <div className="space-y-2 text-left">
                                            <Label htmlFor="phone" className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Téléphone*</Label>
                                            <Input id="phone" type="tel" className="h-14 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all shadow-inner" />
                                        </div>
                                        <div className="space-y-2 text-left">
                                            <Label htmlFor="interest" className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Service requis*</Label>
                                            <Select>
                                                <SelectTrigger className="h-14 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all shadow-inner">
                                                    <SelectValue placeholder="Choisir un service" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="repair">Réparations d'urgence</SelectItem>
                                                    <SelectItem value="maintenance">Entretien & Maintenance</SelectItem>
                                                    <SelectItem value="install">Installation & Mise en service</SelectItem>
                                                    <SelectItem value="test">Analyse d'eau</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="md:col-span-2 space-y-2 text-left">
                                            <Label htmlFor="message" className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Détails de votre demande</Label>
                                            <Textarea id="message" className="min-h-[120px] bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all shadow-inner" />
                                        </div>
                                        <div className="md:col-span-2 text-left pt-4">
                                            <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-12 h-16 text-lg font-bold shadow-xl shadow-blue-500/20 transition-all hover:scale-105 active:scale-95 group">
                                                Envoyer ma demande
                                                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                                            </Button>
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

export default Service;
