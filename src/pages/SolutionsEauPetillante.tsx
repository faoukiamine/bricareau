import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GlobalBreadcrumbs from "@/components/GlobalBreadcrumbs";
import TestimonialsSection from "@/components/TestimonialsSection";
import Hero from "@/components/Hero";
import {
    Phone,
    Zap,
    ArrowRight,
    Leaf,
    Plus,
    Minus,
    Award,
    ShieldCheck,
    Droplets,
    Recycle,
    PiggyBank,
    Star,
    ChevronRight,
    Sparkles,
    Settings,
    ChevronDown
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";

// Existing high-fidelity assets
import heroFountains from "@/assets/Fontaines d'eau.webp";
import countertopFountainImg from "@/assets/A9.jpg";
import bottlelessFountainImg from "@/assets/A13.jpg";
import ecoImpactImg4 from "@/assets/water-dispenser in office.jpg";
import ecoImpactImg5 from "@/assets/water-dispenser in kitchen.jpg";
import eauFontaineImg from "@/assets/83658.jpg";

const SolutionsEauPetillante = () => {
    const [activeFeature, setActiveFeature] = useState(0);
    const [activeTab, setActiveTab] = useState("sparkling");
    const [activeFaq, setActiveFaq] = useState<number | null>(null);

    useEffect(() => {
        document.title = "Systèmes d'Eau Gazeuse pour Bureaux | Bricareau";
        window.scrollTo(0, 0);
    }, []);

    const features = [
        {
            title: "Pureté absolue",
            desc: "Une filtration avancée au charbon actif combinée à une désinfection UV-C de pointe pour éliminer 99,99% des contaminants microbiologiques et offrir une eau pure.",
        },
        {
            title: "Température idéale",
            desc: "De l'eau glacée intensément rafraîchissante, de l'eau tiède équilibrée, ou de l'eau chaude instantanée à température optimale pour vos thés et cafés.",
        },
        {
            title: "Design élégant",
            desc: "Des lignes contemporaines épurées, des finitions en inox brossé et une esthétique prestigieuse qui s'intègrent parfaitement dans vos locaux modernes.",
        },
        {
            title: "Économies durables",
            desc: "Réduisez vos coûts d'hydratation jusqu'à 70% par rapport à l'achat et à la logistique complexe des bonbonnes ou bouteilles d'eau en plastique.",
        }
    ];

    const faqItems = [
        {
            title: "Filtration Charbon Actif",
            content: "Notre filtre à charbon actif de haute densité absorbe le chlore, retient les sédiments, neutralise les odeurs et améliore considérablement le goût de l'eau pour une expérience gustative d'exception à chaque tasse."
        },
        {
            title: "Stérilisation UV-C",
            content: "Un rayonnement ultraviolet de type C puissant détruit l'ADN des micro-organismes, bactéries et virus directement au point de distribution, garantissant une eau stérile et d'une sécurité hygiénique absolue."
        },
        {
            title: "Osmose Inverse",
            content: "Pour une pureté moléculaire absolue, la membrane d'osmose inverse élimine les métaux lourds, le calcaire, les nitrates, les résidus chimiques de pesticides et toutes les impuretés microscopiques en suspension."
        }
    ];

    return (
        <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">
            <Header />
            
            <main>
                {/* SECTION 1: MODERN CINEMATIC HERO (Same style as /residentiel) */}
                <Hero 
                    image={heroFountains}
                    highlightedTitle="Systèmes d'eau "
                    mainTitle="gazeuse pour bureaux."
                    subtitle="Offrez à vos collaborateurs une eau gazeuse filtrée d'exception, fraîche et pétillante, directement raccordée à votre réseau. Une solution écologique, économique et sans logistique de bonbonnes."
                    ctaText="OBTENIR MON ESSAI GRATUIT"
                    ctaLink="/contact-entreprises"
                    showPhone={true}
                    badge="Prestige & Hydratation"
                    showBreadcrumbs={true}
                    breadcrumbVariant="light"
                    homeVariant={false}
                />

                {/* SECTION 2: HIGH-FIDELITY STATEMENT BANNER */}
                <section className="py-24 bg-white border-y border-slate-100">
                    <div className="container mx-auto px-6 text-center max-w-4xl">
                        <div className="space-y-6">
                            <h3 className="text-xs font-black text-blue-600 uppercase tracking-[0.2em] mb-4">
                                L'EXCELLENCE DE L'EAU À LA SOURCE
                            </h3>
                            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
                                Engagé à fournir des solutions de haute qualité.
                            </h2>
                            <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full" />
                            <p className="text-slate-500 text-lg font-light leading-relaxed max-w-3xl mx-auto pt-2">
                                Nos fontaines à eau gazeuse sont conçues pour améliorer le bien-être de vos collaborateurs et de vos clients. Grâce à nos technologies de filtration d'eau avancées, profitez d'une eau d'une pureté absolue, d'un goût incomparable et d'une fraîcheur constante à chaque tasse.
                            </p>
                            <div className="pt-4">
                                <a href="#solutions-catalog" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-bold uppercase tracking-widest text-xs transition-colors group">
                                    En savoir plus <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 3: ACCORDION FEATURE GRID ("Ce que nous apportons au bureau") */}
                <section className="py-32 bg-slate-50/50">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
                            {/* Left Text & Accordion */}
                            <div className="lg:col-span-6 space-y-12">
                                <div className="space-y-6">
                                    <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-[10px] font-black uppercase tracking-widest">
                                        VALEUR AJOUTÉE
                                    </span>
                                    <h2 className="heading-pro-max text-left">
                                        <span className="italic font-light text-blue-600 block">Ce que nous apportons</span>
                                        <span className="font-bold text-slate-950 block">au bureau.</span>
                                    </h2>
                                </div>

                                <div className="space-y-4">
                                    {features.map((feat, idx) => (
                                        <div 
                                            key={idx} 
                                            onClick={() => setActiveFeature(idx)}
                                            className={`p-8 rounded-[2rem] border transition-all duration-500 cursor-pointer ${
                                                activeFeature === idx 
                                                ? "bg-white border-blue-200 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.03)]" 
                                                : "bg-transparent border-transparent hover:border-slate-200"
                                            }`}
                                        >
                                            <div className="flex items-center justify-between">
                                                <h4 className={`text-xl font-bold transition-colors ${activeFeature === idx ? "text-blue-600" : "text-slate-800"}`}>
                                                    {feat.title}
                                                </h4>
                                                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                                                    activeFeature === idx ? "bg-blue-100 text-blue-600 rotate-180" : "bg-slate-100 text-slate-400"
                                                }`}>
                                                    <ChevronDown className="w-4 h-4" />
                                                </div>
                                            </div>
                                            <div className={`transition-all duration-500 overflow-hidden ${
                                                activeFeature === idx ? "max-h-40 mt-4 opacity-100" : "max-h-0 opacity-0"
                                            }`}>
                                                <p className="text-slate-500 font-light leading-relaxed text-sm">
                                                    {feat.desc}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Right Premium Visual Column */}
                            <div className="lg:col-span-6 relative flex justify-center items-center">
                                {/* Blue Dotted Grid Pattern Behind */}
                                <div className="absolute w-[500px] h-[500px] opacity-15 -z-10 bg-radial-dots" />
                                
                                <div className="relative w-full aspect-square max-w-[480px] rounded-[3.5rem] overflow-hidden border-[12px] border-white shadow-2xl">
                                    <img 
                                        src={eauFontaineImg} 
                                        alt="Qualité d'hydratation pure" 
                                        className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-1000" 
                                    />
                                    <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 4: DARK ECO CALLOUT BANNER */}
                <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
                    <div className="absolute inset-0 bg-radial-gradient opacity-10" />
                    <div className="container mx-auto px-6 max-w-5xl text-center relative z-10 space-y-8">
                        <div className="w-16 h-16 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center mx-auto text-blue-400">
                            <Leaf className="w-8 h-8" />
                        </div>
                        
                        <blockquote className="text-xl md:text-3xl font-light leading-relaxed italic text-blue-100 max-w-4xl mx-auto">
                            "Nos fontaines à eau gazeuse de bureau ne se contentent pas de fournir une eau fraîche. Elles s'inscrivent dans une démarche écoresponsable en éliminant les bouteilles plastiques à usage unique de vos locaux. Grâce à leur système de filtration d'eau innovant, elles garantissent une eau sans impuretés, exempte de chlore et de contaminants microbiologiques. Offrir le meilleur de l'hydratation est un geste fort pour la santé de vos équipes et l'image de marque de votre entreprise."
                        </blockquote>

                        <div className="w-12 h-[1px] bg-blue-500/40 mx-auto" />
                        
                        <p className="text-[11px] font-black text-blue-400 uppercase tracking-[0.3em]">
                            Essai gratuit et sans engagement - Installation et entretien inclus.
                        </p>
                    </div>
                </section>

                {/* SECTION 5: HORIZONTAL DUAL GALLERY */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-white">
                    <div className="aspect-[16/10] rounded-[2.5rem] overflow-hidden shadow-md">
                        <img 
                            src={ecoImpactImg4} 
                            alt="Fontaine à eau dans un espace café corporatif" 
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" 
                        />
                    </div>
                    <div className="aspect-[16/10] rounded-[2.5rem] overflow-hidden shadow-md">
                        <img 
                            src={eauFontaineImg} 
                            alt="Remplissage d'une bouteille d'eau filtrée pure" 
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" 
                        />
                    </div>
                </section>

                {/* SECTION 6: COLUMN SPACE & SERVICE GRID */}
                <section className="py-32 bg-white">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                            
                            {/* Block 1: Adaptability */}
                            <div className="flex flex-col md:flex-row items-center gap-8 bg-slate-50 p-10 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                                <div className="space-y-4 flex-1">
                                    <h3 className="text-2xl font-bold text-slate-900">
                                        Conçu pour s'adapter à votre espace
                                    </h3>
                                    <p className="text-slate-500 font-light text-sm leading-relaxed">
                                        Des formats ultra-compacts de comptoir ou autoportants au design prestigieux, s'intégrant parfaitement dans vos cafétérias, salles de conférence et halls d'accueil.
                                    </p>
                                </div>
                                <div className="w-40 aspect-[1/2] relative flex justify-center items-center">
                                    <div className="absolute w-24 h-24 bg-blue-100/40 rounded-full blur-xl -z-10" />
                                    <img 
                                        src={bottlelessFountainImg} 
                                        alt="Format autoportant slim" 
                                        className="h-full object-contain mix-blend-multiply" 
                                    />
                                </div>
                            </div>

                            {/* Block 2: Simplicity */}
                            <div className="flex flex-col md:flex-row-reverse items-center gap-8 bg-slate-50 p-10 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                                <div className="space-y-4 flex-1">
                                    <h3 className="text-2xl font-bold text-slate-900">
                                        Simplicité dans le service
                                    </h3>
                                    <p className="text-slate-500 font-light text-sm leading-relaxed">
                                        Une interface tactile moderne et intuitive, avec commande mécanique ou sans contact pour une hygiène optimale et une utilisation facilitée au quotidien.
                                    </p>
                                </div>
                                <div className="w-48 aspect-square rounded-full overflow-hidden border-[6px] border-white shadow-lg relative flex justify-center items-center">
                                    <img 
                                        src={eauFontaineImg} 
                                        alt="Service d'eau filtrée" 
                                        className="h-full w-full object-cover" 
                                    />
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* SECTION 7: INTERACTIVE TABS & PRODUCTS SHOWCASE */}
                <section id="solutions-catalog" className="py-32 bg-slate-50/50">
                    <div className="container mx-auto px-6 max-w-7xl">
                        
                        {/* Title Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-20">
                            <div className="lg:col-span-8 space-y-4">
                                <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-[10px] font-black uppercase tracking-widest">
                                    CHOIX & MODULARITÉ
                                </span>
                                <h2 className="heading-pro-max text-left">
                                    <span className="italic font-light text-blue-600 block">Des systèmes pour</span>
                                    <span className="font-bold text-slate-950 block">tous les environnements.</span>
                                </h2>
                            </div>
                            <div className="lg:col-span-4 text-slate-500 text-sm font-light leading-relaxed">
                                Que ce soit pour un thé réconfortant à midi, un verre d'eau glacée après une réunion, ou une eau finement pétillante pour vos clients, nos fontaines répondent à toutes les envies en un instant.
                            </div>
                        </div>

                        {/* Interactive Tabs Header */}
                        <div className="flex flex-wrap justify-center gap-3 mb-16 bg-white p-2.5 rounded-full border border-slate-200 max-w-3xl mx-auto shadow-sm">
                            {[
                                { key: "cold", label: "Eau froide" },
                                { key: "ambient", label: "Eau tiède" },
                                { key: "hot", label: "Eau chaude" },
                                { key: "sparkling", label: "Eau pétillante" }
                            ].map((tab) => (
                                <button 
                                    key={tab.key}
                                    onClick={() => setActiveTab(tab.key)}
                                    className={`px-8 py-3.5 text-xs font-black uppercase tracking-widest rounded-full transition-all duration-300 ${
                                        activeTab === tab.key 
                                        ? "bg-slate-900 text-white shadow-md transform scale-[1.02]" 
                                        : "text-slate-500 hover:text-slate-950 hover:bg-slate-50"
                                    }`}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>

                        {/* Dynamic Product Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                            
                            {/* Product Cards Column */}
                            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                                {[
                                    {
                                        title: "Eau de comptoir A9",
                                        model: "Modèle A9",
                                        desc: "Design ultra-compact idéal pour les comptoirs de cuisine d'entreprise et les salles de réunion restreintes.",
                                        img: countertopFountainImg,
                                        link: "/contact-entreprises"
                                    },
                                    {
                                        title: "Fontaine U1",
                                        model: "Discrétion Absolue",
                                        desc: "L'élégance minimaliste ultime avec un robinet design sur comptoir et un groupe de filtration caché.",
                                        img: countertopFountainImg,
                                        link: "/contact-entreprises"
                                    },
                                    {
                                        title: "B4.2",
                                        model: "Modèle A13",
                                        desc: "La solution sur pied robuste à haute capacité, idéale pour les halls de réception et zones de grand passage.",
                                        img: bottlelessFountainImg,
                                        link: "/contact-entreprises"
                                    }
                                ].map((prod, pIdx) => (
                                    <div key={pIdx} className="bg-white border border-slate-100 p-8 rounded-[2.5rem] shadow-[0_15px_40px_rgba(0,0,0,0.02)] flex flex-col h-[520px] hover:-translate-y-1.5 transition-transform duration-500">
                                        <div className="aspect-[4/3] bg-slate-50 rounded-2xl p-4 flex items-center justify-center mb-6 overflow-hidden">
                                            <img src={prod.img} alt={prod.title} className="max-h-full object-contain mix-blend-multiply" />
                                        </div>
                                        <div className="space-y-2 flex-grow">
                                            <h4 className="text-lg font-bold text-slate-900">{prod.title}</h4>
                                            <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest leading-none">{prod.model}</p>
                                            <p className="text-slate-500 text-xs font-light leading-relaxed pt-2">{prod.desc}</p>
                                        </div>
                                        <div className="pt-6 border-t border-slate-100">
                                            <NavLink to={prod.link} className="inline-flex items-center gap-2 text-[10px] font-black text-slate-800 uppercase tracking-widest hover:text-blue-600 transition-colors group">
                                                Spécifications <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                                            </NavLink>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Floating Sidebar Card Column */}
                            <div className="lg:col-span-4 bg-gradient-to-br from-slate-900 to-slate-950 text-white p-10 rounded-[3rem] border border-slate-800 shadow-xl flex flex-col justify-between h-[520px] relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl" />
                                <div className="space-y-6 relative z-10">
                                    <div className="w-12 h-12 rounded-2xl bg-blue-600/30 border border-blue-500/30 flex items-center justify-center text-blue-400">
                                        <Sparkles className="w-6 h-6 animate-pulse" />
                                    </div>
                                    <h3 className="text-3xl font-bold tracking-tight">
                                        Trouvez la fontaine idéale pour votre équipe
                                    </h3>
                                    <p className="text-slate-400 font-light text-sm leading-relaxed">
                                        Répondez à quelques questions simples pour identifier le modèle parfaitement adapté à votre effectif et à la configuration de vos espaces de travail.
                                    </p>
                                </div>
                                <div className="relative z-10 pt-6">
                                    <Button size="lg" className="w-full h-14 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold uppercase tracking-widest text-xs transition-transform hover:scale-[1.02]" asChild>
                                        <NavLink to="/contact-entreprises">COMMENCER LE QUIZ</NavLink>
                                    </Button>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* SECTION 8: TECHNOLOGIES ACCORDION ("Découvrez comment...") */}
                <section className="py-32 bg-white">
                    <div className="container mx-auto px-6 max-w-4xl">
                        <div className="text-center space-y-4 mb-20">
                            <span className="inline-block px-4 py-1 bg-blue-50 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-widest">
                                NOTRE SAVOIR-FAIRE
                            </span>
                            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
                                Découvrez comment...
                            </h2>
                            <p className="text-slate-500 font-light max-w-2xl mx-auto">
                                Nos technologies exclusives garantissent la pureté microbiologique et le goût parfait de l'eau distribuée.
                            </p>
                        </div>

                        <div className="space-y-4 border-t border-slate-100 pt-6">
                            {faqItems.map((item, idx) => (
                                <div 
                                    key={idx}
                                    className="border-b border-slate-100 pb-6"
                                >
                                    <button 
                                        onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                                        className="w-full flex items-center justify-between text-left py-4 group"
                                    >
                                        <span className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                                            {item.title}
                                        </span>
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center border border-slate-200 transition-all ${
                                            activeFaq === idx ? "bg-slate-900 text-white border-slate-900 rotate-180" : "bg-transparent text-slate-400"
                                        }`}>
                                            <ChevronDown className="w-4.5 h-4.5" />
                                        </div>
                                    </button>
                                    <div className={`transition-all duration-500 overflow-hidden ${
                                        activeFaq === idx ? "max-h-60 opacity-100 mt-2" : "max-h-0 opacity-0"
                                    }`}>
                                        <p className="text-slate-500 font-light leading-relaxed text-sm">
                                            {item.content}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SECTION 9: WATER WAVE CALL TO ACTION */}
                <section className="relative py-32 bg-slate-900 text-white overflow-hidden text-center">
                    {/* Deep Blue Water Wave Background Layer */}
                    <div className="absolute inset-0 z-0 opacity-30 mix-blend-overlay">
                        <img 
                            src={heroFountains} 
                            alt="Vagues d'eau pure" 
                            className="w-full h-full object-cover" 
                        />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/90 to-slate-900/40" />

                    <div className="container mx-auto px-6 max-w-4xl relative z-10 space-y-10">
                        <span className="inline-block px-4 py-1.5 bg-blue-500/20 border border-blue-500/30 text-blue-400 rounded-full text-[10px] font-black uppercase tracking-widest">
                            ASSISTANCE EN LIGNE
                        </span>
                        <h2 className="text-3xl md:text-6xl font-bold tracking-tight text-white leading-tight uppercase">
                            Laissez-nous vous aider à trouver <br />
                            <span className="text-blue-400 italic font-light lowercase">la solution adaptée.</span>
                        </h2>
                        <div className="pt-4">
                            <Button size="lg" className="h-16 px-12 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold uppercase tracking-widest text-xs transition-transform hover:scale-[1.02]" asChild>
                                <NavLink to="/contact-entreprises">ME FAIRE RECOMMANDER UN MODÈLE</NavLink>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* SECTION 10: TESTIMONIALS SECTION */}
                <div className="bg-slate-50 py-32 border-y border-slate-100">
                    <TestimonialsSection 
                        filterProduct="Bureau"
                        limit={6}
                        title={
                            <div className="text-center space-y-3 mb-16">
                                <span className="text-[10px] font-black text-blue-500 uppercase tracking-[0.5em] block mb-4">ILS NOUS FONT CONFIANCE</span>
                                <h2 className="heading-pro-max text-center uppercase">
                                    <span className="italic font-light text-[#18448F]">Le choix des </span>
                                    <span className="font-bold text-[#18448F]">entreprises leaders.</span>
                                </h2>
                            </div>
                        }
                    />
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default SolutionsEauPetillante;
