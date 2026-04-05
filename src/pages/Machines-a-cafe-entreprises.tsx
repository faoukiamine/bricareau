import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TestimonialsSection from "@/components/TestimonialsSection";
import ExpertAvatars from "@/components/ExpertAvatars";
import GlobalBreadcrumbs from "@/components/GlobalBreadcrumbs";
import {
    Coffee,
    Zap,
    Users,
    ChevronRight,
    ArrowRight,
    Award,
    ShieldCheck,
    CheckCircle2,
    Clock,
    TrendingUp,
    Phone,
    Plus,
    Droplets,
    Heart,
    Handshake,
    Microwave // Using as placeholder or others
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

// Reusing assets or mimicking the look
import heroFountains from "@/assets/Fontaines d'eau.webp"; // Background
import officeCoffeeImg from "@/assets/water-dispenser in office.jpg"; // For hero or section
import officeLifeImg from "@/assets/10271.jpg"; // For collaboration section
import bellucciBistroImg from "@/assets/bellucci-bistro.jpg";
import saecoRoyalImg from "@/assets/saeco-royal-otc.jpg";
import lacimbaliSLiteImg from "@/assets/lacimbali-s-lite.webp";
import juraX10Img from "@/assets/jura-x10-dark-inox.jpg";
import rexS300ManualImg from "@/assets/rex-royal-s300-manual.png";
import rexS2ManualImg from "@/assets/rex-royal-s2-manual.png";
import rexS2AutomilkImg from "@/assets/rex-royal-s2-automilk.webp";
import rexS300AutomilkImg from "@/assets/rex-royal-s300-automilk.png";
import nectaKreaImg from "@/assets/necta-krea-touch.jpg";
import nectaKometaImg from "@/assets/necta-kometa.png";
import rexS1AutomilkImg from "@/assets/rex-royal-s1-automilk.webp";
import bellucciCaffeBarImg from "@/assets/bellucci-coffee-bar-plus.jpg";
import juraW8Img from "@/assets/jura-w8-dark-inox.webp";
import saecoMagicImg from "@/assets/saeco-magic-m2.jpg";
import saecoIdeaImg from "@/assets/saeco-idea-duo-restyle.jpg";
import gaggiaConcettoImg from "@/assets/gaggia-concetto-evo-duo.png";
import gaggiaG150Img from "@/assets/gaggia-g150.jpg";
import juraGigaX8Img from "@/assets/jura-giga-x8.webp";
import juraGigaX8cImg from "@/assets/jura-giga-x8c.webp";


const MachinesACafeEntreprises = () => {
    useEffect(() => {
        document.title = "Service de Café pour Entreprises | Solutions Caféine Pro | Bricareau";
        window.scrollTo(0, 0);
    }, []);

    const [activeTab, setActiveTab] = useState("espresso");

    const coffeeSolutions = [
        {
            id: "bellucci-bistro",
            category: "espresso",
            title: "Bellucci Bistro",
            subtitle: "Machine à espresso automatique Bistro",
            desc: "L'art du café à l'état pur. Une élégance sophistiquée avec un broyeur de précision pour vos espaces corporatifs.",
            features: ["Écran tactile intuitif", "Broyeur intégré haute précision", "Mousseur à lait intégré"],
            img: bellucciBistroImg
        },
        {
            id: "saeco-royal-otc",
            category: "espresso",
            title: "Saeco Royal OTC",
            subtitle: "La performance quotidienne",
            desc: "Un classique redéfini pour le bureau. Rapidité, robustesse et une interface conviviale pour tous vos espresso.",
            features: ["Entretien simplifié", "Système One Touch Cappuccino", "Broyeur conique en acier"],
            img: saecoRoyalImg
        },
        {
            id: "lacimbali-s-lite",
            category: "espresso",
            title: "LaCimbali S-Lite",
            subtitle: "Technologie Italienne Compacte",
            desc: "Un concentré de puissance dans un format compact. Idéal pour les boutiques ou les petits bureaux de prestige.",
            features: ["Chaudière performante", "Interface tactile HD 10\"", "Production de mousse de qualité"],
            img: lacimbaliSLiteImg
        },
        {
            id: "jura-x10",
            category: "grain",
            title: "Jura X10 Dark Inox",
            subtitle: "La référence suisse",
            desc: "L'excellence helvétique au service du goût. Une versatilité incroyable pour des cafés spécialisés parfaits.",
            features: ["Processus d'extraction Pulse (P.E.P.®)", "31 spécialités programmables", "Broyeur Professional Aroma"],
            img: juraX10Img
        },
        {
            id: "rex-royal-s300-manual",
            category: "grain",
            title: "Rex-Royal S300 Manual",
            subtitle: "Tradition et Modernité (CST)",
            desc: "Pour les puristes exigeants. Une machine qui offre un contrôle manuel précis tout en automatisant le complexe.",
            features: ["Lait texturé manuellement", "Double broyeur haute performance", "Interface tactile personnalisée"],
            img: rexS300ManualImg
        },
        {
            id: "rex-royal-s2-manual",
            category: "grain",
            title: "Rex-Royal S2 Manual",
            subtitle: "L'élégance ergonomique (CST)",
            desc: "Une robustesse légendaire suisse. Conçue pour durer et offrir une qualité de grain exceptionnelle jour après jour.",
            features: ["Corps en métaux nobles", "Écran tactile personnalisable", "Maintenance ultra-rapide"],
            img: rexS2ManualImg
        },
        {
            id: "rex-royal-s2-automilk",
            category: "grain",
            title: "Rex-Royal S2 Automilk",
            subtitle: "Lait parfait automatisé (MCTI)",
            desc: "La perfection dans chaque tasse. Le système Automilk transforme le lait en une mousse veloutée sans intervention.",
            features: ["Système Automilk breveté", "Grains fraîchement moulus", "Refroidisseur à lait intégré"],
            img: rexS2AutomilkImg
        },
        {
            id: "rex-royal-s300-automilk",
            category: "grain",
            title: "Rex-Royal S300 Automilk",
            subtitle: "Le summum du volume (MCTI)",
            desc: "La bête de somme du bureau. Capable de gérer une affluence record sans jamais sacrifier la qualité.",
            features: ["Vitesse de production XXL", "Nettoyage automatique certifié", "Interface professionnelle"],
            img: rexS300AutomilkImg
        },
        {
            id: "necta-krea",
            category: "grain",
            title: "Necta Krea Touch",
            subtitle: "Design contemporain haut de gamme",
            desc: "Une allure futuriste qui sublime votre bureau. Des boissons variées, du chocolat chaud riche aux espresso serrés.",
            features: ["Cadre éclairé par LED", "Interface tactile conviviale", "Technologie d'infusion optimisée"],
            img: nectaKreaImg
        },
        {
            id: "necta-kometa",
            category: "grain",
            title: "Necta Kometa",
            subtitle: "Performance et Polyvalence",
            desc: "L'innovation accessible. Une solution de café complète pour les environnements de travail dynamiques.",
            features: ["Compacte et puissante", "Menu riche et personnalisable", "Accès facile pour maintenance"],
            img: nectaKometaImg
        },
        {
            id: "rex-royal-s1-automilk",
            category: "grain",
            title: "Rex-Royal S1 Automilk",
            subtitle: "Compact Automilk (MCT)",
            desc: "Petite par la taille, grande par l'arôme. La solution idéale pour les bureaux exigus cherchant un lait parfait.",
            features: ["Design Gain de place", "Système de lait automatisé", "Écran tactile couleur"],
            img: rexS1AutomilkImg
        },
        {
            id: "bellucci-caffe-bar",
            category: "espresso",
            title: "Bellucci Caffè Bar Plus",
            subtitle: "Votre station café complète",
            desc: "Imaginez un café bar professionnel dans votre espace de pause. Une polyvalence totale pour tous les goûts.",
            features: ["Double chaudière ultra-rapide", "Compatible raccordement d'eau", "Bac à grains XXL"],
            img: bellucciCaffeBarImg
        },
        {
            id: "jura-w8",
            category: "espresso",
            title: "Jura W8 Dark Inox",
            subtitle: "L'esprit de bureau premium",
            desc: "Conçue pour durer. Une machine de service moyenne gamme avec des performances dignes des plus grandes Jura.",
            features: ["Broyeur P.A.G.2+", "Écran tactile haute résolution", "Système de nettoyage automatique"],
            img: juraW8Img
        },
        {
            id: "saeco-magic-m2",
            category: "espresso",
            title: "Saeco Magic M2 +",
            subtitle: "La magie du café interactif",
            desc: "Une expérience utilisateur sans précédent. Chaque sélection est un plaisir visuel et gustatif.",
            features: ["Interface graphique riche", "Sorties réglables en hauteur", "Système de lait hygiénique"],
            img: saecoMagicImg
        },
        {
            id: "saeco-idea",
            category: "espresso",
            title: "Saeco Idea Duo Restyle",
            subtitle: "L'icône du café professionnel",
            desc: "Une machine à café puissante et élégante, parfaite pour les environnements à haut débit et les connaisseurs.",
            features: ["Double sortie pour service rapide", "Vapeur et eau chaude simultanées", "Logiciel de gestion avancée"],
            img: saecoIdeaImg
        },
        {
            id: "gaggia-concetto",
            category: "espresso",
            title: "Gaggia Concetto Evo Duo",
            subtitle: "L'héritage Gaggia au bureau",
            desc: "Un hommage à l'espresso italien traditionnel avec une technologie de pointe pour une extraction parfaite.",
            features: ["Groupes d'infusion haut rendement", "Interface capacitive Pro", "Qualité de mousse barista"],
            img: gaggiaConcettoImg
        },
        {
            id: "gaggia-g150",
            category: "espresso",
            title: "Gaggia G150",
            subtitle: "Performance Industrielle",
            desc: "La machine conçue pour les charges de travail intensives sans compromis sur la finesse de l'arôme.",
            features: ["Structure robuste en métal", "Interface conviviale", "Rapidité d'exécution constante"],
            img: gaggiaG150Img
        },
        {
            id: "jura-giga-x8",
            category: "grain",
            title: "Jura Giga X8",
            subtitle: "La puissance ultime chez Jura",
            desc: "La Giga X8 symbolise le luxe et la performance ultime. Deux moulins pour des mélanges personnalisés parfaits.",
            features: ["2 broyeurs en céramique", "Buse de vapeur mobile", "Performance record"],
            img: juraGigaX8Img
        },
        {
            id: "jura-giga-x8c",
            category: "grain",
            title: "Jura Giga X8c",
            subtitle: "Puissance avec raccordement direct",
            desc: "Toute la force de la Giga X8 avec un raccordement direct à l'eau pour une autonomie totale et sans interruption.",
            features: ["Raccordement d'eau fixe", "Large bac à marc", "Interface professionnelle experte"],
            img: juraGigaX8cImg
        }
    ];


    return (
        <div className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900">
            <Header />
            <main>
                {/* 1. HERO SECTION - CULLIGAN INSPIRED BUT PRO MAX STYLE */}
                <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden bg-slate-950">
                    <div className="absolute inset-0 z-0">
                        <img 
                            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1920&auto=format&fit=crop" 
                            alt="Equipe bureau café" 
                            className="w-full h-full object-cover opacity-30 scale-105" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/60 to-transparent" />
                    </div>

                    {/* Breadcrumbs - Hidden on Mobile, Absolute on Desktop */}
                    <div className="absolute top-[30px] left-0 right-0 z-30 pointer-events-none hidden lg:block">
                        <div className="container mx-auto px-6 pointer-events-auto">
                            <GlobalBreadcrumbs variant="dark" />
                        </div>
                    </div>

                    <div className="container mx-auto px-6 relative z-10">
                        <div className="max-w-4xl space-y-8 animate-in fade-in slide-in-from-bottom-20 duration-1000">
                            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-400 text-[10px] font-black tracking-[0.4em] uppercase">
                                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                                Solution Caféine Entreprise
                            </div>
                            
                            <h1 className="text-6xl lg:text-[5.5rem] font-bold text-white leading-[0.9] tracking-tighter">
                                Machines à café <br />
                                <span className="text-blue-500 italic font-light">professionnelles.</span>
                            </h1>
                            
                            <p className="text-xl text-slate-400 max-w-2xl font-light leading-relaxed">
                                Profitez d'une expérience Barista directement au bureau. Améliorez le moral et la productivité avec des équipements de pointe, une filtration d'eau supérieure et des grains d'exception.
                            </p>
                            
                            <div className="flex flex-wrap gap-6 pt-4">
                                <Button size="lg" className="h-[72px] px-12 text-lg rounded-full font-bold group bg-blue-600 hover:bg-blue-700 shadow-2xl shadow-blue-500/20" asChild>
                                    <NavLink to="/contact-entreprises">
                                        Obtenir mon estimation gratuite
                                        <ArrowRight className="ml-3 w-6 h-6 transition-transform group-hover:translate-x-2" />
                                    </NavLink>
                                </Button>
                                <Button variant="outline" size="lg" className="h-[72px] px-12 text-lg rounded-full border-white/20 text-white hover:bg-white/10 backdrop-blur-md">
                                    Voir nos machines
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>


                {/* 2. VALUE PROPOSITION SECTION */}
                <section className="py-32 bg-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-50 rounded-full blur-[120px] -mr-[400px] -mt-[400px] opacity-60" />
                    
                    <div className="container mx-auto px-6 relative z-10">
                        <div className="flex flex-col lg:flex-row items-center gap-24">
                            <div className="w-full lg:w-1/2 space-y-10 order-2 lg:order-1">
                                <div className="space-y-6">
                                    <h2 className="text-4xl lg:text-5xl font-bold text-slate-950 leading-tight tracking-tight">
                                        Votre meilleur choix <br />
                                        <span className="italic font-light text-blue-600">pour le service de café.</span>
                                    </h2>
                                    <p className="text-lg text-slate-500 font-light leading-relaxed">
                                        En vous associant à Bricareau, vous bénéficiez de services de café fiables. Il est facile d'offrir aux employés un café savoureux du matin au soir, stimulant la créativité et le sens de la communauté.
                                    </p>
                                </div>

                                <div className="space-y-8">
                                    {[
                                        { icon: Heart, title: "Rétention des talents", desc: "Un avantage social simple qui fait la différence au quotidien." },
                                        { icon: Handshake, title: "Environnement collaboratif", desc: "La machine à café est le catalyseur des échanges informels et productifs." },
                                        { icon: TrendingUp, title: "Engagement de la main-d'œuvre", desc: "Une équipe bien hydratée et énergisée est une équipe performante." }
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-6 group">
                                            <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110 transition-all duration-500">
                                                <item.icon className="w-6 h-6" />
                                            </div>
                                            <div className="space-y-1">
                                                <h4 className="text-xl font-bold text-slate-950 group-hover:text-blue-600 transition-colors">{item.title}</h4>
                                                <p className="text-slate-500 font-light leading-relaxed">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="w-full lg:w-1/2 order-1 lg:order-2">
                                <div className="relative group">
                                    <div className="absolute -inset-6 bg-blue-600/5 rounded-[4rem] blur-3xl scale-95 group-hover:scale-100 transition-transform duration-1000" />
                                    <img 
                                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop" 
                                        alt="Culligan style collaboration" 
                                        className="relative rounded-[3.5rem] shadow-2xl w-full aspect-[4/3] object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-1000"
                                    />
                                    <div className="absolute -bottom-8 -left-8 p-10 bg-white shadow-2xl rounded-[3rem] border border-slate-100 hidden sm:block animate-bounce-slow">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white">
                                                <Award className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <div className="text-2xl font-black text-slate-950">98%</div>
                                                <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">Satisfaction Employés</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. PRODUCT GRID - CULLIGAN STYLE CARDS */}
                <section className="py-32 bg-slate-50 relative overflow-hidden">
                    <div className="container mx-auto px-6">
                        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
                            <h2 className="text-4xl lg:text-5xl font-bold text-slate-950 tracking-tight">
                                La sélection <span className="italic font-light text-blue-600">Bricareau PRO.</span>
                            </h2>
                            <p className="text-slate-500 font-light text-lg">
                                Choisissez parmi nos gammes à dosettes, à infusion ou nos cafetières à grains. 
                                Une solution pour chaque taille d'entreprise.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12 max-w-7xl mx-auto">
                            {coffeeSolutions.map((item, idx) => (
                                <div key={idx} className="group bg-white rounded-[3.5rem] overflow-hidden border border-slate-100 shadow-[0_30px_60px_rgba(0,0,0,0.03)] hover:shadow-[0_45px_90px_rgba(0,0,0,0.08)] transition-all duration-700 hover:-translate-y-2">
                                    <div className="p-12 flex flex-col h-full">
                                        <div className="w-full aspect-[4/3] bg-slate-50 rounded-[2.5rem] mb-10 overflow-hidden relative p-8">
                                            <img src={item.img} alt={item.title} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-[2s]" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                        </div>
                                        
                                        <div className="flex-grow space-y-4">
                                            <h3 className="text-3xl font-bold text-slate-900 tracking-tight">{item.title}</h3>
                                            <p className="text-blue-600 font-black text-[10px] uppercase tracking-[0.2em]">{item.subtitle}</p>
                                            <p className="text-slate-500 font-light leading-relaxed">{item.desc}</p>
                                            
                                            <div className="grid grid-cols-2 gap-4 mt-8">
                                                {item.features.map((f, i) => (
                                                    <div key={i} className="flex items-center gap-2">
                                                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                                                        <span className="text-xs font-medium text-slate-600">{f}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="mt-12 pt-8 border-t border-slate-50 flex items-center justify-between">
                                            <Button variant="ghost" className="px-0 font-bold text-slate-950 hover:bg-transparent group/btn">
                                                Détails techniques
                                                <Plus className="ml-2 w-4 h-4 transition-transform group-hover/btn:rotate-90" />
                                            </Button>
                                            <Button size="lg" className="rounded-full h-14 px-8 bg-slate-900 hover:bg-blue-600 text-white transition-all duration-500">
                                                Choisir
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 4. FILTRATION ADVANTAGE SECTION (THE BRICAREAU DNA) */}
                <section className="py-32 bg-white flex items-center">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col lg:flex-row items-center gap-24">
                            <div className="w-full lg:w-1/2 relative group">
                                <img 
                                    src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop" 
                                    alt="Coffee & Filtered Water" 
                                    className="rounded-[4rem] shadow-2xl w-full h-[600px] object-cover brightness-90 group-hover:brightness-100 transition-all duration-1000"
                                />
                                <div className="absolute inset-0 bg-blue-900/10 rounded-[4rem]" />
                                <div className="absolute top-10 left-10 right-10 p-8 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20">
                                    <div className="flex items-center gap-4 text-white">
                                        <Droplets className="w-6 h-6 text-blue-400" />
                                        <p className="text-sm font-medium tracking-tight">Optimisé par la filtration Bricareau Pure</p>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full lg:w-1/2 space-y-10">
                                <h2 className="text-4xl lg:text-5xl font-bold text-slate-950 leading-tight tracking-tight">
                                    Libérez le véritable <br />
                                    <span className="italic font-light text-blue-600">potentiel aromatique.</span>
                                </h2>
                                <p className="text-lg text-slate-500 font-light leading-relaxed">
                                    Un café savoureux commence par une eau d'une pureté irréprochable. En éliminant le chlore, les sédiments et les minéraux excessifs, notre système de filtration intégré sublime chaque grain et préserve la durée de vie de vos équipements.
                                </p>
                                <div className="flex flex-col gap-6">
                                    <div className="p-8 rounded-[2.5rem] bg-blue-50/50 border border-blue-100 hover:bg-blue-50 transition-colors">
                                        <h4 className="text-xl font-bold text-slate-950 mb-2">Avantage Filtration Pro</h4>
                                        <p className="text-slate-500 font-light text-sm italic">"Une eau filtrée à 0.5 micron élimine les arrière-goûts métalliques pour une tasse digne d'un grand cru."</p>
                                    </div>
                                    <Button variant="link" className="text-blue-600 font-black text-xs uppercase tracking-widest p-0 flex justify-start items-center">
                                        Découvrir notre technologie
                                        <ArrowRight className="ml-2 w-4 h-4" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. FAQ SECTION - CULLIGAN ACCORDION STYLE */}
                <section className="py-32 bg-slate-950 text-white">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto space-y-16">
                            <div className="text-center space-y-6">
                                <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">
                                    Foire aux questions
                                </h2>
                                <p className="text-slate-400 font-light italic">Tout ce que vous devez savoir sur le café au bureau.</p>
                            </div>

                            <Accordion type="single" collapsible className="w-full space-y-4">
                                {[
                                    { q: "Pourquoi choisir Bricareau comme fournisseur de café ?", a: "Nous combinons une expertise unique en filtration d'eau avec des équipements de café haut de gamme pour une expérience sans souci et un goût supérieur." },
                                    { q: "Quelle machine devrais-je choisir pour mon équipe ?", a: "Cela dépend de votre effectif et de vos préférences (dosettes vs grains). Nos experts analysent vos besoins lors de l'estimation gratuite." },
                                    { q: "L'entretien est-il inclus ?", a: "Oui, tous nos forfaits entreprises incluent l'entretien préventif, le détartrage et le support technique prioritaire." },
                                    { q: "Proposez-vous du lait et du sucre ?", a: "Nous offrons une solution de gestion complète des stocks, incluant les essentiels du coin café." }
                                ].map((faq, i) => (
                                    <AccordionItem key={i} value={`faq-${i}`} className="border-b border-white/10 px-4 hover:bg-white/5 transition-colors rounded-2xl overflow-hidden">
                                        <AccordionTrigger className="text-left py-8 text-lg font-bold hover:no-underline hover:text-blue-400 transition-colors">
                                            {faq.q}
                                        </AccordionTrigger>
                                        <AccordionContent className="pb-8 text-slate-400 font-light leading-relaxed">
                                            {faq.a}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                    </div>
                </section>

                <TestimonialsSection />

                {/* 6. FINAL CTA SECTION */}
                <section className="py-32 bg-blue-600 relative overflow-hidden">
                    <div className="absolute inset-0 z-0 opacity-10">
                        <img src="https://images.unsplash.com/photo-1541167760496-1628856ab752?q=80&w=1920&auto=format&fit=crop" alt="Coffee beans" className="w-full h-full object-cover" />
                    </div>
                    <div className="container mx-auto px-6 relative z-10 text-center space-y-12">
                        <div className="max-w-4xl mx-auto space-y-6">
                            <h2 className="text-4xl lg:text-6xl font-bold text-white leading-tight tracking-tighter">
                                Prêt à aimer votre café <br />
                                <span className="italic">autant que votre travail ?</span>
                            </h2>
                            <p className="text-xl text-blue-100/80 font-light max-w-2xl mx-auto">
                                Communiquez dès aujourd'hui avec un expert Bricareau ou demandez une dégustation gratuite dans vos locaux.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 h-[72px] px-14 rounded-full font-bold text-xl shadow-xl hover:scale-105 transition-all" asChild>
                                <NavLink to="/contact-entreprises">Commencer l'essai</NavLink>
                            </Button>
                            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 h-[72px] px-14 rounded-full font-bold text-xl backdrop-blur-md">
                                <a href="tel:18552649328" className="flex items-center gap-3">
                                    <Phone className="w-6 h-6" />
                                    1-855-264-9328
                                </a>
                            </Button>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default MachinesACafeEntreprises;
