import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import GlobalBreadcrumbs from "@/components/GlobalBreadcrumbs";
import TestimonialsSection from "@/components/TestimonialsSection";
import ExpertAvatars from "@/components/ExpertAvatars";
import {
    Snowflake,
    Building2,
    Phone,
    Zap,
    Users,
    ChevronRight,
    ArrowRight,
    Star,
    Plus,
    Minus,
    PiggyBank,
    Award,
    ShieldCheck,
    Leaf,
    DollarSign,
    Clock,
    Recycle,
    CheckCircle2,
    TrendingUp,
    Coffee
} from "lucide-react";
import { ProMaxButton } from "@/components/ui/ProMaxButton";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

// Assets as reused from Fontaines.tsx or relevant sources
import heroFountains from "@/assets/Fontaines d'eau.webp";
import countertopFountainImg from "@/assets/A9.jpg";
import bottlelessFountainImg from "@/assets/A13.jpg";
import iceMachineImg from "@/assets/Machine+à+glaçons+de+comptoir+auto-nettoyante+de+26+lb+R.W.FLAME-78609293.webp";
import ecoImpactImg4 from "@/assets/water-dispenser in office.jpg";
import ecoImpactImg from "@/assets/kitchen1.webp";
import ourteamstudyyourwaterImg from "@/assets/10271.jpg";

// Sector images
import officeSectorImg from "@/assets/water-dispenser in office.jpg";
import industrySectorImg from "@/assets/hero_industrial_power.png";
import clinicSectorImg from "@/assets/clinic_water_solution.png";
import educationSectorImg from "@/assets/education_water_solution.png";

interface B2BSolution {
    title: string;
    subtitle: string;
    desc: string;
    img: string;
    features: string[];
}

const SolutionCardB2B = ({ item }: { item: B2BSolution }) => {
    const [showSpecs, setShowSpecs] = useState(false);

    return (
        <div className="group w-full md:w-[380px] h-[650px] relative overflow-hidden rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-slate-100 bg-white transition-all duration-700 hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)] hover:-translate-y-2">
            <div className="h-full p-10 flex flex-col">
                <div className="w-full aspect-square bg-slate-50/50 rounded-[2.5rem] mb-8 flex items-center justify-center p-8 relative overflow-hidden group-hover:bg-blue-50/30 transition-colors duration-700">
                    <img
                        src={item.img}
                        alt={item.title}
                        className="w-full h-full object-contain mix-blend-multiply scale-100 group-hover:scale-110 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>

                <div className="space-y-4 flex-grow">
                    <div className="text-blue-600 font-black text-[9px] uppercase tracking-[0.3em]">{item.subtitle}</div>
                    <h3 className="text-2xl font-bold text-slate-900 tracking-tight leading-tight">{item.title}</h3>
                    <p className="text-slate-500 font-light text-base leading-relaxed line-clamp-3">
                        {item.desc}
                    </p>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-50 flex items-center justify-between">
                    <Button 
                        variant="outline" 
                        className="rounded-full group/btn"
                        onClick={() => setShowSpecs(true)}
                    >
                        Détails Techniques
                        <Plus className="ml-2 w-4 h-4 transition-transform group-hover/btn:rotate-90" />
                    </Button>
                </div>
            </div>

            {/* Specs Panel */}
            <div className={`absolute inset-0 bg-white/95 backdrop-blur-xl p-12 flex flex-col transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] z-20 ${showSpecs ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}`}>
                <div className="mb-10">
                    <h3 className="text-3xl font-bold text-slate-900 tracking-tight">Spécifications PRO</h3>
                    <div className="w-16 h-1.5 bg-blue-600 rounded-full mt-4" />
                </div>
                <ul className="space-y-6 flex-grow">
                    {item.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-4 group/item">
                            <div className="mt-1.5 w-2 h-2 rounded-full bg-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.4)] group-hover/item:scale-150 transition-transform shrink-0" />
                            <span className="text-base font-light text-slate-600 leading-tight">{feature}</span>
                        </li>
                    ))}
                </ul>
                <Button onClick={() => setShowSpecs(false)} variant="outline" className="rounded-full w-full">
                    Retour
                </Button>
            </div>
        </div>
    );
};

const B2BImpactCalculator = () => {
    const [employees, setEmployees] = useState(25);
    const [timeframe, setTimeframe] = useState(1);

    const bottlesAvoided = employees * 2 * 250 * timeframe; // 2 bottles/day * 250 working days
    const savings = Math.round(bottlesAvoided * 0.85); // average $0.85 per plastic bottle

    return (
        <div className="bg-slate-900 p-10 rounded-[3.5rem] border border-white/10 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -mr-20 -mt-20" />
            
            <div className="relative z-10 space-y-8">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white">
                        <TrendingUp className="w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="text-white font-bold leading-tight">Simulateur d'Impact</h3>
                        <p className="text-blue-400 text-[10px] font-black uppercase tracking-widest">Valeur ROI Entreprises</p>
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="space-y-4">
                        <div className="flex justify-between items-center text-sm font-bold text-slate-400 uppercase tracking-widest">
                            <span>Effectif</span>
                            <span className="text-white text-xl">{employees} Employés</span>
                        </div>
                        <input 
                            type="range" 
                            min="5" 
                            max="500" 
                            step="5"
                            value={employees} 
                            onChange={(e) => setEmployees(parseInt(e.target.value))}
                            className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-blue-500"
                        />
                    </div>

                    <div className="flex p-1 bg-white/5 rounded-2xl border border-white/10">
                        {[1, 3, 5].map((y) => (
                            <button
                                key={y}
                                onClick={() => setTimeframe(y)}
                                className={`flex-1 py-3 text-xs font-bold rounded-xl transition-all ${timeframe === y ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'}`}
                            >
                                {y} {y === 1 ? 'AN' : 'ANS'}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-6 rounded-3xl bg-emerald-500/10 border border-emerald-500/20">
                        <span className="text-[10px] font-black text-emerald-400 uppercase tracking-widest block mb-1">Impact Plastique</span>
                        <div className="text-3xl font-bold text-white tabular-nums">-{bottlesAvoided.toLocaleString()}</div>
                        <span className="text-slate-500 text-[10px] uppercase font-bold">Unités évitées</span>
                    </div>
                    <div className="p-6 rounded-3xl bg-blue-500/10 border border-blue-500/20">
                        <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest block mb-1">Potentiel d'Économie</span>
                        <div className="text-3xl font-bold text-white tabular-nums">{savings.toLocaleString()}$</div>
                        <span className="text-slate-500 text-[10px] uppercase font-bold">Logistique & Achat</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

const RefroidisseursEauEntreprises = () => {
    useEffect(() => {
        document.title = "Refroidisseurs d'Eau pour Entreprises | Solutions Pro au Québec | Bricareau";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Optimisez l'hydratation de vos employés avec nos fontaines d'eau sans bouteille haute performance. Installation, entretien et essai gratuit pour les entreprises du Québec.");
        }
    }, []);

    const proSolutions: B2BSolution[] = [
        {
            title: "Elysium PRO Desktop",
            subtitle: "Bureaux & Salles de Conférence",
            desc: "Le summum du design compact. S'intègre parfaitement aux espaces modernes tout en offrant une filtration de pointe.",
            img: countertopFountainImg,
            features: ["Design ultra-compact", "Filtration Charbon + UV", "Eau froide, chaude et tempérée", "Débit haute performance", "Interface tactile hygiénique"]
        },
        {
            title: "Elysium TOWER Max",
            subtitle: "Espaces Communs & Cafétérias",
            desc: "Notre modèle le plus populaire. Une tour élégante capable de répondre aux besoins d'hydratation d'une équipe de 50 personnes.",
            img: bottlelessFountainImg,
            features: ["Capacité 50+ personnes", "Bac de récupération extra-large", "Double filtration certifiée NSF", "Construction acier inoxydable", "Option eau pétillante disponible"]
        },
        {
            title: "Industrial Hydrator 500",
            subtitle: "Usines & Entrepôts",
            desc: "Conçu pour les environnements exigeants. Robuste, haute capacité et filtration renforcée pour les zones à fort passage.",
            img: countertopFountainImg, // Reusing similar for placeholder
            features: ["Boîtier anti-choc", "Filtration sédiments 5 microns", "Débit 15L/heure (froid)", "Pédale de commande sans contact", "Résistance industrielle"]
        }
    ];

    const sectors = [
        {
            title: "Bureaux & PME",
            desc: "Améliorez le bien-être et la productivité de vos équipes avec une eau fraîche et pure accessible à tout moment.",
            benefit: "Productivité",
            color: "bg-blue-600",
            icon: <Building2 className="w-6 h-6" />,
            img: officeSectorImg
        },
        {
            title: "Industries & Usines",
            desc: "Des solutions robustes haute capacité conçues pour résister aux environnements exigeants et assurer l'hydratation massive.",
            benefit: "Haute Capacité",
            color: "bg-amber-600",
            icon: <Zap className="w-6 h-6" />,
            img: industrySectorImg
        },
        {
            title: "Cliniques & Santé",
            desc: "Une hygiène irréprochable avec filtration microbiologique avancée pour les patients et le personnel soignant.",
            benefit: "Hygiène Certifiée",
            color: "bg-emerald-500",
            icon: <ShieldCheck className="w-6 h-6" />,
            img: clinicSectorImg
        },
        {
            title: "Éducation & Campus",
            desc: "Encouragez l'hydratation saine des étudiants avec des fontaines sans contact rapides et faciles d'entretien.",
            benefit: "Jeunesse & Santé",
            color: "bg-pink-500",
            icon: <Users className="w-6 h-6" />,
            img: educationSectorImg
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main>
                {/* 1. HERO PRO */}
                <section className="relative min-h-[85vh] flex items-center pt-24 overflow-hidden bg-slate-900">
                    <div className="absolute inset-0 z-0 opacity-40">
                        <img src={heroFountains} alt="Bricareau Business Solutions" className="w-full h-full object-cover scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />
                    </div>

                    <div className="container mx-auto px-6 relative z-10">
                        <div className="max-w-4xl space-y-10 animate-in fade-in slide-in-from-left duration-1000">
                           <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-black tracking-[0.3em] uppercase">
                                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                                Solutions Corporatives
                            </div>
                            
                            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-[0.95] tracking-tighter">
                                <span className="block text-blue-400 font-light italic">L'excellence de l'eau</span>
                                <span className="block mt-2">pour vos talents.</span>
                            </h1>
                            
                            <p className="text-xl text-slate-400 max-w-2xl font-light leading-relaxed">
                                Transformez l'expérience d'hydratation de votre entreprise. 
                                Nos fontaines filtrantes éliminent la logistique des bouteilles tout en garantissant une pureté absolue et des économies majeures.
                            </p>
                            
                            <div className="flex flex-wrap gap-6 pt-4">
                                <ProMaxButton 
                                    asChild
                                    variant="primary"
                                >
                                    <NavLink to="/contact-entreprises">Essai Gratuit 7 Jours</NavLink>
                                </ProMaxButton>
                                <ProMaxButton 
                                    variant="outline-white"
                                    asChild
                                >
                                    <NavLink to="/contact-entreprises">Consulter un Expert Pro</NavLink>
                                </ProMaxButton>
                            </div>

                            <div className="pt-8 flex items-center gap-8 border-t border-white/5">
                                <ExpertAvatars />
                                <p className="text-slate-500 text-sm font-medium">
                                    Déjà adopté par <span className="text-white">+250 entreprises</span> au Québec.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Breadcrumbs - Hidden on Mobile, Absolute on Desktop */}
                    <div className="absolute top-[30px] left-0 right-0 z-30 pointer-events-none hidden lg:block">
                        <div className="container mx-auto px-6 pointer-events-auto">
                            <GlobalBreadcrumbs variant="dark" />
                        </div>
                    </div>
                </section>


                {/* 2. VALUE PROPOSITION */}
                <section className="py-32 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
                            <div className="lg:col-span-12 text-center mb-16 space-y-6">
                                <span className="text-blue-600 font-black text-xs uppercase tracking-[0.4em]">Pourquoi passer au Sans-Bouteille ?</span>
                                <h2 className="heading-pro-max text-center">
                                    <span className="italic font-light text-blue-600 block">Libérez-vous des contraintes,</span>
                                    <span className="font-bold text-slate-950 block">valorisez votre espace de travail.</span>
                                </h2>
                            </div>

                            <div className="lg:col-span-5 space-y-12">
                                {[
                                    { icon: Snowflake, title: "Pureté Continue", desc: "Plus de rupture de stock. Une eau filtrée en temps réel, fraîche et cristalline à volonté." },
                                    { icon: Recycle, title: "Éco-Responsable", desc: "Éliminez des milliers de bouteilles jetables et réduisez l'empreinte carbone de votre logistique." },
                                    { icon: DollarSign, title: "Économies Fixes", desc: "Passez d'un coût variable lié à la consommation à un coût fixe prévisible et avantageux." },
                                    { icon: ShieldCheck, title: "Sécurité Sanitaire", desc: "Circuits fermés et filtration UV optionnelle pour une hygiène irréprochable au bureau." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-6 group">
                                        <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                                            <item.icon className="w-6 h-6" />
                                        </div>
                                        <div className="space-y-2">
                                            <h4 className="text-xl font-bold text-slate-950">{item.title}</h4>
                                            <p className="text-slate-500 font-light leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="lg:col-span-7">
                                <B2BImpactCalculator />
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. PRODUCT SOLUTIONS */}
                <section className="py-32 bg-slate-50 relative overflow-hidden">
                    <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[100px] -z-0 translate-x-1/3" />
                    
                    <div className="container mx-auto px-6 relative z-10">
                        <div className="max-w-4xl mb-24">
                            <h2 className="heading-pro-max text-left">
                                <span className="italic font-light text-blue-600 block">La gamme Elysium PRO</span>
                                <span className="font-bold text-slate-950 block">Des standards de classe mondiale.</span>
                            </h2>
                            <p className="body-pro-max text-left max-w-2xl">
                                Nos refroidisseurs d'eau sont sélectionnés pour leur fiabilité, leur design élégant et leur facilité d'entretien, s'intégrant parfaitement dans tout environnement professionnel.
                            </p>
                        </div>

                        <div className="flex flex-wrap justify-center gap-10 lg:gap-14 max-w-7xl mx-auto">
                            {proSolutions.map((sol, i) => (
                                <SolutionCardB2B key={i} item={sol} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* 4. SERVICE SECTION */}
                <section className="py-32 bg-white overflow-hidden">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col lg:flex-row items-center gap-20">
                            <div className="w-full lg:w-1/2 relative">
                                <div className="absolute -inset-4 bg-blue-600/5 rounded-[4rem] blur-2xl" />
                                <div className="relative rounded-[3.5rem] overflow-hidden shadow-2xl border border-slate-100 group">
                                    <img 
                                        src={ourteamstudyyourwaterImg} 
                                        alt="Technicien Bricareau en entreprise" 
                                        className="w-full h-[600px] object-cover group-hover:scale-105 transition-transform duration-[4s]"
                                    />
                                    <div className="absolute bottom-8 left-8 right-8 p-8 bg-white/90 backdrop-blur-xl rounded-[2.5rem] shadow-xl">
                                        <div className="flex items-center gap-4 mb-3">
                                            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white">
                                                <Award className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest text-[#18448F]">Bricareau PRO Care</span>
                                        </div>
                                        <p className="text-slate-600 font-light italic">
                                            "Nous ne nous contentons pas d'installer une fontaine ; nous gérons votre hydratation. Notre service d'entretien sanitaire semestriel garantit une eau toujours conforme aux normes les plus strictes."
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full lg:w-1/2 space-y-12">
                                <div className="space-y-6">
                                    <span className="text-blue-600 font-black text-xs uppercase tracking-[0.4em]">Service Clé en Main</span>
                                    <h2 className="heading-pro-max text-left leading-tight">
                                        <span className="italic font-light text-blue-600 block">Une gestion d'eau</span>
                                        <span className="font-bold text-slate-950 block">zéro souci, zéro effort.</span>
                                    </h2>
                                </div>

                                <div className="space-y-8">
                                    {[
                                        { title: "Installation Professionnelle", text: "Raccordement discret et esthétique au réseau d'eau par nos techniciens spécialisés." },
                                        { title: "Entretien Sanitaire Planifié", text: "Désinfection microbiologique et changement des filtres tous les 6 mois inclus." },
                                        { title: "Support Prioritaire 24/h", text: "Une ligne dédiée pour nos clients corporatifs avec intervention garantie sous 24h ouvrables." },
                                        { title: "Facturation Simplifiée", text: "Un tarif mensuel unique regroupant location, filtres et maintenance." }
                                    ].map((service, index) => (
                                        <div key={index} className="flex gap-6 group">
                                            <div className="w-2 h-2 rounded-full bg-blue-600 mt-2.5 shrink-0" />
                                            <div className="space-y-1">
                                                <h4 className="text-lg font-bold text-slate-950 group-hover:text-blue-600 transition-colors">{service.title}</h4>
                                                <p className="text-slate-500 font-light leading-relaxed">{service.text}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="pt-8">
                                    <ProMaxButton 
                                        variant="primary"
                                        asChild
                                    >
                                        <NavLink to="/contact-entreprises">
                                            Demander une soumission PRO
                                            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                                        </NavLink>
                                    </ProMaxButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. SECTORS SECTION - REDESIGNED TO MATCH FILTRATION PAGE */}
                <section className="py-32 bg-white relative overflow-hidden">
                    <div className="container mx-auto px-6 relative z-10">
                        <div className="text-center max-w-4xl mx-auto mb-20">
                            <span className="inline-block px-4 py-1 bg-blue-600/10 text-blue-600 rounded-full text-[10px] font-black tracking-widest mb-6 uppercase">
                                Expertise Multisectorielle
                            </span>
                            <h2 className="heading-pro-max text-center">
                                <span className="italic font-light text-blue-600 block">Des solutions adaptées</span>
                                <span className="font-bold text-slate-950 block">à chaque milieu professionnel.</span>
                            </h2>
                            <p className="body-pro-max text-center mt-6 mx-auto max-w-2xl">
                                Que vous soyez une start-up créative ou une manufacture multi-sites, nous configurons nos fontaines pour répondre aux exigences spécifiques de votre secteur.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {sectors.map((item, i) => (
                                <div 
                                    key={i} 
                                    className="group relative h-[500px] rounded-[3rem] overflow-hidden border border-slate-100 bg-slate-50/50 cursor-pointer shadow-sm transition-all duration-700 hover:shadow-2xl hover:shadow-blue-200/50 hover:border-blue-100 hover:-translate-y-3"
                                >
                                    {/* background with slight zoom on hover */}
                                    <div className="absolute inset-0 z-0 scale-105 group-hover:scale-110 transition-transform duration-[2000ms]">
                                        <img 
                                            src={item.img} 
                                            alt={item.title} 
                                            className="w-full h-full object-cover opacity-1 group-hover:opacity-40 transition-opacity grayscale group-hover:grayscale-0" 
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent" />
                                    </div>

                                    <div className="relative z-10 p-10 flex flex-col h-full justify-between">
                                        <div className="space-y-6">
                                            <div className="flex items-center justify-between">
                                                <div className={`w-14 h-14 rounded-2xl ${item.color} text-white flex items-center justify-center shadow-lg transition-transform duration-500 group-hover:rotate-12`}>
                                                    {item.icon}
                                                </div>
                                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 group-hover:text-blue-600 transition-colors">
                                                    {item.benefit}
                                                </span>
                                            </div>
                                            <h3 className="text-3xl font-bold text-slate-800 leading-[1.1] transition-all duration-500 group-hover:text-blue-700">
                                                {item.title}
                                            </h3>
                                            <p className="body-pro-max text-sm leading-relaxed text-slate-600 opacity-80 group-hover:opacity-100 transition-all">
                                                {item.desc}
                                            </p>
                                        </div>

                                        <div className="flex items-center gap-2 text-blue-600 font-bold text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                                            Voir solutions <ChevronRight className="w-4 h-4" />
                                        </div>
                                    </div>

                                    {/* Glow effect on hover */}
                                    <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-blue-400/20 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <TestimonialsSection filterProduct="/refroidisseurs-eau-entreprises" />

                {/* 6. FINAL CTA */}
                <section className="py-32 bg-blue-600 relative overflow-hidden">
                    <div className="absolute inset-0 z-0 opacity-10">
                        <img src={heroFountains} alt="Bricareau PRO" className="w-full h-full object-cover" />
                    </div>
                    <div className="container mx-auto px-6 relative z-10 text-center space-y-12">
                        <div className="max-w-4xl mx-auto space-y-6">
                            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                                Prêt à offrir une eau d'exception <br />
                                <span className="italic">à vos collaborateurs ?</span>
                            </h2>
                            <p className="text-xl text-blue-100/80 font-light">
                                Profitez d'un essai gratuit de 7 jours, sans engagement. 
                                Nous installons, vous dégustez, nous discutons après.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                            <ProMaxButton 
                                variant="white"
                                asChild
                            >
                                <NavLink to="/contact-entreprises">Réserver mon essai gratuit</NavLink>
                            </ProMaxButton>
                            <ProMaxButton 
                                variant="outline-white"
                                asChild
                            >
                                <a href="tel:18552649328" className="flex items-center gap-3">
                                    <Phone className="w-5 h-5" />
                                    1-855-264-9328
                                </a>
                            </ProMaxButton>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default RefroidisseursEauEntreprises;
