import React, { useEffect } from "react";
import Header from "@/components/Header";
import GlobalBreadcrumbs from "@/components/GlobalBreadcrumbs";
import Footer from "@/components/Footer";
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
    Droplets,
    Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import servicesHero from "@/assets/SERVICES.jpg";
import technicianImg from "@/assets/discover_expert.jpg";
import bricareauCareImg from "@/assets/cae3c0a4-5b4d-4b0e-8bc3-3550a714f7bb.jpg";
import waterSoftenerInstallImg from "@/assets/Water-Softener-installation.jpg";
import roSystemImg from "@/assets/reverse osmosis system_11062146.png";
import roTechnicianImg from "@/assets/technicien repare osmoseur.avif";
import labTestImg from "@/assets/test-laboratoire-diligence-inspection-750x500.jpg";
import diagnosticImg from "@/assets/step-diagnostic.png";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { NavLink } from "@/components/NavLink";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext
} from "@/components/ui/carousel";
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
                    
                    <div className="absolute top-[30px] left-0 right-0 z-30 pointer-events-none hidden lg:block">
                        <div className="container mx-auto px-6 pointer-events-auto">
                            <GlobalBreadcrumbs variant="dark" />
                        </div>
                    </div>

                    <div className="container relative z-10 mx-auto px-6 h-full flex items-center pt-32 pb-20">
                        <div className="max-w-3xl">
                            <h1 className="heading-pro-max text-white text-left mb-6 [text-shadow:_0_2px_10px_rgb(0_0_0_/_20%)] animate-in fade-in slide-in-from-left-8 duration-1000">
                                <span className="italic font-light text-blue-400 block">Expertise & Sérénité</span>
                                <span className="font-bold text-white block">Des services dédiés à <br />votre tranquillité.</span>
                            </h1>
                            <p className="text-white text-left mb-10 max-w-xl animate-in fade-in slide-in-from-left-12 duration-1200">
                                Bricareau s'engage à vos côtés pour simplifier le suivi, l'entretien et la performance de vos installations d'eau, partout au Québec.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-top-8 duration-1000 delay-500">
                                <Button 
                                    onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="rounded-full px-12"
                                >
                                    Planifier un service
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Architectural Accent */}
                    <div className="absolute bottom-0 right-0 w-1/3 h-24 bg-white rounded-tl-[5rem] hidden md:block" />
                </section>

                <section className="py-24 bg-white relative overflow-hidden">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto text-center mb-24 space-y-6">
                            <h2 className="heading">
                                <span className="italic font-light text-[#2563eb] block">Une expertise complète</span>
                                <span className="font-bold text-[#1e3a8a] block">pour votre eau</span>
                            </h2>
                            <p className="body-pro-max max-w-2xl mx-auto">
                                De l'installation à la maintenance préventive, nos techniciens certifiés assurent la pérennité de vos équipements de traitement d'eau à travers tout le Québec.
                            </p>
                        </div>

                        <div className="relative">
                            <Carousel 
                                opts={{
                                    align: "start",
                                    loop: true,
                                }}
                                className="w-full"
                            >
                                <CarouselContent className="-ml-8">
                                    {/* Card 001: Mise en service - Navy Style */}
                                    <CarouselItem className="pl-8 md:basis-1/2 lg:basis-1/3">
                                        <div className="group block relative bg-[#1e3a8a] rounded-[2.5rem] p-10 h-[720px] flex flex-col transition-all duration-700 hover:-translate-y-4 shadow-2xl overflow-hidden">
                                            <div className="space-y-0 relative z-10 flex flex-col h-full">
                                                <div className="h-20"></div>
                                                <div className="w-full h-48 overflow-hidden rounded-3xl shadow-lg relative">
                                                    <img 
                                                        src={bricareauCareImg} 
                                                        alt="Expertise technique certifiée Bricareau" 
                                                        className="w-full h-full object-cover object-[50%_30%]"
                                                    />
                                                </div>
                                                <div className="space-y-6 pt-8">
                                                    <h3 className="text-3xl font-bold text-white leading-[1.1] group-hover:text-blue-200 transition-colors">
                                                        Mise en service certifiée
                                                    </h3>
                                                    <p className="text-white/70 text-sm leading-relaxed">
                                                        L'installation par un expert certifié garantit la validité de votre garantie et la performance optimale de votre système dès le premier jour.
                                                    </p>
                                                    <ul className="space-y-2 pt-1">
                                                        {["Calibration précise", "Tests d'étanchéité", "Formation utilisateur"].map((benefit, i) => (
                                                            <li key={i} className="flex items-center gap-2 text-xs font-medium text-white/60">
                                                                <CheckCircle2 className="w-3 h-3 text-blue-400" />
                                                                {benefit}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </CarouselItem>

                                    {/* Card 002: Entretien préventif - Royal Blue Style */}
                                    <CarouselItem className="pl-8 md:basis-1/2 lg:basis-1/3">
                                        <div className="group block relative bg-[#2563eb] rounded-[2.5rem] p-10 h-[720px] flex flex-col transition-all duration-700 hover:-translate-y-4 shadow-2xl overflow-hidden">
                                            <div className="space-y-0 relative z-10 flex flex-col h-full">
                                                <div className="h-20"></div>
                                                <div className="space-y-6">
                                                    <h3 className="text-3xl font-bold text-white leading-[1.1]">
                                                        Entretien préventif durable
                                                    </h3>
                                                    <p className="text-white/80 text-sm leading-relaxed">
                                                        Un système bien entretenu dure deux fois plus longtemps. Nos techniciens réalisent un diagnostic complet et le nettoyage de vos composants.
                                                    </p>
                                                    <ul className="space-y-2 pt-1 mb-12">
                                                        {["Nettoyage résine", "Vérification vannes", "Livraison consommables"].map((benefit, i) => (
                                                            <li key={i} className="flex items-center gap-2 text-xs font-medium text-white/70">
                                                                <CheckCircle2 className="w-3 h-3 text-blue-100" />
                                                                {benefit}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                <div className="w-full h-48 overflow-hidden rounded-3xl shadow-lg mt-12 relative">
                                                    <img 
                                                        src={waterSoftenerInstallImg} 
                                                        alt="Entretien de système d'eau" 
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </CarouselItem>

                                    {/* Card 003: Dépannage - Navy Patterned */}
                                    <CarouselItem className="pl-8 md:basis-1/2 lg:basis-1/3">
                                        <div className="group block relative bg-[#1e3a8a] rounded-[2.5rem] p-10 h-[720px] flex flex-col transition-all duration-700 hover:-translate-y-4 shadow-2xl overflow-hidden">
                                            <div className="absolute inset-0 opacity-10 mix-blend-overlay">
                                                <div className="w-full h-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]" />
                                            </div>
                                            <div className="relative z-10 space-y-0 flex flex-col h-full">
                                                <div className="h-20"></div>
                                                <div className="w-full h-48 overflow-hidden rounded-3xl shadow-lg relative">
                                                    <img 
                                                        src={servicesHero} 
                                                        alt="Dépannage expert Bricareau" 
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                                <div className="space-y-6 pt-8">
                                                    <h3 className="text-3xl font-bold text-white leading-[1.1] group-hover:text-blue-200 transition-colors">
                                                        Dépannage expert 24/7
                                                    </h3>
                                                    <p className="text-white/70 text-sm leading-relaxed">
                                                        Votre système montre des signes de fatigue ? Nous intervenons sur toutes les marques du marché pour restaurer la qualité de votre eau.
                                                    </p>
                                                    <ul className="space-y-2 pt-1">
                                                        {["Diagnostic rapide", "Pièces d'origine", "Réparation garantie"].map((benefit, i) => (
                                                            <li key={i} className="flex items-center gap-2 text-xs font-medium text-white/60">
                                                                <CheckCircle2 className="w-3 h-3 text-blue-400" />
                                                                {benefit}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </CarouselItem>

                                    {/* Card 004: Analyses d'eau - Royal Blue Style */}
                                    <CarouselItem className="pl-8 md:basis-1/2 lg:basis-1/3">
                                        <div className="group block relative bg-[#2563eb] rounded-[2.5rem] p-10 h-[720px] flex flex-col transition-all duration-700 hover:-translate-y-4 shadow-2xl overflow-hidden">
                                            <div className="space-y-0 relative z-10 flex flex-col h-full">
                                                <div className="h-20"></div>
                                                <div className="space-y-6">
                                                    <h3 className="text-3xl font-bold text-white leading-[1.1]">
                                                        Analyses d'eau expertes
                                                    </h3>
                                                    <p className="text-white/80 text-sm leading-relaxed">
                                                        Évaluez la qualité de votre eau avec des tests certifiés et recevez un diagnostic complet sous 48h pour une solution sur mesure.
                                                    </p>
                                                    <ul className="space-y-2 pt-1 mb-12">
                                                        {["Tests certifiés", "Rapport détaillé", "Solutions sur-mesure"].map((benefit, i) => (
                                                            <li key={i} className="flex items-center gap-2 text-xs font-medium text-white/70">
                                                                <CheckCircle2 className="w-3 h-3 text-blue-100" />
                                                                {benefit}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                <div className="w-full h-48 overflow-hidden rounded-3xl shadow-lg mt-12 relative">
                                                    <img 
                                                        src={labTestImg} 
                                                        alt="Analyses de laboratoire certifiées" 
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </CarouselItem>
                                </CarouselContent>
                                <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 pointer-events-none">
                                    <div className="container mx-auto relative h-full">
                                        <CarouselPrevious className="pointer-events-auto absolute -left-12 lg:-left-20 h-14 w-14 bg-white/90 backdrop-blur-md text-blue-600 border-none shadow-2xl hover:bg-blue-600 hover:text-white transition-all duration-300" />
                                        <CarouselNext className="pointer-events-auto absolute -right-12 lg:-right-20 h-14 w-14 bg-white/90 backdrop-blur-md text-blue-600 border-none shadow-2xl hover:bg-blue-600 hover:text-white transition-all duration-300" />
                                    </div>
                                </div>
                            </Carousel>
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
                                <h2 className="heading">
                                    <span className="italic font-light text-blue-400 block">Bricareau Care</span>
                                    <span className="font-bold block leading-[1.1]">Contrats d'entretien <br />All-Inclusive.</span>
                                </h2>
                                <p className="body-pro-max text-white/70 text-left">
                                    Ne vous souciez plus jamais de la qualité de votre eau. Nos plans d'entretien annuels assurent un suivi proactif de vos équipements pour une tranquillité totale.
                                </p>
                                
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    {[
                                        { icon: <ShieldCheck className="w-5 h-5" />, text: "Garantie étendue pièces & Main d'oeuvre" },
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
                                    <Button
                                        asChild
                                        className="rounded-full px-12"
                                    >
                                        <a href="tel:18552649328" className="flex items-center gap-2">
                                            <Phone className="w-5 h-5" />
                                            Parlez avec un conseiller
                                        </a>
                                    </Button>
                                </div>
                            </div>

                            <div className="lg:w-1/2 relative group">
                                <div className="relative z-10 rounded-[4rem] overflow-hidden aspect-square shadow-2xl">
                                    <img 
                                        src={bricareauCareImg} 
                                        className="w-full h-full object-cover object-top"
                                        alt="Service Bricareau Care"
                                    />
                                    <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply" />
                                </div>
                                <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-blue-600 rounded-full flex flex-col items-center justify-center text-center p-6 shadow-2xl z-20 border-8 border-slate-900">
                                    <span className="text-4xl font-black block">+25</span>
                                    <span className="text-[10px] font-bold uppercase tracking-widest block">Ans de service</span>
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
                                <h2 className="text-2xl md:text-3xl lg:text-[40px] font-sans tracking-tight leading-tight lg:leading-[52px] text-left text-slate-900 mb-8">
                                    <span className="italic font-light text-blue-600 block">Performance & Protection</span>
                                    <span className="font-bold text-[#1e3a8a] block">Une maintenance d'élite <br />pour vos systèmes d'eau.</span>
                                </h2>
                                <p className="body-pro-max text-slate-600 text-justify">
                                    Optimisez la performance et la longévité de vos adoucisseurs et filtres d'eau partout au Québec. Un entretien régulier par nos techniciens certifiés assure une élimination efficace du calcaire et des contaminants, protège vos installations de plomberie et garantit une eau d'une qualité exceptionnelle pour toute votre famille.
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12">
                                    {[
                                        { title: "Valves & Contrôleurs", desc: "Expertise multimarques (Fleck, Clack, Autotrol)." },
                                        { title: "Rebed", desc: "Changement des résines et médias filtrants haute qualité." },
                                        { title: "Nettoyage et Désinfection", desc: "Traitement antibactérien des réservoirs de sel." },
                                        { title: "Optimisation Éco", desc: "Réglages fins pour minimiser les rejets d'eau et la consommation de sel." }
                                    ].map((item, i) => (
                                        <div key={i} className="space-y-1">
                                            <h4 className="text-base font-bold text-slate-900 border-l-2 border-blue-600 pl-3">{item.title}</h4>
                                            <p className="text-xs text-slate-500 font-light">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className="pt-6">
                                    <Button className="rounded-full px-12">
                                        Planifiez un service
                                    </Button>
                                </div>
                            </div>
                            <div className="lg:w-1/2">
                                <div className="relative rounded-[4rem] overflow-hidden aspect-[4/5] shadow-2xl group">
                                    <img 
                                        src={waterSoftenerInstallImg} 
                                        className="w-full h-full object-cover"
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
                                <h2 className="text-2xl md:text-3xl lg:text-[40px] font-sans tracking-tight leading-tight lg:leading-[52px] text-left text-slate-900 mb-8">
                                    <span className="italic font-light text-blue-600 block">Pureté & Santé</span>
                                    <span className="font-bold text-[#1e3a8a] block">Savourez une eau d'une <br />pureté exceptionnelle.</span>
                                </h2>
                                <p className="body-pro-max text-slate-600 text-justify">
                                    Assurez la pureté cristalline de votre eau potable municipale ou de puits. Le remplacement périodique des membranes et des filtres de votre système d'osmose inverse est essentiel pour éliminer 99% des contaminants et garantir une hygiène irréprochable.
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12">
                                    {[
                                        { title: "Filtres d'eau de haute qualité", desc: "Remplacement semestriel pour protéger la membrane." },
                                        { title: "Membranes TFC", desc: "Tests de pureté et remplacement tous les 2-3 ans." },
                                        { title: "Biofilm & Hygiène", desc: "Désinfection complète du réservoir de stockage." },
                                        { title: "Analyse de TDS", desc: "Vérification instantanée de l'efficacité de filtration." }
                                    ].map((item, i) => (
                                        <div key={i} className="space-y-1">
                                            <h4 className="text-base font-bold text-slate-900 border-l-2 border-blue-600 pl-3">{item.title}</h4>
                                            <p className="text-xs text-slate-500 font-light">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className="pt-6">
                                    <Button className="rounded-full px-12">
                                        Réservez votre entretien
                                    </Button>
                                </div>
                            </div>
                            <div className="lg:w-1/2">
                                <div className="relative rounded-[4rem] overflow-hidden aspect-[4/5] shadow-2xl group bg-slate-50">
                                    <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                    <img 
                                        src={roTechnicianImg} 
                                        className="w-full h-full object-cover drop-shadow-2xl"
                                        alt="Maintenance système d'osmose inverse"
                                    />
                                    <div className="absolute bottom-8 right-8">
                                        <div className="w-20 h-20 bg-white/90 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-xl">
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
                                <h2 className="text-2xl md:text-3xl lg:text-[40px] font-sans tracking-tight leading-tight lg:leading-[52px] text-left text-slate-900 mb-8">
                                    <span className="italic font-light text-blue-600 block">Diagnostic & Précision</span>
                                    <span className="font-bold text-[#1e3a8a] block">Révélez ce que <br />votre eau vous cache.</span>
                                </h2>
                                <p className="body-pro-max text-slate-600 text-justify">
                                    L'apparence cristalline de votre eau ne garantit pas sa pureté. Bricareau déploie des protocoles d'analyse scientifique pour identifier les contaminants invisibles qui impactent votre santé et vos installations. Du calcaire aux métaux lourds, notre diagnostic cible la racine de vos problèmes d'eau pour déployer la solution de traitement parfaitement adaptée.
                                </p>
                                <div className="space-y-4">
                                    {[
                                        "Analyse certifiée des minéraux et bactéries",
                                        "Scan des métaux lourds",
                                        "Rapport d'analyse détaillé"
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
                                        className="rounded-full px-12"
                                    >
                                        Voir toutes les analyses <ArrowRight className="ml-2 w-4 h-4" />
                                    </Button>
                                </div>
                            </div>
                            <div className="lg:w-1/2">
                                <div className="relative rounded-[4rem] overflow-hidden aspect-[4/5] shadow-2xl group">
                                    <img 
                                        src={diagnosticImg} 
                                        className="w-full h-full object-cover"
                                        alt="Diagnostic digital d'eau Bricareau"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent" />
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
                        <div className="max-w-4xl mx-auto text-center mb-16 space-y-6">
                            <h2 className="heading-pro-max">
                                <span className="italic font-light text-[#2563eb] block">Planifiez votre</span>
                                <span className="font-bold text-[#1e3a8a] block">rendez-vous de service.</span>
                            </h2>
                            <p className="body-pro-max max-w-2xl mx-auto">
                                Besoin d'une installation, d'une réparation ou d'un simple changement de filtres ? Nos experts interviennent sur tous les types d'équipements, au Grand Montréal et ses environs.
                            </p>
                        </div>

                        <div className="flex flex-col lg:flex-row items-start gap-16 lg:gap-20">
                            {/* Left Icons Column */}
                            <div className="lg:w-1/3 space-y-6">
                                <div className="flex items-center gap-4 bg-white/80 backdrop-blur-md p-6 rounded-3xl shadow-sm border border-slate-100 w-full group hover:shadow-md transition-all">
                                    <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-200 group-hover:scale-110 transition-transform">
                                        <PhoneCall className="w-6 h-6" />
                                    </div>
                                    <div className="text-left">
                                        <h4 className="font-bold text-slate-900 text-sm">Urgence technique</h4>
                                        <p className="text-blue-600 font-bold text-lg">1-855-264-9328</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 bg-white/80 backdrop-blur-md p-6 rounded-3xl shadow-sm border border-slate-100 w-full group hover:shadow-md transition-all">
                                    <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-200 group-hover:scale-110 transition-transform">
                                        <Calendar className="w-6 h-6" />
                                    </div>
                                    <div className="text-left">
                                        <h4 className="font-bold text-slate-900 text-sm">Disponibilités</h4>
                                        <p className="text-slate-500 text-sm">Lun - Ven : 8h00 - 18h00</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 bg-white/80 backdrop-blur-md p-6 rounded-3xl shadow-sm border border-slate-100 w-full group hover:shadow-md transition-all">
                                    <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-200 group-hover:scale-110 transition-transform">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div className="text-left">
                                        <h4 className="font-bold text-slate-900 text-sm">Zone d'intervention</h4>
                                        <p className="text-slate-500 text-sm">Partout au Grand Montréal et ses environs (Périmètre de 300km)</p>
                                    </div>
                                </div>
                            </div>

                            {/* Right Form Card */}
                            <div className="lg:w-2/3 w-full">
                                <div className="bg-white p-10 md:p-14 rounded-[3rem] shadow-2xl border border-slate-100 relative overflow-hidden">
                                     <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-600/5 rounded-full -z-10 animate-pulse" />
                                    
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
                                                    <SelectItem value="test">Analyse d'eau</SelectItem>
                                                    <SelectItem value="maintenance">Entretien & Maintenance</SelectItem>
                                                    <SelectItem value="install">Installation & Mise en service</SelectItem>
                                                    <SelectItem value="repair">Réparations d'urgence</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="md:col-span-2 space-y-2 text-left">
                                            <Label htmlFor="message" className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Détails de votre demande</Label>
                                            <Textarea id="message" className="min-h-[120px] bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all shadow-inner" />
                                        </div>
                                        <div className="md:col-span-2 space-y-4 pt-4">
                                            <div className="flex items-start space-x-4 bg-slate-50 p-6 rounded-[2rem] border border-slate-100 transition-all hover:bg-slate-100/50">
                                                <Checkbox id="consent" className="mt-1 border-slate-300 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600" />
                                                <Label htmlFor="consent" className="text-xs leading-relaxed text-slate-500 font-light cursor-pointer select-none">
                                                    En soumettant ce formulaire, j'accepte que mes données soient utilisées pour me recontacter dans le cadre de ma demande. Pour en savoir plus, consultez nos <NavLink to="/conditions-utilisation" className="text-blue-600 font-bold hover:underline">Conditions d'utilisation</NavLink> et notre <NavLink to="/politique-de-confidentialite" className="text-blue-600 font-bold hover:underline">Politique de confidentialité</NavLink>.
                                                </Label>
                                            </div>
                                        </div>

                                        <div className="md:col-span-2 text-left pt-2">
                                            <Button className="rounded-full px-12 transition-all hover:scale-105 active:scale-95 group">
                                                Envoyez
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
