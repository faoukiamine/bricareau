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
import { ProMaxButton } from "@/components/ui/ProMaxButton";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

// Reusing assets 
import heroFountains from "@/assets/Fontaines d'eau.webp"; // Background
import officeCoffeeImg from "@/assets/water-dispenser in office.jpg"; 
import bellucciBistroImg from "@/assets/bellucci-bistro.jpg";
import saecoRoyalImg from "@/assets/saeco-royal-otc.jpg";
import lacimbaliSLiteImg from "@/assets/lacimbali-s-lite.webp";
import juraX10Img from "@/assets/jura-x10-dark-inox.jpg";
import rexS300ManualImg from "@/assets/rex-royal-s300-manual.png";
import rexS2ManualImg from "@/assets/rex-royal-s2-manual.png";
import rexS2AutomilkImg from "@/assets/rex-royal-s2-automilk.webp";
import rexS300AutomilkImg from "@/assets/rex-royal-s300-automilk-pro.png";
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

    // Reordered from smallest capacity to largest
    const coffeeSolutions = [
        {
            id: "bellucci-bistro",
            title: "Bellucci Bistro",
            subtitle: "La plus compacte",
            desc: "L'art du café à l'état pur dans un format ultra-compact. Parfait pour les bureaux de direction et espaces restreints.",
            features: ["Écran tactile intuitif", "Broyeur de précision", "Design élégant"],
            img: bellucciBistroImg
        },
        {
            id: "saeco-royal-otc",
            title: "Saeco Royal OTC",
            subtitle: "Classique polyvalent",
            desc: "La robustesse SAECO éprouvée pour le bureau quotidien. Un espresso parfait en une seule touche.",
            features: ["One Touch Cappuccino", "Maintenance facile", "Rapport qualité/prix imbattable"],
            img: saecoRoyalImg
        },
        {
            id: "jura-w8",
            title: "Jura W8 Dark Inox",
            subtitle: "L'élégance helvétique",
            desc: "Toute la précision suisse pour environ 50 tasses/jour. Un café gourmet à chaque tasse.",
            features: ["Nettoyage automatique", "31 spécialités", "P.E.P.® Extraction"],
            img: juraW8Img
        },
        {
            id: "saeco-magic-m2",
            title: "Saeco Magic M2 +",
            subtitle: "Expérience interactive",
            desc: "Une interface riche et des sorties réglables en hauteur pour s'adapter à toutes les tasses.",
            features: ["Interface graphique riche", "Sorties réglables", "Lait hygiénique"],
            img: saecoMagicImg
        },
        {
            id: "lacimbali-s-lite",
            title: "LaCimbali S-Lite",
            subtitle: "Prestige Compact",
            desc: "Le savoir-faire italien dans une machine compacte de haute performance. Idéal pour les boutiques de luxe.",
            features: ["Chaudière performante", "Écran HD 10\"", "Mousse de lait barista"],
            img: lacimbaliSLiteImg
        },
        {
            id: "rex-royal-s1-automilk",
            title: "Rex-Royal S1 Automilk",
            subtitle: "Petit volume Premium",
            desc: "La qualité Rex-Royal dans un format gain de place avec le système de lait automatisé révolutionnaire.",
            features: ["Design compact S1", "Lait automatisé MCT", "Écran couleur tactile"],
            img: rexS1AutomilkImg
        },
        {
            id: "jura-x10",
            title: "Jura X10 Dark Inox",
            subtitle: "La performance sans compromis",
            desc: "Conçue pour durer, la X10 offre une versatilité impressionnante pour les bureaux exigeants.",
            features: ["31 spécialités", "Broyeur Professional Aroma", "Réservoir eau extra-large"],
            img: juraX10Img
        },
        {
            id: "bellucci-caffe-bar",
            title: "Bellucci Caffè Bar Plus",
            subtitle: "Station Café Complète",
            desc: "Transformez votre espace de pause en véritable café-bar avec cette station polyvalente.",
            features: ["Double chaudière rapide", "Grand bac à grains", "Raccordement possible"],
            img: bellucciCaffeBarImg
        },
        {
            id: "gaggia-concetto",
            title: "Gaggia Concetto Evo Duo",
            subtitle: "L'héritage italien",
            desc: "Performance et tradition se rencontrent pour offrir un débit constant de qualité professionnelle.",
            features: ["Infusion haut rendement", "Interface capacitive Pro", "Design intemporel"],
            img: gaggiaConcettoImg
        },
        {
            id: "necta-kometa",
            title: "Necta Kometa",
            subtitle: "L'innovation accessible",
            desc: "Un menu riche dans une machine aux lignes modernes. La polyvalence incarnée pour l'entreprise dynamique.",
            features: ["Menu personnalisable", "Maintenance simplifiée", "Design attractif"],
            img: nectaKometaImg
        },
        {
            id: "rex-royal-s2-manual",
            title: "Rex-Royal S2 Manual",
            subtitle: "Standard Suisse (CST)",
            desc: "La robustesse légendaire pour un usage intensif. Une ergonomie parfaite pour la qualité en volume.",
            features: ["Construction métal noble", "Ergonomie suisse", "Longévité exceptionnelle"],
            img: rexS2ManualImg
        },
        {
            id: "rex-royal-s2-automilk",
            title: "Rex-Royal S2 Automilk",
            subtitle: "Standard Pro (MCTI)",
            desc: "Le best-seller suisse. Un lait parfait et une mouture précise pour un débit constant toute la journée.",
            features: ["Lait Automilk", "Entretien certifié", "Fiabilité totale"],
            img: rexS2AutomilkImg
        },
        {
            id: "necta-krea",
            title: "Necta Krea Touch",
            subtitle: "Vitesse et Capacité",
            desc: "Spécialement conçue pour le libre-service à haut débit avec un éclairage LED attractif.",
            features: ["Cadre LED", "Infusion optimisée", "Boissons gourmandes variées"],
            img: nectaKreaImg
        },
        {
            id: "gaggia-g150",
            title: "Gaggia G150",
            subtitle: "Heavy Duty",
            desc: "Une machine construite pour les environnements industriels et les cafeterias à fort achalandage.",
            features: ["Structure métal robuste", "Débit intensif", "Rapidité constante"],
            img: gaggiaG150Img
        },
        {
            id: "saeco-idea",
            title: "Saeco Idea Duo Restyle",
            subtitle: "Double performance",
            desc: "Performance XXL avec double bec verseur pour servir deux tasses simultanément sans perte de qualité.",
            features: ["Vapeur/Eau chaude simultanées", "Logiciel de gestion Pro", "Haut débit"],
            img: saecoIdeaImg
        },
        {
            id: "rex-royal-s300-manual",
            title: "Rex-Royal S300 Manual",
            subtitle: "Puriste Haut Volume (CST)",
            desc: "Le summum du contrôle manuel pour les gros volumes. Pour ceux qui ne font aucun compromis.",
            features: ["Lait texturé manuellement", "Double broyeur haute performance", "Volume de production élevé"],
            img: rexS300ManualImg
        },
        {
            id: "rex-royal-s300-automilk",
            title: "Rex-Royal S300 Automilk",
            subtitle: "Automate XXL (MCTI)",
            desc: "La machine la plus puissante pour les cafétérias d'entreprise et les hôpitaux. Capacité monstre.",
            features: ["Production record", "Systeme Automilk XXL", "Interface Expert"],
            img: rexS300AutomilkImg
        },
        {
            id: "jura-giga-x8",
            title: "Jura Giga X8",
            subtitle: "Luxe & Performance",
            desc: "Double moulin céramique pour l'ultime qualité en haut débit. L'étoile de la gamme Jura.",
            features: ["2 broyeurs céramique", "Buse de vapeur mobile", "Performance d'exception"],
            img: juraGigaX8Img
        },
        {
            id: "jura-giga-x8c",
            title: "Jura Giga X8c",
            subtitle: "Autonomie Totale",
            desc: "Le summum de la performance avec raccordement direct à l'eau pour une productivité ininterrompue.",
            features: ["Raccordement d'eau direct", "Expertise helvétique", "Débit ininterrompu"],
            img: juraGigaX8cImg
        }
    ];

    return (
        <div className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900">
            <Header />
            <main>
                {/* 1. HERO SECTION */}
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
                                <ProMaxButton 
                                    asChild
                                    variant="primary"
                                >
                                    <NavLink to="/contact-entreprises">
                                        Obtenir mon estimation gratuite
                                        <ArrowRight className="ml-3 w-6 h-6 transition-transform group-hover:translate-x-2" />
                                    </NavLink>
                                </ProMaxButton>
                                <ProMaxButton 
                                    variant="outline-white"
                                    asChild
                                >
                                    <button onClick={() => {
                                        const el = document.getElementById('collection-pro');
                                        el?.scrollIntoView({ behavior: 'smooth' });
                                    }}>
                                        Voir nos machines
                                    </button>
                                </ProMaxButton>
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

                {/* 3. PRODUCT GRID */}
                <section className="py-32 bg-slate-50 relative overflow-hidden">
                    <div className="container mx-auto px-6">
                        <div id="collection-pro" className="text-center max-w-3xl mx-auto mb-20 space-y-6 scroll-mt-[120px]">
                            <div className="inline-block px-4 py-1 bg-blue-600/10 text-blue-600 rounded-full text-[10px] font-black tracking-widest uppercase">
                                Notre Collection PRO
                            </div>
                            <h2 className="text-4xl lg:text-5xl font-bold text-slate-950 tracking-tight">
                                La sélection <span className="italic font-light text-blue-600">Bricareau PRO.</span>
                            </h2>
                            <p className="text-slate-500 font-light text-lg">
                                Classées par capacité : des solutions agiles pour PME aux automates haute performance pour cafétérias industrielles.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12 max-w-7xl mx-auto">
                            {coffeeSolutions.map((item, idx) => (
                                <div key={idx} className="group bg-white rounded-[3.5rem] overflow-hidden border border-slate-100 shadow-[0_30px_60px_rgba(0,0,0,0.03)] hover:shadow-[0_45px_90px_rgba(0,0,0,0.08)] transition-all duration-700 hover:-translate-y-2">
                                    <div className="p-12 flex flex-col h-full">
                                        <div className="w-full aspect-square bg-slate-50/50 rounded-[2.5rem] mb-10 overflow-hidden relative p-6">
                                            <img src={item.img} alt={item.title} className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-[2s]" />
                                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
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

                                        <div className="mt-12 pt-8 border-t border-slate-50 flex items-center justify-end">
                                            <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-500 cursor-pointer group/arrow shadow-sm">
                                                <ArrowRight className="w-6 h-6 transition-transform group-hover/arrow:translate-x-1" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 4. FILTRATION ADVANTAGE SECTION */}
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

                <TestimonialsSection />

                {/* 5. FINAL CTA SECTION */}
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
                            <ProMaxButton 
                                variant="white"
                                asChild
                            >
                                <NavLink to="/contact-entreprises">Commencer l'essai</NavLink>
                            </ProMaxButton>
                            <ProMaxButton 
                                variant="outline-white"
                                asChild
                            >
                                <a href="tel:18552649328" className="flex items-center gap-3">
                                    <Phone className="w-6 h-6" />
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

export default MachinesACafeEntreprises;
