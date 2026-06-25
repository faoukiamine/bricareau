import React, { useEffect, useState } from "react";
import { 
    Zap, 
    ShieldCheck,
    Droplets,
    Phone,
    Mail,
    ArrowRight,
    Factory,
    Activity,
    CheckCircle2,
    Settings,
    Layers,
    ChevronRight,
    ChevronLeft,
    BarChart,
    Cog,
    Waves
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { ProMaxButton } from "@/components/ui/ProMaxButton";
import TestimonialsSection from "@/components/TestimonialsSection";
import { NavLink } from "@/components/NavLink";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from "@/components/ui/accordion";

// Assets
import heroImg from "@/assets/Filtres d'eau industriels.jpg";
import multimediaImg from "@/assets/7kbp.png";
import charbonImg from "@/assets/Industrial Water Softeners.png";
import catalytiqueImg from "@/assets/filtre-catalytique-new.jpg";
import multiCartoucheImg from "@/assets/IMG_FILTRE_QFINOX.jpg";
import skidsImg from "@/assets/skids-sur-mesure-nobg.png";

const FiltrationIndustrielle = () => {
    const navigate = useNavigate();
    const [showAllFaqs, setShowAllFaqs] = useState(false);

    useEffect(() => {
        document.title = "Filtres d'eau industriels | Multimédia, Charbon, Catalytique | Bricareau";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Découvrir nos solutions de filtration industrielle : filtres multimédias, à charbon actif, catalytiques et à sable vert pour une eau de process ultra-pure.");
        }
        window.scrollTo(0, 0);
    }, []);


    const faqs = [
        {
            q: "Quelle est la différence entre un filtre à sable et un filtre multimédia ?",
            a: "Un filtre à sable simple retient les particules en surface. Un filtre multimédia utilise plusieurs couches (Anthracite, Sable, Grenat) de densités différentes, permettant de piéger les particules sur toute la profondeur du lit. Cela triple la capacité de rétention et permet une filtration plus fine (jusqu'à 10 microns)."
        },
        {
            q: "Pourquoi le fer et le manganèse nécessitent-ils un filtre catalytique ou à sable vert ?",
            a: "Le fer et le manganèse dissous dans l'eau sont invisibles et traversent les filtres classiques. Les médias catalytiques ou le sable vert agissent comme des oxydants ou des catalyseurs : ils transforons le fer dissous en particules solides qui sont ensuite piégées dans le lit filtrant, puis expulsées lors du lavage à contre-courant."
        },
        {
            q: "Le filtre à charbon actif est-il nécessaire pour une application industrielle ?",
            a: "Si votre eau de process nécessite d'être exempte de chlore (qui endommage gravement les membranes d'osmose inverse), de chloramines ou de composés organiques volatils (COV) qui altèrent le goût dans l'industrie alimentaire, le charbon actif est la seule technologie viable pour les absorber efficacement."
        },
        {
            q: "Comment est gérée la maintenance de ces systèmes industriels ?",
            a: "Nos systèmes sont équipés de vannes de contrôle automatisées (PLC ou électroniques) qui gèrent les cycles de lavage à contre-courant (backwash) en fonction du volume d'eau traité ou de la différence de pression (Delta-P), garantissant un fonctionnement continu avec une supervision minimale."
        }
    ];

    return (
        <div className="min-h-screen bg-white font-sans overflow-x-hidden">
            <Header />
            
            <main>
                {/* 1. HERO SECTION PRO MAX */}
                <Hero 
                    image={heroImg}
                    highlightedTitle="L'excellence de la filtration,"
                    mainTitle="le bouclier de vos opérations industrielles."
                    subtitle="Protégez vos équipements critiques et garantissez une eau de process irréprochable avec nos systèmes de filtration industriels lourds : Multimédia, Charbon Actif, Catalytique et Sable Vert."
                    showPhone={true}
                    showBreadcrumbs={true}
                />

                {/* 1.5 PROBLÉMATIQUES INDUSTRIELLES - PREMIUM REDESIGN */}
                <section className="py-32 bg-[#051128] relative overflow-hidden">
                    {/* Atmospheric background */}
                    <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_rgba(220,38,38,0.15)_0%,_transparent_50%)] pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,_rgba(37,99,235,0.1)_0%,_transparent_50%)] pointer-events-none" />
                    
                    <div className="container mx-auto px-6 relative z-10">
                        <div className="flex flex-col lg:flex-row gap-20 items-center">
                            
                            <div className="lg:w-1/2 space-y-10">
                                <div className="space-y-6">
                                    <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-red-500/10 text-red-400 border border-red-500/20 rounded-full text-[10px] font-black uppercase tracking-[0.3em]">
                                        <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                                        Le coût de l'inaction
                                    </span>
                                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tighter">
                                        L'eau brute : <br />
                                        <span className="italic font-light text-red-400">le destructeur silencieux</span>
                                        <span className="block text-3xl md:text-4xl mt-2 text-slate-300 font-medium tracking-tight">de vos opérations.</span>
                                    </h2>
                                    <p className="text-lg text-slate-400 font-light leading-relaxed text-justify max-w-xl">
                                        À l'échelle industrielle, l'eau n'est jamais "juste de l'eau". Chargée de sédiments, métaux dissous et produits chimiques, elle s'infiltre dans vos chaînes de production et provoque des dommages irréversibles si elle n'est pas traitée avec une précision d'ingénierie.
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    {[
                                        { title: "Colmatage RO", desc: "Destruction prématurée des membranes d'osmose inverse." },
                                        { title: "Corrosion", desc: "Dégradation accélérée des chaudières et tuyauteries." },
                                        { title: "Surcoûts", desc: "Baisse d'efficacité thermique et pertes énergétiques." },
                                        { title: "Arrêts", desc: "Temps d'arrêt non planifiés et maintenance d'urgence." }
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                                            <div className="mt-1 w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0">
                                                <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                                            </div>
                                            <div>
                                                <h4 className="text-white font-bold text-sm mb-1">{item.title}</h4>
                                                <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="lg:w-1/2 w-full">
                                <div className="relative">
                                    {/* Glassmorphism Card */}
                                    <div className="bg-[#0a1936]/80 backdrop-blur-xl p-10 md:p-14 rounded-[3rem] border border-white/10 shadow-[0_0_80px_-20px_rgba(220,38,38,0.2)] relative overflow-hidden group">
                                        {/* Abstract geometric elements */}
                                        <div className="absolute -top-24 -right-24 w-64 h-64 bg-red-600/20 rounded-full blur-[80px] group-hover:bg-red-500/30 transition-colors duration-1000" />
                                        
                                        <h3 className="text-3xl font-bold text-white mb-10 tracking-tight">L'impact financier réel.</h3>
                                        
                                        <div className="space-y-12 relative z-10">
                                            <div>
                                                <div className="flex justify-between items-end mb-4">
                                                    <span className="text-sm font-bold text-slate-300 uppercase tracking-widest">Durée de vie des équipements</span>
                                                    <span className="text-4xl font-black text-red-400 tracking-tighter">-60<span className="text-2xl">%</span></span>
                                                </div>
                                                <div className="w-full bg-white/5 rounded-full h-3 overflow-hidden border border-white/5">
                                                    <div className="bg-gradient-to-r from-red-600 to-red-400 h-full rounded-full w-[40%] relative">
                                                        <div className="absolute inset-0 bg-white/20 animate-pulse" />
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div>
                                                <div className="flex justify-between items-end mb-4">
                                                    <span className="text-sm font-bold text-slate-300 uppercase tracking-widest">Coûts de maintenance</span>
                                                    <span className="text-4xl font-black text-red-400 tracking-tighter">+45<span className="text-2xl">%</span></span>
                                                </div>
                                                <div className="w-full bg-white/5 rounded-full h-3 overflow-hidden border border-white/5">
                                                    <div className="bg-gradient-to-r from-orange-600 to-red-500 h-full rounded-full w-[85%] relative">
                                                        <div className="absolute inset-0 bg-white/20 animate-pulse" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-12 p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
                                            <p className="text-sm text-slate-300 font-light italic text-center leading-relaxed">
                                                "Investir dans un pré-traitement adéquat n'est pas une dépense. C'est l'assurance vie de votre chaîne de production."
                                            </p>
                                        </div>
                                    </div>
                                    
                                    {/* Decorative floating elements */}
                                    <div className="absolute -left-6 top-12 w-24 h-24 bg-blue-600/20 rounded-full blur-2xl -z-10" />
                                    <div className="absolute -right-12 bottom-12 w-32 h-32 bg-red-600/10 rounded-full blur-3xl -z-10" />
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </section>

                {/* 2. BENTO GRID - ENJEUX INDUSTRIELS */}
                <section className="py-24 lg:py-32 bg-slate-50 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,_rgba(37,99,235,0.03)_0%,_transparent_50%)] pointer-events-none" />
                    
                    <div className="container mx-auto px-6 relative z-10">
                        <div className="max-w-4xl mx-auto text-center mb-24">
                            <span className="inline-block px-4 py-1.5 bg-blue-600/10 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-8">
                                INGÉNIERIE DE PRÉCISION
                            </span>
                            <h2 className="mb-8 heading-pro-max text-center">
                                <span className="italic font-light text-[#2563eb] block">L'infrastructure vitale</span>
                                <span className="font-bold text-[#1e3a8a] block text-center">de vos opérations.</span>
                            </h2>
                            <p className="body-pro-max text-slate-500 text-center mx-auto max-w-2xl">
                                Une eau mal filtrée entraîne l'encrassement des membranes d'osmose inverse, la corrosion des chaudières et des arrêts de production coûteux. Nos filtres sécurisent vos processus à 100%.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                { 
                                    title: "Débits Massifs", 
                                    benefit: "Haute Capacité", 
                                    desc: "Des skids conçus pour traiter des centaines de mètres cubes par heure sans perte de charge critique.",
                                    icon: <Waves className="w-6 h-6 text-blue-600" />,
                                    badge: "Scalabilité"
                                },
                                { 
                                    title: "Protection RO", 
                                    benefit: "Pré-traitement", 
                                    desc: "Une barrière impénétrable contre les particules et le chlore pour prolonger la vie de vos membranes d'osmose.",
                                    icon: <ShieldCheck className="w-6 h-6 text-indigo-600" />,
                                    badge: "Sécurité"
                                },
                                { 
                                    title: "Filtration Spécialisée", 
                                    benefit: "Média Avancé", 
                                    desc: "Fer, manganèse, H2S ou sédiments ultra-fins : nous utilisons le catalyseur exact pour votre problématique.",
                                    icon: <Layers className="w-6 h-6 text-cyan-600" />,
                                    badge: "Sur-Mesure"
                                },
                                { 
                                    title: "Automatisation", 
                                    benefit: "Zéro Arrêt", 
                                    desc: "Vannes PLC intelligentes pour des lavages à contre-courant déclenchés par pression différentielle ou minuterie.",
                                    icon: <Cog className="w-6 h-6 text-blue-500" />,
                                    badge: "24/7"
                                }
                            ].map((item, idx) => (
                                <div key={idx} className="group relative bg-white rounded-[2.5rem] p-8 border border-slate-100 hover:shadow-[0_40px_80px_-20px_rgba(37,99,235,0.12)] transition-all duration-700 hover:-translate-y-2 flex flex-col items-center text-center">
                                    <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-blue-50 transition-all duration-500 shadow-sm border border-slate-100">
                                        {item.icon}
                                    </div>
                                    <div className="space-y-4 flex-grow">
                                        <div className="space-y-1">
                                            <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest block">{item.benefit}</span>
                                            <h3 className="text-xl font-bold text-[#1e3a8a]">{item.title}</h3>
                                        </div>
                                        <p className="text-slate-500 text-sm leading-relaxed font-light">{item.desc}</p>
                                    </div>
                                    <div className="mt-8 pt-6 border-t border-slate-50 w-full">
                                        <span className="px-3 py-1 bg-slate-100/50 rounded-full text-[9px] font-bold text-slate-400 uppercase tracking-widest">{item.badge}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 3. CATALOGUE DES TECHNOLOGIES (MODERN SLIDER SHOWCASE) */}
                <section id="technologies" className="py-24 bg-white relative overflow-hidden border-y border-slate-100">
                    
                    {/* Centered Title */}
                    <div className="container mx-auto px-6 max-w-7xl text-center mb-20">
                        <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
                            GAMME INDUSTRIELLE
                        </span>
                        <h2 className="mb-8 heading-pro-max text-center">
                            <span className="italic font-light text-[#2563eb] block">Nos technologies de pointe</span>
                            <span className="font-bold text-[#1e3a8a] block text-center">pour chaque application.</span>
                        </h2>
                        <p className="body-pro-max text-slate-500 text-center mx-auto max-w-3xl">
                            Bricareau conçoit et assemble des skids de filtration industriels exploitant les meilleurs médias du marché. Qu'il s'agisse de clarifier l'eau de surface ou de neutraliser des métaux lourds provenant de forages profonds, nos systèmes sont conçus pour l'endurance extrême.
                        </p>
                    </div>

                    {/* Outer flex container spanning full viewport width */}
                    <div className="w-full flex flex-col items-center gap-16 select-none overflow-hidden pl-0">
                        
                        {/* Top Row: Scrollable Cards Container */}
                        <div className="w-full relative group pl-0">
                            {/* Left Navigation Arrow */}
                            <button 
                                onClick={() => {
                                    const el = document.getElementById("technologies-slider-track");
                                    if (el) {
                                        const cardWidth = el.firstElementChild ? el.firstElementChild.clientWidth + 24 : 360;
                                        if (el.scrollLeft <= 15) {
                                            const maxScrollLeft = el.scrollWidth - el.clientWidth;
                                            el.scrollTo({ left: maxScrollLeft, behavior: "smooth" });
                                        } else {
                                            el.scrollBy({ left: -cardWidth, behavior: "smooth" });
                                        }
                                    }
                                }}
                                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#1e3a8a] hover:bg-blue-600 text-white flex items-center justify-center shadow-lg transition-all hover:scale-110 active:scale-95 opacity-0 group-hover:opacity-100 focus:opacity-100 duration-300"
                                aria-label="Précédent"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>

                            {/* Right Navigation Arrow */}
                            <button 
                                onClick={() => {
                                    const el = document.getElementById("technologies-slider-track");
                                    if (el) {
                                        const cardWidth = el.firstElementChild ? el.firstElementChild.clientWidth + 24 : 360;
                                        const maxScrollLeft = el.scrollWidth - el.clientWidth;
                                        if (el.scrollLeft >= maxScrollLeft - 15) {
                                            el.scrollTo({ left: 0, behavior: "smooth" });
                                        } else {
                                            el.scrollBy({ left: cardWidth, behavior: "smooth" });
                                        }
                                    }
                                }}
                                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#1e3a8a] hover:bg-blue-600 text-white flex items-center justify-center shadow-lg transition-all hover:scale-110 active:scale-95 opacity-0 group-hover:opacity-100 focus:opacity-100 duration-300"
                                aria-label="Suivant"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>

                            {/* Scroll Track */}
                            <div 
                                id="technologies-slider-track"
                                className="flex gap-6 overflow-x-auto scroll-smooth pb-6 snap-x snap-mandatory no-scrollbar pl-0 pr-12"
                                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                            >
                                {[
                                    { 
                                        name: "Filtres Multimédias", 
                                        desc: "La solution ultime pour la turbidité et les sédiments. L'utilisation superposée d'Anthracite, de Sable de quartz et de Grenat permet une filtration en profondeur jusqu'à 10 microns, avec un lit qui retient la saleté sur tout son volume, et pas seulement en surface.", 
                                        img: multimediaImg,
                                        applications: ["Pré-traitement RO", "Eau de refroidissement", "Eaux de surface"]
                                    },
                                    { 
                                        name: "Charbon Actif (GAC)", 
                                        desc: "Essentiel pour l'adsorption chimique. Ces tours éliminent le chlore libre, les chloramines, pesticides et COV. Indispensable pour protéger les membranes d'osmose inverse de la dégradation chimique oxydative.", 
                                        img: charbonImg,
                                        applications: ["Déchloration", "Agroalimentaire", "Purification chimique"]
                                    },
                                    { 
                                        name: "Filtres Catalytiques", 
                                        desc: "Utilisant des médias avancés (Katalox Light, Pyrolox), ces filtres agissent comme un puissant catalyseur pour oxyder et éliminer des niveaux très élevés de Fer, de Manganèse et de Sulfure d'Hydrogène (H2S), sans forcément recourir à des produits chimiques en continu.", 
                                        img: catalytiqueImg,
                                        applications: ["Forages chargés", "Métaux lourds", "Traitement anti-odeur"]
                                    },
                                    { 
                                        name: "Filtres multi-cartouches", 
                                        desc: "Systèmes de filtration haute capacité utilisant de multiples cartouches pour retenir efficacement les particules fines. Conception en acier inoxydable, idéale pour un polissage final ou en pré-traitement d'osmose inverse.", 
                                        img: multiCartoucheImg,
                                        applications: ["Polissage final", "Pré-traitement OI", "Haute pureté"]
                                    },
                                    { 
                                        name: "Filtres Birm", 
                                        desc: "Média filtrant économique et très efficace pour la réduction du fer et du manganèse. Le Birm agit comme un catalyseur insoluble pour accélérer la réaction entre l'oxygène dissous et le fer, ne nécessitant qu'un simple lavage à contre-courant sans produits chimiques.", 
                                        img: catalytiqueImg,
                                        applications: ["Eaux de puits", "Irrigation agricole", "Pré-traitement sans chimie"]
                                    },
                                    { 
                                        name: "Skids de filtration d'eau sur mesure", 
                                        desc: "Conception et assemblage de systèmes complets sur châssis (skids) parfaitement adaptés à votre cahier des charges. Intégration de tous les éléments (réservoirs, vannes, tuyauterie, automatisation) pour une installation 'plug-and-play'.", 
                                        img: skidsImg,
                                        applications: ["Projets industriels complets", "Intégration d'usine", "Déploiement rapide"]
                                    }
                                ].map((product, idx) => (
                                    <div 
                                        key={idx} 
                                        className="w-[300px] md:w-[350px] lg:w-[calc((100vw-6rem)/4.5)] shrink-0 bg-white border border-slate-100 rounded-[2rem] p-6 shadow-[0_15px_40px_rgba(0,0,0,0.02)] flex flex-col min-h-[580px] snap-start hover:shadow-md transition-shadow group"
                                    >
                                        {/* Image container in light gray background */}
                                        <div className="h-[240px] bg-slate-50/50 rounded-2xl p-6 flex items-center justify-center mb-6 overflow-hidden border border-slate-100 relative">
                                            <div className="absolute inset-0 bg-blue-600 rounded-full blur-[80px] opacity-0 group-hover:opacity-10 transition-opacity duration-700" />
                                            <img 
                                                src={product.img} 
                                                alt={product.name} 
                                                className="max-h-full object-contain group-hover:scale-105 transition-transform duration-700 relative z-10 mix-blend-multiply" 
                                            />
                                        </div>

                                        {/* Card Info */}
                                        <div className="space-y-4 flex-grow">
                                            <h4 className="text-2xl font-bold text-[#1e3a8a]">{product.name}</h4>
                                            <p className="text-slate-500 text-sm font-light leading-relaxed text-justify line-clamp-4">
                                                {product.desc}
                                            </p>
                                            
                                            <div className="pt-4 space-y-2">
                                                <h5 className="text-[10px] font-black uppercase tracking-widest text-slate-400">Applications clés</h5>
                                                {product.applications.map((app, appIdx) => (
                                                    <div key={appIdx} className="flex items-center gap-2">
                                                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                                                        <span className="text-xs text-[#1e3a8a] font-medium">{app}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Details Button */}
                                        <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between">
                                            <span className="inline-flex items-center gap-2 text-[10px] font-black text-blue-600 uppercase tracking-widest cursor-pointer group-hover:text-[#1e3a8a] transition-colors">
                                                Voir les spécifications <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Bottom Row: CTA Column */}
                        <div className="w-full max-w-4xl mx-auto flex flex-col justify-center items-center text-center px-6 space-y-6 mb-8">
                            <h3 className="text-2xl md:text-3xl font-bold text-[#1e3a8a] leading-tight">
                                Besoin d'aide pour dimensionner votre système ?
                            </h3>
                            <p className="text-slate-500 font-light text-sm">
                                Nos ingénieurs vous accompagnent pour choisir la technologie de pointe adaptée aux besoins spécifiques de votre eau de process.
                            </p>
                            <div>
                                <ProMaxButton variant="primary" className="mt-4 bg-blue-600 hover:bg-[#1e3a8a] text-white" onClick={() => {
                                    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
                                }}>
                                    ÉTUDE TECHNIQUE
                                </ProMaxButton>
                            </div>
                        </div>

                    </div>
                </section>

                {/* 4. PROCESSUS D'INGÉNIERIE (REPLACES TABLE) */}
                <section className="py-24 bg-slate-50 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_70%,_rgba(37,99,235,0.03)_0%,_transparent_50%)] pointer-events-none" />
                    
                    <div className="container mx-auto px-6 relative z-10">
                        <div className="text-center mb-16">
                            <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
                                NOTRE EXPERTISE
                            </span>
                            <h2 className="heading-pro-max">
                                <span className="italic font-light text-[#2563eb] block text-center">Le processus Bricareau,</span>
                                <span className="font-bold text-[#1e3a8a] block text-center">de l'analyse à l'exploitation.</span>
                            </h2>
                            <p className="mt-6 text-slate-500 max-w-2xl mx-auto text-center font-light leading-relaxed">
                                Nous ne vendons pas de simples filtres, nous concevons des solutions complètes. Découvrir notre approche d'ingénierie étape par étape pour sécuriser votre investissement.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                {
                                    step: "01",
                                    title: "Audit & Analyse",
                                    desc: "Évaluation complète de votre eau brute, de vos débits critiques et de vos contraintes d'espace. Nous ne laissons aucune place au hasard.",
                                    icon: <Activity className="w-6 h-6 text-blue-600" />
                                },
                                {
                                    step: "02",
                                    title: "Ingénierie Sur-Mesure",
                                    desc: "Conception du système, dimensionnement des vannes et sélection précise des médias filtrants pour cibler exactement vos contaminants.",
                                    icon: <Layers className="w-6 h-6 text-blue-600" />
                                },
                                {
                                    step: "03",
                                    title: "Fabrication & Intégration",
                                    desc: "Assemblage rigoureux des skids dans nos ateliers, suivi d'une installation sur votre site planifiée pour minimiser les arrêts de production.",
                                    icon: <Cog className="w-6 h-6 text-blue-600" />
                                },
                                {
                                    step: "04",
                                    title: "Support & Maintenance",
                                    desc: "Surveillance des performances, fourniture de consommables et interventions préventives pour garantir une longévité maximale des équipements.",
                                    icon: <ShieldCheck className="w-6 h-6 text-blue-600" />
                                }
                            ].map((item, idx) => (
                                <div key={idx} className="bg-white rounded-3xl p-8 border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.02)] relative group hover:-translate-y-2 transition-all duration-500">
                                    <div className="absolute top-6 right-6 text-5xl font-black text-slate-50 group-hover:text-blue-50 transition-colors duration-500 select-none">
                                        {item.step}
                                    </div>
                                    <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 relative z-10 group-hover:scale-110 transition-transform duration-500">
                                        {item.icon}
                                    </div>
                                    <h4 className="text-xl font-bold text-[#1e3a8a] mb-4 relative z-10">{item.title}</h4>
                                    <p className="text-slate-500 text-sm font-light leading-relaxed relative z-10">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 5. FORMULAIRE DE DEVIS (CTA) */}
                <section className="relative py-32 flex items-center overflow-hidden bg-[#1e3a8a]">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-600/20 to-transparent skew-x-12 translate-x-1/4" />
                    
                    <div className="container mx-auto px-6 relative z-10">
                        <div className="flex flex-col lg:flex-row gap-20 items-center">
                            <div className="lg:w-5/12 space-y-12">
                                <div className="space-y-6">
                                    <span className="inline-block px-4 py-1.5 bg-white text-blue-600 rounded-full text-[10px] font-black uppercase tracking-[0.4em]">
                                        DIVISION INGÉNIERIE
                                    </span>
                                    <h2 className="text-4xl md:text-5xl font-bold text-white leading-[1.1] tracking-tighter">
                                        Demander votre <br />
                                        <span className="text-white italic font-light font-serif">étude technique.</span>
                                    </h2>
                                    <p className="text-lg text-blue-100/80 font-light leading-relaxed">
                                        Nos ingénieurs analysent vos paramètres (débit, pression, qualité d'eau) pour dimensionner un système de filtration industriel parfaitement adapté à votre usine.
                                    </p>
                                </div>

                                <div className="space-y-6">
                                    <div className="flex items-center gap-6">
                                        <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center border border-white/20 backdrop-blur-sm">
                                            <Phone className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <div className="text-[10px] font-black text-blue-300 uppercase tracking-widest">Support Industriel</div>
                                            <div className="text-xl font-bold text-white">1-855-264-9328</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-6">
                                        <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center border border-white/20 backdrop-blur-sm">
                                            <Mail className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <div className="text-[10px] font-black text-blue-300 uppercase tracking-widest">Email Technique</div>
                                            <div className="text-xl font-bold text-white">industriel@bricareau.ca</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="lg:w-7/12 w-full">
                                <div className="bg-white p-10 md:p-14 rounded-[3rem] shadow-2xl shadow-black/30 border border-slate-100">
                                    <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Nom Complet</label>
                                            <input type="text" className="w-full h-14 px-6 rounded-2xl bg-slate-50 border border-slate-100 focus:border-blue-500 focus:bg-white transition-all outline-none text-[#1e3a8a] font-medium" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Entreprise / Usine</label>
                                            <input type="text" className="w-full h-14 px-6 rounded-2xl bg-slate-50 border border-slate-100 focus:border-blue-500 focus:bg-white transition-all outline-none text-[#1e3a8a] font-medium" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Téléphone Direct</label>
                                            <input type="tel" className="w-full h-14 px-6 rounded-2xl bg-slate-50 border border-slate-100 focus:border-blue-500 focus:bg-white transition-all outline-none text-[#1e3a8a] font-medium" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Email Professionnel</label>
                                            <input type="email" className="w-full h-14 px-6 rounded-2xl bg-slate-50 border border-slate-100 focus:border-blue-500 focus:bg-white transition-all outline-none text-[#1e3a8a] font-medium" />
                                        </div>
                                        <div className="md:col-span-2 space-y-2">
                                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Type de filtration (Si connu)</label>
                                            <select className="w-full h-14 px-6 rounded-2xl bg-slate-50 border border-slate-100 focus:border-blue-500 focus:bg-white transition-all outline-none appearance-none text-[#1e3a8a] font-medium">
                                                <option>Veuillez choisir...</option>
                                                <option>Filtre Multimédia</option>
                                                <option>Filtre à Charbon Actif</option>
                                                <option>Filtre Catalytique / Sable Vert</option>
                                                <option>Étude Complète (Incertain)</option>
                                            </select>
                                        </div>
                                        <div className="md:col-span-2 space-y-2">
                                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Paramètres techniques (Débit requis, Problématique)</label>
                                            <textarea className="w-full h-32 p-6 rounded-2xl bg-slate-50 border border-slate-100 focus:border-blue-500 focus:bg-white transition-all outline-none resize-none text-[#1e3a8a] font-medium" placeholder="Ex: Débit de pointe 50 GPM, présence de fer à 3 ppm..." />
                                        </div>
                                        <div className="md:col-span-2 pt-4">
                                            <ProMaxButton variant="primary" className="w-full h-16 text-sm uppercase tracking-widest bg-blue-600 hover:bg-[#1e3a8a]">
                                                SOUMETTRE LA DEMANDE
                                            </ProMaxButton>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 6. FAQ SECTION */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-left mb-16">
                            <h2 className="mb-8 heading-pro-max text-left">
                                <span className="italic font-light text-[#2563eb] block">Expertise technique</span>
                                <span className="font-bold text-[#1e3a8a] block">Foire aux questions</span>
                            </h2>
                            <div className="w-24 h-1 bg-blue-600"></div>
                        </div>

                        <div className="max-w-4xl mx-auto">
                            <Accordion type="single" collapsible className="w-full">
                                {faqs.slice(0, showAllFaqs ? undefined : 4).map((item, idx) => (
                                    <AccordionItem key={idx} value={`item-${idx}`} className="border-b-gray-200">
                                        <AccordionTrigger className="text-left text-base font-medium leading-6 hover:no-underline py-6">
                                            {item.q}
                                        </AccordionTrigger>
                                        <AccordionContent className="text-base font-light leading-6 text-gray-600 pb-6 text-justify">
                                            {item.a}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
};

export default FiltrationIndustrielle;
