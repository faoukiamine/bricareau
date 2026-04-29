import React, { useState, useEffect } from "react";
import {
    ChevronRight,
    ShieldCheck,
    Zap,
    Droplets,
    Settings,
    TrendingUp,
    Leaf,
    Phone,
    Star,
    Quote
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, NavLink } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";
import { allTestimonials } from "@/data/testimonials";

// Assets
import heroImg from "@/assets/person-is-holding-a-glass-of-water-from-a-faucet.jpeg";
import partnerImg from "@/assets/waterdrop-carafe-in-use.webp";
import residentielImg from "@/assets/woman-and-kid-drink-glass-water.jpg";
import hotellerieImg from "@/assets/30759.jpg";
import bureauImg from "@/assets/bureau-megamenu.jpg";
import commercialImg from "@/assets/industrial_hero_pro_max.png";
import waterWaveImg from "@/assets/wave-banner.jpg";

const Home1 = () => {
    const navigate = useNavigate();
    const [selectedCategory, setSelectedCategory] = useState("Résidentiel");
    const [selectedProduit, setSelectedProduit] = useState("Analyse d'eau");

    // Case Study Testimonials State
    const caseStudyTestimonials = allTestimonials.slice(0, 8);
    const [testiIndex, setTestiIndex] = useState(0);

    const optionsParCategorie: Record<string, string[]> = {
        "Résidentiel": [
            "Analyse d'eau",
            "Systèmes de filtration d'eau pour toute la maison",
            "Adoucisseurs d'eau",
            "Systèmes de filtration d'eau potable",
            "Systèmes de désinfection UV",
            "Fontaines à eau"
        ],
        "Hôtellerie et restauration": [
            "Analyse d'eau",
            "Adoucisseurs d'eau",
            "Systèmes de filtration d'eau",
            "Systèmes de filtration pour brasseries",
            "Filtration d'eau pour cafetières"
        ],
        "Bureau": [
            "Analyse d'eau",
            "Systèmes de filtration centralisés pour bâtiments",
            "Systèmes d'eau gazeuse",
            "Fontaines à eau",
        ],
        "Commercial & Industriel": [
            "Analyse d'eau",
            "Systèmes de filtration industriels",
            "Adoucisseurs d'eau industriels",
            "Systèmes d'osmose inverse",
            "Désinfection UV à haut débit"
        ]
    };

    const productRouteMap: Record<string, string> = {
        "Analyse d'eau": "/tests-eau",
        "Systèmes de filtration d'eau pour toute la maison": "/filtres-deau",
        "Adoucisseurs d'eau": "/adoucisseur-eau-residentiel",
        "Systèmes de filtration d'eau potable": "/systeme-de-filtration-deau-potable",
        "Systèmes de désinfection UV": "/systemes-de-desinfection-uv",
        "Fontaines à eau": "/fontaines",
        "Fontaines à eau pour entreprise": "/fontaines",
        "Systèmes de filtration commerciaux": "/commercial-industriel",
        "Osmose inverse commerciale": "/commercial-industriel",
        "Machines à café entreprises": "/machines-a-cafe-entreprises",
        "Systèmes de filtration centralisés pour bâtiments": "/commercial-industriel",
        "Systèmes d'eau gazeuse": "/fontaines",
        "Systèmes de filtration industriels": "/commercial-industriel",
        "Adoucisseurs d'eau industriels": "/commercial-industriel",
        "Systèmes d'osmose inverse": "/commercial-industriel",
        "Désinfection UV à haut débit": "/commercial-industriel",
        "Systèmes de filtration d'eau": "/filtration",
        "Systèmes de filtration pour brasseries": "/commercial-industriel",
        "Filtration d'eau pour cafetières": "/machines-a-cafe-entreprises"
    };

    // Update selectedProduit when category changes
    useEffect(() => {
        setSelectedProduit(optionsParCategorie[selectedCategory][0]);
    }, [selectedCategory]);

    const sectors = [
        { title: "Résidentiel", image: residentielImg, href: "/residentiel" },
        { title: "Hôtellerie et restauration", image: hotellerieImg, href: "/commercial-industriel" },
        { title: "Bureau", image: bureauImg, href: "/commercial-industriel" },
        { title: "Commercial et industriel", image: commercialImg, href: "/commercial-industriel" }
    ];

    const features = [
        {
            icon: ShieldCheck,
            title: "Fournisseur de confiance",
            description: "Forts d'un héritage d'excellence, nous protégeons la santé de plus de 20 000 foyers canadiens grâce à nos standards de sécurité rigoureux."
        },
        {
            icon: Settings,
            title: "Solutions multiples",
            description: "De l'ingénierie résidentielle précise aux déploiements industriels complexes, nos architectures sur mesure s'adaptent à chaque défi technique."
        },
        {
            icon: Zap,
            title: "Équipe hautement qualifiée",
            description: "Nos maîtres techniciens certifiés déploient une expertise de pointe pour garantir une installation millimétrée et une performance durable."
        },
        {
            icon: Droplets,
            title: "Service pratique",
            description: "Bénéficiez d'une continuité opérationnelle totale grâce à notre conciergerie technique réactive et nos protocoles de maintenance prédictive."
        },
        {
            icon: TrendingUp,
            title: "Rentable",
            description: "Optimisez vos actifs avec nos technologies à haut rendement, conçues pour maximiser votre retour sur investissement et réduire vos coûts énergétiques."
        },
        {
            icon: Leaf,
            title: "Engagés en faveur du développement durable",
            description: "Nous intégrons des systèmes éco-responsables de nouvelle génération pour préserver les ressources hydriques et minimiser l'empreinte écologique."
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            <Header />

            {/* Hero Section */}
            <section className="relative lg:h-[800px] flex flex-col overflow-hidden bg-white">
                {/* 1. Image Section - Overlay on Desktop */}
                <div className="relative lg:absolute lg:inset-0 w-full aspect-[4/3] sm:aspect-video lg:aspect-auto lg:h-full z-0 overflow-hidden">
                    <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent to-white lg:bg-gradient-to-r lg:from-white lg:via-white/70 lg:to-transparent" />
                    <img
                        src={heroImg}
                        alt="Bricareau Water Specialist"
                        className="w-full h-full object-cover object-center"
                    />
                </div>

                {/* 2. Content Section */}
                <div className="container relative z-10 mx-auto px-4 lg:px-12 lg:h-full flex flex-col items-start justify-center pt-20 pb-24 lg:pt-0 lg:pb-0">
                    <div className="max-w-3xl space-y-8 text-left">
                        <div className="space-y-6">
                            <h1 className="mb-6 animate-in fade-in slide-in-from-left duration-1000 tracking-tighter"
                                style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif', fontSize: '50px', lineHeight: '55px' }}>
                                <span className="italic font-light text-[#3d6aab] block">Bricareau,</span>
                                <span className="font-bold text-[#3d6aab] block">votre partenaire d'excellence.</span>
                            </h1>
                            
                            <p className="max-w-xl animate-in fade-in slide-in-from-left duration-1000 delay-100 text-left text-slate-600 text-lg md:text-xl font-light leading-relaxed">
                                Plus de 20 ans d'engagement et 20 000 foyers protégés au Québec. Nous sommes votre allié stratégique pour une gestion de l'eau intelligente, durable et sans compromis.
                            </p>

                            <div className="flex flex-col sm:flex-row items-start gap-8 pt-4">
                                <div className="relative inline-block w-full sm:w-auto group">
                                    <div className="absolute inset-0 border border-[#3d6aab] rounded-[2rem] -translate-x-[5px] translate-y-[5px] transition-transform group-hover:-translate-x-[3px] group-hover:translate-y-[3px]"></div>
                                    <Button
                                        className="relative w-full sm:w-auto bg-[#3d6aab] hover:bg-white hover:text-[#3d6aab] text-white rounded-[2rem] h-[3.25rem] px-8 font-black uppercase tracking-[0.1em] text-[11px] transition-all border-none"
                                        onClick={() => navigate("/consultation")}
                                    >
                                        Planifiez une consultation gratuite
                                    </Button>
                                </div>
                                
                                <div className="relative inline-block w-full sm:w-auto group">
                                    <div className="absolute inset-0 border border-[#3d6aab] rounded-[2rem] -translate-x-[5px] translate-y-[5px] transition-transform group-hover:-translate-x-[3px] group-hover:translate-y-[3px]"></div>
                                    <Button
                                        asChild
                                        className="relative w-full sm:w-auto bg-[#3d6aab] hover:bg-white hover:text-[#3d6aab] text-white rounded-[2rem] h-[3.25rem] px-8 font-black uppercase tracking-[0.1em] text-[11px] transition-all border-none"
                                    >
                                        <a href="tel:18552649328" className="flex items-center justify-center gap-2">
                                            <Phone className="w-5 h-5 flex-shrink-0" />
                                            1-855-264-9328
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Partner Ribbon */}
            <section className="bg-[#3d6aab] py-10 overflow-hidden border-y border-[#3d6aab]/20">
                <div className="w-full relative">
                    <div className="flex w-max animate-marquee gap-16 opacity-60 grayscale hover:opacity-100 transition-opacity duration-700">
                        {/* First Set */}
                        <div className="flex gap-16 items-center px-8">
                        <span className="text-white font-bold text-xl italic whitespace-nowrap">Coréalis Pharma</span>
                            <span className="text-white font-bold text-xl italic whitespace-nowrap">Productions Zinda</span>
                            <span className="text-white font-bold text-xl italic whitespace-nowrap">Ils Pharma</span>
                            <span className="text-white font-bold text-xl italic whitespace-nowrap">Google</span>
                            <span className="text-white font-bold text-xl italic whitespace-nowrap">Kinton Ramen</span>
                            <span className="text-white font-bold text-xl italic whitespace-nowrap">Marriott</span>
                            <span className="text-white font-bold text-xl italic whitespace-nowrap">IKEA</span>
                            <span className="text-white font-bold text-xl italic whitespace-nowrap">Les peintres multicouleurs</span>
                            <span className="text-white font-bold text-xl italic whitespace-nowrap">Imprimerie Stampa Media</span>
                            <span className="text-white font-bold text-xl italic whitespace-nowrap">UPS</span>
                            <span className="text-white font-bold text-xl italic whitespace-nowrap">Biovantek</span>
                        </div>
                        {/* Second Set (Duplicate) */}
                        <div className="flex gap-16 items-center px-8">
                            <span className="text-white font-bold text-xl italic whitespace-nowrap">Coréalis Pharma</span>
                            <span className="text-white font-bold text-xl italic whitespace-nowrap">Productions Zinda</span>
                            <span className="text-white font-bold text-xl italic whitespace-nowrap">Ils Pharma</span>
                            <span className="text-white font-bold text-xl italic whitespace-nowrap">Google</span>
                            <span className="text-white font-bold text-xl italic whitespace-nowrap">Kinton Ramen</span>
                            <span className="text-white font-bold text-xl italic whitespace-nowrap">Marriott</span>
                            <span className="text-white font-bold text-xl italic whitespace-nowrap">IKEA</span>
                            <span className="text-white font-bold text-xl italic whitespace-nowrap">Les peintres multicouleurs</span>
                            <span className="text-white font-bold text-xl italic whitespace-nowrap">Imprimerie Stampa Media</span>
                            <span className="text-white font-bold text-xl italic whitespace-nowrap">UPS</span>
                            <span className="text-white font-bold text-xl italic whitespace-nowrap">Biovantek</span>

                        </div>
                    </div>
                </div>
            </section>

            {/* Sectors Section */}
            <section className="py-24 bg-[#f8fafc]">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-black text-center text-[#0f172a] mb-16 uppercase tracking-tight">Secteurs d'activité que nous desservons</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {sectors.map((sector, index) => (
                            <div key={index} className="group relative overflow-hidden rounded-[2rem] shadow-xl hover:shadow-2xl transition-all duration-500 bg-white aspect-[3/4]">
                                <img
                                    src={sector.image}
                                    alt={sector.title}
                                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-x-0 bottom-0 p-8 pt-20 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                                    <h3 className="text-white font-bold text-xl mb-4 leading-tight">{sector.title}</h3>
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        className="rounded-full bg-white border-none w-10 h-10 group-hover:bg-[#3d6aab] group-hover:text-white transition-colors"
                                        onClick={() => navigate(sector.href)}
                                    >
                                        <ChevronRight className="w-5 h-5" />
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-24 bg-white overflow-hidden relative">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <span className="text-[#3d6aab] font-bold text-xs uppercase tracking-[0.3em] mb-4 block">Notre Expertise</span>
                        <h2 className="text-5xl font-black text-[#0f172a] mb-6 leading-tight">Découvrez la différence Bricareau</h2>
                        <p className="text-slate-600 text-lg sm:text-xl font-light leading-relaxed max-w-2xl mx-auto">
                            Découvrez une fusion unique entre technologie de pointe et expertise humaine.
                            Nous concevons des écosystèmes hydriques intelligents pour protéger votre santé
                            et garantir une pureté absolue à chaque goutte, pour aujourd'hui et pour demain.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
                        {features.map((feature, index) => (
                            <div key={index} className="flex flex-col items-center text-center p-8 rounded-3xl hover:bg-slate-50 transition-all group border border-transparent hover:border-slate-100 shadow-sm hover:shadow-md h-full">
                                <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-8 group-hover:bg-[#3d6aab] transition-colors shadow-sm">
                                    <feature.icon className="w-8 h-8 text-[#3d6aab] group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold text-[#0f172a] mb-4 min-h-[3.5rem] flex items-center justify-center">{feature.title}</h3>
                                <p className="text-slate-600 leading-relaxed font-medium text-sm flex-1">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-20">
                        <div className="relative inline-block w-full sm:w-auto group">
                            <div className="absolute inset-0 border border-[#3d6aab] rounded-[2rem] -translate-x-[5px] translate-y-[5px] transition-transform group-hover:-translate-x-[3px] group-hover:translate-y-[3px]"></div>
                            <Button
                                className="relative w-full sm:w-auto bg-[#3d6aab] hover:bg-white hover:text-[#3d6aab] text-white rounded-[2rem] h-[3.25rem] px-10 font-black uppercase tracking-widest text-[11px] transition-all border-none"
                                onClick={() => navigate("/pourquoi-choisir-bricareau")}
                            >
                                Pourquoi nous choisir ?
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Solution Finder Section */}
            <section className="py-16 sm:py-20 bg-[#3d6aab]">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="flex flex-col gap-6">
                        <div className="text-left mb-2">
                            <h2 className="text-[1.7rem] font-bold text-white mb-2 leading-tight tracking-[0.02em]">Trouver une solution</h2>
                            <p className="text-slate-300 text-[13px] font-normal tracking-wide">Vous savez ce que vous cherchez ? Laissez-nous vous aider à trouver la solution qui vous convient.</p>
                        </div>
                        <div className="flex flex-col md:flex-row gap-6 items-center w-full">
                            <div className="flex-1 w-full">
                                <select
                                    className="w-full bg-white border-none rounded-sm h-[3.25rem] px-5 text-slate-700 text-sm font-medium appearance-none outline-none focus:ring-2 focus:ring-[#7595b3] cursor-pointer bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23131313%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:9px_9px] bg-[position:right_1.25rem_center] bg-no-repeat pr-10"
                                    value={selectedCategory}
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                >
                                    <option>Résidentiel</option>
                                    <option>Hôtellerie et restauration</option>
                                    <option>Bureau</option>
                                    <option>Commercial & Industriel</option>
                                </select>
                            </div>
                            <div className="flex-1 w-full">
                                <select
                                    className="w-full bg-white border-none rounded-sm h-[3.25rem] px-5 text-slate-700 text-sm font-medium appearance-none outline-none focus:ring-2 focus:ring-[#7595b3] cursor-pointer bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23131313%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:9px_9px] bg-[position:right_1.25rem_center] bg-no-repeat pr-10"
                                    value={selectedProduit}
                                    onChange={(e) => setSelectedProduit(e.target.value)}
                                >
                                    <option value="" disabled hidden>Sélectionner le programme</option>
                                    {optionsParCategorie[selectedCategory]?.map((opt, idx) => (
                                        <option key={idx} value={opt}>{opt}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="flex-none w-full md:w-auto mt-2 md:mt-0 pl-1 pb-1 pt-1">
                                <div className="relative inline-block w-full md:w-auto group">
                                    <div className="absolute inset-0 border border-white rounded-[2rem] -translate-x-[5px] translate-y-[5px] transition-transform group-hover:-translate-x-[3px] group-hover:translate-y-[3px]"></div>
                                    <Button
                                        className="relative w-full md:w-auto bg-white hover:bg-[#3d6aab] text-[#3d6aab] hover:text-white rounded-[2rem] h-[3.25rem] px-8 font-black uppercase tracking-[0.1em] text-[11px] transition-all border-none"
                                        onClick={() => navigate(productRouteMap[selectedProduit] || "/contact")}
                                    >
                                        PARCOURIR NOS SOLUTIONS
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Case Study Section */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 lg:mb-16 gap-8">
                        <div className="max-w-2xl">
                            <span className="text-slate-600 font-bold text-[10px] sm:text-xs uppercase tracking-[0.2em] block mb-4">Témoignages de réussite de nos partenaires</span>
                            <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-black text-[#0f172a] leading-[1.1] tracking-tight">
                                Comment nos partenaires trouvent d'excellentes solutions avec Bricareau.
                            </h2>
                        </div>
                    </div>

                    <div className="relative mt-12 pb-20">
                        {/* Dot Pattern Background */}
                        <div
                            className="absolute top-0 left-0 w-80 h-80 opacity-50 -translate-x-12 -translate-y-12 z-0"
                            style={{ backgroundImage: 'radial-gradient(#3d6aab 2px, transparent 2px)', backgroundSize: '12px 12px' }}
                        />

                        <div className="flex flex-col lg:flex-row relative">
                            {/* White Focus Card */}
                            <div className="relative z-10 w-full lg:w-[55%] pt-8 lg:pt-20 lg:pr-12">
                                <div className="bg-white px-8 py-12 sm:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-50 relative">
                                    <div className="flex gap-4 font-black text-slate-400 mb-8 items-center text-sm">
                                        <button
                                            className="hover:text-slate-900 transition-colors disabled:opacity-30"
                                            onClick={() => setTestiIndex(p => Math.max(0, p - 1))}
                                            disabled={testiIndex === 0}
                                        >
                                            &lt;
                                        </button>
                                        <span key={`count-${testiIndex}`} className="text-slate-900 tracking-widest">{testiIndex + 1} / {caseStudyTestimonials.length}</span>
                                        <button
                                            className="hover:text-slate-900 transition-colors disabled:opacity-30"
                                            onClick={() => setTestiIndex(p => Math.min(caseStudyTestimonials.length - 1, p + 1))}
                                            disabled={testiIndex === caseStudyTestimonials.length - 1}
                                        >
                                            &gt;
                                        </button>
                                    </div>
                                    <div className="min-h-[200px] sm:min-h-[160px] md:min-h-[180px] lg:min-h-[200px] flex items-center mb-12">
                                        <p key={`text-${testiIndex}`} className="text-2xl sm:text-3xl font-light text-[#0f172a] italic leading-[1.6]">
                                            "{caseStudyTestimonials[testiIndex].text}"
                                        </p>
                                    </div>
                                    <div className="mb-12">
                                        <p className="font-black text-[#0f172a] mb-2">{caseStudyTestimonials[testiIndex].name}</p>
                                        <div className="flex gap-1">
                                            {[...Array(caseStudyTestimonials[testiIndex].rating)].map((_, i) => (
                                                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-10 border-t border-slate-200/60 gap-8">
                                        <div className="flex flex-col items-start">
                                            <span className="font-black tracking-[0.2em] text-[#0f172a] text-xs uppercase">CLIENTS SATISFAITS</span>
                                            <span className="text-[9px] uppercase font-bold text-slate-400 tracking-widest mt-1">PARTOUT AU QUÉBEC</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Image Background */}
                            <div className="w-full lg:w-[65%] lg:absolute lg:top-0 lg:right-0 lg:h-[600px] z-0 mt-8 lg:mt-0">
                                <div className="w-full h-[400px] lg:h-full overflow-hidden bg-slate-100 flex relative">
                                    <img src={partnerImg} alt="Water solution" className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-blue-900/5 mix-blend-multiply" />
                                </div>
                            </div>
                        </div>

                        {/* Circular Badge */}
                        <div className="absolute right-4 sm:right-12 lg:right-24 bottom-16 sm:bottom-12 z-20">
                            <div className="relative w-32 h-32 flex items-center justify-center animate-[spin_15s_linear_infinite] bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-2xl">
                                <svg viewBox="0 0 100 100" className="w-full h-full absolute inset-0 text-[#3d6aab] font-sans overflow-visible">
                                    <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="none" />
                                    <text fontSize="8.5" fontWeight="900" letterSpacing="0.16em" fill="currentcolor">
                                        <textPath href="#circlePath" startOffset="0%" textAnchor="start">
                                            VOTRE PARTENAIRE VERS LE SUCCÈS •
                                        </textPath>
                                    </text>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* Footer CTA */}
            <section className="py-32 relative overflow-hidden">
                <img src={waterWaveImg} alt="Water texture" className="absolute inset-0 w-full h-full object-cover grayscale opacity-20" />
                <div className="absolute inset-0 bg-blue-50/80" />
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h2 className="text-6xl font-black text-[#0f172a] mb-12 max-w-4xl mx-auto leading-tight uppercase tracking-tighter">Laissez-nous vous aider à trouver la solution adaptée.</h2>
                    <div className="relative inline-block group">
                        <div className="absolute inset-0 border border-[#3d6aab] rounded-[2rem] -translate-x-[5px] translate-y-[5px] transition-transform group-hover:-translate-x-[3px] group-hover:translate-y-[3px]"></div>
                        <Button
                            className="relative bg-[#3d6aab] hover:bg-white hover:text-[#3d6aab] text-white rounded-[2rem] px-12 h-16 font-black uppercase tracking-widest text-xs transition-all border-none"
                            onClick={() => navigate("/consultation")}
                        >
                            NOUS JOINDRE
                        </Button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Home1;
